import { useState, useEffect } from 'react';
import { DollarSign, Percent } from 'lucide-react';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type TimeUnit = 'YEARS' | 'MONTHS' | 'DAYS';

export default function SimpleInterestCalculator() {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(5.0);
    const [time, setTime] = useState(2);
    const [timeUnit, setTimeUnit] = useState<TimeUnit>('YEARS');

    const [result, setResult] = useState<{
        interest: number;
        totalAmount: number;
    } | null>(null);

    const calculate = () => {
        const P = principal;
        const R = rate / 100;
        let T = time;

        if (timeUnit === 'MONTHS') T = time / 12;
        if (timeUnit === 'DAYS') T = time / 365;

        const interest = P * R * T;
        const totalAmount = P + interest;

        setResult({
            interest: Math.round(interest * 100) / 100,
            totalAmount: Math.round(totalAmount * 100) / 100
        });
    };

    useEffect(() => {
        calculate();
    }, [principal, rate, time, timeUnit]);

    const pieData = {
        labels: ['Principal', 'Total Interest'],
        datasets: [
            {
                data: result ? [principal, result.interest] : [1, 1],
                backgroundColor: ['#e2e8f0', '#3b82f6'],
                borderColor: ['#cbd5e1', '#2563eb'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-blue-600" />
                            Loan / Investment Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Principal Amount</label>
                                <input
                                    type="number"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                    className="block w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="block w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                    <Percent className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Time Period</label>
                                    <input
                                        type="number"
                                        value={time}
                                        onChange={(e) => setTime(Number(e.target.value))}
                                        className="block w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="w-32">
                                    <label className="block text-sm font-medium text-slate-700 mb-1">&nbsp;</label>
                                    <select
                                        value={timeUnit}
                                        onChange={(e) => setTimeUnit(e.target.value as TimeUnit)}
                                        className="block w-full px-2 py-2 border border-slate-200 rounded-lg"
                                    >
                                        <option value="YEARS">Years</option>
                                        <option value="MONTHS">Months</option>
                                        <option value="DAYS">Days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Summary</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Total Amount</p>
                                <p className="text-4xl font-bold">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result?.totalAmount || 0)}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Principal</p>
                                    <p className="text-xl font-semibold">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(principal)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Total Interest</p>
                                    <p className="text-xl font-semibold text-green-400">
                                        +{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result?.interest || 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            {/* Replaced PieChart icon with DollarSign as PieChart was unused but the component uses DollarSign elsewhere. Actually PieChart was imported from Lucide and used in JSX. If I remove it from import I must replace it in JSX. */}
                            <DollarSign className="w-5 h-5 text-blue-600" />
                            Allocation
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
