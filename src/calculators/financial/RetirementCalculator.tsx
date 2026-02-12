import { useState } from 'react';
import { Sunset } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function RetirementCalculator() {
    const [currentAge, setCurrentAge] = useState('');
    const [retireAge, setRetireAge] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');
    const [annualContribution, setAnnualContribution] = useState('');
    const [annualReturn, setAnnualReturn] = useState('7');

    const [result, setResult] = useState<{ total: number; interest: number } | null>(null);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('retirement');

    const calculate = () => {
        const age = parseFloat(currentAge);
        const rAge = parseFloat(retireAge);
        const savings = parseFloat(currentSavings) || 0;
        const contribution = parseFloat(annualContribution) || 0;
        const rate = parseFloat(annualReturn) || 0;

        if (!age || !rAge || rAge <= age) return;

        const years = rAge - age;
        const r = rate / 100;

        // FV of initial savings
        const fvSavings = savings * Math.pow(1 + r, years);

        // FV of contributions
        // PMT * [((1 + r)^n - 1) / r]
        let fvContributions = 0;
        if (r !== 0) {
            fvContributions = contribution * ((Math.pow(1 + r, years) - 1) / r);
        } else {
            fvContributions = contribution * years;
        }

        const total = fvSavings + fvContributions;
        const principal = savings + (contribution * years);
        const interest = total - principal;

        setResult({ total, interest });

        addHistory(
            { currentAge, retireAge, currentSavings, annualContribution, annualReturn },
            `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
            `${years} Years, $${contribution}/yr`
        );
    };

    const handleHistorySelect = (item: any) => {
        setCurrentAge(item.inputs.currentAge);
        setRetireAge(item.inputs.retireAge);
        setCurrentSavings(item.inputs.currentSavings);
        setAnnualContribution(item.inputs.annualContribution);
        setAnnualReturn(item.inputs.annualReturn);
    };

    const inputClass = "block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white";
    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1";

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className={labelClass}>Current Age</label>
                        <input type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)} className={inputClass} placeholder="30" />
                    </div>
                    <div>
                        <label className={labelClass}>Retirement Age</label>
                        <input type="number" value={retireAge} onChange={e => setRetireAge(e.target.value)} className={inputClass} placeholder="65" />
                    </div>
                    <div className="col-span-2">
                        <label className={labelClass}>Current Savings</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input type="number" value={currentSavings} onChange={e => setCurrentSavings(e.target.value)} className={`${inputClass} pl-8`} placeholder="50000" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className={labelClass}>Annual Contribution</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500">$</span>
                            <input type="number" value={annualContribution} onChange={e => setAnnualContribution(e.target.value)} className={`${inputClass} pl-8`} placeholder="10000" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className={labelClass}>Expected Annual Return (%)</label>
                        <input type="number" value={annualReturn} onChange={e => setAnnualReturn(e.target.value)} className={inputClass} placeholder="7.0" />
                    </div>
                </div>

                <div className="flex justify-center pt-2">
                    <button
                        onClick={calculate}
                        className="w-full py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200 dark:shadow-amber-900/20 flex items-center justify-center gap-2"
                    >
                        <Sunset size={20} />
                        Calculate Retirement
                    </button>
                </div>

                {result !== null && (
                    <div className="mt-8 space-y-4">
                        <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30 text-center">
                            <span className="text-sm font-medium text-amber-800 dark:text-amber-300 uppercase tracking-wide">Retirement Savings</span>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                                ${result.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </div>
                        </div>
                        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                            You will earn <span className="font-semibold text-amber-600 dark:text-amber-400">${result.interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> in interest!
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
