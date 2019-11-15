
export function cockDescript(creature: Character, cockIndex: number = 0): string {
    if (creature.cocks.length == 0) return "<b>ERROR: CockDescript Called But No Cock Present</b>";
    let cockType: CockTypesEnum = CockTypesEnum.HUMAN;
    if (cockIndex != 99) { // CockIndex 99 forces a human cock description
        if (creature.cocks.length <= cockIndex) return "<b>ERROR: CockDescript called with index of " + cockIndex + " - out of BOUNDS</b>";
        cockType = creature.cocks[cockIndex].cockType;
    }
    const isPierced: boolean = (creature.cocks.length == 1) && (creature.cocks[cockIndex].isPierced); // Only describe as pierced or sock covered if the creature has just one cock
    const hasSock: boolean = (creature.cocks.length == 1) && (creature.cocks[cockIndex].sock != "");
    const isGooey: boolean = (creature.skinType == SkinType.GOO);
    return cockDescription(cockType, creature.cocks[cockIndex].cockLength, creature.cocks[cockIndex].cockThickness, creature.lust, creature.cumQ(), isPierced, hasSock, isGooey);
}

// This function takes all the variables independently so that a creature object is not required for a cockDescription.
// This allows a single cockDescription function to produce output for both cockDescript and the old NPCCockDescript.
export function cockDescription(cockType: CockTypesEnum, length: number, girth: number, lust: number = 50, cumQ: number = 10, isPierced: boolean = false, hasSock: boolean = false, isGooey: boolean = false): string {
    if (rand(2) == 0) {
        if (cockType == CockTypesEnum.HUMAN) return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + " " + cockNoun(cockType);
        else return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + ", " + cockNoun(cockType);
    }
    return cockNoun(cockType);
}

