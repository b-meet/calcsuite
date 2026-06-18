import { Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AgeRequirementsIndia2026 = () => {
    return (
        <>
            <h2 id="upsc-govt-exams">1. UPSC & Government Exam Cutoffs: The Critical Dates</h2>
            <p>
                In India, government exams like UPSC CSE, SSC CGL, IBPS, and State PSCs have extremely strict age limits. The most important detail is the **qualifying cutoff date**. You might be under the maximum age limit today, but if you exceed it by even a single day on the cutoff date, your application will be rejected.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 my-8">
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 m-0">Standard Cutoff Dates in India</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                                <th className="text-left py-2 font-semibold text-slate-800 dark:text-slate-200">Exam / Board</th>
                                <th className="text-left py-2 font-semibold text-slate-800 dark:text-slate-200">Standard Cutoff Date</th>
                                <th className="text-left py-2 font-semibold text-slate-800 dark:text-slate-200">Typical Age Limits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="py-2 text-slate-700 dark:text-slate-300 font-medium">UPSC Civil Services</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">August 1 of the exam year</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">21 to 32 years (Relaxations apply)</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="py-2 text-slate-700 dark:text-slate-300 font-medium">SSC CGL</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">August 1 or January 1</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">18 to 32 years (Post-dependent)</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="py-2 text-slate-700 dark:text-slate-300 font-medium">Banking Exams (IBPS/SBI)</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">Usually 1st of the notification month</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">20 to 30 years (Officers/PO)</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="py-2 text-slate-700 dark:text-slate-300 font-medium">NDA & NA</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">Highly specific date range limits</td>
                                <td className="py-2 text-slate-600 dark:text-slate-400">16.5 to 19.5 years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p>
                To avoid calculation errors, candidates must find their exact age down to the day as of the target cutoff date using a chronological age calculator.
            </p>

            <h2 id="school-admission">2. School Admission Age: The NEP Guidelines</h2>
            <p>
                Under the National Education Policy (NEP), the Ministry of Education has issued clear directives to all Indian states and Union Territories regarding the minimum age for school admission.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 my-10 not-prose">
                <h3 className="text-indigo-900 dark:text-indigo-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                    NEP Admission Cutoffs
                </h3>
                <ul className="space-y-4 m-0 p-0 list-none">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>Class 1:</strong> The child must have completed **6 years** of age as of the state's designated cutoff date (usually March 31st or June 1st).
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>Pre-School / Nursery:</strong> Typically requires the child to be at least **3 years** old.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>LKG / UKG:</strong> Set at 4 and 5 years old respectively.
                        </span>
                    </li>
                </ul>
            </div>

            <h2 id="aadhaar-verification">3. Aadhaar Card & Identity Documents</h2>
            <p>
                Your date of birth (DOB) listed on your Aadhaar card, passport, or Class 10 board marksheet is the ultimate legal proof of age in India. If there is any discrepancy between these documents, it must be updated immediately to prevent issues with college applications, bank accounts, or visa processing.
            </p>
            <p>
                When calculating age for Aadhaar updates or senior citizen status (which starts at exactly 60 years of age in India), you must use the standard Gregorian calendar system.
            </p>

            <div className="bg-blue-600/5 dark:bg-blue-900/10 border-2 border-blue-600/20 dark:border-blue-500/20 p-8 rounded-3xl my-10 text-center shadow-lg hover:shadow-xl transition-shadow not-prose">
                <h4 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">Need to Know Your Exact Age for an Exam?</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base max-w-lg mx-auto">
                    Avoid disqualifications due to date calculation mistakes. Check your exact age in years, months, and days as of any cutoff date instantly.
                </p>
                <Link to="/calculator/age/" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 !text-white font-bold rounded-xl hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-md">
                    Open Age Calculator
                </Link>
            </div>

            <h2 id="calculating-chronological">4. How Chronological Age is Calculated</h2>
            <p>
                Chronological age calculation subtracts the birth date from a target date. The mathematics works from right to left (days first, then months, then years):
            </p>
            <ol>
                <li><strong>Days:</strong> Subtract birth day from target day. If target day is smaller, borrow the total number of days in the previous month.</li>
                <li><strong>Months:</strong> Subtract birth month from target month. If negative, borrow 12 months from the year.</li>
                <li><strong>Years:</strong> Subtract birth year from target year.</li>
            </ol>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 my-8">
                <h3 className="text-amber-900 dark:text-amber-200 font-bold flex items-center gap-2 m-0">
                    <Calendar className="w-5 h-5" /> The Leap Year Factor
                </h3>
                <p className="mt-3 mb-0 text-slate-700 dark:text-slate-300">
                    Remember: February has 29 days in a leap year (like 2024, 2028). For anyone born on February 29th, legal systems consider their birthday to be March 1st in non-leap years. A digital calculator handles these edge cases perfectly.
                </p>
            </div>
        </>
    );
};
