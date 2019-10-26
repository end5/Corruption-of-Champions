/* ITEMZZZZZ FUNCTIONS GO HERE */
export function incubiDraft(tainted: boolean, player: Player): void {
    player.slimeFeed();
    let temp2: number = 0;
    let temp3: number = 0;
    let rando: number = rand(100);
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        rando += 10;
    outputText("The draft is slick and sticky, ", true);
    if (player.cor <= 33)
        outputText("just swallowing it makes you feel unclean.", false);
    if (player.cor > 33 && player.cor <= 66)
        outputText("reminding you of something you just can't place.", false);
    if (player.cor > 66)
        outputText("deliciously sinful in all the right ways.", false);
    if (player.cor >= 90)
        outputText("  You're sure it must be distilled from the cum of an incubus.", false);
    // Lowlevel changes
    if (rando < 50) {
        if (player.cocks.length == 1) {
            if (player.cocks[0].cockType != CockTypesEnum.DEMON)
                outputText("\n\nYour " + cockDescript(game.player, 0) + " becomes shockingly hard.  It turns a shiny inhuman purple and spasms, dribbling hot demon-like cum as it begins to grow.", false);
            else
                outputText("\n\nYour " + cockDescript(game.player, 0) + " becomes shockingly hard.  It dribbles hot demon-like cum as it begins to grow.", false);
            if (rand(4) == 0)
                temp = player.increaseCock(0, 3);
            else
                temp = player.increaseCock(0, 1);
            dynStats("int", 1, "lib", 2, "sen", 1, "lust", 5 + temp * 3, "cor", tainted ? 1 : 0);
            if (temp < .5)
                outputText("  It stops almost as soon as it starts, growing only a tiny bit longer.", false);
            if (temp >= .5 && temp < 1)
                outputText("  It grows slowly, stopping after roughly half an inch of growth.", false);
            if (temp >= 1 && temp <= 2)
                outputText("  The sensation is incredible as more than an inch of lengthened dick-flesh grows in.", false);
            if (temp > 2)
                outputText("  You smile and idly stroke your lengthening " + cockDescript(game.player, 0) + " as a few more inches sprout.", false);
            if (tainted)
                dynStats("int", 1, "lib", 2, "sen", 1, "lus", 5 + temp * 3, "cor", 1);
            else
                dynStats("int", 1, "lib", 2, "sen", 1, "lus", 5 + temp * 3);
            if (player.cocks[0].cockType != CockTypesEnum.DEMON)
                outputText("  With the transformation complete, your " + cockDescript(game.player, 0) + " returns to its normal coloration.", false);
            else
                outputText("  With the transformation complete, your " + cockDescript(game.player, 0) + " throbs in an almost happy way as it goes flaccid once more.", false);
        }
        if (player.cocks.length > 1) {
            temp = player.cocks.length;
            temp2 = 0;
            // Find shortest cock
            while (temp > 0) {
                temp--;
                if (player.cocks[temp].cockLength <= player.cocks[temp2].cockLength) {
                    temp2 = temp;
                }
            }
            if (int(Math.random() * 4) == 0)
                temp3 = player.increaseCock(temp2, 3);
            else
                temp3 = player.increaseCock(temp2, 1);
            if (tainted)
                dynStats("int", 1, "lib", 2, "sen", 1, "lus", 5 + temp * 3, "cor", 1);
            else
                dynStats("int", 1, "lib", 2, "sen", 1, "lus", 5 + temp * 3);
            // Grammar police for 2 cocks
            if (player.cocks.length == 2)
                outputText("\n\nBoth of your " + multiCockDescriptLight(game.player) + " become shockingly hard, swollen and twitching as they turn a shiny inhuman purple in color.  They spasm, dripping thick ropes of hot demon-like pre-cum along their lengths as your shortest " + cockDescript(player, temp2) + " begins to grow.", false);
            // For more than 2
            else
                outputText("\n\nAll of your " + multiCockDescriptLight(game.player) + " become shockingly hard, swollen and twitching as they turn a shiny inhuman purple in color.  They spasm, dripping thick ropes of hot demon-like pre-cum along their lengths as your shortest " + cockDescript(player, temp2) + " begins to grow.", false);
            if (temp3 < .5)
                outputText("  It stops almost as soon as it starts, growing only a tiny bit longer.", false);
            if (temp3 >= .5 && temp3 < 1)
                outputText("  It grows slowly, stopping after roughly half an inch of growth.", false);
            if (temp3 >= 1 && temp3 <= 2)
                outputText("  The sensation is incredible as more than an inch of lengthened dick-flesh grows in.", false);
            if (temp3 > 2)
                outputText("  You smile and idly stroke your lengthening " + cockDescript(player, temp2) + " as a few more inches sprout.", false);
            outputText("  With the transformation complete, your " + multiCockDescriptLight(game.player) + " return to their normal coloration.", false);
        }
        // NO CAWKS?
        if (player.cocks.length == 0) {
            player.cocks.createCock();
            player.cocks[0].cockLength = rand(3) + 4;
            player.cocks[0].cockThickness = 1;
            outputText("\n\nYou shudder as a pressure builds in your crotch, peaking painfully as a large bulge begins to push out from your body.  ", false);
            outputText("The skin seems to fold back as a fully formed demon-cock bursts forth from your loins, drizzling hot cum everywhere as it orgasms.  Eventually the orgasm ends as your " + cockDescript(game.player, 0) + " fades to a more normal " + player.skinTone + " tone.", false);
            if (tainted)
                dynStats("lib", 3, "sen", 5, "lus", 10, "cor", 5);
            else
                dynStats("lib", 3, "sen", 5, "lus", 10);
        }
        // TIT CHANGE 25% chance of shrinkage
        if (rand(4) == 0) {
            if (!flags[kFLAGS.HYPER_HAPPY]) {
                player.shrinkTits();
            }
        }
    }
    // Mid-level changes
    if (rando >= 50 && rando < 93) {
        if (player.cocks.length > 1) {
            outputText("\n\nYour cocks fill to full-size... and begin growing obscenely.  ", false);
            temp = player.cocks.length;
            while (temp > 0) {
                temp--;
                temp2 = player.increaseCock(temp, rand(3) + 2);
                temp3 = player.cocks[temp].thickenCock(1);
                if (temp3 < .1)
                    player.cocks[temp].cockThickness += .05;
            }
            player.lengthChange(temp2, player.cocks.length);
            // Display the degree of thickness change.
            if (temp3 >= 1) {
                if (player.cocks.length == 1)
                    outputText("\n\nYour cock spreads rapidly, swelling an inch or more in girth, making it feel fat and floppy.", false);
                else
                    outputText("\n\nYour cocks spread rapidly, swelling as they grow an inch or more in girth, making them feel fat and floppy.", false);
            }
            if (temp3 <= .5) {
                if (player.cocks.length > 1)
                    outputText("\n\nYour cocks feel swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. They are definitely thicker.", false);
                else
                    outputText("\n\nYour cock feels swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. It is definitely thicker.", false);
            }
            if (temp3 > .5 && temp2 < 1) {
                if (player.cocks.length == 1)
                    outputText("\n\nYour cock seems to swell up, feeling heavier. You look down and watch it growing fatter as it thickens.", false);
                if (player.cocks.length > 1)
                    outputText("\n\nYour cocks seem to swell up, feeling heavier. You look down and watch them growing fatter as they thicken.", false);
            }
            if (tainted)
                dynStats("lib", 3, "sen", 5, "lus", 10, "cor", 3);
            else
                dynStats("lib", 3, "sen", 5, "lus", 10);
        }
        if (player.cocks.length == 1) {
            outputText("\n\nYour cock fills to its normal size and begins growing... ", false);
            temp3 = player.cocks[0].thickenCock(1);
            temp2 = player.increaseCock(0, rand(3) + 2);
            player.lengthChange(temp2, 1);
            // Display the degree of thickness change.
            if (temp3 >= 1) {
                if (player.cocks.length == 1)
                    outputText("  Your cock spreads rapidly, swelling an inch or more in girth, making it feel fat and floppy.", false);
                else
                    outputText("  Your cocks spread rapidly, swelling as they grow an inch or more in girth, making them feel fat and floppy.", false);
            }
            if (temp3 <= .5) {
                if (player.cocks.length > 1)
                    outputText("  Your cocks feel swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. They are definitely thicker.", false);
                else
                    outputText("  Your cock feels swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. It is definitely thicker.", false);
            }
            if (temp3 > .5 && temp2 < 1) {
                if (player.cocks.length == 1)
                    outputText("  Your cock seems to swell up, feeling heavier. You look down and watch it growing fatter as it thickens.", false);
                if (player.cocks.length > 1)
                    outputText("  Your cocks seem to swell up, feeling heavier. You look down and watch them growing fatter as they thicken.", false);
            }
            if (tainted)
                dynStats("lib", 3, "sen", 5, "lus", 10, "cor", 3);
            else
                dynStats("lib", 3, "sen", 5, "lus", 10);
        }
        if (player.cocks.length == 0) {
            player.cocks.createCock();
            player.cocks[0].cockLength = rand(3) + 4;
            player.cocks[0].cockThickness = 1;
            outputText("\n\nYou shudder as a pressure builds in your crotch, peaking painfully as a large bulge begins to push out from your body.  ", false);
            outputText("The skin seems to fold back as a fully formed demon-cock bursts forth from your loins, drizzling hot cum everywhere as it orgasms.  Eventually the orgasm ends as your " + cockDescript(game.player, 0) + " fades to a more normal " + player.skinTone + " tone.", false);
            if (tainted)
                dynStats("lib", 3, "sen", 5, "lus", 10, "cor", 3);
            else
                dynStats("lib", 3, "sen", 5, "lus", 10);
        }
        // Shrink breasts a more
        // TIT CHANGE 50% chance of shrinkage
        if (rand(2) == 0) {
            if (!flags[kFLAGS.HYPER_HAPPY]) {
                player.shrinkTits();
            }
        }
    }
    // High level change
    if (rando >= 93) {
        if (player.cocks.length < 10) {
            if (int(Math.random() * 10) < int(player.cor / 25)) {
                outputText("\n\n", false);
                growDemonCock(rand(2) + 2);
                if (tainted)
                    dynStats("lib", 3, "sen", 5, "lus", 10, "cor", 5);
                else
                    dynStats("lib", 3, "sen", 5, "lus", 10);
            }
            else {
                growDemonCock(1);
            }
        }
        if (!flags[kFLAGS.HYPER_HAPPY]) {
            player.shrinkTits();
            player.shrinkTits();
        }
    }
    // Demonic changes - higher chance with higher corruption.
    if (rand(40) + player.cor / 3 > 35 && tainted)
        demonChanges(player);
    player.genderCheck();
    if (rand(4) == 0 && tainted)
        outputText(modFem(player, 5, 2), false);
    if (rand(4) == 0 && tainted)
        outputText(modThickness(player, 30, 2), false);
}

