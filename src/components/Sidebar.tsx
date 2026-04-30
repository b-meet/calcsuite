import { NavLink } from 'react-router-dom';
import { Calculator, Menu, X, Code, Coffee, Star, BookOpen, MessageSquareHeart, ChevronLeft, ChevronRight, Search, Brain } from 'lucide-react';

import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { categories, calculatorRegistry } from '../calculators/registry';
import { ThemeToggle } from './ThemeToggle';
import { SearchInput } from './SearchInput';
import { useFavorites } from '../hooks/useFavorites';
import { Tooltip } from './Tooltip';

interface SidebarProps {
    isCollapsed?: boolean;
    onToggle?: () => void;
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { favorites } = useFavorites();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const effectiveCollapsed = isCollapsed && !isMobile;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const favCalculators = favorites
        .map(id => calculatorRegistry.find(c => c.id === id))
        .filter((c): c is typeof calculatorRegistry[0] => !!c);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden fixed top-4 right-4 z-[110] p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-lg shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] sm:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={cn(
                    "fixed top-0 left-0 z-[100] h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out sm:translate-x-0 flex flex-col",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    "w-64", // Standard drawer width for mobile
                    effectiveCollapsed ? "sm:w-[72px]" : "sm:w-64"
                )}
            >
                {/* Desktop Toggle Button */}
                <button
                    onClick={onToggle}
                    className="hidden sm:flex absolute -right-3 top-20 z-[110] w-6 h-6 items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-md text-slate-500 hover:text-blue-600 transition-all scale-100 hover:scale-110 active:scale-95"
                >
                    {effectiveCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>

                <div className={cn(
                    "relative z-20 flex flex-col border-b border-slate-100 dark:border-slate-800 transition-all duration-300 overflow-visible",
                    effectiveCollapsed ? "p-4 items-center gap-4" : "p-6 gap-4"
                )}>
                    <NavLink to="/" className="flex items-center gap-3 overflow-hidden group">
                        <img src="/favicon.png" alt="CalcSuite" className="w-10 h-10 min-w-[40px] rounded-xl shadow-sm transition-transform group-hover:scale-105" />
                        {!effectiveCollapsed && (
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 whitespace-nowrap">
                                CalcSuite
                            </span>
                        )}
                    </NavLink>
                    
                    <div className={cn("relative z-30 transition-all duration-300 w-full", effectiveCollapsed ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100")}>
                        <SearchInput
                            placeholder="Search tools..."
                            onSelect={() => setIsOpen(false)}
                        />
                    </div>
                    
                    {effectiveCollapsed && (
                        <Tooltip content="Search tools" position="right">
                            <button 
                                onClick={onToggle}
                                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <Search size={20} />
                            </button>
                        </Tooltip>
                    )}
                </div>

                <nav className={cn(
                    "relative z-0 overflow-y-auto overflow-x-hidden flex-1 transition-all duration-300 scroll-smooth",
                    effectiveCollapsed ? "p-2 space-y-2" : "p-4 space-y-1"
                )}>
                    <div className="mb-4">
                        {!effectiveCollapsed && (
                            <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Menu
                            </p>
                        )}
                        <Tooltip content="All Calculators" position="right" enabled={effectiveCollapsed}>
                            <NavLink
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center rounded-xl text-sm font-medium transition-all duration-200 group",
                                        effectiveCollapsed ? "justify-center w-12 h-12 mx-auto" : "gap-3 px-3 py-2.5",
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                    )
                                }
                            >
                                <Calculator size={20} className="shrink-0" />
                                {!effectiveCollapsed && <span>All Calculators</span>}
                            </NavLink>
                        </Tooltip>

                        <Tooltip content="Widget Generator" position="right" enabled={effectiveCollapsed}>
                            <NavLink
                                to="/widget-generator/"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center rounded-xl text-sm font-medium transition-all duration-200 group mt-1 relative",
                                        effectiveCollapsed ? "justify-center w-12 h-12 mx-auto" : "gap-3 px-3 py-2.5",
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                    )
                                }
                            >
                                <Code size={20} className="shrink-0" />
                                {!effectiveCollapsed && <span className="truncate">Widget Generator</span>}
                            </NavLink>
                        </Tooltip>
                        
                        <Tooltip content="Resources & Guides" position="right" enabled={effectiveCollapsed}>
                            <NavLink
                                to="/resources/"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center rounded-xl text-sm font-medium transition-all duration-200 group mt-1 relative",
                                        effectiveCollapsed ? "justify-center w-12 h-12 mx-auto" : "gap-3 px-3 py-2.5",
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <BookOpen size={20} className="shrink-0" />
                                        {!effectiveCollapsed && (
                                            <>
                                                <span className="truncate">Resources & Guides</span>
                                                <span className={cn(
                                                    "ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full shadow-sm shrink-0",
                                                    isActive
                                                        ? "bg-white text-blue-600"
                                                        : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                                )}>
                                                    NEW
                                                </span>
                                            </>
                                        )}
                                        {effectiveCollapsed && (
                                            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse shadow-sm" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </Tooltip>

                        <Tooltip content="Brain Arena - Daily Logic Games" position="right" enabled={effectiveCollapsed}>
                            <NavLink
                                to="/brain-training/"
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center rounded-xl text-sm font-medium transition-all duration-200 group mt-1 relative",
                                        effectiveCollapsed ? "justify-center w-12 h-12 mx-auto" : "gap-3 px-3 py-2.5",
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <Brain size={20} className="shrink-0 text-blue-500" />
                                        {!effectiveCollapsed && (
                                            <>
                                                <span className="truncate">Brain Arena</span>
                                                <span className={cn(
                                                    "ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full shadow-sm shrink-0",
                                                    isActive
                                                        ? "bg-white text-blue-600 shadow-sm"
                                                        : "bg-blue-600 text-white animate-pulse shadow-blue-500/50"
                                                )}>
                                                    DAILY
                                                </span>
                                            </>
                                        )}
                                        {effectiveCollapsed && (
                                            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse shadow-sm" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </Tooltip>

                        <div className={cn("mt-4 transition-all duration-300", effectiveCollapsed ? "flex justify-center" : "hidden sm:block px-1")}>
                            <Tooltip content="Buy me a coffee" position="right" enabled={effectiveCollapsed}>
                                <a
                                    href="https://ko-fi.com/bmeet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group",
                                        effectiveCollapsed ? "w-12 h-12" : "gap-2 w-full px-4 py-2.5"
                                    )}
                                >
                                    <Coffee size={20} className={cn("shrink-0", !effectiveCollapsed && "animate-bounce")} />
                                    {!effectiveCollapsed && <span className="font-semibold text-sm">Buy me a coffee</span>}
                                </a>
                            </Tooltip>
                        </div>
                    </div>

                    <div className="my-4 border-t border-slate-100 dark:border-slate-800 mx-2" />

                    <div className="transition-all duration-300">
                        {!effectiveCollapsed && (
                            <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Categories
                            </p>
                        )}
                        <div className={cn("space-y-1", effectiveCollapsed ? "flex flex-col items-center" : "")}>
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <Tooltip key={category.id} content={category.name} position="right" enabled={effectiveCollapsed}>
                                        <NavLink
                                            to={`/category/${category.id}/`}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                cn(
                                                    "flex items-center rounded-xl text-sm font-medium transition-all duration-200",
                                                    effectiveCollapsed ? "justify-center w-12 h-12" : "gap-3 px-3 py-2.5",
                                                    isActive
                                                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm"
                                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                                )
                                            }
                                        >
                                            <Icon size={20} className="shrink-0" />
                                            {!effectiveCollapsed && <span className="truncate">{category.name}</span>}
                                        </NavLink>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </div>

                    {favCalculators.length > 0 && (
                        <div className="mb-4 transition-all duration-300">
                            <div className="my-3 border-t border-slate-100 dark:border-slate-800 mx-2" />
                            {!effectiveCollapsed && (
                                <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Star size={12} className="text-amber-400 fill-amber-400" />
                                    Favorites
                                </p>
                            )}
                            <div className={cn("space-y-1", effectiveCollapsed ? "flex flex-col items-center" : "")}>
                                {favCalculators.map(calc => (
                                    <Tooltip key={calc.id} content={calc.name} position="right" enabled={effectiveCollapsed}>
                                        <NavLink
                                            to={`/calculator/${calc.id}/`}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                cn(
                                                    "flex items-center rounded-xl text-sm font-medium transition-all duration-200",
                                                    effectiveCollapsed ? "justify-center w-12 h-12" : "gap-3 px-3 py-2.5",
                                                    isActive
                                                        ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 shadow-sm"
                                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                                )
                                            }
                                        >
                                            <calc.icon size={20} className="shrink-0 text-amber-500 dark:text-amber-400" />
                                            {!effectiveCollapsed && <span className="truncate">{calc.name}</span>}
                                        </NavLink>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>

                <div className={cn(
                    "border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 transition-all duration-300",
                    effectiveCollapsed ? "p-3 items-center" : "py-3 px-4"
                )}>
                    <Tooltip content="Feedback" position="right" enabled={effectiveCollapsed}>
                        <a
                            href="https://insigh.to/b/calcsuite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "flex items-center rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all",
                                effectiveCollapsed ? "w-12 h-12 justify-center" : "sm:hidden gap-2.5 w-full px-3 py-2.5"
                            )}
                        >
                            <MessageSquareHeart size={20} className="shrink-0 text-blue-500" />
                            {!effectiveCollapsed && <span>Feedback</span>}
                        </a>
                    </Tooltip>
                    
                    <div className={cn("flex items-center w-full", effectiveCollapsed ? "justify-center" : "justify-between px-1")}>
                        {!effectiveCollapsed && <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Theme</span>}
                        <Tooltip content="Toggle Theme" position="right" enabled={effectiveCollapsed}>
                            <div className={cn("transition-all duration-300", effectiveCollapsed ? "scale-90" : "")}>
                                <ThemeToggle />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </aside >
        </>
    );
}
