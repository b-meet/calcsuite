import { DollarSign, Clock, PieChart, Briefcase, GraduationCap, AlertTriangle, HelpCircle, CheckCircle, TrendingDown } from 'lucide-react';

const LoanCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is a Loan and How Repayment Works</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            A loan is a borrowed amount that must be repaid over time with interest. Most loans follow a fixed repayment schedule where the borrower pays a set amount every month until the loan is fully repaid.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Each payment generally includes:</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Principal repayment
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Interest charged on the remaining balance
                            </li>
                        </ul>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
                            This calculator assumes standard fixed-rate loan repayment, which is common for most consumer and business loans.
                        </p>
                    </div>
                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2 m-0">
                            <PieChart className="w-5 h-5" />
                            How Payments Are Calculated
                        </h3>
                        <p className="text-sm text-indigo-800 dark:text-indigo-300 leading-relaxed mb-4">
                            Loan payments are calculated using an <strong>amortization formula</strong> that spreads repayment evenly over the loan term. While the monthly payment stays the same, the interest portion is higher at the beginning and decreases over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Types of Loans */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Types of Loans You Can Calculate</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors">
                        <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Personal Loans</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Travel, emergencies, or consolidation.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-green-500 transition-colors">
                        <GraduationCap className="w-8 h-8 text-green-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Student Loans</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Education loans with fixed periods.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors">
                        <TrendingDown className="w-8 h-8 text-purple-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">Business Loans</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Expansion, equipment, or capital.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 transition-colors">
                        <DollarSign className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 m-0">General Loans</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Any fixed-term installment loan.</p>
                    </div>
                </div>
            </section>

            {/* What This Calculator Shows */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What This Loan Calculator Shows</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1">Monthly Payment</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Estimated cost per month</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Total Interest</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Cost of borrowing</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Total Repayment</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Principal + Interest</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-orange-600 dark:text-orange-400 font-bold text-lg mb-1">Impact Analysis</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Rate & Tenure effect</div>
                    </div>
                </div>
            </section>

            {/* Impact & Planning */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <Clock className="w-5 h-5 text-indigo-500" />
                        Interest Rate & Tenure Impact
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-sm text-indigo-900 dark:text-indigo-200 mb-1 m-0">Interest Rate</h4>
                            <p className="text-xs text-indigo-800 dark:text-indigo-300 m-0">Higher interest rates increase both monthly payments and total interest paid.</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-200 mb-1 m-0">Loan Term</h4>
                            <p className="text-xs text-blue-800 dark:text-blue-300 m-0">Longer terms reduce monthly payments but increase overall interest. Shorter terms cost less overall but have higher monthly payments.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Common Planning Mistakes
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Borrowing based only on monthly affordability
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Ignoring total interest cost
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Choosing longer tenure without understanding impact
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Not comparing multiple scenarios
                        </li>
                    </ul>
                </div>
            </section>


            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Is this loan calculator accurate?", a: "It uses standard loan formulas and provides reliable estimates. Actual lender terms may vary." },
                        { q: "Can I use it for different loan types?", a: "Yes. It works for most fixed-rate loans with regular payments including personal, student, and business loans." },
                        { q: "Does it include fees or taxes?", a: "No. It calculates payments based on loan amount, interest, and term only." },
                        { q: "Is this calculator free?", a: "Yes. It is completely free with no usage limits." }
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

            {/* Footer */}
            <section className="bg-slate-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Clear and Confident Borrowing Decisions</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Loan Calculator is designed to simplify loan planning. It provides fast, accurate estimates that help users make informed borrowing decisions without complexity or hidden assumptions.
                </p>
            </section>

        </div>
    );
};

export default LoanCalculatorContent;
