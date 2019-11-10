/**
 * Created by aimozg on 06.01.14.
 */

// Explore High Mountain
export function exploreHighMountain(): void {
    flags[kFLAGS.DISCOVERED_HIGH_MOUNTAIN]++;
    doNext(playerMenu);

    if (D3.discoverD3() == true) {
        return;
    }

    let chooser: number = rand(4);
    // Boosts mino and hellhound rates!
    if (player.perks.findByType(PerkLib.PiercedFurrite) >= 0 && rand(3) == 0) {
        chooser = 1;
    }
    // Helia monogamy fucks
    if (flags[kFLAGS.PC_PROMISED_HEL_MONOGAMY_FUCKS] == 1 && flags[kFLAGS.HEL_RAPED_TODAY] == 0 && rand(10) == 0 && player.gender > 0 && !HelScene.followerHel()) {
        HelScene.helSexualAmbush();
        return;
    }
    // Gats xmas adventure!
    if (rand(5) == 0 && player.gender > 0 && isHolidays() && flags[kFLAGS.GATS_ANGEL_DISABLED] == 0 && flags[kFLAGS.GATS_ANGEL_GOOD_ENDED] == 0 && (flags[kFLAGS.GATS_ANGEL_QUEST_BEGAN] == 0 || player.keyItems.has("North Star Key") >= 0)) {
        gatsSpectacularRouter();
        return;
    }
    // Minerva
    if (flags[kFLAGS.DISCOVERED_HIGH_MOUNTAIN] % 8 == 0 && flags[kFLAGS.MET_MINERVA] < 4) {
        MinervaScene.encounterMinerva();
        return;
    }
    // 25% minotaur sons!
    if (flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00326] >= 3 && rand(4) == 0 && player.vaginas.length > 0) {
        spriteSelect(44);
        MinotaurMobScene.meetMinotaurSons();
        return;
    }
    // Harpy odds!
    if (player.inv.hasItem(ConsumableLib.OVIELIX)) {
        if (player.inv.hasItem(ConsumableLib.OVIELIX, 2)) {
            if (rand(4) == 0) {
                chickenHarpy();
                return;
            }
        }
        else {
            if (rand(10) == 0) {
                chickenHarpy();
                return;
            }
        }
    }
    // 10% chance to mino encounter rate if addicted
    if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] > 0 && rand(10) == 0) {
        spriteSelect(44);
        // Cum addictus interruptus!  LOL HARRY POTTERFAG
        // Withdrawl auto-fuck!
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] == 3) {
            MinotaurScene.minoAddictionFuck();
            return;
        }
        MinotaurScene.getRapedByMinotaur(true);
        spriteSelect(44);
        return;
    }
    trace("Chooser goin for" + chooser);

    // Generic harpy
    if (chooser == 0) {
        outputText("A harpy wings out of the sky and attacks!", true);
        startCombat(new Harpy());
        spriteSelect(26);
        return;
    }
    // Basilisk!
    if (chooser == 1) {
        BasiliskScene.basiliskGreeting();
        return;
    }
    // Sophie
    if (chooser == 2) {
        if (flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00282] > 0 || flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00283] > 0 || SophieFollowerScene.sophieFollower()) {
            outputText("A harpy wings out of the sky and attacks!", true);
            startCombat(new Harpy());
            spriteSelect(26);
        }
        else {
            if (flags[kFLAGS.MET_SOPHIE_COUNTER] == 0) SophieScene.meetSophie();
            else SophieScene.meetSophieRepeat();
        }
    }
    if (chooser == 3) {
        this.IzumiScene.encounter();
        return;
    }
}
// \"<i>Chicken Harpy</i>\" by Jay Gatsby and not Savin he didn't do ANYTHING
// Initial Intro
export function chickenHarpy(): void {
    clearOutput();
    spriteSelect(90);
    if (flags[kFLAGS.TIMES_MET_CHICKEN_HARPY] == 0) {
        outputText("Taking a stroll along the mountains, you come across a peculiar-looking harpy wandering around with a large wooden cart in tow.  She's far shorter and bustier than any regular harpy you've seen before, reaching barely 4' in height but managing to retain some semblance of their thick feminine asses.  In addition to the fluffy white feathers decorating her body, the bird-woman sports about three more combed back upon her forehead like a quiff, vividly red in color.");
        outputText("\n\nHaving a long, hard think at the person you're currently making uncomfortable with your observational glare, you've come to a conclusion - she must be a chicken harpy!");
        outputText("\n\nAs you take a look inside of the cart you immediately spot a large hoard of eggs stacked clumsily in a pile.  The curious collection of eggs come in many colors and sizes, protected by a sheet of strong canvas to keep it all together.");
        outputText("\n\nThe chicken harpy - rather unnerved by the unflattering narration of her appearance you've accidentally shouted out loud - decides to break the ice by telling you about the cart currently holding your interest.");
        outputText("\n\n\"<i>Heya traveller, I noticed you were interested in my eggs here - they're not for sale, but perhaps we can come to some sort of agreement?</i>\"");
        outputText("\n\nYou put a hand to your chin and nod.  You are travelling, that's correct. The chicken harpy takes the gesture as a sign to continue.");
        outputText("\n\n\"<i>Well you see, these eggs don't really grow from trees - in fact, I've gotta chug down at least two or three ovi elixirs to get a good haul with my body, y'know?  Since it's tough for a lil' gal like me to find a few, I like to trade an egg over for some elixirs to those willing to part with them.</i>\"");
        outputText("\n\nSounds reasonable enough, you suppose.  Two or three elixirs for an egg? Doable for sure.");
        outputText("\n\n\"<i>So whaddya say, do y'have any elixirs you can fork over?</i>\"");
    }
    else {
        // Repeat Intro
        outputText("Taking a stroll along the mountains, you come across a familiar-looking shorty wandering around with a large wooden cart in tow.");
        outputText("\n\nHaving a long, hard think at the person you're currently making uncomfortable with your observational glare, you've come to a conclusion - she must be the chicken harpy!");
        outputText("\n\nYou run towards her as she waves a 'hello', stopping the cart to allow you to catch up.  Giving out her usual spiel about the eggs, she giggles and thrusts out a hand.");
        outputText("\n\n\"<i>Hey sunshine, do y'have any elixirs you can give me today?</i>\"");
        // [Give Two][Give Three]	[No, I Must Now Return To My People]
    }
    flags[kFLAGS.TIMES_MET_CHICKEN_HARPY]++;
    // [Give Two][Give Three]		[Not Really, No]
    menu();
    if (player.inv.hasItem(ConsumableLib.OVIELIX, 2)) addButton(0, "Give Two", giveTwoOviElix);
    if (player.inv.hasItem(ConsumableLib.OVIELIX, 3)) addButton(1, "Give Three", giveThreeOviElix);
    addButton(4, "Leave", leaveChickenx);
}

