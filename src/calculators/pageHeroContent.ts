export interface HeroExampleRow {
    label: string;
    value: string;
}

export interface HeroContent {
    utilityLine: string;
    answer: string;
    chips: string[];
    exampleTitle: string;
    exampleNote?: string;
    exampleRows: HeroExampleRow[];
}

interface HeroOverride {
    utilityLine?: string;
    answer?: string;
    exampleTitle?: string;
    exampleNote?: string;
    exampleRows?: HeroExampleRow[];
}

const SHARED_CHIPS = ['Free to use', 'No sign-up', 'Works on mobile'];

const baseHeroContent: Record<string, HeroContent> = {
    'basic-math': {
        utilityLine: 'Handle quick everyday sums, differences, products, and divisions in one clean calculator.',
        answer: 'A basic calculator is best for fast everyday math like adding bills, splitting totals, checking percentages, or confirming numbers on the go. This page gives you a simple four-function calculator with instant results, so you can work through common arithmetic without extra setup, account creation, or complicated controls.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Input', value: '125 + 49' },
            { label: 'Result', value: '174' },
            { label: 'Next check', value: '174 x 3' },
            { label: 'Next result', value: '522' },
        ],
    },
    scientific: {
        utilityLine: 'Solve trig, logarithms, exponents, and more advanced equations from one screen.',
        answer: 'A scientific calculator helps when basic arithmetic is not enough. Use it for trigonometry, logarithms, powers, roots, and grouped expressions so you can solve homework, exam practice, engineering math, or technical calculations faster and with fewer input mistakes than doing the same steps by hand.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'sin(30 deg)', value: '0.5' },
            { label: 'log10(1000)', value: '3' },
            { label: '2^5', value: '32' },
            { label: 'sqrt(144)', value: '12' },
        ],
    },
    triangle: {
        utilityLine: 'Find missing triangle sides, angles, area, and perimeter from the values you know.',
        answer: 'A triangle calculator helps you solve geometry faster by working out missing sides, angles, area, or perimeter from the measurements you already have. It is useful for school math, construction checks, and quick shape problems where you want a clear answer without rearranging each formula yourself.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Known sides', value: '3, 4, 5' },
            { label: 'Triangle type', value: 'Right triangle' },
            { label: 'Area', value: '6 square units' },
            { label: 'Perimeter', value: '12 units' },
        ],
    },
    fraction: {
        utilityLine: 'Add, subtract, multiply, divide, and simplify fractions and mixed numbers quickly.',
        answer: 'A fraction calculator makes it easier to work with fractions, mixed numbers, and simplification in one place. Use it for homework, recipes, measurements, or classroom practice when you want the combined result quickly without manually finding common denominators or reducing every answer on paper.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Problem', value: '3/4 + 1/8' },
            { label: 'Common denominator', value: '6/8 + 1/8' },
            { label: 'Answer', value: '7/8' },
            { label: 'Mixed number', value: 'No conversion needed' },
        ],
    },
    percentage: {
        utilityLine: 'Instantly calculate percentages, percentage increases, and differences without knowing the formulas.',
        answer: 'To calculate the percentage of a number, multiply the number by the percentage and divide by 100. For example, 25% of 200 is 50. To find what percentage one number is of another, divide the part by the whole and multiply by 100. This calculator solves all common percentage problems instantly, showing you the exact formula used for the result.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Common calculations',
        exampleRows: [
            { label: 'What is X% of Y?', value: '15% of 240 = 36' },
            { label: 'What % is X of Y?', value: '45 is 75% of 60' },
            { label: 'Percentage increase', value: '500 to 600 = +20%' },
            { label: 'Percentage decrease', value: '800 to 640 = -20%' },
        ],
    },
    mortgage: {
        utilityLine: 'Estimate monthly mortgage payments, interest, and home loan costs before you borrow.',
        answer: 'A mortgage calculator helps you estimate what a home loan could cost each month based on price, rate, down payment, and term. Use it to compare scenarios before you buy. Results are estimates only because taxes, insurance, lender fees, and final loan terms can change your actual payment.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Estimate only. Taxes, insurance, fees, and lender terms can change the final payment.',
        exampleRows: [
            { label: 'Home price', value: '$300,000' },
            { label: 'Down payment', value: '$60,000' },
            { label: 'Loan amount', value: '$240,000' },
            { label: 'Estimated monthly payment', value: 'About $1,520 at 6.5% for 30 years' },
        ],
    },
    loan: {
        utilityLine: 'Estimate loan payments, interest, and total repayment before you commit to borrowing.',
        answer: 'A loan calculator helps you estimate monthly repayment, total interest, and total cost for a planned loan amount, rate, and term. It is useful for comparing borrowing options quickly so you can see how payment size changes before you apply or agree to final lender terms.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Figures are illustrative estimates. Actual lender terms can differ.',
        exampleRows: [
            { label: 'Loan amount', value: '$50,000' },
            { label: 'Interest rate', value: '12% per year' },
            { label: 'Term', value: '24 months' },
            { label: 'Estimated payment', value: 'About $2,354 per month' },
        ],
    },
    'auto-loan': {
        utilityLine: 'Estimate car loan payments with interest, taxes, and trade-in effect in view.',
        answer: 'An auto loan calculator helps you estimate monthly car payments before you visit a dealer or compare financing offers. Use it to test loan amount, rate, term, taxes, and trade-in value so you can see the likely payment range and total borrowing cost before signing.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Estimate only. Dealer fees, taxes, and lender approvals can change the final amount.',
        exampleRows: [
            { label: 'Car price', value: '$28,000' },
            { label: 'Down payment', value: '$5,000' },
            { label: 'Loan term', value: '60 months' },
            { label: 'Estimated payment', value: 'About $470 per month at 7%' },
        ],
    },
    investment: {
        utilityLine: 'Project future investment value using contributions, return rate, and time horizon.',
        answer: 'An investment calculator helps you estimate how money could grow over time using a starting amount, regular contributions, and an assumed rate of return. It is useful for goal planning because you can compare different savings habits and timelines without building your own spreadsheet first.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Investment returns are not guaranteed. Use examples as planning estimates only.',
        exampleRows: [
            { label: 'Starting amount', value: '$5,000' },
            { label: 'Monthly contribution', value: '$250' },
            { label: 'Return assumption', value: '8% for 10 years' },
            { label: 'Estimated future value', value: 'About $51,700' },
        ],
    },
    retirement: {
        utilityLine: 'Estimate retirement savings needs, future income gap, and ongoing contribution targets.',
        answer: 'A retirement calculator helps you estimate how much you may need later and what you may need to save now to get there. It is useful for long-term planning because you can compare retirement age, expenses, savings rate, and expected returns in one place before making decisions.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Retirement planning is estimate-based. Real needs and returns can vary over time.',
        exampleRows: [
            { label: 'Retirement age', value: '65' },
            { label: 'Current savings', value: '$80,000' },
            { label: 'Monthly saving', value: '$600' },
            { label: 'Projected value', value: 'Review whether it supports your target income' },
        ],
    },
    salary: {
        utilityLine: 'Convert salary across annual, monthly, weekly, daily, and hourly pay formats.',
        answer: 'A salary calculator helps you convert pay between annual, monthly, weekly, daily, and hourly views so you can compare jobs or budget with less guesswork. It is useful when an offer uses one pay format but you need to understand what that number means in another time frame.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Annual salary', value: '$72,000' },
            { label: 'Monthly pay', value: '$6,000' },
            { label: 'Weekly pay', value: 'About $1,385' },
            { label: 'Hourly pay', value: 'About $34.62 at 40 hrs/week' },
        ],
    },
    bmi: {
        utilityLine: 'Calculate your Body Mass Index instantly from height and weight using the WHO standard formula.',
        answer: 'Enter your height and weight to instantly calculate your BMI. The formula is BMI = Weight (kg) ÷ Height (m)². A healthy BMI is 18.5 to 24.9 (WHO standard). Below 18.5 is underweight, 25 to 29.9 is overweight, and 30+ is obese. For Indian and Asian populations, overweight starts at BMI 23. This calculator supports both metric and imperial units.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — adult male',
        exampleNote: 'BMI is a screening tool, not a diagnosis. Consult a doctor for medical advice.',
        exampleRows: [
            { label: 'Height', value: '175 cm (5\'9")' },
            { label: 'Weight', value: '70 kg (154 lbs)' },
            { label: 'BMI', value: '22.9 — Normal weight' },
            { label: 'Healthy range', value: '56.7 kg to 76.3 kg for this height' },
        ],
    },
    calorie: {
        utilityLine: 'Estimate daily calorie needs for maintenance, fat loss, or muscle gain.',
        answer: 'A calorie calculator helps estimate how many calories you may need each day based on age, sex, height, weight, and activity. It is useful for planning weight loss, maintenance, or muscle gain, but it still gives estimates, so real needs can differ from person to person.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Calorie needs are estimates and can vary with training, health, and metabolism.',
        exampleRows: [
            { label: 'Profile', value: '30 years, 165 cm, 65 kg, moderately active' },
            { label: 'Maintenance', value: 'About 2,000 kcal/day' },
            { label: 'Fat loss target', value: 'About 1,750 kcal/day' },
            { label: 'Gain target', value: 'About 2,250 kcal/day' },
        ],
    },
    'body-fat': {
        utilityLine: 'Estimate body fat percentage from body measurements with a quick reference output.',
        answer: 'A body fat calculator helps estimate body fat percentage from measurements such as waist, neck, and height. It is useful for tracking trends over time, but it remains an estimate rather than a direct medical measurement, so treat it as guidance rather than a diagnosis or exact lab result.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Measurement-based estimates can shift with tape placement and formula choice.',
        exampleRows: [
            { label: 'Height', value: '175 cm' },
            { label: 'Waist', value: '82 cm' },
            { label: 'Neck', value: '38 cm' },
            { label: 'Estimated body fat', value: 'About 18%' },
        ],
    },
    bmr: {
        utilityLine: 'Estimate the calories your body needs at rest before daily activity.',
        answer: 'A BMR calculator estimates your basal metabolic rate, which is the energy your body uses at rest to maintain basic functions. It is useful as a planning baseline for nutrition and fitness, but daily calorie needs are usually higher once movement, exercise, and routine activity are added.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Profile', value: '30 years, 175 cm, 70 kg' },
            { label: 'Estimated BMR', value: 'About 1,650 kcal/day' },
            { label: 'At rest means', value: 'Basic body function energy only' },
            { label: 'Next step', value: 'Use activity level for total calorie planning' },
        ],
    },
    'ideal-weight': {
        utilityLine: 'Estimate a healthy weight range using widely cited medical formulas.',
        answer: 'An ideal weight calculator gives you a reference range based on height and common medical formulas. It is useful for general guidance and goal setting, but ideal weight is not one exact number. Body composition, activity, age, and medical context also matter when you interpret the result.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Height', value: '170 cm' },
            { label: 'Reference range', value: 'Varies by formula' },
            { label: 'Use case', value: 'General planning and comparison' },
            { label: 'Reminder', value: 'Not a diagnosis or single target' },
        ],
    },
    pregnancy: {
        utilityLine: 'Estimate due date, pregnancy week, and trimester timeline from key dates.',
        answer: 'A pregnancy calculator helps estimate due date and pregnancy timing from your last menstrual period or conception date. It is useful for planning and tracking milestones, but dates remain estimates and should not replace medical care, ultrasound findings, or advice from your doctor or midwife.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Pregnancy dates are estimates and should be confirmed with a clinician when needed.',
        exampleRows: [
            { label: 'Last period started', value: 'Jan 1' },
            { label: 'Estimated due date', value: 'About Oct 8' },
            { label: 'First trimester', value: 'Weeks 1 to 13' },
            { label: 'Use case', value: 'Early timeline planning' },
        ],
    },
    age: {
        utilityLine: 'Find your exact age in years, months, and days from your date of birth.',
        answer: 'Enter your date of birth to instantly calculate your chronological age. For example, if you were born on January 1, 2000, your age on January 1, 2026, is exactly 26 years, 0 months, and 0 days (or 9,497 days old). This calculator automatically accounts for leap years, varying month lengths, and gives a countdown to your next birthday.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — Born in 2000',
        exampleRows: [
            { label: 'Birth date', value: 'January 1, 2000' },
            { label: 'Target date', value: 'April 17, 2026' },
            { label: 'Chronological age', value: '26 years, 3 months, 16 days' },
            { label: 'Age in days', value: '9,603 days' },
            { label: 'Next birthday', value: 'In 259 days' },
        ],
    },
    gpa: {
        utilityLine: 'Calculate your semester GPA or cumulative CGPA instantly using the standard credit-weighted formula.',
        answer: 'Enter your course credits and grades to calculate your exact GPA. The formula multiplies each grade point by its credit value, sums them up, and divides by total credits. For example, an A (4.0) in a 4-credit course and a B (3.0) in a 3-credit course gives a GPA of 3.57. This tool supports both the 4.0 scale and the 10-point scale commonly used in India.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — 4.0 Scale',
        exampleRows: [
            { label: 'Course 1 (4 credits)', value: 'Grade: A (4.0) = 16 pts' },
            { label: 'Course 2 (3 credits)', value: 'Grade: B (3.0) = 9 pts' },
            { label: 'Total Credits', value: '7 credits' },
            { label: 'Total Points', value: '25 quality points' },
            { label: 'Calculated GPA', value: '3.57 (25 ÷ 7)' },
        ],
    },
    password: {
        utilityLine: 'Create strong random passwords with the length and character rules you need.',
        answer: 'A password generator helps you create stronger passwords faster by combining length and random character sets in one step. It is useful when you want unique credentials for new accounts or password updates without reusing weak patterns that are easier to guess or crack.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Length', value: '16 characters' },
            { label: 'Include', value: 'Uppercase, lowercase, numbers, symbols' },
            { label: 'Result', value: 'A stronger random password than a short reused one' },
            { label: 'Best practice', value: 'Store it in a trusted password manager' },
        ],
    },
    converter: {
        utilityLine: 'Instantly convert length, weight, temperature, and volume between metric and imperial units.',
        answer: 'A unit converter helps you switch between different measurement systems accurately without doing the math yourself. For example, to convert kg to lbs, you multiply by 2.20462. To convert Celsius to Fahrenheit, you multiply by 1.8 and add 32. This tool handles these formulas automatically for fast, reliable conversions.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Common conversions',
        exampleRows: [
            { label: 'Kilograms to Pounds', value: '70 kg = 154.3 lbs' },
            { label: 'Celsius to Fahrenheit', value: '37°C = 98.6°F' },
            { label: 'Centimeters to Inches', value: '175 cm = 68.9 inches' },
            { label: 'Kilometers to Miles', value: '10 km = 6.21 miles' },
        ],
    },
    random: {
        utilityLine: 'Generate random numbers in a chosen range for quick picks and testing.',
        answer: 'A random number generator helps you produce fast number picks inside a range for games, raffles, classroom activities, testing, or decision making. It is useful when you want a quick random result without repeating manual draws or building your own formula each time.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Range', value: '1 to 50' },
            { label: 'Sample draw', value: '17' },
            { label: 'Next use', value: 'Raffle, team pick, or classroom question' },
            { label: 'Repeat', value: 'Generate another result instantly' },
        ],
    },
    ovulation: {
        utilityLine: 'Estimate your fertile window and likely ovulation date from cycle timing.',
        answer: 'An ovulation calculator helps estimate fertile days and a likely ovulation date from cycle information. It is useful for cycle awareness and pregnancy planning, but it provides estimates only. Real ovulation timing can vary, so use results as guidance rather than a medical or fertility diagnosis.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Ovulation timing can vary from cycle to cycle and is not guaranteed by a date estimate.',
        exampleRows: [
            { label: 'Cycle length', value: '28 days' },
            { label: 'Period start', value: 'Apr 1' },
            { label: 'Likely ovulation', value: 'Around Apr 14' },
            { label: 'Fertile window', value: 'The few days leading up to ovulation' },
        ],
    },
    'date-diff': {
        utilityLine: 'Instantly count the exact number of days, weeks, and months between any two dates.',
        answer: 'To find the number of days between two dates, enter both dates in the calculator above. For example, January 1, 2026 to June 17, 2026 is exactly 167 days (23 weeks and 6 days, or 5 months and 16 days). The formula subtracts the earlier date from the later date while accounting for varying month lengths (28–31 days) and leap years. This is the standard method used in contracts, notice periods, project timelines, and deadline tracking.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — Jan 1 to Jun 17, 2026',
        exampleNote: 'Results account for varying month lengths and leap years automatically.',
        exampleRows: [
            { label: 'Start date', value: 'January 1, 2026 (Thursday)' },
            { label: 'End date', value: 'June 17, 2026 (Wednesday)' },
            { label: 'Total days', value: '167 days' },
            { label: 'In weeks', value: '23 weeks and 6 days' },
            { label: 'In months', value: '5 months and 16 days' },
        ],
    },
    inflation: {
        utilityLine: 'Measure how inflation changes the value and buying power of money over time.',
        answer: 'An inflation calculator helps you compare what money was worth in one year versus another so you can see how prices and buying power change over time. It is useful for budgeting, salary comparisons, long-term planning, and historical price checks when raw amounts alone are misleading.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Amount', value: '$100' },
            { label: 'Inflation rate', value: '6% per year' },
            { label: 'Period', value: '10 years' },
            { label: 'Adjusted value', value: 'About $179 in future dollars' },
        ],
    },
    tip: {
        utilityLine: 'Calculate tip amount, total bill, and per-person split instantly for any bill size or group.',
        answer: 'Enter your bill amount and tip percentage to instantly see the tip, total, and per-person share. The standard tip in the US is 15% to 20% of the pre-tax bill for sit-down restaurants. In India, 5% to 10% is common unless a service charge is already added. This calculator supports pre-tax tipping, rounding, multiple currencies, and group bill splitting.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — dinner for 3',
        exampleRows: [
            { label: 'Bill subtotal', value: '$120.00' },
            { label: 'Tip at 18%', value: '$21.60' },
            { label: 'Total with tip', value: '$141.60' },
            { label: 'Each person pays', value: '$47.20' },
        ],
    },
    'india-fd': {
        utilityLine: 'Estimate fixed deposit maturity value, interest earned, and total return in India.',
        answer: 'An FD calculator helps you estimate maturity amount and interest earned on a fixed deposit in India from the amount, tenure, rate, and compounding pattern. It is useful for comparing deposit options quickly, but final returns can still vary with bank rates, payout choice, and actual deposit terms.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Deposit returns depend on the actual bank rate and compounding terms offered.',
        exampleRows: [
            { label: 'Deposit', value: 'Rs 1,00,000' },
            { label: 'Rate', value: '7% per year' },
            { label: 'Tenure', value: '5 years, quarterly compounding' },
            { label: 'Estimated maturity', value: 'About Rs 1,41,000' },
        ],
    },
    'india-rd': {
        utilityLine: 'Estimate recurring deposit maturity and interest from monthly savings in India.',
        answer: 'An RD calculator helps you estimate how much a recurring deposit could grow when you save a fixed amount each month. It is useful for planning disciplined savings and comparing tenure options, but actual maturity still depends on the rate and compounding pattern offered by your bank or post office.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Returns vary by bank, tenure, and compounding rules.',
        exampleRows: [
            { label: 'Monthly deposit', value: 'Rs 5,000' },
            { label: 'Rate', value: '7% per year' },
            { label: 'Tenure', value: '5 years' },
            { label: 'Estimated maturity', value: 'About Rs 3.6 lakh' },
        ],
    },
    'india-ppf': {
        utilityLine: 'Calculate how your Public Provident Fund (PPF) investment will grow over 15 years with tax-free interest.',
        answer: 'Enter your yearly deposit amount, tenure, and the current PPF interest rate (7.1% for 2026) to see your maturity value. For example, investing the maximum limit of ₹1.5 Lakh per year for 15 years creates a total corpus of approximately ₹40.7 Lakh, earning over ₹18.2 Lakh in completely tax-free interest under the EEE regime.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — Maximum limit',
        exampleNote: 'PPF interest rates are reviewed quarterly by the government.',
        exampleRows: [
            { label: 'Yearly deposit', value: '₹1,50,000' },
            { label: 'Tenure', value: '15 years' },
            { label: 'Interest rate', value: '7.1% p.a.' },
            { label: 'Total invested', value: '₹22,50,000' },
            { label: 'Wealth gained', value: '₹18,18,209' },
            { label: 'Maturity value', value: '₹40,68,209 (Tax-Free)' },
        ],
    },
    'india-home-loan-eligibility': {
        utilityLine: 'Estimate how much home loan you may qualify for based on income and obligations.',
        answer: 'A home loan eligibility calculator helps you estimate the loan amount you may qualify for based on income, existing obligations, tenure, and rate assumptions. It is useful for planning property budgets early, but lender approval is still estimate-based and can change after credit checks and documentation review.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Eligibility is an estimate only. Final approval depends on lender checks and documents.',
        exampleRows: [
            { label: 'Monthly income', value: 'Rs 75,000' },
            { label: 'Existing EMIs', value: 'Rs 15,000' },
            { label: 'Tenure', value: '20 years' },
            { label: 'Estimated eligibility', value: 'Often around Rs 35-40 lakh' },
        ],
    },
    'india-hra': {
        utilityLine: 'Estimate house rent allowance exemption under Indian tax rules with key salary inputs.',
        answer: 'An HRA calculator helps you estimate how much house rent allowance may be exempt from tax using salary, HRA received, rent paid, and city type. It is useful for quick tax planning, but the final claim still depends on actual salary structure, rent details, and filing documentation.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'HRA exemption depends on salary structure, rent paid, and metro status.',
        exampleRows: [
            { label: 'Basic salary', value: 'Rs 40,000 per month' },
            { label: 'HRA received', value: 'Rs 20,000 per month' },
            { label: 'Rent paid', value: 'Rs 18,000 per month' },
            { label: 'Illustrative exemption', value: 'About Rs 14,000 per month in a non-metro city' },
        ],
    },
    'compound-interest': {
        utilityLine: 'Estimate compound growth on savings or investments over time with reinvested returns.',
        answer: 'A compound interest calculator helps you estimate how money can grow when interest earns further interest over time. It is useful for savings and investing plans because you can compare rate, time, and contribution changes quickly, but actual results still depend on the real return you finally achieve.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Future returns are estimates and will vary in real markets and products.',
        exampleRows: [
            { label: 'Principal', value: 'Rs 50,000' },
            { label: 'Rate', value: '8% per year' },
            { label: 'Time', value: '10 years' },
            { label: 'Estimated value', value: 'About Rs 1,07,946' },
        ],
    },
    'simple-interest': {
        utilityLine: 'Calculate simple interest and total amount from principal, rate, and time.',
        answer: 'A simple interest calculator helps you work out interest and final amount when interest is applied only to the original principal. It is useful for basic loans, classroom math, and quick checks where you need a straightforward result without the extra compounding steps used by more advanced products.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Principal', value: 'Rs 50,000' },
            { label: 'Rate', value: '8% per year' },
            { label: 'Time', value: '3 years' },
            { label: 'Interest and total', value: 'Rs 12,000 interest, Rs 62,000 total' },
        ],
    },
    'percentage-change': {
        utilityLine: 'Measure percentage increase or decrease between any two values in seconds.',
        answer: 'A percentage change calculator helps you compare an original value with a new value and see the increase or decrease in percent. It is useful for prices, salaries, traffic, marks, and business metrics because you get a quick, readable change figure without setting up the formula manually.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleRows: [
            { label: 'Old value', value: '120' },
            { label: 'New value', value: '150' },
            { label: 'Change', value: '+30' },
            { label: 'Percentage change', value: '25% increase' },
        ],
    },
    discount: {
        utilityLine: 'Calculate the final price after discount, coupon, and tax instantly for any purchase.',
        answer: 'Enter the original price and discount percentage to instantly see the sale price, discount amount, and total savings. The formula is: Sale Price = Original Price − (Original Price × Discount % ÷ 100). For example, 25% off Rs 2,000 saves you Rs 500 and you pay Rs 1,500. This calculator also supports flat coupons, multiple quantities, and sales tax.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — 25% off with tax',
        exampleRows: [
            { label: 'Original price', value: 'Rs 2,000' },
            { label: '25% discount', value: '- Rs 500' },
            { label: 'Price after discount', value: 'Rs 1,500' },
            { label: 'Tax at 18%', value: '+ Rs 270' },
            { label: 'Final price', value: 'Rs 1,770' },
        ],
    },
    'india-gst': {
        utilityLine: 'Calculate GST quickly for inclusive or exclusive pricing on common Indian invoices.',
        answer: 'A GST calculator helps you add GST to a base amount or remove it from an inclusive price so you can see the tax split clearly. It is useful for billing, shopping, and business checks, but the correct rate still depends on the item or service classification that applies.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'GST rate depends on the product or service category that applies to the transaction.',
        exampleRows: [
            { label: 'Base amount', value: 'Rs 1,000' },
            { label: 'GST rate', value: '18%' },
            { label: 'GST amount', value: 'Rs 180' },
            { label: 'Total invoice', value: 'Rs 1,180' },
        ],
    },
    'india-emi': {
        utilityLine: 'Calculate your monthly EMI, total interest payable, and repayment schedule for any loan.',
        answer: 'Enter your loan amount, interest rate, and tenure to instantly calculate your EMI. For example, a ₹10 Lakh home loan at 8.5% interest for 20 years results in an EMI of ₹8,678, with a total interest cost of ₹10.83 Lakh over the loan lifetime. This calculator uses the standard reducing balance method used by SBI, HDFC, ICICI, and all major Indian banks.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — ₹10 Lakh Home Loan',
        exampleNote: 'Calculated using the standard reducing balance method.',
        exampleRows: [
            { label: 'Loan amount', value: '₹10,00,000' },
            { label: 'Interest rate', value: '8.5% p.a.' },
            { label: 'Tenure', value: '20 years' },
            { label: 'Monthly EMI', value: '₹8,678' },
            { label: 'Total interest', value: '₹10,82,776' },
            { label: 'Total repayment', value: '₹20,82,776' },
        ],
    },
    sip: {
        utilityLine: 'Calculate how much your monthly SIP investment will grow over time with the power of compounding.',
        answer: 'Enter your monthly SIP amount, expected annual return rate, and investment period to see the total invested amount, estimated returns, and future corpus value. For example, investing ₹10,000/month for 10 years at 12% annual return creates a corpus of approximately ₹23.2 lakh on a total investment of ₹12 lakh — generating ₹11.2 lakh in wealth through compounding alone. SIP returns are market-linked estimates, not guaranteed.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example — ₹10,000/month SIP',
        exampleNote: 'Mutual fund returns are market-linked and not guaranteed. Past performance is not indicative of future results.',
        exampleRows: [
            { label: 'Monthly SIP', value: '₹10,000' },
            { label: 'Expected return', value: '12% per year' },
            { label: 'Duration', value: '10 years' },
            { label: 'Total invested', value: '₹12,00,000' },
            { label: 'Estimated corpus', value: '₹23,23,391' },
            { label: 'Wealth gained', value: '₹11,23,391' },
        ],
    },
    'india-salary': {
        utilityLine: 'Convert CTC into estimated monthly take-home salary after common payroll deductions.',
        answer: 'An in-hand salary calculator helps you estimate what may actually reach your bank account after PF, taxes, and common salary components are applied. It is useful for comparing offers and budgeting monthly cash flow, but exact take-home pay still varies by structure, state deductions, and payroll policy.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Take-home pay is an estimate. Actual payslips vary by salary structure and employer policy.',
        exampleRows: [
            { label: 'CTC', value: 'Rs 12,00,000' },
            { label: 'Common deductions', value: 'PF, tax, and payroll adjustments' },
            { label: 'Monthly take-home', value: 'Often around Rs 82,000 to Rs 87,000' },
            { label: 'Use case', value: 'Compare job offers with more clarity' },
        ],
    },
    'india-tax': {
        utilityLine: 'Estimate income tax and compare old vs new regime from one quick calculator.',
        answer: 'An income tax calculator helps you estimate tax payable under the old and new tax regime using income, deductions, and standard tax rules. It is useful for planning, but results should be treated as informational estimates because your final tax depends on actual deductions, filing status, and official rules.',
        chips: SHARED_CHIPS,
        exampleTitle: 'Worked example',
        exampleNote: 'Tax output is informational and should be checked against current rules and your filing details.',
        exampleRows: [
            { label: 'Annual income', value: 'Rs 10,00,000' },
            { label: 'Comparison', value: 'Old regime vs new regime' },
            { label: 'Checks included', value: 'Standard deduction, cess, and common logic' },
            { label: 'Use case', value: 'Quick planning before final tax filing' },
        ],
    },
};

