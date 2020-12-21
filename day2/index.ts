import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day2/input.txt');
    const vals = text.split('\n').map(row => {
        const [rule1, rule2, pass] = row.split(' ');
        const [low, high] = rule1.split('-').map(n => +n);
        const letter = rule2[0];
        const count = (pass.match(new RegExp(letter, 'g')) || []).length;
        return count >= low && count <= high;
    });
    return R.sum(vals);
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day2/input.txt');
    const vals = text.split('\n').map(row => {
        const [rule1, rule2, pass] = row.split(' ');
        const [a, b] = rule1.split('-').map(n => +n);
        const letter = rule2[0];
        return (pass[a - 1] === letter && pass[b - 1] !== letter) || (pass[a - 1] !== letter && pass[b - 1] === letter)
    });
    return R.sum(vals);
};

export { problem1, problem2 };