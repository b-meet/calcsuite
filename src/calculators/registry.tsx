import { Calculator, DollarSign, Activity, Calendar, Lock, Divide, Percent, Scale, Flame, Ruler, TrendingUp, Briefcase, Car, Sunset, GraduationCap, Baby, Triangle, Heart, ArrowLeftRight, Dices, MoreHorizontal, Landmark, Home } from 'lucide-react';
import { lazy } from 'react';
import PercentageContent from './content/PercentageContent';
import BasicCalculatorContent from './content/BasicCalculatorContent';
import ScientificCalculatorContent from './content/ScientificCalculatorContent';
import FractionCalculatorContent from './content/FractionCalculatorContent';
import TipCalculatorContent from './content/TipCalculatorContent';
import PercentageChangeContent from './content/PercentageChangeContent';
import DiscountCalculatorContent from './content/DiscountCalculatorContent';
import IndiaEMICalculatorContent from './content/IndiaEMICalculatorContent';
import BMICalculatorContent from './content/BMICalculatorContent';
import SIPCalculatorContent from './content/SIPCalculatorContent';
import MortgageCalculatorContent from './content/MortgageCalculatorContent';
import LoanCalculatorContent from './content/LoanCalculatorContent';
import AutoLoanCalculatorContent from './content/AutoLoanCalculatorContent';
import InvestmentCalculatorContent from './content/InvestmentCalculatorContent';
import RetirementCalculatorContent from './content/RetirementCalculatorContent';
import SalaryCalculatorContent from './content/SalaryCalculatorContent';
import InflationCalculatorContent from './content/InflationCalculatorContent';
import CompoundInterestCalculatorContent from './content/CompoundInterestCalculatorContent';
import CalorieCalculatorContent from './content/CalorieCalculatorContent';
import BodyFatCalculatorContent from './content/BodyFatCalculatorContent';
import BMRCalculatorContent from './content/BMRCalculatorContent';
import IdealWeightCalculatorContent from './content/IdealWeightCalculatorContent';
import PregnancyCalculatorContent from './content/PregnancyCalculatorContent';
import OvulationCalculatorContent from './content/OvulationCalculatorContent';
import FDCalculatorContent from './content/FDCalculatorContent';
import RDCalculatorContent from './content/RDCalculatorContent';
import HRACalculatorContent from './content/HRACalculatorContent';
import IndiaTaxCalculatorContent from './content/IndiaTaxCalculatorContent';
import IndiaSalaryCalculatorContent from './content/IndiaSalaryCalculatorContent';
import IndiaGSTCalculatorContent from './content/IndiaGSTCalculatorContent';
import PPFCalculatorContent from './content/PPFCalculatorContent';
import HomeLoanEligibilityCalculatorContent from './content/HomeLoanEligibilityCalculatorContent';
import AgeCalculatorContent from './content/AgeCalculatorContent';
import GPACalculatorContent from './content/GPACalculatorContent';
import PasswordGeneratorContent from './content/PasswordGeneratorContent';
import UnitConverterContent from './content/UnitConverterContent';
import RandomNumberGeneratorContent from './content/RandomNumberGeneratorContent';
import DateCalculatorContent from './content/DateCalculatorContent';

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

export type CalculatorCategory = 'math' | 'financial' | 'health' | 'other' | 'india';

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
    keywords?: string[];
    faqs?: { question: string; answer: string }[];
    howTo?: {
        name: string;
        description: string;
        steps: { name: string; text: string; image?: string; url?: string }[];
    };
    popular?: boolean;
    hideDefaultSections?: boolean;
    scenarios?: {
        id: string;
        name: string;
        description: string;
        keywords: string[];
        features?: string[];
        initialState?: any;
    }[];
}

