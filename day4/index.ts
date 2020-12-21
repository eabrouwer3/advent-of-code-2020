import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const problem1 = async () => {
    const text = await Deno.readTextFile('./day4/input.txt');
    const passports = text.split('\n\n');
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort();
    return R.sum(
        passports.map(pass => {
            const fields = pass.split(/[\n ]/g).map(s => s.split(':')[0]).filter(f => requiredFields.includes(f));
            return R.equals(requiredFields, fields.sort());
        })
    );
}

const problem2 = async () => {
    const text = await Deno.readTextFile('./day4/input.txt');
    const passports = text.split('\n\n');
    type Field = 'byr' | 'iyr' | 'eyr' | 'hgt' | 'hcl' | 'ecl' | 'pid';
    const requiredFields = {
        byr: (byr: string) => +byr >= 1920 && +byr <= 2002 && byr.length === 4,
        iyr: (iyr: string) => +iyr >= 2010 && +iyr <= 2020 && iyr.length === 4,
        eyr: (eyr: string) => +eyr >= 2020 && +eyr <= 2030 && eyr.length === 4,
        hgt: (hgt: string) => (hgt.slice(-2) === 'cm' && +hgt.slice(0, -2) >= 150 && +hgt.slice(0, -2) <= 193)
                                || (hgt.slice(-2) === 'in' && +hgt.slice(0, -2) >= 59 && +hgt.slice(0, -2) <= 76),
        hcl: (hcl: string) => /^#[0-9a-f]{6}$/.test(hcl),
        ecl: (ecl: string) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
        pid: (pid: string) => /^\d{9}$/.test(pid)
    };
    return R.sum(
        passports.map(pass => {
            const fields = Object.fromEntries(pass.split(/[\n ]/g).map(s => s.split(':')).filter(f => Object.keys(requiredFields).includes(f[0])));
            if (R.equals(Object.keys(fields).sort(), Object.keys(requiredFields).sort())) {
                return R.all(R.identity, Object.keys(fields).map((f) => requiredFields[f as Field](fields[f])));
            }
            return false;
        })
    );
};

export { problem1, problem2 };