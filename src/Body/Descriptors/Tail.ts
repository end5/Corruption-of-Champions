export function tailDescript(i_creature: Character): string {
    if (i_creature.tailType == TailType.NONE) {
        Logger.trace("WARNING: Character has no tails to describe.");
        return "<b>!Creature has no tails to describe!</b>";
    }

    let descript: string = "";

    if (i_creature.tailType == TailType.FOX && i_creature.tailVenom >= 1) {
        // Kitsune tails, we're using tailVenom to track tail count
        if (i_creature.tailVenom > 1) {
            if (i_creature.tailVenom == 2) descript += "pair ";
            else if (i_creature.tailVenom == 3) descript += "trio ";
            else if (i_creature.tailVenom == 4) descript += "quartet ";
            else if (i_creature.tailVenom == 5) descript += "quintet ";
            else if (i_creature.tailVenom > 5) descript += "bundle ";

            descript += "of kitsune tails";
        }
        else descript += "kitsune tail";
    }
    else {
        descript += DEFAULT_TAIL_NAMES[i_creature.tailType];
        descript += " tail";
    }

    return descript;
}

export function oneTailDescript(i_creature: Character): string {
    if (i_creature.tailType == TailType.NONE) {
        Logger.trace("WARNING: Character has no tails to describe.");
        return "<b>!Creature has no tails to describe!</b>";
    }

    let descript: string = "";

    if (i_creature.tailType == TailType.FOX && i_creature.tailVenom >= 1) {
        if (i_creature.tailVenom == 1) {
            descript += "your kitsune tail";
        }
        else {
            descript += "one of your kitsune tails";
        }
    }
    else {
        descript += "your " + DEFAULT_TAIL_NAMES[i_creature.tailType] + " tail";
    }

    return descript;
}
