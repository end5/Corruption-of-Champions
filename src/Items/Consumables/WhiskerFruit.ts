export function catTransformation(player: Player): void {
    let changes: number = 0;
    let changeLimit: number = 1;
    let temp2: number = 0;
    let temp3: number = 0;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(3) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    // Text go!
    outputText("", true);
    outputText("You take a bite of the fruit and gulp it down. It's thick and juicy and has an almost overpowering sweetness. Nevertheless, it is delicious and you certainly could use a meal.  You devour the fruit, stopping only when the hard, nubby pit is left; which you toss aside.", false);
    // Speed raises up to 75
    if (player.spe < 75 && rand(3) == 0 && changes < changeLimit) {
        // low speed
        if (player.spe <= 30) {
            outputText("\n\nYou feel... more balanced, sure of step. You're certain that you've become just a little bit faster.", false);
            dynStats("spe", 2);
        }
        // medium speed
        else if (player.spe <= 60) {
            outputText("\n\nYou stumble as you shift position, surprised by how quickly you move. After a moment or two of disorientation, you adjust. You're certain that you can run faster now.", false);
            dynStats("spe", 1);
        }
        // high speed
        else {
            outputText("\n\nYou pause mid-step and crouch. Your leg muscles have cramped up like crazy. After a few moments, the pain passes and you feel like you could chase anything down.", false);
            dynStats("spe", .5);
        }
        changes++;
    }
    // Strength raises to 40
    if (player.str < 40 && rand(3) == 0 && changes < changeLimit) {
        if (rand(2) == 0)
            outputText("\n\nYour muscles feel taut, like a coiled spring, and a bit more on edge.", false);
        else
            outputText("\n\nYou arch your back as your muscles clench painfully.  The cramp passes swiftly, leaving you feeling like you've gotten a bit stronger.", false);
        dynStats("str", 1);
        changes++;
    }
    // Strength ALWAYS drops if over 60
    // Does not add to change total
    else if (player.str > 60 && rand(2) == 0) {
        outputText("\n\nShivers run from your head to your toes, leaving you feeling weak.  Looking yourself over, your muscles seemed to have lost some bulk.", false);
        dynStats("str", -2);
    }
    // Toughness drops if over 50
    // Does not add to change total
    if (player.tou > 50 && rand(2) == 0) {
        outputText("\n\nYour body seems to compress momentarily, becoming leaner and noticeably less tough.", false);
        dynStats("tou", -2);
    }
    // Intelliloss
    if (rand(4) == 0 && changes < changeLimit) {
        // low intelligence
        if (player.inte < 15)
            outputText("\n\nYou feel like something is slipping away from you but can't figure out exactly what's happening.  You scrunch up your " + face(player) + ", trying to understand the situation.  Before you can reach any kind of conclusion, something glitters in the distance, distracting your feeble mind long enough for you to forget the problem entirely.", false);
        // medium intelligence
        else if (player.inte < 50) {
            outputText("\n\nYour mind feels somewhat sluggish, and you wonder if you should just lie down ", false);
            if (rand(2) == 0) {
                outputText("somewhere and ", false);
                temp = rand(3);
                if (temp == 0)
                    outputText("toss a ball around or something", false);
                else if (temp == 1)
                    outputText("play with some yarn", false);
                else if (temp == 2)
                    outputText("take a nap and stop worrying", false);
            }
            else
                outputText("in the sun and let your troubles slip away", false);
            outputText(".", false);
        }
        // High intelligence
        else
            outputText("\n\nYou start to feel a bit dizzy, but the sensation quickly passes.  Thinking hard on it, you mentally brush away the fuzziness that seems to permeate your brain and determine that this fruit may have actually made you dumber.  It would be best not to eat too much of it.", false);
        dynStats("int", -1);
        changes++;
    }
    // Libido gain
    if (player.lib < 80 && changes < changeLimit && rand(4) == 0) {
        // Cat dicked folks
        if (player.catCocks() > 0) {
            temp = player.cocks.findFirstCockType(CockTypesEnum.CAT);
            outputText("\n\nYou feel your " + cockDescript(player, temp) + " growing hard, the barbs becoming more sensitive. You gently run your hands down them and imagine the feeling of raking the insides of a cunt as you pull.  The fantasy continues, and after ejaculating and hearing the female yowl with pleasure, you shake your head and try to drive off the image.  ", false);
            if (player.cor < 33)
                outputText("You need to control yourself better.", false);
            else if (player.cor < 66)
                outputText("You're not sure how you feel about the fantasy.", false);
            else
                outputText("You hope to find a willing partner to make this a reality.", false);
        }
        // Else –
        else {
            outputText("\n\nA rush of tingling warmth spreads through your body as it digests the fruit.  You can feel your blood pumping through your extremities, making them feel sensitive and surprisingly sensual.  It's going to be hard to resist getting ", false);
            if (player.lust > 60)
                outputText("even more ", false);
            outputText("turned on.", false);
        }
        dynStats("lib", 1, "sen", .25);
        changes++;
    }
    // Sexual changes would go here if I wasn't a tard.
    // Heat
    if (rand(4) == 0 && changes < changeLimit) {
        const intensified: boolean = player.inHeat;
        if (goIntoHeat(player, false)) {
            if (intensified) {
                if (rand(2) == 0)
                    outputText("\n\nThe itch inside your " + vaginaDescript(player, 0) + " is growing stronger, and you desperately want to find a nice cock to massage the inside.", false);
                else
                    outputText("\n\nThe need inside your " + vaginaDescript(player, 0) + " grows even stronger.  You desperately need to find a mate to 'scratch your itch' and fill your womb with kittens.  It's difficult NOT to think about a cock slipping inside your moist fuck-tunnel, and at this point you'll have a hard time resisting ANY male who approaches.", false);
            }
            else {
                outputText("\n\nThe interior of your " + vaginaDescript(player, 0) + " clenches tightly, squeezing with reflexive, aching need.  Your skin flushes hot ", false);
                if (player.skinType == SkinType.FUR)
                    outputText("underneath your fur ", false);
                outputText("as images and fantasies ", false);
                if (player.cor < 50)
                    outputText("assault ", false);
                else
                    outputText("fill ", false);
                outputText(" your mind.  Lithe cat-boys with their perfect, spine-covered cocks line up behind you, and you bend over to present your needy pussy to them.  You tremble with the desire to feel the exotic texture of their soft barbs rubbing your inner walls, smearing your " + vaginaDescript(player, 0) + " with their cum as you're impregnated.  Shivering, you recover from the fantasy and pull your fingers from your aroused sex.  <b>It would seem you've gone into heat!</b>", false);
            }
            changes++;
        }
    }
    // Shrink the boobalies down to A for men or C for girls.
    if (changes < changeLimit && rand(4) == 0 && !flags[kFLAGS.HYPER_HAPPY]) {
        temp2 = 0;
        temp3 = 0;
        // Determine if shrinkage is required
        // and set temp2 to threshold
        if (!player.vaginas.length > 0 && player.breastRows.biggestTitSize() > 2)
            temp2 = 2;
        else if (player.breastRows.biggestTitSize() > 4)
            temp2 = 4;
        // IT IS!
        if (temp2 > 0) {
            // temp3 stores how many rows are changed
            temp3 = 0;
            for (const k = 0; k < player.breastRows.length; k++) {
                // If this row is over threshhold
                if (player.breastRows[k].breastRating > temp2) {
                    // Big change
                    if (player.breastRows[k].breastRating > 10) {
                        player.breastRows[k].breastRating -= 2 + rand(3);
                        if (temp3 == 0)
                            outputText("\n\nThe " + breastDescriptOfRow(game.player, 0) + " on your chest wobble for a second, then tighten up, losing several cup-sizes in the process!", false);
                        else
                            outputText("  The change moves down to your " + num2Text2(k + 1) + " row of " + breastDescriptOfRow(game.player, 0) + ". They shrink greatly, losing a couple cup-sizes.", false);
                    }
                    // Small change
                    else {
                        player.breastRows[k].breastRating -= 1;
                        if (temp3 == 0)
                            outputText("\n\nAll at once, your sense of gravity shifts.  Your back feels a sense of relief, and it takes you a moment to realize your " + breastDescriptOfRow(game.player, k) + " have shrunk!", false);
                        else
                            outputText("  Your " + num2Text2(k + 1) + " row of " + breastDescriptOfRow(game.player, k) + " gives a tiny jiggle as it shrinks, losing some off its mass.", false);
                    }
                    // Increment changed rows
                    temp3++;
                }
            }
        }
        // Count that tits were shrunk
        if (temp3 > 0)
            changes++;
    }
    // Cat dangly-doo.
    if (player.cocks.length > 0 && player.catCocks() < player.cocks.length &&
        changes < changeLimit && rand(4) == 0) {
        // loop through and find a non-cat wang.
        for (const i = 0; i < (player.cocks.length) && player.cocks[i].cockType == CockTypesEnum.CAT; i++) { }
        outputText("\n\nYour " + cockDescript(game.player, i) + " swells up with near-painful arousal and begins to transform.  It turns pink and begins to narrow until the tip is barely wide enough to accommodate your urethra.  Barbs begin to sprout from its flesh, if you can call the small, fleshy nubs barbs. They start out thick around the base of your " + cockNoun(CockTypesEnum.HUMAN) + " and shrink towards the tip. The smallest are barely visible. <b>Your new feline dong throbs powerfully</b> and spurts a few droplets of cum.  ", false);
        if (!player.cocks.hasSheath()) {
            outputText("Then, it begins to shrink and sucks itself inside your body.  Within a few moments, a fleshy sheath is formed.", false);
            if (player.balls > 0)
                outputText("  Thankfully, your balls appear untouched.", false);
        }
        else
            outputText("Then, it disappears back into your sheath.", false);
        player.cocks[i].cockType = CockTypesEnum.CAT;
        player.cocks[i].knotMultiplier = 1;
        changes++;
    }
    // Cat penorz shrink
    if (player.catCocks() > 0 && rand(3) == 0 && changes < changeLimit && !flags[kFLAGS.HYPER_HAPPY]) {
        // loop through and find a cat wang.
        temp = 0;
        for (const j = 0; j < (player.cocks.length); j++) {
            if (player.cocks[j].cockType == CockTypesEnum.CAT && player.cocks[j].cockLength > 6) {
                temp = 1;
                break;
            }
        }
        if (temp == 1) {
            // lose 33% size until under 10, then lose 2" at a time
            if (player.cocks[j].cockLength > 16) {
                outputText("\n\nYour " + cockDescript(game.player, j) + " tingles, making your sheath feel a little less tight.  It dwindles in size, losing a full third of its length and a bit of girth before the change finally stops.", false);
                player.cocks[j].cockLength *= .66;
            }
            else if (player.cocks[j].cockLength > 6) {
                outputText("\n\nYour " + cockDescript(game.player, j) + " tingles and withdraws further into your sheath.  If you had to guess, you'd say you've lost about two inches of total length and perhaps some girth.", false);
                player.cocks[j].cockLength -= 2;
            }
            if (player.cocks[j].cockLength / 5 < player.cocks[j].cockThickness && player.cocks[j].cockThickness > 1.25)
                player.cocks[j].cockThickness = player.cocks[j].cockLength / 6;
            // Check for any more!
            temp2 = 0;
            j++;
            for (j; j < player.cocks.length; j++) {
                // Found another cat wang!
                if (player.cocks[j].cockType == CockTypesEnum.CAT) {
                    // Long enough - change it
                    if (player.cocks[j].cockLength > 6) {
                        if (player.cocks[j].cockLength > 16)
                            player.cocks[j].cockLength *= .66;
                        else if (player.cocks[j].cockLength > 6)
                            player.cocks[j].cockLength -= 2;
                        // Thickness adjustments
                        if (player.cocks[j].cockLength / 5 < player.cocks[j].cockThickness && player.cocks[j].cockThickness > 1.25)
                            player.cocks[j].cockThickness = player.cocks[j].cockLength / 6;
                        temp2 = 1;
                    }
                }
            }
            // (big sensitivity boost)
            outputText("  Although the package is smaller, it feels even more sensitive – as if it retained all sensation of its larger size in its smaller form.", false);
            dynStats("sen", 5);
            // Make note of other dicks changing
            if (temp2 == 1)
                outputText("  Upon further inspection, all your " + cockNoun(CockTypesEnum.CAT) + "s have shrunk!", false);
            changes++;
        }
    }
    // Body type changes.  Teh rarest of the rare.
    // DA EARZ
    if (player.earType != EarType.CAT && rand(5) == 0 && changes < changeLimit) {
        // human to cat:
        if (player.earType == EarType.HUMAN) {
            if (rand(2) == 0)
                outputText("\n\nThe skin on the sides of your face stretches painfully as your ears migrate upwards, towards the top of your head. They shift and elongate a little, fur growing on them as they become feline in nature. <b>You now have cat ears.</b>", false);
            else
                outputText("\n\nYour ears begin to tingle. You reach up with one hand and gently rub them. They appear to be growing fur. Within a few moments, they've migrated up to the top of your head and increased in size. The tingling stops and you find yourself hearing noises in a whole new way. <b>You now have cat ears.</b>", false);
        }
        // non human to cat:
        else {
            if (rand(2) == 0)
                outputText("\n\nYour ears change shape, morphing into pointed, feline ears!  They swivel about reflexively as you adjust to them.  <b>You now have cat ears.</b>", false);
            else
                outputText("\n\nYour ears tingle and begin to change shape. Within a few moments, they've become long and feline.  Thanks to the new fuzzy organs, you find yourself able to hear things that eluded your notice up until now. <b>You now have cat ears.</b>", false);
        }
        player.earType = EarType.CAT;
        changes++;
    }
    // DA TAIL (IF ALREADY HAZ URZ)
    if (player.tailType != TailType.CAT && player.earType == EarType.CAT && rand(5) == 0 && changes < changeLimit) {
        if (player.tailType == TailType.NONE) {
            temp = rand(3);
            if (temp == 0)
                outputText("\n\nA pressure builds in your backside. You feel under your " + player.armorName + " and discover an odd bump that seems to be growing larger by the moment. In seconds it passes between your fingers, bursts out the back of your clothes and grows most of the way to the ground. A thick coat of fur springs up to cover your new tail. You instinctively keep adjusting it to improve your balance. <b>You now have a cat-tail.</b>", false);
            if (temp == 1)
                outputText("\n\nYou feel your backside shift and change, flesh molding and displacing into a long, flexible tail! <b>You now have a cat tail.</b>", false);
            if (temp == 2)
                outputText("\n\nYou feel an odd tingling in your spine and your tail bone starts to throb and then swell. Within a few moments it begins to grow, adding new bones to your spine. Before you know it, you have a tail. Just before you think it's over, the tail begins to sprout soft, glossy " + player.hairColor + " fur. <b>You now have a cat tail.</b>", false);
        }
        else
            outputText("\n\nYou pause and tilt your head... something feels different.  Ah, that's what it is; you turn around and look down at your tail as it starts to change shape, narrowing and sprouting glossy fur. <b>You now have a cat tail.</b>", false);
        player.tailType = TailType.CAT;
        changes++;
    }
    // Da paws (if already haz ears & tail)
    if (player.tailType == TailType.CAT && player.earType == EarType.CAT &&
        rand(5) == 0 && changes < changeLimit &&
        player.lowerBody != LowerBodyType.CAT) {
        // hoof to cat:
        if (player.lowerBody == LowerBodyType.HOOFED || player.lowerBody == LowerBodyType.CENTAUR) {
            outputText("\n\nYou feel your hooves suddenly splinter, growing into five unique digits. Their flesh softens as your hooves reshape into furred cat paws. <b>You now have cat paws.</b>", false);
            if (player.lowerBody == LowerBodyType.CENTAUR)
                outputText("  You feel woozy and collapse on your side.  When you wake, you're no longer a centaur and your body has returned to a humanoid shape.", false);
        }
        // Goo to cat
        else if (player.lowerBody == LowerBodyType.GOO) {
            outputText("\n\nYour lower body rushes inward, molding into two leg-like shapes that gradually stiffen up.  In moments they solidify into digitigrade legs, complete with soft, padded cat-paws.  <b>You now have cat-paws!</b>", false);
        }
        // non hoof to cat:
        else
            outputText("\n\nYou scream in agony as you feel the bones in your " + feet(player) + " break and begin to rearrange. When the pain fades, you feel surprisingly well-balanced. <b>You now have cat paws.</b>", false);
        player.lowerBody = LowerBodyType.CAT;
        changes++;
    }
    // TURN INTO A FURRAH!  OH SHIT
    if (player.tailType == TailType.CAT && player.earType == EarType.CAT &&
        rand(5) == 0 && changes < changeLimit &&
        player.lowerBody == LowerBodyType.CAT && player.skinType != SkinType.FUR) {
        outputText("\n\nYour " + player.skinDesc + " begins to tingle, then itch. You reach down to scratch your arm absent-mindedly and pull your fingers away to find strands of " + player.hairColor + " fur. Wait, fur?  What just happened?! You spend a moment examining yourself and discover that <b>you are now covered in glossy, soft fur.</b>\n\n", false);
        player.skinType = SkinType.FUR;
        player.skinDesc = "fur";
        changes++;
    }
    // CAT-FACE!  FULL ON FURRY!  RAGE AWAY NEKOZ
    if (player.tailType == TailType.CAT && player.earType == EarType.CAT &&
        rand(5) == 0 && changes < changeLimit &&
        player.lowerBody == LowerBodyType.CAT && player.skinType == SkinType.FUR &&
        player.faceType != FaceType.CAT) {
        // Gain cat face, replace old face
        temp = rand(3);
        if (temp == 0)
            outputText("\n\nYour face is wracked with pain. You throw back your head and scream in agony as you feel your cheekbones breaking and shifting, reforming into something... different. You find a puddle to view your reflection and discover <b>your face is now a cross between human and feline features.</b>", false);
        else if (temp == 1)
            outputText("\n\nMind-numbing pain courses through you as you feel your facial bones rearranging.  You clutch at your face in agony as your skin crawls and shifts, your visage reshaping to replace your facial characteristics with those of a feline. <b>You now have an anthropomorphic cat-face.</b>", false);
        else
            outputText("\n\nYour face is wracked with pain. You throw back your head and scream in agony as you feel your cheekbones breaking and shifting, reforming into something else. <b>Your facial features rearrange to take on many feline aspects.</b>", false);
        player.faceType = FaceType.CAT;
        changes++;
    }
    if (rand(4) == 0 && player.gills && changes < changeLimit) {
        outputText("\n\nYour chest itches, and as you reach up to scratch it, you realize your gills have withdrawn into your skin.", false);
        player.gills = false;
        changes++;
    }
    // FAILSAFE CHANGE
    if (changes == 0) {
        outputText("\n\nInhuman vitality spreads through your body, invigorating you!\n", false);
        HPChange(50, true);
        dynStats("lus", 3);
    }
    if (changes < changeLimit) {
        if (rand(2) == 0)
            outputText(modThickness(player, 5, 2), false);
        if (rand(2) == 0)
            outputText(modTone(player, 76, 2), false);
        if (player.gender < 2)
            if (rand(2) == 0)
                outputText(modFem(player, 65, 1), false);
            else
                outputText(modFem(player, 85, 2), false);
    }
}
