import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { calculatorRegistry, categories } from '../calculators/registry';

export default function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const visiblePathnames = pathnames.filter(x => x !== 'calculator' && x !== 'category');

    if (pathnames.length === 0) return null;

    return (
        <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600">
                        <Home size={16} className="mr-2" />
                        Home
                    </Link>
                </li>
                {visiblePathnames.map((value, index) => {
                    // Reconstruct the actual path for the link
                    let to = '/' + pathnames.slice(0, pathnames.indexOf(value) + 1).join('/');

                    // Determine display name
                    let displayName = value.charAt(0).toUpperCase() + value.slice(1);
                    const isLast = index === visiblePathnames.length - 1;

                    // Check if it's a calculator or category to improve display name
                    const calc = calculatorRegistry.find(c => c.id === value);
                    if (calc) displayName = calc.name;

                    const category = categories.find(c => c.id === value);
                    if (category) displayName = category.name;

                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <ChevronRight size={16} className="text-slate-400" />
                                {isLast ? (
                                    <span className="ml-1 text-sm font-medium text-slate-800 md:ml-2">{displayName}</span>
                                ) : (
                                    <Link to={to} className="ml-1 text-sm font-medium text-slate-500 hover:text-blue-600 md:ml-2">
                                        {displayName}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
