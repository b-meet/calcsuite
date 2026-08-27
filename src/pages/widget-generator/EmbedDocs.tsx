import { Link } from 'react-router-dom';
import { calculatorRegistry } from '../../calculators/registry';
import { WIDGET_SUPPORTED_CALCULATORS } from '../../widget/supportedCalculators';
import { EMBED_ATTRIBUTES, EMBED_FAQ, EMBED_STEPS } from './docs';
import { shortCalculatorName } from './types';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section aria-labelledby={id} className="space-y-3">
            <h2 id={id} className="text-lg font-bold text-slate-900 dark:text-white">
                {title}
            </h2>
            {children}
        </section>
    );
}

/**
 * Prose reference for the widget, below the generator.
 *
 * This is the part of the page a search engine or an assistant can actually
 * quote: the generator itself is an interactive tool with almost no text.
 * Every statement here is kept in docs.ts alongside the structured data.
 */
export function EmbedDocs() {
    const embeddable = WIDGET_SUPPORTED_CALCULATORS
        .map(id => calculatorRegistry.find(c => c.id === id))
        .filter((c): c is NonNullable<typeof c> => Boolean(c));

    return (
        <div className="max-w-3xl mx-auto space-y-10 pt-4 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
            <Section id="what-is" title="What is the CalcSuite calculator widget?">
                <p>
                    The CalcSuite calculator widget is a free, embeddable calculator you add to any
                    website with one HTML snippet and one async script tag. It renders inside a Shadow
                    DOM, so your stylesheet and the widget's styles cannot affect each other, and it
                    resizes to fit the column it is placed in — from a 320px sidebar to a full-width
                    article. There is no account, API key or build step.
                </p>
            </Section>

            <Section id="how-to-embed" title="How to embed a calculator on your website">
                <ol className="space-y-2.5 list-none counter-reset">
                    {EMBED_STEPS.map((step, index) => (
                        <li key={step.name} id={`step-${index + 1}`} className="flex gap-3">
                            <span className="shrink-0 grid place-items-center w-5 h-5 mt-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold">
                                {index + 1}
                            </span>
                            <span>
                                <strong className="font-semibold text-slate-900 dark:text-white">{step.name}.</strong>{' '}
                                {step.text}
                            </span>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section id="embed-options" title="Embed options reference">
                <p>
                    Every appearance setting in the generator is written into the snippet as a{' '}
                    <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[12px]">data-</code>
                    attribute on the container. You can also edit them by hand — out-of-range values
                    fall back to the default rather than breaking the render.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-left text-[13px] border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900/60">
                                <th scope="col" className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-200">Attribute</th>
                                <th scope="col" className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-200">Values</th>
                                <th scope="col" className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-200">Default</th>
                                <th scope="col" className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {EMBED_ATTRIBUTES.map(attr => (
                                <tr key={attr.name} className="border-t border-slate-100 dark:border-slate-800 align-top">
                                    <td className="px-3 py-2 font-mono text-[12px] text-blue-700 dark:text-blue-400 whitespace-nowrap">{attr.name}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{attr.values}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{attr.fallback}</td>
                                    <td className="px-3 py-2">{attr.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            <Section id="available" title="Which calculators are available as embeds?">
                <p>
                    {embeddable.length === 1
                        ? 'One calculator currently ships in the widget runtime:'
                        : `${embeddable.length} calculators currently ship in the widget runtime:`}
                </p>
                <ul className="flex flex-wrap gap-2">
                    {embeddable.map(calc => (
                        <li key={calc.id}>
                            <Link
                                to={`/calculator/${calc.id}/`}
                                className="inline-block px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-[13px] font-medium text-blue-700 dark:text-blue-400 hover:border-blue-400 transition-colors"
                            >
                                {shortCalculatorName(calc.name)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>
                    You can preview and configure any calculator above, but the rest are not embeddable
                    yet — the generator marks those, and pasting one renders a link to the calculator on
                    CalcSuite rather than a broken box. More are added to the runtime over time.
                </p>
            </Section>

            <Section id="attribution" title="Attribution and licence">
                <p>
                    The widget is free to use on commercial and personal sites. In return, the credit
                    link that ships with the snippet must stay visible on the page where the widget
                    appears. If it is removed, hidden or repointed at another domain, the runtime
                    restores a working one. If it is prevented from rendering entirely, the calculator
                    is replaced by a short notice instead of loading.
                </p>
                <p>
                    Both credit links carry{' '}
                    <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[12px]">rel="nofollow"</code>,
                    so they pass no ranking signal and cannot affect how your pages rank. Google treats
                    widget links distributed at volume as a link scheme rather than an editorial
                    endorsement, so we mark them nofollow by default rather than asking you to.
                </p>
            </Section>

            <Section id="faq" title="Frequently asked questions">
                <dl className="space-y-4">
                    {EMBED_FAQ.map(item => (
                        <div key={item.question}>
                            <dt className="font-semibold text-slate-900 dark:text-white">{item.question}</dt>
                            <dd className="mt-1">{item.answer}</dd>
                        </div>
                    ))}
                </dl>
            </Section>
        </div>
    );
}
