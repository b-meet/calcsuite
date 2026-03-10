import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
    ArrowRight, 
    Clock, 
    Tag,
    FileText,
    Percent,
    TrendingUp
} from 'lucide-react';

export const blogPosts = [
    {
        id: 'india-tax-saving-guide-2026',
        title: "The 2026 Tax Act: Maximizing Savings & Regime Selection",
        excerpt: "Are you paying too much tax by choosing the default? See the 2026 Slab updates and how to save ₹35,000+ by picking the right regime.",
        date: "March 10, 2026",
        category: "Tax Planning",
        readTime: "8 min read",
        icon: FileText,
        color: "text-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        ctaText: "Check Your Tax Savings"
    },
    {
        id: 'gst-compliance-small-business',
        title: "GST for Small Businesses: The 2026 Survival Guide",
        excerpt: "Is your ITC stuck? Learn the new automated validation rules and the 3-tier slab shift to avoid penalties and save cash flow.",
        date: "March 8, 2026",
        category: "GST",
        readTime: "6 min read",
        icon: Percent,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        ctaText: "Fix Your GST Compliance"
    },
    {
        id: 'sip-vs-lumpsum-2026-markets',
        title: "SIP vs Lumpsum: The 2026 Wealth Roadmap",
        excerpt: "Is ₹1 Crore enough? Discover the 'Step-Up' secret that doubles your wealth and why SIP is safer in volatile 2026 markets.",
        date: "March 5, 2026",
        category: "Investing",
        readTime: "10 min read",
        icon: TrendingUp,
        color: "text-rose-500",
        bg: "bg-rose-50 dark:bg-rose-900/20",
        ctaText: "Plan Your Wealth"
    }
];

export function Resources() {
    return (
        <div className="space-y-10">
            <SEO 
                title="Resources & Finance Guides - CalcSuite"
                description="Expert guides on tax planning, GST compliance, and investment strategies. Stay updated with the 2026 Tax Act and maximize your savings."
                keywords={['tax guides', 'gst checklist', 'investment resources', 'finance blog', 'tax planning 2026']}
            />

            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Finance Resources & Guides
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Master your money with our in-depth guides, compliance checklists, and investment strategies updated for 2026.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
                        <div className={`h-48 flex items-center justify-center ${post.bg}`}>
                            <post.icon className={`w-16 h-16 ${post.color}`} />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                                <Link to={`/resources/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                                <Link 
                                    to={`/resources/${post.id}`} 
                                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Read Guide <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    );
}
