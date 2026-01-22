import { useState, useEffect } from 'react';
import { Calendar, Percent, PieChart, TrendingUp } from 'lucide-react';
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
    Title
);

type CompoundingFrequency = 'QUARTERLY' | 'MONTHLY' | 'YEARLY' | 'HALF_YEARLY' | 'SIMPLE';

interface YearBreakdown {
    year: number;
    totalDeposited: number;
    totalInterest: number;
    maturityValue: number;
}

export default function RDCalculator() {
    const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
    const [rate, setRate] = useState(7.0);
    const [tenureMonths, setTenureMonths] = useState(12);
    const [compounding, setCompounding] = useState<CompoundingFrequency>('QUARTERLY');

    const [result, setResult] = useState<{
        totalInvested: number;
        maturityAmount: number;
        totalInterest: number;
        breakdown: YearBreakdown[];
    } | null>(null);

    const calculateRD = () => {
        const P = monthlyDeposit;
        const r = rate / 100;
        const months = tenureMonths;

        // Accurate Month-by-Month Simulation
        // Each month, a new deposit P is added.
        // Interest is calculated on the running balance.

        const breakdown: YearBreakdown[] = [];

        // Config for compounding
        // Banks typically compound quarterly.
        // We will simulate month by month.

        // specific rates
        const n = compounding === 'QUARTERLY' ? 4 : (compounding === 'HALF_YEARLY' ? 2 : (compounding === 'YEARLY' ? 1 : 12));

        // Simulation:
        let balanceSim = 0;
        let investedSim = 0;

        // Reset
        breakdown.length = 0; // clear

        for (let m = 1; m <= months; m++) {
            balanceSim += P; // Add deposit at start of month
            investedSim += P;

            // Add interest?
            // Effective rate logic.
            // If Quarterly, interest is added only at m=3, 6, 9...
            // But interest is EARNED every month.

            // Let's try the effective monthly rate approach valid for compounding frequency
            // r_effective_monthly = (1 + r/n)^(n/12) - 1

            const r_eff_mo = Math.pow(1 + r / n, n / 12) - 1;
            const interest = balanceSim * r_eff_mo;
            balanceSim += interest;

            if (m % 12 === 0 || m === months) {
                breakdown.push({
                    year: Math.ceil(m / 12),
                    totalDeposited: Math.round(investedSim),
                    maturityValue: Math.round(balanceSim),
                    totalInterest: Math.round(balanceSim - investedSim)
                });
            }
        }

        // Simulation result might slightly differ from direct formula due to rounding/precision
        // but it is internally consistent for the table.
        // Let's use Simulation result for Display to ensure Table matches Summary.

        setResult({
            totalInvested: Math.round(investedSim),
            maturityAmount: Math.round(balanceSim),
            totalInterest: Math.round(balanceSim - investedSim),
            breakdown
        });
    };

    useEffect(() => {
        calculateRD();
    }, [monthlyDeposit, rate, tenureMonths, compounding]);

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
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            RD Scheme Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Monthly Deposit
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={monthlyDeposit}
                                        onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
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

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Tenure (Months)
                                    </label>
                                    <input
                                        type="number"
                                        value={tenureMonths}
                                        onChange={(e) => setTenureMonths(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        {Math.floor(tenureMonths / 12)} Years {tenureMonths % 12} Months
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Compounding
                                    </label>
                                    <select
                                        value={compounding}
                                        onChange={(e) => setCompounding(e.target.value as CompoundingFrequency)}
                                        className="block w-full px-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="QUARTERLY">Quarterly (Standard)</option>
                                        <option value="MONTHLY">Monthly</option>
                                        <option value="YEARLY">Yearly</option>
                                    </select>
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
                                    <p className="text-slate-400 text-sm mb-1">Total Deposit</p>
                                    <p className="text-xl font-semibold">
                                        {new Intl.NumberFormat('en-IN', {
                                            style: 'currency',
                                            currency: 'INR',
                                            maximumFractionDigits: 0
                                        }).format(result?.totalInvested || 0)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Interest Earned</p>
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

            {/* Breakdown Table */}
            {result?.breakdown && result.breakdown.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            Progress
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">Year</th>
                                    <th className="px-6 py-3">Total Deposited</th>
                                    <th className="px-6 py-3">Interest Earned</th>
                                    <th className="px-6 py-3">Maturity Value</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {result.breakdown.map((row) => (
                                    <tr key={row.year} className="hover:bg-slate-50">
                                        <td className="px-6 py-3 font-medium text-slate-900">{row.year}</td>
                                        <td className="px-6 py-3">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.totalDeposited)}
                                        </td>
                                        <td className="px-6 py-3 text-green-600">
                                            +{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.totalInterest)}
                                        </td>
                                        <td className="px-6 py-3 font-medium">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.maturityValue)}
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
