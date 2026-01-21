
export default function MortgageContent() {
    return (
        <div className="prose prose-slate max-w-none mt-12 text-left">
            <h2>Mortgage Calculator Guide</h2>
            <p>
                The Mortgage Calculator helps estimate the monthly payment due along with other financial costs associated with mortgages.
                There are options to include extra payments or annual percentage increases of common mortgage-related expenses.
                The calculator is mainly intended for use by U.S. residents.
            </p>

            <h3>Mortgages</h3>
            <p>
                A mortgage is a loan secured by property, usually real estate property. Lenders define it as the money borrowed to pay for real estate.
                In essence, the lender helps the buyer pay the seller of a house, and the buyer agrees to repay the money borrowed over a period of time,
                usually 15 or 30 years in the U.S. Each month, a payment is made from buyer to lender.
            </p>
            <p>
                A portion of the monthly payment is called the principal, which is the original amount borrowed.
                The other portion is the interest, which is the cost paid to the lender for using the money.
                There may be an escrow account involved to cover the cost of property taxes and insurance.
                The buyer cannot be considered the full owner of the mortgaged property until the last monthly payment is made.
                In the U.S., the most common mortgage loan is the conventional 30-year fixed-interest loan, which represents 70% to 90% of all mortgages.
                Mortgages are how most people are able to own homes in the U.S.
            </p>

            <h3>Mortgage Calculator Components</h3>
            <p>A mortgage usually includes the following key components. These are also the basic components of a mortgage calculator.</p>
            <ul>
                <li>
                    <strong>Loan amount</strong>: the amount borrowed from a lender or bank. In a mortgage, this amounts to the purchase price minus any down payment.
                    The maximum loan amount one can borrow normally correlates with household income or affordability.
                </li>
                <li>
                    <strong>Down payment</strong>: the upfront payment of the purchase, usually a percentage of the total price.
                    This is the portion of the purchase price covered by the borrower. Typically, mortgage lenders want the borrower to put 20% or more as a down payment.
                </li>
                <li>
                    <strong>Loan term</strong>: the amount of time over which the loan must be repaid in full.
                    Most fixed-rate mortgages are for 15, 20, or 30-year terms. A shorter period, such as 15 or 20 years, typically includes a lower interest rate.
                </li>
                <li>
                    <strong>Interest rate</strong>: the percentage of the loan charged as a cost of borrowing.
                    Mortgages can charge either fixed-rate mortgages (FRM) or adjustable-rate mortgages (ARM).
                </li>
            </ul>

            <h3>Costs Associated with Home Ownership and Mortgages</h3>
            <p>
                Monthly mortgage payments usually comprise the bulk of the financial costs associated with owning a house, but there are other substantial costs to keep in mind.
                These costs are separated into two categories, recurring and non-recurring.
            </p>

            <h4>Recurring Costs</h4>
            <ul>
                <li><strong>Property taxes</strong>: a tax that property owners pay to governing authorities. In the U.S., property tax is usually managed by municipal or county governments.</li>
                <li><strong>Home insurance</strong>: an insurance policy that protects the owner from accidents that may happen to their real estate properties.</li>
                <li><strong>Private mortgage insurance (PMI)</strong>: protects the mortgage lender if the borrower is unable to repay the loan.</li>
                <li><strong>HOA fee</strong>: a fee imposed on the property owner by a homeowner's association (HOA).</li>
            </ul>

            <h4>Non-Recurring Costs</h4>
            <ul>
                <li><strong>Closing costs</strong>: the fees paid at the closing of a real estate transaction.</li>
                <li><strong>Initial renovations</strong>: some buyers choose to renovate before moving in.</li>
                <li><strong>Miscellaneous</strong>: new furniture, new appliances, and moving costs.</li>
            </ul>

            <h3>Early Repayment and Extra Payments</h3>
            <p>
                In many situations, mortgage borrowers may want to pay off mortgages earlier rather than later, either in whole or in part,
                for reasons including but not limited to interest savings, wanting to sell their home, or refinancing.
            </p>

            <h4>Early Repayment Strategies</h4>
            <ul>
                <li><strong>Make extra payments</strong>: This is simply an extra payment over and above the monthly payment.</li>
                <li><strong>Biweekly payments</strong>: The borrower pays half the monthly payment every two weeks.</li>
                <li><strong>Refinance to a loan with a shorter term</strong>: Refinancing involves taking out a new loan to pay off an old loan.</li>
            </ul>

            <h3>Brief History of Mortgages in the U.S.</h3>
            <p>
                In the early 20th century, buying a home involved saving up a large down payment.
                Borrowers would have to put 50% down, take out a three or five-year loan, then face a balloon payment at the end of the term.
                Only four in ten Americans could afford a home under such conditions. During the Great Depression, one-fourth of homeowners lost their homes.
            </p>
            <p>
                To remedy this situation, the government created the Federal Housing Administration (FHA) and Fannie Mae in the 1930s to bring liquidity,
                stability, and affordability to the mortgage market. Both entities helped to bring 30-year mortgages with more modest down payments and universal construction standards.
            </p>
        </div>
    );
}
