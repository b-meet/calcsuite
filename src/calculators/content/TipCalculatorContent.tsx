import { Users, CreditCard, Receipt, Coffee, Utensils, ThumbsUp, Globe, Info, Calculator, Percent, HelpCircle, MapPin } from 'lucide-react';

const globalTipData = [
    { country: 'United States', dining: '15% to 20%', delivery: '15% to 20%', rideshare: '10% to 15%', note: 'Standard practice; tipping less than 15% is often seen as a sign of poor service.' },
    { country: 'Canada', dining: '15% to 20%', delivery: '15% to 20%', rideshare: '10% to 15%', note: 'Similar to the US; tips are expected in sit-down restaurants.' },
    { country: 'United Kingdom', dining: '10% to 12.5%', delivery: '10%', rideshare: 'Round up', note: 'Often added as a "service charge". If so, no extra tip is necessary.' },
    { country: 'Australia', dining: '10% (Optional)', delivery: 'Not expected', rideshare: 'Round up', note: 'Not strictly required, but appreciated for exceptional service in high-end venues.' },
    { country: 'France', dining: 'Round up', delivery: '1-2€', rideshare: 'Round up', note: 'Service is included (service compris), so only a small change or round-up is common.' },
    { country: 'Germany', dining: '5% to 10%', delivery: 'Round up', rideshare: 'Round up', note: 'Rounding up the bill is standard. Say the total you want to pay when handing cash.' },
    { country: 'India', dining: '5% to 10%', delivery: '₹20-50', rideshare: 'Round up', note: 'Check for service charge first; if present, tips are discretionary.' },
    { country: 'Japan', dining: 'No Tipping', delivery: 'No Tipping', rideshare: 'No Tipping', note: 'Tipping can be seen as impolite or confusing. Excellent service is the standard.' },
    { country: 'China', dining: 'Not expected', delivery: 'Not expected', rideshare: 'Not expected', note: 'Tipping is rare outside international hotels and tourist areas.' },
    { country: 'Mexico', dining: '10% to 15%', delivery: '10%', rideshare: '10%', note: 'Propina is appreciated. Check if "servicio" is already on the bill.' }
];

const quickTipTable = [
    { bill: '$20', tip10: '$2.00', tip15: '$3.00', tip18: '$3.60', tip20: '$4.00', tip25: '$5.00' },
    { bill: '$30', tip10: '$3.00', tip15: '$4.50', tip18: '$5.40', tip20: '$6.00', tip25: '$7.50' },
    { bill: '$50', tip10: '$5.00', tip15: '$7.50', tip18: '$9.00', tip20: '$10.00', tip25: '$12.50' },
    { bill: '$75', tip10: '$7.50', tip15: '$11.25', tip18: '$13.50', tip20: '$15.00', tip25: '$18.75' },
    { bill: '$100', tip10: '$10.00', tip15: '$15.00', tip18: '$18.00', tip20: '$20.00', tip25: '$25.00' },
    { bill: '$150', tip10: '$15.00', tip15: '$22.50', tip18: '$27.00', tip20: '$30.00', tip25: '$37.50' },
    { bill: '$200', tip10: '$20.00', tip15: '$30.00', tip18: '$36.00', tip20: '$40.00', tip25: '$50.00' },
];

