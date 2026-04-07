import { ArrowDownRight, ArrowUpRight, BarChart3, Minus, PieChart, TrendingUp } from 'lucide-react';
import type { CalculatorDef } from '../registry';
import { FaqAccordion } from '../../components/FaqAccordion';

interface PercentageChangeContentProps {
    calculatorDef?: CalculatorDef;
}

const relatedCalculators = [
    { href: '/calculator/percentage', label: 'Percentage Calculator' },
    { href: '/calculator/discount', label: 'Discount Calculator' },
    { href: '/calculator/inflation', label: 'Inflation Calculator' },
    { href: '/calculator/india-salary', label: 'Salary Calculator' },
];

export default function PercentageChangeContent({ calculatorDef }: PercentageChangeContentProps) {
    const faqs = calculatorDef?.faqs ?? [];

    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">What percentage change means</h2>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
                    Percentage change compares a new value with an original value. It tells you whether something
                    increased, decreased, or stayed the same, and by how much relative to the original.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <ArrowUpRight className="mb-3 h-5 w-5 text-green-600 dark:text-green-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Increase</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            The new value is greater than the original value.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <ArrowDownRight className="mb-3 h-5 w-5 text-red-600 dark:text-red-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Decrease</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            The new value is smaller than the original value.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <Minus className="mb-3 h-5 w-5 text-slate-500 dark:text-slate-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">No change</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            The values are identical, so the change is zero.
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Formula and interpretation</h2>
                <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                    <div>
                        <p className="mb-4 text-slate-600 dark:text-slate-400">
                            The calculator uses the same percentage change formula that appears in finance, growth
                            analysis, and price comparisons.
                        </p>
                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center dark:border-blue-900/50 dark:bg-blue-900/20">
                            <p className="m-0 font-mono text-lg text-blue-800 dark:text-blue-300">
                                Percentage Change = ((New - Original) / Original) × 100
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                        <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">How to read the output</h3>
                        <div className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            <p className="m-0">The arrow tells you whether the value went up or down.</p>
                            <p className="m-0">Difference shows the absolute change in units, not percent.</p>
                            <p className="m-0">Percent of original shows the new value relative to the original base.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">When this tool is useful</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <TrendingUp className="mb-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Business growth</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Compare revenue, users, or traffic over time.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <BarChart3 className="mb-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Metrics tracking</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">See how KPIs change between reporting periods.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <ArrowDownRight className="mb-3 h-5 w-5 text-red-600 dark:text-red-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Price drops</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Measure discounts or markdowns quickly.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <PieChart className="mb-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Comparisons</h3>
                        <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-400">Understand changes across versions, cohorts, or periods.</p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Related calculators</h2>
                <div className="mt-6 flex flex-wrap gap-3">
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
