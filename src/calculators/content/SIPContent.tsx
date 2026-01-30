
export default function SIPContent() {
    return (
        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
            <h2 className="text-slate-900 dark:text-white">Ultimate Guide to SIP (Systematic Investment Plans)</h2>
            <p className="text-slate-600 dark:text-slate-200">
                A <strong>Systematic Investment Plan (SIP)</strong> is a smart, hassle-free way to invest in mutual funds.
                Instead of trying to time the market with a large lump sum, you invest a fixed amount regularly (usually monthly).
                This discipline helps you build wealth steadily over time through the power of compounding and rupee cost averaging.
            </p>

            <h3 className="text-slate-900 dark:text-white">How Does a SIP Calculator Work?</h3>
            <p className="text-slate-600 dark:text-slate-200">
                Our SIP Calculator is designed to give you a precise projection of your potential returns. It uses the standard compound interest formula for monthly investments:
            </p>
            <div className="not-prose bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <code className="text-sm font-mono text-slate-800 dark:text-slate-200">
                    FV = P × [ (1 + i)^n - 1 ] × (1 + i) / i
                </code>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Where: <br />
                <strong>FV</strong> = Future Value (Maturity Amount)<br />
                <strong>P</strong> = Monthly Investment Amount<br />
                <strong>i</strong> = Periodic Interest Rate (Annual Rate / 12 / 100)<br />
                <strong>n</strong> = Total Number of Payments (Years × 12)
            </p>

            <h3 className="text-slate-900 dark:text-white">Benefits of Starting a SIP Today</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">1. Power of Compounding</h4>
                    <p className="text-slate-600 dark:text-slate-200 text-sm">
                        Returns on your returns. The longer you stay invested, the faster your money grows. Starting 5 years early can double your corpus.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">2. Rupee Cost Averaging</h4>
                    <p className="text-slate-600 dark:text-slate-200 text-sm">
                        You buy more units when markets are low and fewer when high. This averages out your buying cost and reduces risk.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">3. Financial Discipline</h4>
                    <p className="text-slate-600 dark:text-slate-200 text-sm">
                        Automated deductions ensure you save first and spend later, the golden rule of personal finance.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">4. Start Small</h4>
                    <p className="text-slate-600 dark:text-slate-200 text-sm">
                        You can start building your fortune with as little as ₹500 per month. No need for large capital.
                    </p>
                </div>
            </div>

            <h3 className="text-slate-900 dark:text-white">Common SIP Questions</h3>
            <div className="space-y-4">
                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-blue-500 cursor-pointer">
                    <summary className="font-semibold list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        Can I increase my SIP amount later?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200 text-sm">
                        Yes! This is called a "Step-up SIP." Most fund houses allow you to increase your contribution amount annually or whenever your income grows.
                    </p>
                </details>
                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-blue-500 cursor-pointer">
                    <summary className="font-semibold list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        Is SIP better than a Lump Sum investment?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200 text-sm">
                        For most investors, SIP is safer because it mitigates market timing risk. Lump sum is profitable if you catch the market bottom, which is incredibly difficult to predict.
                    </p>
                </details>
                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-blue-500 cursor-pointer">
                    <summary className="font-semibold list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        Are SIP returns taxable?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200 text-sm">
                        It depends on the fund type. For Equity Mutual Funds, returns up to ₹1.25 Lakh per year are tax-free (LTCG). Above that, they are taxed at 12.5%.
                    </p>
                </details>
            </div>
        </article>
    );
}
