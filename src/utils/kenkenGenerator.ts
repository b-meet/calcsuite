/**
 * KenKen Generator Logic
 * 
 * 1. Creates a 6x6 latin square using seed-based randomization.
 * 2. Partitions the grid into cages of size 1-4.
 * 3. Assigns arithmetic operations to each cage based on the underlying values.
 */

export type Operation = '+' | '-' | '*' | '/' | 'none';

export interface Cage {
    id: string;
    target: number;
    operation: Operation;
    cells: { r: number; c: number }[];
}

export interface KenKenPuzzle {
    date: string;
    size: number;
    solution: number[][];
    cages: Cage[];
}

// Simple seed-based random generator (Xorshift)
class SeededRandom {
    private seed: number;

    constructor(seed: string) {
        let h = 1779033703 ^ seed.length;
        for (let i = 0; i < seed.length; i++) {
            h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
            h = (h << 13) | (h >>> 19);
        }
        this.seed = h >>> 0;
    }

    next(): number {
        this.seed ^= this.seed << 13;
        this.seed ^= this.seed >>> 17;
        this.seed ^= this.seed << 5;
        return (this.seed >>> 0) / 4294967296;
    }

    shuffle<T>(array: T[]): T[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(this.next() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
}

export function generateDailyPuzzle(size: number = 6): KenKenPuzzle {
    // Get date string in IST
    const dateStr = new Date().toLocaleDateString('en-GB', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).split('/').reverse().join('-');

    const rng = new SeededRandom(dateStr);

    // 1. Generate a valid Latin Square by shifting rows of a shuffled 1..size array
    const baseRow = rng.shuffle(Array.from({ length: size }, (_, i) => i + 1));
    const solution: number[][] = [];
    
    // Shift rows by prime numbers or similar logic to keep it a latin square
    for (let r = 0; r < size; r++) {
        const shift = (r * 2 + Math.floor(r / 3)) % size; // Simple shift logic
        const row = [...baseRow.slice(shift), ...baseRow.slice(0, shift)];
        solution.push(row);
    }

    // Shuffle rows and cols to add randomness while maintaining Latin Square integrity
    const rowIndices = rng.shuffle(Array.from({ length: size }, (_, i) => i));
    const colIndices = rng.shuffle(Array.from({ length: size }, (_, i) => i));

    const finalGrid: number[][] = Array.from({ length: size }, () => Array(size).fill(0));
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            finalGrid[r][c] = solution[rowIndices[r]][colIndices[c]];
        }
    }

    // 2. Partition into Cages
    const cages: Cage[] = [];
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    let cageId = 0;

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (visited[r][c]) continue;

            const cageCells: { r: number; c: number }[] = [];
            let currentR = r;
            let currentC = c;

            // Randomly decide cage size (1-4)
            const maxCageSize = Math.floor(rng.next() * 3) + 2; // 2, 3, or 4
            
            cageCells.push({ r: currentR, c: currentC });
            visited[currentR][currentC] = true;

            for (let i = 1; i < maxCageSize; i++) {
                const neighbors = [
                    { nr: currentR + 1, nc: currentC },
                    { nr: currentR - 1, nc: currentC },
                    { nr: currentR, nc: currentC + 1 },
                    { nr: currentR, nc: currentC - 1 }
                ].filter(n => 
                    n.nr >= 0 && n.nr < size && 
                    n.nc >= 0 && n.nc < size && 
                    !visited[n.nr][n.nc]
                );

                if (neighbors.length === 0) break;

                const choice = neighbors[Math.floor(rng.next() * neighbors.length)];
                cageCells.push({ r: choice.nr, c: choice.nc });
                visited[choice.nr][choice.nc] = true;
                currentR = choice.nr;
                currentC = choice.nc;
            }

            // 3. Assign Operation and Target
            const values = cageCells.map(cell => finalGrid[cell.r][cell.c]);
            let target: number;
            let operation: Operation;

            if (cageCells.length === 1) {
                target = values[0];
                operation = 'none';
            } else if (cageCells.length === 2) {
                const [a, b] = values;
                const ops: Operation[] = ['+', '-', '*', '/'];
                const validOps = ops.filter(op => {
                    if (op === '-') return Math.abs(a - b) > 0;
                    if (op === '/') return a / b === Math.floor(a / b) || b / a === Math.floor(b / a);
                    return true;
                });
                
                operation = validOps[Math.floor(rng.next() * validOps.length)];
                
                if (operation === '+') target = a + b;
                else if (operation === '-') target = Math.abs(a - b);
                else if (operation === '*') target = a * b;
                else target = Math.max(a, b) / Math.min(a, b);
            } else {
                // Size 3 or 4: Always + or * for simplicity and solvability
                operation = rng.next() > 0.6 ? '*' : '+';
                if (operation === '+') {
                    target = values.reduce((acc, v) => acc + v, 0);
                } else {
                    target = values.reduce((acc, v) => acc * v, 1);
                }
            }

            cages.push({
                id: `cage-${cageId++}`,
                target,
                operation,
                cells: cageCells
            });
        }
    }

    return {
        date: dateStr,
        size,
        solution: finalGrid,
        cages
    };
}
