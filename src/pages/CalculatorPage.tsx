import { useParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import SEO from '../components/SEO';
import NotFound from './NotFound';

import RelatedCalculators from '../components/RelatedCalculators';
import StructuredData from '../components/StructuredData';
import { useFavorites } from '../hooks/useFavorites';
import { Star } from 'lucide-react';
import { cn } from '../utils/cn';

export function CalculatorPage() {
    const { calculatorId } = useParams();
    const { isFavorite, toggleFavorite, reachedMax } = useFavorites();

    const calculatorDef = calculatorRegistry.find(c => c.id === calculatorId);


    if (!calculatorDef) {
        return <NotFound />;
    }

    const Component = calculatorDef.component;
    const Content = calculatorDef.content;

    // Map internal category to Schema.org applicationCategory
    const getSchemaCategory = (cat: string) => {
        switch (cat) {
            case 'financial': return 'FinanceApplication';
            case 'health': return 'HealthApplication';
            case 'math': return 'EducationalApplication';
            case 'basic': return 'UtilityApplication';
            case 'india': return 'FinanceApplication';
            default: return 'UtilityApplication';
        }
    };

    const isFav = isFavorite(calculatorDef.id);
    const getTooltip = () => {
        if (isFav) return "Remove from Favorites";
        if (reachedMax) return "Limit reached (Maximum 6)";
        return "Add to Favorites";
    };

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={calculatorDef.name}
                description={calculatorDef.description}
                keywords={[calculatorDef.category, calculatorDef.name.toLowerCase(), 'calculator', 'free online calculator']}
                image={`https://calcsuite.in/og/${calculatorDef.id}.png`}
            />

            {/* Rich Snippet for Software App */}
            <StructuredData
                type="SoftwareApplication"
                data={{
                    name: calculatorDef.name,
                    description: calculatorDef.description,
                    category: getSchemaCategory(calculatorDef.category),
                    features: [`Free ${calculatorDef.name}`, 'Instant Results', 'Mobile Friendly', 'Secure'],
                }}
            />

            {/* Rich Snippet for FAQ Page */}
            {calculatorDef.faqs && (
                <StructuredData
                    type="FAQPage"
                    data={calculatorDef.faqs}
                />
            )}

            {/* Rich Snippet for Breadcrumbs */}
            <StructuredData
                type="BreadcrumbList"
                data={[
                    { name: 'Home', item: 'https://calcsuite.in/' },
                    { name: calculatorDef.category.charAt(0).toUpperCase() + calculatorDef.category.slice(1), item: `https://calcsuite.in/category/${calculatorDef.category}` },
                    { name: calculatorDef.name, item: `https://calcsuite.in/calculator/${calculatorDef.id}` }
                ]}
            />

            {/* Rich Snippet for HowTo */}
            {calculatorDef.howTo && (
                <StructuredData
                    type="HowTo"
                    data={calculatorDef.howTo}
                />
            )}

            <div className="mb-6 text-center relative max-w-2xl mx-auto">
                <button
                    onClick={() => {
                        if (!isFav && reachedMax) return;
                        toggleFavorite(calculatorDef.id);
                    }}
                    className={cn(
                        "absolute top-0 right-0 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                        (!isFav && reachedMax) && "opacity-50 cursor-not-allowed hover:bg-transparent"
                    )}
                    title={getTooltip()}
                >
                    <Star
                        size={24}
                        className={isFav ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-600"}
                    />
                </button>
                <div className="pt-2">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{calculatorDef.name}</h1>
                    <p className="text-slate-500 dark:text-slate-400">{calculatorDef.description}</p>
                </div>
            </div>
            <Component />

            <RelatedCalculators
                currentCalculatorId={calculatorDef.id}
                category={calculatorDef.category}
            />

            {(calculatorDef.longDescription || calculatorDef.features || calculatorDef.educationalContent || Content) && (
                <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-12">
                    <article className="prose prose-slate dark:prose-invert max-w-none">
                        {calculatorDef.longDescription && (
                            <div className="mb-8">
                                <p className="lead">{calculatorDef.longDescription}</p>
                            </div>
                        )}

                        {calculatorDef.features && (
                            <div className="mb-8">
                                <h3>Key Features</h3>
                                <ul>
                                    {calculatorDef.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {calculatorDef.educationalContent && calculatorDef.educationalContent.map((item, idx) => (
                            <div key={idx} className="mb-8">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}

                        {/* Fallback for legacy content */}
                        {Content && <Content />}
                    </article>
                </div>
            )}
        </div>
    );
}
