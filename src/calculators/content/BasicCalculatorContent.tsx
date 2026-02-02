import { Plus, Minus, X, Divide, Check, Monitor, Smartphone, Briefcase, ShoppingCart, HelpCircle } from 'lucide-react';

const BasicCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Grid */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is a Basic Calculator?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    A basic calculator is a simple arithmetic tool used to perform four primary operations. Unlike scientific or advanced calculators, it focuses on speed, simplicity, and ease of use. It is perfect for daily calculations where advanced functions are not required.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                        <div className="w-10 h-10 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                            <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Addition</h3>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                        <div className="w-10 h-10 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3">
                            <Minus className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Subtraction</h3>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                        <div className="w-10 h-10 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                            <X className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Multiplication</h3>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                        <div className="w-10 h-10 mx-auto bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                            <Divide className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Division</h3>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How to Use This Basic Math Calculator</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-4xl font-bold text-slate-200 dark:text-slate-700 mb-4 block">1</span>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Enter numbers</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Use the on-screen keypad or your keyboard.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-4xl font-bold text-slate-200 dark:text-slate-700 mb-4 block">2</span>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Select operation</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Choose Addition, Subtraction, Multiplication, or Division.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-4xl font-bold text-slate-200 dark:text-slate-700 mb-4 block">3</span>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Get result</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Press equals (=) to see the answer instantly.</p>
                    </div>
                </div>
            </section>

            {/* Operations Explained */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Supported Math Operations Explained</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white m-0">Addition</h3>
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded font-mono">125 + 375 = 500</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Use addition to combine two or more numbers into a single total.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white m-0">Subtraction</h3>
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded font-mono">500 − 180 = 320</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Subtraction helps find the difference between numbers.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white m-0">Multiplication</h3>
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded font-mono">12 × 8 = 96</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Multiplication is used to calculate repeated addition.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white m-0">Division</h3>
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded font-mono">144 ÷ 12 = 12</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Division splits a number into equal parts.</p>
                    </div>
                </div>
            </section>

            {/* Real World Uses */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Real-World Uses</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Office & Business</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Professionals use calculators for invoices, expense calculations, totals, and quick estimations.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <ShoppingCart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Shopping & Budgeting</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Calculate totals, compare prices, and manage daily spending accurately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Use Online */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Why Use an Online Calculator?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl flex items-center gap-3">
                        <Monitor className="w-5 h-5 text-slate-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Desktop Ready</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-slate-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Mobile Friendly</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">No Installation</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Instant Results</span>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 m-0">Common Calculation Mistakes</h2>
                <ul className="grid sm:grid-cols-3 gap-4">
                    <li className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg text-red-700 dark:text-red-400 text-sm">
                        Misplaced decimals
                    </li>
                    <li className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg text-red-700 dark:text-red-400 text-sm">
                        Incorrect operation order
                    </li>
                    <li className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg text-red-700 dark:text-red-400 text-sm">
                        Skipping steps
                    </li>
                </ul>
                <p className="text-center mt-6 text-slate-500 text-sm">Using our calculator eliminates these mistakes completely.</p>
            </section>

            {/* Who Should Use */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Who Should Use This Calculator?</h2>
                <div className="flex flex-wrap gap-3">
                    {["Students", "Teachers", "Office Workers", "Business Owners", "Shoppers"].map((tag, idx) => (
                        <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* Basic vs Scientific */}
            <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 m-0">Basic Calculator vs Scientific Calculator</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-0">
                    A <strong>basic calculator</strong> focuses on everyday arithmetic (addition, subtraction, multiplication, division), while a <strong>scientific calculator</strong> includes advanced functions like trigonometry, logarithms, and powers. If you only need simple math, a basic calculator is faster, clearer, and easier to use.
                </p>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Is this basic calculator free to use?", a: "Yes. This calculator is completely free and has no usage limits." },
                        { q: "Does it support decimal numbers?", a: "Yes. You can perform calculations with decimal values accurately." },
                        { q: "Can I use it on my phone?", a: "Yes. The calculator is fully responsive and works smoothly on mobile devices." },
                        { q: "Is any data stored?", a: "No. All calculations happen instantly in your browser and are not saved." }
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
                <h2 className="text-2xl font-bold mb-4 m-0">Why CalcSuite Is Built for Everyday Calculations</h2>
                <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    CalcSuite focuses on simplicity, speed, and accuracy. Each calculator is designed to solve real problems without unnecessary complexity. Instead of searching multiple websites, CalcSuite provides a trusted set of calculators in one place.
                </p>
            </section>
        </div>
    );
};

export default BasicCalculatorContent;
