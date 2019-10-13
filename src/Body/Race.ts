export function race(char: Character) {
    // Determine race type:
    let raceStr = "human";
    if (char.lowerBody == 4)
        raceStr = "centaur";
    if (char.lowerBody == 11)
        raceStr = "pony-kin";
    if (catScore(char) >= 4)
        raceStr = "cat-" + mf(char, "boy", "girl");
    if (lizardScore(char) >= 4) {
        if (char.gender == 0)
            raceStr = "lizan";
        else if (char.gender == 1)
            raceStr = "male lizan";
        else if (char.gender == 2)
            raceStr = "female lizan";
        else
            raceStr = "hermaphrodite lizan";
    }
    if (dragonScore(char) >= 4) {
        raceStr = "dragon-morph";
        if (char.faceType == 0)
            raceStr = "dragon-" + mf(char, "man", "girl");
    }
    if (raccoonScore(char) >= 4) {
        raceStr = "raccoon-morph";
        if (char.balls > 0 && char.ballSize > 5)
            raceStr = "tanuki-morph";
    }
    if (dogScore(char) >= 4) {
        raceStr = "dog-morph";
        if (char.faceType == 0)
            raceStr = "dog-" + mf(char, "man", "girl");
    }
    if (foxScore(char) >= 4) {
        if (char.skinType == 1)
            raceStr = "fox-morph";
        else
            raceStr = "fox-" + mf(char, "morph", "girl");
    }
    if (ferretScore(char) >= 4) {
        if (char.skinType == 1)
            raceStr = "ferret-morph";
        else
            raceStr = "ferret-" + mf(char, "morph", "girl");
    }
    if (kitsuneScore(char) >= 4) {
        raceStr = "kitsune";
    }
    if (horseScore(char) >= 3) {
        if (char.lowerBody == 4)
            raceStr = "centaur-morph";
        else
            raceStr = "equine-morph";
    }
    if (mutantScore(char) >= 5 && raceStr == "human")
        raceStr = "corrupted mutant";
    if (minoScore(char) >= 4)
        raceStr = "minotaur-morph";
    if (cowScore(char) > 5) {
        raceStr = "cow-";
        raceStr += mf(char, "morph", "girl");
    }
    if (beeScore(char) >= 5)
        raceStr = "bee-morph";
    if (goblinScore(char) >= 5)
        raceStr = "goblin";
    if (humanScore(char) >= 5 && raceStr == "corrupted mutant")
        raceStr = "somewhat human mutant";
    if (demonScore(char) > 4)
        raceStr = "demon-morph";
    if (sharkScore(char) >= 3)
        raceStr = "shark-morph";
    if (bunnyScore(char) >= 4)
        raceStr = "bunny-" + mf(char, "boy", "girl");
    if (harpyScore(char) >= 4) {
        if (char.gender >= 2)
            raceStr = "harpy";
        else
            raceStr = "avian";
    }
    if (spiderScore(char) >= 4) {
        raceStr = "spider-morph";
        if (mf(char, "no", "yes") == "yes")
            raceStr = "spider-girl";
        if (char.lowerBody == 16)
            raceStr = "drider";
    }
    if (kangaScore(char) >= 4)
        raceStr = "kangaroo-morph";
    if (mouseScore(char) >= 3) {
        if (char.faceType != 16)
            raceStr = "mouse-" + mf(char, "boy", "girl");
        else
            raceStr = "mouse-morph";
    }
    if (char.lowerBody == 3)
        raceStr = "naga";
    if (char.lowerBody == 4)
        raceStr = "centaur";

    if (gooScore(char) >= 3) {
        raceStr = "goo-";
        raceStr += mf(char, "boi", "girl");
    }
    return raceStr;
}

// determine demon rating
export function demonScore(char: Character): number {
    let demonCounter: number = 0;
    if (char.hornType == 1 && char.horns > 0)
        demonCounter++;
    if (char.hornType == 1 && char.horns > 4)
        demonCounter++;
    if (char.tailType == 3)
        demonCounter++;
    if (char.wingType == 6 || char.wingType == 7)
        demonCounter++;
    if (char.skinType == 0 && char.cor > 50)
        demonCounter++;
    if (char.faceType == 0 && char.cor > 50)
        demonCounter++;
    if (char.lowerBody == 5 || char.lowerBody == 6)
        demonCounter++;
    if (char.cocks.demonCocks() > 0)
        demonCounter++;
    return demonCounter;
}

