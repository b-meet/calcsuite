import { TrendingUp, ArrowUpRight, ArrowDownRight, Minus, HelpCircle, BarChart3, PieChart } from 'lucide-react';

const PercentageChangeContent = () => {
    return (
        <div className="space-y-12">

            {/* How to Use */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How to Use This Percentage Change Calculator</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                        <div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3 font-bold text-slate-600 dark:text-slate-300">1</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Enter Original Value</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3 font-bold text-slate-600 dark:text-slate-300">2</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Enter New Value</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3 font-bold text-slate-600 dark:text-slate-300">3</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">See Increase/Decrease</p>
                    </div>
                </div>
            </section>

            {/* What it shows */}
            <section className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-6 m-0">What This Calculator Shows</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <TrendingUp className="w-8 h-8 mx-auto mb-3 text-indigo-200" />
                        <p className="font-semibold">% Change</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <Minus className="w-8 h-8 mx-auto mb-3 text-indigo-200" />
                        <p className="font-semibold">Value Diff</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <PieChart className="w-8 h-8 mx-auto mb-3 text-indigo-200" />
                        <p className="font-semibold">New vs Old</p>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">When This Tool Is Useful</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-900/30">
                        <ArrowDownRight className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
                        <h3 className="font-semibold text-slate-900 dark:text-white">Discounts</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Track price drops</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <ArrowUpRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                        <h3 className="font-semibold text-slate-900 dark:text-white">Salary</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Calculate raises</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-900/30">
                        <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
                        <h3 className="font-semibold text-slate-900 dark:text-white">Growth</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Business metrics</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30">
                        <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-2" />
                        <h3 className="font-semibold text-slate-900 dark:text-white">Comparison</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Data over time</p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Can it calculate percentage decrease?", a: "Yes. The calculator detects both increase and decrease automatically." },
                        { q: "Does it support decimals?", a: "Yes. Decimal values are supported for accurate results." },
                        { q: "Is it free to use?", a: "Yes. This calculator is completely free." }
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

        </div>
    );
};

export default PercentageChangeContent;
