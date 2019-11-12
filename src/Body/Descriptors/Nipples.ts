export function nippleDescription(i_creature: Character, i_rowNum: number): string {
    // DEBUG SHIT!
    if (i_rowNum > (i_creature.breastRows.length - 1)) {
        Logger.error("<B>Error: Invalid breastRows (" + i_rowNum + ") passed to nippleDescription()</b>");
        return "<B>Error: Invalid breastRows (" + i_rowNum + ") passed to nippleDescription()</b>";
    }
    if (i_rowNum < 0) {
        Logger.error("<B>Error: Invalid breastRows (" + i_rowNum + ") passed to nippleDescription()</b>");
        return "<B>Error: Invalid breastRows (" + i_rowNum + ") passed to nippleDescription()</b>";
    }
    let haveDescription: boolean = false;
    let description: string = "";
    let options: any[];
    const rando: number = 0;
    // Size descriptors 33% chance
    if (rand(4) == 0) {
        // TINAHHHH
        if (i_creature.nippleLength < .25) {
            options = ["tiny ",
                "itty-bitty ",
                "teeny-tiny ",
                "dainty "];
            description += randomChoice(options);
        }
        // Prominant
        if (i_creature.nippleLength >= .4 && i_creature.nippleLength < 1) {
            options = ["prominent ",
                "pencil eraser-sized ",
                "eye-catching ",
                "pronounced ",
                "striking "];
            description += randomChoice(options);
        }
        // Big 'uns
        if (i_creature.nippleLength >= 1 && i_creature.nippleLength < 2) {
            options = ["forwards-jutting ",
                "over-sized ",
                "fleshy ",
                "large protruding "];
            description += randomChoice(options);
        }
        // 'Uge
        if (i_creature.nippleLength >= 2 && i_creature.nippleLength < 3.2) {
            options = ["elongated ",
                "massive ",
                "awkward ",
                "lavish ",
                "hefty "];
            description += randomChoice(options);
        }
        // Massive
        if (i_creature.nippleLength >= 3.2) {
            options = ["bulky ",
                "ponderous ",
                "thumb-sized ",
                "cock-sized ",
                "cow-like "];
            description += randomChoice(options);
        }
        haveDescription = true;
    }
    // Milkiness/Arousal/Wetness Descriptors 33% of the time
    if (rand(3) == 0 && !haveDescription) {
        // Fuckable chance first!
        if (i_creature.breastRows.hasFuckableNipples()) {
            // Fuckable and lactating?
            if (i_creature.breastRows.biggestLactation() > 1) {
                options = ["milk-lubricated ",
                    "lactating ",
                    "lactating ",
                    "milk-slicked ",
                    "milky "];
                description += randomChoice(options);
            }
            // Just fuckable
            else {
                options = ["wet ",
                    "mutated ",
                    "slimy ",
                    "damp ",
                    "moist ",
                    "slippery ",
                    "oozing ",
                    "sloppy ",
                    "dewy "];
                description += randomChoice(options);
            }
            haveDescription = true;
        }
        // Just lactating!
        else if (i_creature.breastRows.biggestLactation() > 0) {
            // Light lactation
            if (i_creature.breastRows.biggestLactation() <= 1) {
                options = ["milk moistened ",
                    "slightly lactating ",
                    "milk-dampened "];
                description += randomChoice(options);
            }
            // Moderate lactation
            if (i_creature.breastRows.biggestLactation() > 1 && i_creature.breastRows.biggestLactation() <= 2) {
                options = ["lactating ",
                    "milky ",
                    "milk-seeping "];
                description += randomChoice(options);
            }
            // Heavy lactation
            if (i_creature.breastRows.biggestLactation() > 2) {
                options = ["dripping ",
                    "dribbling ",
                    "milk-leaking ",
                    "drooling "];
                description += randomChoice(options);
            }
            haveDescription = true;
        }
    }
    // Possible arousal descriptors
    else if (rand(3) == 0 && !haveDescription) {
        if (i_creature.lust > 50 && i_creature.lust < 75) {
            options = ["erect ",
                "perky ",
                "erect ",
                "firm ",
                "tender "];
            description += randomChoice(options);
            haveDescription = true;
        }
        if (i_creature.lust >= 75) {
            options = ["throbbing ",
                "trembling ",
                "needy ",
                "throbbing "];
            description += randomChoice(options);
            haveDescription = true;
        }
    }
    if (!haveDescription && rand(2) == 0 && i_creature.nipplesPierced > 0 && i_rowNum == 0) {
        if (i_creature.nipplesPierced == 5) description += "chained ";
        else description += "pierced ";
        haveDescription = true;
    }
    if (!haveDescription && i_creature.skinType == 3) {
        options = ["slime-slick ",
            "goopy ",
            "slippery "];
        description += randomChoice(options);
    }
    if (!haveDescription && i_creature.effects.findByType(StatusAffects.BlackNipples) >= 0) {
        options = ["black ",
            "ebony ",
            "sable "];
        description += randomChoice(options);
    }

    // Nounsssssssss*BOOM*
    let choice: number = 0;
    choice = rand(5);
    if (choice == 0) description += "nipple";
    if (choice == 1) {
        if (i_creature.nippleLength < .5) description += "perky nipple";
        else description += "cherry-like nub";
    }
    if (choice == 2) {
        if (i_creature.breastRows.hasFuckableNipples()) description += "fuckable nip";
        else {
            if (i_creature.breastRows.biggestLactation() >= 1 && i_creature.nippleLength >= 1) description += "teat";
            else description += "nipple";
        }
    }
    if (choice == 3) {
        if (i_creature.breastRows.hasFuckableNipples()) description += "nipple-hole";
        else {
            if (i_creature.breastRows.biggestLactation() >= 1 && i_creature.nippleLength >= 1) description += "teat";
            else description += "nipple";
        }
    }
    if (choice == 4) {
        if (i_creature.breastRows.hasFuckableNipples()) description += "nipple-cunt";
        else description += "nipple";
    }
    return description;
    /*OLD
     if(creature.breastRows[rowNum].lactationMultiplier >= 1.5 && creature.breastRows[rowNum].lactationMultiplier < 1.75) {
     if(creature.breastRows[rowNum].milkFullness > 75) return "over-full leaking teat";
     if(rand(2) == 0) return "milky teat";
     else return "milk spout";
     }
     if(creature.breastRows[rowNum].lactationMultiplier >= 1.75) {
     if(creature.breastRows[rowNum].milkFullness > 75) return "over-full leaking teat";
     if(rand(2) == 0) return "milk-drooling teat";
     else return "drippy cow-teat";
     }
     if(creature.lust > 75) {
     if(rand(2) == 0) return "painfully hard nipple";
     else return "over-stimulated nipple";
     }
     if(creature.lust > 50) {
     if(rand(2) == 0) return "erect nipple";
     else return "hard nipple";
     }
     if(creature.breastRows[rowNum].milkFullness > 75) return "milky over-full nipple";
     return "nipple";
     */
}
