import { Check, MousePointer2, ShieldCheck, Zap, Percent, ArrowRightLeft } from 'lucide-react';
import type { CalculatorDef } from '../registry';
import { FaqAccordion } from '../../components/FaqAccordion';

interface PercentageContentProps {
    calculatorDef?: CalculatorDef;
}

const relatedCalculators = [
    { href: '/calculator/percentage-change', label: 'Percentage Change Calculator' },
    { href: '/calculator/discount', label: 'Discount Calculator' },
    { href: '/calculator/tip', label: 'Tip Calculator' },
    { href: '/calculator/india-gst', label: 'GST Calculator' },
];

export default function PercentageContent({ calculatorDef }: PercentageContentProps) {
    const faqs = calculatorDef?.faqs ?? [];

    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">What is a percentage?</h2>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
                    A percentage is a way to describe a number as parts per hundred. It makes comparisons faster and
                    gives a clear view of discounts, growth, proportions, and share of a total.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <Percent className="mb-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">25%</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Means 25 out of 100.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <ArrowRightLeft className="mb-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">50%</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Means half of the whole.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <Check className="mb-3 h-5 w-5 text-green-600 dark:text-green-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">100%</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Means the entire amount.</p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">How to use this calculator</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                            1
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Choose a mode</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            Pick the question you want to answer: part of a whole, percent of a number, or reverse calculation.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                            2
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Enter the values</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            Type the percentage and base value, or load one of the example inputs.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-600 dark:bg-green-900/40 dark:text-green-300">
                            3
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Copy or save the result</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            The calculator shows the output instantly and can copy the inputs plus result in one click.
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm dark:border-blue-900/40 dark:bg-slate-900 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Formula and worked example</h2>
                <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <p className="mb-4 text-slate-600 dark:text-slate-400">
                            The standard formula is simple: multiply the percentage by the value, then divide by 100.
                        </p>
                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center dark:border-blue-900/50 dark:bg-blue-900/20">
                            <p className="m-0 font-mono text-lg text-blue-800 dark:text-blue-300">
                                Percentage Value = (X / 100) × Y
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                        <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">Example</h3>
                        <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                            What is <strong className="text-slate-900 dark:text-white">20%</strong> of <strong className="text-slate-900 dark:text-white">500</strong>?
                        </p>
                        <p className="m-0 font-mono text-sm text-slate-500 dark:text-slate-400">
                            (20 / 100) × 500 = 100
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Where percentages are useful</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Shopping</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Calculate discounts and final prices quickly.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">School & exams</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Convert marks into percentages and compare scores.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Finance</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Work out tax, interest, margins, and growth rates.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Health</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Track ratios used in body composition and nutrition.</p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Why use an online percentage calculator?</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>Avoid manual calculation mistakes.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>No sign-in or data upload required.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <MousePointer2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>Works well on mobile, tablet, and desktop.</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>Get results instantly.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>Use the example buttons to learn the formula faster.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>Outputs stay readable and easy to copy.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Related calculators</h2>
                <div className="flex flex-wrap gap-3">
                    {relatedCalculators.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-blue-400"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </section>

            <FaqAccordion items={faqs} />
        </div>
    );
}
