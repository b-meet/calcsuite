import { useState } from 'react';
import { Dices } from 'lucide-react';

export default function RandomNumberGenerator() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [count, setCount] = useState(1);
    const [results, setResults] = useState<number[]>([]);
    const [allowDuplicates, setAllowDuplicates] = useState(true);

    const generate = () => {
        if (min >= max) {
            alert("Min must be less than Max");
            return;
        }

        // Check if unique generation is possible
        if (!allowDuplicates && (max - min + 1) < count) {
            alert("Range is too small for the requested number of unique values.");
            return;
        }

        const newResults: number[] = [];
        const used = new Set<number>();

        while (newResults.length < count) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;

            if (!allowDuplicates) {
                if (!used.has(num)) {
                    newResults.push(num);
                    used.add(num);
                }
            } else {
                newResults.push(num);
            }
        }

        setResults(newResults);
    };

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Min Value</label>
                    <input
                        type="number"
                        value={min}
                        onChange={e => setMin(Number(e.target.value))}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Max Value</label>
                    <input
                        type="number"
                        value={max}
                        onChange={e => setMax(Number(e.target.value))}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold"
                    />
                </div>
                <div className="col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">How many numbers?</label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={count}
                        onChange={e => setCount(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="text-center font-bold text-blue-600">{count}</div>
                </div>

                <div className="col-span-2 flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="duplicates"
                        checked={allowDuplicates}
                        onChange={e => setAllowDuplicates(e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="duplicates" className="text-slate-600">Allow Duplicates</label>
                </div>
            </div>

            <button
                onClick={generate}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
                <Dices size={24} />
                Generate
            </button>

            {results.length > 0 && (
                <div className="flex flex-wrap gap-4 justify-center">
                    {results.map((r, i) => (
                        <div key={i} className="w-24 h-24 flex items-center justify-center bg-white border border-slate-200 rounded-2xl shadow-sm text-3xl font-bold text-slate-800 animate-in zoom-in duration-300 fill-mode-backwards" style={{ animationDelay: `${i * 100}ms` }}>
                            {r}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
