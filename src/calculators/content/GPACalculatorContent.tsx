import { BookOpen, TrendingUp, CheckCircle, Award, Target, Smartphone } from 'lucide-react';

const GPACalculatorContent = () => {
    return (
        <div className="space-y-12 not-prose">
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">GPA Calculator India: SGPA, CGPA and Semester Planning</h2>
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
                    <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This <strong>GPA Calculator India</strong> helps students estimate semester GPA, SGPA, and cumulative CGPA using credits and weighted grade points. It works well for quick checks before results, internal assessments, scholarship shortlists, and semester planning.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            The calculator now supports both a <strong>4.0 letter-grade scale</strong> and a <strong>10-point grade-point scale</strong>, which makes it more useful for Indian colleges and universities that use SGPA or CGPA terminology.
                        </p>

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <Smartphone className="w-5 h-5" />
                                Mobile-First Update
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300 m-0">
                                Each course now uses a stacked card layout on phones, so you can add subjects, grades, and credits without pinching, zooming, or horizontal scrolling.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Why Students Use It
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <BookOpen className="w-4 h-4 text-emerald-500" /> Semester GPA and SGPA checks
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <TrendingUp className="w-4 h-4 text-emerald-500" /> Credit-weighted result planning
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Award className="w-4 h-4 text-emerald-500" /> Scholarship and placement screening prep
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500" /> Fast CGPA estimates on mobile
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">GPA, SGPA and CGPA: What Is the Difference?</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">GPA</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                            Grade Point Average is the weighted average of grades across subjects. It is a general term used across schools and colleges.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">SGPA</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                            Semester Grade Point Average is the GPA for a single semester. It is common in Indian universities that assign credits to each paper or lab.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 m-0">CGPA</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                            Cumulative Grade Point Average combines multiple semesters. It gives a broader view of overall academic performance over time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How the Weighted GPA Formula Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            This calculator uses a weighted formula, so subjects with more credits influence the final result more than smaller electives or labs.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm border border-slate-200 dark:border-slate-700 mb-4">
                            GPA = Total Grade Points ÷ Total Credit Hours
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            In practice, each subject grade is converted to grade points, multiplied by credits, and then divided by total credits.
                        </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm flex items-center gap-2 m-0">
                            <Target className="w-4 h-4 text-indigo-500" /> Scale Notes for Indian Students
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                <span>Use the 4.0 scale if your institute publishes letter grades such as A, B+, or C.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                <span>Use the 10-point scale if your marksheet shows direct grade points such as 10, 9, 8, or 7.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                <span>Percentage-to-GPA conversion is not universal. Always check your university handbook before treating a conversion as official.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Before You Convert Percentage to GPA in India</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl border border-amber-100 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/10">
                        <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 m-0">Avoid one-size-fits-all formulas</h3>
                        <p className="text-sm text-amber-800 dark:text-amber-300 m-0">
                            One university may multiply CGPA by 9.5, while another uses a different coefficient or subject-weighted method. That is why this page focuses on credit-based GPA math instead of promising a universal percentage conversion.
                        </p>
                    </div>
                    <div className="p-5 rounded-xl border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50 dark:bg-emerald-900/10">
                        <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 m-0">Use official grade points where possible</h3>
                        <p className="text-sm text-emerald-800 dark:text-emerald-300 m-0">
                            The most reliable way to estimate SGPA or CGPA is to use the grade points and credits shown by your college, then calculate the weighted average directly.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GPACalculatorContent;
