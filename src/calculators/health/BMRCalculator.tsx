import { type ComponentType, useEffect, useMemo, useRef, useState } from 'react';
import { Activity, Check, ChevronDown, Flame, Ruler, Scale, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { healthBoilerplateNoSnippetProps } from '../../constants/searchSnippet';
import {
    ACTIVITY_LEVELS,
    calculateBmr,
    feetInchesToCentimeters,
    poundsToKilograms,
    type Gender,
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
        : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20 dark:border-slate-700'}`;
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

function GenderToggle({ gender, onChange }: { gender: Gender; onChange: (gender: Gender) => void }) {
    return (
        <div className="flex rounded-2xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
                type="button"
                onClick={() => onChange('male')}
                className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-colors ${gender === 'male'
                    ? 'bg-white text-orange-600 shadow-sm dark:bg-slate-700 dark:text-orange-400'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
                Male
            </button>
            <button
                type="button"
                onClick={() => onChange('female')}
                className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-colors ${gender === 'female'
                    ? 'bg-white text-orange-600 shadow-sm dark:bg-slate-700 dark:text-orange-400'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
                Female
            </button>
        </div>
    );
}

function ActivityPicker({
    value,
    onChange,
    error,
}: {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const selected = ACTIVITY_LEVELS.find((item) => String(item.value) === value) ?? ACTIVITY_LEVELS[0];

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`${getInputClass(Boolean(error))} min-h-[3.5rem] pl-4 pr-12 text-left`}
            >
                <div className="truncate text-base font-semibold text-slate-900 dark:text-white">
                    {selected.label}
                </div>
                <div className="truncate text-sm text-slate-500 dark:text-slate-400">
                    {selected.description}
                </div>
                <ChevronDown
                    className={`absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {open && (
                <div
                    role="listbox"
                    aria-label="Activity level"
                    className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                >
                    <div className="grid gap-1">
                        {ACTIVITY_LEVELS.map((item) => {
                            const isSelected = String(item.value) === value;

                            return (
                                <button
                                    key={item.value}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => {
                                        onChange(String(item.value));
                                        setOpen(false);
                                    }}
                                    className={`flex items-start justify-between rounded-xl px-4 py-3 text-left transition-colors ${isSelected
                                        ? 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                                >
                                    <span>
                                        <span className="block font-semibold text-slate-900 dark:text-white">{item.label}</span>
                                        <span className="block text-sm text-slate-500 dark:text-slate-400">{item.description}</span>
                                    </span>
                                    {isSelected && <Check className="mt-0.5 h-4 w-4 shrink-0" />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
        </div>
    );
}

export default function BMRCalculator() {
    const [unit, setUnit] = useState<UnitSystem>('metric');
    const [gender, setGender] = useState<Gender>('male');
    const [age, setAge] = useState('30');
    const [activity, setActivity] = useState('1.55');
    const [metricHeight, setMetricHeight] = useState('175');
    const [metricWeight, setMetricWeight] = useState('70');
    const [imperialWeight, setImperialWeight] = useState('154');
    const [feet, setFeet] = useState('5');
    const [inches, setInches] = useState('9');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('bmr');

    const validation = useMemo(() => {
        const errors: Record<string, string> = {};
        const ageValue = Number(age);
        const activityValue = Number(activity);

        if (!age.trim()) {
            errors.age = 'Enter age in years.';
        } else if (!Number.isFinite(ageValue) || ageValue <= 0) {
            errors.age = 'Age must be greater than 0.';
        }

        if (!Number.isFinite(activityValue) || activityValue <= 0) {
            errors.activity = 'Choose an activity level.';
        }

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
                values: Object.keys(errors).length === 0
                    ? { age: ageValue, activity: activityValue, weightKg, heightCm }
                    : null,
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
                    age: ageValue,
                    activity: activityValue,
                    weightKg: poundsToKilograms(weightLbs),
                    heightCm,
                }
                : null,
        };
    }, [activity, age, feet, imperialWeight, inches, metricHeight, metricWeight, unit]);

    const result = useMemo(() => {
        if (!validation.values) {
            return null;
        }

        const bmr = calculateBmr({
            gender,
            age: validation.values.age,
            heightCm: validation.values.heightCm,
            weightKg: validation.values.weightKg,
        });

        const maintenance = bmr * validation.values.activity;

        return {
            bmr,
            maintenance,
            mildCut: maintenance - 500,
            mildGain: maintenance + 300,
            heightCm: validation.values.heightCm,
            weightKg: validation.values.weightKg,
        };
    }, [gender, validation.values]);

    const activityOption = ACTIVITY_LEVELS.find((item) => item.value === Number(activity));

    const handleSave = () => {
        if (!result) {
            return;
        }

        addHistory(
            {
                unit,
                gender,
                age,
                activity,
                metricHeight,
                metricWeight,
                imperialWeight,
                feet,
                inches,
            },
            `${Math.round(result.bmr)} kcal/day`,
            `${gender === 'male' ? 'Male' : 'Female'}, ${Math.round(result.maintenance)} maintenance`
        );
    };

    const handleHistorySelect = (item: any) => {
        setUnit(item.inputs.unit);
        setGender(item.inputs.gender);
        setAge(item.inputs.age);
        setActivity(item.inputs.activity);
        setMetricHeight(item.inputs.metricHeight);
        setMetricWeight(item.inputs.metricWeight);
        setImperialWeight(item.inputs.imperialWeight);
        setFeet(item.inputs.feet);
        setInches(item.inputs.inches);
    };

    const measurementSummary = unit === 'metric'
        ? `${metricWeight || '--'} kg and ${metricHeight || '--'} cm`
        : `${imperialWeight || '--'} lb and ${feet || '0'} ft ${inches || '0'} in`;

    return (
        <div className="mx-auto max-w-5xl space-y-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
                <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="m-0 text-xl font-bold text-slate-900 dark:text-white">BMR Inputs</h2>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Use metric or imperial inputs and get calorie estimates instantly.</p>
                        </div>
                        <UnitToggle unit={unit} onChange={setUnit} />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Sex</label>
                            <GenderToggle gender={gender} onChange={setGender} />
                        </div>
                        <InputField
                            label="Age"
                            icon={Activity}
                            value={age}
                            onChange={setAge}
                            placeholder="30"
                            suffix="yr"
                            error={validation.errors.age}
                        />
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Activity level</label>
                            <ActivityPicker
                                value={activity}
                                onChange={setActivity}
                                error={validation.errors.activity}
                            />
                        </div>
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {unit === 'metric' ? (
                            <>
                                <InputField
                                    label="Height"
                                    icon={Ruler}
                                    value={metricHeight}
                                    onChange={setMetricHeight}
                                    placeholder="175"
                                    suffix="cm"
                                    error={validation.errors.metricHeight}
                                    className="sm:col-span-1"
                                />
                                <InputField
                                    label="Weight"
                                    icon={Scale}
                                    value={metricWeight}
                                    onChange={setMetricWeight}
                                    placeholder="70"
                                    suffix="kg"
                                    error={validation.errors.metricWeight}
                                    className="sm:col-span-1"
                                />
                            </>
                        ) : (
                            <>
                                <InputField
                                    label="Weight"
                                    icon={Scale}
                                    value={imperialWeight}
                                    onChange={setImperialWeight}
                                    placeholder="154"
                                    suffix="lb"
                                    error={validation.errors.imperialWeight}
                                    className="sm:col-span-2 lg:col-span-1"
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
                            </>
                        )}
                    </div>
                </section>

                <aside aria-live="polite" className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm dark:border-orange-900/30 dark:bg-slate-900">
                    <div className="mb-4 inline-flex rounded-2xl bg-orange-50 p-4 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                        <Flame size={28} />
                    </div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Basal Metabolic Rate</p>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white">
                        {result ? Math.round(result.bmr).toLocaleString() : '--'}
                        <span className="ml-2 text-lg font-medium text-slate-500 dark:text-slate-400">kcal/day</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                        Maintenance calories: <span className="font-semibold text-slate-900 dark:text-white">{result ? Math.round(result.maintenance).toLocaleString() : '--'} kcal/day</span>
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                            <div className="font-semibold text-slate-900 dark:text-white">Mild cut</div>
                            <div className="mt-1 text-slate-600 dark:text-slate-300">{result ? Math.round(result.mildCut).toLocaleString() : '--'} kcal</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                            <div className="font-semibold text-slate-900 dark:text-white">Lean gain</div>
                            <div className="mt-1 text-slate-600 dark:text-slate-300">{result ? Math.round(result.mildGain).toLocaleString() : '--'} kcal</div>
                        </div>
                    </div>
                    <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400" {...healthBoilerplateNoSnippetProps}>
                        BMR and maintenance calories are estimates based on the Mifflin-St Jeor equation. Real-world needs vary with body composition, hormones, and training load.
                    </p>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={!result}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-bold text-white transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <TrendingUp size={18} />
                        Save to History
                    </button>
                </aside>
            </div>

            <section className="grid gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                        <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white">Calculation Summary</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Accessible table of the inputs and BMR outputs shown above.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <caption className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-400">BMR inputs, equation, and calorie outputs.</caption>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <th scope="row" className="w-48 px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Unit system</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{unit === 'metric' ? 'Metric (kg, cm)' : 'Imperial (lb, ft, in)'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Sex</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{gender === 'male' ? 'Male' : 'Female'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Age</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{age || 'Not set'} years</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Measurements</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{measurementSummary}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Selected activity</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{activityOption ? `${activityOption.label} (${activityOption.value})` : 'Not set'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Equation</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Mifflin-St Jeor</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">BMR</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{result ? `${Math.round(result.bmr).toLocaleString()} kcal/day` : 'Waiting for valid inputs'}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Maintenance</th>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{result ? `${Math.round(result.maintenance).toLocaleString()} kcal/day` : 'Waiting for valid inputs'}</td>
                                </tr>
                                {result && (
                                    <tr>
                                        <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">Metric reference</th>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{result.weightKg.toFixed(1)} kg at {result.heightCm.toFixed(1)} cm</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                        <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white">Activity Multipliers</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">The calculator multiplies BMR by one of these factors to estimate maintenance calories.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <caption className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-400">Activity factor reference table for BMR maintenance calories.</caption>
                            <thead className="bg-slate-50 dark:bg-slate-800/70">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Activity</th>
                                    <th scope="col" className="px-6 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Factor</th>
                                    <th scope="col" className="px-6 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {ACTIVITY_LEVELS.map((item) => (
                                    <tr key={item.value} className={Number(activity) === item.value ? 'bg-orange-50/70 dark:bg-orange-900/10' : undefined}>
                                        <th scope="row" className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200">{item.label}</th>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{item.value}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{item.description}</td>
                                    </tr>
                                ))}
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
