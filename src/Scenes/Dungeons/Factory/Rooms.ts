const DUNGEON_FACTORY_FOYER: number = 9;
const DUNGEON_FACTORY_PUMP_ROOM: number = 1;
const DUNGEON_FACTORY_BREAK_ROOM: number = 2;
const DUNGEON_FACTORY_FURNACE_ROOM: number = 3;
const DUNGEON_FACTORY_REPAIR_CLOSET: number = 4;
const DUNGEON_FACTORY_MAIN_CHAMBER: number = 5;
const DUNGEON_FACTORY_FOREMANS_OFFICE: number = 6;
const DUNGEON_FACTORY_PUMP_CONTROL: number = 7;
const DUNGEON_FACTORY_STORE_ROOM: number = 8;


export function enterFactory(): void {
    clearOutput();
    if (player.effects.findByType(StatusAffects.FactoryOverload) >= 0) {
        outputText("Rounding a bend in the mountainous foothills, you stumble upon a large, rusted and eerily silent iron structure with a number of tall gray smokestacks.  A bevy of green-tinged copper pipes stem from the rear of the building, climbing up the steep mountainside toward a jagged hole in its face.  Most of these are cracked open along their seams and both the pipes and mountainside are glazed with pink tinted runoff.\n\nThere are no windows to the hellish factory, with only a single iron door adorning the front wall.\n\nDo you enter the factory or leave?");
    }
    else if (player.effects.findByType(StatusAffects.DungeonShutDown) >= 0) {
        outputText("Rounding a bend in the mountainous foothills, you stumble upon a large, rusted and eerily silent iron structure with a number of tall gray smokestacks.  A bevy of green-tinged copper pipes stem from the rear of the building, climbing up the steep mountainside and disappearing into a hole in its face.\n\nThere are no windows to the hellish factory, with only a single iron door adorning the front wall.\n\nDo you enter the factory or leave?");
    }
    else {
        outputText("Rounding a bend in the mountainous foothills, you stumble upon a large and rusted iron structure belching cloying pink smoke from its tall smokestacks.  A bevy of green-tinged copper pipes stem from the rear of the building, climbing up the steep mountainside and disappearing into a hole in its face.  It must be some kind of demonic factory, though you've no idea what they could be pumping out.  High atop the roof, you spy a huge water tower fed by smaller pipes that run down the building's side and off in the direction of the lake.\n\nThere are no windows to the hellish factory, with only a single iron door adorning the front wall.  If you go inside there will undoubtedly be many demons to fight and little chance to escape. Death or worse awaits should you fall into their hands.\n\nDo you enter the factory or leave?");
        if (player.effects.findByType(StatusAffects.FoundFactory) < 0) {
            outputText("\n\n<b>The factory is now accessable from the 'Dungeons' submenu inside 'Places' menu.</b>");
            player.effects.create(StatusAffects.FoundFactory, 0, 0, 0, 0);
        }
    }
    simpleChoices("Enter", actuallyEnterFactory, "", null, "", null, "", null, "Leave", Camp.returnToCampUseOneHour);
}

function dungeonEnterRoom(room: number): void {
    game.dungeonLoc = room;
    playerMenu();
}

function actuallyEnterFactory(): void {
    // 	inDungeon = true;
    game.dungeonLoc = DUNGEON_FACTORY_FOYER;
    playerMenu();
}

export function leaveFactory(): void {
    // 	inDungeon = false;
    game.dungeonLoc = 0;
    clearOutput();
    outputText("You slip out the door and disappear, heading back towards your camp, leaving the hellish factory behind.");
    doNext(Camp.returnToCampUseOneHour);
}

export function factoryShutdown(): void {
    clearOutput();
    outputText("You resolve to shut down the factory, then destroy the controls.  You spend a few moments making sure you aren't about to do something disastrous.  A few deep breaths calm your nerves, letting you focus on pressing the correct buttons.  The constant thrumming of the machinery slowly dies down, closely followed by a chorus of disappointed moans.  You step over to the window and watch as the captives come out of their drug induced sex-comas.  A great deal of them gather up and leave, though you are unsure what their destination is.  A few seem to be gathering back around the equipment, and puzzling out how to operate it.  Maybe they liked being here...");
    doNext(playerMenu);
    player.effects.create(StatusAffects.DungeonShutDown, 0, 0, 0, 0);
}

export function factoryOverload(): void {
    clearOutput();
    outputText("You resolve to shut down the factory by overloading the storage tanks, rendering much of the equipment inoperable and difficult to repair.  With a quick twist of a knob, you override the pressure vents for the storage tanks.  Within minutes, you hear the sounds of popping rivets and straining pumps.  You look out over the factory floor and watch as many of the pipes fracture, dripping seed over the moaning captives.  Smoke rises from pumps as they short out and overheat.  The entire building shudders as a massive blast echoes from somewhere to the west.  A high pitched whine fills the building as the last motors shriek and die.  The captives slowly start to come to as the flood of drugs and artificial pleasure come to a stop.  Many break down and cry, others begin unhooking themselves and exploring their surroundings.  You watch with interest as many of them rally together and make for an exit.   The remaining survivors begin scavenging parts from the machinery and puzzling out how to use it.  Perhaps they liked it here.");
    doNext(playerMenu);
    player.effects.create(StatusAffects.DungeonShutDown, 0, 0, 0, 0);
    player.effects.create(StatusAffects.FactoryOverload, 0, 0, 0, 0);
}

