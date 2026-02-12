import { useState, useEffect } from 'react';
import { Delete, Equal } from 'lucide-react';
import { evaluate } from 'mathjs';
import { cn } from '../../utils/cn';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function BasicCalculator() {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [isResult, setIsResult] = useState(false);

    const { history: calcHistory, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('basic');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;

            if (/[0-9.]/.test(key)) {
                handleInput(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                handleOperator(key);
            } else if (key === 'Enter' || key === '=') {
                e.preventDefault();
                calculate();
            } else if (key === 'Escape') {
                clear();
            } else if (key === 'Backspace') {
                backspace();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [display, equation, isResult]); // Add dependencies to ensure state is fresh

    const handleInput = (value: string) => {
        if (isResult) {
            setDisplay(value);
            setEquation('');
            setIsResult(false);
        } else {
            setDisplay(display === '0' ? value : display + value);
        }
    };

    const handleOperator = (op: string) => {
        if (isResult) {
            setIsResult(false);
            setEquation(display + op);
            setDisplay('0');
        } else {
            setEquation(equation + display + op);
            setDisplay('0');
        }
    };

    const calculate = () => {
        try {
            const fullEquation = equation + display;
            // Replace generic symbols with mathjs readable ones if needed (e.g. × -> *)
            // But we will use standard * / for now or map them.

            const result = evaluate(fullEquation);
            setDisplay(String(result));
            setEquation('');
            setIsResult(true);

            addHistory(
                { equation: fullEquation },
                String(result),
                fullEquation
            );
        } catch (error) {
            setDisplay('Error');
            setIsResult(true);
        }
    };

    const handleHistorySelect = (item: any) => {
        setDisplay(item.result);
        setEquation(item.inputs.equation);
        setIsResult(true);
    };

    const clear = () => {
        setDisplay('0');
        setEquation('');
        setIsResult(false);
    };

    const backspace = () => {
        if (isResult) return;
        if (display.length === 1) {
            setDisplay('0');
        } else {
            setDisplay(display.slice(0, -1));
        }
    };

    const btnClass = "h-14 md:h-16 rounded-2xl font-semibold text-xl md:text-2xl transition-all duration-150 active:scale-95 flex items-center justify-center shadow-sm";
    const numBtn = "bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700";
    const opBtn = "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-100 dark:border-blue-900/30";
    const actionBtn = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700";

    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
                {/* Display */}
                <div className="mb-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-right border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="text-slate-500 dark:text-slate-400 text-sm h-6 font-medium tracking-wide">{equation}</div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight overflow-x-auto no-scrollbar whitespace-nowrap">
                        {display}
                    </div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-4 gap-3">
                    <button onClick={clear} className={cn(btnClass, actionBtn, "col-span-2 text-red-500 dark:text-red-400")}>
                        AC
                    </button>
                    <button onClick={backspace} className={cn(btnClass, actionBtn)}>
                        <Delete size={24} />
                    </button>
                    <button onClick={() => handleOperator('/')} className={cn(btnClass, opBtn)}>
                        &divide;
                    </button>

                    <button onClick={() => handleInput('7')} className={cn(btnClass, numBtn)}>7</button>
                    <button onClick={() => handleInput('8')} className={cn(btnClass, numBtn)}>8</button>
                    <button onClick={() => handleInput('9')} className={cn(btnClass, numBtn)}>9</button>
                    <button onClick={() => handleOperator('*')} className={cn(btnClass, opBtn)}>
                        &times;
                    </button>

                    <button onClick={() => handleInput('4')} className={cn(btnClass, numBtn)}>4</button>
                    <button onClick={() => handleInput('5')} className={cn(btnClass, numBtn)}>5</button>
                    <button onClick={() => handleInput('6')} className={cn(btnClass, numBtn)}>6</button>
                    <button onClick={() => handleOperator('-')} className={cn(btnClass, opBtn)}>
                        &minus;
                    </button>

                    <button onClick={() => handleInput('1')} className={cn(btnClass, numBtn)}>1</button>
                    <button onClick={() => handleInput('2')} className={cn(btnClass, numBtn)}>2</button>
                    <button onClick={() => handleInput('3')} className={cn(btnClass, numBtn)}>3</button>
                    <button onClick={() => handleOperator('+')} className={cn(btnClass, opBtn)}>
                        +
                    </button>

                    <button onClick={() => handleInput('0')} className={cn(btnClass, numBtn, "col-span-2")}>0</button>
                    <button onClick={() => handleInput('.')} className={cn(btnClass, numBtn)}>.</button>
                    <button
                        onClick={calculate}
                        className={cn(btnClass, "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 border-transparent shadow-blue-200 dark:shadow-blue-900/20 shadow-lg")}
                    >
                        <Equal size={28} />
                    </button>
                </div>
            </div>

            <CalculationHistory
                history={calcHistory}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
