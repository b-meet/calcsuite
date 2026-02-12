import { useState, useEffect } from 'react';
import { X, History, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

const MODAL_STORAGE_KEY = 'calcsuite_history_promo_dismissed_time';
const DISMISS_DURATION = 24 * 60 * 60 * 1000; // 24 hours in ms

export function HistoryPromoModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dismissedValue = localStorage.getItem(MODAL_STORAGE_KEY);
        const now = Date.now();

        if (dismissedValue && (now - parseInt(dismissedValue, 10) < DISMISS_DURATION)) {
            // Do not show if dismissed within the last 12 hours
            return;
        }

        // Show after 3 seconds if not dismissed
        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = (saveToStorage = false) => {
        setIsVisible(false);
        if (saveToStorage) {
            localStorage.setItem(MODAL_STORAGE_KEY, Date.now().toString());
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6 pointer-events-none">
            {/* Backdrop - Only closes for current session */}
            <div
                className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] pointer-events-auto"
                onClick={() => handleClose(false)}
            />

            <div className={cn(
                "relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 p-8 pointer-events-auto animate-in fade-in zoom-in slide-in-from-bottom-10 duration-500"
            )}>
                {/* Close Button - 12 Hour Dismissal */}
                <button
                    onClick={() => handleClose(true)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    aria-label="Dismiss for 12 hours"
                >
                    <X size={20} />
                </button>

                {/* Content */}
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                            <div className="relative w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 transform transition-transform hover:rotate-0">
                                <History size={32} />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-indigo-500 text-white p-1.5 rounded-full shadow-lg">
                                <Sparkles size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Never Lose a Calculation!
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            We've added <strong><em>**Calculation History**</em></strong> to all our tools. Now your last 5 calculations are saved automatically for quick reference.
                        </p>
                    </div>

                    <div className="pt-2">
                        {/* CTA Button - 12 Hour Dismissal */}
                        <button
                            onClick={() => handleClose(true)}
                            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg active:scale-95"
                        >
                            Awesome, thanks!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
