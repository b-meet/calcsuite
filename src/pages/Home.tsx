import { useParams, useSearchParams } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import { CalculatorCard } from '../components/CalculatorCard';
import { SearchInput } from '../components/SearchInput';
import { categoryContent } from '../calculators/categoryContent';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { ResourceLinkGrid } from '../components/ResourceLinkGrid';
import { AdBanner } from '../components/AdBanner';
import { Brain, Sparkles, ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';


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
            if (!searchQuery) {
                // Priority list
                const priority = ['india-gst', 'india-emi', 'sip', 'bmi'];

                // If both are popular
                if (a.popular && b.popular) {
                    const idxA = priority.indexOf(a.id);
                    const idxB = priority.indexOf(b.id);

                    // If one or both are in priority list
                    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                    if (idxA !== -1) return -1;
                    if (idxB !== -1) return 1;

                    return 0; // Default order for other popular items
                }

                // Standard popular vs non-popular sort
                const popA = a.popular ? 1 : 0;
                const popB = b.popular ? 1 : 0;
                return popB - popA;
            }

            const lowerQuery = searchQuery.toLowerCase();
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            // 1. Exact Name match
            if (nameA === lowerQuery) return -1;
            if (nameB === lowerQuery) return 1;

            // 2. Name Starts with
            const aStarts = nameA.startsWith(lowerQuery);
            const bStarts = nameB.startsWith(lowerQuery);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;

            // 3. Name Contains
            const aName = nameA.includes(lowerQuery);
            const bName = nameB.includes(lowerQuery);
            if (aName && !bName) return -1;
            if (!aName && bName) return 1;

            // 4. Fallback to popularity
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


            </div>
            <section>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 md:gap-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 shrink-0">
                        {categoryId ? 'Available Calculators' : 'All Tools'}
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/50 shadow-sm transition-transform hover:scale-105">
                            {filteredCalculators.length}
                        </span>
                    </h2>
                    <div className="relative w-full md:max-w-md z-50">
                        <SearchInput
                            placeholder="Search calculators..."
                            onSearch={(query) => setSearchParams(query ? { q: query } : {})}
                        />
                    </div>
                </div>

                {!searchQuery && !categoryId && (
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Link 
                            to="/brain-training"
                            className="group relative block overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl transition-all hover:shadow-blue-500/20 hover:-translate-y-1 active:translate-y-0"
                        >
                            {/* Animated Background Gradients */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] -mr-48 -mt-48 animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[80px] -ml-24 -mb-24" />
                            
                            <div className="relative p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
                                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-40 animate-pulse" />
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform">
                                            <Brain className="text-white w-10 h-10 sm:w-12 sm:h-12" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm transform -rotate-12 border-2 border-slate-900">
                                            LIVE
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-2">
                                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest italic">
                                                Season 1 • Arena
                                            </span>
                                            <div className="flex items-center gap-1.5 text-amber-500">
                                                <Trophy size={14} />
                                                <span className="text-xs font-bold uppercase tracking-tighter italic">Daily Challenge</span>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl sm:text-4xl font-black text-white italic tracking-tight mb-2 uppercase group-hover:text-blue-400 transition-colors">
                                            Daily Brain Arena
                                        </h2>
                                        <p className="text-slate-400 text-sm sm:text-base max-w-xl font-medium">
                                            Sharpen your logic with daily 3×3, 5×5 and 8×8 challenges. Fresh puzzles every <span className="text-white">12:00 AM IST</span>.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="shrink-0 w-full md:w-auto">
                                    <div className="bg-blue-600 group-hover:bg-blue-500 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic text-sm tracking-widest shadow-xl shadow-blue-600/20 transition-all group-hover:gap-5 group-active:scale-95">
                                        Start Training
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Sparkles */}
                            <Sparkles className="absolute top-4 right-8 text-blue-500/30 w-8 h-8 animate-bounce delay-700" />
                            <Sparkles className="absolute bottom-4 left-1/2 text-indigo-500/20 w-6 h-6 animate-pulse" />
                        </Link>
                    </div>
                )}

                {filteredCalculators.length > 0 ? (
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-6">
                        {filteredCalculators.map((calc, index) => (
                            <div key={calc.id} className="contents">
                                <CalculatorCard
                                    id={calc.id}
                                    name={calc.name}
                                    description={calc.description}
                                    icon={calc.icon}
                                    category={calc.category}
                                    popular={calc.popular}
                                />
                                {(index + 1) % 12 === 0 && (
                                    <div className="col-span-full">
                                        <AdBanner />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500 dark:text-slate-400">No calculators found matching your criteria.</p>
                    </div>
                )}
            </section>

            {/* Visible FAQs for Category Pages - Moved to bottom */}
            {currentCategoryContent?.faqs && (
                <section className="mt-16 text-left max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {currentCategoryContent.faqs.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                                <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <AdBanner />

            {!categoryId && <ResourceLinkGrid />}
        </div>
    );
}
