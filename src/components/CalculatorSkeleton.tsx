/**
 * Placeholder shaped like a calculator, so the page keeps its layout while the
 * chunk arrives instead of collapsing to a bare "Loading...".
 */
export function CalculatorSkeleton() {
    return (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4" aria-hidden="true">
            <div className="h-4 w-32 rounded bg-slate-200/90 dark:bg-slate-700/50" />
            <div className="h-11 w-full rounded-xl bg-slate-200/90 dark:bg-slate-700/50" />
            <div className="h-4 w-28 rounded bg-slate-200/90 dark:bg-slate-700/50" />
            <div className="h-11 w-full rounded-xl bg-slate-200/90 dark:bg-slate-700/50" />
            <div className="h-12 w-full rounded-xl bg-slate-200/70 dark:bg-slate-700/40" />
        </div>
    );
}