function relieveTension(): void {
    clearOutput();
    // First time...
    if (player.effects.findByType(StatusAffects.TensionReleased) < 0) {
        outputText("You nod and step forwards, allowing her to hook up a modified harness and inject you with the demonic concoction.  In no time heat boils through your veins, pooling on your chest and crotch.  ");
        if (player.breasts.biggestTitSize() < 10) {
            player.growTits(1, (2 + rand(3)), true, 1);
            outputText("  ");
        }
        outputText("You glance over to the pile of glistening entwined bodies as they writhe in pleasure, and find yourself drawn in to the mass.  You spend the next four hours suckling tainted breast milk, fucking gaping pussies, and doing your damnedest to milk as much cum from the dick-girls around you.  Eventually the drugs work their way out of your system, leaving you to recover on the floor.  Cum, milk, and sweat drip from your nude form as you try to clean up and get dressed.");
        player.orgasm();
        dynStats("int", -2, "lib", 4, "cor", 4);
        player.slimeFeed();
        player.effects.create(StatusAffects.TensionReleased, 0, 0, 0, 0);
    }
    // Second/third times...
    else {
        // [[2nd time]]
        if (player.effects.getValue1Of(StatusAffects.TensionReleased) == 0) {
            outputText("You eagerly put on the modified harness and let them inject you with more of those body-altering chemicals.  As they fill you with artificial lust and desire, you cry out and beg for more.  They oblige you and give you a larger dose than the first time.  ");
            // Grow dick!
            if (player.cocks.length > 0) {
                player.lengthChange(player.increaseCock(0, 5), player.cocks.length);
                if (player.cocks.averageCockLength() >= 9 && player.cocks.averageCockThickness() < 2) {
                    outputText("You feel yourself gain in thickness as well, to match your new length.  ");
                    temp = player.cocks.length;
                    while (temp > 0) {
                        temp--;
                        if (player.cocks[temp].cockThickness < 2) player.cocks[temp].cockThickness++;
                    }
                }
                else if (player.cocks.averageCockLength() >= 15 && player.cocks.averageCockThickness() < 3) {
                    outputText("You feel yourself gain in thickness as well, to match your new length.  ");
                    temp = player.cocks.length;
                    while (temp > 0) {
                        temp--;
                        if (player.cocks[temp].cockThickness < 3) player.cocks[temp].cockThickness++;
                    }
                }
            }
            // Grow chest
            // (If player has 0 bewbs)
            if (player.breastRows.length == 0) {
                player.breasts.createBreastRow();
                outputText("Your chest tingles, revealing a pair of pink nipples on your new mammory glands.  ");
            }
            player.growTits(1, (2 + rand(3)), true, 1);
            outputText("  ");
            outputText("Your " + nippleDescription(player, 0) + "s ");
            if (player.cocks.length > 0) outputText("and " + multiCockDescript(player));
            outputText(" become rock hard, leaking fluids constantly.  ");
            // MALE
            if (player.cocks.length > 0 && player.vaginas.length == 0) outputText("Glancing over into the sea of sex, you find yourself drawn to the nearest pussy, as if it was the only thing in the world to matter.  You lose track of the time as you fuck hard dozens of gaping cunts, each of them overflowing with cum from all the participants in this infernal orgy.  ");
            // FEMALE
            if (player.vaginas.length > 0 && player.cocks.length == 0) {
                outputText("As you enter the sex-crazed crowd, you notice several \"girls\" with demonic cocks bloated by the use of drugs, getting drawn to you by the scent of your dripping wet " + vaginaDescript(player, 0) + ". Sitting on the floor, you spread your legs wide, facing the nearest one with an inviting lewd moan, while you hungrily grab another cum-covered cock, (one that just finished filling up an obscenely wide gaping vagina), to suck it.  You are soon penetrated and fucked hard and deep, one huge infernal dick after another, as they all cum into you in turn. ");
                player.cuntChange(150, true);
            }
            // HERM
            if (player.vaginas.length > 0 && player.cocks.length > 0) outputText("You feel your " + multiCockDescript(player) + " getting milked by many wet holes, though you are too busy sucking cocks and moaning in ecstasy to notice who they belong to.  ");
            outputText("The next eight hours are lost to your desires as you cum over and over, feeling mind-shattering pleasure.  You recover a while on the floor, soaked with a mixture of milk, cum, and pussy-juice.  Getting dressed is a bit troublesome with the recent changes, but you manage to squeeze back into your " + player.armorName + ".  You walk away while still feeling horny, and the moaning of the girls behind you doesn't help.  Maybe you could stay for another round...");
            player.orgasm();
            dynStats("int", -2, "lib", 4, "cor", 4);
            player.effects.create(StatusAffects.TensionReleased, 0, 0, 0, 0);
            player.effects.addValue(StatusAffects.TensionReleased, 1, 1);
            player.slimeFeed();
        }
        // Third time
        else {
            outputText("Desperate for more of the demon-drugs, you slide into the now-familiar harness and let the needles sink into your skin.   Panting in lust, you beg for them to increase the dosage again.   Desire burns through your veins as the cocktail surges through them");
            if (player.cocks.length > 0) {
                outputText(", filling your " + multiCockDescriptLight(player));
                outputText(" with sensation");
                if (player.cocks.length == 1) outputText("s");
                outputText(" as ", false);
                if (player.cocks.length > 1)
                    outputText("they");
                else outputText("it", false);
                outputText(" grow", false);
                if (player.cocks.length == 1) outputText("s");
                outputText(" massive and engorged.  ");
            }
            else outputText(".  ");
            outputText("Your " + nippleDescription(player, 0) + "s throb, becoming hard, puffy, and starting to dribble milk.  ");
            if (player.vaginas.length > 0) outputText("Your pussy is instantaneously soaked, filling the air with the scent of sex.  ");
            outputText("The desire for more of the drugs battles with your need to fuck and be fucked, until a small functioning part of your brain realizes it'll be easier to get sex than to get more of the drug.  You pull free and throw yourself into the mass of sweaty bodies, losing yourself in the salty tang of sweat and sex, pleasing nipples, clits, and cocks with your hands, and giving and receiving as much pleasure as you can.  You're in heaven.  Vaguely you realize time is passing, but it is a secondary concern next to the idea of having another groin-soaking orgasm.   You fuck and suck until you pass out from delirium.\n\n");
            // GAME OVERZZ
            outputText("In time you wake, your body aching both from the exertion and a desire for more.  On one hand you had a mission here, but why fight and struggle with danger and loneliness when you could be high on sex and cumming near-constantly?  You cuddle up to an exhausted girl and decide to wait for the drug-mistresses to give you another turn in the pile.  One of them turns, as if noticing your train of thought, and wheels over a breast-pump.  She hooks it up to your still-leaking nipples and you moo with happiness.  She grins, promising another dose to you if you are a good cow for her.");
            gameOver();
            return;
        }
    }
    doNext(playerMenu);
}

