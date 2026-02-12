import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function BodyFatCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState(''); // in kg
    const [height, setHeight] = useState(''); // in cm
    const [neck, setNeck] = useState(''); // in cm
    const [waist, setWaist] = useState(''); // in cm
    const [hip, setHip] = useState(''); // in cm (female only)
    const [result, setResult] = useState<number | null>(null);
    const [category, setCategory] = useState('');

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('body-fat');

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const n = parseFloat(neck);
        const wa = parseFloat(waist);
        const hi = parseFloat(hip);

        if (!w || !h || !n || !wa || (gender === 'female' && !hi)) return;

        let bodyFat = 0;

        if (gender === 'male') {
            bodyFat = (86.010 * Math.log10(wa - n)) - (70.041 * Math.log10(h)) + 36.76;
        } else {
            bodyFat = (163.205 * Math.log10(wa + hi - n)) - (97.684 * Math.log10(h)) - 78.387;
        }

        if (bodyFat < 0) bodyFat = 0;
        setResult(bodyFat);

        let cat = '';
        if (gender === 'male') {
            if (bodyFat < 6) cat = 'Essential Fat';
            else if (bodyFat < 14) cat = 'Athletes';
            else if (bodyFat < 18) cat = 'Fitness';
            else if (bodyFat < 25) cat = 'Average';
            else cat = 'Obese';
        } else {
            if (bodyFat < 14) cat = 'Essential Fat';
            else if (bodyFat < 21) cat = 'Athletes';
            else if (bodyFat < 25) cat = 'Fitness';
            else if (bodyFat < 32) cat = 'Average';
            else cat = 'Obese';
        }
        setCategory(cat);

        addHistory(
            { gender, age, weight, height, neck, waist, hip },
            `${bodyFat.toFixed(1)}% (${cat})`,
            `${gender === 'male' ? 'Male' : 'Female'}, ${age}y`
        );
    };

    const handleHistorySelect = (item: any) => {
        setGender(item.inputs.gender);
        setAge(item.inputs.age);
        setWeight(item.inputs.weight);
        setHeight(item.inputs.height);
        setNeck(item.inputs.neck);
        setWaist(item.inputs.waist);
        setHip(item.inputs.hip || '');
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">

                {/* Gender Selection */}
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button
                        onClick={() => setGender('male')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'male' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                    >
                        Male
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'female' ? 'bg-white dark:bg-slate-700 text-pink-600 dark:text-pink-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                    >
                        Female
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClass}>Age</label>
                        <input type="number" value={age} onChange={e => setAge(e.target.value)} className={inputClass} placeholder="Years" />
                    </div>
                    <div>
                        <label className={labelClass}>Height (cm)</label>
                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} className={inputClass} placeholder="cm" />
                    </div>
                    <div>
                        <label className={labelClass}>Weight (kg)</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className={inputClass} placeholder="kg" />
                    </div>
                    <div>
                        <label className={labelClass}>Neck (cm)</label>
                        <input type="number" value={neck} onChange={e => setNeck(e.target.value)} className={inputClass} placeholder="Circumference" />
                    </div>
                    <div>
                        <label className={labelClass}>Waist (cm)</label>
                        <input type="number" value={waist} onChange={e => setWaist(e.target.value)} className={inputClass} placeholder="Circumference" />
                    </div>
                    {gender === 'female' && (
                        <div>
                            <label className={labelClass}>Hip (cm)</label>
                            <input type="number" value={hip} onChange={e => setHip(e.target.value)} className={inputClass} placeholder="Circumference" />
                        </div>
                    )}
                </div>

                <div className="flex justify-center pt-2">
                    <button
                        onClick={calculate}
                        className={`w-full py-4 text-white font-bold rounded-xl transition-colors shadow-lg ${gender === 'male' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 dark:shadow-blue-900/20' : 'bg-pink-600 hover:bg-pink-700 shadow-pink-200 dark:shadow-pink-900/20'
                            }`}
                    >
                        Calculate Body Fat
                    </button>
                </div>

                {result !== null && (
                    <div className={`mt-8 p-6 rounded-2xl border text-center animate-in fade-in slide-in-from-top-4 ${gender === 'male' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900/30' : 'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-900/30'
                        }`}>
                        <span className={`text-sm font-medium uppercase tracking-wide ${gender === 'male' ? 'text-blue-600 dark:text-blue-400' : 'text-pink-600 dark:text-pink-400'
                            }`}>Body Fat Percentage</span>
                        <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                            {result.toFixed(1)}%
                        </div>
                        <div className="mt-2 text-lg font-medium text-slate-600 dark:text-slate-300">
                            Category: <span className="font-bold text-slate-900 dark:text-white">{category}</span>
                        </div>
                    </div>
                )}
            </div>

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
