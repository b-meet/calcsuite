import { TrendingUp, Clock, DollarSign, PieChart, Target, AlertTriangle, HelpCircle, CheckCircle, BarChart } from 'lucide-react';

const InvestmentCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Investment Calculator to Visualize Long-Term Wealth Growth</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Investment Calculator helps you estimate how your money can grow over time using compound interest. By combining an initial investment, regular monthly contributions, expected annual return, and investment duration, you can clearly see the potential future value of your investments.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">It is designed for long-term investors who want realistic projections rather than short-term speculation.</p>
                        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                            <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2 m-0">
                                <TrendingUp className="w-5 h-5" />
                                How Compound Interest Works
                            </h3>
                            <p className="text-sm text-green-800 dark:text-green-300">
                                Compound interest means earning returns not only on your original investment, but also on the returns that accumulate over time. This creates exponential growth when investments are held for longer periods.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Target className="w-5 h-5 text-indigo-500" />
                            What This Calculator Shows
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Growth of your initial investment
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Impact of regular monthly contributions
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Effect of annual return rate
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Long-term value of staying invested
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Estimated total investment vs returns
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How Investment Growth Is Calculated</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    The calculator uses a compound growth model based on three key factors:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1">Fixed Return</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Average annual rate</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Consistency</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Regular contributions</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Duration</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Long-term holding</div>
                    </div>
                </div>
                <p className="text-center text-xs text-slate-500 mt-6 italic">Because markets fluctuate, results are estimates, not guarantees. Actual returns depend on market performance and investment choices.</p>
            </section>

            {/* Strategy Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-indigo-500" />
                        Why Long-Term Investing Matters
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Many people underestimate how powerful long-term investing can be. Benefits include:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Reduced impact of market volatility
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Stronger compounding effect
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Lower emotional decision-making
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Better alignment with financial goals
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Common Mistakes
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Focusing only on short-term returns
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Ignoring the power of compounding
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Delaying investments unnecessarily
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Expecting guaranteed outcomes
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Are investment returns guaranteed?", a: "No. Investment returns are market-linked and can vary over time." },
                        { q: "Is this calculator accurate?", a: "It provides reliable estimates based on standard compound growth models." },
                        { q: "Can I use this for retirement planning?", a: "Yes. It is well-suited for long-term financial planning." },
                        { q: "Is this tool free?", a: "Yes. It is completely free with no usage limits." }
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

            {/* Footer */}
            <section className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Smart, Long-Term Financial Thinking</h2>
                <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Investment Calculator is designed to simplify financial planning. It helps users visualize growth, set realistic expectations, and stay motivated to invest consistently over time.
                </p>
            </section>
        </div>
    );
};

export default InvestmentCalculatorContent;
