import { Calculator, DollarSign, Activity, Calendar, Lock, MoreHorizontal, Divide, Percent, Dices, Scale, Flame, Ruler, TrendingUp, Briefcase, Car, Sunset, GraduationCap, Baby, Triangle, Heart, ArrowLeftRight, Landmark, Home } from 'lucide-react';
import { lazy } from 'react';

// Lazy load calculators
const BasicCalculator = lazy(() => import('./basic/BasicCalculator'));
const ScientificCalculator = lazy(() => import('./math/ScientificCalculator'));
const TriangleCalculator = lazy(() => import('./math/TriangleCalculator'));
const MortgageCalculator = lazy(() => import('./financial/MortgageCalculator'));
const LoanCalculator = lazy(() => import('./financial/LoanCalculator'));
const AutoLoanCalculator = lazy(() => import('./financial/AutoLoanCalculator'));
const InvestmentCalculator = lazy(() => import('./financial/InvestmentCalculator'));
const RetirementCalculator = lazy(() => import('./financial/RetirementCalculator'));
const SalaryCalculator = lazy(() => import('./financial/SalaryCalculator'));
const BMICalculator = lazy(() => import('./health/BMICalculator'));
const CalorieCalculator = lazy(() => import('./health/CalorieCalculator'));
const BodyFatCalculator = lazy(() => import('./health/BodyFatCalculator'));
const BMRCalculator = lazy(() => import('./health/BMRCalculator'));
const IdealWeightCalculator = lazy(() => import('./health/IdealWeightCalculator'));
const PregnancyCalculator = lazy(() => import('./health/PregnancyCalculator'));
const AgeCalculator = lazy(() => import('./other/AgeCalculator'));
const PasswordGenerator = lazy(() => import('./other/PasswordGenerator'));
const UnitConverter = lazy(() => import('./other/UnitConverter'));
const FractionCalculator = lazy(() => import('./other/FractionCalculator'));
const PercentageCalculator = lazy(() => import('./other/PercentageCalculator'));
const RandomNumberGenerator = lazy(() => import('./other/RandomNumberGenerator'));
const GPACalculator = lazy(() => import('./other/GPACalculator'));
const OvulationCalculator = lazy(() => import('./health/OvulationCalculator'));
const DateCalculator = lazy(() => import('./other/DateCalculator'));
const InflationCalculator = lazy(() => import('./financial/InflationCalculator'));
const TipCalculator = lazy(() => import('./basic/TipCalculator'));
const SIPCalculator = lazy(() => import('./financial/SIPCalculator'));
const IndiaTaxCalculator = lazy(() => import('./financial/IndiaTaxCalculator'));
const IndiaSalaryCalculator = lazy(() => import('./financial/IndiaSalaryCalculator'));
const IndiaGSTCalculator = lazy(() => import('./financial/IndiaGSTCalculator'));
const IndiaEMICalculator = lazy(() => import('./financial/IndiaEMICalculator'));

export type CalculatorCategory = 'basic' | 'financial' | 'health' | 'math' | 'other' | 'india';

const FDCalculator = lazy(() => import('./india/FDCalculator'));
const RDCalculator = lazy(() => import('./india/RDCalculator'));
const PPFCalculator = lazy(() => import('./india/PPFCalculator'));
const HomeLoanEligibilityCalculator = lazy(() => import('./india/HomeLoanEligibilityCalculator'));
const HRACalculator = lazy(() => import('./india/HRACalculator'));

// New Financial/Math Calculators
const CompoundInterestCalculator = lazy(() => import('./financial/CompoundInterestCalculator'));
const SimpleInterestCalculator = lazy(() => import('./financial/SimpleInterestCalculator'));
const PercentageIncreaseCalculator = lazy(() => import('./other/PercentageIncreaseCalculator'));
const DiscountCalculator = lazy(() => import('./other/DiscountCalculator'));

export interface CalculatorDef {
    id: string;
    name: string;
    description: string;
    category: CalculatorCategory;
    icon: any;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
    content?: React.ComponentType<any>;
    longDescription?: string;
    features?: string[];
    formula?: string;
    educationalContent?: {
        title: string;
        content: string;
    }[];
    faqs?: { question: string; answer: string }[];
    howTo?: {
        name: string;
        description: string;
        steps: { name: string; text: string; image?: string; url?: string }[];
    };
    popular?: boolean;
}

