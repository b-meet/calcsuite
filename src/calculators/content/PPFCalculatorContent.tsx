import React from 'react';
import { Landmark, ShieldCheck, CheckCircle, TrendingUp, Lock, Scale, Info, Briefcase, Calendar, AlertTriangle } from 'lucide-react';

const ppfInterestHistory = [
    { year: '2020 - Present', rate: '7.10%' },
    { year: '2019 - 2020', rate: '7.90%' },
    { year: '2018 - 2019', rate: '8.00%' },
    { year: '2017 - 2018', rate: '7.60%' },
    { year: '2016 - 2017', rate: '8.10%' },
];

const ppfVsFd = [
    { feature: 'Tax Exemption', ppf: 'EEE (Exempt on Investment, Interest, Maturity)', fd: 'Taxable (TDS applicable on interest)' },
    { feature: 'Interest Rate', ppf: 'Floating (Govt determined quarterly)', fd: 'Fixed at the time of booking' },
    { feature: 'Lock-in Period', ppf: '15 Years', fd: '7 days to 10 years (Tax Saving FD is 5 years)' },
    { feature: 'Risk Level', ppf: 'Zero Risk (Sovereign Guarantee)', fd: 'Very Low Risk (DICGC insured up to ₹5 Lakh)' },
    { feature: 'Loan Facility', ppf: 'Available from 3rd to 6th financial year', fd: 'Available (Overdraft against FD)' },
    { feature: 'Premature Closure', ppf: 'Allowed after 5 years under strict conditions', fd: 'Allowed (with penalty)' },
];

const PPFCalculatorContent = () => {
    return (
        <div className="space-y-16 not-prose">
            {/* Hero SEO Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Mastering the Public Provident Fund (PPF)</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Public Provident Fund (PPF) is India's most popular long-term savings scheme. Backed by the Government of India, it offers absolute capital safety and guaranteed tax-free returns. Whether you are building a retirement corpus, saving for your child's education, or aiming for long-term wealth, this guide covers everything you need to know about PPF calculation, rules, and withdrawal strategies.
                </p>
            </section>

            {/* Smart Tip Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">The "5th of the Month" Rule</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            PPF interest is calculated on the <strong>lowest balance between the 5th day and the last day of the month</strong>. If you deposit money on the 6th, that deposit will not earn interest for the current month.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            <strong>To maximize your returns:</strong> Always make your monthly contributions between the 1st and the 5th of the month. If making a lump-sum annual investment (up to ₹1.5 Lakh), deposit it before April 5th of the financial year to earn interest on the full amount for the entire year.
                        </p>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm w-full">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            Key PPF Guidelines
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Lock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">15-Year Maturity</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Can be extended indefinitely in blocks of 5 years.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Landmark className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Deposit Limits</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Minimum ₹500/year. Maximum ₹1,50,000/year.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">EEE Tax Status</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Exempt on Investment (80C), Interest, and Maturity.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How Interest is Calculated */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
                        <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">How is PPF Interest Calculated?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            While PPF interest is compounded annually and credited to your account on March 31st every year, the calculation actually happens on a monthly basis.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The formula for calculating PPF maturity is based on the compound interest formula:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm">
                            <p className="text-slate-800 dark:text-slate-200 font-bold">F = P × [((1 + i)^n - 1) / i]</p>
                            <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400 text-xs">
                                <li><strong>F</strong> = Maturity Value</li>
                                <li><strong>P</strong> = Annual Instalment</li>
                                <li><strong>n</strong> = Number of years (15)</li>
                                <li><strong>i</strong> = Interest rate (7.1% / 100)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Historical PPF Rates</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-400">
                                    <tr>
                                        <th className="px-4 py-3 rounded-tl-lg">Period</th>
                                        <th className="px-4 py-3 rounded-tr-lg">Interest Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ppfInterestHistory.map((row, idx) => (
                                        <tr key={idx} className="border-b dark:border-slate-700 last:border-0">
                                            <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.year}</td>
                                            <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* PPF vs FD */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none">
                        <Scale className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">PPF vs Fixed Deposit (FD)</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-4xl">
                    Investors often compare Public Provident Fund and Bank Fixed Deposits. While FDs offer flexibility in tenure, PPF wins on tax efficiency and long-term compounding. Here is a detailed comparison:
                </p>
                <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Feature</th>
                                <th className="px-6 py-4 font-semibold">PPF</th>
                                <th className="px-6 py-4 font-semibold">Fixed Deposit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {ppfVsFd.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">{row.ppf}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{row.fd}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Withdrawals & Loans */}
            <section className="bg-amber-50 dark:bg-amber-900/10 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200 dark:shadow-none">
                        <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Withdrawals, Loans & Extension Rules</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">Loan Facility</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            You can take a loan against your PPF balance between the <strong>3rd and 6th financial year</strong> of opening the account. 
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            The maximum loan amount is 25% of the balance at the end of the second year preceding the year of application.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">Partial Withdrawals</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            Partial withdrawals are allowed from the <strong>7th financial year</strong> onwards. You can withdraw once every year.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            You can withdraw up to 50% of the balance at the end of the 4th preceding year, or 50% of the balance at the end of the immediate preceding year, whichever is lower.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">Extension Post 15 Years</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            Upon maturity after 15 years, you have three options: close the account, extend it <strong>without contributions</strong> (earning interest), or extend it <strong>with contributions</strong>.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Extensions happen in blocks of 5 years indefinitely.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PPFCalculatorContent;
