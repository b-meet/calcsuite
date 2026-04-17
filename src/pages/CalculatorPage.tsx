import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { calculatorRegistry } from '../calculators/registry';
import SEO, { buildBreadcrumbJsonLd, toAbsoluteUrl } from '../components/SEO';
import NotFound from './NotFound';

import RelatedCalculators from '../components/RelatedCalculators';
import { ContextualRelatedCalculatorLinks } from '../components/ContextualRelatedCalculatorLinks';
import { useFavorites } from '../hooks/useFavorites';
import { Share2, Star } from 'lucide-react';
import { cn } from '../utils/cn';
import { AdBanner } from '../components/AdBanner';
import { ToolContext } from '../components/ToolContext';
import { getCalculatorHeroContent } from '../calculators/pageHeroContent';
import StructuredData from '../components/StructuredData';

const ShareModal = lazy(() =>
    import('../components/ShareModal').then((module) => ({ default: module.ShareModal }))
);

export function CalculatorPage() {
    const location = useLocation();
    const { calculatorId, scenarioId } = useParams();
    const { isFavorite, toggleFavorite, reachedMax } = useFavorites();
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const isSalaryLanding = location.pathname.startsWith('/salary/');
    const effectiveCalculatorId = calculatorId || (isSalaryLanding ? 'india-salary' : undefined);
    const calculatorDef = calculatorRegistry.find(c => c.id === effectiveCalculatorId);
    
    const [shake, setShake] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [showLimitWarning, setShowLimitWarning] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const calculatorViewportRef = useRef<HTMLDivElement | null>(null);

    const scenario = calculatorDef?.scenarios?.find(s => s.id === scenarioId);

    useEffect(() => {
        if (!calculatorDef || (scenarioId && !scenario)) {
            return;
        }

        if (calculatorDef.id === 'india-salary' && scenario && location.pathname.startsWith('/calculator/india-salary/')) {
            return;
        }

        let frameOne = 0;
        let frameTwo = 0;

        frameOne = window.requestAnimationFrame(() => {
            frameTwo = window.requestAnimationFrame(() => {
                calculatorViewportRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            });
        });

        return () => {
            window.cancelAnimationFrame(frameOne);
            window.cancelAnimationFrame(frameTwo);
        };
    }, [calculatorDef, location.pathname, scenario, scenarioId]);

    if (!calculatorDef) {
        return <NotFound />;
    }
    if (scenarioId && !scenario) {
        return <NotFound />;
    }

    if (calculatorDef.id === 'india-salary' && scenario && location.pathname.startsWith('/calculator/india-salary/')) {
        return <Navigate to={`/salary/${scenario.id}${location.search}${location.hash}`} replace />;
    }

    const pageTitle = scenario?.name || calculatorDef.name;
    const pageDescription = scenario?.description || calculatorDef.description;
    const calculatorCanonicalPath = `/calculator/${calculatorDef.id}`;
    const canonicalPath = scenario
        ? (calculatorDef.id === 'india-salary' ? `/salary/${scenario.id}` : `${calculatorCanonicalPath}/${scenario.id}`)
        : calculatorCanonicalPath;

    const Component = calculatorDef.component;
    const Content = calculatorDef.content;
    const heroContent = getCalculatorHeroContent(calculatorDef.id, scenario?.id);
    const sharedVisibleFaqIds = new Set(['bmi', 'sip', 'india-salary']);
    const showCompactVisibleFaqs = sharedVisibleFaqIds.has(calculatorDef.id) && Boolean(calculatorDef.faqs?.length);

    // Map internal category to Schema.org applicationCategory
    const getSchemaCategory = (cat: string) => {
        switch (cat) {
            case 'financial': return 'FinanceApplication';
            case 'health': return 'HealthApplication';
            case 'math': return 'EducationalApplication';
            case 'india': return 'FinanceApplication';
            default: return 'UtilityApplication';
        }
    };

    const isFav = isFavorite(calculatorDef.id);
    const hasScenarios = Boolean(calculatorDef.scenarios && calculatorDef.scenarios.length > 0);
    const scenarioRoutes = calculatorDef.scenarios?.map((item) => ({
        ...item,
        path: calculatorDef.id === 'india-salary'
            ? `/salary/${item.id}`
            : `${calculatorCanonicalPath}/${item.id}`
    })) || [];

    const baseApplicationSchema = {
        name: pageTitle,
        description: pageDescription,
        url: toAbsoluteUrl(canonicalPath),
        applicationCategory: getSchemaCategory(calculatorDef.category),
        operatingSystem: 'Any',
        inLanguage: 'en',
        isAccessibleForFree: true,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    };

    const webApplicationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        ...baseApplicationSchema,
        '@id': `${toAbsoluteUrl(canonicalPath)}#webapplication`,
        featureList: scenario?.features || calculatorDef.features || [`Free ${calculatorDef.name}`, 'Instant Results', 'Mobile Friendly', 'Secure'],
    };

    const softwareApplicationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        ...baseApplicationSchema,
        '@id': `${toAbsoluteUrl(canonicalPath)}#softwareapplication`,
    };

    const breadcrumbJsonLd = buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: calculatorDef.category.charAt(0).toUpperCase() + calculatorDef.category.slice(1), path: `/category/${calculatorDef.category}` },
        { name: calculatorDef.name, path: calculatorCanonicalPath },
        ...(scenario ? [{ name: scenario.name, path: canonicalPath }] : []),
    ]);

    const howToJsonLd = calculatorDef.howTo
        ? {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: calculatorDef.howTo.name,
            description: calculatorDef.howTo.description,
            step: calculatorDef.howTo.steps.map((step) => ({
                '@type': 'HowToStep',
                name: step.name,
                text: step.text,
            })),
        }
        : undefined;

    const getTooltip = () => {
        if (isFav) return "Remove from Favorites";
        if (reachedMax) return "Limit reached (Maximum 6)";
        return "Add to Favorites";
    };

    const handleStarClick = () => {
        // e.preventDefault(); // Not a link here, but good practice
        // e.stopPropagation();

        if (!isFav && reachedMax) {
            // User is trying to add but limit reached
            setShake(true);
            setClickCount(prev => prev + 1);

            // On 3rd click (prev was 2), show warning
            if (clickCount >= 2) {
                setShowLimitWarning(true);
            }

            // Reset shake after animation
            setTimeout(() => setShake(false), 500);

            // Reset warning and count after a delay
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setShowLimitWarning(false);
                setClickCount(0);
            }, 3000);
            return;
        }

        toggleFavorite(calculatorDef.id);
        setClickCount(0);
        setShowLimitWarning(false);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={pageTitle}
                description={pageDescription}
                canonicalPath={canonicalPath}
                jsonLd={[webApplicationJsonLd, softwareApplicationJsonLd, breadcrumbJsonLd, ...(howToJsonLd ? [howToJsonLd] : [])]}
            />

            <div className="mb-6 max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{pageTitle}</h1>
                        {heroContent?.utilityLine && (
                            <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 mb-2">
                                {heroContent.utilityLine}
                            </p>
                        )}
                        <p className="text-slate-500 dark:text-slate-400">{pageDescription}</p>
                        {heroContent?.chips && heroContent.chips.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                                {heroContent.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2 justify-center sm:justify-end shrink-0">
                        <button
                            onClick={() => setIsShareModalOpen(true)}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                            title="Share Calculator"
                        >
                            <Share2 size={24} />
                        </button>

                        <div className="relative">
                            {showLimitWarning && (
                                <div className="absolute top-full right-0 mt-2 w-32 bg-red-500 text-white text-[10px] font-bold py-1 px-2 rounded-lg shadow-lg text-center animate-in fade-in zoom-in-95 duration-200 z-20 pointer-events-none after:content-[''] after:absolute after:bottom-100% after:right-4 after:border-4 after:border-transparent after:border-b-red-500">
                                    Max 5 Favorites!
                                </div>
                            )}
                            <button
                                onClick={handleStarClick}
                                className={cn(
                                    "p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                                    (!isFav && reachedMax) && "opacity-50 cursor-not-allowed hover:bg-transparent",
                                    shake && "animate-shake text-red-400"
                                )}
                                title={getTooltip()}
                            >
                                <Star
                                    size={24}
                                    className={isFav ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-600"}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {heroContent && (
                <section className="mb-8 max-w-2xl mx-auto">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-5 sm:p-6">
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                            Quick answer
                        </h2>
                        <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300 mb-5">
                            {heroContent.answer}
                        </p>

                        <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 sm:p-5">
                            <div className="mb-4">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white m-0">
                                    {heroContent.exampleTitle}
                                </h3>
                                {heroContent.exampleNote && (
                                    <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                                        {heroContent.exampleNote}
                                    </p>
                                )}
                            </div>

                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {heroContent.exampleRows.map((row) => (
                                    <div
                                        key={`${row.label}-${row.value}`}
                                        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3"
                                    >
                                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            {row.label}
                                        </dt>
                                        <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                                            {row.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>
            )}

            {hasScenarios && (
                <section className="mb-8 max-w-2xl mx-auto">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 mb-3">
                        Scenario Pages
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {scenarioRoutes.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={cn(
                                    "inline-flex rounded-full px-3 py-1 text-sm border transition-colors",
                                    item.id === scenario?.id
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {isShareModalOpen && (
                <Suspense fallback={null}>
                    <ShareModal
                        isOpen={isShareModalOpen}
                        onClose={() => setIsShareModalOpen(false)}
                        calculatorName={calculatorDef.name}
                        calculatorId={calculatorDef.id}
                    />
                </Suspense>
            )}

            <div ref={calculatorViewportRef}>
                <Component
                    key={`${calculatorDef.id}-${scenario?.id || 'default'}`}
                    scenarioData={scenario?.initialState}
                />
            </div>

            {showCompactVisibleFaqs && (
                <section className="mt-12 max-w-2xl mx-auto">
                    <StructuredData type="FAQPage" data={calculatorDef.faqs} />
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-5 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {calculatorDef.faqs?.map((faq, idx) => (
                                <div
                                    key={`${calculatorDef.id}-faq-${idx}`}
                                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4"
                                >
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 m-0">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <AdBanner />

            <ContextualRelatedCalculatorLinks calculatorId={calculatorDef.id} />

            <RelatedCalculators
                currentCalculatorId={calculatorDef.id}
                category={calculatorDef.category}
            />

            {(calculatorDef.longDescription || calculatorDef.features || calculatorDef.educationalContent || Content) && (
                <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-12">
                    <article className="prose prose-slate dark:prose-invert max-w-none">
                        {!calculatorDef.hideDefaultSections && (
                            <>
                                {calculatorDef.howTo && (
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{calculatorDef.howTo.name}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6">{calculatorDef.howTo.description}</p>
                                        <div className="space-y-4">
                                            {calculatorDef.howTo.steps.map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold rounded-full">
                                                        {idx + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1 m-0">{step.name}</h4>
                                                        <p className="text-slate-600 dark:text-slate-400 text-sm m-0">{step.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <ToolContext calculatorDef={calculatorDef} />
                            </>
                        )}

                        {/* Fallback for legacy content */}
                        {Content && <Content calculatorDef={calculatorDef} />}
                    </article>
                </div>
            )}
            <AdBanner />
        </div>
    );
}
