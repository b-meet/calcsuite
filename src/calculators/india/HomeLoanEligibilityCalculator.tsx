import { useState, useEffect } from 'react';
import { Home, CheckCircle } from 'lucide-react';

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

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                            <Home className="w-5 h-5 text-blue-600" />
                            Income & Loan Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Net Monthly Income
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={monthlyIncome}
                                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Existing Monthly EMIs / Obligations
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={obligations}
                                        onChange={(e) => setObligations(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Sum of all current loan EMIs + credit card bills.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Interest Rate (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        step="0.1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Tenure (Years)
                                    </label>
                                    <input
                                        type="number"
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                        className="block w-full px-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    FOIR (%) (Fixed Obligation to Income Ratio)
                                </label>
                                <input
                                    type="range"
                                    min="40"
                                    max="70"
                                    step="1"
                                    value={foir}
                                    onChange={(e) => setFoir(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
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

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h4 className="font-medium text-blue-900 flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Insight
                        </h4>
                        <p className="text-blue-800 text-sm">
                            With a <strong>{foir}% FOIR</strong>, banks estimate you can spare <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format((monthlyIncome * foir / 100))}</strong> monthly for all loan repayments. Since you already pay <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(obligations)}</strong>, your remaining capacity is <strong>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.maxAffordableEMI || 0)}</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
