import { Component, Suspense, type ReactNode } from 'react';
import { RefreshCw } from 'lucide-react';
import { CalculatorSkeleton } from './CalculatorSkeleton';

interface State {
    failed: boolean;
}

/**
 * Catches a failed lazy chunk.
 *
 * Without this, a rejected dynamic import leaves Suspense pending forever and
 * the page shows "Loading..." with no way out — which is exactly what happens
 * when a visitor holds a cached index.html that points at chunk filenames a
 * newer deploy has already removed.
 */
export class LazyCalculator extends Component<{ children: ReactNode }, State> {
    state: State = { failed: false };

    static getDerivedStateFromError(): State {
        return { failed: true };
    }

    render() {
        if (this.state.failed) {
            return (
                <div className="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-900/10 p-6 text-center">
                    <p className="font-semibold text-slate-900 dark:text-white">This calculator didn't load</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        Usually a stale cached copy of the site. Reloading picks up the current version.
                    </p>
                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"
                    >
                        <RefreshCw size={15} />
                        Reload
                    </button>
                </div>
            );
        }

        return <Suspense fallback={<CalculatorSkeleton />}>{this.props.children}</Suspense>;
    }
}
