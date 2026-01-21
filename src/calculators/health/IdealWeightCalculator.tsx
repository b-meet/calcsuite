import { useState } from 'react';
import { Scale } from 'lucide-react';

export default function IdealWeightCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [height, setHeight] = useState(''); // cm
    const [result, setResult] = useState<{ min: number; max: number; ideal: number } | null>(null);

    const calculate = () => {
        const h = parseFloat(height);
        if (!h) return;

        // Convert height to inches for formulas
        const inches = h / 2.54;
        const feet = Math.floor(inches / 12);
        const inchesOver5ft = inches - 60;

        if (feet < 5 && inchesOver5ft < 0) {
            // Simple fallback for very short heights (BMI based 18.5-24.9)
            // weight = bmi * (height in m)^2
            const hM = h / 100;
            const minW = 18.5 * hM * hM;
            const maxW = 24.9 * hM * hM;
            const ideal = (minW + maxW) / 2;
            setResult({ min: minW, max: maxW, ideal });
            return;
        }

        // Devine Formula (1974)
        let idealDevine = 0;
        if (gender === 'male') {
            idealDevine = 50.0 + (2.3 * inchesOver5ft);
        } else {
            idealDevine = 45.5 + (2.3 * inchesOver5ft);
        }

        // Healthy BMI Range (18.5 - 24.9)
        const hM = h / 100;
        const minBMI = 18.5 * hM * hM;
        const maxBMI = 24.9 * hM * hM;

        setResult({
            min: minBMI,
            max: maxBMI,
            ideal: idealDevine
        });
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 bg-slate-50";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">

                {/* Gender Selection */}
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setGender('male')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'male' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Male
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${gender === 'female' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Female
                    </button>
                </div>

                <div>
                    <label className={labelClass}>Height (cm)</label>
                    <input type="number" value={height} onChange={e => setHeight(e.target.value)} className={inputClass} placeholder="cm" />
                </div>

                <button
                    onClick={calculate}
                    className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                >
                    <Scale size={20} />
                    Calculate Ideal Weight
                </button>

                {result !== null && (
                    <div className="mt-8 space-y-4">
                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100 text-center">
                            <span className="text-sm font-medium text-green-800 uppercase tracking-wide">Ideal Weight (Devine)</span>
                            <div className="text-4xl font-bold text-slate-900 mt-2">
                                {result.ideal.toFixed(1)} <span className="text-xl font-medium text-slate-500">kg</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-500 uppercase">Healthy Min</span>
                                <div className="text-xl font-bold text-slate-800 mt-1">{result.min.toFixed(1)} kg</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-500 uppercase">Healthy Max</span>
                                <div className="text-xl font-bold text-slate-800 mt-1">{result.max.toFixed(1)} kg</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
