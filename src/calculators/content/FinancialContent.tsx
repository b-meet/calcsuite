
import React from 'react';

const intros: Record<string, React.ReactNode> = {
    'loan': (
        <>
            <p className="lead">
                Making informed borrowing decisions is critical to your financial health. This <strong>Loan Calculator</strong> is designed to help you see the true cost of borrowing by breaking down your monthly payments and total interest over the life of the loan.
            </p>
            <p>
                Whether you are considering a personal loan for debt consolidation, a business loan for expansion, or simply want to understand how different interest rates affect your repayment, this tool provides instant clarity. By adjusting the loan amount, term, and interest rate, you can find a monthly payment that fits your budget without compromising your long-term financial goals.
            </p>
        </>
    ),
    'auto-loan': (
        <>
            <p className="lead">
                Buying a car is one of the largest purchases most people make. Our <strong>Auto Loan Calculator</strong> helps you navigate the dealership financing process with confidence.
            </p>
            <p>
                Don't just focus on the monthly payment—use this tool to understand the total cost of the car, including interest. Input your trade-in value, down payment, and expected interest rate to see exactly how much car you can afford. This calculator helps you compare 48, 60, and 72-month terms to find the "sweet spot" between a significantly lower monthly payment and paying too much in interest.
            </p>
        </>
    ),
    'investment': (
        <>
            <p className="lead">
                The most powerful force in finance is compound interest. This <strong>Investment Calculator</strong> demonstrates how small, consistent contributions can grow into substantial wealth over time.
            </p>
            <p>
                Whether you are saving for a down payment, a dream vacation, or general wealth building, visualizing your growth is the best motivation. Play with different rates of return and contribution amounts to see how "time in the market" beats "timing the market." This tool accounts for initial principal, regular additions, and compound frequency to give you a realistic projection of your financial future.
            </p>
        </>
    ),
    'retirement': (
        <>
            <p className="lead">
                Retirement planning is not about guessing; it's about mathematics. This <strong>Retirement Calculator</strong> helps you determine if your current savings rate is sufficient to support your desired lifestyle in your golden years.
            </p>
            <p>
                By factoring in your current age, expected retirement age, and estimated annual return, this tool bridges the gap between where you are and where you need to be. It helps answer the big questions: "Am I saving enough?" and "When can I stop working?" Early planning allows you to take advantage of compounding, making your retirement goals more achievable with less effort.
            </p>
        </>
    ),
    'salary': (
        <>
            <p className="lead">
                Your hourly rate doesn't tell the whole story. The <strong>Salary Calculator</strong> converts between hourly, daily, weekly, bi-weekly, monthly, and annual income to give you a complete picture of your earnings.
            </p>
            <p>
                Perfect for freelancers, contractors, or anyone negotiating a new job offer. Understanding the equivalence between an annual salary and an hourly wage helps you value your time correctly. This tool is also essential for budgeting, as it helps you breakdown an annual figure into the actual cash flow you'll see in your bank account each pay period.
            </p>
        </>
    ),
    'inflation': (
        <>
            <p className="lead">
                Inflation is the silent tax on your savings. This <strong>Inflation Calculator</strong> helps you understand how the purchasing power of your money changes over time due to rising prices.
            </p>
            <p>
                Use this tool to plan for the future—$100,000 in twenty years will not buy what it buys today. Whether you are planning for retirement, education costs, or long-term savings, adjusting for inflation is crucial for realistic financial planning. This calculator allows you to input custom inflation rates to stress-test your financial plan against different economic scenarios.
            </p>
        </>
    ),
    'sip': (
        <>
            <p className="lead">
                Systematic Investment Plans (SIP) are a disciplined approach to wealth creation. Our <strong>SIP Calculator</strong> shows you the magic of Rupee Cost Averaging and compounding returns for your mutual fund investments.
            </p>
            <p>
                You don't need a large lump sum to start investing. By committing a small fixed amount every month, you can ride out market volatility and build a significant corpus over 5, 10, or 20 years. This tool helps you visualize the "wealth snowball" effect, where your returns start generating their own returns, exponentially increasing your portfolio value over the long term.
            </p>
        </>
    ),
};

