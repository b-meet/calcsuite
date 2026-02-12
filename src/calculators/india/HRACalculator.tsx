import { useState, useEffect } from 'react';
import { Building2, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HRACalculator() {
    const [basicSalary, setBasicSalary] = useState(600000); // Yearly
    const [hraReceived, setHraReceived] = useState(240000); // Yearly
    const [rentPaid, setRentPaid] = useState(180000); // Yearly
    const [isMetro, setIsMetro] = useState(true);

    const [result, setResult] = useState<{
        exemptHRA: number;
        taxableHRA: number;
        conditions: {
            condition1: number; // Actual HRA Received
            condition2: number; // Rent Paid - 10% of Basic
            condition3: number; // 50% or 40% of Basic
        }
    } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('hra');

    const calculateHRA = () => {
        const c1 = hraReceived;
        const c2 = Math.max(0, rentPaid - (0.10 * basicSalary));
        const c3 = (isMetro ? 0.50 : 0.40) * basicSalary;
        const exempt = Math.min(c1, c2, c3);
        const taxable = Math.max(0, hraReceived - exempt);

        setResult({
            exemptHRA: Math.round(exempt),
            taxableHRA: Math.round(taxable),
            conditions: {
                condition1: Math.round(c1),
                condition2: Math.round(c2),
                condition3: Math.round(c3)
            }
        });
    };

    useEffect(() => {
        calculateHRA();
    }, [basicSalary, hraReceived, rentPaid, isMetro]);

    const handleSave = () => {
        if (!result) return;
        addHistory(
            { basicSalary, hraReceived, rentPaid, isMetro },
            `Exempt: ₹${result.exemptHRA.toLocaleString('en-IN')}`,
            `${isMetro ? 'Metro' : 'Non-Metro'}, Basic: ₹${(basicSalary / 100000).toFixed(1)}L`
        );
    };

    const handleHistorySelect = (item: any) => {
        setBasicSalary(item.inputs.basicSalary);
        setHraReceived(item.inputs.hraReceived);
        setRentPaid(item.inputs.rentPaid);
        setIsMetro(item.inputs.isMetro);
    };

    const pieData = {
        labels: ['Exempt HRA', 'Taxable HRA'],
        datasets: [
            {
                data: result ? [result.exemptHRA, result.taxableHRA] : [1, 1],
                backgroundColor: ['#22c55e', '#ef4444'],
                borderColor: ['#16a34a', '#dc2626'],
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
                            <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Salary & Rent Details (Annual)
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Basic Salary (+ DA if applicable)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500 dark:text-slate-400">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={basicSalary}
                                        onChange={(e) => setBasicSalary(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Enter annual amount</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    HRA Received
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500 dark:text-slate-400">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={hraReceived}
                                        onChange={(e) => setHraReceived(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">As per salary slip (Annual)</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Total Rent Paid
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500 dark:text-slate-400">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={rentPaid}
                                        onChange={(e) => setRentPaid(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Total rent paid in the financial year</p>
                                </div>
                            </div>

                            <div>
                                <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">City Type</span>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsMetro(true)}
                                        className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${isMetro
                                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-300'
                                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        Metro (50%)
                                        <span className="block text-xs font-normal mt-0.5 text-slate-500 dark:text-slate-400">Delhi, Mumbai, Kolkata, Chennai</span>
                                    </button>
                                    <button
                                        onClick={() => setIsMetro(false)}
                                        className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${!isMetro
                                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-300'
                                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        Non-Metro (40%)
                                        <span className="block text-xs font-normal mt-0.5 text-slate-500 dark:text-slate-400">Other Cities</span>
                                    </button>
                                </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-900/50">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <p className="text-sm font-medium text-green-800 dark:text-green-200">Exempt HRA</p>
                            </div>
                            <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.exemptHRA || 0)}
                            </p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-900/50">
                            <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                                <p className="text-sm font-medium text-red-800 dark:text-red-200">Taxable HRA</p>
                            </div>
                            <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.taxableHRA || 0)}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Exemption Ratio</h3>
                        <div className="h-64 flex items-center justify-center">
                            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Exemption Logic</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50 dark:border-slate-800">
                                <span className="text-slate-600 dark:text-slate-400">1. Actual HRA Received</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.conditions.condition1 || 0)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50 dark:border-slate-800">
                                <span className="text-slate-600 dark:text-slate-400">2. Rent - 10% Basic</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.conditions.condition2 || 0)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50 dark:border-slate-800">
                                <span className="text-slate-600 dark:text-slate-400">3. {isMetro ? '50%' : '40%'} of Basic</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.conditions.condition3 || 0)}
                                </span>
                            </div>
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
