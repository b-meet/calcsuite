import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
    return (
        <div>
            <div className="flex items-baseline justify-between mb-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                </label>
                {hint && <span className="text-[11px] tabular-nums text-slate-400">{hint}</span>}
            </div>
            {children}
        </div>
    );
}

interface SegmentedOption<T extends string> {
    value: T;
    label: string;
    icon?: ReactNode;
}

export function Segmented<T extends string>({
    options,
    value,
    onChange,
}: {
    options: SegmentedOption<T>[];
    value: T;
    onChange: (value: T) => void;
}) {
    return (
        <div
            role="tablist"
            className="grid gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/70"
            style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
        >
            {options.map(option => {
                const active = option.value === value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => onChange(option.value)}
                        className={cn(
                            'flex items-center justify-center gap-1.5 py-1.5 px-1 rounded-lg text-[12px] font-semibold transition-all',
                            active
                                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                        )}
                    >
                        {option.icon}
                        <span className="truncate">{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
}

export function RangeControl({
    value,
    min,
    max,
    step = 1,
    onChange,
}: {
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (value: number) => void;
}) {
    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="calcsuite-range w-full"
        />
    );
}

export function ToggleRow({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className="w-full flex items-center justify-between py-1.5 group"
        >
            <span className="text-[13px] font-medium text-slate-600 dark:text-slate-300">{label}</span>
            <span
                className={cn(
                    'relative w-8 h-[18px] rounded-full transition-colors',
                    checked ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                )}
            >
                <span
                    className={cn(
                        'absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-all',
                        checked ? 'left-[17px]' : 'left-0.5'
                    )}
                />
            </span>
        </button>
    );
}
