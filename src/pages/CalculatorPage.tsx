import { useParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import SEO from '../components/SEO';
import NotFound from './NotFound';
import { useEffect } from 'react';
import { trackCalculatorUse } from '../utils/analytics';

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

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={calculatorDef.name}
                description={calculatorDef.description}
                keywords={[calculatorDef.category, calculatorDef.name.toLowerCase(), 'calculator', 'free online calculator']}
                image={`https://calcsuite.com/og/${calculatorDef.id}.png`} // Placeholder for dynamic social images
            />
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{calculatorDef.name}</h1>
                <p className="text-slate-500">{calculatorDef.description}</p>
            </div>
            <Component />
        </div>
    );
}
