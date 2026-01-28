import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../utils/cn';
import { calculatorRegistry, categories } from '../calculators/registry';

export default function Breadcrumbs({ items, className }: { items?: { label: string; href: string }[], className?: string }) {
    const location = useLocation();

    // Default logic if no items provided
    let breadcrumbItems = items;

    if (!breadcrumbItems) {
        const pathnames = location.pathname.split('/').filter((x) => x);
        const visiblePathnames = pathnames.filter(x => x !== 'calculator' && x !== 'category');

        // Check if we are on a calculator page
        const calculatorId = pathnames.includes('calculator') ? pathnames[pathnames.length - 1] : null;
        const calculator = calculatorId ? calculatorRegistry.find(c => c.id === calculatorId) : null;

        if (calculator) {
            // Custom trail for calculators: Home > Category > Calculator
            const category = categories.find(c => c.id === calculator.category);
            breadcrumbItems = [
                { label: category?.name || calculator.category, href: `/category/${calculator.category}` },
                { label: calculator.name, href: location.pathname } // Current Page
            ];
        } else {
            // Standard fallback
            breadcrumbItems = visiblePathnames.map((value) => {
                const to = '/' + pathnames.slice(0, pathnames.indexOf(value) + 1).join('/');
                let displayName = value.charAt(0).toUpperCase() + value.slice(1);

                const category = categories.find(c => c.id === value);
                if (category) displayName = category.name;

                return { label: displayName, href: to };
            });
        }
    }

    if (!breadcrumbItems || breadcrumbItems.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-slate-500 mb-6 font-medium overflow-x-auto whitespace-nowrap pb-1", className)}>
            <Link
                to="/"
                className="flex items-center hover:text-blue-600 transition-colors"
                title="Home"
            >
                <Home size={16} />
            </Link>

            {breadcrumbItems.map((item, index) => (
                <div key={item.href} className="flex items-center">
                    <ChevronRight size={16} className="mx-2 text-slate-400 flex-shrink-0" />
                    <Link
                        to={item.href}
                        className={cn(
                            "hover:text-blue-600 transition-colors",
                            index === breadcrumbItems.length - 1 ? "text-slate-900 pointer-events-none" : ""
                        )}
                        aria-current={index === breadcrumbItems.length - 1 ? "page" : undefined}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </nav>
    );
}
