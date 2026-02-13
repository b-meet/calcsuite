import { useState, useEffect } from 'react';
import { Activity, Scale, Ruler, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function BMICalculator() {
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
    const [weight, setWeight] = useState<string>('70'); // kg
    const [height, setHeight] = useState<string>('175'); // cm
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState('');
    const [age, setAge] = useState<string>('30');
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [activity, setActivity] = useState<number>(1.2);
    const [bmr, setBmr] = useState(0);
    const [tdee, setTdee] = useState(0);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('bmi');

    useEffect(() => {
        calculateBMI();
    }, [weight, height, unit, age, gender, activity]);

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (!w || !h || w <= 0 || h <= 0) {
            setBmi(0);
            setCategory('');
            setBmr(0);
            setTdee(0);
            return;
        }

        let calculatedBmi = 0;
        if (unit === 'metric') {
            const heightInMeters = h / 100;
            calculatedBmi = w / (heightInMeters * heightInMeters);
        } else {
            calculatedBmi = (w / (h * h)) * 703;
        }

        setBmi(calculatedBmi);
        determineCategory(calculatedBmi);

        // BMR Calculation (Mifflin-St Jeor)
        let weightKg = w;
        let heightCm = h;

        if (unit === 'imperial') {
            weightKg = w * 0.453592;
            heightCm = h * 2.54;
        }

        const a = parseFloat(age) || 30; // Default to 30 if invalid

        let calculatedBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * a) + 5;
        if (gender === 'female') {
            calculatedBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * a) - 161;
        }

        setBmr(Math.round(calculatedBmr));
        setTdee(Math.round(calculatedBmr * activity));
    };

    const determineCategory = (bmiVal: number) => {
        if (bmiVal === 0) {
            setCategory('');
            return;
        }
        if (bmiVal < 18.5) setCategory('Underweight');
        else if (bmiVal < 25) setCategory('Normal weight');
        else if (bmiVal < 30) setCategory('Overweight');
        else setCategory('Obese');
    };

    const handleSave = () => {
        if (bmi > 0) {
            addHistory(
                { unit, weight, height },
                bmi.toFixed(1),
                `${weight}${unit === 'metric' ? 'kg' : 'lb'}, ${height}${unit === 'metric' ? 'cm' : 'in'}`
            );
        }
    };

    const handleHistorySelect = (item: any) => {
        setUnit(item.inputs.unit);
        setWeight(item.inputs.weight);
        setHeight(item.inputs.height);
    };

    const getCategoryColor = () => {
        if (category === 'Normal weight') return 'text-green-600';
        if (category === 'Overweight') return 'text-yellow-600';
        if (category === 'Obese') return 'text-red-600';
        return 'text-blue-600';
    };

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit mb-6">
                    <button
                        onClick={() => setUnit('metric')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${unit === 'metric' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                        Metric (kg/cm)
                    </button>
                    <button
                        onClick={() => setUnit('imperial')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${unit === 'imperial' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                        Imperial (lb/in)
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Scale className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                            </div>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Height ({unit === 'metric' ? 'cm' : 'in'})</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Ruler className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                            </div>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                    <div className={`p-4 rounded-full ${category === 'Normal weight' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'} transition-colors duration-500`}>
                        <Activity size={32} />
                    </div>
                </div>

                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-1">Your BMI</h3>
                <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                    {bmi.toFixed(1)}
                </div>
                <div className={`text-xl font-semibold ${getCategoryColor()} transition-colors`}>
                    {category}
                </div>

                <p className="mt-6 text-sm text-slate-400 dark:text-slate-500 max-w-xs">
                    Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
                </p>

                <button
                    onClick={handleSave}
                    className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center gap-2"
                >
                    <TrendingUp size={18} />
                    Save to History
                </button>
            </div>

            <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 rounded-3xl p-8 mt-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Next Steps: Your Daily Calorie Needs</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Based on Mifflin-St Jeor Equation</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Inputs */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Gender</label>
                                <div className="flex gap-2 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <button
                                        onClick={() => setGender('male')}
                                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${gender === 'male' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' : 'text-slate-500 hover:text-indigo-600'}`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        onClick={() => setGender('female')}
                                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${gender === 'female' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' : 'text-slate-500 hover:text-indigo-600'}`}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Activity Level</label>
                                <select
                                    value={activity}
                                    onChange={(e) => setActivity(Number(e.target.value))}
                                    className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 text-slate-700 dark:text-slate-300"
                                >
                                    <option value={1.2}>Sedentary (Little/no exercise)</option>
                                    <option value={1.375}>Lightly Active (1-3 days/week)</option>
                                    <option value={1.55}>Moderately Active (3-5 days/week)</option>
                                    <option value={1.725}>Very Active (6-7 days/week)</option>
                                    <option value={1.9}>Super Active (Physical job)</option>
                                </select>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">BMR (Basal Metabolic Rate)</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">{bmr.toLocaleString()}</span>
                                    <span className="text-sm text-slate-500">kcal/day</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-2">Calories burned at complete rest.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-indigo-500 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Activity size={48} />
                                </div>
                                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-1 uppercase tracking-wider">TDEE (Maintenance)</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-indigo-700 dark:text-white">{tdee.toLocaleString()}</span>
                                    <span className="text-sm text-indigo-600 dark:text-indigo-300">kcal/day</span>
                                </div>
                                <p className="text-xs text-indigo-600/80 dark:text-indigo-300/60 mt-2">Calories needed to maintain current weight.</p>
                            </div>
                            <div className="sm:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl text-center text-sm text-slate-600 dark:text-slate-400">
                                💡 To lose weight, aim for <strong>{(tdee - 500).toLocaleString()} kcal/day</strong> (0.5kg/week loss).
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2">
                <CalculationHistory
                    history={history}
                    onSelect={handleHistorySelect}
                    onClear={clearHistory}
                    onRemove={removeHistoryItem}
                />
            </div>
        </div>
    );
}
