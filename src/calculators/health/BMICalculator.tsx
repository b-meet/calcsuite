import { useState, useEffect } from 'react';
import { Activity, Scale, Ruler } from 'lucide-react';

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
            if (height > 0) {
                calculatedBmi = (weight / (height * height)) * 703;
            }
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
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-6">
                    <button
                        onClick={() => setUnit('metric')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${unit === 'metric' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Metric (kg/cm)
                    </button>
                    <button
                        onClick={() => setUnit('imperial')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${unit === 'imperial' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Imperial (lb/in)
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Scale className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(Number(e.target.value))}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Height ({unit === 'metric' ? 'cm' : 'in'})</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Ruler className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(Number(e.target.value))}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                    <div className={`p-4 rounded-full ${category === 'Normal weight' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'} transition-colors duration-500`}>
                        <Activity size={32} />
                    </div>
                </div>

                <h3 className="text-lg font-medium text-slate-500 mb-1">Your BMI</h3>
                <div className="text-5xl font-bold text-slate-900 mb-2">
                    {bmi.toFixed(1)}
                </div>
                <div className={`text-xl font-semibold ${getCategoryColor()} transition-colors`}>
                    {category}
                </div>

                <p className="mt-6 text-sm text-slate-400 max-w-xs">
                    Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
                </p>
            </div>
        </div>
    );
}
