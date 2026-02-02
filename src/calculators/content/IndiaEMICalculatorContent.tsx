import { Landmark, Car, Briefcase, GraduationCap, TrendingDown, HelpCircle, Calculator, Info, AlertTriangle, ArrowRight } from 'lucide-react';

const IndiaEMICalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Grid - Financial Credibility */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is EMI and How Does It Work in India?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            EMI, or Equated Monthly Installment, is a fixed amount paid every month by a borrower to repay a loan. Each EMI consists of two parts:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-xs font-bold">P</span>
                                Principal repayment
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                <span className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-xs font-bold">I</span>
                                Interest on the outstanding loan amount
                            </li>
                        </ul>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                            In India, EMIs are typically calculated using the <strong>reducing balance method</strong>, where interest is charged only on the remaining loan balance after each payment.
                        </p>
                    </div>
                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4">Formula Used:</h3>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center font-mono text-slate-700 dark:text-slate-300 text-sm mb-4 shadow-sm">
                            EMI = P × R × (1 + R)^N ÷ [(1 + R)^N − 1]
                        </div>
                        <ul className="text-xs text-indigo-800 dark:text-indigo-300 space-y-1">
                            <li><strong>P</strong> = Loan amount (principal)</li>
                            <li><strong>R</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
                            <li><strong>N</strong> = Loan tenure in months</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Loans Supported */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Loans You Can Calculate</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                        <Landmark className="w-8 h-8 text-indigo-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Home Loan EMI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Plan long-term housing loans (up to 30 years).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                        <Car className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Car Loan EMI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Estimate monthly payments for new or used vehicles.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                        <Briefcase className="w-8 h-8 text-emerald-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Personal Loan EMI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Calculate unsecured loans with customizable rates.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                        <GraduationCap className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Education Loan EMI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Plan repayment for student loans.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
                        <TrendingDown className="w-8 h-8 text-purple-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Business Loan EMI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Understand repayment for MSME loans.</p>
                    </div>
                </div>
            </section>

            {/* What it shows */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What This EMI Calculator Shows You</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">EMI</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Monthly Amount</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">Interest</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Total Payable</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">Principal</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Amount Borrowed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">Total</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Paid to Lender</div>
                    </div>
                </div>
                <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    This transparency helps borrowers understand the real cost of borrowing, not just the EMI.
                </p>
            </section>

            {/* Why Critical */}
            <section>
                <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-8 border border-orange-100 dark:border-orange-900/20">
                    <h2 className="text-xl font-bold text-orange-900 dark:text-orange-200 mb-4 m-0 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Why EMI Calculation Is Critical
                    </h2>
                    <p className="text-orange-800 dark:text-orange-300 mb-6">
                        Many borrowers focus only on EMI affordability and ignore long-term interest impact. Even a small interest rate difference can result in lakhs of rupees in extra interest.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">Interest Rate Effect</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Higher rates increase total interest significantly. 0.5% matters.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">Loan Tenure Effect</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Longer tenure = Lower EMI but Higher Interest. Shorter tenure = Higher EMI but Lower Interest.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bank vs Calculator */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-indigo-500" />
                        EMI Calculator vs Bank Tables
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Bank EMI tables are static and assume fixed conditions. This calculator is dynamic and allows you to:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-indigo-500" /> Modify loan amount instantly</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-indigo-500" /> Compare different interest rates</li>
                        <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-indigo-500" /> Adjust tenure in real time</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-indigo-500" />
                        EMI Planning Tips
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li className="bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded text-green-800 dark:text-green-300">Keep EMI below 40% of monthly income</li>
                        <li className="bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded text-blue-800 dark:text-blue-300">Choose floating vs fixed interest wisely</li>
                        <li className="bg-purple-50 dark:bg-purple-900/20 px-3 py-2 rounded text-purple-800 dark:text-purple-300">Prepayments reduction impact</li>
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Is this EMI calculator accurate for Indian banks?", a: "Yes. It follows standard reducing balance EMI formulas used by Indian banks and NBFCs." },
                        { q: "Can I use it for home and car loans?", a: "Yes. It supports all common loan types in India including Home, Car, Personal, and Education loans." },
                        { q: "Does it consider GST or processing fees?", a: "No. It calculates EMI based on loan amount and interest. Additional charges should be considered separately." },
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

            {/* Tags */}
            <section className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-slate-800">
                {["Home Loan EMI", "Loan Prepayment", "Interest Rate Comparison", "CAGR"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                        {tag}
                    </span>
                ))}
            </section>

        </div>
    );
};

export default IndiaEMICalculatorContent;