export default function FinancialContent({ calculatorId }: { calculatorId?: string; calculatorName?: string }) {
    const specificIntro = calculatorId ? intros[calculatorId] : null;

    return (
        <article className="prose prose-slate dark:prose-invert max-w-none">
            {specificIntro && (
                <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 not-prose">
                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                        {specificIntro}
                    </div>
                </div>
            )}

            <h2 className="text-slate-900 dark:text-white">Comprehensive Financial Planning Guide</h2>
            <p className="text-slate-600 dark:text-slate-200">
                Financial success is rarely an accident; it is the result of planning, discipline, and understanding the numbers.
                Whether you are calculating a mortgage payment, planning for retirement, or estimating investment growth,
                the underlying principles of personal finance remain consistent.
            </p>

            <h3 className="text-slate-900 dark:text-white">Core Financial Concepts</h3>

            <h4 className="text-slate-900 dark:text-white">1. Principal and Interest</h4>
            <p className="text-slate-600 dark:text-slate-200">
                At the heart of most financial calculations—be it loans or investments—is the relationship between <strong>principal</strong> (the original amount of money)
                and <strong>interest</strong> (the cost of borrowing money or the reward for lending/investing it).
                Understanding this dynamic is crucial for debt management and wealth building.
            </p>

            <h4 className="text-slate-900 dark:text-white">2. Amortization</h4>
            <p className="text-slate-600 dark:text-slate-200">
                For loans like mortgages and auto loans, amortization refers to the process of paying off debt with a fixed repayment schedule in regular installments over a period of time.
                Early in the loan term, a higher percentage of your payment goes toward interest. As the loan matures, more of your payment goes toward reducing the principal.
            </p>

            <h4 className="text-slate-900 dark:text-white">3. Compound Growth</h4>
            <p className="text-slate-600 dark:text-slate-200">
                Albert Einstein reportedly called compound interest the "eighth wonder of the world."
                It is the principle where you earn interest on your interest. In investing, this causes your wealth to grow exponentially rather than linearly.
                Time is the most important factor in compounding—starting five years earlier can often double your end result.
            </p>

            <h3 className="text-slate-900 dark:text-white">Smart Money Rules of Thumb</h3>
            <ul className="text-slate-600 dark:text-slate-200">
                <li>
                    <strong>The 50/30/20 Rule:</strong> A simple budgeting framework where 50% of income goes to needs, 30% to wants, and 20% to savings and debt repayment.
                </li>
                <li>
                    <strong>Emergency Fund:</strong> Financial experts recommend keeping 3-6 months of living expenses in a liquid, accessible account to cover unexpected costs like medical bills or job loss.
                </li>
                <li>
                    <strong>Debt-to-Income Ratio (DTI):</strong> Lenders use this to assess your ability to repay loans. Keeping your DTI below 36% is generally considered healthy.
                </li>
            </ul>

            <h3 className="text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-blue-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        What is the difference between APR and interest rate?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200">
                        The interest rate is the cost of borrowing the principal loan amount. The APR (Annual Percentage Rate) is a broader measure of the cost of borrowing that includes the interest rate plus other costs like broker fees, discount points, and some closing costs. APR is usually higher than the interest rate and is a better tool for comparing loan offers.
                    </p>
                </details>

                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-blue-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        How often should I review my financial plan?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200">
                        It's recommended to review your major financial goals and budget at least once a year, or whenever you experience a significant life event such as a marriage, new job, buying a home, or having a child.
                    </p>
                </details>

                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-blue-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        Is it better to pay off debt or invest?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200">
                        This generally depends on the interest rates. If you have "bad debt" (like credit cards) with interest rates above 10-15%, it's usually better to pay that off first, as that is a guaranteed "return" on your money. If your debt is low-interest (like a mortgage at 3-4%), you might earn more by investing in the market, which historically returns around 7-10% annually.
                    </p>
                </details>
            </div>
        </article>
    );
}
