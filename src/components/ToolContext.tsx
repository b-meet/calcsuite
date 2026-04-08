import { lazy, Suspense } from 'react';
import StructuredData from './StructuredData';
import type { CalculatorDef } from '../calculators/registry';

const FormulaBlock = lazy(() => import('./FormulaBlock'));

interface ToolContextProps {
    calculatorDef: CalculatorDef;
}

export function ToolContext({ calculatorDef }: ToolContextProps) {
    // The "Why": Default to longDescription, fallback to standard description
    const why = calculatorDef.longDescription || calculatorDef.description;
    const formula = calculatorDef.formula;
    const faqs = calculatorDef.faqs;

    if (!why && !formula && (!faqs || faqs.length === 0)) {
        return null;
    }

    return (
        <div className="mt-16 space-y-12 mb-16 pb-16">
            {/* The Why */}
            {why && (
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What does this tool do?</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        {why}
                    </p>
                </section>
            )}

            {/* The Formula */}
            {formula && (
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Formula</h2>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm overflow-x-auto text-center text-slate-800 dark:text-slate-200">
                        <Suspense
                            fallback={
                                <code className="text-sm break-words whitespace-pre-wrap">
                                    {formula}
                                </code>
                            }
                        >
                            <FormulaBlock formula={formula} />
                        </Suspense>
                    </div>
                </section>
            )}

            {/* FAQ Block & JSON-LD Scheme */}
            {faqs && faqs.length > 0 && (
                <section>
                    <StructuredData type="FAQPage" data={faqs} />
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <div className="grid gap-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed m-0">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
