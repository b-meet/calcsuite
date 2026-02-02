import { Activity, Scale, Info, Check, AlertTriangle, AlertCircle, TrendingUp, HelpCircle, User, Users } from 'lucide-react';

const BMICalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Grid */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is BMI (Body Mass Index)?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Body Mass Index, commonly known as BMI, is a numerical value calculated using a person’s weight and height. It provides a simple way to categorize body weight and identify potential health risks related to being underweight or overweight.
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                            BMI does not directly measure body fat, but it is strongly correlated with more direct measures of body fat in most people.
                        </p>
                    </div>
                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4 m-0">How BMI Is Calculated</h3>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center font-mono text-slate-700 dark:text-slate-300 text-sm mb-4 shadow-sm">
                            BMI = Weight ÷ (Height × Height)
                        </div>
                        <p className="text-xs text-indigo-700 dark:text-indigo-300 text-center">Weight in kg, Height in meters</p>
                    </div>
                </div>
            </section>

            {/* BMI Categories */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">BMI Categories Explained</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-blue-400 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Underweight</h3>
                        <p className="text-2xl font-bold text-blue-500 mb-2">&lt; 18.5</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Nutritional concern</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Normal</h3>
                        <p className="text-2xl font-bold text-green-500 mb-2">18.5 - 24.9</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Lower health risk</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Overweight</h3>
                        <p className="text-2xl font-bold text-orange-500 mb-2">25 - 29.9</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Increased risk</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 m-0">Obese</h3>
                        <p className="text-2xl font-bold text-red-500 mb-2">30+</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">High health risk</p>
                    </div>
                </div>
                <p className="text-center text-slate-500 text-sm mt-6">These categories help identify potential health risks and guide lifestyle decisions.</p>
            </section>

            {/* Why Used */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Why BMI Is Used Worldwide</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-sm text-indigo-500">
                            <Check className="w-6 h-6" />
                        </div>
                        <p className="font-medium text-slate-900 dark:text-white">Simple & Fast</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-sm text-indigo-500">
                            <Users className="w-6 h-6" />
                        </div>
                        <p className="font-medium text-slate-900 dark:text-white">Universal</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-sm text-indigo-500">
                            <Scale className="w-6 h-6" />
                        </div>
                        <p className="font-medium text-slate-900 dark:text-white">Assessment</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-3 shadow-sm text-indigo-500">
                            <Activity className="w-6 h-6" />
                        </div>
                        <p className="font-medium text-slate-900 dark:text-white">Research Backed</p>
                    </div>
                </div>
            </section>

            {/* What Result Means */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">What Your BMI Result Means</h2>
                <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start gap-4">
                        <div className="mt-1"><Check className="w-5 h-5 text-green-500" /></div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white m-0">Normal BMI</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-0 mt-2">Generally associated with lower risk of chronic conditions such as heart disease and diabetes.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start gap-4">
                        <div className="mt-1"><AlertTriangle className="w-5 h-5 text-orange-500" /></div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white m-0">High BMI</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-0 mt-2">May indicate increased risk for cardiovascular disease, high blood pressure, type 2 diabetes, and joint problems.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start gap-4">
                        <div className="mt-1"><AlertCircle className="w-5 h-5 text-blue-500" /></div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white m-0">Low BMI</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-0 mt-2">Can indicate nutritional deficiency, weakened immunity, or other health concerns.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contextual Info */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-indigo-500" />
                        BMI for Men and Women
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        The BMI formula is the same for men and women. However, men typically have more muscle mass, while women tend to have higher body fat percentages at the same BMI. This is why BMI is a screening tool, not a diagnostic test.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-indigo-500" />
                        Looking for Child BMI?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        BMI for children and teenagers is interpreted differently than for adults, using age and sex-specific growth charts. This calculator is primarily intended for adult assessment.
                    </p>
                </div>
            </section>

            {/* Limitations */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Limitations of BMI</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Does not distinguish between muscle & fat</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Athletes may register as 'overweight'</li>
                    </ul>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> No context for fat distribution</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Does not reflect individual health conditions</li>
                    </ul>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <strong>Note:</strong> Someone can have a normal BMI but high body fat, or a high BMI due to muscle mass. Using body fat percentage alongside BMI provides better insight.
                </p>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Is BMI accurate?", a: "BMI is a reliable screening tool for most adults, but it does not measure body fat directly." },
                        { q: "Can BMI predict health problems?", a: "BMI indicates risk levels, not specific health conditions. It should be used alongside other health indicators." },
                        { q: "Does BMI change with age?", a: "BMI categories remain the same for adults, but body composition may change with age." },
                        { q: "Is this BMI calculator free?", a: "Yes. It is completely free with no limitations." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 m-0">
                                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-8 mb-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Health Awareness */}
            <section className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">BMI and Overall Health Awareness</h2>
                <p className="text-emerald-50 max-w-2xl mx-auto mb-6">
                    BMI helps create awareness about weight-related health risks and encourages informed lifestyle choices. Consistent monitoring over time is more important than focusing on a single result.
                </p>
                <div className="inline-block bg-white/20 px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Designed for Clarity & Health Insight
                </div>
            </section>

        </div>
    );
};

export default BMICalculatorContent;
