import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronRight } from 'lucide-react';
import { calculatorRegistry } from '../calculators/registry';
import { cn } from '../utils/cn';

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
    const [results, setResults] = useState(calculatorRegistry);
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter results
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            setIsOpen(false);
            return;
        }

        const filtered = calculatorRegistry.filter(calc =>
            calc.name.toLowerCase().includes(query.toLowerCase()) ||
            calc.description.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5); // Limit to 5 suggestions

        setResults(filtered);
        setIsOpen(true);
        setSelectedIndex(-1); // Reset selection
    }, [query]);

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
                // If no specific suggestion selected, navigate to search page or trigger callback
                if (onSearch) {
                    onSearch(query);
                } else {
                    // Default behavior: go to home with query parameter
                    // Reload to force search update if already on home
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
        navigate(`/calculator/${id}`);
        setQuery('');
        setIsOpen(false);
        if (onSelect) onSelect();
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
                        if (onSearch) onSearch(e.target.value); // Optional real-time callback
                    }}
                    onKeyDown={handleKeyDown}
                    onFocus={() => { if (query.trim()) setIsOpen(true); }}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
                />
                {query && (
                    <button
                        onClick={() => {
                            setQuery('');
                            if (onSearch) onSearch('');
                            setIsOpen(false);
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
                    <div className="py-1">
                        {results.map((calc, index) => (
                            <button
                                key={calc.id}
                                onClick={() => handleSelect(calc.id)}
                                className={cn(
                                    "w-full text-left px-4 py-3 flex items-center justify-between group transition-colors",
                                    index === selectedIndex ? "bg-blue-50 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                                )}
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className={cn(
                                        "p-2 rounded-lg shrink-0",
                                        index === selectedIndex ? "bg-white text-blue-600 shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                    )}>
                                        <calc.icon size={16} />
                                    </div>
                                    <div className="truncate">
                                        <div className={cn("font-medium text-sm truncate", index === selectedIndex ? "text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-300")}>
                                            {calc.name}
                                        </div>
                                        <div className="text-xs text-slate-400 truncate hidden sm:block">
                                            {calc.description}
                                        </div>
                                    </div>
                                </div>
                                {index === selectedIndex && <ChevronRight size={14} className="text-blue-500 shrink-0" />}
                            </button>
                        ))}
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 px-3 py-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 uppercase font-medium tracking-wide">
                        <span>Select with &uarr;&darr;</span>
                        <span>Enter to open</span>
                    </div>
                </div>
            )}
        </div>
    );
}