const TipCalculatorContent = () => {
    return (
        <div className="space-y-16 not-prose">
            {/* Hero SEO Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">How to Calculate a Tip — The Complete Guide</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Whether you are dining at a restaurant, ordering delivery, taking a rideshare, or visiting a salon, knowing how to calculate the right tip saves you time and awkward moments. This guide covers the tip formula, standard percentages by service type, and tipping customs in 10 countries.
                </p>
            </section>

            {/* The Tip Formula */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Percent className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">The Tip Formula Explained</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            The basic formula for calculating a tip is straightforward. You multiply the bill amount by the tip percentage, then divide by 100. If you are splitting the bill, divide the total (bill + tip) by the number of people.
                        </p>
                        <div className="bg-slate-900 text-indigo-400 p-6 rounded-2xl font-mono text-sm mb-6 border-l-4 border-indigo-500 shadow-inner space-y-4">
                            <div>
                                <div className="mb-1 text-slate-400">// Tip Amount</div>
                                <div className="text-white font-bold">Tip = Bill Amount × (Tip % ÷ 100)</div>
                            </div>
                            <div>
                                <div className="mb-1 text-slate-400">// Total Bill</div>
                                <div className="text-white font-bold">Total = Bill + Tax + Tip</div>
                            </div>
                            <div>
                                <div className="mb-1 text-slate-400">// Per Person (Split)</div>
                                <div className="text-white font-bold">Each Pays = Total ÷ Number of People</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Quick Mental Math Trick</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                To calculate <strong>20%</strong> in your head, find 10% (move the decimal one place left) and double it. For <strong>15%</strong>, find 10% and add half of that.
                            </p>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800 text-sm">
                                <p className="text-slate-700 dark:text-slate-300 mb-1"><strong>Example:</strong> Bill = $86</p>
                                <p className="text-slate-600 dark:text-slate-400">10% = $8.60 → 20% tip = <strong className="text-indigo-600 dark:text-indigo-400">$17.20</strong></p>
                                <p className="text-slate-600 dark:text-slate-400">15% = $8.60 + $4.30 = <strong className="text-indigo-600 dark:text-indigo-400">$12.90</strong></p>
                            </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-indigo-500" />
                                Should You Tip on Tax?
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                In most of North America, industry etiquette says tip on the <strong>pre-tax subtotal</strong>. The tax portion goes to the government, not the server. This calculator supports both pre-tax and post-tax tipping with a simple toggle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Tip Reference Table */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <Calculator className="w-6 h-6 text-indigo-500" />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Quick Tip Reference Table</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Use this table to quickly look up tip amounts for common bill sizes. All amounts are calculated on the pre-tax subtotal.
                </p>
                <div className="overflow-x-auto rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-900/60">
                            <tr>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">Bill</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">10%</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">15%</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">18%</th>
                                <th className="p-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">20%</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">25%</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-800">
                            {quickTipTable.map((row) => (
                                <tr key={row.bill} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 text-sm font-black text-slate-900 dark:text-white">{row.bill}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.tip10}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.tip15}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.tip18}</td>
                                    <td className="p-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">{row.tip20}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.tip25}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* How the Calculator Works */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">How This Tip Calculator Works</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: '1', title: 'Enter Bill Amount', desc: 'Type your total bill before taxes. The calculator supports USD, EUR, GBP, and INR currencies.' },
                        { step: '2', title: 'Choose Tip Level', desc: 'Select a preset percentage (10%-25%) or use the slider for a custom amount. You can also enter a fixed tip amount.' },
                        { step: '3', title: 'Add Tax & Options', desc: 'Optionally enter the tax rate, toggle pre-tax tipping, and choose your rounding preference (none, round tip, or round total).' },
                        { step: '4', title: 'Split the Bill', desc: 'Enter the number of people to see each person\'s share. View the comparison table to pick the best tip percentage.' }
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

            {/* Tipping by Service Type */}
            <section className="bg-slate-900 dark:bg-indigo-950 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-2xl font-bold mb-2 text-center">How Much to Tip by Service Type</h2>
                <p className="text-center text-indigo-200/70 mb-8 text-sm">Recommended tip percentages for common scenarios in the United States</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Utensils, label: 'Sit-Down Restaurants', pct: '15% – 20%', desc: 'Standard for table service. Tip on the pre-tax subtotal. 20% or more for excellent service.' },
                        { icon: Coffee, label: 'Cafes & Counter Service', pct: '10% – 15%', desc: 'Optional but appreciated. $1-$2 per drink for baristas. Round up at food counters.' },
                        { icon: Users, label: 'Buffet Dining', pct: '10%', desc: 'For staff who clear plates, refill drinks, and maintain the dining area.' },
                        { icon: Receipt, label: 'Food Delivery', pct: '15% – 20%', desc: '$3-$5 minimum. Tip more for large orders, bad weather, or long distances.' },
                        { icon: CreditCard, label: 'Rideshare (Uber/Lyft)', pct: '10% – 15%', desc: '100% of the tip goes to the driver. Round up for short trips.' },
                        { icon: ThumbsUp, label: 'Hair Salon / Barber', pct: '15% – 20%', desc: 'Based on total service cost. $3-$5 extra for the shampoo assistant.' },
                        { icon: Users, label: 'Hotel Housekeeping', pct: '$2 – $5/night', desc: 'Leave tip daily (not at checkout) since different staff may clean each day.' },
                        { icon: Receipt, label: 'Taxi / Airport Transfer', pct: '10% – 15%', desc: 'Standard for taxi rides. $1-$2 per bag if the driver helps with luggage.' },
                        { icon: CreditCard, label: 'Spa & Massage', pct: '15% – 20%', desc: 'Tip the therapist directly. Check if gratuity is already included.' }
                    ].map((item) => (
                        <div key={item.label} className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <item.icon className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-sm">{item.label}</h3>
                            </div>
                            <p className="text-lg font-black text-indigo-400 mb-2">{item.pct}</p>
                            <p className="text-xs text-indigo-100/60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Tipping Guide Table */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-indigo-500" />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Global Tipping Guide by Country (2026)</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Tipping customs vary widely around the world. This table covers the standard expectations for dining, delivery, and rideshare in 10 countries so you know exactly what to do when traveling.
                </p>
                <div className="overflow-x-auto rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-900/60">
                            <tr>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Country</div>
                                </th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Dining</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Delivery</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Rideshare</th>
                                <th className="p-4 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-800">
                            {globalTipData.map((row) => (
                                <tr key={row.country} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 text-sm font-black text-slate-900 dark:text-white">{row.country}</td>
                                    <td className="p-4 text-sm text-indigo-600 dark:text-indigo-400 font-bold">{row.dining}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.delivery}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.rideshare}</td>
                                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed max-w-xs">{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* When Not to Tip */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-indigo-500" />
                        When a Tip Is Not Required
                    </h2>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2 leading-relaxed">• When a <strong>service charge</strong> is already included on the bill (common in the UK, India, and parts of Europe).</li>
                        <li className="flex gap-2 leading-relaxed">• In countries where tipping is <strong>not part of the culture</strong> (Japan, South Korea, China).</li>
                        <li className="flex gap-2 leading-relaxed">• For <strong>takeout or counter pickup</strong> where no table service was provided (though small tips are always welcome).</li>
                        <li className="flex gap-2 leading-relaxed">• At <strong>fast food</strong> restaurants where staff are paid a full hourly wage and service is self-serve.</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5 text-indigo-500" />
                        When to Tip More Than 20%
                    </h2>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2 leading-relaxed">• For <strong>exceptional service</strong> — going above and beyond, special dietary accommodations, or handling a difficult situation with grace.</li>
                        <li className="flex gap-2 leading-relaxed">• During <strong>holidays</strong> (Christmas, New Year, Thanksgiving) when staff work instead of spending time with family.</li>
                        <li className="flex gap-2 leading-relaxed">• For <strong>large group dining</strong> (6+ people) since serving a large table requires significantly more effort.</li>
                        <li className="flex gap-2 leading-relaxed">• For <strong>delivery in bad weather</strong> (rain, snow, extreme heat) — drivers take real physical risks for your convenience.</li>
                    </ul>
                </div>
            </section>

            {/* India-specific Section (targets "tip calculator india" keyword) */}
            <section className="bg-gradient-to-br from-orange-50 to-green-50 dark:from-orange-900/10 dark:to-green-900/10 rounded-3xl p-8 md:p-12 border border-orange-100 dark:border-orange-900/20">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Tipping in India — A Complete Guide</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Tipping customs in India are different from the US or Europe. Many restaurants add a service charge (usually 5% to 10%), which functions as a built-in gratuity. Here is a quick guide for tipping in India across common scenarios.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { service: 'Restaurant (Dine-in)', tip: '5% – 10%', note: 'Check if service charge is already added. If yes, extra tip is optional.' },
                        { service: 'Food Delivery (Swiggy/Zomato)', tip: '₹20 – ₹50', note: 'In-app tipping is available. Cash tips are always appreciated.' },
                        { service: 'Auto/Cab (Ola/Uber)', tip: 'Round up', note: 'Rounding up the fare is common. In-app tip is optional.' },
                        { service: 'Hotel Bellboy', tip: '₹50 – ₹100', note: 'Per trip for carrying luggage to your room.' },
                        { service: 'Housekeeping', tip: '₹50 – ₹100/day', note: 'Leave on the pillow or nightstand each morning.' },
                        { service: 'Salon/Spa', tip: '₹50 – ₹200', note: 'Based on service cost. 10% is a fair guideline.' }
                    ].map((item) => (
                        <div key={item.service} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
                            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{item.service}</h3>
                            <p className="text-lg font-black text-indigo-600 dark:text-indigo-400 mb-2">{item.tip}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.note}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default TipCalculatorContent;
