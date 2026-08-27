import React, { useMemo, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { calculatorRegistry } from '../calculators/registry';
import { Helmet } from 'react-helmet-async';
import {
    Check, Copy, Zap, Globe, Smartphone, ShieldCheck,
    AlignLeft, PanelBottom, PanelRight, Sun, Moon,
} from 'lucide-react';
import { cn } from '../utils/cn';
import { WidgetProvider } from '../context/WidgetContext';
import { CalculatorPicker } from './widget-generator/CalculatorPicker';
import { RotatingTips } from './widget-generator/RotatingTips';
import { SitePreview } from './widget-generator/SitePreview';
import { Field, RangeControl, Segmented, ToggleRow } from './widget-generator/Controls';
import { buildEmbedCode, tokenizeHtml } from './widget-generator/embed';
import {
    DEFAULT_APPEARANCE, PLACEMENTS, shortCalculatorName,
    type Appearance, type CalculatorOption, type Placement,
} from './widget-generator/types';

/**
 * Renders the live calculator inside an iframe so the host page's styles and
 * the calculator's own styles cannot reach each other — the same isolation the
 * real widget gets from its Shadow DOM.
 */
function IsolatedPreview({ children, appearance }: { children: React.ReactNode; appearance: Appearance }) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const setupIframe = () => {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!doc) return;

            const head = doc.head;
            head.innerHTML = '';
            document.head.querySelectorAll('style, link[rel="stylesheet"]').forEach((style) => {
                head.appendChild(style.cloneNode(true));
            });

            doc.body.style.margin = '0';
            doc.body.style.backgroundColor = 'transparent';
            doc.body.className = 'overflow-hidden';

            setMountNode(doc.body);
        };

        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc?.readyState === 'complete') {
            setupIframe();
        } else {
            iframe.addEventListener('load', setupIframe);
            return () => iframe.removeEventListener('load', setupIframe);
        }
    }, []);

    useEffect(() => {
        if (!mountNode || !iframeRef.current) return;
        const iframe = iframeRef.current;
        const doc = mountNode.ownerDocument;
        const root = doc.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(appearance.theme);

        const observer = new ResizeObserver(() => {
            if (doc.body) {
                iframe.style.height = `${doc.body.scrollHeight}px`;
            }
        });
        observer.observe(doc.body);
        return () => observer.disconnect();
    }, [mountNode, appearance.theme]);

    return (
        <iframe
            ref={iframeRef}
            title="Widget preview"
            scrolling="no"
            className="w-full border-0 bg-transparent block"
            style={{ height: 'auto', minHeight: '140px' }}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
}

