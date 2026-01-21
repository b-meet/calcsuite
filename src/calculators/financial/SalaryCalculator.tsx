import { useState } from 'react';
import { Briefcase } from 'lucide-react';

export default function SalaryCalculator() {
    const [amount, setAmount] = useState('');
    const [period, setPeriod] = useState<'hourly' | 'weekly' | 'monthly' | 'annual'>('annual');
    const [hoursPerWeek, setHoursPerWeek] = useState('40');

    const calculate = () => {
        const val = parseFloat(amount) || 0;
        const hours = parseFloat(hoursPerWeek) || 40;

        // Normalize to annual first
        let annual = 0;

        switch (period) {
            case 'hourly':
                annual = val * hours * 52;
                break;
            case 'weekly':
                annual = val * 52;
                break;
            case 'monthly':
                annual = val * 12;
                break;
            case 'annual':
                annual = val;
                break;
        }

        return {
            annual: annual,
            monthly: annual / 12,
            weekly: annual / 52,
            daily: annual / 260, // 5 days * 52 weeks
            hourly: annual / (hours * 52)
        };
    };

    const results = calculate();
    const hasInput = amount.length > 0;

    const inputClass = "block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 bg-slate-50";

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Salary Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400">$</span>
                            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className={`${inputClass} pl-8`} placeholder="0.00" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Per</label>
                        <select
                            value={period}
                            onChange={e => setPeriod(e.target.value as any)}
                            className={inputClass}
                        >
                            <option value="hourly">Hour</option>
                            <option value="weekly">Week</option>
                            <option value="monthly">Month</option>
                            <option value="annual">Year</option>
                        </select>
                    </div>
                    {period === 'hourly' && (
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Hours per Week</label>
                            <input type="number" value={hoursPerWeek} onChange={e => setHoursPerWeek(e.target.value)} className={inputClass} placeholder="40" />
                        </div>
                    )}
                </div>

                {hasInput && (
                    <div className="mt-8 space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { label: 'Annual', value: results.annual },
                                { label: 'Monthly', value: results.monthly },
                                { label: 'Weekly', value: results.weekly },
                                { label: 'Hourly', value: results.hourly }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                    <span className="text-slate-500 font-medium">{item.label}</span>
                                    <span className="text-xl font-bold text-slate-900">${item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!hasInput && (
                    <div className="py-12 text-center text-slate-400 flex flex-col items-center">
                        <Briefcase size={48} className="mb-4 opacity-20" />
                        <p>Enter your pay details to see a breakdown.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