// Determine Human Rating
export function humanScore(char: Character): number {
    let humanCounter: number = 0;
    if (char.faceType == 0)
        humanCounter++;
    if (char.skinType == 0)
        humanCounter++;
    if (char.horns == 0)
        humanCounter++;
    if (char.tailType == 0)
        humanCounter++;
    if (char.wingType == 0)
        humanCounter++;
    if (char.lowerBody == 0)
        humanCounter++;
    if (char.cocks.normalCocks() == 1 && char.cocks.length == 1)
        humanCounter++;
    if (char.breastRows.length == 1 && char.skinType == 0)
        humanCounter++;
    return humanCounter;
}

// Determine minotaur rating
export function minoScore(char: Character): number {
    let minoCounter: number = 0;
    if (char.faceType == 3)
        minoCounter++;
    if (char.earType == 3)
        minoCounter++;
    if (char.tailType == 4)
        minoCounter++;
    if (char.hornType == 2)
        minoCounter++;
    if (char.lowerBody == 1 && minoCounter > 0)
        minoCounter++;
    if (char.tallness > 80 && minoCounter > 0)
        minoCounter++;
    if (char.cocks.length > 0 && minoCounter > 0) {
        if (char.cocks.horseCocks() > 0)
            minoCounter++;
    }
    if (char.vaginas.length > 0)
        minoCounter--;
    return minoCounter;
}

// Determine cow rating
export function cowScore(char: Character): number {
    let minoCounter: number = 0;
    if (char.faceType == 0)
        minoCounter++;
    if (char.faceType == 3)
        minoCounter--;
    if (char.earType == 3)
        minoCounter++;
    if (char.tailType == 4)
        minoCounter++;
    if (char.hornType == 2)
        minoCounter++;
    if (char.lowerBody == 1 && minoCounter > 0)
        minoCounter++;
    if (char.tallness >= 73 && minoCounter > 0)
        minoCounter++;
    if (char.vaginas.length > 0)
        minoCounter++;
    if (char.breasts.biggestTitSize() > 4 && minoCounter > 0)
        minoCounter++;
    if (char.breasts.biggestLactation() > 2 && minoCounter > 0)
        minoCounter++;
    return minoCounter;
}

export function sandTrapScore(char: Character): number {
    let counter: number = 0;
    if (char.effects.findByType(StatusAffects.BlackNipples) >= 0)
        counter++;
    if (char.hasVagina() && char.vaginaType() == 5)
        counter++;
    if (char.eyeType == 2)
        counter++;
    if (char.wingType == 12)
        counter++;
    if (char.effects.findByType(StatusAffects.Uniball) >= 0)
        counter++;
    return counter;
}

// Determine Bee Rating
export function beeScore(char: Character): number {
    let beeCounter: number = 0;
    if (char.hairColor == "shiny black")
        beeCounter++;
    if (char.hairColor == "black and yellow")
        beeCounter += 2;
    if (char.antennae > 0) {
        beeCounter++;
        if (char.faceType == 0)
            beeCounter++;
    }
    if (char.lowerBody == 7) {
        beeCounter++;
        if (char.vaginas.length == 1)
            beeCounter++;
    }
    if (char.tailType == 6)
        beeCounter++;
    if (char.wingType == 1)
        beeCounter++;
    if (char.wingType == 2)
        beeCounter++;
    return beeCounter;
}
// Determine Ferret Rating!
export function ferretScore(char: Character): number {
    let counter: number = 0;
    if (char.faceType == FACE_FERRET_MASK) counter++;
    if (char.faceType == FACE_FERRET) counter += 2;
    if (char.earType == EARS_FERRET) counter++;
    if (char.tailType == TAIL_TYPE_FERRET) counter++;
    if (char.lowerBody == LOWER_BODY_FERRET) counter++;
    if (char.skinType == SKIN_TYPE_FUR && counter > 0) counter++;
    return counter;
}
// Determine Dog Rating
export function dogScore(char: Character): number {
    let dogCounter: number = 0;
    if (char.faceType == 2)
        dogCounter++;
    if (char.earType == 2)
        dogCounter++;
    if (char.tailType == 2)
        dogCounter++;
    if (char.lowerBody == 2)
        dogCounter++;
    if (char.cocks.dogCocks() > 0)
        dogCounter++;
    if (char.breastRows.length > 1)
        dogCounter++;
    if (char.breastRows.length == 3)
        dogCounter++;
    if (char.breastRows.length > 3)
        dogCounter--;
    // Fur only counts if some canine features are present
    if (char.skinType == 1 && dogCounter > 0)
        dogCounter++;
    return dogCounter;
}

