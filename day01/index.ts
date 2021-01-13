const problem = async (n: number) => {
    const text = await Deno.readTextFile('./day01/input.txt');
    const nums = text.split('\n').map(n => +n);
    for (let i of nums) {
        for (let j of nums) {
            if (n === 3) {
                for (let k of nums) {
                    if (i + j + k === 2020)
                        return i * j * k;
                }
            } else {
                if (i + j === 2020)
                    return i * j;
            }
        }
    }
    return 0;
};

export default problem;