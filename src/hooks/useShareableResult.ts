import { createContext, useContext, useEffect } from 'react';

export interface ShareableResult {
    /** Inputs sufficient to reproduce the calculation, encoded into the share URL. */
    inputs: Record<string, unknown>;
    /** One short human-readable line, e.g. "₹45,321/mo". */
    summary: string;
}

export interface ShareableResultContextValue {
    result: ShareableResult | null;
    publish: (result: ShareableResult | null) => void;
}

export const ShareableResultContext = createContext<ShareableResultContextValue>({
    result: null,
    publish: () => {},
});

/**
 * Publishes the calculator's live result so the share rail can offer a link to
 * it. Calculators opt in with one call; anything that has not opted in simply
 * shows no result-share option rather than showing a broken one.
 *
 * Pass null while the inputs are incomplete, so a half-filled form never
 * produces a shareable "result".
 */
export function useShareableResult(result: ShareableResult | null) {
    const { publish } = useContext(ShareableResultContext);
    // Serialising keeps the effect from re-firing on every parent render, which
    // object identity alone would cause.
    const serialised = result ? JSON.stringify(result) : null;

    useEffect(() => {
        publish(serialised ? (JSON.parse(serialised) as ShareableResult) : null);
    }, [serialised, publish]);

    useEffect(() => () => publish(null), [publish]);
}

export function useCurrentShareableResult() {
    return useContext(ShareableResultContext).result;
}
