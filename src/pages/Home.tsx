import { useParams, useSearchParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import { CalculatorCard } from '../components/CalculatorCard';
import { SearchInput } from '../components/SearchInput';
import { categoryContent } from '../calculators/categoryContent';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';


export function Home() {
    const { categoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') || '';


    const filteredCalculators = calculatorRegistry
        .filter((calc) => {
            const matchesCategory = categoryId ? calc.category === categoryId : true;
            const matchesSearch = calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                calc.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            // Sort by popularity (true comes first)
            const popA = a.popular ? 1 : 0;
            const popB = b.popular ? 1 : 0;
            return popB - popA;
        });

    const pageTitle = categoryId
        ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Calculators`
        : 'Free Online Calculators';

    const pageDescription = categoryId
        ? `Browse our collection of free ${categoryId} calculators. Accurate, fast, and easy to use.`
        : 'CalcSuite offers a comprehensive collection of free online calculators for finance, health, math, and more.';

    const currentCategoryContent = categoryId ? categoryContent[categoryId] : null;

    return (
        <div className="space-y-8">
            <SEO
                title={pageTitle}
                description={pageDescription}
                keywords={['calculator', categoryId || 'all', 'online tools', 'free online calculator', 'india calculator', 'calculator online free']}
            />
            {/* Organization Schema for Home Page */}
            {!categoryId && (
                <StructuredData
                    type="Organization"
                    data={{
                        name: "CalcSuite",
                        url: "https://calcsuite.in",
                        logo: "https://calcsuite.in/logo.png",
                        sameAs: []
                    }}
                />
            )}

            {/* Breadcrumb Schema for Category Pages */}
            {categoryId && (
                <StructuredData
                    type="BreadcrumbList"
                    data={[
                        { name: 'Home', item: 'https://calcsuite.in/' },
                        { name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1), item: `https://calcsuite.in/category/${categoryId}` }
                    ]}
                />
            )}

            {/* FAQ Schema for Category Pages */}
            {currentCategoryContent?.faqs && (
                <StructuredData
                    type="FAQPage"
                    data={currentCategoryContent.faqs}
                />
            )}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    {currentCategoryContent ? currentCategoryContent.title : pageTitle}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    {currentCategoryContent ? currentCategoryContent.description : pageDescription}
                </p>

                {currentCategoryContent && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50 text-left">
                        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                            {currentCategoryContent.longDescription}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-blue-700 dark:text-blue-300">
                            {currentCategoryContent.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Visible FAQs for Category Pages */}
                {currentCategoryContent?.faqs && (
                    <div className="mt-8 text-left max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {currentCategoryContent.faqs.map((faq, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        {categoryId ? 'Available Calculators' : 'All Tools'}
                        <span className="text-sm font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                            {filteredCalculators.length}
                        </span>
                    </h2>
                    <div className="relative w-full max-w-md z-10">
                        <SearchInput
                            placeholder="Search calculators..."
                            onSearch={(query) => setSearchParams(query ? { q: query } : {})}
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
                                popular={calc.popular}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400">No calculators found matching your criteria.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
