
import { useState } from 'react';
import { Clock } from 'lucide-react';

export default function DateCalculator() {
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState<{ days: number; weeks: string; years: string } | null>(null);

    const calculateDifference = () => {
        if (!startDate || !endDate) return;

        const start = new Date(startDate);
        const end = new Date(endDate);

        // Difference in milliseconds
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const years = Math.floor(diffDays / 365);
        const remainingDaysAfterYears = diffDays % 365;
        const months = Math.floor(remainingDaysAfterYears / 30);
        const days = remainingDaysAfterYears % 30;

        setResult({
            days: diffDays,
            weeks: (diffDays / 7).toFixed(1),
            years: `${years} years, ${months} months, ${days} days`
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                        />
                    </div>
                </div>

                <button
                    onClick={calculateDifference}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                    <Clock size={20} />
                    Calculate Duration
                </button>
            </div>

            {result && (
                <div className="mt-6 space-y-4 animate-fade-in">
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <p className="text-sm text-blue-600 mb-1 font-medium">Total Days</p>
                        <p className="text-4xl font-bold text-blue-900">{result.days}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-xs text-slate-500 mb-1">In Weeks</p>
                            <p className="text-lg font-bold text-slate-900">{result.weeks} weeks</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-xs text-slate-500 mb-1">Detailed Breakdown</p>
                            <p className="text-sm font-bold text-slate-900 leading-tight">{result.years}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
