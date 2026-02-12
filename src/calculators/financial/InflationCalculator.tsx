import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function InflationCalculator() {
    const [amount, setAmount] = useState(100);
    const [rate, setRate] = useState(3.5);
    const [years, setYears] = useState(10);
    const [result, setResult] = useState<{ futureValue: string; purchasingPower: string } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('inflation');

    const calculateInflation = () => {
        // Compound interest formula: A = P(1 + r/100)^t
        const futureVal = amount * Math.pow((1 + rate / 100), years);

        setResult({
            futureValue: futureVal.toFixed(2),
            purchasingPower: (amount / Math.pow((1 + rate / 100), years)).toFixed(2)
        });

        addHistory(
            { amount, rate, years },
            `$${futureVal.toFixed(2)}`,
            `$${amount}, ${rate}%, ${years}y`
        );
    };

    const handleHistorySelect = (item: any) => {
        setAmount(item.inputs.amount);
        setRate(item.inputs.rate);
        setYears(item.inputs.years);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-md mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Current Amount ($)</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Inflation Rate (%)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Years (Time)</label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <button
                        onClick={calculateInflation}
                        className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-200 dark:shadow-green-900/20"
                    >
                        <TrendingUp size={20} />
                        Calculate Future Value
                    </button>
                </div>

                {result && (
                    <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/30">
                            <p className="text-sm text-green-700 dark:text-green-300 mb-1">Future Cost</p>
                            <p className="text-2xl font-bold text-green-900 dark:text-white">${result.futureValue}</p>
                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                                To buy what costs ${amount} today, you will need ${result.futureValue} in {years} years.
                            </p>
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
