import { type ComponentType, useMemo, useState } from 'react';
import { Activity, Scale, Ruler, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { healthBoilerplateNoSnippetProps } from '../../constants/searchSnippet';
import {
    BMI_CATEGORIES,
    calculateBmi,
    calculateHealthyWeightRange,
    feetInchesToCentimeters,
    getBmiCategory,
    kilogramsToPounds,
    poundsToKilograms,
    type UnitSystem,
} from '../../utils/healthMetrics';

interface InputFieldProps {
    label: string;
    icon: ComponentType<{ className?: string }>;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    suffix?: string;
    error?: string;
    className?: string;
}

function getInputClass(hasError: boolean) {
    return `block w-full rounded-2xl border bg-slate-50 py-3 pl-10 pr-12 text-slate-900 transition-all hover:bg-white focus:ring-2 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 ${hasError
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-500/70 dark:focus:ring-red-500/20'
        : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-slate-700'}`;
}

function InputField({
    label,
    icon: Icon,
    value,
    onChange,
    placeholder,
    suffix,
    error,
    className,
}: InputFieldProps) {
    return (
        <div className={className}>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Icon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                </div>
                <input
                    type="number"
                    min="0"
                    inputMode="decimal"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={placeholder}
                    className={getInputClass(Boolean(error))}
                />
                {suffix && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-slate-500 dark:text-slate-400">
                        {suffix}
                    </div>
                )}
            </div>
            {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
        </div>
    );
}

function UnitToggle({ unit, onChange }: { unit: UnitSystem; onChange: (unit: UnitSystem) => void }) {
    return (
        <div className="inline-flex rounded-2xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
                type="button"
                onClick={() => onChange('metric')}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${unit === 'metric'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
                Metric
            </button>
            <button
                type="button"
                onClick={() => onChange('imperial')}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${unit === 'imperial'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
                Imperial
            </button>
        </div>
    );
}

export default function BMICalculator() {
    const [unit, setUnit] = useState<UnitSystem>('metric');
    const [metricWeight, setMetricWeight] = useState('70');
    const [metricHeight, setMetricHeight] = useState('175');
    const [imperialWeight, setImperialWeight] = useState('154');
    const [feet, setFeet] = useState('5');
    const [inches, setInches] = useState('9');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('bmi');

    const validation = useMemo(() => {
        const errors: Record<string, string> = {};

        if (unit === 'metric') {
            const weightKg = Number(metricWeight);
            const heightCm = Number(metricHeight);

            if (!metricWeight.trim()) {
                errors.metricWeight = 'Enter weight in kilograms.';
            } else if (!Number.isFinite(weightKg) || weightKg <= 0) {
                errors.metricWeight = 'Weight must be greater than 0.';
            }

            if (!metricHeight.trim()) {
                errors.metricHeight = 'Enter height in centimeters.';
            } else if (!Number.isFinite(heightCm) || heightCm <= 0) {
                errors.metricHeight = 'Height must be greater than 0.';
            }

            return {
                errors,
                values: Object.keys(errors).length === 0 ? { weightKg, heightCm } : null,
            };
        }

        const weightLbs = Number(imperialWeight);
        const heightFeet = Number(feet);
        const heightInches = Number(inches || '0');

        if (!imperialWeight.trim()) {
            errors.imperialWeight = 'Enter weight in pounds.';
        } else if (!Number.isFinite(weightLbs) || weightLbs <= 0) {
            errors.imperialWeight = 'Weight must be greater than 0.';
        }

        if (!feet.trim()) {
            errors.feet = 'Enter feet.';
        } else if (!Number.isFinite(heightFeet) || heightFeet < 0) {
            errors.feet = 'Feet cannot be negative.';
        }

        if (!Number.isFinite(heightInches) || heightInches < 0) {
            errors.inches = 'Inches cannot be negative.';
        } else if (heightInches >= 12) {
            errors.inches = 'Use inches from 0 to 11.9.';
        }

        const heightCm = feetInchesToCentimeters(heightFeet || 0, heightInches || 0);
        if (Object.keys(errors).length === 0 && heightCm <= 0) {
            errors.feet = 'Enter a valid height.';
        }

        return {
            errors,
            values: Object.keys(errors).length === 0
                ? {
                    weightKg: poundsToKilograms(weightLbs),
                    heightCm,
                }
                : null,
        };
    }, [feet, imperialWeight, inches, metricHeight, metricWeight, unit]);

    const result = useMemo(() => {
        if (!validation.values) {
            return null;
        }

        const bmi = calculateBmi(validation.values.weightKg, validation.values.heightCm);
        if (bmi === null) {
            return null;
        }

        const category = getBmiCategory(bmi);
        const healthyRange = calculateHealthyWeightRange(validation.values.heightCm);

        return {
            bmi,
            category,
            healthyRange,
            weightKg: validation.values.weightKg,
            heightCm: validation.values.heightCm,
        };
    }, [validation.values]);

    const handleSave = () => {
        if (!result || !result.category) {
            return;
        }

        addHistory(
            {
                unit,
                metricWeight,
                metricHeight,
                imperialWeight,
                feet,
                inches,
            },
            `${result.bmi.toFixed(1)} BMI`,
            `${result.category.label} at ${result.bmi.toFixed(1)}`
        );
    };

    const handleHistorySelect = (item: any) => {
        setUnit(item.inputs.unit);
        setMetricWeight(item.inputs.metricWeight);
        setMetricHeight(item.inputs.metricHeight);
        setImperialWeight(item.inputs.imperialWeight);
        setFeet(item.inputs.feet);
        setInches(item.inputs.inches);
    };

    const healthyWeightLabel = result
        ? unit === 'metric'
            ? `${result.healthyRange.minKg.toFixed(1)} to ${result.healthyRange.maxKg.toFixed(1)} kg`
            : `${result.healthyRange.minLbs.toFixed(1)} to ${result.healthyRange.maxLbs.toFixed(1)} lb`
        : 'Enter valid height and weight to see your healthy range.';

    const inputSummary = result
        ? unit === 'metric'
            ? `${metricWeight} kg and ${metricHeight} cm`
            : `${imperialWeight} lb and ${feet} ft ${inches || '0'} in`
        : 'Not available';

    return (
        <div className="mx-auto max-w-5xl space-y-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
                <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="m-0 text-xl font-bold text-slate-900 dark:text-white">BMI Inputs</h2>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Switch between metric and imperial measurements without leaving the page.</p>
                        </div>
                        <UnitToggle unit={unit} onChange={setUnit} />
                    </div>

                    {unit === 'metric' ? (
                        <div className="grid gap-5 sm:grid-cols-2">
                            <InputField
                                label="Weight"
                                icon={Scale}
                                value={metricWeight}
                                onChange={setMetricWeight}
                                placeholder="70"
                                suffix="kg"
                                error={validation.errors.metricWeight}
                            />
                            <InputField
                                label="Height"
                                icon={Ruler}
                                value={metricHeight}
                                onChange={setMetricHeight}
                                placeholder="175"
                                suffix="cm"
                                error={validation.errors.metricHeight}
                            />
                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-3">
                            <InputField
                                className="sm:col-span-3"
                                label="Weight"
                                icon={Scale}
                                value={imperialWeight}
                                onChange={setImperialWeight}
                                placeholder="154"
                                suffix="lb"
                                error={validation.errors.imperialWeight}
                            />
                            <InputField
                                label="Height"
                                icon={Ruler}
                                value={feet}
                                onChange={setFeet}
                                placeholder="5"
                                suffix="ft"
                                error={validation.errors.feet}
                            />
                            <InputField
                                label="Inches"
                                icon={Ruler}
                                value={inches}
                                onChange={setInches}
                                placeholder="9"
                                suffix="in"
                                error={validation.errors.inches}
                            />
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                                Enter feet and inches separately for a cleaner imperial height input on mobile.
                            </div>
                        </div>
                    )}
                </section>

                <aside aria-live="polite" className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <Activity size={28} />
                    </div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">BMI Result</p>
                    <div className="text-5xl font-bold text-slate-900 dark:text-white">
                        {result ? result.bmi.toFixed(1) : '--'}
                    </div>
                    <p className={`mt-2 text-lg font-semibold ${result?.category?.accent ?? 'text-slate-500 dark:text-slate-400'}`}>
                        {result?.category?.label ?? 'Waiting for valid inputs'}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Healthy weight range: <span className="font-semibold text-slate-900 dark:text-white">{healthyWeightLabel}</span>
                    </p>
                    <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400" {...healthBoilerplateNoSnippetProps}>
                        BMI is a screening tool for adults. It does not directly measure body fat or replace clinical assessment.
                    </p>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={!result}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <TrendingUp size={18} />
                        Save to History
                    </button>
                </aside>
            </div>

            <section className="grid gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                        <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white">BMI Categories</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Standard adult BMI categories used in the calculator.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <caption className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-400">BMI category thresholds and descriptions.</caption>
                            <thead className="bg-slate-50 dark:bg-slate-800/70">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Category</th>
                                    <th scope="col" className="px-6 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Range</th>
                                    <th scope="col" className="px-6 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Meaning</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {BMI_CATEGORIES.map((item) => (
                                    <tr key={item.label}>
                                        <th scope="row" className={`px-6 py-4 text-left font-semibold ${item.accent}`}>{item.label}</th>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {item.max === null ? `${item.min.toFixed(1)} and above` : `${item.min.toFixed(1)} to ${(item.max - 0.1).toFixed(1)}`}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                        <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white">Calculation Summary</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Accessible summary of the measurements and outputs shown above.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <caption className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-400">BMI input values, healthy weight range, and category.</caption>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <th scope="row" className="w-48 px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Unit system</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{unit === 'metric' ? 'Metric (kg, cm)' : 'Imperial (lb, ft, in)'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Measurements</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{inputSummary}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">BMI</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{result ? result.bmi.toFixed(1) : 'Waiting for valid inputs'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Category</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{result?.category?.label ?? 'Waiting for valid inputs'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Healthy weight range</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{healthyWeightLabel}</td>
                                </tr>
                                {result && (
                                    <tr>
                                        <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Metric reference</th>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {result.weightKg.toFixed(1)} kg at {result.heightCm.toFixed(1)} cm
                                            {unit === 'imperial' && ` (${kilogramsToPounds(result.weightKg).toFixed(1)} lb)`}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
