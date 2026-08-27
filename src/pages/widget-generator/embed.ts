import { SITE_URL, WIDGET_SCRIPT_URL } from '../../config/site';
import type { Appearance, Placement } from './types';
import { DEFAULT_APPEARANCE, PLACEMENTS } from './types';

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export interface EmbedInput {
    calculatorId: string;
    calculatorName: string;
    placement: Placement;
    appearance: Appearance;
}

export function calculatorUrlFor(calculatorId: string): string {
    return `${SITE_URL}/calculator/${calculatorId}/`;
}

/**
 * Only emit attributes that differ from the runtime defaults, so the snippet
 * an embedder pastes stays as short as it can be.
 */
function appearanceAttributes(appearance: Appearance): string[] {
    const attrs: string[] = [];
    if (appearance.theme !== DEFAULT_APPEARANCE.theme) attrs.push(`data-theme="${appearance.theme}"`);
    if (appearance.fontSize !== DEFAULT_APPEARANCE.fontSize) attrs.push(`data-font-size="${appearance.fontSize}"`);
    if (appearance.padding !== DEFAULT_APPEARANCE.padding) attrs.push(`data-padding="${appearance.padding}"`);
    if (appearance.radius !== DEFAULT_APPEARANCE.radius) attrs.push(`data-radius="${appearance.radius}"`);
    if (appearance.border !== DEFAULT_APPEARANCE.border) attrs.push(`data-border="${appearance.border}"`);
    if (appearance.shadow !== DEFAULT_APPEARANCE.shadow) attrs.push(`data-shadow="${appearance.shadow}"`);
    return attrs;
}

/**
 * Builds the single block an embedder copies.
 *
 * The credit paragraph ships inside the snippet on purpose: static markup in
 * the host page's source is what search engines see most reliably, since the
 * calculator itself renders into a Shadow DOM after JS runs. If it is edited
 * out, widget.js re-inserts it at runtime — see guardCredit() in
 * src/widget/index.tsx — so the credit survives either way.
 *
 * Both anchors carry rel="nofollow". Google's link-scheme guidance treats
 * keyword links distributed through a widget at volume as link building rather
 * than editorial endorsement, and the credit is here for referral traffic and
 * brand exposure, which nofollow does not affect.
 */
export function buildEmbedCode({ calculatorId, calculatorName, placement, appearance }: EmbedInput): string {
    const slot = PLACEMENTS.find(p => p.id === placement) ?? PLACEMENTS[0];
    const attrs = [
        `class="calcsuite-widget"`,
        `data-type="${escapeHtml(calculatorId)}"`,
        // Anchor text for the credit link widget.js rebuilds if the static one
        // below is removed; without it the fallback link says "Calculator".
        `data-label="${escapeHtml(calculatorName)}"`,
        ...appearanceAttributes(appearance),
        `data-max-width="${slot.maxWidth}"`,
    ];

    const anchor = escapeHtml(calculatorName);
    const title = escapeHtml(`${calculatorName} by CalcSuite`);

    return [
        `<div ${attrs.join(' ')}></div>`,
        `<p class="calcsuite-credit"><a href="${calculatorUrlFor(calculatorId)}" title="${title}" target="_blank" rel="nofollow noopener">${anchor}</a> powered by <a href="${SITE_URL}/" title="CalcSuite - Free Online Calculators" target="_blank" rel="nofollow noopener">CalcSuite</a></p>`,
        `<script async src="${WIDGET_SCRIPT_URL}"></script>`,
    ].join('\n');
}

/** Minimal token stream so the snippet can be syntax-highlighted without a library. */
export type CodeToken = { text: string; kind: 'tag' | 'attr' | 'value' | 'text' | 'punct' };

export function tokenizeHtml(code: string): CodeToken[] {
    const tokens: CodeToken[] = [];
    // Splits into tags and the text between them; inside a tag, name/attr/value.
    const tagPattern = /<\/?[a-zA-Z][^>]*>/g;
    let last = 0;
    let match: RegExpExecArray | null;

    const pushText = (text: string) => {
        if (text) tokens.push({ text, kind: 'text' });
    };

    while ((match = tagPattern.exec(code))) {
        pushText(code.slice(last, match.index));
        const tag = match[0];
        const inner = /^(<\/?)([a-zA-Z][\w-]*)([\s\S]*?)(\/?>)$/.exec(tag);
        if (!inner) {
            tokens.push({ text: tag, kind: 'tag' });
        } else {
            const [, open, name, body, close] = inner;
            tokens.push({ text: open, kind: 'punct' });
            tokens.push({ text: name, kind: 'tag' });
            // Three alternatives: name="value", a valueless attribute such as
            // `async`, then whitespace. The bare-attribute branch matters —
            // without it `async` matched nothing and was dropped from the
            // rendered snippet while still being present in the copied one.
            const attrPattern = /([\w-]+)=("[^"]*")|([\w-]+)|(\s+)/g;
            let am: RegExpExecArray | null;
            while ((am = attrPattern.exec(body))) {
                if (am[4]) {
                    tokens.push({ text: am[4], kind: 'text' });
                } else if (am[3]) {
                    tokens.push({ text: am[3], kind: 'attr' });
                } else {
                    tokens.push({ text: am[1], kind: 'attr' });
                    tokens.push({ text: '=', kind: 'punct' });
                    tokens.push({ text: am[2], kind: 'value' });
                }
            }
            tokens.push({ text: close, kind: 'punct' });
        }
        last = match.index + tag.length;
    }
    pushText(code.slice(last));
    return tokens;
}
