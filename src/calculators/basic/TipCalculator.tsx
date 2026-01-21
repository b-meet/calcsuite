
import { useState } from 'react';
import { DollarSign, User } from 'lucide-react';

export default function TipCalculator() {
    const [bill, setBill] = useState('');
    const [people, setPeople] = useState(1);
    const [mode, setMode] = useState<'amount' | 'percent'>('amount'); // Default to Amount

    // We store these separately to maintain state when switching
    const [tipPercent, setTipPercent] = useState(15);
    const [tipFixedAmount, setTipFixedAmount] = useState('');

    const billNum = Number(bill) || 0;
    const fixedNum = Number(tipFixedAmount) || 0;

    // Derived values based on mode
    let finalTipAmount = 0;
    let finalTotal = 0;
    let finalPerPerson = 0;

    if (mode === 'amount') {
        finalTipAmount = fixedNum;
        finalTotal = billNum + finalTipAmount;
        finalPerPerson = people > 0 ? finalTotal / people : 0;
    } else {
        finalTipAmount = billNum * (tipPercent / 100);
        finalTotal = billNum + finalTipAmount;
        finalPerPerson = people > 0 ? finalTotal / people : 0;
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="space-y-6">
                {/* Bill Amount */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Bill Amount ($)</label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="number"
                            value={bill}
                            onChange={(e) => setBill(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="0.00"
                        />
                    </div>
                </div>

                {/* Mode Toggle */}
                <div className="p-1 bg-slate-100 rounded-lg flex">
                    <button
                        onClick={() => setMode('amount')}
                        className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'amount'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Fixed Amount ($)
                    </button>
                    <button
                        onClick={() => setMode('percent')}
                        className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'percent'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Percentage (%)
                    </button>
                </div>

                {/* Conditional Input */}
                {mode === 'percent' ? (
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Tip Percentage: <span className="text-indigo-600 font-bold">{tipPercent}%</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="50"
                            step="1"
                            value={tipPercent}
                            onChange={(e) => setTipPercent(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="flex justify-between mt-2 text-xs text-slate-500">
                            {[10, 15, 18, 20, 25].map((pct) => (
                                <button
                                    key={pct}
                                    onClick={() => setTipPercent(pct)}
                                    className={`px-2 py-1 rounded hover:bg-slate-100 ${tipPercent === pct ? 'text-indigo-600 font-bold bg-indigo-50' : ''}`}
                                >
                                    {pct}%
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Tip Amount ($)</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="number"
                                value={tipFixedAmount}
                                onChange={(e) => setTipFixedAmount(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                )}

                {/* People Count */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Split Between (People)</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="number"
                            min="1"
                            value={people}
                            onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="border-t border-slate-100 pt-6 space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500">Tip Amount</span>
                        <span className="font-semibold text-slate-700">${finalTipAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500">Total Bill</span>
                        <span className="font-bold text-slate-900">${finalTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl mt-4">
                        <span className="text-indigo-700 font-medium">Per Person</span>
                        <span className="text-2xl font-bold text-indigo-900">${finalPerPerson.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
