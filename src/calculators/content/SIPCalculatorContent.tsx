import { Clock, HelpCircle, BarChart, Check, Target, DollarSign, ArrowRight, TrendingUp } from 'lucide-react';

const SIPCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Market News Ticker */}
            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded-r-xl animate-fade-in relative overflow-hidden group">
                <div className="flex items-center gap-3">
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">Breaking</span>
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">
                        <strong>STT Hike Alert:</strong> Securities Transaction Tax (STT) on F&O raised to 0.1% (from 0.0625%) & 0.02% (from 0.0125%). Impact: Higher trading costs for retail investors.
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is SIP (Systematic Investment Plan)?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start mt-6">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            A Systematic Investment Plan, commonly known as SIP, is a method of investing a fixed amount regularly in mutual funds. Instead of investing a lump sum, SIP allows investors to invest monthly, making it easier to build wealth gradually.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                            <h4 className="font-bold text-blue-900 dark:text-blue-200 text-sm mb-2 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" /> Wealth Creation vs Destruction
                            </h4>
                            <p className="text-xs text-blue-800 dark:text-blue-300">
                                <strong>Wealth Creation:</strong> Consistently investing &gt; Inflation Rate (e.g., 12% returns vs 6% inflation = 6% Real Growth).
                                <br />
                                <strong>Wealth Destruction:</strong> Keeping money in Savings A/c (3%) when Inflation is 6%. You lose purchasing power every year!
                            </p>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <Check className="w-4 h-4 text-green-500" /> Long-term financial planning
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <Check className="w-4 h-4 text-green-500" /> Retirement savings
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <Check className="w-4 h-4 text-green-500" /> Child education planning
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <Check className="w-4 h-4 text-green-500" /> Wealth creation through equity mutual funds
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4 m-0">How SIP Works</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="mt-1 bg-white dark:bg-slate-800 max-h-max p-1.5 rounded-lg shadow-sm text-indigo-500"><Target className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white m-0">Compounding</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Returns earn returns over time.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1 bg-white dark:bg-slate-800 max-h-max p-1.5 rounded-lg shadow-sm text-indigo-500"><BarChart className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-bold text-sm text-slate-900 dark:text-white m-0">Rupee Cost Averaging</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Reduces impact of market volatility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Usage Guide */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <DollarSign className="w-5 h-5 text-indigo-500" />
                        Monthly Investment vs Duration
                    </h3>
                    <div className="space-y-4 mt-6">
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 m-0">Higher Monthly Investment</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Increasing your monthly SIP amount significantly boosts your final corpus over time.</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 m-0">Longer Investment Duration</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Extending the investment period often has a bigger impact than increasing the monthly amount, thanks to compounding.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <Clock className="w-5 h-5 text-blue-500" />
                        Why SIP Is Popular
                    </h3>
                    <ul className="space-y-3 mt-6">
                        <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Low minimum investment amounts
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Flexibility to start or stop anytime
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Reduced timing risk
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Suitable for salaried individuals
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Encourages long-term discipline
                        </li>
                    </ul>
                </div>
            </section>

            {/* What it shows */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What This SIP Calculator Shows</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 m-6">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                        <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1">Total Invested</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Principal amount over time</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Maturity Value</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Final estimated value</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Duration Impact</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Effect of time on growth</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center">
                        <div className="text-orange-600 dark:text-orange-400 font-bold text-lg mb-1">Return Earning</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Gains from market</div>
                    </div>
                </div>
            </section>

            {/* Comparisons */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">SIP vs Lump Sum Investment</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    A lump sum investment involves investing a large amount at once, while SIP spreads investments over time. SIP is generally preferred for investors who want to reduce market timing risk and invest consistently.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg border border-indigo-100 dark:border-indigo-900/20">
                        <h4 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2 m-0">SIP Benefit</h4>
                        <p className="text-sm text-indigo-800 dark:text-indigo-300 m-0">Reduces risk by averaging purchase cost over time. Best for regular earners.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2 m-0">Lump Sum Risk</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Investing all at once carries 'timing risk' if the market drops immediately after.</p>
                    </div>
                </div>
            </section>

            {/* 3. Wealth Building Strategies */}
            <section className="space-y-8">
                {/* 1 Crore Roadmap */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <Target className="w-6 h-6 text-red-500" />
                        The "₹1 Crore" Roadmap (2026 Edition)
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Want to become a Crorepati? Here's exactly how much you need to invest monthly at different ages (assuming 12% returns).
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-medium">
                                <tr>
                                    <th className="p-4 rounded-tl-xl">Starting Age</th>
                                    <th className="p-4">Time to 60</th>
                                    <th className="p-4 text-indigo-600 dark:text-indigo-400 font-bold">Monthly SIP Needed</th>
                                    <th className="p-4 rounded-tr-xl">Analysis</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="p-4 font-bold text-slate-900 dark:text-white">20 Years</td>
                                    <td className="p-4 text-slate-600 dark:text-slate-400">40 Yrs</td>
                                    <td className="p-4 font-mono font-bold text-green-600">₹850 /mo</td>
                                    <td className="p-4 text-xs text-slate-500">The power of starting early!</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900 dark:text-white">30 Years</td>
                                    <td className="p-4 text-slate-600 dark:text-slate-400">30 Yrs</td>
                                    <td className="p-4 font-mono font-bold text-green-600">₹2,850 /mo</td>
                                    <td className="p-4 text-xs text-slate-500">Still very affordable.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900 dark:text-white">40 Years</td>
                                    <td className="p-4 text-slate-600 dark:text-slate-400">20 Yrs</td>
                                    <td className="p-4 font-mono font-bold text-orange-500">₹10,100 /mo</td>
                                    <td className="p-4 text-xs text-slate-500">Requires discipline.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900 dark:text-white">50 Years</td>
                                    <td className="p-4 text-slate-600 dark:text-slate-400">10 Yrs</td>
                                    <td className="p-4 font-mono font-bold text-red-500">₹43,500 /mo</td>
                                    <td className="p-4 text-xs text-slate-500">High effort needed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 15-15-15 Rule & Daily SIP */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                        <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4">The 15-15-15 Rule</h3>
                        <p className="text-indigo-800 dark:text-indigo-300 mb-4 text-sm">
                            A legendary formula in Indian personal finance:
                        </p>
                        <ul className="space-y-3 font-medium text-slate-800 dark:text-slate-200">
                            <li className="flex items-center gap-3">
                                <span className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm text-indigo-600">₹15,000</span> Investment
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm text-indigo-600">15 Years</span> Duration
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm text-indigo-600">15%</span> Returns
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-indigo-200 dark:border-indigo-800">
                            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">₹ 1 Crore</p>
                            <p className="text-xs text-indigo-800 dark:text-indigo-300">Final Corpus Generated</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Micro-Investing (Daily SIP)</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                            Can't afford a large monthly SIP? Start small! Investing just a small amount daily adds up massively.
                        </p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-xl">
                                <span className="font-bold text-slate-700 dark:text-slate-300">₹100 /day</span>
                                <ArrowRight className="w-4 h-4 text-slate-400" />
                                <span className="font-bold text-green-600">₹30 Lakhs</span>
                                <span className="text-[10px] text-slate-400">in 20y @ 12%</span>
                            </div>
                            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-xl">
                                <span className="font-bold text-slate-700 dark:text-slate-300">₹500 /day</span>
                                <ArrowRight className="w-4 h-4 text-slate-400" />
                                <span className="font-bold text-green-600">₹1.5 Crores</span>
                                <span className="text-[10px] text-slate-400">in 20y @ 12%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2026 Tax Guide */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">SIP Taxation Rules (FY 2025-26)</h2>
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 mt-6">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-slate-900">
                                <tr>
                                    <th className="p-4 text-slate-900 dark:text-white">Fund Type</th>
                                    <th className="p-4 text-slate-900 dark:text-white">Short Term (STCG)</th>
                                    <th className="p-4 text-slate-900 dark:text-white">Long Term (LTCG)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Equity Mutual Funds</td>
                                    <td className="p-4">
                                        <div className="font-bold text-red-500">20%</div>
                                        <div className="text-xs text-slate-500">If sold before 1 year</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-bold text-orange-500">12.5%</div>
                                        <div className="text-xs text-slate-500">Above ₹1.25 Lakh profit</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">Debt Mutual Funds</td>
                                    <td className="p-4" colSpan={2}>
                                        <div className="font-bold text-slate-900 dark:text-white">Taxed at Slab Rate</div>
                                        <div className="text-xs text-slate-500">No indexation benefits. Added to income.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Retirement Planning */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Retirement Planning: The 4% Rule</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                        How much corpus is enough? The <strong>4% Withdrawal Rule</strong> suggests that if you withdraw 4% of your corpus annually (adjusted for inflation), your money should last for 30 years.
                    </p>
                    <div className="flex gap-4 items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-indigo-600">₹1 Lakh/mo</div>
                        <div className="text-sm text-slate-500">
                            Monthly expense required?
                            <br />
                            <span className="text-slate-400 text-xs">You need a corpus of <strong>₹3 Crores</strong>.</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4. Goal-Based Investing Guide */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 border border-indigo-100 dark:border-slate-700">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-indigo-900 dark:text-blue-100 mb-6 flex items-center gap-3">
                        <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                        Goal-Based Investing: The Secret to Financial Clarity
                    </h2>

                    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        <p>
                            Most investors ask, <span className="italic">"Where should I invest?"</span>. The smarter question is, <span className="font-bold text-indigo-700 dark:text-indigo-300">"Why am I investing?"</span>.
                        </p>
                        <p>
                            <strong>Goal-Based Investing</strong> is a strategy where you map every investment to a specific financial objective—like buying a home, a child's education, or retirement. Instead of randomly investing ₹5,000 in a "good fund," you invest efficiently to reach a target like <em>"₹50 Lakhs for Education in 15 Years"</em>.
                        </p>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-indigo-100 dark:border-slate-700 shadow-sm my-8">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Why Random Investing Fails vs. Goal-Based Wins</h3>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <div className="text-red-500 font-bold mb-2 flex items-center gap-2"><ArrowRight className="w-4 h-4 rotate-180" /> Random Investing</div>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                                        <li>You react to market noise (Panic selling).</li>
                                        <li>You don't know if you're saving enough.</li>
                                        <li>You use savings for impulsive spends.</li>
                                        <li>High risk of falling short of deadlines.</li>
                                    </ul>
                                </div>
                                <div className="border-l border-slate-200 dark:border-slate-700 md:pl-6">
                                    <div className="text-green-600 font-bold mb-2 flex items-center gap-2"><Check className="w-4 h-4" /> Goal-Based Investing</div>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                                        <li>You stay disciplined during crashes.</li>
                                        <li>You know the exact "Required SIP" amount.</li>
                                        <li>Your money is mentally "locked" for goals.</li>
                                        <li>Asset allocation matches the timeline.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mt-8 mb-4">The 3-Bucket Strategy</h3>
                        <p>
                            To implement this, divide your financial life into three distinct buckets. This determines <em>where</em> you should invest.
                        </p>

                        <div className="grid gap-4 md:grid-cols-3 mt-4">
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-t-4 border-green-500 shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="font-bold text-slate-900 dark:text-white mb-1">Short Term</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">0-3 Years</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    <strong>Goal:</strong> Car, Vacation, Emergency Fund.
                                    <br />
                                    <strong>Instrument:</strong> Debt Funds, FDs, Liquid Funds.
                                    <br />
                                    <strong>Why:</strong> Capital protection is priority.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-t-4 border-yellow-500 shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="font-bold text-slate-900 dark:text-white mb-1">Medium Term</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">3-7 Years</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    <strong>Goal:</strong> Home Downpayment, Wedding.
                                    <br />
                                    <strong>Instrument:</strong> Hybrid Funds, Balanced Advantage.
                                    <br />
                                    <strong>Why:</strong> Balance between growth and safety.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-t-4 border-indigo-500 shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="font-bold text-slate-900 dark:text-white mb-1">Long Term</div>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">7+ Years</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    <strong>Goal:</strong> Retirement, Child Education.
                                    <br />
                                    <strong>Instrument:</strong> Equity Mutual Funds (Small/Mid Cap).
                                    <br />
                                    <strong>Why:</strong> Inflation-beating high growth.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-center">
                            <p className="font-medium text-indigo-900 dark:text-indigo-200 mb-2">
                                Ready to plan? Use the <span className="font-bold text-indigo-600 dark:text-white">"I have a Goal"</span> tab above!
                            </p>
                            <p className="text-xs text-indigo-700 dark:text-indigo-400">
                                It uses a reverse-calculation algorithm to tell you exactly how much monthly SIP you need to reach your target corpus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6 m-6">
                    {[
                        { q: "Is this SIP calculator accurate?", a: "It provides realistic estimates based on standard compounding assumptions but actual returns may vary." },
                        { q: "Can SIP returns change over time?", a: "Yes. Mutual fund returns fluctuate with market conditions." },
                        { q: "Is SIP safe?", a: "SIP is a method of investing, not an investment product. Risk depends on the mutual fund chosen." },
                        { q: "Is this calculator free to use?", a: "Yes. It is completely free with no limits." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 m-0">
                                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-8 m-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* footer section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">SIP and Long-Term Financial Discipline</h2>
                <p className="text-blue-50 max-w-2xl mx-auto mb-6">
                    One of the biggest advantages of SIP investing is discipline. Investing regularly, regardless of market conditions, helps build wealth steadily and reduces emotional decision-making.
                </p>
                <div className="inline-block bg-white/20 px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Built for Smart Investment Planning
                </div>
            </section>
        </div>
    );
};

export default SIPCalculatorContent;
