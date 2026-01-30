import { NavLink } from 'react-router-dom';
import { Calculator, Menu, X, Code } from 'lucide-react';

import { useState } from 'react';
import { cn } from '../utils/cn';
import { categories } from '../calculators/registry';

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center gap-2 p-6 border-b border-slate-100">
                    <img src="/favicon.png" alt="CalcSuite" className="w-10 h-10 rounded-xl shadow-sm" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        CalcSuite
                    </span>
                </div>

                <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
                    <div className="mb-4">
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            Menu
                        </p>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-blue-50 text-blue-700 shadow-sm"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                )
                            }
                        >
                            <Calculator size={18} />
                            All Calculators
                        </NavLink>

                        <NavLink
                            to="/widget-generator"
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 mt-2",
                                    isActive
                                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-200"
                                        : "bg-white border border-violet-100 text-violet-600 hover:bg-violet-50 hover:border-violet-200"
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Code size={18} />
                                    Add to your site
                                    <span className={cn(
                                        "ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full shadow-sm",
                                        isActive
                                            ? "bg-white text-violet-600"
                                            : "bg-violet-100 text-violet-600"
                                    )}>
                                        NEW
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </div>

                    <div>
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            Categories
                        </p>
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <NavLink
                                    key={category.id}
                                    to={`/category/${category.id}`}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                            isActive
                                                ? "bg-blue-50 text-blue-700 shadow-sm"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        )
                                    }
                                >
                                    <Icon size={18} />
                                    {category.name}
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>
            </aside >
        </>
    );
}
