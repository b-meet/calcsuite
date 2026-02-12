import { useState, useEffect } from 'react';
import { DollarSign, Percent, Calendar, PieChart, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function MortgageCalculator() {
    const [loanAmount, setLoanAmount] = useState(300000);
    const [interestRate, setInterestRate] = useState(3.5);
    const [loanTerm, setLoanTerm] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('mortgage');

    useEffect(() => {
        calculateMortgage();
    }, [loanAmount, interestRate, loanTerm]);

    const calculateMortgage = () => {
        const principal = loanAmount;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        if (principal > 0 && interestRate > 0 && loanTerm > 0) {
            const mortgage =
                (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

            const totalPay = mortgage * numberOfPayments;
            const totalInt = totalPay - principal;

            setMonthlyPayment(mortgage);
            setTotalPayment(totalPay);
            setTotalInterest(totalInt);
        } else {
            setMonthlyPayment(0);
            setTotalPayment(0);
            setTotalInterest(0);
        }
    };

    const handleSave = () => {
        if (monthlyPayment > 0) {
            addHistory(
                { loanAmount, interestRate, loanTerm },
                `$${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                `$${loanAmount.toLocaleString()}, ${interestRate}%, ${loanTerm}y`
            );
        }
    };

    const handleHistorySelect = (item: any) => {
        setLoanAmount(item.inputs.loanAmount);
        setInterestRate(item.inputs.interestRate);
        setLoanTerm(item.inputs.loanTerm);
    };

    const InputGroup = ({ label, icon: Icon, value, onChange, type = "number", min = 0, step = 1, suffix }: any) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                </div>
                <input
                    type={type}
                    min={min}
                    step={step}
                    value={value || ''}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="block w-full pl-10 pr-12 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="0"
                />
                {suffix && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-slate-500 dark:text-slate-400 sm:text-sm">{suffix}</span>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Loan Details</h3>

                <InputGroup
                    label="Loan Amount"
                    icon={DollarSign}
                    value={loanAmount}
                    onChange={setLoanAmount}
                    step={1000}
                />

                <div className="grid grid-cols-2 gap-4">
                    <InputGroup
                        label="Interest Rate"
                        icon={Percent}
                        value={interestRate}
                        onChange={setInterestRate}
                        step={0.1}
                        suffix="%"
                    />
                    <InputGroup
                        label="Loan Term"
                        icon={Calendar}
                        value={loanTerm}
                        onChange={setLoanTerm}
                        suffix="Years"
                    />
                </div>

                <div className="pt-4">
                    {/* Placeholder for optional Down Payment later */}
                </div>
            </div>

            {/* Results Section */}
            <div className="bg-blue-600 dark:bg-blue-700 p-6 rounded-3xl shadow-lg text-white flex flex-col justify-between border border-blue-500 dark:border-blue-600">
                <div>
                    <h3 className="text-blue-100 font-medium mb-1">Estimated Monthly Payment</h3>
                    <div className="text-5xl font-bold mb-8">
                        ${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-blue-500/30">
                            <span className="text-blue-100">Total Principal</span>
                            <span className="font-semibold">${loanAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-blue-500/30">
                            <span className="text-blue-100">Total Interest</span>
                            <span className="font-semibold">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-t border-blue-400 dark:border-blue-500 mt-4">
                            <span className="text-lg font-medium">Total Cost</span>
                            <span className="text-2xl font-bold">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-500/30 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg text-sm text-blue-100">
                        <PieChart size={16} />
                        <span>Values are estimates</span>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2 flex justify-center mt-8">
                <button
                    onClick={handleSave}
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center gap-2"
                >
                    <TrendingUp size={18} />
                    Save to History
                </button>
            </div>

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
