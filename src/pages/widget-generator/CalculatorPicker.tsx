import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';
import { categories } from '../../calculators/registry';
import { cn } from '../../utils/cn';
import { isEmbeddable } from '../../widget/supportedCalculators';
import type { CalculatorOption } from './types';

interface Props {
    options: CalculatorOption[];
    value: string;
    onChange: (id: string) => void;
}

const CATEGORY_LABEL = new Map(categories.map(c => [c.id, c.name]));

export function CalculatorPicker({ options, value, onChange }: Props) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const selected = options.find(o => o.id === value) ?? options[0];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return options;
        return options.filter(o =>
            o.name.toLowerCase().includes(q) ||
            o.fullName.toLowerCase().includes(q) ||
            o.id.includes(q)
        );
    }, [options, query]);

    // Group for display, but keep the flat filtered order for keyboard nav so
    // the two never disagree about what "next" means.
    const groups = useMemo(() => {
        const map = new Map<string, { option: CalculatorOption; index: number }[]>();
        filtered.forEach((option, index) => {
            const key = option.category;
            if (!map.has(key)) map.set(key, []);
            map.get(key)!.push({ option, index });
        });
        return [...map.entries()];
    }, [filtered]);

    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e: MouseEvent) => {
            if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown);
        return () => document.removeEventListener('mousedown', onPointerDown);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        listRef.current
            ?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
            ?.scrollIntoView({ block: 'nearest' });
    }, [activeIndex, open]);

    // Resetting here rather than in an effect keeps it to a single render pass.
    const openPanel = () => {
        setQuery('');
        setActiveIndex(Math.max(0, options.findIndex(o => o.id === value)));
        setOpen(true);
        // Let the panel mount before focusing, or the caret lands nowhere.
        requestAnimationFrame(() => inputRef.current?.focus());
    };

    const commit = (id: string) => {
        onChange(id);
        setOpen(false);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (!open) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                openPanel();
            }
            return;
        }
        if (e.key === 'Escape') {
            e.preventDefault();
            setOpen(false);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(i => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(i => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const option = filtered[activeIndex];
            if (option) commit(option.id);
        }
    };

    const SelectedIcon = selected?.icon;

    return (
        <div ref={rootRef} className="relative" onKeyDown={onKeyDown}>
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => (open ? setOpen(false) : openPanel())}
                className={cn(
                    'w-full flex items-center gap-3 pl-3 pr-3 py-2.5 rounded-xl text-left transition-colors',
                    'bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700',
                    'hover:border-slate-300 dark:hover:border-slate-600',
                    open && 'border-blue-500 dark:border-blue-500 ring-4 ring-blue-500/10'
                )}
            >
                {SelectedIcon && (
                    <span className="shrink-0 grid place-items-center w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                        <SelectedIcon size={16} />
                    </span>
                )}
                <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                        {selected?.name}
                    </span>
                    <span className="block truncate text-[11px] text-slate-400">
                        {CATEGORY_LABEL.get(selected?.category) ?? selected?.category}
                    </span>
                </span>
                <ChevronDown
                    size={16}
                    className={cn('shrink-0 text-slate-400 transition-transform', open && 'rotate-180')}
                />
            </button>

            {open && (
                <div className="absolute z-30 mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 overflow-hidden">
                    <div className="flex items-center gap-2 px-3 border-b border-slate-100 dark:border-slate-800">
                        <Search size={14} className="shrink-0 text-slate-400" />
                        <input
                            ref={inputRef}
                            value={query}
                            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
                            placeholder="Search calculators"
                            className="w-full py-2.5 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                        />
                    </div>

                    <div ref={listRef} role="listbox" className="max-h-72 overflow-y-auto overscroll-contain py-1">
                        {filtered.length === 0 && (
                            <p className="px-3 py-6 text-center text-xs text-slate-400">
                                Nothing matches “{query}”.
                            </p>
                        )}
                        {groups.map(([category, entries]) => (
                            <div key={category}>
                                <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    {CATEGORY_LABEL.get(category as CalculatorOption['category']) ?? category}
                                </p>
                                {entries.map(({ option, index }) => {
                                    const Icon = option.icon;
                                    const isSelected = option.id === value;
                                    return (
                                        <button
                                            key={option.id}
                                            type="button"
                                            role="option"
                                            aria-selected={isSelected}
                                            data-index={index}
                                            onMouseEnter={() => setActiveIndex(index)}
                                            onClick={() => commit(option.id)}
                                            className={cn(
                                                'w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors',
                                                index === activeIndex ? 'bg-blue-50 dark:bg-blue-500/10' : 'bg-transparent'
                                            )}
                                        >
                                            {Icon && <Icon size={15} className="shrink-0 text-slate-400" />}
                                            <span className="min-w-0 flex-1 truncate text-sm text-slate-700 dark:text-slate-200">
                                                {option.name}
                                            </span>
                                            {!isEmbeddable(option.id) && (
                                                <span
                                                    title="Previewable, but not in the widget runtime yet"
                                                    className="shrink-0 px-1.5 py-px rounded text-[10px] font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-400"
                                                >
                                                    Preview
                                                </span>
                                            )}
                                            {isSelected && <Check size={14} className="shrink-0 text-blue-600 dark:text-blue-400" />}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