export const calculatorRegistry: CalculatorDef[] = [
    {
        id: 'basic-math',
        name: 'Basic Calculator Online - Clean & Private',
        description: 'Instantly calculate basic math with our clean, interface. Fast, secure, and 100% private — no data leaves your browser.',
        category: 'math',
        icon: Calculator,
        component: BasicCalculator,
        content: BasicCalculatorContent,
        longDescription: "The Basic Calculator is designed for quick and accurate everyday math. Whether you need to add numbers, subtract values, multiply quantities, or divide amounts, this calculator gives instant results without distractions. It is ideal for students, professionals, and anyone who wants a clean, reliable calculator that works on all devices.",
        features: [
            "Instant results for +, -, ×, ÷",
            "Clear, distraction-free interface",
            "Supports decimal values",
            "Responsive for mobile & desktop"
        ],
        keywords: ['calculator online free', 'simple calculator', 'math calculator', 'basic calculator'],
        faqs: [
            {
                question: "Is this calculator online free?",
                answer: "Yes. This calculator is completely free and has no usage limits."
            },
            {
                question: "Does it support decimal numbers?",
                answer: "Yes. You can perform calculations with decimal values accurately."
            },
            {
                question: "Can I use it on my phone?",
                answer: "Yes. The calculator is fully responsive and works smoothly on mobile devices."
            },
            {
                question: "Is any data stored?",
                answer: "No. All calculations happen instantly in your browser and are not saved."
            }
        ],
        howTo: {
            name: "How to Use This Basic Math Calculator",
            description: "Perform arithmetic calculations in 3 simple steps.",
            steps: [
                { name: "Enter numbers", text: "Use the on-screen keypad or your keyboard." },
                { name: "Select operation", text: "Choose Addition (+), Subtraction (-), Multiplication (×), or Division (÷)." },
                { name: "Get result", text: "Press the equals (=) button to see the answer instantly." }
            ]
        }
    },
    {
        id: 'scientific',
        name: 'Scientific Calculator Online - Pro Math (Private & Secure)',
        description: 'Accurately solve trigonometry, logs, and advanced math. Clean & Private — perfect for students and professionals.',
        category: 'math',
        icon: Calculator,
        component: ScientificCalculator,
        content: ScientificCalculatorContent,
        longDescription: "This Scientific Calculator is built for complex mathematical tasks that go beyond basic arithmetic. It allows you to perform trigonometric calculations, logarithmic functions, powers, roots, and advanced expressions with precision. Designed for speed and accuracy, it is suitable for academic, professional, and technical use.",
        features: [
            "Trigonometric functions (sin, cos, tan)",
            "Logarithmic calculations (log, ln)",
            "Powers and Roots support",
            "Advanced expression handling"
        ],
        faqs: [
            {
                question: "Does this calculator support trigonometric functions?",
                answer: "Yes. It supports sin, cos, tan, and inverse trigonometric operations."
            },
            {
                question: "Can I calculate logarithms and powers?",
                answer: "Yes. Both logarithmic and exponential calculations are supported."
            },
            {
                question: "Is this calculator suitable for students?",
                answer: "Yes. It is designed to be intuitive while supporting advanced mathematical needs."
            },
            {
                question: "Does it work on mobile devices?",
                answer: "Yes. The calculator layout adapts smoothly to mobile and tablet screens."
            }
        ],
        howTo: {
            name: "How to Use the Scientific Calculator Effectively",
            description: "Perform advanced mathematical calculations.",
            steps: [
                { name: "Enter numbers", text: "Use the numeric keypad to input values." },
                { name: "Select function", text: "Choose the required function (sin, log, etc.) or operator." },
                { name: "Structure expression", text: "Use parentheses for complex equations." },
                { name: "Calculate", text: "Press equals to get the precise result." }
            ]
        }
    },
    {
        id: 'triangle',
        name: 'Triangle Calculator - Solve Area & Sides (100% Private)',
        description: 'Instantly calculate area, perimeter, and sides for all triangle types. Fast, accurate, and for every user.',
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
        ],
        faqs: [
            {
                question: "How do I use this calculator effectively?",
                answer: "Simply enter your values into the designated input fields. The calculator will automatically process the data and display your accurate results instantly."
            },
            {
                question: "Is my data secure while using this tool?",
                answer: "Yes, all computations are performed strictly locally within your browser. No personal data is stored or transmitted to external servers."
            },
            {
                question: "Can I use this calculator on mobile devices?",
                answer: "Absolutely. This tool is fully responsive and optimized to provide a seamless experience across all desktop, tablet, and mobile browsers."
            }
        ],

    },
    {
        id: 'fraction',
        name: 'Fraction Calculator Online - Fast, & Private',
        description: 'Simplify and solve fractions and mixed numbers instantly. Clean, distraction-free interface with no data storage.',
        category: 'math',
        icon: Divide,
        component: FractionCalculator,
        content: FractionCalculatorContent,
        longDescription: "Fractions are a core part of mathematics. This Fraction Calculator helps you perform calculations with fractions and mixed numbers quickly and accurately, without needing to simplify or convert manually. It is designed to handle common fraction operations with ease.",
        features: [
            "Add, Subtract, Multiply, Divide",
            "Support for mixed numbers",
            "Automatic simplification",
            "Visual explanation of fractions"
        ],
        faqs: [
            {
                question: "Can this calculator simplify fractions?",
                answer: "Yes. Results are automatically reduced to their simplest form."
            },
            {
                question: "Does it support mixed numbers?",
                answer: "Yes. Mixed numbers and improper fractions are handled correctly."
            },
            {
                question: "Is this tool free to use?",
                answer: "Yes. There are no limits or restrictions on usage."
            },
            {
                question: "Can I use it on my phone?",
                answer: "Yes. The calculator is optimized for phones, tablets, and desktops."
            }
        ],
        howTo: {
            name: "How to Use the Fraction Calculator",
            description: "Perform accurate fraction operations.",
            steps: [
                { name: "Enter 1st Fraction", text: "Input the numerator and denominator." },
                { name: "Select Operation", text: "Choose +, -, ×, or ÷." },
                { name: "Enter 2nd Fraction", text: "Input the second fraction." },
                { name: "Calculate", text: "Click calculate to get the instant result." }
            ]
        }
    },
    {
        id: 'percentage',
        name: 'Percentage Calculator Online - 1-Click Results (Clean)',
        description: 'Instantly calculate percentage changes and discounts. Fast, private, and 100% online tool for everyday math.',
        category: 'math',
        icon: Percent,
        component: PercentageCalculator,
        content: PercentageContent,
        popular: true,
        formula: "P = \\frac{V_1}{V_2} \\times 100",
        longDescription: "Percentages are a fundamental part of everyday math. From shopping discounts and tax calculations to exam results and financial analysis, percentages help compare values quickly and clearly. This free Percentage Calculator allows you to solve common percentage problems instantly without manual calculations.",
        features: [
            "Solve 'What is X% of Y?' instantly",
            "Visual formula explanation",
            "No formulas required",
            "100% Free & Secure"
        ],
        faqs: [
            {
                question: "What is the easiest way to calculate percentages?",
                answer: "Using an online percentage calculator is the fastest and most reliable method."
            },
            {
                question: "Can this calculator handle decimals?",
                answer: "Yes. You can enter decimal percentages and decimal values."
            },
            {
                question: "How do you calculate percentage of a number manually?",
                answer: "Divide the part by the whole to get a decimal, then multiply by 100. For example, 50 out of 200 is (50 / 200) * 100 = 25%."
            },
            {
                question: "Is this calculator free to use?",
                answer: "Yes. It is completely free with no usage limits."
            },

            {
                question: "Does this calculator work on mobile?",
                answer: "Yes. It is fully responsive and works on all devices."
            }
        ],
        howTo: {
            name: "How to Use This Percentage Calculator",
            description: "Calculate percentages in seconds.",
            steps: [
                { name: "Enter Percentage", text: "Input the percentage value you want to calculate." },
                { name: "Enter Total", text: "Input the total number." },
                { name: "Calculate", text: "Click the button to get the result instantly." }
            ]
        }
    },
    {
        id: 'mortgage',
        name: 'Mortgage Calculator (US) - 100% Private (No Sign-up)',
        description: 'Accurately estimate monthly payments, including PITI. 100% private — your financial data never leaves your device.',
        category: 'financial',
        icon: DollarSign,
        component: MortgageCalculator,
        content: MortgageCalculatorContent,
        longDescription: "Planning to buy a home? Our Mortgage Calculator helps you estimate your monthly mortgage payments with precision. Be financially prepared by understanding the impact of interest rates, loan terms, and down payments on your monthly budget.",
        features: [
            "Calculates Principal & Interest",
            "Fixed-rate loan support",
            "Amortization schedule insights",
            "Visual breakdown of costs"
        ],
        faqs: [
            {
                question: "Is this mortgage calculator accurate?",
                answer: "It uses standard mortgage formulas and provides reliable estimates. Actual lender terms may vary."
            },
            {
                question: "Does it include taxes and insurance?",
                answer: "This calculator focuses on principal and interest. Taxes and insurance may be added separately."
            },
            {
                question: "Can I use it for refinancing?",
                answer: "Yes. It can estimate payments for refinance scenarios as well."
            },
            {
                question: "Is this tool free?",
                answer: "Yes. It is completely free with no usage limits."
            }
        ],
        howTo: {
            name: "How to Calculate Mortgage Payments",
            description: "Estimate your home loan repayment instantly.",
            steps: [
                { name: "Loan Amount", text: "Enter the total loan principal." },
                { name: "Interest Rate", text: "Input the annual interest rate." },
                { name: "Loan Term", text: "Select the repayment period (e.g., 15 or 30 years)." },
                { name: "Calculate", text: "View your estimated monthly payment and total interest cost." }
            ]
        },
        popular: true,
    },
    {
        id: 'loan',
        name: 'Loan Calculator Online - Plan Repayment (Private & Secure)',
        description: 'Instantly calculate monthly payments and interest costs. 100% secure and private with no annoying ads or trackers.',
        category: 'financial',
        icon: DollarSign,
        component: LoanCalculator,
        content: LoanCalculatorContent,
        longDescription: "Take control of your debt. Whether it's a personal loan, business loan, or student loan, our calculator gives you a clear picture of your repayment schedule and total interest costs.",
        features: [
            "Monthly payment estimation",
            "Total interest calculation",
            "Payoff date projection",
            "Simple and clean interface"
        ],
        faqs: [
            {
                question: "Is this loan calculator accurate?",
                answer: "It uses standard loan formulas and provides reliable estimates. Actual lender terms may vary."
            },
            {
                question: "Can I use it for different loan types?",
                answer: "Yes. It works for most fixed-rate loans with regular payments including personal, student, and business loans."
            },
            {
                question: "Does it include fees or taxes?",
                answer: "No. It calculates payments based on loan amount, interest, and term only."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. It is completely free with no usage limits."
            }
        ],
        howTo: {
            name: "How to Calculate Loan Repayment",
            description: "Plan your loan in 3 easy steps.",
            steps: [
                { name: "Loan Details", text: "Enter loan amount and interest rate." },
                { name: "Term", text: "Select the loan duration." },
                { name: "Calculate", text: "See your montly payment and total cost instantly." }
            ]
        }
    },
    {
        id: 'auto-loan',
        name: 'Auto Loan Calculator - Estimate Car Payments (100% Private)',
        description: 'Accurately calculate car payments with trade-ins and tax. Private, secure, and experience for buyers.',
        category: 'financial',
        icon: Car,
        component: AutoLoanCalculator,
        content: AutoLoanCalculatorContent,
        longDescription: "Before you head to the dealership, know your numbers. Our Auto Loan Calculator helps you estimate your monthly payments by factoring in the car details, trade-in value, and sales tax, giving you the upper hand in negotiations.",
        features: [
            "Trade-in value adjustment",
            "Sales tax calculation",
            "Down payment impact",
            "Amortization schedule"
        ],
        faqs: [
            {
                question: "Can I use this for used cars?",
                answer: "Yes. It works for both new and used vehicle financing."
            },
            {
                question: "Does it include sales tax?",
                answer: "Yes. You can include sales tax in the calculation."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. It is completely free to use."
            }
        ],
        howTo: {
            name: "How to Estimate Auto Loan Payments",
            description: "Get a clear picture of your car financing.",
            steps: [
                { name: "Vehicle Price", text: "Enter the purchase price of the car." },
                { name: "Adjustments", text: "Add down payment, trade-in value, and fees." },
                { name: "Loan Terms", text: "Set the interest rate and loan duration." },
                { name: "Result", text: "See your estimated monthly payment instantly." }
            ]
        },
    },
    {
        id: 'investment',
        name: 'Investment Calculator - Visualize Wealth (Private & Secure)',
        description: 'Project wealth growth with compound interest. 100% private — your financial plans are secure and clean.',
        category: 'financial',
        icon: TrendingUp,
        component: InvestmentCalculator,
        content: InvestmentCalculatorContent,
        longDescription: "The power of compound interest is the eighth wonder of the world. Use this Investment Calculator to project how your money will grow over time with regular contributions and varying rates of return.",
        features: [
            "Compound interest projection",
            "Annual contribution support",
            "Growth visualization",
            "Inflation-adjustment insights"
        ],
        faqs: [
            {
                question: "Are investment returns guaranteed?",
                answer: "No. Investment returns are market-linked and can vary over time."
            },
            {
                question: "Is this calculator accurate?",
                answer: "It provides reliable estimates based on standard compound growth models."
            },
            {
                question: "Can I use this for retirement planning?",
                answer: "Yes. It is well-suited for long-term financial planning."
            },
            {
                question: "Is this tool free?",
                answer: "Yes. It is completely free with no usage limits."
            }
        ],
        howTo: {
            name: "How to Calculate Investment Growth",
            description: "Visualize your financial future.",
            steps: [
                { name: "Initial Investment", text: "Enter your starting amount." },
                { name: "Contributions", text: "Add monthly or annual contributions." },
                { name: "Growth Rate", text: "Set the expected annual return percentage." },
                { name: "Projection", text: "See how your money grows over 10, 20, or 30 years." }
            ]
        },
    },
    {
        id: 'retirement',
        name: 'Retirement Calculator - Secure Future Planning (100% Private)',
        description: 'Accurately estimate savings goals for a secure future. Private and — no personal financial data stored.',
        category: 'financial',
        icon: Sunset,
        component: RetirementCalculator,
        content: RetirementCalculatorContent,
        longDescription: "It's never too early to start planning. Our Retirement Calculator helps you determine if you're on track to meet your retirement goals by analyzing your current savings, annual contributions, and expected retirement age.",
        features: [
            "Inflation adjustment",
            "Life expectancy modeling",
            "Savings gap analysis",
            "Early vs Late start comparison"
        ],
        faqs: [
            {
                question: "Is this retirement calculator accurate?",
                answer: "It provides estimates based on standard growth assumptions. Actual outcomes depend on savings behavior and market performance."
            },
            {
                question: "Does this replace financial advice?",
                answer: "No. It is a planning and awareness tool, not personalized financial advice."
            },
            {
                question: "Can I adjust assumptions later?",
                answer: "Yes. You can experiment with different inputs to explore scenarios."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. It is completely free with no limitations."
            }
        ],
        howTo: {
            name: "How to Plan Your Retirement",
            description: "Assess your readiness in minutes.",
            steps: [
                { name: "Personal Details", text: "Enter current age and desired retirement age." },
                { name: "Financials", text: "Input current savings and annual contributions." },
                { name: "Assumptions", text: "Set expected return and inflation rates." },
                { name: "Result", text: "View your projected corpus and monthly income." }
            ]
        },
    },
    {
        id: 'salary',
        name: 'Salary Calculator - Convert Income Instantly (Clean)',
        description: 'Instantly convert salary across all timeframes. Fast, accurate, and 100% private with a clean interface.',
        category: 'financial',
        icon: Briefcase,
        component: SalaryCalculator,
        content: SalaryCalculatorContent,
        longDescription: "How much is that hourly rate a year? This Salary Calculator instantly converts your income across different timeframes—hourly, daily, weekly, monthly, and annually—giving you a complete picture of your earnings.",
        features: [
            "Full timeframe conversion",
            "Work hours customization",
            "Simple interface",
            "Gross income planning"
        ],
        formula: "\\text{Annual Salary} = \\text{Hourly Rate} \\times \\text{Hours per week} \\times 52",
        faqs: [
            {
                question: "Does this include taxes?",
                answer: "No. This calculator shows gross income only."
            },
            {
                question: "How do I calculate annual salary from an hourly wage?",
                answer: "Multiply your hourly wage by the number of hours you work per week, then multiply that result by 52 (the number of weeks in a year)."
            },
            {
                question: "What is a bi-weekly pay cycle?",
                answer: "Bi-weekly pay means receiving a paycheck every two weeks, resulting in exactly 26 paychecks per year."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. It is completely free to use."
            }
        ],
        howTo: {
            name: "How to Use the Salary Calculator",
            description: "Convert pay across time periods.",
            steps: [
                { name: "Salary Amount", text: "Enter your salary amount." },
                { name: "Frequency", text: "Select the pay frequency." },
                { name: "Result", text: "View instant conversions across other time periods." }
            ]
        },
        popular: true,
    },
    {
        id: 'bmi',
        name: 'BMI Calculator Online - Private & WHO Standard (No Ads)',
        description: 'Accurately calculate your Body Mass Index (BMI) using WHO standards. 100% private and health tool.',
        category: 'health',
        icon: Activity,
        component: BMICalculator,
        content: BMICalculatorContent,
        longDescription: "BMI (Body Mass Index) is a key health metric used by professionals worldwide. This tool calculates your BMI based on height and weight, categorizing results according to WHO standards (Underweight, Normal, Overweight, Obese). It supports both Metric (kg/cm) and Imperial (lbs/in) units for your convenience.",
        keywords: [
            'bmi calculator',
            'body mass index',
            'bmi chart',
            'bmi for men',
            'bmi for women',
            'ideal weight calculator',
            'obesity calculator',
            'bmi for indians',
            'tdee calculator',
            'bmr calculator'
        ],
        hideDefaultSections: true,
        features: [
            "Metric & Imperial Units",
            "Weight category screening",
            "WHO standard classifications",
            "Instant health insight"
        ],
        formula: "\\text{BMI} = \\frac{\\text{Weight in kg}}{(\\text{Height in meters})^2}",
        faqs: [
            {
                question: "Is BMI accurate for everyone?",
                answer: "BMI is a reliable mass screening tool for most adults, but it does not account for muscle mass, meaning athletes might score as 'overweight' despite having low body fat."
            },
            {
                question: "What is a healthy BMI range?",
                answer: "According to the World Health Organization (WHO), a strictly normal BMI range lies between 18.5 and 24.9."
            },
            {
                question: "How do I calculate BMI manually?",
                answer: "Square your height in meters. Then divide your total weight in kilograms by that squared number."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. It is completely free with no limitations."
            }
        ],
        howTo: {
            name: "How to Calculate Your BMI",
            description: "Check your Body Mass Index in 3 steps.",
            steps: [
                { name: "Choose Unit", text: "Select Metric (kg/cm) or Imperial (lbs/in) units." },
                { name: "Enter Details", text: "Input your current weight and height accurately." },
                { name: "See Result", text: "View your BMI score and corresponding weight category." }
            ]
        },
        popular: true,
    },
    {
        id: 'calorie',
        name: 'Calorie Calculator - Fast, Private & TDEE Accurate',
        description: 'Find your daily calorie needs for weight goals. Fast, accurate, and 100% private — no data tracking.',
        category: 'health',
        icon: Flame,
        component: CalorieCalculator,
        content: CalorieCalculatorContent,
        longDescription: "Unlock the science of weight management. Specifically designed to calculate your Total Daily Energy Expenditure (TDEE), this tool tells you exactly how many calories you need to eat to maintain, lose, or gain weight based on your activity level.",
        features: [
            "Calculates BMR and TDEE",
            "Personalized for age, gender, height",
            "Activity level adjustments",
            "Clear daily calorie targets"
        ],
        faqs: [
            {
                question: "Are these calorie numbers exact?",
                answer: "No. They are estimates based on averages and assumptions."
            },
            {
                question: "Can calorie needs change over time?",
                answer: "Yes. Weight, activity, and age can affect calorie requirements."
            },
            {
                question: "Does this replace professional advice?",
                answer: "No. It is an informational tool, not medical guidance."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            }
        ],
        howTo: {
            name: "How to Calculate Daily Calories",
            description: "Find your TDEE in seconds.",
            steps: [
                { name: "Personal Details", text: "Enter your age, gender, height, and weight." },
                { name: "Activity Level", text: "Select your daily activity level accurately." },
                { name: "Goal", text: "Choose your weight goal (maintain, lose, or gain)." },
                { name: "Result", text: "See your daily calorie target instantly." }
            ]
        },
    },
    {
        id: 'body-fat',
        name: 'Body Fat Calculator - Private Navy Method (No Ads)',
        description: 'Estimate body fat percentage accurately. Privacy-first design — your health metrics stay strictly on your device.',
        category: 'health',
        icon: Ruler,
        component: BodyFatCalculator,
        content: BodyFatCalculatorContent,
        longDescription: "Get a clearer picture of your health than weight alone. Using the U.S. Navy Method, this calculator estimates your body fat percentage based on simple measurements, providing a key metric for fitness tracking.",
        features: [
            "U.S. Navy Method accuracy",
            "Gender-specific formulas",
            "Requires only tape measure inputs",
            "Tracks lean body mass vs. fat mass"
        ],
        faqs: [
            {
                question: "Is this body fat percentage exact?",
                answer: "No. It is an estimate based on established formulas."
            },
            {
                question: "How often should I calculate?",
                answer: "Occasionally. Tracking monthly trends is best."
            },
            {
                question: "Does this replace medical tests?",
                answer: "No. It is informational, not diagnostic."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            }
        ],
        howTo: {
            name: "How to Measure Body Fat",
            description: "Estimate composition in 3 steps.",
            steps: [
                { name: "Measure", text: "Measure your neck, waist, height, and hips (females)." },
                { name: "Input", text: "Enter your measurements accurately." },
                { name: "Calculate", text: "See your body fat percentage instantly." }
            ]
        },
    },
    {
        id: 'bmr',
        name: 'BMR Calculator - Private Metabolic Rate (Clean)',
        description: 'Find your Basal Metabolic Rate (BMR) instantly. 100% private, clean, and optimized for your fitness journey.',
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
        content: BMRCalculatorContent,
        educationalContent: [
            {
                title: "BMR vs. RMR",
                content: "BMR (Basal Metabolic Rate) and RMR (Resting Metabolic Rate) are often used interchangeably, but BMR is measured under stricter conditions. For most casual users, the difference is negligible."
            }
        ],
        faqs: [
            {
                question: "How do I use this calculator effectively?",
                answer: "Simply enter your values into the designated input fields. The calculator will automatically process the data and display your accurate results instantly."
            },
            {
                question: "Is my data secure while using this tool?",
                answer: "Yes, all computations are performed strictly locally within your browser. No personal data is stored or transmitted to external servers."
            },
            {
                question: "Can I use this calculator on mobile devices?",
                answer: "Absolutely. This tool is fully responsive and optimized to provide a seamless experience across all desktop, tablet, and mobile browsers."
            }
        ],

    },
    {
        id: 'ideal-weight',
        name: 'Ideal Weight Calculator - Private Medical Range (No Ads)',
        description: 'Find your healthy weight range using medical formulas. 100% Private and Ad-free experience for every user.',
        category: 'health',
        icon: Scale,
        component: IdealWeightCalculator,
        content: IdealWeightCalculatorContent,
        longDescription: "Find your healthy weight range using medically standard formulas. We use the Robinson, Miller, Devine, and Hamwi formulas to give you a comprehensive estimate based on your height and gender, providing a more balanced view than a single number.",
        features: [
            "Multiple medical formulas",
            "Gender-specific results",
            "Healthy range estimation",
            "Clear context vs BMI"
        ],
        faqs: [
            {
                question: "Is ideal weight the same for everyone?",
                answer: "No. It varies by height, gender, and body structure."
            },
            {
                question: "Should I aim exactly for this number?",
                answer: "No. Treat it as a reference range, not a strict goal."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            },
            {
                question: "Does this replace medical advice?",
                answer: "No. Always consult a doctor for medical guidance."
            }
        ],
        howTo: {
            name: "How to Find Your Ideal Weight",
            description: "Get a reference range in seconds.",
            steps: [
                { name: "Input Details", text: "Enter your height and gender." },
                { name: "Calculate", text: "We apply multiple formulas instantly." },
                { name: "Result", text: "View your estimated healthy weight range." }
            ]
        },
    },
    {
        id: 'pregnancy',
        name: 'Pregnancy Calculator - Private Due Date & Trimester Tracker',
        description: 'Instantly calculate your estimated due date. Privacy-first design — your personal timeline stays secure.',
        category: 'health',
        icon: Baby,
        component: PregnancyCalculator,
        content: PregnancyCalculatorContent,
        longDescription: "An exciting journey begins. Calculate your estimated due date based on your last menstrual period (LMP). This tool also breaks down your pregnancy into trimesters, helping you track significant developmental milestones.",
        features: [
            "Due date estimation",
            "Trimester breakdown",
            "Milestone tracking",
            "Medical standard methods (LMP, IVF)"
        ],
        faqs: [
            {
                question: "Is the due date exact?",
                answer: "No. Most births occur within 2 weeks of the date."
            },
            {
                question: "Can my due date change?",
                answer: "Yes. Doctors may update it based on ultrasound."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            },
            {
                question: "Does this replace a doctor?",
                answer: "No. Always consult a professional."
            }
        ],
        howTo: {
            name: "How to Estimate Due Date",
            description: "Track your timeline in seconds.",
            steps: [
                { name: "First Day of Period", text: "Enter the date of your last menstrual period." },
                { name: "Cycle Length", text: "Adjust standard 28-day cycle if needed." },
                { name: "Calculate", text: "See your EDD and trimester timeline instantly." }
            ]
        },
    },
    {
        id: 'age',
        name: 'Age Calculator Online - Fast & Private (1-Click Results)',
        description: 'Calculate your exact age and next birthday instantly. 100% Ad-free and Private online tool for everyone.',
        category: 'other',
        icon: Calendar,
        component: AgeCalculator,
        content: AgeCalculatorContent,
        longDescription: "Time flies! Use this Age Calculator to find out exactly how old you are in years, months, weeks, days, and even seconds. It’s perfect for tracking milestones, finding out the day of the week you were born, or calculating the precise age difference between two dates.",
        keywords: ['age in days', 'chronological age calculator', 'date of birth calculator', 'how old am i', 'birthday calculator'],
        features: [
            "Exact age calculation",
            "Next birthday countdown",
            "Day of birth finder",
            "Leap year adjustment"
        ],
        faqs: [
            {
                question: "How does it calculate age so precisely?",
                answer: "It uses the exact number of days between your birth date and today, accounting for every leap year."
            },
            {
                question: "Can I use it to find my next birthday?",
                answer: "Yes. It shows a countdown to your next birthday in days."
            },
            {
                question: "What is chronological age?",
                answer: "Chronological age is the amount of time that has passed from your birth to the given date."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            }
        ],
        howTo: {
            name: "How to Calculate Age",
            description: "Find your exact timeline.",
            steps: [
                { name: "Date of Birth", text: "Enter your birth date." },
                { name: "Target Date", text: "Defaults to today, or select a specific date." },
                { name: "Result", text: "See your age in years, months, and days." }
            ]
        },
    },
    {
        id: 'gpa',
        name: 'GPA Calculator India - SGPA & CGPA Calculator Online',
        description: 'Calculate GPA, SGPA, and CGPA online with a mobile-friendly weighted grade calculator for Indian students and credit-based semesters.',
        category: 'other',
        icon: GraduationCap,
        component: GPACalculator,
        content: GPACalculatorContent,
        longDescription: "This GPA Calculator India helps students calculate semester GPA, SGPA, and cumulative CGPA using course credits and grade points. It is built for quick mobile use when you want to check semester performance, scholarship targets, or cumulative results without opening a spreadsheet.",
        features: [
            "Semester GPA / SGPA calculation",
            "Cumulative GPA / CGPA planning",
            "4.0 and 10-point scale support",
            "Mobile-friendly course entry"
        ],
        keywords: [
            'gpa calculator india',
            'sgpa calculator',
            'cgpa calculator',
            'semester gpa calculator',
            'college gpa calculator india',
            'credit based gpa calculator'
        ],
        faqs: [
            {
                question: "Is this GPA calculator accurate?",
                answer: "Yes. It uses standard GPA calculation methods used by most institutions."
            },
            {
                question: "Can I calculate SGPA or CGPA with this tool?",
                answer: "Yes. Enter one semester to estimate SGPA, or add all completed courses and credits to estimate cumulative GPA or CGPA."
            },
            {
                question: "How do credits affect GPA?",
                answer: "Higher credit courses weigh more than lower credit ones."
            },
            {
                question: "Does every Indian university use the same GPA conversion?",
                answer: "No. Some colleges use a 10-point scale, others use a 4-point scale, and percentage-to-GPA conversion rules can vary by university."
            }
        ],
        howTo: {
            name: "Calculate Your GPA",
            description: "Measure semester GPA, SGPA, or cumulative CGPA quickly.",
            steps: [
                { name: "Add Courses", text: "Enter course names and credits." },
                { name: "Choose Scale", text: "Switch between 4.0 letter grades and 10-point grade points if needed." },
                { name: "Enter Grades", text: "Select the grade or grade point for each subject." },
                { name: "Result", text: "See your calculated GPA instantly." }
            ]
        },
    },
    {
        id: 'password',
        name: 'Password Generator - 100% Private & Locally Secure',
        description: 'Generate strong, random passwords instantly. 100% secure as all generation happens locally in your browser.',
        category: 'other',
        icon: Lock,
        component: PasswordGenerator,
        content: PasswordGeneratorContent,
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
        ],
        faqs: [
            {
                question: "How do I use this calculator effectively?",
                answer: "Simply enter your values into the designated input fields. The calculator will automatically process the data and display your accurate results instantly."
            },
            {
                question: "Is my data secure while using this tool?",
                answer: "Yes, all computations are performed strictly locally within your browser. No personal data is stored or transmitted to external servers."
            },
            {
                question: "Can I use this calculator on mobile devices?",
                answer: "Absolutely. This tool is fully responsive and optimized to provide a seamless experience across all desktop, tablet, and mobile browsers."
            }
        ],

    },
    {
        id: 'converter',
        name: 'Unit Converter Online - Fast, & Universal',
        description: 'Instantly convert between Metric and Imperial units. Fast, private, and 100% with zero distractions.',
        category: 'other',
        icon: ArrowLeftRight,
        component: UnitConverter,
        content: UnitConverterContent,
        longDescription: "Bridge the gap between Metric and Imperial. Convert length, weight, temperature, and volume instantly with this all-in-one unit converter. Perfect for students, travelers, and professionals.",
        features: [
            "Metric & Imperial",
            "Multiple categories",
            "Instant updates",
            "No formulas needed"
        ],
        faqs: [
            {
                question: "Is this converter accurate?",
                answer: "Yes. All conversions are mathematically standard and precise."
            },
            {
                question: "What units are supported?",
                answer: "Length, Weight, Temperature, and Volume across Metric and Imperial systems."
            }
        ],
        howTo: {
            name: "Convert Units Fast",
            description: "Simple inputs, instant results.",
            steps: [
                { name: "Input Value", text: "Type the number you want to convert." },
                { name: "Select Units", text: "Choose the starting unit (e.g., Meters)." },
                { name: "Result", text: "See the converted value instantly (e.g., Feet)." }
            ]
        },
    },
    {
        id: 'random',
        name: 'Random Number Generator - 100% Private & Unbiased',
        description: 'Generate truly random integers instantly for games and lotteries. Fast, biased-free, and completely clean.',
        category: 'other',
        icon: Dices,
        component: RandomNumberGenerator,
        content: RandomNumberGeneratorContent,
        longDescription: "Generate truly random numbers for games, lotteries, and simulations. Customize your range and quantity with this unbiased Random Number Generator.",
        features: [
            "Custom Range (Min/Max)",
            "Multiple Numbers",
            "No Duplicates Option",
            "Unbiased Algorithm"
        ],
        faqs: [
            {
                question: "Are the numbers truly random?",
                answer: "Yes. We use a cryptographically secure pseudo-random number generator."
            },
            {
                question: "Can I generate lottery numbers?",
                answer: "Yes. Just set the range (e.g., 1-49) and quantity."
            }
        ],
        howTo: {
            name: "Generate Random Numbers",
            description: "Get lucky instantly.",
            steps: [
                { name: "Set Range", text: "Enter Min and Max values." },
                { name: "Quantity", text: "How many numbers do you need?" },
                { name: "Generate", text: "Click to get your random results." }
            ]
        },
    },
    {
        id: 'ovulation',
        name: 'Ovulation Calculator - Private Fertility Tracking',
        description: 'Estimate your most fertile days and ovulation window. 100% Private — your fertility data is never shared.',
        category: 'health',
        icon: Heart,
        content: OvulationCalculatorContent,
        component: OvulationCalculator,
        longDescription: "Planning specifically for pregnancy? This calculator estimates your ovulation window based on your last period date, helping you identify your most fertile days.",
        features: ["Fertility window", "Ovulation date", "Next period estimate"],
        faqs: [
            {
                question: "How do I use this calculator effectively?",
                answer: "Simply enter your values into the designated input fields. The calculator will automatically process the data and display your accurate results instantly."
            },
            {
                question: "Is my data secure while using this tool?",
                answer: "Yes, all computations are performed strictly locally within your browser. No personal data is stored or transmitted to external servers."
            },
            {
                question: "Can I use this calculator on mobile devices?",
                answer: "Absolutely. This tool is fully responsive and optimized to provide a seamless experience across all desktop, tablet, and mobile browsers."
            }
        ],

    },
    {
        id: 'date-diff',
        name: 'Date Calculator - Fast & Private duration tool',
        description: 'Instantly calculate the exact time between two dates. Fast, private, and 100% experience.',
        category: 'other',
        icon: Calendar,
        component: DateCalculator,
        content: DateCalculatorContent,
        longDescription: "The Date Calculator helps you calculate the exact duration between two dates in days, weeks, months, and years. Whether you are planning an event, tracking deadlines, calculating age gaps, or counting days between important milestones, this tool delivers accurate results instantly.",
        features: [
            "Exact duration calculation",
            "Day/Week/Month/Year breakdown",
            "Leap year adjustment",
            "Business day calculation (optional)"
        ],
        faqs: [
            {
                question: "Does it include the end date?",
                answer: "You can choose to include or exclude the end date in the calculation."
            },
            {
                question: "How does it handle leap years?",
                answer: "It accurately accounts for leap years (29 days in February)."
            }
        ],
        howTo: {
            name: "Calculate Date Difference",
            description: "Find the gap between moments.",
            steps: [
                { name: "Start Date", text: "Select the beginning date." },
                { name: "End Date", text: "Select the concluding date." },
                { name: "Result", text: "See the exact time difference." }
            ]
        },
    },
    {
        id: 'inflation',
        name: 'Inflation Calculator - Visualize Purchasing Power (Private & Secure)',
        description: 'Estimate how inflation impacts your money. 100% private and — your financial planning is secure.',
        category: 'financial',
        icon: TrendingUp,
        component: InflationCalculator,
        content: InflationCalculatorContent,
        longDescription: "See the real cost of living. This Inflation Calculator shows you how purchasing power declines over time, helping you plan for long-term financial stability.",
        features: [
            "Purchasing power analysis",
            "Future value calculation",
            "Historical context",
            "Real vs Nominal value"
        ],
        faqs: [
            {
                question: "Is the inflation rate fixed?",
                answer: "No. Inflation varies year to year. This calculator uses an average rate for estimation."
            },
            {
                question: "Are the results guaranteed?",
                answer: "No. Results are estimates based on assumptions, not predictions."
            },
            {
                question: "Is inflation always bad?",
                answer: "Moderate inflation is normal. The risk lies in not planning for it."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. It is completely free with no limits."
            }
        ],
        howTo: {
            name: "How to Calculate Inflation Impact",
            description: "Future-proof your money.",
            steps: [
                { name: "Current Amount", text: "Enter the amount of money you have today." },
                { name: "Inflation Rate", text: "Set the expected annual inflation percentage." },
                { name: "Time Period", text: "Choose the number of years." },
                { name: "Result", text: "See how much you need in the future to match today's value." }
            ]
        },
        popular: true,
    },
    {
        id: 'tip',
        name: 'Tip Calculator India - Split Bills & Tipping Guide',
        description: 'Calculate tip in INR or other currencies, split restaurant bills, and check common tipping percentages in India for cafes, delivery, and dining.',
        category: 'math',
        icon: DollarSign,
        component: TipCalculator,
        content: TipCalculatorContent,
        longDescription: "This Tip Calculator India helps you calculate gratuity, compare common tip percentages, and split the total bill evenly between people. It is useful for restaurant dining, cafes, food delivery, salon visits, hotel staff tipping, and any situation where you want a quick rupee estimate without mental math.",
        features: [
            "Split bills evenly",
            "INR-friendly tip calculations",
            "Fixed or % tip options",
            "Instant total per person"
        ],
        keywords: [
            'tip calculator india',
            'bill split calculator india',
            'restaurant tip calculator',
            'tipping percentage india',
            'how much tip in india',
            'split bill calculator'
        ],
        faqs: [
            {
                question: "Can I split the bill between multiple people?",
                answer: "Yes. Enter the number of people and the calculator divides the total fairly."
            },
            {
                question: "Does it support percentage and fixed tips?",
                answer: "Yes. You can choose either method based on preference."
            },
            {
                question: "What is a common tip percentage in India?",
                answer: "Many diners leave around 5% to 10% for good service, but tipping is voluntary and many bills already include a service charge."
            },
            {
                question: "Is service charge the same as a tip?",
                answer: "No. A service charge is a separate line item on the bill, while a tip is a voluntary amount you choose to leave."
            }
        ],
        howTo: {
            name: "How This Tip Calculator Works",
            description: "Calculate accurate tips in seconds.",
            steps: [
                { name: "Enter Bill", text: "Input the total bill amount." },
                { name: "Choose Tip", text: "Select a fixed amount or percentage." },
                { name: "Split", text: "Enter number of people sharing the bill." },
                { name: "View Result", text: "See the tip and total per person instantly." }
            ]
        }
    },
    {
        id: 'india-fd',
        name: 'FD Calculator India (2026) - Clean, Private & Accurate',
        description: 'Instantly calculate maturity for Fixed Deposits (FD). Secure, clean, and updated for FY 2026-27 rules.',
        category: 'india',
        icon: Landmark,
        component: FDCalculator,
        content: FDCalculatorContent,
        longDescription: "Secure your savings. Fixed Deposits (FDs) are a safe investment choice in India. This calculator helps you compute the maturity amount and interest earned, supporting monthly, quarterly, and cumulative payout options.",
        features: [
            "Quarterly/Monthly compounding",
            "Maturity value calculation",
            "Interest payout estimator",
            "Bank-standard formulas"
        ],
        faqs: [
            {
                question: "Is FD interest taxable?",
                answer: "Yes. Interest above ₹40k/year is subject to TDS."
            },
            {
                question: "What is the minimum tenure?",
                answer: "Usually 7 days for most banks."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            },
            {
                question: "Does it support senior citizens?",
                answer: "The calculator works for all rates. Seniors just get higher rates."
            }
        ],
        howTo: {
            name: "How to Calculate FD Returns",
            description: "Estimate your maturity amount.",
            steps: [
                { name: "Investment Amount", text: "Enter the principal amount you want to invest." },
                { name: "Interest Rate", text: "Enter the annual interest rate offered by the bank." },
                { name: "Tenure", text: "Select the duration in years or months." },
                { name: "Compounding", text: "Choose compounding frequency (Standard is Quarterly)." }
            ]
        },
    },
    {
        id: 'india-rd',
        name: 'RD Calculator India (2026) - Plan Savings (No Ads)',
        description: 'Calculate RD maturity with quarterly compounding. Fast, private, and updated for latest 2026 banking norms.',
        category: 'india',
        icon: TrendingUp,
        component: RDCalculator,
        content: RDCalculatorContent,
        longDescription: "Build wealth through small savings. Recurring Deposits (RD) let you save a fixed amount every month. This calculator accurately computes the maturity value based on the quarterly compounding logic used by most Indian banks.",
        features: [
            "Monthly savings goal",
            "Quarterly compounding logic",
            "Bank-grade accuracy",
            "Maturity planning"
        ],
        faqs: [
            {
                question: "Can I miss an installment?",
                answer: "Banks may charge a penalty for missed payments."
            },
            {
                question: "Is RD interest taxable?",
                answer: "Yes. TDS is applicable just like Fixed Deposits."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            }
        ],
        howTo: {
            name: "How to Calculate RD Maturity",
            description: "Plan your monthly savings.",
            steps: [
                { name: "Monthly Deposit", text: "Enter the amount you can save each month." },
                { name: "Interest Rate", text: "Enter the bank's RD interest rate." },
                { name: "Duration", text: "Select the tenure in months or years." },
                { name: "Result", text: "View the total maturity value and interest earned." }
            ]
        },
    },
    {
        id: 'india-ppf',
        name: 'PPF Calculator India (2026) - Secure Tax-Free Wealth',
        description: 'Plan 15-year PPF returns with the latest tax benefits. 100% private and wealth planning tool.',
        category: 'india',
        icon: Briefcase,
        component: PPFCalculator,
        content: PPFCalculatorContent,
        longDescription: "Maximize your tax savings. The Public Provident Fund (PPF) is a government-backed scheme offering attractive tax-free returns. Calculate your maturity corpus over the 15-year lock-in period.",
        features: [
            "15-year projection",
            "Tax-free returns (EEE)",
            "Annual investment planning",
            "Contribution planner"
        ],
        faqs: [
            {
                question: "Limit per year?",
                answer: "Max ₹1.5 Lakh per financial year."
            },
            {
                question: "Is interest taxable?",
                answer: "No, interest is fully tax-free."
            },
            {
                question: "Lock-in period?",
                answer: "15 years (extendable by 5 years)."
            }
        ],
        howTo: {
            name: "How to Plan PPF",
            description: "Estimate your retirement corpus.",
            steps: [
                { name: "Investment", text: "Enter annual deposit amount." },
                { name: "Duration", text: "Set tenure (Min 15 years)." },
                { name: "Calculate", text: "View total interest and maturity value." }
            ]
        },
    },
    {
        id: 'india-home-loan-eligibility',
        name: 'Home Loan Eligibility India (2026) - Private Limit Check',
        description: 'Check your maximum home loan eligibility instantly. 100% private — your income details stay on your device.',
        category: 'india',
        icon: Home,
        component: HomeLoanEligibilityCalculator,
        content: HomeLoanEligibilityCalculatorContent,
        longDescription: "How much home loan can you afford? Banks look at your income and existing obligations. This calculator estimates your maximum home eligibility based on standard FOIR (Fixed Obligation to Income Ratio) norms.",
        keywords: ['home eligibility calculator', 'home loan eligibility check', 'housing loan eligibility', 'india home loan calculator'],
        features: [
            "FOIR based calculation",
            "Income vs EMI analysis",
            "Max loan eligibility",
            "Bank standard norms"
        ],
        faqs: [
            {
                question: "What is FOIR?",
                answer: "Fixed Obligation to Income Ratio - % of salary used for EMIs."
            },
            {
                question: "Does tenure affect eligibility?",
                answer: "Yes, longer tenure increases eligibility."
            },
            {
                question: "Co-applicant benefit?",
                answer: "Adding a working spouse increases eligible amount."
            }
        ],
        howTo: {
            name: "Check Your Eligibility",
            description: "Know your loan limit.",
            steps: [
                { name: "Income", text: "Enter net monthly income." },
                { name: "Obligations", text: "Enter current EMI payments." },
                { name: "Details", text: "Set interest rate and tenure." },
                { name: "Result", text: "See maximum loan amount you may get." }
            ]
        },
    },
    {
        id: 'india-hra',
        name: 'HRA Calculator India (2026) - Secure Tax Exemption Tool',
        description: 'Calculate HRA tax exemption accurately for FY 2026-27. Fast, private, and 100% for all users.',
        category: 'india',
        icon: DollarSign,
        component: HRACalculator,
        content: HRACalculatorContent,
        longDescription: "Save tax on your rent. If you are a salaried employee receiving HRA, use this calculator to determine how much of it is tax-exempt based on your salary structure, rent paid, and city of residence.",
        features: [
            "HRA Exemption calculation",
            "Metro vs Non-Metro logic",
            "Taxable HRA determination",
            "Tax planning assistance"
        ],
        faqs: [
            {
                question: "Can I claim HRA if I live in my own house?",
                answer: "No. You must be paying rent to claim HRA."
            },
            {
                question: "Is landlord's PAN mandatory?",
                answer: "Yes, if annual rent exceeds ₹1 Lakh."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes. Completely free to use."
            },
            {
                question: "Does it cover New Tax Regime?",
                answer: "HRA exemption is only available in the Old Tax Regime."
            }
        ],
        howTo: {
            name: "How to Calculate HRA Exemption",
            description: "Maximize your tax savings.",
            steps: [
                { name: "Input Salary", text: "Enter your Basic Salary and DA." },
                { name: "Input HRA", text: "Enter the HRA amount received from employer." },
                { name: "Input Rent", text: "Enter the actual rent paid." },
                { name: "Select City", text: "Choose Metro or Non-Metro for the correct limit." }
            ]
        },
    },
    {
        id: 'compound-interest',
        name: 'Compound Interest Calculator - Private Wealth Visualizer',
        description: 'Visualize compounding power for any investment. 100% private and tool for long-term growth.',
        category: 'financial',
        icon: TrendingUp,
        component: CompoundInterestCalculator,
        content: CompoundInterestCalculatorContent,
        longDescription: "Compound interest is often called the '8th wonder of the world'. Unlike simple interest, where you only earn on your principal, compound interest allows you to earn interest on your interest. This snowball effect can turn small, regular investments into significant wealth over time. Our calculator helps you visualize this growth with customizable frequency settings (daily, monthly, yearly) and additional contribution options.",
        keywords: [
            'compound interest calculator',
            'compound interest formula',
            'daily compounding',
            'investment growth calculator',
            'interest on interest',
            'savings projector',
            'future value calculator'
        ],
        features: ["Frequency settings (Daily to Yearly)", "Monthly/Yearly Contributions", "Interactive Growth Chart", "Detailed Breakdown Table"],
        faqs: [
            {
                question: "What is the Rule of 72?",
                answer: "The Rule of 72 is a quick way to estimate how long it takes for an investment to double. Divide 72 by your annual interest rate to get the approximate years."
            },
            {
                question: "What is the difference between Simple and Compound interest?",
                answer: "Simple interest is calculated only on the principal amount. Compound interest includes the principal plus accumulated interest, leading to faster growth."
            },
            {
                question: "How does compounding frequency affect my returns?",
                answer: "The more frequently interest is compounded (e.g., daily vs. yearly), the more interest you earn. Daily compounding yields the highest returns."
            },
            {
                question: "What is the compound interest formula used?",
                answer: "We use the standard formula: A = P(1 + r/n)^(nt), adjusting for regular additional contributions."
            }
        ],
        howTo: {
            name: "How to Calculate Compound Interest",
            description: "Project your investment growth in 3 easy steps.",
            steps: [
                { name: "Initial Investment", text: "Enter your starting principal amount." },
                { name: "Interest Rate", text: "Input the expected annual interest rate." },
                { name: "Time & Frequency", text: "Set the investment duration and how often interest compounds (e.g., Monthly)." },
                { name: "Regular Contributions", text: "Optional: Add monthly or yearly deposits to accelerate growth." }
            ]
        }
    },
    {
        id: 'simple-interest',
        name: 'Simple Interest Calculator - Fast, & Private',
        description: 'Calculate simple interest instantly using standard formulas. Fast, accurate, and 100% for all users.',
        category: 'financial',
        icon: Percent,
        component: SimpleInterestCalculator,
        longDescription: "Back to basics. Simple interest is straightforward but essential for understanding loans and basic savings. Unlike compound interest, simple interest is calculated only on the initial principal amount. This tool helps you quickly determine the interest on loans or the return on non-compounding investments.",
        keywords: ['simple interest formula', 'interest rate calculator', 'SI calculator', 'calculate interest', 'loan interest'],
        features: ["Principal, Rate, Time inputs", "Total interest output", "Comparison with compound interest"],
        faqs: [
            {
                question: "What is the Simple Interest formula?",
                answer: "The formula is SI = (P × R × T) / 100, where P is Principal, R is Rate of Interest, and T is Time period."
            },
            {
                question: "How is Simple Interest different from Compound Interest?",
                answer: "Simple interest is calculated only on the principal amount, while compound interest is calculated on the principal plus accumulated interest."
            },
            {
                question: "Is this calculator free?",
                answer: "Yes, it is completely free to use."
            }
        ],
        howTo: {
            name: "How to Calculate Simple Interest",
            description: "Calculate your interest in 3 steps.",
            steps: [
                { name: "Principal", text: "Enter the loan or investment amount." },
                { name: "Rate", text: "Input the annual interest rate." },
                { name: "Time", text: "Enter the time duration in years." },
                { name: "Calculate", text: "See the total interest and final amount instantly." }
            ]
        },
    },
    {
        id: 'percentage-change',
        name: 'Percentage Change Calculator - Fast Growth Tracking',
        description: 'Determine percentage increase or decrease instantly. Fast, private, and 100% online tool.',
        category: 'math',
        icon: TrendingUp,
        component: PercentageIncreaseCalculator,
        content: PercentageChangeContent,
        longDescription: "This Percentage Change Calculator helps you measure how much a value has increased or decreased compared to its original amount. It clearly shows the percentage change, numerical difference, and overall growth or decline in one view.",
        features: [
            "Calculates Increase & Decrease",
            "Shows exact value difference",
            "Supports decimal values",
            "Instant growth tracking"
        ],
        faqs: [
            {
                question: "Can it calculate percentage decrease?",
                answer: "Yes. The calculator detects both increase and decrease automatically."
            },
            {
                question: "Does it support decimals?",
                answer: "Yes. Decimal values are supported for accurate results."
            },
            {
                question: "Is it free to use?",
                answer: "Yes. This calculator is completely free."
            }
        ],
        howTo: {
            name: "How to Use This Percentage Change Calculator",
            description: "Determine value changes quickly.",
            steps: [
                { name: "Enter Original", text: "Input the starting value." },
                { name: "Enter New", text: "Input the new value." },
                { name: "See Change", text: "Instantly view the percentage increase or decrease." }
            ]
        }
    },
    {
        id: 'discount',
        name: 'Discount Calculator - Secure Shopping Savings (No Ads)',
        description: 'Calculate final price after discounts and taxes. Fast, private, and 100% with no sign-ups.',
        category: 'math',
        icon: Percent,
        component: DiscountCalculator,
        content: DiscountCalculatorContent,
        longDescription: "This Discount Calculator helps you calculate the final payable price after applying discounts, taxes, quantities, and additional flat reductions. It is designed for shoppers who want to know exactly how much they save and what they actually pay before checkout.",
        features: [
            "Calculate final price & savings",
            "Support for Tax & Quantity",
            "Handle extra flat discounts",
            "Clear cost breakdown"
        ],
        faqs: [
            {
                question: "Can this calculator handle multiple items?",
                answer: "Yes. Quantity input allows accurate total price calculation."
            },
            {
                question: "Does it support tax and VAT?",
                answer: "Yes. Optional tax fields help calculate realistic final bills."
            },
            {
                question: "Can I apply a flat discount along with a percentage discount?",
                answer: "Yes. Both can be combined in the same calculation."
            },
            {
                question: "Is this calculator free to use?",
                answer: "Yes. There are no limits or restrictions."
            }
        ],
        howTo: {
            name: "How to Use the Discount Calculator",
            description: "Find the real price in seconds.",
            steps: [
                { name: "Original Price", text: "Enter the item's listing price." },
                { name: "Discount", text: "Add the discount percentage." },
                { name: "Details", text: "Select quantity and optional tax." },
                { name: "Result", text: "View final price and total savings." }
            ]
        }
    },


    {
        id: 'india-gst',
        name: 'GST Calculator India (2026) - Clean, Private & New Rates',
        description: 'Instantly calculate GST for goods and services in India, compare inclusive vs exclusive tax, and understand how GST replaced service tax on older invoices.',
        category: 'india',
        icon: Percent,
        component: IndiaGSTCalculator,
        content: IndiaGSTCalculatorContent,
        longDescription: "Use this India GST Calculator to add or remove GST from invoices, verify tax on services, and understand legacy service tax math for pre-GST bills. If you are searching for a service tax calculator, this page also explains how service tax was subsumed into GST from 1 July 2017 and how the last broad 15% service tax formula worked on older invoices.",
        keywords: [
            'gst calculator 2026', 'india gst new rates', '0% gst list',
            'luxury gst 40%', 'gst exemption calculator', 'gst inclusive exclusive',
            'gst slabs 2026', 'gst billing software free',
            'service tax calculator india', 'old service tax calculator',
            'service tax to gst', 'service tax before gst', 'service tax 15 percent calculator'
        ],
        features: [
            "New 2026 Tax Slabs (0%, 5%, 18%, 40%)",
            "Exempt Item Calculation (Zero Rated)",
            "Luxury & Sin Goods Tax (40%)",
            "Reverse GST Calculation",
            "Legacy Service Tax reference",
            "Instant Breakdown",
            "Mobile Friendly"
        ],
        formula: "\\text{GST Amount} = \\text{Original Cost} \\times \\left(\\frac{\\text{GST Rate}}{100}\\right)",
        faqs: [
            {
                question: "Is service tax still applicable in India?",
                answer: "No. Service tax was subsumed into GST from 1 July 2017, so current service invoices are generally taxed under GST instead of the old service tax rules."
            },
            {
                question: "How do I calculate GST manually?",
                answer: "Multiply the base price of your product by the GST rate (for example 18%), and then divide by 100 to find the tax amount."
            },
            {
                question: "How do I calculate old service tax on a pre-GST invoice?",
                answer: "For older invoices issued before 1 July 2017, the broad final service tax rate was 15%, so tax was typically calculated as Taxable Value × 15%."
            },
            {
                question: "What rate applies to most services under GST?",
                answer: "Many standard taxable services are commonly calculated at 18% GST, while the exact rate still depends on the underlying service classification."
            }
        ],
        educationalContent: [
            {
                title: "How GST is Calculated in India",
                content: "GST is calculated as a percentage of the transaction value. The formula is: GST Amount = (Original Cost × GST Rate) / 100. For 'Inclusive' prices, the formula is: GST Amount = Total Price - (Total Price / (1 + GST Rate/100))."
            },
            {
                title: "GST Tax Slabs 2025",
                content: "0% (Exempt items like milk, bread), 5% (Essentials, spices), 12% (Processed food, phones), 18% (Most services, electronics), 28% (Luxury cars, tobacco)."
            }
        ],

        howTo: {
            name: "How to Use the India GST Calculator",
            description: "Step-by-step guide to accurate tax calculation.",
            steps: [
                { name: "Enter Price", text: "Input the Net Price (for Exclusive) or Total MRP (for Inclusive)." },
                { name: "Select Tax Slab", text: "Choose the applicable GST rate (e.g., 18% for services)." },
                { name: "Choose Mode", text: "Toggle between 'Exclusive' (Add Tax) or 'Inclusive' (Remove Tax)." },
                { name: "View Breakdown", text: "Instantly see the Base Amount, Total Tax, and Final Invoice Value." }
            ]
        },
        popular: true,
        scenarios: [
            {
                id: 'hsn-mobile-phones',
                name: "GST Rate for Mobile Phones & Accessories (2026)",
                description: "Calculate 18% GST on smartphones and accessories. Updated with latest HSN codes and input tax credit rules for 2026.",
                keywords: ['gst on mobile phones', 'hsn code for smartphones', 'gst rate mobile accessories 2026', 'input tax credit mobile'],
                initialState: { taxRate: 18 }
            },
            {
                id: 'luxury-cars-gst',
                name: "GST on Luxury Cars & SUVs (2026 Tax Act)",
                description: "Calculate the consolidated 40% GST on luxury vehicles and SUVs. Includes breakdown of base price vs luxury tax.",
                keywords: ['gst on luxury cars', '40% gst suv', 'luxury car tax india 2026', 'car gst calculator'],
                initialState: { taxRate: 40 }
            },
            {
                id: 'service-tax-india',
                name: "Service Tax Calculator India (Legacy Pre-GST)",
                description: "Use this legacy service tax calculator for pre-GST invoices and learn how service tax was replaced by GST in India from 1 July 2017.",
                keywords: ['service tax calculator india', 'service tax 15 percent calculator', 'old service tax calculator', 'service tax before gst', 'pre gst invoice calculator'],
                features: ['Legacy 15% service tax math', 'Pre-GST invoice examples', 'Service tax history in India', 'GST replacement explainer'],
                initialState: { taxRate: 15, amount: 10000, rateLabel: 'Legacy', rateDescription: 'Service Tax' }
            }
        ]
    },
    {
        id: 'india-emi',
        name: 'EMI Calculator India (2026) - Private Loan Tool',
        description: 'Calculate EMIs for all loan types with a full schedule. 100% private and for accurate planning.',
        category: 'india',
        icon: Landmark,
        component: IndiaEMICalculator,
        content: IndiaEMICalculatorContent,
        longDescription: "Planning a loan? Our India EMI Calculator helps you calculate the exact Equated Monthly Installment (EMI) for Home Loans, Car Loans, Personal Loans, and Education Loans. It uses the standard Reducing Balance Method used by all major Indian banks (SBI, HDFC, ICICI, Axis, Bajaj Finserv). Get a detailed year-wise and month-wise amortization schedule to understand your principal repayment vs. interest payment journey.",
        keywords: [
            'emi calculator india', 'home loan emi calculator', 'car loan emi calculator',
            'personal loan emi calculator', 'loan calculator india', 'sbi home loan emi',
            'hdfc personal loan emi', 'icici car loan emi', 'education loan emi calculator',
            'reducing balance emi calculator', 'flat rate vs reducing balance', 'loan amortization chart',
            'monthly emi check', 'loan repayment schedule', 'bajaj finserv emi calculator',
            'housing loan calculator', 'bike loan emi calculator'
        ],
        features: [
            "Reducing Balance Method (Bank Standard)",
            "Visual Amortization Chart (Principal vs Interest)",
            "Yearly Repayment Schedule",
            "Home, Car, Personal, Education Loan Support",
            "Total Interest Payable Analysis"
        ],
        formula: "E = P \\times r \\times \\frac{(1 + r)^n}{(1 + r)^n - 1}",
        faqs: [
            {
                question: "How is an EMI calculated manually?",
                answer: "Using the formula E = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is the principal, r is the monthly rate of interest, and n is the tenure in months."
            },
            {
                question: "Do Indian banks use flat rate or reducing balance?",
                answer: "Major Indian banks like SBI and HDFC use the reducing balance method, where your interest payment reduces every month as principal shrinks."
            },
            {
                question: "Does paying an extra EMI reduce my loan tenure?",
                answer: "Yes, prepaying even one extra EMI per year heavily targets the principal, drastically reducing both the tenure and the total interest burden over time."
            }
        ],

        howTo: {
            name: "How to Calculate Loan EMI",
            description: "Estimate your monthly loan burden in seconds.",
            steps: [
                { name: "Loan Amount", text: "Enter the total amount you are borrowing." },
                { name: "Interest Rate", text: "Input the annual interest rate offered by the bank." },
                { name: "Tenure", text: "Select the repayment period in Years or Months." },
                { name: "Analyze", text: "View your Monthly EMI and Total Interest cost instantly." }
            ]
        },
        popular: true,
    },
    {
        id: 'sip',
        name: 'SIP Calculator India (2026) - Private Wealth Planner',
        description: 'Estimate mutual fund returns via SIP. 100% private and — your investment goals stay secure.',
        category: 'financial',
        icon: TrendingUp,
        component: SIPCalculator,
        content: SIPCalculatorContent,
        longDescription: "Wealth creation made simple. A Systematic Investment Plan (SIP) is one of the most disciplined ways to invest in Mutual Funds. Our SIP Calculator helps you visualize the power of compounding. By investing a small fixed amount monthly, you can build a massive corpus over 10, 15, or 20 years. Perfect for planning retirement, child's education, or buying a dream home.",
        keywords: [
            'sip calculator', 'mutual fund calculator', 'systematic investment plan',
            'sip return calculator', 'mutual fund returns', 'groww sip calculator',
            'zerodha sip calculator', 'etmoney sip calculator', 'monthly investment calculator',
            'sip growth chart', 'long term wealth creation', 'best sip plans',
            'compounding calculator india', 'sip interest rate', 'investment planner'
        ],
        features: [
            "Project Future Value of Monthly Investments",
            "Inflation-Adjusted Returns Estimation",
            "Visual Growth Chart (Invested vs Wealth Gained)",
            "Compare Different Return Rates (12%, 15%, etc.)",
            "Long-term Wealth Planning Tool"
        ],
        hideDefaultSections: true,
        faqs: [
            {
                question: "What is a good SIP return rate?",
                answer: "Equity mutual funds in India have historically delivered 12-15% annual returns over the long term (10+ years)."
            },
            {
                question: "Can SIP make me a crorepati?",
                answer: "Yes. Investing ₹15,000/month for 15 years at 15% return can create a corpus of over ₹1 Crore."
            },
            {
                question: "Is SIP better than Lumpsum?",
                answer: "SIP is better for volatile markets. Lumpsum is better when the market is low. SIP promotes discipline."
            },
            {
                question: "Can I increase my SIP amount?",
                answer: "Yes, this is called Step-up SIP. A 10% annual increase can double your final corpus."
            }
        ],
        howTo: {
            name: "How to Use SIP Calculator",
            description: "Plan your financial freedom.",
            steps: [
                { name: "Monthly Investment", text: "Enter the amount you can save and invest each month." },
                { name: "Expected Return", text: "Input a conservative annual return rate (e.g., 12%)." },
                { name: "Time Horizon", text: "Select for how many years you will continue investing." },
                { name: "See Magic", text: "View your total corpus and the pure profit earned through compounding." }
            ]
        },
        popular: true,
    },
    {
        id: 'india-salary',
        name: 'In-Hand Salary Calculator India (2026) - & Private',
        description: 'Convert CTC to in-hand monthly salary for FY 2026-27. Detailed, private, and 100% breakdown.',
        category: 'india',
        icon: Briefcase,
        component: IndiaSalaryCalculator,
        content: IndiaSalaryCalculatorContent,
        longDescription: "Confused by your offer letter? Use our CTC to In-Hand Salary Calculator to understand your real monthly take-home pay. We break down your Cost to Company (CTC) into Basic Pay, HRA, Special Allowance, PF (Provident Fund) deduction, Professional Tax (PT), and estimated TDS. Updated for the latest 2025 tax regimes.",
        keywords: [
            'salary calculator india', 'ctc to inhand calculator', 'take home salary calculator',
            'salary breakdown', 'monthly salary calculator', 'pf calculator',
            'professional tax calculator', 'salary slip generator', 'ctc calculator',
            'in hand salary from ctc', 'new tax regime salary', '7th pay commission calculator'
        ],
        features: [
            "CTC to Monthly In-Hand conversion",
            "PF (Employee & Employer) Calculation",
            "Professional Tax (State-wise consideration)",
            "HRA & Special Allowance Breakdown",
            "Tax Regime Impact Analysis"
        ],
        hideDefaultSections: true,
        faqs: [
            {
                question: "What is CTC?",
                answer: "CTC (Cost to Company) is the total amount an employer spends on an employee, including direct salary, benefits, and various contributions like PF and Gratuity."
            },
            {
                question: "Why is In-Hand less than CTC?",
                answer: "CTC includes non-cash components (Gratuity, Insurance) and deductions (PF, PT, TDS) which are subtracted to get the bank credit amount."
            },
            {
                question: "Is PF mandatory?",
                answer: "Yes, for Basic Salary up to ₹15,000/month. Above that, it is optional but recommended for tax saving."
            }
        ],
        howTo: {
            name: "Check Your Take-Home Salary",
            description: "Decode your payslip.",
            steps: [
                { name: "Enter CTC", text: "Input your annual Cost to Company." },
                { name: "Variables", text: "Add any performance bonus or variable pay." },
                { name: "Result", text: "See your estimated monthly bank credit instantly." }
            ]
        },
        popular: true,
    },
    {
        id: 'india-tax',
        name: 'Income Tax Calculator India (2026) - Private & Secure Tool',
        description: 'Compare tax regimes and calculate liability under the 2026 Tax Act. 100% private and secure for all users.',
        category: 'india',
        icon: DollarSign,
        component: IndiaTaxCalculator,
        content: IndiaTaxCalculatorContent,
        longDescription: "The most comprehensive Income Tax Calculator for Indian salaried and self-employed individuals. Updated with the latest Union Budget 2025 announcements. Compare your tax liability under the Old Tax Regime (with 80C, 80D deductions) vs the New Tax Regime (lower rates, fewer deductions). Find out which regime saves you more money instantly.",
        keywords: [
            'income tax calculator', 'tax calculator india', 'old vs new tax regime',
            'income tax slabs 2025', 'calculate income tax', 'tax planning india',
            '80c 80d calculator', 'tax saving calculator', 'tds calculator',
            'budget 2025 tax slabs', 'zero tax salary', 'income tax return'
        ],
        features: [
            "New vs Old Regime Comparison",
            "Standard Deduction Support",
            "Surcharge & Health Cess Calculation",
            "Rebate u/s 87A logic",
            "Scenario Analysis for best savings"
        ],
        faqs: [
            {
                question: "Which tax regime is better for me in 2026?",
                answer: "The New Regime is better for incomes up to ₹12-15 Lakhs if you have few deductions. The Old Regime is better if you claim significantly high deductions like HRA, 80C, 80D, and Home Loan interest."
            },
            {
                question: "Is income tax zero up to ₹12 lakh?",
                answer: "Yes, under the New Tax Regime, if your taxable income is up to ₹12 Lakh, you pay zero tax due to the enhanced Section 87A rebate."
            },
            {
                question: "Can I switch regimes every year?",
                answer: "Salaried employees can choose the regime every year when filing returns. However, business owners can switch only once in their lifetime."
            },
            {
                question: "Does the calculation include Cess?",
                answer: "Yes, our calculator automatically includes the 4% Health & Education Cess on top of your tax and surcharge."
            }
        ],
        howTo: {
            name: "Calculate Your Income Tax",
            description: "Plan your taxes in minutes.",
            steps: [
                { name: "Gross Income", text: "Enter income from Salary, Business, House Property, etc." },
                { name: "Deductions", text: "Enter 80C, 80D, HRA amounts (for Old Regime)." },
                { name: "Compare", text: "View tax liability side-by-side for both regimes." },
                { name: "Save", text: "Choose the regime with lower tax outflow." }
            ]
        },
        popular: true,
        scenarios: [
            {
                id: '10-lakh-salary-tax',
                name: "Income Tax on 10 Lakh Salary (FY 2025-26)",
                description: "Detailed tax breakdown for ₹10,00,000 annual income. Compare Old vs New regime savings for 10 LPA package.",
                keywords: ['tax on 10 lakh salary', 'income tax for 10 lpa', '10 lakh salary tax savings', 'new regime tax 10 lakh'],
                initialState: { income: 1000000 }
            },
            {
                id: '15-lakh-salary-tax',
                name: "Income Tax on 15 Lakh Salary (2026 Tax Act)",
                description: "Find out your take-home pay on a ₹15,00,000 CTC. Optimized for the latest rebate limits and standard deductions.",
                keywords: ['tax on 15 lakh salary', '15 lpa tax breakdown', 'take home on 15 lakh', 'income tax 1500000'],
                initialState: { income: 1500000 }
            }
        ]
    },

];

export const categories: { id: CalculatorCategory; name: string; icon: any }[] = [
    { id: 'math', name: 'Mathematics', icon: Calculator },
    { id: 'financial', name: 'Finance & Investment', icon: DollarSign },
    { id: 'health', name: 'Health & Fitness', icon: Activity },
    { id: 'india', name: 'India Specific', icon: Landmark },
    { id: 'other', name: 'Other Tools', icon: MoreHorizontal },
];
