import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
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

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('rd');

    const calculateRD = () => {
        const P = monthlyDeposit;
        const r = rate / 100;
        const months = tenureMonths;
        const breakdown: YearBreakdown[] = [];
        const n = compounding === 'QUARTERLY' ? 4 : (compounding === 'HALF_YEARLY' ? 2 : (compounding === 'YEARLY' ? 1 : 12));
        let balanceSim = 0;
        let investedSim = 0;

        for (let m = 1; m <= months; m++) {
            balanceSim += P;
            investedSim += P;
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

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { monthlyDeposit, rate, tenureMonths, compounding },
            `₹${result.maturityAmount.toLocaleString('en-IN')}`,
            `${tenureMonths}mo, ₹${monthlyDeposit.toLocaleString('en-IN')}/mo`
        );
    };

    const handleHistorySelect = (item: any) => {
        setMonthlyDeposit(item.inputs.monthlyDeposit);
        setRate(item.inputs.rate);
        setTenureMonths(item.inputs.tenureMonths);
        setCompounding(item.inputs.compounding);
    };

    const pieData = {
        labels: ['Invested', 'Interest'],
        datasets: [
            {
                data: result ? [result.totalInvested, result.totalInterest] : [1, 1],
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
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2"><TrendingUp size={20} className="text-blue-600" /> RD Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Monthly Deposit</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2 text-slate-500">₹</span>
                                    <input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(Number(e.target.value))} className="block w-full pl-8 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 text-slate-900 dark:text-white" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm font-medium">Rate (%)</label><input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800" step="0.1" /></div>
                                <div><label className="block text-sm font-medium">Months</label><input type="number" value={tenureMonths} onChange={(e) => setTenureMonths(Number(e.target.value))} className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800" /></div>
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
                            <div><p className="text-slate-400 text-sm mb-1">Maturity Amount</p><p className="text-4xl font-bold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.maturityAmount || 0)}</p></div>
                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                                <div><p className="text-slate-400 text-sm mb-1">Invested</p><p className="text-xl font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.totalInvested || 0)}</p></div>
                                <div><p className="text-slate-400 text-sm mb-1">Interest</p><p className="text-xl font-semibold text-green-400">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.totalInterest || 0)}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800"><Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} /></div>
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
