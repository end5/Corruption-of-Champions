
/**
 * Assume scale = [[0,"small"],[5,"average"],[10,"big"]]
 *      value < 0   ->   "less than small"
 *      value = 0   ->   "small"
 *  0 < value < 5   ->   "between small and average"
 *      value = 5   ->   "average"
 *  5 < value < 10  ->   "between average and big"
 *      value = 10  ->   "big"
 *      value > 10  ->   "more than big"
 */
export function describeByScale(value: number, scale: any[], lessThan: string = "less than", moreThan: string = "more than"): string {
    if (scale.length == 0) return "undescribeale";
    if (scale.length == 1) return "about " + scale[0][1];
    if (value < scale[0][0]) return lessThan + " " + scale[0][1];
    if (value == scale[0][0]) return scale[0][1];
    for (const i = 1; i < scale.length; i++) {
        if (value < scale[i][0]) return "between " + scale[i - 1][1] + " and " + scale[i][1];
        if (value == scale[i][0]) return scale[i][1];
    }
    return moreThan + " " + scale[scale.length - 1][1];
}

/**
 * numberOfThings(0,"brain") = "no brains"
 * numberOfThings(1,"head") = "one head"
 * numberOfThings(2,"tail") = "2 tails"
 * numberOfThings(3,"hoof","hooves") = "3 hooves"
 */
export function numberOfThings(n: number, name: string, pluralForm: string = null): string {
    pluralForm = pluralForm || (name + "s");
    if (n == 0) return "no " + pluralForm;
    if (n == 1) return "one " + name;
    return n + " " + pluralForm;
}

/**
 * 13 -> 2'1"
 * 5.5 -> 5.5"
 * Positive only!
 */
export function feetsAndInches(n: number): string {
    const feet: number = Math.floor(n / 12);
    const inches: number = n - feet * 12;
    if (feet > 0) return feet + "'" + inches + "\"";
    else return inches + "\"";
}

/**
 * 13 -> 13" (2'1")
 */
export function inchesAndFeetsAndInches(n: number): string {
    if (n < 12) return n + "\"";
    return n + "\" (" + feetsAndInches(n) + ")";
}
