import { Landmark, Car, Briefcase, GraduationCap, TrendingDown, HelpCircle, Calculator, Info, AlertTriangle, ArrowRight, CheckCircle, XCircle, Home, MapPin } from 'lucide-react';

const IndiaEMICalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* 0. Zero-Click SEO Snippet (Featured Snippet Target) */}
            <section className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2 m-0">
                    <Calculator className="w-5 h-5" /> Quick Answer: 50 Lakh Home Loan EMI
                </h2>
                <p className="text-indigo-800 dark:text-indigo-300 text-lg">
                    At an interest rate of <strong>8.50%</strong> for a tenure of <strong>20 years</strong>, the EMI for a ₹50 Lakh Home Loan is <span className="text-2xl font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded shadow-sm mx-1">₹43,391</span>.
                    <br /><span className="text-sm opacity-80 mt-1 block">Total Interest Payable: ₹54.13 Lakhs | Total Payment: ₹1.04 Crores</span>
                </p>
            </section>

            {/* 1. Intro Grid - Financial Credibility */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What Is EMI and How Does It Work?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start mt-6">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay your loan. In the early years, a major chunk of your EMI goes towards <strong>Interest</strong>, while in later years, it adjusts to pay off the <strong>Principal</strong>.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1 m-0">The "Reducing Balance" Method</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                                Indian banks (SBI, HDFC, ICICI) calculate interest on the <strong>outstanding balance</strong> at the end of every month, not the original principal. This benefits you if you make prepayments.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 border-b pb-2 border-slate-200 dark:border-slate-700 m-0">Mathematical Formula</h3>
                        <div className="flex justify-center my-6">
                            <div className="bg-white dark:bg-slate-800 px-6 py-4 rounded-lg shadow-sm font-serif text-xl text-slate-800 dark:text-slate-200 tracking-wide">
                                {'$$EMI = \\frac{P \\times R \\times (1+R)^N}{(1 + R) ^ N - 1}$$'}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
                            <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700">
                                <strong className="block text-slate-900 dark:text-white text-sm">P</strong> Principal
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700">
                                <strong className="block text-slate-900 dark:text-white text-sm">R</strong> Rate/Mo
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700">
                                <strong className="block text-slate-900 dark:text-white text-sm">N</strong> Months
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PMAY 2.0 Section (High Value 2026 Content) */}
            <section className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Home className="w-32 h-32 text-orange-600" />
                </div>
                <div className="relative z-10">
                    <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">NEW FOR 2024-2029</span>
                    <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">PMAY-U 2.0 Interest Subsidy Scheme</h2>
                    <p className="text-orange-800 dark:text-orange-200 mb-6 max-w-2xl">
                        The new Pradhan Mantri Awas Yojana (Urban) 2.0 offers a massive benefit for Middle Income Groups (MIG). If your annual household income is up to ₹9 Lakhs, you can save heavily on interest.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/80 dark:bg-slate-900/80 p-4 rounded-xl backdrop-blur-sm border border-orange-200 dark:border-orange-700/50">
                            <div className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider mb-1">Subsidy Rate</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">4.00%</div>
                            <div className="text-[10px] text-slate-500">On first ₹8 Lakhs loan</div>
                        </div>
                        <div className="bg-white/80 dark:bg-slate-900/80 p-4 rounded-xl backdrop-blur-sm border border-orange-200 dark:border-orange-700/50">
                            <div className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider mb-1">Max Benefit</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">₹1.80 Lakh</div>
                            <div className="text-[10px] text-slate-500">Paid in 5 installments</div>
                        </div>
                        <div className="bg-white/80 dark:bg-slate-900/80 p-4 rounded-xl backdrop-blur-sm border border-orange-200 dark:border-orange-700/50">
                            <div className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider mb-1">Eligibility</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">MIG / EWS / LIG</div>
                            <div className="text-[10px] text-slate-500">Income &lt; ₹9 Lakh/yr</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-orange-800 dark:text-orange-300 bg-orange-200/50 dark:bg-orange-900/30 p-3 rounded-lg w-fit">
                        <Info className="w-4 h-4" />
                        <strong>Note:</strong> Applicable for loans sanctioned after Sep 1, 2024. Property value must be &lt; ₹35 Lakhs.
                    </div>
                </div>
            </section>

            {/* 3. 2026 Tax Guide (Sec 24b vs 80C) */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Home Loan Tax Benefits: 2026 Guide</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm border-b border-slate-200 dark:border-slate-700">
                                <th className="p-4 font-medium uppercase tracking-wider">Section</th>
                                <th className="p-4 font-medium uppercase tracking-wider">Benefit Type</th>
                                <th className="p-4 font-medium uppercase tracking-wider">Old Regime Limit</th>
                                <th className="p-4 font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">New Regime (2026)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                            <tr>
                                <td className="p-4 font-bold text-slate-900 dark:text-white">Sec 24(b)</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Interest Repayment</td>
                                <td className="p-4 text-green-600 font-medium">₹2.0 Lakhs</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <XCircle className="w-4 h-4 text-slate-300" /> No Deduction*
                                    </div>
                                    <span className="text-[10px] text-slate-400 block mt-1">*Allowed only for Let-out property</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-slate-900 dark:text-white">Sec 80C</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Principal Repayment</td>
                                <td className="p-4 text-green-600 font-medium">₹1.5 Lakhs</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <XCircle className="w-4 h-4 text-slate-300" /> No Deduction
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-indigo-50/50 dark:bg-indigo-900/10">
                                <td className="p-4 font-bold text-slate-900 dark:text-white">Sec 80EEA</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Additional Interest</td>
                                <td className="p-4 text-green-600 font-medium">₹1.5 Lakhs</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <XCircle className="w-4 h-4 text-slate-300" /> No Deduction
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg text-sm text-slate-600 dark:text-slate-400 flex gap-3">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p>
                        <strong>Strategy Tip:</strong> If your total deductions (Interest + 80C + 80D) exceed ₹3.75 Lakhs, stick to the <strong>Old Regime</strong>. Otherwise, the New Regime usually offers lower tax rates despite zero deductions.
                    </p>
                </div>
            </section>

            {/* Loans Supported */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Loans You Can Calculate</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
                <div className="grid md:grid-cols-4 gap-6 text-center mt-6">
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

            {/* 4. Affordability & Regional Rates */}
            <section className="grid md:grid-cols-2 gap-8">
                {/* Affordability 50% Rule */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                        <CheckCircle className="w-5 h-5 text-green-500" /> The "50% Rule" for Affordability
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 m-0">
                        For a healthy financial life, your total EMIs (Home + Car + Personal) should not exceed 50% of your Net Monthly Income.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span className="text-green-600">Safe Zone (&lt;30%)</span>
                                <span className="text-slate-400">High Risk (&gt;50%)</span>
                            </div>
                            <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
                                <div className="w-[30%] bg-green-500 h-full"></div>
                                <div className="w-[20%] bg-yellow-400 h-full"></div>
                                <div className="w-[50%] bg-red-400 h-full"></div>
                            </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> 30% for Housing
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div> 20% for Car/Loans
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div> 50% for Living/Investments
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Regional Interest Rates Table */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 m-0">
                        <MapPin className="w-5 h-5 text-indigo-500" /> Current Interest Rates (Feb 2026)
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 m-0">
                        Rates are linked to Repo Rate (Current: 5.25%). Lowest rates usually require CIBIL Score &gt; 750.
                    </p>
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-slate-900">
                                <tr>
                                    <th className="p-3 font-semibold text-slate-900 dark:text-white">Bank / HFC</th>
                                    <th className="p-3 font-semibold text-slate-900 dark:text-white text-right">Start Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="p-3 text-slate-700 dark:text-slate-300">Bank of India</td>
                                    <td className="p-3 text-right font-mono font-medium text-green-600">7.10%</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-slate-700 dark:text-slate-300">Canara Bank</td>
                                    <td className="p-3 text-right font-mono font-medium text-green-600">7.15%</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-slate-700 dark:text-slate-300">HDFC Bank</td>
                                    <td className="p-3 text-right font-mono font-medium text-green-600">8.75%</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-slate-700 dark:text-slate-300">SBI (State Bank)</td>
                                    <td className="p-3 text-right font-mono font-medium text-green-600">8.40%</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-slate-700 dark:text-slate-300">ICICI Bank</td>
                                    <td className="p-3 text-right font-mono font-medium text-green-600">8.75%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6 mt-6">
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
                {[
                    "Home Loan EMI", "Loan Prepayment", "Interest Rate Comparison", "CAGR",
                    "PMAY 2.0 Subsidy", "SBI Home Loan", "HDFC Home Loan",
                    "Personal Loan EMI", "Car Loan EMI", "Education Loan EMI",
                    "Tax Benefit 2026", "Affordability Calculator", "CIBIL Score Impact",
                    "Floating vs Fixed Rate"
                ].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </section>

        </div>
    );
};

export default IndiaEMICalculatorContent;
