// butt expansion
export function brownEgg(large: boolean, player: Player): void {
    outputText("You devour the egg, momentarily sating your hunger.\n\n", true);
    if (!large) {
        outputText("You feel a bit of additional weight on your backside as your " + buttDescription(player) + " gains a bit more padding.", true);
        player.buttRating++;
    }
    else {
        outputText("Your " + buttDescription(player) + " wobbles, nearly throwing you off balance as it grows much bigger!", true);
        player.buttRating += 2 + rand(3);
    }
    if (rand(3) == 0) {
        if (large)
            outputText(modThickness(player, 100, 8), false);
        else
            outputText(modThickness(player, 95, 3), false);
    }
}
// hip expansion
export function purpleEgg(large: boolean, player: Player): void {
    outputText("You devour the egg, momentarily sating your hunger.\n\n", true);
    if (!large || player.hipRating > 20) {
        outputText("You stumble as you feel your " + hipDescription(player) + " widen, altering your gait slightly.", false);
        player.hipRating++;
    }
    else {
        outputText("You stagger wildly as your hips spread apart, widening by inches.  When the transformation finishes you feel as if you have to learn to walk all over again.", false);
        player.hipRating += 2 + rand(2);
    }
    if (rand(3) == 0) {
        if (large)
            outputText(modThickness(player, 80, 8), false);
        else
            outputText(modThickness(player, 80, 3), false);
    }
}
// Femminess
export function pinkEgg(large: boolean, player: Player): void {
    outputText("You devour the egg, momentarily sating your hunger.\n\n", true);
    if (!large) {
        // Remove a dick
        if (player.cocks.length > 0) {
            killCocks(player, 1);
            outputText("\n\n", false);
            player.genderCheck();
        }
        // remove balls
        if (player.balls > 0) {
            if (player.ballSize > 15) {
                player.ballSize -= 8;
                outputText("Your scrotum slowly shrinks, settling down at a MUCH smaller size.  <b>Your " + ballsDescriptLight(player) + " are much smaller.</b>\n\n", false);
            }
            else {
                player.balls = 0;
                player.ballSize = 1;
                outputText("Your scrotum slowly shrinks, eventually disappearing entirely!  <b>You've lost your balls!</b>\n\n", false);
            }
        }
        // Fertility boost
        if (player.vaginas.length > 0 && player.fertility < 40) {
            outputText("You feel a tingle deep inside your body, just above your " + vaginaDescript(player, 0) + ", as if you were becoming more fertile.\n\n", false);
            player.fertility += 5;
        }
    }
    // LARGE
    else {
        // Remove a dick
        if (player.cocks.length > 0) {
            killCocks(player, -1);
            outputText("\n\n", false);
            player.genderCheck();
        }
        if (player.balls > 0) {
            player.balls = 0;
            player.ballSize = 1;
            outputText("Your scrotum slowly shrinks, eventually disappearing entirely!  <b>You've lost your balls!</b>\n\n", false);
        }
        // Fertility boost
        if (player.vaginas.length > 0 && player.fertility < 70) {
            outputText("You feel a powerful tingle deep inside your body, just above your " + vaginaDescript(player, 0) + ". Instinctively you know you have become more fertile.\n\n", false);
            player.fertility += 10;
        }
    }
    if (rand(3) == 0) {
        if (large)
            outputText(modFem(player, 100, 8), false);
        else
            outputText(modFem(player, 95, 3), false);
    }
}
// Maleness
export function blueEgg(large: boolean, player: Player): void {
    let temp2: number = 0;
    let temp3: number = 0;
    outputText("You devour the egg, momentarily sating your hunger.", true);
    if (!large) {
        // Kill pussies!
        if (player.vaginas.length > 0) {
            outputText("\n\nYour vagina clenches in pain, doubling you over.  You slip a hand down to check on it, only to feel the slit growing smaller and smaller until it disappears, taking your clit with it! <b> Your vagina is gone!</b>", false);
            player.vaginas.removeVagina(0, 1);
            player.clitLength = .5;
            player.genderCheck();
        }
        // Dickz
        if (player.cocks.length > 0) {
            // Multiz
            if (player.cocks.length > 1) {
                outputText("\n\nYour " + multiCockDescript(game.player) + " fill to full-size... and begin growing obscenely.", false);
                temp = player.cocks.length;
                while (temp > 0) {
                    temp--;
                    temp2 = player.increaseCock(temp, rand(3) + 2);
                    temp3 = player.cocks[temp].thickenCock(1);
                }
                lengthChange(player, temp2, player.cocks.length);
                // Display the degree of thickness change.
                if (temp3 >= 1) {
                    if (player.cocks.length == 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " spreads rapidly, swelling an inch or more in girth, making it feel fat and floppy.", false);
                    else
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " spread rapidly, swelling as they grow an inch or more in girth, making them feel fat and floppy.", false);
                }
                if (temp3 <= .5) {
                    if (player.cocks.length > 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " feel swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. They are definitely thicker.", false);
                    else
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " feels swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. It is definitely thicker.", false);
                }
                if (temp3 > .5 && temp2 < 1) {
                    if (player.cocks.length == 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " seems to swell up, feeling heavier. You look down and watch it growing fatter as it thickens.", false);
                    if (player.cocks.length > 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " seem to swell up, feeling heavier. You look down and watch them growing fatter as they thicken.", false);
                }
                dynStats("lib", 1, "sen", 1, "lus", 20);
            }
            // SINGLEZ
            if (player.cocks.length == 1) {
                outputText("\n\nYour " + multiCockDescriptLight(game.player) + " fills to its normal size... and begins growing... ", false);
                temp3 = player.cocks[0].thickenCock(1);
                temp2 = player.increaseCock(0, rand(3) + 2);
                lengthChange(player, temp2, 1);
                // Display the degree of thickness change.
                if (temp3 >= 1) {
                    if (player.cocks.length == 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " spreads rapidly, swelling an inch or more in girth, making it feel fat and floppy.", false);
                    else
                        outputText("  Your " + multiCockDescriptLight(game.player) + " spread rapidly, swelling as they grow an inch or more in girth, making them feel fat and floppy.", false);
                }
                if (temp3 <= .5) {
                    if (player.cocks.length > 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " feel swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. They are definitely thicker.", false);
                    else
                        outputText("  Your " + multiCockDescriptLight(game.player) + " feels swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. It is definitely thicker.", false);
                }
                if (temp3 > .5 && temp2 < 1) {
                    if (player.cocks.length == 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " seems to swell up, feeling heavier. You look down and watch it growing fatter as it thickens.", false);
                    if (player.cocks.length > 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " seem to swell up, feeling heavier. You look down and watch them growing fatter as they thicken.", false);
                }
                dynStats("lib", 1, "sen", 1, "lus", 20);
            }
        }
    }
    // LARGE
    else {
        // New lines if changes
        if (player.breastRows.length > 1 || player.buttRating > 5 || player.hipRating > 5 || player.vaginas.length > 0)
            outputText("\n\n", false);
        // Kill pussies!
        if (player.vaginas.length > 0) {
            outputText("Your vagina clenches in pain, doubling you over.  You slip a hand down to check on it, only to feel the slit growing smaller and smaller until it disappears, taking your clit with it!\n\n", false);
            if (player.breastRows.length > 1 || player.buttRating > 5 || player.hipRating > 5)
                outputText("  ", false);
            player.vaginas.removeVagina(0, 1);
            player.clitLength = .5;
            player.genderCheck();
        }
        // Kill extra boobages
        if (player.breastRows.length > 1) {
            outputText("Your back relaxes as extra weight vanishes from your chest.  <b>Your lowest " + breastDescript(player, player.breastRows.length - 1) + " have vanished.</b>", false);
            if (player.buttRating > 5 || player.hipRating > 5)
                outputText("  ", false);
            // Remove lowest row.
            player.breastRows.removeBreastRow((player.breastRows.length - 1), 1);
        }
        // Ass/hips shrinkage!
        if (player.buttRating > 5) {
            outputText("Muscles firm and tone as you feel your " + buttDescription(player) + " become smaller and tighter.", false);
            if (player.hipRating > 5)
                outputText("  ", false);
            player.buttRating -= 2;
        }
        if (player.hipRating > 5) {
            outputText("Feeling the sudden burning of lactic acid in your " + hipDescription(player) + ", you realize they have slimmed down and firmed up some.", false);
            player.hipRating -= 2;
        }
        // Shrink tits!
        if (player.breastRows.biggestTitSize() > 0) {
            shrinkTits(player);
        }
        if (player.cocks.length > 0) {
            // Multiz
            if (player.cocks.length > 1) {
                outputText("\n\nYour " + multiCockDescript(game.player) + " fill to full-size... and begin growing obscenely.  ", false);
                temp = player.cocks.length;
                while (temp > 0) {
                    temp--;
                    temp2 = player.increaseCock(temp, rand(3) + 5);
                    temp3 = player.cocks[temp].thickenCock(1.5);
                }
                lengthChange(player, temp2, player.cocks.length);
                // Display the degree of thickness change.
                if (temp3 >= 1) {
                    if (player.cocks.length == 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " spreads rapidly, swelling an inch or more in girth, making it feel fat and floppy.", false);
                    else
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " spread rapidly, swelling as they grow an inch or more in girth, making them feel fat and floppy.", false);
                }
                if (temp3 <= .5) {
                    if (player.cocks.length > 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " feel swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. They are definitely thicker.", false);
                    else
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " feels swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. It is definitely thicker.", false);
                }
                if (temp3 > .5 && temp2 < 1) {
                    if (player.cocks.length == 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " seems to swell up, feeling heavier. You look down and watch it growing fatter as it thickens.", false);
                    if (player.cocks.length > 1)
                        outputText("\n\nYour " + multiCockDescriptLight(game.player) + " seem to swell up, feeling heavier. You look down and watch them growing fatter as they thicken.", false);
                }
                dynStats("lib", 1, "sen", 1, "lus", 20);
            }
            // SINGLEZ
            if (player.cocks.length == 1) {
                outputText("\n\nYour " + multiCockDescriptLight(game.player) + " fills to its normal size... and begins growing...", false);
                temp3 = player.cocks[0].thickenCock(1.5);
                temp2 = player.increaseCock(0, rand(3) + 5);
                lengthChange(player, temp2, 1);
                // Display the degree of thickness change.
                if (temp3 >= 1) {
                    if (player.cocks.length == 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " spreads rapidly, swelling an inch or more in girth, making it feel fat and floppy.", false);
                    else
                        outputText("  Your " + multiCockDescriptLight(game.player) + " spread rapidly, swelling as they grow an inch or more in girth, making them feel fat and floppy.", false);
                }
                if (temp3 <= .5) {
                    if (player.cocks.length > 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " feel swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. They are definitely thicker.", false);
                    else
                        outputText("  Your " + multiCockDescriptLight(game.player) + " feels swollen and heavy. With a firm, but gentle, squeeze, you confirm your suspicions. It is definitely thicker.", false);
                }
                if (temp3 > .5 && temp2 < 1) {
                    if (player.cocks.length == 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " seems to swell up, feeling heavier. You look down and watch it growing fatter as it thickens.", false);
                    if (player.cocks.length > 1)
                        outputText("  Your " + multiCockDescriptLight(game.player) + " seem to swell up, feeling heavier. You look down and watch them growing fatter as they thicken.", false);
                }
                dynStats("lib", 1, "sen", 1, "lus", 20);
            }
        }
    }
    if (rand(3) == 0) {
        if (large)
            outputText(modFem(player, 0, 8), false);
        else
            outputText(modFem(player, 5, 3), false);
    }
}
// Nipplezzzzz
export function whiteEgg(large: boolean, player: Player): void {
    let temp2: number = 0;
    outputText("You devour the egg, momentarily sating your hunger.", true);
    if (!large) {
        // Grow nipples
        if (player.nippleLength < 3 && player.breastRows.biggestTitSize() > 0) {
            outputText("\n\nYour nipples engorge, prodding hard against the inside of your " + player.armorName + ".  Abruptly you realize they've gotten almost a quarter inch longer.", false);
            player.nippleLength += .2;
            dynStats("lus", 15);
        }
    }
    // LARGE
    else {
        // Grow nipples
        if (player.nippleLength < 3 && player.breastRows.biggestTitSize() > 0) {
            outputText("\n\nYour nipples engorge, prodding hard against the inside of your " + player.armorName + ".  Abruptly you realize they've grown more than an additional quarter-inch.", false);
            player.nippleLength += (rand(2) + 3) / 10;
            dynStats("lus", 15);
        }
        // NIPPLECUNTZZZ
        temp = player.breastRows.length;
        // Set nipplecunts on every row.
        while (temp > 0) {
            temp--;
            if (!player.breastRows[temp].fuckable && player.nippleLength >= 2) {
                player.breastRows[temp].fuckable = true;
                // Keep track of changes.
                temp2++;
            }
        }
        // Talk about if anything was changed.
        if (temp2 > 0)
            outputText("\n\nYour " + allBreastsDescript(player) + " tingle with warmth that slowly migrates to your nipples, filling them with warmth.  You pant and moan, rubbing them with your fingers.  A trickle of wetness suddenly coats your finger as it slips inside the nipple.  Shocked, you pull the finger free.  <b>You now have fuckable nipples!</b>", false);
    }
}
export function blackRubberEgg(large: boolean, player: Player): void {
    outputText("You devour the egg, momentarily sating your hunger.", true);
    // Small
    if (!large) {
        // Change skin to normal if not flawless!
        if ((player.skinAdj != "smooth" && player.skinAdj != "latex" && player.skinAdj != "rubber") || player.skinDesc != "skin") {
            outputText("\n\nYour " + player.skinDesc + " tingles delightfully as it ", false);
            if (player.skinType == SkinType.PLAIN)
                outputText(" loses its blemishes, becoming flawless smooth skin.", false);
            if (player.skinType == SkinType.FUR)
                outputText(" falls out in clumps, revealing smooth skin underneath.", false);
            if (player.skinType == SkinType.SCALES)
                outputText(" begins dropping to the ground in a pile around you, revealing smooth skin underneath.", false);
            if (player.skinType > SkinType.SCALES)
                outputText(" shifts and changes into flawless smooth skin.", false);
            player.skinDesc = "skin";
            player.skinAdj = "smooth";
            if (player.skinTone == "rough gray")
                player.skinTone = "gray";
            player.skinType = SkinType.PLAIN;
        }
        // chance of hair change
        else {
            // If hair isn't rubbery/latex yet
            if (player.hairColor.indexOf("rubbery") == -1 && player.hairColor.indexOf("latex-textured") && player.hairLength != 0) {
                // if skin is already one...
                if (player.skinDesc == "skin" && player.skinAdj == "rubber") {
                    outputText("\n\nYour scalp tingles and your " + hairDescription(player) + " thickens, the strands merging into ", false);
                    outputText(" thick rubbery hair.", false);
                    player.hairColor = "rubbery " + player.hairColor;
                    dynStats("cor", 2);
                }
                if (player.skinDesc == "skin" && player.skinAdj == "latex") {
                    outputText("\n\nYour scalp tingles and your " + hairDescription(player) + " thickens, the strands merging into ", false);
                    outputText(" shiny latex hair.", false);
                    player.hairColor = "latex-textured " + player.hairColor;
                    dynStats("cor", 2);
                }
            }
        }
    }
    // Large
    if (large) {
        // Change skin to latex if smooth.
        if (player.skinDesc == "skin" && player.skinAdj == "smooth") {
            outputText("\n\nYour already flawless smooth skin begins to tingle as it changes again.  It becomes shinier as its texture changes subtly.  You gasp as you touch yourself and realize your skin has become ", false);
            if (rand(2) == 0) {
                player.skinDesc = "skin";
                player.skinAdj = "latex";
                outputText("a layer of pure latex.  ", false);
            }
            else {
                player.skinDesc = "skin";
                player.skinAdj = "rubber";
                outputText("a layer of sensitive rubber.  ", false);
            }
            flags[kFLAGS.PC_KNOWS_ABOUT_BLACK_EGGS] = 1;
            if (player.cor < 66)
                outputText("You feel like some kind of freak.", false);
            else
                outputText("You feel like some kind of sexy " + player.skinDesc + " love-doll.", false);
            dynStats("spe", -3, "sen", 8, "lus", 10, "cor", 2);
        }
        // Change skin to normal if not flawless!
        if ((player.skinAdj != "smooth" && player.skinAdj != "latex" && player.skinAdj != "rubber") || player.skinDesc != "skin") {
            outputText("\n\nYour " + player.skinDesc + " tingles delightfully as it ", false);
            if (player.skinType == SkinType.PLAIN)
                outputText(" loses its blemishes, becoming flawless smooth skin.", false);
            if (player.skinType == SkinType.FUR)
                outputText(" falls out in clumps, revealing smooth skin underneath.", false);
            if (player.skinType == SkinType.SCALES)
                outputText(" begins dropping to the ground in a pile around you, revealing smooth skin underneath.", false);
            if (player.skinType > SkinType.SCALES)
                outputText(" shifts and changes into flawless smooth skin.", false);
            player.skinDesc = "skin";
            player.skinAdj = "smooth";
            if (player.skinTone == "rough gray")
                player.skinTone = "gray";
            player.skinType = SkinType.PLAIN;
        }
        // chance of hair change
        else {
            // If hair isn't rubbery/latex yet
            if (player.hairColor.indexOf("rubbery") == -1 && player.hairColor.indexOf("latex-textured") && player.hairLength != 0) {
                // if skin is already one...
                if (player.skinAdj == "rubber" && player.skinDesc == "skin") {
                    outputText("\n\nYour scalp tingles and your " + hairDescription(player) + " thickens, the strands merging into ", false);
                    outputText(" thick rubbery hair.", false);
                    player.hairColor = "rubbery " + player.hairColor;
                    dynStats("cor", 2);
                }
                if (player.skinAdj == "latex" && player.skinDesc == "skin") {
                    outputText("\n\nYour scalp tingles and your " + hairDescription(player) + " thickens, the strands merging into ", false);
                    outputText(" shiny latex hair.", false);
                    player.hairColor = "latex-textured " + player.hairColor;
                    dynStats("cor", 2);
                }
            }
        }
    }
}
