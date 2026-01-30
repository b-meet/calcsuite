import React, { useState } from 'react';
import { calculatorRegistry } from '../calculators/registry';
import { Helmet } from 'react-helmet-async';
import { Check, Copy, Zap, Globe, DollarSign, Layout } from 'lucide-react';

export function WidgetGenerator() {
    const [selectedCalculatorId, setSelectedCalculatorId] = useState(calculatorRegistry[0].id);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [copied, setCopied] = useState(false);

    const selectedCalculator = calculatorRegistry.find(c => c.id === selectedCalculatorId) || calculatorRegistry[0];
    const SelectedComponent = selectedCalculator.component;

    const widgetCode = `<!-- CalcSuite Widget -->
<div class="calcsuite-widget" data-type="${selectedCalculatorId}" data-theme="${theme}"></div>
<script async src="https://calcsuite.com/widget.js"></script>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(widgetCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-12">
            <Helmet>
                <title>Free Calculator Widget for Your Website | CalcSuite</title>
                <meta name="description" content="Enhance your website with our free, embeddable calculator widgets. boost engagement and SEO with beautiful, responsive financial, health, and math calculators." />
            </Helmet>

            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    Free for everyone
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Add Powerful Calculators <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">to Your Website</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Boost user engagement and SEO with our collection of premium, responsive calculator widgets. Copy and paste one line of code. Zero cost.
                </p>
            </section>

            {/* Benefits Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                        <DollarSign size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">100% Free</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">No monthly fees, no credit card required. Use our widgets on as many sites as you want.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4">
                        <Zap size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Boost Engagement</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Interactive tools keep visitors on your page longer, reducing bounce rates.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                        <Globe size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">SEO Friendly</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Rich content and increased dwell time signals quality to search engines.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-4">
                        <Layout size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fully Responsive</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Looks perfect on desktop, tablet, and mobile devices automatically.</p>
                </div>
            </section>

            {/* Generator Section */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
                <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Customize Your Widget</h2>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Calculator</label>
                            <select
                                value={selectedCalculatorId}
                                onChange={(e) => setSelectedCalculatorId(e.target.value)}
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            >
                                {calculatorRegistry.map((calc) => (
                                    <option key={calc.id} value={calc.id}>
                                        {calc.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full md:w-48">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Theme</label>
                            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
                                <button
                                    onClick={() => setTheme('light')}
                                    className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${theme === 'light'
                                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setTheme('dark')}
                                    className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${theme === 'dark'
                                        ? 'bg-slate-800 dark:bg-slate-600 text-white shadow-sm'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    Dark
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2">
                    {/* Preview Area */}
                    <div className={`p-6 md:p-8 border-r border-slate-200 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
                        }`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-sm font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                }`}>Live Preview</h3>
                            <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                                }`}>Actual size may vary on your site</span>
                        </div>

                        <div className={`rounded-2xl shadow-sm border p-4 md:p-6 overflow-hidden transition-colors duration-300 ${theme === 'dark'
                            ? 'bg-slate-900 border-slate-800 text-white'
                            : 'bg-white border-slate-100'
                            }`}>
                            <div className={theme === 'dark' ? 'dark' : ''}>
                                <React.Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-400">Loading calculator...</div>}>
                                    <SelectedComponent />
                                </React.Suspense>
                            </div>
                        </div>
                    </div>

                    {/* Code Area */}
                    <div className="p-6 md:p-8 bg-slate-900 text-slate-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Embed Code</h3>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <Copy size={14} />
                                {copied ? 'Copied!' : 'Copy to Clipboard'}
                            </button>
                        </div>

                        <div className="relative group">
                            <pre className="bg-slate-950 rounded-xl p-6 overflow-x-auto text-sm font-mono leading-relaxed border border-slate-800">
                                <code>
                                    <span className="text-slate-500">&lt;!-- Place this where you want the widget to appear --&gt;</span>
                                    {'\n'}
                                    <span className="text-pink-400">&lt;div</span> <span className="text-blue-400">class</span>=<span className="text-green-400">"calcsuite-widget"</span> <span className="text-blue-400">data-type</span>=<span className="text-green-400">"{selectedCalculatorId}"</span> <span className="text-blue-400">data-theme</span>=<span className="text-green-400">"{theme}"</span><span className="text-pink-400">&gt;&lt;/div&gt;</span>
                                    {'\n\n'}
                                    <span className="text-slate-500">&lt;!-- Place this at the end of your body tag --&gt;</span>
                                    {'\n'}
                                    <span className="text-pink-400">&lt;script</span> <span className="text-blue-400">async</span> <span className="text-blue-400">src</span>=<span className="text-green-400">"https://calcsuite.com/widget.js"</span><span className="text-pink-400">&gt;&lt;/script&gt;</span>
                                </code>
                            </pre>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={handleCopy}
                                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                                    title="Copy code"
                                >
                                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <h4 className="font-semibold text-white">Integration Tips</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                    <p>The widget is isolated in a Shadow DOM, so it won't inherit or break your site's CSS.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                    <p>You can adjust the width by placing the widget container inside a parent element with a defined width.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                    <p>The height adjusts automatically based on the content.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