/** The chrome the real widget draws around the calculator, mirrored for preview. */
function WidgetFrame({ appearance, children }: { appearance: Appearance; children: React.ReactNode }) {
    return (
        <div
            className={cn(
                'overflow-hidden',
                appearance.theme === 'dark' ? 'bg-slate-900' : 'bg-white',
                appearance.border && (appearance.theme === 'dark' ? 'border border-slate-700' : 'border border-slate-200'),
                appearance.shadow && 'shadow-lg shadow-slate-900/10'
            )}
            style={{ borderRadius: appearance.radius, fontSize: appearance.fontSize }}
        >
            <div style={{ padding: appearance.padding }}>{children}</div>
            <div
                className={cn(
                    'flex items-center justify-between border-t',
                    appearance.theme === 'dark'
                        ? 'bg-slate-800/60 border-slate-700 text-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                )}
                style={{
                    paddingLeft: appearance.padding,
                    paddingRight: appearance.padding,
                    paddingTop: Math.max(6, appearance.padding * 0.4),
                    paddingBottom: Math.max(6, appearance.padding * 0.4),
                    fontSize: Math.max(10, appearance.fontSize - 4),
                }}
            >
                <span>
                    Powered by <span className="font-bold text-blue-500">CalcSuite</span>
                </span>
                <span className="opacity-70">Get this widget</span>
            </div>
        </div>
    );
}

function CodeBlock({ code }: { code: string }) {
    const tokens = useMemo(() => tokenizeHtml(code), [code]);
    const colors: Record<string, string> = {
        tag: 'text-pink-400',
        attr: 'text-sky-300',
        value: 'text-emerald-300',
        punct: 'text-slate-500',
        text: 'text-slate-300',
    };
    return (
        <pre className="p-4 sm:p-5 text-[12px] sm:text-[12.5px] leading-[1.9] font-mono selection:bg-blue-500/30 whitespace-pre-wrap break-words">
            <code>
                {tokens.map((token, i) => (
                    <span key={i} className={colors[token.kind]}>{token.text}</span>
                ))}
            </code>
        </pre>
    );
}

export function WidgetGenerator() {
    const options: CalculatorOption[] = useMemo(
        () =>
            [...calculatorRegistry]
                .map(c => ({
                    id: c.id,
                    name: shortCalculatorName(c.name),
                    fullName: c.name,
                    category: c.category,
                    icon: c.icon,
                }))
                .sort((a, b) => a.name.localeCompare(b.name)),
        []
    );

    const [selectedCalculatorId, setSelectedCalculatorId] = useState(options[0].id);
    const [placement, setPlacement] = useState<Placement>('article');
    const [appearance, setAppearance] = useState<Appearance>(DEFAULT_APPEARANCE);
    const [copied, setCopied] = useState(false);

    const selectedCalculator =
        calculatorRegistry.find(c => c.id === selectedCalculatorId) ?? calculatorRegistry[0];
    const SelectedComponent = selectedCalculator.component;
    const calculatorName = shortCalculatorName(selectedCalculator.name);

    const embedCode = useMemo(
        () => buildEmbedCode({ calculatorId: selectedCalculatorId, calculatorName, placement, appearance }),
        [selectedCalculatorId, calculatorName, placement, appearance]
    );

    const set = <K extends keyof Appearance>(key: K, value: Appearance[K]) =>
        setAppearance(a => ({ ...a, [key]: value }));

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(embedCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked; the snippet is on screen to copy by hand.
        }
    };

    return (
        <div className="space-y-8 pb-16">
            <Helmet>
                <title>Free Calculator Widget for Your Website | CalcSuite</title>
                <meta name="description" content="Embed a free calculator widget on your site. Pick the calculator, match it to your layout, tune the type and spacing, and copy one line of code." />
            </Helmet>

            <header className="text-center space-y-3 pt-8 pb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    <Zap size={12} />
                    One snippet, no account
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Calculator widgets for your site
                </h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
                    Choose a calculator, see it in the layout you actually use, and copy the embed.
                </p>
            </header>

            <div className="grid lg:grid-cols-12 gap-6 items-start">
                {/* Controls */}
                <aside className="lg:col-span-4 lg:sticky lg:top-6 space-y-4">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5">
                        <Field label="Calculator">
                            <CalculatorPicker
                                options={options}
                                value={selectedCalculatorId}
                                onChange={setSelectedCalculatorId}
                            />
                        </Field>

                        <Field label="Placement" hint={PLACEMENTS.find(p => p.id === placement)?.hint}>
                            <Segmented<Placement>
                                value={placement}
                                onChange={setPlacement}
                                options={[
                                    { value: 'article', label: 'Article', icon: <AlignLeft size={13} /> },
                                    { value: 'end', label: 'Page end', icon: <PanelBottom size={13} /> },
                                    { value: 'aside', label: 'Sidebar', icon: <PanelRight size={13} /> },
                                ]}
                            />
                        </Field>

                        <Field label="Theme">
                            <Segmented<Appearance['theme']>
                                value={appearance.theme}
                                onChange={(v) => set('theme', v)}
                                options={[
                                    { value: 'light', label: 'Light', icon: <Sun size={13} /> },
                                    { value: 'dark', label: 'Dark', icon: <Moon size={13} /> },
                                ]}
                            />
                        </Field>

                        <div className="pt-1 space-y-4 border-t border-slate-100 dark:border-slate-800">
                            <p className="pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Appearance
                            </p>

                            <Field label="Text size" hint={`${appearance.fontSize}px`}>
                                <RangeControl
                                    value={appearance.fontSize}
                                    min={12}
                                    max={19}
                                    onChange={(v) => set('fontSize', v)}
                                />
                            </Field>

                            <Field label="Padding" hint={`${appearance.padding}px`}>
                                <RangeControl
                                    value={appearance.padding}
                                    min={8}
                                    max={36}
                                    step={2}
                                    onChange={(v) => set('padding', v)}
                                />
                            </Field>

                            <Field label="Corner radius" hint={`${appearance.radius}px`}>
                                <RangeControl
                                    value={appearance.radius}
                                    min={0}
                                    max={28}
                                    step={2}
                                    onChange={(v) => set('radius', v)}
                                />
                            </Field>

                            <div className="pt-1">
                                <ToggleRow label="Border" checked={appearance.border} onChange={(v) => set('border', v)} />
                                <ToggleRow label="Drop shadow" checked={appearance.shadow} onChange={(v) => set('shadow', v)} />
                            </div>

                            <button
                                type="button"
                                onClick={() => setAppearance(DEFAULT_APPEARANCE)}
                                className="text-[11px] font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                Reset appearance
                            </button>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? 'Copied to clipboard' : 'Copy embed code'}
                        </button>
                    </div>

                    <RotatingTips />
                </aside>

                {/* Preview + code */}
                <main className="lg:col-span-8 space-y-4 min-w-0">
                    <div className="flex items-center justify-between px-1">
                        <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            How it looks on your page
                        </h2>
                        <span className="text-[11px] text-slate-400">
                            {PLACEMENTS.find(p => p.id === placement)?.label}
                        </span>
                    </div>

                    <SitePreview placement={placement}>
                        <WidgetFrame appearance={appearance}>
                            <IsolatedPreview appearance={appearance}>
                                <WidgetProvider isWidget={true}>
                                    <React.Suspense
                                        fallback={<div className="h-52 flex items-center justify-center text-slate-400 text-sm">Loading calculator…</div>}
                                    >
                                        <SelectedComponent />
                                    </React.Suspense>
                                </WidgetProvider>
                            </IsolatedPreview>
                        </WidgetFrame>
                    </SitePreview>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
                        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/5">
                            <h3 className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                                Paste this once
                            </h3>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                {copied ? <Check size={12} /> : <Copy size={12} />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                        <CodeBlock code={embedCode} />
                        <div className="flex items-start gap-2 px-4 sm:px-5 py-3 border-t border-white/5 text-[11px] text-white/40 leading-relaxed">
                            <ShieldCheck size={13} className="mt-px shrink-0 text-white/30" />
                            <span>
                                The credit line is part of the widget licence. If it is edited out or hidden,
                                widget.js restores it automatically.
                            </span>
                        </div>
                    </div>
                </main>
            </div>

            <section className="grid sm:grid-cols-3 gap-4 pt-6 max-w-4xl mx-auto">
                {[
                    { icon: Globe, title: 'Zero-leak CSS', body: 'Renders in Shadow DOM, so your styles and ours never collide.' },
                    { icon: Smartphone, title: 'Auto-responsive', body: 'Fills whatever column you drop it into, down to a 300px sidebar.' },
                    { icon: Zap, title: 'Loads async', body: 'The script is deferred and will not block your page render.' },
                ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <Icon size={16} className="text-blue-500 mb-2.5" />
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-[13px]">{title}</h4>
                        <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed">{body}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
