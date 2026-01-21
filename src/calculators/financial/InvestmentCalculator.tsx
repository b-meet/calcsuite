import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export default function InvestmentCalculator() {
    const [initial, setInitial] = useState('');
    const [monthly, setMonthly] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [result, setResult] = useState<{ endBalance: number; totalPrincipal: number; totalInterest: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(initial) || 0;
        const c = parseFloat(monthly) || 0;
        const r = parseFloat(rate);
        const t = parseFloat(years);

        if (!r || !t) return;

        const monthlyRate = r / 100 / 12;
        const months = t * 12;

        // Future value of initial lump sum
        const fvLumpSum = p * Math.pow(1 + monthlyRate, months);

        // Future value of series of monthly deposits
        // PMT * [((1 + r)^n - 1) / r]
        const fvContributions = c * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

        const endBalance = fvLumpSum + fvContributions;
        const totalPrincipal = p + (c * months);
        const totalInterest = endBalance - totalPrincipal;

        setResult({
            endBalance,
            totalPrincipal,
            totalInterest
        });
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className={labelClass}>Starting Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400">$</span>
                            <input type="number" value={initial} onChange={e => setInitial(e.target.value)} className={`${inputClass} pl-8`} placeholder="1000.00" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className={labelClass}>Monthly Contribution</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400">$</span>
                            <input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} className={`${inputClass} pl-8`} placeholder="100.00" />
                        </div>
                    </div>
                    <div>
                        <label className={labelClass}>Annual Return (%)</label>
                        <input type="number" value={rate} onChange={e => setRate(e.target.value)} className={inputClass} placeholder="7.0" />
                    </div>
                    <div>
                        <label className={labelClass}>Investment Time (Years)</label>
                        <input type="number" value={years} onChange={e => setYears(e.target.value)} className={inputClass} placeholder="10" />
                    </div>
                </div>

                <button
                    onClick={calculate}
                    className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                    <TrendingUp size={20} />
                    Calculate Growth
                </button>

                {result !== null && (
                    <div className="mt-8 space-y-4">
                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
                            <span className="text-sm font-medium text-indigo-800 uppercase tracking-wide">Future Balance</span>
                            <div className="text-4xl font-bold text-slate-900 mt-2">
                                ${result.endBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-500 uppercase">Total Principal</span>
                                <div className="text-lg font-bold text-slate-800 mt-1">${result.totalPrincipal.toLocaleString()}</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-emerald-600 uppercase">Total Interest</span>
                                <div className="text-lg font-bold text-emerald-600 mt-1">+${result.totalInterest.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