export function growDemonCock(growCocks: number): void {
    temp = 0;
    while (growCocks > 0) {
        player.cocks.createCock();
        trace("COCK LENGTH: " + player.cocks[length - 1].cockLength);
        player.cocks[player.cocks.length - 1].cockLength = rand(3) + 4;
        player.cocks[player.cocks.length - 1].cockThickness = .75;
        trace("COCK LENGTH: " + player.cocks[length - 1].cockLength);
        growCocks--;
        temp++;
    }
    outputText("\n\nYou shudder as a pressure builds in your crotch, peaking painfully as a large bulge begins to push out from your body.  ", false);
    if (temp == 1) {
        outputText("The skin seems to fold back as a fully formed demon-cock bursts forth from your loins, drizzling hot cum everywhere as it orgasms.  In time it fades to a more normal coloration and human-like texture.  ", false);
    }
    else {
        outputText("The skin bulges obscenely, darkening and splitting around " + num2Text(temp) + " of your new dicks.  For an instant they turn a demonic purple and dribble in thick spasms of scalding demon-cum.  After, they return to a more humanoid coloration.  ", false);
    }
    if (temp > 4) outputText("Your tender bundle of new cocks feels deliciously sensitive, and you cannot stop yourself from wrapping your hands around the slick demonic bundle and pleasuring them.\n\nNearly an hour later, you finally pull your slick body away from the puddle you left on the ground.  When you look back, you notice it has already been devoured by the hungry earth.", false);
    player.orgasm();
}


