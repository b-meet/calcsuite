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

// Content Components
import MortgageContent from './content/MortgageContent';
import BMIContent from './content/BMIContent';
import FinancialContent from './content/FinancialContent';
import HealthContent from './content/HealthContent';
import MathContent from './content/MathContent';
import OtherContent from './content/OtherContent';

export interface CalculatorDef {
    id: string;
    name: string;
    description: string;
    category: CalculatorCategory;
    icon: any;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
    content?: React.ComponentType<any>;
}

export const calculatorRegistry: CalculatorDef[] = [
    {
        id: 'basic-math',
        name: 'Basic Calculator',
        description: 'Free online basic calculator for everyday math. extensive arithmetic tool for addition, subtraction, multiplication, and division with a clean, user-friendly interface.',
        category: 'basic',
        icon: Calculator,
        component: BasicCalculator,
        content: MathContent,
    },
    {
        id: 'scientific',
        name: 'Scientific Calculator',
        description: 'Advanced free scientific calculator online. Handle trigonometry (sin, cos, tan), logarithms, exponents, and complex math problems for students and professionals.',
        category: 'basic',
        icon: Calculator,
        component: ScientificCalculator,
        content: MathContent,
    },
    {
        id: 'triangle',
        name: 'Triangle Calculator',
        description: 'Comprehensive triangle calculator. Instantly solve for area, perimeter, angles, and sides of right, isosceles, and equilateral triangles using geometric formulas.',
        category: 'math',
        icon: Triangle,
        component: TriangleCalculator,
        content: MathContent,
    },
    {
        id: 'fraction',
        name: 'Fraction Calculator',
        description: 'Easy-to-use fraction calculator. Add, subtract, multiply, and divide fractions and mixed numbers. Get instant results and simplify complex fraction problems.',
        category: 'basic',
        icon: Divide,
        component: FractionCalculator,
        content: MathContent,
    },
    {
        id: 'percentage',
        name: 'Percentage Calculator',
        description: 'Free percentage calculator tool. Quickly calculate percentage changes, percent of numbers, and discounts. Essential for finance, shopping, and math homework.',
        category: 'basic',
        icon: Percent,
        component: PercentageCalculator,
        content: MathContent,
    },
    {
        id: 'mortgage',
        name: 'Mortgage Calculator',
        description: 'Estimate your monthly mortgage payments accurately. Calculate principal, interest, taxes, and insurance (PITI) with our free US mortgage calculator tool.',
        category: 'financial',
        icon: DollarSign,
        component: MortgageCalculator,
        content: MortgageContent,
    },
    {
        id: 'loan',
        name: 'Loan Calculator',
        description: 'Calculate monthly loan payments and total interest costs. Perfect for personal loans, student loans, and business loans. Plan your debt repayment strategy.',
        category: 'financial',
        icon: DollarSign,
        component: LoanCalculator,
        content: FinancialContent,
    },
    {
        id: 'auto-loan',
        name: 'Auto Loan Calculator',
        description: 'Estimate your car payments before you buy. Input vehicle price, trade-in value, down payment, and interest rate to see your monthly auto loan cost.',
        category: 'financial',
        icon: Car,
        component: AutoLoanCalculator,
        content: FinancialContent,
    },
    {
        id: 'investment',
        name: 'Investment Calculator',
        description: 'Visualize your wealth growth. Calculate compound interest and return on investment (ROI) over time with regular contributions using our free investment tool.',
        category: 'financial',
        icon: TrendingUp,
        component: InvestmentCalculator,
        content: FinancialContent,
    },
    {
        id: 'retirement',
        name: 'Retirement Calculator',
        description: 'Plan for a secure future. Estimate exactly how much you need to save for retirement based on your age, income, and lifestyle goals. Start planning today.',
        category: 'financial',
        icon: Sunset,
        component: RetirementCalculator,
        content: FinancialContent,
    },
    {
        id: 'salary',
        name: 'Salary Calculator',
        description: 'Convert your salary instantly. Switch between hourly, daily, weekly, bi-weekly, monthly, and annual income rates to understand your true take-home pay.',
        category: 'financial',
        icon: Briefcase,
        component: SalaryCalculator,
        content: FinancialContent,
    },
    {
        id: 'bmi',
        name: 'BMI Calculator',
        description: 'Calculate your Body Mass Index (BMI) instantly. Determine if you are underweight, normal weight, overweight, or obese based on your height and weight.',
        category: 'health',
        icon: Activity,
        component: BMICalculator,
        content: BMIContent,
    },
    {
        id: 'calorie',
        name: 'Calorie Calculator',
        description: 'Find your daily calorie needs. Calculate TDEE and calories required to lose weight, maintain weight, or gain muscle based on your activity level.',
        category: 'health',
        icon: Flame,
        component: CalorieCalculator,
        content: HealthContent,
    },
    {
        id: 'body-fat',
        name: 'Body Fat Calculator',
        description: 'Estimate your body fat percentage without calipers. Use our US Navy method calculator to track your fitness progress and health metrics accurately.',
        category: 'health',
        icon: Ruler,
        component: BodyFatCalculator,
        content: HealthContent,
    },
    {
        id: 'bmr',
        name: 'BMR Calculator',
        description: 'Calculate your Basal Metabolic Rate (BMR). Discover how many calories your body burns at rest to optimize your diet and nutrition plan effectively.',
        category: 'health',
        icon: Flame,
        component: BMRCalculator,
        content: HealthContent,
    },
    {
        id: 'ideal-weight',
        name: 'Ideal Weight Calculator',
        description: 'What is your ideal weight? Find the healthy weight range for your height, gender, and frame size using standard medical formulas like Devine and Robinson.',
        category: 'health',
        icon: Scale,
        component: IdealWeightCalculator,
        content: HealthContent,
    },
    {
        id: 'pregnancy',
        name: 'Pregnancy Calculator',
        description: 'Calculate your Estimated Due Date (EDD). Enter your last period date to track your pregnancy trimesters and significant milestones week by week.',
        category: 'health',
        icon: Baby,
        component: PregnancyCalculator,
        content: HealthContent,
    },
    {
        id: 'age',
        name: 'Age Calculator',
        description: 'Calculate your precise age. Find out exactly how many years, months, days, hours, and minutes you have been alive based on your date of birth.',
        category: 'other',
        icon: Calendar,
        component: AgeCalculator,
        content: OtherContent,
    },
    {
        id: 'gpa',
        name: 'GPA Calculator',
        description: 'Calculate your college or high school GPA. Input your grades and credit hours to determine your semester and cumulative Grade Point Average quickly.',
        category: 'other',
        icon: GraduationCap,
        component: GPACalculator,
        content: OtherContent,
    },
    {
        id: 'password',
        name: 'Password Generator',
        description: 'Create strong, secure passwords instantly. Generate random, uncrackable passwords with custom length and symbols to protect your online accounts.',
        category: 'other',
        icon: Lock,
        component: PasswordGenerator,
        content: OtherContent,
    },
    {
        id: 'converter',
        name: 'Unit Converter',
        description: 'Universal unit converter. Quickly convert length, weight, temperature, and volume measurements between Metric and Imperial systems with precision.',
        category: 'other',
        icon: ArrowLeftRight,
        component: UnitConverter,
        content: OtherContent,
    },
    {
        id: 'random',
        name: 'Random Number Generator',
        description: 'Free random number generator (RNG). Generate truly random integers within your specified range for games, lotteries, or decision making.',
        category: 'other',
        icon: Dices,
        component: RandomNumberGenerator,
        content: OtherContent,
    },
];

export const categories: { id: CalculatorCategory; name: string; icon: any }[] = [
    { id: 'basic', name: 'Basic & Math', icon: Calculator },
    { id: 'financial', name: 'Finance', icon: DollarSign },
    { id: 'health', name: 'Health & Fitness', icon: Activity },
    { id: 'other', name: 'Other Tools', icon: MoreHorizontal },
];
