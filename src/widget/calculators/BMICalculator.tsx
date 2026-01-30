
import { useState, useEffect } from 'react';
import { Scale, Ruler } from 'lucide-react';

export default function BMICalculator() {
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
    const [weight, setWeight] = useState(70); // kg
    const [height, setHeight] = useState(175); // cm
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState('');

    useEffect(() => {
        calculateBMI();
    }, [weight, height, unit]);

    const calculateBMI = () => {
        let calculatedBmi = 0;
        if (unit === 'metric') {
            const heightInMeters = height / 100;
            if (heightInMeters > 0) {
                calculatedBmi = weight / (heightInMeters * heightInMeters);
            }
        } else {
            let h = height;
            let w = weight;
            // Imperial: weight in lbs, height in inches
            if (h > 0) {
                calculatedBmi = (w / (h * h)) * 703;
            }
        }
        setBmi(calculatedBmi);
        determineCategory(calculatedBmi);
    };

    const determineCategory = (bmiVal: number) => {
        if (!bmiVal || isNaN(bmiVal)) {
            setCategory('');
            return;
        }
        if (bmiVal < 18.5) setCategory('Underweight');
        else if (bmiVal < 25) setCategory('Normal weight');
        else if (bmiVal < 30) setCategory('Overweight');
        else setCategory('Obese');
    };

    const getCategoryColor = () => {
        if (category === 'Normal weight') return 'text-green-600 dark:text-green-400';
        if (category === 'Overweight') return 'text-yellow-600 dark:text-yellow-400';
        if (category === 'Obese') return 'text-red-600 dark:text-red-400';
        return 'text-blue-600 dark:text-blue-400';
    };

    return (
        <div className="space-y-6">
            <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-lg w-full mb-4">
                <button
                    onClick={() => setUnit('metric')}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${unit === 'metric' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    Metric
                </button>
                <button
                    onClick={() => setUnit('imperial')}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${unit === 'imperial' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    Imperial
                </button>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Scale className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Height ({unit === 'metric' ? 'cm' : 'in'})</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Ruler className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <div className="flex flex-col items-center justify-center text-center">

                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Your BMI</h3>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        {bmi ? bmi.toFixed(1) : '-'}
                    </div>
                    <div className={`text-lg font-semibold ${getCategoryColor()} transition-colors`}>
                        {category || 'Enter details'}
                    </div>
                </div>
            </div>
        </div>
    );
}
