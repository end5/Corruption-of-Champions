// Project Introduction:
// New Values:
// -HelAffection -- A score measuring Hel's general fondness for the Player Character, measured on a scale of 0 - 100, with \"<i>0</i>\" being immediately after achieving \"<i>Fuckbuddy</i>\" status. Increases by 5 each time you fuck (not Corrupt!Rape) Hel, and 10 each time you engage in one of her threesomes. When HelAffection equals 70 points, the number freezes and Expansion 2 content triggers.
// HEL_AFFECTION_FOLLOWER:int = 478;
// HEL_FOLLOWER_LEVEL:int = 479;
// TOOK_GOO_ARMOR:int = 480;
// LOST_GOO_ARMOR_FIGHT:int = 481;
// WON_GOO_ARMOR_FIGHT:int = 482;
// HEL_REDUCED_ENCOUNTER_RATE:int = 483;
// MET_VALERIA:int = 484;
// HEL_HARPIES_DEFEATED:int = 485;
// HEL_DUNGEON_MEAD_LOOTED:int = 486;
// HEL_BRIGID_DEFEATED:int = 487;
// HEL_PC_TALKED_WITH_HAKON:int = 488;
// HEL_DUNGEON_TAKEN_WHIP:int = 489;
// HEL_DUNGEON_TAKEN_STRAPS:int = 490;
// HEL_DUNGEON_TAKEN_DAGGER:int = 491;
// HEL_PHOENIXES_DEFEATED:int = 492;
// HEL_HARPY_QUEEN_DEFEATED:int = 493;
// HARPY_QUEEN_EXECUTED:int = 494;
// HEL_KNOWS_ABOUT_HAKON:int = 495;
// FOUGHT_WITH_HEL_IN_DUNGEON:int = 496;
// TOOK_QUEEN_STAFF:int = 497;
// VALARIA_AT_CAMP:int = 498;

const DUNGEON_HEL_GUARD_HALL: number = 17;
const DUNGEON_HEL_WINE_CELLAR: number = 18;
const DUNGEON_HEL_STAIR_WELL: number = 19;
const DUNGEON_HEL_DUNGEON: number = 20;
const DUNGEON_HEL_MEZZANINE: number = 21;
const DUNGEON_HEL_THRONE_ROOM: number = 22;

export function takeGodsMead(): void {
    inventory.takeItem(consumables.GODMEAD, playerMenu);
    flags[kFLAGS.HEL_DUNGEON_MEAD_LOOTED]++;
}

// [Torture Gear]
export function tortureGear(): void {
    clearOutput();
    menu();
    outputText("You walk up to the torture rack.  ");
    if (flags[kFLAGS.HEL_DUNGEON_TAKEN_WHIP] == 0 || flags[kFLAGS.HEL_DUNGEON_TAKEN_STRAPS] == 0 || flags[kFLAGS.HEL_DUNGEON_TAKEN_DAGGER] == 0) {
        outputText("The rack contains: ");
        if (flags[kFLAGS.HEL_DUNGEON_TAKEN_WHIP] == 0) {
            outputText("A whip");
            addButton(0, "Succ. Whip", takeWhip);
        }
        if (flags[kFLAGS.HEL_DUNGEON_TAKEN_STRAPS] == 0) {
            if (flags[kFLAGS.HEL_DUNGEON_TAKEN_WHIP] == 0) outputText(", ");
            outputText("some leather straps");
            addButton(1, "BondageStraps", takeStraps);
        }
        if (flags[kFLAGS.HEL_DUNGEON_TAKEN_DAGGER] == 0) {
            if (flags[kFLAGS.HEL_DUNGEON_TAKEN_STRAPS] == 0 || flags[kFLAGS.HEL_DUNGEON_TAKEN_WHIP] == 0) outputText(", ");
            outputText("a lust-draft coated dagger");
            addButton(2, "Lust Dagger", takeDagger);
        }
        outputText(".  ");
    }
    addButton(4, "Back", playerMenu);
}

function takeWhip(): void {
    inventory.takeItem(weapons.SUCWHIP, playerMenu);
    flags[kFLAGS.HEL_DUNGEON_TAKEN_WHIP] = 1;
}

function takeStraps(): void {
    inventory.takeItem(armors.BONSTRP, playerMenu);
    flags[kFLAGS.HEL_DUNGEON_TAKEN_STRAPS] = 1;
}

function takeDagger(): void {
    inventory.takeItem(weapons.L_DAGGR, playerMenu);
    flags[kFLAGS.HEL_DUNGEON_TAKEN_DAGGER] = 1;
}
