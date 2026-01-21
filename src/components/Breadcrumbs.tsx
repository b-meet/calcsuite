import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { calculatorRegistry } from '../calculators/registry';

export default function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

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
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    let displayName = value.charAt(0).toUpperCase() + value.slice(1);

                    // Try to get a nicer name if it's a calculator ID
                    if (pathnames[0] === 'calculator') { // Assuming route is /calculator/:id
                        const calc = calculatorRegistry.find(c => c.id === value);
                        if (calc) displayName = calc.name;
                    }

                    // Static mapping for cleaner names
                    if (value === 'calculator') displayName = 'Calculators';
                    if (value === 'category') displayName = 'Category';

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
