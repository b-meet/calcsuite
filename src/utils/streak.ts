export function getTodayIST(): string {
    return new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' });
}

export function getYesterdayIST(): string {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' });
}

/**
 * Returns the effective streak for today.
 * If the user hasn't played today nor yesterday, the streak is 0.
 */
export const getEffectiveStreak = (): number => {
    const lastDateStr = localStorage.getItem('kenken-last-solve');
    const streak = parseInt(localStorage.getItem('kenken-streak') || '0');

    if (!lastDateStr || streak === 0) return 0;

    const today = getTodayIST();
    const yesterdayStr = getYesterdayIST();

    // If the last played date is neither today nor yesterday, the streak is broken (0).
    if (lastDateStr !== today && lastDateStr !== yesterdayStr) {
        return 0;
    }

    return streak;
};

/**
 * Updates the streak when the user solves a puzzle.
 */
export const updateStreakAndGetNew = (): number => {
    const todayStr = getTodayIST();
    const lastDateStr = localStorage.getItem('kenken-last-solve');
    const currentStreak = parseInt(localStorage.getItem('kenken-streak') || '0');

    // If already played today, streak doesn't change
    if (lastDateStr === todayStr) {
        return currentStreak || 1;
    }

    const yesterdayStr = getYesterdayIST();

    // If played yesterday, increment. Otherwise, reset to 1.
    let newStreak = 1;
    if (lastDateStr === yesterdayStr) {
        newStreak = currentStreak + 1;
    }

    localStorage.setItem('kenken-streak', newStreak.toString());
    localStorage.setItem('kenken-last-solve', todayStr);

    return newStreak;
};