// If Give Two
export function giveTwoOviElix(): void {
    clearOutput();
    spriteSelect(90);
    player.inv.consumeItem(ConsumableLib.OVIELIX);
    player.inv.consumeItem(ConsumableLib.OVIELIX);
    outputText("You hand over two elixirs, the harpy more than happy to take them from you.  In return, she unties a corner of the sheet atop the cart, allowing you to take a look at her collection of eggs.");
    // [Black][Blue][Brown][Pink][Purple]
    menu();
    addButton(0, "Black", getHarpyEgg, ConsumableLib.BLACKEG);
    addButton(1, "Blue", getHarpyEgg, ConsumableLib.BLUEEGG);
    addButton(2, "Brown", getHarpyEgg, ConsumableLib.BROWNEG);
    addButton(3, "Pink", getHarpyEgg, ConsumableLib.PINKEGG);
    addButton(4, "Purple", getHarpyEgg, ConsumableLib.PURPLEG);
    addButton(5, "White", getHarpyEgg, ConsumableLib.WHITEEG);
}

// If Give Three
export function giveThreeOviElix(): void {
    clearOutput();
    spriteSelect(90);
    player.inv.consumeItem(ConsumableLib.OVIELIX, 3);
    outputText("You hand over three elixirs, the harpy ecstatic over the fact that you're willing to part with them.  In return, she unties a side of the sheet atop the cart, allowing you to take a look at a large collection of her eggs.");
    // [Black][Blue][Brown][Pink][Purple]
    menu();
    addButton(0, "Black", getHarpyEgg, ConsumableLib.L_BLKEG);
    addButton(1, "Blue", getHarpyEgg, ConsumableLib.L_BLUEG);
    addButton(2, "Brown", getHarpyEgg, ConsumableLib.L_BRNEG);
    addButton(3, "Pink", getHarpyEgg, ConsumableLib.L_PNKEG);
    addButton(4, "Purple", getHarpyEgg, ConsumableLib.L_PRPEG);
    addButton(5, "White", getHarpyEgg, ConsumableLib.L_WHTEG);
}

// All Text
export function getHarpyEgg(itype: ItemType): void {
    clearOutput();
    spriteSelect(90);
    flags[kFLAGS.EGGS_BOUGHT]++;
    outputText("You take " + itype.longName + ", and the harpy nods in regards to your decision.  Prepping her cart back up for the road, she gives you a final wave goodbye before heading back down through the mountains.\n\n");
    Inventory.takeItem(itype, chickenHarpy);
}

// If No
export function leaveChickenx(): void {
    clearOutput();
    spriteSelect(90);
    outputText("At the polite decline of her offer, the chicken harpy gives a warm smile before picking her cart back up and continuing along the path through the mountains.");
    outputText("\n\nYou decide to take your own path, heading back to camp while you can.");
    doNext(Camp.returnToCampUseOneHour);
}
