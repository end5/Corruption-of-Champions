export function cockAdjective(creature: Character, index: number = -1): string {
    if (index < 0) index = creature.cocks.biggestCockIndex();
    const isPierced: boolean = (creature.cocks.length == 1) && (creature.cocks[index].isPierced); // Only describe as pierced or sock covered if the creature has just one cock
    const hasSock: boolean = (creature.cocks.length == 1) && (creature.cocks[index].sock != "");
    const isGooey: boolean = (creature.skinType == SkinType.GOO);
    return Appearance.cockAdjective(creature.cocks[index].cockType, creature.cocks[index].cockLength, creature.cocks[index].cockThickness, creature.lust, creature.cumQ(), isPierced, hasSock, isGooey);
}

export function genderText(creature: Character, male: string = "man", female: string = "woman", futa: string = "herm", eunuch: string = "eunuch"): string {
    if (creature.vaginas.length > 0) {
        if (creature.cocks.length > 0) return futa;
        return female;
    }
    else if (creature.cocks.length > 0) {
        return male;
    }
    return eunuch;
}

export function manWoman(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Futa";
            else
                return "futa";
        }
        else {
            if (caps)
                return "Man";
            else
                return "man";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Woman";
            else
                return "woman";
        }
        else {
            if (caps)
                return "Eunuch";
            else
                return "eunuch";
        }
    }
}

export function guyGirl(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Girl";
            else
                return "girl";
        }
        else {
            if (caps)
                return "Guy";
            else
                return "guy";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Girl";
            else
                return "girl";
        }
        else {
            if (creature.breasts.biggestTitSize() >= 3) {
                if (caps)
                    return "Girl";
                else
                    return "girl";
            }
            if (caps)
                return "Guy";
            else
                return "guy";
        }
    }
}

export function mfn(creature: Character, male: string, female: string, neuter: string): string {
    if (creature.gender == 0)
        return neuter;
    else
        return mf(creature, male, female);
}

export function mf(creature: Character, male: string, female: string): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0)
            return female;
        else
            return male;
    }
    else {
        if (creature.vaginas.length > 0)
            return female;
        else {
            if (creature.breasts.biggestTitSize() >= 3)
                return female;
            else
                return male;
        }
    }
}

export function boyGirl(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Girl";
            else
                return "girl";
        }
        else {
            if (caps)
                return "Boy";
            else
                return "boy";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Girl";
            else
                return "girl";
        }
        else {
            if (creature.breasts.biggestTitSize() >= 3) {
                if (caps)
                    return "Girl";
                else
                    return "girl";
            }
            if (caps)
                return "Boy";
            else
                return "boy";
        }
    }
}

export function heShe(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "She";
            else
                return "she";
        }
        else {
            if (caps)
                return "He";
            else
                return "he";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "She";
            else
                return "she";
        }
        else {
            if (creature.breasts.biggestTitSize() >= 3) {
                if (caps)
                    return "She";
                else
                    return "she";
            }
            if (caps)
                return "It";
            else
                return "it";
        }
    }
}

export function himHer(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Her";
            else
                return "her";
        }
        else {
            if (caps)
                return "Him";
            else
                return "him";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Her";
            else
                return "her";
        }
        else {
            if (creature.breasts.biggestTitSize() >= 3) {
                if (caps)
                    return "Her";
                else
                    return "her";
            }
            if (caps)
                return "Him";
            else
                return "him";
        }
    }
}

export function maleFemale(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Female";
            else
                return "female";
        }
        else {
            if (caps)
                return "Male";
            else
                return "male";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Female";
            else
                return "female";
        }
        else {
            if (creature.breasts.biggestTitSize() >= 3) {
                if (caps)
                    return "Female";
                else
                    return "female";
            }
            if (caps)
                return "Male";
            else
                return "male";
        }
    }
}

export function hisHer(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Her";
            else
                return "her";
        }
        else {
            if (caps)
                return "Him";
            else
                return "him";
        }
    }
    else {
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Her";
            else
                return "her";
        }
        else {
            if (creature.breasts.biggestTitSize() >= 3) {
                if (caps)
                    return "Her";
                else
                    return "her";
            }
            if (caps)
                return "Him";
            else
                return "him";
        }
    }
}

