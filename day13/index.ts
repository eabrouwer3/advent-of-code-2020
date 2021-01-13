import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day13/input.txt');
    const [time, busses] = text.split('\n');
    console.log(time)
    // @ts-ignore
    return R.multiply(...R.reduce(R.minBy(R.nth(0)), [100000, 0], busses.split(',').filter(b => b !== 'x').map(b => [(+b) - ((+time) % (+b)), +b])));
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day13/input.txt');
    const busses = text.split('\n')[1].split(',');
};

export { problem1, problem2 };