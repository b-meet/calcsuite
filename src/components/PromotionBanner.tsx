import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

const BANNER_STORAGE_KEY = 'calcsuite_promo_banner_dismissed_time_v2';
const DISMISS_DURATION = 12 * 60 * 60 * 1000; // 12 hours in ms

export function PromotionBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dismissedTime = localStorage.getItem(BANNER_STORAGE_KEY);
        const now = Date.now();

        if (!dismissedTime || (now - parseInt(dismissedTime, 10) > DISMISS_DURATION)) {
            // Show if never dismissed OR if 12+ hours have passed
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(BANNER_STORAGE_KEY, Date.now().toString());
    };

    if (!isVisible) return null;

    return (
        <div className="relative overflow-hidden bg-slate-900 border-b border-indigo-500/30 animate-in slide-in-from-top-full fade-in duration-500">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-600/10 to-indigo-600/20 opacity-100" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 text-sm group cursor-default">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors shrink-0 shadow-[0_0_10px_-2px_rgba(99,102,241,0.3)]">
                        <Sparkles size={14} className="animate-pulse" />
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-slate-300 leading-snug">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500 text-white shadow-sm w-fit">
                            New
                        </span>
                        <span className="group-hover:text-white transition-colors">
                            Star your favorite tools for instant access.
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleDismiss}
                    className="p-1.5 sm:pr-auto pr-10 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:scale-105 active:scale-95"
                    aria-label="Dismiss"
                >
                    <X size={15} />
                </button>
            </div>
        </div>
    );
}
