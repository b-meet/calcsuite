import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

export interface FaqAccordionItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqAccordionItem[];
    title?: string;
}

export function FaqAccordion({ items, title = 'Frequently Asked Questions' }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    if (!items.length) {
        return null;
    }

    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">{title}</h2>
            <div className="space-y-3">
                {items.map((item, index) => {
                    const isOpen = index === openIndex;
                    const buttonId = `faq-button-${index}`;
                    const panelId = `faq-panel-${index}`;

                    return (
                        <div
                            key={item.question}
                            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
                        >
                            <button
                                id={buttonId}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            >
                                <span className="text-base font-semibold text-slate-900 dark:text-white">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        'h-5 w-5 text-slate-400 transition-transform duration-200',
                                        isOpen && 'rotate-180 text-blue-600 dark:text-blue-400'
                                    )}
                                />
                            </button>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                aria-hidden={!isOpen}
                                className={cn(
                                    'grid transition-all duration-300 ease-out',
                                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                )}
                            >
                                <div className="overflow-hidden px-5 pb-5">
                                    <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
