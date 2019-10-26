/**
 * Created by aimozg on 06.01.14.
 */

export class Plains {
    public explorePlains(): void {
        outputText("", true);
        flags[kFLAGS.TIMES_EXPLORED_PLAINS]++;
        // Dem Kangasluts!  Force Sheila relationship phase!
        if (flags[kFLAGS.SHEILA_DEMON] == 0 && flags[kFLAGS.SHEILA_XP] == 3 && game.time.hours == 20 && flags[kFLAGS.SHEILA_CLOCK] >= 0) {
            sheilaScene.sheilaXPThreeSexyTime();
            return;
        }
        // Add some holiday cheer
        if (isHolidays() && date.fullYear > flags[kFLAGS.CANDY_CANE_YEAR_MET] && rand(5) == 0) {
            candyCaneTrapDiscovery();
            return;
        }
        if (isHolidays() && date.fullYear > flags[kFLAGS.POLAR_PETE_YEAR_MET] && rand(4) == 0 && silly()) {
            polarPete();
            flags[kFLAGS.POLAR_PETE_YEAR_MET] = date.fullYear;
            return;
        }
        // Helia monogamy fucks
        if (flags[kFLAGS.PC_PROMISED_HEL_MONOGAMY_FUCKS] == 1 && flags[kFLAGS.HEL_RAPED_TODAY] == 0 && rand(10) == 0 && player.gender > 0 && !helScene.followerHel()) {
            helScene.helSexualAmbush();
            return;
        }
        // Find Niamh
        if (flags[kFLAGS.NIAMH_MOVED_OUT_COUNTER] == 1) {
            Niamh.niamhPostTelAdreMoveOut();
            return;
        }
        // Find Owca
        if (player.level >= 8 && flags[kFLAGS.TIMES_EXPLORED_PLAINS] % 25 == 0 && flags[kFLAGS.OWCA_UNLOCKED] == 0) {
            owca.gangbangVillageStuff();
            return;
        }
        // Bazaar!
        if (flags[kFLAGS.TIMES_EXPLORED_PLAINS] % 10 == 0 && flags[kFLAGS.BAZAAR_ENTERED] == 0) {
            bazaar.findBazaar();
            return;
        }
        // Chance of threesomes!
        if (flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00256] != 0 && flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00257] != 0 && flags[kFLAGS.HEL_FUCKBUDDY] == 1 && flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00260] == 0 && !isabellaFollowerScene.isabellaFollower() && flags[kFLAGS.TIMES_EXPLORED_PLAINS] % 21 == 0 && !(player.tallness > 78 && flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00258] == 0)) {
            // Hell/Izzy threesome intro
            if (flags[kFLAGS.HEL_ISABELLA_THREESOME_ENABLED] == 0) {
                helScene.salamanderXIsabellaPlainsIntro();
                return;
            }
            // Propah threesomes here!
            else if (flags[kFLAGS.HEL_ISABELLA_THREESOME_ENABLED] == 1) {
                helScene.isabellaXHelThreeSomePlainsStart();
                return;
            }
        }

        const choices: any[] = [plainsLoot, plainsLoot,
            GnollSpearThrowerScene.gnoll2Encounter,
            GnollScene.gnollEncounter,
            BunnyGirl.bunnbunbunMeet, BunnyGirl.bunnbunbunMeet];

        if (flags[kFLAGS.ISABELLA_PLAINS_DISABLED] == 0) {
            choices[choices.length] = isabellaScene.isabellaGreeting;
            choices[choices.length] = isabellaScene.isabellaGreeting;
        }
        if (!helScene.followerHel()) {
            choices[choices.length] = helScene.encounterAJerkInThePlains;
            choices[choices.length] = helScene.encounterAJerkInThePlains;
        }
        choices[choices.length] = SatyrScene.satyrEncounter;
        choices[choices.length] = SatyrScene.satyrEncounter;
        if (flags[kFLAGS.SHEILA_DISABLED] == 0 && flags[kFLAGS.SHEILA_CLOCK] >= 0) { // Aparently Sheila was supposed to be disabled after certain events - now fixed
            choices[choices.length] = sheilaScene.sheilaEncounterRouter;
            choices[choices.length] = sheilaScene.sheilaEncounterRouter;
        }
        // Pick one
        choices[rand(choices.length)]();
    }

    private plainsLoot(): void {
        if (rand(2) == 0) { // OVI
            outputText("While exploring the plains you nearly trip over a discarded, hexagonal bottle.  ");
            inventory.takeItem(consumables.OVIELIX, camp.returnToCampUseOneHour);
        }
        else { // FIND KANGAAA
            outputText("While exploring the plains you come across a strange-looking plant.  As you peer at it, you realize it has some fruit you can get at.  ");
            inventory.takeItem(consumables.KANGAFT, camp.returnToCampUseOneHour);
        }
    }
}
