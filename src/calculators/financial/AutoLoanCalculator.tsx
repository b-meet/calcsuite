import { lazy, Suspense, useState } from 'react';
import { Car } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { calculateAmortizationSchedule } from '../../utils/amortization';

const AmortizationSchedule = lazy(() => import('../../components/AmortizationSchedule'));

interface AutoLoanResult {
    monthly: number;
    totalLoan: number;
    totalInterest: number;
    totalCost: number;
    salesTaxAmount: number;
    schedule: NonNullable<ReturnType<typeof calculateAmortizationSchedule>>['schedule'];
}

interface AutoLoanErrors {
    price?: string;
    down?: string;
    tradeIn?: string;
    rate?: string;
    term?: string;
    tax?: string;
    form?: string;
}

function getInputClass(hasError: boolean, extraClass = '') {
    return `block w-full rounded-xl border px-4 py-3 bg-slate-50 text-slate-900 focus:ring-2 dark:bg-slate-800 dark:text-white ${hasError
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-500/70 dark:focus:ring-red-500/20'
        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-slate-700'} ${extraClass}`;
}

export default function AutoLoanCalculator() {
    const [price, setPrice] = useState('');
    const [down, setDown] = useState('');
    const [tradeIn, setTradeIn] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState('60');
    const [tax, setTax] = useState('');
    const [result, setResult] = useState<AutoLoanResult | null>(null);
    const [errors, setErrors] = useState<AutoLoanErrors>({});
    const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('auto-loan');

    const validateInputs = () => {
        const nextErrors: AutoLoanErrors = {};
        const parsedPrice = Number(price);
        const parsedDown = down.trim() === '' ? 0 : Number(down);
        const parsedTradeIn = tradeIn.trim() === '' ? 0 : Number(tradeIn);
        const parsedRate = Number(rate);
        const parsedTerm = Number(term);
        const parsedTax = tax.trim() === '' ? 0 : Number(tax);

        if (price.trim() === '') {
            nextErrors.price = 'Enter the vehicle price.';
        } else if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
            nextErrors.price = 'Vehicle price must be greater than 0.';
        }

        if (!Number.isFinite(parsedDown) || parsedDown < 0) {
            nextErrors.down = 'Down payment cannot be negative.';
        }

        if (!Number.isFinite(parsedTradeIn) || parsedTradeIn < 0) {
            nextErrors.tradeIn = 'Trade-in value cannot be negative.';
        }

        if (rate.trim() === '') {
            nextErrors.rate = 'Enter an annual interest rate.';
        } else if (!Number.isFinite(parsedRate) || parsedRate < 0) {
            nextErrors.rate = 'Interest rate cannot be negative.';
        } else if (parsedRate > 100) {
            nextErrors.rate = 'Enter an annual interest rate below 100%.';
        }

        if (!Number.isFinite(parsedTerm) || parsedTerm <= 0) {
            nextErrors.term = 'Choose a valid loan term.';
        }

        if (!Number.isFinite(parsedTax) || parsedTax < 0) {
            nextErrors.tax = 'Sales tax cannot be negative.';
        } else if (parsedTax > 25) {
            nextErrors.tax = 'Sales tax looks too high. Double-check the percentage.';
        }

        if (Number.isFinite(parsedPrice) && Number.isFinite(parsedDown) && parsedDown > parsedPrice) {
            nextErrors.down = 'Down payment cannot exceed the vehicle price.';
        }

        if (Number.isFinite(parsedPrice) && Number.isFinite(parsedTradeIn) && parsedTradeIn > parsedPrice) {
            nextErrors.tradeIn = 'Trade-in value cannot exceed the vehicle price.';
        }

        const taxableAmount = Math.max(parsedPrice - parsedTradeIn, 0);
        const salesTaxAmount = taxableAmount * (parsedTax / 100);
        const financedAmount = parsedPrice + salesTaxAmount - parsedDown - parsedTradeIn;

        if (Object.keys(nextErrors).length === 0 && financedAmount <= 0) {
            nextErrors.form = 'Financed amount must be greater than 0 after down payment, trade-in, and tax.';
        }

        return {
            errors: nextErrors,
            values: Object.keys(nextErrors).length === 0
                ? {
                    price: parsedPrice,
                    down: parsedDown,
                    tradeIn: parsedTradeIn,
                    rate: parsedRate,
                    term: parsedTerm,
                    tax: parsedTax,
                    salesTaxAmount,
                    financedAmount,
                }
                : null,
        };
    };

    const calculate = () => {
        setHasTriedSubmit(true);
        const validation = validateInputs();
        setErrors(validation.errors);

        if (!validation.values) {
            setResult(null);
            return;
        }

        const amortization = calculateAmortizationSchedule({
            principal: validation.values.financedAmount,
            annualRate: validation.values.rate,
            numberOfPayments: validation.values.term,
        });

        if (!amortization) {
            setErrors({ form: 'Unable to calculate the auto loan schedule with the values entered.' });
            setResult(null);
            return;
        }

        setErrors({});
        setResult({
            monthly: amortization.periodicPayment,
            totalLoan: validation.values.financedAmount,
            salesTaxAmount: validation.values.salesTaxAmount,
            totalInterest: amortization.totalInterest,
            totalCost: validation.values.price + validation.values.salesTaxAmount + amortization.totalInterest,
            schedule: amortization.schedule,
        });

        addHistory(
            validation.values,
            `$${amortization.periodicPayment.toFixed(2)}/mo`,
            `$${validation.values.price.toLocaleString()} Car, ${validation.values.term}mo`
        );
    };

    const handleHistorySelect = (item: any) => {
        setPrice(String(item.inputs.price));
        setDown(String(item.inputs.down ?? ''));
        setTradeIn(String(item.inputs.tradeIn ?? ''));
        setRate(String(item.inputs.rate));
        setTerm(String(item.inputs.term));
        setTax(String(item.inputs.tax ?? ''));
        setErrors({});
        setHasTriedSubmit(false);
    };

    const visibleErrors = hasTriedSubmit ? errors : {};
    const labelClass = 'mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300';
    const errorClass = 'mt-2 text-sm text-red-600 dark:text-red-400';

    return (
        <div className="mx-auto max-w-4xl space-y-8">
            <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                {visibleErrors.form && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
                        {visibleErrors.form}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className={labelClass}>Vehicle Price</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input
                                type="number"
                                inputMode="decimal"
                                min="0"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className={getInputClass(Boolean(visibleErrors.price), 'pl-8')}
                                placeholder="30000"
                            />
                        </div>
                        {visibleErrors.price && <p className={errorClass}>{visibleErrors.price}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Interest Rate (%)</label>
                        <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className={getInputClass(Boolean(visibleErrors.rate))}
                            placeholder="5.9"
                        />
                        {visibleErrors.rate && <p className={errorClass}>{visibleErrors.rate}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Down Payment</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input
                                type="number"
                                inputMode="decimal"
                                min="0"
                                value={down}
                                onChange={(e) => setDown(e.target.value)}
                                className={getInputClass(Boolean(visibleErrors.down), 'pl-8')}
                                placeholder="5000"
                            />
                        </div>
                        {visibleErrors.down && <p className={errorClass}>{visibleErrors.down}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Trade-in Value</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input
                                type="number"
                                inputMode="decimal"
                                min="0"
                                value={tradeIn}
                                onChange={(e) => setTradeIn(e.target.value)}
                                className={getInputClass(Boolean(visibleErrors.tradeIn), 'pl-8')}
                                placeholder="0"
                            />
                        </div>
                        {visibleErrors.tradeIn && <p className={errorClass}>{visibleErrors.tradeIn}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Loan Term (Months)</label>
                        <select value={term} onChange={(e) => setTerm(e.target.value)} className={getInputClass(Boolean(visibleErrors.term))}>
                            <option value="36">36 Months</option>
                            <option value="48">48 Months</option>
                            <option value="60">60 Months</option>
                            <option value="72">72 Months</option>
                            <option value="84">84 Months</option>
                        </select>
                        {visibleErrors.term && <p className={errorClass}>{visibleErrors.term}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Sales Tax (%)</label>
                        <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            value={tax}
                            onChange={(e) => setTax(e.target.value)}
                            className={getInputClass(Boolean(visibleErrors.tax))}
                            placeholder="7.0"
                        />
                        {visibleErrors.tax && <p className={errorClass}>{visibleErrors.tax}</p>}
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={calculate}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 dark:shadow-blue-900/20"
                    >
                        <Car size={20} />
                        Calculate Auto Loan
                    </button>
                </div>

                {result && (
                    <>
                        <div className="mt-8 space-y-4">
                            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center dark:border-blue-900/30 dark:bg-blue-900/20">
                                <span className="text-sm font-medium uppercase tracking-wide text-blue-800 dark:text-blue-300">Monthly Payment</span>
                                <div className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                                    ${result.monthly.toFixed(2)}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
                                    <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Loan Amount</span>
                                    <div className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">${result.totalLoan.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                </div>
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
                                    <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Sales Tax</span>
                                    <div className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">${result.salesTaxAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                </div>
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
                                    <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Total Interest</span>
                                    <div className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                </div>
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
                                    <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">Total Cost</span>
                                    <div className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">${result.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                </div>
                            </div>
                        </div>

                        <Suspense fallback={<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">Loading amortization schedule...</div>}>
                            <AmortizationSchedule
                                schedule={result.schedule}
                                fileName="auto-loan-amortization-schedule.csv"
                            />
                        </Suspense>
                    </>
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
