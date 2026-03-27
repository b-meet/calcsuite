import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { blogPosts } from './Resources';
import { 
    Clock, 
    Calendar, 
    Share2, 
    ArrowLeft,
    ArrowRight,
    Zap
} from 'lucide-react';
import { IndiaTaxSavingGuide2026 } from '../content/articles/IndiaTaxSavingGuide2026';
import { GstComplianceSmallBusiness } from '../content/articles/GstComplianceSmallBusiness';
import { SipVsLumpsum2026Markets } from '../content/articles/SipVsLumpsum2026Markets';
import { ArticleAds } from '../components/ArticleAds';

export function ArticleLayout() {
    const { articleId } = useParams();
    const [isShared, setIsShared] = useState(false);
    const post = blogPosts.find(p => p.id === articleId);

    const handleShare = async () => {
        if (!post) return;
        
        const shareData = {
            title: post.title,
            text: post.excerpt,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setIsShared(true);
                setTimeout(() => setIsShared(false), 2000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    if (!post) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
                <Link to="/resources" className="text-blue-600 flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Resources
                </Link>
            </div>
        );
    }

    // Dynamic Article Content based on ID
    const renderArticleContent = () => {
        switch (post.id) {
            case 'india-tax-saving-guide-2026':
                return <IndiaTaxSavingGuide2026 />;
            case 'gst-compliance-small-business':
                return <GstComplianceSmallBusiness />;
            case 'sip-vs-lumpsum-2026-markets':
                return <SipVsLumpsum2026Markets />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <SEO 
                title={`${post.title} - CalcSuite Guide`}
                description={post.excerpt}
                keywords={[post.category, 'finance guide', 'tax 2026', 'investment strategy']}
            />

            <StructuredData 
                type="Article"
                data={{
                    headline: post.title,
                    description: post.excerpt,
                    image: `https://calcsuite.in/blog/${post.id}.jpg`,
                    datePublished: post.date,
                    url: `https://calcsuite.in/resources/${post.id}`
                }}
            />

            <StructuredData 
                type="BreadcrumbList"
                data={[
                    { name: 'Home', item: 'https://calcsuite.in/' },
                    { name: 'Resources', item: 'https://calcsuite.in/resources' },
                    { name: post.title, item: `https://calcsuite.in/resources/${post.id}` }
                ]}
            />

            {(post as any).faqs && (
                <StructuredData 
                    type="FAQPage"
                    data={(post as any).faqs}
                />
            )}
            
            <Link 
                to="/resources" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>

            <article className="min-w-0">
                <header className="space-y-6 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold">
                        {post.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 text-sm border-b border-slate-100 dark:border-slate-800 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                        <button 
                            onClick={handleShare}
                            className={`ml-auto inline-flex items-center gap-2 font-semibold px-3 py-1 rounded-lg transition-all duration-300 ${
                                isShared 
                                ? 'bg-emerald-500 text-white shadow-lg' 
                                : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                            }`}
                        >
                            <Share2 className="w-4 h-4" /> 
                            {isShared ? 'Link Copied!' : 'Share'}
                        </button>
                    </div>
                </header>

                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-3xl scroll-smooth">
                    <p className="lead text-xl text-slate-600 dark:text-slate-400 mb-8">
                        {post.excerpt}
                    </p>
                    
                    {(post as any).toc && (post as any).toc.length > 0 && (
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-10 not-prose">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h3>
                            <ul className="space-y-3 list-none p-0 m-0">
                                {(post as any).toc.map((item: any) => (
                                    <li key={item.id} className="flex items-center gap-2">
                                        <ArrowRight className="w-3 h-3 text-blue-500" />
                                        <a href={`#${item.id}`} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline font-medium text-sm transition-colors">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <ArticleAds />
                    
                    {renderArticleContent()}
                </div>
            </article>

            {/* Sticky Slim CTA Banner */}
            <div className="sticky bottom-6 z-40 mt-12 p-3 md:p-4 bg-slate-900/90 dark:bg-blue-600/90 backdrop-blur-xl rounded-2xl md:rounded-full text-white shadow-2xl border border-white/10 group overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex p-2 bg-white/10 rounded-xl">
                            <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-sm md:text-base font-bold">Ready to calculate?</h3>
                            <p className="text-blue-200 text-[10px] hidden lg:block">Try our 2026-ready financial tools now.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            { name: "GST Tool", path: "/calculator/india-gst", q: "Check GST?" },
                            { name: "Tax Comparison", path: "/calculator/india-tax", q: "Old vs New?" },
                            { name: "Salary Calc", path: "/calculator/india-salary", q: "Take-home?" }
                        ].map((tool, i) => (
                            <Link 
                                key={i}
                                to={tool.path} 
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-blue-700 rounded-full transition-all duration-300 border border-white/10 hover:border-white text-xs font-bold"
                            >
                                <span>{tool.name}</span>
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Subtle Glow */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors duration-500"></div>
            </div>
        </div>
    );
}
