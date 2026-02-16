import { useState } from 'react';
import { Briefcase, TrendingUp, Info } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function IndiaSalaryCalculator() {
    const [ctc, setCtc] = useState<number>(1200000); // Yearly CTC in Rupees
    const [bonus, setBonus] = useState<number>(0);
    const [professionalTax, setProfessionalTax] = useState<number>(200); // Monthly
    const [viewMode, setViewMode] = useState<'monthly' | 'yearly'>('monthly');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('india-salary');

    const calculateSalary = () => {
        const monthlyCTC = ctc / 12;
        const monthlyBonus = bonus / 12;

        // Basic Assumption: Basic is 50% of CTC
        const basic = monthlyCTC * 0.5;
        const hra = basic * 0.4; // Assuming Metro 40% (Simplified)
        const specialAllowance = Math.max(0, monthlyCTC - basic - hra - monthlyBonus);

        // Deductions
        // PF is 12% of Basic (capped at 1800 if basic > 15000 usually, but let's take flat 12% for simplicity or max cap)
        const pf = basic * 0.12;

        // Income Tax (Placeholder - normally complex)
        const incomeTax = 0;

        const totalDeductions = pf + professionalTax + incomeTax;
        const inHand = monthlyCTC - totalDeductions - monthlyBonus;

        return {
            monthly: {
                basic,
                hra,
                specialAllowance,
                pf,
                professionalTax,
                incomeTax,
                inHand
            },
            yearly: {
                basic: basic * 12,
                hra: hra * 12,
                specialAllowance: specialAllowance * 12,
                pf: pf * 12,
                professionalTax: professionalTax * 12,
                incomeTax: incomeTax * 12,
                inHand: inHand * 12
            }
        };
    };

    const result = calculateSalary();
    const currentView = result[viewMode];

    const handleSave = () => {
        addHistory(
            { ctc, bonus, professionalTax },
            `₹${Math.round(result.monthly.inHand).toLocaleString('en-IN')}/mo`,
            `CTC: ₹${(ctc / 100000).toFixed(1)}L`
        );
    };

    const handleHistorySelect = (item: any) => {
        setCtc(item.inputs.ctc);
        setBonus(item.inputs.bonus);
        setProfessionalTax(item.inputs.professionalTax);
    };

    const formatCurrency = (amount: number) => {
        return Math.round(amount).toLocaleString('en-IN');
    };

    // Calculate percentages for Bar Chart
    // Actually, distinct components of CTC are: Basic + HRA + Special Allowance + Bonus. 
    // Deductions are taken from these. 
    // Let's visualize the EARNINGS breakdown: Basic, HRA, Special Allowance.
    // And DEDUCTIONS: PF, Tax.

    // Better visualization for "Salary Composition":
    // Show [Basic][HRA][Special][PF][Tax] stacked? 
    // Let's try to show where the money goes from the Gross Pay.
    // Gross = Basic + HRA + Special Breakdown.
    // Let's use the layout: [Basic (Blue)] [HRA (Purple)] [Special (Teal)] [PF (Red)]

    // Normalize for bar chart width
    const barTotal = result.monthly.basic + result.monthly.hra + result.monthly.specialAllowance;
    const getPercent = (val: number) => (val / barTotal) * 100;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs Section */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Yearly CTC (₹)
                        </label>
                        <input
                            type="number"
                            value={ctc}
                            onChange={(e) => setCtc(Number(e.target.value))}
                            className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Annual Variable Pay (Bonus)
                        </label>
                        <input
                            type="number"
                            value={bonus}
                            onChange={(e) => setBonus(Number(e.target.value))}
                            className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                        />
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Deducted from monthly fixed pay calculation</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Monthly Professional Tax (₹)
                        </label>
                        <input
                            type="number"
                            value={professionalTax}
                            onChange={(e) => setProfessionalTax(Number(e.target.value))}
                            className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                        />
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

                {/* Results Section */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col">

                    {/* Header with Toggle */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Salary Breakdown
                        </h3>
                        <div className="bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 flex text-xs font-medium">
                            <button
                                onClick={() => setViewMode('monthly')}
                                className={`px-3 py-1.5 rounded-md transition-all ${viewMode === 'monthly'
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setViewMode('yearly')}
                                className={`px-3 py-1.5 rounded-md transition-all ${viewMode === 'yearly'
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>

                    {/* Net Salary Highlight - Elite UI */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={80} />
                        </div>
                        <p className="text-blue-100 text-sm font-medium mb-1">
                            Net {viewMode === 'monthly' ? 'Monthly' : 'Yearly'} In-Hand
                        </p>
                        <div className="text-4xl font-bold tracking-tight">
                            ₹ {formatCurrency(currentView.inHand)}
                        </div>
                        <p className="text-blue-200 text-xs mt-2">
                            *Excludes flexible benefits & variable pay
                        </p>
                    </div>

                    {/* Salary Composition Bar Chart */}
                    <div className="space-y-2">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Salary Composition
                        </div>
                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                            <div style={{ width: `${getPercent(result.monthly.basic)}%` }} className="bg-blue-500 h-full" title="Basic Salary"></div>
                            <div style={{ width: `${getPercent(result.monthly.hra)}%` }} className="bg-purple-500 h-full" title="HRA"></div>
                            <div style={{ width: `${getPercent(result.monthly.specialAllowance)}%` }} className="bg-teal-400 h-full" title="Agllowances"></div>
                            {/* Deductions visual in negative space or just parts of gross? Let's just show earning components for now or it gets complex visually */}
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 px-1">
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Basic</span>
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> HRA</span>
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-teal-400"></div> Allowance</span>
                        </div>
                    </div>

                    {/* Breakdown List */}
                    <div className="space-y-3 pt-2">
                        {/* Earnings */}
                        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                            <span>Basic Salary</span>
                            <span className="font-medium text-slate-900 dark:text-slate-200">₹ {formatCurrency(currentView.basic)}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                            <span>HRA (40% of Basic)</span>
                            <span className="font-medium text-slate-900 dark:text-slate-200">₹ {formatCurrency(currentView.hra)}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 group relative">
                            <span className="flex items-center gap-1 cursor-help decoration-dotted underline decoration-slate-300">
                                Special Allowance
                                <Info size={12} className="text-slate-400" />
                            </span>
                            <span className="font-medium text-slate-900 dark:text-slate-200">₹ {formatCurrency(currentView.specialAllowance)}</span>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-800 text-white text-xs rounded-lg p-2 invisible group-hover:visible z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                Balancing component. Remaining salary after fixed allocations.
                            </div>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>

                        {/* Deductions */}
                        <div className="flex justify-between items-center text-red-500 dark:text-red-400">
                            <span>PF (12% of Basic)</span>
                            <span className="font-medium">- ₹ {formatCurrency(currentView.pf)}</span>
                        </div>
                        <div className="flex justify-between items-center text-red-500 dark:text-red-400">
                            <span>Professional Tax</span>
                            <span className="font-medium">- ₹ {formatCurrency(currentView.professionalTax)}</span>
                        </div>

                        {/* Income Tax Row with Disclaimer */}
                        <div className="flex justify-between items-center text-slate-400 dark:text-slate-500 text-sm italic group relative">
                            <span className="flex items-center gap-1 cursor-help">
                                Income Tax (TDS)
                                <Info size={12} />
                            </span>
                            <span>~ ₹ {formatCurrency(currentView.incomeTax)}</span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full right-0 mb-2 w-56 bg-slate-800 text-white text-xs rounded-lg p-2 invisible group-hover:visible z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                Actual tax depends on 80C, HRA exemptions, and Tax Regime (Old/New). Use our Tax Calculator for exact figures.
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
