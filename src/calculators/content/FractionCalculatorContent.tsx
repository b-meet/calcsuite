import { Check, PieChart, ChefHat, Hammer, Briefcase, HelpCircle } from 'lucide-react';

const FractionCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Grid */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Understanding Fractions in Simple Terms</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    A fraction represents a part of a whole and consists of two values:
                </p>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-lg">1</span>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white m-0 mb-4">Numerator</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">The top number showing how many parts are taken</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-lg">2</span>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white m-0 mb-4">Denominator</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">The bottom number showing how many equal parts the whole is divided into</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
                        <p className="text-lg text-slate-700 dark:text-slate-300 m-0">Example: <span className="font-bold text-blue-600 dark:text-blue-400">3 over 4</span></p>
                        <p className="text-slate-500 dark:text-slate-400">Represents three parts out of four equal parts.</p>
                        <div className="mt-4 flex justify-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">1</div>
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">2</div>
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">3</div>
                            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded border border-dashed border-slate-400"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What it can do */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">What This Fraction Calculator Can Do</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                        <div className="w-12 h-12 mx-auto bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl text-green-600 dark:text-green-400">+</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Addition</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Combine fractions with different denominators</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                        <div className="w-12 h-12 mx-auto bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl text-red-600 dark:text-red-400">-</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Subtraction</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Find the difference between fractions</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                        <div className="w-12 h-12 mx-auto bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl text-purple-600 dark:text-purple-400">×</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Multiplication</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Multiply without manual cross-multiplying</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                        <div className="w-12 h-12 mx-auto bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
                            <span className="text-xl text-orange-600 dark:text-orange-400">÷</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Division</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Divide using correct reciprocal rules</p>
                    </div>
                </div>
                <p className="text-center text-slate-500 text-sm mt-6">The calculator also works automatically with improper fractions and mixed numbers.</p>
            </section>

            {/* How to Use */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How to Use the Fraction Calculator</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">1</div>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">Enter the numerator and denominator for the first fraction</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">2</div>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">Select the operation (+, -, ×, ÷)</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">3</div>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">Enter the second fraction</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center font-bold text-green-600 dark:text-green-400"><Check className="w-5 h-5" /></div>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">Click calculate to get value instantly (simplified)</p>
                    </div>
                </div>
            </section>

            {/* Why Tricky */}
            <section className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-900/20">
                <h2 className="text-2xl font-bold text-red-900 dark:text-red-200 mb-6 m-0">Why Fraction Calculations Can Be Tricky</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Common Denominators</h3>
                        <p className="text-sm text-red-700 dark:text-red-400">Forgetting to find a common denominator before adding or subtracting.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Incorrect Operations</h3>
                        <p className="text-sm text-red-700 dark:text-red-400">Applying multiplication rules to division problems or vice versa.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Simplification Errors</h3>
                        <p className="text-sm text-red-700 dark:text-red-400">Mistakes while reducing the final fraction to its simplest form.</p>
                    </div>
                </div>
            </section>

            {/* Practical Uses */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Practical Uses of Fraction Calculations</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                            <PieChart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Education</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 m-0">Arithmetic & Algebra</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
                        <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                            <ChefHat className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Cooking</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 m-0">Scaling recipes</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                            <Hammer className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Construction</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 m-0">Precise measurements</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Finance</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 m-0">Ratios & Distributions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fraction vs Decimal */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 m-0">Fraction Calculator vs Decimal Calculator</h2>
                <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl">
                    <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Fractions preserve exact values (e.g., 1/3), while decimals may introduce rounding errors (e.g., 0.3333...).
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Exact precision</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> No rounding needed</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Better for ratios</li>
                        </ul>
                    </div>
                    <div className="w-px h-24 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                    <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-400 font-medium">When precision matters, fraction-based calculations are often the better choice.</p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Can this calculator simplify fractions?", a: "Yes. Results are automatically reduced to their simplest form." },
                        { q: "Does it support mixed numbers?", a: "Yes. Mixed numbers and improper fractions are handled correctly." },
                        { q: "Is this tool free to use?", a: "Yes. There are no limits or restrictions on usage." },
                        { q: "Can I use it on mobile devices?", a: "Yes. The calculator is optimized for phones, tablets, and desktops." }
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

            {/* When to Use */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">When Should You Use a Fraction Calculator?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Check className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Exact values needed</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Check className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Avoid rounding errors</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Check className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Measurements & Ratios</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Check className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Fast, reliable results</span>
                    </div>
                </div>
            </section>

            {/* Start calculating (Branding) */}
            <section className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 m-0">Built to Simplify Fraction Math</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    CalcSuite focuses on clarity and correctness. This fraction calculator is designed to remove confusion from fraction math and help users solve problems efficiently, whether for learning, work, or everyday tasks.
                </p>
            </section>

        </div>
    );
};

export default FractionCalculatorContent;
