import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Code2, Quote, Share2 } from 'lucide-react';
import { toAbsoluteUrl } from './SEO';
import { shortCalculatorName } from '../utils/calculatorName';
import { useCalculatorHistory } from '../hooks/useCalculatorHistory';
import { useCurrentShareableResult } from '../hooks/useShareableResult';
import { encodeResultState, describeResult, RESULT_PARAM } from '../utils/resultLink';
import { SHARE_TARGETS, type ShareTarget } from './share/shareTargets';
import { cn } from '../utils/cn';

interface Props {
    calculatorId: string;
    calculatorName: string;
    canonicalPath: string;
}

function IconButton({
    target,
    text,
    url,
    onCopy,
    copied,
}: {
    target: ShareTarget;
    text: string;
    url: string;
    onCopy: () => void;
    copied: boolean;
}) {
    const base = cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-all',
        'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400',
        'hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40',
        target.hoverClass
    );

    if (!target.href) {
        return (
            <button type="button" onClick={onCopy} className={base} aria-label={target.label} title={target.label}>
                {copied ? <Check size={17} /> : target.icon}
            </button>
        );
    }

    return (
        <a
            href={target.href(text, url)}
            target="_blank"
            rel="noopener noreferrer"
            className={base}
            aria-label={target.label}
            title={target.label}
        >
            {target.icon}
        </a>
    );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">{title}</p>
            <div className="flex flex-wrap items-center gap-2">{children}</div>
        </div>
    );
}

/**
 * Visible sharing rail under the calculator.
 *
 * Three distinct jobs, deliberately not collapsed into one button: sharing the
 * tool, sharing the number you just produced, and taking the tool away with
 * you. The result share is the one that earns links — a message carrying an
 * actual answer gets opened, a bare tool link does not.
 */
export function ShareBar({ calculatorId, calculatorName, canonicalPath }: Props) {
    const { history } = useCalculatorHistory(calculatorId);
    const live = useCurrentShareableResult();
    const [copied, setCopied] = useState<string | null>(null);
    const [showCite, setShowCite] = useState(false);

    // toAbsoluteUrl, not string concatenation: a shared link must be the
    // canonical URL, or every share lands on a redirect and splits link equity.
    const toolUrl = toAbsoluteUrl(canonicalPath);
    const shortName = shortCalculatorName(calculatorName);

    // A live result from the calculator wins; a saved history entry is the
    // fallback for calculators that have not opted into publishing one yet.
    const latest = history[0];
    const shareable = useMemo(
        () =>
            live
                ? { inputs: live.inputs, text: live.summary }
                : latest
                    ? { inputs: latest.inputs, text: describeResult(latest.result, latest.label) }
                    : null,
        [live, latest]
    );

    const resultUrl = useMemo(() => {
        if (!shareable?.inputs) return null;
        const encoded = encodeResultState(shareable.inputs);
        return encoded ? `${toolUrl}?${RESULT_PARAM}=${encoded}` : toolUrl;
    }, [shareable, toolUrl]);

    const resultText = shareable?.text ?? null;

    const toolText = `${shortName} — free on CalcSuite`;
    const shareResultText = resultText
        ? `My ${shortName} result: ${resultText}. Work out yours:`
        : toolText;

    const citation = `CalcSuite. "${shortName}." CalcSuite, ${new Date().getFullYear()}, ${toolUrl}.`;
    const citationHtml = `<a href="${toolUrl}">${shortName}</a> by CalcSuite`;

    const copy = async (value: string, key: string) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(key);
            setTimeout(() => setCopied(null), 2000);
        } catch {
            // Clipboard can be blocked; the citation box shows the text to copy by hand.
        }
    };

    const nativeShare = async (text: string, url: string) => {
        try {
            await navigator.share({ title: shortName, text, url });
        } catch {
            // Cancelled or unsupported — the explicit icons remain available.
        }
    };

    const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

    return (
        <section
            aria-label="Share this calculator"
            className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5"
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <Group title="Share calculator">
                    {SHARE_TARGETS.map(target => (
                        <IconButton
                            key={target.id}
                            target={target}
                            text={toolText}
                            url={toolUrl}
                            copied={copied === `tool-${target.id}`}
                            onCopy={() => copy(toolUrl, `tool-${target.id}`)}
                        />
                    ))}
                </Group>

                {/* Appears once there is something to share, rather than sitting
                    there inert and teaching people to ignore it. */}
                {resultUrl && (
                    <Group title={resultText ? 'Share your result' : 'Share your setup'}>
                        {SHARE_TARGETS.map(target => (
                            <IconButton
                                key={target.id}
                                target={target}
                                text={shareResultText}
                                url={resultUrl}
                                copied={copied === `result-${target.id}`}
                                onCopy={() => copy(resultUrl, `result-${target.id}`)}
                            />
                        ))}
                        {canNativeShare && (
                            <button
                                type="button"
                                onClick={() => nativeShare(shareResultText, resultUrl)}
                                aria-label="Share result using your device"
                                title="Share using your device"
                                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:-translate-y-0.5 transition-all"
                            >
                                <Share2 size={17} />
                            </button>
                        )}
                    </Group>
                )}

                <Group title="Use this tool">
                    <Link
                        to={`/widget-generator/?calculator=${encodeURIComponent(calculatorId)}`}
                        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Code2 size={15} />
                        Embed
                    </Link>
                    <button
                        type="button"
                        onClick={() => setShowCite(v => !v)}
                        aria-expanded={showCite}
                        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Quote size={15} />
                        Cite
                    </button>
                </Group>
            </div>

            {showCite && (
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    {[
                        { key: 'text', label: 'Citation', value: citation },
                        { key: 'html', label: 'Link for your page', value: citationHtml },
                    ].map(({ key, label, value }) => (
                        <div key={key}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</span>
                                <button
                                    type="button"
                                    onClick={() => copy(value, `cite-${key}`)}
                                    className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    {copied === `cite-${key}` ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <p className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-[12px] font-mono text-slate-600 dark:text-slate-300 break-words">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
