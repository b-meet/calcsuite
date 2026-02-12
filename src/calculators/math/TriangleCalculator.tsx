import { useState, useEffect } from 'react';
import { Triangle, Info, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function TriangleCalculator() {
    const [a, setA] = useState('3');
    const [b, setB] = useState('4');
    const [c, setC] = useState('5');

    const [result, setResult] = useState<{ area: number; perimeter: number; angles: number[] } | string | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('triangle');

    const calculate = () => {
        const sa = parseFloat(a);
        const sb = parseFloat(b);
        const sc = parseFloat(c);

        if (!sa || !sb || !sc) return;

        if (sa + sb <= sc || sa + sc <= sb || sb + sc <= sa) {
            setResult("Invalid Triangle: Sum of two sides must be greater than the third.");
            return;
        }

        const angleA_rad = Math.acos((sb * sb + sc * sc - sa * sa) / (2 * sb * sc));
        const angleB_rad = Math.acos((sa * sa + sc * sc - sb * sb) / (2 * sa * sc));
        const angleC_rad = Math.PI - angleA_rad - angleB_rad;

        const toDeg = (rad: number) => rad * (180 / Math.PI);

        const s = (sa + sb + sc) / 2;
        const area = Math.sqrt(s * (s - sa) * (s - sb) * (s - sc));

        setResult({
            area,
            perimeter: sa + sb + sc,
            angles: [toDeg(angleA_rad), toDeg(angleB_rad), toDeg(angleC_rad)]
        });
    };

    useEffect(() => {
        calculate();
    }, [a, b, c]);

    const handleSave = () => {
        if (!result || typeof result === 'string') return;
        addHistory(
            { a, b, c },
            `Area: ${result.area.toFixed(2)}`,
            `Sides: ${a}, ${b}, ${c}`
        );
    };

    const handleHistorySelect = (item: any) => {
        setA(item.inputs.a);
        setB(item.inputs.b);
        setC(item.inputs.c);
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-violet-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-center";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 text-center";

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="text-center mb-6">
                    <div className="inline-block relative w-48 h-32 mx-auto">
                        <svg viewBox="0 0 100 80" className="w-full h-full text-violet-200 fill-current opacity-50">
                            <path d="M10,70 L90,70 L50,10 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-400" />
                            <text x="50" y="76" fontSize="8" textAnchor="middle" fill="currentColor" className="text-slate-500">Side C</text>
                            <text x="25" y="40" fontSize="8" textAnchor="middle" fill="currentColor" className="text-slate-500">Side B</text>
                            <text x="75" y="40" fontSize="8" textAnchor="middle" fill="currentColor" className="text-slate-500">Side A</text>
                        </svg>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Enter the lengths of all 3 sides</p>
                </div>

                <div className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className={labelClass}>Side A</label>
                        <input type="number" value={a} onChange={e => setA(e.target.value)} className={inputClass} placeholder="3" />
                    </div>
                    <div className="flex-1">
                        <label className={labelClass}>Side B</label>
                        <input type="number" value={b} onChange={e => setB(e.target.value)} className={inputClass} placeholder="4" />
                    </div>
                    <div className="flex-1">
                        <label className={labelClass}>Side C</label>
                        <input type="number" value={c} onChange={e => setC(e.target.value)} className={inputClass} placeholder="5" />
                    </div>
                </div>

                <div className="flex justify-center pt-2">
                    <button
                        onClick={handleSave}
                        className="w-full py-4 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200 flex items-center justify-center gap-2"
                    >
                        <TrendingUp size={20} />
                        Save to History
                    </button>
                </div>

                {typeof result === 'string' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-center font-medium">
                        {result}
                    </div>
                )}

                {result && typeof result !== 'string' && (
                    <div className="mt-8 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-2xl border border-violet-100 dark:border-violet-800 text-center">
                                <span className="text-xs font-bold text-violet-800 dark:text-violet-300 uppercase">Perimeter</span>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{result.perimeter.toFixed(2)}</div>
                            </div>
                            <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-2xl border border-violet-100 dark:border-violet-800 text-center">
                                <span className="text-xs font-bold text-violet-800 dark:text-violet-300 uppercase">Area</span>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{result.area.toFixed(2)}</div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block mb-3 text-center">Internal Angles</span>
                            <div className="flex justify-between items-center text-center">
                                <div>
                                    <div className="text-slate-400 text-xs mb-1">Angle A</div>
                                    <div className="text-xl font-bold text-slate-800 dark:text-slate-200">{result.angles[0].toFixed(1)}°</div>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-xs mb-1">Angle B</div>
                                    <div className="text-xl font-bold text-slate-800 dark:text-slate-200">{result.angles[1].toFixed(1)}°</div>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-xs mb-1">Angle C</div>
                                    <div className="text-xl font-bold text-slate-800 dark:text-slate-200">{result.angles[2].toFixed(1)}°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <CalculationHistory
                    history={history}
                    onSelect={handleHistorySelect}
                    onClear={clearHistory}
                    onRemove={removeHistoryItem}
                />
            </div>
        </div>
    );
}
