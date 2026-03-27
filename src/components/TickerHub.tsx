import { Link } from 'react-router-dom';
import {
    Landmark,
    Briefcase,
    TrendingUp,
    Car,
    ArrowRight,
    Calculator,
    Activity,
    Calendar,
    Baby,
    Ruler,
    GraduationCap,
    Sunset
} from 'lucide-react';

import { Brain } from 'lucide-react';

const hubLinks = [
    {
        title: "Brain Arena",
        path: "/brain-training",
        icon: Brain,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        title: "BMI Calculator",
        path: "/calculator/bmi",
        icon: Activity,
        color: "text-rose-500",
        bg: "bg-rose-50 dark:bg-rose-900/20"
    },
    {
        title: "Scientific Calculator",
        path: "/calculator/scientific",
        icon: Calculator,
        color: "text-indigo-500",
        bg: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
        title: "Age Calculator",
        path: "/calculator/age",
        icon: Calendar,
        color: "text-amber-500",
        bg: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
        title: "Salary Calculator",
        path: "/calculator/india-salary",
        icon: Briefcase,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
        title: "Investment Growth",
        path: "/calculator/investment",
        icon: TrendingUp,
        color: "text-green-500",
        bg: "bg-green-50 dark:bg-green-900/20"
    },
    {
        title: "Pregnancy Due Date",
        path: "/calculator/pregnancy",
        icon: Baby,
        color: "text-pink-500",
        bg: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
        title: "Unit Converter",
        path: "/calculator/unit-converter",
        icon: Ruler,
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        title: "EMI Calculator",
        path: "/calculator/india-emi",
        icon: Landmark,
        color: "text-amber-600",
        bg: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
        title: "GPA Calculator",
        path: "/calculator/gpa",
        icon: GraduationCap,
        color: "text-violet-500",
        bg: "bg-violet-50 dark:bg-violet-900/20"
    },
    {
        title: "SIP Calculator",
        path: "/calculator/sip",
        icon: TrendingUp,
        color: "text-rose-600",
        bg: "bg-rose-50 dark:bg-rose-900/20"
    },
    {
        title: "Retirement Plan",
        path: "/calculator/retirement",
        icon: Sunset,
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
        title: "Auto Loan",
        path: "/calculator/auto-loan",
        icon: Car,
        color: "text-indigo-600",
        bg: "bg-indigo-50 dark:bg-indigo-900/20"
    }
];

export function TickerHub() {
    // Duplicate items to ensure smooth infinite scroll
    const items = [...hubLinks, ...hubLinks];

    return (
        <div className="w-full bg-white dark:bg-slate-950 md:bg-white/50 md:dark:bg-slate-900/50 md:backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-10 overflow-hidden relative md:ticker-mask pause-on-hover">
            <div className="absolute inset-y-0 left-0 w-max flex items-center animate-ticker will-change-transform" style={{ '--ticker-duration': '40s' } as React.CSSProperties}>
                {items.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={idx}
                            to={link.path}
                            className="flex items-center gap-2.5 px-6 group transition-colors"
                        >
                            <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${link.bg} ${link.color} group-hover:scale-110 transition-transform`}>
                                <Icon size={14} />
                            </div>
                            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-wider whitespace-nowrap">
                                {link.title}
                            </span>
                            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 ml-4 group-hover:hidden" />
                            <ArrowRight size={12} className="hidden group-hover:block text-blue-500 animate-in slide-in-from-left-2" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