export function mouseScore(char: Character): number {
    let coonCounter: number = 0;
    if (char.earType == 12)
        coonCounter++;
    if (char.tailType == 16)
        coonCounter++;

    if (char.faceType == 15)
        coonCounter++;
    if (char.faceType == 16)
        coonCounter += 2;
    // Fur only counts if some canine features are present
    if (char.skinType == 1 && coonCounter > 0)
        coonCounter++;

    if (char.tallness < 55 && coonCounter > 0)
        coonCounter++;
    if (char.tallness < 45 && coonCounter > 0)
        coonCounter++;
    return coonCounter;
}

export function raccoonScore(char: Character): number {
    let coonCounter: number = 0;
    if (char.faceType == 13)
        coonCounter++;
    if (char.faceType == 14)
        coonCounter += 2;
    if (char.earType == 11)
        coonCounter++;
    if (char.tailType == 15)
        coonCounter++;
    if (char.lowerBody == 19)
        coonCounter++;
    if (coonCounter > 0 && char.balls > 0)
        coonCounter++;
    // Fur only counts if some canine features are present
    if (char.skinType == 1 && coonCounter > 0)
        coonCounter++;
    return coonCounter;
}

// Determine Fox Rating
export function foxScore(char: Character): number {
    let foxCounter: number = 0;
    if (char.faceType == 11)
        foxCounter++;
    if (char.earType == 9)
        foxCounter++;
    if (char.tailType == 13)
        foxCounter++;
    if (char.lowerBody == 17)
        foxCounter++;
    if (char.cocks.dogCocks() > 0 && foxCounter > 0)
        foxCounter++;
    if (char.breastRows.length > 1 && foxCounter > 0)
        foxCounter++;
    if (char.breastRows.length == 3 && foxCounter > 0)
        foxCounter++;
    if (char.breastRows.length == 4 && foxCounter > 0)
        foxCounter++;
    // Fur only counts if some canine features are present
    if (char.skinType == 1 && foxCounter > 0)
        foxCounter++;
    return foxCounter;
}

// Determine cat Rating
export function catScore(char: Character): number {
    let catCounter: number = 0;
    if (char.faceType == 6)
        catCounter++;
    if (char.earType == 5)
        catCounter++;
    if (char.tailType == 8)
        catCounter++;
    if (char.lowerBody == 9)
        catCounter++;
    if (char.cocks.catCocks() > 0)
        catCounter++;
    if (char.breastRows.length > 1 && catCounter > 0)
        catCounter++;
    if (char.breastRows.length == 3 && catCounter > 0)
        catCounter++;
    if (char.breastRows.length > 3)
        catCounter -= 2;
    // Fur only counts if some canine features are present
    if (char.skinType == 1 && catCounter > 0)
        catCounter++;
    return catCounter;
}

// Determine lizard rating
export function lizardScore(char: Character): number {
    let lizardCounter: number = 0;
    if (char.faceType == 7)
        lizardCounter++;
    if (char.earType == 6)
        lizardCounter++;
    if (char.tailType == 9)
        lizardCounter++;
    if (char.lowerBody == 10)
        lizardCounter++;
    if (char.cocks.lizardCocks() > 0)
        lizardCounter++;
    if (char.horns > 0 && (char.hornType == 3 || char.hornType == 4))
        lizardCounter++;
    if (char.skinType == 2)
        lizardCounter++;
    return lizardCounter;
}

