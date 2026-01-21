
import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export default function InflationCalculator() {
    const [amount, setAmount] = useState(100);
    const [rate, setRate] = useState(3.5);
    const [years, setYears] = useState(10);
    const [result, setResult] = useState<{ futureValue: string; purchasingPower: string } | null>(null);

    const calculateInflation = () => {
        // Compound interest formula: A = P(1 + r/100)^t
        const futureVal = amount * Math.pow((1 + rate / 100), years);

        // Purchasing power decline: P = A / (1 + r/100)^t
        // But users usually want to know "What will $100 buy in the future?" 
        // which means we just inverted the concept. 
        // Let's stick to: "To buy what costs $100 today, you'll need X in the future"

        setResult({
            futureValue: futureVal.toFixed(2),
            purchasingPower: (amount / Math.pow((1 + rate / 100), years)).toFixed(2)
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Current Amount ($)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Inflation Rate (%)</label>
                        <input
                            type="number"
                            step="0.1"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Years (Time)</label>
                        <input
                            type="number"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>
                </div>

                <button
                    onClick={calculateInflation}
                    className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                    <TrendingUp size={20} />
                    Calculate Future Value
                </button>
            </div>

            {result && (
                <div className="mt-6 space-y-4 animate-fade-in">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-sm text-green-700 mb-1">Future Cost</p>
                        <p className="text-2xl font-bold text-green-900">${result.futureValue}</p>
                        <p className="text-xs text-green-600 mt-1">
                            To buy what costs ${amount} today, you will need ${result.futureValue} in {years} years.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
