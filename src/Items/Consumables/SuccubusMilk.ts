export function succubiMilk(tainted: boolean, player: Player): void {
    player.slimeFeed();
    let temp2: number = 0;
    let temp3: number = 0;
    let rando: number = Math.random() * 100;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        rando += 10;
    if (rando >= 90 && !tainted)
        rando -= 10;
    if (player.cor < 35)
        outputText("You wonder why in the gods' names you would drink such a thing, but you have to admit, it is the best thing you have ever tasted.", true);
    if (player.cor >= 35 && player.cor < 70) {
        outputText("You savor the incredible flavor as you greedily gulp it down.", true);
        if (player.gender == 2 || player.gender == 3) {
            outputText("  The taste alone makes your " + vaginaDescript(player, 0) + " feel ", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_DRY)
                outputText("tingly.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_NORMAL)
                outputText("wet.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_WET)
                outputText("sloppy and wet.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_SLICK)
                outputText("sopping and juicy.", false);
            if (player.vaginas[0].vaginalWetness >= VAGINA_WETNESS_DROOLING)
                outputText("dripping wet.", false);
        }
        else if (player.cocks.length > 0)
            outputText("  You feel a building arousal, but it doesn't affect your cock.", false);
    }
    if (player.cor >= 70) {
        outputText("You pour the milk down your throat, chugging the stuff as fast as you can.  You want more.", true);
        if (player.gender == 2 || player.gender == 3) {
            outputText("  Your " + vaginaDescript(player, 0), false);
            if (player.vaginas.length > 1)
                outputText(" quiver in orgasm, ", false);
            if (player.vaginas.length == 1)
                outputText(" quivers in orgasm, ", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_DRY)
                outputText("becoming slightly sticky.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_NORMAL)
                outputText("leaving your undergarments sticky.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_WET)
                outputText("wet with girlcum.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_SLICK)
                outputText("staining your undergarments with cum.", false);
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_DROOLING)
                outputText("leaving cunt-juice trickling down your leg.", false);
            if (player.vaginas[0].vaginalWetness >= VAGINA_WETNESS_SLAVERING)
                outputText("spraying your undergarments liberally with slick girl-cum.", false);
            player.orgasm();
        }
        else if (player.gender != 0) {
            if (player.cocks.length == 1)
                outputText("  You feel a strange sexual pleasure, but your " + multiCockDescript(game.player) + " remains unaffected.", false);
            else
                outputText("  You feel a strange sexual pleasure, but your " + multiCockDescript(game.player) + " remain unaffected.", false);
        }
    }
    if (tainted)
        dynStats("spe", 1, "lus", 3, "cor", 1);
    else
        dynStats("spe", 1, "lus", 3);
    // Breast growth (maybe cock reduction!)
    if (rando <= 75) {
        // Temp stores the level of growth...
        temp = 1 + rand(3);
        if (player.breastRows.length > 0) {
            if (player.breastRows[0].breastRating < 2 && rand(3) == 0)
                temp++;
            if (player.breastRows[0].breastRating < 5 && rand(4) == 0)
                temp++;
            if (player.breastRows[0].breastRating < 6 && rand(5) == 0)
                temp++;
        }
        outputText("\n\n", false);
        player.growTits(temp, player.breastRows.length, true, 3);
        if (player.breastRows.length == 0) {
            outputText("A perfect pair of B cup breasts, complete with tiny nipples, form on your chest.", false);
            player.breasts.createBreastRow();
            player.breastRows[0].breasts = 2;
            player.breastRows[0].breastsPerRow = 2;
            player.breastRows[0].nipplesPerBreast = 1;
            player.breastRows[0].breastRating = 2;
            outputText("\n", false);
        }
        if (!flags[kFLAGS.HYPER_HAPPY]) {
            // Shrink cocks if you have them.
            if (player.cocks.length > 0) {
                temp = 0;
                temp2 = player.cocks.length;
                temp3 = 0;
                // Find biggest cock
                while (temp2 > 0) {
                    temp2--;
                    if (player.cocks[temp].cockLength <= player.cocks[temp2].cockLength)
                        temp = temp2;
                }
                // Shrink said cock
                if (player.cocks[temp].cockLength < 6 && player.cocks[temp].cockLength >= 2.9) {
                    player.cocks[temp].cockLength -= .5;
                    temp3 -= .5;
                    if (player.cocks[temp].cockThickness * 6 > player.cocks[temp].cockLength)
                        player.cocks[temp].cockThickness -= .2;
                    if (player.cocks[temp].cockThickness * 8 > player.cocks[temp].cockLength)
                        player.cocks[temp].cockThickness -= .2;
                    if (player.cocks[temp].cockThickness < .5)
                        player.cocks[temp].cockThickness = .5;
                }
                temp3 += player.increaseCock(temp, (rand(3) + 1) * -1);
                outputText("\n\n", false);
                player.lengthChange(temp3, 1);
                if (player.cocks[temp].cockLength < 2) {
                    outputText("  ", false);
                    player.killCocks(1);
                }
            }
        }
    }
    if (player.vaginas.length == 0 && (rand(3) == 0 || (rando > 75 && rando < 90))) {
        player.vaginas.createVagina();
        player.vaginas[0].vaginalLooseness = VAGINA_LOOSENESS_TIGHT;
        player.vaginas[0].vaginalWetness = VAGINA_WETNESS_NORMAL;
        player.vaginas[0].virgin = true;
        player.clitLength = .25;
        if (player.fertility <= 5)
            player.fertility = 6;
        outputText("\n\nAn itching starts in your crotch and spreads vertically.  You reach down and discover an opening.  You have grown a <b>new " + vaginaDescript(player, 0) + "</b>!", false);
    }
    // Increase pussy wetness or grow one!!
    else if (rando > 75 && rando < 90) {
        // Shrink cawk
        if (player.cocks.length > 0 && !flags[kFLAGS.HYPER_HAPPY]) {
            outputText("\n\n", false);
            temp = 0;
            temp2 = player.cocks.length;
            // Find biggest cock
            while (temp2 > 0) {
                temp2--;
                if (player.cocks[temp].cockLength <= player.cocks[temp2].cockLength)
                    temp = temp2;
            }
            // Shrink said cock
            if (player.cocks[temp].cockLength < 6 && player.cocks[temp].cockLength >= 2.9) {
                player.cocks[temp].cockLength -= .5;
            }
            temp3 = player.increaseCock(temp, -1 * (rand(3) + 1));
            player.lengthChange(temp3, 1);
            if (player.cocks[temp].cockLength < 3) {
                outputText("  ", false);
                player.killCocks(1);
            }
        }
        if (player.vaginas.length > 0) {
            outputText("\n\n", false);
            // 0 = dry, 1 = wet, 2 = extra wet, 3 = always slick, 4 = drools constantly, 5 = female ejaculator
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_SLAVERING) {
                if (player.vaginas.length == 1)
                    outputText("Your " + vaginaDescript(player, 0) + " gushes fluids down your leg as you spontaneously orgasm.", false);
                else
                    outputText("Your " + vaginaDescript(player, 0) + "s gush fluids down your legs as you spontaneously orgasm, leaving a thick puddle of pussy-juice on the ground.  It is rapidly absorbed by the earth.", false);
                player.orgasm();
                if (tainted)
                    dynStats("cor", 1);
            }
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_DROOLING) {
                if (player.vaginas.length == 1)
                    outputText("Your pussy feels hot and juicy, aroused and tender.  You cannot resist as your hands dive into your " + vaginaDescript(player, 0) + ".  You quickly orgasm, squirting fluids everywhere.  <b>You are now a squirter</b>.", false);
                if (player.vaginas.length > 1)
                    outputText("Your pussies feel hot and juicy, aroused and tender.  You cannot resist plunging your hands inside your " + vaginaDescript(player, 0) + "s.  You quiver around your fingers, squirting copious fluids over yourself and the ground.  The fluids quickly disappear into the dirt.", false);
                player.orgasm();
                if (tainted)
                    dynStats("cor", 1);
            }
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_SLICK) {
                if (player.vaginas.length == 1)
                    outputText("You feel a sudden trickle of fluid down your leg.  You smell it and realize it's your pussy-juice.  Your " + vaginaDescript(player, 0) + " now drools lubricant constantly down your leg.", false);
                if (player.vaginas.length > 1)
                    outputText("You feel sudden trickles of fluids down your leg.  You smell the stuff and realize it's your pussies-juices.  They seem to drool lubricant constantly down your legs.", false);
            }
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_WET) {
                outputText("You flush in sexual arousal as you realize how moist your cunt-lips have become.  Once you've calmed down a bit you realize they're still slick and ready to fuck, and always will be.", false);
            }
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_NORMAL) {
                if (player.vaginas.length == 1)
                    outputText("A feeling of intense arousal passes through you, causing you to masturbate furiously.  You realize afterwards that your " + vaginaDescript(player, 0) + " felt much wetter than normal.", false);
                else
                    outputText("A feeling of intense arousal passes through you, causing you to masturbate furiously.  You realize afterwards that your " + vaginaDescript(player, 0) + " were much wetter than normal.", false);
            }
            if (player.vaginas[0].vaginalWetness == VAGINA_WETNESS_DRY) {
                outputText("You feel a tingling in your crotch, but cannot identify it.", false);
            }
            temp = player.vaginas.length;
            while (temp > 0) {
                temp--;
                if (player.vaginas[0].vaginalWetness < VAGINA_WETNESS_SLAVERING)
                    player.vaginas[temp].vaginalWetness++;
            }
        }
    }
    if (rando >= 90) {
        if (player.skinTone == "blue" || player.skinTone == "purple" || player.skinTone == "indigo" || player.skinTone == "shiny black") {
            if (player.vaginas.length > 0) {
                outputText("\n\nYour heart begins beating harder and harder as heat floods to your groin.  You feel your clit peeking out from under its hood, growing larger and longer as it takes in more and more blood.", false);
                if (player.clitLength > 3 && player.perks.findByType(PerkLib.BigClit) < 0)
                    outputText("  After some time it shrinks, returning to its normal aroused size.  You guess it can't get any bigger.", false);
                if (player.clitLength > 5 && player.perks.findByType(PerkLib.BigClit) >= 0)
                    outputText("  Eventually it shrinks back down to its normal (but still HUGE) size.  You guess it can't get any bigger.", false);
                if (((player.perks.findByType(PerkLib.BigClit) >= 0) && player.clitLength < 6)
                    || player.clitLength < 3) {
                    temp += 2;
                    player.clitLength += (rand(4) + 2) / 10;
                }
                dynStats("sen", 3, "lus", 8);
            }
            else {
                player.vaginas.createVagina();
                player.vaginas[0].vaginalLooseness = VAGINA_LOOSENESS_TIGHT;
                player.vaginas[0].vaginalWetness = VAGINA_WETNESS_NORMAL;
                player.vaginas[0].virgin = true;
                player.clitLength = .25;
                outputText("\n\nAn itching starts in your crotch and spreads vertically.  You reach down and discover an opening.  You have grown a <b>new " + vaginaDescript(player, 0) + "</b>!", false);
            }
        }
        else {
            temp = rand(10);
            if (temp == 0)
                player.skinTone = "shiny black";
            if (temp == 1 || temp == 2)
                player.skinTone = "indigo";
            if (temp == 3 || temp == 4 || temp == 5)
                player.skinTone = "purple";
            if (temp > 5)
                player.skinTone = "blue";
            outputText("\n\nA tingling sensation runs across your skin in waves, growing stronger as <b>your skin's tone slowly shifts, darkening to become " + player.skinTone + " in color.</b>", false);
            if (tainted)
                dynStats("cor", 1);
            else
                dynStats("cor", 0);
        }
    }
    // Demonic changes - higher chance with higher corruption.
    if (rand(40) + player.cor / 3 > 35 && tainted)
        demonChanges(player);
    if (tainted) {
        outputText(modFem(player, 100, 2), false);
        if (rand(3) == 0)
            outputText(modTone(player, 15, 2), false);
    }
    else {
        outputText(modFem(player, 90, 1), false);
        if (rand(3) == 0)
            outputText(modTone(player, 20, 2), false);
    }
    player.genderCheck();
}
