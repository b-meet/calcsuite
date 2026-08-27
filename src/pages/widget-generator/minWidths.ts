/**
 * Narrowest column each calculator renders cleanly in, in px.
 *
 * These are measured, not estimated: every calculator was rendered in the
 * preview at 320 / 375 / 480px and checked for horizontal overflow. Anything
 * not listed here cleared 320px, which is the narrowest sidebar we model.
 *
 * Re-measure after changing a calculator's layout — a stale number here shows
 * an embedder a placement that will overflow on their page.
 */
export const CALCULATOR_MIN_WIDTH: Record<string, number> = {
    // Overflow at 375px, clean at 480px.
    tip: 480,
    bmr: 480,
    // Overflow at 320px, clean at 375px.
    'compound-interest': 375,
    'simple-interest': 375,
    sip: 375,
    'india-salary': 375,
    'india-tax': 375,
    'india-ppf': 375,
};

export const DEFAULT_MIN_WIDTH = 320;

export function minWidthFor(calculatorId: string): number {
    return CALCULATOR_MIN_WIDTH[calculatorId] ?? DEFAULT_MIN_WIDTH;
}
