import React, { useMemo, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { calculatorRegistry } from '../calculators/registry';
import SEO, { buildBreadcrumbJsonLd } from '../components/SEO';
import {
    Check, Copy, Zap, Globe, Smartphone, ShieldCheck,
    AlignLeft, PanelBottom, PanelRight, Sun, Moon, AlertTriangle,
} from 'lucide-react';
import { cn } from '../utils/cn';
import { WidgetProvider } from '../context/WidgetContext';
import { CalculatorPicker } from './widget-generator/CalculatorPicker';
import { RotatingTips } from './widget-generator/RotatingTips';
import { SitePreview } from './widget-generator/SitePreview';
import { Field, RangeControl, Segmented, ToggleRow } from './widget-generator/Controls';
import { buildEmbedCode, tokenizeHtml } from './widget-generator/embed';
import { minWidthFor } from './widget-generator/minWidths';
import { EmbedDocs } from './widget-generator/EmbedDocs';
import { buildWidgetJsonLd } from './widget-generator/schema';
import { isEmbeddable } from '../widget/supportedCalculators';
import {
    DEFAULT_APPEARANCE, PLACEMENTS, shortCalculatorName,
    type Appearance, type CalculatorOption, type Placement,
} from './widget-generator/types';

/**
 * Renders the live calculator inside an iframe so the host page's styles and
 * the calculator's own styles cannot reach each other — the same isolation the
 * real widget gets from its Shadow DOM.
 */
const MIN_PREVIEW_HEIGHT = 80;
const PREVIEW_CONTENT_ID = 'calcsuite-preview-content';

const PLACEMENT_ICONS: Record<Placement, React.ReactNode> = {
    article: <AlignLeft size={13} />,
    end: <PanelBottom size={13} />,
    aside: <PanelRight size={13} />,
};

function IsolatedPreview({
    children,
    appearance,
    resetKey,
}: {
    children: React.ReactNode;
    appearance: Appearance;
    /** Changing this collapses the frame first, so a shorter calculator can shrink. */
    resetKey: string;
}) {
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

            // Portal into a wrapper rather than <body>. body.scrollHeight is
            // clamped to the iframe's own viewport height, so measuring it
            // ratchets the frame upward and it can never shrink again when a
            // shorter calculator is selected. A plain content-sized div
            // reports the real height in both directions.
            // Reuse an existing wrapper: StrictMode runs this effect twice in
            // development, and appending blindly leaves an orphaned empty div.
            let wrapper = doc.getElementById(PREVIEW_CONTENT_ID);
            if (!wrapper) {
                wrapper = doc.createElement('div');
                wrapper.id = PREVIEW_CONTENT_ID;
                doc.body.appendChild(wrapper);
            }

            setMountNode(wrapper);
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

        doc.documentElement.classList.remove('light', 'dark');
        doc.documentElement.classList.add(appearance.theme);

        const sync = () => {
            const height = Math.max(MIN_PREVIEW_HEIGHT, Math.ceil(mountNode.getBoundingClientRect().height));
            iframe.style.height = `${height}px`;
        };

        const observer = new ResizeObserver(sync);
        observer.observe(mountNode);
        sync();
        return () => observer.disconnect();
    }, [mountNode, appearance.theme]);

    // Collapse on calculator change so the frame grows into the new content
    // instead of holding the previous calculator's taller box.
    useEffect(() => {
        if (iframeRef.current) iframeRef.current.style.height = `${MIN_PREVIEW_HEIGHT}px`;
    }, [resetKey]);

    return (
        <iframe
            ref={iframeRef}
            title="Widget preview"
            scrolling="no"
            className="w-full border-0 bg-transparent block"
            style={{ height: MIN_PREVIEW_HEIGHT }}
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
    const embeddable = isEmbeddable(selectedCalculatorId);

    // Placements narrower than the calculator's measured minimum would overflow
    // on the embedder's page, so they are not offered at all.
    const minWidth = minWidthFor(selectedCalculatorId);
    const placementOptions = useMemo(
        () =>
            PLACEMENTS.map(slot => ({
                ...slot,
                fits: slot.maxWidth >= minWidth,
            })),
        [minWidth]
    );
    // Derive the slot in use rather than storing an invalid one: picking a
    // wide-only calculator while on Sidebar just falls through to the first
    // slot that fits, and the original choice is restored if they switch back.
    const selectedPlacement = placementOptions.find(p => p.id === placement) ?? placementOptions[0];
    const activePlacement = selectedPlacement.fits
        ? selectedPlacement
        : placementOptions.find(p => p.fits) ?? placementOptions[0];

    const embedCode = useMemo(
        () => buildEmbedCode({
            calculatorId: selectedCalculatorId,
            calculatorName,
            placement: activePlacement.id,
            appearance,
        }),
        [selectedCalculatorId, calculatorName, activePlacement.id, appearance]
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
            <SEO
                title="Free Calculator Widget for Your Website"
                description="Embed a free calculator widget on any website with one HTML snippet. Shadow DOM isolated, responsive from a 320px sidebar, light and dark themes, no account or API key."
                canonicalPath="/widget-generator/"
                jsonLd={[
                    ...buildWidgetJsonLd(),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Calculator Widgets', path: '/widget-generator/' },
                    ]),
                ]}
            />

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

                        <Field label="Placement" hint={activePlacement.hint}>
                            <Segmented<Placement>
                                value={activePlacement.id}
                                onChange={setPlacement}
                                options={placementOptions.map(slot => ({
                                    value: slot.id,
                                    label: slot.label,
                                    icon: PLACEMENT_ICONS[slot.id],
                                    disabled: !slot.fits,
                                    disabledReason: `${calculatorName} needs at least ${minWidth}px — this slot is ${slot.maxWidth}px.`,
                                }))}
                            />
                            {placementOptions.some(p => !p.fits) && (
                                <p className="mt-1.5 text-[11px] leading-relaxed text-amber-600 dark:text-amber-500/90">
                                    {calculatorName} needs at least {minWidth}px, so narrower slots are unavailable.
                                </p>
                            )}
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
                            {activePlacement.label}
                        </span>
                    </div>

                    <SitePreview placement={activePlacement.id}>
                        <WidgetFrame appearance={appearance}>
                            <IsolatedPreview appearance={appearance} resetKey={selectedCalculatorId}>
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
                        <div className="border-t border-white/5">
                            {!embeddable && (
                                <div className="flex items-start gap-2 px-4 sm:px-5 py-3 border-b border-white/5 text-[11px] text-amber-300/80 leading-relaxed">
                                    <AlertTriangle size={13} className="mt-px shrink-0" />
                                    <span>
                                        {calculatorName} is not in the widget runtime yet. This snippet will
                                        render a link to the calculator on CalcSuite instead of the calculator
                                        itself.
                                    </span>
                                </div>
                            )}
                            <div className="flex items-start gap-2 px-4 sm:px-5 py-3 text-[11px] text-white/40 leading-relaxed">
                                <ShieldCheck size={13} className="mt-px shrink-0 text-white/30" />
                                <span>
                                    The credit line is required. If it is removed or hidden, widget.js puts it
                                    back — and if it is kept from rendering, the calculator stops working.
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <section className="grid sm:grid-cols-3 gap-4 pt-6 max-w-4xl mx-auto">
                {[
                    { icon: Globe, title: 'Zero-leak CSS', body: 'Renders in Shadow DOM, so your styles and ours never collide.' },
                    { icon: Smartphone, title: 'Auto-responsive', body: 'Fills whatever column you drop it into, down to a 320px sidebar.' },
                    { icon: Zap, title: 'Loads async', body: 'The script tag is async, so it never blocks your page render.' },
                ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <Icon size={16} className="text-blue-500 mb-2.5" />
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-[13px]">{title}</h4>
                        <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed">{body}</p>
                    </div>
                ))}
            </section>

            <EmbedDocs />
        </div>
    );
}
