import { Link } from 'react-router-dom';

export function HomeLoanEmiHacks2026() {
    return (
        <>
            <section id="emi-basics">
                <h2>Understanding EMI Components</h2>
                <p>
                    Every Equated Monthly Installment (EMI) consists of two primary components: the principal repayment and the interest payment. In the early years of a typical home loan (e.g., 20 years), the interest component dominates your EMI. Sometimes, up to 80% of your initial EMIs go purely toward paying off interest, leaving the principal balance largely untouched.
                </p>
                <p>
                    Understanding this front-loaded interest structure is the key to outsmarting your home loan. Because interest is calculated on the outstanding principal on a daily or monthly reducing balance basis, any extra money you pay directly reduces the principal immediately.
                </p>
            </section>

            <section id="prepayment-benefits">
                <h2>The Magic of Prepayments</h2>
                <p>
                    Prepayment is the act of paying off a portion of your loan principal ahead of the scheduled EMI. This is where the magic happens. By reducing the outstanding principal early in the loan tenure, you completely bypass the interest that would have compounded on that amount over the next 10 to 15 years.
                </p>
                <p>
                    Consider this: On a ₹50 Lakh loan at 9% interest for 20 years, making just one extra EMI payment every year can reduce your total loan tenure by over 3 years and save you more than ₹10 Lakhs in interest. Small, consistent prepayments compound massively in your favor.
                </p>
            </section>

            <section id="tenure-vs-emi">
                <h2>Reduce Tenure vs Reduce EMI</h2>
                <p>
                    When you make a lump-sum prepayment, the bank will ask you a crucial question: <em>"Do you want to reduce your EMI or reduce your tenure?"</em>
                </p>
                <ul>
                    <li><strong>Reduce Tenure (Recommended):</strong> Your EMI stays the same, but the duration of the loan shrinks drastically. This maximizes your interest savings.</li>
                    <li><strong>Reduce EMI:</strong> Your loan tenure remains the same, but your monthly burden decreases. While good for cash flow emergencies, this results in significantly less overall interest saved.</li>
                </ul>
                <p>
                    If your monthly budget can comfortably handle the current EMI, always choose to reduce the tenure to save the maximum amount of money.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6 border border-blue-100 dark:border-blue-800">
                    <h4 className="text-blue-800 dark:text-blue-300 font-bold mb-2">Pro Tip: Use the Mortgage Calculator</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mb-0">
                        Want to see exactly how much you can save? Use our free <Link to="/calculator/mortgage/" className="font-bold underline">Mortgage & Prepayment Calculator</Link> to model extra payments and see your exact savings.
                    </p>
                </div>
            </section>

            <section id="tax-benefits">
                <h2>Home Loan Tax Benefits</h2>
                <p>
                    While prepaying saves interest, remember that home loans also offer significant tax benefits under the Old Tax Regime. Under Section 24(b), you can claim up to ₹2 Lakhs in deductions on the interest paid. Under Section 80C, you can claim up to ₹1.5 Lakhs on the principal repayment.
                </p>
                <p>
                    <strong>The 2026 Strategy:</strong> If you are on the New Tax Regime (which is the default), you cannot claim the Section 24(b) deduction for self-occupied properties. This makes prepayment even more attractive in 2026, as the interest you are paying no longer offsets your tax liability.
                </p>
                <p>
                    Before liquidating high-return investments (like equity mutual funds) to prepay a loan, always compare your post-tax return on investment against your effective home loan interest rate.
                </p>
            </section>
        </>
    );
}
