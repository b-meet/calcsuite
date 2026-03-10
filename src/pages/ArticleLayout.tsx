import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from './Resources';
import { 
    Clock, 
    Calendar, 
    Share2, 
    ArrowLeft,
    ArrowRight,
    TrendingUp,
    CheckCircle2,
    Zap,
    AlertCircle,
    Lightbulb,
    FileCheck
} from 'lucide-react';

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
                return (
                    <>
                        <h2>The "Regime Battle": Old vs. New (2026 Edition)</h2>
                        <p>
                            Every Indian middle-class family is currently facing a critical decision: Which tax regime actually saves more money? With the 2026 reforms, the answer is no longer straightforward.
                        </p>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800 my-8">
                            <h3 className="text-emerald-900 dark:text-emerald-200 font-bold flex items-center gap-2 m-0">
                                <Zap className="w-5 h-5" /> The "Zero-Tax" Milestone
                            </h3>
                            <p className="mt-3 mb-0">
                                In 2026, the New Tax Regime is the **"default" king**. For anyone earning up to **₹12.75 Lakh** (after the ₹75,000 Standard Deduction), the effective tax is zero. This makes it an incredibly attractive option for young professionals and those with minimal investments.
                            </p>
                        </div>

                        <h2>The "Homeowner's Trap": A Costly Oversight</h2>
                        <p>
                            While the New Regime is simple, homeowners might find themselves in a "trap" if they blindly follow the default.
                        </p>
                        
                        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 my-10 not-prose">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 m-0">
                                Real-World Example: Ravi's High-Stakes Choice
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 italic">
                                "Ravi earns ₹15 LPA and has a Home Loan. Under the New Regime, he pays ~₹1.2 Lakh tax. But under the Old Regime, by claiming Section 24(b) (₹2L interest) and 80C (₹1.5L principal), his tax drops to ₹85,000. **He saves ₹35,000 by not choosing the default!**"
                            </p>
                        </div>

                        <h2>Advanced Strategy: Equity Tax Harvesting</h2>
                        <p>
                            Smart investors don't just invest; they manage their tax liabilities dynamically. Equity Tax Harvesting is the process of selling and immediately repurchasing shares to "realize" capital gains up to the tax-free limit.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 my-8">
                            <h3 className="text-amber-900 dark:text-amber-200 font-bold flex items-center gap-2 m-0">
                                <Lightbulb className="w-5 h-5" /> The ₹1 Lakh Exemption
                            </h3>
                            <div className="mt-4 space-y-4">
                                <p className="m-0">
                                    Long-Term Capital Gains (LTCG) on equity are tax-free up to **₹1 Lakh** per financial year. By selling and reinvesting, you reset your "cost price" higher without paying a single rupee in tax.
                                </p>
                                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-amber-100 dark:border-amber-800 font-mono text-sm">
                                    <p className="font-bold mb-2">Math in Action:</p>
                                    <p className="m-0">Original Investment: ₹5,00,000</p>
                                    <p className="m-0">Current Value: ₹6,00,000 (Gain: ₹1,00,000)</p>
                                    <p className="m-0">Action: Sell and Buy back immediately.</p>
                                    <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-2">Result: ₹10,000 tax saved (10% of 1L) every year.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-3xl border border-blue-100 dark:border-slate-700 my-10 not-prose">
                            <h3 className="text-blue-900 dark:text-blue-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                                <FileCheck className="w-6 h-6" /> Checklist for March 2026
                            </h3>
                            <ul className="space-y-4 mt-6 p-0 list-none">
                                {[
                                    "Verify total 80C investments (Target: ₹1.5L)",
                                    "NPS Tier-1 contributions (Sec 80CCD) for extra ₹50,000 deduction",
                                    "Health Insurance premiums for self and parents (Sec 80D - up to ₹75k total)",
                                    "Realize up to ₹1L in LTCG to reset cost basis tax-free"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                );
            case 'gst-compliance-small-business':
                return (
                    <>
                        <h2>The 3-Tier Shift: Simplification or Struggle?</h2>
                        <p>
                            Small business owners in 2026 are witnessing a massive transition. There is an active transition toward a simplified **5%, 18%, and 40% structure**. This move aims to reduce classification disputes, but it requires immediate billing updates.
                        </p>

                        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800 my-8">
                            <h3 className="text-rose-900 dark:text-rose-200 font-bold flex items-center gap-2 m-0">
                                <AlertCircle className="w-5 h-5" /> Input Tax Credit (ITC) "Hard Rule"
                            </h3>
                            <p className="mt-3 mb-0">
                                In 2026, automated validation is mandatory. **If your supplier hasn't filed their GSTR-2B, you cannot claim credit**, even if you have the physical invoice and have paid the tax.
                            </p>
                        </div>

                        <h2>Composition vs. Regular Scheme: The ROI Battle</h2>
                        <p>
                            Choosing the wrong GST scheme can bleed your margins. While the Composition scheme offers lower rates, the loss of ITC often makes it more expensive for B2B businesses.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-3">Composition Scheme</h4>
                                <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 p-0 list-none">
                                    <li>• 1% for Traders/Manufacturers</li>
                                    <li>• Less Compliance (Quarterly)</li>
                                    <li>• **No Input Tax Credit claim**</li>
                                    <li>• Best for: Small local B2C retailers</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                                <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-3">Regular Scheme</h4>
                                <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 p-0 list-none">
                                    <li>• Standard Rates (5%, 12%, 18%)</li>
                                    <li>• Full Input Tax Credit (ITC)</li>
                                    <li>• Monthly intensive compliance</li>
                                    <li>• Best for: B2B and high-cost service providers</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 my-10 not-prose">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 m-0">
                                Math in Action: The "Hidden" Cost of Composition
                            </h3>
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm">
                                <p className="m-0">Business Turnover: ₹50 Lakh</p>
                                <p className="m-0">Purchases: ₹30 Lakh (+ 18% GST = ₹5.4L)</p>
                                <p className="m-0 mt-2">**Composition Cost:** ₹50,000 tax + ₹5.4L (Loss of ITC) = **₹5.9 Lakh**</p>
                                <p className="m-0">**Regular Cost:** ₹9 Lakh (Output) - ₹5.4L (ITC) = **₹3.6 Lakh**</p>
                                <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-2">Winner: Regular Scheme saves ₹2.3 Lakh!</p>
                            </div>
                        </div>

                        <h2>E-commerce Relaxation for Local Sellers</h2>
                        <p>
                            There is silver lining for micro-entrepreneurs. Intra-state online sellers with turnover under **₹40 Lakh** no longer need full GST registration—they can operate using a simple Enrollment ID, opening doors for millions on platforms like ONDC.
                        </p>
                    </>
                );
            case 'sip-vs-lumpsum-2026-markets':
                return (
                    <>
                        <h2>The "Step-Up" Secret: Doubling Your Wealth</h2>
                        <p>
                            Most investors focus on picking the right fund, but they miss the most powerful lever of wealth creation: the **10% Annual Step-Up**.
                        </p>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 my-10 not-prose">
                            <h3 className="text-emerald-900 dark:text-emerald-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                                Math in Action: The Power of 10%
                            </h3>
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-emerald-100 dark:border-emerald-800 font-mono text-sm leading-relaxed">
                                <p className="m-0">Option A: Flat ₹10k SIP (20 Years) → **₹1.02 Crores**</p>
                                <p className="m-0">Option B: 10% Step-Up SIP (20 Years) → **₹2.18 Crores**</p>
                                <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-2">Verdict: Same starting amount, 113% more wealth.</p>
                            </div>
                        </div>

                        <h2>The 4% Rule: Calculating Your "Freedom Number"</h2>
                        <p>
                            Early retirement or Financial Independence (FIRE) isn't a pipe dream—it's a math equation. The 4% rule suggests you can safely withdraw 4% of your portfolio annually without running out of money.
                        </p>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 my-10 not-prose">
                            <h3 className="text-indigo-900 dark:text-indigo-200 font-bold text-xl mb-4 flex items-center gap-2 m-0">
                                Your FIRE Equation
                            </h3>
                            <div className="space-y-4">
                                <p className="m-0 text-slate-700 dark:text-slate-300">
                                    To find your target corpus, multiply your annual expenses by **25**.
                                </p>
                                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-indigo-100 dark:border-indigo-800 font-mono text-sm">
                                    <p className="m-0">Monthly Expense: ₹50,000</p>
                                    <p className="m-0">Annual Expense: ₹6,00,000</p>
                                    <p className="m-0 text-blue-600 dark:text-blue-400 font-bold mt-2">Freedom Number: ₹1.5 Crores</p>
                                </div>
                            </div>
                        </div>

                        <h2>The "Lumpsum Timing" Myth</h2>
                        <p>
                            Waiting for a "market dip" often leads to missing out on the best days of growth. In a volatile 2026 market, a SIP is mathematically safer than a Lumpsum because you buy more units when prices are low—this is the magic of **Rupee Cost Averaging**.
                        </p>

                        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800 my-8">
                            <h3 className="text-rose-900 dark:text-rose-200 font-bold flex items-center gap-2 m-0">
                                <TrendingUp className="w-5 h-5" /> Retirement Reality Check
                            </h3>
                            <p className="mt-3 mb-0">
                                Remember: **₹1 Crore is the new ₹25 Lakh**. Due to 6% long-term inflation, ₹1 Crore in 2046 will only have the purchasing power of ₹27 Lakh today. You must aim for a "Lifestyle-Adjusted" goal.
                            </p>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800 my-8">
                            <p className="font-semibold text-indigo-700 dark:text-indigo-300 m-0">
                                💡 Strategy Tip: SIP is for wealth building; Lumpsum is for tactical opportunities when you have windfall gains and the market is undervalued.
                            </p>
                        </div>
                    </>
                );
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

                <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-3xl">
                    <p className="lead text-xl text-slate-600 dark:text-slate-400 mb-8">
                        {post.excerpt}
                    </p>
                    
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
