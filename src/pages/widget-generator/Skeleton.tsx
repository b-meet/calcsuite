import { cn } from '../../utils/cn';

/**
 * Deliberately static placeholder blocks — no pulse or shimmer. These stand in
 * for the host page's own content, so animating them would read as "loading"
 * and pull attention away from the widget being previewed.
 */
export function SkeletonLine({ className }: { className?: string }) {
    return <div className={cn('h-2.5 rounded-full bg-slate-200/90 dark:bg-slate-700/50', className)} />;
}

export function SkeletonBlock({ className }: { className?: string }) {
    return <div className={cn('rounded-lg bg-slate-200/90 dark:bg-slate-700/50', className)} />;
}

const PARAGRAPH_WIDTHS = [
    ['w-full', 'w-[97%]', 'w-full', 'w-[88%]'],
    ['w-[95%]', 'w-full', 'w-[92%]', 'w-[64%]'],
    ['w-full', 'w-[90%]', 'w-[97%]', 'w-[72%]'],
];

export function SkeletonParagraph({ variant = 0, lines }: { variant?: number; lines?: number }) {
    const widths = PARAGRAPH_WIDTHS[variant % PARAGRAPH_WIDTHS.length];
    const count = lines ?? widths.length;
    return (
        <div className="space-y-2.5">
            {Array.from({ length: count }, (_, i) => (
                <SkeletonLine key={i} className={widths[i % widths.length]} />
            ))}
        </div>
    );
}