export function factoryFinisher(): void {
    clearOutput();
    outputText("You crack your sleep-fuzzed eyes, blinking at the sudden light as you try to get your bearings and remember where you are.  A nearby voice is moaning like a bitch in heat, or a drunk slut.  You giggle a bit at the thought as you work at focusing your eyes.  You feel warm and happy, particularly in your chest and groin.  The cobwebs of sleep clear from your mind with agonizing slowness, but you find it hard to worry about with how warm and wonderful you feel.  It's almost like hot wet mouths are latched onto your crotch and breasts, licking and sucking in perfect rhythm.  ", false);
    if (player.cocks.length == 0 || player.breasts.biggestTitSize() <= 1) {
        outputText("A small inner voice pipes up to remind you that you don't have ", false);
        if (player.cocks.length == 0) {
            outputText("anything in your groin to suck on", false);
            if (player.breasts.biggestTitSize() <= 1) outputText(" or ", false);
        }
        if (player.breasts.biggestTitSize() <= 1) outputText("any adornments on your chest", false);
        outputText(".  That voice trails off as that feeling of perfect pleasure and rightness sweeps it away with the last remnants of sleep.\n\n", false);
    }
    else outputText("A small inner voice tries to warn you of something, only to be swept away in the feelings of perfect pleasure and rightness that wash away the last remnants of your sleep.\n\n", false);
    outputText("You realize that the moaning voice is your own, and find that the thought just turns you on more.\n\n", false);
    outputText("'<i>You're such a horny slut!</i>' echoes a voice in your head.  You want to nod and smile, but are prevented by something.  You realize you're strapped into some kind of chair and harness so securely that you can't even move.  Tiny soothing fingers massage your temples, rubbing away the fears that moments ago threatened to interrupt your pleasure.  You can see a ", false);
    if (player.breasts.totalBreasts() == 2) outputText("pair of ", false);
    else outputText("multitude of ", false);
    outputText(" clear hoses coming away from your cow-like chest udders.  ", false);
    if (player.breasts.biggestLactation() <= 1.5) outputText("Creamy white milk is flowing in a steady stream up the tubes and away from you.  ", false);
    else outputText("The hoses bulge obscenely as they struggle to keep up with the torrents of creamy-white milk you're producing.  ", false);
    outputText("Even more wanton moans erupt from your disobedient lips now that you know what's going on.  You're not just a horny slut.  You're a horny cow-slut who's getting off on having her tits pumped.  The massage you're getting feels so good once you realize that.\n\n", false);
    outputText("A snap echoes through the pumping room, nearly drowned out by the moans of the other milk-sluts around you.  You look around as you realize the band to restrain your head has been unlatched.  You take advantage of your newfound freedom and look around.  Rows and rows of other girls are there, just like you.  Almost all of them have bigger tits and fuller milk-tubes.  In addition, they all have enormous members that would drag on the floor were it not for the gigantic tubes encapsulating each and every one.  ", false);
    outputText("The girl next to you squirms and cums, wriggling inside her harness as waves of sticky goop are pumped down her cock-tube into a floor-socket.  She just keeps going and going, making you wonder how she can make so much of the stuff.  As the sight excites you, the pleasure in your own crotch redoubles.  Looking down thanks to your newfound freedom, you see your own giant encapsulated member; though not as large as your neighbor's, it still looks and feels wonderful.\n\n", false);
    outputText("The lining of the tube squeezes and massages your trapped prick expertly, even as those hands continue to work on your mind.  Some part of you suspects that your thoughts are being manipulated, but the carnal pleasure you are experiencing is so amazing that you have no intention of resisting. If being a cumslut for your sexy demonic masters is what it takes, so be it. Cramming a massive demon-cock in your throat, getting a few others up your holes to keep you pregnant all the time, and being their busty hermaphrodite breeding tool would be your joy and privilege.  ", false);
    if (player.effects.findByType(StatusAffects.CampMarble) >= 0) {
        outputText("As if reading your thoughts, the hands stop massaging, and their owner snaps their fingers. You see Marble step in front of you, wearing an odd set of pink panties with a dick-like protrusion sticking out the front of them.  At the command of the figure behind you, she presents the panty-cock to you.  Happy to be of service, you spread your jaws and engulf as much of the great penis-like thing as you can, while the figure behind you moves around and takes Marble in the ass.  You continue to suck on the pink flesh until you feel it pour some kind of unholy load into your stomach.  Gurgling in pleasure, you start cumming yourself, all the while appeasing your demonic masters by servicing your once lover.\n\n", false);
    }
    else outputText("As if reading your thoughts, the hands stop massaging, and their owner comes in front of you, presenting you with a meaty, throbbing cock.  Happy to be of service, you spread your jaws and engulf as much of the great penis as you can, until you feel it pouring his unholy load into your stomach.  Gurgling in pleasure, you start cumming yourself, all the while attending to one or more of your demonic masters.\n\n", false);

    outputText("<b>This kind of treatment continues for a few days, until sucking, fucking and getting fucked is the only thing you desire. As your mind is now broken, injections are no longer necessary to keep you in a perfect pleasure state. After a month, they even untie you, since you are now their complete cum-puppet, eager only to please and obey.</b>", false);
    // The style on this part wasn't up to par with the rest, so I rewrote some of it, while keeping the meaning
    gameOver();
}

