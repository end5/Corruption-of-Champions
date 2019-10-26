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

export function dungeonRoom() {
    dungeonMenu();
    // HELIA DUNGEONNNNNOOOO 1
    if (game.dungeonLoc == DUNGEON_HEL_GUARD_HALL) {
        // ROOM 1: Guard Hall
        outputText("<b><u>Guard Hall</u></b>\n", true);
        // Room Description:
        outputText("You stand in what might have been a guard room once upon a time.  Now it is a ruined, ransacked mess.  It seems not to have been used in years, and the table, chairs, and spears lined up against the wall have all rotted away to almost nothing.");
        // [If Armor has not been taken/fought with:
        if (flags[kFLAGS.WON_GOO_ARMOR_FIGHT] + flags[kFLAGS.LOST_GOO_ARMOR_FIGHT] == 0) {
            outputText("  However, a suit of half-plate armor has been left up against the eastern wall, hanging loosely on a rack; it seems to be in usable shape.");
            addButton(3, "Armor", takeGooArmor);
        }
        outputText("  You see a pair of heavy iron doors leading northward, though they seem so rusty and heavy that opening them is sure to alert anyone nearby, and a small trapdoor leading down.");
        // (Display Options: [North Door] [Trapdoor] [Armor])
        addButton(0, "North Door", dungeonEnterRoom, DUNGEON_HEL_STAIR_WELL);
        addButton(2, "Trapdoor", dungeonEnterRoom, DUNGEON_HEL_WINE_CELLAR);
    }
    if (game.dungeonLoc == DUNGEON_HEL_WINE_CELLAR) {
        outputText("<b><u>Wine Cellar</u></b>\n", true);
        // (Accessed from the Trapdoor button)
        outputText("You've dropped down into a small underground hidey-hole, with ");
        if (player.tallness < 60) outputText("just enough room to stand up in");
        else outputText("a ceiling so low you have to crouch");
        outputText(".  To your surprise, nothing horrifying jumps out and tries to rape you.  You see a few horns of mead slung up in a wine rack - they smell a bit pungent, but alcohol improves with age they say...");
        if (flags[kFLAGS.HEL_DUNGEON_MEAD_LOOTED] < 5) {
            outputText(" (There are " + (5 - flags[kFLAGS.HEL_DUNGEON_MEAD_LOOTED]) + "x God's Mead horns here to take.)\n\n");
            addButton(3, "God'sMead", takeGodsMead);
        }
        // Display Options: [GodsMead] [Climb Up]
        addButton(2, "Climb Up", dungeonEnterRoom, DUNGEON_HEL_GUARD_HALL);
    }
    if (game.dungeonLoc == DUNGEON_HEL_STAIR_WELL) {
        clearOutput();
        // Room 3: Stair Well
        outputText("<b><u>Stair Well</u></b>\n", true);
        // (Upon clicking in:)
        if (flags[kFLAGS.HEL_HARPIES_DEFEATED] == 0) {
            outputText("You open the heavy double doors and cringe as a loud \"<i>SCREECH!</i>\" echoes out and up the next room - a wide open stairwell, it seems, with minimal cover.  The perfect place for a harpy to fight... Oh, shit!");
            outputText("\n\nYou ready your [weapon] as a wing of harpies looks up from eating at a small table in the center of the stone stairwell, all staring at you with wide, astonished eyes.  Another few harpies peer down from above, poking their heads down the stairs to get a look at the intruder.  Almost in unison, they jump to their feet and bare their claws.");
            outputText("\n\nIt's a fight!");
            startCombat(new HarpyMob());
            return;
        }
        else {
            if (flags[kFLAGS.HEL_HARPY_QUEEN_DEFEATED] == 0) {
                outputText("There's a pile of drugged, unconscious harpies you've already defeated on the floor, as well as Kiri, the only one that didn't attack you.  You recall that she knows Hel and is here to help the both of you.");
                // (Display Options: [Talk] [Sex] [Valeria](If Encountered) [Go Upstairs] [Go Downstairs])
                addButton(0, "Sex", kiriSexIntro);
                addButton(3, "Talk", talkToKiri);
                if (player.armorName == "goo armor") addButton(4, "Valeria", talkToValeria);
            }
            else {
                outputText("There's a pile of drugged, unconscious harpies you've already defeated on the floor.  Kiri appears to have left.");
            }
            addButton(2, "Go Upstairs", dungeonEnterRoom, DUNGEON_HEL_MEZZANINE);
            addButton(5, "South Door", dungeonEnterRoom, DUNGEON_HEL_GUARD_HALL);
            addButton(7, "Go Downstairs", dungeonEnterRoom, DUNGEON_HEL_DUNGEON);
        }
    }
    if (game.dungeonLoc == DUNGEON_HEL_DUNGEON) {
        clearOutput();
        outputText("<b><u>Dungeon</u></b>\n", true);
        // (Intro -- Before Fight)
        if (flags[kFLAGS.HEL_BRIGID_DEFEATED] == 0) {
            outputText("You make your way downstairs into a small, smoky stone room.  A thick smell of steam and burnt meat hangs over the room, making you cough as you descend the stairs.  As you make your way into the tower's little dungeon, you quickly notice the salamander chained to a table.  He's a great big man, nearly eight feet tall and covered in scars.  He has short, spiky red hair, the same color as his tail and limb scales, and a black eyepatch covers his left socket.  He looks like hell, emaciated and exhausted, covered in thick cum-stains from being used an untold number of times by the harpies of the tower.");
            outputText("\n\nBeside him, though, is the tallest harpy you've ever seen.  A foot over most of her sisters, she stands stark naked save for a red-hot iron poker in her hand and a heavy iron shield in the other.  Her pink hair is shaved down to a mohawk, and her face is covered with a dozen iron studs and rings.");
            outputText("\n\n\"<i>'Bout time you made it down here, you " + mf(player, "bastard", "bitch") + ".  Mama Brigid's been waiting a loooong time for someone to try and break out one of her toys.</i>\"  She pats the hefty keyring on the underside of her shield and leers at you.");
            outputText("\n\nYou ready your [weapon] and prepare to take the keys from her!");
            startCombat(new Brigid());
            return;
        }
        else {
            outputText("You're standing in a small dungeon room, nearly gagging on the smells of burnt meat and smoke.  A number of nasty torture devices hang on the walls, and a table sits in the middle of the room, ");
            if (flags[kFLAGS.HEL_PC_TALKED_WITH_HAKON] == 0) {
                outputText("on which the salamander prisoner lies");
                addButton(3, "Prisoner", helDungeonPrisonerTalk);
            }
            else {
                outputText("on which Hakon lies");
                addButton(3, "Hakon", helDungeonPrisonerTalk);
            }
            outputText(".");
            if (player.keyItems.has("Harpy Key A") >= 0 && player.keyItems.has("Harpy Key B") >= 0) outputText("\n\n<b>You have the keys to release the prisoner, but you may want to make sure you have everything from this place that you want before you make your escape.  You doubt you'll be able to return in the future.</b>");
            // (Display Options: [Go Upstairs](Back to Stairwell & Kiri) [Prisoner] [Torture Gear]
            addButton(2, "Upstairs", dungeonEnterRoom, DUNGEON_HEL_STAIR_WELL);
            addButton(4, "Torture Gear", tortureGear);
        }
    }
    if (game.dungeonLoc == DUNGEON_HEL_MEZZANINE) {
        clearOutput();
        outputText("<b><u>Mezzanine</u></b>\n", true);
        // (Intro; Before Battle)
        if (flags[kFLAGS.HEL_PHOENIXES_DEFEATED] == 0) {
            outputText("You ascend the heavy stone steps, circling the tower's walls as you ascend.  You are stopped perhaps half-way to the second main floor on a small terrace level with a wide open view overlooking the vale beneath the high mountains.  As you step onto the mezzanine, you watch with a scowl as a number of tall, muscular hermaphrodites step out from the shadows.  Each is clad in heavy chainmail and wields a scimitar and a blood-red shield, but is otherwise nude, revealing their reptilian pricks and slick pussies.  The soldiers standing before you look like harpies, but they have scaled, humanoid legs, long, fiery tails and their wings are the darkest crimson.  These are phoenixes - the dread half-breed warriors you and Hel are here to stop!");
            startCombat(new PhoenixPlatoon());
            return;
        }
        else {
            outputText("You're standing in the Mezzanine of the tower, a small terrace with a magnificent view of the High Mountains and the valleys below.  There are stairs leading up and down from here, as well as a pile of defeated phoenixes that don't look like they'll be recovering for a bit.");
            // (Display Options: [Go Upstairs] [Go Downstairs] [Phoenixes])
            // (Go Downstairs returns you to the Stairwell; Go Up takes you to the throne room)
            addButton(2, "Upstairs", dungeonEnterRoom, DUNGEON_HEL_THRONE_ROOM);
            addButton(3, "Phoenixes", checkOutDemBirdBitches);
            addButton(7, "Downstairs", dungeonEnterRoom, DUNGEON_HEL_STAIR_WELL);
        }
    }
    if (game.dungeonLoc == DUNGEON_HEL_THRONE_ROOM) {
        clearOutput();
        outputText("<b><u>Throne Room</u></b>\n");
        // Throne Room Descript (Before Combat!)
        if (flags[kFLAGS.HEL_HARPY_QUEEN_DEFEATED] == 0) {
            outputText("Ascending the stairs, you are stopped by a pair of heavy double doors.  They're covered with rotting, chipped purple paint and laurels that look years old.  The sharp, screeching sounds of metal on metal ring out in the next room - the sounds of a fight!  You kick the door open, and charge into what must be some kind of throne room; a large carpet dominates your view, leading up to a towering throne surrounded by pillows and cushions, currently vacant.");

            outputText("\n\nIn the center of the throne room stand Helia the Salamander and a harpy that could only be described as a broodmother.  She isn't particularly tall or menacing looking, but her hips are truly inhuman, thrice as wide as she is at the least, and her pillowy ass seems canyon-like in her nudity, the type of butt you could lose yourself in forever.  The harpy matron, wielding a staff, is currently locked in a fierce battle against Hel's red-hot scimitar.");

            outputText("\n\nSeeing you in the corner of her eye, Hel spins out of the contest and comes to stand beside you, blade raised toward the harpy broodmother.");

            outputText("\n\n\"<i>[name]!</i>\" she says, giving you a teasing slap on the ass with her tail.  \"<i>Took your sweet time, didn't you? Here I was starting to think I'd get this bitch all to myself!</i>\"");

            outputText("\n\nYou give Hel a reassuring nod and start to circle toward the Harpy Queen, taking the left flank while Hel heads right.  The queen looks from one of you to the other, a ball of white-hot magic fire conjured in her hand.");

            outputText("\n\n\"<i>You fools!</i>\" the queen hisses, backing away from you as best she can.  \"<i>You know not what you do!  My children... Their sole purpose was for the good of Mareth! You have ruined everything! Now the demons will have us all.</i>\"");

            outputText("\n\nYou ignore her, focusing on getting into position for a quick take-down with the help of your salamander lover.  However, before you can back the Harpy Queen into a corner, you hear an explosive BOOM from above.  You look up in time to see a hole erupt in the tower's ceiling, and a great brood of harpies pour in, dozens of them at the least.");

            outputText("\n\n\"<i>Oh well, fuck me!</i>\" Hel screams, dodging a hail of blows as the harpies swarm the throne room.  You can only just hear the broodmother laughing, bidding her children onwards over the sound of screeching and beating wings.");
            outputText("\n\n\"<i>FUCK! [name]!</i>\" Hel yells, cleaving a harpy in two with her scimitar, \"<i>Take a piece of the action; get the queen.  I've got these bitches!</i>\"");

            outputText("\n\nBefore you can say a word, Hel grabs a pair of harpies and, using them like human battering rams, dives into the swirling maelstrom of talons and claws.  You turn, [weapon] raised, to face down the queen.");

            outputText("\n\nShe now sits upon her throne, her staff laid across her bird-like legs.  \"<i>Idiot,</i>\" she sneers, just loud enough to be heard over the din of battle.  \"<i>You've doomed us all.  So many of my daughters dead or beaten or fled... No, I will not allow you to go unpunished, even if it means my life.</i>\"");
            outputText("\n\nShe stands, grabbing her great whitewood staff.  A ball of magical whitefire forms in her hand, ready to sear you alive.");
            startCombat(new HarpyQueen());
            return;
        }
        else {
            // Room Description:
            outputText("You stand in the harpy throne room - a long, circular room dominated by a high throne surrounded by cushions and drapes.  A single long carpet flows from the heavy double doors to the throne, reminding you of a castle's great hall in days gone by.  A number of harpies cower in the shadows, afraid to oppose you further now that their mighty leader is defeated.");
            // [if PC hasn't executed the queen:
            if (flags[kFLAGS.HARPY_QUEEN_EXECUTED] == 0) {
                outputText("  The Harpy Queen slumps in her throne, insensate.");
                addButton(3, "Helia", HeliaThroneRoom);
                addButton(4, "Harpy Queen", harpyQueenAdvantage);
            }
            else if (flags[kFLAGS.TOOK_QUEEN_STAFF] == 0) addButton(4, "Take Staff", takeQueensStaff);
            // (Display Options: [Helia] [Harpy Queen] [Go Downstairs])
            addButton(7, "Downstairs", dungeonEnterRoom, DUNGEON_HEL_MEZZANINE);
            // 			if (flags[kFLAGS.HARPY_QUEEN_EXECUTED] == 0) {
            // 				addButton(3, "Helia", HeliaThroneRoom);
            // 			}
            // 			if(flags[kFLAGS.HARPY_QUEEN_EXECUTED] == 1 && flags[kFLAGS.TOOK_QUEEN_STAFF] == 0) {
            // 				addButton(4, "Take Staff", takeQueensStaff);
            // 			}
        }
    }
}
