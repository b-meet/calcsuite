import { Trophy, ArrowRight, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getEffectiveStreak } from '../utils/streak';

export function ArenaHook() {
  const location = useLocation();

  // Don't show on the arena pages themselves
  if (location.pathname.startsWith('/brain-training') || location.pathname.startsWith('/kenken')) {
    return null;
  }

  return (
    <div className="mb-8 group">
      <Link
        to="/brain-training"
        className="relative flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-[2rem] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-500/5 dark:to-indigo-500/5 border border-blue-200/50 dark:border-blue-800/30 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md group/hook"
      >
        {/* Animated background glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover/hook:bg-blue-500/20 transition-all duration-700" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover/hook:bg-indigo-500/20 transition-all duration-700" />

        <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover/hook:scale-110 group-hover/hook:rotate-3 transition-transform duration-500">
            <Trophy size={24} className="stroke-[2.5]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest italic">Daily Challenge</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-blue-500/10 rounded-md">
                <Zap size={10} className="text-blue-500 fill-blue-500 animate-pulse" />
                <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400">LIVE</span>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-none italic uppercase tracking-tight">
              Brain Arena <span className="text-blue-600 dark:text-blue-400">is Waiting</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Daily 5x5 logic puzzles. Fresh levels every midnight.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto justify-end">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Current Streak</span>
            <span className="text-sm font-black text-slate-700 dark:text-slate-200 italic">{getEffectiveStreak()} Days</span>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 py-2.5 px-5 rounded-2xl text-xs font-black uppercase italic tracking-widest border border-blue-100 dark:border-blue-800 shadow-sm group-hover/hook:bg-blue-600 group-hover/hook:text-white group-hover/hook:border-blue-600 transition-all transform group-hover/hook:translate-x-1">
            Enter Arena
            <ArrowRight size={16} className="transition-transform group-hover/hook:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
