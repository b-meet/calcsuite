import { useState, useEffect } from 'react';
import { User, Scale, Ruler, Flame } from 'lucide-react';

export default function CalorieCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState(30);
    const [weight, setWeight] = useState(70); // kg
    const [height, setHeight] = useState(175); // cm
    const [activityLevel, setActivityLevel] = useState(1.2);
    const [calories, setCalories] = useState({ maintain: 0, lose: 0, gain: 0 });

    useEffect(() => {
        calculateCalories();
    }, [gender, age, weight, height, activityLevel]);

    const calculateCalories = () => {
        // Mifflin-St Jeor Equation
        let bmr = 0;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const tdee = bmr * activityLevel;

        setCalories({
            maintain: Math.round(tdee),
            lose: Math.round(tdee - 500),
            gain: Math.round(tdee + 500),
        });
    };

    const activityLevels = [
        { value: 1.2, label: 'Sedentary', desc: 'Little or no exercise' },
        { value: 1.375, label: 'Lightly Active', desc: 'Exercise 1-3 times/week' },
        { value: 1.55, label: 'Moderately Active', desc: 'Exercise 4-5 times/week' },
        { value: 1.725, label: 'Very Active', desc: 'Daily exercise or intense exercise 3-4 times/week' },
        { value: 1.9, label: 'Extra Active', desc: 'Intense exercise daily or physical job' },
    ];

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-6">
                    <button
                        onClick={() => setGender('male')}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${gender === 'male' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Male
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${gender === 'female' ? 'bg-white shadow text-pink-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Female
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Age</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="number"
                                min="15"
                                max="100"
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))}
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        {/* Placeholder for future expansion */}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Weight (kg)</label>
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
                        <label className="block text-sm font-medium text-slate-700">Height (cm)</label>
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

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Activity Level</label>
                    <select
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(Number(e.target.value))}
                        className="block w-full pl-3 pr-10 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white transition-all cursor-pointer"
                    >
                        {activityLevels.map((level) => (
                            <option key={level.value} value={level.value}>
                                {level.label} - {level.desc}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Flame className="w-32 h-32 text-orange-500" />
                    </div>

                    <h3 className="text-lg font-medium text-slate-500 mb-1">Maintain Weight</h3>
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                        {calories.maintain.toLocaleString()} <span className="text-xl font-medium text-slate-500">kcal/day</span>
                    </div>
                    <p className="text-sm text-slate-400">
                        Calories needed to maintain your current weight.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                        <h3 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-2">Weight Loss</h3>
                        <div className="text-2xl font-bold text-slate-900">
                            {calories.lose.toLocaleString()} <span className="text-sm font-medium text-slate-500">kcal</span>
                        </div>
                        <p className="text-xs text-green-700 mt-2 opacity-80">
                            -0.5 kg/week
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                        <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-2">Weight Gain</h3>
                        <div className="text-2xl font-bold text-slate-900">
                            {calories.gain.toLocaleString()} <span className="text-sm font-medium text-slate-500">kcal</span>
                        </div>
                        <p className="text-xs text-blue-700 mt-2 opacity-80">
                            +0.5 kg/week
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
