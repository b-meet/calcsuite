import { CheckCircle, AlertOctagon } from 'lucide-react';

const IndiaHRAContent = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Understanding HRA Exemption Rules (Section 10(13A))
                </h2>
                <p className="text-slate-600 dark:text-slate-200 leading-relaxed mb-6">
                    House Rent Allowance (HRA) is one of the most significant tax-saving components in a salaried individual's payslip.
                    Under Section 10(13A) of the Income Tax Act, the exemption is calculated as the <strong>minimum</strong> of three values.
                </p>
                <div className="grid md:grid-cols-3 gap-6 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700">
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 block mb-2">1</span>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Actual HRA Received</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700">
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 block mb-2">2</span>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Rent Paid - 10% of Basic</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700">
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 block mb-2">3</span>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">50% (Metro) / 40% (Non-Metro) of Basic</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Can I pay rent to my parents?
                </h2>
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-2xl border border-green-100 dark:border-green-800 mb-6">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-700 dark:text-green-400 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">Yes, absolutely legal.</h3>
                            <p className="text-green-800 dark:text-green-100 leading-relaxed">
                                If you live with your parents, you can pay them rent and claim HRA exemption. However, you must follow these rules to satisfy the Income Tax Department:
                            </p>
                        </div>
                    </div>
                    <ul className="list-disc pl-14 mt-4 space-y-2 text-green-800 dark:text-green-100">
                        <li><strong>Rent Agreement</strong>: Execute a formal rental agreement with your parent (landlord).</li>
                        <li><strong>Bank Transfers</strong>: Transfer rent monthly via bank (NEFT/UPI). Avoid cash.</li>
                        <li><strong>ITR Filing</strong>: Your parent must declare this rental income in their Income Tax Return.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-transparent dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Metro vs Non-Metro City Rule
                </h2>
                <p className="text-slate-600 dark:text-slate-200 leading-relaxed mb-4">
                    The definition of a "Metro" for HRA purposes is restricted to only 4 cities in India. Even major IT hubs are considered non-metro for HRA.
                </p>
                <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                <th className="p-4 font-semibold text-slate-900 dark:text-white">Category</th>
                                <th className="p-4 font-semibold text-slate-900 dark:text-white">Exemption Limit</th>
                                <th className="p-4 font-semibold text-slate-900 dark:text-white">Cities</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-4 font-medium text-blue-700 dark:text-blue-300">Metro</td>
                                <td className="p-4 text-slate-600 dark:text-slate-300">50% of Basic Salary</td>
                                <td className="p-4 text-slate-600 dark:text-slate-300">Delhi, Mumbai, Kolkata, Chennai (Only 4)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-slate-700 dark:text-slate-300">Non-Metro</td>
                                <td className="p-4 text-slate-600 dark:text-slate-300">40% of Basic Salary</td>
                                <td className="p-4 text-slate-600 dark:text-slate-300">Bangalore, Hyderabad, Pune, Gurgaon, Ahmedabad, etc.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-8">
                <div className="flex items-start gap-4 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <AlertOctagon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-1">New Tax Regime Note</h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-100">
                            HRA Exemption is <strong>NOT available</strong> under the New Tax Regime (FY 2024-25 onwards). You can only claim HRA if you opt for the Old Tax Regime.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndiaHRAContent;
