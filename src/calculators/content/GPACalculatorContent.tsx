import { BookOpen, TrendingUp, CheckCircle, HelpCircle, Award, Target } from 'lucide-react';

const GPACalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">GPA Calculator: Track Your Academic Success</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The GPA Calculator helps you accurately calculate your Grade Point Average (GPA) for high school or college. Enter your course grades and credit hours to instantly see your semester or cumulative GPA.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            This tool is perfect for students who want clarity on academic performance, scholarship eligibility, or future planning.
                        </p>

                        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-900/30">
                            <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2 m-0">
                                <Award className="w-5 h-5" />
                                Why GPA Matters?
                            </h3>
                            <p className="text-sm text-purple-800 dark:text-purple-300">
                                Colleges, universities, and employers often use GPA to evaluate consistency, discipline, and subject mastery. A strong GPA opens doors to admissions, scholarships, and job opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Key Features
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <BookOpen className="w-4 h-4 text-emerald-500" /> Supports multiple courses
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <TrendingUp className="w-4 h-4 text-emerald-500" /> Handles different credit values
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Award className="w-4 h-4 text-emerald-500" /> Works for semester and cumulative GPA
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500" /> Instant GPA updates
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How It Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            This calculator uses a weighted GPA formula, meaning courses with higher credit hours have more impact on your final GPA.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg font-mono text-sm border border-slate-200 dark:border-slate-700 mb-4">
                            GPA = Total Grade Points ÷ Total Credit Hours
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Each grade is converted into grade points (e.g., A=4.0, B=3.0) and multiplied by its credit value.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2 m-0">
                            <Target className="w-4 h-4 text-indigo-500" /> Common GPA Scale
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-1"><span>A (Excellent)</span> <strong>4.0</strong></li>
                            <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-1"><span>B (Good)</span> <strong>3.0</strong></li>
                            <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-1"><span>C (Average)</span> <strong>2.0</strong></li>
                            <li className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-1"><span>D (Below Avg)</span> <strong>1.0</strong></li>
                            <li className="flex justify-between"><span>F (Fail)</span> <strong>0.0</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is this GPA calculator accurate?", a: "Yes. It uses standard GPA calculation methods used by most institutions." },
                        { q: "Can I calculate cumulative GPA?", a: "Yes. Add all courses and credits to see your overall GPA." },
                        { q: "How do credits affect GPA?", a: "Higher credit courses (like 4-credit labs) weigh more than lower credit ones (like 1-credit seminars)." },
                        { q: "What is a 4.0 scale?", a: "It's the most common grading scale where an 'A' is worth 4 points and 'F' is 0." }
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

export default GPACalculatorContent;
