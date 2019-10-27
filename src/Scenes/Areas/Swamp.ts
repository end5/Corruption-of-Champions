/**
 * Created by aimozg on 06.01.14.
 */

export class Swamp {
    public exploreSwamp(): void {
        // Discover 'Bog' at after 25 explores of swamp
        if ((flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00272] >= 25) && flags[kFLAGS.BOG_EXPLORED] == 0) {
            outputText("While exploring the swamps, you find yourself into a particularly dark, humid area of this already fetid biome.  You judge that you could find your way back here pretty easily in the future, if you wanted to.  With your newfound discovery fresh in your mind, you return to camp.\n\n(<b>Bog exploration location unlocked! (Page 2)</b>)", true);
            flags[kFLAGS.BOG_EXPLORED]++;
            doNext(camp.returnToCampUseOneHour);
            return;
        }
        flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00272]++;
        /*  SPECIAL SCENE OVERWRITES */
        // KIHA X HEL THREESOME!
        if (!KihaFollower.followerKiha() && player.cor < 60 && flags[kFLAGS.KIHA_AFFECTION_LEVEL] >= 1 && flags[kFLAGS.HEL_FUCKBUDDY] > 0 && player.cocks.length > 0 && flags[kFLAGS.KIHA_AND_HEL_WHOOPIE] == 0) {
            KihaFollower.kihaXSalamander();
            return;
        }
        // Helia monogamy fucks
        if (flags[kFLAGS.PC_PROMISED_HEL_MONOGAMY_FUCKS] == 1 && flags[kFLAGS.HEL_RAPED_TODAY] == 0 && rand(10) == 0 && player.gender > 0 && !HelFollower.followerHel()) {
            HelScene.helSexualAmbush();
            return;
        }
        if (flags[kFLAGS.TOOK_EMBER_EGG] == 0 && flags[kFLAGS.EGG_BROKEN] == 0 && flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00272] > 0 && (flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00272] % 40 == 0)) {
            EmberScene.findEmbersEgg();
            return;
        }
        /*  STANDARD SCENE SELECTION  */
        const choices: any[] = [];
        // Build the choice array
        // M & F spidermorphs
        choices[choices.length] = 0;
        choices[choices.length] = 1;
        // Drider
        choices[choices.length] = 2;
        // ROGAR
        if (flags[kFLAGS.ROGAR_DISABLED] == 0 && flags[kFLAGS.ROGAR_PHASE] < 3)
            choices[choices.length] = 3;
        // Kiha
        choices[choices.length] = 4;

        // Pick from the choices and pull the encounter.
        const choice: number = choices[rand(choices.length)];
        switch (choice) {
            case 0:
                FemaleSpiderMorphScene.fSpiderMorphGreeting();
                break;
            case 1:
                MaleSpiderMorphScene.greetMaleSpiderMorph();
                break;
            case 2:
                CorruptedDriderScene.driderEncounter();
                break;
            case 3:
                Rogar.encounterRogarSwamp();
                break;
            case 4:
                // Kiha follower gets to explore her territory!
                if (KihaFollower.followerKiha()) KihaScene.kihaExplore();
                else KihaScene.encounterKiha();
                break;
            default:
                outputText("New explore code fucked up.  YOU BONED (TELL FEN)");
                doNext(playerMenu);
                break;
        }
    }
}
