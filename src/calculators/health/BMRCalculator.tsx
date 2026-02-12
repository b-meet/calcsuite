import { useState } from 'react';
import { Flame } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function BMRCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState(''); // cm
    const [weight, setWeight] = useState(''); // kg
    const [result, setResult] = useState<number | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('bmr');

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseFloat(age);

        if (!w || !h || !a) return;

        // Mifflin-St Jeor Equation
        let bmr = (10 * w) + (6.25 * h) - (5 * a);

        if (gender === 'male') {
            bmr += 5;
        } else {
            bmr -= 161;
        }

        setResult(bmr);

        addHistory(
            { gender, age, height, weight },
            `${Math.round(bmr)} kcal`,
            `${weight}kg, ${height}cm, ${gender === 'male' ? 'M' : 'F'}`
        );
    };

    const handleHistorySelect = (item: any) => {
        setGender(item.inputs.gender);
        setAge(item.inputs.age);
        setHeight(item.inputs.height);
        setWeight(item.inputs.weight);
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">

                {/* Gender Selection */}
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button
                        onClick={() => setGender('male')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'male' ? 'bg-white dark:bg-slate-700 text-orange-600 dark:text-orange-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                            }`}
                    >
                        Male
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'female' ? 'bg-white dark:bg-slate-700 text-orange-600 dark:text-orange-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
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
                    <div className="md:col-span-2">
                        <label className={labelClass}>Weight (kg)</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className={inputClass} placeholder="kg" />
                    </div>
                </div>

                <button
                    onClick={calculate}
                    className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 dark:shadow-orange-900/20 flex items-center justify-center gap-2"
                >
                    <Flame size={20} />
                    Calculate BMR
                </button>

                {result !== null && (
                    <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-100 dark:border-orange-900/30 text-center">
                        <span className="text-sm font-medium text-orange-600 dark:text-orange-400 uppercase tracking-wide">Basal Metabolic Rate</span>
                        <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                            {Math.round(result)} <span className="text-xl font-medium text-slate-500 dark:text-slate-400">kcal/day</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                            This is the number of calories your body burns at rest to maintain basic physiological functions.
                        </p>
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
