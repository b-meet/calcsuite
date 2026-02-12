import { useState, useEffect } from 'react';
import { IndianRupee, Calendar, Percent, PieChart, TrendingUp } from 'lucide-react';
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

type CompoundingFrequency = 'YEARLY' | 'HALF_YEARLY' | 'QUARTERLY' | 'MONTHLY' | 'SIMPLE';

interface YearBreakdown {
    year: number;
    openingBalance: number;
    interestEarned: number;
    closingBalance: number;
}

export default function FDCalculator() {
    const [principal, setPrincipal] = useState(100000);
    const [rate, setRate] = useState(7.0);
    const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
    const [tenure, setTenure] = useState(5);
    const [compounding, setCompounding] = useState<CompoundingFrequency>('QUARTERLY');

    const [result, setResult] = useState<{
        maturityAmount: number;
        totalInterest: number;
        breakdown: YearBreakdown[];
    } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('fd');

    const calculateFD = () => {
        const P = principal;
        const r = rate / 100;

        const t = tenureType === 'years' ? tenure : tenure / 12;

        let maturity = 0;
        let n = 1;

        if (compounding === 'SIMPLE') {
            const interest = P * r * t;
            maturity = P + interest;
        } else {
            switch (compounding) {
                case 'YEARLY': n = 1; break;
                case 'HALF_YEARLY': n = 2; break;
                case 'QUARTERLY': n = 4; break;
                case 'MONTHLY': n = 12; break;
            }
            maturity = P * Math.pow(1 + r / n, n * t);
        }

        const totalInterest = maturity - P;

        const breakdown: YearBreakdown[] = [];
        let currentBalance = P;
        const totalYears = Math.ceil(t);

        for (let i = 1; i <= totalYears; i++) {
            let closing = 0;
            const timeAtEnd = Math.min(i, t);

            if (compounding === 'SIMPLE') {
                const interestForPeriod = (principal * r) * timeAtEnd;
                closing = principal + interestForPeriod;
            } else {
                closing = P * Math.pow(1 + r / n, n * timeAtEnd);
            }

            const interestEarned = closing - currentBalance;

            breakdown.push({
                year: i,
                openingBalance: Math.round(currentBalance),
                interestEarned: Math.round(interestEarned),
                closingBalance: Math.round(closing)
            });

            currentBalance = closing;
        }

        setResult({
            maturityAmount: Math.round(maturity),
            totalInterest: Math.round(totalInterest),
            breakdown
        });
    };

    useEffect(() => {
        calculateFD();
    }, [principal, rate, tenure, tenureType, compounding]);

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { principal, rate, tenure, tenureType, compounding },
            `₹${result.maturityAmount.toLocaleString('en-IN')}`,
            `${tenure} ${tenureType}, ${rate}%`
        );
    };

    const handleHistorySelect = (item: any) => {
        setPrincipal(item.inputs.principal);
        setRate(item.inputs.rate);
        setTenure(item.inputs.tenure);
        setTenureType(item.inputs.tenureType);
        setCompounding(item.inputs.compounding);
    };

    const pieData = {
        labels: ['Principal', 'Total Interest'],
        datasets: [
            {
                data: result ? [principal, result.totalInterest] : [1, 1],
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
                            <IndianRupee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Investment Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Total Investment (Principal)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500 dark:text-slate-400">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={principal}
                                        onChange={(e) => setPrincipal(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="100000"
                                    />
                                    <input
                                        type="range"
                                        min="1000"
                                        max="10000000"
                                        step="1000"
                                        value={principal}
                                        onChange={(e) => setPrincipal(Number(e.target.value))}
                                        className="w-full mt-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Annual Interest Rate
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        step="0.1"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <Percent className="w-4 h-4 text-slate-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Tenure
                                    </label>
                                    <input
                                        type="number"
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Period
                                    </label>
                                    <select
                                        value={tenureType}
                                        onChange={(e) => setTenureType(e.target.value as 'years' | 'months')}
                                        className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="years">Years</option>
                                        <option value="months">Months</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Compounding Frequency
                                </label>
                                <select
                                    value={compounding}
                                    onChange={(e) => setCompounding(e.target.value as CompoundingFrequency)}
                                    className="block w-full px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="QUARTERLY">Quarterly (Standard)</option>
                                    <option value="MONTHLY">Monthly</option>
                                    <option value="HALF_YEARLY">Half Yearly</option>
                                    <option value="YEARLY">Yearly</option>
                                    <option value="SIMPLE">Simple Interest (No Compounding)</option>
                                </select>
                            </div>

                            <div className="flex justify-center pt-2">
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
                    <div className="bg-slate-900 dark:bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Maturity Summary</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Maturity Amount</p>
                                <p className="text-4xl font-bold">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.maturityAmount || 0)}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Principal</p>
                                    <p className="text-xl font-semibold">
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(principal)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Total Interest</p>
                                    <p className="text-xl font-semibold text-green-400">
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.totalInterest || 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <PieChart size={20} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Breakdown
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {result?.breakdown && result.breakdown.length > 0 && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Calendar size={20} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Year-wise Breakdown
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Year</th>
                                    <th className="px-6 py-3">Opening</th>
                                    <th className="px-6 py-3">Interest Earned</th>
                                    <th className="px-6 py-3">Closing</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {result.breakdown.map((row) => (
                                    <tr key={row.year} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                        <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">{row.year}</td>
                                        <td className="px-6 py-3">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.openingBalance)}</td>
                                        <td className="px-6 py-3 text-green-600 dark:text-green-400">+{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.interestEarned)}</td>
                                        <td className="px-6 py-3 font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(row.closingBalance)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
