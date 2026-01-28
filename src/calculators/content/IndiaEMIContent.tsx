
export default function IndiaEMIContent() {
    return (
        <article className="prose prose-slate max-w-none">
            <h2>Understanding Your EMI (Equated Monthly Installment)</h2>
            <p>
                An <strong>Equated Monthly Installment (EMI)</strong> is the fixed amount you pay to your bank or lender each month to repay a loan.
                It combines two components: the principal repayment and the interest payment.
                Using our accurate EMI calculator helps you plan your budget effectively and avoid financial strain.
            </p>

            <h3>The EMI Formula Explained</h3>
            <p>
                Banks use the reducing balance method to calculate EMI. The formula may look complex, but it ensures you pay off your loan precisely by the end of the tenure.
            </p>
            <div className="not-prose bg-slate-100 p-4 rounded-xl border border-slate-200 overflow-x-auto">
                <code className="text-sm font-mono text-slate-800">
                    E = P x R x (1+R)^N / [ (1+R)^N - 1 ]
                </code>
            </div>
            <p className="text-sm text-slate-500 mt-2">
                Where: <br />
                <strong>E</strong> = EMI Amount<br />
                <strong>P</strong> = Principal Loan Amount<br />
                <strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)<br />
                <strong>N</strong> = Loan Tenure in Months
            </p>

            <h3>Factors Affecting Your EMI</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    <strong>Principal Amount:</strong> A higher loan amount directly increases your EMI.
                </li>
                <li>
                    <strong>Interest Rate:</strong> Even a 0.5% difference can save you lakhs over a long tenure. Always negotiate with your lender.
                </li>
                <li>
                    <strong>Loan Tenure:</strong> Choosing a longer tenure reduces your monthly EMI but <em>significantly increases</em> the total interest payout.
                </li>
            </ul>

            <h3>Loan Types Covered</h3>
            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">Home Loan</h4>
                    <p className="text-sm text-blue-800">
                        Usually long-term (15-30 years) with lower interest rates. Offers tax benefits under Section 80C and 24(b).
                    </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-900 mb-2">Car Loan</h4>
                    <p className="text-sm text-green-800">
                        Medium-term (3-7 years). Interest rates are fixed or floating. Your car serves as collateral.
                    </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h4 className="font-bold text-purple-900 mb-2">Personal Loan</h4>
                    <p className="text-sm text-purple-800">
                        Short-term (1-5 years) with higher interest rates. Unsecured loan useful for emergencies or consolidation.
                    </p>
                </div>
            </div>

            <h3>How to Reduce Your EMI</h3>
            <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Make a Higher Down Payment:</strong> Reduces the principal loan amount.</li>
                <li><strong>Prepay When Possible:</strong> Use bonuses or windfalls to pay off part of the principal. This drastically cuts interest.</li>
                <li><strong>Balance Transfer:</strong> If your credit score improves, switch your loan to a bank offering a lower interest rate.</li>
            </ol>
        </article>
    );
}
