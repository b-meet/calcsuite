import { useState, useEffect } from 'react';
import { Activity, Scale, Ruler } from 'lucide-react';

export default function BMICalculator() {
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
    const [weight, setWeight] = useState<string>('70'); // kg
    const [height, setHeight] = useState<string>('175'); // cm
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState('');

    useEffect(() => {
        calculateBMI();
    }, [weight, height, unit]);

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (!w || !h || w <= 0 || h <= 0) {
            setBmi(0);
            setCategory('');
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
            </div>
        </div>
    );
}
