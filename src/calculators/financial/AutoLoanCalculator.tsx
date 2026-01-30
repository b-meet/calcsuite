import { useState } from 'react';
import { Car } from 'lucide-react';

export default function AutoLoanCalculator() {
    const [price, setPrice] = useState('');
    const [down, setDown] = useState('');
    const [tradeIn, setTradeIn] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState('60'); // Months
    const [tax, setTax] = useState(''); // Percentage

    const [result, setResult] = useState<{ monthly: number; totalLoan: number; totalInterest: number; totalCost: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(price) || 0;
        const d = parseFloat(down) || 0;
        const tr = parseFloat(tradeIn) || 0;
        const r = parseFloat(rate) || 0;
        const t = parseFloat(term) || 60;
        const tx = parseFloat(tax) || 0;

        let taxableAmount = p - tr; // Tax usually applied to difference, depends on state, assuming simple case
        if (taxableAmount < 0) taxableAmount = 0;

        const salesTaxAmount = taxableAmount * (tx / 100);
        const loanAmount = p + salesTaxAmount - d - tr;

        if (loanAmount <= 0) return;

        const monthlyRate = r / 100 / 12;
        let monthlyPayment = 0;
        let totalInterest = 0;

        if (r === 0) {
            monthlyPayment = loanAmount / t;
        } else {
            monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, t)) / (Math.pow(1 + monthlyRate, t) - 1);
            totalInterest = (monthlyPayment * t) - loanAmount;
        }

        setResult({
            monthly: monthlyPayment,
            totalLoan: loanAmount,
            totalInterest,
            totalCost: p + salesTaxAmount + totalInterest // Total cost of car including interest and tax
        });
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClass}>Vehicle Price</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)} className={`${inputClass} pl-8`} placeholder="30000" />
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Interest Rate (%)</label>
                        <input type="number" value={rate} onChange={e => setRate(e.target.value)} className={inputClass} placeholder="5.9" />
                    </div>

                    <div>
                        <label className={labelClass}>Down Payment</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input type="number" value={down} onChange={e => setDown(e.target.value)} className={`${inputClass} pl-8`} placeholder="5000" />
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Trade-in Value</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input type="number" value={tradeIn} onChange={e => setTradeIn(e.target.value)} className={`${inputClass} pl-8`} placeholder="0" />
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Loan Term (Months)</label>
                        <select value={term} onChange={e => setTerm(e.target.value)} className={inputClass}>
                            <option value="36">36 Months</option>
                            <option value="48">48 Months</option>
                            <option value="60">60 Months</option>
                            <option value="72">72 Months</option>
                            <option value="84">84 Months</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Sales Tax (%)</label>
                        <input type="number" value={tax} onChange={e => setTax(e.target.value)} className={inputClass} placeholder="7.0" />
                    </div>
                </div>

                <button
                    onClick={calculate}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                    <Car size={20} />
                    Calculate Auto Loan
                </button>

                {result !== null && (
                    <div className="mt-8 space-y-4">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
                            <span className="text-sm font-medium text-blue-800 dark:text-blue-300 uppercase tracking-wide">Monthly Payment</span>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                                ${result.monthly.toFixed(2)}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Loan Amount</span>
                                <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">${result.totalLoan.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Total Interest</span>
                                <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Total Cost</span>
                                <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">${result.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
