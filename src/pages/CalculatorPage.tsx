import { useParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import { useEffect } from 'react';
import { trackCalculatorUse } from '../utils/analytics';
import RelatedCalculators from '../components/RelatedCalculators';
import StructuredData from '../components/StructuredData';

export function CalculatorPage() {
    const { calculatorId } = useParams();

    const calculatorDef = calculatorRegistry.find(c => c.id === calculatorId);

    useEffect(() => {
        if (calculatorDef) {
            trackCalculatorUse(calculatorDef.id, calculatorDef.name);
        }
    }, [calculatorDef]);

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

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={calculatorDef.name}
                description={calculatorDef.description}
                keywords={[calculatorDef.category, calculatorDef.name.toLowerCase(), 'calculator', 'free online calculator']}
                image={`https://calcsuite.com/og/${calculatorDef.id}.png`}
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
                    { name: 'Home', item: 'https://calcsuite.com/' },
                    { name: calculatorDef.category.charAt(0).toUpperCase() + calculatorDef.category.slice(1), item: `https://calcsuite.com/category/${calculatorDef.category}` },
                    { name: calculatorDef.name, item: `https://calcsuite.com/calculator/${calculatorDef.id}` }
                ]}
            />

            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{calculatorDef.name}</h1>
                <p className="text-slate-500">{calculatorDef.description}</p>
            </div>
            <Component />

            <RelatedCalculators
                currentCalculatorId={calculatorDef.id}
                category={calculatorDef.category}
            />

            {Content && (
                <div className="mt-16 border-t border-slate-200 pt-12">
                    {/* Make content a semantic section */}
                    <article className="prose prose-slate max-w-none">
                        <Content />
                    </article>
                </div>
            )}
        </div>
    );
}
