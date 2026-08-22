import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Lock, Percent } from 'lucide-react';

export const SafeInvestingTrio2026 = () => {
    return (
        <>
            <p>
                When markets get volatile, smart investors secure their core capital in risk-free instruments. In India, the "Safe Trio" consists of the Public Provident Fund (PPF), Fixed Deposits (FD), and Recurring Deposits (RD). But with the updated 2026 tax rules, which one actually gives you the best inflation-beating returns?
            </p>

            <h2 id="the-safe-trio">The Safe Trio: PPF, FD, and RD</h2>
            <p>
                Before diving into the numbers, it's crucial to understand what these instruments are designed for. They all offer guaranteed returns, but they serve entirely different financial goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <ShieldCheck className="w-8 h-8 text-emerald-500 mb-3" />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">PPF</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        The ultimate long-term wealth builder. Sovereign guarantee with completely tax-free compounding over 15 years.
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <Lock className="w-8 h-8 text-blue-500 mb-3" />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Fixed Deposit</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Lumpsum parking. Ideal for preserving large amounts of capital for a fixed, shorter duration (1 to 5 years).
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <TrendingUp className="w-8 h-8 text-amber-500 mb-3" />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Recurring Deposit</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Habitual saving. Best for accumulating a target amount over 1-3 years through disciplined monthly contributions.
                    </p>
                </div>
            </div>

            <h2 id="tax-implications">Tax Implications under New 2026 Regime</h2>
            <p>
                This is where the battle is won or lost. The new tax regime for 2026 has made standard fixed deposits significantly less attractive for individuals in the 30% tax bracket.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30 my-10 not-prose">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 m-0 text-blue-900 dark:text-blue-200">
                    The 30% Tax Bracket Drain
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <p>Let's say you invest in an FD offering <strong>7.5% per annum</strong>.</p>
                    <div className="p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-blue-100 dark:border-blue-900/30 space-y-2">
                        <ul className="text-sm list-none p-0 m-0 space-y-2 font-mono">
                            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                                <span>Gross FD Rate:</span> <strong>7.50%</strong>
                            </li>
                            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2 text-rose-600 dark:text-rose-400">
                                <span>Tax Deduction (30% + cess):</span> <strong>-2.34%</strong>
                            </li>
                            <li className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                                <span>Net Effective Return:</span> <strong>5.16%</strong>
                            </li>
                        </ul>
                    </div>
                    <p className="font-medium text-sm text-slate-900 dark:text-white">
                        With inflation hovering around 5-6%, an effective return of 5.16% means your FD is actually <em>losing</em> purchasing power over time. PPF, on the other hand, maintains its 7.1% EEE (Exempt-Exempt-Exempt) status.
                    </p>
                </div>
            </div>

            <h2 id="lock-in-and-liquidity">Lock-in Periods & Liquidity</h2>
            <p>
                You cannot compare these instruments purely on interest rates; liquidity is just as important.
            </p>
            <ul>
                <li><strong>PPF:</strong> 15-year lock-in. Partial withdrawals are allowed only after the 7th year. You cannot liquidate this easily.</li>
                <li><strong>Tax-Saving FD:</strong> 5-year lock-in. Cannot be broken under any circumstances before maturity.</li>
                <li><strong>Normal FD / RD:</strong> Highly liquid. Can be broken prematurely with a minor penalty (usually 0.5% to 1% reduction in applicable interest).</li>
            </ul>

            <div className="bg-emerald-600/5 dark:bg-emerald-900/10 border-2 border-emerald-600/20 dark:border-emerald-500/20 p-8 rounded-3xl my-10 text-center shadow-lg hover:shadow-xl transition-shadow not-prose">
                <h4 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">Visualize the Magic of PPF</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base max-w-lg mx-auto">
                    A mere ₹12,500 monthly investment in PPF creates a ₹40 Lakh tax-free corpus in 15 years. See the exact year-by-year compounding for yourself.
                </p>
                <Link to="/calculator/india-ppf/" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 !text-white font-bold rounded-xl hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-md">
                    Open PPF Calculator
                </Link>
            </div>

            <h2 id="which-one-to-choose">Verdict: Which one to choose?</h2>
            <p>
                The choice between PPF, FD, and RD isn't an "either-or" decision; it's about matching the instrument to your timeline:
            </p>

            <ol>
                <li>
                    <strong>For Long-Term Wealth (15+ years):</strong> PPF is the undisputed king. Maximize your ₹1.5 Lakh limit every year before looking elsewhere. 
                    <br/><Link to="/calculator/india-ppf/" className="text-sm font-bold">Calculate PPF Maturity &rarr;</Link>
                </li>
                <li>
                    <strong>For Short-Term Goals (1-3 years):</strong> If you need to buy a car or pay tuition fees next year, a Recurring Deposit (RD) helps you accumulate the funds safely without market risk.
                    <br/><Link to="/calculator/india-rd/" className="text-sm font-bold">Calculate RD Returns &rarr;</Link>
                </li>
                <li>
                    <strong>For Emergency Funds:</strong> A standard, highly-liquid Fixed Deposit (FD) is perfect. Keep 6 months of expenses here and ignore the tax hit—this money is for safety, not growth.
                    <br/><Link to="/calculator/india-fd/" className="text-sm font-bold">Calculate FD Interest &rarr;</Link>
                </li>
            </ol>
        </>
    );
};
