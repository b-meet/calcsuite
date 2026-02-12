import { useState, useEffect } from 'react';

export interface HistoryItem {
    id: string;
    timestamp: number;
    inputs: Record<string, any>;
    result: any;
    label?: string; // Optional label for the history item (e.g. "Personal Loan - 10L")
}

export function useCalculatorHistory(calculatorId: string) {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const storageKey = `calc_history_${calculatorId}`;

    useEffect(() => {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            try {
                setHistory(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse history', e);
            }
        }
    }, [calculatorId]);

    const addHistory = (inputs: Record<string, any>, result: any, label?: string) => {
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
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem(storageKey);
    };

    const removeHistoryItem = (id: string) => {
        const newHistory = history.filter(item => item.id !== id);
        setHistory(newHistory);
        localStorage.setItem(storageKey, JSON.stringify(newHistory));
    };

    return {
        history,
        addHistory,
        clearHistory,
        removeHistoryItem
    };
}
