import type { LucideIcon } from 'lucide-react';
import type { CalculatorCategory } from '../../calculators/registry';

/** Where on the host page the embed is going to sit. Drives the preview mock. */
export type Placement = 'article' | 'end' | 'aside';

export interface PlacementDef {
    id: Placement;
    label: string;
    hint: string;
    /** Width the widget gets in this slot, as it would be on a real page. */
    maxWidth: number;
}

export const PLACEMENTS: PlacementDef[] = [
    { id: 'article', label: 'In article', hint: 'Mid-post, between paragraphs', maxWidth: 680 },
    { id: 'end', label: 'End of page', hint: 'Below the content, above the footer', maxWidth: 760 },
    { id: 'aside', label: 'Sidebar', hint: 'Narrow column beside the content', maxWidth: 320 },
];

/** The knobs an embedder gets over how the widget looks. */
export interface Appearance {
    theme: 'light' | 'dark';
    fontSize: number;
    padding: number;
    radius: number;
    border: boolean;
    shadow: boolean;
}

export const DEFAULT_APPEARANCE: Appearance = {
    theme: 'light',
    fontSize: 15,
    padding: 20,
    radius: 14,
    border: true,
    shadow: false,
};

export interface CalculatorOption {
    id: string;
    /** Short human name, used as the credit link's anchor text. */
    name: string;
    /** Full registry title, shown as secondary text in the picker. */
    fullName: string;
    category: CalculatorCategory;
    icon: LucideIcon;
}

/**
 * Registry names are long SEO titles ("Basic Calculator - Free Online ...").
 * Everything user-facing wants the short, human half.
 */
export function shortCalculatorName(name: string): string {
    return name.split(/\s+[-–—:|]\s+/)[0].trim();
}
