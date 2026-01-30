import { useState, useEffect } from 'react';
import { Home, CheckCircle, PieChart } from 'lucide-react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomeLoanEligibilityCalculator() {
    const [monthlyIncome, setMonthlyIncome] = useState(100000);
    const [obligations, setObligations] = useState(20000);
    const [rate, setRate] = useState(9.0);
    const [tenure, setTenure] = useState(20);
    const [foir, setFoir] = useState(50); // FOIR percentage

    const [result, setResult] = useState<{
        eligibleLoanAmount: number;
        maxAffordableEMI: number;
        estimatedEMI: number;
    } | null>(null);

    const calculateEligibility = () => {
        // 1. Calculate Max Affordable EMI
        const maxAllowedEMI = (monthlyIncome * (foir / 100)) - obligations;

        if (maxAllowedEMI <= 0) {
            setResult({
                eligibleLoanAmount: 0,
                maxAffordableEMI: 0,
                estimatedEMI: 0
            });
            return;
        }

        // 2. Reverse EMI Formula to find P
        // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
        // P = EMI * ((1+r)^n - 1) / (r * (1+r)^n)

        const r = rate / 12 / 100; // Monthly rate
        const n = tenure * 12; // Months

        const numerator = Math.pow(1 + r, n) - 1;
        const denominator = r * Math.pow(1 + r, n);

        const eligibleLoan = maxAllowedEMI * (numerator / denominator);

        setResult({
            eligibleLoanAmount: Math.round(eligibleLoan),
            maxAffordableEMI: Math.round(maxAllowedEMI),
            estimatedEMI: Math.round(maxAllowedEMI) // By definition, if you take max loan, emi = max affordable
        });
    };

    useEffect(() => {
        calculateEligibility();
    }, [monthlyIncome, obligations, rate, tenure, foir]);

    const doughnutData = {
        labels: ['Proposed Home Loan EMI', 'Existing EMIs', 'Living Expenses & Savings'],
        datasets: [
            {
                data: result ? [
                    result.maxAffordableEMI,
                    obligations,
                    Math.max(0, monthlyIncome - result.maxAffordableEMI - obligations)
                ] : [1, 1, 1],
                backgroundColor: ['#3b82f6', '#ef4444', '#e2e8f0'],
                borderColor: ['#2563eb', '#dc2626', '#cbd5e1'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Home className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Income & Loan Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Net Monthly Income
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500 dark:text-slate-400">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={monthlyIncome}
                                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Existing Monthly EMIs / Obligations
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500 dark:text-slate-400">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={obligations}
                                        onChange={(e) => setObligations(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Sum of all current loan EMIs + credit card bills.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Interest Rate (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        step="0.1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Tenure (Years)
                                    </label>
                                    <input
                                        type="number"
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    FOIR (%) (Fixed Obligation to Income Ratio)
                                </label>
                                <input
                                    type="range"
                                    min="40"
                                    max="70"
                                    step="1"
                                    value={foir}
                                    onChange={(e) => setFoir(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>40% (Conservative)</span>
                                    <span className="font-semibold text-blue-600">{foir}%</span>
                                    <span>70% (Aggressive)</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Eligibility Check</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Maximum Eligible Loan Amount</p>
                                <p className="text-4xl font-bold text-green-400">
                                    {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                        maximumFractionDigits: 0
                                    }).format(result?.eligibleLoanAmount || 0)}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-slate-800">
                                <p className="text-slate-400 text-sm mb-2">Max EMI You Can Afford</p>
                                <p className="text-2xl font-semibold">
                                    {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                        maximumFractionDigits: 0
                                    }).format(result?.maxAffordableEMI || 0)}
                                    <span className="text-sm font-normal text-slate-500 ml-2">/ month</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                        <h4 className="font-medium text-blue-900 dark:text-blue-300 flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Insight
                        </h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                            With a <strong>{foir}% FOIR</strong>, banks estimate you can spare <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format((monthlyIncome * foir / 100))}</strong> monthly for all loan repayments. Since you already pay <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(obligations)}</strong>, your remaining capacity is <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.maxAffordableEMI || 0)}</strong>.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Income Allocation
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                            <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
