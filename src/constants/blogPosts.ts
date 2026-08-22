import { 
    FileText,
    Percent,
    TrendingUp,
    Calendar,
    Clock,
    Home,
    Briefcase
} from 'lucide-react';

export const blogPosts = [
    {
        id: 'ppf-vs-fd-vs-rd-safe-investing-2026',
        title: "PPF vs FD vs RD: The 2026 Tax-Free Compounding Guide",
        excerpt: "Confused about where to park your safe money? Compare the latest 2026 interest rates, tax benefits, and lock-in periods to maximize your risk-free returns.",
        date: "August 22, 2026",
        category: "Investing",
        readTime: "7 min read",
        icon: TrendingUp,
        color: "text-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        ctaText: "Compare Your Returns",
        toc: [
            { id: "the-safe-trio", title: "The Safe Trio: PPF, FD, and RD" },
            { id: "tax-implications", title: "Tax Implications under New 2026 Regime" },
            { id: "lock-in-and-liquidity", title: "Lock-in Periods & Liquidity" },
            { id: "which-one-to-choose", title: "Verdict: Which one to choose?" }
        ],
        faqs: [
            { question: "Is PPF still tax-free in the new tax regime 2026?", answer: "Yes, the maturity amount and interest earned in a Public Provident Fund (PPF) remain completely tax-free (EEE status) regardless of the tax regime you choose." },
            { question: "Can I break my 5-year tax-saving FD prematurely?", answer: "No, a 5-year tax-saving Fixed Deposit comes with a strict lock-in period of 5 years and cannot be withdrawn prematurely." }
        ]
    },
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
    },
    {
        id: 'age-requirements-india-2026',
        title: "Age Requirements in India 2026: Official Rules for Exams, Aadhaar & Jobs",
        excerpt: "Are you eligible for UPSC, Bank exams, or school admission? Read the official 2026 rules for age calculation, Aadhaar cutoff dates, and legal eligibility guidelines.",
        date: "June 18, 2026",
        category: "Eligibility",
        readTime: "7 min read",
        icon: Calendar,
        color: "text-indigo-500",
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        ctaText: "Calculate Your Exact Age",
        toc: [
            { id: "upsc-govt-exams", title: "UPSC & Government Exam Cutoffs" },
            { id: "school-admission", title: "School Admission Age (NEP 2026 Rules)" },
            { id: "aadhaar-verification", title: "Aadhaar Card & Identity Documents" },
            { id: "calculating-chronological", title: "How Chronological Age is Calculated" }
        ],
        faqs: [
            { question: "What is the minimum age for Class 1 admission under NEP in 2026?", answer: "Under the National Education Policy (NEP) guidelines, the minimum age for Class 1 admission is 6 years as of the qualifying cutoff date." },
            { question: "What is the cutoff date for UPSC age limit calculations?", answer: "UPSC typically calculates the age limit as of August 1st of the exam year." }
        ]
    },
    {
        id: 'notice-period-calculation-guide',
        title: "Notice Period Calculation: Indian HR Rules, Calendar Days vs Working Days",
        excerpt: "Resigned and confused about your last working day? Read the complete guide on notice period calculation, standard HR policies, and buyout options.",
        date: "June 18, 2026",
        category: "Career",
        readTime: "6 min read",
        icon: Clock,
        color: "text-amber-500",
        bg: "bg-amber-50 dark:bg-amber-900/20",
        ctaText: "Calculate Notice Period Dates",
        toc: [
            { id: "calendar-vs-working", title: "Calendar Days vs. Working Days" },
            { id: "last-working-day", title: "How to Calculate Last Working Day" },
            { id: "notice-buyout", title: "Notice Buyout & Leaves Adjustment" },
            { id: "resignation-email", title: "Resignation Date & Official Notice" }
        ],
        faqs: [
            { question: "Do weekends count in 30-day notice periods in India?", answer: "Yes, most Indian private companies calculate notice periods using calendar days, which means Saturdays and Sundays are included." },
            { question: "Can I adjust my pending leaves against my notice period?", answer: "It depends on your company's HR policy. Some allow you to shorten your notice period using accumulated earned leaves, while others require encashment." }
        ]
    },
    {
        id: 'home-loan-emi-hacks-2026',
        title: "Home Loan EMI Hacks 2026: How to Prepay and Save Lakhs",
        excerpt: "Learn the secrets to reducing your Home Loan EMI. Discover how strategic prepayments can shave years off your loan tenure and save you lakhs in interest.",
        date: "August 22, 2026",
        category: "Real Estate & Debt Management",
        readTime: "8 min read",
        icon: Home,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        ctaText: "Calculate EMI Savings",
        toc: [
            { id: "emi-basics", title: "Understanding EMI Components" },
            { id: "prepayment-benefits", title: "The Magic of Prepayments" },
            { id: "tenure-vs-emi", title: "Reduce Tenure vs Reduce EMI" },
            { id: "tax-benefits", title: "Home Loan Tax Benefits" }
        ],
        faqs: [
            { question: "Is it better to reduce EMI or tenure when making a prepayment?", answer: "Reducing the tenure saves significantly more interest in the long run compared to reducing the EMI amount." },
            { question: "Are there prepayment charges on home loans?", answer: "As per RBI guidelines, there are no prepayment or foreclosure charges on floating rate home loans for individual borrowers." }
        ]
    },
    {
        id: 'maximizing-take-home-pay-2026',
        title: "Maximizing Take-Home Pay: Understanding HRA, PF, and Allowances",
        excerpt: "Navigate appraisal season like a pro. Learn how to structure your salary components, maximize HRA exemptions, and optimize your flexible benefit plans (FBP) for higher in-hand pay.",
        date: "August 22, 2026",
        category: "Salary & Compensation",
        readTime: "9 min read",
        icon: Briefcase,
        color: "text-teal-500",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        ctaText: "Calculate Take-Home Pay",
        toc: [
            { id: "salary-components", title: "Basic vs Allowances" },
            { id: "hra-calculation", title: "HRA Exemption Rules" },
            { id: "pf-and-gratuity", title: "Understanding PF and Gratuity" },
            { id: "flexible-benefits", title: "Flexible Benefit Plans (FBP)" }
        ],
        faqs: [
            { question: "How is HRA exemption calculated?", answer: "HRA exemption is the minimum of: 1) Actual HRA received, 2) 50% of Basic for metro (40% non-metro), or 3) Rent paid minus 10% of Basic." },
            { question: "Is PF deduction mandatory?", answer: "EPF contribution is mandatory if your basic salary is up to ₹15,000 per month, though most companies apply it to higher salaries as well." }
        ]
    }
];
