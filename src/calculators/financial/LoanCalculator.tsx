import { lazy, Suspense, useState } from 'react';
import { DollarSign } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { calculateAmortizationSchedule } from '../../utils/amortization';
import type { AmortizationRow } from '../../utils/amortization';

const AmortizationSchedule = lazy(() => import('../../components/AmortizationSchedule'));

interface LoanResult {
    monthly: number;
    totalInterest: number;
    totalPayment: number;
    schedule: AmortizationRow[];
}

interface LoanErrors {
    amount?: string;
    rate?: string;
    term?: string;
    form?: string;
}

function getFieldClass(hasError: boolean, extraClass = '') {
    return `block w-full rounded-xl border px-4 py-3 bg-slate-50 text-slate-900 focus:ring-2 dark:bg-slate-800 dark:text-white ${hasError
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-500/70 dark:focus:ring-red-500/20'
        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 dark:border-slate-700'} ${extraClass}`;
}

export default function LoanCalculator() {
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState('');
    const [result, setResult] = useState<LoanResult | null>(null);
    const [errors, setErrors] = useState<LoanErrors>({});
    const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('loan');

    const validateInputs = () => {
        const nextErrors: LoanErrors = {};
        const parsedAmount = Number(amount);
        const parsedRate = Number(rate);
        const parsedTerm = Number(term);

        if (amount.trim() === '') {
            nextErrors.amount = 'Enter the amount you plan to borrow.';
        } else if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
            nextErrors.amount = 'Loan amount must be greater than 0.';
        }

        if (rate.trim() === '') {
            nextErrors.rate = 'Enter an annual interest rate.';
        } else if (!Number.isFinite(parsedRate) || parsedRate < 0) {
            nextErrors.rate = 'Interest rate cannot be negative.';
        } else if (parsedRate > 100) {
            nextErrors.rate = 'Enter an annual interest rate below 100%.';
        }

        if (term.trim() === '') {
            nextErrors.term = 'Enter the loan term in years.';
        } else if (!Number.isFinite(parsedTerm) || parsedTerm <= 0) {
            nextErrors.term = 'Loan term must be greater than 0 years.';
        } else {
            const monthlyPayments = parsedTerm * 12;
            if (!Number.isInteger(monthlyPayments)) {
                nextErrors.term = 'Use a term that converts to full months, such as 1, 1.5, 2, or 5 years.';
            }
        }

        return {
            errors: nextErrors,
            values: Object.keys(nextErrors).length === 0
                ? {
                    amount: parsedAmount,
                    rate: parsedRate,
                    term: parsedTerm,
                    numberOfPayments: parsedTerm * 12,
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
            principal: validation.values.amount,
            annualRate: validation.values.rate,
            numberOfPayments: validation.values.numberOfPayments,
        });

        if (!amortization) {
            setErrors({ form: 'Unable to calculate the repayment schedule with the values entered.' });
            setResult(null);
            return;
        }

        setErrors({});
        setResult({
            monthly: amortization.periodicPayment,
            totalInterest: amortization.totalInterest,
            totalPayment: amortization.totalPayment,
            schedule: amortization.schedule,
        });

        addHistory(
            { amount: validation.values.amount, rate: validation.values.rate, term: validation.values.term },
            `$${amortization.periodicPayment.toFixed(2)}/mo`,
            `$${validation.values.amount.toLocaleString()}, ${validation.values.rate}%, ${validation.values.term}y`
        );
    };

    const handleHistorySelect = (item: any) => {
        setAmount(String(item.inputs.amount));
        setRate(String(item.inputs.rate));
        setTerm(String(item.inputs.term));
        setErrors({});
        setHasTriedSubmit(false);
    };

    const visibleErrors = hasTriedSubmit ? errors : {};
    const labelClass = 'mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300';
    const errorClass = 'mt-2 text-sm text-red-600 dark:text-red-400';

    return (
        <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                {visibleErrors.form && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
                        {visibleErrors.form}
                    </div>
                )}

                <div>
                    <label className={labelClass}>Loan Amount</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                        <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={getFieldClass(Boolean(visibleErrors.amount), 'pl-8')}
                            placeholder="0.00"
                        />
                    </div>
                    {visibleErrors.amount && <p className={errorClass}>{visibleErrors.amount}</p>}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className={labelClass}>Interest Rate (%)</label>
                        <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className={getFieldClass(Boolean(visibleErrors.rate))}
                            placeholder="4.5"
                        />
                        {visibleErrors.rate && <p className={errorClass}>{visibleErrors.rate}</p>}
                    </div>
                    <div>
                        <label className={labelClass}>Loan Term (Years)</label>
                        <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.5"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className={getFieldClass(Boolean(visibleErrors.term))}
                            placeholder="5"
                        />
                        {visibleErrors.term && <p className={errorClass}>{visibleErrors.term}</p>}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={calculate}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-colors hover:bg-emerald-700 dark:shadow-emerald-900/20"
                >
                    <DollarSign size={20} />
                    Calculate Loan
                </button>

                {result && (
                    <>
                        <div className="mt-8 space-y-4">
                            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center dark:border-emerald-900/30 dark:bg-emerald-900/20">
                                <span className="text-sm font-medium uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Monthly Payment</span>
                                <div className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                                    ${result.monthly.toFixed(2)}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-slate-800">
                                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Total Interest</span>
                                    <div className="mt-1 text-xl font-bold text-slate-800 dark:text-slate-200">${result.totalInterest.toFixed(2)}</div>
                                </div>
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-slate-800">
                                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Total Cost</span>
                                    <div className="mt-1 text-xl font-bold text-slate-800 dark:text-slate-200">${result.totalPayment.toFixed(2)}</div>
                                </div>
                            </div>
                        </div>

                        <Suspense fallback={<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">Loading amortization schedule...</div>}>
                            <AmortizationSchedule
                                schedule={result.schedule}
                                fileName="loan-amortization-schedule.csv"
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
