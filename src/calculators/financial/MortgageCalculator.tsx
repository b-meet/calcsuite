import { lazy, Suspense, useMemo, useState } from 'react';
import { Calendar, DollarSign, Percent, PieChart, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { calculateAmortizationSchedule } from '../../utils/amortization';

const AmortizationSchedule = lazy(() => import('../../components/AmortizationSchedule'));

interface MortgageErrors {
    loanAmount?: string;
    interestRate?: string;
    loanTerm?: string;
}

function getInputClass(hasError: boolean) {
    return `block w-full appearance-none rounded-xl border bg-slate-50 py-3 pl-10 pr-12 text-slate-900 transition-all duration-200 hover:bg-white focus:ring-2 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 [MozAppearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${hasError
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-500/70 dark:focus:ring-red-500/20'
        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-slate-700'}`;
}

function InputGroup({
    label,
    icon: Icon,
    value,
    onChange,
    error,
    step = '1',
    suffix,
}: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    step?: string;
    suffix?: string;
}) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Icon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                </div>
                <input
                    type="number"
                    min="0"
                    step={step}
                    inputMode="decimal"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={getInputClass(Boolean(error))}
                    placeholder="0"
                />
                {suffix && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-sm text-slate-500 dark:text-slate-400">{suffix}</span>
                    </div>
                )}
            </div>
            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        </div>
    );
}

export default function MortgageCalculator() {
    const [loanAmount, setLoanAmount] = useState('300000');
    const [interestRate, setInterestRate] = useState('3.5');
    const [loanTerm, setLoanTerm] = useState('30');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('mortgage');

    const validation = useMemo(() => {
        const nextErrors: MortgageErrors = {};
        const parsedLoanAmount = Number(loanAmount);
        const parsedInterestRate = Number(interestRate);
        const parsedLoanTerm = Number(loanTerm);

        if (loanAmount.trim() === '') {
            nextErrors.loanAmount = 'Enter the mortgage principal.';
        } else if (!Number.isFinite(parsedLoanAmount) || parsedLoanAmount <= 0) {
            nextErrors.loanAmount = 'Loan amount must be greater than 0.';
        }

        if (interestRate.trim() === '') {
            nextErrors.interestRate = 'Enter an annual interest rate.';
        } else if (!Number.isFinite(parsedInterestRate) || parsedInterestRate < 0) {
            nextErrors.interestRate = 'Interest rate cannot be negative.';
        } else if (parsedInterestRate > 100) {
            nextErrors.interestRate = 'Enter an annual interest rate below 100%.';
        }

        if (loanTerm.trim() === '') {
            nextErrors.loanTerm = 'Enter the mortgage term in years.';
        } else if (!Number.isFinite(parsedLoanTerm) || parsedLoanTerm <= 0) {
            nextErrors.loanTerm = 'Mortgage term must be greater than 0 years.';
        } else if (!Number.isInteger(parsedLoanTerm)) {
            nextErrors.loanTerm = 'Use whole years for mortgage term, such as 15 or 30.';
        }

        return {
            errors: nextErrors,
            values: Object.keys(nextErrors).length === 0
                ? {
                    loanAmount: parsedLoanAmount,
                    interestRate: parsedInterestRate,
                    loanTerm: parsedLoanTerm,
                    numberOfPayments: parsedLoanTerm * 12,
                }
                : null,
        };
    }, [interestRate, loanAmount, loanTerm]);

    const result = useMemo(() => {
        if (!validation.values) {
            return null;
        }

        return calculateAmortizationSchedule({
            principal: validation.values.loanAmount,
            annualRate: validation.values.interestRate,
            numberOfPayments: validation.values.numberOfPayments,
        });
    }, [validation.values]);

    const handleSave = () => {
        if (!result || !validation.values) {
            return;
        }

        addHistory(
            validation.values,
            `$${result.periodicPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            `$${validation.values.loanAmount.toLocaleString()}, ${validation.values.interestRate}%, ${validation.values.loanTerm}y`
        );
    };

    const handleHistorySelect = (item: any) => {
        setLoanAmount(String(item.inputs.loanAmount));
        setInterestRate(String(item.inputs.interestRate));
        setLoanTerm(String(item.inputs.loanTerm));
    };

    return (
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Loan Details</h3>

                <InputGroup
                    label="Loan Amount"
                    icon={DollarSign}
                    value={loanAmount}
                    onChange={setLoanAmount}
                    step="1000"
                    error={validation.errors.loanAmount}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <InputGroup
                        label="Interest Rate"
                        icon={Percent}
                        value={interestRate}
                        onChange={setInterestRate}
                        step="0.1"
                        suffix="%"
                        error={validation.errors.interestRate}
                    />
                    <InputGroup
                        label="Loan Term"
                        icon={Calendar}
                        value={loanTerm}
                        onChange={setLoanTerm}
                        suffix="Years"
                        error={validation.errors.loanTerm}
                    />
                </div>

                {!result && (
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                        Enter valid mortgage details to see the payment estimate and amortization schedule.
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-blue-500 bg-blue-600 p-6 text-white shadow-lg dark:border-blue-600 dark:bg-blue-700">
                <div>
                    <h3 className="mb-1 font-medium text-blue-100">Estimated Monthly Payment</h3>
                    <div className="mb-8 text-5xl font-bold">
                        {result
                            ? `$${result.periodicPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                            : '$0.00'}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-blue-500/30 py-3">
                            <span className="text-blue-100">Total Principal</span>
                            <span className="font-semibold">
                                {result && validation.values ? `$${validation.values.loanAmount.toLocaleString()}` : '$0'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between border-b border-blue-500/30 py-3">
                            <span className="text-blue-100">Total Interest</span>
                            <span className="font-semibold">
                                {result
                                    ? `$${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
                                    : '$0'}
                            </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-blue-400 py-3 dark:border-blue-500">
                            <span className="text-lg font-medium">Total Cost</span>
                            <span className="text-2xl font-bold">
                                {result
                                    ? `$${result.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
                                    : '$0'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-blue-500/30 pt-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-blue-500/20 px-4 py-2 text-sm text-blue-100">
                        <PieChart size={16} />
                        <span>Values are estimates</span>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2 flex justify-center">
                <button
                    type="button"
                    onClick={handleSave}
                    disabled={!result}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-blue-900/20"
                >
                    <TrendingUp size={18} />
                    Save to History
                </button>
            </div>

            {result && (
                <div className="md:col-span-2">
                    <Suspense fallback={<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">Loading amortization schedule...</div>}>
                        <AmortizationSchedule
                            schedule={result.schedule}
                            fileName="mortgage-amortization-schedule.csv"
                        />
                    </Suspense>
                </div>
            )}

            <div className="md:col-span-2">
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
