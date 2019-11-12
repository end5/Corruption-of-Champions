export function hipDescription(i_character: Character): string {
    let description: string = "";
    let options: any[];
    if (i_character.hipRating <= 1) {
        options = ["tiny ",
            "narrow ",
            "boyish "];
        description = randomChoice(options);
    }
    else if (i_character.hipRating > 1 && i_character.hipRating < 4) {
        options = ["slender ",
            "narrow ",
            "thin "];
        description = randomChoice(options);
        if (i_character.thickness < 30) {
            if (rand(2) == 0) description = "slightly-flared ";
            else description = "curved ";
        }
    }
    else if (i_character.hipRating >= 4 && i_character.hipRating < 6) {
        options = ["well-formed ",
            "pleasant "];
        description = randomChoice(options);
        if (i_character.thickness < 30) {
            if (rand(2) == 0) description = "flared ";
            else description = "curvy ";
        }
    }
    else if (i_character.hipRating >= 6 && i_character.hipRating < 10) {
        options = ["ample ",
            "noticeable ",
            "girly "];
        description = randomChoice(options);
        if (i_character.thickness < 30) {
            if (rand(2) == 0) description = "flared ";
            else description = "waspish ";
        }
    }
    else if (i_character.hipRating >= 10 && i_character.hipRating < 15) {
        options = ["flared ",
            "curvy ",
            "wide "];
        description = randomChoice(options);
        if (i_character.thickness < 30) {
            if (rand(2) == 0) description = "flared ";
            else description = "waspish ";
        }
    }
    else if (i_character.hipRating >= 15 && i_character.hipRating < 20) {
        if (i_character.thickness < 40) {
            if (rand(2) == 0) description = "flared, ";
            else description = "waspish, ";
        }
        options = ["fertile ",
            "child-bearing ",
            "voluptuous "];
        description += randomChoice(options);
    }
    else if (i_character.hipRating >= 20) {
        if (i_character.thickness < 40) {
            if (rand(2) == 0) description = "flaring, ";
            else description = "incredibly waspish, ";
        }
        options = ["broodmother-sized ",
            "cow-like ",
            "inhumanly-wide "];
        description += randomChoice(options);
    }
    // Taurs
    if (i_character.isTaur() && rand(3) == 0) description += "flanks";
    // Nagas have sides, right?
    else if (i_character.isNaga() && rand(3) == 0) description += "sides";
    // Non taurs or taurs who didn't roll flanks
    else {
        options = ["hips",
            "thighs"];
        description += randomChoice(options);
    }

    return description;
}
