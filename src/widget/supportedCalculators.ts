/**
 * Calculator ids the embeddable widget bundle can actually render.
 *
 * Ids only — no component imports — so the main app can read this list without
 * pulling the widget's calculators into its bundle. WidgetApp's switch must
 * cover exactly these ids; anything else falls through to its "not available
 * as an embed yet" branch.
 *
 * The generator lets people preview and configure every calculator, but marks
 * the ones missing from this list, so nobody copies an embed that will not
 * render on their page. Add an id here only once the widget bundle renders it.
 */
export const WIDGET_SUPPORTED_CALCULATORS: readonly string[] = ['bmi'];

export function isEmbeddable(calculatorId: string): boolean {
    return WIDGET_SUPPORTED_CALCULATORS.includes(calculatorId);
}
