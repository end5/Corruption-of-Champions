// Modify femininity!
export function modFem(char: Character, goal: number, strength: number = 1): string {
    let output: string = "";
    const old: string = faceDesc(char);
    const oldN: number = char.femininity;
    let Changed: boolean = false;
    // If already perfect!
    if (goal == char.femininity)
        return "";
    // If turning MANLYMAN
    if (goal < char.femininity && goal <= 50) {
        char.femininity -= strength;
        // YOUVE GONE TOO FAR! TURN BACK!
        if (char.femininity < goal)
        char.femininity = goal;
        Changed = true;
    }
    // if turning GIRLGIRLY, like duh!
    if (goal > char.femininity && goal >= 50) {
        char.femininity += strength;
        // YOUVE GONE TOO FAR! TURN BACK!
        if (char.femininity > goal)
        char.femininity = goal;
        Changed = true;
    }
    // Fix if it went out of bounds!
    if (char.perks.findByType(PerkLib.Androgyny) < 0)
        fixFemininity(char);
    // Abort if nothing changed!
    if (!Changed)
        return "";
    // See if a change happened!
    if (old != char.faceDesc(char)) {
        // Gain fem?
        if (goal > oldN)
            output = "\n\n<b>Your facial features soften as your body becomes more feminine. (+" + strength + ")</b>";
        if (goal < oldN)
            output = "\n\n<b>Your facial features harden as your body becomes more masculine. (+" + strength + ")</b>";
    }
    // Barely noticable change!
    else {
        if (goal > oldN)
            output = "\n\nThere's a tingling in your " + face(char) + " as it changes imperceptibly towards being more feminine. (+" + strength + ")";
        else if (goal < oldN)
            output = "\n\nThere's a tingling in your " + face(char) + " as it changes imperciptibly towards being more masculine. (+" + strength + ")";
    }
    return output;
}

export function modThickness(char: Character, goal: number, strength: number = 1): string {
    if (goal == char.thickness)
        return "";
    // Lose weight fatty!
    if (goal < char.thickness && goal < 50) {
        char.thickness -= strength;
        // YOUVE GONE TOO FAR! TURN BACK!
        if (char.thickness < goal)
        char.thickness = goal;
    }
    // Sup tubby!
    if (goal > char.thickness && goal > 50) {
        char.thickness += strength;
        // YOUVE GONE TOO FAR! TURN BACK!
        if (char.thickness > goal)
            char.thickness = goal;
    }
    trace("MOD THICKNESS FIRE");
    // DIsplay 'U GOT FAT'
    if (goal >= char.thickness && goal >= 50)
        return "\n\nYour center of balance changes a little bit as your body noticeably widens. (+" + strength + " body thickness)";
    // GET THIN BITCH
    else if (goal <= char.thickness && goal <= 50)
        return "\n\nEach movement feels a tiny bit easier than the last.  Did you just lose a little weight!? (+" + strength + " thin)";
    return "";
}

export function modTone(char: Character, goal: number, strength: number = 1): string {
    if (goal == char.tone)
        return "";
    // Lose muscle visibility!
    if (goal < char.tone && goal < 50) {
        char.tone -= strength;
        // YOUVE GONE TOO FAR! TURN BACK!
        if (char.tone < goal) {
            char.tone = goal;
            return "\n\nYou've lost some tone, but can't lose any more this way. (-" + strength + " muscle tone)";
        }
    }
    // MOAR hulkness
    if (goal > char.tone && goal > 50) {
        char.tone += strength;
        // YOUVE GONE TOO FAR! TURN BACK!
        if (char.tone > goal) {
            char.tone = goal;
            return "\n\nYou've gained some muscle tone, but can't gain any more this way. (+" + strength + " muscle tone)";
        }
    }
    // DIsplay BITCH I WORK OUT
    if (goal >= char.tone && goal > 50)
        return "\n\nYour body feels a little more solid as you move, and your muscles look slightly more visible. (+" + strength + " muscle tone)";
    // Display DERP I HAVE GIRL MUSCLES
    else if (goal <= char.tone && goal < 50)
        return "\n\nMoving brings with it a little more jiggle than you're used to.  You don't seem to have gained weight, but your muscles look less visible. (-" + strength + " muscle tone)";
    return "";
}

// Run this every hour to 'fix' femininity.
export function fixFemininity(char: Character): string {
    let output: string = "";
    // Genderless/herms share the same bounds
    if (char.gender == 0 || char.gender == 3) {
        if (char.femininity < 20) {
            output += "\n<b>Your incredibly masculine, chiseled features become a little bit softer from your body's changing hormones.";
            if (char.hasBeard()) {
                output += "  As if that wasn't bad enough, your " + beard(char) + " falls out too!";
                char.beardLength = 0;
                char.beardStyle = 0;
            }
            output += "</b>\n";
            char.femininity = 20;
        }
        else if (char.femininity > 85) {
            output += "\n<b>You find your overly feminine face loses a little bit of its former female beauty due to your body's changing hormones.</b>\n";
            char.femininity = 85;
        }
    }
    // GURLS!
    else if (char.gender == 2) {
        if (char.femininity < 30) {
            output += "\n<b>Your incredibly masculine, chiseled features become a little bit softer from your body's changing hormones.";
            if (char.hasBeard()) {
                output += "  As if that wasn't bad enough, your " + beard(char) + " falls out too!";
                char.beardLength = 0;
                char.beardStyle = 0;
            }
            output += "</b>\n";
            char.femininity = 30;
        }
    }
    // BOIZ!
    else if (char.gender == 1) {
        if (char.femininity > 70) {
            output += "\n<b>You find your overly feminine face loses a little bit of its former female beauty due to your body's changing hormones.</b>\n";
            char.femininity = 70;
        }
        if (char.femininity > 40 && char.hasBeard()) {
            output += "\n<b>Your beard falls out, leaving you with " + faceDesc(char) + ".</b>\n";
            char.beardLength = 0;
            char.beardStyle = 0;
        }
    }
    if (char.gender != 1 && char.hasBeard()) {
        output += "\n<b>Your beard falls out, leaving you with " + faceDesc(char) + ".</b>\n";
        char.beardLength = 0;
        char.beardStyle = 0;
    }
    return output;
}
