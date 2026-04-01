import { 
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
        ctaText: "Check Your Tax Savings",
        toc: [
            { id: "regime-battle", title: "The Regime Battle: Old vs New" },
            { id: "homeowner-trap", title: "The Homeowner's Trap" },
            { id: "equity-harvesting", title: "Equity Tax Harvesting" },
            { id: "section-80d", title: "Hidden Section 80D Multiplier" }
        ],
        faqs: [
            { question: "Which tax regime is default in 2026?", answer: "The New Tax Regime is the default regime for financial year 2025-26." },
            { question: "Is home loan interest deductible in the new regime?", answer: "No, Section 24(b) deductions for home loan interest are only available under the Old Tax Regime." }
        ]
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
        ctaText: "Fix Your GST Compliance",
        toc: [
            { id: "three-tier-shift", title: "The 3-Tier Shift" },
            { id: "composition-vs-regular", title: "Composition vs. Regular Scheme" },
            { id: "ecommerce-relaxation", title: "E-commerce Relaxation" }
        ],
        faqs: [
            { question: "What are the new GST slabs in 2026?", answer: "The GST structure is moving towards a simplified 5%, 18%, and 40% structure." },
            { question: "Can I claim ITC without GSTR-2B?", answer: "No, automated validation is mandatory. You cannot claim credit if your supplier hasn't filed GSTR-2B." }
        ]
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
        ctaText: "Plan Your Wealth",
        toc: [
            { id: "step-up-secret", title: "The Step-Up Secret" },
            { id: "four-percent-rule", title: "The 4% Rule" },
            { id: "lumpsum-timing", title: "Lumpsum Timing Myth" }
        ],
        faqs: [
            { question: "What is a Step-Up SIP?", answer: "A Step-Up SIP involves automatically increasing your SIP amount by a fixed percentage (e.g., 10%) every year to compound wealth faster." },
            { question: "Is 1 Crore enough to retire in India 2026?", answer: "Given 6% inflation, ₹1 Crore will lose significant purchasing power over 20 years. Your target depends on the 4% rule relative to your expenses." }
        ]
    }
];
