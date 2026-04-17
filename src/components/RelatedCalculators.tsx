
import { calculatorRegistry } from '../calculators/registry';
import { CalculatorCard } from './CalculatorCard';
import { RELATED_CALCULATOR_LINKS } from '../constants/relatedCalculatorLinks';

interface RelatedCalculatorsProps {
    currentCalculatorId: string;
    category: string;
}

export default function RelatedCalculators({ currentCalculatorId, category }: RelatedCalculatorsProps) {
    const curatedLinks = RELATED_CALCULATOR_LINKS[currentCalculatorId] || [];
    const curatedIds = curatedLinks
        .map((item) => item.to.match(/^\/calculator\/([^/]+)$/)?.[1])
        .filter((id): id is string => Boolean(id));

    const curatedRelated = curatedIds.reduce<typeof calculatorRegistry>((acc, id) => {
        const match = calculatorRegistry.find((calc) => calc.id === id);
        if (match) {
            acc.push(match);
        }
        return acc;
    }, []);

    const fallbackRelated = calculatorRegistry
        .filter(c => c.category === category && c.id !== currentCalculatorId && !curatedIds.includes(c.id));

    const related = [...curatedRelated, ...fallbackRelated].slice(0, 3);

    if (related.length === 0) return null;

    return (
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Related Calculators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
