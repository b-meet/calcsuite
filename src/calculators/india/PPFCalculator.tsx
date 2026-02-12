import { useState, useEffect } from 'react';
import { PieChart, ShieldCheck, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    BarElement,
    BarController,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    BarElement,
    BarController
);

interface YearBreakdown {
    year: number;
    openingBalance: number;
    contribution: number;
    interestEarned: number;
    closingBalance: number;
}

export default function PPFCalculator() {
    const [yearlyContribution, setYearlyContribution] = useState(150000);
    const [years, setYears] = useState(15);
    const [rate, setRate] = useState(7.1);
    const [contributionTiming, setContributionTiming] = useState<'START_OF_YEAR' | 'END_OF_YEAR'>('START_OF_YEAR');

    const [result, setResult] = useState<{
        totalInvested: number;
        maturityAmount: number;
        totalInterest: number;
        breakdown: YearBreakdown[];
    } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('ppf');

    const calculatePPF = () => {
        let balance = 0;
        let totalInvested = 0;
        const breakdown: YearBreakdown[] = [];
        const r = rate / 100;

        for (let i = 1; i <= years; i++) {
            const opening = balance;
            let interest = 0;

            if (contributionTiming === 'START_OF_YEAR') {
                balance += yearlyContribution;
                interest = balance * r;
                balance += interest;
            } else {
                interest = balance * r;
                balance += interest;
                balance += yearlyContribution;
            }

            totalInvested += yearlyContribution;

            breakdown.push({
                year: i,
                openingBalance: Math.round(opening),
                contribution: yearlyContribution,
                interestEarned: Math.round(interest),
                closingBalance: Math.round(balance)
            });
        }

        setResult({
            totalInvested,
            maturityAmount: Math.round(balance),
            totalInterest: Math.round(balance - totalInvested),
            breakdown
        });
    };

    useEffect(() => {
        calculatePPF();
    }, [yearlyContribution, years, rate, contributionTiming]);

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { yearlyContribution, years, rate, contributionTiming },
            `₹${result.maturityAmount.toLocaleString('en-IN')}`,
            `${years}y, ₹${yearlyContribution.toLocaleString('en-IN')}/yr`
        );
    };

    const handleHistorySelect = (item: any) => {
        setYearlyContribution(item.inputs.yearlyContribution);
        setYears(item.inputs.years);
        setRate(item.inputs.rate);
        setContributionTiming(item.inputs.contributionTiming);
    };

    const pieData = {
        labels: ['Total Investment', 'Total Interest'],
        datasets: [
            {
                data: result ? [result.totalInvested, result.totalInterest] : [0, 0],
                backgroundColor: ['#e2e8f0', '#3b82f6'],
                borderColor: ['#cbd5e1', '#2563eb'],
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
                            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            PPF Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Yearly Contribution</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-slate-500">₹</span>
                                    <input type="number" value={yearlyContribution} onChange={(e) => setYearlyContribution(Number(e.target.value))} className="block w-full pl-8 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white dark:bg-slate-800" step="500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Duration (Years): {years}</label>
                                <input type="range" min="15" max="50" step="5" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Interest Rate (%)</label>
                                <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white dark:bg-slate-800" step="0.1" />
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
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Maturity Summary</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Maturity Amount</p>
                                <p className="text-4xl font-bold">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.maturityAmount || 0)}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                                <div><p className="text-slate-400 text-sm mb-1">Invested</p><p className="text-xl font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.totalInvested || 0)}</p></div>
                                <div><p className="text-slate-400 text-sm mb-1">Interest</p><p className="text-xl font-semibold text-green-400">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.totalInterest || 0)}</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <PieChart size={20} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Breakdown
                        </h3>
                        <div className="h-64 flex items-center justify-center"><Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} /></div>
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
