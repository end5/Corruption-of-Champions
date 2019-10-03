/**
 * Created by aimozg on 18.01.14.
 */

const NUMBER_WORDS_NORMAL = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const NUMBER_WORDS_CAPITAL = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const NUMBER_WORDS_POSITIONAL = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];

// curryFunction(f,args1)(args2)=f(args1.concat(args2))
// e.g. curryFunction(f,x,y)(z,w) = f(x,y,z,w)
export function curry<A0, A extends any[], R>(func: (arg0: A0, ...args: A) => R, arg0: A0): (...args: A) => R;
export function curry<A0, A1, A extends any[], R>(func: (arg0: A0, arg1: A1, ...args: A) => R, arg0: A0, arg1: A1): (...args: A) => R;
export function curry<A0, A1, A2, A extends any[], R>(func: (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;
export function curry<A0, A1, A2, A3, A extends any[], R>(func: (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R;
export function curry<AX, R>(func: (...args: AX[]) => R, ...args: AX[]): (...args: AX[]) => R {
    return (...args2) => {
        return func.apply(null, [...args, ...args2]);
    };
}

export function formatStringArray(stringList: string[]): string { // Changes an array of values into "1", "1 and 2" or "1, (x, )y and z"
    switch (stringList.length) {
        case 0: return "";
        case 1: return stringList[0];
        case 2: return stringList[0] + " and " + stringList[1];
        default:
    }
    let concat: string = stringList[0];
    for (const x = 1; x < stringList.length - 1; x++) concat += ", " + stringList[x];
    return concat + " and " + stringList[stringList.length - 1];
}

export function num2Text(num: number): string {
    if (num >= 0 && num <= 10) return NUMBER_WORDS_NORMAL[num];
    return num.toString();
}

export function num2Text2(num: number): string {
    if (num < 0) return num.toString(); // Can't really have the -10th of something
    if (num <= 10) return NUMBER_WORDS_POSITIONAL[num];
    switch (num % 10) {
        case 1: return num.toString() + "st";
        case 2: return num.toString() + "nd";
        case 3: return num.toString() + "rd";
        default:
    }
    return num.toString() + "th";
}

export function Num2Text(num: number): string {
    if (num >= 0 && num <= 10) return NUMBER_WORDS_CAPITAL[num];
    return num.toString();
}

// Basically, you pass an arbitrary-length list of arguments, and it returns one of them at random.
// Accepts any type.
// Can also accept a *single* array of items, in which case it picks from the array instead.
// This lets you pre-construct the argument, to make things cleaner
export function randomChoice(...args): any {
    let choice: number;
    if ((args.length == 1) && (args[0] instanceof Array)) {
        choice = int(Math.round(Math.random() * (args[0].length - 1)));
        return args[0][choice];
    }
    else {
        choice = int(Math.round(Math.random() * (args.length - 1)));
        return args[choice];
    }
}

export function rand(max: number): number {
    return int(Math.random() * max);
}

export function validateNonNegativeNumberFields(o: Record<string, any>, func: string, nnf: any[]): string {
    let error: string = "";
    for (const field of nnf) {
        if (!o.hasOwnProperty(field) || !(o[field] instanceof Number) && o[field] != null) error += "Misspelling in " + func + ".nnf: '" + field + "'. ";
        else if (o[field] == null) error += "Null '" + field + "'. ";
        else if (o[field] < 0) error += "Negative '" + field + "'. ";
    }
    return error;
}

export function validateNonEmptyStringFields(o: Record<string, any>, func: string, nef: any[]): string {
    let error: string = "";
    for (const field of nef) {
        if (!o.hasOwnProperty(field) || !(o[field] instanceof String) && o[field] != null) error += "Misspelling in " + func + ".nef: '" + field + "'. ";
        else if (o[field] == null) error += "Null '" + field + "'. ";
        else if (o[field] == "") error += "Empty '" + field + "'. ";
    }
    return error;
}

export function int(num: number) {
    return Math.floor(num);
}
