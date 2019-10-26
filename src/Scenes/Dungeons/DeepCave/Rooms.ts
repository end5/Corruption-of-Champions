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

export function dungeonRoom() {
    dungeonMenu();
    // DUNGEON 2 START: ROOM 10
    if (game.dungeonLoc == DUNGEON_CAVE_ENTRANCE) {
        outputText("<b><u>The Cave Entrance</u></b>\n", true);
        outputText("The entrance to this cave is far bigger than the cave itself.  It looks to be a totally natural formation.  Outside, to the south, is a veritable jungle of plant-life.  There are massive trees, vines, and ferns everywhere.  The cave grows narrower the further north you go, until it's little more than a claustrophobic tunnel burrowing deep into the earth.", false);
        addButton(0, "North", dungeonEnterRoom, DUNGEON_CAVE_TUNNEL);
        addButton(5, "Leave", leaveZetazsLair);
        // Zetaz gone?  Alchemist shits!
        if (flags[kFLAGS.DEFEATED_ZETAZ] > 0) {
            if (flags[kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT] == 0) {
                outputText("\n\nThere's a demon lazing around outside the cave entrance.  Judging by his size and apparent gender, he must be an incubus.  You try to stay hidden for now, but all he's doing is throwing darts at a dartboard he's set up across the way from himself.  What kind of demon sits around playing darts?");
                addButton(0, "Investigate", theSeanShopOffer);
            }
            else if (flags[kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT] > 0) {
                outputText("\n\nThe incubus known as Sean has set up a small stall around the cave entrance, and is busy tending to his shelves and wares.  He's dressed in an incredibly modest, three-piece suit, and nods to you as you approach, \"<i>Let me know if you want to buy anything.  I haven't done much with the cave, so feel free to poke around if you missed anything on your first pass.  I barely use the first room.</i>\"");
                addButton(2, "Shop", incubusShop);
            }
        }
    }
    // D2: Tunnel
    if (game.dungeonLoc == DUNGEON_CAVE_TUNNEL) {
        outputText("<b><u>Cave Tunnel</u></b>\n", true);
        outputText("This cave tunnel slants downwards to the north, and upwards to the south.  You can see sunlight and feel a fresh breeze from the latter direction, though the walls and air around you are damp with moisture.  You realize that the floor of this cave is fairly smooth and even, as if some attempt had been made to level it out.  You can see a bricked up wall along the north end of the tunnel.  It has a crudely fashioned wooden door in the center of it.", false);
        addButton(0, "North", dungeonEnterRoom, DUNGEON_CAVE_GATHERING_HALL);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_CAVE_ENTRANCE);
    }
    // D2: [GATHERING HALL]
    if (game.dungeonLoc == DUNGEON_CAVE_GATHERING_HALL) {
        outputText("<b><u>Gathering Hall</u></b>\n", true);
        outputText("This room is clearly some kind of dining or gathering hall.  The chamber's shape has been hewn from the surrounding stone, and judging by the visible tool-marks, it wasn't done with a great deal of care.  Two long wooden tables fill out the room.  They're surprisingly well made, though it appears that part of their legs were hacked off with axes to lower their overall height.  You can't help but wonder where they were stolen from.  The tables haven't been cleaned in ages, as evidenced by their many stains and a number of half-rotten bones that still rest on their battered surfaces.  Two rows of crudely crafted chairs flank their better-made brethren, made to accommodate very short beings.", false);
        // [Imp Mob Fight]
        if (flags[kFLAGS.ZETAZ_IMP_HORDE_DEFEATED] == 0) {
            outputText("\n\nThe place is swarming with two dozen imps, and none of them look happy to see you.  A number of them take flight while the rest form a ring around you, trapping you!  It looks like you'll have to fight your way out!", false);
            addButton(0, "FIGHT!", impHordeStartCombat);
        }
        else {
            addButton(0, "North", enterZetazsRoomFromTheSouth);
            addButton(1, "East", dungeonEnterRoom, DUNGEON_CAVE_TORTURE_ROOM);
            addButton(5, "West", dungeonEnterRoom, DUNGEON_CAVE_FUNGUS_CAVERN);
            addButton(6, "South", dungeonEnterRoom, DUNGEON_CAVE_TUNNEL);
        }
    }
    if (game.dungeonLoc == DUNGEON_CAVE_FUNGUS_CAVERN) {
        outputText("<b><u>Fungus Cavern</u></b>\n", true);
        if (flags[kFLAGS.ZETAZ_FUNGUS_ROOM_DEFEATED] == 0) {
            outputText("This cavern is huge!  Though you can see the edge of a large stalactite to the west, the rest of the cave disappears into darkness beyond twenty or thirty feet away.  The floor is covered in spongy, leaf-shaped fungus.  They're huge, shiny, and purple, and they cover the cavern floor for as far as the illumination will reach.  A strange, sweet smell hangs in the cavern's humid air, probably coming from the copious fungal flora.  At the edge of your vision you can see a humanoid skeleton propped up against a stalagmite.  There's a rapier laying a few feet in front of it, and it still looks as good as new.  What do you do?", false);
            // [Get It] [Fly-Get It]

            addButton(2, "Get Sword", getSwordAndGetTrapped);
            if (player.canFly()) {
                addButton(3, "Fly to Sword", flyToSwordAndGetTrapped);
            }
        }
        // Fungus creature dealt with!
        else {
            outputText("This cavern is huge!  Though you can see the edge of a large stalactite to the west, the rest of the cave disappears into darkness beyond twenty or thirty feet away.  The floor is covered in spongy, leaf-shaped fungus.  They're huge, shiny, and purple, and they cover the cavern floor for as far as the illumination will reach.  The familiar, sweet smell of them hangs in the cavern's humid air, but you're fairly certain they won't trouble you again.", false);
        }
        addButton(1, "East", dungeonEnterRoom, DUNGEON_CAVE_GATHERING_HALL);
    }
    // Vala's bitch room
    if (game.dungeonLoc == DUNGEON_CAVE_TORTURE_ROOM) {
        outputText("<b><u>Filthy Torture Room</u></b>\n", true);
        outputText("You step into a dank room, outfitted somewhere between a prison cell and a torture chamber. The ceiling of the sulfur-lined room is hung with an inventive variety of shackles, chains, and devices whose intent are not clear to you. Against the north wall, there appears to be an alchemy lab, laden with a dizzying collection of vials, flasks, and beakers. Against the south, there is a long, sinister-looking wooden rack bearing a sequence of progressively larger and thicker devices, carved to resemble monstrous cocks.  ", false);
        // Vala here?
        if (flags[kFLAGS.FREED_VALA] == 0) {
            spriteSelect(85);
            // Not yet defeated zetaz
            if (flags[kFLAGS.DEFEATED_ZETAZ] == 0) {
                // Intro:
                outputText("", true);
                outputText("In the far corner, there is a small woman, her back to you, hanging limply by manacles that keep her suspended in a half-kneel. Rich purple hair hangs in long, clumped strands that sparkle occasionally with a pink glitter. Above her, there is a tarnished bronze nameplate that you think reads 'Vala,' but it's impossible to tell for sure under all the imp graffiti. She does not seem to be conscious.\n\n", false);

                outputText("It isn't until you get closer that you notice the large, dragon-fly wings attached to her back and the ephemeral glow of sunlight faintly radiating from her pale skin. If the girl wasn't almost 4' tall, you'd swear she was a fairy, like the ones you've met in the forest. If the cum-clogged drain in the center of the room is any indication, the imps must be using her for their perverted desires. You begin to get an appreciation for what she's endured when you get near enough to see the small, black marks staining her luminance. On her right shoulder blade, the imps have tattooed \"pussy\" and on the left, \"ass.\" All along her back, the imps have tattooed two columns of hash marks, from her shoulders all the way down her ribs, over her ass, down her legs, and even onto the soles of her feet.\n\n", false);

                outputText("You step around her and are startled to see that while the fey girl is whip-thin, her breasts are disproportionately huge. They'd be at least a DD-cup on a normal human, but for her height and body type, they're practically as large as her head. They jiggle at her slow, uneven breathing, tiny drops of milk bubbling at her nipples with every heartbeat. If she weren't chained to the ceiling, you suspect she wouldn't even be able to stand under her own power. Her eyes are open, but she's staring blankly ahead, unaware of the world around her, pupils constricted to pinpricks amid the ocean of her dulled pink irises. Like this, she's no threat to anybody. You suppose you could let her go, though it's unclear if she's self-aware enough to even move. Alternately, you could blow off a little steam.", false);
                // [Free] [Use] [Leave]
                addButton(2, "Free", freeValazLooseCoochie);
                if (player.gender > 0) {
                    addButton(3, "Use", useVala);
                }
                if (player.lust >= 33 && shouldraFollower.followerShouldra()) {
                    addButton(4, "ShouldraVala", shouldraFollower.shouldraMeetsCorruptVala);
                }
            }
            // Zetaz defeated
            else {
                outputText("In the far corner, there is a small woman, her back to you, hanging limply by manacles that keep her suspended in a half-kneel. Rich purple hair hangs in long, clumped strands that sparkle occasionally with a pink glitter. Above her, there is a tarnished bronze nameplate that you think reads 'Vala,' but it's impossible to tell for sure under all the imp graffiti. She does not seem to be conscious.\n\n", false);
                // Option to investigate her
                // leftValaAlone()
                addButton(2, "Faerie", leftValaAlone);
            }
        }
        // Not here
        else outputText("In the far corner, there are a set of empty manacles, originally set up to contain Vala, who you've long since freed.", false);
        // Movements
        addButton(0, "North", dungeonEnterRoom, DUNGEON_CAVE_SECRET_TUNNEL);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_CAVE_GATHERING_HALL);
    }
    // Backdoor Banditos!
    if (game.dungeonLoc == DUNGEON_CAVE_SECRET_TUNNEL) {
        outputText("<b><u>Secret Tunnel</u></b>\n", true);
        outputText("This passage is the least livable area that you've seen out of the entire cave.  The walls and floor are little more than dirt and rocks, and explosions of dust burst from the ceiling with each tentative movement you make.  For a moment, a wave of claustrophobia threatens to rob you of your nerve, but you blink the pervasive particles from your eyes and focus on why you're here.  ", false);
        // If zetaz not yet defeated
        if (flags[kFLAGS.DEFEATED_ZETAZ] == 0) outputText("You're going to find Zetaz and pay him back for drugging you on your first day here.  ", false);
        outputText("A crude door on the southern edge of the tunnel leads back to the imp's sleeping chambers, but the tunnel continues away, curving sharply to the west where a far more lavish door marks the far side of the subterranean passage.", false);

        if (flags[kFLAGS.ZETAZ_LAIR_TOOK_BONDAGE_STRAPS] == 0) {
            outputText("\n\nA pair of fetishy, discarded straps lies on the floor, half obscured by dust.  It looks like something a goblin would wear.  Sexy!");
            addButton(2, "B.Straps", takeBondageStraps);
        }
        // (Item: sexy bondage straps/a set of sexy bondage straps/B.Straps? - Seduce ability?)
        // (Possible effect: +lust every round in combat if afflicted with Ceraph's bondage!)
        addButton(5, "West", dungeonEnterRoom, DUNGEON_CAVE_ZETAZ_CHAMBER);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_CAVE_TORTURE_ROOM);
    }
    // Zetaz' Lair!
    if (game.dungeonLoc == DUNGEON_CAVE_ZETAZ_CHAMBER) {
        outputText("<b><u>Zetaz's Chambers</u></b>\n", true);
        outputText("You've stepped into the most lavish room in the entire cave system, and marvel at the difference between this magnificent abode and your own crudely constructed campsite.  The stone walls are covered in stolen tapestries that each look to have been liberated from a unique source.  Judging by the variety of depictions and art styles in this one room, you've barely met a fraction of the races that once inhabited the lands of Mareth.  A pair of bright, smokeless lanterns hang from each wall, lit from within by obviously magical spheres of luminescence.  Various pieces of stolen furniture decorate the room, surrounding a four-post bed decorated with masterfully done carvings of various carnal acts.", false);
        if (flags[kFLAGS.ZETAZ_DOOR_UNLOCKED] == 0) {
            outputText("  <b>There's a bolt holding a door to the south closed, but you give it a gentle tug and it comes unlocked.</b>", false);
            flags[kFLAGS.ZETAZ_DOOR_UNLOCKED] = 1;
        }
        outputText("\n\n", false);

        if (flags[kFLAGS.DEFEATED_ZETAZ] == 0) {
            outputText("A familiar imp is looking at you with a bewildered expression painted across his face.  You recognize his face immediately – this is Zetaz!  Oddly, he seems to have grown much larger in the time since your previous meeting.  He's over four feet tall and much more solidly built!\n\n", false);
            outputText("Zetaz whines, \"<i>Seriously?  You show up here!?  First you make me lose my job, and now you beat up my friends and track dirt in my bedroom!?  I've had enough!</i>\"", false);
            startCombat(new Zetaz(), true);
            return;
        }
        else {
            addButton(1, "East", dungeonEnterRoom, DUNGEON_CAVE_SECRET_TUNNEL);
            addButton(6, "South", dungeonEnterRoom, DUNGEON_CAVE_GATHERING_HALL);
        }
    }

}
