import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface CalculatorCardProps {
    id: string;
    name: string;
    description: string;
    icon: any;
    category: string;
    popular?: boolean;
}

export function CalculatorCard({ id, name, description, icon: Icon, category, popular }: CalculatorCardProps) {
    return (
        <Link
            to={`/calculator/${id}`}
            className="group relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-blue-500 dark:text-blue-400" size={20} />
            </div>


            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl w-fit group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300">
                <Icon className="text-blue-600 dark:text-blue-400" size={24} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200">
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
