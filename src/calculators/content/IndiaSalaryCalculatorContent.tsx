import { Briefcase, CreditCard, HelpCircle, CheckCircle, PieChart, Coins, Building } from 'lucide-react';

const IndiaSalaryCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Salary Calculator India: CTC to In-Hand</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Salary Calculator helps you estimate your monthly in-hand salary (take-home pay) from your annual CTC (Cost to Company). It provides a detailed breakdown of salary components like Basic, HRA, Special Allowances, and deductions for PF and Professional Tax.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Understanding the difference between your Offer Letter amount (CTC) and Bank Credit amount (In-Hand) is crucial for financial planning.
                        </p>
                        <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2 m-0">
                                <Briefcase className="w-5 h-5" />
                                CTC vs In-Hand Salary
                            </h3>
                            <p className="text-sm text-indigo-800 dark:text-indigo-300 m-0">
                                <strong>CTC</strong> includes employer expenses like their PF contribution, gratuity, and insurance, which are NOT paid to you monthly. <strong>In-Hand</strong> is what remains after these exclusions and employee deductions.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Salary Components
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Coins className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Basic Salary</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Typically 40-50% of CTC. Fully taxable.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Building className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">HRA (House Rent Allowance)</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Tax exemption available if you pay rent.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <PieChart className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Provident Fund (PF)</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">12% of Basic deducted for retirement savings.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How In-Hand Salary is Calculated</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            The calculator follows a standard Indian payroll structure to estimate your pay cheque.
                        </p>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm m-0">Deductions Explanation</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><strong>Employee PF:</strong> 12% of Basic Salary is deducted from your pay.</li>
                            <li><strong>Employer PF:</strong> Another 12% is part of CTC but never enters your bank account.</li>
                            <li><strong>Professional Tax:</strong> State-levied tax (approx ₹200/month).</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2 m-0">
                            <CreditCard className="w-4 h-4 text-indigo-500" /> Example: ₹12 Lakh CTC
                        </h3>
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded">
                                <span>Monthly CTC</span>
                                <span className="font-medium text-slate-900 dark:text-white">₹1,00,000</span>
                            </div>
                            <div className="flex justify-between p-2 text-red-600 dark:text-red-400">
                                <span>Less: PF & Deductions</span>
                                <span>- ₹6,200 (Approx)</span>
                            </div>
                            <div className="flex justify-between p-2 bg-emerald-50 dark:bg-emerald-900/10 rounded border border-emerald-100 dark:border-emerald-900/30">
                                <span className="text-emerald-700 dark:text-emerald-400 font-bold">Net In-Hand</span>
                                <span className="text-emerald-700 dark:text-emerald-400 font-bold">₹93,800</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 text-center">
                            *Figures are indicative. Company policies vary.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is PF compulsory?", a: "Yes, for Basic Salary up to ₹15,000/month. Above that, it's optional but recommended." },
                        { q: "Is bonus part of monthly salary?", a: "No. Bonuses are usually paid annually or quarterly and excluded from monthly in-hand." },
                        { q: "Why is In-Hand less than CTC?", a: "CTC includes non-cash benefits and long-term savings (PF/Gratuity)." },
                        { q: "Is Professional Tax same everywhere?", a: "No. It varies by state (e.g., ₹200 in Maharashtra/Karnataka, ₹0 in Delhi)." }
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
        </div>
    );
};

export default IndiaSalaryCalculatorContent;
