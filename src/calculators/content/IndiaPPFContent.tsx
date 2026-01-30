import { TrendingUp, Lock, Award } from 'lucide-react';

const IndiaPPFContent = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Public Provident Fund (PPF): The King of Tax Saving
                </h2>
                <p className="text-slate-600 dark:text-slate-200 leading-relaxed mb-6">
                    The Public Provident Fund (PPF) is widely regarded as one of the safest and most tax-efficient long-term investment options in India. Backed by the Government of India, it offers guaranteed returns and complete capital protection.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                        <Award className="w-5 h-5" />
                        The "EEE" Advantage
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100 mb-2">
                        PPF falls under the rare <strong>Exempt-Exempt-Exempt (EEE)</strong> category:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-blue-800 dark:text-blue-100">
                        <li><strong>Investment is Exempt</strong>: Your yearly contribution (up to ₹1.5 Lakh) is deductible u/s 80C.</li>
                        <li><strong>Interest is Exempt</strong>: The interest earned every year is completely tax-free.</li>
                        <li><strong>Maturity is Exempt</strong>: The final amount you withdraw after 15 years is also 100% tax-free.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-transparent dark:border-slate-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Maximizing Your PPF Returns
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                            Invest Before the 5th
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            Interest in PPF is calculated on the lowest balance between the 5th and the last day of the month. To maximize returns, always deposit your contribution <strong>on or before the 5th of the month</strong> (or April 5th for lump sum).
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            The 15-Year Lock-in Power
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            While the 15-year lock-in seems long, it forces disciplined compounding. A contribution of ₹1.5 Lakh/year typically grows to over <strong>₹40 Lakhs</strong> in 15 years, and over <strong>₹1 Crore</strong> if extended to 25 years.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Partial Withdrawals & Loans</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    You don't have to wait 15 years for liquidity:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-200">
                    <li><strong>Loan</strong>: Available from the 3rd to the 6th financial year.</li>
                    <li><strong>Partial Withdrawal</strong>: Permitted from the 7th financial year onwards (subject to limits).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Who should invest in PPF?
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-700">
                    <li><strong>Conservative Investors</strong>: Who want guaranteed returns with zero risk.</li>
                    <li><strong>Tax Savers</strong>: Looking to maximize their 80C limit (₹1.5L).</li>
                    <li><strong>Retirement Planners</strong>: The tax-free corpus is an excellent addition to your retirement kitty alongside EPF and NPS.</li>
                    <li><strong>Self-Employed</strong>: Since they don't have EPF, PPF is their best debt instrument for long-term safety.</li>
                </ul>
            </section>
        </div>
    );
};

export default IndiaPPFContent;
