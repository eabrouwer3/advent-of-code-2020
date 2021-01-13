import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const solver = async (right: number, down: number) => {
    const text = await Deno.readTextFile('./day03/input.txt');
    const map = text.split('\n').map(s => s.split(''));
    const rowLen = map[0].length;
    return R.reduce(([count, i]: [number, number], row: string[]) => row[i % rowLen] === '#' ? [count + 1, i + right] : [count, i + right], [0, 0], map.filter((_, i) => i % down === 0))[0];
};

const problem1 = async () => {
    return solver(3, 1);
}

const problem2 = async () => {
    return R.reduce((prod: number, num: number) => prod * num, 1, await Promise.all([
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ].map(async (trial) => solver(trial[0], trial[1]))));
};

export { problem1, problem2 };