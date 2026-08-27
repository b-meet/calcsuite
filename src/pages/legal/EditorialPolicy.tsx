import { Link } from 'react-router-dom';
import { BookOpen, RefreshCw, AlertCircle, Coins, Cpu, UserCheck } from 'lucide-react';
import SEO, { buildBreadcrumbJsonLd } from '../../components/SEO';
import { AUTHOR, buildPersonJsonLd } from '../../constants/author';
import { SITE_URL } from '../../config/site';

function Section({
    icon: Icon,
    title,
    children,
}: {
    icon: typeof BookOpen;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="w-4.5 h-4.5" size={18} />
                </span>
                {title}
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">{children}</div>
        </section>
    );
}

export default function EditorialPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-2 sm:px-4 py-10 space-y-6">
            <SEO
                title="Editorial Policy"
                description="Who writes and maintains CalcSuite, how the calculators are built and checked, how corrections are handled, and how the site is funded."
                canonicalPath="/editorial-policy/"
                jsonLd={[
                    buildPersonJsonLd(),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'CalcSuite Editorial Policy',
                        url: `${SITE_URL}/editorial-policy/`,
                        description:
                            'How CalcSuite calculators are built, sourced, corrected and funded, and who is accountable for them.',
                        publisher: { '@type': 'Organization', name: 'CalcSuite', url: SITE_URL },
                        author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.profileUrl },
                    },
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Editorial Policy', path: '/editorial-policy/' },
                    ]),
                ]}
            />

            <header className="text-center space-y-3 py-4">
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Editorial Policy
                </h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                    How the calculators on this site are built, checked, corrected and paid for — and
                    who is answerable for them.
                </p>
            </header>

            <Section icon={UserCheck} title="Who is responsible">
                <p>
                    CalcSuite is an independent project, not a company with an anonymous content team.{' '}
                    <strong className="text-slate-900 dark:text-white">{AUTHOR.name}</strong> builds and
                    maintains it and is accountable for the formulas, the written content and any
                    corrections. {AUTHOR.bio.replace(`${AUTHOR.name} builds and maintains CalcSuite. `, '')}
                </p>
                <p>
                    CalcSuite does not employ accountants, tax practitioners or medical professionals,
                    and nothing here is personalised financial, tax, legal or medical advice. The tools
                    are calculators: they apply a stated formula to the numbers you enter. For decisions
                    that matter, check the result against a qualified professional.
                </p>
            </Section>

            <Section icon={BookOpen} title="How the calculators are built">
                <p>
                    Every calculator implements a published formula rather than an opaque model. Where a
                    calculator page documents its method, that documentation describes exactly what the
                    code does — the formula shown is the formula that runs.
                </p>
                <p>
                    Calculations execute entirely in your browser. Nothing you type into a calculator is
                    transmitted to CalcSuite, stored on a server, or shared with a third party. You can
                    verify this by loading a calculator and then disconnecting from the network — the
                    results still compute.
                </p>
                <p>
                    Results are cross-checked against other widely used implementations of the same
                    formula before a calculator ships. Cross-checking is a sanity check on our
                    arithmetic; it is not an endorsement of those tools, and where the underlying rule
                    is set by an authority — income tax slabs, small-savings interest rates, WHO weight
                    categories — that authority governs, not another calculator.
                </p>
            </Section>

            <Section icon={RefreshCw} title="How rule-based figures are kept current">
                <p>
                    Some calculators depend on values that change by regulation rather than by
                    arithmetic: income tax slabs and rebates, GST rates, PPF and small-savings interest
                    rates, and published health thresholds. These are updated when the governing rule
                    changes — a Union Budget, a rate notification, or revised guidance — rather than on
                    a fixed schedule.
                </p>
                <p>
                    Where a result depends on a specific year or regime, the calculator states which one
                    it is applying. If a page does not say which year it uses and the answer depends on
                    it, treat that as a bug and tell us.
                </p>
            </Section>

            <Section icon={AlertCircle} title="Corrections">
                <p>
                    If a calculator produces a wrong answer, we would rather hear about it than not.
                    Email{' '}
                    <a
                        href={`mailto:${AUTHOR.contactEmail}`}
                        className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {AUTHOR.contactEmail}
                    </a>{' '}
                    with the calculator, the inputs you used, the result you got and the result you
                    expected. Reproducible arithmetic errors are treated as the highest priority work on
                    the site.
                </p>
                <p>
                    When a correction changes the numbers a page produces, the fix is applied to the
                    calculator itself rather than only to the surrounding text, so anyone who reruns the
                    calculation gets the corrected answer.
                </p>
            </Section>

            <Section icon={Coins} title="How the site is funded">
                <p>
                    CalcSuite is free to use and funded by display advertising. Ads are kept minimal and
                    non-intrusive: no pop-ups, no interstitials, and no ad that covers or delays your
                    result.
                </p>
                <p>
                    Advertising has no influence on what the calculators return or on how tools are
                    described or ranked on this site. We do not accept payment to change a calculation,
                    to rank a tool higher in our directory, or to write a favourable comparison. Where we
                    compare CalcSuite to another product, the comparison reflects our own assessment and
                    says plainly that we are one of the parties being compared.
                </p>
                <p>
                    The embeddable calculator widget is free, and its credit links carry{' '}
                    <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[13px]">
                        rel="nofollow"
                    </code>
                    , so embedding the widget cannot affect anyone's search rankings.{' '}
                    <Link to="/widget-generator/" className="text-blue-600 dark:text-blue-400 hover:underline">
                        See the widget terms
                    </Link>
                    .
                </p>
            </Section>

            <Section icon={Cpu} title="Use of AI">
                <p>
                    AI tools are used during development — writing and reviewing code, drafting
                    explanatory copy, and checking for errors. They are not used to generate calculation
                    results, and no page is published on the strength of an AI draft alone. A human
                    checks the formula and the numbers before a calculator goes live, and that human is
                    accountable for what ships.
                </p>
            </Section>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400 pt-2">
                Questions about this policy? Reach us via the{' '}
                <Link to="/contact/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    contact page
                </Link>
                .
            </p>
        </div>
    );
}
