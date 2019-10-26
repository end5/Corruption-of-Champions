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

export function dungeonRoom() {
    dungeonMenu();
    if (game.dungeonLoc == DUNGEON_WITCH_ENTRANCE_GATEWAY) {
        clearOutput();
        outputText("<b><u>Strange Gateway in the Sands</u></b>\n");
        if (flags[kFLAGS.SANURA_DISABLED] > 0) {
            outputText("Just ahead, in one of the larger dunes, is a square stone doorway, built into the side of a large, sparkling mountain of sand.  You never would have noticed it if the sun hadn't been at the perfect angle to trace a rectangular shadow down the side of the incline.  As you approach, you notice a familiar obsidian orb embedded into the side of it.  It's obviously the mechanism to open it.");
            addButton(0, "North", openZeDoorToParadize);
        }
        else if (flags[kFLAGS.MET_SANURA] == 0) {
            flags[kFLAGS.MET_SANURA] = 1;
            outputText("Just ahead, in one of the larger dunes, is a square stone doorway, built into the side of a large, sparkling mountain of sand.  You never would have noticed it if the sun hadn't been at the perfect angle to trace a rectangular shadow down the side of the incline.  As you approach, you notice a smooth obsidian orb embedded into the side of it.  Perhaps that's the mechanism to open it?");
            outputText("\n\nSuddenly, a huge shadow looms over you, and the sound of beating wings echo from on high. You spin around in time to see a huge creature leap from the dune tops and slam into the ground a few feet away.  At first glance, the creature looks like a tall, tanned woman with flowing black hair, adorned in a great wealth of gold and jewels.  A moment later, though, you're able to take in the full view of her form: from the waist down, her shapely human form morphs into the lower body of a great, golden-haired lion, padding on a quartet of powerful legs ending in sharp claws.  From her leonine sides grow a pair of massive wings, easily over a dozen feet across, which quickly furl up against her body.  She's a sphinx!");
            outputText("\n\nThe sphinx-girl pads over towards you, her arms crossed under her small, palmable breasts. Chestnut-colored eyes examine you, looking you over from your [hair] to your [feet], a playful grin playing across her feminine features.  \"<i>O-ho!  What's this we have here?  A poor, lost " + race(player) + " wandering the desert; or are you something more?  Indeed, I should think so, with your [weapon] so eager for battle, and your [armor] that looks to have seen a thousand blows.  My, my.  Could it be you've come to brave my Mistress's lair?  Ah, if so... you must answer my riddles three, lest I keep from you the key!</i>\" she says, a little tune springing into her voice as she stalks towards you.");
            outputText("\n\n\"<i>We could even make it interesting...  If you can't guess my riddles, you must surrender your body to my pleasure.  If you win, your pleasure shall be my wish.</i>\"");
            if (flags[kFLAGS.DISCOVERED_WITCH_DUNGEON] == 0) {
                outputText("\n\n(<b>You've discovered a new dungeon, available in the places menu in the future!  Make sure you save before delving too deeply...</b>)");
                flags[kFLAGS.DISCOVERED_WITCH_DUNGEON] = 1;
            }
            // (Display Options: [Riddle Game] [Fight] [Leave])
            addButton(2, "Riddle Game", riddleGameGo);
            addButton(3, "Uh, FIGHT!", fuckItAttack);
        }
        else {
            if (flags[kFLAGS.TIMES_SUBMITTED_TO_SANURA] + flags[kFLAGS.TIMES_WINFUCKED_SANURA] > 0) {
                outputText("You approach Sanura the sphinx as she pads around the great stone doorframe.  A playful grin spreads across her thin lips as you approach.  \"<i>O-ho!  Back again, I see.  Mmm, it's been so dull since last you <i>came</i>.  There's no one more fun to play out here in the wastes.  So... care to try your hand at my game once more?");
                if (flags[kFLAGS.BEATEN_SANURA_COUNT] > 0) outputText("  Or would you rather skip the formalities?  We both know who's got the sharper wit, I should think.");
                outputText("</i>\"");
            }
            else {
                outputText("The sphinx, Sanura, is padding around the stone doorframe.  Occasionally she beats her leonine wings or gives a mighty yawn, obviously bored by a present lack of stimulation.  Seeing you standing about, however, Sanura gives you a sultry come-hither look and a seductive wink.  You're not sure if she wants to tempt your mind or your body.");
            }
            addButton(2, "Riddle Game", riddleGameGo);
            if (flags[kFLAGS.BEATEN_SANURA_COUNT] > 0) {
                addButton(0, "North", openZeDoorToParadize);
                addButton(3, "Fuck", fuckDatSphinx);
            }
        }
        addButton(4, "Leave", leaveBoobsDungeon);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_CAVERNOUS_COMMONS) {
        clearOutput();
        outputText("<b><u>Cavernous Commons</u></b>\n");
        outputText("Dancing lights swirl around the roof of the cavern, twirling around each other in patterns too intricate to follow.  Whatever they are, they're clearly magical, and they lend this place an otherworldly ambience unmatched by anything you've seen.  This huge room reminds you of your village commons in a way - it's clearly a communal area.  There's a water-pump in the northwest corner and a blazing purple bonfire in the center of the chamber, heating the cool underground air.  The ground is dirt, rather than sand, and hard-packed as any road.  Various chairs and benches are set up for witches to relax in.  ");
        if (flags[kFLAGS.SANDWITCH_MOB_DEFEATED] == 0) {
            outputText("Worst of all, a huge assortment of spellcasters is assembling into a mob, obviously hostile.");
            startCombat(new SandWitchMob(), true);
            return;
        }
        else outputText("The women you defeated before have returned to their tasks, casting wary glances your way from time to time but no longer threatening.");
        outputText("  Cave tunnels lead in to the east and west into more underground chambers.  A path leads south towards the exit.");
        if (flags[kFLAGS.SANDWITCH_THRONE_UNLOCKED] == 0) {
            outputText("\n\nA huge stone doorway blocks the path north.  You cannot see a way to open it.");

        }
        else {
            outputText("\n\nAn open doorway opens up to the north.  You can faintly see some kind of altar beyond it.");
            addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_SACRIFICIAL_ALTAR);
        }
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_MAIN);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_ENTRANCE_GATEWAY);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_WEST_WARRENS_MAIN) {
        clearOutput();
        outputText("<b><u>West Warrens Main Hall</u></b>\n");
        outputText("The supernatural illumination so prevalent to the east is present here as well, though in smaller quantity and vastly diminished brightness.  Swirls of bluish-white hue slide along the ceiling in slow, measured motions, a stark contrast to the jubilant dancing of the preceding cavern.  The ceiling is almost twelve feet high in places, with the sides of the east-west passage dipping down the lowest.  The floor is sandstone here, as you would expect in a desert cave, though it is liberally obfuscated with an array of woven rugs.  Sand Witches march by on errands, only pausing to give you disinterested glances.  Most of them bear the signs of pregnancy or have young girls in tow.  Whatever the case, there doesn't seem to be any fight in these women.  Along the north and south walls are small, door-sized openings, draped with heavy curtains that easily muffle any noise.  To the west, the tunnel bores on unimpeded.  However, to the east the cave opens up into a much, much larger chamber.");
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_CHILDRENS_PLAYROOM);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_CAVERNOUS_COMMONS);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_WEST);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_PREGNANT_LUST_ROOM);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_CHILDRENS_PLAYROOM) {
        clearOutput();
        outputText("<b><u>West Warrens Eastern Portion North Side (Children's Play Room)</u></b>\n");
        outputText("Behind the thick curtain is the last thing you would expect to see.  There's nearly a dozen children and three busty, pregnant sand witches watching them.  Toys have been scattered everywhere by the young blonde children.  Their wardens were busy knitting when you intruded, but they glare at you balefully and make shooing gestures.  Unless you had planned to rob children of their toys and beat up pregnant women, there's nothing to be had here.");
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_PREGNANT_LUST_ROOM) {
        clearOutput();
        outputText("<b><u>West Warrens Eastern Portion South Side (Lust Room)</u></b>\n");
        outputText("This room is surprisingly large - big enough to hold the " + num2Text(rand(6) + 5) + " heavily pregnant women inside plus perhaps a dozen more.  Like the outer tunnel, this room is lit by magic, though its contents are equally mundane, if a great deal more... interesting.  There's female sex-toys of every variety on almost every surface.  They sit in piles on the floor, they hang from the walls, and there are even some mounted on the wall, to be fucked in place.  Many such toys have multiple shafts and come in shapes from standard to canine to obscenely equine.  All of the witches are presently engaged in coitus with each other or their 'marital aids', but once you enter, they glance at you with hungry, lust-filled eyes.");
        if (silly()) outputText("  Clearly, if you wanted to, you could put some extra meat in a sand witch.");
        addButton(1, "North", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
        if (player.cocks.length > 0 && player.lust >= 33) {
            addButton(2, "FuckWitches", knockUpSomeDoubleStuffedSandWitches);
        }
    }
    if (game.dungeonLoc == DUNGEON_WITCH_WEST_WARRENS_WEST) {
        clearOutput();
        outputText("<b><u>West Warrens Main Hall (Western Portion)</u></b>\n");
        outputText("The smooth tunnel comes to an end here, blocked by the omnipresent sandstone.  The sapphire light plays beautifully across the rough-hewn stone as you watch, but you don't take the time to give it much thought.  To the east, the arching hallway leads back towards a large common area of a cave.  Along the north and south walls are door-sized openings, blocked with rugs of fine make and thick fabric.  They don't leave enough of a gap for any light or sound to bleed into the hall.  You'll have to take a peek if you want to see what's going on.");
        if (flags[kFLAGS.ESSRAYLE_ESCAPED_DUNGEON] == 0 && flags[kFLAGS.MET_ESSY] > 0) {
            flags[kFLAGS.ESSY_MET_IN_DUNGEON] = 1;
            if (flags[kFLAGS.TOLD_MOTHER_TO_RELEASE_ESSY] > 0) {
                outputText("\n\n<b>Your attention is immediately drawn to Essrayle...</b>");
                addButton(0, "Next", Essrayle.essyWitchVictory);
                flags[kFLAGS.ESSRAYLE_ESCAPED_DUNGEON] = 1;
                return;
            }
            outputText("\n\nQuite an unusual sight awaits you in this chamber.  Sitting in an oversized pot is what looks to be the overly busty, plant girl you encountered earlier, Essrayle.  She's changed quite a bit since you last saw her, however.  While her inhumanly smooth, elfin face seems to be unchanged, the rest of her verdant body seems to have been warped into a hyper-sexual parody of a fertility idol, with features that echo the nomadic sand witch tribe.");
            addButton(2, "Essrayle", Essrayle.approachTrappedEssy);
        }
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_NURSERY);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_PHARMACY);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_NURSERY) {
        clearOutput();
        outputText("<b><u>West Warrens Western Portion North Side (Nursery)</u></b>\n");
        outputText("As soon as you clear the curtain, you realize there's nothing of interest to you here.  The room is lit with rose pink globes, and the furniture in the room is filled with sleeping mothers, nursing infants, or older children taking naps.  The room is packed with bodies, and while it smells strongly of femininity, there's nothing worth looking into present here.");
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_WEST);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_PHARMACY) {
        clearOutput();
        outputText("<b><u>West Warrens Western Portion South Side (Pharmacy)</u></b>\n");
        outputText("This room is so tiny it can barely get away with being called that.  If anything, it's more of a small, cozy nook.  There isn't anyone else here, though the room is illuminated by the same omnipresent magics found elsewhere in this little cave of wonders.  Standing silent vigil on the southern wall, a large chest looms over you, stretching most of the way to the ceiling.  It is completely, almost impossibly neat, with every drawer fully and completely closed.  Spurred on by this strangeness, you pop a few of them open.  One drawer has pink pills, another brown.  Searching drawer by drawer until you discover that every single compartment houses the same dual medicines.  You glance about the room and spy a faded parchment on the wall.  It reads \"<i>Tnangerp rof knip, nerrab rof nworb.</i>\"  There is an opening in the wall to the north.");
        if (flags[kFLAGS.SANDWITCH_THRONE_UNLOCKED] == 0) {
            outputText("\n\nThere is also a lever on the floor.  Looking closely at it, it appears that it connects with machinery that leads to the east...");
            addButton(1, "Pull Lever", pullLever);
        }
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_WEST);
        addButton(2, "Brown Pill", takeBarrenPills);
        addButton(3, "Pink Pill", takeFertilePills);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_EAST_WARRENS_MAIN) {
        clearOutput();
        outputText("<b><u>Eastern Warrens Main Hall (Western Portion)</u></b>\n");
        outputText("This smooth, sandstone tunnel proceeds in a perfectly straight line from east to west, as if aligned to some titanic, invisible compass buried below the floor.  Flickering white plumes of illumination undulate through the air along the arched ceiling, trailing streamers of pearl incandescence that light the entire chamber with ghostly brightness.  You are at the entrance to the eastern warrens - the commons are still clearly visible to the west, and the pathway to the east goes on a-ways.  Hand woven tapestries adorn the walls, telling the history of this enclave in pictographic form, from its inception to present day.  Further east, you can see a few empty places, ready to be covered with more cloth, once the next chapter of history is ready to be told.  To the north, there is a small opening in the wall, blocked off by plain white curtains.");
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_SLEEPING_CHAMBER);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_EAST);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_CAVERNOUS_COMMONS);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_SLEEPING_CHAMBER) {
        clearOutput();
        outputText("<b><u>Eastern Warrens West Portion North Side (Sleeping Chamber)</u></b>\n");
        outputText("Inside this expansive but cosy chamber are a few dozen beds, arranged in neat patterns marred only by a few cots that dare to be positioned adjacent to one another.  Clearly this is the tribe's primary sleeping area.  The floor is obscured by heavy, hand-woven rugs that ruffle oh so softly against your [feet].  Instead of the usual ghostly lights you've grown to expect, the interior of this dwelling is lit by glass-paneled constructs resembling lanterns.  There is no fuel or wick of course, only flicking phantasmal illumination trapped as if it were a flame.  Shutters allow the lanterns to be dimmed, but as you are alone in here for now, there's no reason to make it harder to see.  There is a door to the east and a curtained off opening to the south.");
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_BATH_ROOM);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_MAIN);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_BATH_ROOM) {
        clearOutput();
        outputText("<b><u>Eastern Warrens East Portion North Side (Bath Room)</u></b>\n");
        outputText("As soon as you step in, you can smell a sweet, dairy-like scent in the air, but as your eyes adjust to the dimmer lighting, you realize you've stumbled into the sand witches' bathroom!  Fluffy towels hang from the wall, ready for use.  There's one giant tub in the center of the room, recessed deep into the floor.  It has a number of seats carved into the side with a small, open hole in the bottom.  Hanging from the ceiling, a long chain dangles down, topped with a plug.");
        flags[kFLAGS.MET_MILK_SLAVE] = 1;
        if (flags[kFLAGS.MILK_NAME] instanceof Number) {
            outputText("  There are no faucets or water sources that you can see, but your unasked questions are answered when a heavy, liquid sloshing sound emanates from the corner.  The source of the noise reveals itself to be a tit-encumbered, black-skinned human girl.  She drags her milk-swollen mammaries up to the edge of the tub and asks in a breathy, excited voice, \"<i>Bath time?</i>\"  Whoever she was, the witches seem to have broken her utterly - she's interested in nothing but being milked or lounging in her corner.  The way out lies west.");
            addButton(2, "Bath Time", milkBathsAhoy);
        }
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_SLEEPING_CHAMBER);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_EAST_WARRENS_EAST) {
        clearOutput();
        outputText("<b><u>Eastern Warrens Main Hall (Eastern Portion)</u></b>\n");
        outputText("Coming to an end here, the eastern warrens' main hall ends in little more than a bare, flat stone wall.  The area is well illuminated by the familiar magical lights, giving you a good view of the historical tapestries and blank spaces yet to be filled in.  You can't help but wonder if the Witches will simply stop recording their history once this area is full, or if they will expand in order to give themselves more room.  Looking over the events depicted here, it's clear that this enclave is one of the oldest, roughly two decades old.  There are pictures of a blond haired woman in fluttering, golden robes leaving a town of demons behind and journeying towards the desert.  Could that be how the sand witches began?  You shake your head and look over the rest of the room.  There's a curtained off doorway to the south, and of course, the tunnel leads back to the west.");
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_MAIN);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_CUM_WITCH_BEDROOM);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_CUM_WITCH_BEDROOM) {
        clearOutput();
        outputText("<b><u>Eastern Warrens East Portion South Side (Cum Witch's Bedroom)</u></b>\n");
        outputText("As soon as you brush back the curtain, you're assaulted by a pungent, salty smell.  It almost reminds you of tepid ocean water... or cum.  Regardless, you force your way in and take a look around.  This area has all the furnishings of a small domicile and comes complete with a solid oak bed and mattress.  The mattress and sheets seem to be cared for with immaculate precision, perhaps magically aided.  There is a simple dresser here, and though it looks to have been fashioned by crude tools, the wood looks sturdy and serviceable.  All of the drawers are closed, of course.  A few books sit on a nearby table, but it's obvious they're written in a language beyond your comprehension.  Whoever wrote them either did so in a different tongue or a magical language that would take years to decipher.  A thick curtain walls this chamber off from the eastern warrens' main hall, to the north.  To the west, there is a thinner, gauzy sheet hanging from an opening in the rock - likely leading to a similar room.");
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_EAST);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_CUM_WITCH_OFFICE);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_CUM_WITCH_OFFICE) {
        clearOutput();
        outputText("<b><u>Eastern Warrens West Portion South Side (Cum Witch's Office)</u></b>\n");
        if (flags[kFLAGS.SAND_WITCHES_FRIENDLY] > 0) {
            // {SAND WITCHES NOW FRIENDLY}
            outputText("The cum witch is here, pounding away at one of her sister's cunts, like usual.  She seems to CONSTANTLY excrete her jism into her partner's many cunt-folds, but as her passion and speed rises, the flow thickens, eventually filling the poor milk-witch's wombs entirely.  They go at it like animals for a few seconds more, then separate after a climactic orgasm that leaves a puddle of spooge inches deep on part of the uneven floor.  The cum-witch moves her insensate sister to rest on a nearby bench before putting on her hat and robes.  She winks at you and offers, \"<i>Well, I hope you enjoyed the show, interloper.  Did you come here for some of my gift, or something else?</i>\"");
            // {VOLUNTEER FOR SERVICE: BAD-END, BLESSING: +CUM PRODUCTION}
            if (flags[kFLAGS.BEEN_BLESSED_BY_CUM_WITCH] == 0) {
                addButton(2, "Blessing", friendlyCumWitchBlessing);
            }
        }
        else {
            // {CUM WITCH UNDEFEATED}
            if (flags[kFLAGS.CUM_WITCH_DEFEATED] == 0) {
                outputText("The curtain pulls to the side easily, and as soon as you enter, you're greeted by the sound of flesh slapping on flesh from somewhere to your left.  Briefly, you note a number of desks as you turn towards the sexual audio, but what really catches your eyes are the two girls locked in coitus.  One, a normal-looking sand witch, is bent over a bench and taking quite the fucking.  Milk drips in huge beads from her four fat teats while fresh rivulets of cum run down past the dried-cum on her thighs.  Above her is something else entirely, a taller woman with a single pair of obscenely large breasts.  She's so dark skinned that at first you have difficulty picking out her features in the dim lighting.  Glittering sweat runs down her form, dripping from her pendulous breasts as she throws back her head and moans, \"<i>Gonna... just... take it!  Take my gift!</i>\"");
                outputText("\n\nBeneath the ebony woman, you see the sand witch begin to quiver and moan, thick gouts of semen back-flooding from her packed cunny as her belly rounds with delicious fecundity.  Her muscles lock, then twitch feebly for a few seconds before she slides off into the new-born cum-puddle, slipping along the floor in an insensate pile of orgasmic bliss.  You're so enraptured by the sight, that you don't even try to hide when the ebony futanari turns to face you, putting on a pointed, wide-brimmed hat and black robe.  For the slightest second you see a pair of orange-sized balls and one thick, cum-lubed member, but those quickly disappear into the voluminous robes.");
                outputText("\n\n\"<i>Well now, surely you aren't one of the witches here to receive my seed,</i>\" the odd witch muses, \"<i>I'm afraid you must be an interloper then.  Pity, ");
                if (player.vaginas.length > 0) outputText("but then, maybe you can come to serve us as a mother.  Our tribe is not wasteful.");
                else if (player.cocks.length > 0) outputText("but perhaps, once you have been disabused of your notions of freedom, you could serve as my loyal cum-pump.  It does get so tiring inseminating all these girls alone.");
                else outputText("but then, perhaps you could be made to serve in other ways.");
                outputText("</i>\"");

                outputText("\n\nThe soot-skinned futanari delicately opens one of her palms and murmurs an unintelligible word. Before your eyes, flickers of light flash into existence and align themselves vertically, slowly sliding together like pieces of a flawless crystal jigsaw puzzle.  The glimmering phantasmal luminance slowly fades as all the pieces come together, leaving a flawless ivory staff in the woman's hand.  She slams the base into the ground, sending ripples of magical force through the many pools of cum scattered around the room.  <b>It looks like you'll have to fight her!</b>");
                // {START CUM WITCH FIGHT}
                startCombat(new CumWitch());
                return;
            }
            // {CUM WITCH BEATEN}
            else {
                outputText("This room is absolutely, unequivocally inundated with the scent of spunk.  Sure, you note there's a few grates built into the floor to drain off most of it, but it hasn't stopped a number of huge puddles from building up all over this room, likely the result of the two semi-conscious women in this room.  One, a recently-bred sand witch got the fucking of her life from the other, a cum witch.  Both are front-down in jizz, their abused bodies quivering and weak.  The cum witch had tried to fight you, but she was no match for your superior technique.");
                // Lust:
                if (player.lust >= 33) {
                    outputText("\n\nYou could probably pull the cum witch up and sate yourself on her, if you wanted.  She doesn't seem in any shape to resist.");
                    // lust win menu.
                    addButton(2, "Sex", cumWitchDefeated);
                }
            }
        }
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_CUM_WITCH_BEDROOM);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_SACRIFICIAL_ALTAR) {
        clearOutput();
        outputText("<b><u>Sacrificial Altar</u></b>\n");
        outputText("This chamber clearly holds some kind of important significance to the witch coven.  The floor and walls are covered in shining white, reflective tiles, and a large number of carved jugs ring the outer edge of the room.  The entire place smells faintly of milk.  Sniffing, you close in on the source of the aroma.  It's emanating from what looks like a golden well, positioned dead-center before you.  The various containers also smell faintly of the alabaster treat, and oddly, you can't catch even a single whiff of spoilage; it all smells fresh.  There must be some magic at work.  Peeping over the edge of the well, you can barely make out what seems like a sea of milk stored below: white-capped ivory waves sloshing around in a chamber so large you can't see the walls of it.  It must be preserved through magic.\n\nThere is a doorway to the south and one on the north wall.");
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_THRONE_ROOM);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_CAVERNOUS_COMMONS);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_THRONE_ROOM) {
        clearOutput();
        outputText("<b><u>Sand Mother's Throne</u></b>\n");
        outputText("This chamber is lit by swirling vortexes of magical colors, each hue dancing around another in coordinated motions.  The walls are made of hewn sandstone inlaid with ivory engravings that appear to depict what must be flowing milk.  Ahead there is a huge, white throne, also made from ivory.  It is a magnificent piece of craftsmanship.  Clearly, you have found the leader's throne room.  There is a robed figure atop it.");
        addButton(2, "Approach", sandMotherStuffGOA);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_SACRIFICIAL_ALTAR);
    }
}
