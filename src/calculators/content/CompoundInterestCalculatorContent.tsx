import { TrendingUp, PieChart, Target, AlertTriangle, HelpCircle, CheckCircle } from 'lucide-react';

const CompoundInterestCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Compound Interest Calculator to See How Money Grows Over Time</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Compound Interest Calculator helps you understand how investments grow when interest is earned not only on the original amount, but also on previously earned interest. It supports lump sum investments, regular contributions, and different compounding frequencies.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Compound interest is one of the most important concepts in personal finance. This calculator turns that concept into real, measurable outcomes.
                        </p>
                        <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2 m-0">
                                <TrendingUp className="w-5 h-5" />
                                What Is Compound Interest?
                            </h3>
                            <p className="text-sm text-indigo-800 dark:text-indigo-300">
                                Compound interest is the process where interest is added to the principal, and future interest is calculated on the new total. Over time, this creates a snowball effect where growth accelerates.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Target className="w-5 h-5 text-indigo-500" />
                            Key Elements
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Initial principal amount
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Interest rate
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Time period
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Compounding frequency
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Regular contributions
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why It Is Powerful */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Why Compound Interest Is So Powerful</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Compound interest works slowly at first, then grows faster as time passes. This makes it especially powerful for long-term goals such as investing, retirement planning, and wealth building.
                        </p>
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                            The most important factor is time. Starting earlier often matters more than starting with a large amount.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Lump Sum vs Regular Contributions</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                            A lump sum investment benefits fully from long-term compounding. Regular contributions add consistency and increase total invested capital.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">Consistency</span>
                            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">Patience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <PieChart className="w-5 h-5 text-indigo-500" />
                        Long-Term Planning
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Compound interest plays a central role in:
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Investment planning
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Retirement savings
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Education funds
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Inflation protection
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Common Misunderstandings
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Early growth looks small
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Short time frames hide its impact
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Interest seems insignificant initially
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900/20">
                        <h4 className="font-bold text-xs text-orange-900 dark:text-orange-200 uppercase mb-1 m-0">Simple vs Compound</h4>
                        <p className="text-xs text-orange-800 dark:text-orange-300">
                            Simple interest is on principal only. Compound interest includes accumulated interest. The difference is dramatic.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is compound interest guaranteed?", a: "No. It depends on consistent returns, which are not guaranteed." },
                        { q: "Can I change inputs to compare?", a: "Yes. Adjusting inputs helps explore different possibilities." },
                        { q: "Does this include taxes or fees?", a: "No. It shows gross growth before taxes or fees." },
                        { q: "Is this calculator free?", a: "Yes. It is completely free to use." }
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
            <section className="bg-emerald-700 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Clarity, Not Complexity</h2>
                <p className="text-emerald-50 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Compound Interest Calculator is designed to explain growth clearly. It helps users understand how money behaves over time without requiring financial expertise.
                </p>
            </section>
        </div>
    );
};

export default CompoundInterestCalculatorContent;
