/**
 * Describe creatures balls.
 * @param    i_forcedSize    Force a description of the size of the balls
 * @param    i_plural        Show plural forms
 * @param    i_creature        Monster, Player or NonPlayer
 * @param    i_withArticle    Show description with article in front
 * @return    Full description of balls
 */
export function ballsDescription(i_forcedSize: boolean, i_plural: boolean, i_creature: Character, i_withArticle: boolean = false): string {
    if (i_creature.balls == 0) return "prostate";

    const haveDescription: boolean = false;
    const rando: number = 0;
    let description: string = "";
    let options: any[];

    if (i_plural && (i_creature.effects.findByType(StatusAffects.Uniball) < 0)) {
        if (i_creature.balls == 1) {
            if (i_withArticle) {
                options = ["a single",
                    "a solitary",
                    "a lone",
                    "an individual"];
            }
            else {
                options = ["single",
                    "solitary",
                    "lone",
                    "individual"];
            }
            description += randomChoice(options);
        }
        else if (i_creature.balls == 2) {
            if (i_withArticle) {
                options = ["a pair of",
                    "two",
                    "a duo of"];
            }
            else {
                options = ["pair of",
                    "two",
                    "duo of"];
            }
            description += randomChoice(options);
        }
        else if (i_creature.balls == 3) {
            options = ["three",
                "triple"];
            (i_withArticle) ? options.push("a trio of") : options.push("trio of");
            description += randomChoice(options);
        }
        else if (i_creature.balls == 4) {
            options = ["four",
                "quadruple"];
            (i_withArticle) ? options.push("a quartette of") : options.push("quartette of");
            description += randomChoice(options);
        }
        else {
            if (i_withArticle) {
                options = ["a multitude of",
                    "many",
                    "a large handful of"];
            }
            else {
                options = ["multitude of",
                    "many",
                    "large handful of"];
            }
            description += randomChoice(options);
        }
    }
    // size!
    if (i_creature.ballSize > 1 && (rand(3) <= 1 || i_forcedSize)) {
        if (description) description += " ";

        if (i_creature.ballSize >= 18)
            description += "hideously swollen and oversized";
        else if (i_creature.ballSize >= 15)
            description += "beachball-sized";
        else if (i_creature.ballSize >= 12)
            description += "watermelon-sized";
        else if (i_creature.ballSize >= 9)
            description += "basketball-sized";
        else if (i_creature.ballSize >= 7)
            description += "soccerball-sized";
        else if (i_creature.ballSize >= 5)
            description += "cantaloupe-sized";
        else if (i_creature.ballSize >= 4)
            description += "grapefruit-sized";
        else if (i_creature.ballSize >= 3)
            description += "apple-sized";
        else if (i_creature.ballSize >= 2)
            description += "baseball-sized";
        else if (i_creature.ballSize > 1)
            description += "large";

    }
    // UNIBALL
    if (i_creature.effects.findByType(StatusAffects.Uniball) >= 0) {
        if (description) description += " ";
        options = ["tightly-compressed",
            "snug",
            "cute",
            "pleasantly squeezed",
            "compressed-together"];
        description += randomChoice(options);

    }
    // Descriptive
    if (i_creature.hoursSinceCum >= 48 && rand(2) == 0 && !i_forcedSize) {
        if (description) description += " ";
        options = ["overflowing",
            "swollen",
            "cum-engorged"];
        description += randomChoice(options);

    }
    // lusty
    if (i_creature.lust > 90 && (description == "") && rand(2) == 0 && !i_forcedSize) {
        options = ["eager",
            "full",
            "needy",
            "desperate",
            "throbbing",
            "heated",
            "trembling",
            "quivering",
            "quaking"];
        description += randomChoice(options);

    }
    // Slimy skin
    if (i_creature.skinType == 3) {
        if (description) description += " ";
        options = ["goopey",
            "gooey",
            "slimy"];
        description += randomChoice(options);

    }
    if (description) description += " ";

    options = ["nut",
        "gonad",
        "teste",
        "testicle",
        "testicle",
        "ball",
        "ball",
        "ball"];

    // I don't know how this was ever supposed to work.
    // if (i_creature.balls == 4 && i_plural) options.push("quads", "quads", "quads");

    description += randomChoice(options);
    if (i_plural) description += "s";

    if (i_creature.effects.findByType(StatusAffects.Uniball) >= 0 && rand(2) == 0) {
        if (rand(3) == 0)
            description += " merged into a cute, spherical package";
        else if (rand(2) == 0)
            description += " combined into a round, girlish shape";
        else
            description += " squeezed together into a perky, rounded form";
    }
    return description;
}

// Returns random description of scrotum
export function sackDescript(i_creature: Character): string {
    if (i_creature.balls == 0) return "prostate";

    let options: any[];
    let description: string = "";

    options = ["scrotum",
        "sack",
        "nutsack",
        "ballsack",
        "beanbag",
        "pouch"];

    description += randomChoice(options);

    return description;
}

export function ballsDescriptLight(creature: Character, forcedSize: boolean = true): string {
    return Appearance.ballsDescription(forcedSize, true, creature);
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
