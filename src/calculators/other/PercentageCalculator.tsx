import { useState } from 'react';
import { Percent } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

type Mode = 'whatIs' | 'isWhatPercent' | 'isPercentOf';

export default function PercentageCalculator() {
    const [mode, setMode] = useState<Mode>('whatIs');
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('percentage');

    const calculate = () => {
        const v1 = parseFloat(val1);
        const v2 = parseFloat(val2);
        if (isNaN(v1) || isNaN(v2)) return;

        let res = 0;
        switch (mode) {
            case 'whatIs':
                // What is X% of Y?
                res = (v1 / 100) * v2;
                break;
            case 'isWhatPercent':
                // X is what % of Y?
                res = (v1 / v2) * 100;
                break;
            case 'isPercentOf':
                // X is Y% of what?
                // X = (Y/100) * Z => Z = X / (Y/100)
                res = v1 / (v2 / 100);
                break;
        }
        setResult(res);
        addHistory(
            { mode, val1, val2 },
            `${Number.isInteger(res) ? res : res.toFixed(2)}${mode === 'isWhatPercent' ? '%' : ''}`,
            mode === 'whatIs' ? `${val1}% of ${val2}` : mode === 'isWhatPercent' ? `${val1} is what % of ${val2}` : `${val1} is ${val2}% of what?`
        );
    };

    const handleHistorySelect = (item: any) => {
        setMode(item.inputs.mode);
        setVal1(item.inputs.val1);
        setVal2(item.inputs.val2);
    };

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="flex justify-center flex-wrap gap-2">
                {([
                    { id: 'whatIs', label: 'What is X% of Y?' },
                    { id: 'isWhatPercent', label: 'X is what % of Y?' },
                    { id: 'isPercentOf', label: 'X is Y% of what?' }
                ] as const).map(m => (
                    <button
                        key={m.id}
                        onClick={() => { setMode(m.id); setResult(null); setVal1(''); setVal2(''); }}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                            mode === m.id
                                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                        )}
                    >
                        {m.label}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="flex flex-col md:flex-row items-center gap-4 text-lg font-medium text-slate-700 dark:text-slate-300 justify-center">
                    {mode === 'whatIs' && (
                        <>
                            <span>What is</span>
                            <div className="relative w-40">
                                <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 pr-8 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                                <Percent className="absolute right-2 top-3 text-slate-400 dark:text-slate-500 h-4 w-4" />
                            </div>
                            <span>of</span>
                            <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-48 p-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                        </>
                    )}

                    {mode === 'isWhatPercent' && (
                        <>
                            <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-40 p-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                            <span>is what % of</span>
                            <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-40 p-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                        </>
                    )}

                    {mode === 'isPercentOf' && (
                        <>
                            <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-40 p-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                            <span>is</span>
                            <div className="relative w-40">
                                <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-full p-2 pr-8 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                                <Percent className="absolute right-2 top-3 text-slate-400 dark:text-slate-500 h-4 w-4" />
                            </div>
                            <span>of what?</span>
                        </>
                    )}
                </div>

                <div className="flex justify-center">
                    <button onClick={calculate} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20">
                        Calculate
                    </button>
                </div>

                {result !== null && (
                    <div className="mt-6 text-center">
                        <div className="inline-block px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 min-w-[200px]">
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Result</span>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mt-1">
                                {Number.isInteger(result) ? result : result.toFixed(2)}
                                {mode === 'isWhatPercent' ? '%' : ''}
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
