import { MessageSquareHeart } from 'lucide-react';

/**
 * Desktop-only fixed feedback button (bottom right).
 * On mobile, the feedback link lives inside the Sidebar instead.
 */
export function FeedbackButton() {
    return (
        <a
            href="https://insigh.to/b/calcsuite"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 group ring-1 ring-black/5 dark:ring-white/5"
        >
            <MessageSquareHeart className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold tracking-wide">Feedback</span>
        </a>
    );
}
