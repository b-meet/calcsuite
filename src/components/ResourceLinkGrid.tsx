import { Link } from 'react-router-dom';
import { CALCULATOR_REFERENCES } from '../constants/calculatorReferences';
import { TrendingUp, Landmark, Briefcase, BookOpen, Percent } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
    INVESTMENT: TrendingUp,
    TAXATION: Percent,
    BANKING_LOANS: Landmark,
    RETIREMENT_SALARY: Briefcase,
    MISC: BookOpen,
};

export const ResourceLinkGrid = () => {
    return (
        <section className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Third-Party Financial Tools & Resources
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Explore a curated collection of external calculators and financial resources from internet's trusted sources to help you make informed decisions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(CALCULATOR_REFERENCES).map(([category, slugs]) => {
                    const Icon = CATEGORY_ICONS[category] || BookOpen;
                    return (
                        <div key={category} className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    {category.replace(/_/g, ' ')}
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {Object.keys(slugs).slice(0, 5).map(slug => (
                                    <li key={slug}>
                                        <Link
                                            to={`/tools/${category.toLowerCase()}/${slug.toLowerCase()}`}
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mr-2 group-hover:bg-primary-500 transition-colors" />
                                            {slug.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')} Calculator
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