export function cockNoun(cockType: CockTypesEnum): string {
    if (cockType == CockTypesEnum.HUMAN) {
        // Yeah, this is kind of messy
        // there is no other easy way to preserve the weighting fenoxo did
        return randomChoice("cock",
            "cock",
            "cock",
            "cock",
            "cock",
            "prick",
            "prick",
            "pecker",
            "shaft",
            "shaft",
            "shaft");
    }
    else if (cockType == CockTypesEnum.BEE) {
        return randomChoice("bee prick",
            "bee prick",
            "bee prick",
            "bee prick",
            "insectoid cock",
            "insectoid cock",
            "furred monster");
    }
    else if (cockType == CockTypesEnum.DOG) {
        return randomChoice("dog-shaped dong",
            "canine shaft",
            "pointed prick",
            "knotty dog-shaft",
            "bestial cock",
            "animalistic puppy-pecker",
            "pointed dog-dick",
            "pointed shaft",
            "canine member",
            "canine cock",
            "knotted dog-cock");
    }
    else if (cockType == CockTypesEnum.FOX) {
        return randomChoice("fox-shaped dong",
            "vulpine shaft",
            "pointed prick",
            "knotty fox-shaft",
            "bestial cock",
            "animalistic vixen-pricker",
            "pointed fox-dick",
            "pointed shaft",
            "vulpine member",
            "vulpine cock",
            "knotted fox-cock");
    }
    else if (cockType == CockTypesEnum.HORSE) {
        return randomChoice("flared horse-cock",
            "equine prick",
            "bestial horse-shaft",
            "flat-tipped horse-member",
            "animalistic stallion-prick",
            "equine dong",
            "beast cock",
            "flared stallion-cock");
    }
    else if (cockType == CockTypesEnum.DEMON) {
        return randomChoice("nub-covered demon-dick",
            "nubby shaft",
            "corrupted cock",
            "perverse pecker",
            "bumpy demon-dick",
            "demonic cock",
            "demonic dong",
            "cursed cock",
            "infernal prick",
            "unholy cock",
            "blighted cock");
    }
    else if (cockType == CockTypesEnum.TENTACLE) {
        return randomChoice("twisting tentacle-prick",
            "wriggling plant-shaft",
            "sinuous tentacle-cock",
            "squirming cock-tendril",
            "writhing tentacle-pecker",
            "wriggling plant-prick",
            "penile flora",
            "smooth shaft",
            "undulating tentacle-dick",
            "slithering vine-prick",
            "vine-shaped cock");
    }
    else if (cockType == CockTypesEnum.CAT) {
        return randomChoice("feline dick",
            "spined cat-cock",
            "pink kitty-cock",
            "spiny prick",
            "animalistic kitty-prick",
            "oddly-textured cat-penis",
            "feline member",
            "spined shaft",
            "feline shaft",
            "barbed dick",
            "nubby kitten-prick");
    }
    else if (cockType == CockTypesEnum.LIZARD) {
        return randomChoice("reptilian dick",
            "purple cock",
            "inhuman cock",
            "reptilian prick",
            "purple prick",
            "purple member",
            "serpentine member",
            "serpentine shaft",
            "reptilian shaft",
            "bulbous snake-shaft",
            "bulging snake-dick");
    }
    else if (cockType == CockTypesEnum.ANEMONE) {
        return randomChoice("anemone dick",
            "tentacle-ringed cock",
            "blue member",
            "stinger-laden shaft",
            "pulsating prick",
            "anemone prick",
            "stinger-coated member",
            "blue cock",
            "tentacle-ringed dick",
            "near-transparent shaft",
            "squirming shaft");
    }
    else if (cockType == CockTypesEnum.KANGAROO) {
        return randomChoice("kangaroo-like dick",
            "pointed cock",
            "marsupial member",
            "tapered shaft",
            "curved pecker",
            "pointed prick",
            "squirming kangaroo-cock",
            "marsupial cock",
            "tapered kangaroo-dick",
            "curved kangaroo-cock",
            "squirming shaft");
    }
    else if (cockType == CockTypesEnum.DRAGON) {
        return randomChoice("dragon-like dick",
            "segmented shaft",
            "pointed prick",
            "knotted dragon-cock",
            "mythical mast",
            "segmented tool",
            "draconic dick",
            "draconic cock",
            "tapered dick",
            "unusual endowment",
            "scaly shaft");
    }
    else if (cockType == CockTypesEnum.DISPLACER) {
        return randomChoice("coerl cock",
            "tentacle-tipped phallus",
            "starfish-tipped shaft",
            "alien member",
            "almost-canine dick",
            "bizarre prick",
            "beastly cock",
            "cthulhu-tier cock",
            "coerl cock",
            "animal dong",
            "star-capped tool",
            "knotted erection");
    }
    return randomChoice("cock",
        "prick",
        "pecker",
        "shaft");
}

