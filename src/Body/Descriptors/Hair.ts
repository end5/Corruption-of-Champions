export function hairOrFur(i_creature: Character): string {
    if (i_creature.skinType == 1)
        return "fur";
    else
        return "hair";
}

export function hairDescription(i_creature: Character): string {
    let description: string = "";
    let options: any[];
    //
    // LENGTH ADJECTIVE!
    //
    if (i_creature.hairLength == 0) {
        options = ["shaved",
            "bald",
            "smooth",
            "hairless",
            "glabrous"];
        description = randomChoice(options) + " head";
        return description;
    }
    if (i_creature.hairLength < 1) {
        options = ["close-cropped, ",
            "trim, ",
            "very short, "];
        description += randomChoice(options);
    }
    if (i_creature.hairLength >= 1 && i_creature.hairLength < 3) description += "short, ";
    if (i_creature.hairLength >= 3 && i_creature.hairLength < 6) description += "shaggy, ";
    if (i_creature.hairLength >= 6 && i_creature.hairLength < 10) description += "moderately long, ";
    if (i_creature.hairLength >= 10 && i_creature.hairLength < 16) {
        if (rand(2) == 0) description += "long, ";
        else description += "shoulder-length, ";
    }
    if (i_creature.hairLength >= 16 && i_creature.hairLength < 26) {
        if (rand(2) == 0) description += "very long, ";
        else description += "flowing locks of ";
    }
    if (i_creature.hairLength >= 26 && i_creature.hairLength < 40) description += "ass-length, ";
    if (i_creature.hairLength >= 40 && i_creature.hairLength < i_creature.tallness) description += "obscenely long, ";
    else if (i_creature.hairLength >= i_creature.tallness) {
        if (rand(2) == 0) description += "floor-length, ";
        else description += "floor-dragging, ";
    }
    //
    // COLORS
    //
    description += i_creature.hairColor + " ";
    //
    // HAIR WORDS
    //
    // If furry and longish hair sometimes call it a mane (50%)
    if (i_creature.skinType == 1 && i_creature.hairLength > 3 && rand(2) == 0) {
        if (i_creature.hairType == 1) description += "feather-";
        else if (i_creature.hairType == 2) description += "transparent ";
        else if (i_creature.hairType == 3) description += "goo-";
        else if (i_creature.hairType == 4) description += "tentacle-";
        description += "mane";
        return description;
    }
    // if medium length refer to as locks sometimes
    // CUT - locks is plural and screws up tense.
    /*if(creature.hairLength >= 3 && creature.hairLength < 16 && rand(2) == 0) {
     descript += "locks of hair";
     return descript;
     }*/
    // If nothing else used, use hair!
    if (i_creature.hairType == 1) description += "feather-";
    else if (i_creature.hairType == 2) description += "transparent ";
    else if (i_creature.hairType == 3) description += "goo-";
    else if (i_creature.hairType == 4) description += "tentacle-";
    description += "hair";

    return description;
}