export function demonChanges(player: Player): void {
    // Change tail if already horned.
    if (player.tailType != TAIL_TYPE_DEMONIC && player.horns > 0) {
        if (player.tailType != TAIL_TYPE_NONE) {
            outputText("\n\n", false);
            if (player.tailType == TAIL_TYPE_SPIDER_ADBOMEN || player.tailType == TAIL_TYPE_BEE_ABDOMEN) outputText("You feel a tingling in your insectile abdomen as it stretches, narrowing, the exoskeleton flaking off as it transforms into a flexible demon-tail, complete with a round spaded tip.  ", false);
            else outputText("You feel a tingling in your tail.  You are amazed to discover it has shifted into a flexible demon-tail, complete with a round spaded tip.  ", false);
            outputText("<b>Your tail is now demonic in appearance.</b>", false);
        }
        else outputText("\n\nA pain builds in your backside... growing more and more pronounced.  The pressure suddenly disappears with a loud ripping and tearing noise.  <b>You realize you now have a demon tail</b>... complete with a cute little spade.", false);
        dynStats("cor", 4);
        player.tailType = TAIL_TYPE_DEMONIC;
    }
    // grow horns!
    if (player.horns == 0 || (rand(player.horns + 3) == 0)) {
        if (player.horns < 12 && (player.hornType == HORNS_NONE || player.hornType == HORNS_DEMON)) {
            outputText("\n\n", false);
            if (player.horns == 0) {
                outputText("A small pair of demon horns erupts from your forehead.  They actually look kind of cute.  <b>You have horns!</b>", false);
            }
            else outputText("Another pair of demon horns, larger than the last, forms behind the first row.", false);
            if (player.hornType == HORNS_NONE) player.hornType = HORNS_DEMON;
            player.horns++;
            player.horns++;
            dynStats("cor", 3);
        }
        // Text for shifting horns
        else if (player.hornType > HORNS_DEMON) {
            outputText("\n\n", false);
            outputText("Your horns shift, shrinking into two small demonic-looking horns.", false);
            player.horns = 2;
            player.hornType = HORNS_DEMON;
            dynStats("cor", 3);
        }
    }
    // Nipples Turn Back:
    if (player.effects.findByType(StatusAffects.BlackNipples) >= 0 && rand(3) == 0) {
        outputText("\n\nSomething invisible brushes against your " + nippleDescription(player, 0) + ", making you twitch.  Undoing your clothes, you take a look at your chest and find that your nipples have turned back to their natural flesh colour.");
        player.effects.remove(StatusAffects.BlackNipples);
    }
    // remove fur
    if ((player.faceType != FACE_HUMAN || player.skinType != SKIN_TYPE_PLAIN) && rand(3) == 0) {
        // Remove face before fur!
        if (player.faceType != FACE_HUMAN) {
            outputText("\n\n", false);
            outputText("Your visage twists painfully, returning to a more normal human shape, albeit with flawless skin.  <b>Your face is human again!</b>", false);
            player.faceType = FACE_HUMAN;
        }
        // De-fur
        else if (player.skinType != SKIN_TYPE_PLAIN) {
            outputText("\n\n", false);
            if (player.skinType == SKIN_TYPE_FUR) outputText("Your skin suddenly feels itchy as your fur begins falling out in clumps, <b>revealing inhumanly smooth skin</b> underneath.", false);
            if (player.skinType == SKIN_TYPE_SCALES) outputText("Your scales begin to itch as they begin falling out in droves, <b>revealing your inhumanly smooth " + player.skinTone + " skin</b> underneath.", false);
            player.skinType = SKIN_TYPE_PLAIN;
            player.skinDesc = "skin";
        }
    }
    // Demon tongue
    if (player.tongueType == TONUGE_SNAKE && rand(3) == 0) {
        outputText("\n\nYour snake-like tongue tingles, thickening in your mouth until it feels more like your old human tongue, at least for the first few inches.  It bunches up inside you, and when you open up your mouth to release it, roughly two feet of tongue dangles out.  You find it easy to move and control, as natural as walking.  <b>You now have a long demon-tongue.</b>", false);
        player.tongueType = TONUGE_DEMONIC;
    }
    // foot changes - requires furless
    if (player.skinType == SKIN_TYPE_PLAIN && rand(4) == 0) {
        // Males/genderless get clawed feet
        if (player.gender <= 1) {
            if (player.lowerBody != LOWER_BODY_TYPE_DEMONIC_CLAWS) {
                outputText("\n\n", false);
                outputText("Every muscle and sinew below your hip tingles and you begin to stagger. Seconds after you sit down, pain explodes in your " + feet(player) + ". Something hard breaks through your sole from the inside out as your toes splinter and curve cruelly. The pain slowly diminishes and your eyes look along a human leg that splinters at the foot into a claw with sharp black nails. When you relax, your feet grip the ground easily. <b>Your feet are now formed into demonic claws.</b>", false);
                player.lowerBody = LOWER_BODY_TYPE_DEMONIC_CLAWS;
            }
        }
        // Females/futa get high heels
        else if (player.lowerBody != LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS) {
            outputText("\n\n", false);
            outputText("Every muscle and sinew below your hip tingles and you begin to stagger. Seconds after you sit down, pain explodes in your " + feet(player) + ". Something hard breaks through your sole from the inside out. The pain slowly diminishes and your eyes look along a human leg to a thin and sharp horn protruding from the heel. When you relax, your feet are pointing down and their old posture is only possible with an enormous effort. <b>Your feet are now formed into demonic high-heels.</b> Tentatively you stand up and try to take a few steps. To your surprise you feel as if you were born with this and stride vigorously forward, hips swaying.", false);
            player.lowerBody = LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS;
        }
    }
    // Grow demon wings
    if (player.wingType != WING_TYPE_BAT_LIKE_LARGE && rand(8) == 0 && player.cor >= 50) {
        // grow smalls to large
        if (player.wingType == WING_TYPE_BAT_LIKE_TINY && player.cor >= 75) {
            outputText("\n\n", false);
            outputText("Your small demonic wings stretch and grow, tingling with the pleasure of being attached to such a tainted body.  You stretch over your shoulder to stroke them as they unfurl, turning into full-sized demon-wings.  <b>Your demonic wings have grown!</b>", false);
            player.wingType = WING_TYPE_BAT_LIKE_LARGE;
            player.wingDesc = "large, bat-like";
        }
        else if (player.wingType == WING_TYPE_SHARK_FIN) {
            outputText("\n\n", false);
            outputText("The muscles around your shoulders bunch up uncomfortably, changing to support the new bat-like wings growing from your back.  You twist your head as far as you can for a look and realize your fin has changed into ", false);
            outputText("small ", false);
            player.wingType = WING_TYPE_BAT_LIKE_TINY;
            player.wingDesc = "tiny, bat-like";
            outputText("bat-like demon-wings!", false);
        }
        else if (player.wingType == WING_TYPE_BEE_LIKE_SMALL || player.wingType == WING_TYPE_BEE_LIKE_LARGE) {
            outputText("\n\n", false);
            outputText("The muscles around your shoulders bunch up uncomfortably, changing to support your wings as you feel their weight increasing.  You twist your head as far as you can for a look and realize they've changed into ", false);
            if (player.wingType == WING_TYPE_BEE_LIKE_SMALL) {
                outputText("small ", false);
                player.wingType = WING_TYPE_BAT_LIKE_TINY;
                player.wingDesc = "tiny, bat-like";
            }
            else {
                outputText("large ", false);
                player.wingType = WING_TYPE_BAT_LIKE_LARGE;
                player.wingDesc = "large, bat-like";
            }
            outputText("<b>bat-like demon-wings!</b>", false);
        }
        // No wings
        else if (player.wingType == WING_TYPE_NONE) {
            outputText("\n\n", false);
            outputText("A knot of pain forms in your shoulders as they tense up.  With a surprising force, a pair of small demonic wings sprout from your back, ripping a pair of holes in the back of your " + player.armorName + ".  <b>You now have tiny demonic wings</b>.", false);
            player.wingType = WING_TYPE_BAT_LIKE_TINY;
            player.wingDesc = "tiny, bat-like";
        }

    }
}
