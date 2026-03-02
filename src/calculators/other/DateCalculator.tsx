import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { cn } from '../../utils/cn';

export default function DateCalculator() {
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState('');
    const [includeLeapDays, setIncludeLeapDays] = useState(true);
    const [result, setResult] = useState<{ days: number; weeks: string; breakdown: string; leapYears: number } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('date');

    const isLeapYear = (year: number) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const countLeapYears = (start: Date, end: Date) => {
        let count = 0;
        const sYear = start.getFullYear();
        const eYear = end.getFullYear();

        for (let y = Math.min(sYear, eYear); y <= Math.max(sYear, eYear); y++) {
            if (isLeapYear(y)) {
                // Check if Feb 29 of this year is within range
                const feb29 = new Date(y, 1, 29);
                if (feb29 >= (start < end ? start : end) && feb29 <= (start < end ? end : start)) {
                    count++;
                }
            }
        }
        return count;
    };

    const calculateDifference = () => {
        if (!startDate || !endDate) return;

        const start = new Date(startDate);
        const end = new Date(endDate);

        // Total days calculation (absolute)
        const diffTime = Math.abs(end.getTime() - start.getTime());
        let totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Calendar-aware breakdown
        const d1 = start < end ? start : end;
        const d2 = start < end ? end : start;

        const leapYearsCount = countLeapYears(d1, d2);

        if (!includeLeapDays) {
            totalDays -= leapYearsCount;

            // Recalculate breakdown based on normalized 365-day year
            const years = Math.floor(totalDays / 365);
            const remainingDaysAfterYears = totalDays % 365;
            const months = Math.floor(remainingDaysAfterYears / 30);
            const days = remainingDaysAfterYears % 30;

            setResult({
                days: totalDays,
                weeks: (totalDays / 7).toFixed(1),
                breakdown: `${years}y, ${months}m, ${days}d`,
                leapYears: leapYearsCount
            });
        } else {
            let years = d2.getFullYear() - d1.getFullYear();
            let months = d2.getMonth() - d1.getMonth();
            let days = d2.getDate() - d1.getDate();

            if (days < 0) {
                months--;
                // Days in previous month relative to d2
                const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
                days += prevMonth.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            setResult({
                days: totalDays,
                weeks: (totalDays / 7).toFixed(1),
                breakdown: `${years}y, ${months}m, ${days}d`,
                leapYears: leapYearsCount
            });
        }
    };

    useEffect(() => {
        calculateDifference();
    }, [startDate, endDate, includeLeapDays]);

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { startDate, endDate, includeLeapDays },
            `${result.days} Days`,
            `${startDate} to ${endDate} (${includeLeapDays ? 'Incl' : 'Excl'}. Leap)`
        );
    };

    const handleHistorySelect = (item: any) => {
        setStartDate(item.inputs.startDate);
        setEndDate(item.inputs.endDate);
        setIncludeLeapDays(item.inputs.includeLeapDays !== undefined ? item.inputs.includeLeapDays : true);
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

                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Leap Days</span>
                    <button
                        onClick={() => setIncludeLeapDays(!includeLeapDays)}
                        className={cn(
                            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                            includeLeapDays ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                        )}
                    >
                        <span
                            className={cn(
                                "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                includeLeapDays ? "translate-x-6" : "translate-x-1"
                            )}
                        />
                    </button>
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
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-center relative overflow-hidden">
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-1 font-medium">Total Duration</p>
                        <p className="text-4xl font-bold text-blue-900 dark:text-blue-100">{result.days} Days</p>
                        {result.leapYears > 0 && (
                            <span className="absolute top-2 right-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-[10px] font-bold text-blue-700 dark:text-blue-300 rounded-full">
                                {result.leapYears} Leap Years
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">In Weeks</p>
                            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.weeks} weeks</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Breakdown</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">{result.breakdown}</p>
                        </div>
                    </div>

                    {result.leapYears > 0 && (
                        <div className="space-y-2">
                            <p className="text-[10px] text-blue-500 dark:text-blue-400 font-bold uppercase text-center">
                                ({includeLeapDays ? 'Inclusive' : 'Exclusive'} of Leap Years)
                            </p>
                            {!includeLeapDays ? (
                                <p className="text-[11px] text-amber-600 dark:text-amber-400 italic text-center px-4 font-medium">
                                    * Leap days ({result.leapYears}) have been subtracted from the total.
                                </p>
                            ) : (
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic text-center px-4">
                                    * Calculation accounts for {result.leapYears} leap years between these dates.
                                </p>
                            )}
                        </div>
                    )}
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
