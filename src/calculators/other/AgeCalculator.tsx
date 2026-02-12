import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('age');

    const calculateAge = () => {
        if (!birthDate) return;

        const birth = new Date(birthDate);
        const today = new Date();

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            // Get days in previous month
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });

        addHistory(
            { birthDate },
            `${years}y, ${months}mo, ${days}d`,
            birthDate
        );
    };

    const handleHistorySelect = (item: any) => {
        setBirthDate(item.inputs.birthDate);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Date of Birth</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-all"
                            />
                        </div>
                    </div>

                    <button
                        onClick={calculateAge}
                        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
                    >
                        Calculate Age
                    </button>

                    {age && (
                        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
                            <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 uppercase tracking-wide mb-4">Your Age</h3>
                            <div className="flex justify-center gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 dark:text-white">{age.years}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Years</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 dark:text-white">{age.months}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Months</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 dark:text-white">{age.days}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">Days</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
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
