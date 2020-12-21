import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day11/input.txt');
    const seats = text.split('\n').map(r => r.split(''));
    const applyRule = (curSeats: string[][]) => {
        return curSeats.map((row, i) => row.map((val, j) => {
            const adjacent = [
                i > 0 ? curSeats[i-1][j] : '.',
                i > 0 && j > 0 ? curSeats[i-1][j-1] : '.',
                i > 0 && j < row.length - 1 ? curSeats[i-1][j+1] : '.',
                j > 0 ? curSeats[i][j-1] : '.',
                j < row.length - 1 ? curSeats[i][j+1] : '.',
                i < curSeats.length - 1 ? curSeats[i+1][j] : '.',
                i < curSeats.length - 1 && j > 0 ? curSeats[i+1][j-1] : '.',
                i < curSeats.length - 1 && j < row.length - 1 ? curSeats[i+1][j+1] : '.'
            ];
            if (val === 'L' && adjacent.filter(s => s === '#').length === 0) {
                return '#';
            } else if (val === '#' && adjacent.filter(s => s === '#').length >= 4) {
                return 'L';
            } else {
                return val;
            }
        }));
    };
    const countEmpty = (curSeats: string[][]) => R.sum(curSeats.map(row => row.filter(v => v === '#').length));
    let curSeats = seats;
    while (true) {
        const newSeats = applyRule(curSeats);
        if (R.equals(newSeats, curSeats)) {
            return countEmpty(newSeats);
        }
        curSeats = newSeats;
    }
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day11/input.txt');
    const seats = text.split('\n').map(r => r.split(''));
    const applyRule = (curSeats: string[][]) => {
        return curSeats.map((row, i) => row.map((val, j) => {
            // TODO: Doesn't work, but I'd like it to
            // const followToEdge = (i_dir: 'top' | 'bottom' | null, j_dir: 'left' | 'right' | null) => {
            //     let k = i_dir === 'top' ? i - 1 : i_dir === 'bottom' ? i + 1 : i;
            //     let l = j_dir === 'left' ? j - 1 : j_dir === 'right' ? j + 1 : j;
            //     while (((i_dir === 'top' && k >= 0) || (i_dir === 'bottom' && k < curSeats.length)) && ((j_dir === 'left' && l >= 0) || (j_dir === 'right' && l < row.length))) {
            //         if (curSeats[k][l] !== '.') {
            //             return curSeats[k][l];
            //         }
            //         if (i_dir === 'top') k--;
            //         if (i_dir === 'bottom') k++;
            //         if (j_dir === 'left') l--;
            //         if (j_dir === 'right') l++;
            //     }
            //     return '.';
            // };
            //
            // const adjacent = [
            //     followToEdge('top', 'left'),
            //     followToEdge('top', null),
            //     followToEdge('top', 'right'),
            //     followToEdge(null, 'left'),
            //     followToEdge(null, 'right'),
            //     followToEdge('bottom', 'left'),
            //     followToEdge('bottom', null),
            //     followToEdge('bottom', 'right')
            // ];

            let a, b, c, d, e, f, g, h, k, l;

            // Top
            k = i - 1;
            while (k >= 0) {
                if (curSeats[k][j] !== '.') {
                    a = curSeats[k][j];
                    break;
                }
                k--;
            }
            if (k < 0) a = '.';

            // Top Left
            k = i - 1;
            l = j - 1;
            while (k >= 0 && l >= 0) {
                if (curSeats[k][l] !== '.') {
                    b = curSeats[k][l];
                    break;
                }
                k--;
                l--;
            }
            if (k < 0 || l < 0) b = '.';

            // Top Right
            k = i - 1;
            l = j + 1;
            while (k >= 0 && l < row.length) {
                if (curSeats[k][l] !== '.') {
                    c = curSeats[k][l];
                    break;
                }
                k--;
                l++;
            }
            if (k < 0 || l >= row.length) c = '.';

            // Left
            l = j - 1;
            while (l >= 0) {
                if (curSeats[i][l] !== '.') {
                    d = curSeats[i][l];
                    break;
                }
                l--;
            }
            if (l < 0) d = '.';

            // Right
            l = j + 1;
            while (l < row.length) {
                if (curSeats[i][l] !== '.') {
                    e = curSeats[i][l];
                    break;
                }
                l++;
            }
            if (l >= row.length) e = '.';

            // Bottom
            k = i + 1;
            while (k < curSeats.length) {
                if (curSeats[k][j] !== '.') {
                    f = curSeats[k][j];
                    break;
                }
                k++;
            }
            if (k >= curSeats.length) f = '.';

            // Bottom Left
            k = i + 1;
            l = j - 1;
            while (k < curSeats.length && l >= 0) {
                if (curSeats[k][l] !== '.') {
                    g = curSeats[k][l];
                    break;
                }
                k++;
                l--;
            }
            if (k >= curSeats.length || l < 0) g = '.';

            // Bottom Right
            k = i + 1;
            l = j + 1;
            while (k < curSeats.length && l < row.length) {
                if (curSeats[k][l] !== '.') {
                    h = curSeats[k][l];
                    break;
                }
                k++;
                l++;
            }
            if (k >= curSeats.length || l >= row.length) h = '.';

            const adjacent = [a, b, c, d, e, f, g, h];
            if (val === 'L' && adjacent.filter(s => s === '#').length === 0) {
                return '#';
            } else if (val === '#' && adjacent.filter(s => s === '#').length >= 5) {
                return 'L';
            } else {
                return val;
            }
        }));
    };
    const countEmpty = (curSeats: string[][]) => R.sum(curSeats.map(row => row.filter(v => v === '#').length));
    let curSeats = seats;
    while (true) {
        const newSeats = applyRule(curSeats);
        if (R.equals(newSeats, curSeats)) {
            return countEmpty(newSeats);
        }
        curSeats = newSeats;
    }
};

export { problem1, problem2 };