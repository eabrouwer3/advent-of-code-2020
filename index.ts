import day1 from './day1/index.ts';
import {problem1 as day2_1, problem2 as day2_2} from "./day2/index.ts";
import {problem1 as day3_1, problem2 as day3_2} from "./day3/index.ts";
import {problem1 as day4_1, problem2 as day4_2} from "./day4/index.ts";
import {problem1 as day5_1, problem2 as day5_2} from "./day5/index.ts";
import {problem1 as day6_1, problem2 as day6_2} from "./day6/index.ts";
import {problem1 as day7_1, problem2 as day7_2} from "./day7/index.ts";
import {problem1 as day8_1, problem2 as day8_2} from "./day8/index.ts";
import {problem1 as day9_1, problem2 as day9_2} from "./day9/index.ts";
import {problem1 as day10_1, problem2 as day10_2} from "./day10/index.ts";
import {problem1 as day11_1, problem2 as day11_2} from "./day11/index.ts";

const runAll = async () => {
    console.log('Day 01 Problem 1');
    console.log(await day1(2));
    console.log('Day 01 Problem 2');
    console.log(await day1(3));

    console.log('Day 02 Problem 1');
    console.log(await day2_1());
    console.log('Day 02 Problem 2');
    console.log(await day2_2());

    console.log('Day 03 Problem 1');
    console.log(await day3_1());
    console.log('Day 03 Problem 2');
    console.log(await day3_2());

    console.log('Day 04 Problem 1');
    console.log(await day4_1());
    console.log('Day 04 Problem 2');
    console.log(await day4_2());

    console.log('Day 05 Problem 1');
    console.log(await day5_1());
    console.log('Day 05 Problem 2');
    console.log(await day5_2());

    console.log('Day 06 Problem 1');
    console.log(await day6_1());
    console.log('Day 06 Problem 2');
    console.log(await day6_2());

    console.log('Day 07 Problem 1');
    console.log(await day7_1());
    console.log('Day 07 Problem 2');
    console.log(await day7_2());

    console.log('Day 08 Problem 1');
    console.log(await day8_1());
    console.log('Day 08 Problem 2');
    console.log(await day8_2());

    console.log('Day 09 Problem 1');
    console.log(await day9_1());
    console.log('Day 09 Problem 2');
    console.log(await day9_2());

    console.log('Day 10 Problem 1');
    console.log(await day10_1());
    console.log('Day 10 Problem 2');
    console.log(await day10_2());

    console.log('Day 11 Problem 1');
    console.log(await day11_1());
    console.log('Day 11 Problem 2');
    console.log(await day11_2());
};

runAll().catch(console.error);