import { Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NoticePeriodCalculationGuide = () => {
    return (
        <>
            <h2 id="calendar-vs-working">1. Calendar Days vs. Working Days: Which One Applies?</h2>
            <p>
                When you submit your resignation, the very first question to ask HR is whether your notice period is counted in **calendar days** or **working days**.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Calendar Days (Standard)</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-0">
                        Every single day on the calendar counts, including Saturdays, Sundays, and public holidays. If your notice period is 90 days, your last working day is exactly 90 calendar days from the day after you resign.
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Working/Business Days (Rare)</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-0">
                        Only official business working days count. Saturdays, Sundays, and gazetted holidays are excluded. In this system, a "30-day" notice period actually takes about 40 to 45 calendar days to complete.
                    </p>
                </div>
            </div>

            <h2 id="last-working-day">2. How to Calculate Your Last Working Day (LWD)</h2>
            <p>
                The standard industry practice for calculating your Last Working Day is:
            </p>
            <div className="p-5 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono text-sm leading-relaxed my-6">
                <strong>LWD = Resignation Date + Notice Period Duration</strong>
            </div>
            <p>
                For instance, if you submit your resignation on <strong>June 15</strong> and your notice period is <strong>60 days</strong>:
            </p>
            <ul className="space-y-2">
                <li>June has 30 days, so 15 days remain in June.</li>
                <li>July has 31 days.</li>
                <li>That leaves 14 days needed from August to complete the 60-day notice.</li>
                <li>Therefore, your Last Working Day is **August 14**.</li>
            </ul>

            <h2 id="notice-buyout">3. Notice Buyout & Leaves Adjustment</h2>
            <p>
                If you need to join your new employer early, you have a few options to shorten your serving time:
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 my-10 not-prose">
                <h3 className="text-indigo-900 dark:text-indigo-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                    Exit Options
                </h3>
                <ul className="space-y-4 m-0 p-0 list-none">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>Notice Buyout:</strong> You pay the company (or your new company reimburses you) basic salary for the remaining notice days you wish to waive.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>Earned Leave (EL) Adjustment:</strong> You request to adjust your accumulated privilege or earned leaves to pull back your last working day. Whether this is allowed depends entirely on HR discretion.
                        </span>
                    </li>
                </ul>
            </div>

            <div className="bg-blue-600/5 dark:bg-blue-900/10 border-2 border-blue-600/20 dark:border-blue-500/20 p-8 rounded-3xl my-10 text-center shadow-lg hover:shadow-xl transition-shadow not-prose">
                <h4 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">Resigned? Calculate Your Last Working Day</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base max-w-lg mx-auto">
                    Count the exact calendar days or calculate what date is 30, 60, or 90 days from today to find your official release date.
                </p>
                <Link to="/calculator/date-diff/" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 !text-white font-bold rounded-xl hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-md">
                    Open Date Calculator
                </Link>
            </div>

            <h2 id="resignation-email">4. The Resignation Date & Official Notice</h2>
            <p>
                The notice period countdown officially begins from the date you submit your formal resignation letter/email, or when it is logged in the company's HR portal (e.g., Workday, SuccessFactors). Verbal notice does not count as a legal submission.
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 my-8">
                <h3 className="text-amber-900 dark:text-amber-200 font-bold flex items-center gap-2 m-0">
                    <Clock className="w-5 h-5" /> Quick HR Advice
                </h3>
                <p className="mt-3 mb-0 text-slate-700 dark:text-slate-300">
                    Always request a written acknowledgment of your resignation and an explicit confirmation of your Last Working Day from HR within 48 hours of submission. This avoids dispute during the full & final settlement (FNF).
                </p>
            </div>
        </>
    );
};
