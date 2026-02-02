import { Sunset, Leaf, Heart, Shield, Clock, TrendingUp, HelpCircle, CheckCircle, Target } from 'lucide-react';

const RetirementCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Retirement Calculator to Plan Financial Freedom With Confidence</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Retirement Calculator helps you understand how much you may need to save to retire comfortably. By factoring in your current age, retirement age, existing savings, annual contributions, and expected returns, it gives a clear picture of your long-term retirement readiness.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Retirement planning is not just about stopping work. It is about gaining control over your time, choices, and financial future.</p>
                    </div>
                    <div className="flex-1 bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/30">
                        <h3 className="font-semibold text-green-900 dark:text-green-200 mb-4 flex items-center gap-2 m-0">
                            <Leaf className="w-5 h-5" />
                            What Planning Means
                        </h3>
                        <p className="text-sm text-green-800 dark:text-green-300 mb-4">
                            Retirement is often misunderstood as an end point. In reality, it is a transition to financial independence. It focuses on:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-green-800 dark:text-green-300 text-sm">
                                <Shield className="w-4 h-4 text-green-600" /> Long-term financial security
                            </li>
                            <li className="flex items-center gap-2 text-green-800 dark:text-green-300 text-sm">
                                <Shield className="w-4 h-4 text-green-600" /> Predictable income after work
                            </li>
                            <li className="flex items-center gap-2 text-green-800 dark:text-green-300 text-sm">
                                <Shield className="w-4 h-4 text-green-600" /> Protection against inflation
                            </li>
                            <li className="flex items-center gap-2 text-green-800 dark:text-green-300 text-sm">
                                <Heart className="w-4 h-4 text-green-600" /> Peace of mind
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Connection Between Personal Finance */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 m-0">The Connection Between Personal Finance and Financial Freedom</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Financial freedom does not happen overnight. It is the result of consistent saving, disciplined investing, and long-term thinking. Personal finance habits play a much bigger role than chasing high returns.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 text-center">Saving regularly</div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 text-center">Avoiding inflation</div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 text-center">Investing patiently</div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 text-center">Planning early</div>
                        </div>
                    </div>
                    <div className="flex-1 border-l border-slate-200 dark:border-slate-700 pl-8">
                        <p className="italic text-slate-500 text-lg">"Time and consistency matter more than perfection."</p>
                    </div>
                </div>
            </section>

            {/* How It Helps & Early Start */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <Target className="w-5 h-5 text-indigo-500" />
                        How This Calculator Helps
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-indigo-500" /> Shows years until retirement
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-indigo-500" /> Projects savings growth
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-indigo-500" /> Demonstrates impact of contributions
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-indigo-500" /> Highlights compound growth
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-indigo-500" /> Reduces anxiety with clarity
                        </li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <Clock className="w-5 h-5 text-orange-500" />
                        Why Starting Early Matters
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        One of the most powerful factors in retirement planning is time. Starting earlier allows compounding to do most of the work.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border border-orange-100 dark:border-orange-900/20">
                        <p className="text-xs text-orange-800 dark:text-orange-300 font-semibold">
                            Someone who saves modestly but starts early often ends up with more than someone who saves aggressively but starts late.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lifestyle & Assumptions */}
            <section className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 m-0">Lifestyle & Realistic Assumptions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">More Than Just Numbers</h4>
                        <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-2">Retirement is about sustaining a comfortable lifestyle. Consider expenses, healthcare, and longevity.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">The Role of Assumptions</h4>
                        <p className="text-sm text-indigo-700 dark:text-indigo-400">Expected returns are estimates, not guarantees. Using conservative assumptions leads to better planning and fewer surprises.</p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        { q: "Is this retirement calculator accurate?", a: "It provides estimates based on standard growth assumptions. Actual outcomes depend on savings behavior and market performance." },
                        { q: "Does this replace financial advice?", a: "No. It is a planning and awareness tool, not personalized financial advice." },
                        { q: "Can I adjust assumptions later?", a: "Yes. You can experiment with different inputs to explore scenarios." },
                        { q: "Is this calculator free?", a: "Yes. It is completely free with no limitations." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 m-0">
                                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-8 text-sm m-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Retirement and Peace of Mind</h2>
                <p className="text-green-50 max-w-2xl mx-auto mb-6">
                    Financial freedom is not about extreme frugality or unrealistic goals. It is about knowing you are prepared, adaptable, and in control. This calculator helps shift retirement planning from fear to confidence.
                </p>
                <div className="text-sm font-medium opacity-80">
                    Built to Support Long-Term Financial Thinking
                </div>
            </section>

        </div>
    );
};

export default RetirementCalculatorContent;
