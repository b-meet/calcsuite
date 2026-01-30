import { TrendingUp, Clock, DollarSign, PiggyBank } from 'lucide-react';

export default function CompoundInterestContent() {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    What is Compound Interest?
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        Compound interest is the "interest on interest." It's the result of reinvesting interest, so that interest in the next period is then earned on the principal sum plus previously accumulated interest. This concept is the key to building wealth over time.
                    </p>
                    <p>
                        Albert Einstein famously called compound interest the "eighth wonder of the world," stating, "He who understands it, earns it... he who doesn't... pays it."
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    How Compounding Frequency Affects Growth
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        The frequency of compounding significantly impacts the final amount. The more frequently interest is added to your principal, the faster your money grows.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Yearly:</strong> Interest is added once a year. Standard for some bonds.</li>
                        <li><strong>Quarterly:</strong> Interest added every 3 months. Common for CDs and some savings accounts.</li>
                        <li><strong>Monthly:</strong> Interest added every month. Typical for savings accounts and mortgages.</li>
                        <li><strong>Daily:</strong> Interest added every day. Provides the highest yield for savers (e.g., High-Yield Savings Accounts).</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    The Compound Interest Formula
                </h2>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm overflow-x-auto text-slate-900 dark:text-slate-200">
                    A = P(1 + r/n)^(nt)
                </div>
                <div className="mt-4 prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li><strong>A</strong> = Final Amount</li>
                        <li><strong>P</strong> = Principal balance</li>
                        <li><strong>r</strong> = Annual interest rate (decimal)</li>
                        <li><strong>n</strong> = Number of times interest compounded per year</li>
                        <li><strong>t</strong> = Time in years</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <PiggyBank className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Power of Regular Contributions
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        While a lump sum grows well with compound interest, adding regular contributions (monthly or yearly) supercharges your returns. This strategy, known as Dollar Cost Averaging in investing, ensures disciplined savings and accelerates the compounding effect.
                    </p>
                </div>
            </section>
        </div>
    );
}
