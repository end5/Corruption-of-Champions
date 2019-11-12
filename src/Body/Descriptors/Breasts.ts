
export function breastCup(size: number): string {
    return BREAST_CUP_NAMES[Math.min(Math.floor(size), BREAST_CUP_NAMES.length - 1)];
}

/**
 * Returns breast size from cup name.
 * Acceptable input: "flat","A","B","C","D","DD","DD+",... "ZZZ","ZZZ+" or exact match from BREAST_CUP_NAMES array
 */
export function breastCupInverse(name: string, defaultValue: number = 0): number {
    if (name.length == 0) return defaultValue;
    if (name == "flat") return 0;
    const big: boolean = name.charAt(name.length - 1) == "+";
    if (big) name = name.substr(0, name.length - 1);
    for (let i = 0; i < BREAST_CUP_NAMES.length; i++) {
        if (name == BREAST_CUP_NAMES[i]) return i;
        if (BREAST_CUP_NAMES[i].indexOf(name) == 0) return i + (big ? 1 : 0);
    }
    return defaultValue;
}

export function allBreastsDescript(creature: Character): string {
    let storage: string = "";
    if (creature.breastRows.length == 0) return "unremarkable chest muscles ";
    if (creature.breastRows.length == 2) {
        // if(creature.breastRows.totalBreasts() == 4) storage += "quartet of ";
        storage += "two rows of ";
    }
    if (creature.breastRows.length == 3) {
        if (rand(2) == 0) storage += "three rows of ";
        else storage += "multi-layered ";
    }
    if (creature.breastRows.length == 4) {
        if (rand(2) == 0) storage += "four rows of ";
        else storage += "four-tiered ";
    }
    if (creature.breastRows.length == 5) {
        if (rand(2) == 0) storage += "five rows of ";
        else storage += "five-tiered ";
    }
    storage += biggestBreastSizeDescript(creature);
    return storage;

}

export function biggestBreastSizeDescript(creature: Character): string {
    let temp14: number = Math.random() * 3;
    let descript: string = "";
    const temp142: number = creature.breastRows.biggestTitRow();
    // ERROR PREVENTION
    if (creature.breastRows.length - 1 < temp142) {
        Logger.error("");
        return "<b>ERROR, biggestBreastSizeDescript() working with invalid breastRow</b>";
    }
    else if (temp142 < 0) {
        Logger.error("");
        return "ERROR SHIT SON!  BIGGESTBREASTSIZEDESCRIPT PASSED NEGATIVE!";
    }
    if (creature.breastRows[temp142].breastRating < 1) return "flat breasts";
    // 50% of the time size-descript them
    if (rand(2) == 0) descript += breastSize(creature.breastRows[temp142].breastRating);
    // Nouns!
    temp14 = rand(10);
    if (temp14 == 0) descript += "breasts";
    if (temp14 == 1) {
        if (creature.breastRows[temp142].lactationMultiplier > 2) descript += "milk-udders";
        else descript += "breasts";
    }
    if (temp14 == 2) {
        if (creature.breastRows[temp142].lactationMultiplier > 1.5) descript += "milky ";
        if (creature.breastRows[temp142].breastRating > 4) descript += "tits";
        else descript += "breasts";
    }
    if (temp14 == 3) {
        // if(creature.breastRows[temp142].breastRating > 6) descript += "rack";
        descript += "breasts";
    }
    if (temp14 == 4) descript += "tits";
    if (temp14 == 5) descript += "tits";
    if (temp14 == 6) descript += "tits";
    if (temp14 == 7) {
        if (creature.breastRows[temp142].lactationMultiplier >= 1 && creature.breastRows[temp142].lactationMultiplier < 2.5) descript += "milk jugs";
        if (creature.breastRows[temp142].lactationMultiplier >= 2.5) descript += "udders";
        if (creature.breastRows[temp142].lactationMultiplier < 1) descript += "jugs";
    }
    if (temp14 == 8) {
        if (creature.breastRows[temp142].breastRating > 6) descript += "love-pillows";
        else descript += "boobs";
    }
    if (temp14 == 9) {
        if (creature.breastRows[temp142].breastRating > 6) descript += "tits";
        else descript += "breasts";
    }
    return descript;
}

export function breastSize(val: number): string {
    let descript: string = "";
    // Catch all for dudes.
    if (val < 1) return "manly ";
    // Small - A->B
    if (val <= 2) {
        descript += randomChoice("palmable ", "tight ", "perky ", "baseball-sized ");
    }
    // C-D
    else if (val <= 4) {
        descript += randomChoice("nice ", "hand-filling ", "well-rounded ", "supple ", "softball-sized ");
    }
    // DD->big EE
    else if (val < 11) {
        descript += randomChoice("big ", "large ", "pillowy ", "jiggly ", "volleyball-sized ");
    }
    // F->big FF
    else if (val < 15) {
        descript += randomChoice("soccerball-sized ", "hand-overflowing ", "generous ", "jiggling ");
    }
    // G -> HHH
    else if (val < 24) {
        descript += randomChoice("basketball-sized ", "whorish ", "cushiony ", "wobbling ");
    }
    // I -> KK
    else if (val < 35) {
        descript += randomChoice("massive motherly ", "luscious ", "smothering ", "prodigious ");
    }
    // K- > MMM+
    else {
        descript += randomChoice("mountainous ", "monumental ", "back-breaking ", "exercise-ball-sized ", "immense ");
    }
    return descript;
}

export function breastCupOfRow(creature: Character, rowNum: number): string {
    return breastCup(creature.breastRows[rowNum].breastRating);
}

export function chestDesc(creature: Character): string {
    if (creature.breastRows.biggestTitSize() < 1) return "chest";
    return Appearance.biggestBreastSizeDescript(creature);
    // 			return Appearance.chestDesc(this);
}

export function allChestDesc(creature: Character): string {
    if (creature.breastRows.biggestTitSize() < 1) return "chest";
    return allBreastsDescript(creature);
}

export function breastDescript(creature: Character, rowNum: number): string {
    // ERROR PREVENTION
    if (creature.breastRows.length - 1 < rowNum) {
        Logger.error("");
        return "<b>ERROR, breastDescript() working with invalid breastRow</b>";
    }
    if (creature.breastRows.length == 0) {
        Logger.error("");
        return "<b>ERROR, breastDescript() called when no breasts are present.</b>";
    }
    return BreastStore.breastDescript(creature.breastRows[rowNum].breastRating, creature.breastRows[rowNum].lactationMultiplier);
}
