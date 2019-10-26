/**
 * Created by aimozg on 06.01.14.
 */

export class Boat extends AbstractLakeContent {
    public discoverBoat(): void {
        player.effects.create(StatusAffects.BoatDiscovery, 0, 0, 0, 0);
        outputText("You journey around the lake, seeking demons to fight", true);
        if (player.cor > 60) outputText(" or fuck", false);
        outputText(".  The air is fresh, and the grass is cool and soft under your feet.   Soft waves lap against the muddy sand of the lake-shore, as if radiating outward from the lake.   You pass around a few bushes carefully, being wary of hidden 'surprises', and come upon a small dock.  The dock is crafted from old growth trees lashed together with some crude rope.  Judging by the appearance of the rope, it is very old and has not been seen to in quite some time.  Tied to the dock is a small rowboat, only about seven feet long and three feet wide.   The boat appears in much better condition than the dock, and appears to be brand new.\n\n", false);
        outputText("<b>You have discovered the lake boat!</b>\n(You may return and use the boat to explore the lake's interior by using the 'places' menu.)", false);
        doNext(camp.returnToCampUseOneHour);
    }
    public boatExplore(): void {
        // Helia monogamy fucks
        if (flags[kFLAGS.PC_PROMISED_HEL_MONOGAMY_FUCKS] == 1 && flags[kFLAGS.HEL_RAPED_TODAY] == 0 && rand(10) == 0 && player.gender > 0 && !helScene.followerHel()) {
            helScene.helSexualAmbush();
            return;
        }
        outputText("You reach the dock without any incident and board the small rowboat.  The water is calm and placid, perfect for rowing.  ", true);
        if (player.effects.findByType(StatusAffects.FactoryOverload) >= 0) {
            outputText("The water appears somewhat muddy and has a faint pungent odor.  ", false);
            if (player.inte > 40) outputText("You realize what it smells like – sex.  ", false);
        }
        // 3% chance of finding lost daughters
        if (rand(100) <= 3 && flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00412] > 0 && izmaScene.izmaFollower()) {
            izmaScene.findLostIzmaKids();
            return;
        }
        outputText("You set out, wondering if you'll find any strange islands or creatures in the lake.\n\n", false);
        // 20% chance if not done with marae of meeting her.
        if (rand(10) <= 2 && player.effects.findByType(StatusAffects.MaraeComplete) < 0 && player.effects.findByType(StatusAffects.MetCorruptMarae) < 0) {
            Marae.encounterMarae();
            return;
        }
        // 10% chance of corrupt Marae followups
        if ((game.debug || rand(10) == 0) && flags[kFLAGS.CORRUPT_MARAE_FOLLOWUP_ENCOUNTER_STATE] == 0 && player.effects.findByType(StatusAffects.MetCorruptMarae) >= 0 && player.gender > 0) {
            Marae.level2MaraeEncounter();
            return;
        }
        // BUILD LIST OF CHOICES
        const choice: any[] = [0, 1, 2, 3];
        if (player.effects.findByType(StatusAffects.DungeonShutDown) >= 0 && player.level > 2)
            choice[choice.length] = 4;
        choice[choice.length] = 5;
        // MAKE YOUR CHOICE
        const selector: number = choice[rand(choice.length)];
        // RUN CHOSEN EVENT
        switch (selector) {
            case 0:
                outputText("You row for nearly an hour, until your arms practically burn with exhaustion from all the rowing.", false);
                doNext(camp.returnToCampUseOneHour);
                return;
            case 1:
                outputText("You give up on finding anything interesting, and decide to go check up on your camp.", false);
                doNext(camp.returnToCampUseOneHour);
                return;
            case 2:
                SharkGirlScene.sharkGirlEncounter(1);
                return;
            case 3:
                SharkGirlScene.sharkGirlEncounter(1);
                return;
            case 4:
                FetishZealotScene.zealotBoat();
                return;
            case 5:
                anemoneScene.mortalAnemoneeeeee();
                return;
        }

    }
}
