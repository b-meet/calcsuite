import React from 'react';
import { Calendar, CheckCircle, Clock, Users, FileText, Globe, AlertTriangle, Search, Info } from 'lucide-react';

const AgeCalculatorContent = () => {
    return (
        <div className="space-y-16 not-prose">
            {/* Hero SEO Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The Complete Guide to Chronological Age Calculation</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Knowing your exact age in years, months, and days is crucial for official documents, medical records, and legal eligibility. This guide explains how chronological age is calculated, why leap years matter, and how different cultures measure age, ensuring you always have accurate information for forms and milestones.
                </p>
            </section>

            {/* Core Concepts */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">What is Chronological Age?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            <strong>Chronological age</strong> is the exact amount of time that has passed from your birth to a specific date. Unlike "biological age," which measures how healthy your cells are, chronological age is purely mathematical. It is the international standard used for passports, driver's licenses, school admissions, and retirement planning.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">Why "Years" Aren't Always Enough</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Many government exams and visa applications require age verification down to the exact day. Saying you are "25 years old" is often insufficient if the cutoff date is highly specific. You might actually be 25 years, 11 months, and 29 days old, which could disqualify you from certain age-restricted opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            How We Calculate It
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-indigo-800 dark:text-indigo-300">
                                    Subtract the birth day from the target day. If negative, borrow days from the previous month.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-indigo-800 dark:text-indigo-300">
                                    Subtract the birth month from the target month. If negative, borrow 12 months from the year.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-indigo-800 dark:text-indigo-300">
                                    Subtract the birth year from the target year to get the final exact age.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* The Leap Year Challenge */}
            <section className="bg-amber-50 dark:bg-amber-900/10 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200 dark:shadow-none">
                                <AlertTriangle className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">The Leap Year Factor</h2>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                            A standard year has 365 days, but a leap year has 366 days, with an extra day added to February. This makes manual age calculation highly prone to errors, especially when calculating age in total days.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            If you were born on a leap day (February 29), standard legal definitions usually consider March 1st as your birthday during non-leap years for the purpose of reaching legal age limits like 18 or 21. Our calculator automatically factors in all leap years between your birth date and the target date to ensure maximum precision.
                        </p>
                    </div>
                    <div className="flex-1 w-full bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Leap Year Rules</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></span>
                                The year must be evenly divisible by 4.
                            </li>
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></span>
                                If the year can also be evenly divided by 100, it is <strong>not</strong> a leap year.
                            </li>
                            <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></span>
                                However, if the year is evenly divisible by 400, it <strong>is</strong> a leap year (e.g., the year 2000).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Cultural Differences in Age */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none">
                        <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Cultural Differences in Age Calculation</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Western Standard Age</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Used globally for official documentation. A baby is born at 0 years old, and age increases by exactly one year on the anniversary of their birth date. This is the logic used by this calculator.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Traditional East Asian Age</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Historically used in countries like China and Korea. A baby is considered 1 year old at birth (accounting for time in the womb), and everyone's age increases by one year on the Lunar New Year or Solar New Year, regardless of their actual birthday. Note: South Korea officially shifted to the international standard age system in June 2023 for legal and administrative purposes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Common Uses */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-none">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">When Do You Need Exact Age?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Government Jobs</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Competitive exams often have strict upper age limits calculated as of a specific cutoff date (e.g., August 1st).</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Life Insurance</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Premiums are calculated based on your "Age Nearest Birthday" or exact chronological age depending on the policy.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pediatric Care</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Vaccine schedules and growth charts for infants are strictly measured in weeks and months.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Retirement Planning</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Exact age determines eligibility for pension payouts, senior citizen tax benefits, and Medicare access.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgeCalculatorContent;
