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
        name: 'Basic Calculator - Free Online Calculator for Everyday Math',
        description: 'Use a simple online calculator for quick addition, subtraction, multiplication, and division with instant results on any device.',
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
        name: 'Scientific Calculator - Free Online Calculator for Math and Trig',
        description: 'Solve trigonometry, logarithms, exponents, and advanced equations with a scientific calculator built for fast, accurate results.',
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
        name: 'Triangle Calculator - Find Sides, Angles, Area and Perimeter',
        description: 'Calculate triangle sides, angles, area, and perimeter for right, isosceles, equilateral, and scalene triangles in one place.',
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
        name: 'Fraction Calculator - Add, Subtract, Multiply and Divide Fractions',
        description: 'Work out fraction problems online, simplify answers, and calculate mixed numbers quickly with step-friendly fraction tools.',
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
        name: 'Percentage Calculator — What Is X% of Y? Increase & Decrease',
        description: 'Solve any percentage problem instantly: X% of Y, percentage increase/decrease, what % is X of Y, and percentage difference. With step-by-step formula shown.',
        category: 'math',
        icon: Percent,
        component: PercentageCalculator,
        content: PercentageContent,
        popular: true,
        formula: "P = \\frac{V_1}{V_2} \\times 100",
        longDescription: "This free Percentage Calculator solves all common percentage problems instantly. Find what is X% of a number, calculate percentage increase or decrease between two values, find what percentage one number is of another, and compute percentage difference. Whether you need to calculate exam marks percentage, shopping discounts, salary hikes, tax rates, or tip amounts, this tool gives you accurate results with the formula shown for every calculation.",
        features: [
            "What is X% of Y? (e.g., What is 15% of 200?)",
            "Percentage increase and decrease calculation",
            "What percentage is X of Y?",
            "Percentage difference between two values",
            "Visual formula explanation for every calculation",
            "Works for marks, discounts, tips, tax, and finance"
        ],
        hideDefaultSections: true,
        keywords: [
            'percentage calculator', 'percentage calculator online', 'free percentage calculator',
            'how to calculate percentage', 'percent calculator',
            'what is percent of', 'percentage of a number',
            'percentage increase calculator', 'percentage decrease calculator',
            'percentage change calculator', 'percentage difference calculator',
            'marks percentage calculator', 'exam percentage calculator',
            'discount percentage calculator', 'salary hike percentage',
            'what percent is X of Y', 'percentage formula',
            'how to find percentage', 'calculate percentage online',
            'percentage increase formula', 'percentage decrease formula',
            'how to calculate percentage of marks'
        ],
        faqs: [
            {
                question: "How do I calculate percentage of a number?",
                answer: "Multiply the number by the percentage and divide by 100. For example, 25% of 200 = 200 × 25 ÷ 100 = 50. This calculator does this instantly — just enter the percentage and the number."
            },
            {
                question: "How do I calculate percentage increase?",
                answer: "Percentage increase = ((New Value − Old Value) ÷ Old Value) × 100. For example, if a price increased from ₹500 to ₹600: ((600 − 500) ÷ 500) × 100 = 20% increase."
            },
            {
                question: "How do I calculate percentage decrease?",
                answer: "Percentage decrease = ((Old Value − New Value) ÷ Old Value) × 100. For example, if a price dropped from ₹800 to ₹640: ((800 − 640) ÷ 800) × 100 = 20% decrease."
            },
            {
                question: "What percentage is 45 out of 60?",
                answer: "To find what percentage 45 is of 60: (45 ÷ 60) × 100 = 75%. The general formula is: (Part ÷ Whole) × 100 = Percentage."
            },
            {
                question: "How do I calculate percentage of marks?",
                answer: "Divide the marks obtained by the total marks and multiply by 100. For example, if you scored 420 out of 500: (420 ÷ 500) × 100 = 84%. This works for any exam or test score."
            },
            {
                question: "How do I find the original number from a percentage?",
                answer: "If you know X% of a number equals Y, then the original number = Y × 100 ÷ X. For example, if 20% of a number is 50, the original number = 50 × 100 ÷ 20 = 250."
            },
            {
                question: "What is the difference between percentage and percentile?",
                answer: "Percentage is a measure of a part out of 100 (e.g., 85% marks). Percentile indicates the rank relative to others (e.g., 90th percentile means you scored better than 90% of test-takers). They measure different things."
            },
            {
                question: "How do I calculate a percentage in reverse?",
                answer: "To find the original price before a discount: Original = Sale Price ÷ (1 − Discount%). For example, if an item costs ₹750 after a 25% discount, original = 750 ÷ 0.75 = ₹1,000."
            },
            {
                question: "Can this calculator handle decimals?",
                answer: "Yes. You can enter decimal percentages (e.g., 7.5%) and decimal values for precise results. The calculator handles all standard mathematical operations with full decimal precision."
            },
            {
                question: "Is this percentage calculator free?",
                answer: "Yes. This calculator is completely free with no limits, no sign-up required, and works on all devices including mobile phones, tablets, and desktops."
            }
        ],
        howTo: {
            name: "How to Calculate Percentages",
            description: "Solve any percentage problem in 3 steps.",
            steps: [
                { name: "Choose Calculation Type", text: "Select the type of percentage problem you need to solve (e.g., X% of Y, percentage increase, etc.)." },
                { name: "Enter Values", text: "Input the numbers into the provided fields." },
                { name: "View Result", text: "Instantly see the answer with the formula used for the calculation." }
            ]
        }
    },
    {
        id: 'mortgage',
        name: 'Mortgage Calculator - Estimate Monthly Home Loan Payments',
        description: 'Estimate mortgage payments, interest, taxes, insurance, and amortization to compare home loan costs before you buy.',
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
        name: 'Loan Calculator - Calculate Monthly Payment, Interest and Total Cost',
        description: 'See monthly loan payments, total interest, and total repayment for personal, student, or other loans with a quick online calculator.',
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
        name: 'Auto Loan Calculator - Estimate Car Payment, Interest and Taxes',
        description: 'Calculate your monthly car payment, total interest, sales tax, and trade-in impact before financing a new or used vehicle.',
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
        name: 'Investment Calculator - Estimate Future Value and Investment Growth',
        description: 'Project investment growth with contributions, return rate, and compounding to see future value and long-term wealth potential.',
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
        name: 'Retirement Calculator - Estimate How Much You Need to Retire',
        description: 'Plan retirement savings, future income needs, and monthly contributions with a calculator built for long-term retirement goals.',
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
        name: 'Salary Calculator — Convert Annual, Monthly, Weekly \u0026 Hourly Pay',
        description: 'Instantly convert salary between annual, monthly, biweekly, weekly, daily, and hourly. See how much $25/hr is per year or ₹50,000/month is hourly.',
        category: 'financial',
        icon: Briefcase,
        component: SalaryCalculator,
        content: SalaryCalculatorContent,
        longDescription: "How much is that hourly rate per year? This Salary Calculator instantly converts your income across different timeframes—hourly, daily, weekly, biweekly, monthly, and annually—giving you a complete picture of your earnings to compare job offers, plan budgets, and negotiate raises.",
        features: [
            "Full timeframe conversion",
            "Work hours customization",
            "Simple interface",
            "Gross income planning"
        ],
        keywords: [
            'salary calculator', 'hourly to annual salary', 'annual salary calculator',
            'salary converter', 'hourly to yearly calculator', 'monthly to yearly salary',
            'biweekly pay calculator', 'weekly to annual salary', 'wage calculator',
            'how much is 25 an hour annually', 'salary to hourly converter',
            'paycheck calculator', 'pay rate calculator', 'income calculator'
        ],
        formula: "\\text{Annual Salary} = \\text{Hourly Rate} \\times \\text{Hours per week} \\times 52",
        faqs: [
            {
                question: "How do I calculate annual salary from an hourly wage?",
                answer: "Multiply your hourly wage by the number of hours you work per week, then multiply by 52 (weeks in a year). For example, $25/hour × 40 hours/week × 52 weeks = $52,000 per year. This calculator handles this conversion instantly."
            },
            {
                question: "How much is $25 an hour per year?",
                answer: "At $25 per hour working 40 hours per week for 52 weeks, your annual salary would be $52,000 before taxes. At 37.5 hours per week, it would be $48,750."
            },
            {
                question: "What is the difference between gross and net salary?",
                answer: "Gross salary is your total earnings before any deductions. Net salary (take-home pay) is what you receive after taxes, insurance premiums, retirement contributions (like 401k or PF), and other deductions are subtracted. This calculator shows gross conversions only."
            },
            {
                question: "What is a bi-weekly pay cycle?",
                answer: "Bi-weekly pay means receiving a paycheck every two weeks, resulting in 26 paychecks per year (not 24). This is different from semi-monthly pay, which is exactly twice per month (24 paychecks). Bi-weekly is the most common pay frequency in the US."
            },
            {
                question: "How do I convert monthly salary to hourly rate?",
                answer: "Divide your monthly salary by the average working hours per month. For a standard 40-hour week: Monthly Salary ÷ 173.33 hours = Hourly Rate. For example, ₹50,000/month ÷ 173.33 = approximately ₹288.46 per hour."
            },
            {
                question: "Does this calculator include overtime pay?",
                answer: "This calculator converts salary at your standard rate. For overtime, the standard US rate is 1.5× your regular hourly rate for hours worked beyond 40 per week. To estimate total pay with overtime, calculate regular and overtime hours separately."
            },
            {
                question: "What is the difference between salary and wage?",
                answer: "A salary is a fixed annual amount paid regardless of hours worked (common for exempt/salaried employees). A wage is paid per hour worked (common for non-exempt/hourly employees). Salaried employees typically don't receive overtime pay, while hourly workers do."
            },
            {
                question: "How many working days are in a year?",
                answer: "A standard year has 260 working days (52 weeks × 5 days). After subtracting typical US holidays (10-11 days) and average vacation (10-15 days), the actual number is usually 234 to 240 days. This calculator uses your specified hours per week × 52 weeks."
            },
            {
                question: "How do I use this to compare two job offers?",
                answer: "Enter each offer's salary in its stated frequency (one might be annual, another hourly). The calculator converts both to the same timeframes so you can make a direct apples-to-apples comparison. Remember to also consider benefits, bonuses, and cost of living."
            },
            {
                question: "Can I use this for freelance rate calculation?",
                answer: "Yes. If you know your desired annual income, enter it and the calculator will show the equivalent hourly rate. For freelancers, it's common to add 25-30% on top of an equivalent employee hourly rate to cover self-employment taxes, benefits, and unbillable time."
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
        name: 'BMI Calculator — Check Your Body Mass Index (WHO Standard)',
        description: 'Enter height and weight → instantly see your BMI score, WHO weight category, and healthy weight range. Supports metric & imperial. Works for men, women & Indian/Asian BMI ranges.',
        category: 'health',
        icon: Activity,
        component: BMICalculator,
        content: BMICalculatorContent,
        longDescription: "This free BMI Calculator instantly calculates your Body Mass Index from your height and weight. BMI is a widely used screening tool to categorize your weight as Underweight, Normal, Overweight, or Obese based on WHO (World Health Organization) standards. The formula is BMI = Weight (kg) ÷ Height (m)². This tool supports both Metric (kg/cm) and Imperial (lbs/inches) units and shows your healthy weight range based on your height. While BMI does not directly measure body fat, it is a useful first-step indicator for assessing weight-related health risks.",
        keywords: [
            'bmi calculator', 'bmi calculator online', 'free bmi calculator',
            'body mass index calculator', 'calculate bmi',
            'bmi calculator for men', 'bmi calculator for women',
            'bmi calculator with age', 'bmi chart', 'bmi range',
            'what is my bmi', 'check bmi online', 'bmi checker',
            'healthy bmi range', 'normal bmi for adults',
            'bmi calculator india', 'bmi calculator metric',
            'bmi calculator kg and cm', 'bmi calculator lbs',
            'overweight bmi', 'obese bmi', 'underweight bmi',
            'ideal bmi for men', 'ideal bmi for women',
            'bmi formula', 'how to calculate bmi'
        ],
        hideDefaultSections: true,
        features: [
            "Instant BMI calculation from height and weight",
            "WHO standard weight categories (Underweight, Normal, Overweight, Obese)",
            "Metric (kg/cm) and Imperial (lbs/in) unit support",
            "Healthy weight range based on your height",
            "Color-coded results for easy interpretation",
            "Works for men and women"
        ],
        formula: "\\text{BMI} = \\frac{\\text{Weight in kg}}{(\\text{Height in meters})^2}",
        faqs: [
            {
                question: "How do I calculate my BMI?",
                answer: "Divide your weight in kilograms by your height in meters squared. For example, if you weigh 70 kg and are 1.75 m tall: BMI = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = 22.9. This calculator does this instantly — just enter your height and weight."
            },
            {
                question: "What is a healthy BMI range?",
                answer: "According to the WHO, a healthy (normal) BMI is between 18.5 and 24.9. Below 18.5 is classified as underweight, 25.0 to 29.9 is overweight, and 30.0 or above is classified as obese. These ranges apply to adults aged 20 and older."
            },
            {
                question: "Is BMI the same for men and women?",
                answer: "The BMI formula is the same for both men and women. However, women naturally carry more body fat than men at the same BMI. For this reason, a BMI of 25 may mean different body fat levels for men vs women. BMI is a screening tool, not a body fat measurement."
            },
            {
                question: "Is BMI accurate for athletes and muscular people?",
                answer: "BMI can overestimate body fat in athletes and muscular individuals because it does not distinguish between muscle mass and fat mass. A bodybuilder might have a BMI of 30 (obese range) but very low body fat. For such cases, body fat percentage or waist-to-hip ratio are better indicators."
            },
            {
                question: "What is a good BMI for Indians and Asians?",
                answer: "The WHO suggests that Asians face health risks at lower BMI levels. For Indian and Asian populations, a BMI of 23 or above is considered overweight (vs 25 for Western populations), and 27.5+ is considered obese. This is because Asians tend to carry more visceral fat at lower BMI values."
            },
            {
                question: "Does BMI apply to children and teenagers?",
                answer: "For children and teens (ages 2-19), BMI is calculated the same way but is interpreted using age-specific and sex-specific percentile charts. A child's BMI is compared to other children of the same age and sex. This adult BMI calculator is designed for people aged 20 and older."
            },
            {
                question: "What are the health risks of a high BMI?",
                answer: "A high BMI (25+) is associated with increased risk of heart disease, type 2 diabetes, high blood pressure, sleep apnea, certain cancers, and joint problems. However, BMI alone does not diagnose any condition — consult a healthcare provider for a complete assessment."
            },
            {
                question: "Can BMI change over time?",
                answer: "Yes. BMI changes as your weight changes. Regular exercise, dietary changes, aging, and medical conditions can all affect your BMI. It is recommended to check your BMI periodically as part of routine health monitoring."
            },
            {
                question: "What is the difference between BMI and body fat percentage?",
                answer: "BMI is a ratio of weight to height and does not directly measure body fat. Body fat percentage measures the actual proportion of fat in your body. Two people with the same BMI can have very different body fat levels depending on muscle mass. BMI is a quick screening tool; body fat percentage is a more detailed measurement."
            },
            {
                question: "Is this BMI calculator free?",
                answer: "Yes. This BMI calculator is completely free, requires no sign-up, and works on all devices. All calculations are performed locally in your browser — no data is stored or sent to any server."
            }
        ],
        howTo: {
            name: "How to Calculate Your BMI",
            description: "Check your Body Mass Index in 3 simple steps.",
            steps: [
                { name: "Choose Units", text: "Select Metric (kg and cm) or Imperial (pounds and inches) based on your preference." },
                { name: "Enter Height and Weight", text: "Input your current weight and height accurately for the most reliable result." },
                { name: "View Your BMI", text: "Instantly see your BMI score, weight category (Underweight, Normal, Overweight, Obese), and healthy weight range." }
            ]
        },
        popular: true,
    },
    {
        id: 'calorie',
        name: 'Calorie Calculator - Estimate Daily Calories and TDEE',
        description: 'Find your daily calorie needs for maintenance, weight loss, or muscle gain based on activity level, age, height, and weight.',
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
        name: 'Body Fat Calculator - Estimate Body Fat Percentage Online',
        description: 'Estimate body fat percentage using proven body measurement formulas and get a quick read on body composition goals.',
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
        name: 'BMR Calculator - Estimate Basal Metabolic Rate Online',
        description: 'Calculate basal metabolic rate to estimate how many calories your body needs at rest before activity or exercise.',
        category: 'health',
        icon: Flame,
        component: BMRCalculator,
        longDescription: "Your Basal Metabolic Rate (BMR) is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions like breathing, circulation, and cell production. Knowing this number is the first step in creating a weight loss or muscle gain plan.",
        features: [
            "Metric and imperial support",
            "Uses Mifflin-St Jeor Equation",
            "Maintenance calorie estimate",
            "Accessible results tables"
        ],
        content: BMRCalculatorContent,
        formula: "\\text{BMR}_{male} = 10w + 6.25h - 5a + 5\\\\ \\text{BMR}_{female} = 10w + 6.25h - 5a - 161",
        educationalContent: [
            {
                title: "BMR vs. RMR",
                content: "BMR (Basal Metabolic Rate) and RMR (Resting Metabolic Rate) are often used interchangeably, but BMR is measured under stricter conditions. For most casual users, the difference is negligible."
            }
        ],
        howTo: {
            name: "How to Calculate BMR",
            description: "Estimate resting calorie needs in 4 steps.",
            steps: [
                { name: "Choose Unit System", text: "Switch between metric or imperial inputs." },
                { name: "Enter Body Data", text: "Provide sex, age, height, and weight." },
                { name: "Select Activity", text: "Choose the activity multiplier that best matches your week." },
                { name: "Review Results", text: "See your BMR and maintenance calories instantly." }
            ]
        },
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
        name: 'Ideal Weight Calculator - Find a Healthy Weight Range',
        description: 'Estimate a healthy weight range using popular medical formulas and compare results based on your height and sex.',
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
        name: 'Pregnancy Calculator - Estimate Due Date and Pregnancy Timeline',
        description: 'Calculate your due date, weeks of pregnancy, and trimester timeline from your last period or conception date.',
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
        name: 'Age Calculator - Find Your Exact Age from Date of Birth',
        description: 'Free age calculator to find your exact age in years, months, and days from any date of birth. Includes next birthday countdown.',
        category: 'other',
        icon: Calendar,
        component: AgeCalculator,
        content: AgeCalculatorContent,
        longDescription: "This free Age Calculator tells you your exact age in years, months, weeks, days, hours, and seconds from any date of birth. Enter your birth date and an optional target date (defaults to today) to instantly see your chronological age broken down into multiple time units. It also shows the day of the week you were born, a countdown to your next birthday, and the total number of days you have lived. Perfect for form submissions, official age verification, birthday planning, or simply knowing your exact age.",
        keywords: [
            'age calculator', 'age calculator online', 'free age calculator',
            'age calculator by date of birth', 'date of birth calculator',
            'how old am i', 'what is my age', 'exact age calculator',
            'age in days calculator', 'age in months calculator',
            'chronological age calculator', 'birthday calculator',
            'age between two dates', 'age difference calculator',
            'next birthday calculator', 'how many days old am i',
            'born day calculator', 'age calculator in years months days',
            'dob to age calculator', 'calculate age from birth date'
        ],
        features: [
            "Exact age in years, months, and days",
            "Age in weeks, hours, minutes, and seconds",
            "Next birthday countdown",
            "Day of the week you were born",
            "Age between any two dates",
            "Leap year accurate calculation"
        ],
        faqs: [
            {
                question: "How do I calculate my exact age?",
                answer: "Enter your date of birth in this calculator to instantly see your exact age in years, months, and days. The calculator accounts for varying month lengths and leap years to give you a precise result down to the day."
            },
            {
                question: "How old am I if I was born in 2000?",
                answer: "If you were born in 2000, you are 25 or 26 years old in 2026, depending on whether your birthday has passed this year. Enter your exact date of birth to see your precise age in years, months, and days."
            },
            {
                question: "How many days old am I?",
                answer: "Enter your date of birth and this calculator will show your age in total days. For reference, a 25-year-old person has lived approximately 9,125 days (including leap years)."
            },
            {
                question: "How do I calculate age between two dates?",
                answer: "Enter the start date (e.g., date of birth) and the end date (e.g., a specific target date). The calculator shows the exact difference in years, months, and days between the two dates."
            },
            {
                question: "Does this calculator account for leap years?",
                answer: "Yes. The calculator correctly handles leap years (years divisible by 4, except centuries not divisible by 400). February 29th birthdays are calculated accurately."
            },
            {
                question: "What is chronological age?",
                answer: "Chronological age is the exact amount of time that has passed from your date of birth to the present date (or any target date). It is the standard age measurement used for official documents, medical records, and legal purposes."
            },
            {
                question: "How do I find what day of the week I was born?",
                answer: "Enter your date of birth in this calculator and it will show the day of the week you were born (e.g., Monday, Tuesday). This is calculated using the standard calendar algorithm."
            },
            {
                question: "When is my next birthday?",
                answer: "This calculator includes a countdown showing how many days remain until your next birthday. It automatically adjusts for the current year and shows the upcoming date."
            },
            {
                question: "Can I use this for age verification?",
                answer: "Yes. This calculator gives you the exact chronological age which can be used for form submissions, document applications, and age verification purposes. However, always use official documents for legal age proof."
            },
            {
                question: "Is this age calculator free?",
                answer: "Yes. This calculator is completely free, requires no sign-up, and works on all devices. All calculations are performed locally in your browser."
            }
        ],
        howTo: {
            name: "How to Calculate Your Exact Age",
            description: "Find your age in years, months, and days in 3 steps.",
            steps: [
                { name: "Enter Date of Birth", text: "Select or type your birth date using the date picker." },
                { name: "Set Target Date", text: "Leave as today's date for current age, or select a specific date to calculate age at that point." },
                { name: "View Results", text: "Instantly see your exact age in years, months, days, weeks, hours, and seconds with next birthday countdown." }
            ]
        },
    },
    {
        id: 'gpa',
        name: 'GPA Calculator — CGPA & SGPA on 4.0 and 10-Point Scale',
        description: 'Enter your course credits and grades to instantly calculate GPA, SGPA, or cumulative CGPA. Supports the US 4.0 scale and the Indian 10-point grading system.',
        category: 'other',
        icon: GraduationCap,
        component: GPACalculator,
        content: GPACalculatorContent,
        longDescription: "This free GPA Calculator helps students calculate semester GPA, SGPA (Semester Grade Point Average), and cumulative CGPA (Cumulative Grade Point Average) using course credits and grade points. It supports both the 4.0 scale (used in the US and many international universities) and the 10-point scale (used by most Indian universities). Simply add your courses, enter credits and grades, and get your GPA instantly. Perfect for tracking academic performance, checking scholarship eligibility, or planning your target CGPA.",
        features: [
            "Semester GPA and SGPA calculation",
            "Cumulative GPA and CGPA planning",
            "4.0 scale (A, B, C, D, F) and 10-point scale support",
            "Credit-weighted grade point calculation",
            "Add unlimited courses per semester",
            "Mobile-friendly course entry"
        ],
        keywords: [
            'gpa calculator', 'gpa calculator online', 'free gpa calculator',
            'sgpa calculator', 'cgpa calculator', 'cgpa to gpa',
            'semester gpa calculator', 'college gpa calculator',
            'gpa calculator india', 'gpa calculator 4.0 scale',
            'how to calculate gpa', 'how to calculate cgpa',
            'sgpa to cgpa converter', 'gpa to percentage',
            'credit based gpa calculator', 'university gpa calculator',
            'cumulative gpa calculator', 'grade point average calculator',
            'sgpa calculator online', 'gpa calculator with credits',
            'high school gpa calculator', 'weighted gpa calculator'
        ],
        faqs: [
            {
                question: "How do I calculate my GPA?",
                answer: "Multiply each course's grade point by its credit hours to get quality points. Add all quality points, then divide by total credit hours. For example, if you got an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course: GPA = (4.0×3 + 3.0×4) ÷ (3+4) = 24÷7 = 3.43."
            },
            {
                question: "What is the difference between SGPA and CGPA?",
                answer: "SGPA (Semester GPA) is your grade point average for a single semester. CGPA (Cumulative GPA) is your overall GPA across all semesters combined. CGPA gives a complete picture of your academic performance throughout your degree."
            },
            {
                question: "How do I convert CGPA to percentage?",
                answer: "For many Indian universities (like those following AICTE guidelines), the formula is: Percentage = CGPA × 9.5. For example, a CGPA of 8.5 = 80.75%. However, this formula varies by university, so check your institution's official conversion rule."
            },
            {
                question: "What is a good GPA on a 4.0 scale?",
                answer: "On a 4.0 scale, 3.5 to 4.0 is considered excellent (Dean's List level), 3.0 to 3.49 is good, 2.5 to 2.99 is average, and below 2.0 may trigger academic probation. For graduate school applications, a GPA of 3.0+ is typically the minimum requirement."
            },
            {
                question: "How do credits affect my GPA?",
                answer: "Higher credit courses carry more weight in GPA calculation. For example, getting an A in a 4-credit course boosts your GPA more than an A in a 1-credit course. This is called a credit-weighted (or weighted) GPA system."
            },
            {
                question: "Can I convert my 10-point CGPA to a 4.0 GPA?",
                answer: "There is no universal conversion formula. A rough approximation is: 4.0 GPA = (10-point CGPA − 0.5) × 0.4. For example, a CGPA of 8.0 ≈ 3.0 on a 4.0 scale. However, different universities may have their own conversion tables."
            },
            {
                question: "Does every Indian university use the same grading system?",
                answer: "No. Some Indian universities use a 10-point scale (e.g., IITs, NITs), while others use percentage-based or letter grade systems. The grade point assignments and conversion formulas can vary significantly between institutions."
            },
            {
                question: "What is a weighted vs unweighted GPA?",
                answer: "An unweighted GPA uses the standard 4.0 scale for all courses. A weighted GPA gives extra points for honors, AP, or IB courses (e.g., on a 5.0 scale). Most US high schools report both. This calculator uses the standard unweighted method."
            },
            {
                question: "How can I improve my GPA?",
                answer: "Focus on high-credit courses since they have the biggest impact on your GPA. Retake courses where you scored poorly (if your university allows grade replacement). Prioritize subjects early in the semester when GPA recovery is still possible."
            },
            {
                question: "Is this GPA calculator free?",
                answer: "Yes. This calculator is completely free, works on all devices, and requires no sign-up. Your data stays in your browser — nothing is stored on any server."
            }
        ],
        howTo: {
            name: "How to Calculate Your GPA",
            description: "Compute your semester GPA or cumulative CGPA in 4 steps.",
            steps: [
                { name: "Add Courses", text: "Enter your course names and credit hours for each subject." },
                { name: "Choose Scale", text: "Select the 4.0 letter grade scale or 10-point grade point scale based on your university." },
                { name: "Enter Grades", text: "Select the grade or grade point you received in each course." },
                { name: "View GPA", text: "Instantly see your calculated GPA with the total credits and quality points breakdown." }
            ]
        },
    },
    {
        id: 'password',
        name: 'Password Generator - Create Strong Random Passwords Online',
        description: 'Generate strong random passwords with customizable length and character rules to improve account security in seconds.',
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
        id: 'unit-converter',
        name: 'Unit Converter - Convert Length, Weight, Temperature Online',
        description: 'Free unit converter for length, weight, temperature, volume, speed, and area. Convert metric to imperial and back instantly.',
        category: 'other',
        icon: ArrowLeftRight,
        component: UnitConverter,
        content: UnitConverterContent,
        longDescription: "This free Unit Converter lets you instantly convert between metric and imperial units for length, weight, temperature, volume, speed, and area. Whether you need to convert kilometers to miles, kilograms to pounds, Celsius to Fahrenheit, or liters to gallons, this tool gives you accurate results with no formulas needed. It is designed for students, travelers, professionals, and anyone who needs quick, reliable unit conversions.",
        features: [
            "Length conversion (km, m, cm, mm, miles, feet, inches, yards)",
            "Weight conversion (kg, g, lbs, oz, stone)",
            "Temperature conversion (Celsius, Fahrenheit, Kelvin)",
            "Volume conversion (liters, ml, gallons, cups, fl oz)",
            "Instant real-time conversion as you type",
            "Metric and Imperial system support"
        ],
        keywords: [
            'unit converter', 'unit converter online', 'free unit converter',
            'convert units', 'metric to imperial converter',
            'kg to lbs', 'lbs to kg', 'km to miles', 'miles to km',
            'cm to inches', 'inches to cm', 'feet to meters', 'meters to feet',
            'celsius to fahrenheit', 'fahrenheit to celsius',
            'liters to gallons', 'gallons to liters',
            'mm to inches', 'yards to meters', 'oz to grams',
            'temperature converter', 'length converter', 'weight converter',
            'unit conversion calculator', 'measurement converter'
        ],
        faqs: [
            {
                question: "How do I convert kg to lbs?",
                answer: "Multiply the weight in kilograms by 2.20462 to get pounds. For example, 70 kg × 2.20462 = 154.32 lbs. This converter does this instantly — just enter the value and select the units."
            },
            {
                question: "How do I convert Celsius to Fahrenheit?",
                answer: "Multiply the Celsius temperature by 9/5 (or 1.8) and then add 32. For example, 37°C × 1.8 + 32 = 98.6°F. To convert Fahrenheit to Celsius, subtract 32 and multiply by 5/9."
            },
            {
                question: "How many centimeters are in an inch?",
                answer: "One inch equals exactly 2.54 centimeters. To convert inches to cm, multiply by 2.54. To convert cm to inches, divide by 2.54. For example, 5 inches = 12.7 cm."
            },
            {
                question: "How do I convert kilometers to miles?",
                answer: "Multiply kilometers by 0.621371 to get miles. For example, 10 km × 0.621371 = 6.21 miles. To convert miles to kilometers, multiply by 1.60934."
            },
            {
                question: "What is the difference between metric and imperial?",
                answer: "The metric system (used globally) uses meters, kilograms, and Celsius. The imperial system (used in the US, UK for some measurements) uses feet, pounds, and Fahrenheit. This converter handles both systems seamlessly."
            },
            {
                question: "How many liters are in a gallon?",
                answer: "One US gallon equals approximately 3.785 liters. One UK (imperial) gallon equals approximately 4.546 liters. This converter uses US gallons by default, which is the more common standard online."
            },
            {
                question: "How do I convert feet and inches to centimeters?",
                answer: "Convert feet to inches (multiply by 12), add the remaining inches, then multiply the total inches by 2.54 to get centimeters. For example, 5'9\" = 69 inches × 2.54 = 175.26 cm."
            },
            {
                question: "Is this unit converter accurate?",
                answer: "Yes. All conversion factors used are mathematically standard and precise to multiple decimal places. The results are equivalent to what you would get using the official conversion formulas."
            },
            {
                question: "Can I use this converter on my phone?",
                answer: "Yes. This unit converter is fully responsive and works on all devices including mobile phones, tablets, and desktop computers. No app installation is required."
            },
            {
                question: "Is this unit converter free?",
                answer: "Yes. This converter is completely free with no limits, no ads blocking results, and no sign-up required."
            }
        ],
        howTo: {
            name: "How to Convert Units Online",
            description: "Convert between metric and imperial units in 3 steps.",
            steps: [
                { name: "Enter Value", text: "Type the number you want to convert (e.g., 100)." },
                { name: "Select Units", text: "Choose the source unit (e.g., Kilograms) and the target unit (e.g., Pounds)." },
                { name: "View Result", text: "See the converted value instantly with full precision." }
            ]
        },
    },
    {
        id: 'random',
        name: 'Random Number Generator - Generate Random Numbers Online',
        description: 'Generate random numbers in any range for games, raffles, classroom use, testing, and everyday picks.',
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
        name: 'Ovulation Calculator - Estimate Fertile Days and Ovulation',
        description: 'Predict your fertile window and likely ovulation date based on cycle timing to help with pregnancy planning.',
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
        name: 'Date Calculator - Calculate Days Between Dates Online',
        description: 'Count days between dates, add or subtract days, and calculate date differences for planning, deadlines, and schedules.',
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
        name: 'Inflation Calculator - Measure Buying Power Over Time',
        description: 'See how inflation changes the value of money over time and compare past amounts with today’s purchasing power.',
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
        name: 'Tip Calculator — How Much to Tip? Quick Tip & Bill Splitter',
        description: 'Enter your bill → instantly see the tip amount, total, and each person\'s share. Pre-tax tips, rounding, bill splitting, and tipping guide for US, India & 7 countries.',
        category: 'math',
        icon: DollarSign,
        component: TipCalculator,
        content: TipCalculatorContent,
        longDescription: "This free Tip Calculator helps you work out how much to tip at restaurants, cafes, bars, hotels, and for delivery or rideshare services. Enter your bill amount, choose a tip percentage, and instantly see the tip amount, total bill, and per-person share when splitting with friends. The calculator supports pre-tax tipping (the industry standard in the US and Canada), multiple rounding preferences, and a dynamic comparison table showing totals at 10%, 15%, 18%, 20%, and 25%. It also includes a global tipping guide covering the US, UK, Canada, Australia, France, Japan, and India so you know the local etiquette wherever you are.",
        features: [
            "Instant tip calculation with percentage or fixed amount",
            "Bill splitting for any group size",
            "Pre-tax vs post-tax tipping toggle",
            "Rounding options (round tip, round total, or no rounding)",
            "Side-by-side comparison at 10%, 15%, 18%, 20%, 25%",
            "Multi-currency support (USD, EUR, GBP, INR)",
            "Global tipping etiquette guide for 2026",
            "Save calculations to history"
        ],
        formula: "\\text{Tip} = \\text{Bill} \\times \\frac{\\text{Tip \\%}}{100}",
        keywords: [
            'tip calculator', 'tip calculator online', 'free tip calculator',
            'gratuity calculator', 'restaurant tip calculator',
            'bill split calculator', 'split bill calculator',
            'how much to tip', 'how to calculate tip',
            'tip calculator for restaurants', 'tip calculator app',
            'tip percentage calculator', 'tip on pre-tax amount',
            'tipping percentage 2026', 'standard tip percentage',
            'how much to tip in USA', 'how much to tip in India',
            'how much to tip delivery driver', 'how much to tip uber',
            'tip calculator india', 'tip calculator with tax',
            'calculate tip and split bill', 'waiter tip calculator',
            'tip guide by country', 'tipping etiquette 2026'
        ],
        faqs: [
            {
                question: "How do I calculate a tip?",
                answer: "Multiply your bill amount by the tip percentage and divide by 100. For example, a 15% tip on a $80 bill is $80 × 15 ÷ 100 = $12. Our tip calculator does this instantly and also handles tax, rounding, and bill splitting."
            },
            {
                question: "What is the standard tip percentage in the US?",
                answer: "In the United States, 15% to 20% of the pre-tax bill is the standard tip for sit-down restaurants. For exceptional service, 20% to 25% is common. At buffets, 10% is typical since table-side service is limited."
            },
            {
                question: "Should I tip on the pre-tax or post-tax amount?",
                answer: "Industry etiquette in the US and Canada recommends tipping on the pre-tax subtotal because the tax portion goes to the government, not the server. Our calculator includes a toggle to switch between pre-tax and post-tax tipping."
            },
            {
                question: "How much should I tip in India?",
                answer: "In India, tipping 5% to 10% is common at restaurants. Many restaurants add a service charge of 5% to 10% to the bill. If a service charge is already included, an additional tip is appreciated but not required."
            },
            {
                question: "How do I split a bill with tip evenly?",
                answer: "Add the tip to the total bill (including any tax), then divide by the number of people. For example, a $100 bill with $18 tip split 3 ways is ($100 + $18) ÷ 3 = $39.33 per person. This calculator handles this automatically."
            },
            {
                question: "Is a service charge the same as a tip?",
                answer: "No. A service charge is a mandatory fee added by the establishment and may not go directly to the server. A tip (gratuity) is a voluntary payment given directly to the service staff. If a service charge is already included on your bill, an additional tip is optional."
            },
            {
                question: "How much should I tip for delivery and rideshare?",
                answer: "For food delivery, $3 to $5 minimum or 15% to 20% of the order total is standard. For rideshare services like Uber and Lyft, 10% to 15% of the fare is customary. Tip more for heavy orders, bad weather, or long distances."
            },
            {
                question: "How much should I tip at a hotel?",
                answer: "Tip $2 to $5 per night for housekeeping, $1 to $2 per bag for bellhops, and $1 to $3 for valet service. For concierge help with difficult reservations, $5 to $20 is common depending on the effort involved."
            },
            {
                question: "Do I need to tip in Japan or China?",
                answer: "In Japan, tipping is generally not expected and can sometimes be seen as impolite. Excellent service is considered the standard. In China, tipping is uncommon at local restaurants but may be accepted at international hotels and tourist areas."
            },
            {
                question: "How much should I tip my hairdresser or barber?",
                answer: "For hairdressers, barbers, and salon services, 15% to 20% of the total service cost is the standard tip. If an assistant shampoos your hair, an additional $3 to $5 for the assistant is customary."
            }
        ],
        howTo: {
            name: "How to Calculate Tip and Split Bill",
            description: "Get the right tip amount in 4 easy steps.",
            steps: [
                { name: "Enter Bill Amount", text: "Type your bill subtotal before tax into the calculator." },
                { name: "Choose Tip Percentage", text: "Select a preset (10%, 15%, 18%, 20%, 25%) or use the slider for a custom percentage." },
                { name: "Set Advanced Options", text: "Optionally add tax percentage, toggle pre-tax tipping, or choose rounding preferences." },
                { name: "Split the Bill", text: "Enter the number of people to see each person's share of the total including tip." }
            ]
        },
        scenarios: [
            {
                id: 'india',
                name: 'Tip Calculator India - Calculate Restaurant Tip in INR',
                description: 'Free tip calculator for India. Quickly calculate 5% to 10% restaurant tips, handle service charges, and split bills in Indian Rupees.',
                keywords: ['tip calculator india', 'how much to tip in india', 'restaurant tip calculator india', 'tip calculator inr', 'tipping in india'],
                initialState: { tipPercentage: 5, billAmount: 2000, splitCount: 1 }
            },
            {
                id: 'restaurant',
                name: 'Restaurant Tip Calculator - Calculate Gratuity and Split Bill',
                description: 'Calculate restaurant tips and split the bill easily. Find the exact gratuity amount for 15%, 18%, or 20% and share the cost with friends.',
                keywords: ['restaurant tip calculator', 'restaurant gratuity calculator', 'tip calculator for restaurants', 'how much to tip at a restaurant', 'food tip calculator'],
                initialState: { tipPercentage: 18, billAmount: 100, splitCount: 2 }
            },
            {
                id: 'delivery',
                name: 'Delivery Tip Calculator - Pizza, UberEats, DoorDash Gratuity',
                description: 'Calculate how much to tip food delivery drivers. Find the right tip amount for pizza delivery, UberEats, DoorDash, and other services.',
                keywords: ['delivery tip calculator', 'pizza tip calculator', 'ubereats tip calculator', 'doordash tip calculator', 'how much to tip delivery driver'],
                initialState: { tipPercentage: 15, billAmount: 40, splitCount: 1 }
            }
        ]
    },
    {
        id: 'india-fd',
        name: 'FD Calculator India - Calculate Fixed Deposit Maturity Online',
        description: 'Calculate FD maturity amount, interest earned, and total returns for fixed deposits with tenure, rate, and compounding.',
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
        name: 'RD Calculator India - Calculate Recurring Deposit Maturity',
        description: 'Estimate RD maturity value, interest earned, and total savings for monthly recurring deposits with quarterly compounding.',
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
        name: 'PPF Calculator - Calculate PPF Maturity and Returns Online',
        description: 'Free PPF calculator to estimate maturity amount, interest earned, and tax-free returns for 15-year Public Provident Fund investments in India.',
        category: 'india',
        icon: Briefcase,
        component: PPFCalculator,
        content: PPFCalculatorContent,
        longDescription: "This free PPF Calculator helps you estimate the maturity amount and total interest earned on your Public Provident Fund (PPF) investment in India. PPF is a government-backed, tax-free savings scheme with a 15-year lock-in period. It offers EEE (Exempt-Exempt-Exempt) tax benefits — your contribution qualifies for Section 80C deduction, the interest earned is tax-free, and the maturity amount is also tax-free. Enter your annual investment amount, current PPF interest rate, and tenure to see year-by-year growth and final corpus value.",
        features: [
            "15-year and extended tenure projection",
            "Tax-free returns calculation (EEE benefit)",
            "Year-by-year interest breakdown",
            "Annual investment up to ₹1.5 Lakh limit",
            "Current PPF interest rate support (7.1% for 2026)",
            "Contribution and maturity planning tool"
        ],
        keywords: [
            'ppf calculator', 'ppf calculator online', 'free ppf calculator',
            'ppf maturity calculator', 'ppf interest calculator',
            'ppf returns calculator', 'ppf calculator india',
            'public provident fund calculator', 'ppf interest rate 2026',
            'ppf maturity amount', 'ppf investment calculator',
            'ppf calculator monthly', 'ppf yearly contribution',
            'ppf tax saving calculator', 'ppf 15 year calculator',
            'ppf calculator with yearly breakdown', 'ppf account calculator',
            'how much ppf maturity for 1.5 lakh', 'ppf vs fd calculator'
        ],
        faqs: [
            {
                question: "How is PPF interest calculated?",
                answer: "PPF interest is calculated on the lowest balance between the 5th and the last day of each month, and compounded annually. This means deposits made before the 5th of any month earn interest for that entire month. The current PPF interest rate is 7.1% per annum (2026)."
            },
            {
                question: "What is the maximum PPF investment per year?",
                answer: "The maximum deposit allowed in a PPF account is ₹1.5 Lakh per financial year. The minimum deposit required is ₹500 per year to keep the account active. You can make deposits in lump sum or up to 12 installments per year."
            },
            {
                question: "Is PPF interest tax-free?",
                answer: "Yes. PPF enjoys EEE (Exempt-Exempt-Exempt) tax status. Your contribution up to ₹1.5 Lakh qualifies for Section 80C deduction, the interest earned is completely tax-free, and the maturity amount is also fully tax-exempt."
            },
            {
                question: "What is the PPF lock-in period?",
                answer: "PPF has a mandatory lock-in period of 15 years from the date of account opening. After 15 years, you can either withdraw the full amount or extend the account in blocks of 5 years (with or without contributions)."
            },
            {
                question: "Can I withdraw money from PPF before maturity?",
                answer: "Partial withdrawal is allowed from the 7th financial year onwards. You can withdraw up to 50% of the balance at the end of the 4th year or the preceding year, whichever is lower. Complete premature closure is allowed only under specific conditions like serious illness."
            },
            {
                question: "How much will I get if I invest ₹1.5 lakh per year in PPF?",
                answer: "If you invest the maximum ₹1.5 Lakh per year for 15 years at the current rate of 7.1%, your total investment of ₹22.5 Lakh will grow to approximately ₹40.7 Lakh at maturity — earning about ₹18.2 Lakh in tax-free interest."
            },
            {
                question: "Can I have more than one PPF account?",
                answer: "No. An individual can hold only one PPF account. Having multiple accounts is not allowed under PPF rules. If a second account is discovered, it will be merged with the primary account or closed."
            },
            {
                question: "Is PPF better than Fixed Deposit?",
                answer: "PPF offers tax-free returns with EEE benefit, while FD interest is fully taxable. At 7.1% tax-free, PPF's effective return is equivalent to about 10% pre-tax return for someone in the 30% tax bracket. However, FD offers more liquidity with shorter lock-in periods."
            },
            {
                question: "Can NRIs open a PPF account?",
                answer: "No. NRIs cannot open new PPF accounts. However, if you had a PPF account before becoming an NRI, you can continue it until maturity (15 years) but cannot extend it beyond that."
            },
            {
                question: "Is this PPF calculator free?",
                answer: "Yes. This calculator is completely free, requires no sign-up, and works on all devices. All calculations are performed locally in your browser."
            }
        ],
        howTo: {
            name: "How to Calculate PPF Maturity Amount",
            description: "Estimate your PPF returns in 4 simple steps.",
            steps: [
                { name: "Annual Investment", text: "Enter the amount you plan to invest each year (max ₹1.5 Lakh)." },
                { name: "Interest Rate", text: "Enter the current PPF interest rate (currently 7.1% for 2026)." },
                { name: "Tenure", text: "Set the investment period (minimum 15 years, extendable in 5-year blocks)." },
                { name: "View Results", text: "See your total investment, interest earned, and maturity amount with year-wise breakdown." }
            ]
        },
    },
    {
        id: 'india-home-loan-eligibility',
        name: 'Home Loan Eligibility Calculator India - Check Loan Eligibility',
        description: 'Estimate how much home loan you may qualify for based on income, obligations, tenure, and expected interest rate.',
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
        name: 'HRA Calculator India - Calculate House Rent Allowance Exemption',
        description: 'Calculate HRA exemption under Indian income tax rules using salary, rent paid, and metro or non-metro city details.',
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
        name: 'Compound Interest Calculator — See How Your Money Grows Over Time',
        description: 'Free compound interest calculator with daily, monthly, and yearly compounding. See future value, total earnings, and growth chart for any investment.',
        category: 'financial',
        icon: TrendingUp,
        component: CompoundInterestCalculator,
        content: CompoundInterestCalculatorContent,
        longDescription: "Compound interest is often called the '8th wonder of the world'. Unlike simple interest, where you only earn on your principal, compound interest allows you to earn interest on your interest. This snowball effect can turn small, regular investments into significant wealth over time. Our calculator helps you visualize this growth with customizable frequency settings (daily, monthly, yearly) and additional contribution options.",
        keywords: [
            'compound interest calculator', 'compound interest formula',
            'daily compounding calculator', 'monthly compounding calculator',
            'investment growth calculator', 'interest on interest',
            'savings projector', 'future value calculator',
            'compound interest calculator online', 'CI calculator',
            'how to calculate compound interest', 'compound interest examples',
            'compound interest vs simple interest', 'rule of 72 calculator'
        ],
        features: ["Frequency settings (Daily to Yearly)", "Monthly/Yearly Contributions", "Interactive Growth Chart", "Detailed Breakdown Table"],
        faqs: [
            {
                question: "What is compound interest?",
                answer: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest (calculated only on the principal), compound interest grows exponentially. For example, ₹1,00,000 at 10% compounded annually becomes ₹1,10,000 after year 1, then ₹1,21,000 after year 2 (interest earned on ₹1,10,000, not just ₹1,00,000)."
            },
            {
                question: "What is the compound interest formula?",
                answer: "The standard formula is A = P(1 + r/n)^(nt), where A is the future value, P is the principal, r is the annual interest rate (as a decimal), n is the number of times interest compounds per year, and t is the number of years. This calculator also adjusts for regular additional contributions."
            },
            {
                question: "What is the Rule of 72?",
                answer: "The Rule of 72 is a quick mental math shortcut to estimate how long it takes for an investment to double at a given interest rate. Simply divide 72 by the annual interest rate. For example, at 8% annual return, your money doubles in approximately 72 ÷ 8 = 9 years. At 12%, it doubles in about 6 years."
            },
            {
                question: "How does compounding frequency affect my returns?",
                answer: "The more frequently interest compounds, the more you earn. For ₹1,00,000 at 10% for 10 years: Annual compounding = ₹2,59,374. Monthly compounding = ₹2,70,704. Daily compounding = ₹2,71,791. The difference between annual and daily compounding is about ₹12,417 — significant for large amounts."
            },
            {
                question: "What is the difference between Simple and Compound Interest?",
                answer: "Simple interest is calculated only on the original principal: SI = P × R × T / 100. Compound interest is calculated on principal plus accumulated interest: CI = P(1 + r/n)^(nt) - P. Over 20 years at 10%, ₹1,00,000 earns ₹2,00,000 in simple interest but ₹5,72,750 in compound interest — nearly 3× more."
            },
            {
                question: "How much will ₹10,000 per month grow in 20 years?",
                answer: "At 12% annual return compounded monthly, ₹10,000/month for 20 years grows to approximately ₹99.9 Lakh (nearly ₹1 Crore). Your total investment would be ₹24 Lakh, meaning you earn about ₹75.9 Lakh in compound interest alone. This is the power of long-term compounding."
            },
            {
                question: "Is compound interest better for saving or borrowing?",
                answer: "Compound interest is excellent for saving and investing because your returns accelerate over time. However, it works against you when borrowing — credit card debt at 36% compounded monthly can double in just 2 years. Always try to earn compound interest (invest) and avoid paying it (minimize high-interest debt)."
            },
            {
                question: "What investments use compound interest?",
                answer: "Most investments and savings vehicles use compound interest: bank savings accounts (daily/quarterly), fixed deposits (quarterly/annually), mutual funds (continuous via NAV), PPF (annually), recurring deposits (quarterly), and bonds (semi-annually). Even real estate appreciates in a compound fashion."
            },
            {
                question: "Does inflation reduce compound interest gains?",
                answer: "Yes. If your investment earns 10% annually but inflation is 6%, your real (inflation-adjusted) return is approximately 4%. To calculate the true purchasing power of your future wealth, subtract the inflation rate from your expected return rate. This calculator shows nominal returns."
            },
            {
                question: "When should I start investing to maximize compound interest?",
                answer: "As early as possible. Starting at age 25 with ₹5,000/month at 12% gives you ₹3.24 Crore by age 60. Starting the same SIP at age 35 gives only ₹99 Lakh by age 60 — roughly 3× less. The extra 10 years of compounding make an enormous difference. Time in the market beats timing the market."
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
        name: 'Simple Interest Calculator — Calculate Interest on Loans & Savings',
        description: 'Free simple interest calculator to instantly find the interest amount, total maturity value, and principal. Supports months and years for fast calculation.',
        category: 'financial',
        icon: Percent,
        component: SimpleInterestCalculator,
        longDescription: "Back to basics. Simple interest is straightforward but essential for understanding short-term loans, personal lending, and basic savings. Unlike compound interest, simple interest is calculated only on the initial principal amount. This tool helps you quickly determine the exact interest owed on loans or the return on non-compounding investments in seconds.",
        keywords: [
            'simple interest calculator', 'simple interest formula', 'interest rate calculator', 
            'SI calculator', 'calculate interest online', 'loan interest calculator', 
            'simple interest formula calculator', 'principal interest time calculator',
            'how to calculate simple interest', 'simple vs compound interest'
        ],
        features: ["Principal, Rate, Time inputs", "Total interest output", "Comparison with compound interest"],
        faqs: [
            {
                question: "What is the Simple Interest formula?",
                answer: "The simple interest formula is SI = (P × R × T) / 100, where P is the Principal amount, R is the Rate of interest per year, and T is the Time period in years."
            },
            {
                question: "How is Simple Interest different from Compound Interest?",
                answer: "Simple interest is calculated only on the original principal amount. Compound interest is calculated on the principal plus any accumulated interest from previous periods. Simple interest grows linearly, while compound interest grows exponentially."
            },
            {
                question: "When is simple interest used in real life?",
                answer: "Simple interest is commonly used for short-term personal loans, car loans, some short-term student loans, and discounting of bills. Most long-term investments and bank accounts use compound interest instead."
            },
            {
                question: "How do I calculate simple interest for months instead of years?",
                answer: "To calculate simple interest for months, divide the number of months by 12 to convert it into years. For example, 6 months becomes 6/12 or 0.5 years. Then use the standard formula: SI = (P × R × 0.5) / 100."
            },
            {
                question: "Does simple interest change over time?",
                answer: "No, simple interest remains constant for every period. If you earn $50 in the first year, you will earn exactly $50 in the second year, the third year, and so on, as long as the rate and principal remain the same."
            },
            {
                question: "What happens if I pay off a simple interest loan early?",
                answer: "If you pay off a simple interest loan early, you generally save money because interest is calculated daily based on your outstanding principal balance. The sooner you pay down the principal, the less interest you will owe overall."
            },
            {
                question: "Can I calculate the principal if I know the interest?",
                answer: "Yes, you can rearrange the formula to solve for Principal: P = (SI × 100) / (R × T). This calculator handles those reverse calculations automatically."
            },
            {
                question: "Is simple interest better for borrowers or lenders?",
                answer: "Simple interest is generally better for borrowers because the interest does not compound (grow upon itself), meaning the total amount owed is less compared to a compounding loan. Lenders prefer compound interest to maximize their returns."
            },
            {
                question: "What is the 'Principal' in simple interest?",
                answer: "The Principal is the initial amount of money borrowed or invested before any interest is applied. It is the base figure upon which the interest rate is calculated."
            },
            {
                question: "How do I find the total amount owed with simple interest?",
                answer: "The total amount (maturity value) is the sum of the Principal and the Simple Interest. The formula is A = P + SI."
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
        name: 'Percentage Change Calculator - Calculate Increase or Decrease',
        description: 'Find percentage increase or percentage decrease between two values quickly for prices, revenue, marks, and metrics.',
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
        hideDefaultSections: true,
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
        name: 'Discount Calculator — Sale Price After X% Off (With Tax)',
        description: 'Enter original price and discount % → instantly see the sale price, savings amount, and final total after tax. Supports coupons, bulk quantities, and multiple discounts.',
        category: 'math',
        icon: Percent,
        component: DiscountCalculator,
        content: DiscountCalculatorContent,
        longDescription: "This free Discount Calculator shows you the exact final price and total savings after applying a percentage discount, flat coupon, and tax. Enter the original price, set the discount percentage, and instantly see how much you save and what you actually pay. It supports multiple quantities, optional sales tax or VAT, and stacked discounts (percentage + flat amount). Use it for online shopping, retail sales, Black Friday deals, seasonal promotions, or wholesale pricing to make sure you are getting the best deal.",
        features: [
            "Instant final price and savings calculation",
            "Percentage discount and flat coupon support",
            "Multiple quantity pricing",
            "Optional sales tax and VAT inclusion",
            "Stacked discounts (percentage + flat amount)",
            "Clear cost breakdown with savings highlighted"
        ],
        formula: "\\text{Sale Price} = \\text{Original Price} - \\left(\\text{Original Price} \\times \\frac{\\text{Discount \\%}}{100}\\right)",
        keywords: [
            'discount calculator', 'discount calculator online', 'free discount calculator',
            'percentage off calculator', 'sale price calculator',
            'how to calculate discount', 'how to calculate discount percentage',
            'calculate percentage off', 'percent off calculator',
            'discount percentage calculator', 'price after discount',
            'what is 20 percent off', 'what is 30 percent off',
            'what is 50 percent off', 'coupon calculator',
            'shopping discount calculator', 'final price after discount',
            'discount and tax calculator', 'savings calculator shopping',
            'sale calculator online', 'bulk discount calculator',
            'original price from discount', 'double discount calculator'
        ],
        faqs: [
            {
                question: "How do I calculate a discount percentage?",
                answer: "Multiply the original price by the discount percentage, then divide by 100. For example, 25% off $80 is $80 × 25 ÷ 100 = $20 discount. The final price is $80 − $20 = $60. This calculator does this instantly for any price and percentage."
            },
            {
                question: "What is 20% off of $50?",
                answer: "20% off $50 is a $10 discount. The sale price is $50 − $10 = $40. To calculate: $50 × 20 ÷ 100 = $10 off."
            },
            {
                question: "How do I find the original price from a discounted price?",
                answer: "Divide the sale price by (1 − discount rate). For example, if an item costs $60 after a 25% discount, the original price was $60 ÷ 0.75 = $80. This is called a reverse discount calculation."
            },
            {
                question: "Can I stack multiple discounts?",
                answer: "Yes. This calculator lets you apply a percentage discount first, then add a flat coupon amount on top. Note that stacking discounts is not the same as adding percentages — a 20% + 10% discount does not equal 30% off."
            },
            {
                question: "Should I calculate tax before or after the discount?",
                answer: "In most jurisdictions, sales tax is applied after the discount. You pay tax on the reduced price, not the original price. This calculator applies tax after discount, which is the standard method."
            },
            {
                question: "How do I calculate discount for multiple items?",
                answer: "Enter the per-item price and discount, then set the quantity. The calculator will multiply the discounted unit price by the quantity to give you the correct total for bulk purchases."
            },
            {
                question: "What is the difference between percent off and percent of?",
                answer: "'Percent off' means the reduction amount (e.g., 30% off $100 = $30 saved, you pay $70). 'Percent of' means the portion you pay (e.g., 70% of $100 = $70). They are complementary — 30% off is the same as paying 70% of the original."
            },
            {
                question: "How do I check if a sale is a good deal?",
                answer: "Compare the final price (after discount and tax) with prices from other stores. A 50% off on an inflated price may still be more expensive than a competitor's regular price. This calculator helps you see the exact amount you pay."
            },
            {
                question: "Does this calculator work for international currencies?",
                answer: "Yes. The calculator works with any currency since it calculates percentages and amounts. Simply enter prices in your local currency and the discount math applies universally."
            },
            {
                question: "Is this discount calculator free?",
                answer: "Yes. This calculator is completely free with no limits, no sign-up required, and works on all devices including mobile phones, tablets, and desktops."
            }
        ],
        howTo: {
            name: "How to Calculate Discount and Sale Price",
            description: "Find the final price after discount in 4 steps.",
            steps: [
                { name: "Enter Original Price", text: "Type the item's listing or MRP price before any discounts." },
                { name: "Set Discount Percentage", text: "Enter the sale percentage (e.g., 10%, 25%, 50% off)." },
                { name: "Add Quantity and Tax", text: "Optionally set the number of items and sales tax or VAT percentage." },
                { name: "View Final Price", text: "Instantly see the discount amount, total savings, and final price you pay." }
            ]
        }
    },
    {
        id: 'india-gst',
        name: 'GST Calculator India — Add or Remove GST Instantly (2026 Slabs)',
        description: 'Free GST calculator for India. Add or remove GST from any amount. Supports 0%, 5%, 12%, 18%, 28% slabs with CGST/SGST split and reverse calculation.',
        category: 'india',
        icon: Percent,
        component: IndiaGSTCalculator,
        content: IndiaGSTCalculatorContent,
        longDescription: "Use this India GST Calculator to add or remove GST from invoices, verify tax on services, and understand legacy service tax math for pre-GST bills. If you are searching for a service tax calculator, this page also explains how service tax was subsumed into GST from 1 July 2017 and how the last broad 15% service tax formula worked on older invoices.",
        keywords: [
            'gst calculator', 'gst calculator india', 'gst calculator online',
            'gst calculator 2026', 'india gst new rates', '0% gst list',
            'gst exemption calculator', 'gst inclusive exclusive',
            'gst slabs 2026', 'reverse gst calculator',
            'cgst sgst calculator', 'igst calculator',
            'service tax calculator india', 'old service tax calculator',
            'service tax to gst', 'service tax before gst',
            'add gst to price', 'remove gst from price',
            'gst on services', 'gst on goods'
        ],
        features: [
            "2026 Tax Slabs (0%, 5%, 12%, 18%, 28%)",
            "Exempt Item Calculation (Zero Rated)",
            "Reverse GST Calculation",
            "CGST + SGST Split",
            "Legacy Service Tax reference",
            "Instant Breakdown",
            "Mobile Friendly"
        ],
        formula: "\\text{GST Amount} = \\text{Original Cost} \\times \\left(\\frac{\\text{GST Rate}}{100}\\right)",
        faqs: [
            {
                question: "How do I calculate GST on a product?",
                answer: "To add GST: Multiply the base price by the GST rate and divide by 100. For example, ₹1,000 at 18% GST = ₹1,000 × 18/100 = ₹180 GST. Total = ₹1,180. To remove GST from an inclusive price: Base Price = Total Price ÷ (1 + GST Rate/100). For ₹1,180 at 18%: ₹1,180 ÷ 1.18 = ₹1,000."
            },
            {
                question: "What are the current GST slabs in India?",
                answer: "India has 5 main GST slabs: 0% (essential items like milk, bread, fresh vegetables), 5% (packaged food, economy travel), 12% (processed food, business class air travel), 18% (most services, electronics, restaurants), and 28% (luxury goods, cars, tobacco, aerated drinks). Some items also attract a GST Compensation Cess."
            },
            {
                question: "What is the difference between CGST, SGST, and IGST?",
                answer: "For transactions within the same state, GST is split equally into CGST (Central GST) and SGST (State GST). For example, 18% GST = 9% CGST + 9% SGST. For inter-state transactions, IGST (Integrated GST) is charged at the full rate (18%). IGST is also applicable on imports."
            },
            {
                question: "How do I calculate GST in reverse (from total price)?",
                answer: "To find the base price from a GST-inclusive total: Base Price = Total ÷ (1 + GST%/100). For example, if an item costs ₹5,900 inclusive of 18% GST: Base = ₹5,900 ÷ 1.18 = ₹5,000. GST Amount = ₹5,900 - ₹5,000 = ₹900. Use our 'Inclusive' mode for this."
            },
            {
                question: "What is Input Tax Credit (ITC)?",
                answer: "Input Tax Credit allows businesses to reduce their GST liability by claiming credit for the GST already paid on purchases (inputs). For example, if you pay ₹1,800 GST on raw materials and collect ₹3,600 GST on sales, you only pay ₹1,800 (₹3,600 - ₹1,800) to the government."
            },
            {
                question: "Is GST applicable on rent?",
                answer: "Residential rent is exempt from GST if the tenant is an individual for personal use. However, commercial property rent attracts 18% GST. If a registered business rents a residential property, GST is applicable under the reverse charge mechanism (RCM) from July 2022."
            },
            {
                question: "What is the GST on restaurants?",
                answer: "Non-AC restaurants: 5% GST (no ITC). AC restaurants and those serving alcohol: 5% GST (no ITC). Restaurants in 5-star hotels (room tariff above ₹7,500): 18% GST (with ITC). Cloud kitchens and food delivery platforms: 5% GST."
            },
            {
                question: "Is service tax still applicable in India?",
                answer: "No. Service tax was fully subsumed into GST from 1 July 2017. All services that were previously under service tax (at 15%) are now taxed under GST at their applicable slab (usually 18%). For older invoices from before July 2017, the 15% service tax rate applied."
            },
            {
                question: "How often do I need to file GST returns?",
                answer: "Regular taxpayers file GSTR-3B monthly (by the 20th) and GSTR-1 quarterly or monthly depending on turnover. Composition scheme taxpayers file CMP-08 quarterly and GSTR-4 annually. Annual return GSTR-9 is filed once per year by December 31st."
            },
            {
                question: "What items are exempt from GST (0% GST)?",
                answer: "Major exempt items include: fresh fruits and vegetables, milk, eggs, bread, salt, natural honey, fresh meat and fish, handloom products, books and newspapers, educational services, healthcare services, and agricultural services. The full list is maintained by the GST Council."
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
                name: 'GST on Mobile Phones in India - Calculate Mobile GST',
                description: 'Calculate GST on smartphones and accessories in India with a quick breakdown for billed amount and tax value.',
                keywords: ['gst on mobile phones', 'hsn code for smartphones', 'gst rate mobile accessories 2026', 'input tax credit mobile'],
                initialState: { taxRate: 18 }
            },
            {
                id: 'luxury-cars-gst',
                name: 'GST on Luxury Cars in India - Calculate Luxury Car Tax',
                description: 'Estimate GST on luxury cars and SUVs in India with a quick breakdown of taxable value and effective tax.',
                keywords: ['gst on luxury cars', '40% gst suv', 'luxury car tax india 2026', 'car gst calculator'],
                initialState: { taxRate: 40 }
            },
            {
                id: 'service-tax-india',
                name: 'Service Tax Calculator India - Calculate Pre-GST Service Tax',
                description: 'Calculate legacy service tax for older invoices and understand how service tax compares with GST after July 1, 2017.',
                keywords: ['service tax calculator india', 'service tax 15 percent calculator', 'old service tax calculator', 'service tax before gst', 'pre gst invoice calculator'],
                features: ['Legacy 15% service tax math', 'Pre-GST invoice examples', 'Service tax history in India', 'GST replacement explainer'],
                initialState: { taxRate: 15, amount: 10000, rateLabel: 'Legacy', rateDescription: 'Service Tax' }
            }
        ]
    },
    {
        id: 'india-emi',
        name: 'EMI Calculator India — Home, Car & Personal Loan EMI (2026)',
        description: 'Enter loan amount, rate & tenure → instantly see monthly EMI, total interest, and year-wise amortization. ₹50L home loan at 8.5% for 20yr = ₹43,391/mo.',
        category: 'india',
        icon: Landmark,
        component: IndiaEMICalculator,
        content: IndiaEMICalculatorContent,
        longDescription: "This free EMI Calculator helps you calculate the Equated Monthly Installment (EMI) for any loan — home loan, car loan, personal loan, or education loan. Enter the loan amount, interest rate, and tenure to instantly see your monthly EMI, total interest payable, and total repayment amount. The calculator uses the standard Reducing Balance Method used by all major Indian banks (SBI, HDFC, ICICI, Axis, Bajaj Finserv). It also generates a year-wise amortization schedule showing how your principal and interest payments change over the loan tenure.",
        keywords: [
            'emi calculator', 'emi calculator online', 'free emi calculator',
            'emi calculator india', 'home loan emi calculator', 'car loan emi calculator',
            'personal loan emi calculator', 'education loan emi calculator',
            'loan emi calculator', 'loan calculator india',
            'sbi home loan emi calculator', 'hdfc personal loan emi',
            'icici car loan emi', 'bajaj finserv emi calculator',
            'how to calculate emi', 'emi formula', 'emi calculation formula',
            'reducing balance emi calculator', 'flat rate vs reducing balance',
            'loan amortization schedule', 'loan repayment calculator',
            'monthly emi calculator', 'housing loan calculator',
            'bike loan emi calculator', 'loan interest calculator india'
        ],
        features: [
            "Reducing Balance Method (bank standard in India)",
            "Visual amortization chart (principal vs interest split)",
            "Year-wise repayment schedule",
            "Home, car, personal, and education loan support",
            "Total interest payable analysis",
            "EMI comparison at different rates and tenures"
        ],
        formula: "E = P \\times r \\times \\frac{(1 + r)^n}{(1 + r)^n - 1}",
        faqs: [
            {
                question: "How is EMI calculated?",
                answer: "EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the tenure in months. For example, a ₹10 Lakh loan at 8.5% for 20 years has an EMI of approximately ₹8,678."
            },
            {
                question: "What is the EMI for a ₹10 lakh home loan?",
                answer: "For a ₹10 Lakh home loan at 8.5% interest for 20 years, the monthly EMI is approximately ₹8,678. The total interest paid over 20 years would be about ₹10.83 Lakh — meaning you pay back roughly ₹20.83 Lakh in total."
            },
            {
                question: "What is the difference between flat rate and reducing balance?",
                answer: "In the flat rate method, interest is calculated on the original loan amount throughout the tenure. In the reducing balance method (used by all major Indian banks), interest is calculated on the outstanding principal, which decreases each month. The reducing balance method results in lower total interest."
            },
            {
                question: "Does prepaying my loan reduce the EMI or tenure?",
                answer: "Prepayment can reduce either the EMI amount or the loan tenure, depending on your bank's policy and your preference. Reducing the tenure saves more interest in the long run. Most banks allow prepayment of home loans without penalty as per RBI guidelines."
            },
            {
                question: "Which Indian banks offer the lowest home loan rates?",
                answer: "As of 2026, SBI, Bank of Baroda, and LIC Housing Finance typically offer competitive home loan rates starting from around 8.25% to 8.75%. Rates vary based on loan amount, CIBIL score, and property type. Always compare the latest rates from multiple banks."
            },
            {
                question: "Is there a penalty for prepaying a personal loan?",
                answer: "Banks may charge a prepayment penalty of 2% to 5% on personal loans. However, for home loans, RBI has mandated that no prepayment penalty can be charged on floating rate loans. Always check your loan agreement for specific terms."
            },
            {
                question: "How does loan tenure affect EMI and total interest?",
                answer: "A longer tenure reduces your monthly EMI but increases the total interest paid over the loan's lifetime. For example, a ₹20 Lakh loan at 9%: 10-year tenure = ₹25,334 EMI (₹10.4L interest), 20-year tenure = ₹17,995 EMI (₹23.2L interest). Choose based on your cash flow needs."
            },
            {
                question: "What is CIBIL score and how does it affect my loan?",
                answer: "CIBIL score is your credit score ranging from 300 to 900. A score above 750 qualifies you for the best interest rates. Below 650 may result in loan rejection or significantly higher rates. Check your score before applying to negotiate better terms."
            },
            {
                question: "Can I change my EMI amount after taking a loan?",
                answer: "Some banks offer step-up EMI options where your EMI increases over time (useful for young professionals expecting salary growth). You can also make partial prepayments to effectively reduce future EMIs. Contact your bank for restructuring options."
            },
            {
                question: "Is this EMI calculator free?",
                answer: "Yes. This EMI calculator is completely free, requires no sign-up, and works on all devices. All calculations happen locally in your browser — no data is stored or sent to any server."
            }
        ],
        howTo: {
            name: "How to Calculate Loan EMI",
            description: "Estimate your monthly loan payment in 4 steps.",
            steps: [
                { name: "Enter Loan Amount", text: "Type the total loan principal you plan to borrow (e.g., ₹10,00,000)." },
                { name: "Interest Rate", text: "Input the annual interest rate offered by your bank (e.g., 8.5%)." },
                { name: "Select Tenure", text: "Choose the repayment period in years or months (e.g., 20 years)." },
                { name: "View Results", text: "See your monthly EMI, total interest payable, and year-wise amortization schedule." }
            ]
        },
        popular: true,
    },
    {
        id: 'sip',
        name: 'SIP Calculator — Estimate Mutual Fund Returns & Wealth Growth',
        description: 'Enter monthly SIP amount → see total invested, estimated returns, and future corpus. ₹10,000/month at 12% for 10 years = ₹23.2 Lakh. Plan your mutual fund goals.',
        category: 'financial',
        icon: TrendingUp,
        component: SIPCalculator,
        content: SIPCalculatorContent,
        longDescription: "This free SIP Calculator helps you estimate how much wealth you can build by investing a fixed amount every month in mutual funds through a Systematic Investment Plan (SIP). Enter your monthly investment, expected annual return rate, and investment period to instantly see the total invested amount, estimated returns, and future corpus value. SIP works on the principle of rupee cost averaging and the power of compounding — even small monthly investments of ₹500 or ₹5,000 can grow into lakhs or crores over 10 to 20 years. Use this tool to plan for retirement, your child's education, a home down payment, or any long-term financial goal.",
        keywords: [
            'sip calculator', 'sip calculator online', 'free sip calculator',
            'mutual fund calculator', 'mutual fund sip calculator',
            'sip return calculator', 'sip returns calculator online',
            'how to calculate sip returns', 'sip interest calculator',
            'systematic investment plan calculator', 'monthly investment calculator',
            'sip calculator india', 'sip calculator for 1 crore',
            'sip calculator with step up', 'step up sip calculator',
            'groww sip calculator', 'zerodha sip calculator', 'et money sip calculator',
            'sip wealth calculator', 'sip compounding calculator',
            'best sip calculator', 'sip lumpsum calculator',
            'sip calculator 5000 per month', 'sip calculator 10000 per month',
            'how much to invest in sip', 'sip for retirement planning'
        ],
        features: [
            "Project future value of monthly SIP investments",
            "Visual growth chart (Invested vs Wealth Gained)",
            "Compare returns at different rates (10%, 12%, 15%)",
            "Inflation-adjusted returns estimation",
            "Step-up SIP planning support",
            "Works for any monthly amount (₹500 to ₹1,00,000+)"
        ],
        hideDefaultSections: true,
        faqs: [
            {
                question: "How is SIP return calculated?",
                answer: "SIP returns are calculated using the compound interest formula applied to each monthly installment. Each SIP payment compounds independently from the date it was invested. The formula used is: FV = P × [(1 + r)^n − 1] / r × (1 + r), where P is the monthly investment, r is the monthly rate of return, and n is the total number of months."
            },
            {
                question: "How much SIP do I need for 1 crore?",
                answer: "To build a corpus of ₹1 Crore, you need to invest approximately ₹15,000 per month for 15 years at an expected annual return of 15%, or ₹10,000 per month for 20 years at 12% return. The exact amount depends on the return rate and investment duration."
            },
            {
                question: "What is a good SIP return rate to expect?",
                answer: "Equity mutual funds in India have historically delivered 12% to 15% annual returns over the long term (10+ years). Large-cap funds typically return 10% to 12%, while mid-cap and small-cap funds have delivered 14% to 18% historically. Debt funds generally return 6% to 8%."
            },
            {
                question: "Is SIP better than lumpsum investment?",
                answer: "SIP is better for volatile markets because it averages out the cost through rupee cost averaging — you buy more units when prices are low and fewer when prices are high. Lumpsum investment can outperform SIP if the market is at a low point. For most investors, SIP is recommended because it promotes discipline and removes the need to time the market."
            },
            {
                question: "What is a Step-up SIP?",
                answer: "A Step-up SIP (also called a Top-up SIP) is where you increase your monthly SIP amount by a fixed percentage every year, typically 10% to 15%. This strategy can significantly boost your final corpus. For example, a ₹10,000/month SIP with a 10% annual step-up can nearly double the final wealth compared to a flat SIP over 15 years."
            },
            {
                question: "Can I start SIP with just ₹500?",
                answer: "Yes. Many mutual fund houses in India allow SIPs starting from as low as ₹100 or ₹500 per month. Even small amounts benefit from compounding over long periods. Starting early with a small SIP is far better than waiting to start with a large amount."
            },
            {
                question: "Are SIP returns guaranteed?",
                answer: "No. SIP returns in mutual funds are subject to market risk and are not guaranteed. Historical returns are not indicative of future performance. However, SIPs in equity funds have historically outperformed fixed deposits and savings accounts over 7+ year periods."
            },
            {
                question: "Is SIP tax-free in India?",
                answer: "SIP itself is not a tax instrument. Tax treatment depends on the type of mutual fund. Equity fund gains are taxed as STCG (15%) if held less than 1 year, and LTCG above ₹1.25 lakh is taxed at 12.5%. ELSS funds offer tax deduction under Section 80C up to ₹1.5 lakh per year."
            },
            {
                question: "What happens if I miss a SIP installment?",
                answer: "Missing one or two SIP installments does not cancel your SIP. The fund house simply skips that month's investment. However, consistently missing installments may lead to the SIP being auto-cancelled by some AMCs. There is no penalty for missing payments."
            },
            {
                question: "How is SIP different from a recurring deposit (RD)?",
                answer: "Both involve regular monthly deposits, but SIP invests in mutual funds (market-linked, potentially higher returns) while RD is a bank product with guaranteed but lower returns (5% to 7%). SIP offers better long-term wealth creation potential but comes with market risk. RD is safer but rarely beats inflation over long periods."
            }
        ],
        howTo: {
            name: "How to Calculate SIP Returns",
            description: "Estimate your mutual fund SIP growth in 4 steps.",
            steps: [
                { name: "Monthly Investment", text: "Enter the amount you plan to invest every month (e.g., ₹5,000 or ₹10,000)." },
                { name: "Expected Return Rate", text: "Input the expected annual return (12% for large-cap, 15% for mid/small-cap as historical average)." },
                { name: "Investment Duration", text: "Select how many years you plan to continue the SIP (e.g., 10, 15, or 20 years)." },
                { name: "View Results", text: "See your total invested amount, estimated returns (wealth gained), and future corpus value." }
            ]
        },
        popular: true,
    },
    {
        id: 'india-salary',
        name: 'In-Hand Salary Calculator India - Convert CTC to Take-Home Pay',
        description: 'Convert CTC to in-hand salary and estimate monthly take-home pay after common payroll deductions in India.',
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
                question: "What is CTC and how is it different from in-hand salary?",
                answer: "CTC (Cost to Company) is the total expense an employer bears for you annually, including direct salary, employer PF contribution, gratuity, insurance, and other perks. In-hand salary (net pay) is what you actually receive in your bank account after all deductions like employee PF, professional tax, and TDS are subtracted. Typically, in-hand salary is 65% to 75% of your CTC."
            },
            {
                question: "Why is my in-hand salary so much less than my CTC?",
                answer: "CTC includes several non-cash and employer-only components: Employer PF (12% of basic), Gratuity (4.81% of basic), Group Medical Insurance, Performance Bonus (which may not be paid monthly), and sometimes ESOP value. After deducting Employee PF (12%), Professional Tax (₹200/month in most states), and TDS (income tax), the actual bank credit is significantly lower."
            },
            {
                question: "How is Basic Pay calculated from CTC?",
                answer: "Most companies set Basic Pay at 40% to 50% of CTC. For example, if your CTC is ₹10 LPA, your basic pay would typically be ₹4 to ₹5 Lakh per annum (₹33,333 to ₹41,667 per month). Basic pay is important because it determines your PF contribution, HRA, and gratuity."
            },
            {
                question: "What is HRA and how much tax can I save with it?",
                answer: "House Rent Allowance (HRA) is a salary component meant for rental expenses. Under the old tax regime, you can claim HRA exemption which is the minimum of: (a) Actual HRA received, (b) 50% of basic salary for metro cities (40% for non-metros), or (c) Rent paid minus 10% of basic salary. Under the new tax regime, HRA exemption is not available."
            },
            {
                question: "What is Professional Tax and how much is it?",
                answer: "Professional Tax (PT) is a state-imposed tax on salaried individuals. The maximum amount is ₹2,500 per year. Most states charge ₹200/month (₹2,400/year). States like Maharashtra charge slab-based PT. Some states like Rajasthan and Delhi do not levy professional tax at all."
            },
            {
                question: "New Tax Regime vs Old Tax Regime — which is better?",
                answer: "The New Tax Regime (default from FY 2023-24) offers lower tax rates but no deductions (80C, HRA, etc.). The Old Tax Regime has higher rates but allows deductions. If your total deductions (PF, HRA, 80C, 80D, home loan, NPS) exceed ₹3.75 to ₹4 Lakh, the Old Regime may save more tax. Use this calculator to compare both regimes for your specific CTC."
            },
            {
                question: "Is PF mandatory for all employees?",
                answer: "EPF is mandatory for employees earning a basic salary up to ₹15,000/month in establishments with 20+ employees. Both employee and employer contribute 12% of basic salary. For employees earning above ₹15,000 basic, PF can be optional, but most companies default to mandatory PF contribution."
            },
            {
                question: "How is Gratuity calculated from CTC?",
                answer: "Gratuity = (Last drawn basic salary × 15/26 × years of service). However, in CTC, companies provision gratuity at 4.81% of basic salary annually. You only receive gratuity after completing 5 years of continuous service. If you leave before 5 years, the gratuity component in your CTC is not paid out."
            },
            {
                question: "What is the in-hand salary for 10 LPA CTC in India?",
                answer: "For a ₹10 LPA CTC, the typical monthly in-hand salary ranges from ₹62,000 to ₹72,000 depending on your tax regime, PF structure, and city. After deducting employer PF (~₹12,000/year), employee PF (~₹12,000/year), professional tax (~₹2,400/year), and estimated TDS, the annual take-home is approximately ₹7.5 to ₹8.6 Lakh."
            },
            {
                question: "Can I reduce my tax by restructuring my salary?",
                answer: "Yes. Under the old tax regime, you can negotiate with your employer to increase tax-friendly components like HRA (for rent exemption), LTA (for travel claims), meal coupons (₹50/meal), NPS employer contribution (up to 10% of basic), and car lease/fuel reimbursement. This can save ₹50,000 to ₹1,50,000 in taxes annually depending on your CTC."
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
        scenarios: [
            {
                id: '3-lpa-in-hand',
                name: '3 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Estimate monthly in-hand salary for a 3 LPA CTC package in India with PF and professional tax deductions.',
                keywords: ['3 lpa in hand', '3 lpa in hand salary per month', '3 lakh package in hand salary', 'ctc 3 lakh in hand'],
                initialState: { ctc: 300000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '6-lpa-in-hand',
                name: '6 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Calculate monthly take-home salary for a 6 LPA package in India with common payroll deductions.',
                keywords: ['6 lpa in hand', '6 lakh salary in hand', '6 lac in hand salary', 'ctc 6 lakh in hand per month'],
                initialState: { ctc: 600000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '9-lpa-in-hand',
                name: '9 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Check estimated in-hand monthly salary for a 9 LPA CTC in India with a clear salary breakdown.',
                keywords: ['9 lpa in hand', '9 lakh in hand salary', '9 lac salary in hand', 'ctc 9 lakh in hand'],
                initialState: { ctc: 900000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '12-lpa-in-hand',
                name: '12 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Find monthly in-hand salary for a 12 LPA CTC package in India including PF and other payroll deductions.',
                keywords: ['12 lpa in hand', '12 lakh in hand salary', '12 lac in hand salary', '12 lacs in hand salary', 'ctc 12 lakh in hand'],
                initialState: { ctc: 1200000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '15-lpa-in-hand',
                name: '15 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Estimate monthly take-home pay on a 15 LPA CTC in India with a component-wise salary breakdown.',
                keywords: ['15 lpa in hand', '15 lakh in hand salary', '15 lac salary in hand', '15 lacs in hand', 'ctc 15 lakh in hand'],
                initialState: { ctc: 1500000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '18-lpa-in-hand',
                name: '18 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Calculate in-hand salary per month for an 18 LPA package in India with common payroll deductions.',
                keywords: ['18 lpa in hand', '18 lakh in hand salary', '18 lac in hand salary', 'ctc 18 lakh in hand'],
                initialState: { ctc: 1800000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '4-lpa-in-hand',
                name: '4 LPA In-Hand Salary in India - Monthly Take-Home After Deductions',
                description: 'Find out your monthly in-hand salary for a 4 LPA CTC package. See PF, professional tax, and take-home pay breakdown.',
                keywords: ['4 lpa in hand', '4 lpa in hand salary', '4 lakh package in hand salary', 'ctc 4 lakh in hand', '4 lpa salary breakdown'],
                initialState: { ctc: 400000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '5-lpa-in-hand',
                name: '5 LPA In-Hand Salary in India - Monthly Take-Home Pay Calculator',
                description: 'Calculate monthly take-home salary for a 5 LPA CTC in India. Includes PF, PT, and TDS deduction breakdown.',
                keywords: ['5 lpa in hand', '5 lpa in hand salary per month', '5 lakh salary in hand', 'ctc 5 lakh in hand', '5 lpa take home'],
                initialState: { ctc: 500000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '7-lpa-in-hand',
                name: '7 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Estimate in-hand salary per month for a 7 LPA CTC package in India with PF, professional tax, and TDS.',
                keywords: ['7 lpa in hand', '7 lpa in hand salary', '7 lakh in hand per month', 'ctc 7 lakh in hand', '7 lpa salary breakdown'],
                initialState: { ctc: 700000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '8-lpa-in-hand',
                name: '8 LPA In-Hand Salary in India - Monthly Take-Home Pay',
                description: 'Calculate your monthly take-home pay for an 8 LPA CTC in India with full salary component breakdown.',
                keywords: ['8 lpa in hand', '8 lpa in hand salary per month', '8 lakh in hand salary', 'ctc 8 lakh in hand', '8 lpa take home'],
                initialState: { ctc: 800000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '10-lpa-in-hand',
                name: '10 LPA In-Hand Salary in India - Monthly Take-Home After Tax',
                description: 'Find your monthly in-hand salary for a 10 LPA CTC in India. See PF, professional tax, TDS, and net take-home pay.',
                keywords: ['10 lpa in hand', '10 lpa in hand salary', '10 lakh salary in hand', 'ctc 10 lakh in hand', '10 lpa take home per month'],
                initialState: { ctc: 1000000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '20-lpa-in-hand',
                name: '20 LPA In-Hand Salary in India - Monthly Take-Home Pay',
                description: 'Calculate your monthly take-home salary for a 20 LPA CTC package in India with PF, TDS, and tax deductions.',
                keywords: ['20 lpa in hand', '20 lpa in hand salary', '20 lakh in hand salary', 'ctc 20 lakh in hand', '20 lpa take home'],
                initialState: { ctc: 2000000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '25-lpa-in-hand',
                name: '25 LPA In-Hand Salary in India - Monthly Take-Home Estimate',
                description: 'Estimate monthly in-hand salary for a 25 LPA CTC in India after all deductions including PF, PT, and income tax.',
                keywords: ['25 lpa in hand', '25 lpa in hand salary', '25 lakh in hand salary', 'ctc 25 lakh in hand', '25 lpa salary breakdown'],
                initialState: { ctc: 2500000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '30-lpa-in-hand',
                name: '30 LPA In-Hand Salary in India - Monthly Take-Home After Tax',
                description: 'Calculate monthly take-home pay for a 30 LPA CTC package in India with detailed tax and deduction breakdown.',
                keywords: ['30 lpa in hand', '30 lpa in hand salary', '30 lakh salary in hand', 'ctc 30 lakh in hand', '30 lpa take home'],
                initialState: { ctc: 3000000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            },
            {
                id: '50-lpa-in-hand',
                name: '50 LPA In-Hand Salary in India - Monthly Take-Home Pay',
                description: 'Find your monthly in-hand salary for a 50 LPA CTC in India. Includes surcharge, HRA, PF, and full tax breakdown.',
                keywords: ['50 lpa in hand', '50 lpa in hand salary', '50 lakh in hand salary', 'ctc 50 lakh in hand', '50 lpa take home per month'],
                initialState: { ctc: 5000000, bonus: 0, professionalTax: 200, viewMode: 'monthly' }
            }
        ]
    },
    {
        id: 'india-tax',
        name: 'Income Tax Calculator India - Compare Old vs New Tax Regime',
        description: 'Calculate income tax in India, compare old vs new regime, and estimate deductions, cess, and total tax payable.',
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
                name: 'Tax on 10 Lakh Salary in India - Old vs New Regime',
                description: 'Estimate tax on a 10 lakh salary in India and compare old vs new regime to see likely tax payable.',
                keywords: ['tax on 10 lakh salary', 'income tax for 10 lpa', '10 lakh salary tax savings', 'new regime tax 10 lakh'],
                initialState: { income: 1000000 }
            },
            {
                id: '15-lakh-salary-tax',
                name: 'Tax on 15 Lakh Salary in India - Old vs New Regime',
                description: 'Estimate tax on a 15 lakh salary in India and compare old vs new regime to review likely tax payable.',
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