function drinkCoffee(): void {
    spriteSelect(96);
    clearOutput();
    outputText("You take a sip of the rich creamy coffee and suddenly feel refreshed. As you replace the coffeepot, the busty coffee-maker comes to life, grabbing her thick dusky nipples and squeezing out a trickle of scaldingly hot liquid. You can see her eyes roll up into her head from what you assume to be pleasure as she automatically refills the missing coffee, mouth open with ecstasy.  Her movements gradually slow as she quivers almost imperceptibly. A contented smile graces her features as immobility overtakes her, freezing her back in place.  You wonder if 'Mrs. Coffee' was created, or is a victim of this place's dark master.");
    dynStats("lus", 1);
    HPChange(35, false);
    doNext(playerMenu);
}

function takeIronKey(): void {
    clearOutput();
    outputText("You take the <b>Iron Key</b> to keep with your other important items.");
    player.keyItems.create("Iron Key", 0, 0, 0, 0);
    doNext(playerMenu);
}

function openFactoryDoor(): void {
    if (player.keyItems.has("Iron Key") < 0) {
        clearOutput();
        outputText("The door is locked with a key that is not in your possession.");
    }
    else game.dungeonLoc = 1;
    dungeonEnterRoom(game.dungeonLoc);
}

function takeCockMilker(): void {
    clearOutput();
    outputText("You puzzle out how to build a fully functional cock-milker from the spare parts here and assemble it.\n\nYou gained a <b>Cock Milker</b>!");
    outputText("\n\nYou'll need a little help to use it though.");
    player.keyItems.create("Cock Milker", 0, 0, 0, 0);
    player.effects.create(StatusAffects.BuiltMilker, 0, 0, 0, 0);
    doNext(playerMenu);
}

function takeBreastMilker(): void {
    clearOutput();
    outputText("You puzzle out how to build a fully functional breast-milker from the spare parts here and assemble it.\n\nYou gained a <b>Breast Milker</b>!");
    outputText("\n\nYou'll need a little help to use it though.");
    player.keyItems.create("Breast Milker", 0, 0, 0, 0);
    player.effects.create(StatusAffects.BuiltMilker, 0, 0, 0, 0);
    doNext(playerMenu);
}

export function takeSupervisorsKey(): void {
    clearOutput();
    outputText("You search the desk and find a silver key labelled 'Supervisor'.\n\n(Supervisor's Key acquired!)");
    player.keyItems.create("Supervisor's Key", 0, 0, 0, 0);
    doNext(playerMenu);
}

export function openPumpRoom(): void {
    if (player.keyItems.has("Supervisor's Key") < 0) {
        clearOutput();
        outputText("The door is locked with a key that is not in your possession.");
    }
    else game.dungeonLoc = DUNGEON_FACTORY_STORE_ROOM;
    dungeonEnterRoom(game.dungeonLoc);
}

export function storageTakeLactaid(): void {
    if (player.effects.findByType(StatusAffects.TakenLactaid) >= 0)
        player.effects.addValue(StatusAffects.TakenLactaid, 1, -1);
    else player.effects.create(StatusAffects.TakenLactaid, 4, 0, 0, 0);
    Inventory.takeItem(ConsumableLib.LACTAID, playerMenu);
}

