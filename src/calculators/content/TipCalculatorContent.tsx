import { DollarSign, Users, CreditCard, Receipt, Coffee, Utensils, ThumbsUp, HelpCircle } from 'lucide-react';

const TipCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Grid */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How This Tip Calculator Works</h2>
                <div className="grid sm:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enter Bill Amount</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Choose Tip %</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Select People</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-3">
                            <Receipt className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">View Result</p>
                    </div>
                </div>
            </section>

            {/* Why Use */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Why Use a Tip Calculator?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                            <ThumbsUp className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Fairness</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-0 mt-1">Split bills evenly instantly</p>
                        </div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                            <CreditCard className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Accuracy</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-0 mt-1">Avoid mental math errors</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">When This Calculator Is Useful</h2>
                <div className="flex flex-wrap gap-3">
                    {[
                        { icon: Utensils, label: "Restaurants & Cafes" },
                        { icon: Users, label: "Group Dining" },
                        { icon: Coffee, label: "Services" },
                        { icon: Receipt, label: "Splitting Bills" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 text-sm font-medium">
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Can I split the bill between multiple people?", a: "Yes. Enter the number of people and the calculator divides the total fairly." },
                        { q: "Does it support percentage and fixed tips?", a: "Yes. You can choose either method based on preference." },
                        { q: "Is this calculator free?", a: "Yes. It is completely free with no limits." }
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

export default TipCalculatorContent;
