import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day9/input.txt');
    const nums = text.split('\n').map(n => +n);
    const canSum = (n: number) => {
        for (let i of nums.slice(n-25, n)) {
            for (let j of nums.slice(n-25, n)) {
                if (i !== j && i + j === nums[n]) {
                    return true;
                }
            }
        }
        return false;
    };
    let n = 25;
    while (canSum(n)) {
        n++;
    }
    return nums[n];
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day9/input.txt');
    const nums = text.split('\n').map(n => +n);
    const invalidNum = await problem1();
    for (let i = 0;; i++) {
        let sum = nums[i];
        for (let j = i + 1; sum < invalidNum; j++) {
            sum += nums[j];
            if (sum === invalidNum) {
                const slice = nums.slice(i, j+1);
                return Math.max(...slice) + Math.min(...slice);
            }
        }
    }
};

export { problem1, problem2 };