const scenarioOverrides: Record<string, Record<string, HeroOverride>> = {
    'india-gst': {
        'hsn-mobile-phones': {
            utilityLine: 'Check GST on smartphones and accessories with a quick mobile pricing example.',
            answer: 'This mobile GST page helps you estimate tax on smartphones and related accessories from the billed amount or base price. It is useful for quick invoice checks, resale planning, or purchase comparisons when you want to see how much of the total goes toward GST.',
            exampleRows: [
                { label: 'Phone price before GST', value: 'Rs 20,000' },
                { label: 'GST rate', value: '18%' },
                { label: 'GST amount', value: 'Rs 3,600' },
                { label: 'Total price', value: 'Rs 23,600' },
            ],
        },
        'luxury-cars-gst': {
            utilityLine: 'Estimate GST on luxury cars and SUVs with a simple high-value example.',
            answer: 'This luxury car GST page helps you estimate the tax portion on a high-value vehicle using a simple breakdown. It is useful for quick pricing checks and purchase planning, but it remains an estimate because final on-road cost can also include cess, registration, insurance, and dealer charges.',
            exampleRows: [
                { label: 'Base price', value: 'Rs 50,00,000' },
                { label: 'Illustrative GST rate', value: '40%' },
                { label: 'GST amount', value: 'Rs 20,00,000' },
                { label: 'Tax-inclusive price', value: 'Rs 70,00,000 before other charges' },
            ],
        },
        'service-tax-india': {
            utilityLine: 'Estimate legacy pre-GST service tax on older invoices with one simple example.',
            answer: 'This service tax page helps you estimate tax on older pre-GST invoices using the legacy rate structure. It is useful for historic bill checks, old records, and explanation purposes when you need a quick answer on how service tax would have been calculated before GST replaced it.',
            exampleRows: [
                { label: 'Taxable value', value: 'Rs 10,000' },
                { label: 'Service tax rate', value: '15%' },
                { label: 'Tax amount', value: 'Rs 1,500' },
                { label: 'Total invoice', value: 'Rs 11,500' },
            ],
        },
    },
    'india-salary': {
        '3-lpa-in-hand': {
            utilityLine: 'Estimate monthly take-home salary for a 3 LPA CTC package in India.',
            answer: 'A 3 LPA salary does not translate directly into monthly bank credit. This page helps you estimate likely take-home pay after common deductions such as PF and professional tax so you can budget better and understand what a smaller entry-level package may actually feel like in hand.',
            exampleRows: [
                { label: 'CTC', value: 'Rs 3,00,000' },
                { label: 'Common deductions', value: 'PF and payroll adjustments' },
                { label: 'Estimated in-hand', value: 'Often around Rs 22,000 to Rs 24,000 per month' },
                { label: 'Use case', value: 'Entry-level offer planning' },
            ],
        },
        '6-lpa-in-hand': {
            utilityLine: 'Estimate monthly take-home salary for a 6 LPA CTC package in India.',
            answer: 'A 6 LPA salary can look very different in hand once PF and other payroll deductions are applied. This page helps you estimate monthly take-home pay so you can compare roles, budget expenses, and understand the likely gap between headline CTC and monthly bank credit.',
            exampleRows: [
                { label: 'CTC', value: 'Rs 6,00,000' },
                { label: 'Common deductions', value: 'PF and payroll adjustments' },
                { label: 'Estimated in-hand', value: 'Often around Rs 42,000 to Rs 46,000 per month' },
                { label: 'Use case', value: 'Budget and offer comparison' },
            ],
        },
        '9-lpa-in-hand': {
            utilityLine: 'Estimate monthly take-home salary for a 9 LPA CTC package in India.',
            answer: 'A 9 LPA package can still produce a lower monthly bank credit than many job seekers expect. This page helps you estimate in-hand salary after common deductions so you can review the likely monthly number and compare offers with a more realistic cash-flow view.',
            exampleRows: [
                { label: 'CTC', value: 'Rs 9,00,000' },
                { label: 'Common deductions', value: 'PF, tax, and payroll adjustments' },
                { label: 'Estimated in-hand', value: 'Often around Rs 62,000 to Rs 68,000 per month' },
                { label: 'Use case', value: 'Mid-level offer review' },
            ],
        },
        '12-lpa-in-hand': {
            utilityLine: 'Estimate monthly take-home salary for a 12 LPA CTC package in India.',
            answer: 'A 12 LPA salary package can still vary meaningfully in hand depending on structure and deductions. This page helps you estimate the likely monthly take-home amount so you can budget, compare offers, and understand how much of the CTC may actually reach your account each month.',
            exampleRows: [
                { label: 'CTC', value: 'Rs 12,00,000' },
                { label: 'Common deductions', value: 'PF, tax, and payroll adjustments' },
                { label: 'Estimated in-hand', value: 'Often around Rs 82,000 to Rs 87,000 per month' },
                { label: 'Use case', value: 'Offer benchmarking and budgeting' },
            ],
        },
        '15-lpa-in-hand': {
            utilityLine: 'Estimate monthly take-home salary for a 15 LPA CTC package in India.',
            answer: 'A 15 LPA package can still feel lower in hand after PF, tax, and salary structure changes are applied. This page helps you estimate monthly take-home pay so you can compare offers, plan expenses, and see how headline CTC converts into likely bank credit.',
            exampleRows: [
                { label: 'CTC', value: 'Rs 15,00,000' },
                { label: 'Common deductions', value: 'PF, tax, and payroll adjustments' },
                { label: 'Estimated in-hand', value: 'Often around Rs 1.0 lakh to Rs 1.07 lakh per month' },
                { label: 'Use case', value: 'Senior offer planning' },
            ],
        },
        '18-lpa-in-hand': {
            utilityLine: 'Estimate monthly take-home salary for an 18 LPA CTC package in India.',
            answer: 'An 18 LPA package can still produce a noticeably lower monthly bank credit after tax and payroll deductions. This page helps you estimate the likely in-hand figure so you can compare roles, judge compensation better, and plan monthly cash flow with a more realistic number.',
            exampleRows: [
                { label: 'CTC', value: 'Rs 18,00,000' },
                { label: 'Common deductions', value: 'PF, tax, and payroll adjustments' },
                { label: 'Estimated in-hand', value: 'Often around Rs 1.18 lakh to Rs 1.26 lakh per month' },
                { label: 'Use case', value: 'Higher package comparison' },
            ],
        },
    },
    'india-tax': {
        '10-lakh-salary-tax': {
            utilityLine: 'Estimate tax on a 10 lakh salary and compare old vs new regime quickly.',
            answer: 'This page helps you estimate tax on a 10 lakh salary in India and compare the old and new regime side by side. It is useful for quick planning, but the final liability can still change based on deductions, exemptions, filing details, and the rules that apply to you.',
            exampleRows: [
                { label: 'Annual salary', value: 'Rs 10,00,000' },
                { label: 'Comparison', value: 'Old regime vs new regime' },
                { label: 'Checks included', value: 'Standard deduction and basic tax logic' },
                { label: 'Reminder', value: 'Actual payable tax depends on your own deductions' },
            ],
        },
        '15-lakh-salary-tax': {
            utilityLine: 'Estimate tax on a 15 lakh salary and compare old vs new regime quickly.',
            answer: 'This page helps you estimate tax on a 15 lakh salary in India and compare the old and new regime with a quick example. It is useful for fast planning, but your final tax can still vary with deductions, exemptions, filing status, and the rules that finally apply.',
            exampleRows: [
                { label: 'Annual salary', value: 'Rs 15,00,000' },
                { label: 'Comparison', value: 'Old regime vs new regime' },
                { label: 'Checks included', value: 'Standard deduction and basic tax logic' },
                { label: 'Reminder', value: 'Actual payable tax depends on your own deductions' },
            ],
        },
    },
};

export function getCalculatorHeroContent(calculatorId: string, scenarioId?: string): HeroContent | null {
    const base = baseHeroContent[calculatorId];
    if (!base) return null;

    if (!scenarioId) {
        return base;
    }

    const override = scenarioOverrides[calculatorId]?.[scenarioId];
    if (!override) {
        return base;
    }

    return {
        ...base,
        ...override,
        chips: base.chips,
        exampleRows: override.exampleRows || base.exampleRows,
    };
}
