import { Users, CreditCard, Receipt, Coffee, Utensils, ThumbsUp, MapPin } from 'lucide-react';

const cityTipRows = [
    { city: 'Mumbai', dining: '5% to 10%', note: 'Common in dine-in restaurants, especially if service charge is not already added.' },
    { city: 'Delhi NCR', dining: '5% to 10%', note: 'Many people round up the bill or leave a modest percentage for attentive service.' },
    { city: 'Bengaluru', dining: '5% to 10%', note: 'Popular for cafes, pubs, and delivery when service feels personal or quick.' },
    { city: 'Hyderabad', dining: '5% to 8%', note: 'Casual dining often sees round-up tips, with higher tips in premium restaurants.' },
    { city: 'Chennai', dining: '5% to 8%', note: 'A smaller percentage or round-up is common unless the venue is upscale.' },
    { city: 'Goa', dining: '7% to 10%', note: 'Tourist-heavy restaurants and beach venues often see slightly higher discretionary tips.' }
];

const TipCalculatorContent = () => {
    return (
        <div className="space-y-12 not-prose">
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How This Tip Calculator Works</h2>
                <div className="grid sm:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enter Bill Amount</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Choose Tip %</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Select People</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-3">
                            <Receipt className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">View Result</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Why Use a Tip Calculator?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                            <ThumbsUp className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Fairness</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-0 mt-1">Split bills evenly without awkward rounding errors.</p>
                        </div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center gap-4">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                            <CreditCard className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white m-0">Accuracy</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-0 mt-1">Avoid mental math mistakes when bills include taxes or shared orders.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-6">
                    <MapPin className="w-5 h-5 text-indigo-500" />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Common Tipping Percentages in Indian Cities</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    These are broad, practical ranges for <strong>good service when a service charge is not already included</strong>. Tipping in India is usually discretionary, so rounding up is still common in many casual settings.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                        <thead className="bg-slate-50 dark:bg-slate-900/60">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-slate-900 dark:text-white">City</th>
                                <th className="p-4 text-sm font-semibold text-slate-900 dark:text-white">Typical Restaurant Tip</th>
                                <th className="p-4 text-sm font-semibold text-slate-900 dark:text-white">Common Note</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-800">
                            {cityTipRows.map((row) => (
                                <tr key={row.city}>
                                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{row.city}</td>
                                    <td className="p-4 text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{row.dining}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    Quick rule: in cafes, food delivery, taxis, and salons, many people simply round up or leave a small fixed tip in rupees.
                </p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Tip vs Service Charge in India</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">Tip</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                            A tip is voluntary. You decide how much to leave based on service quality, convenience, and local customs.
                        </p>
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">Service Charge</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                            A service charge is a separate bill component. If it is already included, many diners skip an extra tip or leave only a small round-up amount.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">When This Calculator Is Useful</h2>
                <div className="flex flex-wrap gap-3">
                    {[
                        { icon: Utensils, label: 'Restaurants & Cafes' },
                        { icon: Users, label: 'Group Dining' },
                        { icon: Coffee, label: 'Salon & Services' },
                        { icon: Receipt, label: 'Splitting Bills' }
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 text-sm font-medium">
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TipCalculatorContent;
