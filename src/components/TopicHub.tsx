import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    Percent,
    Landmark,
    Briefcase,
    TrendingUp,
    DollarSign,
    Car,
    ChevronRight
} from 'lucide-react';

export function TopicHub() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showHint, setShowHint] = useState(true);

    const hubLinks = [
        {
            title: "GST Calculator (2026)",
            path: "/calculator/india-gst/",
            icon: Percent,
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Income Tax (FY 2025-26)",
            path: "/calculator/india-tax/",
            icon: FileText,
            color: "text-emerald-500",
            bg: "bg-emerald-50 dark:bg-emerald-900/20"
        },
        {
            title: "Salary Calculator",
            path: "/calculator/india-salary/",
            icon: Briefcase,
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/20"
        },
        {
            title: "EMI Calculator",
            path: "/calculator/india-emi/",
            icon: Landmark,
            color: "text-amber-500",
            bg: "bg-amber-50 dark:bg-amber-900/20"
        },
        {
            title: "SIP Calculator",
            path: "/calculator/sip/",
            icon: TrendingUp,
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-900/20"
        },
        {
            title: "Auto Loan",
            path: "/calculator/auto-loan/",
            icon: Car,
            color: "text-indigo-500",
            bg: "bg-indigo-50 dark:bg-indigo-900/20"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current && scrollRef.current.scrollLeft > 20) {
                setShowHint(false);
            }
        };
        const el = scrollRef.current;
        el?.addEventListener('scroll', handleScroll);
        return () => el?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full space-y-4 mb-6 md:mb-8 sticky top-2 md:top-4 z-40 group/hub">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:border-blue-200 dark:hover:border-slate-700 ring-1 ring-black/5 dark:ring-white/5">
                <div className="flex items-center gap-3 relative">
                    <div className="flex items-center gap-2 shrink-0 border-r border-slate-200 dark:border-slate-800 pr-3 md:pr-4">
                        <div className="p-1 px-1.5 md:p-1.5 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <DollarSign className="w-3.5 h-3.5 md:w-5 md:h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-tighter md:tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                            Hub
                        </h3>
                    </div>

                    <div className="flex-1 relative overflow-hidden">
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-x-auto no-scrollbar mask-right"
                        >
                            <div className="flex items-center gap-2 min-w-max pb-1 pr-12">
                                {hubLinks.map((link, idx) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link
                                            key={idx}
                                            to={link.path}
                                            className="group flex items-center gap-1.5 md:gap-2.5 px-2 md:px-3.5 py-1 md:py-2 rounded-lg md:rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-sm"
                                        >
                                            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center shrink-0 ${link.bg} ${link.color} group-hover:scale-110 transition-transform duration-300 ring-1 ring-black/5 dark:ring-white/10`}>
                                                <Icon className="w-3 h-3 md:w-4.5 md:h-4.5" />
                                            </div>
                                            <span className="font-bold text-[11px] md:text-[13px] text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                                                {link.title}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Visual Hint for Scroll */}
                        {showHint && (
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none text-blue-500 dark:text-blue-400 bg-gradient-to-l from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent pl-8 pr-2 py-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">Swipe</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>

                    <div className="hidden lg:flex items-center gap-3 shrink-0 pl-4 border-l border-slate-200 dark:border-slate-800">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl px-4 py-2.5 flex items-center gap-3 text-white shadow-lg shadow-blue-500/20 overflow-hidden relative group/btn">
                            <span className="text-[11px] font-black uppercase tracking-wider relative z-10">2026 Tax Rules</span>
                            <Link
                                to="/calculator/india-tax/"
                                className="px-3.5 py-1.5 bg-white text-blue-700 text-[10px] font-black rounded-lg transition-all relative z-10 hover:scale-105 active:scale-95 shadow-sm"
                            >
                                CHECK NOW
                            </Link>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
