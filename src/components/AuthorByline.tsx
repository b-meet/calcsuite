import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { AUTHOR } from '../constants/author';

/**
 * Named accountability line.
 *
 * Deliberately carries no "last reviewed" date: a review date is only an
 * E-E-A-T signal if a review actually happened, and inventing one would be the
 * same kind of unearned claim the editorial policy exists to rule out.
 */
export function AuthorByline({ className = '' }: { className?: string }) {
    return (
        <div
            className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-slate-500 dark:text-slate-400 ${className}`}
        >
            <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-500" />
            <span>
                Built and maintained by{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{AUTHOR.name}</span>
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <Link
                to="/editorial-policy/"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
                Editorial policy
            </Link>
        </div>
    );
}
