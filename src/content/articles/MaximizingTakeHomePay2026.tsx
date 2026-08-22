import { Link } from 'react-router-dom';

export function MaximizingTakeHomePay2026() {
    return (
        <>
            <section id="salary-components">
                <h2>Basic vs Allowances</h2>
                <p>
                    Your Cost to Company (CTC) is a gross number, but what actually hits your bank account is determined by how that CTC is structured. The core component of any salary is the <strong>Basic Salary</strong>. In India, Basic is usually 40% to 50% of your total CTC. 
                </p>
                <p>
                    A high Basic salary results in higher mandatory deductions (like EPF and Gratuity), which reduces your monthly in-hand pay but builds a stronger retirement corpus. The rest of your salary is broken down into various allowances (HRA, LTA, Special Allowance) which govern how much tax you pay.
                </p>
            </section>

            <section id="hra-calculation">
                <h2>HRA Exemption Rules</h2>
                <p>
                    House Rent Allowance (HRA) is one of the most powerful tax-saving components in your salary structure if you live in rented accommodation and opt for the Old Tax Regime.
                </p>
                <p>
                    The exemption you can claim on HRA is calculated as the minimum of the following three amounts:
                </p>
                <ul>
                    <li>The actual HRA received from your employer.</li>
                    <li>50% of your Basic Salary (if living in a Metro city) or 40% (if in a Non-Metro).</li>
                    <li>Actual rent paid minus 10% of your Basic Salary.</li>
                </ul>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl my-6 border border-teal-100 dark:border-teal-800">
                    <h4 className="text-teal-800 dark:text-teal-300 font-bold mb-2">Optimize Your Rent</h4>
                    <p className="text-sm text-teal-700 dark:text-teal-400 mb-0">
                        Don't guess your tax savings. Use our <Link to="/calculator/india-hra/" className="font-bold underline">HRA Calculator</Link> to find the exact rent amount that maximizes your tax exemption based on your specific basic salary.
                    </p>
                </div>
            </section>

            <section id="pf-and-gratuity">
                <h2>Understanding PF and Gratuity</h2>
                <p>
                    <strong>Employee Provident Fund (EPF):</strong> Typically, 12% of your Basic Salary is deducted as your contribution to PF, and your employer matches this amount. This is a brilliant debt investment because it is completely tax-free (EEE status) and currently offers around 8.1% to 8.25% interest.
                </p>
                <p>
                    <strong>Gratuity:</strong> Gratuity is a reward for long-term service, calculated at 4.81% of your Basic Salary. However, it is deducted from your CTC from day one, even though you are only eligible to receive it if you complete 5 continuous years with the company. Keep this in mind when negotiating a new CTC!
                </p>
            </section>

            <section id="flexible-benefits">
                <h2>Flexible Benefit Plans (FBP)</h2>
                <p>
                    Many modern companies offer Flexible Benefit Plans (FBP). This allows you to restructure the "Special Allowance" portion of your salary into tax-exempt reimbursable components. Common FBP components include:
                </p>
                <ul>
                    <li><strong>Food Coupons/Sodexo:</strong> Up to ₹50 per meal (approx ₹26,400 per year) is tax-exempt.</li>
                    <li><strong>LTA (Leave Travel Allowance):</strong> Tax exemption on domestic travel tickets twice in a block of four years.</li>
                    <li><strong>Internet/Telephone Reimbursements:</strong> Fully tax-exempt against actual bills.</li>
                    <li><strong>NPS Contribution:</strong> Employer contribution to NPS up to 10% of Basic is tax-exempt under Section 80CCD(2), and this works in the New Tax Regime as well!</li>
                </ul>
                <p>
                    Restructuring just ₹1 Lakh from a fully taxable Special Allowance into FBP components can save you up to ₹31,200 in taxes if you are in the 30% bracket.
                </p>
            </section>
        </>
    );
}
