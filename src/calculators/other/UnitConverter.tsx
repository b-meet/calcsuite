import { useState, useEffect } from 'react';
import { ArrowLeftRight, TrendingUp } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

type UnitType = 'length' | 'weight' | 'temperature';

const units = {
    length: [
        { value: 'm', label: 'Meters' },
        { value: 'km', label: 'Kilometers' },
        { value: 'cm', label: 'Centimeters' },
        { value: 'ft', label: 'Feet' },
        { value: 'in', label: 'Inches' },
        { value: 'mi', label: 'Miles' },
    ],
    weight: [
        { value: 'kg', label: 'Kilograms' },
        { value: 'g', label: 'Grams' },
        { value: 'lb', label: 'Pounds' },
        { value: 'oz', label: 'Ounces' },
    ],
    temperature: [
        { value: 'c', label: 'Celsius' },
        { value: 'f', label: 'Fahrenheit' },
        { value: 'k', label: 'Kelvin' },
    ],
};

export default function UnitConverter() {
    const [type, setType] = useState<UnitType>('length');
    const [fromUnit, setFromUnit] = useState(units.length[0].value);
    const [toUnit, setToUnit] = useState(units.length[1].value);
    const [fromValue, setFromValue] = useState(1);
    const [toValue, setToValue] = useState(0);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('unit-converter');

    // Update units when type changes
    useEffect(() => {
        setFromUnit(units[type][0].value);
        setToUnit(units[type][1].value);
    }, [type]);

    // Convert whenever inputs change
    useEffect(() => {
        convert();
    }, [fromValue, fromUnit, toUnit, type]);

    const convert = () => {
        let baseValue = fromValue;

        if (type === 'length') {
            // Convert to meters first
            if (fromUnit === 'km') baseValue *= 1000;
            if (fromUnit === 'cm') baseValue /= 100;
            if (fromUnit === 'ft') baseValue *= 0.3048;
            if (fromUnit === 'in') baseValue *= 0.0254;
            if (fromUnit === 'mi') baseValue *= 1609.34;

            // Convert from meters to target
            if (toUnit === 'km') baseValue /= 1000;
            else if (toUnit === 'cm') baseValue *= 100;
            else if (toUnit === 'ft') baseValue /= 0.3048;
            else if (toUnit === 'in') baseValue /= 0.0254;
            else if (toUnit === 'mi') baseValue /= 1609.34;
        }
        else if (type === 'weight') {
            // Convert to kg first
            if (fromUnit === 'g') baseValue /= 1000;
            if (fromUnit === 'lb') baseValue *= 0.453592;
            if (fromUnit === 'oz') baseValue *= 0.0283495;

            // Convert from kg
            if (toUnit === 'g') baseValue *= 1000;
            else if (toUnit === 'lb') baseValue /= 0.453592;
            else if (toUnit === 'oz') baseValue /= 0.0283495;
        }
        else if (type === 'temperature') {
            // Temp is tricky because of offsets
            let tempC = fromValue;
            if (fromUnit === 'f') tempC = (fromValue - 32) * 5 / 9;
            if (fromUnit === 'k') tempC = fromValue - 273.15;

            if (toUnit === 'f') baseValue = (tempC * 9 / 5) + 32;
            else if (toUnit === 'k') baseValue = tempC + 273.15;
            else baseValue = tempC;
        }

        setToValue(Number(baseValue.toFixed(4)));
    };

    const handleSave = () => {
        addHistory(
            { type, fromUnit, toUnit, fromValue },
            `${toValue} ${toUnit}`,
            `${fromValue} ${fromUnit} to ${toUnit}`
        );
    };

    const handleHistorySelect = (item: any) => {
        setType(item.inputs.type);
        setFromUnit(item.inputs.fromUnit);
        setToUnit(item.inputs.toUnit);
        setFromValue(item.inputs.fromValue);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex justify-center bg-white dark:bg-slate-900 p-1 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    {(['length', 'weight', 'temperature'] as UnitType[]).map((t) => (
                        <button
                            key={t}
                            onClick={() => setType(t)}
                            className={cn(
                                "flex-1 py-3 rounded-xl text-sm font-medium capitalize transition-all",
                                type === t ? "bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                            )}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 w-full space-y-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-400">From</label>
                        <input
                            type="number"
                            value={fromValue}
                            onChange={(e) => setFromValue(Number(e.target.value))}
                            className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-xl font-bold text-slate-900 dark:text-white"
                        />
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-blue-500"
                        >
                            {units[type].map(u => (
                                <option key={u.value} value={u.value}>{u.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-full text-slate-400">
                        <ArrowLeftRight size={24} />
                    </div>

                    <div className="flex-1 w-full space-y-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-400">To</label>
                        <div className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-100 dark:bg-slate-800 text-xl font-bold text-slate-700 dark:text-white break-all">
                            {toValue}
                        </div>
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-blue-500"
                        >
                            {units[type].map(u => (
                                <option key={u.value} value={u.value}>{u.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleSave}
                        className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center gap-2"
                    >
                        <TrendingUp size={18} />
                        Save to History
                    </button>
                </div>
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
