import type { ReactNode } from 'react';
import { Lock } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SkeletonBlock, SkeletonLine, SkeletonParagraph } from './Skeleton';
import type { Placement } from './types';

interface Props {
    placement: Placement;
    children: ReactNode;
}

function BrowserChrome() {
    return (
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900">
            <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
            <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Lock size={9} className="text-slate-400" />
                <span className="text-[10px] text-slate-400 font-medium">yourwebsite.com</span>
            </div>
        </div>
    );
}

function SiteHeader() {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
            <SkeletonBlock className="w-20 h-4" />
            <div className="flex gap-4">
                <SkeletonLine className="w-10" />
                <SkeletonLine className="w-12" />
                <SkeletonLine className="w-8" />
            </div>
        </div>
    );
}

function SiteFooter() {
    return (
        <div className="mt-8 px-6 py-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <SkeletonLine className="w-24" />
            <div className="flex gap-3">
                <SkeletonBlock className="w-5 h-5 rounded-full" />
                <SkeletonBlock className="w-5 h-5 rounded-full" />
                <SkeletonBlock className="w-5 h-5 rounded-full" />
            </div>
        </div>
    );
}

function ArticleHeading() {
    return (
        <div className="space-y-3">
            <SkeletonBlock className="w-16 h-3 rounded" />
            <SkeletonBlock className="w-[85%] h-6" />
            <div className="flex items-center gap-2 pt-1">
                <SkeletonBlock className="w-6 h-6 rounded-full" />
                <SkeletonLine className="w-24" />
            </div>
        </div>
    );
}

/** The widget's own slot. maxWidth mirrors what the real column would give it. */
function Slot({ children, maxWidth, className }: { children: ReactNode; maxWidth: number; className?: string }) {
    return (
        <div className={cn('mx-auto w-full', className)} style={{ maxWidth }}>
            {children}
        </div>
    );
}

export function SitePreview({ placement, children }: Props) {
    return (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-sm">
            <BrowserChrome />
            <SiteHeader />

            {placement === 'article' && (
                <div className="px-6 py-6 max-w-[720px] mx-auto">
                    <ArticleHeading />
                    <div className="mt-6 space-y-5">
                        <SkeletonParagraph variant={0} />
                        <SkeletonParagraph variant={1} lines={3} />
                    </div>
                    <div className="my-7">
                        <Slot maxWidth={680}>{children}</Slot>
                    </div>
                    <div className="space-y-5">
                        <SkeletonParagraph variant={2} />
                        <SkeletonParagraph variant={0} lines={3} />
                    </div>
                </div>
            )}

            {placement === 'end' && (
                <div className="px-6 py-6 max-w-[760px] mx-auto">
                    <ArticleHeading />
                    <div className="mt-6 space-y-5">
                        <SkeletonParagraph variant={0} />
                        <SkeletonParagraph variant={1} />
                        <SkeletonParagraph variant={2} lines={3} />
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <SkeletonBlock className="w-28 h-3.5 mb-4" />
                        <Slot maxWidth={760}>{children}</Slot>
                    </div>
                    <SiteFooter />
                </div>
            )}

            {placement === 'aside' && (
                <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_300px] gap-6">
                    <div className="min-w-0">
                        <ArticleHeading />
                        <div className="mt-6 space-y-5">
                            <SkeletonParagraph variant={0} />
                            <SkeletonParagraph variant={1} />
                            <SkeletonBlock className="w-full h-28" />
                            <SkeletonParagraph variant={2} />
                            <SkeletonParagraph variant={0} lines={5} />
                            <SkeletonParagraph variant={1} lines={3} />
                        </div>
                    </div>
                    <aside className="min-w-0 space-y-5">
                        <div className="rounded-xl border border-slate-100 dark:border-slate-800 p-3 space-y-2.5">
                            <SkeletonBlock className="w-20 h-3" />
                            <SkeletonLine className="w-full" />
                            <SkeletonLine className="w-[70%]" />
                        </div>
                        <Slot maxWidth={320}>{children}</Slot>
                        <div className="rounded-xl border border-slate-100 dark:border-slate-800 p-3 space-y-2.5">
                            <SkeletonBlock className="w-16 h-3" />
                            <SkeletonLine className="w-full" />
                            <SkeletonLine className="w-[85%]" />
                            <SkeletonLine className="w-[60%]" />
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
}
