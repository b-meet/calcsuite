import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CalculatorCardProps {
    id: string;
    name: string;
    description: string;
    icon: any;
    category: string;
}

export function CalculatorCard({ id, name, description, icon: Icon, category }: CalculatorCardProps) {
    return (
        <Link
            to={`/calculator/${id}`}
            className="group relative flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-blue-500" size={20} />
            </div>

            <div className="mb-4 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-100 transition-colors duration-300">
                <Icon className="text-blue-600" size={24} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                {name}
            </h3>

            <p className="text-sm text-slate-500 line-clamp-2">
                {description}
            </p>

            <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full capitalize">
                    {category}
                </span>
            </div>
        </Link>
    );
}
