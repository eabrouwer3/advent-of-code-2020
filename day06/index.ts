import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day06/input.txt');
    const groups = text.split('\n\n');
    return R.sum(
        groups.map(group =>
            R.flatten(group.split(/\s/g)
                .map(ans => ans.split('')))
                .filter((x: string, i: number, a: string[]) => a.indexOf(x) === i)
                .length
        )
    );
}

const problem2 = async () => {
    const text = await Deno.readTextFile('./day06/input.txt');
    const groups = text.split('\n\n');
    return R.sum(
        groups.map(group => {
            const people = group.split(/\n/g);
            return people.slice(1).reduce((prev, cur, arr) => prev.filter(c => cur.split('').includes(c)), people[0].split('')).length;
        })
    );
};

export { problem1, problem2 };