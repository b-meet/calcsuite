import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'calcsuite-recent-searches';
const MAX_Items = 5;

// Dispatch a custom event whenever recent searches change
const dispatchUpdate = () => {
    window.dispatchEvent(new Event('recent-searches-updated'));
};

export function useRecentSearches() {
    const getRecentSearches = (): string[] => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Failed to load recent searches', error);
            return [];
        }
    };

    // Lazy load initial state
    const [recentSearches, setRecentSearches] = useState<string[]>(getRecentSearches);

    // Listen for updates from other components
    useEffect(() => {
        const handleStorageChange = () => {
            setRecentSearches(getRecentSearches());
        };

        window.addEventListener('recent-searches-updated', handleStorageChange);
        // Also listen for storage events (cross-tab sync)
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('recent-searches-updated', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const addRecentSearch = useCallback((calculatorId: string) => {
        const current = getRecentSearches();
        // Prevent duplicates and keep top 5
        const updated = [calculatorId, ...current.filter(id => id !== calculatorId)].slice(0, MAX_Items);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setRecentSearches(updated);
        dispatchUpdate();
    }, []);

    const removeRecentSearch = useCallback((calculatorId: string) => {
        const current = getRecentSearches();
        const updated = current.filter(id => id !== calculatorId);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setRecentSearches(updated);
        dispatchUpdate();
    }, []);

    const clearRecentSearches = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setRecentSearches([]);
        dispatchUpdate();
    }, []);

    return {
        recentSearches,
        addRecentSearch,
        removeRecentSearch,
        clearRecentSearches
    };
}
