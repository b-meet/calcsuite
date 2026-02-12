import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { calculatorRegistry } from '../calculators/registry';
import { Helmet } from 'react-helmet-async';
import { Check, Copy, Zap, Globe, DollarSign, Layout, Info, Smartphone, Code as CodeIcon } from 'lucide-react';
import { cn } from '../utils/cn';

function IsolatedPreview({ children, theme }: { children: React.ReactNode, theme: 'light' | 'dark' }) {
    const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
    const mountNode = contentRef?.contentWindow?.document?.body;

    useEffect(() => {
        if (!contentRef) return;
        const win = contentRef.contentWindow;
        if (!win) return;
        const doc = win.document;
        const head = doc.head;
        const root = doc.documentElement;

        // Reset and sync styles from parent
        head.innerHTML = '';
        document.head.querySelectorAll('style, link[rel="stylesheet"]').forEach((style) => {
            head.appendChild(style.cloneNode(true));
        });

        // Set theme class on the iframe's html root
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // Styling for the iframe body
        doc.body.style.margin = '0';
        doc.body.style.backgroundColor = 'transparent';
        doc.body.className = 'overflow-hidden';

        // Auto-resize iframe
        const resizeObserver = new ResizeObserver(() => {
            if (contentRef) {
                contentRef.style.height = `${doc.body.scrollHeight}px`;
            }
        });

        resizeObserver.observe(doc.body);
        return () => resizeObserver.disconnect();
    }, [contentRef, theme]);

    return (
        <iframe
            title="Preview"
            ref={setContentRef}
            className="w-full border-0 bg-transparent transition-all duration-300"
            style={{ height: 'auto', minHeight: '300px' }}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
}

export function WidgetGenerator() {
    const [selectedCalculatorId, setSelectedCalculatorId] = useState(calculatorRegistry[0].id);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [copied, setCopied] = useState(false);

    const selectedCalculator = calculatorRegistry.find(c => c.id === selectedCalculatorId) || calculatorRegistry[0];
    const SelectedComponent = selectedCalculator.component;

    const widgetCode = `<div class="calcsuite-widget" data-type="${selectedCalculatorId}" data-theme="${theme}"></div>
<script async src="https://calcsuite.com/widget.js"></script>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(widgetCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 pb-12">
            <Helmet>
                <title>Free Calculator Widget for Your Website | CalcSuite</title>
                <meta name="description" content="Enhance your website with our free, embeddable calculator widgets. Responsive, fast, and 100% free." />
            </Helmet>

            {/* Header */}
            <header className="text-center space-y-4 py-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                    <Zap size={14} />
                    Instant Integration
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    Premium Widgets <span className="text-blue-600 dark:text-blue-400">Fixed</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
                    Embed any of our 40+ calculators into your site with a single line of code. No account required.
                </p>
            </header>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Configuration Sidebar */}
                <aside className="lg:col-span-4 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <Layout size={20} className="text-blue-500" />
                            Configuration
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Calculator</label>
                                <select
                                    value={selectedCalculatorId}
                                    onChange={(e) => setSelectedCalculatorId(e.target.value)}
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                                >
                                    {calculatorRegistry.sort((a, b) => a.name.localeCompare(b.name)).map((calc) => (
                                        <option key={calc.id} value={calc.id}>
                                            {calc.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Theme</label>
                                <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
                                    <button
                                        onClick={() => setTheme('light')}
                                        className={cn(
                                            "py-2 rounded-xl text-sm font-bold transition-all",
                                            theme === 'light' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                        )}
                                    >
                                        Light
                                    </button>
                                    <button
                                        onClick={() => setTheme('dark')}
                                        className={cn(
                                            "py-2 rounded-xl text-sm font-bold transition-all",
                                            theme === 'dark' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                        )}
                                    >
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <button
                                onClick={handleCopy}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3"
                            >
                                {copied ? <Check size={20} /> : <Copy size={20} />}
                                {copied ? 'Snippet Copied!' : 'Get Embed Code'}
                            </button>
                        </div>
                    </div>

                    <div className="bg-blue-600 text-white p-4 sm:p-6 rounded-3xl shadow-xl shadow-blue-500/20">
                        <h4 className="font-bold flex items-center gap-2 mb-3 text-sm sm:text-base">
                            <Info size={18} />
                            Pro Tip
                        </h4>
                        <p className="text-[13px] sm:text-sm text-blue-50 leading-relaxed">
                            Place the `&lt;div&gt;` wherever you want the widget to appear. The script can be anywhere, but the end of the `&lt;body&gt;` is best for performance.
                        </p>
                    </div>
                </aside>

                {/* Main Preview Area */}
                <main className="lg:col-span-8 space-y-6 min-w-0">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col h-full">
                        {/* Live Preview Container */}
                        <div className="flex-1 p-4 sm:p-6 md:p-12 transition-all duration-300 flex justify-center bg-slate-50/30 dark:bg-slate-950/30">
                            <div className="w-full transition-all duration-500 ease-in-out border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden max-w-full">
                                <div className="h-2 bg-slate-100 dark:bg-slate-800 w-full flex items-center gap-1.5 px-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                </div>
                                <div className="p-4 sm:p-6 md:p-8">
                                    <React.Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-400">Loading calculator...</div>}>
                                        <div className="calcsuite-widget-preview overflow-hidden">
                                            <IsolatedPreview theme={theme}>
                                                <SelectedComponent />
                                            </IsolatedPreview>
                                        </div>
                                    </React.Suspense>
                                    <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
                                            ⚡ Powered by <span className="text-blue-500">CalcSuite</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Code Implementation (Nerdy Section) */}
                        <div className="bg-slate-900 border-t border-slate-800 overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                                <h3 className="text-xs font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                                    <CodeIcon size={14} />
                                    Implementation
                                </h3>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 overflow-hidden">
                                <pre className="font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto selection:bg-blue-500/30">
                                    <code className="block min-w-max">
                                        <span className="text-slate-500 opacity-50 block mb-2">// 1. The container element</span>
                                        <div className="bg-white/5 p-3 rounded-xl mb-4 text-blue-400 whitespace-nowrap overflow-x-auto">
                                            <span className="text-pink-400">&lt;div</span>{' '}
                                            <span className="text-green-400">class</span>="calcsuite-widget"{' '}
                                            <span className="text-green-400">data-type</span>="{selectedCalculatorId}"{' '}
                                            <span className="text-green-400">data-theme</span>="{theme}"<span className="text-pink-400">&gt;&lt;/div&gt;</span>
                                        </div>

                                        <span className="text-slate-500 opacity-50 block mb-2">// 2. The core runtime library</span>
                                        <div className="bg-white/5 p-3 rounded-xl text-blue-400 whitespace-nowrap overflow-x-auto">
                                            <span className="text-pink-400">&lt;script</span>{' '}
                                            <span className="text-green-400">async</span>{' '}
                                            <span className="text-green-400">src</span>="https://calcsuite.com/widget.js"<span className="text-pink-400">&gt;&lt;/script&gt;</span>
                                        </div>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Features Detail */}
            <section className="grid sm:grid-cols-3 gap-6 pt-12">
                <div className="text-center p-4">
                    <div className="inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <Globe size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">Zero-Leak CSS</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Runs in Shadow DOM. Your site's styles won't break the calculator.</p>
                </div>
                <div className="text-center p-4">
                    <div className="inline-flex p-3 rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                        <DollarSign size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">SEO Dominance</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Interactive content improves your search rankings and dwell time.</p>
                </div>
                <div className="text-center p-4">
                    <div className="inline-flex p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
                        <Smartphone size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">Auto-Responsive</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Adapts to any width perfectly for a premium mobile experience.</p>
                </div>
            </section>
        </div>
    );
}
