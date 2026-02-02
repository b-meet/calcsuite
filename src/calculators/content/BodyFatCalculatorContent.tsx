import { Ruler, Activity, Scale, Target, HelpCircle, CheckCircle, Info, Heart } from 'lucide-react';

const BodyFatCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Body Fat Calculator to Estimate Body Fat Percentage Accurately</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Body Fat Calculator helps estimate your body fat percentage using the US Navy Method. It provides a practical way to understand body composition without specialized equipment or calipers.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Body fat percentage offers deeper insight into health and fitness than weight alone.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <Activity className="w-5 h-5" />
                                What Is Body Fat Percentage?
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Body fat percentage represents the proportion of fat mass relative to total body weight. Unlike scale weight, it distinguishes between fat, muscle, bone, and water.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Target className="w-5 h-5 text-indigo-500" />
                            Why It Matters
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Shows true metabolic health
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Tracks fitness progress
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Reveals muscle-to-fat ratio
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Indicates long-term health trends
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How This Calculator Works</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    This calculator uses the US Navy Body Fat Formula, which estimates body fat based on specific body measurements.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                            <Ruler className="w-4 h-4 text-slate-500" /> Required Measurements
                        </h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {["Gender", "Height", "Waist Circumference", "Neck Circumference", "Hip (Females)"].map((item, idx) => (
                                <li key={idx} className="bg-white dark:bg-slate-800 p-2 rounded text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 text-center list-none">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm m-0">
                            <Info className="w-4 h-4 text-indigo-500" /> Measurement Tips
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-xs text-slate-500 dark:text-slate-400">Measure relaxed, not flexed</li>
                            <li className="text-xs text-slate-500 dark:text-slate-400">Use consistent posture</li>
                            <li className="text-xs text-slate-500 dark:text-slate-400">Measure at the same time of day</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-indigo-500" />
                        Body Fat vs BMI
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        BMI estimates body mass based on height and weight. It does not account for muscle or fat distribution.
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>BMI:</strong> General population screening
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>Body Fat %:</strong> Detailed composition insight
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>Use Both:</strong> Best context when interpreted together
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Understanding Ranges
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        General reference ranges include essential fat, athletic, fitness, average, and higher body fat ranges.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Ranges vary by gender
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Contextual, not judgments
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Influenced by age and activity
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20">
                        <p className="text-xs text-red-800 dark:text-red-300 italic">
                            "Body fat percentage is best used as a trend, not a single data point. Long-term patterns provide more meaningful insight."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is this body fat percentage exact?", a: "No. It is an estimate based on established formulas." },
                        { q: "How often should I calculate?", a: "Occasionally. Tracking monthly trends is best." },
                        { q: "Does this replace medical tests?", a: "No. It is informational, not diagnostic." },
                        { q: "Is this calculator free?", a: "Yes. Completely free to use." }
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

            {/* Footer */}
            <section className="bg-slate-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Accuracy and Respect</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Body Fat Calculator is designed to inform, not judge. It focuses on clarity, scientific grounding, and practical understanding. Better awareness leads to better decisions.
                </p>
            </section>
        </div>
    );
};

export default BodyFatCalculatorContent;
