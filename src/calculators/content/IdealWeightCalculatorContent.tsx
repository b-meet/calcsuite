import { Scale, Activity, Info, HelpCircle, CheckCircle, Heart, Ruler } from 'lucide-react';

const IdealWeightCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Ideal Weight Calculator for a Healthy Weight Range</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This Ideal Weight Calculator helps you estimate a healthy weight range based on your height and gender. It uses medically recognized formulas to provide a reference range rather than a single fixed number.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Ideal weight is not about appearance. It is about understanding general health ranges and body balance.
                        </p>
                        <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/10 rounded-xl border border-teal-100 dark:border-teal-900/30">
                            <h3 className="font-semibold text-teal-900 dark:text-teal-200 mb-2 flex items-center gap-2 m-0">
                                <Scale className="w-5 h-5" />
                                What Does “Ideal Weight” Mean?
                            </h3>
                            <p className="text-sm text-teal-800 dark:text-teal-300 m-0">
                                Ideal weight refers to a statistically healthy weight range associated with lower health risks for a given height and gender. It is not a perfect or mandatory target.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <TargetIcon className="w-5 h-5 text-indigo-500" />
                            Why Use It?
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> General health awareness
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Fitness goal planning
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Medical reference
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Basic understanding
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How This Calculator Works</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    This calculator estimates ideal weight using multiple established medical formulas to offer a balanced perspective.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                            <Activity className="w-4 h-4 text-slate-500" /> Formulas Used
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Robinson Formula (1983)",
                                "Miller Formula (1983)",
                                "Devine Formula (1974)",
                                "Hamwi Formula (1964)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm m-0">
                            <Info className="w-4 h-4 text-indigo-500" /> Why a Range?
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                            Human bodies vary due to bone structure, muscle mass, and genetics. A single number cannot account for everyone, so a range is more realistic.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-indigo-500" />
                        Ideal Weight vs BMI
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Ideal weight and BMI are related but different tools. Using both together provides better context.
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>BMI:</strong> Compares weight to height ratio
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            <strong>Ideal Weight:</strong> Medical reference range
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Important Reminders
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Health is influenced by more than weight alone.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Muscle vs Fat affects numbers
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Athletes may fall outside ranges
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Focus on energy and mobility
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is ideal weight the same for everyone?", a: "No. It varies by height, gender, and build." },
                        { q: "Should I aim exactly for this number?", a: "No. Treat it as a reference range, not a strict goal." },
                        { q: "Is this calculator free?", a: "Yes. Completely free to use." },
                        { q: "Does this replace medical advice?", a: "No. Always consult a doctor for medical guidance." }
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
                <h2 className="text-2xl font-bold mb-4 m-0">Built for Clarity and Respect</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                    CalcSuite’s Ideal Weight Calculator is designed to educate responsibly, respect body diversity, and encourage sustainable health awareness. Understanding your body starts with context, not comparison.
                </p>
            </section>
        </div>
    );
};

// Icon component needed for the layout but not imported from lucide-react in the top list
// Using a simple workaround or ensuring it's in the import list.
// Added Target to imports above, but used TargetIcon in code. Fixing.
function TargetIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}

export default IdealWeightCalculatorContent;
