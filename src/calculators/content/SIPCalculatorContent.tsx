import { Clock, HelpCircle, BarChart, Check, Target, Info, DollarSign } from 'lucide-react';

const SIPCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is SIP (Systematic Investment Plan)?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            A Systematic Investment Plan, commonly known as SIP, is a method of investing a fixed amount regularly in mutual funds. Instead of investing a lump sum, SIP allows investors to invest monthly, making it easier to build wealth gradually.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">In India, SIPs are widely used for:</p>
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
                    <div className="space-y-4">
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
                    <ul className="space-y-3">
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

            {/* Disclaimer for financial responsibility */}
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                <h4 className="text-yellow-800 dark:text-yellow-200 font-bold mb-2 flex items-center gap-2 m-0">
                    <Info className="w-4 h-4" /> Important Note on Returns
                </h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 m-0">
                    SIP returns are market-linked and not fixed. Actual returns depend on fund performance. Past performance does not guarantee future returns. Inflation should be considered in long-term planning.
                </p>
            </div>


            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
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
