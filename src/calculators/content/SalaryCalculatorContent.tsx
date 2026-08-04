import { Briefcase, Calculator, Info, BarChart3, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SALARY_TABLE_DATA = [
    { annual: 25000, monthly: 2083, biweekly: 962, weekly: 481, daily: 96, hourly: 12.02 },
    { annual: 30000, monthly: 2500, biweekly: 1154, weekly: 577, daily: 115, hourly: 14.42 },
    { annual: 40000, monthly: 3333, biweekly: 1538, weekly: 769, daily: 154, hourly: 19.23 },
    { annual: 50000, monthly: 4167, biweekly: 1923, weekly: 962, daily: 192, hourly: 24.04 },
    { annual: 60000, monthly: 5000, biweekly: 2308, weekly: 1154, daily: 231, hourly: 28.85 },
    { annual: 75000, monthly: 6250, biweekly: 2885, weekly: 1442, daily: 288, hourly: 36.06 },
    { annual: 80000, monthly: 6667, biweekly: 3077, weekly: 1538, daily: 308, hourly: 38.46 },
    { annual: 100000, monthly: 8333, biweekly: 3846, weekly: 1923, daily: 385, hourly: 48.08 },
    { annual: 120000, monthly: 10000, biweekly: 4615, weekly: 2308, daily: 462, hourly: 57.69 },
    { annual: 150000, monthly: 12500, biweekly: 5769, weekly: 2885, daily: 577, hourly: 72.12 },
];

const PAY_FREQUENCY_DATA = [
    { frequency: 'Weekly', paychecks: 52, period: 'Every week', common: 'Trades, retail, hourly workers' },
    { frequency: 'Biweekly', paychecks: 26, period: 'Every 2 weeks', common: 'Most common in the US' },
    { frequency: 'Semi-monthly', paychecks: 24, period: '1st and 15th', common: 'Salaried employees' },
    { frequency: 'Monthly', paychecks: 12, period: 'Once per month', common: 'Common in India, UK, EU' },
];

const SalaryCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Salary Calculator to Convert Pay Across Time Periods</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Salary Calculator helps you quickly convert income between hourly, daily, weekly, bi-weekly, monthly, and annual pay. It is useful for understanding how different pay structures compare and for planning income more clearly.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <Briefcase className="w-4 h-4" />
                                Why Conversion Matters
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Income can look very different depending on how it is presented. Converting pay into multiple time frames helps you better understand earning potential and make informed financial decisions.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Calculator className="w-5 h-5 text-indigo-500" />
                            What This Calculator Is Useful For
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Comparing hourly and salaried pay
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Understanding annual income from hourly work
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Planning monthly and weekly budgets
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Evaluating job offers with different pay structures
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Setting freelance and consulting rates
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Salary Conversion Reference Table */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 m-0 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-emerald-500" />
                    Salary Conversion Table
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                    Quick reference for common salary amounts converted across all pay periods. Based on a standard 40-hour work week and 260 working days per year.
                </p>
                <div className="overflow-x-auto -mx-8 px-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                                <th className="text-left py-3 px-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Annual</th>
                                <th className="text-right py-3 px-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Monthly</th>
                                <th className="text-right py-3 px-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Biweekly</th>
                                <th className="text-right py-3 px-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Weekly</th>
                                <th className="text-right py-3 px-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Daily</th>
                                <th className="text-right py-3 px-3 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Hourly</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SALARY_TABLE_DATA.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td className="py-3 px-3 font-medium text-slate-900 dark:text-white whitespace-nowrap">${row.annual.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">${row.monthly.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">${row.biweekly.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">${row.weekly.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">${row.daily.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">${row.hourly.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
                    All values are gross (before tax). Assumes 40 hours/week, 52 weeks/year, 26 biweekly periods, and 260 working days. Use the calculator above for custom hours or amounts.
                </p>
            </section>

            {/* How Salary Conversion Works */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                    How Salary Conversion Works
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Salary conversion works by normalizing your pay to an annual figure first, then dividing by the number of periods in each time frame. Here are the standard formulas used by this salary calculator:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'Hourly to Annual', formula: 'Hourly Rate × Hours per Week × 52 weeks', example: '$25/hr × 40 hrs × 52 = $52,000/year' },
                        { title: 'Annual to Monthly', formula: 'Annual Salary ÷ 12 months', example: '$60,000 ÷ 12 = $5,000/month' },
                        { title: 'Annual to Biweekly', formula: 'Annual Salary ÷ 26 pay periods', example: '$60,000 ÷ 26 = $2,308/biweekly' },
                        { title: 'Annual to Weekly', formula: 'Annual Salary ÷ 52 weeks', example: '$60,000 ÷ 52 = $1,154/week' },
                        { title: 'Annual to Daily', formula: 'Annual Salary ÷ 260 working days', example: '$60,000 ÷ 260 = $231/day' },
                        { title: 'Monthly to Hourly', formula: 'Monthly Salary ÷ 173.33 hours', example: '$5,000 ÷ 173.33 = $28.85/hr' },
                    ].map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2 m-0">{item.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">{item.formula}</p>
                            <p className="text-xs text-emerald-600 dark:text-emerald-400">Example: {item.example}</p>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    The number 173.33 (average monthly hours) comes from 40 hours/week × 52 weeks ÷ 12 months. If you work a different number of hours per week, the hourly conversion will change accordingly — use the calculator above with your custom hours.
                </p>
            </section>

            {/* Pay Frequency Comparison */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 m-0 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-purple-500" />
                    Pay Frequency Comparison
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Different employers use different pay schedules. Understanding the distinction between biweekly, semi-monthly, weekly, and monthly pay helps you budget correctly and avoid cash flow surprises.
                </p>
                <div className="overflow-x-auto -mx-8 px-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                                <th className="text-left py-3 px-3 font-semibold text-slate-700 dark:text-slate-300">Pay Frequency</th>
                                <th className="text-center py-3 px-3 font-semibold text-slate-700 dark:text-slate-300">Paychecks/Year</th>
                                <th className="text-left py-3 px-3 font-semibold text-slate-700 dark:text-slate-300">Schedule</th>
                                <th className="text-left py-3 px-3 font-semibold text-slate-700 dark:text-slate-300">Common In</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PAY_FREQUENCY_DATA.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-100 dark:border-slate-700">
                                    <td className="py-3 px-3 font-medium text-slate-900 dark:text-white">{row.frequency}</td>
                                    <td className="py-3 px-3 text-center text-slate-600 dark:text-slate-300">{row.paychecks}</td>
                                    <td className="py-3 px-3 text-slate-600 dark:text-slate-300">{row.period}</td>
                                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 text-xs">{row.common}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-900/30">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                        <strong>Biweekly vs semi-monthly:</strong> Biweekly pay (26 paychecks) is not the same as semi-monthly pay (24 paychecks). With biweekly pay, two months each year will have three paychecks instead of two. This can affect monthly budgeting and deduction calculations.
                    </p>
                </div>
            </section>

            {/* Factors That Affect Salary */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Factors That Affect Salary</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    While this salary calculator converts gross pay between time periods, actual compensation depends on several factors beyond the base number:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { title: 'Location & Cost of Living', desc: 'The same job title can pay significantly more or less depending on the city and country. A $75,000 salary in a high-cost area may offer less purchasing power than $55,000 in a lower-cost region.' },
                        { title: 'Experience Level', desc: 'Entry-level positions typically start at the lower end of a salary range. Mid-career and senior professionals can earn 50–100% more for the same role as they gain expertise.' },
                        { title: 'Industry & Sector', desc: 'Technology, finance, and healthcare tend to offer higher base salaries compared to education, non-profit, or retail sectors for similar skill levels.' },
                        { title: 'Education & Certifications', desc: 'Advanced degrees (MBA, MS) and professional certifications often correlate with higher salary offers, particularly in specialized fields like engineering and medicine.' },
                        { title: 'Negotiation', desc: 'Salary negotiation can increase an initial offer by 5–15%. Converting offers to the same time period using this calculator makes it easier to compare and negotiate effectively.' },
                        { title: 'Benefits & Total Compensation', desc: 'Base salary is only part of total compensation. Health insurance, retirement contributions (401k, PF), stock options, bonuses, and paid time off all add to the real value of a job offer.' },
                    ].map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2 m-0">{item.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed m-0">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tools */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Related Salary Tools</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    This salary calculator shows gross pay conversions. For net pay, tax calculations, and salary hike analysis, explore these related tools:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { to: '/calculator/india-salary', label: 'In-Hand Salary Calculator', desc: 'Convert CTC to take-home pay (India)' },
                        { to: '/calculator/india-tax', label: 'Income Tax Calculator', desc: 'Compare old vs new tax regime (India)' },
                        { to: '/calculator/percentage-change', label: 'Percentage Change Calculator', desc: 'Calculate salary hike percentage' },
                        { to: '/calculator/inflation', label: 'Inflation Calculator', desc: 'See how salary purchasing power changes over time' },
                    ].map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.to}
                            className="flex flex-col p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors no-underline"
                        >
                            <span className="font-semibold text-sm text-blue-600 dark:text-blue-400">{item.label}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.desc}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* How to Use */}
            <section>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-orange-500" />
                        How to Use
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Enter Amount</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Input your salary amount.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Select Frequency</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Choose hourly, daily, weekly, biweekly, monthly, or annual.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">View Result</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">See instant conversions across all six time periods.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SalaryCalculatorContent;
