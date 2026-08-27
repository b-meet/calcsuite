import React from 'react';
import { createRoot } from 'react-dom/client';
import WidgetApp from './WidgetApp';
import styleString from './styles.css?inline';
import { SITE_URL } from '../config/site';
import type { WidgetAppearance } from './appearance';
import { DEFAULT_APPEARANCE, readAppearance } from './appearance';

const WIDGET_ID = 'calcsuite-widget-root';
const CREDIT_CLASS = 'calcsuite-credit';
const CREDIT_HOST = new URL(SITE_URL).hostname;

/**
 * A credit block counts as intact only if it is present, actually visible, and
 * still carries a followable link to us. Anything else — deleted, display:none,
 * faded out, rel="nofollow" — is treated as missing and rebuilt.
 */
function creditIsIntact(element: Element | null): boolean {
    if (!(element instanceof HTMLElement) || !element.isConnected) return false;

    const links = Array.from(element.querySelectorAll('a'));
    const ours = links.find((a) => {
        try {
            return new URL(a.href, window.location.href).hostname.endsWith(CREDIT_HOST);
        } catch {
            return false;
        }
    });
    if (!ours) return false;
    if (ours.rel.toLowerCase().includes('nofollow')) return false;

    const style = window.getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    if (Number.parseFloat(style.opacity || '1') < 0.4) return false;
    if (element.offsetParent === null && style.position !== 'fixed') return false;

    return true;
}

function buildCredit(calculatorType: string, label: string): HTMLElement {
    const paragraph = document.createElement('p');
    paragraph.className = CREDIT_CLASS;
    // Inline styles rather than a class, so host CSS cannot quietly hide it.
    paragraph.setAttribute(
        'style',
        'display:block!important;visibility:visible!important;opacity:1!important;' +
        'font-size:12px;line-height:1.6;text-align:center;margin:6px 0 0;padding:0;height:auto;'
    );

    const tool = document.createElement('a');
    tool.href = `${SITE_URL}/calculator/${encodeURIComponent(calculatorType)}/`;
    tool.target = '_blank';
    tool.rel = 'noopener';
    tool.title = `${label} by CalcSuite`;
    tool.textContent = label;

    const brand = document.createElement('a');
    brand.href = `${SITE_URL}/`;
    brand.target = '_blank';
    brand.rel = 'noopener';
    brand.title = 'CalcSuite - Free Online Calculators';
    brand.textContent = 'CalcSuite';

    paragraph.append(tool, document.createTextNode(' powered by '), brand);
    return paragraph;
}

/**
 * Keeps the attribution link alive next to the widget.
 *
 * The embed snippet ships the credit as static HTML because that is the version
 * search engines index most reliably. This is the backstop: if it never got
 * pasted, or gets stripped or hidden later, we re-insert a working one into the
 * light DOM. A MutationObserver on the parent re-checks after page scripts run.
 */
function ensureCredit(container: HTMLElement, calculatorType: string, label: string) {
    const parent = container.parentElement;
    if (!parent) return;

    const repair = () => {
        const existing = parent.querySelector(`.${CREDIT_CLASS}`);
        if (creditIsIntact(existing)) return;
        existing?.remove();
        container.insertAdjacentElement('afterend', buildCredit(calculatorType, label));
    };

    repair();

    const observer = new MutationObserver(repair);
    observer.observe(parent, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class', 'rel'] });
}

/** Maps the appearance settings onto CSS variables the widget's styles read. */
function applyAppearance(host: HTMLElement, root: HTMLElement, appearance: WidgetAppearance) {
    root.style.setProperty('--calcsuite-font-size', `${appearance.fontSize}px`);
    root.style.setProperty('--calcsuite-padding', `${appearance.padding}px`);
    root.style.setProperty('--calcsuite-radius', `${appearance.radius}px`);
    if (appearance.maxWidth) {
        host.style.maxWidth = `${appearance.maxWidth}px`;
        host.style.width = '100%';
    }
    host.style.display = 'block';
}

function init() {
    const containers = document.querySelectorAll<HTMLElement>('.calcsuite-widget');

    containers.forEach((container) => {
        if (container.shadowRoot) return; // Already initialized

        const shadow = container.attachShadow({ mode: 'open' });
        const rootElement = document.createElement('div');
        rootElement.id = WIDGET_ID;
        shadow.appendChild(rootElement);

        const styleElement = document.createElement('style');
        styleElement.textContent = styleString;
        shadow.appendChild(styleElement);

        const type = container.dataset.type || 'bmi';
        const appearance = readAppearance(container.dataset) ?? DEFAULT_APPEARANCE;
        const branding = container.dataset.branding !== 'false';

        applyAppearance(container, rootElement, appearance);

        const root = createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <WidgetApp calculatorType={type} appearance={appearance} showBrand={branding} />
            </React.StrictMode>
        );

        // Independent of `data-branding`: hiding the in-widget footer is a
        // styling choice, dropping the backlink is not.
        ensureCredit(container, type, container.dataset.label || 'Calculator');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
