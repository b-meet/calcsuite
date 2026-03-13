export interface FAQ {
    question: string;
    answer: string;
}

export interface CalculatorMetadata {
    title: string;
    description: string;
    faqs: FAQ[];
}

export const CALCULATOR_METADATA: Record<string, Record<string, CalculatorMetadata>> = {
    INVESTMENT: {
        SIP: {
            title: "SIP Calculator - Systematic Investment Plan Returns",
            description: "Calculate your mutual fund SIP returns online. Estimate the future value of your monthly investments with our easy-to-use SIP return calculator.",
            faqs: [
                { question: "What is a SIP?", answer: "A Systematic Investment Plan (SIP) is a method of investing a fixed sum in mutual funds regularly." },
                { question: "How are SIP returns calculated?", answer: "SIP returns are calculated using the compound interest formula, considering the monthly frequency." },
                { question: "Can I stop a SIP anytime?", answer: "Yes, most mutual fund SIPs are flexible and can be stopped or paused at any time without penalty." }
            ]
        },
        LUMPSUM: {
            title: "Lumpsum Investment Calculator - Mutual Fund Returns",
            description: "Determine the future value of your one-time mutual fund investment. Get accurate estimates for lumpsum returns based on expected growth rates.",
            faqs: [
                { question: "What is a lumpsum investment?", answer: "A lumpsum investment is a one-time large deposit into a mutual fund or financial instrument." },
                { question: "Is lumpsum better than SIP?", answer: "Lumpsum can be better in a rising market, whereas SIP helps average out costs in volatile markets." },
                { question: "How to use a lumpsum calculator?", answer: "Enter the initial investment amount, expected annual return, and time period to see the maturity value." }
            ]
        },
        SWP: {
            title: "SWP Calculator - Systematic Withdrawal Plan",
            description: "Plan your monthly withdrawals from mutual funds. Calculate how long your corpus will last with a Systematic Withdrawal Plan (SWP) using our tool.",
            faqs: [
                { question: "What is SWP?", answer: "A Systematic Withdrawal Plan allows you to withdraw a fixed amount from your mutual fund investment at regular intervals." },
                { question: "How does SWP work?", answer: "It works by redeeming units of your mutual fund based on the withdrawal amount you set." },
                { question: "Is SWP tax-efficient?", answer: "SWP is often more tax-efficient than dividends as only the capital gains portion is taxed." }
            ]
        },
        MUTUAL_FUND_RETURNS: {
            title: "Mutual Fund Returns Calculator - Estimate Growth",
            description: "Calculate the potential returns on your mutual fund investments. Compare different funds and see how your wealth grows over time with compounding.",
            faqs: [
                { question: "How to calculate mutual fund returns?", answer: "Returns can be calculated using Absolute Returns, CAGR, or XIRR depending on the investment type." },
                { question: "What is a good return for mutual funds?", answer: "Equity funds typically aim for 12-15% annually, but returns are subject to market risks." },
                { question: "Are mutual fund returns guaranteed?", answer: "No, mutual fund returns depend on market performance and are not guaranteed." }
            ]
        },
        STEP_UP_SIP: {
            title: "Step Up SIP Calculator - Boost Your Investments",
            description: "See how increasing your SIP amount annually can drastically grow your wealth. Calculate the power of a Stepped-up SIP with our free online tool.",
            faqs: [
                { question: "What is a Step-up SIP?", answer: "A Step-up SIP allows you to increase your SIP contribution by a fixed percentage or amount every year." },
                { question: "Why should I use a Step-up SIP?", answer: "It helps you reach your financial goals faster by aligning your investments with your rising income." },
                { question: "How much should I step up?", answer: "Common step-up percentages are 5% to 10% annually, matching typical salary hikes." }
            ]
        },
        CAGR: {
            title: "CAGR Calculator - Compound Annual Growth Rate",
            description: "Calculate the annual growth rate of your investment over time. Use our CAGR tool to understand the true performance of your portfolio.",
            faqs: [
                { question: "What is CAGR?", answer: "CAGR stands for Compound Annual Growth Rate, representing the mean annual growth rate over a specific period." },
                { question: "How is CAGR different from absolute return?", answer: "Absolute return only shows total profit, while CAGR factor in the time duration of the investment." },
                { question: "Is CAGR useful for short-term stocks?", answer: "CAGR is best used for multi-year investments to smooth out annual volatility." }
            ]
        },
        XIRR: {
            title: "XIRR Calculator - Internal Rate of Return",
            description: "Calculate the accurate return for irregular cash flows. Use our XIRR tool for complex investments like SIPs with varied dates or amounts.",
            faqs: [
                { question: "What is XIRR?", answer: "Extended Internal Rate of Return (XIRR) is a method to calculate returns when there are multiple, irregular cash flows." },
                { question: "When should I use XIRR instead of CAGR?", answer: "Use XIRR for SIPs or multiple buy/sell transactions; use CAGR for one-time lumpsum investments." },
                { question: "How do I calculate XIRR in Excel?", answer: "You use the =XIRR(values, dates) formula. Our calculator does this automatically for you." }
            ]
        },
        ELSS: {
            title: "ELSS Calculator - Tax Saving Mutual Funds",
            description: "Estimate your tax savings and returns with Equity Linked Saving Schemes. Calculate the benefit of investing in ELSS under Section 80C.",
            faqs: [
                { question: "What is ELSS?", answer: "ELSS is a type of mutual fund that offers tax benefits under Section 80C with a 3-year lock-in period." },
                { question: "What is the lock-in for ELSS?", answer: "ELSS has a mandatory lock-in period of 3 years, the shortest among 80C options." },
                { question: "Can I invest in ELSS via SIP?", answer: "Yes, you can start a SIP in ELSS, but note that each monthly installment will have its own 3-year lock-in." }
            ]
        },
        LTCG: {
            title: "LTCG Tax Calculator - Long Term Capital Gains",
            description: "Calculate your Long Term Capital Gains tax on stocks and mutual funds. Stay updated with the latest tax rules for your equity investments.",
            faqs: [
                { question: "What is LTCG tax?", answer: "LTCG tax is levied on profits from selling assets held for over a year (for equity) or longer for other assets." },
                { question: "How much is LTCG on equity?", answer: "Currently, LTCG over ₹1.25 lakh is taxed at 12.5% without indexation for equity." },
                { question: "Is there an exemption for LTCG?", answer: "Yes, for equity shares and mutual funds, gains up to ₹1.25 lakh per financial year are exempt." }
            ]
        },
        STOCK_AVERAGE: {
            title: "Stock Average Calculator - Lower Your Entry Price",
            description: "Calculate the average price of your stock holdings when you buy in multiple tranches. Perfect for averaging down your costs in a dip.",
            faqs: [
                { question: "What is stock averaging?", answer: "Stock averaging is the practice of buying more shares as the price drops to lower the average cost per share." },
                { question: "How to use a stock average calculator?", answer: "Enter the number of shares and price for your first and second purchases to get the new average." },
                { question: "Is averaging down always good?", answer: "Averaging down can be risky if the stock's fundamentals are weak; it's best for high-quality companies." }
            ]
        }
    },
    TAXATION: {
        INCOME_TAX: {
            title: "Income Tax Calculator - FY 2024-25 & 2025-26",
            description: "Calculate your income tax liability for the latest financial year. Compare old vs new tax regimes and optimize your taxes with our free online tool.",
            faqs: [
                { question: "What is the new tax regime?", answer: "The new tax regime offers lower tax rates but removes most exemptions and deductions available in the old regime." },
                { question: "How much income is tax-free in India?", answer: "Under the new regime, income up to ₹3 lakh is exempt, but a tax rebate makes effective income up to ₹7 lakh tax-free (FY 24-25)." },
                { question: "Can I switch tax regimes?", answer: "Salaried individuals can choose between regimes every year, but those with business income have limited options." }
            ]
        },
        GST: {
            title: "GST Calculator - Calculate Goods and Services Tax",
            description: "Quickly calculate GST amounts for various tax slabs (5%, 12%, 18%, 28%). Add or remove GST from your product prices with accuracy.",
            faqs: [
                { question: "What are the common GST slabs?", answer: "The most common GST rates in India are 5%, 12%, 18%, and 28%." },
                { question: "How is inclusive GST calculated?", answer: "Inclusive GST = [Price - (Price * (100 / (100 + GST%)))]" },
                { question: "Is GST applicable to all businesses?", answer: "GST registration is mandatory for businesses exceeding certain turnover limits (usually ₹20/40 lakh)." }
            ]
        },
        TDS: {
            title: "TDS Calculator - Tax Deducted at Source",
            description: "Calculate the TDS amount on salary, interest, rent, and professional fees. Stay compliant with the latest TDS rates and rules.",
            faqs: [
                { question: "What is TDS?", answer: "Tax Deducted at Source (TDS) is a system where the person responsible for making payments deducts tax before paying the balance." },
                { question: "When is TDS deducted?", answer: "TDS is deducted at the time of credit to the payee or at the time of payment, whichever is earlier." },
                { question: "How to claim TDS refund?", answer: "You can claim a TDS refund by filing your income tax return if your total tax liability is less than the TDS deducted." }
            ]
        },
        HRA: {
            title: "HRA Calculator - House Rent Allowance Exemption",
            description: "Determine how much tax you can save on your house rent. Calculate your HRA exemption amount based on your salary and rent paid.",
            faqs: [
                { question: "How is HRA exemption calculated?", answer: "It is the minimum of: 1) Actual HRA received, 2) 50% of salary (40% for non-metros), or 3) Rent paid minus 10% of salary." },
                { question: "Can I claim HRA if I live in my own house?", answer: "No, HRA exemption can only be claimed if you are living in a rented accommodation and paying rent." },
                { question: "What documents are needed for HRA?", answer: "Rent receipts are needed, and if annual rent exceeds ₹1 lakh, the landlord's PAN is also required." }
            ]
        },
        ADVANCE_TAX: {
            title: "Advance Tax Calculator - Avoid Penalties",
            description: "Calculate your advance tax installments and due dates. Ensure you pay your taxes on time to avoid interest penalties under Section 234B/234C.",
            faqs: [
                { question: "Who needs to pay advance tax?", answer: "Every taxpayer whose estimated tax liability for the year is ₹10,000 or more after TDS must pay advance tax." },
                { question: "What are the advance tax due dates?", answer: "Due dates are June 15 (15%), Sep 15 (45%), Dec 15 (75%), and March 15 (100%)." },
                { question: "What is the penalty for late payment?", answer: "Interest is charged at 1% per month under Sections 234B and 234C for shortfalls in advance tax." }
            ]
        },
        TAX_SAVING: {
            title: "Tax Saving Calculator - Optimize Your Deductions",
            description: "Find the best ways to save tax under Section 80C, 80D, and more. Maximize your take-home pay with our expert tax planning tool.",
            faqs: [
                { question: "What is the limit for Section 80C?", answer: "The maximum deduction allowed under Section 80C is ₹1.5 lakh per financial year." },
                { question: "How much tax can I save with health insurance?", answer: "Under Section 80D, you can save tax on premiums up to ₹25,000 (self) and ₹50,000 (senior citizen parents)." },
                { question: "Are home loan repayments tax-deductible?", answer: "Yes, the principal repayment is covered under Section 80C, and interest is deductible under Section 24." }
            ]
        }
    },
    BANKING_LOANS: {
        EMI: {
            title: "EMI Calculator - Calculate Monthly Loan Installments",
            description: "Easily calculate your monthly loan repayments for any type of loan. Get a detailed amortization schedule and see your total interest cost.",
            faqs: [
                { question: "How is EMI calculated?", answer: "The formula is: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1], where P is Principal, R is Rate, and N is Tenure." },
                { question: "Does EMI change during the loan?", answer: "EMIs remain constant unless you have a floating rate loan or make a prepayment." },
                { question: "Is EMI better than a lump sum?", answer: "EMIs make large purchases affordable by spreading the cost over time, but they involve interest costs." }
            ]
        },
        HOME_LOAN_EMI: {
            title: "Home Loan EMI Calculator - Plan Your Dream Home",
            description: "Calculate your house loan EMI and total interest. Check how prepayments can reduce your loan tenure and save you lakhs in interest.",
            faqs: [
                { question: "What is the maximum tenure for a home loan?", answer: "Most banks offer home loans for a tenure of up to 30 years." },
                { question: "How much home loan can I get?", answer: "Eligibility usually depends on your income, age, credit score, and existing liabilities (usually 60-70 times monthly income)." },
                { question: "Are home loans tax-deductible?", answer: "Yes, you get deductions on principal (Sec 80C) and interest (Sec 24) components." }
            ]
        },
        CAR_LOAN_EMI: {
            title: "Car Loan EMI Calculator - Finance Your New Vehicle",
            description: "Find the monthly installment for your car loan. Compare different bank offers and see the total cost of ownership before buying.",
            faqs: [
                { question: "What is the interest rate for car loans?", answer: "Rates typically range from 8.5% to 12% depending on the bank and your credit profile." },
                { question: "Can I get 100% car financing?", answer: "Some banks offer 100% on-road financing, but most require a down payment of 10-20%." },
                { question: "What is the tenure for car loans?", answer: "Car loan tenures usually range from 1 to 7 years." }
            ]
        },
        EDUCATION_LOAN_EMI: {
            title: "Education Loan EMI Calculator - Support Your Studies",
            description: "Calculate the EMI for your student loan. Plan your future higher education with accurate repayment schedules and interest estimates.",
            faqs: [
                { question: "Does education loan have a moratorium period?", answer: "Yes, it usually includes a holiday period (course duration plus 6-12 months) before repayment starts." },
                { question: "Is there a tax benefit for education loans?", answer: "Yes, the interest paid is fully deductible under Section 80E without any upper limit for 8 years." },
                { question: "What can be covered in an education loan?", answer: "It covers tuition fees, accommodation, exam fees, and travel expenses for studies abroad." }
            ]
        },
        FD: {
            title: "FD Calculator - Fixed Deposit Returns",
            description: "Calculate the maturity amount of your Fixed Deposit. Compare rates across banks and see the impact of compounding on your savings.",
            faqs: [
                { question: "How is FD interest calculated?", answer: "Banks use quarterly compounding for FDs usually. Interest = P * (1 + r/n)^(n*t)." },
                { question: "Is FD interest taxable?", answer: "Yes, FD interest is taxable as per your income tax slab. TDS is deducted if interest exceeds ₹40,000 (₹50,000 for seniors)." },
                { question: "What is a cumulative FD?", answer: "In a cumulative FD, interest is reinvested and paid along with the principal at maturity." }
            ]
        },
        RD: {
            title: "RD Calculator - Recurring Deposit Earnings",
            description: "Estimate the future value of your monthly savings with a Recurring Deposit. Calculate RD maturity amounts with current interest rates.",
            faqs: [
                { question: "What is a Recurring Deposit?", answer: "RD is a tool where you invest a fixed amount every month for a pre-determined tenure at a fixed interest rate." },
                { question: "How is RD better than FD?", answer: "RD is better for building savings from monthly income, while FD is for investing a lump sum of money." },
                { question: "Can I withdraw RD prematurely?", answer: "Yes, but banks usually charge a penalty (around 1%) on the applicable interest rate for that period." }
            ]
        },
        PPF: {
            title: "PPF Calculator - Public Provident Fund Growth",
            description: "Calculate your PPF maturity amount and tax-free interest. Plan your long-term wealth creation with the security of a government-backed scheme.",
            faqs: [
                { question: "What is the interest rate for PPF?", answer: "The interest rate is set by the government quarterly. Currently, it is around 7.1%." },
                { question: "What is the lock-in for PPF?", answer: "PPF has a tenure of 15 years, which can be extended in blocks of 5 years." },
                { question: "How much can I invest in PPF?", answer: "You can invest between ₹500 and ₹1,50,000 per financial year." }
            ]
        },
        SUKANYA_SAMRIDDHI: {
            title: "SSY Calculator - Sukanya Samriddhi Yojana",
            description: "Calculate the maturity value of your SSY account for your girl child's future. Estimate the corpus for education or marriage with high interest rates.",
            faqs: [
                { question: "Who can open an SSY account?", answer: "A parent or guardian can open an SSY account for a girl child under the age of 10." },
                { question: "How long is the SSY tenure?", answer: "The account matures after 21 years or upon the girl's marriage after age 18." },
                { question: "What are the tax benefits of SSY?", answer: "SSY falls under the EEE category, meaning the deposit, interest, and maturity are all tax-free." }
            ]
        },
        NSC: {
            title: "NSC Calculator - National Savings Certificate",
            description: "Calculate the interest and maturity amount for your NSC investment. A safe and secure government savings plan with tax benefits under Section 80C.",
            faqs: [
                { question: "What is the tenure of NSC?", answer: "The current National Savings Certificate (NSC VIII Issue) has a tenure of 5 years." },
                { question: "Is NSC interest taxable?", answer: "The interest is taxable, but it is deemed to be reinvested and hence eligible for 80C deduction for the first 4 years." },
                { question: "Can I take a loan against NSC?", answer: "Yes, NSC certificates can be used as collateral to get loans from banks." }
            ]
        },
        SCSS: {
            title: "SCSS Calculator - Senior Citizens Savings Scheme",
            description: "Calculate the quarterly interest income for senior citizens. Estimate your returns from this safe and high-yielding government scheme.",
            faqs: [
                { question: "Who is eligible for SCSS?", answer: "Individuals aged 60 years or above, or 55 years for those who have retired under VRS." },
                { question: "What is the maximum limit for SCSS?", answer: "An individual can invest up to ₹30 lakh in SCSS (increased from ₹15 lakh in 2023)." },
                { question: "What is the tenure of SCSS?", answer: "The deposit matures in 5 years, with an option to extend it for another 3 years." }
            ]
        },
        KVP: {
            title: "KVP Calculator - Kisan Vikas Patra",
            description: "Determine how long it takes to double your money with Kisan Vikas Patra. Calculate the maturity value of your KVP certificate easily.",
            faqs: [
                { question: "Does KVP double your money?", answer: "Yes, KVP is designed to double your investment over a fixed period (currently around 115 months)." },
                { question: "Is KVP risk-free?", answer: "Yes, KVP is a government-backed savings scheme, offering complete security of your principal and interest." },
                { question: "Can KVP be transferred?", answer: "Yes, KVP certificates can be transferred from one person to another or from one post office to another." }
            ]
        },
        GOLD_LOAN: {
            title: "Gold Loan Calculator - Get Instant Finance",
            description: "Calculate the loan amount you can get against your gold jewelry. Check interest rates and per gram gold loan rates from top banks.",
            faqs: [
                { question: "How much loan can I get on gold?", answer: "The loan-to-value (LTV) ratio is usually up to 75% of the market value of the gold." },
                { question: "What is the minimum purity for a gold loan?", answer: "Banks usually accept gold with a purity of 18 carats or higher." },
                { question: "How is gold loan interest calculated?", answer: "Interest can be simple interest or monthly reducing interest depending on the bank's scheme." }
            ]
        }
    },
    RETIREMENT_SALARY: {
        EPF: {
            title: "EPF Calculator - Employee Provident Fund Growth",
            description: "Calculate your EPF maturity amount including employer contributions and interest. Plan your retirement with accurate provident fund estimates.",
            faqs: [
                { question: "What is the current EPF interest rate?", answer: "The interest rate for EPF is declared annually by the government. For FY 2023-24, it was 8.25%." },
                { question: "How much do employees contribute to EPF?", answer: "Employees usually contribute 12% of their basic salary plus dearness allowance (DA) to their EPF account." },
                { question: "Can I withdraw EPF before retirement?", answer: "Partial withdrawals are allowed for specific reasons like marriage, education, medical emergencies, or house purchase after certain years of service." }
            ]
        },
        NPS: {
            title: "NPS Calculator - National Pension System Returns",
            description: "Calculate your pension and lumpsum amount at retirement with NPS. Estimate your returns based on asset allocation and contribution amounts.",
            faqs: [
                { question: "What is NPS?", answer: "The National Pension System (NPS) is a voluntary, long-term retirement savings scheme designed to provide a monthly income after retirement." },
                { question: "What are the tax benefits of NPS?", answer: "You get up to ₹1.5 lakh under 80C and an additional ₹50,000 under Section 80CCD(1B)." },
                { question: "Can I choose my fund manager in NPS?", answer: "Yes, NPS allows you to choose from several Pension Fund Managers (PFMs) and decide your asset allocation between Equity, Corporate Bonds, and Government Securities." }
            ]
        },
        GRATUITY: {
            title: "Gratuity Calculator - Calculate Your Loyalty Benefit",
            description: "Estimate the gratuity amount you are entitled to receive from your employer. Based on your last drawn salary and years of service.",
            faqs: [
                { question: "When is gratuity payable?", answer: "Gratuity is usually payable after an employee completes 5 years of continuous service with an organization." },
                { question: "How is gratuity calculated?", answer: "Formula: (15 * Last Drawn Salary * Tenure) / 26. Salary includes Basic + DA." },
                { question: "What is the maximum tax-free gratuity?", answer: "As per the latest rules, gratuity up to ₹20 lakh is exempt from tax for private-sector employees." }
            ]
        },
        APY: {
            title: "APY Calculator - Atal Pension Yojana Benefits",
            description: "Calculate the monthly contribution required for your desired pension under APY. Secure your old age with a guaranteed government pension.",
            faqs: [
                { question: "What is Atal Pension Yojana?", answer: "APY is a government-backed pension scheme for workers in the unorganized sector, offering a guaranteed pension of ₹1,000 to ₹5,000 per month." },
                { question: "Who can join APY?", answer: "Any Indian citizen between the age of 18 and 40 years can join the scheme." },
                { question: "Is APY contribution tax-deductible?", answer: "Yes, contributions to APY are eligible for tax benefits under Section 80CCD." }
            ]
        },
        RETIREMENT: {
            title: "Retirement Calculator - Plan Your Golden Years",
            description: "Determine the corpus you need to maintain your lifestyle after retirement. Account for inflation and expected returns with our planning tool.",
            faqs: [
                { question: "How much corpus do I need for retirement?", answer: "A common rule is to have 20-30 times your annual expenses saved by the time you retire." },
                { question: "How does inflation affect retirement?", answer: "Inflation reduces the purchasing power of your money, meaning you'll need a much larger corpus in the future to maintain the same lifestyle." },
                { question: "When should I start retirement planning?", answer: "The best time to start is as soon as you start earning, to benefit from the power of compounding over a long period." }
            ]
        },
        SALARY: {
            title: "Salary Calculator - Take-Home Pay Estimator",
            description: "Calculate your in-hand salary after PF, PT, and Income Tax deductions. See your monthly take-home pay based on your CTC.",
            faqs: [
                { question: "What is the difference between CTC and In-hand salary?", answer: "CTC (Cost to Company) includes all benefits and employer contributions, while In-hand salary is what you receive after all deductions." },
                { question: "What are common salary deductions?", answer: "Standard deductions include Employee Provident Fund (EPF), Professional Tax (PT), and Income Tax (TDS)." },
                { question: "How is HRA calculated in salary?", answer: "HRA is typically a percentage of your basic salary (e.g., 40-50%) and is part of your gross pay." }
            ]
        },
        SALARY_HIKE: {
            title: "Salary Hike Calculator - Percentage Increase",
            description: "Calculate the percentage increase in your salary after an appraisal. See your new monthly and annual CTC with ease.",
            faqs: [
                { question: "How to calculate salary hike percentage?", answer: "Formula: [(New Salary - Old Salary) / Old Salary] * 100." },
                { question: "What is a good salary hike percentage?", answer: "An average hike in India ranges from 8% to 12%, though top performers can get 15% or more." },
                { question: "Does a hike affect my tax slab?", answer: "Yes, if your new total income exceeds the threshold of your current tax slab, you may move to a higher slab." }
            ]
        },
        LEAVE_ENCASHMENT: {
            title: "Leave Encashment Calculator - Unused Leave Value",
            description: "Calculate the value of your accumulated unused leaves. Find out the taxable and exempt portions of your leave encashment amount.",
            faqs: [
                { question: "Is leave encashment taxable?", answer: "Leave encashment received during service is fully taxable. At retirement, it is exempt up to certain limits (₹25 lakh for private employees)." },
                { question: "How is leave encashment calculated?", answer: "It is usually calculated based on your last drawn basic salary plus DA. Daily rate = Monthly Salary / 30." },
                { question: "Can I encash leaves every year?", answer: "This depends on your company's policy; some allow annual encashment while others only at retirement or resignation." }
            ]
        }
    },
    MISC: {
        SIMPLE_INTEREST: {
            title: "Simple Interest Calculator - Basic Loan Interest",
            description: "Calculate simple interest on your loans or investments. A quick and easy way to find the interest amount using the P*R*T formula.",
            faqs: [
                { question: "What is the simple interest formula?", answer: "Simple Interest (SI) = (Principal * Rate * Time) / 100." },
                { question: "How is SI different from CI?", answer: "Simple interest is calculated only on the principal, while compound interest is calculated on the principal plus accumulated interest." },
                { question: "Where is simple interest used?", answer: "It is often used for short-term loans, car loans, and some types of personal loans." }
            ]
        },
        COMPOUND_INTEREST: {
            title: "Compound Interest Calculator - Power of Compounding",
            description: "Determine how your savings grow with compound interest. Calculate annual, half-yearly, or monthly compounding for your investments.",
            faqs: [
                { question: "What is compound interest?", answer: "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods." },
                { question: "How often can interest be compounded?", answer: "Common compounding frequencies are annually, quarterly, monthly, or even daily." },
                { question: "Why is compounding called the eighth wonder?", answer: "Because it allows small amounts of money to grow exponentially over long periods as you earn interest on your interest." }
            ]
        },
        INFLATION: {
            title: "Inflation Calculator - Future Value of Money",
            description: "See how inflation erodes the value of your money over time. Calculate what your current expenses will cost in the future.",
            faqs: [
                { question: "What is inflation?", answer: "Inflation is the rate at which the general level of prices for goods and services is rising, and subsequently, purchasing power is falling." },
                { question: "What is the average inflation rate in India?", answer: "Historically, India's retail inflation (CPI) has averaged around 5-6% per year." },
                { question: "How should I beat inflation?", answer: "Investing in assets like equity, real estate, or gold typically helps in generating returns that exceed the inflation rate." }
            ]
        },
        BROKERAGE: {
            title: "Brokerage Calculator - Equity & F&O Charges",
            description: "Calculate the total brokerage and other charges (STT, GST) for your stock trades. Estimate your net profit or loss after all trading costs.",
            faqs: [
                { question: "What are common trading charges?", answer: "Charges include brokerage, STT (Securities Transaction Tax), GST, SEBI charges, and Stamp Duty." },
                { question: "Is zero brokerage really zero?", answer: "Most 'zero brokerage' brokers only waive the brokerage fee; you still have to pay statutory taxes like STT and GST." },
                { question: "How does brokerage affect ROI?", answer: "High brokerage can eat into your profits, especially for frequent intraday traders, making it crucial to choose a cost-effective broker." }
            ]
        },
        MARGIN: {
            title: "Margin Calculator - Trading Leverage Estimator",
            description: "Calculate how much margin you need for your trades. Estimate the leverage available for equity and derivatives trading.",
            faqs: [
                { question: "What is margin in trading?", answer: "Margin is the amount of collateral a trader needs to deposit with their broker to cover the risk of their positions." },
                { question: "How does leverage work?", answer: "Leverage allow you to trade larger positions with a smaller amount of money, amplifying both potential profits and losses." },
                { question: "What is a margin call?", answer: "A margin call occurs when the value of a trader's account falls below the broker's required minimum, requiring them to add more funds." }
            ]
        },
        DEPRECIATION: {
            title: "Depreciation Calculator - Asset Value Reduction",
            description: "Calculate the depreciation of your assets using Straight Line or WDV methods. Essential for tax planning and accounting.",
            faqs: [
                { question: "What is depreciation?", answer: "Depreciation is the systematic reduction in the recorded cost of a fixed asset over its useful life." },
                { question: "What is the WDV method?", answer: "Written Down Value (WDV) method applies the depreciation rate to the decreasing book value of the asset each year." },
                { question: "Why is depreciation important for tax?", answer: "Depreciation is a non-cash expense that reduces taxable income, thereby lowering your tax liability." }
            ]
        },
        DISCOUNT: {
            title: "Discount Calculator - Find Sale Prices",
            description: "Quickly find the final price of an item after a discount. Perfect for shopping sales and calculating savings.",
            faqs: [
                { question: "How to calculate a 20% discount?", answer: "Multiply the original price by 0.20 to find the discount amount, then subtract it from the original price." },
                { question: "What is a 'double discount'?", answer: "It's when a second discount is applied to the already discounted price, not the original price." },
                { question: "How to find the original price from a discount?", answer: "Formula: Discounted Price / (1 - Discount Percentage)." }
            ]
        },
        NET_WORTH: {
            title: "Net Worth Calculator - Track Your Wealth",
            description: "Calculate your personal net worth by listing your assets and liabilities. Monitor your financial health and progress over time.",
            faqs: [
                { question: "What is net worth?", answer: "Net worth is the total value of everything you own (assets) minus everything you owe (liabilities)." },
                { question: "What are considered assets?", answer: "Assets include cash, bank balances, investments, real estate, gold, and retirement accounts." },
                { question: "How can I increase my net worth?", answer: "You can increase it by increasing your savings, growing your investment returns, or paying down debt." }
            ]
        },
        NPV: {
            title: "NPV Calculator - Net Present Value",
            description: "Calculate the Net Present Value of your investment projects. Determine the profitability of an investment considering the time value of money.",
            faqs: [
                { question: "What is NPV?", answer: "Net Present Value (NPV) is the difference between the present value of cash inflows and the present value of cash outflows over a period of time." },
                { question: "What does a positive NPV mean?", answer: "A positive NPV indicates that the projected earnings generated by a project or investment exceed the anticipated costs." },
                { question: "How is NPV used in business?", answer: "Businesses use NPV to analyze the profitability of a projected investment or project, helping in capital budgeting decisions." }
            ]
        },
        FUTURE_VALUE: {
            title: "Future Value Calculator - Investment Growth",
            description: "Calculate the future value of a current investment based on a fixed interest rate. Understand how today's money grows over time.",
            faqs: [
                { question: "What is Future Value (FV)?", answer: "FV is the value of a current asset at a specified date in the future based on an assumed rate of growth." },
                { question: "Does FV account for inflation?", answer: "Standard FV calculations don't account for inflation; you must adjust the interest rate (real rate) to account for it." },
                { question: "What is the FV formula?", answer: "FV = PV * (1 + r)^n, where PV is present value, r is interest rate, and n is number of periods." }
            ]
        },
        PRESENT_VALUE: {
            title: "Present Value Calculator - Value of Future Money",
            description: "Determine the current value of a future sum of money. Essential for understanding the time value of money and making investment decisions.",
            faqs: [
                { question: "What is Present Value (PV)?", answer: "PV is the current value of a future sum of money or stream of cash flows given a specific rate of return." },
                { question: "Why is PV lower than the future sum?", answer: "Money available now is worth more than the same amount in the future because it can be invested to earn interest." },
                { question: "When is PV used?", answer: "PV is used in finance to value loans, mortgages, annuities, and to calculate the intrinsic value of stocks." }
            ]
        }
    }
};


