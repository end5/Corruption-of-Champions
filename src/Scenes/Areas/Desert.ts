/**
 * Created by aimozg on 06.01.14.
 */

export class Desert {
    public antsScene: AntsScene = new AntsScene();
    public nagaScene: NagaScene = new NagaScene();
    public oasis: Oasis = new Oasis();
    public sandTrapScene: SandTrapScene = new SandTrapScene();
    public sandWitchScene: SandWitchScene = new SandWitchScene();
    public wanderer: Wanderer = new Wanderer();
    // Explore desert
    public exploreDesert(): void {
        player.exploredDesert++;
        if (player.level >= 4 && player.exploredDesert % 15 == 0 && flags[kFLAGS.DISCOVERED_WITCH_DUNGEON] == 0) {
            enterBoobsDungeon();
            // 				inDungeon = true;
            // 				dungeonLoc = 23;
            // 				eventParser(1);
            return;
        }
        if (rand(40) == 0) {
            exgartuan.fountainEncounter();
            return;
        }
        // Helia monogamy fucks
        if (flags[kFLAGS.PC_PROMISED_HEL_MONOGAMY_FUCKS] == 1 && flags[kFLAGS.HEL_RAPED_TODAY] == 0 && rand(10) == 0 && player.gender > 0 && !helScene.followerHel()) {
            helScene.helSexualAmbush();
            return;
        }
        if ((player.exploredDesert == 20 && player.findStatusAffect(StatusAffects.TelAdre) < 0) || (rand(20) == 0 && player.statusAffectv1(StatusAffects.TelAdre) == 0)) {
            telAdre.discoverTelAdre();
            return;
        }
        if (sandWitchScene.pregnancy.event == 2 && rand(4) == 0) {
            if (flags[kFLAGS.EGG_WITCH_TYPE] == PregnancyStore.PREGNANCY_DRIDER_EGGS) sandWitchScene.sammitchBirthsDriders();
            else sandWitchScene.witchBirfsSomeBees();
            return;
        }
        // Ant colony debug chances
        if (player.level >= 5 && flags[kFLAGS.ANT_WAIFU] == 0 && (player.exploredDesert % 8 == 0) && flags[kFLAGS.ANTS_PC_FAILED_PHYLLA] == 0 && flags[kFLAGS.ANT_COLONY_KEPT_HIDDEN] == 0) {
            antsScene.antColonyEncounter();
            return;
        }
        // int over 50?  Chance of alice encounter!
        if (rand(4) == 0 && player.inte > 50 && flags[kFLAGS.FOUND_WIZARD_STAFF] == 0) {
            outputText("", true);
            outputText("While exploring the desert, you see a plume of smoke rising in the distance.  You change direction and approach the soot-cloud carefully.  It takes a few moments, but after cresting your fourth dune, you locate the source.  You lie low, so as not to be seen, and crawl closer for a better look.\n\n", false);
            outputText("A library is burning up, sending flames dozens of feet into the air.  It doesn't look like any of the books will survive, and most of the structure has already been consumed by the hungry flames.  The source of the inferno is curled up next to it.  It's a naga!  She's tall for a naga, at least seven feet if she stands at her full height.  Her purplish-blue skin looks quite exotic, and she wears a flower in her hair.  The naga is holding a stick with a potato on the end, trying to roast the spud on the library-fire.  It doesn't seem to be going well, and the potato quickly lights up from the intense heat.\n\n", false);
            outputText("The snake-woman tosses the burnt potato away and cries, \"<i>Hora hora.</i>\"  She suddenly turns and looks directly at you.  Her gaze is piercing and intent, but she vanishes before you can react.  The only reminder she was ever there is a burning potato in the sand.   Your curiosity overcomes your caution, and you approach the fiery inferno.  There isn't even a trail in the sand, and the library is going to be an unsalvageable wreck in short order.   Perhaps the only item worth considering is the stick with the burning potato.  It's quite oddly shaped, and when you reach down to touch it you can feel a resonant tingle.  Perhaps it was some kind of wizard's staff?\n\n", false);
            flags[kFLAGS.FOUND_WIZARD_STAFF]++;
            inventory.takeItem(weapons.W_STAFF, camp.returnToCampUseOneHour);
            return;
        }
        // Possible chance of boosting camp space!
        if (player.keyItems.has("Camp - Chest") < 0 && (rand(100) < 10)) {
            outputText("While wandering the trackless sands of the desert, you break the silent monotony with a loud 'thunk'.  You look down and realize you're standing on the lid of an old chest, somehow intact and buried in the sand.  Overcome with curiosity, you dig it out, only to discover that it's empty.  It would make a nice addition to your campsite.\n\nYou decide to bring it back to your campsite.  <b>You now have six storage item slots at camp.</b>", true);
            inventory.createStorage();
            inventory.createStorage();
            inventory.createStorage();
            inventory.createStorage();
            inventory.createStorage();
            inventory.createStorage();
            player.keyItems.create("Camp - Chest", 0, 0, 0, 0);
            doNext(camp.returnToCampUseOneHour);
            return;
        }
        // Chance of dick-dragging! 10% + 10% per two foot up to 30%
        temp = 10 + (player.longestCockLength() - player.tallness) / 24 * 10;
        if (temp > 30) temp = 30;
        if (temp > rand(100) && player.longestCockLength() >= player.tallness && player.totalCockThickness() >= 12) {
            exploration.bigJunkDesertScene();
            return;
        }
        const choices: any[] = [];
        // -8008 is cheating for "no arg"
        const args: any[] = [];

        // Encounter Sandwitch
        if (flags[kFLAGS.SAND_WITCH_LEAVE_ME_ALONE] == 0) {
            choices[choices.length] = sandWitchScene.encounter;
            args[args.length] = -8008;
        }
        if (flags[kFLAGS.CUM_WITCHES_FIGHTABLE] > 0) {
            choices[choices.length] = fightCumWitch;
            args[args.length] = -8008;
        }
        // Encounter Marcus
        choices[choices.length] = wanderer.wandererRouter;
        args[args.length] = -8008;
        choices[choices.length] = walkingDesertStatBoost;
        args[args.length] = -8008;
        if (rand(2) == 0 && player.level >= 2) {
            if (rand(2) == 0) {
                choices[choices.length] = mirageDesert;
                args[args.length] = -8008;
            }
            else {
                choices[choices.length] = oasis.oasisEncounter;
                args[args.length] = -8008;
            }
        }
        choices[choices.length] = nagaScene.nagaEncounter;
        args[args.length] = -8008;
        if (rand(2) == 0) {
            choices[choices.length] = sandTrapScene.encounterASandTarp;
            args[args.length] = -8008;
        }
        const select: number = rand(choices.length);
        if (args[select] == -8008) {
            choices[select]();
        }
        else choices[select](args[select]);
    }

    private mirageDesert(): void {
        clearOutput();
        outputText("While exploring the desert, you see a shimmering tower in the distance.  As you rush towards it, it vanishes completely.  It was a mirage!   You sigh, depressed at wasting your time.", true);
        dynStats("lus", -15);
        doNext(camp.returnToCampUseOneHour);
    }

    private walkingDesertStatBoost(): void {
        clearOutput();
        outputText("You walk through the shifting sands for an hour, finding nothing.\n\n", true);
        // Chance of boost == 50%
        if (rand(2) == 0) {
            // 50/50 strength/toughness
            if (rand(2) == 0 && player.str < 50) {
                outputText("The effort of struggling with the uncertain footing has made you stronger.", false);
                dynStats("str", .5);
            }
            // Toughness
            else if (player.tou < 50) {
                outputText("The effort of struggling with the uncertain footing has made you tougher.", false);
                dynStats("tou", .5);
            }
        }
        doNext(camp.returnToCampUseOneHour);
    }
}
