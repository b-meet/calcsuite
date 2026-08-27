import { useMemo, useState } from 'react';
import {
    ShareableResultContext,
    type ShareableResult,
} from '../hooks/useShareableResult';

export function ShareableResultProvider({ children }: { children: React.ReactNode }) {
    const [result, setResult] = useState<ShareableResult | null>(null);
    const value = useMemo(() => ({ result, publish: setResult }), [result]);
    return <ShareableResultContext.Provider value={value}>{children}</ShareableResultContext.Provider>;
}
