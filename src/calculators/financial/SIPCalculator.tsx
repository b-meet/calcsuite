
import { useState } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState<number | ''>(5000);
    const [rate, setRate] = useState<number | ''>(12);
    const [years, setYears] = useState<number | ''>(10);
    const [result, setResult] = useState<{ invested: string; returns: string; total: string } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('sip');

    const calculateSIP = () => {
        const investment = Number(monthlyInvestment);
        const r = Number(rate);
        const t = Number(years);

        if (!investment || !r || !t) return;

        const i = r / 100 / 12;
        const n = t * 12;

        // SIP Formula: P * [ (1+i)^n - 1 ] * (1+i) / i
        const futureValue = investment * (Math.pow(1 + i, n) - 1) * (1 + i) / i;
        const totalInvested = investment * n;
        const estReturns = futureValue - totalInvested;

        const newResult = {
            invested: totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 }),
            returns: estReturns.toLocaleString(undefined, { maximumFractionDigits: 0 }),
            total: futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })
        };

        setResult(newResult);
        addHistory(
            { monthlyInvestment: investment, rate: r, years: t },
            `₹ ${newResult.total}`,
            `₹${investment}/mo for ${t}y`
        );
    };

    const handleHistorySelect = (item: any) => {
        setMonthlyInvestment(item.inputs.monthlyInvestment);
        setRate(item.inputs.rate);
        setYears(item.inputs.years);
        // Recalculate or just set result from history if stored fully
        // For simplicity, let's just trigger calculation again or set it if we stored the values
        calculateSIP();
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Monthly Investment</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="number"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Exp. Return (%)</label>
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time Period (Years)</label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <button
                        onClick={calculateSIP}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                        <TrendingUp size={20} />
                        Calculate SIP
                    </button>
                </div>

                {result && (
                    <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Invested Amount</span>
                                <span className="font-semibold text-slate-900 dark:text-white">{result.invested}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Est. Returns</span>
                                <span className="font-semibold text-green-600 dark:text-green-400">+{result.returns}</span>
                            </div>
                            <div className="flex justify-between pt-3 border-t border-slate-200 dark:border-slate-700 mt-2">
                                <span className="font-bold text-slate-800 dark:text-slate-200">Total Value</span>
                                <span className="font-bold text-blue-700 dark:text-blue-400 text-lg">{result.total}</span>
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

