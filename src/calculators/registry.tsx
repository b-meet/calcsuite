import { Calculator, DollarSign, Activity, Calendar, Lock, ArrowLeftRight, MoreHorizontal, Divide, Percent, Dices, Scale, Flame, Ruler, TrendingUp, Briefcase, Car, Sunset, GraduationCap, Baby, Triangle } from 'lucide-react';
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

export type CalculatorCategory = 'basic' | 'financial' | 'health' | 'math' | 'other';

export interface CalculatorDef {
    id: string;
    name: string;
    description: string;
    category: CalculatorCategory;
    icon: any;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const calculatorRegistry: CalculatorDef[] = [
    {
        id: 'basic-math',
        name: 'Basic Calculator',
        description: 'Perform standard arithmetic operations including addition, subtraction, multiplication, and division.',
        category: 'basic',
        icon: Calculator,
        component: BasicCalculator,
    },
    {
        id: 'scientific',
        name: 'Scientific Calculator',
        description: 'Advanced calculator with trigonometric, logarithmic, and exponential functions.',
        category: 'basic',
        icon: Calculator,
        component: ScientificCalculator,
    },
    {
        id: 'triangle',
        name: 'Triangle Calculator',
        description: 'Solve for missing sides, angles, area, and perimeter of a triangle.',
        category: 'math',
        icon: Triangle,
        component: TriangleCalculator,
    },
    {
        id: 'fraction',
        name: 'Fraction Calculator',
        description: 'Add, subtract, multiply, and divide fractions easily.',
        category: 'basic',
        icon: Divide,
        component: FractionCalculator,
    },
    {
        id: 'percentage',
        name: 'Percentage Calculator',
        description: 'Calculate percentages, percent change, and percent of values.',
        category: 'basic',
        icon: Percent,
        component: PercentageCalculator,
    },
    {
        id: 'mortgage',
        name: 'Mortgage Calculator',
        description: 'Calculate your monthly mortgage payments based on loan amount, interest rate, and term.',
        category: 'financial',
        icon: DollarSign,
        component: MortgageCalculator,
    },
    {
        id: 'loan',
        name: 'Loan Calculator',
        description: 'Determine your monthly payments and total interest for any loan.',
        category: 'financial',
        icon: DollarSign,
        component: LoanCalculator,
    },
    {
        id: 'auto-loan',
        name: 'Auto Loan Calculator',
        description: 'Calculate monthly car payments with trade-in value, taxes, and down payment.',
        category: 'financial',
        icon: Car,
        component: AutoLoanCalculator,
    },
    {
        id: 'investment',
        name: 'Investment Calculator',
        description: 'Plan your investment growth with compound interest and regular contributions.',
        category: 'financial',
        icon: TrendingUp,
        component: InvestmentCalculator,
    },
    {
        id: 'retirement',
        name: 'Retirement Calculator',
        description: 'Estimate how much you need to save for retirement and your potential growth.',
        category: 'financial',
        icon: Sunset,
        component: RetirementCalculator,
    },
    {
        id: 'salary',
        name: 'Salary Calculator',
        description: 'Convert your salary between hourly, weekly, monthly, and yearly rates.',
        category: 'financial',
        icon: Briefcase,
        component: SalaryCalculator,
    },
    {
        id: 'bmi',
        name: 'BMI Calculator',
        description: 'Calculate your Body Mass Index (BMI) to check if you are at a healthy weight.',
        category: 'health',
        icon: Activity,
        component: BMICalculator,
    },
    {
        id: 'calorie',
        name: 'Calorie Calculator',
        description: 'Estimate the number of calories you need to consume daily to maintain, lose, or gain weight.',
        category: 'health',
        icon: Flame,
        component: CalorieCalculator,
    },
    {
        id: 'body-fat',
        name: 'Body Fat Calculator',
        description: 'Estimate your body fat percentage based on your body measurements.',
        category: 'health',
        icon: Ruler,
        component: BodyFatCalculator,
    },
    {
        id: 'bmr',
        name: 'BMR Calculator',
        description: 'Calculate your Basal Metabolic Rate to know how many calories you burn at rest.',
        category: 'health',
        icon: Flame,
        component: BMRCalculator,
    },
    {
        id: 'ideal-weight',
        name: 'Ideal Weight Calculator',
        description: 'Determine your ideal weight range based on height and gender.',
        category: 'health',
        icon: Scale,
        component: IdealWeightCalculator,
    },
    {
        id: 'pregnancy',
        name: 'Pregnancy Calculator',
        description: 'Estimate your due date based on your last menstrual period.',
        category: 'health',
        icon: Baby,
        component: PregnancyCalculator,
    },
    {
        id: 'age',
        name: 'Age Calculator',
        description: 'Calculate your exact age in years, months, and days based on your date of birth.',
        category: 'other',
        icon: Calendar,
        component: AgeCalculator,
    },
    {
        id: 'gpa',
        name: 'GPA Calculator',
        description: 'Calculate your semester and cumulative GPA with ease.',
        category: 'other',
        icon: GraduationCap,
        component: GPACalculator,
    },
    {
        id: 'password',
        name: 'Password Generator',
        description: 'Generate strong, secure passwords with customizable length and character types.',
        category: 'other',
        icon: Lock,
        component: PasswordGenerator,
    },
    {
        id: 'converter',
        name: 'Unit Converter',
        description: 'Convert between common units of measurement for length, weight, and temperature.',
        category: 'other',
        icon: ArrowLeftRight,
        component: UnitConverter,
    },
    {
        id: 'random',
        name: 'Random Number Generator',
        description: 'Generate random numbers within a specific range.',
        category: 'other',
        icon: Dices,
        component: RandomNumberGenerator,
    },
];

export const categories: { id: CalculatorCategory; name: string; icon: any }[] = [
    { id: 'basic', name: 'Basic & Math', icon: Calculator },
    { id: 'financial', name: 'Finance', icon: DollarSign },
    { id: 'health', name: 'Health & Fitness', icon: Activity },
    { id: 'other', name: 'Other Tools', icon: MoreHorizontal },
];
