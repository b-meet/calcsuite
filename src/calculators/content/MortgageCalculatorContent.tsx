import { Home, Percent, DollarSign, TrendingUp, AlertTriangle, HelpCircle, CheckCircle } from 'lucide-react';

const MortgageCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is a Mortgage?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            A mortgage is a long-term loan used to purchase or refinance real estate, typically repaid over 15 to 30 years. The property itself acts as collateral until the loan is fully paid off.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Each monthly mortgage payment generally includes:</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Principal repayment
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Interest on the loan
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Optional taxes and insurance (depending on loan structure)
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            How Payments Are Calculated
                        </h3>
                        <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed mb-4">
                            Mortgage payments are calculated using a <strong>fixed amortization formula</strong>. The monthly payment remains constant, but the portion allocated to interest and principal changes over time.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                <strong>Early payments:</strong> Mostly interest.<br />
                                <strong>Later payments:</strong> Mostly principal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What This Calculator Shows */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What This Mortgage Calculator Shows</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1">Monthly Payment</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Estimated cost per month</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Total Principal</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Amount borrowed</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Total Interest</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Cost of borrowing</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-orange-600 dark:text-orange-400 font-bold text-lg mb-1">Overall Cost</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Principal + Interest</div>
                    </div>
                </div>
                <p className="text-center text-slate-500 text-sm mt-6">Understanding all of these values is critical when comparing loan offers.</p>
            </section>

            {/* Impact & Importance */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Percent className="w-5 h-5 text-indigo-500" />
                        Interest Rate & Loan Term Impact
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 m-0">Interest Rate</h4>
                            <p className="m-0 text-xs text-slate-600 dark:text-slate-400">Lower rates reduce both monthly payments and total loan cost. Higher rates increase long-term interest significantly.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 m-0">Loan Term</h4>
                            <p className="m-0 text-xs text-slate-600 dark:text-slate-400">Longer terms (30y) reduce monthly payments but increase total interest. Shorter terms (15y) raise monthly payments but save money overall.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Common Planning Mistakes
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Choosing a loan based only on monthly payment
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Ignoring total interest cost
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Overlooking interest rate sensitivity
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Not comparing different loan terms
                        </li>
                    </ul>
                </div>
            </section>

            {/* Why Use & Who For */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 m-0">Why Mortgage Calculation Matters</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 w-full max-w-3xl">
                    Many buyers focus only on the home price and underestimate the long-term cost of borrowing. Even a small interest rate difference can add tens of thousands of dollars over time. This calculator helps you assess affordability realistically and avoid over-stretching monthly finances.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Useful For:</span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><Home className="w-4 h-4 text-indigo-500" /> First-time homebuyers</div>
                    <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><DollarSign className="w-4 h-4 text-green-500" /> Refinancing deals</div>
                    <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><TrendingUp className="w-4 h-4 text-blue-500" /> Investors</div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Is this mortgage calculator accurate?", a: "It uses standard mortgage formulas and provides reliable estimates. Actual lender terms may vary." },
                        { q: "Does it include taxes and insurance?", a: "This calculator focuses on principal and interest. Taxes and insurance are often added separately in estimates." },
                        { q: "Can I use it for refinancing?", a: "Yes. It can estimate payments for refinance scenarios as well." },
                        { q: "Is this tool free?", a: "Yes. It is completely free with no usage limits." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 m-0">
                                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-8 m-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section className="bg-slate-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Clear and Confident Home Buying</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Mortgage Calculator is designed to simplify home loan planning. It delivers fast, accurate estimates and helps users evaluate affordability without confusion or hidden assumptions.
                </p>
            </section>

        </div>
    );
};

export default MortgageCalculatorContent;
