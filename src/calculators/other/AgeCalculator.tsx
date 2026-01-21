import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

    const calculateAge = () => {
        if (!birthDate) return;

        const birth = new Date(birthDate);
        const today = new Date();

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            // Get days in previous month
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 hover:bg-white transition-all"
                        />
                    </div>
                </div>

                <button
                    onClick={calculateAge}
                    className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                    Calculate Age
                </button>

                {age && (
                    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                        <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-4">Your Age</h3>
                        <div className="flex justify-center gap-8">
                            <div>
                                <div className="text-4xl font-bold text-slate-900">{age.years}</div>
                                <div className="text-sm text-slate-500">Years</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900">{age.months}</div>
                                <div className="text-sm text-slate-500">Months</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900">{age.days}</div>
                                <div className="text-sm text-slate-500">Days</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
