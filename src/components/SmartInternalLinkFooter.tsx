import { Link } from 'react-router-dom';
import { CALCULATOR_REFERENCES } from '../constants/calculatorReferences';

interface SmartInternalLinkFooterProps {
    category: string;
    currentSlug: string;
}

export const SmartInternalLinkFooter = ({ category, currentSlug }: SmartInternalLinkFooterProps) => {
    // Normalize to upper case for indexing
    const catKey = category.toUpperCase();
    const slugKey = currentSlug.toUpperCase();
    
    const categoryLinks = CALCULATOR_REFERENCES[catKey];
    
    if (!categoryLinks) return null;

    // Get all slugs in the category except the current one
    const relatedSlugs = Object.keys(categoryLinks).filter(slug => slug !== slugKey);
    
    // Pick up to 3 related tools
    const displaySlugs = relatedSlugs.slice(0, 3);

    if (displaySlugs.length === 0) return null;

    return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displaySlugs.map(slug => (
                    <Link
                        key={slug}
                        to={`/tools/${catKey.toLowerCase()}/${slug.toLowerCase()}/`}
                        className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-primary-500 transition-all group"
                    >
                        <span className="block text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                            {catKey.replace('_', ' ')}
                        </span>
                        <span className="block text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                            {slug.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')} Calculator
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
