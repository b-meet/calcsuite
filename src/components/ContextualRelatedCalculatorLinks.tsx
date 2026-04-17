import { Link } from 'react-router-dom';
import { RELATED_CALCULATOR_LINKS } from '../constants/relatedCalculatorLinks';

interface ContextualRelatedCalculatorLinksProps {
    calculatorId: string;
}

export function ContextualRelatedCalculatorLinks({ calculatorId }: ContextualRelatedCalculatorLinksProps) {
    const links = RELATED_CALCULATOR_LINKS[calculatorId];

    if (!links || links.length === 0) {
        return null;
    }

    return (
        <section className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Related calculators
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Explore closely related tools for the next step in the same calculation workflow.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {links.map((link) => (
                        <li key={`${calculatorId}-${link.to}`}>
                            <Link
                                to={link.to}
                                className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                            >
                                {link.anchorText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
