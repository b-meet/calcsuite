import { useState } from 'react';
import { Brain, Trophy, Zap, Star, Play, Lock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import SEO from '../components/SEO';
import { KenKenHelp } from '../components/KenKenHelp';
import { getEffectiveStreak } from '../utils/streak';

export function BrainTrainingHub() {
    const [selectedSize, setSelectedSize] = useState(5);
    const [showHelp, setShowHelp] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-600 dark:text-slate-200 py-8 px-4 sm:px-8">
            <SEO
                title="Brain Arena - Compete with Your Mind"
                description="Enter the CalcSuite Brain Arena. Solve daily logic puzzles, improve your mental calculation speed, and master high-intensity challenges."
                canonicalPath="/brain-training"
            />

            <div className="max-w-5xl mx-auto space-y-12">
                {/* Hero Header */}
                <header className="relative p-8 rounded-[32px] bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] group-hover:bg-purple-600/20 transition-all duration-700" />

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30">
                                    <Trophy className="text-blue-400" size={28} />
                                </div>
                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
                                        Brain Arena
                                    </h1>
                                    <p className="text-blue-600 dark:text-blue-400/80 font-bold text-xs tracking-widest uppercase">Competitive Training</p>
                                </div>
                            </div>
                            <p className="text-slate-400 max-w-xl leading-relaxed text-sm">
                                Train your mind with high-intensity logic puzzles. Improve your speed, accuracy, and mental endurance every day.
                            </p>
                        </div>

                        {/* Streak Card */}
                        <div className="flex flex-col items-center justify-center px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-1">
                                <Zap size={14} className="text-blue-500 dark:text-blue-400 fill-blue-500 dark:fill-blue-400 animate-pulse" />
                                <span className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.15em]">Current Streak</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter">
                                    {getEffectiveStreak()}
                                </span>
                                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Days</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Challenges Section */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                        <h2 className="text-lg font-black uppercase italic tracking-wider text-slate-900 dark:text-white flex items-center gap-3">
                            <TrendingUp className="text-blue-600 dark:text-blue-500" size={18} />
                            Available Challenges
                        </h2>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">no login</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                        {/* Daily KenKen Card - Reverted to Grid with Hover Reveal */}
                        <div className="group relative flex flex-col p-8 rounded-[32px] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-xl min-h-[380px]">
                            {/* Glow */}
                            <div className="absolute -right-16 -top-16 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 border border-blue-100 dark:border-blue-500/20">
                                    <Brain size={32} />
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-500 tracking-widest">DAILY PUZZLE</span>
                                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Star size={10} className="fill-blue-600 dark:fill-blue-500" />
                                        <span className="text-[9px] font-black italic uppercase">New at midnight</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 italic uppercase tracking-tight">Daily KenKen</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">The ultimate arithmetic logic puzzle. Fill the grid using math cages — no number can repeat in any row or column.</p>

                            {/* How to Play Button */}
                            <button
                                onClick={() => setShowHelp(true)}
                                className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold mb-8 w-fit group/help transition-colors"
                            >
                                <TrendingUp size={16} className="text-blue-600 dark:text-blue-500 group-hover/help:translate-x-1 transition-transform" />
                                <span className="underline underline-offset-4 decoration-blue-500/30 group-hover/help:decoration-blue-400 uppercase italic tracking-wider">How to Play?</span>
                            </button>

                            {/* Footer Actions */}
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex p-1 bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl">
                                        {[
                                            { size: 3, label: '3x3' },
                                            { size: 5, label: '5x5' },
                                            { size: 8, label: '8x8' }
                                        ].map((level) => (
                                            <button
                                                key={level.size}
                                                onClick={() => setSelectedSize(level.size)}
                                                className={cn(
                                                    "px-3 py-1.5 rounded-lg text-[10px] font-black italic transition-all",
                                                    selectedSize === level.size
                                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                                        : "text-slate-500 hover:text-slate-300"
                                                )}
                                            >
                                                {level.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest italic opacity-50">
                                        Select Level
                                    </div>
                                </div>

                                <Link
                                    to={`/brain-training/kenken?size=${selectedSize}`}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center gap-2 font-black uppercase italic text-xs tracking-widest shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all select-none"
                                >
                                    <Play size={16} fill="white" />
                                    Launch Challenge
                                </Link>
                            </div>
                        </div>

                        {/* Speed Math (Coming Soon) */}
                        <div className="relative flex flex-col p-8 rounded-[32px] bg-white/50 dark:bg-slate-950/50 border-2 border-slate-100 dark:border-slate-900 overflow-hidden group/soon min-h-[380px] grayscale">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100/50 dark:to-slate-900/10" />
                            <div className="relative justify-between items-start mb-6 flex">
                                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <Zap size={32} className="text-slate-300 dark:text-slate-700" />
                                </div>
                                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-[9px] font-black text-slate-400 dark:text-slate-700 uppercase tracking-widest">
                                    <Lock size={10} className="inline mr-1" />
                                    Coming Soon
                                </div>
                            </div>
                            <div className="relative">
                                <h3 className="text-2xl font-black text-slate-400 dark:text-slate-700 mb-2 italic uppercase tracking-tight">Speed Math</h3>
                                <p className="text-sm text-slate-300 dark:text-slate-800 leading-relaxed mb-8 italic">Race against the clock in a mental sprint. Complete operations in under 60, 120 or 180 seconds.</p>
                            </div>
                            <div className="relative mt-auto pt-6 border-t border-slate-100 dark:border-slate-900/50 flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-300 dark:text-slate-800 italic">
                                <span>Complexity: High</span>
                            </div>
                        </div>
                    </div>



                </section>
            </div>

            {/* Interactive How to Play Modal */}
            {showHelp && <KenKenHelp onClose={() => setShowHelp(false)} />}
        </div>
    );
}
