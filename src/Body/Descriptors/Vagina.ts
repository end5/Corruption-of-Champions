export function vaginaDescript(i_creature: Character, i_vaginaIndex: number = 0): string {
    if (i_vaginaIndex > (i_creature.vaginas.length - 1)) {
        Logger.error("<B>Error: Invalid vagina number (" + i_vaginaIndex + ") passed to vaginaDescript()</b>");
        return "<B>Error: Invalid vagina number (" + i_vaginaIndex + ") passed to vaginaDescript()</b>";
    }
    if (i_vaginaIndex < 0) {
        Logger.error("<B>Error: Invalid vaginaNum (" + i_vaginaIndex + ") passed to vaginaDescript()</b>");
        return "<B>Error: Invalid vaginaNum (" + i_vaginaIndex + ") passed to vaginaDescript()</b>";
    }
    if (i_creature.vaginas.length <= 0) {
        Logger.error("ERROR: Called vaginaDescription with no vaginas");
        return "ERROR: Called vaginaDescription with no vaginas";
    }

    let description: string = "";
    let weighting: number = 0;
    const haveDescription: boolean = false;
    let options: any[];

    // Very confusing way to display values.
    if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 0) weighting = 61;
    if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 4 || i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 5) weighting = 10;

    // tightness descript - 40% display rate
    if (rand(100) + weighting > 60) {
        if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 0) {
            if (i_creature.vaginas[i_vaginaIndex].virgin) description += "virgin";
            else description += "tight";
        }
        if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 2)
            description += "loose";
        if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 3)
            description += "very loose";
        if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 4)
            description += "gaping";
        if (i_creature.vaginas[i_vaginaIndex].vaginalLooseness == 5)
            description += "gaping-wide";

    }
    // wetness descript - 30% display rate
    if (rand(100) + weighting > 70) {
        if (description != "") description += ", ";
        if (i_creature.vaginas[i_vaginaIndex].vaginalWetness == 0)
            description += "dry";
        if (i_creature.vaginas[i_vaginaIndex].vaginalWetness == 1)
            description += "moist";
        if (i_creature.vaginas[i_vaginaIndex].vaginalWetness == 2)
            description += "wet";
        if (i_creature.vaginas[i_vaginaIndex].vaginalWetness == 3)
            description += "slick";
        if (i_creature.vaginas[i_vaginaIndex].vaginalWetness == 4)
            description += "drooling";
        if (i_creature.vaginas[i_vaginaIndex].vaginalWetness == 5)
            description += "slavering";
    }
    if (i_creature.vaginas[i_vaginaIndex].labiaPierced > 0 && rand(3) == 0) {
        if (description != "") description += ", ";
        description += "pierced";
    }
    if (description == "" && i_creature.skinType == 3) {
        if (description != "")
            description += ", ";
        if (rand(2) == 0)
            description += "gooey";
        else
            description += "slimy";
    }
    if (i_creature.vaginaType() == 5 && Math.floor(Math.random() * 2) == 0) {
        if (description != "") description += ", ";
        options = ["black",
            "onyx",
            "ebony",
            "dusky",
            "sable",
            "obsidian",
            "midnight-hued",
            "jet black"];
        description += randomChoice(options);
    }

    if (description != "")
        description += " ";
    options = ["vagina",
        "pussy",
        "cooter",
        "twat",
        "cunt",
        "snatch",
        "fuck-hole",
        "muff"];
    description += randomChoice(options);
    // Something that would be nice to have but needs a variable in Creature or Character.
    // if(bunnyScore(i_creature) >= 3) description += "rabbit hole";

    return description;
}

export function clitDescription(i_creature: Character): string {
    let description: string = "";
    let options: any[];
    let haveDescription: boolean = false;
    // Length Adjective - 50% chance
    if (rand(2) == 0) {
        // small clits!
        if (i_creature.clitLength <= .5) {
            options = ["tiny ",
                "little ",
                "petite ",
                "diminutive ",
                "miniature "];
            description += randomChoice(options);
        }
        // "average".
        if (i_creature.clitLength > .5 && i_creature.clitLength < 1.5) {
            // no size comment
        }
        // Biggies!
        if (i_creature.clitLength >= 1.5 && i_creature.clitLength < 4) {
            options = ["large ",
                "large ",
                "substantial ",
                "substantial ",
                "considerable "];
            description += randomChoice(options);
        }
        // 'Uge
        if (i_creature.clitLength >= 4) {
            options = ["monster ",
                "tremendous ",
                "colossal ",
                "enormous ",
                "bulky "];
            description += randomChoice(options);
        }
    }
    // Descriptive descriptions - 50% chance of being called
    if (rand(2) == 0) {
        // Doggie descriptors - 50%
        // TODO Conditionals don't make sense, need to introduce a class variable to keep of "something" or move race or Creature/Character
        if (i_creature.skinType == 1 > 2 && !haveDescription && rand(2) == 0) {
            description += "bitch-";
            haveDescription = true;
        }
        /*Horse descriptors - 50%
         if(creature.skinType == 1 > 2 && !descripted && rand(2) == 0) {
         descripted = true;
         descript += "mare-";
         }*/
        // Horny descriptors - 75% chance
        if (i_creature.lust > 70 && rand(4) < 3 && !haveDescription) {
            options = ["throbbing ",
                "pulsating ",
                "hard "];
            description += randomChoice(options);
            haveDescription = true;
        }
        // High libido - always use if no other descript
        if (i_creature.lib > 50 && rand(2) == 0 && !haveDescription) {
            options = ["insatiable ",
                "greedy ",
                "demanding ",
                "rapacious"];
            description += randomChoice(options);
            haveDescription = true;
        }
    }
    if (i_creature.vaginas.length > 0) {
        if (!haveDescription && i_creature.vaginas[0].clitPierced > 0) {
            description += "pierced ";
            haveDescription = true;
        }
    }
    else {
        Logger.error("ERROR: CLITDESCRIPT WITH NO CLIT");
        return ("ERROR: CLITDESCRIPT WITH NO CLIT");
    }

    // Clit nouns
    options = ["clit",
        "clitty",
        "button",
        "pleasure-buzzer",
        "clit",
        "clitty",
        "button",
        "clit",
        "clit",
        "button"];
    description += randomChoice(options);

    return description;
}

// Allvagina descript
export function allVaginaDescript(creature: Character): string {
    if (creature.vaginas.length == 1) return vaginaDescript(creature, rand(creature.vaginas.length - 1));
    if (creature.vaginas.length > 1) return (vaginaDescript(creature, rand(creature.vaginas.length - 1)) + "s");

    Logger.error("ERROR: allVaginaDescript called with no vaginas.");
    return "ERROR: allVaginaDescript called with no vaginas.";
}
