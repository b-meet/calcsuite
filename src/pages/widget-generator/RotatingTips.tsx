import { useEffect, useRef, useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { cn } from '../../utils/cn';

const TIPS = [
    'Drop the <div> exactly where the calculator should appear.',
    'The script tag can sit anywhere — the end of <body> loads fastest.',
    'Paste the whole block once. Extra script tags are ignored.',
    'The widget sizes itself to its container, so it fits any column.',
    'Styles run in a Shadow DOM — your CSS will not leak in or out.',
    'Embedding more than one calculator on a page works fine.',
    'The credit link is part of the licence and restores itself if removed.',
];

const INTERVAL_MS = 6000;
const FADE_MS = 260;

export function RotatingTips() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const paused = useRef(false);

    useEffect(() => {
        const timer = window.setInterval(() => {
            if (paused.current) return;
            // Fade out, swap the text while invisible, fade the next one in.
            setVisible(false);
            window.setTimeout(() => {
                setIndex(i => (i + 1) % TIPS.length);
                setVisible(true);
            }, FADE_MS);
        }, INTERVAL_MS);
        return () => window.clearInterval(timer);
    }, []);

    const show = (next: number) => {
        if (next === index) return;
        setVisible(false);
        window.setTimeout(() => {
            setIndex(next);
            setVisible(true);
        }, FADE_MS);
    };

    return (
        <div
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 px-3.5 py-3"
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
        >
            <div className="flex gap-2.5">
                <Lightbulb size={14} className="mt-0.5 shrink-0 text-amber-500" />
                <p
                    className={cn(
                        'min-h-[2.5rem] text-[13px] leading-relaxed text-slate-600 dark:text-slate-300',
                        'transition-all duration-200 ease-out',
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    )}
                    aria-live="polite"
                >
                    {TIPS[index]}
                </p>
            </div>
            <div className="mt-2 flex gap-1.5 pl-[26px]">
                {TIPS.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Tip ${i + 1}`}
                        onClick={() => show(i)}
                        className={cn(
                            'h-1 rounded-full transition-all',
                            i === index
                                ? 'w-4 bg-blue-500'
                                : 'w-1 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
