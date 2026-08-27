/**
 * Single source of truth for the public origin.
 *
 * Anything that ends up in copy-paste embed code, canonical URLs, structured
 * data or outbound links must build its URLs from here — hardcoding the domain
 * per-file is how the widget embed snippet ended up pointing at the wrong TLD.
 */
export const SITE_URL = 'https://calcsuite.in';
export const SITE_NAME = 'CalcSuite';

/** Absolute URL for a site-relative path, e.g. absoluteUrl('/calculator/bmi/'). */
export function absoluteUrl(path: string): string {
    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Public URL of the embeddable widget runtime. */
export const WIDGET_SCRIPT_URL = `${SITE_URL}/widget.js`;
