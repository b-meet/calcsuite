import { Calendar, Clock, CheckCircle, Briefcase, GraduationCap, PartyPopper } from 'lucide-react';

const DateCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Date Calculator – Calculate Days Between Two Dates Instantly</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The Date Calculator helps you calculate the exact duration between two dates in days, weeks, months, and years. Whether you are planning an event, tracking deadlines, calculating age gaps, or counting days between important milestones, this tool delivers accurate results instantly.
                        </p>
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                            Unlike basic date difference tools, this calculator accounts for leap years, varying month lengths, and real calendar logic, ensuring precision every time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Use & Common Uses */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        Why Use This Date Calculator?
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <Clock className="w-4 h-4 text-emerald-500" /> Calculate duration between any two dates
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <Calendar className="w-4 h-4 text-emerald-500" /> Get results in days, weeks, months, and years
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500" /> Accurate leap year handling
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500" /> Works for past, present, and future dates
                        </li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 m-0">Common Uses</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <PartyPopper className="w-4 h-4 text-purple-500" /> Event planning and countdowns
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <Briefcase className="w-4 h-4 text-blue-500" /> Project timelines and deadlines
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <GraduationCap className="w-4 h-4 text-indigo-500" /> Exam preparation schedules
                        </li>
                        <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <Briefcase className="w-4 h-4 text-slate-500" /> HR, payroll, and service duration checks
                        </li>
                    </ul>
                </div>
            </section>

            {/* Accuracy & SEO */}
            <section className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 m-0">Accurate Down to the Day</h2>
                <p className="text-indigo-800 dark:text-indigo-300 mb-6 text-sm">
                    Many online tools fail when it comes to leap years or month variations. This Date Calculator uses calendar-accurate logic, so your results are reliable for long-term planning, official documentation, and financial calculations.
                </p>

                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3 text-sm">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                    {["Date Calculator", "Days Between Two Dates", "Date Difference Calculator", "Calculate Duration Between Dates", "Online Date Calculator"].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white dark:bg-indigo-900/50 border border-indigo-100 dark:border-indigo-800 rounded-full text-xs text-indigo-700 dark:text-indigo-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="text-center space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Fast. Free. Reliable.</h2>
                <p className="text-slate-600 dark:text-slate-400">
                    No downloads. No ads blocking your work. Just enter your dates and get instant, precise results.
                </p>
                <p className="font-medium text-indigo-600 dark:text-indigo-400">
                    Use the Date Calculator whenever time matters and accuracy is non-negotiable.
                </p>
            </div>

        </div>
    );
};

export default DateCalculatorContent;
