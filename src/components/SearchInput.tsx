import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronRight, History } from 'lucide-react';
import { calculatorRegistry } from '../calculators/registry';
import { cn } from '../utils/cn';
import { useRecentSearches } from '../hooks/useRecentSearches';

interface SearchInputProps {
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
    onSearch?: (query: string) => void;
    onSelect?: () => void;
}

export function SearchInput({ placeholder = "Search...", className, autoFocus = false, onSearch, onSelect }: SearchInputProps) {
    const [query, setQuery] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Initialize results with registry so it's not empty initially? No, should be empty or recent.
    // Actually, let's keep results state management simple.
    const [results, setResults] = useState(calculatorRegistry);

    const { recentSearches, addRecentSearch, removeRecentSearch, clearRecentSearches: clearHistory } = useRecentSearches();
    const [isShowingRecent, setIsShowingRecent] = useState(false);

    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const getRecentCalculators = () => {
        return recentSearches
            .map(id => calculatorRegistry.find(c => c.id === id))
            .filter((c): c is typeof calculatorRegistry[0] => !!c);
    };

    // Update results based on query or recent searches
    useEffect(() => {
        if (!query.trim()) {
            if (recentSearches.length > 0) {
                setResults(getRecentCalculators());
                setIsShowingRecent(true);
            } else {
                setResults([]);
                setIsShowingRecent(false);
            }
            // We don't force setIsOpen here. Let focus/click events handle visibility.
            // Exception: if user just cleared the box, they probably want to see history?
            // If the box is focused and became empty, keep it open?
            // The onFocus handler handles the initial open.
            return;
        }

        setIsShowingRecent(false);
        const lowerQuery = query.toLowerCase();
        const filtered = calculatorRegistry
            .filter(calc =>
                calc.name.toLowerCase().includes(lowerQuery) ||
                calc.description.toLowerCase().includes(lowerQuery) ||
                (calc.keywords && calc.keywords.some(k => k.toLowerCase().includes(lowerQuery)))
            )
            .sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                // 1. Exact match
                if (nameA === lowerQuery) return -1;
                if (nameB === lowerQuery) return 1;

                // 2. Starts with query
                const aStarts = nameA.startsWith(lowerQuery);
                const bStarts = nameB.startsWith(lowerQuery);
                if (aStarts && !bStarts) return -1;
                if (!aStarts && bStarts) return 1;

                // 3. Name contains query
                const aName = nameA.includes(lowerQuery);
                const bName = nameB.includes(lowerQuery);
                if (aName && !bName) return -1;
                if (!aName && bName) return 1;

                return 0;
            })
            .slice(0, 5); // Limit to 5 suggestions

        setResults(filtered);
        setIsOpen(true);
        setSelectedIndex(-1); // Reset selection
    }, [query, recentSearches]);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev > -1 ? prev - 1 : prev));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex > -1 && results[selectedIndex]) {
                handleSelect(results[selectedIndex].id);
            } else if (query.trim()) {
                if (onSearch) {
                    onSearch(query);
                } else {
                    window.location.href = `/?q=${encodeURIComponent(query)}`;
                }
                setIsOpen(false);
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
            inputRef.current?.blur();
        }
    };

    const handleSelect = (id: string) => {
        addRecentSearch(id);
        navigate(`/calculator/${id}`);
        setQuery('');
        setIsOpen(false);
        if (onSelect) onSelect();
    };

    const handleFocus = () => {
        if (!query.trim() && recentSearches.length > 0) {
            setResults(getRecentCalculators());
            setIsShowingRecent(true);
            setIsOpen(true);
        } else if (query.trim()) {
            setIsOpen(true);
        }
    };

    return (
        <div ref={containerRef} className={cn("relative", className)}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        if (onSearch) onSearch(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
                />
                {query && (
                    <button
                        onClick={() => {
                            setQuery('');
                            if (onSearch) onSearch('');
                            setIsOpen(false); // Close first
                            // Focus will re-trigger open if recent history exists
                            inputRef.current?.focus();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {/* Autocomplete Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-100">

                    {isShowingRecent && (
                        <div className="bg-slate-50 dark:bg-slate-800/80 px-4 py-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center justify-between backdrop-blur-sm sticky top-0 z-10">
                            <div className="flex items-center gap-1.5">
                                <History size={12} />
                                Recent Searches
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    clearHistory();
                                    setIsShowingRecent(false);
                                    setResults([]); // or stay open? better to close or show empty? 
                                    // If we clear, we have no results to show if query is empty.
                                }}
                                className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    )}

                    <div className="py-1">
                        {results.map((calc, index) => (
                            <div
                                key={calc.id}
                                className={cn(
                                    "w-full text-left px-4 py-3 flex items-center justify-between group transition-colors cursor-pointer relative",
                                    index === selectedIndex ? "bg-blue-50 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                                )}
                                onClick={() => handleSelect(calc.id)}
                            >
                                <div className="flex items-center gap-3 overflow-hidden flex-1">
                                    <div className={cn(
                                        "p-2 rounded-lg shrink-0 transition-colors",
                                        index === selectedIndex
                                            ? "bg-white text-blue-600 shadow-sm"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                    )}>
                                        {isShowingRecent ? <History size={16} /> : <calc.icon size={16} />}
                                    </div>
                                    <div className="truncate flex-1">
                                        <div className={cn("font-medium text-sm truncate", index === selectedIndex ? "text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-300")}>
                                            {calc.name}
                                        </div>
                                        <div className="text-xs text-slate-400 truncate hidden sm:block">
                                            {calc.description}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center pl-2">
                                    {isShowingRecent ? (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeRecentSearch(calc.id);

                                                // If list becomes empty, hide recent view
                                                // Wait, recentSearches update will trigger useEffect above.
                                                // But basic state logic:
                                                const updated = recentSearches.filter(id => id !== calc.id);
                                                if (updated.length === 0) {
                                                    setIsShowingRecent(false);
                                                    setResults([]);
                                                }
                                            }}
                                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
                                            title="Remove from history"
                                        >
                                            <X size={14} />
                                        </button>
                                    ) : (
                                        index === selectedIndex && <ChevronRight size={14} className="text-blue-500 shrink-0" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
