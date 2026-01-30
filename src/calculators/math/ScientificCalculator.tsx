import { useState } from 'react';
import { Delete } from 'lucide-react';
import { evaluate, format } from 'mathjs';
import { cn } from '../../utils/cn';

export default function ScientificCalculator() {
    const [display, setDisplay] = useState('0');
    const [isResult, setIsResult] = useState(false);
    const [memory] = useState(0); // Kept for future use

    const handleInput = (value: string) => {
        if (isResult) {
            setDisplay(value);
            setIsResult(false);
        } else {
            setDisplay(display === '0' ? value : display + value);
        }
    };

    const calculate = () => {
        try {
            // Replace visual symbols with math operators
            let expression = display
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/π/g, 'pi')
                .replace(/√\(/g, 'sqrt(')
                .replace(/\^/g, '^'); // mathjs handles ^ as power

            const result = evaluate(expression);
            // Format to avoid long decimals
            const formatted = format(result, { precision: 10 });
            setDisplay(String(formatted));
            setIsResult(true);
        } catch (error) {
            setDisplay('Error');
            setIsResult(true);
        }
    };

    const clear = () => {
        setDisplay('0');
        setIsResult(false);
    };

    const backspace = () => {
        if (isResult) {
            setDisplay('0');
            setIsResult(false);
            return;
        }
        if (display.length === 1) {
            setDisplay('0');
        } else {
            setDisplay(display.slice(0, -1));
        }
    };

    const functionBtn = (func: string) => {
        if (isResult) {
            setDisplay(func + "(");
            setIsResult(false);
        } else {
            setDisplay(display === '0' ? func + "(" : display + func + "(");
        }
    }

    const btnClass = "h-12 md:h-14 rounded-xl font-medium text-lg transition-all duration-150 active:scale-95 flex items-center justify-center shadow-sm relative";
    const numBtn = "bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700";
    const opBtn = "bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-100 dark:border-blue-900/50";
    const fnBtn = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-sm font-semibold";
    const actionBtn = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700";

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">

                {/* Display */}
                <div className="mb-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-right border border-slate-100 dark:border-slate-700 overflow-visible relative">
                    {memory !== 0 && (
                        <span className="absolute top-2 left-3 text-xs font-bold text-blue-500 uppercase">M</span>
                    )}
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight overflow-x-auto no-scrollbar whitespace-nowrap min-h-[3rem]">
                        {display}
                    </div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-3">
                    {/* Row 1 */}
                    <button onClick={() => functionBtn('sin')} className={cn(btnClass, fnBtn)}>sin</button>
                    <button onClick={() => functionBtn('cos')} className={cn(btnClass, fnBtn)}>cos</button>
                    <button onClick={() => functionBtn('tan')} className={cn(btnClass, fnBtn)}>tan</button>
                    <button onClick={clear} className={cn(btnClass, actionBtn, "text-red-500 dark:text-red-400 col-span-2")}>AC</button>

                    {/* Row 2 */}
                    <button onClick={() => functionBtn('asin')} className={cn(btnClass, fnBtn)}>sin⁻¹</button>
                    <button onClick={() => functionBtn('acos')} className={cn(btnClass, fnBtn)}>cos⁻¹</button>
                    <button onClick={() => functionBtn('atan')} className={cn(btnClass, fnBtn)}>tan⁻¹</button>
                    <button onClick={backspace} className={cn(btnClass, actionBtn, "col-span-2")}>
                        <Delete size={20} className="text-slate-700 dark:text-slate-300" />
                    </button>

                    {/* Row 3 */}
                    <button onClick={() => functionBtn('log')} className={cn(btnClass, fnBtn)}>log</button>
                    <button onClick={() => functionBtn('ln')} className={cn(btnClass, fnBtn)}>ln</button>
                    <button onClick={() => handleInput('(')} className={cn(btnClass, fnBtn)}>(</button>
                    <button onClick={() => handleInput(')')} className={cn(btnClass, fnBtn)}>)</button>
                    <button onClick={() => handleInput('^')} className={cn(btnClass, opBtn)}>^</button>


                    {/* Row 4 */}
                    <button onClick={() => functionBtn('sqrt')} className={cn(btnClass, fnBtn)}>√</button>
                    <button onClick={() => handleInput('7')} className={cn(btnClass, numBtn)}>7</button>
                    <button onClick={() => handleInput('8')} className={cn(btnClass, numBtn)}>8</button>
                    <button onClick={() => handleInput('9')} className={cn(btnClass, numBtn)}>9</button>
                    <button onClick={() => handleInput('÷')} className={cn(btnClass, opBtn)}>÷</button>

                    {/* Row 5 */}
                    <button onClick={() => handleInput('π')} className={cn(btnClass, fnBtn)}>π</button>
                    <button onClick={() => handleInput('4')} className={cn(btnClass, numBtn)}>4</button>
                    <button onClick={() => handleInput('5')} className={cn(btnClass, numBtn)}>5</button>
                    <button onClick={() => handleInput('6')} className={cn(btnClass, numBtn)}>6</button>
                    <button onClick={() => handleInput('×')} className={cn(btnClass, opBtn)}>×</button>

                    {/* Row 6 */}
                    <button onClick={() => functionBtn('abs')} className={cn(btnClass, fnBtn)}>|x|</button>
                    <button onClick={() => handleInput('1')} className={cn(btnClass, numBtn)}>1</button>
                    <button onClick={() => handleInput('2')} className={cn(btnClass, numBtn)}>2</button>
                    <button onClick={() => handleInput('3')} className={cn(btnClass, numBtn)}>3</button>
                    <button onClick={() => handleInput('-')} className={cn(btnClass, opBtn)}>−</button>

                    {/* Row 7 */}
                    <button onClick={() => handleInput('e')} className={cn(btnClass, fnBtn)}>e</button>
                    <button onClick={() => handleInput('0')} className={cn(btnClass, numBtn)}>0</button>
                    <button onClick={() => handleInput('.')} className={cn(btnClass, numBtn)}>.</button>
                    <button onClick={calculate} className={cn(btnClass, "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 dark:shadow-blue-900/20")}>=</button>
                    <button onClick={() => handleInput('+')} className={cn(btnClass, opBtn)}>+</button>
                </div>
            </div>
        </div>
    );
}
