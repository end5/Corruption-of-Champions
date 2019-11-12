export function minotaurBlood(player: Player): void {
    player.slimeFeed();
    // Changes done
    let changes: number = 0;
    // Change limit
    let changeLimit: number = 1;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(3) == 0)
        changeLimit++;
    if (rand(3) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    if (changeLimit == 1)
        changeLimit = 2;
    // Temporary storage
    let temp: number = 0;
    let temp2: number = 0;
    let temp3: number = 0;
    // Set up output
    outputText("You drink the bubbling red fluid, tasting the tangy iron after-taste.", true);
    // STATS
    // Strength h
    if (rand(3) == 0 && changes < changeLimit) {
        // weaker characters gain more
        if (player.str <= 50) {
            outputText("\n\nPainful aches ripple through your body, flooding you with pain as your muscles flex and bulge, growing much stronger and more well-defined.", false);
            // very weak players gain more
            if (player.str <= 20)
                dynStats("str", 3);
            else
                dynStats("str", 2);
        }
        // stronger characters gain less
        else {
            // small growth if over 75
            if (player.str >= 75)
                dynStats("str", .5);
            // faster from 50-75
            else
                dynStats("str", 1);
            outputText("\n\nYour muscles grow tighter, bulging outwards powerfully as you get even stronger!", false);
        }
        // Chance of speed drop
        if (rand(2) == 0 && player.str > 50) {
            outputText("\n\nYou begin to feel that the size of your muscles is starting to slow you down.", false);
            dynStats("spe", -1);
        }
        changes++;
    }
    // Toughness (chance of - sensitivity)
    if (rand(3) == 0 && changes < changeLimit) {
        // weaker characters gain more
        if (player.tou <= 50) {
            outputText("\n\nYour hide... skin... whatever... you can feel it getting tougher as it thickens perceptibly.", false);
            // very weak players gain more
            if (player.tou <= 20)
                dynStats("tou", 3);
            else
                dynStats("tou", 2);
        }
        // stronger characters gain less
        else {
            // small growth if over 75
            if (player.tou >= 75)
                dynStats("tou", .5);
            // faster from 50-75
            else
                dynStats("tou", 1);
            outputText("\n\nYour tough hide grows slightly thicker.", false);
        }
        // chance of less sensitivity
        if (rand(2) == 0 && player.sens > 10) {
            if (player.tou > 75) {
                outputText("\n\nIt becomes much harder to feel anything through your leathery skin.", false);
                dynStats("sen", -3);
            }
            if (player.tou <= 75 && player.tou > 50) {
                outputText("\n\nThe level of sensation from your skin diminishes noticeably.", false);
                dynStats("sen", -2);
            }
            if (player.tou <= 50) {
                outputText("\n\nYour sense of touch diminishes due to your tougher hide.", false);
                dynStats("sen", -3);
            }
        }
        changes++;
    }
    // SEXUAL
    // Boosts ball size MORE than equinum :D:D:D:D:D:D:
    if (changes < changeLimit && rand(2) == 0 && player.ballSize <= 5 && player.cocks.horseCocks() > 0) {
        // Chance of ball growth if not 3" yet
        if (player.balls == 0) {
            player.balls = 2;
            player.ballSize = 1;
            outputText("\n\nA nauseating pressure forms just under the base of your maleness.  With agonizing pain the flesh bulges and distends, pushing out a rounded lump of flesh that you recognize as a testicle!  A moment later relief overwhelms you as the second drops into your newly formed sack.", false);
            dynStats("lib", 2, "lus", 5);
        }
        else {
            player.ballSize++;
            if (player.ballSize <= 2)
                outputText("\n\nA flash of warmth passes through you and a sudden weight develops in your groin.  You pause to examine the changes and your roving fingers discover your " + simpleBallsDescript(player) + " have grown larger than a human's.", false);
            if (player.ballSize > 2)
                outputText("\n\nA sudden onset of heat envelops your groin, focusing on your " + sackDescript(player) + ".  Walking becomes difficult as you discover your " + simpleBallsDescript(player) + " have enlarged again.", false);
            dynStats("lib", 1, "lus", 3);
        }
        changes++;
    }
    // -Remove feather-arms (copy this for goblin ale, mino blood, equinum, canine pepps, demon items)
    if (changes < changeLimit && player.armType == ArmType.HARPY && rand(4) == 0) {
        outputText("\n\nYou scratch at your biceps absentmindedly, but no matter how much you scratch, it isn't getting rid of the itch.  Glancing down in irritation, you discover that your feathery arms are shedding their feathery coating.  The wing-like shape your arms once had is gone in a matter of moments, leaving " + player.skinDesc + " behind.", false);
        player.armType = ArmType.HUMAN;
        changes++;
    }
    // -Remove chitin-arms (copy this for goblin ale, mino blood, equinum, canine pepps, demon items)
    if (changes < changeLimit && player.armType == ArmType.SPIDER && rand(4) == 0) {
        outputText("\n\nYou scratch at your biceps absentmindedly, but no matter how much you scratch, it isn't getting rid of the itch.  Glancing down in irritation, you discover that your arms' chitinous covering is flaking away.  The glossy black coating is soon gone, leaving " + player.skinDesc + " behind.", false);
        player.armType = ArmType.HUMAN;
        changes++;
    }
    // +hooves
    if (player.lowerBody != LowerBodyType.HOOFED && player.lowerBody != LowerBodyType.CENTAUR) {
        if (changes < changeLimit && rand(3) == 0) {
            changes++;
            if (player.lowerBody == LowerBodyType.HUMAN)
                outputText("\n\nYou stagger as your feet change, curling up into painful angry lumps of flesh.  They get tighter and tighter, harder and harder, until at last they solidify into hooves!", false);
            if (player.lowerBody == LowerBodyType.DOG)
                outputText("\n\nYou stagger as your paws change, curling up into painful angry lumps of flesh.  They get tighter and tighter, harder and harder, until at last they solidify into hooves!", false);
            if (player.lowerBody == LowerBodyType.NAGA)
                outputText("\n\nYou collapse as your sinuous snake-tail tears in half, shifting into legs.  The pain is immense, particularly in your new feet as they curl inward and transform into hooves!", false);
            // Catch-all
            if (player.lowerBody > LowerBodyType.NAGA)
                outputText("\n\nYou stagger as your " + feet(player) + " change, curling up into painful angry lumps of flesh.  They get tighter and tighter, harder and harder, until at last they solidify into hooves!", false);
            if (player.skinType != SkinType.FUR)
                outputText("  A fine coat of fur grows out below your waist, itching briefly as it fills in.");
            outputText("<b>  You now have hooves in place of your feet!</b>", false);
            player.lowerBody = LowerBodyType.HOOFED;
            dynStats("spe", 1);
            changes++;
        }
    }
    if (!flags[kFLAGS.HYPER_HAPPY]) {
        // Kills vagina size (and eventually the whole vagina)
        if (player.vaginas.length > 0) {
            if (player.vaginas[0].vaginalLooseness > VaginaLooseness.TIGHT) {
                // tighten that bitch up!
                outputText("\n\nYour " + vaginaDescript(player, 0) + " clenches up painfully as it tightens up, becoming smaller and tighter.", false);
                player.vaginas[0].vaginalLooseness--;
            }
            else {
                outputText("\n\nA tightness in your groin is the only warning you get before your <b>" + vaginaDescript(player, 0) + " disappears forever</b>!", false);
                // Goodbye womanhood!
                player.vaginas.removeVagina(0, 1);
                if (player.cocks.length == 0) {
                    outputText("  Strangely, your clit seems to have resisted the change, and is growing larger by the moment... shifting into the shape of a small ribbed minotaur-like penis!  <b>You now have a horse-cock!</b>", false);
                    player.cocks.createCock();
                    player.cocks[0].cockLength = player.clitLength + 2;
                    player.cocks[0].cockThickness = 1;
                    player.cocks[0].cockType = CockTypesEnum.HORSE;
                    player.clitLength = .25;
                }
                player.genderCheck();
            }
            changes++;
        }
        // -Remove extra breast rows
        if (changes < changeLimit && player.breastRows.length > 1 && rand(3) == 0) {
            changes++;
            outputText("\n\nYou stumble back when your center of balance shifts, and though you adjust before you can fall over, you're left to watch in awe as your bottom-most " + breastDescript(player, player.breastRows.length - 1) + " shrink down, disappearing completely into your ", false);
            if (player.breastRows.length >= 3)
                outputText("abdomen", false);
            else
                outputText("chest", false);
            outputText(". The " + nippleDescription(player, player.breastRows.length - 1) + "s even fade until nothing but ", false);
            if (player.skinType == SkinType.FUR)
                outputText(player.hairColor + " " + player.skinDesc, false);
            else
                outputText(player.skinTone + " " + player.skinDesc, false);
            outputText(" remains. <b>You've lost a row of breasts!</b>", false);
            dynStats("sen", -5);
            player.breastRows.removeBreastRow(player.breastRows.length - 1, 1);
        }
        // Shrink boobages till they are normal
        else if (rand(2) == 0 && changes < changeLimit && player.breastRows.length > 0) {
            // Single row
            if (player.breastRows.length == 1) {
                // Shrink if bigger than B cups
                if (player.breastRows[0].breastRating >= 1) {
                    temp = 1;
                    player.breastRows[0].breastRating--;
                    // Shrink again if huuuuge
                    if (player.breastRows[0].breastRating > 8) {
                        temp++;
                        player.breastRows[0].breastRating--;
                    }
                    // Talk about shrinkage
                    if (temp == 1)
                        outputText("\n\nYou feel a weight lifted from you, and realize your " + breastDescript(game.player, 0) + " have shrunk to " + breastCupOfRow(player, 0) + "s.", false);
                    if (temp == 2)
                        outputText("\n\nYou feel significantly lighter.  Looking down, you realize your breasts are MUCH smaller, down to " + breastCupOfRow(player, 0) + "s.", false);
                    changes++;
                }
            }
            // multiple
            else {
                // temp2 = amount changed
                // temp3 = counter
                temp = 0;
                temp2 = 0;
                temp3 = 0;
                if (player.breastRows.biggestTitSize() >= 1)
                    outputText("\n", false);
                while (temp3 < player.breastRows.length) {
                    if (player.breastRows[temp3].breastRating >= 1) {
                        player.breastRows[temp3].breastRating--;
                        temp2++;
                        outputText("\n", false);
                        // If this isn't the first change...
                        if (temp2 > 1)
                            outputText("...and y", false);
                        else
                            outputText("Y", false);
                        outputText("our " + breastDescript(player, temp3) + " shrink, dropping to " + breastCupOfRow(player, temp3) + "s.", false);
                    }
                    temp3++;
                }
                if (temp2 == 2)
                    outputText("\nYou feel so much lighter after the change.", false);
                if (temp2 == 3)
                    outputText("\nWithout the extra weight you feel particularly limber.", false);
                if (temp2 >= 4)
                    outputText("\nIt feels as if the weight of the world has been lifted from your shoulders, or in this case, your chest.", false);
                if (temp2 > 0)
                    changes++;
            }
        }
    }
    // Boosts cock size up to 36"x5".
    if (changes < changeLimit && rand(2) == 0 && player.cocks.length > 0) {
        let selectedCock: number = -1;
        for (const i = 0; i < player.cocks.length; i++) {
            if (player.cocks[i].cockType == CockTypesEnum.HORSE && (player.cocks[i].cockLength < 36 || player.cocks[i].cockThickness < 5)) {
                selectedCock = i;
                break;
            }
        }
        // Length first
        if (selectedCock != -1) {
            // Thickness too if small enough
            if (player.cocks[selectedCock].cockThickness < 5) {
                // Increase by 2 + rand(8), and store the actual amount in temp
                temp = player.increaseCock(selectedCock, 2 + rand(8));
                temp += player.cocks[selectedCock].thickenCock(1);
                // Comment on length changes
                if (temp > 6)
                    outputText("\n\nGasping in sudden pleasure, your " + cockDescript(player, selectedCock) + " surges free of its sheath, emerging with over half a foot of new dick-flesh.", false);
                if (temp <= 6 && temp >= 3)
                    outputText("\n\nYou pant in delight as a few inches of " + cockDescript(player, selectedCock) + " pop free from your sheath, the thick new horse-flesh still slick and sensitive.", false);
                if (temp < 3)
                    outputText("\n\nGroaning softly, you feel a pleasurable change in your groin.  Looking down, you see [oneCock] grow slightly longer.", false);
                // Add a blurb about thickness...
                outputText("  To your delight and surprise, you discover it has grown slightly thicker as well!", false);
            }
            // Just length...
            else {
                // Increase by 2 + rand(8), and store the actual amount in temp
                temp = player.increaseCock(selectedCock, 2 + rand(8));
                // Comment on length changes
                if (temp > 6)
                    outputText("\n\nGasping in sudden pleasure, your " + cockDescript(player, selectedCock) + " surges free of its sheath, emerging with over half a foot of new dick-flesh.", false);
                if (temp <= 6 && temp >= 3)
                    outputText("\n\nYou pant in delight as a few inches of " + cockDescript(player, selectedCock) + " pop free from your sheath, the thick new horse-flesh still slick and sensitive.", false);
                if (temp < 3)
                    outputText("\n\nGroaning softly, you feel a pleasurable change in your groin.  Looking down, you see [oneCock] grow slightly longer.", false);
            }
            changes++;
        }
    }
    // Morph dick to horsediiiiick
    if (player.cocks.length > 0 && rand(2) == 0 && changes < changeLimit) {
        let selectedCockValue: number = -1; // Changed as selectedCock and i caused duplicate var warnings
        for (const indexI = 0; indexI < player.cocks.length; indexI++) {
            if (player.cocks[indexI].cockType != CockTypesEnum.HORSE) {
                selectedCockValue = indexI;
                break;
            }
        }
        if (selectedCockValue != -1) {
            // Text for humandicks or others
            if (player.cocks[selectedCockValue].cockType == CockTypesEnum.HUMAN || player.cocks[selectedCockValue].cockType.Index > 2)
                outputText("\n\nYour " + cockDescript(player, selectedCockValue) + " begins to feel strange... you pull down your pants to take a look and see it darkening as you feel a tightness near the base where your skin seems to be bunching up.  A sheath begins forming around your cock's base, tightening and pulling your cock inside its depths.  A hot feeling envelops your member as it suddenly grows into a horse penis, dwarfing its old size.  The skin is mottled brown and black and feels more sensitive than normal.  Your hands are irresistibly drawn to it, and you jerk yourself off, splattering cum with intense force.", false);
            // Text for dogdicks
            if (player.cocks[selectedCockValue].cockType == CockTypesEnum.DOG)
                outputText("\n\nYour " + Appearance.cockNoun(CockTypesEnum.DOG) + " begins to feel odd...  You pull down your clothes to take a look and see it darkening.  You feel a growing tightness in the tip of your " + Appearance.cockNoun(CockTypesEnum.DOG) + " as it flattens, flaring outwards.  Your cock pushes out of your sheath, inch after inch of animal-flesh growing beyond its traditional size.  You notice your knot vanishing, the extra flesh pushing more fresh horsecock out from your sheath.  <b>Your hands are drawn to the strange new " + Appearance.cockNoun(CockTypesEnum.HORSE) + "</b>, and you jerk yourself off, splattering thick ropes of cum with intense force.", false);
            player.cocks[selectedCockValue].cockType = CockTypesEnum.HORSE;
            player.increaseCock(selectedCockValue, 4);
            dynStats("lib", 5, "sen", 4, "lus", 35);
            outputText("<b>  You now have a");
            if (player.cocks.horseCocks() > 1)
                outputText("nother");
            outputText(" horse-penis.</b>", false);
            changes++;
        }
    }
    // Males go into rut
    if (rand(4) == 0) {
        goIntoRut(player, true);
    }
    // Anti-masturbation status
    if (rand(4) == 0 && changes < changeLimit && player.effects.findByType(StatusAffects.Dysfunction) < 0) {
        if (player.cocks.length > 0)
            outputText("\n\nYour " + cockDescript(game.player, 0) + " tingles abruptly, then stops.  Worried, you reach down to check it, only to discover that it feels... numb.  It will be very hard to masturbate like this.", false);
        else if (player.vaginas.length > 0)
            outputText("\n\nYour " + vaginaDescript(player, 0) + " tingles abruptly, then stops.  Worried, you reach down to check it, only to discover that it feels... numb.  It will be very hard to masturbate like this.", false);
        if (player.cocks.length > 0 || player.vaginas.length > 0) {
            player.effects.create(StatusAffects.Dysfunction, 96, 0, 0, 0);
            changes++;
        }
    }
    // Appearance shit:
    // Tail, Ears, Hooves, Horns, Height (no prereq), Face
    // +height up to 9 foot
    if (changes < changeLimit && rand(1.7) == 0 && player.tallness < 108) {
        temp = rand(5) + 3;
        // Slow rate of growth near ceiling
        if (player.tallness > 90)
            temp = Math.floor(temp / 2);
        // Never 0
        if (temp == 0)
            temp = 1;
        // Flavor texts.  Flavored like 1950's cigarettes. Yum.
        if (temp < 5)
            outputText("\n\nYou shift uncomfortably as you realize you feel off balance.  Gazing down, you realize you have grown SLIGHTLY taller.", false);
        if (temp >= 5 && temp < 7)
            outputText("\n\nYou feel dizzy and slightly off, but quickly realize it's due to a sudden increase in height.", false);
        if (temp == 7)
            outputText("\n\nStaggering forwards, you clutch at your head dizzily.  You spend a moment getting your balance, and stand up, feeling noticeably taller.", false);
        player.tallness += temp;
        changes++;
    }
    // Face change, requires Ears + Height + Hooves
    if (player.earType == EarType.COW && player.lowerBody == LowerBodyType.HOOFED && player.tallness >= 90
        && changes < changeLimit && rand(3) == 0) {
        if (player.faceType != FaceType.COW_MINOTAUR) {
            outputText("\n\nBones shift and twist painfully as your visage twists and morphs to resemble that of the beast whose blood you now drink.  <b>You now have a minotaur-like face.</b>", false);
            changes++;
            player.faceType = FaceType.COW_MINOTAUR;
        }
    }
    // +mino horns require ears/tail
    if (changes < changeLimit && rand(3) == 0 && player.earType == EarType.COW && player.tailType == TailType.COW) {
        temp = 1;
        // New horns or expanding mino horns
        if (player.hornType == HornType.COW_MINOTAUR || player.hornType == HornType.NONE) {
            // Get bigger if player has horns
            if (player.hornType == HornType.COW_MINOTAUR) {
                // Fems horns don't get bigger.
                if (player.vaginas.length > 0) {
                    if (player.horns > 4) {
                        outputText("\n\nYou feel a pressure in your head around your horns, but they don't grow any larger.  ", false);
                        outputText("Your headache clears as lust washes through you unnaturally.  You feel as if you haven't cum in months.", false);
                        player.hoursSinceCum += 200;
                        dynStats("lus", 20);
                    }
                    else {
                        outputText("\n\nYour small horns get a bit bigger, stopping as medium sized nubs.", false);
                        player.horns += 3;
                    }
                    changes++;
                }
                // Males horns get 'uge.
                else {
                    temp = 1 + rand(3);
                    player.horns += temp;
                    if (temp == 0)
                        changes--;
                    if (temp == 1)
                        outputText("\n\nAn aching pressure builds in your temples as you feel your horns push another inch of length from your skull.  ", false);
                    if (temp == 2)
                        outputText("\n\nA powerful headache momentarily doubles you over.  With painful slowness, you feel your horns push another two inches of length out from your brow, gradually thickening as they grow.  ", false);
                    if (temp == 3)
                        outputText("\n\nAgony overwhelms you as a headache of terrifying intensity sweeps through your skull.  You squeeze your eyes shut from the pain, but it does little to help.  The torture intensifies before finally diminishing as you feel an inch or two of new horn force its way out of your forehead.  The headache remains despite this, and desperate for relief, you grab hold of your horns and tug, pulling another inch of new horn free.  At last the pain fades, leaving you with significantly enhanced head-spikes.  ", false);
                    if (player.horns < 3)
                        outputText("They are the size of tiny nubs.", false);
                    if (player.horns >= 3 && player.horns < 6)
                        outputText("They are similar to what you would see on a young bull.", false);
                    if (player.horns >= 6 && player.horns < 12)
                        outputText("They look like the horns on a grown bull, big enough and dangerous enough to do some damage.", false);
                    if (player.horns >= 12 && player.horns < 20)
                        outputText("They are large and wicked looking.", false);
                    if (player.horns >= 20)
                        outputText("They are huge, heavy, and tipped with dangerous points.", false);
                    // boys get a cum refill sometimes
                    if (rand(2) == 0 && changes < changeLimit) {
                        outputText("  Your headache clears as lust washes through you unnaturally.  You feel as if you haven't cum in months.", false);
                        player.hoursSinceCum += 200;
                        dynStats("lus", 20);
                    }
                    changes++;
                }
            }
            // If no horns yet..
            else {
                outputText("\n\nWith painful pressure, the skin on your forehead splits around two tiny nub-like horns, similar to those you would see on the cattle back in your homeland.", false);
                player.hornType = HornType.COW_MINOTAUR;
                player.horns = 2;
                changes++;
            }
        }
        // Not mino horns, change to cow-horns
        if (player.hornType == HornType.DEMON || player.hornType > HornType.COW_MINOTAUR) {
            outputText("\n\nYour horns vibrate and shift as if made of clay, reforming into two horns with a bovine-like shape.", false);
            player.hornType = HornType.COW_MINOTAUR;
            changes++;
        }
    }
    // +cow ears	- requires tail
    if (player.earType != EarType.COW && changes < changeLimit && player.tailType == TailType.COW && rand(2) == 0) {
        outputText("\n\nYou feel your ears tug on your scalp as they twist shape, becoming oblong and cow-like.  <b>You now have cow ears.</b>", false);
        player.earType = EarType.COW;
        changes++;
    }
    // +cow tail
    if (changes < changeLimit && rand(2) == 0 && player.tailType != TailType.COW) {
        if (player.tailType == TailType.NONE)
            outputText("\n\nYou feel the flesh above your " + buttDescription(player) + " knotting and growing.  It twists and writhes around itself before flopping straight down, now shaped into a distinctly bovine form.  You have a <b>cow tail</b>.", false);
        else {
            if (player.tailType < TailType.SPIDER_ADBOMEN || player.tailType > TailType.BEE_ABDOMEN) {
                outputText("\n\nYour tail bunches uncomfortably, twisting and writhing around itself before flopping straight down, now shaped into a distinctly bovine form.  You have a <b>cow tail</b>.", false);
            }
            // insect
            if (player.tailType == TailType.SPIDER_ADBOMEN || player.tailType == TailType.BEE_ABDOMEN) {
                outputText("\n\nYour insect-like abdomen tingles pleasantly as it begins shrinking and softening, chitin morphing and reshaping until it looks exactly like a <b>cow tail</b>.", false);
            }
        }
        player.tailType = TailType.COW;
        changes++;
    }
    if (rand(4) == 0 && player.gills && changes < changeLimit) {
        outputText("\n\nYour chest itches, and as you reach up to scratch it, you realize your gills have withdrawn into your skin.", false);
        player.gills = false;
        changes++;
    }
    if (changes < changeLimit && rand(4) == 0 && ((player.ass.analWetness > 0 && player.perks.findByType(PerkLib.MaraesGiftButtslut) < 0) || player.ass.analWetness > 1)) {
        outputText("\n\nYou feel a tightening up in your colon and your [asshole] sucks into itself.  You feel sharp pain at first but that thankfully fades.  Your ass seems to have dried and tightened up.");
        player.ass.analWetness--;
        if (player.ass.analLooseness > 1)
            player.ass.analLooseness--;
        changes++;
    }
    // Give you that mino build!
    if (rand(4) == 0)
        outputText(modFem(player, 5, 10), false);
    if (rand(4) == 0)
        outputText(modTone(player, 85, 3), false);
    if (rand(4) == 0)
        outputText(modThickness(player, 70, 4), false);
    // Default
    if (changes == 0) {
        outputText("\n\nMinotaur-like vitality surges through your body, invigorating and arousing you!\n", false);
        if (player.balls > 0) {
            outputText("Your balls feel as if they've grown heavier with the weight of more sperm.\n", false);
            player.hoursSinceCum += 200;
        }
        HPChange(50, true);
        dynStats("lus", 50);
    }
}
