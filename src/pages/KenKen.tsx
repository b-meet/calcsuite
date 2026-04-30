import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Trophy, Clock, Brain, HelpCircle, Share2, ArrowLeft, Zap, Eraser } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '../utils/cn';
import { generateDailyPuzzle, type KenKenPuzzle } from '../utils/kenkenGenerator';
import SEO from '../components/SEO';
import { KenKenHelp } from '../components/KenKenHelp';
import { KenKenShareModal } from '../components/KenKenShareModal';

import { getEffectiveStreak, updateStreakAndGetNew, getTodayIST } from '../utils/streak';

// ─── Helpers ──────────────────────────────────────────────────────────

function getTodayISTFormatted(): string {
    return new Date().toLocaleDateString('en-GB', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

function storageKey(size: number, key: string): string {
    return `kenken-${size}-${key}`;
}

function loadSavedState(size: number) {
    try {
        const savedDate = localStorage.getItem(storageKey(size, 'date'));
        const today = getTodayIST();

        if (savedDate !== today) {
            // New day — clear old state for this size
            localStorage.removeItem(storageKey(size, 'grid'));
            localStorage.removeItem(storageKey(size, 'elapsed'));
            localStorage.removeItem(storageKey(size, 'solved'));
            localStorage.setItem(storageKey(size, 'date'), today);
            return { grid: null, elapsed: 0, solved: false };
        }

        const gridStr = localStorage.getItem(storageKey(size, 'grid'));
        const elapsedStr = localStorage.getItem(storageKey(size, 'elapsed'));
        const solvedStr = localStorage.getItem(storageKey(size, 'solved'));

        return {
            grid: gridStr ? JSON.parse(gridStr) as (number | null)[][] : null,
            elapsed: elapsedStr ? parseInt(elapsedStr) : 0,
            solved: solvedStr === 'true',
        };
    } catch {
        return { grid: null, elapsed: 0, solved: false };
    }
}

function saveState(size: number, grid: (number | null)[][], elapsed: number, solved: boolean) {
    localStorage.setItem(storageKey(size, 'date'), getTodayIST());
    localStorage.setItem(storageKey(size, 'grid'), JSON.stringify(grid));
    localStorage.setItem(storageKey(size, 'elapsed'), elapsed.toString());
    localStorage.setItem(storageKey(size, 'solved'), solved.toString());
}

// ─── Component ────────────────────────────────────────────────────────
export function KenKen() {
    const [searchParams] = useSearchParams();
    const sizeParam = parseInt(searchParams.get('size') || '5');
    const size = [3, 5, 8].includes(sizeParam) ? sizeParam : 5;

    const [puzzle, setPuzzle] = useState<KenKenPuzzle | null>(null);
    const [grid, setGrid] = useState<(number | null)[][]>(() =>
        Array.from({ length: size }, () => Array(size).fill(null))
    );
    const [selected, setSelected] = useState<{ r: number; c: number } | null>(null);
    const [elapsed, setElapsed] = useState(0);
    const [isSolved, setIsSolved] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    // Track session start so we can accumulate elapsed
    const sessionStartRef = useRef<number | null>(null);
    const baseElapsedRef = useRef(0);

    // ── Initialize / Restore ─────────────────────────────────────────
    useEffect(() => {
        const p = generateDailyPuzzle(size);
        setPuzzle(p);

        const saved = loadSavedState(size);

        if (saved.grid) {
            setGrid(saved.grid);
        } else {
            setGrid(Array.from({ length: size }, () => Array(size).fill(null)));
        }

        baseElapsedRef.current = saved.elapsed;
        setElapsed(saved.elapsed);

        if (saved.solved) {
            setIsSolved(true);
            setHasStarted(true);
        } else {
            setIsSolved(false);
            // If there's progress (elapsed > 0 or non-empty grid), the user has started
            const hasProgress = saved.elapsed > 0 || (saved.grid && saved.grid.some(row => row.some(cell => cell !== null)));
            setHasStarted(!!hasProgress);
        }

        sessionStartRef.current = null;
        setSelected(null);

        const visited = localStorage.getItem('kenken-visited');
        if (!visited) {
            setShowHelp(true);
            localStorage.setItem('kenken-visited', 'true');
        }
    }, [size]);

    // ── Timer ────────────────────────────────────────────────────────
    useEffect(() => {
        if (isSolved || !hasStarted) return;

        // Start a new session
        sessionStartRef.current = Date.now();

        const interval = setInterval(() => {
            if (sessionStartRef.current) {
                const sessionSeconds = Math.floor((Date.now() - sessionStartRef.current) / 1000);
                setElapsed(baseElapsedRef.current + sessionSeconds);
            }
        }, 1000);

        return () => {
            // On cleanup (route change, unmount) — save accumulated time
            if (sessionStartRef.current) {
                const sessionSeconds = Math.floor((Date.now() - sessionStartRef.current) / 1000);
                baseElapsedRef.current += sessionSeconds;
                sessionStartRef.current = null;
            }
            clearInterval(interval);
        };
    }, [isSolved, hasStarted, size]);

    // ── Save on changes ──────────────────────────────────────────────
    useEffect(() => {
        if (!puzzle) return;
        saveState(size, grid, elapsed, isSolved);
    }, [grid, elapsed, isSolved, size, puzzle]);

    // ── Save on page hide (tab switch, close) ────────────────────────
    useEffect(() => {
        const handleVisibility = () => {
            if (document.hidden && sessionStartRef.current) {
                const sessionSeconds = Math.floor((Date.now() - sessionStartRef.current) / 1000);
                const totalElapsed = baseElapsedRef.current + sessionSeconds;
                saveState(size, grid, totalElapsed, isSolved);
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, [size, grid, isSolved]);

    // ── Error highlighting ───────────────────────────────────────────
    const errorCells = useMemo(() => {
        const errors = new Set<string>();

        for (let r = 0; r < size; r++) {
            const seen = new Map<number, number[]>();
            for (let c = 0; c < size; c++) {
                const val = grid[r][c];
                if (val === null) continue;
                if (!seen.has(val)) seen.set(val, []);
                seen.get(val)!.push(c);
            }
            seen.forEach((cols) => {
                if (cols.length > 1) cols.forEach(c => errors.add(`${r}-${c}`));
            });
        }

        for (let c = 0; c < size; c++) {
            const seen = new Map<number, number[]>();
            for (let r = 0; r < size; r++) {
                const val = grid[r][c];
                if (val === null) continue;
                if (!seen.has(val)) seen.set(val, []);
                seen.get(val)!.push(r);
            }
            seen.forEach((rows) => {
                if (rows.length > 1) rows.forEach(r => errors.add(`${r}-${c}`));
            });
        }

        return errors;
    }, [grid, size]);

    // ── Streak ───────────────────────────────────────────────────────
    const updateStreak = () => {
        return updateStreakAndGetNew();
    };

    // ── Win check ────────────────────────────────────────────────────
    const checkWin = useCallback(
        (currentGrid: (number | null)[][]) => {
            if (!puzzle) return;

            for (let r = 0; r < size; r++)
                for (let c = 0; c < size; c++)
                    if (currentGrid[r][c] === null) return;

            for (let i = 0; i < size; i++) {
                const rowSet = new Set();
                const colSet = new Set();
                for (let j = 0; j < size; j++) {
                    rowSet.add(currentGrid[i][j]);
                    colSet.add(currentGrid[j][i]);
                }
                if (rowSet.size !== size || colSet.size !== size) return;
            }

            for (const cage of puzzle.cages) {
                const values = cage.cells.map(cell => currentGrid[cell.r][cell.c] as number);
                let result: number;
                if (cage.operation === 'none') result = values[0];
                else if (cage.operation === '+') result = values.reduce((a, b) => a + b, 0);
                else if (cage.operation === '*') result = values.reduce((a, b) => a * b, 1);
                else if (cage.operation === '-') result = Math.abs(values[0] - values[1]);
                else result = Math.max(values[0], values[1]) / Math.min(values[0], values[1]);
                if (result !== cage.target) return;
            }

            // Freeze timer
            if (sessionStartRef.current) {
                const sessionSeconds = Math.floor((Date.now() - sessionStartRef.current) / 1000);
                baseElapsedRef.current += sessionSeconds;
                sessionStartRef.current = null;
            }
            const finalElapsed = baseElapsedRef.current;
            setElapsed(finalElapsed);

            setIsSolved(true);
            updateStreak();

            // Save immediately
            saveState(size, currentGrid, finalElapsed, true);

            confetti({
                particleCount: 200,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
            });
        },
        [puzzle, size]
    );

    // ── Input ────────────────────────────────────────────────────────
    const handleInput = useCallback((num: number | null) => {
        if (!selected || isSolved) return;

        if (!hasStarted) {
            setHasStarted(true);
            baseElapsedRef.current = 0;
            sessionStartRef.current = Date.now();
        }

        const newGrid = grid.map(row => [...row]);
        newGrid[selected.r][selected.c] = num;
        setGrid(newGrid);
        checkWin(newGrid);
    }, [selected, isSolved, hasStarted, grid, checkWin]);

    // ── Keyboard ─────────────────────────────────────────────────────
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!selected || isSolved) return;
            if (e.key >= '1' && e.key <= size.toString()) {
                handleInput(parseInt(e.key));
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
                handleInput(null);
            } else if (e.key.startsWith('Arrow')) {
                e.preventDefault();
                const { r, c } = selected;
                if (e.key === 'ArrowUp') setSelected({ r: Math.max(0, r - 1), c });
                if (e.key === 'ArrowDown') setSelected({ r: Math.min(size - 1, r + 1), c });
                if (e.key === 'ArrowLeft') setSelected({ r, c: Math.max(0, c - 1) });
                if (e.key === 'ArrowRight') setSelected({ r, c: Math.min(size - 1, c + 1) });
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selected, isSolved, handleInput, size]);

    // ── Format ───────────────────────────────────────────────────────
    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const currentStreak = getEffectiveStreak();

    // ── Render ───────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950/50 py-6 px-4">
            <SEO
                title={`Daily ${size}×${size} KenKen - Brain Arena Challenge`}
                description={`Solve today's ${size}×${size} KenKen puzzle in the Brain Arena. New logic challenges every day at midnight IST.`}
                canonicalPath="/brain-training/kenken/"
            />

            <div className="max-w-2xl mx-auto space-y-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link to="/brain-training/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Brain className="text-blue-500" size={22} />
                                KenKen of the Day
                            </h1>
                            <p className="text-[11px] text-slate-500 font-medium italic uppercase tracking-wider">Brain Arena • {size}×{size} Grid</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <Clock size={14} className={cn("text-blue-500", hasStarted && !isSolved && "animate-pulse")} />
                            <span className="font-mono font-bold text-sm text-slate-700 dark:text-slate-300">
                                {formatTime(elapsed)}
                            </span>
                        </div>
                        <button
                            onClick={() => setShowHelp(true)}
                            className="p-2 text-slate-500 hover:text-blue-500 hover:bg-white dark:hover:bg-slate-900 rounded-xl transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                        >
                            <HelpCircle size={18} />
                        </button>
                    </div>
                </div>

                {/* Game Board */}
                <div className="bg-white dark:bg-slate-900 p-3 sm:p-5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                    <div
                        className="grid border-2 border-slate-900 dark:border-slate-600 mx-auto aspect-square"
                        style={{
                            gridTemplateColumns: `repeat(${size}, 1fr)`,
                            maxWidth: size > 6 ? '480px' : '440px',
                        }}
                    >
                        {Array.from({ length: size }).map((_, r) =>
                            Array.from({ length: size }).map((_, c) => {
                                const cage = puzzle?.cages.find(cg => cg.cells.find(cell => cell.r === r && cell.c === c));
                                const isCageTopLeft = cage?.cells[0].r === r && cage?.cells[0].c === c;
                                const hasRightNeighborInCage = cage?.cells.find(cell => cell.r === r && cell.c === c + 1);
                                const hasBottomNeighborInCage = cage?.cells.find(cell => cell.r === r + 1 && cell.c === c);
                                const isSelected = selected?.r === r && selected?.c === c;
                                const hasError = errorCells.has(`${r}-${c}`);
                                const cellValue = grid[r][c];

                                return (
                                    <div
                                        key={`${r}-${c}`}
                                        onClick={() => {
                                            if (isSolved) return;
                                            setSelected({ r, c });
                                            if (!hasStarted) {
                                                setHasStarted(true);
                                                baseElapsedRef.current = 0;
                                                sessionStartRef.current = Date.now();
                                            }
                                        }}
                                        className={cn(
                                            'relative aspect-square flex items-center justify-center font-bold cursor-pointer transition-colors duration-150 border border-slate-200/60 dark:border-slate-800/60 select-none',
                                            size > 6 ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl',
                                            hasError && !isSelected && 'bg-red-50 dark:bg-red-950/40',
                                            isSelected ? 'bg-blue-100 dark:bg-blue-900/30 ring-2 ring-inset ring-blue-500 z-10' : !hasError && 'hover:bg-slate-50 dark:hover:bg-slate-800/50',
                                            !hasRightNeighborInCage && c < size - 1 && 'border-r-2 border-r-slate-900 dark:border-r-slate-500',
                                            !hasBottomNeighborInCage && r < size - 1 && 'border-b-2 border-b-slate-900 dark:border-b-slate-500',
                                            isSolved && 'pointer-events-none'
                                        )}
                                    >
                                        {isCageTopLeft && (
                                            <span
                                                className={cn(
                                                    'absolute top-px left-1 font-bold text-slate-500 dark:text-slate-400 leading-none pointer-events-none',
                                                    size > 6 ? 'text-[7px] sm:text-[8px]' : 'text-[9px] sm:text-[11px]'
                                                )}
                                            >
                                                {cage?.target}
                                                {cage?.operation !== 'none' ? cage?.operation : ''}
                                            </span>
                                        )}
                                        <span
                                            className={cn(
                                                'transition-all duration-150',
                                                cellValue ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
                                                hasError && 'text-red-600 dark:text-red-400'
                                            )}
                                        >
                                            {cellValue}
                                        </span>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Win Overlay */}
                    {isSolved && (
                        <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500 z-20">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-green-500/20">
                                <Trophy size={32} className="text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight uppercase italic">
                                Genius!
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm font-medium">
                                Solved the {size}×{size} puzzle in{' '}
                                <span className="text-blue-600 dark:text-blue-400 font-bold">{formatTime(elapsed)}</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-sm mb-5">
                                <Link
                                    to="/brain-training/"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 text-sm uppercase italic tracking-widest"
                                >
                                    <ArrowLeft size={16} />
                                    Back to Arena
                                </Link>
                                <button
                                    onClick={() => setShowShare(true)}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold shadow-md transition-all active:scale-95 text-sm"
                                >
                                    <Share2 size={16} />
                                    Share
                                </button>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                <Zap size={14} className="fill-blue-500 text-blue-500" />
                                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest italic">
                                    Streak: {currentStreak} Day{currentStreak !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Number Pad */}
                {!isSolved && (
                    <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                        <div className={cn('grid gap-2', size <= 5 ? 'grid-cols-6' : 'grid-cols-5 sm:grid-cols-9')}>
                            {Array.from({ length: size }, (_, i) => i + 1).map(num => (
                                <button
                                    key={num}
                                    onClick={() => handleInput(num)}
                                    disabled={!selected}
                                    className={cn(
                                        'aspect-square rounded-xl font-bold text-lg transition-all duration-150 border-2 select-none',
                                        !selected
                                            ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white shadow-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5 active:scale-90 active:bg-blue-50 dark:active:bg-blue-900/20 cursor-pointer'
                                    )}
                                >
                                    {num}
                                </button>
                            ))}
                            <button
                                onClick={() => handleInput(null)}
                                disabled={!selected}
                                className={cn(
                                    'aspect-square rounded-xl font-bold transition-all duration-150 border-2 flex items-center justify-center select-none',
                                    !selected
                                        ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 shadow-sm hover:border-red-400 hover:text-red-500 hover:shadow-md hover:-translate-y-0.5 active:scale-90 active:bg-red-50 dark:active:bg-red-900/20 cursor-pointer'
                                )}
                            >
                                <Eraser size={20} />
                            </button>
                        </div>
                        {!selected && (
                            <p className="text-center text-[11px] text-slate-400 mt-3 font-medium">
                                Tap a cell on the grid, then select a number
                            </p>
                        )}
                    </div>
                )}

                {/* Footer */}
                <div className="text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pb-4">
                    <p>New puzzle at 12:00 AM IST • Use keyboard 1‑{size} or tap numbers</p>
                </div>
            </div>

            {showHelp && <KenKenHelp onClose={() => setShowHelp(false)} />}
            {showShare && (
                <KenKenShareModal
                    isOpen={showShare}
                    onClose={() => setShowShare(false)}
                    size={size}
                    elapsed={formatTime(elapsed)}
                    streak={currentStreak}
                    date={getTodayISTFormatted()}
                />
            )}
        </div>
    );
}
