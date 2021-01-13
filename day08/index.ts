import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day08/input.txt');
    const commands = text.split('\n').map((s): [string, number] => {
        const [command, num] = s.split(' ');
        return [command, +num];
    });
    const indices: number[] = [];
    let acc = 0;
    for (let i = 0;;) {
        if (indices.includes(i)) {
            return acc;
        }
        indices.push(i);
        const [command, num] = commands[i];
        if (command === 'acc') {
            acc += num;
            i++;
        } else if (command === 'nop') {
            i++;
        } else if (command === 'jmp') {
            i += num;
        }
    }
};

const problem2 = async () => {
    const text = await Deno.readTextFile('./day08/input.txt');
    const commands = text.split('\n').map((s): [string, number] => {
        const [command, num] = s.split(' ');
        return [command, +num];
    });
    const test = (j: number) => {
        const changedCommands = commands.map(([command, num], i): [string, number] => i === j ? [command === 'jmp' ? 'nop' : command === 'nop' ? 'jmp' : 'acc', num] : [command, num]);
        const indices: number[] = [];
        let acc = 0;
        for (let i = 0;;) {
            if (i >= changedCommands.length) {
                return acc;
            }
            if (indices.includes(i)) {
                return -1;
            }
            indices.push(i);
            const [command, num] = changedCommands[i];
            if (command === 'acc') {
                acc += num;
                i++;
            } else if (command === 'nop') {
                i++;
            } else if (command === 'jmp') {
                i += num;
            }
        }
    };
    // return test(152);
    for (let j = 0;; j++) {
        const acc = test(j);
        if (acc > 0) {
            return acc;
        }
    }
};

export { problem1, problem2 };