// sir/madam
export function sirMadam(creature: Character, caps: boolean = false): string {
    // Dicks?
    if (creature.cocks.length > 0) {
        // herm
        if (creature.vaginas.length > 0) {
            // Boy unless has tits!
            if (creature.breasts.biggestTitSize() >= 2) {
                if (caps)
                    return "Madam";
                else
                    return "madam";
            }
            else {
                if (caps)
                    return "Sir";
                else
                    return "sir";
            }
        }
        // Dude
        else {
            if (caps)
                return "Sir";
            else
                return "sir";
        }
    }
    // No dicks
    else {
        // Girl
        if (creature.vaginas.length > 0) {
            if (caps)
                return "Madam";
            else
                return "madam";
        }
        // Eunuch!
        else {
            // Called girl if has tits!
            if (creature.breasts.biggestTitSize() >= 2) {
                if (caps)
                    return "Madam";
                else
                    return "madam";
            }
            // Called dude with no tits
            else {
                if (caps)
                    return "Sir";
                else
                    return "sir";
            }
        }
    }
}

export function legs(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (lowerBody == 0)
        return "legs";
    // 1 - hooves
    if (lowerBody == 1)
        return "legs";
    // 2 - paws
    if (lowerBody == 2)
        return "legs";
    // 3 - snakelike body
    if (lowerBody == 3)
        return "snake-like coils";
    // 4 - centaur!
    if (lowerBody == 4)
        return "four legs";
    // 8 - goo shit
    if (lowerBody == 8)
        return "mounds of goo";
    // PONY
    if (lowerBody == 11)
        return "cute pony-legs";
    // Bunnah!
    if (lowerBody == 12) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "fuzzy, bunny legs";
        else if (select == 1)
            return "fur-covered legs";
        else if (select == 2)
            return "furry legs";
        else
            return "legs";
    }
    if (lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "bird-like legs";
        else if (select == 1)
            return "feathered legs";
        else
            return "legs";
    }
    if (lowerBody == 17) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "fox-like legs";
        else if (select == 1)
            return "legs";
        else if (select == 2)
            return "legs";
        else
            return "vulpine legs";
    }
    if (lowerBody == 19) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "raccoon-like legs";
        else
            return "legs";
    }

    return "legs";
}

export function skinFurScales(creature: Character): string {
    let skinzilla: string = "";
    // Adjectives first!
    if (skinAdj != "")
        skinzilla += skinAdj + ", ";
    // Fur handled a little differently since it uses
    // haircolor
    if (_skinType == 1)
        skinzilla += hairColor + " ";
    else
        skinzilla += _skinTone + " ";
    skinzilla += skinDesc;
    return skinzilla;
}

export function leg(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (lowerBody == 0)
        return "leg";
    // 1 - hooves
    if (lowerBody == 1)
        return "leg";
    // 2 - paws
    if (lowerBody == 2)
        return "leg";
    // 3 - snakelike body
    if (lowerBody == 3)
        return "snake-tail";
    // 4 - centaur!
    if (lowerBody == 4)
        return "equine leg";
    // 8 - goo shit
    if (lowerBody == 8)
        return "mound of goo";
    // PONY
    if (lowerBody == 11)
        return "cartoonish pony-leg";
    // BUNNAH
    if (lowerBody == 12) {
        select = Math.random() * (5);
        if (select == 0)
            return "fuzzy, bunny leg";
        else if (select == 1)
            return "fur-covered leg";
        else if (select == 2)
            return "furry leg";
        else
            return "leg";
    }
    if (lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "bird-like leg";
        else if (select == 1)
            return "feathered leg";
        else
            return "leg";
    }
    if (lowerBody == 17) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "fox-like leg";
        else if (select == 1)
            return "leg";
        else if (select == 2)
            return "leg";
        else
            return "vulpine leg";
    }
    if (lowerBody == 19) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "raccoon-like leg";
        else
            return "leg";
    }
    return "leg";
}

export function feet(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (lowerBody == 0)
        return "feet";
    // 1 - hooves
    if (lowerBody == 1)
        return "hooves";
    // 2 - paws
    if (lowerBody == 2)
        return "paws";
    // 3 - snakelike body
    if (lowerBody == 3)
        return "coils";
    // 4 - centaur!
    if (lowerBody == 4)
        return "hooves";
    // 5 - demonic heels
    if (lowerBody == 5)
        return "demonic high-heels";
    // 6 - demonic claws
    if (lowerBody == 6)
        return "demonic foot-claws";
    // 8 - goo shit
    if (lowerBody == 8)
        return "slimey cillia";
    if (lowerBody == 11)
        return "flat pony-feet";
    // BUNNAH
    if (lowerBody == 12) {
        select = rand(5);
        if (select == 0)
            return "large bunny feet";
        else if (select == 1)
            return "rabbit feet";
        else if (select == 2)
            return "large feet";
        else
            return "feet";
    }
    if (lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "taloned feet";
        else
            return "feet";
    }
    if (lowerBody == 14)
        return "foot-paws";
    if (lowerBody == 17) {
        select = rand(4);
        if (select == 0)
            return "paws";
        else if (select == 1)
            return "soft, padded paws";
        else if (select == 2)
            return "fox-like feet";
        else
            return "paws";
    }
    if (lowerBody == 19) {
        select = Math.floor(Math.random() * (3));
        if (select == 0)
            return "raccoon-like feet";
        else if (select == 1)
            return "long-toed paws";
        else if (select == 2)
            return "feet";
        else
            return "paws";
    }
    return "feet";
}

