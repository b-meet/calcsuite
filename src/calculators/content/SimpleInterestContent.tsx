import { Percent, Calendar, Calculator } from 'lucide-react';

export default function SimpleInterestContent() {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Percent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    What is Simple Interest?
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        Simple interest is a quick method of calculating the interest charge on a loan or the return on an investment. It is determined by multiplying the daily interest rate by the principal by the number of days that elapse between payments.
                    </p>
                    <p>
                        Unlike compound interest, simple interest is not added back to the principal; it is calculated only on the original amount. This type of interest is common in auto loans and short-term personal loans.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    The Simple Interest Formula
                </h2>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm overflow-x-auto text-slate-800 dark:text-slate-200">
                    I = P × r × t
                </div>
                <div className="mt-4 prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li><strong>I</strong> = Interest Amount</li>
                        <li><strong>P</strong> = Principal amount</li>
                        <li><strong>r</strong> = Annual interest rate (decimal)</li>
                        <li><strong>t</strong> = Time (in years)</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    When to Use Simple Interest
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        Simple interest is typically used for:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Short-term loans</li>
                        <li>Car loans (sometimes)</li>
                        <li>Notes payable</li>
                        <li>Private lending agreements</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
