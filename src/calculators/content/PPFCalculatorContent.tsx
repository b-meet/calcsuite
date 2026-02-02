import { Landmark, ShieldCheck, HelpCircle, CheckCircle, TrendingUp, Lock } from 'lucide-react';

const PPFCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">PPF Calculator: Plan Tax-Free Wealth</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The PPF Calculator helps you estimate the maturity value and interest earned on your Public Provident Fund (PPF) account. It is designed for long-term, risk-free wealth creation with EEE (Exempt-Exempt-Exempt) tax benefits under Indian laws.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            PPF is one of the most trusted government-backed savings schemes in India.
                        </p>
                        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2 m-0">
                                <ShieldCheck className="w-5 h-5" />
                                Why Invest in PPF?
                            </h3>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300 m-0">
                                It offers guaranteed returns, capital safety (Sovereign Guarantee), and complete tax exemption on investment, interest, and maturity amount.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Key PPF Rules
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Lock className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">15-Year Lock-in</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Can be extended in blocks of 5 years.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Landmark className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Investment Limit</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Min: ₹500/year. Max: ₹1.5 Lakh/year.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-sm text-slate-900 dark:text-white">Compound Interest</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Compounded annually, rate declared quarterly.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Smart Tip: Maximize PPF Returns</h2>

                <div className="flex items-start gap-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                        <TrendingUp className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg m-0">
                            Invest Before 5th of the Month!
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                            PPF interest is calculated on the <strong>lowest balance between the 5th and the last day of the month</strong>.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            If you deposit after the 5th, you lose interest for that entire month. To maximize returns, always deposit your contribution on or before the 5th.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Can I withdraw before 15 years?", a: "Partial withdrawals are allowed from the 7th financial year onwards." },
                        { q: "Can NRIs invest in PPF?", a: "NRIs cannot open new accounts but can continue existing ones." },
                        { q: "Is investment tax-free?", a: "Yes, up to ₹1.5 Lakh under Section 80C." },
                        { q: "What if I miss a year's deposit?", a: "Account becomes inactive. A penalty of ₹50/year + ₹500 min deposit is needed to revive it." }
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

export default PPFCalculatorContent;