export const calculatorRegistry: CalculatorDef[] = [
    {
        id: 'basic-math',
        name: 'Basic Calculator',
        description: 'Free online basic calculator for everyday math. extensive arithmetic tool for addition, subtraction, multiplication, and division.',
        category: 'basic',
        icon: Calculator,
        component: BasicCalculator,
        longDescription: "A simple yet powerful tool tailored for your everyday mathematical needs. Whether you're balancing your monthly budget, splitting a dinner bill, or double-checking a homework assignment, this calculator provides a clean, distraction-free interface for instant results.",
        features: [
            "Instant addition, subtraction, multiplication, and division",
            "Responsive design that works on mobile and desktop",
            "Large, easy-to-read display",
            "Keyboard support for faster input"
        ],
        educationalContent: [
            {
                title: "Why use a Basic Calculator?",
                content: "While mental math is a great skill, a calculator ensures accuracy and speed, especially when dealing with multiple digits or decimals. It minimizes the cognitive load, allowing you to focus on the problem-solving aspect of your task rather than the computation itself."
            }
        ],
        howTo: {
            name: "How to use",
            description: "Perform basic arithmetic calculations.",
            steps: [
                { name: "Enter numbers", text: "Use the on-screen buttons or your keyboard to input numbers." },
                { name: "Choose operation", text: "Select +, -, ×, or ÷." },
                { name: "Get result", text: "Press equals (=) to see the answer." }
            ]
        }
    },
    {
        id: 'scientific',
        name: 'Scientific Calculator',
        description: 'Advanced free scientific calculator online. Handle trigonometry (sin, cos, tan), logarithms, exponents, and complex math problems for students and professionals.',
        category: 'basic',
        icon: Calculator,
        component: ScientificCalculator,
        longDescription: "A robust tool designed for students, engineers, and researchers. Unlike standard calculators, this scientific calculator handles complex operations including trigonometry, logarithms, and exponential functions, making it an essential companion for advanced mathematics and science curriculums.",
        features: [
            "Trigonometric functions (Sin, Cos, Tan)",
            "Logarithmic functions (Log, Ln)",
            "Exponents and Roots",
            "Parentheses for complex expressions"
        ],
        educationalContent: [
            {
                title: "Understanding Scientific Notation",
                content: "Scientific calculators often use scientific notation to handle very large or very small numbers. For example, 3,000,000 can be expressed as 3 × 10^6, making it easier to read and compute."
            }
        ]
    },
    {
        id: 'triangle',
        name: 'Triangle Calculator',
        description: 'Comprehensive triangle calculator. Instantly solve for area, perimeter, angles, and sides of right, isosceles, and equilateral triangles.',
        category: 'math',
        icon: Triangle,
        component: TriangleCalculator,
        longDescription: "Geometry made simple. Whether you're a student solving for x or a contractor measuring a roof pitch, the Triangle Calculator instantly computes missing side lengths, angles, area, and perimeter using the Law of Sines, Law of Cosines, and Pythagorean theorem.",
        features: [
            "Solves Right, Isosceles, and Equilateral triangles",
            "Calculates Area and Perimeter instantly",
            "Uses Heron's Formula for area calculation",
            "Step-by-step angle derivation"
        ],
        educationalContent: [
            {
                title: "The Pythagorean Theorem",
                content: "For any right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides: a² + b² = c²."
            }
        ]
    },
    {
        id: 'fraction',
        name: 'Fraction Calculator',
        description: 'Easy-to-use fraction calculator. Add, subtract, multiply, and divide fractions and mixed numbers. Get instant results.',
        category: 'basic',
        icon: Divide,
        component: FractionCalculator,
        longDescription: "Fractions can be tricky, but they don't have to be. This calculator handles all operations—addition, subtraction, multiplication, and division—on fractions and mixed numbers, providing results in simplest form.",
        features: ["Handles mixed numbers", "Simplifies results", "Step-by-step breakdown"]
    },
    {
        id: 'percentage',
        name: 'Percentage Calculator',
        description: 'Free percentage calculator tool. Quickly calculate percentage changes, percent of numbers, and discounts.',
        category: 'basic',
        icon: Percent,
        component: PercentageCalculator,
        popular: true,
        longDescription: "Calculate percentages like a pro. Whether you need to find a percentage of a number, calculate a percentage increase/decrease, or figure out what percent X is of Y, this 3-in-1 tool does it instantly.",
        features: ["3 calculation modes", "Instant results", "Clear formulas"]
    },
    {
        id: 'mortgage',
        name: 'Mortgage Calculator',
        description: 'Estimate your monthly mortgage payments accurately. Calculate principal, interest, taxes, and insurance (PITI) with our free US mortgage calculator tool.',
        category: 'financial',
        icon: DollarSign,
        component: MortgageCalculator,
        longDescription: "Planning to buy a home? Our Mortgage Calculator helps you estimate your monthly mortgage payments with precision. Be financially prepared by understanding the impact of interest rates, loan terms, and down payments on your monthly budget.",
        features: [
            "Calculates Principal & Interest",
            "Includes Property Tax & Insurance estimates",
            "Amortization schedule insights",
            "Visual breakdown of costs"
        ],
        educationalContent: [
            {
                title: "What is PITI?",
                content: "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four main components that make up your monthly mortgage payment. Understanding PITI helps you budget more accurately for homeownership."
            }
        ]
    },
    {
        id: 'loan',
        name: 'Loan Calculator',
        description: 'Calculate monthly loan payments and total interest costs. Perfect for personal loans, student loans, and business loans. Plan your debt repayment strategy.',
        category: 'financial',
        icon: DollarSign,
        component: LoanCalculator,
        longDescription: "Take control of your debt. Whether it's a personal loan, business loan, or student loan, our calculator gives you a clear picture of your repayment schedule and total interest costs.",
        features: [
            "Monthly payment estimation",
            "Total interest calculation",
            "Payoff date projection",
            "Simple and clean interface"
        ],
        educationalContent: [
            {
                title: "Amortization Explained",
                content: "Amortization is the process of spreading out a loan into a series of fixed payments over time. While the total payment remains the same, the proportion of interest vs. principal changes with every payment."
            }
        ]
    },
    {
        id: 'auto-loan',
        name: 'Auto Loan Calculator',
        description: 'Estimate your car payments before you buy. Input vehicle price, trade-in value, down payment, and interest rate.',
        category: 'financial',
        icon: Car,
        component: AutoLoanCalculator,
        longDescription: "Don't walk into a dealership unprepared. accurate Auto Loan Calculator lets you estimate your monthly payments based on text price, trade-in value, and interest rate, so you know exactly what you can afford.",
        features: ["Trade-in value adjustment", "Sales tax inclusion", "Down payment calculation"]
    },
    {
        id: 'investment',
        name: 'Investment Calculator',
        description: 'Visualize your wealth growth. Calculate compound interest and return on investment (ROI) over time.',
        category: 'financial',
        icon: TrendingUp,
        component: InvestmentCalculator,
        longDescription: "The power of compound interest is the eighth wonder of the world. Use this Investment Calculator to project how your money will grow over time with regular contributions and varying rates of return.",
        features: ["Compound interest projection", "Annual contribution support", "Growth visualization"]
    },
    {
        id: 'retirement',
        name: 'Retirement Calculator',
        description: 'Plan for a secure future. Estimate exactly how much you need to save for retirement based on your goals.',
        category: 'financial',
        icon: Sunset,
        component: RetirementCalculator,
        longDescription: "It's never too early to start planning. Our Retirement Calculator helps you determine if you're on track to meet your retirement goals by analyzing your current savings, annual contributions, and expected retirement age.",
        features: ["Inflation adjustment", "Life expectancy modeling", "Savings gap analysis"]
    },
    {
        id: 'salary',
        name: 'Salary Calculator',
        description: 'Convert your salary instantly. Switch between hourly, daily, weekly, bi-weekly, monthly, and annual income rates.',
        category: 'financial',
        icon: Briefcase,
        component: SalaryCalculator,
        longDescription: "How much is that hourly rate a year? This Salary Calculator instantly converts your income across different timeframes—hourly, daily, weekly, monthly, and annually—giving you a complete picture of your earnings.",
        features: ["Full timeframe conversion", "Work hours customization", "Simple interface"]
    },
    {
        id: 'bmi',
        name: 'BMI Calculator',
        description: 'Calculate your Body Mass Index (BMI). Accurate BMI Calculator for men, women, and kids with weight categories.',
        category: 'health',
        icon: Activity,
        component: BMICalculator,
        longDescription: "BMI (Body Mass Index) is a widely used screening tool for weight categories. This calculator provides a comprehensive assessment of your body weight relative to your height, helping you understand if you fall into the underweight, healthy weight, overweight, or obese range.",
        features: [
            "Supports Metric (kg/cm) and Imperial (lbs/in)",
            "Instant calculation",
            "Color-coded result categories",
            "World Health Organization (WHO) standards"
        ],
        educationalContent: [
            {
                title: "Limitations of BMI",
                content: "While BMI is a useful screening tool, it does not diagnose body fatness or health. It is not accurate for athletes, pregnant women, or the elderly, as it does not distinguish between muscle mass and fat mass."
            }
        ],
        faqs: [
            {
                question: "What is a normal BMI for adults?",
                answer: "A normal or healthy BMI range for adults is generally considered to be between 18.5 and 24.9."
            },
            {
                question: "Is BMI accurate for athletes?",
                answer: "BMI can be misleading for athletes or muscular individuals because it doesn't distinguish between muscle and fat. A bodybuilder might have a high BMI but low body fat."
            },
            {
                question: "What happens if my BMI is over 30?",
                answer: "A BMI of 30 or higher falls into the 'obese' category, which can increase the risk of health issues like diabetes, heart disease, and high blood pressure. Consulting a doctor is recommended."
            }
        ],
        howTo: {
            name: "How to Calculate BMI",
            description: "Step-by-step guide to calculating your Body Mass Index using our tool.",
            steps: [
                { name: "Choose Unit", text: "Select your preferred unit system: Metric (kg/cm) or Imperial (lbs/in)." },
                { name: "Input Weight", text: "Enter your current body weight in the appropriate field." },
                { name: "Input Height", text: "Enter your height accurately." },
                { name: "Get Result", text: "The calculator will instantly display your BMI value and weight category." }
            ]
        },
        popular: true,
    },
    {
        id: 'calorie',
        name: 'Calorie Calculator',
        description: 'Find your daily calorie needs. Calculate TDEE and calories required to lose weight, maintain weight, or gain muscle.',
        category: 'health',
        icon: Flame,
        component: CalorieCalculator,
        longDescription: "Unlock the science of weight management. Specifically designed to calculate your Total Daily Energy Expenditure (TDEE), this tool tells you exactly how many calories you need to eat to maintain, lose, or gain weight based on your activity level.",
        features: [
            "Calculates BMR and TDEE",
            "Personalized for age, gender, height, and weight",
            "Activity level adjustments",
            "Clear daily calorie targets"
        ],
        educationalContent: [
            {
                title: "What is TDEE?",
                content: "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories you burn in a day, including your Basal Metabolic Rate (BMR) and your physical activity. To lose weight, you need to eat fewer calories than your TDEE."
            }
        ]
    },
    {
        id: 'body-fat',
        name: 'Body Fat Calculator',
        description: 'Estimate your body fat percentage without calipers. Use our US Navy method calculator to track your fitness progress.',
        category: 'health',
        icon: Ruler,
        component: BodyFatCalculator,
        longDescription: "Get a clearer picture of your health than weight alone. Using the U.S. Navy Method, this calculator estimates your body fat percentage based on simple measurements, providing a key metric for fitness tracking.",
        features: [
            "U.S. Navy Method accuracy",
            "Gender-specific formulas",
            "Requires only tape measure inputs",
            "Tracks lean body mass vs. fat mass"
        ],
        educationalContent: [
            {
                title: "Why Body Fat Percentage Matters",
                content: "Body composition is a better indicator of health than weight. Two people can weigh the same but have vastly different health profiles depending on their ratio of muscle to fat."
            }
        ]
    },
    {
        id: 'bmr',
        name: 'BMR Calculator',
        description: 'Calculate your Basal Metabolic Rate (BMR). Discover how many calories your body burns at rest to optimize your diet.',
        category: 'health',
        icon: Flame,
        component: BMRCalculator,
        longDescription: "Your Basal Metabolic Rate (BMR) is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions like breathing, circulation, and cell production. Knowing this number is the first step in creating a weight loss or muscle gain plan.",
        features: [
            "Uses Mifflin-St Jeor Equation (most accurate)",
            "Supports Harris-Benedict Equation",
            "Basis for diet planning",
            "Activity factor integration"
        ],
        educationalContent: [
            {
                title: "BMR vs. RMR",
                content: "BMR (Basal Metabolic Rate) and RMR (Resting Metabolic Rate) are often used interchangeably, but BMR is measured under stricter conditions. For most casual users, the difference is negligible."
            }
        ]
    },
    {
        id: 'ideal-weight',
        name: 'Ideal Weight Calculator',
        description: 'What is your ideal weight? Find the healthy weight range for your height, gender, and frame size.',
        category: 'health',
        icon: Scale,
        component: IdealWeightCalculator,
        longDescription: "Find your healthy weight range using medically standard formulas. We use the Robinson, Miller, Devine, and Hamwi formulas to give you a comprehensive estimate based on your height and gender.",
        features: ["Multiple medical formulas", "Gender-specific results", "Healthy range estimation"]
    },
    {
        id: 'pregnancy',
        name: 'Pregnancy Calculator',
        description: 'Calculate your Estimated Due Date (EDD). Enter your last period date to track your pregnancy trimesters.',
        category: 'health',
        icon: Baby,
        component: PregnancyCalculator,
        longDescription: "An exciting journey begins. Calculate your estimated due date based on your last menstrual period (LMP). This tool also breaks down your pregnancy into trimesters, helping you track significant developmental milestones.",
        features: ["Due date estimation", "Trimester breakdown", "Milestone tracking"]
    },
    {
        id: 'age',
        name: 'Age Calculator',
        description: 'Calculate your exact age in years, months, and days. Best online Age Calculator to find days between dates.',
        category: 'other',
        icon: Calendar,
        component: AgeCalculator,
        longDescription: "Curious about your exact age? This calculator goes beyond just years to calculate the precise number of months, days, hours, and even minutes you've been alive. It's also perfect for calculating the age difference between two people.",
        features: [
            "Exact age calculation",
            "Next birthday countdown",
            "Day of birth finder",
            "Leap year adjustment"
        ],
        educationalContent: [
            {
                title: "How we calculate age",
                content: "We use the standard calendar system, accounting for the varying lengths of months and the occurrence of leap years every four years."
            }
        ]
    },
    {
        id: 'gpa',
        name: 'GPA Calculator',
        description: 'Calculate your college or high school GPA. Input your grades and credit hours.',
        category: 'other',
        icon: GraduationCap,
        component: GPACalculator,
        longDescription: "Stay on top of your academic goals. Input your course grades and credit hours to instantly calculate your semester and cumulative GPA.",
        features: ["Weighted & Unweighted", "Semester tracking", "Credit hour support"]
    },
    {
        id: 'password',
        name: 'Password Generator',
        description: 'Create strong, secure passwords instantly. Generate random, uncrackable passwords with custom length and symbols.',
        category: 'other',
        icon: Lock,
        component: PasswordGenerator,
        longDescription: "Security starts here. In an age of data breaches, using 'Password123' doesn't cut it. Our Password Generator creates cryptographically strong, unpredictable passwords that are virtually impossible for hackers to guess.",
        features: [
            "Customizable length (up to 50 chars)",
            "Include/Exclude symbols, numbers, uppercase",
            "Client-side generation (safe & private)",
            "One-click copy to clipboard"
        ],
        educationalContent: [
            {
                title: "What makes a strong password?",
                content: "Entropy. A high-entropy password is random and long. Adding just a few more characters exponentially increases the time it takes for a computer to crack it."
            }
        ]
    },
    {
        id: 'converter',
        name: 'Unit Converter',
        description: 'Universal unit converter. Quickly convert length, weight, temperature, and volume measurements.',
        category: 'other',
        icon: ArrowLeftRight,
        component: UnitConverter,
        longDescription: "Bridge the gap between Metric and Imperial. Convert length, weight, temperature, and volume instantly with this all-in-one unit converter.",
        features: ["Metric & Imperial", "Multiple categories", "Instant updates"]
    },
    {
        id: 'random',
        name: 'Random Number Generator',
        description: 'Free random number generator (RNG). Generate truly random integers within your specified range.',
        category: 'other',
        icon: Dices,
        component: RandomNumberGenerator,
        longDescription: "Need a decision maker? This robust RNG generates unpredictable numbers within any range you specify. Perfect for games, lotteries, or sampling.",
        features: ["Custom range", "True randomness simulation", "Instant generation"]
    },
    {
        id: 'ovulation',
        name: 'Ovulation Calculator',
        description: 'Track your fertility cycle. Estimate your most fertile days and ovulation date.',
        category: 'health',
        icon: Heart,
        component: OvulationCalculator,
        longDescription: "Planning specifically for pregnancy? This calculator estimates your ovulation window based on your last period date, helping you identify your most fertile days.",
        features: ["Fertility window", "Ovulation date", "Next period estimate"]
    },
    {
        id: 'date-diff',
        name: 'Date Calculator',
        description: 'Calculate the duration between two dates. Find out exactly how many days, weeks, months, and years are between events.',
        category: 'other',
        icon: Calendar,
        component: DateCalculator,
        longDescription: "Planning an event? Find the exact duration between two calendar dates. This tool accounts for leap years and varying month lengths to give you a precise count.",
        features: ["Year/Month/Day breakdown", "Total days calculation", "Leap year support"]
    },
    {
        id: 'inflation',
        name: 'Inflation Calculator',
        description: 'Calculate future value and purchasing power. Estimate how much money you will need in the future.',
        category: 'financial',
        icon: TrendingUp,
        component: InflationCalculator,
        longDescription: "See the real cost of living. This Inflation Calculator shows you how purchasing power declines over time, helping you plan for long-term financial stability.",
        features: ["Purchasing power analysis", "Future value calculation", "Historical context"]
    },
    {
        id: 'tip',
        name: 'Tip Calculator',
        description: 'Easy tip and split bill calculator. Calculate the precise tip amount and total cost per person.',
        category: 'basic',
        icon: DollarSign,
        component: TipCalculator,
        longDescription: "Avoid the awkward math at the end of a meal. This Tip Calculator lets you instantly calculate gratuity and split the bill evenly among friends.",
        features: ["Split bill functionality", "Custom tip percentages", "Total per person"]
    },
    {
        id: 'sip',
        name: 'SIP Calculator',
        description: 'Best SIP Calculator 2025. Estimate mutual fund returns with our Systematic Investment Plan calculator. Check monthly investment growth and maturity value.',
        category: 'financial',
        icon: TrendingUp,
        component: SIPCalculator,
        longDescription: "Achieve your financial dreams with disciplined investing. A Systematic Investment Plan (SIP) allows you to invest small amounts regularly in mutual funds. Use this calculator to visualize how small monthly contributions can grow into a significant corpus over time.",
        features: ["Monthly investment projection", "Expected return estimation", "Inflation-adjusted wealth creation"],
        faqs: [
            {
                question: "What is SIP?",
                answer: "SIP stands for Systematic Investment Plan. It is a method of investing a fixed sum regularly in a mutual fund scheme."
            },
            {
                question: "How is SIP return calculated?",
                answer: "SIP returns are calculated using the compound interest formula with monthly compounding. Our calculator automates this complex math for you."
            },
            {
                question: "Can I stop my SIP anytime?",
                answer: "Yes, SIPs are voluntary. You can stop, pause, or increase your SIP amount at any time without penalty in most open-ended funds."
            }
        ],
        howTo: {
            name: "How to Use SIP Calculator",
            description: "Follow these simple steps to estimate your investment returns.",
            steps: [
                { name: "Enter Investment", text: "Input the amount you plan to invest every month." },
                { name: "Set Returns", text: "Enter the expected annual rate of return (e.g., 12% for equity funds)." },
                { name: "Choose Tenure", text: "Select the number of years you want to stay invested." },
                { name: "View Corpus", text: "See your total invested amount and estimated future value instantly." }
            ]
        },
        popular: true,
    },
    {
        id: 'india-tax',
        name: 'India Income Tax Calculator',
        description: 'Calculate your Indian Income Tax for FY 2025-26. Compare New vs Old Regime tax liability instantly.',
        category: 'india',
        icon: DollarSign,
        component: IndiaTaxCalculator,
        longDescription: "Navigate the Indian Income Tax maze. Updated for FY 2025-26, this calculator compares your tax liability under the Old Regime vs. the New Regime, helping you decide which option saves you more money.",
        features: ["FY definitions (2025-26)", "New vs Old Regime comparison", "Standard Deduction included"],
    },
    {
        id: 'india-salary',
        name: 'Salary Calculator (India)',
        description: 'Calculate your in-hand salary from CTC. Breakdown of Basic, HRA, Special Allowance, and PF deductions.',
        category: 'india',
        icon: Briefcase,
        component: IndiaSalaryCalculator,
        longDescription: "Understand your payslip better. Convert your Cost to Company (CTC) into monthly in-hand salary by accounting for common Indian salary components like HRA, LTA, and Professional Tax.",
        features: ["CTC to In-hand conversion", "PF & Tax breakdown", "HRA calculation"]
    },
    {
        id: 'india-gst',
        name: 'GST Calculator (India)',
        description: 'Calculate GST amounts instantly. Find GST inclusive and exclusive prices for 5%, 12%, 18%, and 28% tax slabs.',
        category: 'india',
        icon: Percent,
        component: IndiaGSTCalculator,
        longDescription: "Simplify your tax calculations. Whether you're a business owner billing clients or a consumer checking a price, this tool calculates Goods and Services Tax (GST) for all standard Indian tax slabs.",
        features: ["Inclusive/Exclusive modes", "Standard tax slabs", "Instant breakdown"]
    },
    {
        id: 'india-emi',
        name: 'EMI Calculator (India)',
        description: 'Calculate Home Loan, Car Loan & Personal Loan EMI. Best online Equated Monthly Installment calculator with amortization schedule and interest repayment.',
        category: 'india',
        icon: Landmark,
        component: IndiaEMICalculator,
        longDescription: "Planning to take a loan? Whether it's for a home, car, or personal use, knowing your EMI (Equated Monthly Installment) is crucial. This calculator gives you an instant breakdown of your monthly outflow and total interest payable.",
        features: ["Amortization schedule", "Interest vs Principal breakdown", "Loan tenure adjustment"],
        faqs: [
            {
                question: "What is EMI?",
                answer: "EMI stands for Equated Monthly Installment. It is the fixed amount you pay to the bank every month to repay your loan."
            },
            {
                question: "How does loan tenure affect EMI?",
                answer: "A longer tenure reduces your monthly EMI amount but increases the total interest you pay over the life of the loan."
            },
            {
                question: "Is having a co-applicant beneficial?",
                answer: "Yes, adding a co-applicant with a good income can increase your loan eligibility and help share the repayment burden."
            }
        ],
        howTo: {
            name: "How to Calculate Loan EMI",
            description: "Calculate your monthly loan repayment in 3 easy steps.",
            steps: [
                { name: "Loan Amount", text: "Enter the total principal amount you wish to borrow." },
                { name: "Interest Rate", text: "Input the annual interest rate offered by your bank." },
                { name: "Loan Tenure", text: "Select the duration of the loan in years." },
                { name: "Analyze", text: "Check the calculated EMI and total interest breakdown below." }
            ]
        },
        popular: true,
    },
    {
        id: 'india-fd',
        name: 'FD Calculator (India)',
        description: 'Calculate maturity amount and interest for Fixed Deposits (FD). Supports quarterly, monthly, and yearly compounding with detailed year-wise breakdown.',
        category: 'india',
        icon: Landmark,
        component: FDCalculator,
        longDescription: "Secure your savings. Fixed Deposits (FDs) are a safe investment choice in India. This calculator helps you compute the maturity amount and interest earned, supporting monthly, quarterly, and cumulative payout options.",
        features: ["Quarterly/Monthly compounding", "Maturity value calculation", "Interest payout estimator"],
    },
    {
        id: 'india-rd',
        name: 'RD Calculator (India)',
        description: 'Plan your Recurring Deposits (RD) accurately. Calculate maturity value for monthly savings with compounding logic suitable for Indian banks.',
        category: 'india',
        icon: TrendingUp,
        component: RDCalculator,
        longDescription: "Build wealth through small savings. Recurring Deposits (RD) let you save a fixed amount every month. This calculator accurately computes the maturity value based on the quarterly compounding logic used by most Indian banks.",
        features: ["Monthly savings goal", "Quarterly compounding logic", "Bank-grade accuracy"],
    },
    {
        id: 'india-ppf',
        name: 'PPF Calculator',
        description: 'Public Provident Fund calculator. Estimate returns for 15-year tax-saving PPF investments with exempt-exempt-exempt (EEE) benefits.',
        category: 'india',
        icon: Briefcase,
        component: PPFCalculator,
        longDescription: "Maximize your tax savings. The Public Provident Fund (PPF) is a government-backed scheme offering attractive tax-free returns. Calculate your maturity corpus over the 15-year lock-in period.",
        features: ["15-year projection", "Tax-free returns (EEE)", "Annual investment planning"],
    },
    {
        id: 'india-home-loan-eligibility',
        name: 'Home Loan Eligibility',
        description: 'Check how much Home Loan you can get. Estimates maximum eligible loan amount based on your income, existing EMIs, and FOIR norms.',
        category: 'india',
        icon: Home,
        component: HomeLoanEligibilityCalculator,
        longDescription: "How much home loan can you afford? Banks look at your income and existing obligations. This calculator estimates your maximum loan eligibility based on standard FOIR (Fixed Obligation to Income Ratio) norms.",
        features: ["FOIR based calculation", "Income vs EMI analysis", "Max loan eligibility"],
    },
    {
        id: 'india-hra',
        name: 'HRA Calculator',
        description: 'Calculate House Rent Allowance (HRA) exemption. Determine taxable and exempt HRA based on salary, rent paid, and metro city rules.',
        category: 'india',
        icon: DollarSign,
        component: HRACalculator,
        longDescription: "Save tax on your rent. If you are a salaried employee receiving HRA, use this calculator to determine how much of it is tax-exempt based on your salary structure, rent paid, and city of residence.",
        features: ["HRA Exemption calculation", "Metro vs Non-Metro logic", "Taxable HRA determination"],
    },
    {
        id: 'compound-interest',
        name: 'Compound Interest Calculator',
        description: 'Compute compound growth for investments. Supports lump sum plus regular contributions, different compounding frequencies, and detailed breakdowns.',
        category: 'financial',
        icon: TrendingUp,
        component: CompoundInterestCalculator,
        longDescription: "Watch your money multiply. Compound interest allows your investments to grow exponentially. This tool lets you compare different compounding frequencies (daily, monthly, yearly) to see the true power of time.",
        features: ["Frequency settings", "Additional contributions", "Growth chart"],
        faqs: [
            {
                question: "What is Compound Interest?",
                answer: "Compound interest is the \"interest on interest.\" It is the result of reinvesting interest, calculating interest on both the initial principal and the accumulated interest from previous periods."
            },
            {
                question: "How does compounding frequency affect growth?",
                answer: "The frequency of compounding (daily, monthly, quarterly, yearly) significantly impacts the final amount. More frequent compounding leads to faster growth as interest is added to the principal more often."
            },
            {
                question: "What is the compound interest formula?",
                answer: "The formula is A = P(1 + r/n)^(nt), where A is the future value, P is the principal investment, r is the annual interest rate (decimal), n is the number of times interest is compounded per year, and t is the number of years."
            }
        ]
    },
    {
        id: 'simple-interest',
        name: 'Simple Interest Calculator',
        description: 'Calculate simple interest on loans or savings. Easy and quick interest calculation using the principal, rate, and time formula.',
        category: 'financial',
        icon: Percent,
        component: SimpleInterestCalculator,
        longDescription: "Back to basics. Simple interest is straightforward but essential for understanding loans and basic savings. Calculate the interest earned or paid without the effects of compounding.",
        features: ["Principal, Rate, Time inputs", "Total interest output", "Comparison with compound interest"],
    },
    {
        id: 'percentage-increase',
        name: 'Percentage Increase Calculator',
        description: 'Calculate percentage increase or decrease between two values. Determine growth or decline and see the difference instantly.',
        category: 'basic',
        icon: TrendingUp,
        component: PercentageIncreaseCalculator,
        longDescription: "Track the change. Whether it's a price hike, salary increment, or investment growth, this calculator finds the percentage difference between an initial value and a final value instantly.",
        features: ["Increase/Decrease detection", "Absolute difference", "Percentage delta"],
    },
    {
        id: 'discount',
        name: 'Discount Calculator',
        description: 'Calculate final price after discount and tax. Perfect for shopping sales, double discounts, and finding out exactly how much you save.',
        category: 'basic',
        icon: Percent,
        component: DiscountCalculator,
        longDescription: "Never miss a deal. Calculate the final price of an item after applying a percentage discount. You can also handle double discounts to find the true cost of that sale item.",
        features: ["Single & Double discounts", "Tax inclusion", "Savings calculation"],
    },
];

export const categories: { id: CalculatorCategory; name: string; icon: any }[] = [
    { id: 'basic', name: 'Basic & Math', icon: Calculator },
    { id: 'financial', name: 'Finance', icon: DollarSign },
    { id: 'health', name: 'Health & Fitness', icon: Activity },
    { id: 'india', name: 'India Specific', icon: Landmark },
    { id: 'other', name: 'Other Tools', icon: MoreHorizontal },
];
