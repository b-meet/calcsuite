import { CheckCircle, AlertOctagon } from 'lucide-react';

const IndiaHRAContent = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Understanding HRA Exemption Rules (Section 10(13A))
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    House Rent Allowance (HRA) is one of the most significant tax-saving components in a salaried individual's payslip.
                    Under Section 10(13A) of the Income Tax Act, the exemption is calculated as the <strong>minimum</strong> of three values.
                </p>
                <div className="grid md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <span className="text-3xl font-bold text-blue-600 block mb-2">1</span>
                        <p className="text-sm font-medium text-slate-700">Actual HRA Received</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <span className="text-3xl font-bold text-blue-600 block mb-2">2</span>
                        <p className="text-sm font-medium text-slate-700">Rent Paid - 10% of Basic</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <span className="text-3xl font-bold text-blue-600 block mb-2">3</span>
                        <p className="text-sm font-medium text-slate-700">50% (Metro) / 40% (Non-Metro) of Basic</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Can I pay rent to my parents?
                </h2>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-6">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-700 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-green-900 mb-2">Yes, absolutely legal.</h3>
                            <p className="text-green-800 leading-relaxed">
                                If you live with your parents, you can pay them rent and claim HRA exemption. However, you must follow these rules to satisfy the Income Tax Department:
                            </p>
                        </div>
                    </div>
                    <ul className="list-disc pl-14 mt-4 space-y-2 text-green-800">
                        <li><strong>Rent Agreement</strong>: Execute a formal rental agreement with your parent (landlord).</li>
                        <li><strong>Bank Transfers</strong>: Transfer rent monthly via bank (NEFT/UPI). Avoid cash.</li>
                        <li><strong>ITR Filing</strong>: Your parent must declare this rental income in their Income Tax Return.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Metro vs Non-Metro City Rule
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    The definition of a "Metro" for HRA purposes is restricted to only 4 cities in India. Even major IT hubs are considered non-metro for HRA.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-100 border-b border-slate-200">
                                <th className="p-4 font-semibold text-slate-900">Category</th>
                                <th className="p-4 font-semibold text-slate-900">Exemption Limit</th>
                                <th className="p-4 font-semibold text-slate-900">Cities</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 font-medium text-blue-700">Metro</td>
                                <td className="p-4">50% of Basic Salary</td>
                                <td className="p-4">Delhi, Mumbai, Kolkata, Chennai (Only 4)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-slate-700">Non-Metro</td>
                                <td className="p-4">40% of Basic Salary</td>
                                <td className="p-4">Bangalore, Hyderabad, Pune, Gurgaon, Ahmedabad, etc.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-8">
                <div className="flex items-start gap-4 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <AlertOctagon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-yellow-900 mb-1">New Tax Regime Note</h4>
                        <p className="text-sm text-yellow-800">
                            HRA Exemption is <strong>NOT available</strong> under the New Tax Regime (FY 2024-25 onwards). You can only claim HRA if you opt for the Old Tax Regime.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndiaHRAContent;
