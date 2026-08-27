import React from 'react';
import { createRoot } from 'react-dom/client';
import WidgetApp from './WidgetApp';
import CreditRemoved from './CreditRemoved';
import styleString from './styles.css?inline';
import { SITE_URL } from '../config/site';
import type { WidgetAppearance } from './appearance';
import { DEFAULT_APPEARANCE, readAppearance } from './appearance';

const WIDGET_ID = 'calcsuite-widget-root';
const CREDIT_CLASS = 'calcsuite-credit';
const CREDIT_HOST = new URL(SITE_URL).hostname;

/**
 * A credit block counts as intact only if it is present, visible, and still
 * links to us. Anything else — deleted, display:none, faded out, pointed at
 * another domain — is treated as missing and rebuilt.
 *
 * The rel value is deliberately not checked. Our own links ship as
 * rel="nofollow" (Google treats widget links distributed at scale as a link
 * scheme), so rejecting nofollow here would make the guard fight its own
 * output: rebuild, see nofollow, rebuild again, hit MAX_REPAIRS, and disable
 * the widget on every site that embeds it. A host that chooses to make the
 * link dofollow editorially is fine and left alone.
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
    tool.rel = 'nofollow noopener';
    tool.title = `${label} by CalcSuite`;
    tool.textContent = label;

    const brand = document.createElement('a');
    brand.href = `${SITE_URL}/`;
    brand.target = '_blank';
    brand.rel = 'nofollow noopener';
    brand.title = 'CalcSuite - Free Online Calculators';
    brand.textContent = 'CalcSuite';

    paragraph.append(tool, document.createTextNode(' powered by '), brand);
    return paragraph;
}

/**
 * Rebuilds the credit if it is missing, hidden or de-followed.
 * Returns whether an intact credit exists once we are done.
 */
function repairCredit(container: HTMLElement, calculatorType: string, label: string): boolean {
    const parent = container.parentElement;
    if (!parent) return false;

    const existing = parent.querySelector(`.${CREDIT_CLASS}`);
    if (creditIsIntact(existing)) return true;

    existing?.remove();
    const fresh = buildCredit(calculatorType, label);
    container.insertAdjacentElement('afterend', fresh);
    return creditIsIntact(fresh);
}

/** More rebuilds than this in the window means something is deleting it on a loop. */
const MAX_REPAIRS = 5;
const REPAIR_WINDOW_MS = 10_000;

/**
 * Makes the attribution link load-bearing.
 *
 * The embed snippet ships the credit as static HTML, because that is the
 * version search engines see most reliably. If it is edited out, hidden or
 * repointed at another domain we rebuild it into the light DOM. If it cannot
 * be kept intact the calculator is replaced with a notice: no credit, no
 * widget.
 *
 * Giving up is not optional politeness — a host script that strips the credit
 * on every mutation would otherwise ping-pong with this observer forever and
 * peg the page's main thread. Past MAX_REPAIRS we stop repairing, disconnect,
 * and leave the widget disabled.
 */
function guardCredit(
    container: HTMLElement,
    calculatorType: string,
    label: string,
    onChange: (allowed: boolean) => void
) {
    const parent = container.parentElement;
    if (!parent) return;

    let allowed: boolean | null = null;
    let gaveUp = false;
    let repairs = 0;
    let windowStartedAt = Date.now();

    const publish = (next: boolean) => {
        if (next === allowed) return;
        allowed = next;
        onChange(next);
    };

    const evaluate = () => {
        if (gaveUp) return;

        if (creditIsIntact(parent.querySelector(`.${CREDIT_CLASS}`))) {
            publish(true);
            return;
        }

        const now = Date.now();
        if (now - windowStartedAt > REPAIR_WINDOW_MS) {
            repairs = 0;
            windowStartedAt = now;
        }
        repairs += 1;

        if (repairs > MAX_REPAIRS) {
            gaveUp = true;
            observer.disconnect();
            publish(false);
            return;
        }

        publish(repairCredit(container, calculatorType, label));
    };

    const observer = new MutationObserver(evaluate);

    evaluate();

    if (!gaveUp) {
        observer.observe(parent, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class', 'rel', 'href'],
        });
    }
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
        const label = container.dataset.label || 'Calculator';

        // Independent of `data-branding`: hiding the in-widget footer is a
        // styling choice, dropping the backlink is not. The guard renders the
        // calculator only while an intact credit is on the page.
        guardCredit(container, type, label, (allowed) => {
            root.render(
                <React.StrictMode>
                    {allowed
                        ? <WidgetApp calculatorType={type} appearance={appearance} showBrand={branding} />
                        : <CreditRemoved calculatorType={type} />}
                </React.StrictMode>
            );
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
