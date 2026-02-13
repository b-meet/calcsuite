import { useState, useMemo } from 'react';
import { Percent, TrendingUp, Calculator } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function IndiaGSTCalculator() {
    const [amount, setAmount] = useState<number | ''>(1000);
    const [gstRate, setGstRate] = useState<number>(18);
    const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('india-gst');

    const result = useMemo(() => {
        let gstAmount = 0;
        let totalAmount = 0;
        let originalAmount = 0;
        const safeAmount = Number(amount);

        if (gstRate === 0) {
            return {
                original: safeAmount,
                gst: 0,
                total: safeAmount
            };
        }

        if (type === 'exclusive') {
            gstAmount = (safeAmount * gstRate) / 100;
            totalAmount = safeAmount + gstAmount;
            originalAmount = safeAmount;
        } else {
            gstAmount = safeAmount - (safeAmount * (100 / (100 + gstRate)));
            totalAmount = safeAmount;
            originalAmount = safeAmount - gstAmount;
        }

        return {
            original: originalAmount,
            gst: gstAmount,
            total: totalAmount
        };
    }, [amount, gstRate, type]);

    const handleSave = () => {
        if (!amount) return;
        addHistory(
            { amount, gstRate, type },
            `₹${result.total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
            `₹${amount} @ ${gstRate}% (${type})`
        );
    };

    const handleHistorySelect = (item: any) => {
        setAmount(item.inputs.amount);
        setGstRate(item.inputs.gstRate);
        setType(item.inputs.type);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Amount (₹)
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
                            className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            GST Rate (%)
                        </label>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {[
                                { value: 0, label: 'Exempt', desc: 'Essentials', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                                { value: 5, label: 'Merit', desc: 'Daily Needs', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                                { value: 18, label: 'Standard', desc: 'Services', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                                { value: 40, label: 'Luxury', desc: 'Sin Goods', color: 'bg-rose-50 text-rose-700 border-rose-200' }
                            ].map((rateOption) => (
                                <button
                                    key={rateOption.value}
                                    onClick={() => setGstRate(rateOption.value)}
                                    className={`relative p-3 rounded-xl border text-left transition-all duration-200 group ${gstRate === rateOption.value
                                        ? 'ring-2 ring-blue-500 border-transparent shadow-md'
                                        : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-800'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`text-lg font-bold ${gstRate === rateOption.value ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                                            {rateOption.value}%
                                        </span>
                                        {rateOption.value === 0 && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">
                                                Zero
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                        {rateOption.label}
                                    </div>
                                    <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                                        {rateOption.desc}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Tax Type
                        </label>
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                            <button
                                onClick={() => setType('exclusive')}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${type === 'exclusive'
                                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                GST Exclusive
                            </button>
                            <button
                                onClick={() => setType('inclusive')}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${type === 'inclusive'
                                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                GST Inclusive
                            </button>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                            {type === 'exclusive'
                                ? 'Add GST to the amount'
                                : 'Extract GST from the total amount'}
                        </p>
                    </div>

                    <button
                        onClick={handleSave}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                        <TrendingUp size={20} />
                        Calculate & Save
                    </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <Percent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Result
                    </h3>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                            <span>Net Amount</span>
                            <span className="font-medium text-slate-900 dark:text-slate-200">₹ {result.original.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                            <span>GST Amount ({gstRate}%)</span>
                            <span className="font-medium text-blue-600 dark:text-blue-400">+ ₹ {result.gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-700"></div>

                        <div className="flex justify-between items-center text-slate-900 dark:text-white font-bold text-xl">
                            <span>Total Amount</span>
                            <span>₹ {result.total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-center">
                            <a href="#interest-calculator" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800">
                                <TrendingUp className="w-4 h-4" />
                                Check Late Payment Fees
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calculation Breakdown */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-indigo-500" />
                    How it works
                </h3>
                <div className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {type === 'exclusive'
                            ? `For GST Exclusive, we calculate tax on the base amount and add it.`
                            : `For GST Inclusive, we reverse-calculate to find the tax included in the total.`}
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm space-y-3 overflow-x-auto">
                        {type === 'exclusive' ? (
                            <>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="text-slate-400">Formula:</span>
                                    <span>Total = Base + (Base × Rate%)</span>
                                </div>
                                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                                <div className="space-y-1 text-slate-600 dark:text-slate-400">
                                    <div className="flex justify-between">
                                        <span>1. GST Amount:</span>
                                        <span>({result.original} × {gstRate}%) = {result.gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                                        <span>2. Total:</span>
                                        <span>{result.original} + {result.gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })} = {result.total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="text-slate-400">Formula:</span>
                                    <span>GST = Total - [Total ÷ (1 + Rate%)]</span>
                                </div>
                                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                                <div className="space-y-1 text-slate-600 dark:text-slate-400">
                                    <div className="flex justify-between">
                                        <span>1. Base Amount:</span>
                                        <span>{result.total} ÷ (1 + {gstRate / 100}) = {result.original.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                                        <span>2. GST Component:</span>
                                        <span>{result.total} - {result.original.toLocaleString('en-IN', { maximumFractionDigits: 2 })} = {result.gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
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

