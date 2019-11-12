
/**
 * Gives a full description of a Character's butt.
 * Be aware that it only supports Characters, not all Creatures.
 * @param    i_character
 * @return    A full description of a Character's butt.
 */
export function buttDescription(i_character: Character): string {
    let description: string = "";
    let options: any[];
    if (i_character.buttRating <= 1) {
        if (i_character.tone >= 60)
            description += "incredibly tight, perky ";
        else {
            options = ["tiny",
                "very small",
                "dainty"];
            description = randomChoice(options);
            // Soft PC's buns!
            if (i_character.tone <= 30 && rand(3) == 0) description += " yet soft";
            description += " ";
        }
    }
    if (i_character.buttRating > 1 && i_character.buttRating < 4) {
        if (i_character.tone >= 65) {
            options = ["perky, muscular ",
                "tight, toned ",
                "compact, muscular ",
                "tight ",
                "muscular, toned "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["tight ",
                "firm ",
                "compact ",
                "petite "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["small, heart-shaped ",
                "soft, compact ",
                "soft, heart-shaped ",
                "small, cushy ",
                "small ",
                "petite ",
                "snug ", ];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 4 && i_character.buttRating < 6) {
        // TOIGHT LIKE A TIGER
        if (i_character.tone >= 65) {
            options = ["nicely muscled ",
                "nice, toned ",
                "muscly ",
                "nice toned ",
                "toned ",
                "fair "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["nice ",
                "fair "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["nice, cushiony ",
                "soft ",
                "nicely-rounded, heart-shaped ",
                "cushy ",
                "soft, squeezable "];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 6 && i_character.buttRating < 8) {
        // TOIGHT LIKE A TIGER
        if (i_character.tone >= 65) {
            options = ["full, toned ",
                "muscly handful of ",
                "shapely, toned ",
                "muscular, hand-filling ",
                "shapely, chiseled ",
                "full ",
                "chiseled "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["handful of ",
                "full ",
                "shapely ",
                "hand-filling "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            if (rand(8) == 0) return "supple, handful of ass";
            options = ["somewhat jiggly ",
                "soft, hand-filling ",
                "cushiony, full ",
                "plush, shapely ",
                "full ",
                "soft, shapely ",
                "rounded, spongy "];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 8 && i_character.buttRating < 10) {
        // TOIGHT LIKE A TIGER
        if (i_character.tone >= 65) {
            options = ["large, muscular ",
                "substantial, toned ",
                "big-but-tight ",
                "squeezable, toned ",
                "large, brawny ",
                "big-but-fit ",
                "powerful, squeezable ",
                "large "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["squeezable ",
                "large ",
                "substantial "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["large, bouncy ",
                "soft, eye-catching ",
                "big, slappable ",
                "soft, pinchable ",
                "large, plush ",
                "squeezable ",
                "cushiony ",
                "plush ",
                "pleasantly plump "];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 10 && i_character.buttRating < 13) {
        // TOIGHT LIKE A TIGER
        if (i_character.tone >= 65) {
            options = ["thick, muscular ",
                "big, burly ",
                "heavy, powerful ",
                "spacious, muscular ",
                "toned, cloth-straining ",
                "thick ",
                "thick, strong "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["jiggling ",
                "spacious ",
                "heavy ",
                "cloth-straining "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["super-soft, jiggling ",
                "spacious, cushy ",
                "plush, cloth-straining ",
                "squeezable, over-sized ",
                "spacious ",
                "heavy, cushiony ",
                "slappable, thick ",
                "jiggling ",
                "spacious ",
                "soft, plump "];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 13 && i_character.buttRating < 16) {
        // TOIGHT LIKE A TIGER
        if (i_character.tone >= 65) {
            options = ["expansive, muscled ",
                "voluminous, rippling ",
                "generous, powerful ",
                "big, burly ",
                "well-built, voluminous ",
                "powerful ",
                "muscular ",
                "powerful, expansive "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["expansive ",
                "generous ",
                "voluminous ",
                "wide "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["pillow-like ",
                "generous, cushiony ",
                "wide, plush ",
                "soft, generous ",
                "expansive, squeezable ",
                "slappable ",
                "thickly-padded ",
                "wide, jiggling ",
                "wide ",
                "voluminous ",
                "soft, padded "];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 16 && i_character.buttRating < 20) {
        if (i_character.tone >= 65) {
            options = ["huge, toned ",
                "vast, muscular ",
                "vast, well-built ",
                "huge, muscular ",
                "strong, immense ",
                "muscle-bound "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            if (rand(5) == 0) return "jiggling expanse of ass";
            if (rand(5) == 0) return "copious ass-flesh";
            options = ["huge ",
                "vast ",
                "giant "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["vast, cushiony ",
                "huge, plump ",
                "expansive, jiggling ",
                "huge, cushiony ",
                "huge, slappable ",
                "seam-bursting ",
                "plush, vast ",
                "giant, slappable ",
                "giant ",
                "huge ",
                "swollen, pillow-like "];
            description = randomChoice(options);
        }
    }
    if (i_character.buttRating >= 20) {
        if (i_character.tone >= 65) {
            if (rand(7) == 0) return "colossal, muscly ass";
            options = ["ginormous, muscle-bound ",
                "colossal yet toned ",
                "strong, tremdously large ",
                "tremendous, muscled ",
                "ginormous, toned ",
                "colossal, well-defined "];
            description = randomChoice(options);
        }
        // Nondescript
        else if (i_character.tone >= 30) {
            options = ["ginormous ",
                "colossal ",
                "tremendous ",
                "gigantic "];
            description = randomChoice(options);
        }
        // FLABBAH
        else {
            options = ["ginormous, jiggly ",
                "plush, ginormous ",
                "seam-destroying ",
                "tremendous, rounded ",
                "bouncy, colossal ",
                "thong-devouring ",
                "tremendous, thickly padded ",
                "ginormous, slappable ",
                "gigantic, rippling ",
                "gigantic ",
                "ginormous ",
                "colossal ",
                "tremendous "];
            description = randomChoice(options);
        }
    }
    options = ["butt",
        "butt",
        "butt",
        "butt",
        "ass",
        "ass",
        "ass",
        "ass",
        "backside",
        "backside",
        "derriere",
        "rump",
        "bottom"];

    description += randomChoice(options);
    // if(rando == 2) desc += "cheeks";
    return description;
}

/**
 * Gives a short description of a creature's butt.
 * Different from buttDescription in that it supports all creatures, not just characters.
 * Warning, very judgemental.
 * @param    creature
 * @return Short description of a butt.
 */
export function buttDescriptionShort(i_creature: Character): string {
    let description: string = "";
    let options: any[];
    if (i_creature.buttRating <= 1) {
        options = ["insignificant ",
            "very small "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating > 1 && i_creature.buttRating < 4) {
        options = ["tight ",
            "firm ",
            "compact "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 4 && i_creature.buttRating < 6) {
        options = ["regular ",
            "unremarkable "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 6 && i_creature.buttRating < 8) {
        if (rand(3) == 0) return "handful of ass";
        options = ["full ",
            "shapely "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 8 && i_creature.buttRating < 10) {
        options = ["squeezable ",
            "large ",
            "substantial "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 10 && i_creature.buttRating < 13) {
        options = ["jiggling ",
            "spacious ",
            "heavy "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 13 && i_creature.buttRating < 16) {
        if (rand(3) == 0) return "generous amount of ass";
        options = ["expansive ",
            "voluminous "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 16 && i_creature.buttRating < 20) {
        if (rand(3) == 2) return "jiggling expanse of ass";
        options = ["huge ",
            "vast "];
        description = randomChoice(options);
    }
    if (i_creature.buttRating >= 20) {
        options = ["ginormous ",
            "colossal ",
            "tremendous "];
        description = randomChoice(options);
    }
    options = ["butt ",
        "ass "];
    description += randomChoice(options);
    if (rand(2) == 0) description += "cheeks";
    return description;
}

export function assholeDescript(i_creature: Character): string {
    let description: string = "";

    // The way this was setup didn't work. Trying to inline-define object key-values wasn't looking up the variable *VALUES* it was using the string representation
    // of the variable name as the key.
    // ie, querying ANAL_WETNESS_DESCRIPTORS[0] would actually return "undefined" rather than "".
    // This is just fucking awful but I'm just making things work in the face of bugs I'm running into.

    // 66% Wetness Descript
    const ANAL_WETNESS_DESCRIPTORS: Record<string, any> = new Object();
    ANAL_WETNESS_DESCRIPTORS[AnalWetness.DRY] = "";
    ANAL_WETNESS_DESCRIPTORS[AnalWetness.NORMAL] = "";
    ANAL_WETNESS_DESCRIPTORS[AnalWetness.MOIST] = "moist ";
    ANAL_WETNESS_DESCRIPTORS[AnalWetness.SLIMY] = "slimy ";
    ANAL_WETNESS_DESCRIPTORS[AnalWetness.DROOLING] = "drooling ";
    ANAL_WETNESS_DESCRIPTORS[AnalWetness.SLIME_DROOLING] = "slime-drooling ";

    if (rand(3) <= 1) {
        description += ANAL_WETNESS_DESCRIPTORS[i_creature.ass.analWetness];
    }

    const ANAL_TIGHTNESS_DESCRIPTORS: Record<string, any> = new Object();
    ANAL_TIGHTNESS_DESCRIPTORS[AnalLooseness.VIRGIN] = "virgin ";
    ANAL_TIGHTNESS_DESCRIPTORS[AnalLooseness.TIGHT] = "tight ";
    ANAL_TIGHTNESS_DESCRIPTORS[AnalLooseness.NORMAL] = "loose ";
    ANAL_TIGHTNESS_DESCRIPTORS[AnalLooseness.LOOSE] = "roomy ";
    ANAL_TIGHTNESS_DESCRIPTORS[AnalLooseness.STRETCHED] = "stretched ";
    ANAL_TIGHTNESS_DESCRIPTORS[AnalLooseness.GAPING] = "gaping ";

    // 25% tightness description
    if (rand(4) == 0 || (i_creature.ass.analLooseness <= 1 && rand(4) <= 2)) {
        description += ANAL_TIGHTNESS_DESCRIPTORS[i_creature.ass.analLooseness];
    }

    // asshole descriptor
    description += randomChoice("ass",
        "anus",
        "pucker",
        "backdoor",
        "asshole",
        "butthole");

    return description;
}

export function assholeOrPussy(creature: Character): string {
    if (creature.vaginas.length > 0) return vaginaDescript(creature, 0);
    return assholeDescript(creature);
}
