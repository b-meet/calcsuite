import { Link } from 'react-router-dom';
import { 
    FileText, 
    Percent, 
    Landmark, 
    Briefcase, 
    TrendingUp, 
    DollarSign,
    Car
} from 'lucide-react';

export function TopicHub() {
    const hubLinks = [
        {
            title: "GST Calculator (2026)",
            path: "/calculator/india-gst",
            icon: Percent,
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Income Tax (FY 2025-26)",
            path: "/calculator/india-tax",
            icon: FileText,
            color: "text-emerald-500",
            bg: "bg-emerald-50 dark:bg-emerald-900/20"
        },
        {
            title: "Salary Calculator",
            path: "/calculator/india-salary",
            icon: Briefcase,
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/20"
        },
        {
            title: "EMI Calculator",
            path: "/calculator/india-emi",
            icon: Landmark,
            color: "text-amber-500",
            bg: "bg-amber-50 dark:bg-amber-900/20"
        },
        {
            title: "SIP Calculator",
            path: "/calculator/sip",
            icon: TrendingUp,
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-900/20"
        },
        {
            title: "Auto Loan",
            path: "/calculator/auto-loan",
            icon: Car,
            color: "text-indigo-500",
            bg: "bg-indigo-50 dark:bg-indigo-900/20"
        }
    ];

    return (
        <aside className="w-full xl:w-80 shrink-0 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Finance Topic Hub
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Master your finances with our updated 2026 calculators. Try them out:
                </p>
                
                <div className="flex flex-col gap-3">
                    {hubLinks.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <Link 
                                key={idx} 
                                to={link.path}
                                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all"
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${link.bg} ${link.color} group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-sm text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {link.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            
            {/* Promo banner for internal link juice */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 shadow-md text-white">
                <h4 className="font-bold text-lg mb-2">New 2026 Tax Rules Live!</h4>
                <p className="text-sm text-indigo-100 mb-4">
                    Calculate your exact savings under the new tax regime. Stay compliant and save money.
                </p>
                <Link 
                    to="/calculator/india-tax" 
                    className="inline-block px-4 py-2 bg-white text-indigo-700 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
                >
                    Compare Now
                </Link>
            </div>
        </aside>
    );
}
