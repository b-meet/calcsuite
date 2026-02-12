import { useState } from 'react';
import { Calendar as CalendarIcon, Heart, Info, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function OvulationCalculator() {
    const [lastPeriod, setLastPeriod] = useState('');
    const [cycleLength, setCycleLength] = useState(28);
    const [result, setResult] = useState<{ ovulationDate: string; fertileWindow: string; nextPeriod: string } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('ovulation');

    const calculateOvulation = () => {
        if (!lastPeriod) return;

        const lastDate = new Date(lastPeriod);

        // Ovulation usually occurs 14 days before the next period
        const ovulationDayOffset = cycleLength - 14;
        const ovulationDate = new Date(lastDate);
        ovulationDate.setDate(lastDate.getDate() + ovulationDayOffset);

        // Fertile window is usually 5 days before ovulation + ovulation day
        const fertileStartDate = new Date(ovulationDate);
        fertileStartDate.setDate(ovulationDate.getDate() - 5);

        const nextPeriodDate = new Date(lastDate);
        nextPeriodDate.setDate(lastDate.getDate() + cycleLength);

        const newResult = {
            ovulationDate: ovulationDate.toDateString(),
            fertileWindow: `${fertileStartDate.toDateString()} - ${ovulationDate.toDateString()}`,
            nextPeriod: nextPeriodDate.toDateString()
        };

        setResult(newResult);

        addHistory(
            { lastPeriod, cycleLength },
            `Next Ovulation: ${ovulationDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`,
            `Cycle: ${cycleLength} days`
        );
    };

    const handleHistorySelect = (item: any) => {
        setLastPeriod(item.inputs.lastPeriod);
        setCycleLength(item.inputs.cycleLength);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-md mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Day of Last Period</label>
                        <div className="relative">
                            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={20} />
                            <input
                                type="date"
                                value={lastPeriod}
                                onChange={(e) => setLastPeriod(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Average Cycle Length (Days)</label>
                        <input
                            type="number"
                            min="20"
                            max="45"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Usually 28 days</p>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={calculateOvulation}
                            className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg shadow-pink-200 dark:shadow-pink-900/20"
                        >
                            <Heart size={20} />
                            Calculate Fertile Window
                        </button>
                    </div>
                </div>

                {result && (
                    <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-4">
                        <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-100 dark:border-pink-900/30">
                            <p className="text-sm text-pink-600 dark:text-pink-400 mb-1 font-medium">Most Fertile Window</p>
                            <p className="text-xl font-bold text-pink-900 dark:text-white">{result.fertileWindow}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Ovulation Date</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">{result.ovulationDate}</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Next Period</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">{result.nextPeriod}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 mt-4">
                            <Info size={14} className="mt-0.5 flex-shrink-0" />
                            <p>This is an estimate based on averages. Cycle variability is normal.</p>
                        </div>
                    </div>
                )}
            </div>

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
