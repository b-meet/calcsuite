/**
 * Encodes a calculator's inputs into a shareable URL parameter.
 *
 * Base64url of JSON, kept short enough that the resulting link survives being
 * pasted into WhatsApp or a tweet. Anything oversized returns null and the
 * caller falls back to a plain calculator link rather than a truncated one.
 */
const MAX_ENCODED_JSON = 1200;

export const RESULT_PARAM = 'r';

export function encodeResultState(inputs: Record<string, unknown>): string | null {
    try {
        const json = JSON.stringify(inputs);
        if (!json || json.length > MAX_ENCODED_JSON) return null;

        const bytes = new TextEncoder().encode(json);
        let binary = '';
        bytes.forEach((b) => { binary += String.fromCharCode(b); });

        return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch {
        return null;
    }
}

export function decodeResultState(encoded: string | null | undefined): Record<string, unknown> | null {
    if (!encoded) return null;
    try {
        const padded = encoded.replace(/-/g, '+').replace(/_/g, '/');
        const binary = atob(padded + '='.repeat((4 - (padded.length % 4)) % 4));
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        const parsed = JSON.parse(new TextDecoder().decode(bytes));

        // Only plain objects are usable as calculator state.
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
        return parsed as Record<string, unknown>;
    } catch {
        // A hand-edited or truncated link should open the calculator, not crash it.
        return null;
    }
}

/** Turns a history entry's result into a short, human sentence for the share text. */
export function describeResult(result: unknown, label?: string): string | null {
    if (label && typeof label === 'string') return label;
    if (result === null || result === undefined) return null;
    if (typeof result === 'string' || typeof result === 'number') return String(result);
    return null;
}
