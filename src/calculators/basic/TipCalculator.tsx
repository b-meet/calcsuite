import { useState } from 'react';
import { User, TrendingUp } from 'lucide-react';
import { useCalculatorHistory, type HistoryItem } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { useWidget } from '../../context/WidgetContext';

type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

interface TipHistoryItem {
    inputs: {
        bill: string;
        currency?: CurrencyCode;
        people: number;
        mode: 'amount' | 'percent';
        tipPercent: number;
        tipFixedAmount: string;
    };
}

const currencyConfig: Record<CurrencyCode, { label: string; locale: string; symbol: string }> = {
    INR: { label: 'INR', locale: 'en-IN', symbol: '₹' },
    USD: { label: 'USD', locale: 'en-US', symbol: '$' },
    EUR: { label: 'EUR', locale: 'en-IE', symbol: '€' },
    GBP: { label: 'GBP', locale: 'en-GB', symbol: '£' }
};

const formatCurrency = (value: number, currency: CurrencyCode) =>
    new Intl.NumberFormat(currencyConfig[currency].locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);

export default function TipCalculator() {
    const { isWidget } = useWidget();
    const [bill, setBill] = useState('');
    const [currency, setCurrency] = useState<CurrencyCode>('INR');
    const [people, setPeople] = useState(1);
    const [mode, setMode] = useState<'amount' | 'percent'>('amount');
    const [tipPercent, setTipPercent] = useState(10);
    const [tipFixedAmount, setTipFixedAmount] = useState('');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('tip');

    const billNum = Number(bill) || 0;
    const fixedNum = Number(tipFixedAmount) || 0;
    const currencyDetails = currencyConfig[currency];

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

    const handleSave = () => {
        addHistory(
            { bill, currency, people, mode, tipPercent, tipFixedAmount },
            `${formatCurrency(finalPerPerson, currency)} / person`,
            `Bill: ${formatCurrency(billNum, currency)}, Tip: ${formatCurrency(finalTipAmount, currency)}`
        );
    };

    const handleHistorySelect = (item: HistoryItem) => {
        const inputs = item.inputs as TipHistoryItem['inputs'];
        setBill(inputs.bill);
        setCurrency(inputs.currency || 'INR');
        setPeople(inputs.people);
        setMode(inputs.mode);
        setTipPercent(inputs.tipPercent);
        setTipFixedAmount(inputs.tipFixedAmount);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-lg mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Currency</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {(Object.keys(currencyConfig) as CurrencyCode[]).map((code) => (
                                <button
                                    key={code}
                                    onClick={() => setCurrency(code)}
                                    className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${currency === code
                                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-300'
                                        }`}
                                >
                                    {currencyConfig[code].symbol} {currencyConfig[code].label}
                                </button>
                            ))}
                        </div>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            Tip is optional. If your bill already has a service charge, check before adding an extra tip.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Bill Amount ({currencyDetails.label})
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold">
                                {currencyDetails.symbol}
                            </span>
                            <input
                                type="number"
                                value={bill}
                                onChange={(e) => setBill(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg flex">
                        <button
                            onClick={() => setMode('amount')}
                            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'amount'
                                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                }`}
                        >
                            Fixed Amount
                        </button>
                        <button
                            onClick={() => setMode('percent')}
                            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'percent'
                                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                }`}
                        >
                            Percentage
                        </button>
                    </div>

                    {mode === 'percent' ? (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Tip Percentage: <span className="text-indigo-600 dark:text-indigo-400 font-bold">{tipPercent}%</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="25"
                                step="1"
                                value={tipPercent}
                                onChange={(e) => setTipPercent(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                            <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
                                {[5, 7, 10, 12, 15].map((pct) => (
                                    <button
                                        key={pct}
                                        onClick={() => setTipPercent(pct)}
                                        className={`px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${tipPercent === pct ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30' : ''}`}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Tip Amount ({currencyDetails.label})
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold">
                                    {currencyDetails.symbol}
                                </span>
                                <input
                                    type="number"
                                    value={tipFixedAmount}
                                    onChange={(e) => setTipFixedAmount(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Split Between (People)</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
                            <input
                                type="number"
                                min="1"
                                value={people}
                                onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 dark:text-slate-400">Tip Amount</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-200">{formatCurrency(finalTipAmount, currency)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 dark:text-slate-400">Total Bill</span>
                            <span className="font-bold text-slate-900 dark:text-white">{formatCurrency(finalTotal, currency)}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl mt-4">
                            <span className="text-indigo-700 dark:text-indigo-300 font-medium">Per Person</span>
                            <span className="text-2xl font-bold text-indigo-900 dark:text-white">{formatCurrency(finalPerPerson, currency)}</span>
                        </div>
                    </div>

                    {!isWidget && (
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleSave}
                                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 flex items-center justify-center gap-2"
                            >
                                <TrendingUp size={18} />
                                Save to History
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                <CalculationHistory
                    history={history}
                    onSelect={handleHistorySelect}
                    onClear={clearHistory}
                    onRemove={removeHistoryItem}
                />
            </div>
        </div>
    );
}
