import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Copy, Minus, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { copyTextToClipboard } from '../../utils/copyToClipboard';

type ChangeType = 'increase' | 'decrease' | 'no change';

interface ChangeResult {
    difference: number;
    percentChange: number;
    percentOfOriginal: number;
    type: ChangeType;
}

type Example = {
    label: string;
    original: number;
    newValue: number;
    description: string;
};

const examples: Example[] = [
    { label: '100 → 150', original: 100, newValue: 150, description: 'Increase of 50%' },
    { label: '250 → 175', original: 250, newValue: 175, description: 'Decrease of 30%' },
    { label: '80 → 80', original: 80, newValue: 80, description: 'No change' },
];

function formatNumber(value: number) {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(value);
}

function calculatePercentageChange(original: number, newValue: number): ChangeResult | null {
    if (Number.isNaN(original) || Number.isNaN(newValue) || original === undefined || newValue === undefined) {
        return null;
    }

    if (original === 0) {
        return null;
    }

    const difference = newValue - original;
    const percentChange = (difference / original) * 100;
    const percentOfOriginal = (newValue / original) * 100;
    const type: ChangeType = difference > 0 ? 'increase' : difference < 0 ? 'decrease' : 'no change';

    return {
        difference,
        percentChange,
        percentOfOriginal,
        type,
    };
}

function buildCopyText(original: number, newValue: number, result: ChangeResult) {
    const signedPercentChange = `${result.percentChange > 0 ? '+' : ''}${formatNumber(result.percentChange)}%`;
    const signedDifference = `${result.difference > 0 ? '+' : ''}${formatNumber(result.difference)}`;

    return [
        'CalcSuite Percentage Change Calculator',
        `Original value: ${formatNumber(original)}`,
        `New value: ${formatNumber(newValue)}`,
        `Difference: ${signedDifference}`,
        `Percentage change: ${signedPercentChange}`,
        `Percent of original: ${formatNumber(result.percentOfOriginal)}%`,
    ].join('\n');
}

export default function PercentageIncreaseCalculator() {
    const [original, setOriginal] = useState(100);
    const [newValue, setNewValue] = useState(150);
    const [result, setResult] = useState<ChangeResult | null>(null);
    const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('percentage-increase');

    useEffect(() => {
        setResult(calculatePercentageChange(original, newValue));
    }, [original, newValue]);

    const handleExample = (example: Example) => {
        setOriginal(example.original);
        setNewValue(example.newValue);

        const computed = calculatePercentageChange(example.original, example.newValue);
        setResult(computed);
        setCopyState('idle');
    };

    const handleSave = () => {
        if (!result || original === 0) return;

        addHistory(
            { original, newValue },
            `${result.percentChange > 0 ? '+' : ''}${formatNumber(result.percentChange)}%`,
            `${formatNumber(original)} → ${formatNumber(newValue)}`
        );
    };

    const handleCopy = async () => {
        if (!result || original === 0) return;

        const copied = await copyTextToClipboard(buildCopyText(original, newValue, result));
        setCopyState(copied ? 'copied' : 'error');

        if (copied) {
            window.setTimeout(() => setCopyState('idle'), 1800);
        }
    };

    return (
        <section className="max-w-4xl mx-auto space-y-8">
            <section className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Try the calculator</h2>
                        <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                            Pick an example to auto-fill both inputs, then compare the original and new values instantly.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {examples.map((example) => (
                            <button
                                key={example.label}
                                type="button"
                                onClick={() => handleExample(example)}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-blue-400"
                                title={example.description}
                            >
                                <TrendingUp className="h-4 w-4" />
                                {example.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Original Value
                        </label>
                        <input
                            type="number"
                            inputMode="decimal"
                            value={original}
                            onChange={(e) => setOriginal(Number(e.target.value))}
                            className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-lg text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            New Value
                        </label>
                        <input
                            type="number"
                            inputMode="decimal"
                            value={newValue}
                            onChange={(e) => setNewValue(Number(e.target.value))}
                            className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-lg text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 dark:shadow-blue-900/20"
                    >
                        <TrendingUp size={18} />
                        Save to History
                    </button>
                    <button
                        type="button"
                        onClick={handleCopy}
                        disabled={!result || original === 0}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-blue-400"
                    >
                        <Copy className="h-4 w-4" />
                        {copyState === 'copied' ? 'Copied' : 'Copy inputs + result'}
                    </button>
                </div>

                <div
                    className={`rounded-2xl border p-8 text-center transition-colors ${
                        result?.type === 'increase'
                            ? 'border-green-100 bg-green-50 dark:border-green-900/30 dark:bg-green-900/20'
                            : result?.type === 'decrease'
                                ? 'border-red-100 bg-red-50 dark:border-red-900/30 dark:bg-red-900/20'
                                : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800'
                    }`}
                    role="status"
                    aria-live="polite"
                >
                    {original === 0 ? (
                        <p className="m-0 text-slate-500 dark:text-slate-400">
                            Cannot calculate percentage change from 0.
                        </p>
                    ) : result ? (
                        <>
                            <div className="mb-2 flex items-center justify-center gap-2">
                                {result.type === 'increase' && <ArrowUpRight className="h-6 w-6 text-green-600 dark:text-green-400" />}
                                {result.type === 'decrease' && <ArrowDownRight className="h-6 w-6 text-red-600 dark:text-red-400" />}
                                {result.type === 'no change' && <Minus className="h-6 w-6 text-slate-400 dark:text-slate-500" />}
                                <span
                                    className={`text-sm font-bold uppercase tracking-wide ${
                                        result.type === 'increase'
                                            ? 'text-green-700 dark:text-green-400'
                                            : result.type === 'decrease'
                                                ? 'text-red-700 dark:text-red-400'
                                                : 'text-slate-500 dark:text-slate-400'
                                    }`}
                                >
                                    {result.type}
                                </span>
                            </div>
                            <div className="mb-4 text-5xl font-bold text-slate-900 dark:text-white">
                                {result.percentChange > 0 ? '+' : ''}
                                {formatNumber(Math.abs(result.percentChange))}%
                            </div>
                            <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 text-sm">
                                <div className="rounded-lg bg-white/50 p-3 dark:bg-slate-900/50">
                                    <p className="mb-1 text-slate-500 dark:text-slate-400">Difference</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        {result.difference > 0 ? '+' : ''}
                                        {formatNumber(result.difference)}
                                    </p>
                                </div>
                                <div className="rounded-lg bg-white/50 p-3 dark:bg-slate-900/50">
                                    <p className="mb-1 text-slate-500 dark:text-slate-400">% of Original</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        {formatNumber(result.percentOfOriginal)}%
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="m-0 text-slate-500 dark:text-slate-400">
                            Enter values to see the percentage change.
                        </p>
                    )}
                </div>
            </section>

            <CalculationHistory
                history={history}
                onSelect={(item) => {
                    setOriginal(item.inputs.original);
                    setNewValue(item.inputs.newValue);
                    setResult(calculatePercentageChange(item.inputs.original, item.inputs.newValue));
                    setCopyState('idle');
                }}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </section>
    );
}
