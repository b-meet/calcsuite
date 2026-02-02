import { Share2, BookOpen, Briefcase, TrendingUp, FlaskConical, Monitor, Smartphone, Check, Zap, HelpCircle } from 'lucide-react';

const ScientificCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Content - Narrower width as requested */}
            <section className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Makes a Scientific Calculator Different?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    A scientific calculator is designed to handle advanced mathematical functions that are not available in basic calculators. It supports operations commonly used in algebra, trigonometry, calculus foundations, physics, engineering, and statistics.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    This tool removes the need for physical calculators or software downloads by providing advanced math capabilities directly in your browser.
                </p>
            </section>

            {/* Functions Available */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0 mb-6">Functions Available in This Scientific Calculator</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="m-0 font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">sin</span>
                            Trigonometric Functions
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400 ml-10 list-disc">
                            <li>Sine (sin)</li>
                            <li>Cosine (cos)</li>
                            <li>Tangent (tan)</li>
                            <li>Inverse trigonometric functions</li>
                        </ul>
                        <p className="text-sm text-slate-500 ml-10 mt-2">Used extensively in geometry, physics, and engineering calculations.</p>
                    </div>

                    <div>
                        <h3 className="m-0 font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">log</span>
                            Logarithmic Functions
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400 ml-10 list-disc">
                            <li>Logarithm (log)</li>
                            <li>Natural logarithm (ln)</li>
                        </ul>
                        <p className="text-sm text-slate-500 ml-10 mt-2">Essential for exponential growth, scientific modeling, and financial math.</p>
                    </div>

                    <div>
                        <h3 className="m-0 font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-sm font-bold">x²</span>
                            Powers and Roots
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400 ml-10 list-disc">
                            <li>Exponents</li>
                            <li>Square roots</li>
                            <li>Power expressions</li>
                        </ul>
                        <p className="text-sm text-slate-500 ml-10 mt-2">Useful for algebraic equations and scientific formulas.</p>
                    </div>

                    <div>
                        <h3 className="m-0 font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm font-bold">π</span>
                            Constants & Special Operations
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400 ml-10 list-disc">
                            <li>Pi (π)</li>
                            <li>Euler’s number (e)</li>
                            <li>Absolute values</li>
                            <li>Parentheses for order of operations</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How to Use the Scientific Calculator Effectively</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 text-6xl font-bold text-slate-100 dark:text-slate-800 z-0">1</div>
                        <p className="text-slate-700 dark:text-slate-300 relative z-10 font-medium">Enter numbers using the numeric keypad</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 text-6xl font-bold text-slate-100 dark:text-slate-800 z-0">2</div>
                        <p className="text-slate-700 dark:text-slate-300 relative z-10 font-medium">Select the required function or operator</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 text-6xl font-bold text-slate-100 dark:text-slate-800 z-0">3</div>
                        <p className="text-slate-700 dark:text-slate-300 relative z-10 font-medium">Use parentheses to structure complex expressions</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 text-6xl font-bold text-slate-100 dark:text-slate-800 z-0">4</div>
                        <p className="text-slate-700 dark:text-slate-300 relative z-10 font-medium">Press equals to calculate the result</p>
                    </div>
                </div>
                <p className="text-center text-slate-500 mt-4 text-sm">The calculator follows correct mathematical order of operations automatically.</p>
            </section>

            {/* Practical Uses */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Practical Uses of a Scientific Calculator</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 m-0">Students & Education</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Helpful for high school and college-level mathematics, physics, and chemistry problems.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 m-0">Engineering & Technology</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Used for trigonometry, formulas, and technical calculations in design and analysis.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 m-0">Finance & Economics</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Supports logarithmic calculations and compound growth analysis.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center flex-shrink-0">
                            <FlaskConical className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 m-0">Research & Data Analysis</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Ideal for formula-based calculations and mathematical modeling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Online */}
            <section className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4 m-0">Why Use an Online Scientific Calculator?</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Monitor className="w-5 h-5 text-indigo-300" />
                                <span>No physical device required</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Share2 className="w-5 h-5 text-indigo-300" />
                                <span>Accessible from anywhere</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-indigo-300" />
                                <span>Accurate and consistent results</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Smartphone className="w-5 h-5 text-indigo-300" />
                                <span>Works on all screen sizes</span>
                            </li>
                        </ul>
                        <div className="mt-6 inline-flex items-center gap-2 bg-indigo-500/50 px-4 py-2 rounded-full text-sm font-medium">
                            <Zap className="w-4 h-4 text-yellow-300" />
                            No installation required
                        </div>
                    </div>
                    <div className="flex-1 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                        <h3 className="font-bold text-lg mb-4">Common Challenges Solved</h3>
                        <ul className="space-y-3 text-sm text-indigo-100">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-0.5" />
                                <span>Prevents incorrect order of operations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-0.5" />
                                <span>Eliminates misapplied trig functions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-0.5" />
                                <span>Reduces logarithmic calculation mistakes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Scientific vs Basic */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 m-0">Scientific Calculator vs Basic Calculator</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    A basic calculator handles only addition, subtraction, multiplication, and division. A scientific calculator expands functionality to include advanced mathematical operations required in academic and professional environments.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg text-yellow-800 dark:text-yellow-200 text-sm border-l-4 border-yellow-400 dark:border-yellow-600">
                    If your calculations involve formulas, angles, or exponents, a scientific calculator is essential.
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Does this calculator support trigonometric functions?", a: "Yes. It supports sin, cos, tan, and inverse trigonometric operations." },
                        { q: "Can I calculate logarithms and powers?", a: "Yes. Both logarithmic and exponential calculations are supported." },
                        { q: "Is this calculator suitable for students?", a: "Yes. It is designed to be intuitive while supporting advanced mathematical needs." },
                        { q: "Does it work on mobile devices?", a: "Yes. The calculator layout adapts smoothly to mobile and tablet screens." }
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

            {/* Branding - No CTA as requested */}
            <section className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 m-0">Built for Accuracy, Designed for Focus</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    CalcSuite calculators are designed to help users focus on solving problems, not navigating cluttered interfaces. This scientific calculator prioritizes precision, clarity, and usability for advanced mathematical work.
                </p>
            </section>

        </div>
    );
};

export default ScientificCalculatorContent;
