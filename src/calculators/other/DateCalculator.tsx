import { useState, useEffect } from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function DateCalculator() {
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState<{ days: number; weeks: string; years: string } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('date');

    const calculateDifference = () => {
        if (!startDate || !endDate) return;

        const start = new Date(startDate);
        const end = new Date(endDate);

        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const years = Math.floor(diffDays / 365);
        const remainingDaysAfterYears = diffDays % 365;
        const months = Math.floor(remainingDaysAfterYears / 30);
        const days = remainingDaysAfterYears % 30;

        setResult({
            days: diffDays,
            weeks: (diffDays / 7).toFixed(1),
            years: `${years}y, ${months}m, ${days}d`
        });
    };

    useEffect(() => {
        calculateDifference();
    }, [startDate, endDate]);

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { startDate, endDate },
            `${result.days} Days`,
            `${startDate} to ${endDate}`
        );
    };

    const handleHistorySelect = (item: any) => {
        setStartDate(item.inputs.startDate);
        setEndDate(item.inputs.endDate);
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                        />
                    </div>
                </div>

                <div className="flex justify-center pt-2">
                    <button
                        onClick={handleSave}
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center justify-center gap-2"
                    >
                        <TrendingUp size={20} />
                        Save to History
                    </button>
                </div>
            </div>

            {result && (
                <div className="mt-6 space-y-4 animate-fade-in">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-center">
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-1 font-medium">Total Duration</p>
                        <p className="text-4xl font-bold text-blue-900 dark:text-blue-100">{result.days} Days</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">In Weeks</p>
                            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.weeks} weeks</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Breakdown</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">{result.years}</p>
                        </div>
                    </div>
                </div>
            )}

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
