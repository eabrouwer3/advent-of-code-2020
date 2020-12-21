import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day10/input.txt');
    const nums = text.split('\n').map(n => +n).sort((a, b) => a - b);
    const diffs = nums.map((n, i) => nums[i-1] ? n - nums[i-1] : n);
    return diffs.filter(n => n === 1).length * (diffs.filter(n => n === 3).length + 1);
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day10/input.txt');
    const input = text.split('\n').map(n => +n).sort((a, b) => a - b);
    const nums = [0, ...input, Math.max(...input) + 3];
    const count = R.memoizeWith(R.identity, (i: number): number => {
        if (i === nums.length) return 0;
        if (nums[i+2] - nums[i] <= 3) {
            if (nums[i+3] - nums[i] <= 3) {
                return 2 + count(i+3) + count(i+2) + count(i+1);
            }
            return 1 + count(i+2) + count(i+1);
        }
        return count(i+1);
    });
    return 1 + count(0);
};

export { problem1, problem2 };