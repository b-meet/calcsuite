import { useState, useMemo } from 'react';
import { Landmark, TrendingUp, ChevronDown, ChevronUp, Users, PiggyBank, Calendar, Home } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function IndiaEMICalculator() {
    const [loanAmount, setLoanAmount] = useState<number | ''>(5000000); // 50 Lakhs default
    const [interestRate, setInterestRate] = useState<number | ''>(8.5);
    const [tenure, setTenure] = useState<number | ''>(20); // Years
    const [prepayment, setPrepayment] = useState<number | ''>('');
    const [isJointLoan, setIsJointLoan] = useState(false);
    const [showAmortization, setShowAmortization] = useState(false);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('india-emi');

    const calculation = useMemo(() => {
        const principal = Number(loanAmount);
        const rate = Number(interestRate);
        const t = Number(tenure);
        const extraPay = Number(prepayment) || 0;

        if (!principal || !rate || !t) return null;

        const ratePerMonth = rate / (12 * 100);
        const totalMonths = t * 12;

        // Base EMI (without prepayment)
        const baseEmi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, totalMonths)) / (Math.pow(1 + ratePerMonth, totalMonths) - 1);

        // Amortization with Prepayment
        let balance = principal;
        let totalInterest = 0;
        let monthsElapsed = 0;
        const yearlyBreakdown = [];
        let currentYearInterest = 0;
        let currentYearPrincipal = 0;
        let currentYearPayment = 0;

        while (balance > 10 && monthsElapsed < 600) { // Safety limit 50 years
            const interestComponent = balance * ratePerMonth;
            let principalComponent = baseEmi - interestComponent;
            let totalMonthPayment = baseEmi + extraPay;

            // Last month adjustment
            if (balance < principalComponent + extraPay) {
                principalComponent = balance;
                totalMonthPayment = principalComponent + interestComponent;
            } else {
                principalComponent += extraPay;
            }

            balance -= principalComponent;
            totalInterest += interestComponent;

            // Yearly Accumulation
            currentYearInterest += interestComponent;
            currentYearPrincipal += principalComponent;
            currentYearPayment += totalMonthPayment;
            monthsElapsed++;

            if (monthsElapsed % 12 === 0 || balance <= 10) {
                yearlyBreakdown.push({
                    year: Math.ceil(monthsElapsed / 12),
                    interest: currentYearInterest,
                    principal: currentYearPrincipal,
                    balance: balance > 0 ? balance : 0,
                    totalPayment: currentYearPayment
                });
                currentYearInterest = 0;
                currentYearPrincipal = 0;
                currentYearPayment = 0;
            }
        }

        const actualTenureYears = (monthsElapsed / 12).toFixed(1);
        const timeSavedMonths = totalMonths - monthsElapsed;
        const interestSaved = ((baseEmi * totalMonths) - principal) - totalInterest;

        return {
            emi: baseEmi,
            totalInterest,
            totalPayment: principal + totalInterest,
            yearlyBreakdown,
            actualTenureYears,
            timeSavedMonths,
            interestSaved
        };
    }, [loanAmount, interestRate, tenure, prepayment]);

    const handleSave = () => {
        if (!calculation) return;
        addHistory(
            { loanAmount, interestRate, tenure, prepayment },
            `₹${formatIndianCurrency(calculation.emi)}/mo`,
            `EMI + ₹${prepayment || 0} Extra`
        );
    };

    const handleHistorySelect = (item: any) => {
        setLoanAmount(item.inputs.loanAmount);
        setInterestRate(item.inputs.interestRate);
        setTenure(item.inputs.tenure);
    };

    const formatIndianCurrency = (num: number) => {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Loan Amount (₹)
                        </label>
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value === '' ? '' : Number(e.target.value))}
                            className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                        />
                        <div className="flex gap-2 mt-2">
                            <button onClick={() => setLoanAmount((Number(loanAmount) || 0) + 100000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium transition-colors">+ 1L</button>
                            <button onClick={() => setLoanAmount((Number(loanAmount) || 0) + 500000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium transition-colors">+ 5L</button>
                            <button onClick={() => setLoanAmount((Number(loanAmount) || 0) + 1000000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium transition-colors">+ 10L</button>
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
                            onChange={(e) => setInterestRate(e.target.value === '' ? '' : Number(e.target.value))}
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
                            onChange={(e) => setTenure(e.target.value === '' ? '' : Number(e.target.value))}
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

                    {/* Prepayment & Joint Loan Controls */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <PiggyBank className="w-4 h-4 text-green-500" />
                                Extra Monthly Prepayment
                            </label>
                            <span className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">Save Interest</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <input
                                type="range"
                                min="0"
                                max={Number(loanAmount) * 0.01} // Max 1% of loan amount as monthly prepay
                                step="1000"
                                value={prepayment}
                                onChange={(e) => setPrepayment(Number(e.target.value))}
                                className="w-full h-2 bg-green-100 dark:bg-green-900/30 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                            <input
                                type="number"
                                value={prepayment}
                                onChange={(e) => setPrepayment(e.target.value === '' ? '' : Number(e.target.value))}
                                placeholder="e.g. 5000"
                                className="w-24 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-2 mt-4 cursor-pointer" onClick={() => setIsJointLoan(!isJointLoan)}>
                            <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isJointLoan ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${isJointLoan ? 'translate-x-4' : ''}`} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-indigo-500" />
                                    Joint Loan (Max Benefit Potential)
                                </span>
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-1">
                                    *Subject to co-ownership & repayment proofs.
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                        <TrendingUp size={20} />
                        Calculate & Save
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Result Card */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Landmark className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Loan Analysis
                        </h3>

                        {calculation ? (
                            <>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-4 text-center">
                                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">Monthly EMI</div>
                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">₹ {formatIndianCurrency(calculation.emi)}</div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                                        <span>Principal Amount</span>
                                        <span className="font-medium text-slate-900 dark:text-slate-200">₹ {formatIndianCurrency(Number(loanAmount))}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                                        <span>Total Interest</span>
                                        <span className="font-medium text-red-500 dark:text-red-400">₹ {formatIndianCurrency(calculation.totalInterest)}</span>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-slate-900 dark:text-white font-bold text-lg">
                                        <span>Total Payment</span>
                                        <span>₹ {formatIndianCurrency(calculation.totalPayment)}</span>
                                    </div>
                                </div>

                                {prepayment ? (
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800 text-sm">
                                        <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-300 mb-2">
                                            <TrendingUp className="w-4 h-4" /> Prepayment Impact
                                        </div>
                                        <p className="text-green-800 dark:text-green-200 mb-1">
                                            You save <span className="font-bold">₹ {formatIndianCurrency(calculation.interestSaved)}</span> in interest!
                                        </p>
                                        <p className="text-green-800 dark:text-green-200">
                                            New Tenure: <span className="font-bold">{calculation.actualTenureYears} Years</span> (Reduced by {calculation.timeSavedMonths} months)
                                        </p>
                                    </div>
                                ) : null}

                                <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                                            Max Potential Tax Benefit (FY 2025-26)
                                        </span>
                                        {isJointLoan && <span className="text-[10px] bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-2 py-0.5 rounded-full">Joint Loan Applied</span>}
                                    </div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-600 dark:text-slate-400">Sec 24(b) Interest</span>
                                        <span className="font-bold text-slate-900 dark:text-white">₹ {isJointLoan ? '4.00' : '2.00'} Lakhs*</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">Sec 80C Principal</span>
                                        <span className="font-bold text-slate-900 dark:text-white">₹ {isJointLoan ? '3.00' : '1.50'} Lakhs*</span>
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-indigo-200 dark:border-indigo-800/50">
                                        <ul className="text-[10px] text-slate-500 dark:text-slate-400 space-y-1 list-disc pl-3">
                                            <li>Interest deduction of ₹2L is for <strong>Self-Occupied</strong> property only.</li>
                                            <li>Principal (80C) limit of ₹1.5L is <strong>shared</strong> with PF, PPF, LIC, etc.</li>
                                            <li>Tax benefits require <strong>proof of payment</strong> & co-ownership (for joint).</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Rent vs Buy Insight */}
                                <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-800">
                                    <div className="flex items-center gap-2 font-bold text-orange-800 dark:text-orange-200 mb-2">
                                        <Home className="w-4 h-4" /> Rent vs Buy Insight
                                    </div>
                                    <p className="text-sm text-orange-900 dark:text-orange-100 mb-2">
                                        Paying <strong>₹ {formatIndianCurrency(calculation.emi)}</strong> EMI?
                                    </p>
                                    <p className="text-xs text-orange-800 dark:text-orange-300">
                                        A similar home might rent for ~₹ {formatIndianCurrency(Number(loanAmount) * 0.0025)}/mo.
                                        If you rent and invest the difference (SIP at 12%), you could potentially build a larger corpus in 20 years.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="text-center text-slate-500 py-10">
                                Enter details to calculate
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Amortization Schedule */}
            {calculation && (
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <button
                        onClick={() => setShowAmortization(!showAmortization)}
                        className="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-slate-900 dark:text-white">Amortization Schedule</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Year-wise breakdown of Principal vs Interest</p>
                            </div>
                        </div>
                        {showAmortization ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>

                    {showAmortization && (
                        <div className="border-t border-slate-200 dark:border-slate-800">
                            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 m-4 rounded-xl text-sm text-slate-700 dark:text-slate-300 flex gap-3">
                                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <div>
                                    <strong className="block text-blue-700 dark:text-blue-300 mb-1">Why is my principal barely moving?</strong>
                                    In the first few years, up to <strong>70% of your EMI</strong> goes toward interest. This is the "Reducing Balance" method.
                                    <br />Pro Tip: Making even one extra EMI per year can reduce your tenure by years!
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium">
                                        <tr>
                                            <th className="p-4 whitespace-nowrap">Year</th>
                                            <th className="p-4 whitespace-nowrap">Principal Paid</th>
                                            <th className="p-4 whitespace-nowrap">Interest Paid</th>
                                            <th className="p-4 whitespace-nowrap">Total Payment</th>
                                            <th className="p-4 whitespace-nowrap">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {calculation.yearlyBreakdown.map((row) => (
                                            <tr key={row.year} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="p-4 font-mono font-medium text-slate-900 dark:text-white">{row.year}</td>
                                                <td className="p-4 text-green-600 dark:text-green-400">₹ {formatIndianCurrency(Math.round(row.principal))}</td>
                                                <td className="p-4 text-red-500 dark:text-red-400">₹ {formatIndianCurrency(Math.round(row.interest))}</td>
                                                <td className="p-4 text-slate-600 dark:text-slate-400">₹ {formatIndianCurrency(Math.round(row.totalPayment))}</td>
                                                <td className="p-4 font-bold text-slate-900 dark:text-white">₹ {formatIndianCurrency(Math.round(row.balance))}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
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

