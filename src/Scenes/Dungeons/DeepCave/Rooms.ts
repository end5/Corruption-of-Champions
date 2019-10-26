const DUNGEON_CAVE_ENTRANCE: number = 10;
const DUNGEON_CAVE_TUNNEL: number = 11;
const DUNGEON_CAVE_GATHERING_HALL: number = 12;
const DUNGEON_CAVE_FUNGUS_CAVERN: number = 13;
const DUNGEON_CAVE_TORTURE_ROOM: number = 14;
const DUNGEON_CAVE_SECRET_TUNNEL: number = 15;
const DUNGEON_CAVE_ZETAZ_CHAMBER: number = 16;

// Index:
// -Imp Gang
// -Plant - "Encapsulation Start"
// -Vala - "OH GOD THE FAERIE STUFF"
// -Zetaz - "Zetaz Start"
// -Items - "Items Start"

// All sex/rape/combat moves for the shit in d2.
// VALA_CUMBATH_TIMES:int = 433;
// TIMES_VALA_CONSENSUAL_BIG:int = 767;
// TIMES_VAPULA_AND_GIANT_VALA:int = 768;

export function enterZetazsLair(): void {
    // 	inDungeon = true;
    dungeonEnterRoom(DUNGEON_CAVE_ENTRANCE);
    // 	dungeonLoc = 10;
    // 	eventParser(1);
}

export function leaveZetazsLair(): void {
    // 	inDungeon = false;
    game.dungeonLoc = 0;
    clearOutput();
    outputText("You leave the cave behind and take off through the deepwoods back towards camp.");
    doNext(camp.returnToCampUseOneHour);
}

export function impHordeStartCombat(): void {
    startCombat(new ImpHorde(), true);
}

export function enterZetazsRoomFromTheSouth(): void {
    if (flags[kFLAGS.ZETAZ_DOOR_UNLOCKED] == 0) {
        clearOutput();
        outputText("The door won't budge.");
        doNext(playerMenu);
        return;
    }
    else dungeonEnterRoom(DUNGEON_CAVE_ZETAZ_CHAMBER);
    // 	else dungeonLoc = 16;
}

export function takeBondageStraps(): void {
    clearOutput();
    flags[kFLAGS.ZETAZ_LAIR_TOOK_BONDAGE_STRAPS]++;
    inventory.takeItem(armors.BONSTRP, playerMenu);
}
