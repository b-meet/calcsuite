import { DollarSign, Scale, HelpCircle, CheckCircle, FileText, TrendingUp, Users } from 'lucide-react';

const IndiaTaxCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">India Income Tax Calculator for FY 2025–26</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The India Income Tax Calculator helps you accurately calculate your income tax liability for Financial Year 2025–26 (Assessment Year 2026–27). Instantly compare the New Tax Regime vs Old Tax Regime, understand tax slabs, deductions, cess, and determine how much tax you actually need to pay.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            This calculator is designed for resident individuals, NRIs, salaried employees, and business income earners under the latest income tax rules.
                        </p>
                        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2 m-0">
                                <DollarSign className="w-5 h-5" />
                                Why Use This Calculator?
                            </h3>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300 m-0">
                                Income tax calculations in India can be complex due to multiple slabs, parallel regimes, and various deductions. This tool simplifies everything into a clear breakdown, preventing confusion and calculation errors.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Key Features
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-500" /> FY 2025–26 Tax Slabs
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Scale className="w-4 h-4 text-blue-500" /> New vs Old Regime Comparison
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Users className="w-4 h-4 text-purple-500" /> Resident & NRI Support
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <FileText className="w-4 h-4 text-orange-500" /> Auto Standard Deduction
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tax Slabs */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Income Tax Slabs (FY 2025-26)</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm m-0 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded w-fit text-green-800 dark:text-green-300">
                            New Tax Regime (Default)
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            Lower rates, fewer deductions. <strong>No tax up to ₹7 Lakhs/₹12 Lakhs (with rebate).</strong>
                        </p>
                        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                    <tr>
                                        <th className="p-3">Income Slab</th>
                                        <th className="p-3">Tax Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                                    <tr><td className="p-3">Up to ₹3,00,000</td><td className="p-3">Nil</td></tr>
                                    <tr><td className="p-3">₹3L – ₹6L</td><td className="p-3">5%</td></tr>
                                    <tr><td className="p-3">₹6L – ₹9L</td><td className="p-3">10%</td></tr>
                                    <tr><td className="p-3">₹9L – ₹12L</td><td className="p-3">15%</td></tr>
                                    <tr><td className="p-3">₹12L – ₹15L</td><td className="p-3">20%</td></tr>
                                    <tr><td className="p-3">Above ₹15L</td><td className="p-3">30%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm m-0 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded w-fit text-blue-800 dark:text-blue-300">
                            Old Tax Regime
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            Higher rates, but allows deductions (80C, 80D, HRA, Home Loan).
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li className="bg-white dark:bg-slate-800 p-2 rounded text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 flex justify-between">
                                <span>Section 80C</span>
                                <strong>Up to ₹1.5L</strong>
                            </li>
                            <li className="bg-white dark:bg-slate-800 p-2 rounded text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 flex justify-between">
                                <span>Section 80D</span>
                                <strong>Health Insurance</strong>
                            </li>
                            <li className="bg-white dark:bg-slate-800 p-2 rounded text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 flex justify-between">
                                <span>Section 24(b)</span>
                                <strong>Home Loan Interest</strong>
                            </li>
                        </ul>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                            <strong className="block text-blue-900 dark:text-blue-200 text-xs uppercase mb-1">Which is better?</strong>
                            <p className="text-xs text-blue-800 dark:text-blue-300">
                                It depends on your deductions. If your total deductions &gt; ₹3.75 Lakhs (approx), Old Regime is usually better.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is income tax zero up to ₹12 lakh?", a: "Yes, potentially under New Regime with rebate limits." },
                        { q: "Can I switch regimes every year?", a: "Salaried people - Yes. Business owners - No (once switched, it sticks)." },
                        { q: "Does this include cess?", a: "Yes. 4% Health & Education Cess is automatically added." },
                        { q: "Is this calculator free?", a: "Yes. Completely free to use." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">
                                <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-xl text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
                    <strong>Disclaimer:</strong> This income tax calculator is for informational purposes only. It does not constitute financial or legal advice. Tax laws are subject to change. For complex cases, consult a qualified Chartered Accountant (CA).
                </p>
            </section>
        </div>
    );
};

export default IndiaTaxCalculatorContent;
