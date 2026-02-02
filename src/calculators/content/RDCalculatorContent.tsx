import { TrendingUp, Calendar, AlertTriangle, HelpCircle, CheckCircle, PiggyBank, RefreshCw } from 'lucide-react';

const RDCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Recurring Deposit (RD) Calculator</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This RD Calculator helps you find the maturity value of your Recurring Deposits. It accurately calculates the interest earned on your monthly installments using the compounding formula used by Indian banks (typically quarterly compounding).
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Recurring Deposits are ideal for salaried individuals who want to save a fixed amount every month securely.
                        </p>
                        <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2 m-0">
                                <RefreshCw className="w-5 h-5" />
                                What is a Recurring Deposit (RD)?
                            </h3>
                            <p className="text-sm text-indigo-800 dark:text-indigo-300 m-0">
                                An RD acts like a systematic investment plan (SIP) but for guaranteed returns. You deposit a fixed sum monthly for a fixed tenure, earning interest rates similar to Fixed Deposits.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <PiggyBank className="w-5 h-5 text-indigo-500" />
                            RD vs FD
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Investment Style</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">FD is one-time lump sum. RD is monthly savings.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Interest Rates</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Usually identical for the same tenure.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Goal Suitability</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">RD is best for short-term goals like vacations or buying gadgets.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How RD Interest is Calculated</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            Since you deposit money every month, each installment earns interest for a different duration. The first installment earns interest for the full tenure, while the last one earns for just one month.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">Compounding Frequency</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Most Indian banks (SBI, HDFC, ICICI) compound RD interest <strong>quarterly</strong>. This calculator follows this standard banking practice for maximum accuracy.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm m-0">Example: ₹5,000/month for 1 Year @ 7%</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs p-2 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700">
                                <span className="text-slate-500 dark:text-slate-400">Deposit Month 1</span>
                                <span className="font-medium text-slate-900 dark:text-white">Earns Interest for 12 Months</span>
                            </div>
                            <div className="flex justify-between text-xs p-2 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700">
                                <span className="text-slate-500 dark:text-slate-400">Deposit Month 6</span>
                                <span className="font-medium text-slate-900 dark:text-white">Earns Interest for 6 Months</span>
                            </div>
                            <div className="flex justify-between text-xs p-2 bg-indigo-50 dark:bg-indigo-900/10 rounded border border-indigo-100 dark:border-indigo-900/30">
                                <span className="text-indigo-700 dark:text-indigo-300">Total Maturity</span>
                                <span className="font-bold text-indigo-700 dark:text-indigo-300">Sum of all Principal + Interest</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Can I miss an RD installment?", a: "Banks may charge a penalty for missed payments." },
                        { q: "Is RD interest taxable?", a: "Yes. TDS is applicable just like Fixed Deposits." },
                        { q: "Can I change the monthly amount?", a: "No. The installment amount is fixed for the tenure." },
                        { q: "Minimum tenure for RD?", a: "Usually 6 months is the minimum period." }
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
        </div>
    );
};

export default RDCalculatorContent;
