import { Percent, UserCheck, TrendingUp } from 'lucide-react';

const IndiaHomeLoanEligContent = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    How Banks Decide Your Home Loan Limit
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Before sanctioning a home loan, Indian banks (SBI, HDFC, ICICI, etc.) strictly evaluate your repayment capacity.
                    The golden rule they follow is the <strong>FOIR (Fixed Obligation to Income Ratio)</strong>.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-3">
                        <Percent className="w-5 h-5" />
                        What is FOIR?
                    </h3>
                    <p className="text-blue-800 mb-3">
                        Banks assume you need 40-50% of your income for living expenses (food, travel, utilities). They will only lend an amount where the new EMI + existing EMIs do not exceed <strong>50% to 60%</strong> of your Net Monthly Income.
                    </p>
                    <p className="text-blue-800 text-sm font-medium">
                        Formula: Max EMI = (Net Monthly Income * FOIR%) - Existing Obligations
                    </p>
                </div>
            </section>

            <section className="bg-white rounded-2xl p-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    4 Ways to Increase Your Loan Eligibility
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-green-600" />
                            Add a Co-Applicant
                        </h3>
                        <p className="text-sm text-slate-600">
                            Adding a working spouse or parent as a co-applicant clubs both incomes. This drastically increases the net monthly income and can often double your eligible loan amount.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            Clear Existing Debts
                        </h3>
                        <p className="text-sm text-slate-600">
                            Close any running personal loans or car loans. Reducing your "Existing Obligations" directly increases the room for your Home Loan EMI.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                            Increase Tenure
                        </h3>
                        <p className="text-sm text-slate-600">
                            Opting for a 25 or 30-year tenure instead of 20 years reduces the EMI, allowing you to qualify for a higher principal amount for the same monthly income.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-orange-600" />
                            Improve Credit Score
                        </h3>
                        <p className="text-sm text-slate-600">
                            A CIBIL score of 750+ not only ensures approval but can also get you a lower interest rate (repo-linked), which slightly increases eligibility.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Common Mistakes to Avoid
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-700">
                    <li><strong>Applying at too many banks</strong>: Multiple inquiries reduce your CIBIL score.</li>
                    <li><strong>Ignoring variable components</strong>: Banks often don't consider variable pay or bonuses fully when calculating eligibility. Rely on your fixed take-home pay.</li>
                    <li><strong>Not factoring in fees</strong>: Remember to account for Processing Fees (0.5-1%) and Stamp Duty (5-7% of property value) which are usually not covered by the loan.</li>
                </ul>
            </section>
        </div>
    );
};

export default IndiaHomeLoanEligContent;
