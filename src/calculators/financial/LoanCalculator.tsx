import { useState } from 'react';
import { DollarSign } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function LoanCalculator() {
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState(''); // in years
    const [result, setResult] = useState<{ monthly: number; totalInterest: number; totalPayment: number } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('loan');

    const calculate = () => {
        const p = parseFloat(amount);
        const r = parseFloat(rate);
        const t = parseFloat(term);

        if (!p || !r || !t) return;

        const monthlyRate = r / 100 / 12;
        const numberOfPayments = t * 12;

        // Standard amortization formula
        const monthlyPayment = (p * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - p;

        setResult({
            monthly: monthlyPayment,
            totalInterest,
            totalPayment
        });

        addHistory(
            { amount: p, rate: r, term: t },
            `$${monthlyPayment.toFixed(2)}/mo`,
            `$${p.toLocaleString()}, ${r}%, ${t}y`
        );
    };

    const handleHistorySelect = (item: any) => {
        setAmount(String(item.inputs.amount));
        setRate(String(item.inputs.rate));
        setTerm(String(item.inputs.term));
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div>
                    <label className={labelClass}>Loan Amount</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className={`${inputClass} pl-8`} placeholder="0.00" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className={labelClass}>Interest Rate (%)</label>
                        <input type="number" value={rate} onChange={e => setRate(e.target.value)} className={inputClass} placeholder="4.5" />
                    </div>
                    <div>
                        <label className={labelClass}>Loan Term (Years)</label>
                        <input type="number" value={term} onChange={e => setTerm(e.target.value)} className={inputClass} placeholder="5" />
                    </div>
                </div>

                <button
                    onClick={calculate}
                    className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20 flex items-center justify-center gap-2"
                >
                    <DollarSign size={20} />
                    Calculate Loan
                </button>

                {result !== null && (
                    <div className="mt-8 space-y-4">
                        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 text-center">
                            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">Monthly Payment</span>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                                ${result.monthly.toFixed(2)}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Total Interest</span>
                                <div className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-1">${result.totalInterest.toFixed(2)}</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Total Cost</span>
                                <div className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-1">${result.totalPayment.toFixed(2)}</div>
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
