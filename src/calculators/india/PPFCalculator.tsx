import { useState, useEffect } from 'react';
import { Calendar, Percent, PieChart, ShieldCheck } from 'lucide-react';
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
import { Pie, Bar } from 'react-chartjs-2';

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

    const calculatePPF = () => {
        let balance = 0;
        let totalInvested = 0;
        const breakdown: YearBreakdown[] = [];
        const r = rate / 100;

        for (let i = 1; i <= years; i++) {
            const opening = balance;
            let interest = 0;

            if (contributionTiming === 'START_OF_YEAR') {
                // Contribution happens at start (before April 5th usually)
                // Interest is calculated on (Balance + Contribution)
                balance += yearlyContribution;
                interest = balance * r;
                balance += interest;
            } else {
                // End of year
                // Interest on opening balance
                interest = balance * r;
                balance += interest;
                balance += yearlyContribution; // Added after interest calc
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

    const chartData = {
        labels: result?.breakdown.map(b => b.year.toString()) || [],
        datasets: [
            {
                label: 'Balance',
                data: result?.breakdown.map(b => b.closingBalance) || [],
                backgroundColor: '#3b82f6',
                borderRadius: 4,
            }
        ]
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            PPF Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Yearly Contribution
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={yearlyContribution}
                                        onChange={(e) => setYearlyContribution(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        step="500"
                                        max="150000" // Standard limit, but keeping it flexible as per request? User said "typical max is capped by govt, but don’t hardcode"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Max Tax-Exempt Limit: ₹1,50,000</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Duration (Years)
                                </label>
                                <input
                                    type="range"
                                    min="15"
                                    max="50"
                                    step="5"
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer mb-2"
                                />
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={years}
                                        onChange={(e) => setYears(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Min 15 Years. Extendable in blocks of 5.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Annual Interest Rate
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        step="0.1"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <Percent className="w-4 h-4 text-slate-500" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Contribution Timing
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="timing"
                                            checked={contributionTiming === 'START_OF_YEAR'}
                                            onChange={() => setContributionTiming('START_OF_YEAR')}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-slate-700">Start of Year (April)</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="timing"
                                            checked={contributionTiming === 'END_OF_YEAR'}
                                            onChange={() => setContributionTiming('END_OF_YEAR')}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-slate-700">End of Year (March)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Maturity Summary</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Maturity Amount</p>
                                <p className="text-4xl font-bold">
                                    {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                        maximumFractionDigits: 0
                                    }).format(result?.maturityAmount || 0)}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Total Limit Investment</p>
                                    <p className="text-xl font-semibold">
                                        {new Intl.NumberFormat('en-IN', {
                                            style: 'currency',
                                            currency: 'INR',
                                            maximumFractionDigits: 0
                                        }).format(result?.totalInvested || 0)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Total Interest</p>
                                    <p className="text-xl font-semibold text-green-400">
                                        {new Intl.NumberFormat('en-IN', {
                                            style: 'currency',
                                            currency: 'INR',
                                            maximumFractionDigits: 0
                                        }).format(result?.totalInterest || 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-blue-600" />
                            Breakdown
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Growth Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Growth Trajectory</h3>
                <div className="h-72">
                    <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>

            {/* Breakdown Table */}
            {result?.breakdown && result.breakdown.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            Year-wise Breakdown
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">Year</th>
                                    <th className="px-6 py-3">Opening</th>
                                    <th className="px-6 py-3">Deposited</th>
                                    <th className="px-6 py-3">Interest Earned</th>
                                    <th className="px-6 py-3">Closing Balance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {result.breakdown.map((row) => (
                                    <tr key={row.year} className="hover:bg-slate-50">
                                        <td className="px-6 py-3 font-medium text-slate-900">{row.year}</td>
                                        <td className="px-6 py-3">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.openingBalance)}
                                        </td>
                                        <td className="px-6 py-3">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.contribution)}
                                        </td>
                                        <td className="px-6 py-3 text-green-600">
                                            +{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.interestEarned)}
                                        </td>
                                        <td className="px-6 py-3 font-medium">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.closingBalance)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
