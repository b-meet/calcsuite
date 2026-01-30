import { useState } from 'react';
import { Landmark } from 'lucide-react';

export default function IndiaEMICalculator() {
    const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs default
    const [interestRate, setInterestRate] = useState<number>(8.5);
    const [tenure, setTenure] = useState<number>(20); // Years

    const calculateEMI = () => {
        const principal = loanAmount;
        const ratePerMonth = interestRate / (12 * 100);
        const months = tenure * 12;

        const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1);

        const totalPayment = emi * months;
        const totalInterest = totalPayment - principal;

        return {
            emi,
            totalInterest,
            totalPayment
        };
    };

    const result = calculateEMI();

    const formatIndianCurrency = (num: number) => {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    };

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Loan Amount (₹)
                    </label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    />
                    <div className="flex gap-2 mt-2">
                        <button onClick={() => setLoanAmount(loanAmount + 100000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium transition-colors">+ 1L</button>
                        <button onClick={() => setLoanAmount(loanAmount + 500000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium transition-colors">+ 5L</button>
                        <button onClick={() => setLoanAmount(loanAmount + 1000000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium transition-colors">+ 10L</button>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Interest Rate (% p.a)
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Loan Tenure (Years)
                    </label>
                    <input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    />
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full mt-4 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Loan Analysis
                </h3>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-4 text-center">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">Monthly EMI</div>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">₹ {formatIndianCurrency(result.emi)}</div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                        <span>Principal Amount</span>
                        <span className="font-medium text-slate-900 dark:text-slate-200">₹ {formatIndianCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                        <span>Total Interest</span>
                        <span className="font-medium text-red-500 dark:text-red-400">₹ {formatIndianCurrency(result.totalInterest)}</span>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-slate-900 dark:text-white font-bold text-lg">
                        <span>Total Payment</span>
                        <span>₹ {formatIndianCurrency(result.totalPayment)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
