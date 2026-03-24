import { useParams, Navigate, Link } from 'react-router-dom';
import { alternativesData } from '../content/alternatives/data';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, XCircle, ArrowRight, Zap, Smartphone, ShieldCheck, WifiOff, FileText, UserX } from 'lucide-react';

export function AlternativesLayout() {
    const { competitorId } = useParams<{ competitorId: string }>();
    const competitor = competitorId ? alternativesData[competitorId] : null;

    if (!competitor) {
        return <Navigate to="/resources" replace />;
    }

    const reviewSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": `CalcSuite alternative to ${competitor.name}`,
        "description": competitor.metaDescription,
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Organization",
                "name": "CalcSuite Review Team"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "845"
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 md:py-20">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(reviewSchema)}
                </script>
            </Helmet>
            <SEO 
                title={competitor.metaTitle.replace(' | CalcSuite', '')} // SEO component attaches suffix
                description={competitor.metaDescription} 
            />

            <div className="max-w-4xl mx-auto px-4 md:px-6">
                
                {/* Header Tag */}
                <div className="flex justify-center mb-6">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-sm font-bold px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 uppercase tracking-wide">
                        Alternative to {competitor.name}
                    </span>
                </div>

                {/* Main Hero */}
                <div className="text-center mb-16 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                        {competitor.reviewTitle}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {competitor.metaDescription}
                    </p>
                    
                    <div className="pt-6">
                        <Link 
                            to={competitor.cta.link}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 !text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md text-lg"
                        >
                            {competitor.cta.text}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Speed Scoreboard */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1 bg-white dark:bg-slate-900 border-2 border-emerald-100 dark:border-emerald-900/50 p-6 rounded-2xl shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm uppercase tracking-wide mb-1">CalcSuite Load Time</p>
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white">&lt; 0.5s</h3>
                            <p className="text-slate-500 font-medium text-sm mt-1">Instant & 100% Ad-Free Core</p>
                        </div>
                        <Zap className="w-16 h-16 text-emerald-500 opacity-20" />
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 border-2 border-rose-100 dark:border-rose-900/50 p-6 rounded-2xl shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                        <div>
                            <p className="text-rose-700 dark:text-rose-400 font-bold text-sm uppercase tracking-wide mb-1">{competitor.name} Load Time</p>
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white">2.5s+</h3>
                            <p className="text-slate-500 font-medium text-sm mt-1">Heavy Ad Scripts</p>
                        </div>
                        <XCircle className="w-16 h-16 text-rose-500 opacity-20" />
                    </div>
                </div>

                {/* Feature Gap Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-4">
                        <div className="bg-blue-600 p-3 rounded-lg text-white">
                            <UserX className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Log-in Free</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">100% anonymous</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-4">
                        <div className="bg-emerald-600 p-3 rounded-lg text-white">
                            <WifiOff className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">PWA-Enabled</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Works perfectly offline</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-4">
                        <div className="bg-purple-600 p-3 rounded-lg text-white">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">2026 Ready</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Latest Govt. Tax Slabs</p>
                        </div>
                    </div>
                </div>

                {/* The "Diff" Comparison Table */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl mb-16">
                    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 text-center">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">
                            CalcSuite vs. {competitor.name}
                        </h2>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th className="px-6 py-5 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/3">Feature</th>
                                    <th className="px-6 py-5 w-1/3 border-x border-slate-100 dark:border-slate-700 bg-blue-50/50 dark:bg-blue-900/10">
                                        <div className="flex items-center gap-2">
                                            <img src="/favicon.png" alt="CalcSuite Logo" className="w-8 h-8 rounded-lg shadow-sm" />
                                            <span className="font-bold text-blue-900 dark:text-blue-300 text-lg">CalcSuite</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 w-1/3">
                                        <div className="font-bold text-slate-700 dark:text-slate-300 text-lg">
                                            {competitor.name}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {/* Speed */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-orange-500" /> Speed & Load Time
                                    </td>
                                    <td className="px-6 py-5 border-x border-slate-100 dark:border-slate-700 bg-blue-50/20 dark:bg-blue-900/5">
                                        <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                                            <CheckCircle2 className="w-4 h-4" /> {competitor.comparison.calcSuite.speed}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                                        <span className="inline-flex items-center gap-1.5">
                                            <XCircle className="w-4 h-4 text-rose-500 opacity-70" /> {competitor.comparison.competitor.speed}
                                        </span>
                                    </td>
                                </tr>
                                {/* Ads */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> Ad Density
                                    </td>
                                    <td className="px-6 py-5 border-x border-slate-100 dark:border-slate-700 bg-blue-50/20 dark:bg-blue-900/5">
                                        <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                                            <CheckCircle2 className="w-4 h-4" /> {competitor.comparison.calcSuite.ads}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                                        <span className="inline-flex items-center gap-1.5">
                                            <XCircle className="w-4 h-4 text-rose-500 opacity-70" /> {competitor.comparison.competitor.ads}
                                        </span>
                                    </td>
                                </tr>
                                {/* Mobile */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-blue-500" /> Mobile Experience
                                    </td>
                                    <td className="px-6 py-5 border-x border-slate-100 dark:border-slate-700 bg-blue-50/20 dark:bg-blue-900/5">
                                        <span className="inline-flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold">
                                            <CheckCircle2 className="w-4 h-4" /> {competitor.comparison.calcSuite.mobile}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                                        {competitor.comparison.competitor.mobile}
                                    </td>
                                </tr>
                                {/* Accuracy */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-5 font-semibold text-slate-800 dark:text-slate-200">
                                        Models & Accuracy
                                    </td>
                                    <td className="px-6 py-5 border-x border-slate-100 dark:border-slate-700 bg-blue-50/20 dark:bg-blue-900/5">
                                        <span className="inline-flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold">
                                            <CheckCircle2 className="w-4 h-4" /> {competitor.comparison.calcSuite.slabs}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                                        {competitor.comparison.competitor.slabs}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Honest Review Section */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    {competitor.reviewBody}
                </div>

                {/* Bottom CTA / The Switch Hook */}
                <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 p-10 rounded-3xl shadow-sm">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Tired of ads and slow calculators?
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto font-medium">
                        Try the lightweight, modern alternative. Join thousands of users who have switched to CalcSuite for their personal and professional financial modeling.
                    </p>
                    <Link 
                        to={competitor.cta.link}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 !text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md text-lg"
                    >
                        Switch to CalcSuite Now
                    </Link>
                </div>

            </div>
        </div>
    );
}
