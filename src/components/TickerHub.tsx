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
    Sunset,
    Brain
} from 'lucide-react';
import { cn } from '../utils/cn';

const hubLinks = [
    {
        title: "Job Security Meter",
        path: "https://jobsecuritymeter.com?ref=calcsuite-ticker",
        isExternal: true,
        badge: "NEW"
    },
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
        <div className="sticky top-0 z-[60] w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-8 overflow-hidden md:ticker-mask pause-on-hover px-4 md:px-6">
            <div className="absolute inset-y-0 left-0 w-max flex items-center animate-ticker will-change-transform h-full" style={{ '--ticker-duration': '32s' } as React.CSSProperties}>
                {items.map((link, idx) => {
                    const Icon = link.icon;
                    const isJSM = link.title === "Job Security Meter";

                    const content = (
                        <div className={cn(
                            "flex items-center gap-2 transition-all duration-300",
                            isJSM && "bg-[#2D5F4F] dark:bg-[#1a3a30] px-3 py-0.5 rounded-full shadow-sm hover:bg-[#3a7c67] transform hover:scale-105"
                        )}>
                            <div className={cn(
                                "w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-transform overflow-hidden",
                                isJSM ? "bg-white" : `${link.bg} ${link.color} group-hover:scale-110`
                            )}>
                                {isJSM ? (
                                    <img src="/jsm-logo.png" alt="JSM" className="w-full h-full object-cover" />
                                ) : (
                                    <Icon size={14} />
                                )}
                            </div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5",
                                isJSM ? "text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                            )}>
                                {link.title}
                                {link.badge && (
                                    <span className="bg-white text-[#2D5F4F] text-[7px] px-1 rounded-sm leading-tight flex items-center justify-center font-black">
                                        {link.badge}
                                    </span>
                                )}
                            </span>
                        </div>
                    );

                    const linkClasses = "flex items-center px-4 group transition-colors h-full";

                    if (link.isExternal) {
                        return (
                            <a
                                key={idx}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(linkClasses, "cursor-pointer")}
                            >
                                {content}
                                {!isJSM && <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 ml-6 group-hover:hidden" />}
                                {!isJSM && <ArrowRight size={12} className="hidden group-hover:block ml-4 text-blue-500 animate-in slide-in-from-left-2" />}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={idx}
                            to={link.path}
                            className={linkClasses}
                        >
                            {content}
                            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 ml-6 group-hover:hidden" />
                            <ArrowRight size={12} className="hidden group-hover:block ml-4 text-blue-500 animate-in slide-in-from-left-2" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
