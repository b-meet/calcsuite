import { Flame, Activity, Target, HelpCircle, CheckCircle, Heart } from 'lucide-react';

const CalorieCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Calorie Calculator to Find Your Daily Energy Needs</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Calorie Calculator helps you estimate how many calories your body needs each day based on age, gender, height, weight, and activity level. It calculates Total Daily Energy Expenditure (TDEE) and provides calorie targets for maintaining weight, gradual weight loss, or healthy weight gain.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Understanding calorie needs is the foundation of sustainable nutrition and long-term health.
                        </p>
                        <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                            <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2 flex items-center gap-2 m-0">
                                <Flame className="w-5 h-5" />
                                What Are Calories?
                            </h3>
                            <p className="text-sm text-orange-800 dark:text-orange-300">
                                Calories are units of energy. Your body uses calories to perform basic functions such as breathing, digestion, movement, and physical activity.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Target className="w-5 h-5 text-indigo-500" />
                            Why They Matter
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Energy levels
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Body weight management
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Physical performance
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Overall health
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* TDEE Explained */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Understanding TDEE</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    TDEE stands for Total Daily Energy Expenditure. It represents the total number of calories your body burns in a day, including activity and basic bodily functions.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">Maintain Weight</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Stable lifestyle calories</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg mb-1">Weight Loss</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Modest calorie reduction</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm text-center border border-slate-100 dark:border-slate-700">
                        <div className="text-orange-600 dark:text-orange-400 font-bold text-lg mb-1">Weight Gain</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Controlled calorie increase</div>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-indigo-500" />
                        Activity Level Matters
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Activity level plays a major role in calorie needs. Choosing the correct activity level improves accuracy.
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Sedentary (Little to no exercise)
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Light Active (Exercise 1-3 days/week)
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Moderately Active (Exercise 3-5 days/week)
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Very Active (Hard exercise 6-7 days/week)
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Long-Term Health
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Calories are not just about weight. They affect recovery, hormones, focus, and daily performance.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Consistent eating habits
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Realistic calorie targets
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Listening to body signals
                        </li>
                    </ul>
                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20">
                        <p className="text-xs text-red-800 dark:text-red-300 italic">
                            "Healthy progress comes from consistency, not perfection."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Are these calorie numbers exact?", a: "No. They are estimates based on averages and assumptions." },
                        { q: "Can calorie needs change over time?", a: "Yes. Weight, activity, and age can affect calorie requirements." },
                        { q: "Does this replace professional advice?", a: "No. It is an informational tool, not medical guidance." },
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
                <h2 className="text-2xl font-bold mb-4 m-0">Designed for Clarity and Balance</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Calorie Calculator focuses on clarity, realism, and long-term thinking. It helps users understand their bodies better and build healthier habits over time.
                </p>
            </section>
        </div>
    );
};

export default CalorieCalculatorContent;