// New cock adjectives.  The old one sucked dicks
// This function handles all cockAdjectives. Previously there were separate functions for the player, monsters and NPCs.
export function cockAdjective(cockType: CockTypesEnum, length: number, girth: number, lust: number = 50, cumQ: number = 10, isPierced: boolean = false, hasSock: boolean = false, isGooey: boolean = false): string {
    // First, the three possible special cases
    if (isPierced && rand(5) == 0) return "pierced";
    if (hasSock && rand(5) == 0) return randomChoice("sock-sheathed", "garment-wrapped", "smartly dressed", "cloth-shrouded", "fabric swaddled", "covered");
    if (isGooey && rand(4) == 0) return randomChoice("goopey", "gooey", "slimy");
    // Length 1/3 chance
    if (rand(3) == 0) {
        if (length < 3) return randomChoice("little", "toy-sized", "mini", "budding", "tiny");
        if (length < 5) return randomChoice("short", "small");
        if (length < 7) return randomChoice("fair-sized", "nice");
        if (length < 9) {
            if (cockType == CockTypesEnum.HORSE) return randomChoice("sizable", "pony-sized", "colt-like");
            return randomChoice("sizable", "long", "lengthy");
        }
        if (length < 13) {
            if (cockType == CockTypesEnum.DOG) return randomChoice("huge", "foot-long", "mastiff-like");
            return randomChoice("huge", "foot-long", "cucumber-length");
        }
        if (length < 18) return randomChoice("massive", "knee-length", "forearm-length");
        if (length < 30) return randomChoice("enormous", "giant", "arm-like");
        if (cockType == CockTypesEnum.TENTACLE && rand(2) == 0) return "coiled";
        return randomChoice("towering", "freakish", "monstrous", "massive");
    }
    // Hornyness 1/2
    else if (lust > 75 && rand(2) == 0) {
        if (lust > 90) { // Uber horny like a baws!
            if (cumQ < 50) return randomChoice("throbbing", "pulsating"); // Weak as shit cum
            if (cumQ < 200) return randomChoice("dribbling", "leaking", "drooling"); // lots of cum? drippy.
            return randomChoice("very drippy", "pre-gushing", "cum-bubbling", "pre-slicked", "pre-drooling"); // Tons of cum
        }
        else {// A little less lusty, but still lusty.
            if (cumQ < 50) return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager"); // Weak as shit cum
            if (cumQ < 200) return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager", "fluid-beading", "slowly-oozing"); // A little drippy
            return randomChoice("dribbling", "drooling", "fluid-leaking", "leaking"); // uber drippy
        }
    }
    // Girth - fallback
    if (girth <= 0.75) return randomChoice("thin", "slender", "narrow");
    if (girth <= 1.2) return "ample";
    if (girth <= 1.4) return randomChoice("ample", "big");
    if (girth <= 2) return randomChoice("broad", "meaty", "girthy");
    if (girth <= 3.5) return randomChoice("fat", "distended", "wide");
    return randomChoice("inhumanly distended", "monstrously thick", "bloated");
}

// Cock adjectives for single cock
function cockAdjectives(i_cockLength: number, i_cockThickness: number, i_cockType: CockTypesEnum, i_creature: Character): string {
    let description: string = "";
    let rando: number = 0;
    let descripts: number = 0;
    // length or thickness, usually length.
    if (rand(4) == 0) {
        if (i_cockLength < 3) {
            rando = rand(3);
            if (rando == 0) description = "little";
            else if (rando == 1) description = "toy-sized";
            else description = "tiny";
        }
        else if (i_cockLength < 5) {
            if (rand(2) == 0) description = "short";
            else description = "small";
        }
        else if (i_cockLength < 7) {
            if (rand(2) == 0) description = "fair-sized";
            else description = "nice";
        }
        else if (i_cockLength < 9) {
            rando = rand(3);
            if (rando == 0) description = "long";
            else if (rando == 1) description = "lengthy";
            else if (rando == 2) description = "sizable";
        }
        else if (i_cockLength < 13) {
            if (rand(2) == 0) description = "huge";
            else description = "foot-long";
        }
        else if (i_cockLength < 18) {
            if (rand(2) == 0) description = "massive";
            else description = "forearm-length";
        }
        else if (i_cockLength < 30) {
            if (rand(2) == 0) description = "enormous";
            else description = "monster-length";
        }
        else {
            rando = rand(3);
            if (rando == 0) description = "towering";
            else if (rando == 1) description = "freakish";
            else description = "massive";
        }
        descripts = 1;
    }
    // thickness go!
    else if (rand(4) == 0 && descripts == 0) {
        if (i_cockThickness <= .75) description += "narrow";
        else if (i_cockThickness <= 1.1) description += "nice";
        else if (i_cockThickness <= 1.4) {
            if (rand(2) == 0) description += "ample";
            else description += "big";
        }
        else if (i_cockThickness <= 2) {
            if (rand(2) == 0) description += "broad";
            else description += "girthy";
        }
        else if (i_cockThickness <= 3.5) {
            if (rand(2) == 0) description += "fat";
            else description += "distended";
        }
        else {
            if (rand(2) == 0) description += "inhumanly distended";
            else description += "monstrously thick";
        }
        descripts = 1;
    }
    // Length/Thickness done.  Moving on to special animal characters/lust stuff.
    /*Animal Fillers - turned off due to duplication in noun segment
     else if(type == 1 && descripts == 0 && rand(2) == 0) {
     if(rand(2) == 0) descript += "flared ";
     else descript += "musky ";
     }
     else if(type == 2 && descripts == 0 && rand(2) == 0) {
     descript += "musky ";
     }*/
    // FINAL FALLBACKS - lust descriptors
    // Lust stuff
    else if (i_creature.lust > 90) {
        // lots of cum? drippy.
        if (i_creature.cumQ() > 50 && i_creature.cumQ() < 200 && rand(2) == 0) {
            // for hroses and dogs
            if (CockTypesEnumGroup[i_cockType] == "animal") description += "animal-pre leaking";
            else description += "pre-slickened";
            descripts = 1;
        }
        // Tons of cum
        if (i_creature.cumQ() >= 200 && rand(2) == 0) {
            // for horses and dogs
            if (CockTypesEnumGroup[i_cockType] == "animal") description += "animal-spunk dripping";
            else description += "cum-drooling";
            descripts = 1;
        }
        // Not descripted? Pulsing and twitching
        if (descripts == 0) {
            if (rand(2) == 0) description += "throbbing";
            else description += "pulsating";
            descripts = 1;
        }
    }
    // A little less lusty, but still lusty.
    else if (i_creature.lust > 75) {
        if (descripts == 0 && i_creature.cumQ() > 50 && i_creature.cumQ() < 200 && rand(2) == 0) {
            description += "pre-leaking";
            descripts = 1;
        }
        if (descripts == 0 && i_creature.cumQ() >= 200 && rand(2) == 0) {
            description += "pre-cum dripping";
            descripts = 1;
        }
        if (descripts == 0) {
            if (rand(2) == 0) description += "rock-hard";
            else description += "eager";
            descripts = 1;
        }
    }
    // Not lusty at all, fallback adjective
    else if (i_creature.lust > 50) description += "hard";
    else description += "ready";
    return description;
}

