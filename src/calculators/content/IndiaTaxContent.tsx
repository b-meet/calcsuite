

const IndiaTaxContent = () => {
    return (
        <div className="prose prose-blue max-w-none">
            <h2>Understanding Income Tax for FY 2025-26 (AY 2026-27)</h2>
            <p>
                The Union Budget for FY 2025-26 has brought significant changes to the personal income tax structure,
                primarily making the <strong>New Tax Regime</strong> more attractive. This calculator helps you estimate your
                tax liability under both the Old and New regimes to decide which one saves you more money.
            </p>

            <h3>1. New Tax Regime (Default) - Section 115BAC(1A)</h3>
            <p>
                The New Tax Regime is now the default regime. It offers lower tax rates but fewer deductions.
                For FY 2025-26, the tax slabs have been revised as follows:
            </p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-slate-200 p-2">Income Slab</th>
                            <th className="border-b-2 border-slate-200 p-2">Tax Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border-b border-slate-100 p-2">Up to ₹ 4,00,000</td><td className="border-b border-slate-100 p-2">Nil</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 4,00,001 to ₹ 8,00,000</td><td className="border-b border-slate-100 p-2">5%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 8,00,001 to ₹ 12,00,000</td><td className="border-b border-slate-100 p-2">10%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 12,00,001 to ₹ 16,00,000</td><td className="border-b border-slate-100 p-2">15%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 16,00,001 to ₹ 20,00,000</td><td className="border-b border-slate-100 p-2">20%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 20,00,001 to ₹ 24,00,000</td><td className="border-b border-slate-100 p-2">25%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">Above ₹ 24,00,000</td><td className="border-b border-slate-100 p-2">30%</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Key Highlights of New Regime:</h4>
            <ul>
                <li><strong>Standard Deduction:</strong> Increased to <strong>₹ 75,000</strong> for salaried individuals and pensioners.</li>
                <li><strong>Rebate u/s 87A:</strong> Tax rebate of up to <strong>₹ 60,000</strong> is available if your total income does not exceed ₹ 12 Lakhs. This effectively implies zero tax for income up to ₹ 12 Lakhs (after standard deduction, this means salary up to ₹ 12.75 Lakhs is tax-free).</li>
                <li><strong>Marginal Relief:</strong> Available for incomes inclusive of rebate limits and surcharge thresholds.</li>
                <li><strong>No Deductions:</strong> Most common deductions like 80C, 80D, HRA, LTA are <strong>NOT</strong> allowed. Only employer NPS contribution u/s 80CCD(2) is permitted.</li>
            </ul>

            <h3>2. Old Tax Regime</h3>
            <p>
                The Old Regime continues with the older slab rates and allows for a wide range of deductions.
                It is beneficial for those with high investments and expenses eligible for tax breaks.
            </p>

            <h4>Old Regime Slabs (General Citizens &lt; 60 years)</h4>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-slate-200 p-2">Income Slab</th>
                            <th className="border-b-2 border-slate-200 p-2">Tax Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border-b border-slate-100 p-2">Up to ₹ 2,50,000</td><td className="border-b border-slate-100 p-2">Nil</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 2,50,001 to ₹ 5,00,000</td><td className="border-b border-slate-100 p-2">5%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">₹ 5,00,001 to ₹ 10,00,000</td><td className="border-b border-slate-100 p-2">20%</td></tr>
                        <tr><td className="border-b border-slate-100 p-2">Above ₹ 10,00,000</td><td className="border-b border-slate-100 p-2">30%</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="text-sm text-slate-500 mt-2">
                * Senior Citizens (60-80 years): Exemption limit is ₹ 3,00,000.<br />
                * Super Senior Citizens (80+ years): Exemption limit is ₹ 5,00,000.
            </p>

            <h4>Key Deductions Allowed in Old Regime:</h4>
            <ul>
                <li><strong>Section 80C:</strong> Up to ₹ 1.5 Lakhs (PPF, EPF, LIC, ELSS, etc.)</li>
                <li><strong>Section 80D:</strong> Health Insurance premiums (₹ 25k Self + ₹ 25k/50k Parents)</li>
                <li><strong>Standard Deduction:</strong> Flat ₹ 50,000 for salaried employees.</li>
                <li><strong>HRA & LTA:</strong> Exemptions available as per rules.</li>
                <li><strong>Home Loan Interest:</strong> Up to ₹ 2 Lakhs u/s 24(b).</li>
            </ul>

            <h3>3. Surcharge & Cess</h3>
            <p>
                <strong>Health & Education Cess:</strong> A 4% cess is applicable on the total tax payable plus surcharge in all cases.
            </p>
            <p><strong>Surcharge Rates (based on Total Income):</strong></p>
            <ul>
                <li>₹ 50 Lakhs to ₹ 1 Crore: <strong>10%</strong></li>
                <li>₹ 1 Crore to ₹ 2 Crores: <strong>15%</strong></li>
                <li>Above ₹ 2 Crores: <strong>25%</strong> (In New Regime, surcharge is capped at 25%. In Old Regime, it goes up to <strong>37%</strong> for income above ₹ 5 Crores).</li>
            </ul>

            <h3>Which Regime should you choose?</h3>
            <p>
                The <strong>New Regime</strong> is generally better for the majority of taxpayers, especially with the income limit for rebate raised to ₹ 12 Lakhs.
                However, if you have significant tax-saving investments (Home Loan, HRA, 80C, 80D) exceeding ₹ 3.75 - ₹ 4.5 Lakhs (depending on income level), the <strong>Old Regime</strong> might still save you more tax.
                Use the calculator above to enter your specific details and see the comparison.
            </p>
        </div>
    );
};

export default IndiaTaxContent;
