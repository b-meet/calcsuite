import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import { cn } from '../utils/cn';

interface CalculatorCardProps {
    id: string;
    name: string;
    description: string;
    icon: any;
    category: string;
    popular?: boolean;
}

export function CalculatorCard({ id, name, description, icon: Icon, category, popular }: CalculatorCardProps) {
    const { isFavorite, toggleFavorite, reachedMax } = useFavorites();
    const isFav = isFavorite(id);

    const [shake, setShake] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [showLimitWarning, setShowLimitWarning] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getTooltip = () => {
        if (showLimitWarning) return "You can only add 5 favorites!";
        if (isFav) return "Remove from Favorites";
        if (reachedMax) return "Limit reached (Max 5)";
        return "Add to Favorites";
    };

    const handleStarClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isFav && reachedMax) {
            // User is trying to add but limit reached
            setShake(true);
            setClickCount(prev => prev + 1);

            // On 3rd click (prev was 2), show warning
            if (clickCount >= 2) {
                setShowLimitWarning(true);
            }

            // Reset shake after animation
            setTimeout(() => setShake(false), 500);

            // Reset warning and count after a delay
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setShowLimitWarning(false);
                setClickCount(0);
            }, 3000);

            return;
        }

        // Normal toggle
        toggleFavorite(id);
        setClickCount(0);
        setShowLimitWarning(false);
    };

    return (
        <Link
            to={`/calculator/${id}`}
            className="group relative flex flex-col p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300 shrink-0">
                        <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full capitalize border border-slate-200 dark:border-slate-700">
                            {category}
                        </span>
                        {popular && (
                            <span className="hidden sm:flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full border border-orange-100 dark:border-orange-900/30 shadow-sm uppercase tracking-wider">
                                <Star size={10} fill="currentColor" />
                                Popular
                            </span>
                        )}
                    </div>
                </div>

                <div className="relative z-10 shrink-0 -mt-1 -mr-1">
                    {showLimitWarning && (
                        <div className="absolute bottom-full right-0 mb-2 w-32 bg-red-500 text-white text-[10px] font-bold py-1 px-2 rounded-lg shadow-lg text-center animate-in fade-in zoom-in-95 duration-200 z-20 pointer-events-none after:content-[''] after:absolute after:top-100% after:right-4 after:border-4 after:border-transparent after:border-t-red-500">
                            Max 5 Favorites!
                        </div>
                    )}
                    <button
                        onClick={handleStarClick}
                        className={cn(
                            "p-2 rounded-full transition-colors flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700",
                            isFav ? "text-amber-400 border-amber-200 dark:border-amber-800/30" : "text-slate-300 dark:text-slate-600 hover:text-slate-400",
                            (!isFav && reachedMax) && "opacity-50 cursor-not-allowed hover:bg-transparent",
                            shake && "animate-shake text-red-400 border-red-200"
                        )}
                        title={getTooltip()}
                    >
                        <Star
                            size={18}
                            className={isFav ? "fill-amber-400" : ""}
                        />
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {description}
                </p>
            </div>
        </Link>
    );
}
