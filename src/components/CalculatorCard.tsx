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

    const getTooltip = () => {
        if (isFav) return "Remove from Favorites";
        if (reachedMax) return "Limit reached (Max 6)";
        return "Add to Favorites";
    };

    return (
        <Link
            to={`/calculator/${id}`}
            className="group relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!isFav && reachedMax) return;
                        toggleFavorite(id);
                    }}
                    className={cn(
                        "p-2 rounded-full transition-colors flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700",
                        isFav ? "text-amber-400 border-amber-200 dark:border-amber-800/30" : "text-slate-300 dark:text-slate-600",
                        (!isFav && reachedMax) && "opacity-50 cursor-not-allowed hover:bg-transparent"
                    )}
                    title={getTooltip()}
                >
                    <Star
                        size={16}
                        className={isFav ? "fill-amber-400" : ""}
                    />
                </button>
            </div>

            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl w-fit group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300">
                <Icon className="text-blue-600 dark:text-blue-400" size={24} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200 pr-10">
                {name}
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                {description}
            </p>

            <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full capitalize border border-slate-200 dark:border-slate-700">
                    {category}
                </span>
                {popular && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full border border-orange-100 dark:border-orange-900/30 shadow-sm uppercase tracking-wider">
                        <Star size={10} fill="currentColor" />
                        Popular
                    </span>
                )}
            </div>
        </Link>
    );
}
