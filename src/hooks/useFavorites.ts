import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'calcsuite_favorites';
const MAX_FAVORITES = 6;

// Dispatch a custom event whenever favorites change
const dispatchUpdate = () => {
    window.dispatchEvent(new Event('favorites-updated'));
};

export function useFavorites() {
    const getFavorites = (): string[] => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Failed to load favorites', error);
            return [];
        }
    };

    const [favorites, setFavorites] = useState<string[]>(getFavorites);

    // Listen for updates from other components
    useEffect(() => {
        const handleStorageChange = () => {
            setFavorites(getFavorites());
        };

        window.addEventListener('favorites-updated', handleStorageChange);
        // Also listen for storage events (cross-tab sync)
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('favorites-updated', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleFavorite = useCallback((calculatorId: string) => {
        const current = getFavorites();
        let updated: string[];

        if (current.includes(calculatorId)) {
            updated = current.filter(id => id !== calculatorId);
        } else {
            if (current.length >= MAX_FAVORITES) {
                // Limit reached, do not add
                return false;
            }
            updated = [...current, calculatorId];
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setFavorites(updated);
        dispatchUpdate();
        return true;
    }, []);

    const isFavorite = useCallback((calculatorId: string) => {
        return favorites.includes(calculatorId);
    }, [favorites]);

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        reachedMax: favorites.length >= MAX_FAVORITES
    };
}
