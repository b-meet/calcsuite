import { useState, useEffect } from 'react';
import { useWidget } from '../context/WidgetContext';

export interface HistoryItem {
    id: string;
    timestamp: number;
    inputs: Record<string, any>;
    result: any;
    label?: string; // Optional label for the history item (e.g. "Personal Loan - 10L")
}

const HISTORY_EVENT = 'calcsuite:history-changed';

function announce(storageKey: string) {
    window.dispatchEvent(new CustomEvent(HISTORY_EVENT, { detail: storageKey }));
}

export function useCalculatorHistory(calculatorId: string) {
    const { isWidget } = useWidget();
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const storageKey = `calc_history_${calculatorId}`;

    useEffect(() => {
        const read = () => {
            const stored = localStorage.getItem(storageKey);
            if (!stored) {
                setHistory([]);
                return;
            }
            try {
                setHistory(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse history', e);
            }
        };

        read();

        // Several components can hold this hook for the same calculator (the
        // calculator itself and the share rail, for instance). Without a
        // notification each instance keeps the snapshot it read on mount and
        // they silently drift apart.
        const onChanged = (event: Event) => {
            if ((event as CustomEvent<string>).detail === storageKey) read();
        };
        window.addEventListener(HISTORY_EVENT, onChanged);
        window.addEventListener('storage', read);
        return () => {
            window.removeEventListener(HISTORY_EVENT, onChanged);
            window.removeEventListener('storage', read);
        };
    }, [calculatorId, storageKey]);

    const addHistory = (inputs: Record<string, any>, result: any, label?: string) => {
        if (isWidget) return;
        // Prevent duplicate back-to-back entries
        if (history.length > 0) {
            const lastItem = history[0];
            const isDuplicate = JSON.stringify(lastItem.inputs) === JSON.stringify(inputs) &&
                lastItem.result === result &&
                lastItem.label === label;

            if (isDuplicate) return;
        }

        const newItem: HistoryItem = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            inputs,
            result,
            label
        };

        const newHistory = [newItem, ...history].slice(0, 5);
        setHistory(newHistory);
        localStorage.setItem(storageKey, JSON.stringify(newHistory));
        announce(storageKey);
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem(storageKey);
        announce(storageKey);
    };

    const removeHistoryItem = (id: string) => {
        const newHistory = history.filter(item => item.id !== id);
        setHistory(newHistory);
        localStorage.setItem(storageKey, JSON.stringify(newHistory));
        announce(storageKey);
    };

    return {
        history,
        addHistory,
        clearHistory,
        removeHistoryItem
    };
}
