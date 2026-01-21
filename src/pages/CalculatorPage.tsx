import { useParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';

export function CalculatorPage() {
    const { calculatorId } = useParams();

    // We need to export a map or find function from registry
    const calculatorDef = calculatorRegistry.find(c => c.id === calculatorId);

    if (!calculatorDef) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-slate-800">Calculator Not Found</h2>
                <p className="text-slate-500">The calculator you are looking for does not exist.</p>
            </div>
        );
    }

    const Component = calculatorDef.component;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{calculatorDef.name}</h1>
                <p className="text-slate-500">{calculatorDef.description}</p>
            </div>
            <Component />
        </div>
    );
}
