import { CheckCircle, HelpCircle, Calculator, ShoppingCart, IndianRupee } from 'lucide-react';

const IndiaGSTCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">GST Calculator India: Inclusive & Exclusive Rates</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The GST Calculator (India) helps you Calculate GST (Goods and Services Tax) instantly. Whether you need to find the GST-inclusive price for a bill or calculate the GST amount to be added to a base price, this tool handles all standard Indian GST slabs (5%, 12%, 18%, 28%) with precision.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Useful for business owners, freelancers, traders, and everyday consumers to verify bills.
                        </p>
                        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2 m-0">
                                <IndianRupee className="w-5 h-5" />
                                What is GST?
                            </h3>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300 m-0">
                                GST is a unified indirect tax across India. It replaced VAT, Service Tax, and Excise Duty. It is levied at every value addition stage, but the final consumer bears the cost.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Guide to GST Rates
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded">5%</span>
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Essential Items</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Food items, transport services.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xs font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded">12%</span>
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Key Goods</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Signaling devices, business services.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded">18%</span>
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Standard Rate (Most Common)</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Electronics, restaurants, professional services.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded">28%</span>
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Luxury & Sin Goods</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Cars, tobacco, premium appliances.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Inclusive vs Exclusive Calculation</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2 m-0">
                            <Calculator className="w-4 h-4 text-indigo-500" /> GST Exclusive (Add GST)
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            When GST is charged <strong>over and above</strong> the product price. Common in B2B invoices.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg font-mono text-xs border border-slate-200 dark:border-slate-700">
                            Final Price = Base Price + (Base Price × Rate/100)
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2 m-0">
                            <ShoppingCart className="w-4 h-4 text-purple-500" /> GST Inclusive (Allowances)
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            When the price <strong>already includes</strong> GST. This reverse calculation finds the actual base price.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg font-mono text-xs border border-slate-200 dark:border-slate-700">
                            GST Amount = Price - [Price ÷ (1 + Rate/100)]
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is GST calculated on MRP?", a: "MRP is always inclusive of all taxes, including GST." },
                        { q: "How is 18% GST split?", a: "For intra-state sales: 9% CGST + 9% SGST. For inter-state: 18% IGST." },
                        { q: "Who should use this?", a: "Shopkeepers, freelancers, CAs, and anyone making invoices." },
                        { q: "Is this calculator free?", a: "Yes. 100% free with no limits." }
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

export default IndiaGSTCalculatorContent;
