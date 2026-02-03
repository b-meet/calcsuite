import { Calendar, CheckCircle, HelpCircle, Clock, Users, FileText, Globe } from 'lucide-react';

const AgeCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Age Calculator: Precise Years, Months & Days</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The Age Calculator helps you calculate your exact age instantly in years, months, and days based on your date of birth. It also allows you to find the difference between two dates with complete accuracy.
                        </p>

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 m-0">
                                <Clock className="w-5 h-5" />
                                Why Use an Online Age Calculator?
                            </h3>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Manually calculating age can be confusing due to leap years and varying month lengths. This tool eliminates errors and gives precise results instantly.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            What This Tool Does
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Calendar className="w-4 h-4 text-emerald-500" /> Calculates exact age from date of birth
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Clock className="w-4 h-4 text-emerald-500" /> Shows age in years, months, and days
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Globe className="w-4 h-4 text-emerald-500" /> Works for past and future dates
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Users className="w-4 h-4 text-emerald-500" /> Helps find age difference between two people
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Common Uses & Benefits */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                        <FileText className="w-5 h-5 text-purple-500" />
                        Common Uses
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                            School and college admissions criteria
                        </li>
                        <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                            Job eligibility and government form applications
                        </li>
                        <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                            Passport, visa, and exam age verification
                        </li>
                        <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
                            Track birthday countdowns and milestones
                        </li>
                    </ul>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2 m-0">
                        <CheckCircle className="w-5 h-5" />
                        Key Benefits
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                            <CheckCircle className="w-4 h-4" /> 100% free and instant results
                        </li>
                        <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                            <CheckCircle className="w-4 h-4" /> No sign-up required
                        </li>
                        <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                            <CheckCircle className="w-4 h-4" /> Accurate to the day
                        </li>
                        <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                            <CheckCircle className="w-4 h-4" /> Mobile and desktop friendly
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 m-0">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">
                            <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            Is this age calculator accurate?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0">
                            Yes. It accounts for leap years and exact date differences to provide 100% accurate results.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">
                            <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            Can I calculate age between two dates?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0">
                            Yes. It works for any date range, allowing you to find the difference between any two dates in history.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">
                            <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            How does it handle leap years?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0">
                            Our logic automatically detects leap years (years divisible by 4) and adjusts the day count for February accordingly.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgeCalculatorContent;