export function foot(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (lowerBody == 0)
        return "foot";
    // 1 - hooves
    if (lowerBody == 1)
        return "hoof";
    // 2 - paws
    if (lowerBody == 2)
        return "paw";
    // 3 - snakelike body
    if (lowerBody == 3)
        return "coiled tail";
    // 4 - centaur!
    if (lowerBody == 4)
        return "hoof";
    // 8 - goo shit
    if (lowerBody == 8)
        return "slimey undercarriage";
    // PONY
    if (lowerBody == 11)
        return "flat pony-foot";
    // BUNNAH
    if (lowerBody == 12) {
        select = Math.random() * (5);
        if (select == 0)
            return "large bunny foot";
        else if (select == 1)
            return "rabbit foot";
        else if (select == 2)
            return "large foot";
        else
            return "foot";
    }
    if (lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "taloned foot";
        else
            return "foot";
    }
    if (lowerBody == 17) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "paw";
        else if (select == 1)
            return "soft, padded paw";
        else if (select == 2)
            return "fox-like foot";
        else
            return "paw";
    }
    if (lowerBody == 14)
        return "foot-paw";
    if (lowerBody == 19) {
        select = Math.floor(Math.random() * (3));
        if (select == 0)
            return "raccoon-like foot";
        else if (select == 1)
            return "long-toed paw";
        else if (select == 2)
            return "foot";
        else
            return "paw";
    }
    return "foot";
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

// Simplified these cock descriptors and brought them into the creature class
export function sMultiCockDesc(creature: Character): string {
    return (creature.cocks.length > 1 ? "one of your " : "your ") + cockMultiLDescriptionShort(creature);
}

export function SMultiCockDesc(creature: Character): string {
    return (creature.cocks.length > 1 ? "One of your " : "Your ") + cockMultiLDescriptionShort(creature);
}

export function oMultiCockDesc(creature: Character): string {
    return (creature.cocks.length > 1 ? "each of your " : "your ") + cockMultiLDescriptionShort(creature);
}

export function OMultiCockDesc(creature: Character): string {
    return (creature.cocks.length > 1 ? "Each of your " : "Your ") + cockMultiLDescriptionShort(creature);
}

function cockMultiLDescriptionShort(creature: Character): string {
    if (creature.cocks.length < 1) {
        Logger.error("<b>ERROR: NO WANGS DETECTED for cockMultiLightDesc()</b>");
        return "<b>ERROR: NO WANGS DETECTED for cockMultiLightDesc()</b>";
    }
    if (creature.cocks.length == 1) { // For a songle cock return the default description
        return Appearance.cockDescript(creature, 0);
    }
    switch (creature.cocks[0].cockType) { // With multiple cocks only use the descriptions for specific cock types if all cocks are of a single type
        case CockTypesEnum.ANEMONE:
        case CockTypesEnum.CAT:
        case CockTypesEnum.DEMON:
        case CockTypesEnum.DISPLACER:
        case CockTypesEnum.DRAGON:
        case CockTypesEnum.HORSE:
        case CockTypesEnum.KANGAROO:
        case CockTypesEnum.LIZARD:
        case CockTypesEnum.TENTACLE:
            if (creature.cocks.countCocksOfType(creature.cocks[0].cockType) == creature.cocks.length) return Appearance.cockNoun(creature.cocks[0].cockType) + "s";
            break;
        case CockTypesEnum.DOG:
        case CockTypesEnum.FOX:
            if (creature.cocks.dogCocks() == creature.cocks.length) return Appearance.cockNoun(CockTypesEnum.DOG) + "s";
        default:
    }
    return Appearance.cockNoun(CockTypesEnum.HUMAN) + "s";
}

export function sheathDescription(creature: Character): string {
    if (creature.cocks.hasSheath()) return "sheath";
    return "base";
}

export function chestDesc(creature: Character): string {
    if (creature.breasts.biggestTitSize() < 1) return "chest";
    return Appearance.biggestBreastSizeDescript(creature);
    // 			return Appearance.chestDesc(this);
}

export function allChestDesc(creature: Character): string {
    if (creature.breasts.biggestTitSize() < 1) return "chest";
    return allBreastsDescript(creature);
}

