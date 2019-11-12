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
            if (creature.breastRows.biggestTitSize() >= 3) {
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
            if (creature.breastRows.biggestTitSize() >= 3)
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
            if (creature.breastRows.biggestTitSize() >= 3) {
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
            if (creature.breastRows.biggestTitSize() >= 3) {
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
            if (creature.breastRows.biggestTitSize() >= 3) {
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
            if (creature.breastRows.biggestTitSize() >= 3) {
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
            if (creature.breastRows.biggestTitSize() >= 3) {
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
            if (creature.breastRows.biggestTitSize() >= 2) {
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
            if (creature.breastRows.biggestTitSize() >= 2) {
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
