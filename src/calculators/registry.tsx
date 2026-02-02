import { Calculator, DollarSign, Activity, Calendar, Lock, MoreHorizontal, Divide, Percent, Dices, Scale, Flame, Ruler, TrendingUp, Briefcase, Car, Sunset, GraduationCap, Baby, Triangle, Heart, ArrowLeftRight, Landmark, Home } from 'lucide-react';
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
        content: BasicCalculatorContent,
        longDescription: "The Basic Calculator is designed for quick and accurate everyday math. Whether you need to add numbers, subtract values, multiply quantities, or divide amounts, this calculator gives instant results without distractions. It is ideal for students, professionals, and anyone who wants a clean, reliable calculator that works on all devices.",
        features: [
            "Instant results for +, -, ×, ÷",
            "Clear, distraction-free interface",
            "Supports decimal values",
            "Responsive for mobile & desktop"
        ],
        faqs: [
            {
                question: "Is this basic calculator free to use?",
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
        name: 'Scientific Calculator',
        description: 'Advanced free scientific calculator online. Handle trigonometry (sin, cos, tan), logarithms, exponents, and complex math problems for students and professionals.',
        category: 'basic',
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
        name: 'Percentage Calculator',
        description: 'Free percentage calculator tool. Quickly calculate percentage changes, percent of numbers, and discounts.',
        category: 'basic',
        icon: Percent,
        component: PercentageCalculator,
        content: PercentageContent,
        popular: true,
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
        name: 'Mortgage Calculator',
        description: 'Estimate your monthly mortgage payments accurately. Calculate principal, interest, taxes, and insurance (PITI) with our free US mortgage calculator tool.',
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
        name: 'Loan Calculator',
        description: 'Calculate monthly loan payments and total interest costs. Perfect for personal loans, student loans, and business loans. Plan your debt repayment strategy.',
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
        name: 'Auto Loan Calculator',
        description: 'Estimate your monthly car payments. Account for trade-in value, down payment, sales tax, and interest rates.',
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
        popular: true,
    },
    {
        id: 'investment',
        name: 'Investment Calculator',
        description: 'Visualize your wealth growth. Calculate compound interest and return on investment (ROI) over time.',
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
        popular: true,
    },
    {
        id: 'retirement',
        name: 'Retirement Calculator',
        description: 'Plan for a secure future. Estimate exactly how much you need to save for retirement based on your goals.',
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
        popular: true,
    },
    {
        id: 'salary',
        name: 'Salary Calculator',
        description: 'Convert your salary instantly. Switch between hourly, daily, weekly, bi-weekly, monthly, and annual income rates.',
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
        faqs: [
            {
                question: "Does this include taxes?",
                answer: "No. This calculator shows gross income only."
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
        name: 'BMI Calculator',
        description: 'Calculate your Body Mass Index (BMI). Accurate BMI Calculator for men, women, and kids with weight categories.',
        category: 'health',
        icon: Activity,
        component: BMICalculator,
        content: BMICalculatorContent,
        longDescription: "BMI (Body Mass Index) is a widely used screening tool for weight categories. This calculator provides a comprehensive assessment of your body weight relative to your height, helping you understand if you fall into the underweight, healthy weight, overweight, or obese range.",
        features: [
            "Metric & Imperial Units",
            "Weight category screening",
            "WHO standard classifications",
            "Instant health insight"
        ],
        faqs: [
            {
                question: "Is BMI accurate?",
                answer: "BMI is a reliable screening tool for most adults, but it does not measure body fat directly."
            },
            {
                question: "Can BMI predict health problems?",
                answer: "BMI indicates risk levels, not specific health conditions. It should be used alongside other health indicators."
            },
            {
                question: "Does BMI change with age?",
                answer: "BMI categories remain the same for adults, but body composition may change with age."
            },
            {
                question: "Is this BMI calculator free?",
                answer: "Yes. It is completely free with no limitations."
            }
        ],
        howTo: {
            name: "How to Use This BMI Calculator",
            description: "Check your BMI in seconds.",
            steps: [
                { name: "Choose Unit", text: "Select Metric (kg/cm) or Imperial (lbs/in)." },
                { name: "Enter Weight", text: "Input your current weight." },
                { name: "Enter Height", text: "Input your height accurately." },
                { name: "View Result", text: "See your BMI value and weight category instantly." }
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
        popular: true,
    },
    {
        id: 'body-fat',
        name: 'Body Fat Calculator',
        description: 'Estimate your body fat percentage without calipers. Use our US Navy method calculator to track your fitness progress.',
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
        popular: true,
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
        content: BMRCalculatorContent,
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
        name: 'Pregnancy Calculator',
        description: 'Calculate your Estimated Due Date (EDD). Enter your last period date to track your pregnancy trimesters.',
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
        content: OvulationCalculatorContent,
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
        name: 'Tip Calculator',
        description: 'Easy tip and split bill calculator. Calculate the precise tip amount and total cost per person.',
        category: 'basic',
        icon: DollarSign,
        component: TipCalculator,
        content: TipCalculatorContent,
        longDescription: "This Tip Calculator helps you calculate the correct tip amount and split the total bill evenly between people. Whether dining out, ordering delivery, or paying for services, this tool gives instant and accurate results without guesswork.",
        features: [
            "Split bills evenly",
            "Fixed or % tip options",
            "Instant total per person",
            "Fair & fast calculations"
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
                question: "Is this calculator free?",
                answer: "Yes. It is completely free with no limits."
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
        id: 'sip',
        name: 'SIP Calculator',
        description: 'Best SIP Calculator 2025. Estimate mutual fund returns with our Systematic Investment Plan calculator. Check monthly investment growth and maturity value.',
        category: 'financial',
        icon: TrendingUp,
        component: SIPCalculator,
        content: SIPCalculatorContent,
        longDescription: "Achieve your financial dreams with disciplined investing. A Systematic Investment Plan (SIP) allows you to invest small amounts regularly in mutual funds. Use this calculator to visualize how small monthly contributions can grow into a significant corpus over time.",
        features: [
            "Monthly investment projection",
            "Expected return estimation",
            "Inflation-adjusted wealth creation",
            "Visual compounding growth chart"
        ],
        faqs: [
            {
                question: "Is this SIP calculator accurate?",
                answer: "It provides realistic estimates based on standard compounding assumptions but actual returns may vary."
            },
            {
                question: "Can SIP returns change over time?",
                answer: "Yes. Mutual fund returns fluctuate with market conditions."
            },
            {
                question: "Is SIP safe?",
                answer: "SIP is a method of investing, not an investment product. Risk depends on the mutual fund chosen."
            },
            {
                question: "Is this calculator free to use?",
                answer: "Yes. It is completely free with no limits."
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
        content: IndiaEMICalculatorContent,
        longDescription: "Planning to take a loan? Whether it's for a home, car, or personal use, knowing your EMI (Equated Monthly Installment) is crucial. This calculator gives you an instant breakdown of your monthly outflow and total interest payable.",
        features: [
            "Home, Car, Personal Loan",
            "Reducing Balance Method",
            "Amortization schedule",
            "Total interest analysis"
        ],
        faqs: [
            {
                question: "Is this EMI calculator accurate for Indian banks?",
                answer: "Yes. It follows standard reducing balance EMI formulas used by Indian banks and NBFCs."
            },
            {
                question: "How does loan tenure affect EMI?",
                answer: "A longer tenure reduces your monthly EMI amount but increases the total interest you pay over the life of the loan."
            },
            {
                question: "Can I use it for any loan type?",
                answer: "Yes, it works for Home Loans, Car Loans, Personal Loans, and Education Loans."
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
        description: 'See the power of compounding. Calculate how your investments grow over time with interest on interest.',
        category: 'financial',
        icon: TrendingUp,
        component: CompoundInterestCalculator,
        content: CompoundInterestCalculatorContent,
        longDescription: "See the power of compounding. Calculate how your investments grow over time with interest on interest. This tool lets you compare different compounding frequencies (daily, monthly, yearly) to see the true power of time.",
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
        id: 'percentage-change',
        name: 'Percentage Change Calculator',
        description: 'Calculate percentage increase or decrease between two values. Determine growth or decline and see the difference instantly.',
        category: 'basic',
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
        name: 'Discount Calculator',
        description: 'Calculate final price after discount and tax. Perfect for shopping sales, double discounts, and finding out exactly how much you save.',
        category: 'basic',
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
];

export const categories: { id: CalculatorCategory; name: string; icon: any }[] = [
    { id: 'basic', name: 'Basic & Math', icon: Calculator },
    { id: 'financial', name: 'Finance', icon: DollarSign },
    { id: 'health', name: 'Health & Fitness', icon: Activity },
    { id: 'india', name: 'India Specific', icon: Landmark },
    { id: 'other', name: 'Other Tools', icon: MoreHorizontal },
];
