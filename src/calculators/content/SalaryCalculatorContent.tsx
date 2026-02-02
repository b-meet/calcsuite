import { Briefcase, Clock, Calendar, DollarSign, HelpCircle, Calculator, Info } from 'lucide-react';

const SalaryCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Salary Calculator to Convert Pay Across Time Periods</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Salary Calculator helps you quickly convert income between hourly, daily, weekly, bi-weekly, monthly, and annual pay. It is useful for understanding how different pay structures compare and for planning income more clearly.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <Briefcase className="w-4 h-4" />
                                Why Conversion Matters
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Income can look very different depending on how it is presented. Converting pay into multiple time frames helps you better understand earning potential and make informed financial decisions.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Calculator className="w-5 h-5 text-indigo-500" />
                            What This Calculator Is Useful For
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Comparing hourly and salaried pay
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Understanding annual income from hourly work
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Planning monthly and weekly budgets
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Evaluating job offers with different pay structures
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-orange-500" />
                        How to Use
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Enter Amount</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Input your salary amount.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Select Frequency</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Choose hourly, weekly, monthly, etc.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">View Result</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">See instant conversions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {[
                            { q: "Does this include taxes?", a: "No. This calculator shows gross income only." },
                            { q: "Is this calculator free?", a: "Yes. It is completely free to use." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2 m-0">
                                    <HelpCircle className="w-4 h-4 text-green-500" /> {faq.q}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 ml-6 m-0">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SalaryCalculatorContent;
