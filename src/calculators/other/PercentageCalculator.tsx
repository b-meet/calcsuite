import { useState } from 'react';
import { Copy, Percent, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { copyTextToClipboard } from '../../utils/copyToClipboard';

type Mode = 'whatIs' | 'isWhatPercent' | 'isPercentOf';

type Example = {
    label: string;
    mode: Mode;
    val1: number;
    val2: number;
    description: string;
};

const modeDetails: Record<Mode, { label: string; resultSuffix: string }> = {
    whatIs: {
        label: 'What is X% of Y?',
        resultSuffix: '',
    },
    isWhatPercent: {
        label: 'X is what % of Y?',
        resultSuffix: '%',
    },
    isPercentOf: {
        label: 'X is Y% of what?',
        resultSuffix: '',
    },
};

const examples: Example[] = [
    { label: '15% of 240', mode: 'whatIs', val1: 15, val2: 240, description: 'Returns 36' },
    { label: '45 is what % of 180?', mode: 'isWhatPercent', val1: 45, val2: 180, description: 'Returns 25%' },
    { label: '45 is 15% of what?', mode: 'isPercentOf', val1: 45, val2: 15, description: 'Returns 300' },
];

function formatNumber(value: number) {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(value);
}

function getExpression(mode: Mode, val1: string, val2: string) {
    if (mode === 'whatIs') {
        return `${val1}% of ${val2}`;
    }

    if (mode === 'isWhatPercent') {
        return `${val1} is what % of ${val2}`;
    }

    return `${val1} is ${val2}% of what?`;
}

function calculatePercentage(mode: Mode, val1: number, val2: number) {
    if (Number.isNaN(val1) || Number.isNaN(val2)) return null;

    switch (mode) {
        case 'whatIs':
            return (val1 / 100) * val2;
        case 'isWhatPercent':
            if (val2 === 0) return null;
            return (val1 / val2) * 100;
        case 'isPercentOf':
            if (val2 === 0) return null;
            return val1 / (val2 / 100);
        default:
            return null;
    }
}

function buildCopyText(mode: Mode, val1: string, val2: string, result: number) {
    const expression = getExpression(mode, val1, val2);
    const formattedResult = `${formatNumber(result)}${mode === 'isWhatPercent' ? '%' : ''}`;

    return [
        'CalcSuite Percentage Calculator',
        `Mode: ${modeDetails[mode].label}`,
        `Input: ${expression}`,
        `Result: ${formattedResult}`,
    ].join('\n');
}

export default function PercentageCalculator() {
    const [mode, setMode] = useState<Mode>('whatIs');
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [result, setResult] = useState<number | null>(null);
    const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('percentage');

    const recordHistory = (nextMode: Mode, nextVal1: string, nextVal2: string, computed: number) => {
        addHistory(
            { mode: nextMode, val1: nextVal1, val2: nextVal2 },
            `${formatNumber(computed)}${nextMode === 'isWhatPercent' ? '%' : ''}`,
            getExpression(nextMode, nextVal1, nextVal2),
        );
    };

    const calculate = (nextMode = mode, nextVal1 = val1, nextVal2 = val2) => {
        const parsedVal1 = parseFloat(nextVal1);
        const parsedVal2 = parseFloat(nextVal2);
        const computed = calculatePercentage(nextMode, parsedVal1, parsedVal2);

        if (computed === null) {
            setResult(null);
            return;
        }

        setResult(computed);
        setCopyState('idle');

        if (nextMode === mode && nextVal1 === val1 && nextVal2 === val2) {
            recordHistory(nextMode, nextVal1, nextVal2, computed);
        }
    };

    const handleModeChange = (nextMode: Mode) => {
        setMode(nextMode);
        setVal1('');
        setVal2('');
        setResult(null);
        setCopyState('idle');
    };

    const handleExample = (example: Example) => {
        setMode(example.mode);
        setVal1(String(example.val1));
        setVal2(String(example.val2));

        const computed = calculatePercentage(example.mode, example.val1, example.val2);
        if (computed === null) return;

        setResult(computed);
        setCopyState('idle');
        recordHistory(example.mode, String(example.val1), String(example.val2), computed);
    };

    const handleCopy = async () => {
        if (result === null) return;

        const copied = await copyTextToClipboard(buildCopyText(mode, val1, val2, result));
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
                            Load an example to auto-fill the inputs, or choose a mode and calculate manually.
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
                                <Sparkles className="h-4 w-4" />
                                {example.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <div className="flex flex-wrap justify-center gap-2">
                    {([
                        { id: 'whatIs', label: 'What is X% of Y?' },
                        { id: 'isWhatPercent', label: 'X is what % of Y?' },
                        { id: 'isPercentOf', label: 'X is Y% of what?' },
                    ] as const).map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleModeChange(item.id)}
                            className={cn(
                                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                                mode === item.id
                                    ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center gap-4 text-lg font-medium text-slate-700 dark:text-slate-300 md:flex-row">
                    {mode === 'whatIs' && (
                        <>
                            <span>What is</span>
                            <div className="relative w-40">
                                <input
                                    type="number"
                                    inputMode="decimal"
                                    value={val1}
                                    onChange={(e) => setVal1(e.target.value)}
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 pr-8 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    aria-label="Percentage value"
                                />
                                <Percent className="absolute right-2 top-3 h-4 w-4 text-slate-400 dark:text-slate-500" />
                            </div>
                            <span>of</span>
                            <input
                                type="number"
                                inputMode="decimal"
                                value={val2}
                                onChange={(e) => setVal2(e.target.value)}
                                className="w-48 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                aria-label="Base value"
                            />
                        </>
                    )}

                    {mode === 'isWhatPercent' && (
                        <>
                            <input
                                type="number"
                                inputMode="decimal"
                                value={val1}
                                onChange={(e) => setVal1(e.target.value)}
                                className="w-40 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                aria-label="Part value"
                            />
                            <span>is what % of</span>
                            <input
                                type="number"
                                inputMode="decimal"
                                value={val2}
                                onChange={(e) => setVal2(e.target.value)}
                                className="w-40 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                aria-label="Whole value"
                            />
                        </>
                    )}

                    {mode === 'isPercentOf' && (
                        <>
                            <input
                                type="number"
                                inputMode="decimal"
                                value={val1}
                                onChange={(e) => setVal1(e.target.value)}
                                className="w-40 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                aria-label="Known value"
                            />
                            <span>is</span>
                            <div className="relative w-40">
                                <input
                                    type="number"
                                    inputMode="decimal"
                                    value={val2}
                                    onChange={(e) => setVal2(e.target.value)}
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 pr-8 text-slate-900 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    aria-label="Percentage value"
                                />
                                <Percent className="absolute right-2 top-3 h-4 w-4 text-slate-400 dark:text-slate-500" />
                            </div>
                            <span>of what?</span>
                        </>
                    )}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => calculate()}
                        className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 dark:shadow-blue-900/20"
                    >
                        Calculate
                    </button>
                    <button
                        type="button"
                        onClick={handleCopy}
                        disabled={result === null}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-blue-400"
                    >
                        <Copy className="h-4 w-4" />
                        {copyState === 'copied' ? 'Copied' : 'Copy inputs + result'}
                    </button>
                </div>

                <div
                    role="status"
                    aria-live="polite"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800"
                >
                    {result === null ? (
                        <p className="m-0 text-sm text-slate-500 dark:text-slate-400">
                            Enter numbers or pick an example to see the result.
                        </p>
                    ) : (
                        <>
                            <span className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                Result
                            </span>
                            <div className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                                {formatNumber(result)}
                                {modeDetails[mode].resultSuffix}
                            </div>
                            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                                {getExpression(mode, val1, val2)} = {formatNumber(result)}
                                {mode === 'isWhatPercent' ? '%' : ''}
                            </p>
                        </>
                    )}
                </div>
            </section>

            <CalculationHistory
                history={history}
                onSelect={(item) => {
                    setMode(item.inputs.mode);
                    setVal1(item.inputs.val1);
                    setVal2(item.inputs.val2);
                    const computed = calculatePercentage(item.inputs.mode, parseFloat(item.inputs.val1), parseFloat(item.inputs.val2));
                    setResult(computed);
                    setCopyState('idle');
                }}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </section>
    );
}
