import { Link } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import { alternativesData } from '../content/alternatives/data';
import SEO from '../components/SEO';
import { FolderTree, Calculator, ArrowRightCircle, BookOpen } from 'lucide-react';

export function Directory() {
    // Simplest and most reliable route mapping to our internal calculators
    const getToolRoute = (calcId: string) => {
        return `/calculator/${calcId}`;
    };

    // Grouping
    const categories = {
        'Financial & Investment': calculatorRegistry.filter(c => c.category === 'financial'),
        'Taxation & Compliance (India)': calculatorRegistry.filter(c => c.category === 'india'),
        'Health & Fitness': calculatorRegistry.filter(c => c.category === 'health'),
        'Mathematics': calculatorRegistry.filter(c => c.category === 'math'),
        'General Tools': calculatorRegistry.filter(c => c.category === 'other'),
    };

    const alternativesList = Object.values(alternativesData);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <SEO
                title="Master Tool Directory & Sitemap"
                description="The complete index of every calculator, tax tool, health tracker, and competitor alternative available on CalcSuite."
            />

            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">
                        <FolderTree className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        The Master Directory
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        An organized, complete index of every powerful tool built into CalcSuite. Click any link to jump straight to the calculator.
                    </p>
                </div>

                {/* Calculator Grid Sections */}
                <div className="space-y-12">
                    {Object.entries(categories).map(([categoryName, items]) => (
                        <div key={categoryName} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                                <Calculator className="w-6 h-6 text-blue-500" />
                                {categoryName}
                                <span className="text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-3 py-1 rounded-full ml-auto">
                                    {items.length} Tools
                                </span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                                {items.map((calc) => (
                                    <Link 
                                        key={calc.id} 
                                        to={getToolRoute(calc.id)}
                                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all flex items-start gap-2 group text-sm md:text-base font-medium py-1"
                                    >
                                        <ArrowRightCircle className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 shrink-0" />
                                        <span>{calc.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Brand Heist / Alternatives Section */}
                <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 rounded-3xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-6 border-b border-blue-200 dark:border-blue-800/50 pb-4">
                        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        Competitor Alternatives
                        <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full ml-auto">
                            {alternativesList.length} Pages
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                        Looking for a faster, ad-free alternative to the old industry standards? Check out how CalcSuite compares against the big names.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                        {alternativesList.map((alt) => (
                            <Link 
                                key={alt.id} 
                                to={`/alternatives/${alt.id}`}
                                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all flex items-start gap-2 group text-sm md:text-base font-semibold py-1 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
                            >
                                <ArrowRightCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>{alt.name} Alternative</span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
