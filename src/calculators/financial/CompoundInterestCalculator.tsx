import { useState, useEffect } from 'react';
import { TrendingUp, Calendar, Coins } from 'lucide-react';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type CompoundingFrequency = 'YEARLY' | 'HALF_YEARLY' | 'QUARTERLY' | 'MONTHLY' | 'DAILY';
type ContributionFrequency = 'MONTHLY' | 'YEARLY';
type ContributionTiming = 'BEGINNING' | 'END';

interface YearBreakdown {
    year: number;
    startBalance: number;
    interest: number;
    deposits: number;
    endBalance: number;
}

export default function CompoundInterestCalculator() {
    // Inputs
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(7.0);
    const [tenure, setTenure] = useState(10);
    const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
    const [compounding, setCompounding] = useState<CompoundingFrequency>('YEARLY');

    // Contribution Inputs
    const [withContribution, setWithContribution] = useState(false);
    const [contribution, setContribution] = useState(0);
    const [contributionFreq, setContributionFreq] = useState<ContributionFrequency>('MONTHLY');
    const [timing, setTiming] = useState<ContributionTiming>('END');

    // Result State
    const [result, setResult] = useState<{
        finalAmount: number;
        totalInterest: number;
        totalPrincipal: number; // (total contributions + initial)
        breakdown: YearBreakdown[];
    } | null>(null);

    const calculate = () => {
        const P = principal;
        const r = rate / 100;

        // Normalize time to years
        const t = tenureType === 'years' ? tenure : tenure / 12;

        let n = 1; // Compounds per year
        switch (compounding) {
            case 'YEARLY': n = 1; break;
            case 'HALF_YEARLY': n = 2; break;
            case 'QUARTERLY': n = 4; break;
            case 'MONTHLY': n = 12; break;
            case 'DAILY': n = 365; break;
        }

        // Simulation parameters
        // We will simulate period by period based on the smallest unit (e.g. daily if compounding is daily, or monthly if compounding monthly)
        // To be safe and accurate for mixed frequencies (e.g. Yearly compounding but Monthly contribution), 
        // we can simulate daily or monthly. Monthly is usually granular enough for personal finance unless daily compounding is used.
        // Let's use monthly simulation steps for standard, or daily if needed.
        // Actually, easiest valid approach for mismatched frequencies:
        // Calculate effective rate per simulation step.
        // Let's stick to the user's logic request: "Simulation approach".

        // Base Unit: Month (1/12 year). If Daily compounding, we might need finer grains. 
        // Let's strictly follow the compounding period as the simulation step if possible?
        // But contribution freq might differ.

        // Robust Simulation: 
        // Step size: 1 Day (approx 1/365 year) for maximum flexibility? Or just align to the GCD of frequencies?
        // Let's use 1 Month as base step. If Daily compounding, we approximate interest within the month. 
        // Wait, Daily compounding is r/365 per day.

        // Let's iterate month by month (total months = t * 12).
        const totalMonths = Math.ceil(t * 12);
        let balance = P;
        let totalContributed = 0;
        const breakdown: YearBreakdown[] = [];

        let yearStartBalance = P;
        let yearInterest = 0;
        let yearDeposits = 0;

        for (let m = 1; m <= totalMonths; m++) {
            // 1. Add Contribution?
            let contributionAdded = 0;
            // Check Frequency
            const isContributionMonth =
                (contributionFreq === 'MONTHLY') ||
                (contributionFreq === 'YEARLY' && m % 12 === 0); // End of year contribution? Or start? 

            // Refine logic:
            // If Monthly: every month.
            // If Yearly: Let's say it happens at month 1 (Beginning) or month 12 (End).
            if (isContributionMonth && withContribution) {
                // If Timing is Beginning, add before interest. If End, add after interest?
                // Actually typical is: Beginning of Period vs End of Period.
                // In a monthly loop:
                // Beginning = Add at start of month calculation.
                // End = Add at end of month calculation.

                // Handling Yearly properly in a monthly loop:
                // If Yearly & Beginning: m % 12 === 1 (Month 1, 13, 25...)
                // If Yearly & End: m % 12 === 0 (Month 12, 24...)

                let shouldAdd = false;
                if (contributionFreq === 'MONTHLY') shouldAdd = true;
                else if (contributionFreq === 'YEARLY') {
                    if (timing === 'BEGINNING') shouldAdd = (m - 1) % 12 === 0;
                    else shouldAdd = m % 12 === 0;
                }

                if (shouldAdd) {
                    contributionAdded = contribution;
                }
            }

            if (timing === 'BEGINNING' && contributionAdded > 0) {
                balance += contributionAdded;
                totalContributed += contributionAdded;
                yearDeposits += contributionAdded;
            }

            // 2. Apply Interest
            // Rate per month depending on compounding.
            // If compounding is >= Monthly, we can just apply (1 + r/n)^(n/12)
            // r_effective_monthly = (1 + r/n)^(n/12) - 1
            const r_eff_monthly = Math.pow(1 + r / n, n / 12) - 1;
            const interest = balance * r_eff_monthly;
            balance += interest;
            yearInterest += interest;

            if (timing === 'END' && contributionAdded > 0) {
                balance += contributionAdded;
                totalContributed += contributionAdded;
                yearDeposits += contributionAdded;
            }

            // 3. Track Year Breakdown
            if (m % 12 === 0 || m === totalMonths) {
                breakdown.push({
                    year: Math.ceil(m / 12),
                    startBalance: yearStartBalance,
                    interest: yearInterest,
                    deposits: yearDeposits,
                    endBalance: balance
                });
                yearStartBalance = balance;
                yearInterest = 0;
                yearDeposits = 0;
            }
        }

        const finalAmount = balance;
        const totalPrincipalAmount = P + totalContributed;
        const totalInterestEarned = finalAmount - totalPrincipalAmount;

        setResult({
            finalAmount,
            totalInterest: totalInterestEarned,
            totalPrincipal: totalPrincipalAmount,
            breakdown
        });
    };

    useEffect(() => {
        calculate();
    }, [principal, rate, tenure, tenureType, compounding, withContribution, contribution, contributionFreq, timing]);

    const pieData = {
        labels: ['Total Principal', 'Total Interest'],
        datasets: [
            {
                data: result ? [result.totalPrincipal, result.totalInterest] : [1, 1],
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
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                <Coins className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                Configuration
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {/* Principal */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Principal Amount</label>
                                <input
                                    type="number"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                    className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                />
                            </div>

                            {/* Rate & Tenure */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Interest Rate (%)</label>
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tenure</label>
                                        <input
                                            type="number"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="w-32">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">&nbsp;</label>
                                        <select
                                            value={tenureType}
                                            onChange={(e) => setTenureType(e.target.value as any)}
                                            className="block w-full px-2 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                        >
                                            <option value="years">Years</option>
                                            <option value="months">Months</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Compounding */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Compounding Frequency</label>
                                <select
                                    value={compounding}
                                    onChange={(e) => setCompounding(e.target.value as CompoundingFrequency)}
                                    className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                >
                                    <option value="YEARLY">Annually (1/yr)</option>
                                    <option value="HALF_YEARLY">Half-Yearly (2/yr)</option>
                                    <option value="QUARTERLY">Quarterly (4/yr)</option>
                                    <option value="MONTHLY">Monthly (12/yr)</option>
                                    <option value="DAILY">Daily (365/yr)</option>
                                </select>
                            </div>

                            {/* Contributions Toggle */}
                            <div className="flex items-center gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="contrib"
                                    checked={withContribution}
                                    onChange={(e) => setWithContribution(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="contrib" className="text-sm font-medium text-slate-700 dark:text-slate-300">Add Regular Contributions</label>
                            </div>

                            {withContribution && (
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg space-y-4 border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-top-2">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Contribution Amount</label>
                                        <input
                                            type="number"
                                            value={contribution}
                                            onChange={(e) => setContribution(Number(e.target.value))}
                                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Frequency</label>
                                            <select
                                                value={contributionFreq}
                                                onChange={(e) => setContributionFreq(e.target.value as ContributionFrequency)}
                                                className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                            >
                                                <option value="MONTHLY">Monthly</option>
                                                <option value="YEARLY">Yearly</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Timing</label>
                                            <select
                                                value={timing}
                                                onChange={(e) => setTiming(e.target.value as ContributionTiming)}
                                                className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                            >
                                                <option value="BEGINNING">Beginning of Period</option>
                                                <option value="END">End of Period</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    <div className="bg-slate-900 dark:bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-lg font-medium text-slate-300 dark:text-slate-400 mb-6">Projection</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 dark:text-slate-500 text-sm mb-1">Future Value</p>
                                <p className="text-4xl font-bold text-green-400 dark:text-green-500">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result?.finalAmount || 0)}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-800 dark:border-slate-700">
                                <div>
                                    <p className="text-slate-400 dark:text-slate-500 text-sm mb-1">Total Principal</p>
                                    <p className="text-xl font-semibold">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result?.totalPrincipal || 0)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-slate-400 dark:text-slate-500 text-sm mb-1">Total Interest</p>
                                    <p className="text-xl font-semibold text-green-400 dark:text-green-500">
                                        +{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result?.totalInterest || 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Breakdown
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Year Table */}
            {result?.breakdown && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Year-by-Year Growth
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Year</th>
                                    <th className="px-6 py-3">Start Balance</th>
                                    <th className="px-6 py-3">Contributions</th>
                                    <th className="px-6 py-3">Interest Earned</th>
                                    <th className="px-6 py-3">End Balance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {result.breakdown.map((row) => (
                                    <tr key={row.year} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                        <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">{row.year}</td>
                                        <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.startBalance)}</td>
                                        <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.deposits)}</td>
                                        <td className="px-6 py-3 text-green-600 dark:text-green-400">+{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.interest)}</td>
                                        <td className="px-6 py-3 font-semibold text-slate-900 dark:text-white">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.endBalance)}</td>
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