export function spiderScore(char: Character): number {
    let score: number = 0;
    if (char.eyeType == 1)
        score += 2;
    if (char.faceType == 10)
        score++;
    if (char.armType == 2)
        score++;
    if (char.lowerBody == 15 || char.lowerBody == 16)
        score += 2;
    else if (score > 0)
        score--;
    if (char.tailType == 5)
        score += 2;
    if (char.skinType > 0 && score > 0)
        score--;
    return score;
}

// Determine Horse Rating
export function horseScore(char: Character): number {
    let horseCounter: number = 0;
    if (char.faceType == 1)
        horseCounter++;
    if (char.earType == 1)
        horseCounter++;
    if (char.tailType == 1)
        horseCounter++;
    if (char.cocks.horseCocks() > 0)
        horseCounter++;
    if (char.lowerBody == 1 || char.lowerBody == 4)
        horseCounter++;
    // Fur only counts if some equine features are present
    if (char.skinType == 1 && horseCounter > 0)
        horseCounter++;
    return horseCounter;
}

// Determine kitsune Rating
export function kitsuneScore(char: Character): number {
    let kitsuneCounter: number = 0;
    // If the character has fox ears, +1
    if (char.earType == 9)
        kitsuneCounter++;
    // If the character has a fox tail, +1
    if (char.tailType == 13)
        kitsuneCounter++;
    // If the character has two or more fox tails, +2
    if (char.tailType == 13 && char.tailVenom >= 2)
        kitsuneCounter += 2;
    // If the character has tattooed skin, +1
    // 9999
    // If the character has a 'vag of holding', +1
    if (char.vaginalCapacity() >= 8000)
        kitsuneCounter++;
    // If the character's kitsune score is greater than 0 and:
    // If the character has a normal face, +1
    if (kitsuneCounter > 0 && char.faceType == 0)
        kitsuneCounter++;
    // If the character's kitsune score is greater than 1 and:
    // If the character has "blonde","black","red","white", or "silver" hair, +1
    if (kitsuneCounter > 0 && (char.hairColor == "golden blonde" || char.hairColor == "black" || char.hairColor == "red" || char.hairColor == "white" || char.hairColor == "silver blonde"))
        kitsuneCounter++;
    // If the character's femininity is 40 or higher, +1
    if (kitsuneCounter > 0 && char.femininity >= 40)
        kitsuneCounter++;
    // If the character has fur, scales, or gooey skin, -1
    if (char.skinType > 1)
        kitsuneCounter -= 2;
    if (char.skinType == 1)
        kitsuneCounter--;
    // If the character has abnormal legs, -1
    if (char.lowerBody != 0)
        kitsuneCounter--;
    // If the character has a nonhuman face, -1
    if (char.faceType != 0)
        kitsuneCounter--;
    // If the character has ears other than fox ears, -1
    if (char.earType != 9)
        kitsuneCounter--;
    // If the character has tail(s) other than fox tails, -1
    if (char.tailType != 13)
        kitsuneCounter--;

    return kitsuneCounter;

}

// Determine Horse Rating
export function dragonScore(char: Character): number {
    let dragonCounter: number = 0;
    if (char.faceType == 12)
        dragonCounter++;
    if (char.earType == 10)
        dragonCounter++;
    if (char.tailType == 14)
        dragonCounter++;
    if (char.tongueType == 3)
        dragonCounter++;
    if (char.cocks.dragonCocks() > 0)
        dragonCounter++;
    if (char.wingType == 10)
        dragonCounter++;
    if (char.wingType == 11)
        dragonCounter += 2;
    if (char.lowerBody == 18)
        dragonCounter++;
    if (char.skinType == 2 && dragonCounter > 0)
        dragonCounter++;
    if (char.hornType == HORNS_DRACONIC_X4_12_INCH_LONG || char.hornType == HORNS_DRACONIC_X2)
        dragonCounter++;
    return dragonCounter;
}

// Goblinscore
export function goblinScore(char: Character): number {
    let horseCounter: number = 0;
    if (char.earType == 4)
        horseCounter++;
    if (char.skinTone == "pale yellow" || char.skinTone == "grayish-blue" || char.skinTone == "green" || char.skinTone == "dark green")
        horseCounter++;
    if (horseCounter > 0) {
        if (char.faceType == 0)
            horseCounter++;
        if (char.tallness < 48)
            horseCounter++;
        if (char.hasVagina())
            horseCounter++;
        if (char.lowerBody == 0)
            horseCounter++;
    }
    return horseCounter;
}

