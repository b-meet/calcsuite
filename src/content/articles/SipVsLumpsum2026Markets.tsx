import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SipVsLumpsum2026Markets = () => {
    return (
        <>
            <h2 id="step-up-secret">The "Step-Up" Secret: Doubling Your Wealth</h2>
            <p>
                Most investors focus on picking the right fund, but they miss the most powerful lever of wealth creation: the **10% Annual Step-Up**.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 my-10 not-prose">
                <h3 className="text-emerald-900 dark:text-emerald-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                    Math in Action: The Power of 10%
                </h3>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-emerald-100 dark:border-emerald-800 font-mono text-sm leading-relaxed">
                    <p className="m-0">Option A: Flat ₹10k SIP (20 Years) → **₹1.02 Crores**</p>
                    <p className="m-0">Option B: 10% Step-Up SIP (20 Years) → **₹2.18 Crores**</p>
                    <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-2">Verdict: Same starting amount, 113% more wealth.</p>
                </div>
            </div>

            <h2 id="four-percent-rule">The 4% Rule: Calculating Your "Freedom Number"</h2>
            <p>
                Early retirement or Financial Independence (FIRE) isn't a pipe dream—it's a math equation. The 4% rule suggests you can safely withdraw 4% of your portfolio annually without running out of money.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 my-10 not-prose">
                <h3 className="text-indigo-900 dark:text-indigo-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                    Your FIRE Equation
                </h3>
                <div className="space-y-4">
                    <p className="m-0 text-slate-700 dark:text-slate-300">
                        To find your target corpus, multiply your annual expenses by **25**.
                    </p>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-indigo-100 dark:border-indigo-800 font-mono text-sm">
                        <p className="m-0">Monthly Expense: ₹50,000</p>
                        <p className="m-0">Annual Expense: ₹6,00,000</p>
                        <p className="m-0 text-blue-600 dark:text-blue-400 font-bold mt-2">Freedom Number: ₹1.5 Crores</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-600/5 dark:bg-blue-900/10 border-2 border-blue-600/20 dark:border-blue-500/20 p-8 rounded-3xl my-10 text-center shadow-lg hover:shadow-xl transition-shadow not-prose">
                <h4 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">How Long Until You Reach ₹1 Crore?</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base max-w-lg mx-auto">Visualize your compounding curve. Use our SIP Calculator to test the "Step-Up" secret and see exactly when you'll hit your target corpus.</p>
                <Link to="/calculator/sip" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 !text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md">
                    Open SIP Calculator
                </Link>
            </div>

            <h2 id="lumpsum-timing">The "Lumpsum Timing" Myth</h2>
            <p>
                Waiting for a "market dip" often leads to missing out on the best days of growth. In a volatile 2026 market, a SIP is mathematically safer than a Lumpsum because you buy more units when prices are low—this is the magic of **Rupee Cost Averaging**.
            </p>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800 my-8">
                <h3 className="text-rose-900 dark:text-rose-200 font-bold flex items-center gap-2 m-0">
                    <TrendingUp className="w-5 h-5" /> Retirement Reality Check
                </h3>
                <p className="mt-3 mb-0">
                    Remember: **₹1 Crore is the new ₹25 Lakh**. Due to 6% long-term inflation, ₹1 Crore in 2046 will only have the purchasing power of ₹27 Lakh today. You must aim for a "Lifestyle-Adjusted" goal.
                </p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800 my-8">
                <p className="font-semibold text-indigo-700 dark:text-indigo-300 m-0">
                    💡 Strategy Tip: SIP is for wealth building; Lumpsum is for tactical opportunities when you have windfall gains and the market is undervalued.
                </p>
            </div>
        </>
    );
};
