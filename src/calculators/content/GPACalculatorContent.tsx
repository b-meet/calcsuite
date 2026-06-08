import { BookOpen, TrendingUp, CheckCircle, Target, Globe, GraduationCap, ShieldCheck, HelpCircle } from 'lucide-react';
import type { CalculatorDef } from '../registry';
import { FaqAccordion } from '../../components/FaqAccordion';

interface GPACalculatorContentProps {
    calculatorDef?: CalculatorDef;
}

const GPACalculatorContent = ({ calculatorDef }: GPACalculatorContentProps) => {
    const faqs = calculatorDef?.faqs ?? [];

    return (
        <div className="space-y-16 not-prose">
            {/* Hero SEO Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The Ultimate Guide to GPA, SGPA, and CGPA</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Calculating your Grade Point Average (GPA) correctly is the first step toward tracking your academic progress, securing scholarships, and planning for higher education. Whether you are using the standard 4.0 scale or the Indian 10-point scale for SGPA and CGPA, this comprehensive guide explains how to calculate your grades accurately.
                </p>
            </section>

            {/* Understanding the Terminology */}
            <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">GPA, SGPA, and CGPA: What's the Difference?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl m-0">GPA</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                            <strong>Grade Point Average (GPA)</strong> is a standardized way of measuring academic achievement across a single term or course. It averages out your grades based on the weight (credits) of each subject.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl m-0">SGPA</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                            <strong>Semester Grade Point Average (SGPA)</strong> measures performance across a single academic semester. This is the most common metric used by Indian universities to track short-term academic health.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl m-0">CGPA</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                            <strong>Cumulative Grade Point Average (CGPA)</strong> is your overall academic score, calculated by combining the SGPAs of all completed semesters. It reflects your entire degree performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Calculate GPA */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none">
                        <Target className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">How the GPA Formula Works</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            GPA isn't a simple average of your grades. It is a <strong>weighted average</strong>, meaning subjects with more credit hours affect your GPA more than subjects with fewer credit hours.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">The Universal Formula</h3>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-center mb-4 text-sm font-bold text-emerald-700 dark:text-emerald-400 shadow-sm">
                                GPA = Total Quality Points ÷ Total Credits
                            </div>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li><strong>Quality Points:</strong> Grade Value × Course Credits</li>
                                <li><strong>Total Credits:</strong> Sum of all course credits taken</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                        <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" /> Calculation Example
                        </h3>
                        <p className="text-sm text-emerald-800 dark:text-emerald-300 mb-4">
                            Imagine taking two courses: Math (4 credits) and History (3 credits). You score an 'A' (4.0) in Math and a 'B' (3.0) in History.
                        </p>
                        <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-300">
                            <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                                <span>Math Quality Points:</span>
                                <strong>4.0 × 4 = 16.0</strong>
                            </li>
                            <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                                <span>History Quality Points:</span>
                                <strong>3.0 × 3 = 9.0</strong>
                            </li>
                            <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                                <span>Total Points:</span>
                                <strong>25.0</strong>
                            </li>
                            <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                                <span>Total Credits:</span>
                                <strong>7</strong>
                            </li>
                            <li className="flex justify-between pt-2">
                                <span>Final GPA (25.0 ÷ 7):</span>
                                <strong className="text-lg">3.57</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Converting to Percentages */}
            <section className="bg-amber-50 dark:bg-amber-900/10 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200 dark:shadow-none">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Converting CGPA to Percentage</h2>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Many companies and universities ask for marks in percentages rather than CGPA. In India, there is no universal conversion formula because every university follows its own grading curve.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-bold">
                            However, the most commonly accepted formula (historically used by CBSE and many state universities) is:
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-200 dark:border-slate-700 font-mono text-center text-lg font-bold text-amber-700 dark:text-amber-400 shadow-sm mt-4">
                            Percentage = CGPA × 9.5
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Important Warning</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    <strong>Check Your University Rules:</strong> Universities like Mumbai University or VTU may have completely different conversion formulas (e.g., [CGPA - 0.75] × 10). Always check the back of your official marksheet.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    <strong>Don't Estimate for Official Forms:</strong> If applying for higher studies abroad, rely on official credential evaluation services (like WES) rather than manual estimations.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Use Our Calculator */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-none">
                        <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Why Use This GPA Calculator?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Dual Scales</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Supports both the international 4.0 letter-grade scale and the Indian 10-point scale for accurate SGPA tracking.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Mobile Optimized</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Features a stacked card layout for phones, so you can add endless courses without horizontal scrolling.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Target Planning</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Experiment with your remaining course grades to see exactly what you need to achieve your target CGPA.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">100% Free & Fast</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">No account required. Instant calculations in your browser with complete privacy.</p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-inner">
                            <HelpCircle className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Frequently Asked Questions</h2>
                    </div>
                    <FaqAccordion items={faqs} />
                </section>
            )}
        </div>
    );
};

export default GPACalculatorContent;
