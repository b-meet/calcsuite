import { TrendingUp, AlertTriangle, HelpCircle, CheckCircle, ArrowRight, ShoppingCart, Target } from 'lucide-react';

const InflationCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Inflation Calculator to Understand Future Value and Purchasing Power</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Inflation Calculator helps you understand how inflation affects the value of money over time. It shows how much money you will need in the future to maintain the same purchasing power you have today.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Inflation silently reduces the value of cash every year. This calculator makes that invisible cost visible.
                        </p>
                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                            <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2 m-0">
                                <TrendingUp className="w-5 h-5" />
                                What Is Inflation?
                            </h3>
                            <p className="text-sm text-red-800 dark:text-red-300">
                                Inflation is the gradual increase in prices of goods and services over time. As prices rise, the purchasing power of money decreases.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Target className="w-5 h-5 text-indigo-500" />
                            Why It Matters
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Everyday living costs rise
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Savings lose real value
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Salaries must keep up
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Retirement goals get expensive
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Purchasing Power Examples */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Inflation and Purchasing Power Explained Simply</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    If inflation is 3 percent per year:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-slate-900 dark:text-white font-bold text-lg mb-1">Today</div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">Base Cost</div>
                    </div>
                    <div className="flex items-center justify-center text-slate-400">
                        <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-slate-900 dark:text-white font-bold text-lg mb-1">In 20 Years</div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">181</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">Future Cost</div>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-indigo-500" />
                        Real-Life Impact
                    </h3>
                    <ul className="space-y-4">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg">
                            <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-200 m-0">Daily Expenses</h4>
                            <p className="text-xs text-indigo-800 dark:text-indigo-300 m-0">Groceries, fuel, rent, and healthcare costs rise steadily.</p>
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg">
                            <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-200 m-0">Savings Accounts</h4>
                            <p className="text-xs text-indigo-800 dark:text-indigo-300 m-0">Money in low-interest accounts loses value after inflation.</p>
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg">
                            <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-200 m-0">Retirement</h4>
                            <p className="text-xs text-indigo-800 dark:text-indigo-300 m-0">Ignoring inflation is a major planning mistake.</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Common Mistakes
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Assuming prices will stay the same
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Saving without accounting for inflation
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Underestimating long-term cost increases
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Planning retirement using today’s expenses
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900/20">
                        <p className="text-xs text-orange-800 dark:text-orange-300 italic">
                            "Inflation is not the enemy. Ignoring it is. To grow wealth, investment returns must exceed inflation."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is the inflation rate fixed?", a: "No. Inflation varies year to year. This calculator uses an average rate for estimation." },
                        { q: "Are the results guaranteed?", a: "No. Results are estimates based on assumptions, not predictions." },
                        { q: "Is inflation always bad?", a: "Moderate inflation is normal. The risk lies in not planning for it." },
                        { q: "Is this calculator free?", a: "Yes. It is completely free with no limits." }
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
            <section className="bg-slate-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Built to Make the Future Understandable</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Inflation Calculator is designed to help people think clearly about the future. It empowers users with knowledge, not fear, and supports better financial decisions over time.
                </p>
            </section>
        </div>
    );
};

export default InflationCalculatorContent;
