
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
    for (const i = 0; i < BREAST_CUP_NAMES.length; i++) {
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

export function breastCup(creature: Character, rowNum: number): string {
    return Appearance.breastCup(creature.breastRows[rowNum].breastRating);
    // Should change this to make use of Appearance			return BreastStore.cupSize(breastRows[rowNum].breastRating);
    /*
    if (breastRows[rowNum].breastRating < 1)
        return "flat, manly breast";
    else if (breastRows[rowNum].breastRating < 2)
        return "A-cup";
    else if (breastRows[rowNum].breastRating < 3)
        return "B-cup";
    else if (breastRows[rowNum].breastRating < 4)
        return "C-cup";
    else if (breastRows[rowNum].breastRating < 5)
        return "D-cup";
    else if (breastRows[rowNum].breastRating < 6)
        return "DD-cup";
    else if (breastRows[rowNum].breastRating < 7)
        return "big DD-cup";
    else if (breastRows[rowNum].breastRating < 8)
        return "E-cup";
    else if (breastRows[rowNum].breastRating < 9)
        return "big E-cup";
    else if (breastRows[rowNum].breastRating < 10)
        return "EE-cup";
    else if (breastRows[rowNum].breastRating < 11)
        return "big EE-cup";
    else if (breastRows[rowNum].breastRating < 12)
        return "F-cup";
    else if (breastRows[rowNum].breastRating < 13)
        return "big F-cup";
    else if (breastRows[rowNum].breastRating < 14)
        return "FF-cup";
    else if (breastRows[rowNum].breastRating < 15)
        return "big FF-cup";
    else if (breastRows[rowNum].breastRating < 16)
        return "G-cup";
    else if (breastRows[rowNum].breastRating < 17)
        return "big G-cup";
    else if (breastRows[rowNum].breastRating < 18)
        return "GG-cup";
    else if (breastRows[rowNum].breastRating < 19)
        return "big GG-cup";
    else if (breastRows[rowNum].breastRating < 20)
        return "H-cup";
    else if (breastRows[rowNum].breastRating < 21)
        return "big H-cup";
    else if (breastRows[rowNum].breastRating < 22)
        return "HH-cup";
    else if (breastRows[rowNum].breastRating < 23)
        return "big HH-cup";
    else if (breastRows[rowNum].breastRating < 24)
        return "HHH-cup";
    else if (breastRows[rowNum].breastRating < 25)
        return "I-cup";
    else if (breastRows[rowNum].breastRating < 26)
        return "big I-cup";
    else if (breastRows[rowNum].breastRating < 27)
        return "II-cup";
    else if (breastRows[rowNum].breastRating < 28)
        return "big II-cup";
    else if (breastRows[rowNum].breastRating < 29)
        return "J-cup";
    else if (breastRows[rowNum].breastRating < 30)
        return "big J-cup";
    else if (breastRows[rowNum].breastRating < 31)
        return "JJ-cup";
    else if (breastRows[rowNum].breastRating < 32)
        return "big JJ-cup";
    else if (breastRows[rowNum].breastRating < 33)
        return "K-cup";
    else if (breastRows[rowNum].breastRating < 34)
        return "big K-cup";
    else if (breastRows[rowNum].breastRating < 35)
        return "KK-cup";
    else if (breastRows[rowNum].breastRating < 36)
        return "big KK-cup";
    else if (breastRows[rowNum].breastRating < 37)
        return "L-cup";
    else if (breastRows[rowNum].breastRating < 38)
        return "big L-cup";
    else if (breastRows[rowNum].breastRating < 39)
        return "LL-cup";
    else if (breastRows[rowNum].breastRating < 40)
        return "big LL-cup";
    else if (breastRows[rowNum].breastRating < 41)
        return "M-cup";
    else if (breastRows[rowNum].breastRating < 42)
        return "big M-cup";
    else if (breastRows[rowNum].breastRating < 43)
        return "MM-cup";
    else if (breastRows[rowNum].breastRating < 44)
        return "big MM-cup";
    else if (breastRows[rowNum].breastRating < 45)
        return "MMM-cup";
    else if (breastRows[rowNum].breastRating < 46)
        return "large MMM-cup";
    else if (breastRows[rowNum].breastRating < 47)
        return "N-cup";
    else if (breastRows[rowNum].breastRating < 48)
        return "large N-cup";
    else if (breastRows[rowNum].breastRating < 49)
        return "NN-cup";
    else if (breastRows[rowNum].breastRating < 50)
        return "large NN-cup";
    else if (breastRows[rowNum].breastRating < 51)
        return "O-cup";
    else if (breastRows[rowNum].breastRating < 52)
        return "large O-cup";
    else if (breastRows[rowNum].breastRating < 53)
        return "OO-cup";
    else if (breastRows[rowNum].breastRating < 54)
        return "large OO-cup";
    else if (breastRows[rowNum].breastRating < 55)
        return "P-cup";
    else if (breastRows[rowNum].breastRating < 56)
        return "large P-cup";
    else if (breastRows[rowNum].breastRating < 57)
        return "PP-cup";
    else if (breastRows[rowNum].breastRating < 58)
        return "large PP-cup";
    else if (breastRows[rowNum].breastRating < 59)
        return "Q-cup";
    else if (breastRows[rowNum].breastRating < 60)
        return "large Q-cup";
    else if (breastRows[rowNum].breastRating < 61)
        return "QQ-cup";
    else if (breastRows[rowNum].breastRating < 62)
        return "large QQ-cup";
    else if (breastRows[rowNum].breastRating < 63)
        return "R-cup";
    else if (breastRows[rowNum].breastRating < 64)
        return "large R-cup";
    else if (breastRows[rowNum].breastRating < 65)
        return "RR-cup";
    else if (breastRows[rowNum].breastRating < 66)
        return "large RR-cup";
    else if (breastRows[rowNum].breastRating < 67)
        return "S-cup";
    else if (breastRows[rowNum].breastRating < 68)
        return "large S-cup";
    else if (breastRows[rowNum].breastRating < 69)
        return "SS-cup";
    else if (breastRows[rowNum].breastRating < 70)
        return "large SS-cup";
    else if (breastRows[rowNum].breastRating < 71)
        return "T-cup";
    else if (breastRows[rowNum].breastRating < 72)
        return "large T-cup";
    else if (breastRows[rowNum].breastRating < 73)
        return "TT-cup";
    else if (breastRows[rowNum].breastRating < 74)
        return "large TT-cup";
    else if (breastRows[rowNum].breastRating < 75)
        return "U-cup";
    else if (breastRows[rowNum].breastRating < 76)
        return "large U-cup";
    else if (breastRows[rowNum].breastRating < 77)
        return "UU-cup";
    else if (breastRows[rowNum].breastRating < 78)
        return "large UU-cup";
    else if (breastRows[rowNum].breastRating < 79)
        return "V-cup";
    else if (breastRows[rowNum].breastRating < 80)
        return "large V-cup";
    else if (breastRows[rowNum].breastRating < 81)
        return "VV-cup";
    else if (breastRows[rowNum].breastRating < 82)
        return "large VV-cup";
    else if (breastRows[rowNum].breastRating < 83)
        return "W-cup";
    else if (breastRows[rowNum].breastRating < 84)
        return "large W-cup";
    else if (breastRows[rowNum].breastRating < 85)
        return "WW-cup";
    else if (breastRows[rowNum].breastRating < 86)
        return "large WW-cup";
    else if (breastRows[rowNum].breastRating < 87)
        return "X-cup";
    else if (breastRows[rowNum].breastRating < 88)
        return "large X-cup";
    else if (breastRows[rowNum].breastRating < 89)
        return "XX-cup";
    else if (breastRows[rowNum].breastRating < 90)
        return "large XX-cup";
    else if (breastRows[rowNum].breastRating < 91)
        return "Y-cup";
    else if (breastRows[rowNum].breastRating < 92)
        return "large Y-cup";
    else if (breastRows[rowNum].breastRating < 93)
        return "YY-cup";
    else if (breastRows[rowNum].breastRating < 94)
        return "large YY-cup";
    else if (breastRows[rowNum].breastRating < 95)
        return "Z-cup";
    else if (breastRows[rowNum].breastRating < 96)
        return "large Z-cup";
    else if (breastRows[rowNum].breastRating < 97)
        return "ZZ-cup";
    else if (breastRows[rowNum].breastRating < 98)
        return "large ZZ-cup";
    else if (breastRows[rowNum].breastRating < 99)
        return "ZZZ-cup";
    else if (breastRows[rowNum].breastRating < 100)
        return "large ZZZ-cup";
    // else if(breastRows[rowNum].breastRating < 20) return "watermelon-sized cup";
    // else if(breastRows[rowNum].breastRating < 35) return "tent-sized cup";
    // else if(breastRows[rowNum].breastRating < 60) return "truck-sized cup";
    // else if(breastRows[rowNum].breastRating < 100) return "parachute-sized cup";
    else
        return "game-breaking cup";
    return "Error-Cup (breastSize Error Number: " + breastRows[rowNum].breastRating;
    //watermelon-sized
    //tent sized
    //truck sized
    //parachute sized
    //pool-sized
    //hanger-sized
    //town-sized
    //city-sized
    //state-sized
    //continent-sized
    //planet-sized
    //WTFISTHISWHYISNTITGAMEOVER?
    */
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
