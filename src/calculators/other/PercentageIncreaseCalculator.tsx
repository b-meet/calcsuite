import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export default function PercentageIncreaseCalculator() {
    const [original, setOriginal] = useState(100);
    const [newValue, setNewValue] = useState(150);

    const [result, setResult] = useState<{
        difference: number;
        percentChange: number;
        percentOfOriginal: number;
        type: 'increase' | 'decrease' | 'no change';
    } | null>(null);

    const calculate = () => {
        const diff = newValue - original;

        let percentChange = 0;
        let pOfOriginal = 0;
        let type: 'increase' | 'decrease' | 'no change' = 'no change';

        if (original !== 0) {
            percentChange = (diff / original) * 100;
            pOfOriginal = (newValue / original) * 100;
        }

        if (diff > 0) type = 'increase';
        else if (diff < 0) type = 'decrease';

        setResult({
            difference: diff,
            percentChange,
            percentOfOriginal: pOfOriginal,
            type
        });
    };

    useEffect(() => {
        calculate();
    }, [original, newValue]);

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Original Value</label>
                        <input
                            type="number"
                            value={original}
                            onChange={(e) => setOriginal(Number(e.target.value))}
                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">New Value</label>
                        <input
                            type="number"
                            value={newValue}
                            onChange={(e) => setNewValue(Number(e.target.value))}
                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                    </div>
                </div>

                {/* Result Block */}
                <div className={`p-8 rounded-2xl text-center border transition-colors ${result?.type === 'increase' ? 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900/30' :
                    result?.type === 'decrease' ? 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/30' :
                        'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}>
                    {original === 0 ? (
                        <p className="text-slate-500 dark:text-slate-400">Cannot calculate percentage change from 0.</p>
                    ) : (
                        <>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                {result?.type === 'increase' && <ArrowUpRight className="w-6 h-6 text-green-600 dark:text-green-400" />}
                                {result?.type === 'decrease' && <ArrowDownRight className="w-6 h-6 text-red-600 dark:text-red-400" />}
                                {result?.type === 'no change' && <Minus className="w-6 h-6 text-slate-400 dark:text-slate-500" />}
                                <span className={`text-sm font-bold uppercase tracking-wide ${result?.type === 'increase' ? 'text-green-700 dark:text-green-400' :
                                    result?.type === 'decrease' ? 'text-red-700 dark:text-red-400' :
                                        'text-slate-500 dark:text-slate-400'
                                    }`}>
                                    {result?.type}
                                </span>
                            </div>

                            <div className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
                                {Math.abs(result?.percentChange || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}%
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm max-w-sm mx-auto">
                                <div className="bg-white/50 dark:bg-slate-900/50 p-3 rounded-lg">
                                    <p className="text-slate-500 dark:text-slate-400 mb-1">Difference</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        {result?.difference && result.difference > 0 ? '+' : ''}
                                        {result?.difference.toLocaleString()}
                                    </p>
                                </div>
                                <div className="bg-white/50 dark:bg-slate-900/50 p-3 rounded-lg">
                                    <p className="text-slate-500 dark:text-slate-400 mb-1">% of Original</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        {result?.percentOfOriginal.toLocaleString(undefined, { maximumFractionDigits: 2 })}%
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-500 dark:text-slate-400 mt-6 text-sm">
                                The value went from <strong className="text-slate-900 dark:text-white">{original}</strong> to <strong className="text-slate-900 dark:text-white">{newValue}</strong>.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
