export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';

export interface BmiCategory {
    label: string;
    min: number;
    max: number | null;
    description: string;
    accent: string;
}

export interface ActivityLevel {
    value: number;
    label: string;
    description: string;
}

export const BMI_CATEGORIES: BmiCategory[] = [
    {
        label: 'Underweight',
        min: 0,
        max: 18.5,
        description: 'Below the standard healthy BMI range.',
        accent: 'text-sky-600 dark:text-sky-400',
    },
    {
        label: 'Normal weight',
        min: 18.5,
        max: 25,
        description: 'Within the standard healthy BMI range.',
        accent: 'text-green-600 dark:text-green-400',
    },
    {
        label: 'Overweight',
        min: 25,
        max: 30,
        description: 'Above the standard healthy BMI range.',
        accent: 'text-amber-600 dark:text-amber-400',
    },
    {
        label: 'Obesity',
        min: 30,
        max: null,
        description: 'Significantly above the standard healthy BMI range.',
        accent: 'text-red-600 dark:text-red-400',
    },
];

export const ACTIVITY_LEVELS: ActivityLevel[] = [
    { value: 1.2, label: 'Sedentary', description: 'Little or no exercise' },
    { value: 1.375, label: 'Lightly active', description: 'Light exercise 1 to 3 days per week' },
    { value: 1.55, label: 'Moderately active', description: 'Moderate exercise 3 to 5 days per week' },
    { value: 1.725, label: 'Very active', description: 'Hard exercise 6 to 7 days per week' },
    { value: 1.9, label: 'Extra active', description: 'Physical job or twice-daily training' },
];

export function poundsToKilograms(pounds: number) {
    return pounds * 0.45359237;
}

export function kilogramsToPounds(kilograms: number) {
    return kilograms * 2.2046226218;
}

export function feetInchesToCentimeters(feet: number, inches: number) {
    return ((feet * 12) + inches) * 2.54;
}

export function centimetersToFeetInches(centimeters: number) {
    const totalInches = centimeters / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches - (feet * 12);

    return { feet, inches };
}

export function calculateBmi(weightKg: number, heightCm: number) {
    const heightM = heightCm / 100;

    if (weightKg <= 0 || heightM <= 0) {
        return null;
    }

    return weightKg / (heightM * heightM);
}

export function getBmiCategory(bmi: number) {
    return BMI_CATEGORIES.find((category) => bmi >= category.min && (category.max === null || bmi < category.max)) ?? null;
}

export function calculateHealthyWeightRange(heightCm: number) {
    const heightM = heightCm / 100;
    const minKg = 18.5 * heightM * heightM;
    const maxKg = 24.9 * heightM * heightM;

    return {
        minKg,
        maxKg,
        minLbs: kilogramsToPounds(minKg),
        maxLbs: kilogramsToPounds(maxKg),
    };
}

export function calculateBmr({
    gender,
    age,
    heightCm,
    weightKg,
}: {
    gender: Gender;
    age: number;
    heightCm: number;
    weightKg: number;
}) {
    const base = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    return gender === 'male' ? base + 5 : base - 161;
}
