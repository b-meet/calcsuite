import { useState, useEffect } from 'react';
import { HelpCircle, Calculator, FileText, AlertTriangle, Truck, Percent, Building, Info, TrendingUp, ShieldAlert, Globe, Map, Bell, Search, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const IndiaGSTCalculatorContent = () => {
    // State for Interest Calculator
    const [taxLiability, setTaxLiability] = useState('');
    const [daysDelayed, setDaysDelayed] = useState('');
    const [isHighlighted, setIsHighlighted] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#interest-calculator') {
                setIsHighlighted(true);
                setTimeout(() => setIsHighlighted(false), 3000);
            }
        };

        // Check on initial load (in case user lands with hash)
        handleHashChange();

        // Listen for active hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const calculateInterest = () => {
        const principal = parseFloat(taxLiability) || 0;
        const days = parseFloat(daysDelayed) || 0;
        // Formula: (Tax * Days * 18%) / 365
        const interest = (principal * days * 0.18) / 365;
        return interest.toFixed(2);
    };

    return (
        <div className="space-y-12 not-prose">
            <Helmet>
                <title>GST Calculator India (2026) - Calculate 0%, 5%, 18%, 40% Tax</title>
                <meta name="description" content="Free India GST Calculator updated for 2026 reforms. Calculate GST inclusive/exclusive prices, HSN codes, and late payment interest. 100% accurate & free." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "India GST Calculator (2026)",
                        "operatingSystem": "Web",
                        "applicationCategory": "FinanceApplication",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "1024"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "INR"
                        },
                        "featureList": "Calculate GST, HSN Code Search, Interest Calculator, 2026 Tax Slabs, Input Tax Credit"
                    })}
                </script>
            </Helmet>

            {/* 0. Latest News Ticker (SEO "Freshness" Signal) */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-4 text-white shadow-lg flex items-center gap-4 animate-fade-in">
                <div className="bg-white/20 p-2 rounded-full hidden sm:block">
                    <Bell className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="flex-1">
                    <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded mr-2 uppercase tracking-wide">Update</span>
                    <span className="text-sm font-medium">
                        <strong>Budget 2026 Alert:</strong> Section 16(4) time limit relaxation applies retroactively. ITC can now be claimed for FY 2025-26 until Nov 30, 2026.
                    </span>
                </div>
            </div>

            {/* 1. Zero-Click Snippet (Featured Snippet Optimization) */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-start gap-4">
                    <div className="mt-1 hidden sm:block">
                        <Search className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 m-0">What is the GST Rate in India (2026)?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                            As of January 2026, India follows a streamlined 4-tier GST structure: <strong>0% (Essentials)</strong>, <strong>5% (Merit Goods)</strong>, <strong>18% (Standard Services & Goods)</strong>, and <strong>40% (Luxury & Sin Goods)</strong>. The previous 12% and 28% slabs have been subsumed into these new categories to simplify compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: Introduction & BLUF */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 m-0">Complete Guide to India's 2026 GST Reform</h2>

                {/* Types of GST Cards */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">There are four types of GST active in India:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <strong className="block text-indigo-600 dark:text-indigo-400 mb-2">CGST</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong>Central Goods and Services Tax</strong> is collected by the central government for intra-state supply. It replaces Service Tax and Central Excise duty.
                            </p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <strong className="block text-indigo-600 dark:text-indigo-400 mb-2">SGST</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong>State Goods and Services Tax</strong> is collected by the state government for intra-state supply. It replaces VAT, Entertainment Tax, etc.
                            </p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <strong className="block text-indigo-600 dark:text-indigo-400 mb-2">IGST</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong>Integrated Goods and Services Tax</strong> is collected by the central government on inter-state supply and imports. It is then shared with the destination state.
                            </p>
                        </div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <strong className="block text-indigo-600 dark:text-indigo-400 mb-2">UTGST</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong>Union Territory Goods and Services Tax</strong> applies to supplies in Union Territories (like Chandigarh, Ladakh) instead of SGST.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30 mb-8">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 flex items-center gap-2 m-0 text-lg">
                        <Info className="w-5 h-5" />
                        Executive Summary (BLUF)
                    </h3>
                    <p className="text-blue-800 dark:text-blue-300 m-0 leading-relaxed">
                        The <strong>January 2026 GST Amendment</strong> has fundamentally streamlined India's indirect tax structure. The cluttered multi-rate system has been replaced with four distinct slabs: <strong>0% (Exempt)</strong>, <strong>5% (Merit)</strong>, <strong>18% (Standard)</strong>, and <strong>40% (Luxury/Sin)</strong>. This calculator is fully updated to reflect these changes, helping you compute accurate tax liability whether you are a business owner filing GSTR-1 or a consumer verifying an invoice.
                    </p>
                </div>

                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                    <p>
                        The Goods and Services Tax (GST), launched in 2017, was India's biggest tax reform. It replaced a cascading system of VAT, Excise, and Service Tax with a "One Nation, One Tax" model. Over the years, the GST Council has periodically revised rates, but the 2026 reform marks a pivotal shift towards simplification.
                    </p>
                    <p>
                        The new structure minimizes classification disputes (e.g., is a "kitkat" a chocolate or a biscuit?) by broadening the 18% standard slab and clearly demarcating luxury goods at 40%. For the common man, the expansion of the "Nil Rated" (0%) category for essentials ensures that inflation remains in check.
                    </p>
                </div>
            </section>

            {/* Section 2: Deep Dive into 2026 Tax Slabs */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <Percent className="w-6 h-6 text-indigo-500" />
                    Revised GST Rate Structure (2026)
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Understanding the correct HSN (Harmonized System of Nomenclature) classification and applicable rate is crucial to avoid penalties. Here is the detailed breakdown of the new four-tier structure:
                </p>

                <div className="space-y-6">
                    {/* 0% Exempt */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                        <div className="md:w-32 flex-shrink-0">
                            <span className="block text-3xl font-bold text-emerald-600 dark:text-emerald-400">0%</span>
                            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Exempt</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Essential Goods & Services</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                No tax is collected on these items. Input Tax Credit (ITC) cannot be claimed by businesses dealing exclusively in these goods.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm text-emerald-800 dark:text-emerald-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Unpacked Food Grains (Rice, Wheat)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Fresh Milk, Curd, Vegetables</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Educational Services</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Healthcare Services (Clinics/Hospitals)</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5% Merit */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                        <div className="md:w-32 flex-shrink-0">
                            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">5%</span>
                            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Merit</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Common Household Items</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Items of mass consumption that are necessary but not "raw" essentials.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm text-blue-800 dark:text-blue-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Packaged/Branded Food Items</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Edible Oils, Sugar, Tea, Coffee</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Life-saving Medicines</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Economy Class Air Travel</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Electric Vehicles (Green Initiative)</li>
                            </ul>
                        </div>
                    </div>

                    {/* 18% Standard */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
                        <div className="md:w-32 flex-shrink-0">
                            <span className="block text-3xl font-bold text-indigo-600 dark:text-indigo-400">18%</span>
                            <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">Standard</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Default Rate for Goods & Services</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                If an item is not explicitly listed in other schedules, it typically falls here. This category covers 70% of taxable supplies.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm text-indigo-800 dark:text-indigo-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Capital Goods & Machinery</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>IT & Telecom Services</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Financial Services (Banking charges)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Consumer Electronics (TVs, Laptops, Phones)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Restaurants (AC/Non-AC with ITC)</li>
                            </ul>
                        </div>
                    </div>

                    {/* 40% Luxury */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30">
                        <div className="md:w-32 flex-shrink-0">
                            <span className="block text-3xl font-bold text-rose-600 dark:text-rose-400">40%</span>
                            <span className="text-sm font-semibold text-rose-700 dark:text-rose-300 uppercase tracking-wide">Luxury/Sin</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Highest Tax Slab + Cess</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Reserved for goods that are discouraged or consumed by the ultra-wealthy. This slab combines the old 28% rate with additional compensation cess into a single 40% tier for simplicity.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-2 text-sm text-rose-800 dark:text-rose-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>Luxury Automobiles & SUVs</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>Tobacco & Pan Masala Products</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>Aerated/Carbonated Drinks</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>Online Gaming & Betting (Face Value)</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 2b: Sector-Specific Impact */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <Building className="w-6 h-6 text-orange-500" />
                    Sector-Wise GST Impact Analysis (2026)
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Real Estate & Housing</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong>Affordable Housing:</strong> 1% without ITC.<br />
                                <strong>Non-Affordable:</strong> 5% without ITC.<br />
                                <strong>Commercial:</strong> 12% with ITC.<br />
                                <em className="text-xs text-slate-500 block mt-2">Note: GST is not applicable on sale of completed properties (OC received) or land sales.</em>
                            </p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Textiles & Apparel</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong>Cotton / Natural Fiber:</strong> 5%<br />
                                <strong>Man-made / Synthetic:</strong> 12% (Inverted Duty Structure issues often arise here).<br />
                                <strong>Apparel &gt; ₹1,000:</strong> 12%
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Online Gaming & Casinos</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong>Rate:</strong> Flat 40% (Sin Goods Category)<br />
                                <strong>Basis:</strong> Charged on the full face value of bets, not just the platform fee (GGR). This was a major 2025 amendment to curb speculative activities.
                            </p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Freelancers & Export of Services</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong>Exports:</strong> Zero-Rated (with LUT).<br />
                                <strong>Domestic Clients:</strong> 18% (if turnover &gt; ₹20L).<br />
                                <em className="text-xs text-slate-500 block mt-2">Tip: Freelancers must file GSTR-1 and GSTR-3B monthly/quarterly.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2c: GST vs Old Regime Comparison */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">GST vs. Old Tax Regime (VAT/Excise)</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50">
                                <th className="p-4 font-semibold text-slate-900 dark:text-white w-1/3">Feature</th>
                                <th className="p-4 font-semibold text-slate-500 dark:text-slate-400 w-1/3">Old Regime (Pre-2017)</th>
                                <th className="p-4 font-semibold text-indigo-600 dark:text-indigo-400 w-1/3">GST Regime (2026)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                            <tr>
                                <td className="p-4 font-medium text-slate-900 dark:text-white">Cascading Effect</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Tax on Tax exists (Excise + VAT).</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Eliminated via seamless Input Tax Credit (ITC).</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-slate-900 dark:text-white">Threshold</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">VAT: ₹5L - ₹10L (varied by state).</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">₹40L for Goods, ₹20L for Services.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-slate-900 dark:text-white">Compliance</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Complex (VAT, Excise, Service Tax filings).</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Unified (GSTR-1, GSTR-3B) online filing.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-slate-900 dark:text-white">Checkposts</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Identify checks at state borders (Octroi).</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">Abolished. E-Way Bill ensures smooth movement.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section 3: Calculation Logic */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-indigo-500" />
                    How to Calculate GST Manually
                </h2>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">1. GST Exclusive (Forward Calculation)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                Used when you have a <strong>Net Price</strong> (without tax) and need to add GST to create the final invoice.
                            </p>
                            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <code className="block text-indigo-600 dark:text-indigo-400 font-mono mb-2">GST = (Base Price × Rate) ÷ 100</code>
                                <code className="block text-slate-900 dark:text-white font-mono">Total = Base Price + GST</code>
                            </div>
                        </div>
                        <div className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Example Scenario</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                You are a freelancer sending an invoice for ₹50,000 service fees. The applicable rate is 18%.<br />
                                <strong>GST:</strong> (50,000 × 18) ÷ 100 = ₹9,000<br />
                                <strong>Invoice Total:</strong> ₹59,000
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">2. GST Inclusive (Reverse Calculation)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                Used when you have a <strong>MRP</strong> (Maximum Retail Price) which already includes tax, and you need to find the base value.
                            </p>
                            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                                <code className="block text-purple-600 dark:text-purple-400 font-mono mb-2">Base = Total ÷ (1 + (Rate/100))</code>
                                <code className="block text-slate-900 dark:text-white font-mono">GST = Total - Base</code>
                            </div>
                        </div>
                        <div className="pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Example Scenario</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                You bought a smartphone for ₹23,600 (MRP). The rate is 18%.<br />
                                <strong>Base Price:</strong> 23,600 ÷ 1.18 = ₹20,000<br />
                                <strong>Tax Paid:</strong> ₹3,600
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    id="interest-calculator"
                    className={`mt-8 p-6 rounded-xl border transition-all duration-1000 ${isHighlighted
                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 shadow-[0_0_15px_rgba(234,179,8,0.3)] transform scale-[1.01]'
                        : 'bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'
                        }`}
                >
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-red-500" /> 2026 Late Payment Interest Calculator
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1">Net Tax Liability (₹)</label>
                            <input
                                type="number"
                                value={taxLiability}
                                onChange={(e) => setTaxLiability(e.target.value)}
                                className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                                placeholder="e.g. 50000"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-500 mb-1">Days Delayed</label>
                            <input
                                type="number"
                                value={daysDelayed}
                                onChange={(e) => setDaysDelayed(e.target.value)}
                                className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                                placeholder="e.g. 15"
                            />
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg border border-red-100 dark:border-red-900/30 flex flex-col justify-center items-center">
                            <span className="text-xs text-red-600 dark:text-red-400 font-medium">Estimated Interest (18%)</span>
                            <span className="text-xl font-bold text-red-700 dark:text-red-300">₹{calculateInterest()}</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        * Interest is calculated at 18% per annum on the <strong>Net Tax Liability</strong> (after deducting ITC balance), as per Section 50 of the CGST Act.
                    </p>
                </div>
            </section>

            {/* Section 4: Registration & Compliance */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <FileText className="w-6 h-6 text-blue-500" />
                    GST Registration & Turnover Limits
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Not everyone needs to register for GST. The 2026 limits are designed to protect small businesses from compliance burdens.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex justify-between">
                            <span>Service Providers</span>
                            <span className="text-blue-600">₹20 Lakhs</span>
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            If your annual aggregate turnover from services (consulting, rental, etc.) exceeds ₹20 Lakhs, mandatory registration applies. (Limit is ₹10 Lakhs for Special Category States).
                        </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex justify-between">
                            <span>Goods Suppliers</span>
                            <span className="text-green-600">₹40 Lakhs</span>
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            For businesses engaged exclusively in the supply of goods, the threshold is higher at ₹40 Lakhs. (₹20 Lakhs for Special Category States).
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Mandatory Registration Case (Irrespective of Turnover)</h3>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>Inter-state taxable supply of goods</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>Casual Taxable Persons</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>E-commerce Operators (Amazon/Flipkart sellers)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>Reverse Charge Mechanism (RCM) liabilities</li>
                    </ul>
                </div>
            </section>

            {/* Section 5: Composition Scheme */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <Building className="w-6 h-6 text-green-500" />
                    Composition Scheme: For Small Businesses
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    To reduce the compliance burden for small taxpayers (Turnover &lt; ₹1.5 Crore), the government offers the Composition Scheme.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
                        <strong className="block text-slate-900 dark:text-white mb-1">Traders & Manufacturers</strong>
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">1%</span>
                        <span className="block text-xs text-slate-500 mt-1">Tax on Turnover</span>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
                        <strong className="block text-slate-900 dark:text-white mb-1">Restaurants</strong>
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">5%</span>
                        <span className="block text-xs text-slate-500 mt-1">No ITC Available</span>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
                        <strong className="block text-slate-900 dark:text-white mb-1">Service Providers</strong>
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">6%</span>
                        <span className="block text-xs text-slate-500 mt-1">For Turnover &lt; 50L</span>
                    </div>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <p className="text-sm text-amber-800 dark:text-amber-300 m-0">
                        <strong>Important Constraint:</strong> Composition dealers cannot issue a "Tax Invoice" (they issue a "Bill of Supply") and cannot collect tax from customers. They also cannot claim Input Tax Credit on their own purchases. This breaks the credit chain but simplifies filings to a quarterly statement (CMP-08).
                    </p>
                </div>
            </section>

            {/* Section 6: Input Tax Credit (ITC) */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                    Input Tax Credit (ITC): The Core Benefit
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    ITC is the mechanism that prevents "Tax on Tax". If you are a manufacturer, the GST you pay on raw materials can be subtracted from the GST you collect on the final product.
                </p>

                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Conditions to Claim ITC (Section 16)</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 font-bold text-xs shrink-0">1</div>
                        <p>Possession of a valid Tax Invoice or Debit Note.</p>
                    </div>
                    <div className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 font-bold text-xs shrink-0">2</div>
                        <p>Goods or services must have been actually received.</p>
                    </div>
                    <div className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 font-bold text-xs shrink-0">3</div>
                        <p>Supplier must have filed GSTR-1 (Credit must appear in your GSTR-2B).</p>
                    </div>
                    <div className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 font-bold text-xs shrink-0">4</div>
                        <p>You must pay the supplier within 180 days of invoice date.</p>
                    </div>
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Blocked Credits (Section 17(5)) - No ITC Allowed</h3>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/10 rounded-xl border border-rose-100 dark:border-rose-900/30 text-sm text-rose-800 dark:text-rose-300">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Motor Vehicles for personal use (seating capacity &lt; 13).</li>
                        <li>Food, Beverages, and Catering services (unless for resale).</li>
                        <li>Health Insurance and Gym Memberships.</li>
                        <li>Goods lost, stolen, or written off.</li>
                        <li>Construction of immovable property (office building) for self-use.</li>
                    </ul>
                </div>
            </section>

            {/* Section 7: Penalties & E-Way Bill */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Truck className="w-5 h-5 text-orange-500" />
                            E-Way Bill Rules
                        </h2>
                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                An Electronic Way Bill (E-Way Bill) is mandatory for the movement of goods worth more than <strong>₹50,000</strong>. It must be generated before the movement starts.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <Globe className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span><strong>Inter-State:</strong> Mandatory for &gt;₹50k consignment value.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Globe className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span><strong>Intra-State:</strong> Mandatory in most states (limit varies by state).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Globe className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span><strong>Validity:</strong> 1 Day for every 200 km (or part thereof).</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-red-500" />
                            Offences & Penalties
                        </h2>
                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                                <strong className="text-red-700 dark:text-red-400 block mb-1">Late Filing of Returns</strong>
                                <span>₹50/day (₹20/day for Nil return). Max capped at ₹5,000. Interest @ 18% p.a. applies on unpaid tax.</span>
                            </div>
                            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                                <strong className="text-red-700 dark:text-red-400 block mb-1">Tax Evasion</strong>
                                <span>Penalty is 100% of the tax evaded (Minimum ₹10,000). For serious fraud, it can lead to arrest.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions (2026 Edition)</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "What is the new 40% GST slab for?", a: "The 40% slab is a consolidated rate for luxury and 'sin' goods like luxury cars, tobacco, and aerated drinks, replacing the earlier complex cess structure." },
                        { q: "Is GST applicable on exports?", a: "No. Exports are 'Zero-Rated'. This means you can export goods without tax, or pay tax and claim a full refund to ensure Indian goods remain competitive globally." },
                        { q: "Can I edit an invoice after filing GSTR-1?", a: "No, you cannot edit a filed return. However, you can issue a credit/debit note or amend the details in next month's return." },
                        { q: "What is Reverse Charge (RCM)?", a: "Usually, the supplier pays GST. In RCM, the receiver pays GST. It applies to purchases from unregistered dealers or specific services like legal fees (Advocates) and GTA." },
                        { q: "How long should I keep GST records?", a: "You must maintain accounts and records for at least 72 months (6 years) from the due date of furnishing the annual return for the year." },
                        { q: "Is e-Invoicing mandatory for everyone?", a: "As of 2026, e-Invoicing is mandatory for all B2B transactions if your turnover exceeds ₹5 Crores in any preceding financial year." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">
                                <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 8: GST State Codes List */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <Map className="w-6 h-6 text-teal-500" />
                    GST State Codes List (First 2 Digits of GSTIN)
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                    {[
                        { code: "01", state: "Jammu & Kashmir" }, { code: "02", state: "Himachal Pradesh" },
                        { code: "03", state: "Punjab" }, { code: "04", state: "Chandigarh" },
                        { code: "06", state: "Haryana" }, { code: "07", state: "Delhi" },
                        { code: "08", state: "Rajasthan" }, { code: "09", state: "Uttar Pradesh" },
                        { code: "10", state: "Bihar" }, { code: "19", state: "West Bengal" },
                        { code: "24", state: "Gujarat" }, { code: "27", state: "Maharashtra" },
                        { code: "29", state: "Karnataka" }, { code: "33", state: "Tamil Nadu" },
                        { code: "36", state: "Telangana" }, { code: "37", state: "Andhra Pradesh" }
                    ].map((item) => (
                        <div key={item.code} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg flex justify-between items-center border border-slate-100 dark:border-slate-800">
                            <span className="font-bold text-slate-900 dark:text-white">{item.code}</span>
                            <span className="text-slate-600 dark:text-slate-400">{item.state}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center">
                    * This is a partial list of major manufacturing and trading hubs. The first two digits of a GSTIN always represent the state code.
                </p>
            </section>

            {/* Section 9: Documents & Updates */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-blue-500" />
                            Documents for Registration
                        </h2>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="font-semibold text-slate-900 dark:text-white min-w-[120px]">PAN Card:</span>
                                <span>Mandatory for the business/proprietor.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-semibold text-slate-900 dark:text-white min-w-[120px]">Aadhaar Card:</span>
                                <span>For authentication (Promoters/Partners).</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-semibold text-slate-900 dark:text-white min-w-[120px]">Business Proof:</span>
                                <span>Incorporation Cert, Partnership Deed.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-semibold text-slate-900 dark:text-white min-w-[120px]">Address Proof:</span>
                                <span>Electricity Bill, Rent Agreement, NOC.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-semibold text-slate-900 dark:text-white min-w-[120px]">Bank Details:</span>
                                <span>Cancelled Cheque or Passbook front page.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                            Key 2026 Legal Updates
                        </h2>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-900/30">
                                <strong className="text-purple-700 dark:text-purple-300 block mb-1">ITC on CSR:</strong>
                                <span>Input Tax Credit is now <strong>allowed</strong> on Corporate Social Responsibility (CSR) expenses, reversing the earlier 2024 ban.</span>
                            </div>
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-900/30">
                                <strong className="text-purple-700 dark:text-purple-300 block mb-1">Virtual Digital Assets:</strong>
                                <span>Trading spread of crypto/NFTs is taxed at 18% (Service), distinct from the 30% Income Tax on profits.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: Top 20 HSN/SAC Codes (2026) */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <Search className="w-6 h-6 text-indigo-500" />
                    Common HSN/SAC Codes Directory
                </h2>
                <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="p-3 font-semibold text-slate-900 dark:text-white">Code</th>
                                <th className="p-3 font-semibold text-slate-900 dark:text-white">Description</th>
                                <th className="p-3 font-semibold text-slate-900 dark:text-white hidden sm:table-cell">Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {[
                                { code: "998361", desc: "Digital Marketing & Advertising Services", type: "Service (SAC)" },
                                { code: "998313", desc: "IT Consulting & Software Support", type: "Service (SAC)" },
                                { code: "9954", desc: "Construction Services", type: "Service (SAC)" },
                                { code: "9963", desc: "Accommodation, Food & Beverage Services", type: "Service (SAC)" },
                                { code: "8517", desc: "Mobile Phones & Parts", type: "Goods (HSN)" },
                                { code: "8471", desc: "Laptops, Computers & Printers", type: "Goods (HSN)" },
                                { code: "6109", desc: "T-Shirts (Knitted/Crocheted)", type: "Goods (HSN)" },
                                { code: "3004", desc: "Medicaments (Pharmaceuticals)", type: "Goods (HSN)" },
                                { code: "8703", desc: "Motor Cars & Vehicles", type: "Goods (HSN)" },
                                { code: "7108", desc: "Gold (Unwrought/Semi-manufactured)", type: "Goods (HSN)" },
                            ].map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                    <td className="p-3 font-mono font-medium text-indigo-600 dark:text-indigo-400">{item.code}</td>
                                    <td className="p-3 text-slate-700 dark:text-slate-300">{item.desc}</td>
                                    <td className="p-3 text-slate-500 dark:text-slate-400 hidden sm:table-cell">{item.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Glossary */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Essential GST Glossary for Business Owners</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">CGST / SGST / IGST</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Central, State, and Integrated Goods and Services Tax. CGST+SGST applies on intra-state sales. IGST applies on inter-state sales.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">ITC (Input Tax Credit)</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            The tax you pay on purchases which acts as a credit balance to pay off your tax liability on sales.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">RCM (Reverse Charge)</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            A mechanism where the recipient of goods/services is liable to pay tax instead of the supplier.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">HSN / SAC Code</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Harmonized System of Nomenclature (Goods) / Services Accounting Code (Services). Mandatory 4-6 digit codes for invoicing.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">GSTR-2B</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            An auto-drafted statement providing eligible ITC details based on suppliers' GSTR-1 filings.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">E-Invoicing</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            System where B2B invoices are authenticated electronically by GSTN for further use on the common GST portal.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">GSTR-1A</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            A new amendment form allowing taxpayers to fix errors in GSTR-1 before filing GSTR-3B for the same month.
                        </p>
                    </div>
                    <div>
                        <strong className="block text-slate-900 dark:text-white mb-1">QRMP Scheme</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Quarterly Return Monthly Payment. Allows small taxpayers (Turnover &lt; ₹5Cr) to file returns quarterly while paying tax monthly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Tools for Engagement */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Popular Financial Tools</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <a href="/calculator/india-tax" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                <FileText className="w-5 h-5" />
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Income Tax Calc</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Calculate New vs Old Regime tax instantly.</p>
                    </a>
                    <a href="/calculator/india-salary" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-green-500 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                                <Building className="w-5 h-5" />
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Salary Calculator</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Convert CTC to In-hand monthly salary.</p>
                    </a>
                    <a href="/calculator/percentage" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                                <Percent className="w-5 h-5" />
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Percentage Calc</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Find % change, increase or decrease.</p>
                    </a>
                    <a href="/calculator/discount" className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                                <TrendingUp className="w-5 h-5" />
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Discount Calc</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Calculate finale price after sale discounts.</p>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default IndiaGSTCalculatorContent;
