import { Car, DollarSign, Percent, AlertCircle, HelpCircle, CheckCircle, Calculator } from 'lucide-react';

const AutoLoanCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Auto Loan Calculator to Estimate Car Loan Payments</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Auto Loan Calculator helps you estimate monthly car payments before purchasing a vehicle. By entering the vehicle price, down payment, trade-in value, interest rate, loan term, and sales tax, you can quickly understand the true cost of financing a car.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">It is ideal for planning new or used vehicle purchases and comparing loan scenarios.</p>
                    </div>
                    <div className="flex-1 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2 m-0">
                            <Calculator className="w-5 h-5" />
                            How This Auto Loan Calculator Works
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-blue-500" /> Enter the vehicle price
                            </li>
                            <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-blue-500" /> Add down payment & trade-in value
                            </li>
                            <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-blue-500" /> Select interest rate & loan term
                            </li>
                            <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-blue-500" /> Include sales tax if applicable
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What it Helps You Understand */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What This Calculator Helps You Understand</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1">Monthly Payment</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Estimated cost per month</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Upfront Impact</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Effect of down payment</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Loan Terms</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Interest rate & duration</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-orange-600 dark:text-orange-400 font-bold text-lg mb-1">True Cost</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Before dealership talks</div>
                    </div>
                </div>
            </section>

            {/* Why Use & FAQs */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Car className="w-5 h-5 text-indigo-500" />
                        Why Use It Before Buying?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Car loans often include multiple cost factors that are easy to overlook. This calculator helps you:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Avoid over-budgeting
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Compare financing options
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Understand long-term loan impact
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Make informed purchase decisions
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {[
                            { q: "Can I use this for used cars?", a: "Yes. It works for both new and used vehicle financing." },
                            { q: "Does it include sales tax?", a: "Yes. You can include sales tax in the calculation." },
                            { q: "Is this calculator free?", a: "Yes. It is completely free to use." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2 m-0">
                                    <HelpCircle className="w-4 h-4 text-slate-400" /> {faq.q}
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

export default AutoLoanCalculatorContent;