export function cockHead(creature: Character, cockNum: number = 0): string {
    if (cockNum < 0 || cockNum > creature.cocks.length - 1) {
        Logger.error("");
        return "ERROR";
    }
    switch (cocks[cockNum].cockType) {
        case CockTypesEnum.CAT:
            if (rand(2) == 0) return "point";
            return "narrow tip";
        case CockTypesEnum.DEMON:
            if (rand(2) == 0) return "tainted crown";
            return "nub-ringed tip";
        case CockTypesEnum.DISPLACER:
            switch (rand(5)) {
                case 0: return "star tip";
                case 1: return "blooming cock-head";
                case 2: return "open crown";
                case 3: return "alien tip";
                default: return "bizarre head";
            }
        case CockTypesEnum.DOG:
        case CockTypesEnum.FOX:
            if (rand(2) == 0) return "pointed tip";
            return "narrow tip";
        case CockTypesEnum.HORSE:
            if (rand(2) == 0) return "flare";
            return "flat tip";
        case CockTypesEnum.KANGAROO:
            if (rand(2) == 0) return "tip";
            return "point";
        case CockTypesEnum.LIZARD:
            if (rand(2) == 0) return "crown";
            return "head";
        case CockTypesEnum.TENTACLE:
            if (rand(2) == 0) return "mushroom-like tip";
            return "wide plant-like crown";
        default:
    }
    if (rand(2) == 0) return "crown";
    if (rand(2) == 0) return "head";
    return "cock-head";
}

// Short cock description. Describes length or girth. Supports multiple cocks.
export function cockDescriptShort(creature: Character, i_cockIndex: number = 0): string {
    // catch calls where we're outside of combat, and eCockDescript could be called.
    if (creature.cocks.length == 0)
        return "<B>ERROR. INVALID CREATURE SPECIFIED to cockDescriptShort</B>";

    let description: string = "";
    let descripted: boolean = false;
    // Discuss length one in 3 times
    if (rand(3) == 0) {
        if (creature.cocks[i_cockIndex].cockLength >= 30)
            description = "towering ";
        else if (creature.cocks[i_cockIndex].cockLength >= 18)
            description = "enormous ";
        else if (creature.cocks[i_cockIndex].cockLength >= 13)
            description = "massive ";
        else if (creature.cocks[i_cockIndex].cockLength >= 10)
            description = "huge ";
        else if (creature.cocks[i_cockIndex].cockLength >= 7)
            description = "long ";
        else if (creature.cocks[i_cockIndex].cockLength >= 5)
            description = "average ";
        else
            description = "short ";
        descripted = true;
    }
    else if (rand(2) == 0) { // Discuss girth one in 2 times if not already talked about length.
        // narrow, thin, ample, broad, distended, voluminous
        if (creature.cocks[i_cockIndex].cockThickness <= .75) description = "narrow ";
        if (creature.cocks[i_cockIndex].cockThickness > 1 && creature.cocks[i_cockIndex].cockThickness <= 1.4) description = "ample ";
        if (creature.cocks[i_cockIndex].cockThickness > 1.4 && creature.cocks[i_cockIndex].cockThickness <= 2) description = "broad ";
        if (creature.cocks[i_cockIndex].cockThickness > 2 && creature.cocks[i_cockIndex].cockThickness <= 3.5) description = "fat ";
        if (creature.cocks[i_cockIndex].cockThickness > 3.5) description = "distended ";
        descripted = true;
    }
    // Seems to work better without this comma:			if (descripted && cocks[i_cockIndex].cockType != CockTypesEnum.HUMAN) description += ", ";
    description += Appearance.cockNoun(creature.cocks[i_cockIndex].cockType);

    return description;
}

export function ballsDescriptLight(creature: Character, forcedSize: boolean = true): string {
    return Appearance.ballsDescription(forcedSize, true, creature);
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

export function ballDescript(creature: Character): string {
    return Appearance.ballsDescription(false, false, creature);
}

export function ballsDescript(creature: Character): string {
    return Appearance.ballsDescription(false, true, creature, true);
}

export function simpleBallsDescript(creature: Character): string {
    return Appearance.ballsDescription(false, true, creature);
}

export function cockClit(creature: Character, number: number = 0): string {
    if (creature.cocks.length > 0 && number >= 0 && number < creature.cocks.length) return cockDescript(creature, number);
    else return clitDescription(creature);
}

// Allvagina descript
export function allVaginaDescript(creature: Character): string {
    if (creature.vaginas.length == 1) return vaginaDescript(creature, rand(creature.vaginas.length - 1));
    if (creature.vaginas.length > 1) return (vaginaDescript(creature, rand(creature.vaginas.length - 1)) + "s");

    Logger.error("ERROR: allVaginaDescript called with no vaginas.");
    return "ERROR: allVaginaDescript called with no vaginas.";
}
