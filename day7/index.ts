import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day7/input.txt');
    const rules = text.split('\n');
    const parsedRules = R.reduce(R.mergeDeepWith(R.concat, R.__, R.__), {}, rules.map(rule => {
        const [bag, contains] = rule.split(' bags contain ');
        if (contains !== 'no other bags.') {
            const strSplit = contains.split(', ');
            return Object.fromEntries(strSplit.map(s => [(s.match(/[0-9]+ ([a-z]+ [a-z]+) bags?\.?/) || []).slice(-1), [bag]]));
        }
        return null;
    }).filter(a => a !== null));
    const count = (key: string) => {
        if (parsedRules[key]) {
            return R.concat(parsedRules[key], parsedRules[key].map(count));
        }
        return [];
    }
    return R.flatten(count('shiny gold')).filter((x: string, i: number, a: string[]) => a.indexOf(x) === i).length;
}

const problem2 = async () => {
    const text = await Deno.readTextFile('./day7/input.txt');
    const rules = text.split('\n');
    const parsedRules = Object.fromEntries(rules.map(rule => {
        const [bag, contains] = rule.split(' bags contain ');
        if (contains !== 'no other bags.') {
            const strSplit = contains.split(', ');
            return [bag, strSplit.map(s => {
                const [count, color] = (s.match(/([0-9]+) ([a-z]+ [a-z]+) bags?\.?/) || []).slice(1);
                return {count: +count, color};
            })];
        }
        return [bag, null];
    }));
    const count = (key: string) => {
        const rule = parsedRules[key];
        if (rule) {
            const counts = R.pluck('count', rule);
            return R.sum(counts) + R.sum(R.zipWith(R.multiply, counts, R.map(count, R.pluck('color', rule))));
        }
        return 0;
    };
    return count('shiny gold');
};

export { problem1, problem2 };