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
    TrendingUp,
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
                        <p>
                            Are you paying "lazy tax" by simply sticking to the default? With the transition to the <strong>Income-tax Act, 2025</strong>, the rules of the game have fundamentally changed. Here is how to navigate the 2026 slabs and save ₹35,000+ by making one strategic choice.
                        </p>

                        <h2>The "Regime Battle": Old vs. New (2026 Edition)</h2>
                        <p>
                            Every Indian middle-class family is currently facing a critical decision: Which tax regime actually keeps more money in your bank account? In 2026, the answer depends entirely on your "deduction profile."
                        </p>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800 my-8">
                            <h3 className="text-emerald-900 dark:text-emerald-200 font-bold flex items-center gap-2 m-0 mt-0">
                                <Zap className="w-5 h-5" /> The "Zero-Tax" Milestone
                            </h3>
                            <p className="mt-3 mb-0">
                                In 2026, the New Tax Regime is the **"default" king**. Thanks to the enhanced Section 87A rebate, anyone earning up to **₹12 Lakh** net taxable income pays zero tax. 
                            </p>
                            <p className="mt-2 mb-0">
                                When you add the **₹75,000 Standard Deduction**, your effective "zero-tax" ceiling hits **₹12.75 Lakh**.
                            </p>
                        </div>

                        <div className="my-10 not-prose overflow-x-auto">
                            <table className="w-full text-sm text-left border-collapse bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                                <thead className="bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Taxable Income (New Regime)</th>
                                        <th className="px-6 py-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Tax Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                                    <tr><td className="px-6 py-4">₹0 - ₹4,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Nil</td></tr>
                                    <tr><td className="px-6 py-4">₹4,00,001 - ₹8,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">5%</td></tr>
                                    <tr><td className="px-6 py-4">₹8,00,001 - ₹12,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">10%</td></tr>
                                    <tr><td className="px-6 py-4">₹12,00,001 - ₹16,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">15%</td></tr>
                                    <tr><td className="px-6 py-4">₹16,00,001 - ₹20,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">20%</td></tr>
                                    <tr><td className="px-6 py-4">₹20,00,001 - ₹24,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">25%</td></tr>
                                    <tr><td className="px-6 py-4">Above ₹24,00,000</td><td className="px-6 py-4 font-medium text-slate-900 dark:text-white">30%</td></tr>
                                </tbody>
                            </table>
                            <p className="mt-4 text-xs text-slate-500 italic px-2">*Effective zero tax up to ₹12.75L CTC after Standard Deduction and 87A Rebate</p>
                        </div>

                        <h2>The "Homeowner's Trap": A Costly Oversight</h2>
                        <p>
                            While the New Regime is simple, it can be a "trap" for homeowners. The New Regime does not allow you to deduct home loan interest. If you are paying off a mortgage, ignoring the Old Regime could be the most expensive mistake you make this year.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30 my-10 not-prose">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 m-0 text-blue-900 dark:text-blue-200">
                                Ravi's High-Stakes Choice
                            </h3>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300">
                                <p>Ravi earns <strong>₹15 LPA</strong>. Under the New Regime, his tax liability is approximately <strong>₹1.2 Lakh</strong>.</p>
                                <div className="p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-blue-100 dark:border-blue-900/30 space-y-2">
                                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">By switching to the Old Regime, he claims:</p>
                                    <ul className="text-sm list-none p-0 m-0 space-y-1">
                                        <li>• Section 24(b): <strong>₹2 Lakh</strong> (Interest)</li>
                                        <li>• Section 80C: <strong>₹1.5 Lakh</strong> (Principal + PF)</li>
                                        <li>• Standard Deduction: <strong>₹50,000</strong></li>
                                    </ul>
                                </div>
                                <p className="font-bold text-lg text-slate-900 dark:text-white">
                                    The Result: His tax bill plummets to ₹85,000. Ravi saves ₹35,000 just by opting out of the default.
                                </p>
                            </div>
                        </div>

                        <h2>Advanced Strategy: Equity Tax Harvesting</h2>
                        <p>
                            Smart investors don't just wait for their portfolios to grow; they manage their tax liabilities dynamically. With the 2026 update to Long-Term Capital Gains (LTCG) rules, "Tax Harvesting" is essential.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 my-8">
                            <h3 className="text-amber-900 dark:text-amber-200 font-bold flex items-center gap-2 m-0 mt-0">
                                <Lightbulb className="w-5 h-5" /> The ₹1.25 Lakh Exemption
                            </h3>
                            <p className="mt-3">
                                As of the latest 2026 code, LTCG on equity is tax-free up to **₹1.25 Lakh** per financial year. By selling and reinvesting, you reset your buy price higher without paying tax.
                            </p>
                            <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-amber-100 dark:border-amber-800 font-mono text-sm leading-relaxed">
                                <p className="font-bold mb-2">The Math In Action:</p>
                                <p className="m-0 text-slate-500">Original Investment: <span className="text-slate-900 dark:text-slate-200">₹5,00,000</span></p>
                                <p className="m-0 text-slate-500">Current Value: <span className="text-slate-900 dark:text-slate-200">₹6,25,000</span> (Gain: ₹1,25,000)</p>
                                <p className="m-0 text-slate-500">Action: <span className="text-slate-900 dark:text-slate-200 font-medium">Sell all units and buy them back the same day.</span></p>
                                <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-3 p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg inline-block border border-emerald-100 dark:border-emerald-800/50">Result: You just saved ₹15,625 in future taxes.</p>
                            </div>
                        </div>

                        <h2>The "Hidden" Section 80D Multiplier</h2>
                        <p>
                            Don't just pay your health insurance premium; optimize it. For a family of three (or more), Section 80D is a goldmine.
                        </p>
                        <ul>
                            <li><strong>The Parents' Bonus:</strong> If you pay for senior citizen parents (60+), get an additional deduction of up to **₹50,000**.</li>
                            <li><strong>The Cash Hack:</strong> You can claim **₹5,000** for "Preventive Health Check-ups," even if paid in cash.</li>
                        </ul>

                        <div className="bg-slate-900 text-white p-8 rounded-3xl my-12 not-prose shadow-xl border border-slate-800">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white m-0">
                                <FileCheck className="w-6 h-6 text-blue-400" /> Final Checklist for March 2026
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { text: "Regime Check: Run your numbers on the Income Tax Calculator", link: "/calculator/india-tax" },
                                    { text: "NPS Boost: Deposit ₹50,000 in NPS Tier-1 for exclusive Sec 80CCD deduction", link: "/calculator/india-tax" },
                                    { text: "Advance Tax: Ensure 100% is paid by March 15 to avoid penalties", link: "/calculator/india-tax" },
                                    { text: "LTCG Reset: Sell and re-buy equity to lock in ₹1.25L tax-free gains", link: "" },
                                    { text: "GST Check: Verify Input Tax Credit (ITC) on the GST Calculator", link: "/calculator/india-gst" }
                                ].map((item, i) => (
                                    <label key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl cursor-pointer transition-colors border border-slate-700/50 group">
                                        <input type="checkbox" className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900 shadow-sm" />
                                        <span className="text-sm md:text-base text-slate-200 group-hover:text-white transition-colors">
                                            {item.link ? (
                                                <Link to={item.link} className="text-blue-300 hover:text-blue-200 underline decoration-blue-500/30 underline-offset-4 font-medium">
                                                    {item.text}
                                                </Link>
                                            ) : item.text}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="text-center py-12 not-prose border-t border-slate-100 dark:border-slate-800 mt-12">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Ready to see your savings?</h3>
                            <Link 
                                to="/calculator/india-tax"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 !text-white font-extrabold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/25 active:scale-95"
                            >
                                Calculate Your 2026 Tax Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
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
