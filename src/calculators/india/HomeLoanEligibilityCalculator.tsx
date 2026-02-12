import { useState, useEffect } from 'react';
import { Home, CheckCircle, PieChart, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
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

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('home-loan-eligibility');

    const calculateEligibility = () => {
        const maxAllowedEMI = (monthlyIncome * (foir / 100)) - obligations;

        if (maxAllowedEMI <= 0) {
            setResult({
                eligibleLoanAmount: 0,
                maxAffordableEMI: 0,
                estimatedEMI: 0
            });
            return;
        }

        const r = rate / 12 / 100; // Monthly rate
        const n = tenure * 12; // Months

        const numerator = Math.pow(1 + r, n) - 1;
        const denominator = r * Math.pow(1 + r, n);

        const eligibleLoan = maxAllowedEMI * (numerator / denominator);

        setResult({
            eligibleLoanAmount: Math.round(eligibleLoan),
            maxAffordableEMI: Math.round(maxAllowedEMI),
            estimatedEMI: Math.round(maxAllowedEMI)
        });
    };

    useEffect(() => {
        calculateEligibility();
    }, [monthlyIncome, obligations, rate, tenure, foir]);

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { monthlyIncome, obligations, rate, tenure, foir },
            `Eligible: ₹${result.eligibleLoanAmount.toLocaleString('en-IN')}`,
            `EMI: ₹${result.maxAffordableEMI.toLocaleString('en-IN')}/mo`
        );
    };

    const handleHistorySelect = (item: any) => {
        setMonthlyIncome(item.inputs.monthlyIncome);
        setObligations(item.inputs.obligations);
        setRate(item.inputs.rate);
        setTenure(item.inputs.tenure);
        setFoir(item.inputs.foir);
    };

    const doughnutData = {
        labels: ['Eligible EMI', 'Current Obligations', 'Disposable Income'],
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
        <div className="space-y-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                                    Existing Monthly EMIs
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
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Interest Rate (%)</label>
                                    <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500" step="0.1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tenure (Years)</label>
                                    <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">FOIR ({foir}%)</label>
                                <input type="range" min="40" max="70" step="1" value={foir} onChange={(e) => setFoir(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                            </div>

                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={handleSave}
                                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center justify-center gap-2"
                                >
                                    <TrendingUp size={18} />
                                    Save to History
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Eligibility Check</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Eligible Loan Amount</p>
                                <p className="text-4xl font-bold text-green-400">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.eligibleLoanAmount || 0)}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-slate-800">
                                <p className="text-slate-400 text-sm mb-2">Max EMI Capacity</p>
                                <p className="text-2xl font-semibold">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.maxAffordableEMI || 0)}/mo
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <PieChart size={20} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Income Allocation
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                            <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
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