export function storageTakeGroPlus(): void {
    if (player.effects.findByType(StatusAffects.TakenGroPlus) >= 0)
        player.effects.addValue(StatusAffects.TakenGroPlus, 1, -1);
    else player.effects.create(StatusAffects.TakenGroPlus, 4, 0, 0, 0);
    Inventory.takeItem(ConsumableLib.GROPLUS, playerMenu);
}

export function dungeonRoom() {
    dungeonMenu();
    // Entry Room
    if (game.dungeonLoc == DUNGEON_FACTORY_FOYER) {
        outputText("<b><u>The Factory Foyer</u></b>\nThe door swings shut behind you with an ominous 'creeeeeaaaaaaak' followed by a loud 'SLAM'.  Glancing around, you find yourself in some kind of stylish foyer, complete with works of art and a receptionist's desk.  Looking closer at the paintings on the wall quickly reveals their tainted and demonic nature: One appears at first to be a painting of a beautiful smiling woman, except you notice dripping tentacles coiling around the hem of her dress.  Behind the receptionist's desk, the second painting is even less discreet, openly depicting a number of imps gang-raping a vaguely familiar-looking woman.  Luckily, whatever demon is employed as the receptionist is away at the moment.  Behind the desk on the northern wall stands a secure-looking iron door.  On the eastern wall is a simple wooden door, though the color of the wood itself is far darker and redder than any of the hard woods from your homeland.  Behind you to the south is the rusty iron entry door.", true);
        addButton(0, "North", openFactoryDoor);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_FACTORY_BREAK_ROOM);
        addButton(6, "South", leaveFactory);
    }
    // Pump Room
    if (game.dungeonLoc == DUNGEON_FACTORY_PUMP_ROOM) {
        if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0) {
            outputText("<u><b>Pump Room</b></u>\nAs you step through the iron door, a cacophony of thrumming mechanical noise assaults your ears.  Coppery pipes arch overhead, riveted into spiked iron brackets that hang from the ceiling in twisted pairs.  The constant thrum-thrum-thrum of concealed pumps and mechanisms makes it difficult to hear anything, but you swear you can make out the faint sounds of sexual pleasure emanating from the northwest side of the room.  Investigating further, you spot a door along the west wall of the room that appears to be the source of the licentious sounds.  The vibrations of all the machinery are strongest along the east walls, indicating the possible site of this hellish place's power-plant. There is a door on the east wall and a door on the north.  To the south is a solid iron door that leads back to the lobby.", true);
        }
        else outputText("<u><b>Pump Room</b></u>\nAs you step through the iron door, silence is the only noise you hear.  Coppery pipes arch overhead, riveted into spiked iron brackets that hang from the ceiling in twisted pairs.  The near-complete silence of the place unnerves you, but allows you to make out the faint sounds of sexual pleasure emanating from northwest side of the room.  Investigating further, you spot a door along the west wall of the room that appears to be the source of the licentious sounds.  There are two other doors, one along the east wall and one on the north.  To the south is a solid iron door that leads back to the lobby.", true);
        addButton(0, "North", dungeonEnterRoom, DUNGEON_FACTORY_REPAIR_CLOSET);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_FACTORY_FURNACE_ROOM);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_FACTORY_MAIN_CHAMBER);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_FACTORY_FOYER);
    }
    // Break Room
    if (game.dungeonLoc == DUNGEON_FACTORY_BREAK_ROOM) {
        spriteSelect(96);
        outputText("Stepping through the dark red doorway, you wander into an expansive break room. Tables surrounded by crude wooden chairs fill most of the floor space. Along the far eastern wall sits a small counter, complete with a strange ebony sculpture of a busty woman with 'Mrs. Coffee' printed on the side. Below the sculpture is a pot of steaming hot coffee, giving off an invigoratingly rich smell.", true);
        // Hooks for succubi encounter
        // (if succubus gone/defeated)
        if (player.effects.findByType(StatusAffects.FactorySuccubusDefeated) >= 0) {
            if (player.keyItems.has("Iron Key") < 0) {
                outputText("  It seems your opponent dropped a small iron key as she fled.", false);
                addButton(2, "Iron Key", takeIronKey);
            }
            addButton(4, "Coffee", drinkCoffee);
            addButton(5, "West", dungeonEnterRoom, DUNGEON_FACTORY_FOYER);
        }
        else {
            spriteSelect(55);
            outputText("\n\nStanding next to the coffeemaker is a blue-skinned woman holding a mug of coffee.  As she takes a sip, oblivious to your presence, you see the mug has '#1 Dad' written on it.  Dressed in a tiny vest, short skirt, and sheer stockings, she looks every bit an air-headed secretarial ditz.  Her two horns are little more than nubs, mostly covered by her flowing blond hair, and if it wasn't for her blue skin and the tip of a spaded tail peeking out from under her skirt, you'd never know what she was.\n\n", false);
            // demon bad end available
            if (demonScore(player) >= 4 && player.cor > 75) {
                outputText("The busty succubus turns, her barely contained breasts jiggling obscenely as she notices you, \"<i>Oh, like hi there ", false);
                if (player.gender == 1) outputText("stud", false);
                else outputText("sexy", false);
                outputText("!</i>\"  She stops, sniffing the air, a curious expression on her face as she slowly circles you, her heals clicking loudly on the floor.  A knowing grin blooms across her face as understanding hits her.\n\n", false);
                outputText("She exclaims, \"<i>Omigawsh!  You're the champion!  Your, like, soul is still there and everything!  But, you're like, completely corrupt an' stuff!  Ya know what'd be fun?  I could fuck you 'til you cum so hard your soul melts out an' you turn into a demon.  Wouldn't that be great?</i>\"\n\n", false);
                outputText("The secretarial demoness pulls out a file and fiddles with her nails, murmuring, \"<i>I guess if you don't wanna, we could just hook you up in the factory.  What's it gonna be?</i>\"", false);
                addButton(0, "Fight", succubusCombatStart);
                addButton(1, "Go Demon", demonBadEnd);
                addButton(2, "Hook Up", succubusBadEnd);
                return; // This prevents the masturbate and item menus showing
            }
            // Not recognized
            else if (humanScore(player) <= 3) {
                outputText("The busty succubus turns, her barely contained breasts jiggling obscenely as she notices you, \"<i>Oh, like hi there ", false);
                if (player.gender == 1) outputText("stud", false);
                else outputText("sexy", false);
                outputText("!  You haven't seen a confused human about calling itself a champion have you?</i>\"\n\nShe shakes her more-than-ample bosom from side to side as she licks her lips and offers, \"<i>If you do, be sure and bring them back here ok?  We've got their spot all ready for them, but that little prick Zetaz fucked up the pickup.  Tell you what – if you bring me the 'champion' I'll ", false);
                if (player.cocks.length > 0) outputText("give you the blowjob of a lifetime", false);
                else if (player.vaginas.length > 0) outputText("lick your honeypot 'til you soak my face", false);
                else outputText("give you a new addition and show you how to use it", false);
                outputText(".</i>\"\n\nThe succubus turns away from you and makes a show of tweaking her make-up, ignoring you for the moment.", false);
                addButton(0, "Fight", succubusCombatStart);
                addButton(1, "It's Me!", secretarialSuccubusInsult);
                addButton(2, "Leave", dungeonEnterRoom, DUNGEON_FACTORY_FOYER);
                return; // This prevents the masturbate and item menus showing
            }
            else {
                outputText("The busty succubus turns, her barely contained breasts jiggling obscenely as she notices you, \"<i>Oh, like hi there ", false);
                if (player.gender == 1) outputText("stud", false);
                else outputText("sexy", false);
                outputText("!  What's a cute little morsel like you doing by yourself out here?</i>\"", false);
                addButton(0, "Fight", succubusCombatStart);
                addButton(1, "Talk", succubusTalkOne);
                addButton(2, "Run", dungeonEnterRoom, DUNGEON_FACTORY_FOYER);
                return; // This prevents the masturbate and item menus showing
            }
        }
    }
    // Furnace Room
    if (game.dungeonLoc == DUNGEON_FACTORY_FURNACE_ROOM) {
        if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0) {
            outputText("<b><u>Furnace Room</u></b>\nThe air inside this room is hot enough to coat your " + player.skinTone + " " + player.skinDesc + " in a fine sheen of sweat.  The eastern side of the chamber is more machine than wall, a solid mass of iron piping covered in small metal blast-doors through which fuel is to be fed.  A small transparent plate is riveted into the wall, allowing you to see some kind of pink crystalline fuel being burned by purple-white fire.  The few visible controls and gauges don't seem to be linked into anything important, and the machinery looks far too durable to damage with what you have.  The only exit is a heavy iron door on the west wall.  ", true);
        }
        else {
            outputText("<b><u>Furnace Room</u></b>\nDespite the machinery being shut down, the air in this room is still hot enough to coat your " + player.skinTone + " " + player.skinDesc + " in a fine sheen of sweat.  The eastern side of the chamber is more machine than wall, a solid mass of iron piping covered in small metal blast-doors through which fuel is to be fed.  A small transparent plate is riveted into the wall, allowing you to see some the ashes of a previous fuel source.  The few visible controls and gauges don't seem to be linked into anything important, and the machinery looks far too durable to damage with what you have.  The only exit is a heavy iron door on the west wall.  ", true);
        }

        // If the players found D3, hide him entirely to avoid two-places-at-once syndrome.
        if (player.effects.findByType(StatusAffects.FactoryIncubusDefeated) >= 0 || flags[kFLAGS.D3_DISCOVERED] == 1) {
            addButton(5, "West", openFactoryDoor);
        }
        // Incubus is ALLLLIVE
        else {
            spriteSelect(30);
            if (player.effects.findByType(StatusAffects.IncubusBribed) >= 0) {
                outputText("\n\nThe incubus mechanic is here, thumbing through a hentai comic and laughing to himself at the absurdity of it.  That doesn't stop him from stroking his half-hard member the whole time...", false);
                addButton(1, "Fight", startIncubusFight);
                addButton(5, "West", openFactoryDoor);
            }
            else {
                outputText("\n\nA demonic mechanic lounges against the hot machinery, unperturbed by the high temperatures of the room.  He wears cut-off denim overalls, stained with grease in a few places.  They don't seem to be in good repair, and have a fair-sized hole at his groin, where a floppy foot-long member hangs free.  His skin is light purple and unblemished, as you would expect from a sexual demon.  He has a rugged handsome face and black hair tied back in a simple ponytail.  Two large curving horns protrude from his forehead, curving back along his skull and giving him a dangerous appearance.  A narrow goatee grows from his chin, about 3 inches long and braided skillfully.  He looks up and smiles, amused at your appearance.", false);
                addButton(0, "Fight", startIncubusFight);
                addButton(1, "Talk", talkToIncubus);
            }
        }
    }
    // Repair Closet
    if (game.dungeonLoc == DUNGEON_FACTORY_REPAIR_CLOSET) {
        outputText("<b><u>Repair Closet</u></b>\nAs you carefully slip inside the room, you note with some relief that it seems to be an empty storage closet. The room is tiny, barely 6' by 8' and almost entirely empty.  The one piece of furniture inside the closet is a simple wooden cabinet, placed against the far wall.  ", true);
        if (player.effects.findByType(StatusAffects.BuiltMilker) >= 0)
            outputText("The shelves are empty.  ", false);
        else {
            outputText("The shelves of the cabinet hold various pieces of pump machinery, probably used to repair complete machines further into the factory.  ", false);
            if (player.inte >= 40) {
                outputText("You realize there are enough pieces here to put together a breast-milking pump or a cock-milker.  ", false);
                if (player.keyItems.has("Cock Milker") >= 0)
                    outputText("\nYou already have a cock milker.\n", false);
                else {
                    addButton(3, "C. Milker", takeCockMilker);
                }
                if (player.keyItems.has("Breast Milker") >= 0)
                    outputText("\nYou already have a breast milker.\n", false);
                else {
                    addButton(2, "B. Milker", takeBreastMilker);
                }
            }
        }
        outputText("The only exit is back to the south.", false);
        addButton(6, "South", openFactoryDoor);
    }
    // Main Chamber
    if (game.dungeonLoc == DUNGEON_FACTORY_MAIN_CHAMBER) {
        // Dungeon still operational
        if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0) {
            outputText("<b><u>Main Chamber</u></b>\nThis cavernous chamber is filled with a cacophony of sexual moans.  Rows of harnesses are spaced evenly throughout this room, nearly all of them filled with delirious-looking humans.  Each is over-endowed with huge breasts and a penis of elephantine proportions.  The source of their delirium hangs down from the ceiling - groups of hoses that end with needles buried deep into the poor 'girls' flesh, pumping them full of demonic chemicals.  Constant sucking and slurping noises emanate from nipple and cock pumps as they keep the victims in a state of near-constant orgasm.  ", true);
            if (player.cor < 50) outputText("You wish you could free them, but it would take the better part of a day to get them all free.  It'd be better to find the control room and shut down the infernal machinery.  ", false);
            else outputText("You wish you had some machinery like this for yourself.  It looks so fun!  Still, you suppose you should find the control panel to shut this down and free these people.  ", false);
            outputText("There is a doorway to the east marked with an 'exit' sign above it.  Along the southern wall is a stairwell that leads up to some kind of foreman's office.  Perhaps the controls are in there?", false);
        }
        // Dungeon shut down.
        else {
            outputText("The chamber is significantly emptier since you've shut down this factory.  Roughly half the girls appear to have left.  The rest seem to be pre-occupied by fucking each other in a massive orgy.  A few enterprising ladies have found leather outfits and appear to be helping to manually administer the chemical cocktails to those engaged in rampant sexual exploits.  It seems some of them preferred a life of near-constant orgasm to their freedom.  There is a door to the east marked as 'EXIT', and a stairwell along the south wall that leads to an overseer's office.", true);
            outputText("\n\nOne of the leather-clad ladies steps over and offers, 'Would you like a dose?  You look like you need to relieve some tension...", false);
            addButton(2, "Tension", relieveTension);
        }
        addButton(1, "East", openFactoryDoor);
        addButton(6, "South(Up)", dungeonEnterRoom, DUNGEON_FACTORY_FOREMANS_OFFICE);
    }
    // Foreman's Office
    if (game.dungeonLoc == DUNGEON_FACTORY_FOREMANS_OFFICE) {
        outputText("<b><u>Foreman's Office</u></b>\nThis office provides an excellent view of the 'factory floor' through a glass wall along the north side.  Towards the south side of the room is a simple desk with an even simpler chair behind it.  The desk's surface is clear of any paperwork, and only has a small inkwell and quill on top of it.  There are a few statues of women and men posted at the corners of the room.  All are nude and appear to be trapped in mid-orgasm.  You wonder if they're statues or perhaps some kind of perverted petrified art.  The north has a glass door leading back to the factory.  There are two other doors, both made of very solid looking metal.  One is on the east wall and another is on the south, behind the desk.  The one behind the desk is marked 'Premium Storage' (though it appears to be locked).", true);
        if (player.effects.findByType(StatusAffects.FactoryOmnibusDefeated) < 0) {
            spriteSelect(16);
            outputText("\n\nA nearly nude demonic woman is standing behind the desk, appraising you.  She is gorgeous in the classical sense, with a curvy hourglass figure that radiates pure sexuality untamed by any desire for proper appearance.  Shiny black lip-gloss encapsulates her bubbly lips, while dark eyeshadow highlights her bright red eyes.  The closest thing she has to clothing is a narrow band of fabric that wraps around her significant chest, doing little to hide the pointed nubs of her erect nipples.  Her crotch is totally uncovered, revealing the hairless lips of her glistening womanhood.\n\n", false);
            outputText("She paces around the edge of the desk, licking her lips and speaking, \"<i>So you've made it all the way here have you, 'champion'?  Too bad you've wasted your time.  Have you figured it out yet?  Have you discovered why you were sent here with no weapons or blessed items?  Have you found out why there are more humans here than anywhere else in this realm?  I'll tell you why.  You weren't a champion.  You were a sacrificial cow, meant to be added to our herd.  You just got lucky enough to get free.</i>\"\n\n", false);
            outputText("A part of you wants to deny her, to scream that she is wrong.  But it makes too much sense to be a lie... and the evidence is right behind you, on the factory floor.  All those women must be the previous champions, kept alive and cumming for years in order to feed these insatiable demons.  The demoness watches your reaction with something approaching sexual bliss, as if the monstrous betrayal of it all is turning her on.\n\n", false);
            outputText("\"<i>Yes,</i>\" she coos, \"<i>you belong here.  The question is do you accept your fate, or do you fight it?</i>\"", false);
            addButton(0, "Fight", omnibusStartCombat);
            addButton(1, "Accept", omnibusAcceptOffer);
        }
        else {
            addButton(1, "East", dungeonEnterRoom, DUNGEON_FACTORY_PUMP_CONTROL);
            addButton(5, "North(Down)", dungeonEnterRoom, DUNGEON_FACTORY_MAIN_CHAMBER);
            addButton(6, "South", openPumpRoom);
            if (player.keyItems.has("Supervisor's Key") < 0) {
                addButton(2, "Desk", takeSupervisorsKey);
            }
        }
    }
    // Pump controll room...
    if (game.dungeonLoc == DUNGEON_FACTORY_PUMP_CONTROL) {
        // PUMP CONTROL ROOM
        outputText("<b><u>Pump Control Room</u></b>\n", true);
        if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0) {
            outputText("This room is little more than a closet in reality.  There is a simple set of mechanical controls on a finely crafted terminal against the far wall.  You spend a moment looking over them, and realize you have three options to deal with this place.\n\n", true);
            outputText("-You could close the storage vent valves and overload the fluid storage systems.  The storage tanks along the back portion of the building would rupture, releasing thousands of gallons of tainted fluids into the surrounding area, but the facility's systems would suffer catastrophic failures and shut down forever.\n", false);
            // (Consequences - lake goddess becomes tainted!)
            outputText("-You could perform a system shutdown and then smash the controls.  It'd let the girls go and keep the factory shut down in the short term.  However most of the equipment would be undamaged and the place could be re-opened without too much work on the demons' part.\n", false);
            // (Consequences - If Marcus is a demon he takes over running the factory forever.  If not, nothing bad happens)
            outputText("-You could leave the equipment to continue running.  After all, the girls downstairs did seem to be enjoying themselves...\n", false);
            // (Consequences - Marcus takes over if demonic choice taken, if not he shuts down the equipment & things continue as per #3).
            addButton(3, "Valves", factoryOverload);
            addButton(4, "Shutdown", factoryShutdown);
        }
        else {
            outputText("This room is little more than a closet in reality.  There is a simple set of mechanical controls on the a finely crafted terminal against the far wall.  The controls are now inoperable, due to the damage your actions have caused.", false);
        }
        addButton(5, "West", dungeonEnterRoom, DUNGEON_FACTORY_FOREMANS_OFFICE);
    }
    // Premium Products
    if (game.dungeonLoc == DUNGEON_FACTORY_STORE_ROOM) {
        outputText("<b><u>Premium Products</u></b>\nThis store room is filled with a few opened crates, meant to store the various substances in the factory.  It looks as if the current overseer has allowed supplies to run low, as there is not much to be gleaned from this meager stash.\n\n", true);
        addButton(0, "North", dungeonEnterRoom, DUNGEON_FACTORY_FOREMANS_OFFICE);
        if (player.effects.findByType(StatusAffects.TakenLactaid) >= 0) {
            if (player.effects.getValue1Of(StatusAffects.TakenLactaid) > 0) {
                outputText("There is a crate with " + num2Text(player.effects.getValue1Of(StatusAffects.TakenLactaid)) + " bottles of something called 'Lactaid' inside.\n\n", false);
                addButton(2, "Lactaid", storageTakeLactaid);
            }
        }
        else {
            outputText("There is a crate with five bottles of something called 'Lactaid' inside.\n\n", false);
            addButton(2, "Lactaid", storageTakeLactaid);
        }
        if (player.effects.findByType(StatusAffects.TakenGroPlus) >= 0) {
            if (player.effects.getValue1Of(StatusAffects.TakenGroPlus) > 0) {
                outputText("There is a crate with " + num2Text(player.effects.getValue1Of(StatusAffects.TakenGroPlus)) + " bottles of something called 'Gro+' inside.\n\n", false);
                addButton(3, "GroPlus", storageTakeGroPlus);
            }
        }
        else {
            outputText("There is a crate with five bottles of something called 'Gro+' inside.\n\n", false);
            addButton(3, "GroPlus", storageTakeGroPlus);
        }
    }
}
