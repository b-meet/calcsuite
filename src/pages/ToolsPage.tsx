import { useParams, Navigate, Link } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { CALCULATOR_REFERENCES } from '../constants/calculatorReferences';
import { CALCULATOR_METADATA } from '../constants/calculatorMetadata';
import { SmartInternalLinkFooter } from '../components/SmartInternalLinkFooter';
import { ExternalLink, ArrowLeft, Info, HelpCircle } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const ToolsPage = () => {
    const { category, slug } = useParams<{ category: string; slug: string }>();

    if (!category || !slug) return <Navigate to="/404" replace />;

    // Normalize keys to match objects (e.g., 'investment' -> 'INVESTMENT', 'sip' -> 'SIP')
    const catKey = category.toUpperCase();
    const slugKey = slug.toUpperCase();

    const data = CALCULATOR_METADATA[catKey]?.[slugKey];
    const externalLink = CALCULATOR_REFERENCES[catKey]?.[slugKey];

    if (!data || !externalLink) {
        return <Navigate to="/404" replace />;
    }

    const getInternalCalcRoute = (calcSlug: string) => {
        const mapping: Record<string, string> = {
            'SIP': 'sip',
            'INCOME_TAX': 'india-tax',
            'GST': 'india-gst',
            'EMI': 'loan',
            'HOME_LOAN_EMI': 'india-emi',
            'CAR_LOAN_EMI': 'auto-loan',
            'FD': 'india-fd',
            'RD': 'india-rd',
            'PPF': 'india-ppf',
            'COMPOUND_INTEREST': 'compound-interest',
            'SIMPLE_INTEREST': 'simple-interest',
            'LUMPSUM': 'investment'
        };
        if (mapping[calcSlug]) return `/calculator/${mapping[calcSlug]}`;
        
        const match = calculatorRegistry.find(c => c.id.replace('india-', '').replace('-', '_').toUpperCase() === calcSlug);
        if (match) return `/calculator/${match.id}`;
        
        return null;
    };

    const internalRoute = getInternalCalcRoute(slugKey);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <SEO 
                title={data.title} 
                description={data.description} 
                canonicalPath={`/tools/${category}/${slug}`}
            />
            <StructuredData 
                type="FAQPage" 
                data={data.faqs} 
            />

            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Calculators
            </Link>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
                <header className="mb-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-wider mb-4">
                        {catKey.replace('_', ' ')}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                        {data.title}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-4">
                        {data.description}
                    </p>
                    {internalRoute && (
                        <p className="text-md text-primary-700 dark:text-primary-300 font-medium max-w-2xl bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl border border-primary-100 dark:border-primary-800">
                            Looking for a quick calculation? Try our free <Link to={internalRoute} className="underline font-bold hover:text-primary-800 dark:hover:text-primary-200">{data.title}</Link> directly on CalcSuite.
                        </p>
                    )}
                </header>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
                    <div className="bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-6 border border-primary-100 dark:border-primary-900/20">
                        <div className="flex items-start mb-4">
                            <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm mr-4">
                                <Info className="w-6 h-6 text-primary-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Use this Tool</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                    Access the free online version of this calculator via our trusted partner.
                                </p>
                            </div>
                        </div>
                        <a 
                            href={externalLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95"
                        >
                            Open Calculator
                            <ExternalLink className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="flex items-center space-x-3 mb-6">
                        <HelpCircle className="w-6 h-6 text-primary-600" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {data.faqs.map((faq, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <AdBanner />

                <SmartInternalLinkFooter category={catKey} currentSlug={slugKey} />
            </div>
        </div>
    );
};
