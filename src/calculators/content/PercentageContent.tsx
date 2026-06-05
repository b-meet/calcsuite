import React from 'react';
import { Check, MousePointer2, ShieldCheck, Zap, Percent, ArrowRightLeft, Calculator, Target, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';
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
        <div className="space-y-16 not-prose">
            {/* Hero SEO Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The Complete Guide to Calculating Percentages</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Percentages are a fundamental part of everyday math. From calculating exam marks and shopping discounts to analyzing salary hikes and tax rates, knowing how to calculate percentages instantly saves time. This guide breaks down the core percentage formulas, how to calculate percentage increase and decrease, and the easiest ways to solve percentage problems without a manual calculator.
                </p>
            </section>

            {/* Core Concept */}
            <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Percent className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">What Exactly is a Percentage?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            The word "percentage" comes from the Latin <em>per centum</em>, meaning "by the hundred." A percentage is simply a fraction with a denominator of 100. It is a mathematical way of describing a part of a whole, where the whole is always represented as 100%.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            For example, if you score 85% on a test, it means you achieved 85 out of every 100 possible points. Percentages make it easy to compare fractions of different sizes by normalizing them to a standard scale of 100.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-400 font-bold">25%</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white m-0">One Quarter</h3>
                                <p className="text-sm text-slate-500 m-0">25 out of 100, or 1/4</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-full text-emerald-600 dark:text-emerald-400 font-bold">50%</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white m-0">One Half</h3>
                                <p className="text-sm text-slate-500 m-0">50 out of 100, or 1/2</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 font-bold">100%</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white m-0">The Whole</h3>
                                <p className="text-sm text-slate-500 m-0">100 out of 100, or 1/1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Essential Formulas */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none">
                        <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">The 3 Essential Percentage Formulas</h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Formula 1 */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">1. Percentage of a Number</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">How to find X% of Y.</p>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg font-mono text-center mb-4 border border-emerald-100 dark:border-slate-700 text-emerald-700 dark:text-emerald-400 text-sm">
                            (X ÷ 100) × Y
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4 mt-auto">
                            <strong>Example:</strong> What is 20% of 500?<br/>
                            (20 ÷ 100) × 500 = 100
                        </div>
                    </div>

                    {/* Formula 2 */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">2. What Percentage is X of Y?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Finding the ratio between two numbers.</p>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg font-mono text-center mb-4 border border-blue-100 dark:border-slate-700 text-blue-700 dark:text-blue-400 text-sm">
                            (X ÷ Y) × 100
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4 mt-auto">
                            <strong>Example:</strong> 45 is what % of 60?<br/>
                            (45 ÷ 60) × 100 = 75%
                        </div>
                    </div>

                    {/* Formula 3 */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">3. Original Number Before %</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">If X is Y%, what is the total?</p>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg font-mono text-center mb-4 border border-purple-100 dark:border-slate-700 text-purple-700 dark:text-purple-400 text-sm">
                            (X × 100) ÷ Y
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4 mt-auto">
                            <strong>Example:</strong> 50 is 20% of what?<br/>
                            (50 × 100) ÷ 20 = 250
                        </div>
                    </div>
                </div>
            </section>

            {/* Percentage Change Section */}
            <section className="bg-amber-50 dark:bg-amber-900/10 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200 dark:shadow-none">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Percentage Increase & Decrease</h2>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Percentage change is heavily used in finance, retail, and business to measure growth (increase) or decline (decrease). It compares the difference between a new value and an old value as a percentage of the original old value.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-bold">
                            The Universal Change Formula:
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-200 dark:border-slate-700 font-mono text-center text-lg font-bold text-amber-700 dark:text-amber-400 shadow-sm mt-4">
                            Change = ((New − Old) ÷ Old) × 100
                        </div>
                    </div>
                    <div className="flex-1 w-full space-y-4">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2"><ArrowRightLeft className="w-4 h-4 text-emerald-500"/> Calculate Increase</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">If your salary increases from ₹50,000 to ₹60,000:</p>
                            <p className="text-sm font-mono text-slate-800 dark:text-slate-300 mt-2 bg-slate-50 dark:bg-slate-900 p-2 rounded">
                                ((60,000 − 50,000) ÷ 50,000) × 100 = +20%
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2"><ArrowRightLeft className="w-4 h-4 text-rose-500"/> Calculate Decrease</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">If a stock drops from $200 to $150:</p>
                            <p className="text-sm font-mono text-slate-800 dark:text-slate-300 mt-2 bg-slate-50 dark:bg-slate-900 p-2 rounded">
                                ((150 − 200) ÷ 200) × 100 = -25%
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Use Our Calculator */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-none">
                        <Check className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Why Use an Online Percentage Calculator?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-blue-600 dark:text-blue-400">Zero Math Required</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Simply select what you want to calculate (part of a whole, percent change) and get the answer instantly.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-blue-600 dark:text-blue-400">Error-Free</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Avoid common manual calculation mistakes, especially when dealing with complex decimal percentages.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-blue-600 dark:text-blue-400">Cross-Device</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Designed to be mobile-friendly. Performs fast on phones, tablets, and desktops with no app download.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-blue-600 dark:text-blue-400">Formula Breakdown</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Unlike basic calculators, this tool shows you exactly how the math was done with the formula provided.</p>
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Explore More Calculators</h2>
                <div className="flex flex-wrap gap-3">
                    {relatedCalculators.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-blue-400 shadow-sm"
                        >
                            <BookOpen className="w-4 h-4" />
                            {item.label}
                        </a>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-inner">
                            <HelpCircle className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Frequently Asked Questions</h2>
                    </div>
                    <FaqAccordion items={faqs} />
                </section>
            )}
        </div>
    );
}
