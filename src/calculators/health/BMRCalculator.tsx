import { useState } from 'react';
import { Flame } from 'lucide-react';

export default function BMRCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState(''); // cm
    const [weight, setWeight] = useState(''); // kg
    const [result, setResult] = useState<number | null>(null);

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
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 bg-slate-50";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">

                {/* Gender Selection */}
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setGender('male')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'male' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Male
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'female' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
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
                    className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
                >
                    <Flame size={20} />
                    Calculate BMR
                </button>

                {result !== null && (
                    <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                        <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">Basal Metabolic Rate</span>
                        <div className="text-4xl font-bold text-slate-900 mt-2">
                            {Math.round(result)} <span className="text-xl font-medium text-slate-500">kcal/day</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
                            This is the number of calories your body burns at rest to maintain basic physiological functions.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