// Gooscore
export function gooScore(char: Character): number {
    let gooCounter: number = 0;
    if (char.hairType == 3)
        gooCounter++;
    if (char.skinAdj == "slimy")
        gooCounter++;
    if (char.lowerBody == 8)
        gooCounter++;
    if (char.vaginalCapacity() > 9000)
        gooCounter++;
    if (char.effects.findByType(StatusAffects.SlimeCraving) >= 0)
        gooCounter++;
    return gooCounter;
}

// Nagascore
export function nagaScore(char: Character): number {
    let nagaCounter: number = 0;
    if (char.faceType == 5)
        nagaCounter++;
    if (char.tongueType == 1)
        nagaCounter++;
    if (nagaCounter > 0 && char.antennae == 0)
        nagaCounter++;
    if (nagaCounter > 0 && char.wingType == 0)
        nagaCounter++;
    return nagaCounter;
}

// Bunnyscore
export function bunnyScore(char: Character): number {
    let bunnyCounter: number = 0;
    if (char.faceType == 8)
        bunnyCounter++;
    if (char.tailType == 10)
        bunnyCounter++;
    if (char.earType == 7)
        bunnyCounter++;
    if (char.lowerBody == 12)
        bunnyCounter++;
    // More than 2 char.balls reduces bunny score
    if (char.balls > 2 && bunnyCounter > 0)
        bunnyCounter--;
    // Human skin on bunmorph adds
    if (char.skinType == 0 && bunnyCounter > 1)
        bunnyCounter++;
    // No wings and char.antennae a plus
    if (bunnyCounter > 0 && char.antennae == 0)
        bunnyCounter++;
    if (bunnyCounter > 0 && char.wingType == 0)
        bunnyCounter++;
    return bunnyCounter;
}

// Harpyscore
export function harpyScore(char: Character): number {
    let harpy: number = 0;
    if (char.armType == 1)
        harpy++;
    if (char.hairType == 1)
        harpy++;
    if (char.wingType == 9)
        harpy++;
    if (char.tailType == 11)
        harpy++;
    if (char.lowerBody == 13)
        harpy++;
    if (harpy >= 2 && char.faceType == 0)
        harpy++;
    if (harpy >= 2 && (char.earType == 0 || char.earType == 4))
        harpy++;
    return harpy;
}

// Kangascore
export function kangaScore(char: Character): number {
    let kanga: number = 0;
    if (char.cocks.kangaCocks() > 0)
        kanga++;
    if (char.earType == 8)
        kanga++;
    if (char.tailType == 12)
        kanga++;
    if (char.lowerBody == 14)
        kanga++;
    if (char.faceType == 9)
        kanga++;
    if (kanga >= 2 && char.skinType == 1)
        kanga++;
    return kanga;
}

// sharkscore
export function sharkScore(char: Character): number {
    let sharkCounter: number = 0;
    if (char.faceType == 4)
        sharkCounter++;
    if (char.wingType == 8)
        sharkCounter++;
    if (char.tailType == 7)
        sharkCounter++;
    return sharkCounter;
}

// Determine Mutant Rating
export function mutantScore(char: Character): number {
    let mutantCounter: number = 0;
    if (char.faceType > 0)
        mutantCounter++;
    if (char.skinType > 0)
        mutantCounter++;
    if (char.tailType > 0)
        mutantCounter++;
    if (char.cocks.length > 1)
        mutantCounter++;
    if (char.cocks.length > 0 && char.hasVagina())
        mutantCounter++;
    if (char.breasts.hasFuckableNipples())
        mutantCounter++;
    if (char.breastRows.length > 1)
        mutantCounter++;
    if (char.faceType == 1) {
        if (char.skinType == 1)
            mutantCounter--;
        if (char.tailType == 1)
            mutantCounter--;
    }
    if (char.faceType == 2) {
        if (char.skinType == 1)
            mutantCounter--;
        if (char.tailType == 2)
            mutantCounter--;
    }
    return mutantCounter--;
}
