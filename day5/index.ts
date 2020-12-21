import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const getSeat = (seat: string) => {
    let [low, high] = [0, 127];
    let [left, right] = [0, 7];
    for (let c of seat) {
        if (c === 'F')
            high = (low + high) / 2 - 0.5;
        if (c === 'B')
            low = (low + high) / 2 + 0.5;
        if (c === 'R')
            left = (left + right) / 2 + 0.5;
        if (c === 'L')
            right = (left + right) / 2 - 0.5;
    }
    return [low, left];
}

const problem1 = async () => {
    const text = await Deno.readTextFile('./day5/input.txt');
    const seats = text.split('\n');
    const ids = seats.map(seat => {
        const [row, col] = getSeat(seat);
        return row * 8 + col;
    });
    return Math.max(...ids);
}

const problem2 = async () => {
    const text = await Deno.readTextFile('./day5/input.txt');
    const seats = text.split('\n');
    const chart = Array(128).fill('_').map(() => Array(8).fill('_'));
    seats.forEach(seat => {
        const [row, col] = getSeat(seat);
        chart[row][col] = 'X';
    });
    // console.log(`[ ${chart.map(row => `[ ${row.join(', ')} ]`).join('\n')} ]`);
    for (let i = 0; i < 128; i++) {
        // @ts-ignore
        if (chart[i].filter(R.equals('_')).length === 1) {
            return i * 8 + chart[i].indexOf('_');   
        }
    }
};

export { problem1, problem2 };