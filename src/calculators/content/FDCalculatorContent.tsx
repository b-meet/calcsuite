import { Landmark, TrendingUp, AlertTriangle, HelpCircle, CheckCircle, Percent, Clock } from 'lucide-react';

const FDCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">FD Calculator for Indian Banks (Fixed Deposit)</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This FD Calculator helps you calculate the maturity amount and interest earned on Fixed Deposits in Indian banks. It supports monthly, quarterly, half-yearly, and yearly compounding frequencies, giving you precise returns based on bank-specific rules.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Fixed Deposits are one of the safest investment options in India, offering guaranteed returns and capital protection.
                        </p>
                        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2 m-0">
                                <Landmark className="w-5 h-5" />
                                What is a Fixed Deposit (FD)?
                            </h3>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300 m-0">
                                An FD is a financial instrument where you deposit a lump sum for a fixed tenure at a pre-agreed interest rate. The interest rate is usually higher than a savings account and is unaffected by market fluctuations.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Why Choose FD?
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-500" /> Guaranteed Returns
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Capital Safety (DICGC Insured)
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Clock className="w-4 h-4 text-blue-500" /> Flexible Tenures (7 days to 10 years)
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <AlertTriangle className="w-4 h-4 text-amber-500" /> Liquidity (Loan against FD)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How FD Interest is Calculated</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    In India, most banks follow quarterly compounding for calculating FD interest. This means interest is added to your principal every 3 months, and subsequent interest is calculated on this new total.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                            <Percent className="w-4 h-4 text-slate-500" /> The Formula
                        </h3>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg font-mono text-sm border border-slate-100 dark:border-slate-700 mb-3">
                            A = P × (1 + r/n)^(n*t)
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><strong>A:</strong> Maturity Amount</li>
                            <li><strong>P:</strong> Principal Deposit</li>
                            <li><strong>r:</strong> Annual Interest Rate</li>
                            <li><strong>n:</strong> Compounding Frequency (e.g., 4 for quarterly)</li>
                            <li><strong>t:</strong> Tenure in Years</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm m-0">
                            <TrendingUp className="w-4 h-4 text-indigo-500" /> Power of Compounding
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                            The more frequent the compounding, the higher the returns.
                        </p>
                        <div className="text-xs space-y-1">
                            <div className="flex justify-between">
                                <span>Simple Interest</span>
                                <span className="font-medium">Lowest Return</span>
                            </div>
                            <div className="flex justify-between text-indigo-600 dark:text-indigo-400">
                                <span>Quarterly Compound (Standard)</span>
                                <span className="font-medium">High Return</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Monthly Compound</span>
                                <span className="font-medium">Highest Return</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TDS Section */}
            <section className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-8 border border-amber-100 dark:border-amber-900/30">
                <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2 m-0">
                            Tax Deducted at Source (TDS) on FDs
                        </h3>
                        <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed mb-4">
                            Interest earned on Fixed Deposits is fully taxable. Banks deduct TDS if the interest income exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year.
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            <li className="bg-white/50 dark:bg-black/20 p-2 rounded text-xs text-amber-900 dark:text-amber-100 border border-amber-100 dark:border-amber-900/20 list-none">
                                <strong>10% TDS:</strong> If PAN is submitted
                            </li>
                            <li className="bg-white/50 dark:bg-black/20 p-2 rounded text-xs text-amber-900 dark:text-amber-100 border border-amber-100 dark:border-amber-900/20 list-none">
                                <strong>20% TDS:</strong> If PAN is NOT submitted
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is FD interest taxable?", a: "Yes. It is added to your income and taxed as per your slab." },
                        { q: "Can I withdraw FD before maturity?", a: "Yes, but banks typically charge a penalty (0.5% - 1%) and reduce interest." },
                        { q: "Are FDs safe?", a: "Extremely safe. Up to ₹5 Lakhs is insured by DICGC per bank." },
                        { q: "Do senior citizens get extra interest?", a: "Yes. Usually 0.50% higher than standard rates." }
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

export default FDCalculatorContent;
