
import { calculatorRegistry } from '../calculators/registry';
import { CalculatorCard } from './CalculatorCard';

interface RelatedCalculatorsProps {
    currentCalculatorId: string;
    category: string;
}

export default function RelatedCalculators({ currentCalculatorId, category }: RelatedCalculatorsProps) {
    // 1. Filter by category
    // 2. Exclude current calculator
    // 3. Take first 3 results (or random 3 if we wanted to be fancy, but simple is better for SEO stability)
    const related = calculatorRegistry
        .filter(c => c.category === category && c.id !== currentCalculatorId)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Related Calculators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((calc) => (
                    <CalculatorCard
                        key={calc.id}
                        id={calc.id}
                        name={calc.name}
                        description={calc.description}
                        icon={calc.icon}
                        category={calc.category}
                    />
                ))}
            </div>
        </div>
    );
}
