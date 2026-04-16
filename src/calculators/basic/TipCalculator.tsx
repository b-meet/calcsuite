import { useState } from 'react';
import { User, TrendingUp, Info, Calculator, Settings2, ArrowRight } from 'lucide-react';
import { useCalculatorHistory, type HistoryItem } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { useWidget } from '../../context/WidgetContext';

type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

interface TipHistoryItem {
    inputs: {
        bill: string;
        currency?: CurrencyCode;
        people: string | number;
        mode: 'amount' | 'percent';
        tipPercent: string | number;
        tipFixedAmount: string;
        tax?: string;
        isTipBeforeTax?: boolean;
        rounding?: 'none' | 'tip' | 'total';
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
    const [currency, setCurrency] = useState<CurrencyCode>('USD');
    const [people, setPeople] = useState<string | number>(1);
    const [mode, setMode] = useState<'amount' | 'percent'>('percent');
    const [tipPercent, setTipPercent] = useState<string | number>(15);
    const [tipFixedAmount, setTipFixedAmount] = useState('');
    const [tax, setTax] = useState('');
    const [isTipBeforeTax, setIsTipBeforeTax] = useState(true);
    const [rounding, setRounding] = useState<'none' | 'tip' | 'total'>('none');
    const [showAdvanced, setShowAdvanced] = useState(false);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('tip');

    // Values for calculation (fallbacks for UI smoothness)
    const billNum = Number(bill) || 0;
    const taxNum = Number(tax) || 0;
    const peopleNum = Math.max(1, Number(people) || 1);
    const tipPctNum = Number(tipPercent) || 0;
    const fixedNum = Number(tipFixedAmount) || 0;
    const currencyDetails = currencyConfig[currency];

    // Calculation Logic
    const taxAmount = billNum * (taxNum / 100);
    const billTotalWithTax = billNum + taxAmount;

    // Industry standard is tipping on pre-tax amount
    const tipBase = isTipBeforeTax ? billNum : billTotalWithTax;

    let calculatedTip = mode === 'amount' ? fixedNum : tipBase * (tipPctNum / 100);

    // Apply Rounding
    if (rounding === 'tip') {
        calculatedTip = Math.ceil(calculatedTip);
    }

    let totalWithTip = billTotalWithTax + calculatedTip;

    if (rounding === 'total') {
        const roundedTotal = Math.ceil(totalWithTip);
        calculatedTip += (roundedTotal - totalWithTip);
        totalWithTip = roundedTotal;
    }

    const perPersonTotal = peopleNum > 0 ? totalWithTip / peopleNum : 0;
    const perPersonTip = peopleNum > 0 ? calculatedTip / peopleNum : 0;

    // Dynamic Tip Table Data
    const tipTableOptions = [10, 15, 18, 20, 25];
    const tipTableData = tipTableOptions.map(pct => {
        const tipAmt = tipBase * (pct / 100);
        return {
            pct,
            tip: tipAmt,
            total: billTotalWithTax + tipAmt,
            perPerson: (billTotalWithTax + tipAmt) / peopleNum
        };
    });

    const handleSave = () => {
        addHistory(
            { bill, currency, people, mode, tipPercent, tipFixedAmount, tax, isTipBeforeTax, rounding },
            `${formatCurrency(perPersonTotal, currency)} / person`,
            `Bill: ${formatCurrency(billNum, currency)}, Tip: ${formatCurrency(calculatedTip, currency)}`
        );
    };

    const handleHistorySelect = (item: HistoryItem) => {
        const inputs = item.inputs as TipHistoryItem['inputs'];
        setBill(inputs.bill);
        setCurrency(inputs.currency || 'USD');
        setPeople(inputs.people);
        setMode(inputs.mode);
        setTipPercent(inputs.tipPercent);
        setTipFixedAmount(inputs.tipFixedAmount);
        setTax(inputs.tax || '');
        setIsTipBeforeTax(inputs.isTipBeforeTax ?? true);
        setRounding(inputs.rounding || 'none');
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Input Section */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <Calculator className="w-4 h-4" />
                                Tip Calculator
                            </h2>
                            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                                {(['USD', 'EUR', 'GBP', 'INR'] as CurrencyCode[]).map((code) => (
                                    <button
                                        key={code}
                                        onClick={() => setCurrency(code)}
                                        className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all ${currency === code
                                            ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm'
                                            : 'text-slate-400 hover:text-slate-600'
                                            }`}
                                    >
                                        {code}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Bill Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 font-black text-2xl">
                                    {currencyDetails.symbol}
                                </span>
                                <input
                                    type="number"
                                    value={bill}
                                    onChange={(e) => setBill(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 rounded-2xl outline-none text-slate-900 dark:text-white text-3xl font-black transition-all"
                                    placeholder="0.00"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tip Mode</label>
                                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                                    <button
                                        onClick={() => setMode('percent')}
                                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'percent' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                                    >
                                        Percent
                                    </button>
                                    <button
                                        onClick={() => setMode('amount')}
                                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'amount' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                                    >
                                        Fixed
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                    People
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                    <input
                                        type="number"
                                        min="1"
                                        value={people}
                                        onChange={(e) => setPeople(e.target.value === '' ? '' : Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-transparent focus:bg-white dark:focus:bg-slate-800 border-2 focus:border-indigo-500 rounded-xl outline-none text-slate-900 dark:text-white font-bold transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {mode === 'percent' ? (
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Tip Percentage
                                    </label>
                                    <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-lg text-sm font-bold">
                                        {tipPercent}%
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    step="1"
                                    value={tipPctNum}
                                    onChange={(e) => setTipPercent(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="grid grid-cols-5 gap-2">
                                    {[10, 15, 18, 20, 25].map((pct) => (
                                        <button
                                            key={pct}
                                            onClick={() => setTipPercent(pct)}
                                            className={`py-1.5 rounded-lg text-xs font-bold transition-all ${tipPercent === pct
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 hover:bg-slate-200'
                                                }`}
                                        >
                                            {pct}%
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                                    Fixed Tip Amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                                        {currencyDetails.symbol}
                                    </span>
                                    <input
                                        type="number"
                                        value={tipFixedAmount}
                                        onChange={(e) => setTipFixedAmount(e.target.value)}
                                        className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white font-medium"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Advanced Options */}
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                            <button
                                onClick={() => setShowAdvanced(!showAdvanced)}
                                className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                            >
                                <Settings2 className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-90' : ''}`} />
                                Tax & Rounding Options
                            </button>

                            {showAdvanced && (
                                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4 animate-in slide-in-from-top duration-300">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tax Percentage</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={tax}
                                                onChange={(e) => setTax(e.target.value)}
                                                className="w-full pr-8 pl-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
                                                placeholder="0.00"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                            Tip on pre-tax amount
                                            <div className="group relative">
                                                <Info className="w-4 h-4 text-slate-400 cursor-help" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded shadow-xl hidden group-hover:block z-10">
                                                    Standard industry practice in US/Canada is to tip based on the total before tax.
                                                </div>
                                            </div>
                                        </label>
                                        <button
                                            onClick={() => setIsTipBeforeTax(!isTipBeforeTax)}
                                            className={`w-11 h-6 rounded-full transition-colors relative ${isTipBeforeTax ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'}`}
                                        >
                                            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isTipBeforeTax ? 'translate-x-5' : ''}`} />
                                        </button>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">Rounding Preferences</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {(['none', 'tip', 'total'] as const).map((r) => (
                                                <button
                                                    key={r}
                                                    onClick={() => setRounding(r)}
                                                    className={`py-2 rounded-lg text-[10px] font-bold uppercase tracking-tight transition-all border ${rounding === r
                                                        ? 'bg-indigo-600 border-indigo-600 text-white'
                                                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                                                        }`}
                                                >
                                                    {r}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    <div className="bg-indigo-600 dark:bg-indigo-500 rounded-3xl p-8 text-white shadow-xl shadow-indigo-200 dark:shadow-none relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <TrendingUp size={120} />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="text-center">
                                <p className="text-white/70 text-[10px] font-black mb-1 uppercase tracking-widest">Total Per Person</p>
                                <h3 className="text-6xl font-black tracking-tighter">{formatCurrency(perPersonTotal, currency)}</h3>
                                {peopleNum > 1 && (
                                    <p className="text-indigo-200 text-xs mt-2 font-medium bg-indigo-900/40 py-1 px-3 rounded-full inline-block">
                                        Includes {formatCurrency(perPersonTip, currency)} tip each
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                <div className="space-y-0.5">
                                    <p className="text-white/50 text-[10px] uppercase font-black tracking-wider">Total Tip</p>
                                    <p className="text-lg font-black">{formatCurrency(calculatedTip, currency)}</p>
                                </div>
                                <div className="space-y-0.5 text-right">
                                    <p className="text-white/50 text-[10px] uppercase font-black tracking-wider">Total Bill</p>
                                    <p className="text-lg font-black">{formatCurrency(totalWithTip, currency)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!isWidget && (
                        <button
                            onClick={handleSave}
                            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 dark:shadow-none uppercase tracking-widest text-[10px]"
                        >
                            <TrendingUp size={14} />
                            Save to History
                        </button>
                    )}
                </div>
            </div>

            {/* Comparison Section */}
            {!isWidget && (
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-indigo-500" />
                            Tip Comparison Guide
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {tipTableData.map((row) => (
                                <div key={row.pct} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 transition-all text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">{row.pct}%</p>
                                    <p className="text-lg font-black text-slate-900 dark:text-white mb-0.5">{formatCurrency(row.perPerson, currency)}</p>
                                    <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Total / person</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto pt-8">
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
