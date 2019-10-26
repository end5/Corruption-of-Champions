// SANURA_DISABLED:int = 833;
// MET_SANURA:int = 834;
// BEATEN_SANURA_COUNT:int = 835;
// SANDWITCH_MOB_DEFEATED:int = 836;
// SANDWITCH_THRONE_UNLOCKED:int = 837;
// SAND_WITCHES_FRIENDLY:int = 838;
// CUM_WITCH_DEFEATED:int = 839;
// ENTERED_SANDWITCH_DUNGEON:int = 840;
// PAWJOBS:int = 841;
// RIDDLE_ONE:int = 842;
// RIDDLE_TWO:int = 843;
// RIDDLE_THREE:int = 844;
// TIMES_SUBMITTED_TO_SANURA:int = 845;
// TIMES_WINFUCKED_SANURA:int = 846;
// SAND_MOTHER_DEFEATED:int = 847;
// TIMES_TENTACLED_SAND_MOTHER:int = 848;
// SAND_WITCHES_COWED:int = 849;
// SAND_WITCH_LOOT_TAKEN:int = 850;
// TIMES_FRIENDLY_FUCKED_SAND_MOTHER:int = 851;
// MORE_CUM_WITCHES:int = 852;
// CUM_WITCHES_FIGHTABLE:int = 853;
// SAND_WITCH_LEAVE_ME_ALONE:int = 854;
// BEEN_BLESSED_BY_CUM_WITCH:int = 855;
// DISCOVERED_WITCH_DUNGEON:int = 856;

const DUNGEON_WITCH_ENTRANCE_GATEWAY: number = 23;
const DUNGEON_WITCH_CAVERNOUS_COMMONS: number = 24;
const DUNGEON_WITCH_WEST_WARRENS_MAIN: number = 25;
const DUNGEON_WITCH_CHILDRENS_PLAYROOM: number = 26;
const DUNGEON_WITCH_PREGNANT_LUST_ROOM: number = 27;
const DUNGEON_WITCH_WEST_WARRENS_WEST: number = 28;
const DUNGEON_WITCH_NURSERY: number = 29;
const DUNGEON_WITCH_PHARMACY: number = 30;
const DUNGEON_WITCH_EAST_WARRENS_MAIN: number = 31;
const DUNGEON_WITCH_SLEEPING_CHAMBER: number = 32;
const DUNGEON_WITCH_BATH_ROOM: number = 33;
const DUNGEON_WITCH_EAST_WARRENS_EAST: number = 34;
const DUNGEON_WITCH_CUM_WITCH_BEDROOM: number = 35;
const DUNGEON_WITCH_CUM_WITCH_OFFICE: number = 36;
const DUNGEON_WITCH_SACRIFICIAL_ALTAR: number = 37;
const DUNGEON_WITCH_THRONE_ROOM: number = 38;

export function enterBoobsDungeon(): void {
    // 	inDungeon = true;
    dungeonEnterRoom(DUNGEON_WITCH_ENTRANCE_GATEWAY);
    // 	dungeonLoc = 23;
    // 	eventParser(1);
}

export function leaveBoobsDungeon(): void {
    // 	inDungeon = false;
    game.dungeonLoc = 0;
    clearOutput();
    outputText("You leave the door behind and take off through the desert back towards camp.");
    doNext(camp.returnToCampUseOneHour);
}

export function fightCumWitch(): void {
    clearOutput();
    outputText("A robed witch crests one of the dunes, her sable skin glistening with moisture in the unforgiving desert sun.  She spies you, and her dusky lips curl up in a smile while a white staff materializes in her hands.  Playfully, the woman calls, \"<i>I'm going to cast a spell on you...</i>\"");
    startCombat(new CumWitch());
}

export function openZeDoorToParadize(): void {
    clearOutput();
    // Touch Sphere to Open:
    if (flags[kFLAGS.ENTERED_SANDWITCH_DUNGEON] == 0) {
        outputText("You hesitantly touch the dark sphere, admiring its smooth, glossy finish.  Almost as soon as you come in contact with it, it recedes into the wall.  The doorway rumbles, a giant slab vanishing into the sandy depths, opening a portal to the inside.  Meticulous carvings inlaid with pearl depict large breasted witches in great quantity, and though the specific means of the glyphs are foreign to you, it's clear this place is some kind of sanctuary for sand witches.");
        flags[kFLAGS.ENTERED_SANDWITCH_DUNGEON] = 1;
    }
    // Repeat
    else {
        outputText("Just ahead is the familiar sight of the sand witches' coven.  It's hewn from a sandstone archway buried in the side of a dune.  Pearl-inlays of big-breasted, lactating witches decorate the way inside, making it clear what you can expect to find inside.");
    }
    dungeonEnterRoom(DUNGEON_WITCH_CAVERNOUS_COMMONS);
    // 	dungeonLoc = 24;
    // 	doNext(camp.campMenu);
}

export function pullLever(): void {
    clearOutput();
    outputText("There is a loud rumbling from the direction of the cavernous commons...");
    flags[kFLAGS.SANDWITCH_THRONE_UNLOCKED] = 1;
    doNext(playerMenu);
}

// *Take Fertile Pills ✓Kirbu
export function takeFertilePills(): void {
    clearOutput();
    if (player.effects.findByType(StatusAffects.Contraceptives) < 0) outputText("You aren't under the effects of a contraceptive, so taking a pink pill would do nothing.");
    // {Contraceptives}
    else {
        outputText("It doesn't take you long to figure out that the pink pill should cancel the effects of your contraceptives.  You pop it into your mouth and swallow, feeling a tingle near your crotch after a moment.  You should be capable of bearing children again");
        if (!player.vaginas.length > 0) outputText(", should you ever grow a vagina");
        outputText(".");
        player.effects.remove(StatusAffects.Contraceptives);
    }
    doNext(playerMenu);
}
// *Take Barren Pills✓Kirbu
export function takeBarrenPills(): void {
    clearOutput();
    // {Already contraceptive'ed}
    if (player.effects.findByType(StatusAffects.Contraceptives) >= 0) outputText("You're already under the effects of contraceptives.  Taking one of the brown pills wouldn't do anything.");
    // {TAKE DAT SHIT YO}
    else {
        outputText("You figure one of these brown pills should render you barren, and you pop it into your mouth, not wanting to be impregnated.");
        if (player.pregnancyIncubation > 0) outputText("  Of course, you're already pregnant, and this doesn't seem to be doing anything about THAT.");
        outputText("  You do feel an emptiness in your midsection, reassuring you that the pill did its job.");
        if (!player.vaginas.length > 0) outputText("  Now if you ever re-grow a vagina, you should be fine.");
        player.effects.create(StatusAffects.Contraceptives, 0, 0, 0, 0);
    }
    doNext(playerMenu);
}
