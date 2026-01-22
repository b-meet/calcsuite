import { useParams, useSearchParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import { CalculatorCard } from '../components/CalculatorCard';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';

export function Home() {
    const { categoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') || '';


    const filteredCalculators = calculatorRegistry.filter((calc) => {
        const matchesCategory = categoryId ? calc.category === categoryId : true;
        const matchesSearch = calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            calc.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchParams(query ? { q: query } : {});
    };

    const pageTitle = categoryId
        ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Calculators`
        : 'Free Online Calculators';

    const pageDescription = categoryId
        ? `Browse our collection of free ${categoryId} calculators. Accurate, fast, and easy to use.`
        : 'CalcSuite offers a comprehensive collection of free online calculators for finance, health, math, and more.';

    return (
        <div className="space-y-8">
            <SEO
                title={pageTitle}
                description={pageDescription}
                keywords={['calculator', categoryId || 'all', 'online tools']}
            />
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {pageTitle}
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {pageDescription}
                </p>
            </div>

            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        {categoryId ? 'Available Calculators' : 'All Tools'}
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                            {filteredCalculators.length}
                        </span>
                    </h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search calculators..."
                            className="pl-9 pr-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-48"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {filteredCalculators.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCalculators.map((calc) => (
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
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-slate-500">No calculators found matching your criteria.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
