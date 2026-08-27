export interface WidgetAppearance {
    theme: 'light' | 'dark';
    fontSize: number;
    padding: number;
    radius: number;
    border: boolean;
    shadow: boolean;
    maxWidth: number | null;
}

export const DEFAULT_APPEARANCE: WidgetAppearance = {
    theme: 'light',
    fontSize: 15,
    padding: 20,
    radius: 14,
    border: true,
    shadow: false,
    maxWidth: null,
};

function clampNumber(raw: string | undefined, min: number, max: number, fallback: number): number {
    const value = Number.parseFloat(raw ?? '');
    if (!Number.isFinite(value)) return fallback;
    return Math.min(max, Math.max(min, value));
}

function readBoolean(raw: string | undefined, fallback: boolean): boolean {
    if (raw === undefined) return fallback;
    return raw !== 'false';
}

/** Parses the data-* attributes the embed snippet carries. Bad values fall back. */
export function readAppearance(dataset: DOMStringMap): WidgetAppearance {
    const maxWidthRaw = Number.parseFloat(dataset.maxWidth ?? '');
    return {
        theme: dataset.theme === 'dark' ? 'dark' : 'light',
        fontSize: clampNumber(dataset.fontSize, 11, 22, DEFAULT_APPEARANCE.fontSize),
        padding: clampNumber(dataset.padding, 0, 48, DEFAULT_APPEARANCE.padding),
        radius: clampNumber(dataset.radius, 0, 32, DEFAULT_APPEARANCE.radius),
        border: readBoolean(dataset.border, DEFAULT_APPEARANCE.border),
        shadow: readBoolean(dataset.shadow, DEFAULT_APPEARANCE.shadow),
        maxWidth: Number.isFinite(maxWidthRaw) && maxWidthRaw > 0 ? maxWidthRaw : null,
    };
}
