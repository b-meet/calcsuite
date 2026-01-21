import { useState } from 'react';
import { fraction, format } from 'mathjs';
import { Divide, Plus, Minus, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function FractionCalculator() {
    const [num1, setNum1] = useState('');
    const [den1, setDen1] = useState('');
    const [num2, setNum2] = useState('');
    const [den2, setDen2] = useState('');
    const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add');
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        if (!num1 || !den1 || !num2 || !den2) return;

        try {
            const f1 = fraction(Number(num1), Number(den1));
            const f2 = fraction(Number(num2), Number(den2));
            let res;

            switch (operation) {
                case 'add':
                    res = f1.add(f2);
                    break;
                case 'subtract':
                    res = f1.sub(f2);
                    break;
                case 'multiply':
                    res = f1.mul(f2);
                    break;
                case 'divide':
                    res = f1.div(f2);
                    break;
            }

            setResult(format(res, { fraction: 'ratio' }));
        } catch (e) {
            setResult('Error');
        }
    };

    const ops = [
        { id: 'add', icon: Plus },
        { id: 'subtract', icon: Minus },
        { id: 'multiply', icon: X },
        { id: 'divide', icon: Divide },
    ];

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center">

                {/* Fraction 1 */}
                <div className="flex flex-col gap-2 w-24">
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        className="w-full p-2 text-center border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold"
                        placeholder="Num"
                    />
                    <div className="h-0.5 w-full bg-slate-300 rounded-full"></div>
                    <input
                        type="number"
                        value={den1}
                        onChange={(e) => setDen1(e.target.value)}
                        className="w-full p-2 text-center border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold"
                        placeholder="Den"
                    />
                </div>

                {/* Operation */}
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    {ops.map((op) => (
                        <button
                            key={op.id}
                            onClick={() => setOperation(op.id as any)}
                            className={cn(
                                "p-3 rounded-lg transition-all",
                                operation === op.id ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            <op.icon size={20} />
                        </button>
                    ))}
                </div>

                {/* Fraction 2 */}
                <div className="flex flex-col gap-2 w-24">
                    <input
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        className="w-full p-2 text-center border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold"
                        placeholder="Num"
                    />
                    <div className="h-0.5 w-full bg-slate-300 rounded-full"></div>
                    <input
                        type="number"
                        value={den2}
                        onChange={(e) => setDen2(e.target.value)}
                        className="w-full p-2 text-center border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 font-semibold"
                        placeholder="Den"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={calculate}
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                    Calculate
                </button>
            </div>

            {result && (
                <div className="mt-8 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">Result</span>
                    <div className="text-4xl font-bold text-slate-900 mt-2">
                        {result}
                    </div>
                </div>
            )}
        </div>
    );
}
