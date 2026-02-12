import { History, Trash2, ChevronRight, Clock } from 'lucide-react';
import type { HistoryItem } from '../hooks/useCalculatorHistory';

interface CalculationHistoryProps {
    history: HistoryItem[];
    onSelect: (item: HistoryItem) => void;
    onClear: () => void;
    onRemove: (id: string) => void;
    title?: string;
}

export function CalculationHistory({
    history,
    onSelect,
    onClear,
    onRemove,
    title = "Recent Calculations"
}: CalculationHistoryProps) {
    if (history.length === 0) return null;

    const formatDate = (timestamp: number) => {
        return new Intl.DateTimeFormat('en-IN', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(timestamp);
    };

    const handleDelete = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        onRemove(id);
    };

    return (
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                    <History size={20} className="text-blue-600 dark:text-blue-400" />
                    {title}
                </div>
                <button
                    onClick={onClear}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-red-500 transition-colors uppercase tracking-wider"
                >
                    <Trash2 size={14} />
                    Clear All
                </button>
            </div>

            <div className="grid gap-3">
                {history.map((item) => (
                    <div
                        key={item.id}
                        className="group relative flex items-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-md transition-all overflow-hidden"
                    >
                        <button
                            onClick={() => onSelect(item)}
                            className="flex-1 flex items-center justify-between p-4 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                                        {item.label || "Calculation Result"}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        {formatDate(item.timestamp)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 pr-8 sm:pr-12">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                        {typeof item.result === 'object' ? (Object.values(item.result)[0] as string) : item.result}
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors" />
                            </div>
                        </button>
                        <button
                            onClick={(e) => handleDelete(e, item.id)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            title="Delete entry"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
