import { Activity, Check, AlertTriangle, HelpCircle, ShieldCheck, Microscope } from 'lucide-react';

const BMICalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Grid */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is BMI (Body Mass Index)?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Body Mass Index (BMI) is a simple screening tool widely used to categorize body weight and estimate potential health risks. It is calculated by dividing a person's weight in kilograms by the square of their height in meters.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Check className="w-4 h-4 text-green-500" /> WHO Standard
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Check className="w-4 h-4 text-blue-500" /> Metric & Imperial
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4 m-0">The Formula</h3>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center font-mono text-slate-700 dark:text-slate-300 text-sm mb-4 shadow-sm border border-indigo-50 dark:border-slate-700">
                            BMI = Weight (kg) / Height² (m²)
                        </div>
                        <p className="text-xs text-indigo-700 dark:text-indigo-300 text-center">
                            *For lbs/in: weight (lb) / height² (in²) × 703
                        </p>
                    </div>
                </div>
            </section>

            {/* 🚨 HIGH VALUE: BMI for Indians Guide */}
            <section className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-8 border border-orange-100 dark:border-orange-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Activity className="w-32 h-32 text-orange-500" />
                </div>

                <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full uppercase tracking-wider">Important</span>
                        BMI for Indians: The Asian Paradox
                    </h2>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-3xl">
                        Did you know that <strong>global WHO standards usually underestimate health risks for South Asians?</strong> Due to a higher tendency to store visceral fat (fat around organs) even at lower body weights ("Skinny Fat"), the health ministry and Indian medical bodies recommend stricter BMI cutoffs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Comparison Table */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-orange-200 dark:border-orange-900/30">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-100">
                                    <tr>
                                        <th className="p-4 font-semibold">Category</th>
                                        <th className="p-4 font-semibold">Global (WHO)</th>
                                        <th className="p-4 font-semibold text-orange-700 dark:text-orange-300">Indian Standard</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-600 dark:text-slate-300">
                                    <tr>
                                        <td className="p-4 font-medium">Normal</td>
                                        <td className="p-4">18.5 - 24.9</td>
                                        <td className="p-4 font-bold text-green-600">18.5 - 22.9</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Overweight</td>
                                        <td className="p-4">25.0 - 29.9</td>
                                        <td className="p-4 font-bold text-orange-500">23.0 - 24.9</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Obese</td>
                                        <td className="p-4">30.0+</td>
                                        <td className="p-4 font-bold text-red-500">25.0+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Why it Matters */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-slate-900 dark:text-white">Why the Difference?</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span><strong>Lower Muscle Mass:</strong> South Asians typically have less lean muscle mass compared to Caucasians.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span><strong>Abdominal Obesity:</strong> Higher fat accumulation around the waist leads to higher metabolic risks like Diabetes Type 2.</span>
                                </li>
                            </ul>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-orange-100 dark:border-slate-700 mt-2">
                                <p className="text-xs text-slate-500 dark:text-slate-500 italic m-0">
                                    Source: Consensus Statement for Asian Indians, Association of Physicians of India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BMI Categories Visual */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Standard BMI Categories</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-blue-400 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Underweight</h3>
                        <p className="text-2xl font-bold text-blue-500 mb-2">&lt; 18.5</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Nutritional concern</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-green-500 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Normal</h3>
                        <p className="text-2xl font-bold text-green-500 mb-2">18.5 - 24.9</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Lower health risk</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Overweight</h3>
                        <p className="text-2xl font-bold text-orange-500 mb-2">25 - 29.9</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Increased risk</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-red-500 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Obese</h3>
                        <p className="text-2xl font-bold text-red-500 mb-2">30+</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">High health risk</p>
                    </div>
                </div>
            </section>

            {/* FAQs - Consolidated & Clean */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white mb-3 m-0">
                            <HelpCircle className="w-5 h-5 text-indigo-500" />
                            Is BMI accurate for everyone?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed m-0">
                            BMI is a screening tool, not a diagnosis. It may NOT be accurate for athletes (due to muscle mass), pregnant women, and the elderly.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white mb-3 m-0">
                            <HelpCircle className="w-5 h-5 text-indigo-500" />
                            Is this calculator free?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed m-0">
                            Yes, this tool is 100% free and can be used unlimited times for checking BMI for men, women, and seniors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Signals & Citations */}
            <section className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Medically Reviewed</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white m-0">Data aligns with WHO & Ministry of Health Guidelines</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Citations & Sources</p>
                        <div className="flex gap-4 text-xs">
                            <a
                                href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
                            >
                                <Microscope className="w-3 h-3" /> WHO Overview
                            </a>
                            <a
                                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2800898/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
                            >
                                <Activity className="w-3 h-3" /> Indian Consensus (JAPI)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BMICalculatorContent;
