import { Users, CreditCard, Receipt, Coffee, Utensils, ThumbsUp, Globe, Info, Calculator, Percent } from 'lucide-react';

const globalTipData = [
    { country: 'United States', dining: '15% to 20%', note: 'Standard practice; tipping less than 15% is often seen as a sign of poor service.' },
    { country: 'United Kingdom', dining: '10% to 12.5%', note: 'Often added as a "service charge". If so, no extra tip is necessary.' },
    { country: 'Canada', dining: '15% to 20%', note: 'Similar to the US; tips are expected in sit-down restaurants.' },
    { country: 'Australia', dining: '10% (Optional)', note: 'Not strictly required, but appreciated for exceptional service in high-end venues.' },
    { country: 'France', dining: 'Round up (Optional)', note: 'Service is included (service compris), so only a small change or round-up is common.' },
    { country: 'Japan', dining: 'No Tipping', note: 'Tipping can be seen as impolite or confusing. Excellent service is the standard.' },
    { country: 'India', dining: '5% to 10%', note: 'Check for service charge first; if present, tips are discretionary.' }
];

const TipCalculatorContent = () => {
    return (
        <div className="space-y-16 not-prose">
            {/* Hero SEO Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Master the Art of Tipping</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Calculating the perfect tip shouldn't be a headache. Whether you're dining out, ordering delivery, or traveling abroad, our **Advanced Tip Calculator** helps you split bills fairly and tip accurately every time.
                </p>
            </section>

            {/* How it Works */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">How This Tip Calculator Works</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: '1', title: 'Enter Subtotal', desc: 'Input the bill amount before any taxes or extraneous charges.' },
                        { step: '2', title: 'Set Tip Level', desc: 'Choose a percentage (Standard is 15-20%) or a fixed amount.' },
                        { step: '3', title: 'Split (Optional)', desc: 'Enter the number of people sharing the bill for instant per-person math.' },
                        { step: '4', title: 'View Results', desc: 'Get your total tip, overall bill, and split amounts instantly.' }
                    ].map((item) => (
                        <div key={item.step} className="relative group">
                            <div className="text-4xl font-black text-slate-100 dark:text-slate-700 absolute -top-4 -left-2 group-hover:text-indigo-50 transition-colors">{item.step}</div>
                            <div className="relative">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scientific Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <Percent className="w-6 h-6 text-indigo-500" />
                        The Math Behind the Tip
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        Manually calculating a tip is a useful life skill. The standard formula used by our calculator is:
                    </p>
                    <div className="bg-slate-900 text-indigo-400 p-6 rounded-2xl font-mono text-sm mb-6 border-l-4 border-indigo-500 shadow-inner">
                        <div className="mb-2">// Standard Formula</div>
                        <div className="text-white font-bold">Total Tip = Bill Amount × (Tip % ÷ 100)</div>
                        <div className="mt-4 mb-2">// Split Formula</div>
                        <div className="text-white font-bold">Per Person = (Bill + Total Tip) ÷ People</div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Pro Tip: To calculate 20% in your head, find 10% (move the decimal one spot to the left) and double it!
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Should you tip on Tax?</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        This is one of the most common tipping questions. In most of North America, industry etiquette suggests that you **tip on the pre-tax subtotal**.
                    </p>
                    <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 mb-4">
                        <Info className="w-5 h-5 text-indigo-500 shrink-0" />
                        <p className="text-xs text-slate-500 dark:text-slate-400 m-0 italic">
                            Waiters and staff provide service regardless of the government sales tax. Tipping on the tax means you're tipping on money that goes straight to the state.
                        </p>
                    </div>
                </div>
            </section>

            {/* Global Table */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <Globe className="w-6 h-6 text-indigo-500" />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Global Tipping Guide (2026)</h2>
                </div>
                <div className="overflow-x-auto rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-900/60">
                            <tr>
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Country/Region</th>
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Typical Dining Tip</th>
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">The "Unwritten Rule"</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-800">
                            {globalTipData.map((row) => (
                                <tr key={row.country} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-5 text-sm font-black text-slate-900 dark:text-white">{row.country}</td>
                                    <td className="p-5 text-sm text-indigo-600 dark:text-indigo-400 font-black">{row.dining}</td>
                                    <td className="p-5 text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Scenarios Section */}
            <section className="bg-slate-900 dark:bg-indigo-950 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-indigo-300">Tipping Across Scenarios</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Utensils, label: 'Restaurants', desc: '15-20% is standard in US/CA. 10% in UK/IN.' },
                        { icon: Coffee, label: 'Cafes/Takeout', desc: 'Round up to nearest dollar or leave a small change (10%).' },
                        { icon: Users, label: 'Hotels/Service', desc: '$2-$5 per night for housekeeping; $1-$2 per bag for bellhops.' },
                        { icon: Receipt, label: 'Taxis/Rideshare', desc: '10-15% of the total fare. Round up for short distances.' },
                        { icon: CreditCard, label: 'Salons/Spas', desc: '15-20% for stylists/therapists is widely expected.' },
                        { icon: ThumbsUp, label: 'Delivery Apps', desc: '$3-$5 minimum, or 15% of the order total for heavy loads.' }
                    ].map((item) => (
                        <div key={item.label} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <item.icon className="w-6 h-6 mb-4 text-indigo-400" />
                            <h3 className="font-bold mb-2">{item.label}</h3>
                            <p className="text-sm text-indigo-100/70 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default TipCalculatorContent;

