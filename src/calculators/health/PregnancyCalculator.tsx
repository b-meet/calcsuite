import { useState } from 'react';
import { Baby, CalendarDays } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

type CalculationMethod = 'last_period' | 'due_date' | 'ultrasound' | 'conception' | 'ivf';

export default function PregnancyCalculator() {
    const [method, setMethod] = useState<CalculationMethod>('due_date');

    // Inputs
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [cycle, setCycle] = useState('28');

    // Ultrasound specific
    const [weeksArgs, setWeeks] = useState('0');
    const [daysArgs, setDays] = useState('0');

    // IVF specific
    const [transferType, setTransferType] = useState<'3day' | '5day'>('5day');

    const [result, setResult] = useState<{ dueDate: Date; trimester: number; weeks: number; days: number } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('pregnancy');

    const calculate = () => {
        if (!date) return;

        const inputDate = new Date(date);
        let estimatedDueDate = new Date();

        const addDays = (d: Date, days: number) => {
            const newDate = new Date(d);
            newDate.setDate(newDate.getDate() + days);
            return newDate;
        };

        switch (method) {
            case 'last_period': {
                const cycleLen = parseInt(cycle) || 28;
                // LMP + 280 + (Cycle - 28)
                estimatedDueDate = addDays(inputDate, 280 + (cycleLen - 28));
                break;
            }
            case 'due_date': {
                estimatedDueDate = inputDate;
                break;
            }
            case 'conception': {
                estimatedDueDate = addDays(inputDate, 266);
                break;
            }
            case 'ultrasound': {
                // Date of ultrasound + remaining time
                // Full term is 280 days (40 weeks)
                // Current age = weeks * 7 + days
                // Remaining = 280 - current age
                const w = parseInt(weeksArgs) || 0;
                const d = parseInt(daysArgs) || 0;
                const currentAgeDays = w * 7 + d;
                const remainingDays = 280 - currentAgeDays;
                estimatedDueDate = addDays(inputDate, remainingDays);
                break;
            }
            case 'ivf': {
                // Transfer date + 266 days - transfer age (3 or 5 days)
                const transferAge = transferType === '3day' ? 3 : 5;
                estimatedDueDate = addDays(inputDate, 266 - transferAge);
                break;
            }
        }

        // Calculate progress
        const today = new Date();
        // Progress is based on LMP (usually DueDate - 280 days)
        const theoreticalLMP = addDays(estimatedDueDate, -280);
        const diffTime = today.getTime() - theoreticalLMP.getTime();
        const diffTotalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Clamp progress between 0 and 42 weeks for sanity
        const clampedDays = Math.max(0, Math.min(diffTotalDays, 42 * 7));

        const currentWeeks = Math.floor(clampedDays / 7);
        const currentDays = clampedDays % 7;

        let trimester = 1;
        if (currentWeeks >= 13) trimester = 2; // 2nd trimester starts week 13
        if (currentWeeks >= 27) trimester = 3; // 3rd trimester starts week 27

        setResult({
            dueDate: estimatedDueDate,
            trimester,
            weeks: currentWeeks,
            days: currentDays
        });

        addHistory(
            { method, date, cycle, weeksArgs, daysArgs, transferType },
            `${currentWeeks}w ${currentDays}d`,
            `Due: ${estimatedDueDate.toLocaleDateString()}`
        );
    };

    const handleHistorySelect = (item: any) => {
        setMethod(item.inputs.method);
        setDate(item.inputs.date);
        setCycle(item.inputs.cycle);
        setWeeks(item.inputs.weeksArgs);
        setDays(item.inputs.daysArgs);
        setTransferType(item.inputs.transferType);
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-pink-400 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    const renderInputs = () => {
        switch (method) {
            case 'due_date':
                return (
                    <div>
                        <label className={labelClass}>Your Due Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputClass} />
                    </div>
                );
            case 'last_period':
                return (
                    <>
                        <div>
                            <label className={labelClass}>First Day of Last Period</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Average Cycle Length (Days)</label>
                            <select value={cycle} onChange={e => setCycle(e.target.value)} className={inputClass}>
                                {[26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map(d => (
                                    <option key={d} value={d}>{d} Days</option>
                                ))}
                            </select>
                        </div>
                    </>
                );
            case 'conception':
                return (
                    <div>
                        <label className={labelClass}>Conception Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputClass} />
                    </div>
                );
            case 'ultrasound':
                return (
                    <>
                        <div>
                            <label className={labelClass}>Date of Ultrasound</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputClass} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelClass}>Weeks</label>
                                <input type="number" value={weeksArgs} onChange={e => setWeeks(e.target.value)} className={inputClass} placeholder="0" min="0" max="42" />
                            </div>
                            <div>
                                <label className={labelClass}>Days</label>
                                <input type="number" value={daysArgs} onChange={e => setDays(e.target.value)} className={inputClass} placeholder="0" min="0" max="6" />
                            </div>
                        </div>
                    </>
                );
            case 'ivf':
                return (
                    <>
                        <div>
                            <label className={labelClass}>Transfer Date</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Transfer Type</label>
                            <select value={transferType} onChange={e => setTransferType(e.target.value as any)} className={inputClass}>
                                <option value="3day">3-Day Transfer</option>
                                <option value="5day">5-Day Transfer</option>
                            </select>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">

                <div>
                    <label className={labelClass}>Calculate Based On:</label>
                    <select
                        value={method}
                        onChange={e => {
                            setMethod(e.target.value as CalculationMethod);
                            setResult(null);
                        }}
                        className={inputClass}
                    >
                        <option value="due_date">Due Date</option>
                        <option value="last_period">Last Period</option>
                        <option value="ultrasound">Ultrasound</option>
                        <option value="conception">Conception Date</option>
                        <option value="ivf">IVF Transfer Date</option>
                    </select>
                </div>

                {renderInputs()}

                <button
                    onClick={calculate}
                    className="w-full py-4 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200 dark:shadow-pink-900/20 flex items-center justify-center gap-2"
                >
                    <Baby size={20} />
                    Calculate Due Date
                </button>

                {result && (
                    <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-2xl border border-pink-100 dark:border-pink-900/30 text-center">
                            <span className="text-sm font-medium text-pink-700 dark:text-pink-400 uppercase tracking-wide">Estimated Due Date</span>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mt-2 flex items-center justify-center gap-2">
                                <CalendarDays className="text-pink-500 dark:text-pink-400" />
                                {result.dueDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Current Progress</span>
                                <div className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-1">{result.weeks} Weeks, {result.days} Days</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Trimester</span>
                                <div className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-1">{result.trimester}</div>
                            </div>
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
