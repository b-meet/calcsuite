import { useState } from 'react';
import { Percent } from 'lucide-react';

export default function IndiaGSTCalculator() {
    const [amount, setAmount] = useState<number>(1000);
    const [gstRate, setGstRate] = useState<number>(18);
    const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');

    const calculateGST = () => {
        let gstAmount = 0;
        let totalAmount = 0;
        let originalAmount = 0;

        if (type === 'exclusive') {
            gstAmount = (amount * gstRate) / 100;
            totalAmount = amount + gstAmount;
            originalAmount = amount;
        } else {
            gstAmount = amount - (amount * (100 / (100 + gstRate)));
            totalAmount = amount;
            originalAmount = amount - gstAmount;
        }

        return {
            original: originalAmount,
            gst: gstAmount,
            total: totalAmount
        };
    };

    const result = calculateGST();

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Amount (₹)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        GST Rate (%)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {[5, 12, 18, 28].map((rate) => (
                            <button
                                key={rate}
                                onClick={() => setGstRate(rate)}
                                className={`px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${gstRate === rate
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                    }`}
                            >
                                {rate}%
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
                </div>
            </div>
        </div>
    );
}
