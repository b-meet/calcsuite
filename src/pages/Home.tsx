import { useParams } from 'react-router-dom';
import { calculatorRegistry, categories } from '../calculators/registry';
import { CalculatorCard } from '../components/CalculatorCard';

export function Home() {
    const { categoryId } = useParams();

    const currentCategory = categoryId
        ? categories.find(c => c.id === categoryId)
        : null;

    const calculators = categoryId
        ? calculatorRegistry.filter(c => c.category === categoryId)
        : calculatorRegistry;

    const title = currentCategory ? currentCategory.name : 'Welcome to CalcSuite';
    const description = currentCategory
        ? `Explore our collection of ${currentCategory.name.toLowerCase()} calculators.`
        : 'Everything you need to calculate, convert, and solve. Choose from our collection of premium calculators.';

    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                    {title}
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                    {description}
                </p>
            </header>

            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                        {categoryId ? 'Available Calculators' : 'All Tools'}
                    </h2>
                </div>

                {calculators.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {calculators.map((calc) => (
                            <CalculatorCard
                                key={calc.id}
                                {...calc}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
                        <p className="text-slate-500">No calculators found in this category.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
