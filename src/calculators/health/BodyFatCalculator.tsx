import { useState } from 'react';

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

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const n = parseFloat(neck);
        const wa = parseFloat(waist);
        const hi = parseFloat(hip);

        if (!w || !h || !n || !wa || (gender === 'female' && !hi)) return;

        let bodyFat = 0;

        // U.S. Navy Method
        // Height, Neck, Waist, Hip in cm
        // Log10 is base 10

        if (gender === 'male') {
            // 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
            // Careful with formula variations. Using one standard variation:
            // %BF = 86.010 * log10(abdomen - neck) - 70.041 * log10(height) + 36.76
            // abdomen = waist
            bodyFat = (86.010 * Math.log10(wa - n)) - (70.041 * Math.log10(h)) + 36.76;
        } else {
            // %BF = 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387
            bodyFat = (163.205 * Math.log10(wa + hi - n)) - (97.684 * Math.log10(h)) - 78.387;
        }

        if (bodyFat < 0) bodyFat = 0;
        setResult(bodyFat);

        // Categories (ACE)
        if (gender === 'male') {
            if (bodyFat < 6) setCategory('Essential Fat');
            else if (bodyFat < 14) setCategory('Athletes');
            else if (bodyFat < 18) setCategory('Fitness');
            else if (bodyFat < 25) setCategory('Average');
            else setCategory('Obese');
        } else {
            if (bodyFat < 14) setCategory('Essential Fat');
            else if (bodyFat < 21) setCategory('Athletes');
            else if (bodyFat < 25) setCategory('Fitness');
            else if (bodyFat < 32) setCategory('Average');
            else setCategory('Obese');
        }
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">

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

                <button
                    onClick={calculate}
                    className={`w-full py-4 text-white font-bold rounded-xl transition-colors shadow-lg ${gender === 'male' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 dark:shadow-blue-900/20' : 'bg-pink-600 hover:bg-pink-700 shadow-pink-200 dark:shadow-pink-900/20'
                        }`}
                >
                    Calculate Body Fat
                </button>

                {result !== null && (
                    <div className={`mt-8 p-6 rounded-2xl border text-center ${gender === 'male' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900/30' : 'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-900/30'
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
        </div>
    );
}
