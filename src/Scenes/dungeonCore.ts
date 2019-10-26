
export function get inDungeon(); : boolean; { return game.dungeonLoc != 0; }

function dungeonMenu(): void {
    /*	//Dungeon Choices!
        var choice1:* = 0;
        var text1:String = "";
        var choice2:* = 0;
        var text2:String = "";
        var choice3:* = 0;
        var text3:String = "";
        var choice4:* = 0;
        var text4:String = "";
        var choice5:* = 0;
        var text5:String = "";
        var choice6:* = 0;
        var text6:String = "";
        var choice7:* = 0;
        var text7:String = "";
        var choice8:* = 0;
        var text8:String = "";
        //Always have choices for items or masturbation.
        var itemMenu:Function = inventory.inventoryMenu;
        var masturbateMenu:Number = 10;
    */
    // Display Proper Buttons
    mainView.showMenuButton(MainView.MENU_APPEARANCE);
    mainView.showMenuButton(MainView.MENU_PERKS);
    mainView.hideMenuButton(MainView.MENU_DATA);

    // clear up/down arrows
    hideUpDown();
    // Level junk
    if (player.XP >= (player.level) * 100) {
        mainView.showMenuButton(MainView.MENU_LEVEL);
        mainView.statsView.showLevelUp();
    }
    menu();
    // Entry Room
    if (game.dungeonLoc == DUNGEON_FACTORY_FOYER) {
        outputText("<b><u>The Factory Foyer</u></b>\nThe door swings shut behind you with an ominous 'creeeeeaaaaaaak' followed by a loud 'SLAM'.  Glancing around, you find yourself in some kind of stylish foyer, complete with works of art and a receptionist's desk.  Looking closer at the paintings on the wall quickly reveals their tainted and demonic nature: One appears at first to be a painting of a beautiful smiling woman, except you notice dripping tentacles coiling around the hem of her dress.  Behind the receptionist's desk, the second painting is even less discreet, openly depicting a number of imps gang-raping a vaguely familiar-looking woman.  Luckily, whatever demon is employed as the receptionist is away at the moment.  Behind the desk on the northern wall stands a secure-looking iron door.  On the eastern wall is a simple wooden door, though the color of the wood itself is far darker and redder than any of the hard woods from your homeland.  Behind you to the south is the rusty iron entry door.", true);
        // 		choice1 = 11001;
        // 		text1 = "North";
        // 		choice2 = 11002;
        // 		text2 = "East";
        // 		choice7 = leaveFactory;
        // 		text7 = "South";
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
        // 		choice1 = 11004;
        // 		text1 = "North";
        // 		choice2 = 11003;
        // 		text2 = "East";
        // 		choice7 = 11000;
        // 		text7 = "South";
        // 		choice6 = 11005;
        // 		text6 = "West";
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
            // 			choice7 = 0;
            // 			text6 = "West";
            if (player.keyItems.has("Iron Key") < 0) {
                outputText("  It seems your opponent dropped a small iron key as she fled.", false);
                // 				choice3 = takeIronKey;
                // 				text3 = "Iron Key";
                addButton(2, "Iron Key", takeIronKey);
            }
            // 			choice6 = 11000;
            // 			text5 = "Coffee";
            // 			choice5 = drinkCoffee;
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
                // 				text1 = "Fight";
                // 				choice1 = succubusCombatStart;
                // 				text2 = "Go Demon";
                // 				choice2 = demonBadEnd;
                // 				text3 = "Hook Up";
                // 				choice3 = succubusBadEnd;
                // 				masturbateMenu = 0;
                // 				itemMenu = null;
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
                // 				text1 = "Fight";
                // 				choice1 = succubusCombatStart;
                // 				text2 = "It's Me!";
                // 				choice2 = secretarialSuccubusInsult;
                // 				text3 = "Leave";
                // 				choice3 = 11000;
                // 				masturbateMenu = 0;
                // 				itemMenu = null;
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
                // 				text1 = "Fight";
                // 				choice1 = succubusCombatStart;
                // 				text2 = "Talk";
                // 				choice2 = succubusTalkOne;
                // 				text3 = "Run";
                // 				choice3 = 11000;
                // 				masturbateMenu = 0;
                // 				itemMenu = null;
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
            // 			text6 = "West";
            // 			choice6 = 11001;
            addButton(5, "West", openFactoryDoor);
        }
        // Incubus is ALLLLIVE
        else {
            spriteSelect(30);
            if (player.effects.findByType(StatusAffects.IncubusBribed) >= 0) {
                outputText("\n\nThe incubus mechanic is here, thumbing through a hentai comic and laughing to himself at the absurdity of it.  That doesn't stop him from stroking his half-hard member the whole time...", false);
                // 				choice2 = startIncubusFight;
                // 				text2 = "Fight";
                // 				text6 = "West";
                // 				choice6 = 11001;
                addButton(1, "Fight", startIncubusFight);
                addButton(5, "West", openFactoryDoor);
            }
            else {
                outputText("\n\nA demonic mechanic lounges against the hot machinery, unperturbed by the high temperatures of the room.  He wears cut-off denim overalls, stained with grease in a few places.  They don't seem to be in good repair, and have a fair-sized hole at his groin, where a floppy foot-long member hangs free.  His skin is light purple and unblemished, as you would expect from a sexual demon.  He has a rugged handsome face and black hair tied back in a simple ponytail.  Two large curving horns protrude from his forehead, curving back along his skull and giving him a dangerous appearance.  A narrow goatee grows from his chin, about 3 inches long and braided skillfully.  He looks up and smiles, amused at your appearance.", false);
                // 				choice1 = startIncubusFight;
                // 				text1 = "Fight";
                // 				text2 = "Talk";
                // 				choice2 = talkToIncubus;
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
                    // 					choice4 = takeCockMilker;
                    // 					text4 = "C. Milker";
                    addButton(3, "C. Milker", takeCockMilker);
                }
                if (player.keyItems.has("Breast Milker") >= 0)
                    outputText("\nYou already have a breast milker.\n", false);
                else {
                    // 					choice3 = takeBreastMilker;
                    // 					text3 = "B. Milker";
                    addButton(2, "B. Milker", takeBreastMilker);
                }
            }
        }
        // 		text7 = "South";
        // 		choice7 = 11001;
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
            // 			choice3 = relieveTension;
            // 			text3 = "Tension";
            addButton(2, "Tension", relieveTension);
        }
        // 		text2 = "East";
        // 		choice2 = 11001;
        // 		text7 = "South(Up)";
        // 		choice7 = 11006;
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
            // 			choice1 = omnibusStartCombat;
            // 			text1 = "Fight";
            // 			choice2 = omnibusAcceptOffer;
            // 			text2 = "Accept";
            addButton(0, "Fight", omnibusStartCombat);
            addButton(1, "Accept", omnibusAcceptOffer);
        }
        else {
            // 			choice1 = 11005;
            // 			text1 = "North(Down)";
            // 			choice2 = 11007;
            // 			text2 = "East";
            // 			choice7 = 11008;
            // 			text7 = "South";
            addButton(1, "East", dungeonEnterRoom, DUNGEON_FACTORY_PUMP_CONTROL);
            addButton(5, "North(Down)", dungeonEnterRoom, DUNGEON_FACTORY_MAIN_CHAMBER);
            addButton(6, "South", openPumpRoom);
            if (player.keyItems.has("Supervisor's Key") < 0) {
                // 				choice3 = takeSupervisorsKey;
                // 				text3 = "Desk";
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
            // 			text4 = "Valves";
            // 			choice4 = factoryOverload;
            // 			text5 = "Shutdown";
            // 			choice5 = factoryShutdown;
            addButton(3, "Valves", factoryOverload);
            addButton(4, "Shutdown", factoryShutdown);
        }
        else {
            outputText("This room is little more than a closet in reality.  There is a simple set of mechanical controls on the a finely crafted terminal against the far wall.  The controls are now inoperable, due to the damage your actions have caused.", false);
        }
        // 		choice6 = 11006;
        // 		text6 = "West";
        addButton(5, "West", dungeonEnterRoom, DUNGEON_FACTORY_FOREMANS_OFFICE);
    }
    // Premium Products
    if (game.dungeonLoc == DUNGEON_FACTORY_STORE_ROOM) {
        outputText("<b><u>Premium Products</u></b>\nThis store room is filled with a few opened crates, meant to store the various substances in the factory.  It looks as if the current overseer has allowed supplies to run low, as there is not much to be gleaned from this meager stash.\n\n", true);
        // 		text1 = "North";
        // 		choice1 = 11006;
        addButton(0, "North", dungeonEnterRoom, DUNGEON_FACTORY_FOREMANS_OFFICE);
        if (player.effects.findByType(StatusAffects.TakenLactaid) >= 0) {
            if (player.effects.getValue1Of(StatusAffects.TakenLactaid) > 0) {
                outputText("There is a crate with " + num2Text(player.effects.getValue1Of(StatusAffects.TakenLactaid)) + " bottles of something called 'Lactaid' inside.\n\n", false);
                // 				text3 = "Lactaid";
                // 				choice3 = storageTakeLactaid;
                addButton(2, "Lactaid", storageTakeLactaid);
            }
        }
        else {
            outputText("There is a crate with five bottles of something called 'Lactaid' inside.\n\n", false);
            // 			text3 = "Lactaid";
            // 			choice3 = storageTakeLactaid;
            addButton(2, "Lactaid", storageTakeLactaid);
        }
        if (player.effects.findByType(StatusAffects.TakenGroPlus) >= 0) {
            if (player.effects.getValue1Of(StatusAffects.TakenGroPlus) > 0) {
                outputText("There is a crate with " + num2Text(player.effects.getValue1Of(StatusAffects.TakenGroPlus)) + " bottles of something called 'Gro+' inside.\n\n", false);
                // 				text4 = "GroPlus";
                // 				choice4 = storageTakeGroPlus;
                addButton(3, "GroPlus", storageTakeGroPlus);
            }
        }
        else {
            outputText("There is a crate with five bottles of something called 'Gro+' inside.\n\n", false);
            // 			text4 = "GroPlus";
            // 			choice4 = storageTakeGroPlus;
            addButton(3, "GroPlus", storageTakeGroPlus);
        }
    }
    // DUNGEON 2 START: ROOM 10
    if (game.dungeonLoc == DUNGEON_CAVE_ENTRANCE) {
        outputText("<b><u>The Cave Entrance</u></b>\n", true);
        outputText("The entrance to this cave is far bigger than the cave itself.  It looks to be a totally natural formation.  Outside, to the south, is a veritable jungle of plant-life.  There are massive trees, vines, and ferns everywhere.  The cave grows narrower the further north you go, until it's little more than a claustrophobic tunnel burrowing deep into the earth.", false);

        // 		choice1 = 11067;
        // 		text1 = "North";
        // 		choice6 = leaveZetazsLair;
        // 		text6 = "Leave";
        addButton(0, "North", dungeonEnterRoom, DUNGEON_CAVE_TUNNEL);
        addButton(5, "Leave", leaveZetazsLair);
        // Zetaz gone?  Alchemist shits!
        if (flags[kFLAGS.DEFEATED_ZETAZ] > 0) {
            if (flags[kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT] == 0) {
                outputText("\n\nThere's a demon lazing around outside the cave entrance.  Judging by his size and apparent gender, he must be an incubus.  You try to stay hidden for now, but all he's doing is throwing darts at a dartboard he's set up across the way from himself.  What kind of demon sits around playing darts?");
                // 				text1 = "Investigate";
                // 				choice1 = theSeanShopOffer;
                addButton(0, "Investigate", theSeanShopOffer);
            }
            else if (flags[kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT] > 0) {
                outputText("\n\nThe incubus known as Sean has set up a small stall around the cave entrance, and is busy tending to his shelves and wares.  He's dressed in an incredibly modest, three-piece suit, and nods to you as you approach, \"<i>Let me know if you want to buy anything.  I haven't done much with the cave, so feel free to poke around if you missed anything on your first pass.  I barely use the first room.</i>\"");
                // 				text3 = "Shop";
                // 				choice3 = incubusShop;
                addButton(2, "Shop", incubusShop);
            }
        }
    }
    // D2: Tunnel
    if (game.dungeonLoc == DUNGEON_CAVE_TUNNEL) {
        outputText("<b><u>Cave Tunnel</u></b>\n", true);
        outputText("This cave tunnel slants downwards to the north, and upwards to the south.  You can see sunlight and feel a fresh breeze from the latter direction, though the walls and air around you are damp with moisture.  You realize that the floor of this cave is fairly smooth and even, as if some attempt had been made to level it out.  You can see a bricked up wall along the north end of the tunnel.  It has a crudely fashioned wooden door in the center of it.", false);
        // 		text7 = "South";
        // 		choice7 = 11066;
        // 		text1 = "North";
        // 		choice1 = 11068;
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
            // 			text1 = "FIGHT!";
            // 			choice1 = impHordeStartCombat;
            addButton(0, "FIGHT!", impHordeStartCombat);
        }
        else {
            // 			text1 = "North";
            // 			choice1 = enterZetazsRoomFromTheSouth;
            // 			text2 = "East";
            // 			choice2 = 11070;
            // 			text6 = "West";
            // 			choice6 = 11069;
            // 			text7 = "South";
            // 			choice7 = 11067;
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
            // 			text2 = "East";
            // 			choice2 = 11068;
            // 			text3 = "Get Sword";
            // 			choice3 = getSwordAndGetTrapped;
            addButton(2, "Get Sword", getSwordAndGetTrapped);
            if (player.canFly()) {
                // 				text4 = "Fly to Sword";
                // 				choice4 = flyToSwordAndGetTrapped;
                addButton(3, "Fly to Sword", flyToSwordAndGetTrapped);
            }
        }
        // Fungus creature dealt with!
        else {
            // 			text2 = "East";
            // 			choice2 = 11068;
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
                // 				text3 = "Free";
                // 				choice3 = freeValazLooseCoochie;
                addButton(2, "Free", freeValazLooseCoochie);
                if (player.gender > 0) {
                    // 					text4 = "Use";
                    // 					choice4 = useVala;
                    addButton(3, "Use", useVala);
                }
                if (player.lust >= 33 && shouldraFollower.followerShouldra()) {
                    // 					text5 = "ShouldraVala";
                    // 					choice5 = shouldraFollower.shouldraMeetsCorruptVala;
                    addButton(4, "ShouldraVala", shouldraFollower.shouldraMeetsCorruptVala);
                }
            }
            // Zetaz defeated
            else {
                outputText("In the far corner, there is a small woman, her back to you, hanging limply by manacles that keep her suspended in a half-kneel. Rich purple hair hangs in long, clumped strands that sparkle occasionally with a pink glitter. Above her, there is a tarnished bronze nameplate that you think reads 'Vala,' but it's impossible to tell for sure under all the imp graffiti. She does not seem to be conscious.\n\n", false);
                // Option to investigate her
                // leftValaAlone()
                // 				text3 = "Faerie";
                // 				choice3 = leftValaAlone;
                addButton(2, "Faerie", leftValaAlone);
            }
        }
        // Not here
        else outputText("In the far corner, there are a set of empty manacles, originally set up to contain Vala, who you've long since freed.", false);
        // Movements
        // 		text1 = "North";
        // 		choice1 = 11071;
        // 		text6 = "West";
        // 		choice6 = 11068;
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
            // 			text3 = "B.Straps";
            // 			choice3 = takeBondageStraps; //2638;
            addButton(2, "B.Straps", takeBondageStraps);
        }
        // (Item: sexy bondage straps/a set of sexy bondage straps/B.Straps? - Seduce ability?)
        // (Possible effect: +lust every round in combat if afflicted with Ceraph's bondage!)
        // 		text6 = "West";
        // 		choice6 = 11072;
        // 		text7 = "South";
        // 		choice7 = 11070;
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
            // 			text7 = "South";
            // 			choice7 = 11068;
            // 			text2 = "East";
            // 			choice2 = 11071;
            addButton(1, "East", dungeonEnterRoom, DUNGEON_CAVE_SECRET_TUNNEL);
            addButton(6, "South", dungeonEnterRoom, DUNGEON_CAVE_GATHERING_HALL);
        }
    }
    // HELIA DUNGEONNNNNOOOO 1
    if (game.dungeonLoc == DUNGEON_HEL_GUARD_HALL) {
        // ROOM 1: Guard Hall
        outputText("<b><u>Guard Hall</u></b>\n", true);
        // Room Description:
        outputText("You stand in what might have been a guard room once upon a time.  Now it is a ruined, ransacked mess.  It seems not to have been used in years, and the table, chairs, and spears lined up against the wall have all rotted away to almost nothing.");
        // [If Armor has not been taken/fought with:
        if (flags[kFLAGS.WON_GOO_ARMOR_FIGHT] + flags[kFLAGS.LOST_GOO_ARMOR_FIGHT] == 0) {
            outputText("  However, a suit of half-plate armor has been left up against the eastern wall, hanging loosely on a rack; it seems to be in usable shape.");
            // 			text4 = "Armor";
            // 			choice4 = takeGooArmor;
            addButton(3, "Armor", takeGooArmor);
        }
        outputText("  You see a pair of heavy iron doors leading northward, though they seem so rusty and heavy that opening them is sure to alert anyone nearby, and a small trapdoor leading down.");
        // (Display Options: [North Door] [Trapdoor] [Armor])
        // 		text1 = "North Door";
        // 		choice1 = 11086;
        // 		text3 = "Trapdoor";
        // 		choice3 = 11085;
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
            // 			text4 = "God'sMead";
            // 			choice4 = takeGodsMead;
            addButton(3, "God'sMead", takeGodsMead);
        }
        // Display Options: [GodsMead] [Climb Up]
        // 		text3 = "Climb Up";
        // 		choice3 = 11084;
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
                // 				var valeria:Function = null;
                // 				if (player.armorName == "goo armor") valeria = talkToValeria;
                // 				text6 = "South Door";
                // 				choice6 = 11084;
                // 				text4 = "Talk";
                // 				choice4 = talkToKiri;
                // 				text1 = "Sex";
                // 				choice1 = kiriSexIntro;
                // 				text5 = "Valeria";
                // 				choice5 = valeria;
                // 				text3 = "Go Upstairs";
                // 				choice3 = 11088;
                // 				text8 = "Go Downstairs";
                // 				choice8 = 11087;
                addButton(0, "Sex", kiriSexIntro);
                addButton(3, "Talk", talkToKiri);
                if (player.armorName == "goo armor") addButton(4, "Valeria", talkToValeria);
            }
            else {
                outputText("There's a pile of drugged, unconscious harpies you've already defeated on the floor.  Kiri appears to have left.");
                // 				text6 = "South Door";
                // 				choice6 = 11084;
                // 				text3 = "Go Upstairs";
                // 				choice3 = 11088;
                // 				text8 = "Go Downstairs";
                // 				choice8 = 11087;
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
                // 				text4 = "Prisoner";
                addButton(3, "Prisoner", helDungeonPrisonerTalk);
            }
            else {
                outputText("on which Hakon lies");
                // 				text4 = "Hakon";
                addButton(3, "Hakon", helDungeonPrisonerTalk);
            }
            outputText(".");
            if (player.keyItems.has("Harpy Key A") >= 0 && player.keyItems.has("Harpy Key B") >= 0) outputText("\n\n<b>You have the keys to release the prisoner, but you may want to make sure you have everything from this place that you want before you make your escape.  You doubt you'll be able to return in the future.</b>");
            // (Display Options: [Go Upstairs](Back to Stairwell & Kiri) [Prisoner] [Torture Gear]
            // 			text3 = "Upstairs";
            // 			choice3 = 11086;

            // 			choice4 = helDungeonPrisonerTalk;
            // 			text5 = "Torture Gear";
            // 			choice5 = tortureGear;
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
            // 			text8 = "Downstairs";
            // 			choice8 = 11086;
            // 			text3 = "Upstairs";
            // 			choice3 = 11089;
            // 			text4 = "Phoenixes";
            // 			choice4 = checkOutDemBirdBitches;
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
                // 				text5 = "Harpy Queen";
                // 				choice5 = harpyQueenAdvantage;
                outputText("  The Harpy Queen slumps in her throne, insensate.");
                addButton(3, "Helia", HeliaThroneRoom);
                addButton(4, "Harpy Queen", harpyQueenAdvantage);
            }
            else if (flags[kFLAGS.TOOK_QUEEN_STAFF] == 0) addButton(4, "Take Staff", takeQueensStaff);
            // (Display Options: [Helia] [Harpy Queen] [Go Downstairs])
            // 			text8 = "Downstairs";
            // 			choice8 = 11088;
            addButton(7, "Downstairs", dungeonEnterRoom, DUNGEON_HEL_MEZZANINE);
            // 			if (flags[kFLAGS.HARPY_QUEEN_EXECUTED] == 0) {
            // 				text4 = "Helia";
            // 				choice4 = HeliaThroneRoom;
            // 				addButton(3, "Helia", HeliaThroneRoom);
            // 			}
            // 			if(flags[kFLAGS.HARPY_QUEEN_EXECUTED] == 1 && flags[kFLAGS.TOOK_QUEEN_STAFF] == 0) {
            // 				text5 = "Take Staff";
            // 				choice5 = takeQueensStaff;
            // 				addButton(4, "Take Staff", takeQueensStaff);
            // 			}
        }
    }
    if (game.dungeonLoc == DUNGEON_WITCH_ENTRANCE_GATEWAY) {
        clearOutput();
        outputText("<b><u>Strange Gateway in the Sands</u></b>\n");
        if (flags[kFLAGS.SANURA_DISABLED] > 0) {
            outputText("Just ahead, in one of the larger dunes, is a square stone doorway, built into the side of a large, sparkling mountain of sand.  You never would have noticed it if the sun hadn't been at the perfect angle to trace a rectangular shadow down the side of the incline.  As you approach, you notice a familiar obsidian orb embedded into the side of it.  It's obviously the mechanism to open it.");
            // 			text1 = "North";
            // 			choice1 = openZeDoorToParadize;
            // 			text5 = "Leave";
            // 			choice5 = leaveBoobsDungeon;
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
            // 			text3 = "Riddle Game";
            // 			choice3 = riddleGameGo;
            // 			text4 = "Uh, FIGHT!";
            // 			choice4 = fuckItAttack;
            // 			text5 = "Leave";
            // 			choice5 = leaveBoobsDungeon;
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
            // 			text3 = "Riddle Game";
            // 			choice3 = riddleGameGo;
            addButton(2, "Riddle Game", riddleGameGo);
            if (flags[kFLAGS.BEATEN_SANURA_COUNT] > 0) {
                // 				text1 = "North";
                // 				choice1 = openZeDoorToParadize;
                // 				text4 = "Fuck";
                // 				choice4 = fuckDatSphinx;
                addButton(0, "North", openZeDoorToParadize);
                addButton(3, "Fuck", fuckDatSphinx);
            }
            // 			text5 = "Leave";
            // 			choice5 = leaveBoobsDungeon;
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
            // 			text1 = "North";
            // 			choice1 = 11147;
            addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_SACRIFICIAL_ALTAR);
        }
        // 		text7 = "South";
        // 		choice7 = 11133;
        // 		text2 = "East";
        // 		choice2 = 11141;
        // 		text6 = "West";
        // 		choice6 = 11135;
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_MAIN);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_ENTRANCE_GATEWAY);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_WEST_WARRENS_MAIN) {
        clearOutput();
        outputText("<b><u>West Warrens Main Hall</u></b>\n");
        outputText("The supernatural illumination so prevalent to the east is present here as well, though in smaller quantity and vastly diminished brightness.  Swirls of bluish-white hue slide along the ceiling in slow, measured motions, a stark contrast to the jubilant dancing of the preceding cavern.  The ceiling is almost twelve feet high in places, with the sides of the east-west passage dipping down the lowest.  The floor is sandstone here, as you would expect in a desert cave, though it is liberally obfuscated with an array of woven rugs.  Sand Witches march by on errands, only pausing to give you disinterested glances.  Most of them bear the signs of pregnancy or have young girls in tow.  Whatever the case, there doesn't seem to be any fight in these women.  Along the north and south walls are small, door-sized openings, draped with heavy curtains that easily muffle any noise.  To the west, the tunnel bores on unimpeded.  However, to the east the cave opens up into a much, much larger chamber.");
        // 		text1 = "North";
        // 		choice1 = 11136;
        // 		text7 = "South";
        // 		choice7 = 11137;
        // 		text2 = "East";
        // 		choice2 = 11134;
        // 		text6 = "West";
        // 		choice6 = 11138;
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_CHILDRENS_PLAYROOM);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_CAVERNOUS_COMMONS);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_WEST);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_PREGNANT_LUST_ROOM);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_CHILDRENS_PLAYROOM) {
        clearOutput();
        outputText("<b><u>West Warrens Eastern Portion North Side (Children's Play Room)</u></b>\n");
        outputText("Behind the thick curtain is the last thing you would expect to see.  There's nearly a dozen children and three busty, pregnant sand witches watching them.  Toys have been scattered everywhere by the young blonde children.  Their wardens were busy knitting when you intruded, but they glare at you balefully and make shooing gestures.  Unless you had planned to rob children of their toys and beat up pregnant women, there's nothing to be had here.");
        // 		text7 = "South";
        // 		choice7 = 11135;
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_PREGNANT_LUST_ROOM) {
        clearOutput();
        outputText("<b><u>West Warrens Eastern Portion South Side (Lust Room)</u></b>\n");
        outputText("This room is surprisingly large - big enough to hold the " + num2Text(rand(6) + 5) + " heavily pregnant women inside plus perhaps a dozen more.  Like the outer tunnel, this room is lit by magic, though its contents are equally mundane, if a great deal more... interesting.  There's female sex-toys of every variety on almost every surface.  They sit in piles on the floor, they hang from the walls, and there are even some mounted on the wall, to be fucked in place.  Many such toys have multiple shafts and come in shapes from standard to canine to obscenely equine.  All of the witches are presently engaged in coitus with each other or their 'marital aids', but once you enter, they glance at you with hungry, lust-filled eyes.");
        if (silly()) outputText("  Clearly, if you wanted to, you could put some extra meat in a sand witch.");
        // 		text1 = "North";
        // 		choice1 = 11135;
        addButton(1, "North", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
        if (player.cocks.length > 0 && player.lust >= 33) {
            // 			text3 = "FuckWitches";
            // 			choice3 = knockUpSomeDoubleStuffedSandWitches;
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
                addButton(0, "Next", forest.essrayle.essyWitchVictory);
                flags[kFLAGS.ESSRAYLE_ESCAPED_DUNGEON] = 1;
                return;
            }
            outputText("\n\nQuite an unusual sight awaits you in this chamber.  Sitting in an oversized pot is what looks to be the overly busty, plant girl you encountered earlier, Essrayle.  She's changed quite a bit since you last saw her, however.  While her inhumanly smooth, elfin face seems to be unchanged, the rest of her verdant body seems to have been warped into a hyper-sexual parody of a fertility idol, with features that echo the nomadic sand witch tribe.");
            // 			text3 = "Essrayle";
            // 			choice3 = forest.essrayle.approachTrappedEssy;
            addButton(2, "Essrayle", forest.essrayle.approachTrappedEssy);
        }
        // 		text1 = "North";
        // 		choice1 = 11139;
        // 		text7 = "South";
        // 		choice7 = 11140;
        // 		text2 = "East";
        // 		choice2 = 11135;
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_NURSERY);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_MAIN);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_PHARMACY);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_NURSERY) {
        clearOutput();
        outputText("<b><u>West Warrens Western Portion North Side (Nursery)</u></b>\n");
        outputText("As soon as you clear the curtain, you realize there's nothing of interest to you here.  The room is lit with rose pink globes, and the furniture in the room is filled with sleeping mothers, nursing infants, or older children taking naps.  The room is packed with bodies, and while it smells strongly of femininity, there's nothing worth looking into present here.");
        // 		text7 = "South";
        // 		choice7 = 11138;
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_WEST);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_PHARMACY) {
        clearOutput();
        outputText("<b><u>West Warrens Western Portion South Side (Pharmacy)</u></b>\n");
        outputText("This room is so tiny it can barely get away with being called that.  If anything, it's more of a small, cozy nook.  There isn't anyone else here, though the room is illuminated by the same omnipresent magics found elsewhere in this little cave of wonders.  Standing silent vigil on the southern wall, a large chest looms over you, stretching most of the way to the ceiling.  It is completely, almost impossibly neat, with every drawer fully and completely closed.  Spurred on by this strangeness, you pop a few of them open.  One drawer has pink pills, another brown.  Searching drawer by drawer until you discover that every single compartment houses the same dual medicines.  You glance about the room and spy a faded parchment on the wall.  It reads \"<i>Tnangerp rof knip, nerrab rof nworb.</i>\"  There is an opening in the wall to the north.");
        if (flags[kFLAGS.SANDWITCH_THRONE_UNLOCKED] == 0) {
            outputText("\n\nThere is also a lever on the floor.  Looking closely at it, it appears that it connects with machinery that leads to the east...");
            // 			text2 = "Pull Lever";
            // 			choice2 = pullLever;
            addButton(1, "Pull Lever", pullLever);
        }
        // 		text3 = "Brown Pill";
        // 		choice3 = takeBarrenPills;
        // 		text4 = "Pink Pill";
        // 		choice4 = takeFertilePills;
        // 		text1 = "North";
        // 		choice1 = 11138;
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_WEST_WARRENS_WEST);
        addButton(2, "Brown Pill", takeBarrenPills);
        addButton(3, "Pink Pill", takeFertilePills);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_EAST_WARRENS_MAIN) {
        clearOutput();
        outputText("<b><u>Eastern Warrens Main Hall (Western Portion)</u></b>\n");
        outputText("This smooth, sandstone tunnel proceeds in a perfectly straight line from east to west, as if aligned to some titanic, invisible compass buried below the floor.  Flickering white plumes of illumination undulate through the air along the arched ceiling, trailing streamers of pearl incandescence that light the entire chamber with ghostly brightness.  You are at the entrance to the eastern warrens - the commons are still clearly visible to the west, and the pathway to the east goes on a-ways.  Hand woven tapestries adorn the walls, telling the history of this enclave in pictographic form, from its inception to present day.  Further east, you can see a few empty places, ready to be covered with more cloth, once the next chapter of history is ready to be told.  To the north, there is a small opening in the wall, blocked off by plain white curtains.");
        // 		text1 = "North";
        // 		choice1 = 11142;
        // text7 = "South";
        // choice7 = 11137;
        // 		text2 = "East";
        // 		choice2 = 11144;
        // 		text6 = "West";
        // 		choice6 = 11134;
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_SLEEPING_CHAMBER);
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_EAST);
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_CAVERNOUS_COMMONS);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_SLEEPING_CHAMBER) {
        clearOutput();
        outputText("<b><u>Eastern Warrens West Portion North Side (Sleeping Chamber)</u></b>\n");
        outputText("Inside this expansive but cosy chamber are a few dozen beds, arranged in neat patterns marred only by a few cots that dare to be positioned adjacent to one another.  Clearly this is the tribe's primary sleeping area.  The floor is obscured by heavy, hand-woven rugs that ruffle oh so softly against your [feet].  Instead of the usual ghostly lights you've grown to expect, the interior of this dwelling is lit by glass-paneled constructs resembling lanterns.  There is no fuel or wick of course, only flicking phantasmal illumination trapped as if it were a flame.  Shutters allow the lanterns to be dimmed, but as you are alone in here for now, there's no reason to make it harder to see.  There is a door to the east and a curtained off opening to the south.");
        // 		text2 = "East";
        // 		choice2 = 11143;
        // 		text7 = "South";
        // 		choice7 = 11141;
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
            // 			text3 = "Bath Time";
            // 			choice3 = milkBathsAhoy;
            addButton(2, "Bath Time", milkBathsAhoy);
        }
        // 		text6 = "West";
        // 		choice6 = 11142;
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_SLEEPING_CHAMBER);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_EAST_WARRENS_EAST) {
        clearOutput();
        outputText("<b><u>Eastern Warrens Main Hall (Eastern Portion)</u></b>\n");
        outputText("Coming to an end here, the eastern warrens' main hall ends in little more than a bare, flat stone wall.  The area is well illuminated by the familiar magical lights, giving you a good view of the historical tapestries and blank spaces yet to be filled in.  You can't help but wonder if the Witches will simply stop recording their history once this area is full, or if they will expand in order to give themselves more room.  Looking over the events depicted here, it's clear that this enclave is one of the oldest, roughly two decades old.  There are pictures of a blond haired woman in fluttering, golden robes leaving a town of demons behind and journeying towards the desert.  Could that be how the sand witches began?  You shake your head and look over the rest of the room.  There's a curtained off doorway to the south, and of course, the tunnel leads back to the west.");
        // text1 = "North";
        // choice1 = 11136;
        // 		text7 = "South";
        // 		choice7 = 11145;
        // text2 = "East";
        // choice2 = 11142;
        // 		text6 = "West";
        // 		choice6 = 11141;
        addButton(5, "West", dungeonEnterRoom, DUNGEON_WITCH_EAST_WARRENS_MAIN);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_CUM_WITCH_BEDROOM);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_CUM_WITCH_BEDROOM) {
        clearOutput();
        outputText("<b><u>Eastern Warrens East Portion South Side (Cum Witch's Bedroom)</u></b>\n");
        outputText("As soon as you brush back the curtain, you're assaulted by a pungent, salty smell.  It almost reminds you of tepid ocean water... or cum.  Regardless, you force your way in and take a look around.  This area has all the furnishings of a small domicile and comes complete with a solid oak bed and mattress.  The mattress and sheets seem to be cared for with immaculate precision, perhaps magically aided.  There is a simple dresser here, and though it looks to have been fashioned by crude tools, the wood looks sturdy and serviceable.  All of the drawers are closed, of course.  A few books sit on a nearby table, but it's obvious they're written in a language beyond your comprehension.  Whoever wrote them either did so in a different tongue or a magical language that would take years to decipher.  A thick curtain walls this chamber off from the eastern warrens' main hall, to the north.  To the west, there is a thinner, gauzy sheet hanging from an opening in the rock - likely leading to a similar room.");
        // 		text1 = "North";
        // 		choice1 = 11144;
        // 		text6 = "West";
        // 		choice6 = 11146;
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
                // 				text3 = "Blessing";
                // 				choice3 = friendlyCumWitchBlessing;
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
                    // 					text3 = "Sex";
                    // 					choice3 = cumWitchDefeated;
                    addButton(2, "Sex", cumWitchDefeated);
                }
            }
        }
        // 		text2 = "East";
        // 		choice2 = 11145;
        addButton(1, "East", dungeonEnterRoom, DUNGEON_WITCH_CUM_WITCH_BEDROOM);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_SACRIFICIAL_ALTAR) {
        clearOutput();
        outputText("<b><u>Sacrificial Altar</u></b>\n");
        outputText("This chamber clearly holds some kind of important significance to the witch coven.  The floor and walls are covered in shining white, reflective tiles, and a large number of carved jugs ring the outer edge of the room.  The entire place smells faintly of milk.  Sniffing, you close in on the source of the aroma.  It's emanating from what looks like a golden well, positioned dead-center before you.  The various containers also smell faintly of the alabaster treat, and oddly, you can't catch even a single whiff of spoilage; it all smells fresh.  There must be some magic at work.  Peeping over the edge of the well, you can barely make out what seems like a sea of milk stored below: white-capped ivory waves sloshing around in a chamber so large you can't see the walls of it.  It must be preserved through magic.\n\nThere is a doorway to the south and one on the north wall.");
        // 		text1 = "North";
        // 		choice1 = 11148;
        // 		text7 = "South";
        // 		choice7 = 11134;
        addButton(0, "North", dungeonEnterRoom, DUNGEON_WITCH_THRONE_ROOM);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_CAVERNOUS_COMMONS);
    }
    if (game.dungeonLoc == DUNGEON_WITCH_THRONE_ROOM) {
        clearOutput();
        outputText("<b><u>Sand Mother's Throne</u></b>\n");
        outputText("This chamber is lit by swirling vortexes of magical colors, each hue dancing around another in coordinated motions.  The walls are made of hewn sandstone inlaid with ivory engravings that appear to depict what must be flowing milk.  Ahead there is a huge, white throne, also made from ivory.  It is a magnificent piece of craftsmanship.  Clearly, you have found the leader's throne room.  There is a robed figure atop it.");
        // 		text3 = "Approach";
        // 		choice3 = sandMotherStuffGOA;
        // 		text7 = "South";
        // 		choice7 = 11147;
        addButton(2, "Approach", sandMotherStuffGOA);
        addButton(6, "South", dungeonEnterRoom, DUNGEON_WITCH_SACRIFICIAL_ALTAR);
    }
    addButton(8, "Items", inventory.inventoryMenu);
    addButton(9, "Masturbate", masturbation.masturbateMenu);
    // Display menu
    // 	choices(text1,choice1,text2,choice2,text3,choice3,text4,choice4,text5,choice5,text6,choice6,text7,choice7,text8,choice8,"Items",itemMenu,"Masturbate",masturbateMenu);
}
