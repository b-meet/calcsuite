import { Flame, Activity, Scale, Target, HelpCircle, CheckCircle, Info, Battery } from 'lucide-react';

const BMRCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">BMR Calculator to Understand Your Body’s Energy Needs at Rest</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This BMR Calculator helps you estimate your Basal Metabolic Rate, the number of calories your body burns each day at complete rest. BMR represents the minimum energy required to keep vital functions running, including breathing, circulation, and temperature regulation.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Understanding your BMR is a key step toward smarter nutrition and long-term health planning.
                        </p>
                        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2 m-0">
                                <Activity className="w-5 h-5" />
                                What Is Basal Metabolic Rate (BMR)?
                            </h3>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300 m-0">
                                Basal Metabolic Rate is the amount of energy your body uses to sustain life when you are not performing any physical activity. Even at rest, your body is constantly working.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Target className="w-5 h-5 text-indigo-500" />
                            Why BMR Matters
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Daily calorie needs
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Weight management
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Nutrition planning
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Metabolic awareness
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How This Calculator Works</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    This calculator estimates BMR using widely accepted metabolic formulas that factor in age, gender, height, and weight.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                            <Battery className="w-4 h-4 text-slate-500" /> Key Inputs
                        </h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {["Age", "Gender", "Height", "Weight"].map((item, idx) => (
                                <li key={idx} className="bg-white dark:bg-slate-800 p-2 rounded text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 text-center list-none">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm m-0">
                            <Info className="w-4 h-4 text-indigo-500" /> Resting State
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                            The result represents the calories your body needs each day to function at complete rest, without accounting for any physical activity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-indigo-500" />
                        BMR vs TDEE
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        BMR measures calories burned at rest. TDEE includes activity, movement, and exercise.
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>BMR:</strong> Baseline survival energy
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>TDEE:</strong> Total daily energy burn
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>Relation:</strong> TDEE builds on top of BMR
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Flame className="w-5 h-5 text-orange-500" />
                        Influencing Factors
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Several factors affect BMR naturally, including body size, muscle mass, age, and hormones.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Muscle mass increases BMR
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> BMR decreases with age
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Men generally have higher BMR
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is BMR the same as daily calorie burn?", a: "No. BMR reflects resting energy needs only." },
                        { q: "Can BMR change over time?", a: "Yes. Age, body composition, and lifestyle affect it." },
                        { q: "Does this calculator include activity?", a: "No. It calculates resting energy needs only." },
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
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Simplicity and Accuracy</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s BMR Calculator is designed to explain metabolic basics clearly and responsibly. It helps users understand how their bodies work without overwhelming them with complexity.
                </p>
            </section>
        </div>
    );
};

export default BMRCalculatorContent;
