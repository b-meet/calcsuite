import { NavLink } from 'react-router-dom';
import { Calculator, Menu, X, Code, Coffee } from 'lucide-react';

import { useState } from 'react';
import { cn } from '../utils/cn';
import { categories } from '../calculators/registry';
import { ThemeToggle } from './ThemeToggle';
import { SearchInput } from './SearchInput';

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
                    "fixed top-0 left-0 z-40 h-screen w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col gap-4 p-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                        <img src="/favicon.png" alt="CalcSuite" className="w-10 h-10 rounded-xl shadow-sm" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            CalcSuite
                        </span>
                    </div>
                    <div className="relative z-10">
                        <SearchInput placeholder="Search tools..." />
                    </div>
                </div>

                <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)] pb-20">
                    <div className="mb-4">
                        <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Menu
                        </p>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
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
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 mt-1",
                                    isActive
                                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
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
                                            ? "bg-white text-blue-600"
                                            : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                    )}>
                                        NEW
                                    </span>
                                </>
                            )}
                        </NavLink>

                        <div className="mt-2 hidden lg:block">
                            <a
                                href="https://ko-fi.com/bmeet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
                            >
                                <Coffee size={18} className="animate-bounce" />
                                <span className="font-semibold text-sm">Buy me a coffee</span>
                            </a>
                        </div>
                    </div>

                    <div className="my-4 border-t border-slate-100 dark:border-slate-800" />

                    <div>
                        <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
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
                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
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

                <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            </aside >
        </>
    );
}
