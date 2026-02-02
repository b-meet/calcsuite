import { Home, Calculator, AlertTriangle, HelpCircle, CheckCircle, MapPin, DollarSign } from 'lucide-react';

const HRACalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">HRA Calculator: Calculate Exemption & Save Tax</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This HRA Calculator helps salaried employees calculate the taxable and tax-exempt portion of their House Rent Allowance (HRA). By understanding your HRA exemption, you can optimize your tax planning and reduce your liability.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            HRA exemption is one of the most effective tax-saving tools for employees living in rented accommodation.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <Home className="w-5 h-5" />
                                What is HRA?
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300 m-0">
                                House Rent Allowance (HRA) is a component of your salary paid by your employer to meet rental expenses. Section 10(13A) of the Income Tax Act allows a partial or full exemption on this allowance.
                            </p>
                        </div>

                        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
                            <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2 m-0 text-sm">
                                <AlertTriangle className="w-4 h-4" />
                                Important
                            </h3>
                            <p className="text-xs text-amber-800 dark:text-amber-300 m-0">
                                HRA exemption is <strong>only available under the Old Tax Regime</strong>. If you opt for the New Tax Regime, you cannot claim HRA.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        Who Should Use This?
                    </h3>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <CheckCircle className="w-3 h-3 text-emerald-500" /> Salaried employees paying rent
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <CheckCircle className="w-3 h-3 text-emerald-500" /> Residents of Metro/Non-Metro cities
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <CheckCircle className="w-3 h-3 text-emerald-500" /> Employees planning tax savings
                        </li>
                    </ul>

                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        Exemption Rules
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                        The exemption is the <strong>lowest</strong> of the following three:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <DollarSign className="w-4 h-4 text-green-500" /> Actual HRA Received
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <MapPin className="w-4 h-4 text-red-500" /> 50% of Salary (Metro) / 40% (Non-Metro)
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <Calculator className="w-4 h-4 text-blue-500" /> Rent Paid minus 10% of Salary
                        </li>
                    </ul>
                </div>
            </section >

            {/* Metro vs Non-Metro */}
            < section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800" >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Metro vs. Non-Metro Cities</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Your city of residence affects your HRA exemption limit. Basic salary percentage limits differ based on location.
                        </p>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                            <MapPin className="w-4 h-4 text-slate-500" /> City Classifications
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                                <div className="flex justify-between items-center mb-1">
                                    <strong className="text-sm text-slate-900 dark:text-white">Metro Cities</strong>
                                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">50% of Basic</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Delhi, Mumbai, Kolkata, Chennai</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                                <div className="flex justify-between items-center mb-1">
                                    <strong className="text-sm text-slate-900 dark:text-white">Non-Metro Cities</strong>
                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">40% of Basic</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">All other cities and towns (e.g., Bangalore, Hyderabad, Pune)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-900/30">
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2 m-0">
                            <AlertTriangle className="w-5 h-5" /> Important Note
                        </h3>
                        <p className="text-sm text-amber-800 dark:text-amber-300 mb-4">
                            To claim HRA exemption:
                        </p>
                        <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300 list-disc pl-4">
                            <li>You must actually pay rent.</li>
                            <li>The rented house must not be owned by you.</li>
                            <li>You can pay rent to parents (but they must declare it as income).</li>
                            <li>You generally cannot pay rent to your spouse.</li>
                            <li>If rent &gt; ₹1 Lakh/year, landlord's PAN is mandatory.</li>
                        </ul>
                    </div>
                </div>
            </section >


            {/* FAQs */}
            < section >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Can I claim HRA and Home Loan Deduction together?", a: "Yes. If you own a house in another city or live in a rented house." },
                        { q: "What is 'Salary' for HRA?", a: "Salary = Basic Pay + Dearness Allowance (DA)." },
                        { q: "Do I need rent receipts?", a: "Yes. Employers require rent receipts as proof." },
                        { q: "Can I pay rent to my parents?", a: "Yes, and claim HRA. But parents must file taxes on that income." }
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
            </section >
        </div >
    );
};

export default HRACalculatorContent;
