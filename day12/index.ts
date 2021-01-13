import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day12/input.txt');
    const directions = text.split('\n').map(s => [s[0], +s.substr(1)]);
    // @ts-ignore
    const position = directions.reduce(([ew, ns, curDir]: number[], [dir, num]: ['N' | 'S' | 'E' | 'W' | 'L' | 'R' | 'F', number]) => ({
        'N': [ew, ns + num, curDir],
        'S': [ew, ns - num, curDir],
        'E': [ew + num, ns, curDir],
        'W': [ew - num, ns, curDir],
        'L': [ew, ns, (curDir - num + 360) % 360],
        'R': [ew, ns, (curDir + num) % 360],
        'F': [curDir === 0 ? ew + num : curDir === 180 ? ew - num : ew, curDir === 90 ? ns - num : curDir === 270 ? ns + num : ns, curDir]
    }[dir]), [0, 0, 0]);
    // @ts-ignore
    return R.sum(position.map(Math.abs).slice(0, 2));
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day12/input.txt');
    const directions = text.split('\n').map(s => [s[0], +s.substr(1)]);
    // @ts-ignore
    const position = directions.reduce(([ewS, nsS, ewW, nsW]: number[], [dir, num]: ['N' | 'S' | 'E' | 'W' | 'L' | 'R' | 'F', number]) => ({
        'N': [ewS, nsS, ewW, nsW + num],
        'S': [ewS, nsS, ewW, nsW - num],
        'E': [ewS, nsS, ewW + num, nsW],
        'W': [ewS, nsS, ewW - num, nsW],
        'L': [ewS, nsS, num === 90 ? -nsW : num === 180 ? -ewW : num === 270 ? nsW : ewW, num === 90 ? ewW : num === 180 ? -nsW : num === 270 ? -ewW : nsW],
        'R': [ewS, nsS, num === 90 ? nsW : num === 180 ? -ewW : num === 270 ? -nsW : ewW, num === 90 ? -ewW : num === 180 ? -nsW : num === 270 ? ewW : nsW],
        'F': [ewS + ewW * num, nsS + nsW * num, ewW, nsW]
    }[dir]), [0, 0, 10, 1]);
    console.log(position);
    // @ts-ignore
    return R.sum(position.map(Math.abs).slice(0, 2));
};

export { problem1, problem2 };