export function cockMultiNoun(cockType: CockTypesEnum): string {
    let options: any[];
    let description: string = "";
    if (cockType == CockTypesEnum.HUMAN) {
        options = ["cock",
            "cock",
            "cock",
            "cock",
            "cock",
            "prick",
            "prick",
            "pecker",
            "shaft",
            "shaft",
            "shaft"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.BEE) {
        options = ["bee prick",
            "bee prick",
            "bee prick",
            "bee prick",
            "insectoid cock",
            "insectoid cock",
            "furred monster"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.DOG) {
        options = ["doggie dong",
            "canine shaft",
            "pointed prick",
            "dog-shaft",
            "dog-cock",
            "puppy-pecker",
            "dog-dick",
            "pointed shaft",
            "canine cock",
            "canine cock",
            "dog cock"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.HORSE) {
        options = ["horsecock",
            "equine prick",
            "horse-shaft",
            "horse-prick",
            "stallion-prick",
            "equine dong"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.DEMON) {
        options = ["demon-dick",
            "nubby shaft",
            "corrupted cock",
            "perverse pecker",
            "bumpy demon-dick",
            "demonic cock",
            "demonic dong",
            "cursed cock",
            "infernal prick",
            "unholy cock",
            "blighted cock"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.TENTACLE) {
        options = ["tentacle prick",
            "plant-like shaft",
            "tentacle cock",
            "cock-tendril",
            "tentacle pecker",
            "plant prick",
            "penile flora",
            "smooth inhuman shaft",
            "tentacle dick",
            "vine prick",
            "vine-like cock"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.CAT) {
        options = ["feline dick",
            "cat-cock",
            "kitty-cock",
            "spiny prick",
            "pussy-prick",
            "cat-penis",
            "feline member",
            "spined shaft",
            "feline shaft",
            "'barbed' dick",
            "kitten-prick"];
        description += randomChoice(options);
    }
    else if (cockType == CockTypesEnum.LIZARD) {
        options = ["reptile-dick",
            "purple cock",
            "inhuman cock",
            "reptilian prick",
            "purple prick",
            "purple member",
            "serpentine member",
            "serpentine shaft",
            "reptilian shaft",
            "snake-shaft",
            "snake dick"];
        description += randomChoice(options);
    }
    else {
        description += randomChoice("cock", "prick", "pecker", "shaft");
    }
    return description;
}

export function multiCockDescriptLight(creature: Character): string {
    if (creature.cocks.length < 1) {

        Logger.error("");
        return "<B>Error: multiCockDescriptLight() called with no penises present.</B>";

    }
    // Get cock counts
    let descript: string = "";
    let currCock: number = 0;
    const totCock: number = creature.cocks.length;
    let dogCocks: number = 0;
    let horseCocks: number = 0;
    let normalCocks: number = 0;
    let normalCockKey: number = 0;
    let dogCockKey: number = 0;
    let horseCockKey: number = 0;
    let averageLength: number = 0;
    let averageThickness: number = 0;
    let same: boolean = true;
    // For temp14 random values
    const rando: number = 0;
    let descripted: boolean = false;
    // If one, return normal cock descript
    if (totCock == 1) return cockDescript(creature, 0);
    // Count cocks & Prep average totals
    while (currCock <= totCock - 1) {
        if (creature.cocks[currCock].cockType == CockTypesEnum.HUMAN) {
            normalCocks++;
            normalCockKey = currCock;
        }
        if (creature.cocks[currCock].cockType == CockTypesEnum.HORSE) {
            horseCocks++;
            horseCockKey = currCock;
        }
        if (creature.cocks[currCock].cockType == CockTypesEnum.DOG) {
            dogCocks++;
            dogCockKey = currCock;
        }
        averageLength += creature.cocks[currCock].cockLength;
        averageThickness += creature.cocks[currCock].cockThickness;
        // If cocks are matched make sure they still are
        if (same && currCock > 0 && creature.cocks[currCock].cockType != creature.cocks[currCock - 1].cockType) same = false;
        currCock++;
    }
    // Crunch averages
    averageLength /= currCock;
    averageThickness /= currCock;
    // Quantity descriptors
    if (creature.cocks.length == 1) {
        if (dogCocks == 1) return cockNoun(CockTypesEnum.DOG);
        if (horseCocks == 1) return cockNoun(CockTypesEnum.HORSE);
        if (normalCocks == 1) return cockDescript(creature, 0);
        // Failsafe
        return cockDescript(creature, 0);
    }
    if (currCock == 2) {
        // For cocks that are the same
        if (same) {
            descript += randomChoice("pair of ", "two ", "brace of ", "matching ", "twin ");
            descript += cockAdjectiveOfChar(creature);
            if (normalCocks == 2) descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
            if (horseCocks == 2) descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
            if (dogCocks == 2) descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
            // Failsafe
            if (creature.cocks[0].cockType > 2) descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
        }
        // Nonidentical
        else {
            descript += randomChoice("pair of ", "two ", "brace of ");
            descript += cockAdjectiveOfChar(creature) + ", ";
            descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
        }
    }
    if (currCock == 3) {
        // For samecocks
        if (same) {
            descript += randomChoice("three ", "group of ", "<i>ménage à trois</i> of ", "triad of ", "triumvirate of ");
            descript += cockAdjectiveOfChar(creature);
            if (normalCocks == 3) descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
            if (horseCocks == 3) descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
            if (dogCocks == 3) descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
            // Tentacles
            if (creature.cocks[0].cockType > 2) descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
        }
        else {
            descript += randomChoice("three ", "group of ");
            descript += cockAdjectiveOfChar(creature) + ", ";
            descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
        }
    }
    // Large numbers of cocks!
    if (currCock > 3) {
        descript += randomChoice("bundle of ", "obscene group of ", "cluster of ", "wriggling bunch of ");
        // Cock adjectives and nouns
        descripted = false;
        // Same
        if (same) {
            if (currCock == normalCocks) {
                descript += cockAdjectiveOfChar(creature) + " ";
                descript += cockNoun(CockTypesEnum.HUMAN) + "s";
                descripted = true;
            }
            if (currCock == dogCocks) {
                descript += cockAdjectiveOfChar(creature) + ", ";
                descript += cockNoun(CockTypesEnum.DOG) + "s";
                descripted = true;
            }
            if (currCock == horseCocks) {
                descript += cockAdjectiveOfChar(creature) + ", ";
                descript += cockNoun(CockTypesEnum.HORSE) + "s";
                descripted = true;
            }
            if (creature.cocks[0].cockType > 2) {
                descript += cockAdjectiveOfChar(creature) + ", ";
                descript += cockNoun(creature.cocks[0].cockType) + "s";
                descripted = true;
            }
        }
        // If mixed
        if (!descripted) {
            descript += cockAdjectiveOfChar(creature) + ", ";
            descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
        }
    }
    return descript;
}

export function multiCockDescript(creature: Character): string {
    if (creature.cocks.length < 1) {
        Logger.error("");
        return "<B>Error: multiCockDescript() called with no penises present.</B>";
    }
    // Get cock counts
    let descript: string = "";
    let currCock: number = 0;
    const totCock: number = creature.cocks.length;
    let dogCocks: number = 0;
    let horseCocks: number = 0;
    let normalCocks: number = 0;
    let normalCockKey: number = 0;
    let dogCockKey: number = 0;
    let horseCockKey: number = 0;
    let averageLength: number = 0;
    let averageThickness: number = 0;
    let same: boolean = true;
    // For temp14 random values
    let rando: number = 0;
    let descripted: boolean = false;
    // Count cocks & Prep average totals
    while (currCock <= totCock - 1) {
        // trace("Counting cocks!");
        if (creature.cocks[currCock].cockType == CockTypesEnum.HUMAN) {
            normalCocks++;
            normalCockKey = currCock;
        }
        if (creature.cocks[currCock].cockType == CockTypesEnum.HORSE) {
            horseCocks++;
            horseCockKey = currCock;
        }
        if (creature.cocks[currCock].cockType == CockTypesEnum.DOG) {
            dogCocks++;
            dogCockKey = currCock;
        }
        averageLength += creature.cocks[currCock].cockLength;
        averageThickness += creature.cocks[currCock].cockThickness;
        // If cocks are matched make sure they still are
        if (same && currCock > 0 && creature.cocks[currCock].cockType != creature.cocks[currCock - 1].cockType) same = false;
        currCock++;
    }
    // Crunch averages
    averageLength /= currCock;
    averageThickness /= currCock;
    // Quantity descriptors
    if (currCock == 1) {
        if (dogCocks == 1) return cockNoun(CockTypesEnum.DOG);
        if (horseCocks == 1) return cockNoun(CockTypesEnum.HORSE);
        if (normalCocks == 1) return cockDescript(creature, 0);
        // Catch-all for when I add more cocks.  Let cock descript do the sorting.
        if (creature.cocks.length == 1) return cockDescript(creature, 0);
    }
    if (currCock == 2) {
        // For cocks that are the same
        if (same) {
            descript += randomChoice("a pair of ", "two ", "a brace of ", "matching ", "twin ");
            descript += cockAdjectives(averageLength, averageThickness, creature.cocks[0].cockType, creature);
            if (normalCocks == 2) descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
            if (horseCocks == 2) descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
            if (dogCocks == 2) descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
            // Tentacles
            if (creature.cocks[0].cockType > 2)
                descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
        }
        // Nonidentical
        else {
            descript += randomChoice("a pair of ", "two ", "a brace of ");
            descript += cockAdjectives(averageLength, averageThickness, creature.cocks[0].cockType, creature) + ", ";
            descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
        }
    }
    if (currCock == 3) {
        // For samecocks
        if (same) {
            descript += randomChoice("three ", "a group of ", "a <i>ménage à trois</i> of ", "a triad of ", "a triumvirate of ");
            descript += cockAdjectives(averageLength, averageThickness, creature.cocks[currCock - 1].cockType, creature);
            if (normalCocks == 3)
                descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
            if (horseCocks == 3)
                descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
            if (dogCocks == 3)
                descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
            // Tentacles
            if (creature.cocks[0].cockType > 2) descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";   // Not sure what's going on here, referencing index *may* be a bug.

        }
        else {
            descript += randomChoice("three ", "a group of ");
            descript += cockAdjectives(averageLength, averageThickness, creature.cocks[0].cockType, creature);
            descript += randomChoice(", mutated cocks", ", mutated dicks", ", mixed cocks", ", mismatched dicks");
        }
    }
    // Large numbers of cocks!
    if (currCock > 3) {
        descript += randomChoice("a bundle of ", "an obscene group of ", "a cluster of ", "a wriggling group of ");
        // Cock adjectives and nouns
        descripted = false;
        // If same types...
        if (same) {
            if (creature.cocks[0].cockType == CockTypesEnum.HUMAN) {
                descript += cockAdjectives(averageLength, averageThickness, CockTypesEnum.HUMAN, creature) + " ";
                descript += cockNoun(CockTypesEnum.HUMAN) + "s";
                descripted = true;
            }
            if (creature.cocks[0].cockType == CockTypesEnum.DOG) {
                descript += cockAdjectives(averageLength, averageThickness, CockTypesEnum.DOG, creature) + ", ";
                descript += cockNoun(CockTypesEnum.DOG) + "s";
                descripted = true;
            }
            if (creature.cocks[0].cockType == CockTypesEnum.HORSE) {
                descript += cockAdjectives(averageLength, averageThickness, CockTypesEnum.HORSE, creature) + ", ";
                descript += cockNoun(CockTypesEnum.HORSE) + "s";
                descripted = true;
            }
            // TODO More group cock type descriptions!
            if (creature.cocks[0].cockType > 2) {
                descript += cockAdjectives(averageLength, averageThickness, CockTypesEnum.HUMAN, creature) + ", ";
                descript += cockNoun(creature.cocks[0].cockType) + "s";
                descripted = true;
            }
        }
        // If mixed
        if (!descripted) {
            descript += cockAdjectives(averageLength, averageThickness, creature.cocks[0].cockType, creature) + ", ";
            rando = rand(4);
            descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
        }
    }
    return descript;
}

export function cockAdjectiveOfChar(creature: Character, index: number = -1): string {
    if (index < 0) index = creature.cocks.biggestCockIndex();
    const isPierced: boolean = (creature.cocks.length == 1) && (creature.cocks[index].isPierced); // Only describe as pierced or sock covered if the creature has just one cock
    const hasSock: boolean = (creature.cocks.length == 1) && (creature.cocks[index].sock != "");
    const isGooey: boolean = (creature.skinType == SkinType.GOO);
    return cockAdjective(creature.cocks[index].cockType, creature.cocks[index].cockLength, creature.cocks[index].cockThickness, creature.lust, creature.cumQ(), isPierced, hasSock, isGooey);
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
        return cockDescript(creature, 0);
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
            if (creature.cocks.countCocksOfType(creature.cocks[0].cockType) == creature.cocks.length) return cockNoun(creature.cocks[0].cockType) + "s";
            break;
        case CockTypesEnum.DOG:
        case CockTypesEnum.FOX:
            if (creature.cocks.dogCocks() == creature.cocks.length) return cockNoun(CockTypesEnum.DOG) + "s";
        default:
    }
    return cockNoun(CockTypesEnum.HUMAN) + "s";
}

export function sheathDescription(creature: Character): string {
    if (creature.cocks.hasSheath()) return "sheath";
    return "base";
}

export function cockHead(creature: Character, cockNum: number = 0): string {
    if (cockNum < 0 || cockNum > creature.cocks.length - 1) {
        Logger.error("");
        return "ERROR";
    }
    switch (creature.cocks[cockNum].cockType) {
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
    description += cockNoun(creature.cocks[i_cockIndex].cockType);

    return description;
}

export function cockClit(creature: Character, number: number = 0): string {
    if (creature.cocks.length > 0 && number >= 0 && number < creature.cocks.length) return cockDescript(creature, number);
    else return clitDescription(creature);
}
