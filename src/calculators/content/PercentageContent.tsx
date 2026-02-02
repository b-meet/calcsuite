import { Check, ShieldCheck, Zap, HelpCircle, MousePointer2 } from 'lucide-react';

const PercentageContent = () => {
    return (
        <div className="space-y-12">

            {/* What is a Percentage */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is a Percentage?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    A percentage represents a number as a fraction of 100. The word percentage comes from the Latin phrase <em>per centum</em>, meaning "by the hundred".
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 ml-4 list-disc">
                    <li><strong>25%</strong> means 25 out of 100</li>
                    <li><strong>50%</strong> means half of a whole</li>
                    <li><strong>100%</strong> means the entire amount</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                    Percentages make it easier to compare values across different scales and situations.
                </p>
            </section>

            {/* How to Use */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How to Use This Percentage Calculator</h2>
                <div className="space-y-6">
                    <p className="text-slate-600 dark:text-slate-400">This calculator helps you answer one of the most common percentage questions: <strong>What is X% of Y?</strong></p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Enter Percentage</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Type the percentage value you want to calculate.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Enter Total</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Input the total number (the base value).</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Calculate</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Click the button to get the result instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formula Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Percentage Formula Explained</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            The basic formula used in this calculator is:
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/50 text-center mb-6">
                            <p className="text-xl font-mono text-blue-700 dark:text-blue-300">
                                Percentage Value = (X ÷ 100) × Y
                            </p>
                        </div>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li><strong className="text-slate-900 dark:text-white">X</strong> is the percentage</li>
                            <li><strong className="text-slate-900 dark:text-white">Y</strong> is the total value</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Example Calculation</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">What is <strong>20%</strong> of <strong>500</strong>?</p>
                        <p className="font-mono text-slate-500 dark:text-slate-500">(20 ÷ 100) × 500 = 100</p>
                        <p className="mt-4 font-medium text-green-600 dark:text-green-400">So, 20% of 500 is 100.</p>
                    </div>
                </div>
            </section>

            {/* Real Life Examples */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Real-Life Percentage Examples</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Shopping Discounts</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            If a product costs ₹1,000 and is on a 15% discount, you save ₹150.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Exam Scores</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            If you score 72 out of 90, your percentage score is 80%.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Business & Finance</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Companies use percentages to calculate profit margins, growth rates, and tax amounts.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Health & Fitness</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Body fat percentage, calorie intake ratios, and daily nutrition targets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Use Online */}
            <section className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold m-0 mb-6">Why Use an Online Percentage Calculator?</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-blue-200" />
                                <span>Avoid calculation errors</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-blue-200" />
                                <span>Save time</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-blue-200" />
                                <span>Get instant, accurate results</span>
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MousePointer2 className="w-5 h-5 text-blue-200" />
                                <span>Works on mobile, tablet, or desktop</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-blue-200" />
                                <span>No login required</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Zap className="w-5 h-5 text-blue-200" />
                                <span>Completely free to use</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Common Percentage Mistakes to Avoid</h2>
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        <li>• Forgetting to divide by 100 (e.g. using 20 instead of 0.20)</li>
                        <li>• Mixing up percentage increase and decrease formulas</li>
                        <li>• Applying the percentage to the wrong base value</li>
                    </ul>
                </div>
            </section>

            {/* Who Can Use */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Who Can Use This Tool?</h2>
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                        {["Students & Teachers", "Business Owners", "Accountants", "Shoppers", "Investors"].map((tag, idx) => (
                            <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                        Whether you are solving homework problems or calculating savings, this calculator is designed for simplicity and accuracy.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "What is the easiest way to calculate percentages?", a: "Using an online percentage calculator is the fastest and most reliable method." },
                        { q: "Can this calculator handle decimals?", a: "Yes. You can enter decimal percentages and decimal values." },
                        { q: "Is this calculator free to use?", a: "Yes. It is completely free with no usage limits." },
                        { q: "Does this calculator work on mobile?", a: "Yes. It is fully responsive and works on all devices." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 m-0">
                                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-8 mb-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why CalcSuite */}
            <section className="bg-slate-900 dark:bg-slate-950 text-white p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Why Choose CalcSuite for Online Calculations?</h2>
                <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    CalcSuite is built to be fast, accurate, and easy to use. Every calculator is designed with clarity and real-world use cases in mind. Instead of jumping between multiple websites, CalcSuite brings all essential calculators into one reliable platform.
                </p>
            </section>
        </div>
    );
};

export default PercentageContent;
