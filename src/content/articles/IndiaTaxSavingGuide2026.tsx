import { Link } from 'react-router-dom';
import { Zap, Lightbulb, FileCheck } from 'lucide-react';

export const IndiaTaxSavingGuide2026 = () => {
    return (
        <>
            <p>
                Are you paying "lazy tax" by simply sticking to the default? With the transition to the <strong>Income-tax Act, 2025</strong>, the rules of the game have fundamentally changed. Here is how to navigate the 2026 slabs and save ₹35,000+ by making one strategic choice.
            </p>

            <h2 id="regime-battle">The "Regime Battle": Old vs. New (2026 Edition)</h2>
            <p>
                Every Indian middle-class family is currently facing a critical decision: Which tax regime actually keeps more money in your bank account? In 2026, the answer depends entirely on your "deduction profile."
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800 my-8">
                <h3 className="text-emerald-900 dark:text-emerald-200 font-bold flex items-center gap-2 m-0 mt-0">
                    <Zap className="w-5 h-5" /> The "Zero-Tax" Milestone
                </h3>
                <p className="mt-3 mb-0">
                    In 2026, the New Tax Regime is the **"default" king**. Thanks to the enhanced Section 87A rebate, anyone earning up to **₹12 Lakh** net taxable income pays zero tax. 
                </p>
                <p className="mt-2 mb-0">
                    When you add the **₹75,000 Standard Deduction**, your effective "zero-tax" ceiling hits **₹12.75 Lakh**.
                </p>
            </div>

            <div className="my-10 not-prose overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Taxable Income (New Regime)</th>
                            <th className="px-6 py-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Tax Rate</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                        <tr><td className="px-6 py-4">₹0 - ₹4,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Nil</td></tr>
                        <tr><td className="px-6 py-4">₹4,00,001 - ₹8,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">5%</td></tr>
                        <tr><td className="px-6 py-4">₹8,00,001 - ₹12,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">10%</td></tr>
                        <tr><td className="px-6 py-4">₹12,00,001 - ₹16,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">15%</td></tr>
                        <tr><td className="px-6 py-4">₹16,00,001 - ₹20,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">20%</td></tr>
                        <tr><td className="px-6 py-4">₹20,00,001 - ₹24,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">25%</td></tr>
                        <tr><td className="px-6 py-4">Above ₹24,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">30%</td></tr>
                    </tbody>
                </table>
                <p className="mt-4 text-xs text-slate-500 italic px-2">*Effective zero tax up to ₹12.75L CTC after Standard Deduction and 87A Rebate</p>
            </div>

            <h2 id="homeowner-trap">The "Homeowner's Trap": A Costly Oversight</h2>
            <p>
                While the New Regime is simple, it can be a "trap" for homeowners. The New Regime does not allow you to deduct home loan interest. If you are paying off a mortgage, ignoring the Old Regime could be the most expensive mistake you make this year.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30 my-10 not-prose">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 m-0 text-blue-900 dark:text-blue-200">
                    Ravi's High-Stakes Choice
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p>Ravi earns <strong>₹15 LPA</strong>. Under the New Regime, his tax liability is approximately <strong>₹1.2 Lakh</strong>.</p>
                    <div className="p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-blue-100 dark:border-blue-900/30 space-y-2">
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">By switching to the Old Regime, he claims:</p>
                        <ul className="text-sm list-none p-0 m-0 space-y-1">
                            <li>• Section 24(b): <strong>₹2 Lakh</strong> (Interest)</li>
                            <li>• Section 80C: <strong>₹1.5 Lakh</strong> (Principal + PF)</li>
                            <li>• Standard Deduction: <strong>₹50,000</strong></li>
                        </ul>
                    </div>
                    <p className="font-bold text-lg text-slate-900 dark:text-white">
                        The Result: His tax bill plummets to ₹85,000. Ravi saves ₹35,000 just by opting out of the default.
                    </p>
                </div>
            </div>

            <h2 id="equity-harvesting">Advanced Strategy: Equity Tax Harvesting</h2>
            <p>
                Smart investors don't just wait for their portfolios to grow; they manage their tax liabilities dynamically. With the 2026 update to Long-Term Capital Gains (LTCG) rules, "Tax Harvesting" is essential.
            </p>

            <div className="bg-blue-600/5 dark:bg-blue-900/10 border-2 border-blue-600/20 dark:border-blue-500/20 p-8 rounded-3xl my-10 text-center shadow-lg hover:shadow-xl transition-shadow not-prose">
                <h4 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">Stop Guessing Your Tax Liability</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base max-w-lg mx-auto">Don't leave money on the table. Use our advanced 2026 Tax Calculator to precisely compare the Old vs. New regime and find your maximum savings instantly.</p>
                <Link to="/calculator/india-tax/" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 !text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md">
                    Open Tax Calculator
                </Link>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 my-8">
                <h3 className="text-amber-900 dark:text-amber-200 font-bold flex items-center gap-2 m-0 mt-0">
                    <Lightbulb className="w-5 h-5" /> The ₹1.25 Lakh Exemption
                </h3>
                <p className="mt-3">
                    As of the latest 2026 code, LTCG on equity is tax-free up to **₹1.25 Lakh** per financial year. By selling and reinvesting, you reset your buy price higher without paying tax.
                </p>
                <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-amber-100 dark:border-amber-800 font-mono text-sm leading-relaxed">
                    <p className="font-bold mb-2">The Math In Action:</p>
                    <p className="m-0 text-slate-500">Original Investment: <span className="text-slate-900 dark:text-slate-200">₹5,00,000</span></p>
                    <p className="m-0 text-slate-500">Current Value: <span className="text-slate-900 dark:text-slate-200">₹6,25,000</span> (Gain: ₹1,25,000)</p>
                    <p className="m-0 text-slate-500">Action: <span className="text-slate-900 dark:text-slate-200 font-medium">Sell all units and buy them back the same day.</span></p>
                    <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-3 p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg inline-block border border-emerald-100 dark:border-emerald-800/50">Result: You just saved ₹15,625 in future taxes.</p>
                </div>
            </div>

            <h2 id="section-80d">The "Hidden" Section 80D Multiplier</h2>
            <p>
                Don't just pay your health insurance premium; optimize it. For a family of three (or more), Section 80D is a goldmine.
            </p>
            <ul>
                <li><strong>The Parents' Bonus:</strong> If you pay for senior citizen parents (60+), get an additional deduction of up to **₹50,000**.</li>
                <li><strong>The Cash Hack:</strong> You can claim **₹5,000** for "Preventive Health Check-ups," even if paid in cash.</li>
            </ul>

            <div className="bg-slate-900 text-white p-8 rounded-3xl my-12 not-prose shadow-xl border border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white m-0">
                    <FileCheck className="w-6 h-6 text-blue-400" /> Final Checklist for March 2026
                </h3>
                <div className="space-y-4">
                    {[
                        { text: "Regime Check: Run your numbers on the Income Tax Calculator", link: "/calculator/india-tax" },
                        { text: "NPS Boost: Deposit ₹50,000 in NPS Tier-1 for exclusive Sec 80CCD deduction", link: "/calculator/india-tax" },
                        { text: "Advance Tax: Ensure 100% is paid by March 15 to avoid penalties", link: "/calculator/india-tax" },
                        { text: "LTCG Reset: Sell and re-buy equity to lock in ₹1.25L tax-free gains", link: "" },
                        { text: "GST Check: Verify Input Tax Credit (ITC) on the GST Calculator", link: "/calculator/india-gst" }
                    ].map((item, i) => (
                        <label key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl cursor-pointer transition-colors border border-slate-700/50 group">
                            <input type="checkbox" className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900 shadow-sm" />
                            <span className="text-sm md:text-base text-slate-200 group-hover:text-white transition-colors">
                                {item.link ? (
                                    <Link to={item.link} className="text-blue-300 hover:text-blue-200 underline decoration-blue-500/30 underline-offset-4 font-medium">
                                        {item.text}
                                    </Link>
                                ) : item.text}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="text-center py-12 not-prose border-t border-slate-100 dark:border-slate-800 mt-12">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Ready to see your savings?</h3>
                <Link 
                    to="/calculator/india-tax/"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 !text-white font-extrabold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/25 active:scale-95"
                >
                    Calculate Your 2026 Tax Now
                </Link>
            </div>
        </>
    );
};
