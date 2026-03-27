import { useState } from 'react';
import { Brain, ArrowRight, ArrowLeft, Check, X, Calculator } from 'lucide-react';
import { cn } from '../utils/cn';

interface KenKenHelpProps {
    onClose: () => void;
}

export function KenKenHelp({ onClose }: KenKenHelpProps) {
    const [step, setStep] = useState(0);

    const slides = [
        {
            title: "Rule 1: Latin Square",
            description: "Each row and column must contain unique numbers from 1 to 6. No repeats allowed!",
            visual: (
                <div className="flex flex-col items-center gap-6 my-8">
                    <div className="grid grid-cols-2 gap-2 border-2 border-slate-900 dark:border-slate-500 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                        <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-green-500 rounded-lg text-2xl font-bold text-green-600">1</div>
                        <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-green-500 rounded-lg text-2xl font-bold text-green-600">2</div>
                        <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-green-500 rounded-lg text-2xl font-bold text-green-600">2</div>
                        <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-green-500 rounded-lg text-2xl font-bold text-green-600">1</div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                        <Check size={18} />
                        Valid 2x2 Example
                    </div>
                </div>
            )
        },
        {
            title: "Rule 2: Cage Math",
            description: "Groups of cells (cages) have a target number and an operator (+, -, x, ÷) in the corner.",
            visual: (
                <div className="flex flex-col items-center gap-6 my-8">
                    <div className="grid grid-cols-2 gap-0 border-2 border-slate-900 dark:border-slate-500 rounded-xl overflow-hidden shadow-lg">
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center relative border-r-2 border-b-2 border-blue-500/30">
                            <span className="absolute top-1 left-1.5 text-[10px] font-bold text-blue-600">3+</span>
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">1</span>
                        </div>
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center relative border-b-2 border-blue-500/30">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">2</span>
                        </div>
                        <div className="w-20 h-20 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-300">...</div>
                        <div className="w-20 h-20 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-300">...</div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-xs">
                        In this <span className="text-blue-600 font-bold">3+</span> cage, the numbers <span className="font-bold">1 + 2 = 3</span>. Target reached!
                    </p>
                </div>
            )
        },
        {
            title: "Pro Tip: Training Mode",
            description: "Start solving by clicking any cell. The timer only begins once you make your first move!",
            visual: (
                <div className="flex flex-col items-center gap-6 my-8">
                    <div className="relative w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin duration-[3s]" />
                        <Calculator size={48} className="text-blue-500" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Timer Paused
                        </div>
                        <p className="text-xs text-slate-500">Wait until you're ready to focus.</p>
                    </div>
                </div>
            )
        }
    ];

    const next = () => {
        if (step < slides.length - 1) setStep(step + 1);
        else onClose();
    };

    const prev = () => {
        if (step > 0) setStep(step - 1);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            <div 
                className="absolute inset-0 bg-slate-900/40 dark:bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />
            
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[24px] shadow-2xl relative overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-500 border border-slate-200 dark:border-slate-800">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 flex gap-0.5 p-0.5">
                    {slides.map((_, i) => (
                        <div 
                            key={i} 
                            className={cn(
                                "flex-1 rounded-full transition-all duration-300",
                                i <= step ? "bg-blue-500" : "bg-slate-100 dark:bg-slate-800"
                            )}
                        />
                    ))}
                </div>

                <div className="p-6 pt-8">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                            <Brain className="text-blue-500" size={20} />
                        </div>
                        <button 
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="min-h-[340px] flex flex-col items-center">
                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 text-center uppercase tracking-tight italic">
                            {slides[step].title}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-center text-sm leading-relaxed mb-4 font-medium">
                            {slides[step].description}
                        </p>
                        
                        <div className="flex-1 w-full flex items-center justify-center">
                            {slides[step].visual}
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                        {step > 0 && (
                            <button 
                                onClick={prev}
                                className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl font-bold transition-all border border-slate-200 dark:border-slate-700 text-sm"
                            >
                                <ArrowLeft size={16} />
                                Back
                            </button>
                        )}
                        <button 
                            onClick={next}
                            className="flex-[2] py-3.5 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 text-sm"
                        >
                            {step === slides.length - 1 ? "Start Training" : "Continue"}
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
