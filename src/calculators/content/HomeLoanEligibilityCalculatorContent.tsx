import { Calculator, HelpCircle, CheckCircle, UserCheck } from 'lucide-react';

const HomeLoanEligibilityCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Home Loan Eligibility Calculator</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This calculator estimates the maximum home loan amount you can get from banks in India. It analyzes your income, existing EMIs, and loan tenure using standard FOIR (Fixed Obligation to Income Ratio) norms to give you a realistic eligibility figure.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Checking your eligibility before house hunting prevents loan rejection and financial stress.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <UserCheck className="w-5 h-5" />
                                What determines eligibility?
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300 m-0">
                                Banks look at your <strong>Repayment Capacity</strong>. They ensure that after paying the new Home Loan EMI + Existing EMIs, you still have enough income left for living expenses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* FOIR Section */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Understanding FOIR</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            FOIR (Fixed Obligation to Income Ratio) is the % of your monthly income that banks allow for loan repayments.
                        </p>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2 m-0">
                            <Calculator className="w-4 h-4 text-indigo-500" /> Standard Norms
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex justify-between p-2 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700">
                                <span>Net Income &lt; ₹50k</span>
                                <strong className="text-slate-800 dark:text-slate-200">40-50% FOIR</strong>
                            </li>
                            <li className="flex justify-between p-2 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700">
                                <span>Net Income ₹50k - ₹1L</span>
                                <strong className="text-slate-800 dark:text-slate-200">50-60% FOIR</strong>
                            </li>
                            <li className="flex justify-between p-2 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700">
                                <span>Net Income &gt; ₹1L</span>
                                <strong className="text-slate-800 dark:text-slate-200">Up to 65% FOIR</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-3 text-sm flex items-center gap-2 m-0">
                            <CheckCircle className="w-4 h-4" /> How to Increase Eligibility
                        </h3>
                        <ul className="space-y-3 text-sm text-indigo-800 dark:text-indigo-300">
                            <li><strong>Add Co-Applicant:</strong> Clubbing income with spouse increases loan capacity.</li>
                            <li><strong>Clear Existing Loans:</strong> Reducing current EMIs improves FOIR.</li>
                            <li><strong>Increase Tenure:</strong> Longer tenure reduces EMI, qualifying you for a higher amount.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Does CIBIL score affect eligibility?", a: "Yes. 750+ score gets better rates and higher approval chances." },
                        { q: "Do banks fund 100% of property cost?", a: "No. Usually 75-90%. The rest is your down payment." },
                        { q: "Can I include bonus in income?", a: "Some banks consider variable pay, others only look at fixed salary." },
                        { q: "Is this calculator accurate?", a: "It provides a close estimate. Final sanction depends on bank policy." }
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

export default HomeLoanEligibilityCalculatorContent;
