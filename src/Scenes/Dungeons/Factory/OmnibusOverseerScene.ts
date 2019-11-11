function omnibusStartCombat(): void {
    spriteSelect(16);
    clearOutput();
    outputText("You strike a combat pose and prepare your " + player.weaponName + ".  She smiles and saunters around the desk, letting something bulbous and fleshy drop free from between her nether-lips.  You watch in shock as it hardens into a dick, growing right from where her clit should be.\n\nShe taunts, \"<i>Like what you see cow?  I'll be sure to visit you in the pens.</i>'\"");
    player.effects.create(StatusAffects.FactoryOmnibusDefeated, 0, 0, 0, 0); // This won't matter if you lose to her
    startCombat(new OmnibusOverseer(), true);
}

function omnibusAcceptOffer(): void {
    spriteSelect(16);
    clearOutput();
    outputText("She smiles, sauntering closer.  Your eyes widen in shock as her vulva are spread apart by something inside her.   A slick and growing cock emerges, sprouting from where her clit should be located.  She's a hermaphrodite.  You don't have time to contemplate the implications, as the demoness used your temporary distraction to sink a needle into your neck.  You sigh and black out almost instantaneously, letting her catch you with her strong arms and soft bosom.");
    doNext(factoryFinisher);
}

export function omnibusVictoryEvent(): void {
    clearOutput();
    if (monster.lust > 99) {
        outputText("The omnibus trembles where she stands, her proud demonic dick twitching and pulsating as her desires totally overwhelm her.  The tainted nodules covering the purplish hermaphrodite's member ripple and swell from the base towards the tip, culminating with an explosive eruption of sticky, white demon-seed.  She moans with shame and pleasure, pumping larger and larger volumes of cum onto her office's floor.  She drops to her knees, too exhausted and ashamed by her premature orgasm to continue fighting.\n\n");
        outputText("\"<i>Ooooh no.  You can't tell the other demons I got off so easily!  I'll never live it down,</i>\" she cries, \"<i>You've beaten me, please if you let me go and promise not to tell the other demons I'll use my magic to give you a gift!  My magic is powerful, I can do nearly ANYTHING with it when the subject desires the changes.</i>\"\n\n");
    }
    else {
        outputText("The omnibus trembles and drops to her knees, utterly defeated.\n\n");
        outputText("\"<i>Please, if you'll let me go I could use my magics to give you nearly anything you want!  Just please don't tell the other demons what happened here, I'd never live it down,</i>\" she begs.\n\n");
    }
    outputText("What do you do?  You could use her boon increase the size of your endowments or maybe regain some of your lost humanity!  Or you could play it safe and turn down her offer.  Although then you'd have to decide to let her go or kill her.");
    menu();
    addButton(0, "GrowBreasts", omnibusVictoryGrowBreasts);
    addButton(1, "Grow Dick", omnibusVictoryGrowDick);
    addButton(2, "Normal-Face", omnibusVictoryNormalFace);
    addButton(3, "Normal-Chest", omnibusVictoryNormalChest);
    addButton(4, "Normal-Groin", omnibusVictoryNormalGroin);
    addButton(5, "Normal-Legs", omnibusVictoryNormalLegs);
    addButton(8, "No (Let go)", omnibusVictoryLetGo);
    addButton(9, "No (Kill Her)", omnibusVictoryKillHer);
}

function omnibusVictoryGrowBreasts(): void {
    spriteSelect(16);
    clearOutput();
    // Grow if none
    if (player.breastRows.length == 0) {
        outputText("<b>Your chest swells out, forming rounded C-cup globes, capped with tiny erect nipples!</b>");
        player.breastRows.createBreastRow();
        player.breastRows[0].breastRating = 3;
        player.nippleLength = .25;
    }
    // Singular row - cup size + 3.  Nipple size to 1" if smaller.
    else if (player.breastRows.length <= 1) {
        outputText("Your " + allBreastsDescript(player) + " tingle pleasantly as the magic takes effect.  You watch with fascination as they begin to swell up, like sponges exposed to water.  The top of your " + player.armorName + " is pulled tight by change, until your chest seems ready to burst free.  <b>You've gained 3 cup sizes!</b>  ");
        player.breastRows[0].breastRating += 3;
        if (player.nippleLength < .75) {
            player.nippleLength += .5;
            outputText("Your " + nippleDescription(player, 0) + "s grow hard and sensitive, becoming much more noticeable inside your " + player.armorName + ".  It appears your nipples have grown larger to match.");
        }
    }
    // Multiple Rows...
    else {
        // Top row + 3, all other rows brought up to par.
        outputText("Your top " + breastDescript(game.player, 0) + " tingle pleasantly as the magic takes effect.  You watch with fascination as they begin to swell up, like sponges exposed to water.  The top of your " + player.armorName + " is pulled tight by change, until your chest seems ready to burst free.  <b>You've gained 4 cup sizes!</b>  ");
        player.breastRows[0].breastRating += 4;
        outputText("The next row of " + breastDescript(game.player, 1) + " jiggle and tingle with even more pleasure than the first.  They pulsate for a few seconds, shrinking and growing rapidly until they settle at a size just below your top " + breastDescript(game.player, 0) + ".  ");
        player.breastRows[1].breastRating = player.breastRows[0].breastRating - 1;
        if (player.breastRows.length >= 3) {
            outputText("Your third group of " + breastDescript(game.player, 2) + " seem to follow their sister's example, tingling briefly before settling at a size just below the breasts above.  ", false);
            player.breastRows[2].breastRating = player.breastRows[1].breastRating - 1;
        }
        if (player.breastRows.length >= 4) {
            outputText("Your remaining " + breastDescript(game.player, 3) + " feel so wonderful that you just can't resist cupping and squeezing them as they reshape to fit in perfectly with the rest of your breasts.  ");
            player.breastRows[3].breastRating = player.breastRows[2].breastRating - 1;
            if (player.breastRows.length == 5) player.breastRows[4].breastRating = player.breastRows[3].breastRating - 1;
        }
        if (player.nippleLength < .75) {
            player.nippleLength += .5;
            outputText("Your " + nippleDescription(player, 0) + "s grow hard and sensitive, becoming much more noticable inside your " + player.armorName + ".  It appears your nipples are have grown larger to match.");
        }
    }
    outputText("\n\n");
    omnibusVictoryPostBoon();
}

function omnibusVictoryGrowDick(): void {
    spriteSelect(16);
    clearOutput();
    // No dick?  Grow one!
    if (player.cocks.length == 0) {
        outputText("A sudden pressure builds in your groin.  You look down in wonder, more than a little turned on by the prospect of growing your own penis.  Your skin ripples and bulges outwards, the sensation turning from pressure to feelings of intense warmth.  The bump distends, turning purple near the tip as it reaches three inches in size.  You touch it and cry out with pleasure, watching it leap forwards another inch in response.  Your tiny dick's crown becomes more and more defined as it grows larger, until you have what looks like a normal six inch dick.  You sigh with happiness and desire at your new addition.  Before you can enjoy it, another wave of heat washes through you, making your new addition respond.  It grows painfully hard as it crests eight inches in length.  ");
        if (player.cor < 80)
            outputText("In horror you watch the skin turn a shiny-dark purple.  Tiny wriggling nodules begin to erupt from the purplish skin, making your cock look more like a crazed sex-toy than a proper penis.  You pant and nearly cum as it lengthens one last time, peaking at ten inches long.  One last ring of nodules forms around the edge of your demon-dick's crown, pulsating darkly with each beat of your horrified heart.");
        else outputText("Curious, you watch the skin turn a shiny-dark purple.  Tiny wriggling nodules begin to erupt from the purplish skin, making your penis look more like those amazing cocks you saw on demons!  You pant and moan in happiness as it lengthens one last time, peaking at ten inches long.  The excitement of possessing such a magnificent pleasure tool makes you cum.  As one last ring of nodules forms around the edge of your new demon-dick's crown, you notice to your surprise that the liquid you ejaculated is pitch black!  But as your new cock pulsates darkly with each beat of your heart, the only thing you have on your mind is to try it out as soon as possible...");
        player.cocks.createCock();
        player.cocks[0].cockType = CockTypesEnum.DEMON;
        player.cocks[0].cockLength = 10;
        player.cocks[0].cockThickness = 2;
        genderCheck();
    }
    if (player.cocks.length == 1) {
        if (player.demonCocks() < 1) {
            outputText("You smile, watching your " + cockDescript(game.player, 0) + " grow longer.  Inches of newfound dick-flesh erupt from your crotch in response to omnibus' dark magics.  Before you can play with your transformed tool, a wave of burning desire passes through you.  ");
            if (player.cor < 80) outputText("You watch in horror as the skin of your " + cockDescript(game.player, 0) + " turns shiny and purplish-black.  ");
            else outputText("Curious, you watch the skin of your " + cockDescript(game.player, 0) + " turn a shiny-dark purple.  ");
            player.cocks[0].cockLength += 3 + rand(5);
            player.cocks[0].thickenCock(2);
            player.cocks[0].cockType = CockTypesEnum.DEMON;
            if (player.cor < 50)
                outputText("Corrupt nodules begin to spring up over its entire length.  <b>Your penis is transforming into a " + cockDescript(game.player, 0) + "!<\b>  The new nubs wriggle about as they sprout over every inch of surface, save for the head.  Unable to do anything but groan with forced pleasure and horror, you can only watch.  One last batch of nodules forms in a ring around the crown of your " + cockDescript(game.player, 0) + ", seemingly completing its transformation, until you notice, almost throwing up, that your testicles are also getting covered in black veins under your powerless eyes!  ");
            else outputText("As you watch expectantly, tiny wriggling nodules begin to erupt from the purplish skin, like those magnificent cocks you saw on demons!  <b>Your penis is transforming into a " + cockDescript(game.player, 0) + "!<\b>  You pant and moan in happiness as it lengthens one last time.  As you stroke all of its amazing length with both hands, the excitement of possessing such a beautiful pleasure tool makes you cum.  As one last ring of nodules forms around the edge of your " + cockDescript(game.player, 0) + "'s crown, you notice that the squirts getting out of your cock-slit are not completely white and gradually become darker, the last drops being pitch-black! Your new " + cockDescript(game.player, 0) + " pulsates darkly with each beat of your heart, but the thick, throbbing veins that are finishing to cover your testicles do not contain blood, but a black liquid which apparently has perverted them. You ponder what its purpose might be, but then you decide, as you stroke the huge, dark, bumpy shaft, that if this feels as good as this looks, it doesn't really matter.  ");
        }
        else {
            outputText("Your " + cockDescript(game.player, 0) + " leaps forwards, taking to the dark magic with ease.  Inch after inch of new length erupts from your groin as your " + cockDescript(game.player, 0) + " gets longer and thicker.  It pulsates, as if promising dark pleasure as it settles into its new enhanced size.");
            player.cocks[0].cockLength += 6 + rand(10);
            player.cocks[0].thickenCock(3);
        }
    }
    if (player.cocks.length > 1) {
        let temp: number = player.cocks.length;
        // Already has demoncocks
        if (player.demonCocks() == player.cocks.length) {
            outputText("Your " + multiCockDescriptLight(player) + " leap forwards, taking to the dark magic with ease.  Inch after inch of new length erupts from your groin as your " + multiCockDescriptLight(player) + " get longer and thicker.  They pulsate, as if promising dark pleasure as they settle into their new enhanced size.");
            while (temp > 0) {
                temp--;
                player.cocks[temp].cockLength += 6 + rand(10);
                player.cocks[temp].thickenCock(3);
            }
        }
        // Not yet full of demoncocks...
        else {
            outputText("You smile, watching your " + multiCockDescriptLight(player) + " grow longer.  Inches of newfound dick-flesh erupt from your crotch in response to omnibus' dark magics.  Before you can play with your transformed pleasure tools, a wave of burning desire passes through you.  You watch");
            if (player.cor < 80)
                outputText(" in horror");
            else outputText(" curiously");
            outputText(" as the skin of your " + multiCockDescriptLight(player) + " turns shiny and purplish-black.  Corrupt nodules begin to spring up over the entire length of each dick.  ");
            while (temp > 0) {
                temp--;
                player.cocks[temp].cockLength += 3 + rand(5);
                player.cocks[temp].thickenCock(2);
                player.cocks[temp].cockType = CockTypesEnum.DEMON;
            }
            if (player.cor < 50)
                outputText("<b>Your dicks are transforming into " + multiCockDescriptLight(player) + "!</b>  The new nubs wriggle about as they sprout over every inch of surface, save for the heads.  Unable to do anything but groan with forced pleasure and horror, you can only watch.  One last batch of nodules forms in a ring around the crowns of your " + multiCockDescriptLight(player) + ", seemingly completing its transformation, until you notice, almost throwing up, that your testicles are also getting covered in black veins under your powerless eyes!  ");
            else outputText("<b>Your dicks are transforming into " + multiCockDescriptLight(player) + "!</b>  The new nubs wriggle about as they sprout over every inch of surface, save for the heads.  You pant and moan in happiness as they lengthen one last time.  As you stroke all of their amazing length with both hands, the excitement of possessing such a magnificent pleasure tool makes you cum. You lick your fingers eagerly, tasting your new cum, while a last ring of nodules forms around the crowns of your beautiful " + multiCockDescriptLight(player) + ".   Your new " + multiCockDescriptLight(player) + " pulsate darkly with each beat of your heart, but the thick, throbbing veins that are finishing to cover your testicles do not contain blood, but a black liquid which apparently has perverted them. You ponder what its purpose might be, but then you decide, as you stroke a huge, dark, bumpy shaft, that if they feel as good as they look, it doesn't really matter.  ");
        }
    }
    omnibusVictoryPostBoon();
}

function omnibusVictoryNormalFace(): void {
    spriteSelect(16);
    clearOutput();
    let changed: boolean = false;
    if (player.horns > 0 || player.antennae > AntennaeType.NONE) {
        outputText("Your forehead itches intensely.  You cannot help but stratch madly at it.  ");
        if (player.horns > 0) {
            outputText("Your horns fall off, landing on the floor with a heavy thud.  ");
            player.horns = 0;
            player.hornType = HornType.NONE;
        }
        if (player.antennae > AntennaeType.NONE) {
            outputText("Antennae pop free, and float lightly down towards the floor.  ");
            player.antennae = AntennaeType.NONE;
        }
        changed = true;
    }
    // EARS
    if (player.earType != EarType.HUMAN) {
        outputText("Pain erupts from both sides of your head as your ears reform and move, returning to look like your old human ears!  ");
        player.earType = EarType.HUMAN;
        changed = true;
    }
    // Face
    if (player.faceType != FaceType.HUMAN) {
        outputText("Your facial structure rearranges itself into a normal human visage, exactly like yours was before you came to this horrid place.");
        player.faceType = FaceType.HUMAN;
        changed = true;
    }
    // Nothing changed
    if (!changed) outputText("You tingle briefly but feel no obvious change.  Your face was already fairly human.");
    omnibusVictoryPostBoon();
}

function omnibusVictoryNormalChest(): void {
    spriteSelect(16);
    clearOutput();
    let changed: boolean = false;
    if (player.breastRows.length > 1) {
        player.breastRows.removeBreastRow(1, player.breastRows.length - 1);
        outputText("Your chest tingles and begins to feel lighter.  You hastily pull open your " + player.armorName + " and realize you only have " + allBreastsDescript(player) + " now!  ");
        changed = true;
    }
    // Size!
    if (player.breastRows[0].breastRating > 7) {
        outputText("The weighty flesh that constantly hangs from your chest gets lighter and lighter, vanishing rapidly.  ");
        player.breastRows[0].breastRating = 3 + rand(5);
        outputText("You now have " + allBreastsDescript(player) + ".  ");
        changed = true;
    }
    // Fix nips
    if (player.nippleLength > 1) {
        outputText("Your nipples shrink down to a more normal size.  ");
        player.nippleLength = .75;
        changed = true;
    }
    if (player.breastRows.hasFuckableNipples()) {
        outputText("The vagina-like openings in your nipples close, sealing themselves shut.  ");
        player.breastRows[0].fuckable = false;
        changed = true;
    }
    // Normal chest, normal skin
    if (player.skinType != SkinType.PLAIN) {
        outputText("The skin on your body itches intensely as it sheds its " + player.skinDesc + ", revealing " + player.skinTone + " skin.  ");
        player.skinDesc = "skin";
        player.skinType = SkinType.PLAIN;
        changed = true;
    }
    // Nothing changed
    if (!changed) outputText("You tingle briefly but feel no obvious change.  Your chest is already fairly human.");
    omnibusVictoryPostBoon();
}

function omnibusVictoryNormalGroin(): void {
    spriteSelect(16);
    // Temp used to track changes
    let changed: boolean = false;
    clearOutput();
    outputText("You feel a strange shivering sensation pass through you.  ");
    // Remove multiple.
    if (player.cocks.length > 1) {
        outputText("Your " + multiCockDescriptLight(player) + " shiver and retract back towards your body.  When the process finishes you are left with only your " + cockDescript(game.player, 0) + ".  ");
        player.cocks.removeCock(1, player.cocks.length - 1);
        genderCheck();
        changed = true;
    }
    // Super long nerf
    if (player.cocks.length > 0) {
        if (player.cocks[0].cockLength > 12) {
            outputText("A tingling sensation worms through your " + cockDescript(game.player, 0) + " as it shrinks down to a more modest eleven inches.  ");
            player.cocks[0].cockLength = 11;
            changed = true;
        }
        // Super thick nerf
        if (player.cocks[0].cockThickness > 2) {
            outputText("Your " + cockDescript(game.player, 0) + "'s obscene thickness withers down to roughly two inches of girth.  ");
            player.cocks[0].cockThickness = 2;
            changed = true;
        }
        // Humanitize
        // If demon cocked....
        if (player.cocks[0].cockType == CockTypesEnum.DEMON) {
            outputText("Your " + cockDescript(game.player, 0) + " tingles as the bumps begin to fade.  After a moment the flesh darkens, and every single nodule reappears.  <b>Your corrupt penis resisted the magic!</b>  ");
            changed = true;
        }
        else if (player.cocks[0].cockType != CockTypesEnum.HUMAN) {
            outputText("The inhuman appearance of your " + cockDescript(game.player, 0) + " shifts, the flesh rearranging itself into a more human configuration.  After a few seconds you have a very normal looking penis.  ");
            player.cocks[0].cockType = CockTypesEnum.HUMAN;
            changed = true;
        }
    }
    // Balls shrink
    if (player.ballSize > 5) {
        outputText("The " + ballsDescriptLight(player) + " that constantly pull so heavily on your groin tingle and shrink down to a more managable size.  ");
        player.ballSize = 2 + rand(3);
        changed = true;
    }
    if (changed) outputText("\n\n");
    // Vajajay
    if (player.vaginas.length > 0) {
        if (player.vaginas[0].vaginalWetness >= VaginaWetness.SLICK) {
            outputText("The constant fluids leaking from your " + vaginaDescript(player, 0) + " slow down, then stop.  ");
            player.vaginas[0].vaginalWetness = VaginaWetness.WET;
            changed = true;
        }
    }
    // Nothing changed
    if (!changed) outputText("You tingle briefly but feel no obvious change.  Your crotch isn't really in need of becoming more human.");
    omnibusVictoryPostBoon();
}

function omnibusVictoryNormalLegs(): void {
    spriteSelect(16);
    clearOutput();
    if (player.lowerBody == LowerBodyType.HUMAN)
        outputText("You feel as if you should slap yourself for stupidy.  Your legs are already normal!  You flush hotly as the corrupt magics wash over you, changing nothing.");
    else outputText("You collapse as your " + legs(player) + " are unable to support you.  The sounds of bones breaking and reshaping fills the room, but oddly you feel no pain, only mild arousal.  You blink your eyes and sigh, and when you look down again <b>you have normal human legs</b>!");
    player.lowerBody = LowerBodyType.HUMAN;
    if (player.tailType > TailType.NONE) {
        outputText("  A moment later, your feel something detach from above your backside.  <b>You no longer have a tail!</b>");
        player.tailType = TailType.NONE;
        player.tailVenom = 0;
        player.tailRecharge = 5;
    }
    omnibusVictoryPostBoon();
}

function omnibusVictoryPostBoon(): void {
    outputText("\n\nThe omnibus disappeared while you were examining the changes.  You guess you did get what you wanted.  You blush and smile, still feeling very horny.  You decide to use the privacy of the office to relieve the tension you've been building up since you arrived.\n\nYou masturbate quickly and efficiently, eager to calm down and resume your exploration.  In no time at all an orgasm crashes through your body.  Stretching and standing up, you find yourself still aroused.\n\nYou slap your forehead as realization washes over you - <b>the demoness' magic is keeping you from ever being totally satisfied!</b>\n(Perk Gained - Omnibus' Gift - Minimum lust has been increased!)");
    player.perks.create(PerkLib.OmnibusGift, 0, 0, 0, 0);
    player.orgasm();
    dynStats("cor", 2);
    cleanupAfterCombat();
}

function omnibusVictoryLetGo(): void {
    spriteSelect(16);
    clearOutput();
    outputText("You refuse to fall for her ploy, and decide not to take her up on her offer.  However, being that she is so thoroughly defeated, you allow her to escape, promising her far worse should she ever oppose you in the future.\n\n\"<i>Thank you, merciful hero!</i>\" she says and she sprints out the door.  Wings unfurl from her back and she takes flight, disappearing out a skylight above the main factory floor.");
    cleanupAfterCombat();
}

function omnibusVictoryKillHer(): void {
    spriteSelect(16);
    clearOutput();
    outputText("You step forwards and grab her by the head.  With an abrupt twist you snap her neck, ending at least one small part of the demonic threat.");
    flags[kFLAGS.D1_OMNIBUS_KILLED] = 1;
    cleanupAfterCombat();
}

export function omnibusLossRape(): void {
    spriteSelect(16);
    clearOutput();
    if (player.HP < 1) outputText("You stagger into the desk, clutching tightly just to stay upright.  ", false);
    else outputText("Forgetting about the fight, you lean on the desk and slide your free hand under your " + player.armorName + ", seeking any pleasure you can get.  ", false);
    outputText("Sensing victory, the demoness sidles up next to you and pushes you into a chair.  Incapable of resisting, all you can do is watch as she opens your " + player.armorName + " for easier access.  She steps back and admires her handiwork as she gives you a thorough looking over.\n\n", false);
    outputText("\"<i>I have just the thing for a ", false);
    if (player.gender <= 1) outputText("man", false);
    else outputText("woman", false);
    outputText(" such as you.  I've been crossbreeding the parasites that developed in the deep jungle, trying to create the PERFECT slave-maker.  You get to be my first test subject,</i>\" she says.\n\n", false);
    outputText(" She sees the look of fear creeping into your eyes and pats you comfortingly, \"<i>Awww don't worry. It'll feel REALLY good.  If anything you should feel honored to be assisting an Omnibus in her experiments.</i>\"\n\n", false);
    outputText(" She opens one of the desk drawers, and searches briefly before her eyes light up with recognition.  \"<i>Here we are,</i>\" she says as she pulls something free...", false);
    doNext(omnibusLossRape2);
}

export function omnibusLossRape2(): void {
    spriteSelect(16);
    clearOutput();
    // (Multi dicks)
    if (player.cocks.length > 1) {
        outputText("In her hand is a mass of shining green material.  She turns to face you, bringing it closer and letting you see the lights shift and change on its luminescent surface.\n\n", false);
        outputText("\"<i>For someone as... different as you, we will have to try this creature.  I've bred it from a mixture of plant-tentacles, dazzle-weed, and what we've taken to calling pussy plants,</i>\" she mentions, her hands working to open the mass on the table.  The interior surface is a mass of slimy undulating protrusions that wriggle feverishly as they are exposed to the air.  She gathers up the thing in her arms while continuing to speak to you, \"<i>You see, my plant will encapsulate your members tightly, wrapping them in sticky wetness.  Its fluids are a perfect blend of aphrodisiacs, lubricants, and will-sapping narcotics.  You'll love it.</i>\"\n\n", false);
        outputText("You make a desperate attempt to escape her chair, but your body fails to do much more than squirm in place.  She drops the creature squarely into your crotch and hops up onto her desk to watch.  Thousands of tiny wet nodules immediately begin massaging your " + multiCockDescriptLight(player), false);
        if (player.balls > 0) outputText(" and " + ballsDescript(player), false);
        outputText(".  You groan as the pleasure washes over you like a wave.  Your squirming stops as your hips begin twitching into the air, as if begging for even more stimulation.  It's not fair how good this feels... you can't help it, it's just too hard to fight.\n\n", false);
        outputText("You watch with detached fascination as each of your " + multiCockDescript(player) + " is wrapped tightly in shiny green material.  The shape of each penis is still clearly defined under the pulsating green stuff, though you can see it shifting and rippling over your lengths as it pleasures you.  It almost looks like some kind of kinky bondage-toy.  Aware of your attentions, the green stuff squeezes you tightly and begins flashing beautiful bioluminescent color patterns across its surface that scatter your thoughts as you watch.  You blink a few times as the green mass rolls more of itself out, curling over your ", false);
        if (player.balls > 0) {
            outputText("balls", false);
            if (player.vaginas.length > 0) outputText(" and " + vaginaDescript(player, 0), false);
        }
        else if (player.vaginas.length > 0) outputText(vaginaDescript(player, 0), false);
        else outputText("taint", false);
        outputText(", sliding up your abdomen, and oozing down over your hips.  As it spreads the colors fill more and more of your head, clearing away your thoughts of resistance.\n\n", false);
        outputText("A soothing female voice talks to you from somewhere, \"<i>Did I mention it's specifically tuned to ensnare the conscious mind with it's pretty colors?  I must have forgot.  Well, I see you've discovered it on your own.  The colors are just so perfect for opening your mind to me, aren't they?  They just chase away your thoughts and let my words slip deep into your subconscious.  I bet it feels nice to just focus on the colors and let my pet tease your cocks, doesn't it?</i>\"\n\n", false);
        outputText("You nod without any awareness of the act.\n\nThe voice laughs and continues while the creature reaches around your " + hipDescription(player) + " and slides a feeler between your cheeks, completing the tight loop around your groin, \"<i>That's good.  You want to let the creature cover as much of you as it wants.  Being sex-food for a symbiotic plant is arousing beyond measure.</i>\"  You feel the creature licking at your " + assholeDescript(player) + " until it relaxes, and then slides something inside.  A warm wetness spreads through your bowels as something begins caressing your prostate from inside you.\n\n", false);
        outputText("Overloaded with pleasure, you feel your " + multiCockDescriptLight(player) + " pulse and cum, creating translucent green cum balloons the size of ", false);
        if (player.cumQ() < 50) outputText("apples ", false);
        if (player.cumQ() >= 50 && player.cumQ() < 300) outputText("cantaloupes ", false);
        if (player.cumQ() >= 300) outputText("watermelons ", false);
        outputText("at the end of each of your dicks.  The creature's flashing intensifies while your hips quake uncontrollably, pumping the last of your load feeds into the wonderful plant.  The light-show grows brighter, totally emptying any remaining stray thoughts and leaving you feeling wonderfully open.\n\n", false);
        outputText("\"<i>Being used for your cum is great,</i>\" says the voice and you agree, it is great.\n\n", false);
        outputText("\"<i>Your greatest fetish is allowing demonic creatures to feed on your cum,</i>\" she says, and it feels so right.  Your cum is meant for demons and plants to feast on.  Just the thought makes you want to orgasm again.\n\n", false);
        outputText("\"<i>Since you provide food-source, that must make you livestock.  You like being livestock.  Livestock don't have to think.  Livestock follow orders.  Best of all, as livestock you can live your favorite fetish of being milked of all your cum, every hour of every day,</i>\" the voice says, filling your mind with new thoughts.  Of course it's right, you can just let a demon or tentacle plant milk you and do all the hard stuff, like thinking.  All you have to do is cum.  The thought makes you shiver as the plant-suit absorbs the encapsulated bubbles of jizz.  The dazzling lights grow even brighter as it takes in the nutrients.\n\n", false);
        outputText("*FLASH* \"<i>You want to cum for the plant.</i>\"\n\n", false);
        outputText("Tendrils of plant crawl up your belly, coating you in slime as they massage every inch of you.\n\n", false);
        outputText("*FLASH* \"<i>You need to cum for the plant.</i>\"\n\n", false);
        if (player.breastRows.length == 1) outputText("They reach the lower curve of your breasts.\n\n", false);
        if (player.breastRows.length > 1) outputText("They slide over your lowest pair of breasts, encapsulating them in wriggling tightness.\n\n", false);
        outputText("*FLASH* \"<i>You love cumming for anything and anyone.</i>\"\n\n", false);
        if (player.breastRows.length == 3) outputText("Your middle breasts tingle with absolute pleasure as they too become engulfed in tightness.\n\n", false);
        if (player.breastRows.length == 2) outputText("You groan as the plant grows up the summit of your top breasts, coating the bottom half of your aureola.\n\n", false);
        if (player.breastRows.length == 1) outputText("Your " + nippleDescription(player, 0) + "s become hard as steel as the wave of slick pleasure washes over them.\n\n", false);
        outputText("*FLASH* \"<i>You love being told to orgasm.</i>\"\n\n", false);
        if (player.breastRows.length == 1) outputText("The wriggling mass slides up the top-most parts of your breasts, narrowing into two tiny tendrils that loop around your neck.\n\n", false);
        if (player.breastRows.length >= 2) outputText("The wriggling mass climbs your top pair of breasts with ease, wrapping your diamond-hard nipples in slime and sensation.  It continues climbing upward, narrowing into two bands that loop around the back of your neck.\n\n", false);
        outputText("*FLASH* \"<i>To orgasm is to obey.  You love to orgasm.  You love to obey.  You love to obey my voice more than any other.  Obeying my voice gave you these orgasms.  Since you love to obey me, you must be my pet.</i>\"\n\n", false);
        outputText("Your mistress' OTHER pet wraps around your neck, forming a choker comprised of shifting green colors.  You smile as you realize it is done - you've become one of her pet cattle.  Your body is wrapped in an emerald sea of shifting pleasure, just like your mistress wanted.  If it weren't for the obvious bulges of your " + multiCockDescriptLight(player) + ", you'd look to be wearing an extraordinarily revealing one piece swim-suit.  The constant teasing at your crotch continues, and you stay rock-hard, even though you just came.  The idea of being milked to feed your new clothing just turns you on so much that you bet you're leaking constant streams of pre-cum for your new green master.\n\n", false);
        outputText("The flashing subsides, and your new thoughts rush into the void.  You immediately begin masturbating your encapsulated members as you seek to obey.  To orgasm is to obey.  To obey is to orgasm.  You discover that you can feel every touch through the skin of your 'clothing'.  You increase the tempo, knowing that your orgasm will be feeding the creature that now lives on you, fulfilling your deepest darkest desires.  You cum again, just as hard as before, inflating " + num2Text(player.cocks.length) + " shiny green balloons with the proof of your obedience.\n\n", false);

        if (player.effects.findByType(StatusAffects.CampMarble) >= 0) {
            outputText("Suddenly, a loud scream is heard down on the factory floor. You and your mistress turn to see Marble dashing up the stairs to the foremen's office.  Your mistress looks over at her and says with some amusement, \"<i>Oh ho!  So another cow has come to join in the fun.</i>\"\n\n\"<i>Sweetie! What has she done to you?</i>\" Marble exclaims, \"<i>What has she put on you?!</i>\"\n\n\"<i>Oh, so you knew this girl?</i>\" your mistress asks you, \"<i>It's a Lacta Bovine from the looks of it, so it seems this time I'll be adding a real cow to the pens.</i>\"  Marble turns to your mistress and brandishes her hammer, but the horror from the thought of your mistress being hurt causes you to spring forward and grab Marble.  The brief distraction gives your mistress a chance to sink a syringe into Marble's shoulder, and within moments she slumps onto the ground unconscious.\"\n\n", false);
            outputText("Your mistress turns back to you and smiles.\n\n\"<i>Well, she should make a fine replacement for you in the pens,</i>\" she says before tapping her chin thoughtfully and looking back at you, \"<i>Really is convenient that I don't have to worry about my new pet dying on me now, hun.</i>\"  Then she pushes you back into the chair and says \"<i>But first...\"\n\n", false);

        }
        else outputText("Your mistress looks down with approval and speaks, \"<i>Very good.  ", false);
        outputText("I want you to stay here and cum 'til morning.  My pet needs lots of nutrition to recharge, and I have plans for new ways to teach you to obey tomorrow.</i>\"\n\n", false);
        outputText("Happy to have such a wonderful task, you spend the next day being bathed in drugged aphrodisiacs, cumming over and over and over.  Every morning the creature flashes you into obedience while the voice teaches you more and more about how to think.  After a week you're the perfect pet.  By the end of your first month of servitude, any memories of your past life are gone.  You spend the rest of your days feeding your mistress and her pet, and helping her refine and breed her pets in order to teach others the way.", false);
        gameOver();
        return;
    }
    // Dick version
    if (player.cocks.length == 1) {
        outputText("In her hand is a squirming purplish mass.  It has a smooth outer surface, spotted with dark shades of iridescent purple. The opposite side is comprised of a smooth mucusy membrane covered with wriggling pink cilia.\n\n", false);
        outputText("She leans over you with a predatory smile, \"<i>This little guy is my favorite.  I've even given him a bit of 'field testing'.</i>\"  She gestures towards a small dripping orifice, explaining, \"<i>You see, once I put this on you, it'll open up niiice and wide.  It'll suck your nice little cock into its mouth and starting squeezing and massaging you with each of its tiny tentacles until you can't help but release all your ", false);
        if (player.cor < 33) outputText("sweet ", false);
        if (player.cor >= 66) outputText("tainted ", false);
        outputText("sexual energies deep into its gullet.  And that's just the start!</i>\"  Her hands let go of the squirming mass, dropping it squarely into your lap.\n\n", false);
        if (player.cocks.averageCockLength() < 15) outputText("With one swift motion, the beast engulfs your " + cockDescript(game.player, 0) + " in its slimy maw.  ", false);
        else outputText("Distending obscenely, the beast starts engulfing your " + cockDescript(game.player, 0) + " in its slimy maw, progressing along its entire length until you can no longer see your pleasure tool.  ", false);
        outputText("The slimy tentacles waste no time, massaging you with mechanical precision.  You groan in helpless pleasure, growing to painful hardness within the squirming confines of the creature.  Three protrusions sprout from the creature's core, dripping with slime of their own, and covered on the inside with the same wriggling protrusions that now massage your trapped member.  Two curl around your " + hipDescription(player) + ", while the last one", false);
        if (player.balls > 0) outputText(" smothers your balls, entrapping them in sticky sensation as it continues across your taint between your butt-cheeks.  ", false);
        else outputText(" journeys over your taint before travelling between your butt-cheeks.  ", false);
        outputText("The three tendrils join together in the back, forming a seemless tiny purple triangle.  It really rides up high, tickling your " + assholeDescript(player) + " with constant teasing.  You're wearing an organic purple thong!\n\n", false);
        outputText("You try to endure, but the humiliation is too much for you to take.  The pleasure and shame push you past your limit.  You let out a squeal of mixed agony and delight as the proof of your pleasure boils out into the creature.  You pant and twitch, helpless to resist the strength of your orgasm as your jism fills the creature, distorting it visibly around your member.  Sighing, you relax as the assault winds down, the squirming tentacles relaxing noticeably as they work to digest their 'meal'.\n\n", false);
        outputText("\"<i>Enjoy yourself?  The best part is about to start,</i>\" she says with an evil glint in her eye.  You sit bolt upright as your living thong squirms and shifts, pressing something rigid against the ring of your " + assholeDescript(player) + ".  You reach down, trying to pull the creature off, but its outer covering is surprisingly hard, and seals almost perfectly against your " + player.skinDesc + ".  You look up with terror in your eyes, a pleading look painted across your face.\n\n", false);
        outputText("She cocks her head to the side with an inquisitive look and asks, \"<i>So it's found your back door I take it?</i>\"  You nod sheepishly, squealing as the rigid growth pushes through your sphincter, violating you completely.  She continues with a nonchalant tone, though her eyes seem to be drinking in the scene, \"<i>That thing you feel drilling into your ass?  It's a carefully evolved injection appendage.  Don't worry, once it settles in it won't move much.  It's just going to get nice and cozy with your prostate and a few major blood vessels.  Then it's going to reward you for cumming!</i>\"\n\n", false);
        outputText("You feel it burrow a little deeper, and then curve up.  It presses against something inside of you in a way that makes your " + cockDescript(game.player, 0) + " twitch uncontrollably.  You're sure that if it weren't for the greedy tentacle-panties around your dick you would've seen a huge dollop of pre-cum squeeze out.  Filled with angst and worry as to what is to come, you ask, \"<i>Ummm, h-h-how is it going to reward me?</i>\"\n\n", false);
        outputText("She winks, petting the mottled surface of your purple-cock-prison as you feel a sensation of warm wetness in your backside.  At the same time you nearly jump as you feel a painful pinch in your prostate.  The demoness licks her lips and answers, \"<i>Well, it rewards you in two ways pet.  One:  It empties a specially designed cocktail of drugs directly into your bowels, where they'll be absorbed slowly into the body.</i>\"  As if on cue a gentle warmth spreads through your torso, radiating out into your limbs, and settling like calming mist in your head.  You relax utterly, enjoying the feeling in spite of your worries.\n\n", false);
        outputText("She coos, petting your still-hard member and the creature around it.  Miraculously you can feel both the touch of her silky fingers and the constant pleasurable squirming of the panties themselves.  You twitch your " + cockDescript(game.player, 0) + " against her hand, giggling happily.\n\n", false);
        outputText("\"<i>That's right, it's a good reward isn't it?</i>\" she asks as she continues to fondle you, \"<i>those drugs are making you docile and extraordinarily suggestible.  For instance – every time I talk you can feel my hands caressing and fondling your member", false);
        if (player.balls > 0) outputText(" and teasing your balls", false);
        outputText(".  You see?  I'm not even touching you anymore and you're still twitching.  My my, what an obedient slave you're going to be.</i>\"\n\n", false);
        outputText("You pant and groan while she talks to you, still feeling the combined efforts of the panty-creature and your master's wonderful hands, \"<i>And I haven't even told you about the second part of your reward.  If you want me to tell you, you'll need to admit out loud what we both already know – that you're my obedient slave-toy.  Say it toy.</i>\"\n\n", false);
        outputText("\"<i>I-I-I'm your obedia—ahhh-nt s-s-lave toy,</i>\" you moan.  As soon as the words leave your mouth, you know it's true, but that settles in the back of your mind.  You're eager to know how the creature and your mistress will reward you for being such an obedient-toy.  And of course, to get her talking again so you can feel those smooth fingertips caress you once more.\n\n", false);
        outputText("\"<i>You really are my good toy already, aren't you?</i>\" she muses, \"<i>You just love pleasing, me don't you toy?</i>\"  You nod feverishly, eliciting a happy laugh from your mistress as she lectures you, \"<i>The second part of your reward is an injection of its venom directly into your prostate.  You may not have noticed with the constant teasing your cock is enduring, but by now your prostate should have doubled in size.  If I ever separate you and your training-suit, you'll notice you're producing so much pre-cum that it's dribbling out ALL the time.  Your orgasms won't get much bigger, but you'll find yourself pouring out pre as you get more and more turned on.  After all, my baby here needs to feed.</i>\"\n\n", false);
        outputText("Your mistress pats your obscene purple panties tenderly and whispers in your ear, \"<i>Be a good toy and cum for mistress.</i>\"  You smile broadly as your hips piston in the air, as if fucking an imaginary twat.  Cum boils out from your ", false);
        if (player.balls > 0) outputText(ballsDescriptLight(player) + " and ", false);
        outputText(" over-sized prostate, filling the chamber around your cock with thick blasts of seed.  You smile happily as the tentacle-chamber distorts to hold your load, bulging out into a more spherical appearance.  You slump down as your orgasm finishes and you begin to feel even more 'reward' fill your now greedy-hole.\n\n", false);
        if (player.effects.findByType(StatusAffects.CampMarble) >= 0) {
            outputText("Suddenly, a loud scream is heard down on the factory floor. You and your mistress turn to see Marble dashing up the stairs to the foremen's office.  Your mistress looks over at her and says with some amusement, \"<i>Oh ho!  So another cow has come to join in the fun.</i>\"\n\n\"<i>Sweetie! What has she done to you?</i>\" Marble exclaims, \"<i>What has she put on you?!</i>\"\n\n\"<i>Oh, so you knew this girl?</i>\" your mistress asks you, \"<i>It's a Lacta Bovine from the looks of it, so it seems this time I'll be adding a real cow to the pens.</i>\"  Marble turns to your mistress and brandishes her hammer, but the horror from the thought of your mistress being hurt causes you to spring forward and grab Marble.  The brief distraction gives your mistress a chance to sink a syringe into Marble's shoulder, and within moments she slumps onto the ground unconscious.\"\n\n", false);
            outputText("Your mistress turns back to you and smiles.\n\n\"<i>Well, she should make a fine replacement for you in the pens,</i>\" she says before tapping her chin thoughtfully and looking back at you, \"<i>Really is convenient that I don't have to worry about my new pet dying on me now, hun.</i>\"  Then she pushes you back into the chair and says \"<i>But first...</i>\"\n\n", false);
        }
        outputText("Your mistress pats your head and whispers commands in your ear while the now-sated slave-making creature devours your cum, turning it into more 'reward'.  You don't pay attention to her words, what's important is serving mistress and cumming for your panty-toy as often as possible.  You don't need to worry, she will tell you what to think.  She's just so perfect and amazing, you don't know why anyone would want to harm her or her wonderful creations.  'Gods it feels good to obey' is the last thought your mind ever thinks for itself.\n\n", false);
        outputText("In the days to come, you spend your time being teased by your new mistress until you feel as if you'll burst, then being brought to sudden explosive orgasms that fill your panty-prison to capacity.  After every session you black out, but each time you mind less and less.  You wanted to be here, having these wonderful orgasms and obeying your beautiful mistress.\n\n", false);
        outputText("After a month she starts letting you live without your favorite panties.  You beg her to put them back on you, but she often makes you crawl around the factory, pooling pre-cum everywhere from your swollen prick as you beg her to be put back into the pleasure-panties.  Sometimes, if you're lucky, she'll fuck you, or send you out to catch another adventurer.  There is nothing you love more than cumming into your tentacle-panties while another one of your mistress' creations teaches a slut how to embrace her true nature.", false);
        gameOver();
        return;
    }
    // (Female)
    if (player.vaginas.length == 1 || player.gender == 0) {
        outputText("In her hand is a seamless pair of panties.  Their surface reflects light perfectly, as if its bright pink surface were coated in slippery oil or made from latex.  ", false);
        if (player.gender == 0) {
            outputText("The demoness smiles with wicked intent and yanks the bottoms of your " + player.armorName + " the rest of the way off.  Your lack of genetalia does not faze her, and she responds by swiftly pulling out a needle and injecting your groin.  In seconds your crotch splits open, revealing a fresh virgin vagina.  Licking her perfect lips with anticipation, she inverts the panties and holds them up for you to see.\n\n", false);
            player.vaginas.createVagina();
        }
        else outputText("The demoness smiles with wicked intent and yanks your " + player.armorName + "'s bottom the rest of the way off.  She leans close, smiling and inhaling the scent of your sex, savoring it like a aroma of a fine wine.  Licking her perfect lips with anticipation, she inverts the panties and holds them up for you to see.\n\n", false);
        outputText("They aren't panties at all, but instead some living creature.  The entire inside surface of the living garment is covered with fleshy pink nodules that wriggle constantly, practically dripping with a pungent lubricant that smells not unlike your own juices.  Horrifyingly, there is a large lump of flesh towards the front.  Its surface is ribbed and pulses, constantly swelling and shrinking.  It's clearly designed to enter the passage of anyone who wears it.  Worse yet is a smaller narrower protrusion on the backside.  This... creature... will certainly do its best to plug both your holes.\n\n", false);
        outputText("Your captor pulls it back and leans closer, letting the scent of her own fragrant puss fill the air.  It smells tangy and sweet and makes you ", false);
        if (player.vaginas[0].vaginalWetness <= VaginaWetness.WET) outputText("wet ", false);
        else if (player.vaginas[0].vaginalWetness <= VaginaWetness.DROOLING) outputText("drip on the chair ", false);
        else outputText("soak the chair ", false);
        outputText("from the heady taste that clings to your nostrils.  She speaks with confidence, \"<i>You needn't worry my dear.  I call this little creature my slut-panties.  You see, when you wear them they will stimulate every part of you.  They'll suck on your clit while the two large mounds grow inside you, filling you with wriggling pleasure.  Their slime is a wonderful lubricant and a mild aphrodisiac.  Between the constant touches and its secretions, you'll be horny and on the edge of orgasm in no time.</i>\"\n\n", false);
        outputText("You shake your head in desperate denial and start to cry as you realize she intends to keep you locked in some kind of hellish pleasure-prison.  The panties slide up your legs with ease, and with a swift movement, the demon lifts your ass up and slips them into position with a wet 'SQUELCH'.  You moan as it goes to work, wrapping your " + clitDescription(player) + " in slippery tightness.  The two 'lumps' you observed elongate, the ridged surfaces making your " + vaginaDescript(player, 0) + " quiver and dance with pleasure.  In mere seconds you're panting hotly and ready to cum.  Your crying devolves into heated moans of pleasure and longing.\n\n", false);
        outputText("Bright red eyes fill your vision as the beautiful visage comes closer.  She whispers hotly in your ear, \"<i>I bet it feels good doesn't it?  Do you feel wet and horny?  I bet you'd love to throw yourself on my cock and get off right now.</i>\"\n\n", false);
        outputText("You blink away the tears and nod frantically; you're so close!  But every time you feel an orgasm start to build the creature eases up just enough to keep you away from your orgasm.\n\n", false);
        outputText("\"<i>You see, these panties are attuned to our kind.  I've worked hard to breed a pair that could be taught to only provide release when a demon cums in or on them.  Fortunately for you, the nodules will actually open to allow a demon's dick in either passage.  And just for our succubi friends, they can grow a protrusion from the front, and transmit the sensations to you,</i>\" she says as she demonstrates by bringing her throbbing purplish prick close to your pink-enclosed groin.  The surface of the panties splits with a line down the front, reshaping to reveal your pink-covered camel-toe.\n\n", false);
        outputText("She asks, \"<i>I won't be a rapist my dear.  This cock will only enter you if you desire the pleasure it can bring you.  You could say no and just enjoy being on the edge until your will finally crumbles.</i>\"\n\n", false);
        if (player.effects.findByType(StatusAffects.CampMarble) >= 0) {
            outputText("Suddenly, a loud scream is heard down on the factory floor. You and your mistress turn to see Marble dashing up the stairs to the foremen's office.  Your mistress looks over at her and says with some amusement, \"<i>Oh ho!  So another cow has come to join in the fun.</i>\"\n\n\"<i>Sweetie! What has she done to you?</i>\" Marble exclaims, \"<i>What has she put on you?!</i>\"\n\n\"<i>Oh, so you knew this girl?</i>\" your mistress asks you, \"<i>It's a Lacta Bovine from the looks of it, so it seems this time I'll be adding a real cow to the pens.</i>\"  Marble turns to your mistress and brandishes her hammer, but the horror from the thought of your mistress being hurt causes you to spring forward and grab Marble.  The brief distraction gives your mistress a chance to sink a syringe into Marble's shoulder, and within moments she slumps onto the ground unconscious.\"\n\n", false);
            outputText("Your mistress turns back to you and smiles.\n\n\"<i>Well, she should make a fine replacement for you in the pens,</i>\" she says before tapping her chin thoughtfully and looking back at you, \"<i>Really is convenient that I don't have to worry about my new pet dying on me now, hun.</i>\"  Then she pushes you back into the chair and says \"<i>But first, didn't you want something from me?</i>\"\n\n", false);

        }
        outputText("It takes less than a second for you to moan out, \"<i>Taaaaake meeeee!</i>\"\n\n", false);
        outputText("She smiles and lifts you up from the chair with her strong arms, and sits down on the desk.  She lowers your symbiote-covered lips onto her demon dick and coos with delight as you slide down her length, taking the entire thing in your greedy depths.  If anything, the creature inside you makes sex even better - you feel a combination of her nub-covered cock fucking you and the ridges of the panty-creature as it continues to stimulate you.  It drives you mad with pleasure, and you begin bouncing yourself up and down, spearing your " + vaginaDescript(player, 0) + " with the demon's pole.\n\n", false);
        outputText("She giggles and reaches down.  Too aroused to care, you just keep fucking her and moaning in delight.  Her hands come up and begin to massage and rub your " + allBreastsDescript(player) + " taking special care to tweak and tug on your nipples.  They become as hard as ", false);
        if (player.nippleLength < .5) outputText("erasers ", false);
        else if (player.nippleLength < 3) outputText("bullets ", false);
        else outputText("tiny cocks ", false);
        outputText("in moments", false);
        if (player.breastRows.biggestLactation() > 2) outputText(" and start to drip with milk", false);
        outputText(".  You sigh with disappointment when her hands drop away.  You were so close to orgasm.  She reaches back up and places something wet and warm on ", false);
        if (player.breastRows.length <= 1) outputText("your " + nippleDescription(player, 0), false);
        if (player.breastRows.length > 1) outputText("your top " + nippleDescription(player, 0), false);
        outputText(".  You look down and see two star-shaped creatures made of glistening pink (just like your panties!) attached to your " + nippleDescription(player, 0) + "s.  They pulse and ripple as they constantly massage and suck.  ", false);
        if (player.breastRows.biggestLactation() > 1) outputText("Your milk erupts, spraying out from a tiny hole in the center of the star.  In response the creature increases the force of its sucking action, making you fountain milk constantly.  ", false);
        if (player.breastRows.length > 1) outputText("While you continue to fuck that meat pole and watch the creatures squirming on your nipples, more are affixed to each of your remaining " + nippleDescription(player, 0) + "s, until every single one is covered with its own tiny pleasure-creature.\n\n", false);
        outputText("A flood of hot demonic spunk unloads into your aching " + vaginaDescript(player, 0) + ", filling you with warmth.  The panty-plug in your backside seems to erupt as well, dumping a flood of undiluted aphrodisiacs into your body.  You squeal and cum, your eyes rolling back with pleasure as you sink down on the quivering member of your captor.  You twitch and moan, orgasming for far longer than the dick inside of you.  The pleasure goes on for minute after minute.  Your " + nippleDescription(player, 0) + "s each radiate satisfaction and pleasure as they manage to provide you with miniature orgasms of their own.  You moan, feeling relief at last and losing yourself in the wave of satisfaction that fills your body.\n\n", false);
        outputText("You blink a few times, and sit up, finding yourself back in the chair.  Your pink panty-creature has closed back up, trapping the demon's cum inside you.  The corrupted seed is so potent you can actually feel it tainting your body further as it spreads into your core.  You stretch languidly as you try to recover from the best orgasm of your life.  Perhaps you can escape?  No, you can't leave, the panties are already massaging your aching cunt and toying with your still-hard " + clitDescription(player) + ".  You squirm as it affects you, ramping your body's desires back up to the max.  Maybe if you take a load in the front AND back at the same time it'll sate the creature long enough for you to escape....\n\n", false);
        outputText("You set off into the factory, looking for the Omnibus and an Incubus to help.\n\n", false);
        outputText("<b>One month later:</b>\nYou lick the demonic jism from your lips and stretch, happy your mistress provided you with your fifth orgasm of the morning.  Normally she only lets her favorite slut get her off three or four times before lunch.  You squirm as your panties go to work, taking you back to that wonderful plateau of pleasure that only your masters and mistresses can bring you down from.  Thinking back, this really is the best way for things to end.  You thank your mistress and ask if you can see if any of the imps want to knock you up again.  She smiles condescendingly and nods, making your cunt squeeze with happiness.  Imps have such great cum!", false);
        gameOver();
        return;
    }
}
// [Turn Demon]
export function demonBadEnd(): void {
    outputText("", true);
    outputText("Advancing slowly, the succubus gives you a hungry look.  She extends a hand, allowing her fingers to lengthen into razor-sharp claws.  With a single expert slash, she cuts away everything holding together your " + player.armorName + ".  They fall into a discarded pile, already forgotten as your ", false);
    // [genderless]
    if (player.gender == 0) {
        outputText("entire body blushes read before the sexy seductress.  She looks at you, frowning as she murmers, \"<i>Now this just won't do.  You look more like a " + boyGirl(player) + " to me, so why don't I make the plumbing match the exterior?</i>\"\n\n", false);
        outputText("Her palm caresses your crotch, stoking the warmth inside you until it blazes white-hot with new sensation.  Your skin ripples and parts, ", false);
        if (player.breastRows.biggestTitSize() <= 1) {
            outputText("pushed apart the thick flesh of a powerful demonic member, complete with two swollen balls.", false);
            player.gender = 1;
            player.cocks.createCock();
            player.cocks[0].cockLength = 10;
            player.cocks[0].cockThickness = 2;
            player.cocks[0].cockType = CockTypesEnum.DEMON;
            player.balls = 2;
            player.ballSize = 3;
        }
        else {
            outputText("gushing with fluids as it shapes itself into a hungry demonic cunt.", false);
            player.gender = 2;
            player.vaginas.createVagina();
            player.vaginas[0].vaginalWetness = VaginaWetness.SLICK;
        }
        outputText("\n\n\"<i>Much better,</i>\" the demon coos, licking her lips as your ", false);
    }
    // [male]
    if (player.gender == 1) {
        // Multispoooooo
        if (player.cocks.length > 1) {
            outputText(multiCockDescriptLight(player) + " pulsate, straining for just a touch of the succubus' hand.  She paces around you, giggling and toying with you as your " + multiCockDescript(player) + " seem to follow her, twitching and thickening any time she takes a step closer.\n\n", false);
            outputText("She reaches out, cupping the underside of a shaft, slowly stroking your most sensitive places while she stops the bimbo-like voice and teases, \"<i>Awww, so hard and ready.  It looks to me like you're already a slave to your desires.  You're twitching and dripping, just from the soft touches of your enemy's fingers.  Are you truly so in need of release as to willingly offer it to me?  No, don't answer, your " + cockDescript(game.player, 0) + " already has.</i>\"\n\n", false);
            outputText("You glance down, seeing just how hard her words have made you.  You squirm your " + hipDescription(player) + "s pathetically, trying to hump her hand and increase the stimulation.  The succubus immediately releases you and draws back, shedding her secretary's clothes like a snake sheds its skin.  Now clad only in a tight leather corset and thigh-high stockings with garters, the succubus tosses you onto a table, surprising you with her raw strength.  Seemingly from nowhere, she produces a whip, winding it tightly around ", false);
            if (player.balls > 0) outputText("your " + ballsDescriptLight(player) + " and ", false);
            outputText("the bases of your " + multiCockDescriptLight(player) + ".\n\n", false);
            outputText("\"<i>There, that'll make sure you feel every squeeze and caress of my velvet walls, and keep you from getting off until you're ready,</i>\" says the succubus as she climbs the table and straddles your eager form.\n\n", false);
            outputText("She lifts herself up with her shapely legs and spreads her thighs, proudly revealing her puffy pierced folds.  They drip with demonic nectar as she wiggles over you, spattering you with demon-honey.  Slowly, nearly imperceptibly, she swivels the lewd opening closer and closer, and your cocks, as if possessed, angle themselves upward towards the juicy target.  The grinning succubus looks over her shoulder and asks, \"<i>Ready are we? Ok, I won't keep you waiting.</i>\"\n\n", false);
            outputText("Marvelous heat and wetness sweeps over you in a fluid motion, wrapping your " + cockDescript(game.player, 0) + " tightly.  You sigh happily, already lost in the feeling of having a succubus' tight walls wriggling around you.  Were you not already so corrupt, you would probably be coming already, but as it is, you can lie there and enjoy it, reveling in the sensations your unholy lover is spreading through your body.  You shiver, finally approaching your climax, but as it nears you find yourself denied by the whip binding your " + multiCockDescriptLight(player) + ".  It isn't just the physical tightness either – something else about it keeps your release buried deep, inaccessible.\n\n", false);
            outputText("\"<i>Have you hit it yet?</i>\" the succubus asks as she rocks on top of you, \"<i>I've placed a block inside you.  Don't worry, it's temporary, it'll only stop you from orgasming for a few days...</i>\"\n\n", false);
            outputText("You moan pitifully, begging for her to remove it and allow you to cum.\n\n", false);
            outputText("\"<i>Oh I can't remove it,</i>\" she says, \"<i>The only way you'll be rid of it with any sort of certainty is to melt through it with something stronger.  Something, like, I don't know, the focused remains of your soul and humanity.  Now you think on that while I melt away any doubts you might have.</i>\"\n\n", false);
            outputText("She resumes fucking you, driving you insane with need, all the while fiddling with her clit and pulling up a nipple to lick.  It feels so good, but you NEED to cum.  She fucks you like that for hours, until the table collapses under the pair of you and dumps you both on the floor. More than anything you crave release, and over time you cave in further and further to the need.  In time, you can feel the block weakening, melting, and eroding.  Your life has been distilled down into this one moment, this one desire, this need for release.  The block shatters, melting away under the force of your need.\n\n", false);
            outputText("A look of shock and pleasure spreads over the succubus's face as you release into her hot snatch, cumming with a force unlike anything you've felt before.  Her walls squeeze and caress in time with your orgasm, milking you of every drop.  Your body clenches and squeezes, shuddering as the orgasm continues for far longer than normal.  Though you don't feel like you're pushing out as much fluid as normal, somehow it feels even better, like a slow drip of pleasure and release.  When at last your " + cockDescript(game.player, 0) + " empties, you feel drained and strangely energized at the same time, and your entire torso is spattered with rapidly hardening pink crystals.\n\n", false);
            outputText("The slutty succubus stands up, her puffy vulva coated in a shining pink fluid.  Did that just come out of you?  She grunts, her eyes glowing for a moment as the pink goop disappears into her skin, vanishing entirely.\n\n", false);
            outputText("\"<i>Ahhhhh,</i>\" she sighs, \"<i>nothing like fresh Lethicite.  Mmmm, yours was potent!</i>\"\n\n", false);
            outputText("You stand up, dissatisfied at the sudden lack of sensation you're forced to endure.  The gloating demoness looks rather pleased with herself, and brimming with newfound power.  You resolve to ", false);
            if (player.effects.findByType(StatusAffects.MaraesLethicite) < 0) outputText("gather some yourself at the next opportunity...", false);
            else outputText("devour Marae's as soon as you get a chance.", false);
            outputText("You greedily gather up the lethicite splattered on your body and devour it, turning it into raw demonic power.  You really do need to get more of this... but first you know a certain demoness you intend to wrap around your ", false);
            if (player.demonCocks() > 0) outputText("growing", false);
            else outputText("new", false);
            outputText(" demon-cock for a few more orgasms.", false);
        }
        // SINGLEZ NITE
        else {
            outputText(multiCockDescriptLight(player) + " pulsates, straining for just a touch of the succubus' hand.  She paces around you, giggling and toying with you as your " + multiCockDescript(player) + " seems to follow her, twitching and thickening anytime she takes a step closer.\n\n", false);
            outputText("She reaches out, cupping the underside of the shaft, slowly stroking your most sensitive places while she stops the bimbo-like voice and teases, \"<i>Awww, so hard and ready.  It looks to me like you're already a slave to your desires.  You're twitching and dripping, just from the soft touches of your enemy's fingers.  Are you truly so in need of release as to willingly offer it to me?  No, don't answer, your " + cockDescript(game.player, 0) + " already has.</i>\"\n\n", false);
            outputText("You glance down, seeing just how hard her words have made you.  You squirm your " + hipDescription(player) + "s pathetically, trying to hump her hand and increase the stimulation.  The succubus immediately releases you and draws back, shedding her secretary's clothes like a snake sheds its skin.  Now clad only in a tight leather corset and thigh-high stockings with garters, the succubus tosses you onto a table, surprising you with her raw strength.  Seemingly from nowhere, she produces a whip, winding it tightly around ", false);
            if (player.balls > 0) outputText("your " + ballsDescriptLight(player) + " and ", false);
            outputText("the base of your " + cockDescript(game.player, 0) + ".\n\n", false);
            outputText("\"<i>There, that'll make sure you feel every squeeze and caress of my velvet walls, and keep you from getting off until you're ready,</i>\" says the succubus as she climbs the table and straddles your eager form.\n\n", false);
            outputText("She lifts herself up with her shapely legs and spreads her thighs, proudly revealing her puffy pierced folds.  They drip with demonic nectar as she wiggles over you, spattering you with demon-honey.  Slowly, nearly imperceptibly, she swivels the lewd opening closer and closer, and your cock, as if possessed, angles itself upwards towards the juicy target.  The grinning succubus looks over her shoulder and asks, \"<i>Ready are we? Ok, I won't keep you waiting.</i>\"\n\n", false);
            outputText("Marvelous heat and wetness sweeps over you in a fluid motion, wrapping your " + cockDescript(game.player, 0) + " tightly.  You sigh happily, already lost in the feeling of having a succubus' tight walls wriggling around you.  Were you not already so corrupt, you would probably be coming already, but as it is, you can lie there and enjoy it, reveling in the sensations your unholy lover is spreading through your body.  You shiver, finally approaching your climax, but as it nears you find yourself denied by the whip binding your " + cockDescript(game.player, 0) + ".  It isn't just the physical tightness either – something else about it keeps your release buried deep, inaccessible.\n\n", false);
            outputText("\"<i>Have you hit it yet?</i>\" the succubus asks as she rocks on top of you, \"<i>I've placed a block inside you.  Don't worry, it's temporary, it'll only stop you from orgasming for a few days...</i>\"\n\n", false);
            outputText("You moan pitifully, begging for her to remove it and allow you to cum.\n\n", false);
            outputText("\"<i>Oh I can't remove it,</i>\" she says, \"<i>The only way you'll be rid of it with any sort of certainty is to melt through it with something stronger.  Something, like, I don't know, the focused remains of your soul and humanity.  Now you think on that while I melt away any doubts you might have.</i>\"\n\n", false);
            outputText("She resumes fucking you, driving you insane with need, all the while fiddling with her clit and pulling up a nipple to lick.  It feels so good, but you NEED to cum.  She fucks you like that for hours, until the table collapses under the pair of you and dumps you both on the floor. More than anything you crave release, and over time you cave in further and further to the need.  In time, you can feel the block weakening, melting, and eroding.  Your life has been distilled down into this one moment, this one desire, this need for release.  The block shatters, melting away under the force of your need.\n\n", false);
            outputText("A look of shock and pleasure spreads over the succubus's face as you release into her hot snatch, cumming with a force unlike anything you've felt before.  Her walls squeeze and caress in time with your orgasm, milking you of every drop.  Your body clenches and squeezes, shuddering as the orgasm continues for far longer than normal.  Though you don't feel like you're pushing out as much fluid as normal, somehow it feels even better, like a slow drip of pleasure and release.  When at last your " + cockDescript(game.player, 0) + " empties, you feel drained and strangely energized at the same time.\n\n", false);
            outputText("The slutty succubus stands up, her puffy vulva coated in a shining pink fluid.  Did that just come out of you?  She grunts, her eyes glowing for a moment as the pink goop disappears into her skin, vanishing entirely.\n\n", false);
            outputText("\"<i>Ahhhhh,</i>\" she sighs, \"<i>nothing like fresh Lethicite.  Mmmm your's was potent!</i>\"\n\n", false);
            outputText("You stand up, dissatisfied at the sudden lack of sensation you're forced to endure.  The gloating demoness looks rather pleased with herself, and brimming with newfound power.  You resolve to ", false);
            if (player.effects.findByType(StatusAffects.MaraesLethicite) < 0) outputText("gather some yourself at the next opportunity...", false);
            else outputText("devour Marae's as soon as you get a chance.", false);
            outputText("  But first you know a certain demoness you intend to wrap around your ", false);
            if (player.demonCocks() > 0) outputText("growing", false);
            else outputText("new", false);
            outputText(" demon-cock for a few more orgasms.", false);
        }
    }
    // [female]
    else if (player.gender == 2) {
        outputText(vaginaDescript(player, 0) + " grows wet and ready, practically juicing itself as the demoness' hand caresses your inner thigh.  She teases, \"<i>Oh my! You're so wet and ready and I haven't even touched your moist little cum-receptacle.  You're a slut aren't you?  Who else would be so turned on by the idea of cumming until all your humanity drips out?</i>\"\n\n", false);
        outputText("The words make you blush hard, shaming you and stoking the growing fire between your " + legs(player) + ".  You know two things for certain: she's right and you're more turned on that ever.  You don't resist as the demoness easily lifts you up, setting you down on a table with your " + legs(player) + " spread.  \"<i>There,</i>\" she comments, \"<i>now your juicy snatch is on display, just like you've always wanted.</i>\"\n\n", false);
        outputText("She effortlessly swings her lissomelegs onto the table as she pulls herself up, mounting you as a man might.  You can feel waves of heat rolling off her sex, bathing your own slit in her warmth.  ", false);
        if (player.clitLength >= 2) outputText("Your " + clitDescription(player) + " pushes free, nuzzling against her hairless cunt and slipping inside, as if drawn in by its desire.  She openly moans, and begins rocking on top of you.  You gasp in delight as she rides your " + clitDescription(player) + ", fucking and grinding against it.  ", false);
        else outputText("She lowers herself down, rubbing smooth hairless netherlips over you, smearing you with her fragrant demon-honey.  You feel her clit grinding on your own, drawing out gasps of delight from both of your mouths as she relentlessly scissors against you.  ", false);
        outputText("In no time flat you feel your climax building.  Your " + vaginaDescript(player, 0) + " quivers and grows wetter in anticipation.  Tugging on your aching " + nippleDescription(player, 0) + "s and aching for release, you squirm under your demonic mistress, smashing your " + vaginaDescript(player, 0) + " against her in a lewd attempt to find your orgasm.  It does not happen, and you moan in disappointment as the pleasure continues to build, oblivious to your desire for orgasm.\n\n", false);
        outputText("\"<i>Have you hit it yet?</i>\" the succubus asks as she rocks on top of you, \"<i>I've placed a block inside you.  Don't worry, it's temporary, it'll only stop you from orgasming for a few days...</i>\"\n\n", false);
        outputText("You moan pitifully, begging for her to remove it and allow you to cum.\n\n", false);
        outputText("\"<i>Oh I can't remove it,</i>\" she says, \"<i>The only way you'll be rid of it with any sort of certainty is to melt through it with something stronger.  Something, like, oh I don't know, the focused remains of your soul and humanity.  Now you think on that while I grind away any remaining doubts you might have.</i>\"\n\n", false);
        outputText("The beautiful succubus on top of you picks up the pace, grinding harder against your " + vaginaDescript(player, 0) + " and " + clitDescription(player) + ", pushing you beyond anything you've ever felt before.  She leans down over you, licking her lips to reveal an inhumanly long tongue.  It snakes down, curving around you " + allBreastsDescript(player) + " before it arches up to flick a " + nippleDescription(player, 0) + ".  ", false);
        if (player.breastRows.hasFuckableNipples() && player.breastRows.biggestTitSize() > 2) outputText("You gasp as the tongue slides inside each of your breasts, violating them in turn thanks to your strange anatomy.\n\n", false);
        else outputText("You gasp as it curls around each of your " + nippleDescription(player, 0) + "s in turn, tugging them lewdly.\n\n", false);
        outputText("She fucks you like that for hours, until the table collapses under the pair of you and dumps you both on the floor. More than anything you find yourself craving release, and over time you cave in further and further to the need.  You start to feel the block weakening, melting, and eroding.  Your life has been distilled down into this one moment, this one desire, and this need for release.  The block shatters, melting away under the force of your need as you explosively orgasm.\n\n", false);
        outputText("Sparkling pink fluid splatters between the two of you as you cum, squirting hard", false);
        if (player.vaginas[0].vaginalWetness < VaginaWetness.SLAVERING) outputText(" for the first time", false);
        outputText(".  The succubus throws back her head and lets loose a moan of ecstasy, her entire body shivering with your own as both of your heads fill with fireworks of pleasure.  Nervelessly, she rolls off of you, her tail contracting hard around your leg while the two of you share the moment.\n\n", false);
        outputText("The succubus interrupts your delight by recovering far faster than you, rolling up to a standing position and watching something between your legs.  You prop yourself up on your elbows to see what the fuss is about.  Between your legs something curious is happening – a trickle of pinkish fluid is still escaping your nethers, rolling towards a rapidly expanding pool, along with every other drop of the pink goop.  Before your very eyes the pool grows until every drop of pink fluid has collected together, and it grows upwards, solidifying into a sparkling crystalline shape.\n\n", false);
        outputText("Before you can react, she grasps the newly-formed lethicite and noisily begins eating it, her eyes glowing with newfound power.  Watching her makes you more than a little jealous and angry with yourself.  You should've taken the lethicite and gained its power!  No use fretting about it, you can still fuck this succubus for a few hours before you go out in search of your own victims...\n\n", false);
    }
    // [HERM ENDING]
    else {
        // Buh.  Zombie fen need brains.
        outputText(multiCockDescript(player) + " and " + vaginaDescript(player, 0) + " grow wet and ready, both starting to leak fluids as the succubus' hand traces your inner thigh.  She teases, \"<i>Oh my! You're so wet and ready and I haven't even touched your moist little cum-receptacle.  And that throbbing cock!  How obscene!  You're a slut aren't you?  Who else would be so turned on by the idea of cumming until your humanity is splattered between my legs?</i>\"\n\n", false);
        outputText("The words make you blush hard, shaming you and stoking the growing fire between your legs.  You know two things for certain: she's right and you're more turned on that ever.  You don't resist as the demoness easily lifts you up, setting you down on a table with your legs spread.  \"<i>There,</i>\" she comments, \"<i>now all of your fun-parts are on display.  Maybe I should call in an incubus and a few imps to watch.  I bet you'd like that wouldn't you?</i>\"\n\n", false);
        outputText("She effortlessly swings her lissomelegs onto the table as she pulls herself up, mounting you in a single swift motion.  You can feel waves of heat rolling off her sex, bathing your " + cockDescript(game.player, 0) + " in her warmth.  ", false);
        if (player.clitLength >= 2) outputText("Your " + clitDescription(player) + " pushes free, nuzzling against her tight asshole and slipping inside, as if drawn in by its desire.  She openly moans, and begins rocking on top of you.  You gasp in delight as she rides your " + clitDescription(player) + ", fucking her ass and grinding against it.", false);
        else outputText("She lowers herself down, rubbing smooth hairless netherlips over your crotch and vulva, smearing you with her fragrant demon-honey.  You feel her clit grinding on your belly, drawing out gasps of delight from both of your mouths as she relentlessly works her body against your own.", false);
        outputText("\n\nMarvelous heat and wetness wraps your " + cockDescript(game.player, 0) + " tightly.  You sigh happily, already lost in the feeling of having a succubus' tight walls wriggling around you.  Were you not already so corrupt, you would probably be cumming already, but as it is, you can lie there and enjoy it, reveling in the sensations your unholy lover is spreading through your body.  You shiver, finally approaching your climax, but as it nears you find yourself denied by something deep inside you, pushing away your release and hiding it somewhere inaccessible.\n\n", false);
        outputText("\"<i>Have you hit it yet?</i>\" the succubus asks as she rocks on top of you, \"<i>I've placed a block inside you.  Don't worry, it's temporary, it'll only stop you from orgasming for a few days...</i>\"\n\n", false);
        outputText("You moan pitifully, begging for her to remove it and allow you to cum.\n\n", false);
        outputText("\"<i>Oh I can't remove it,</i>\" she says, \"<i>The only way you'll be rid of it with any sort of certainty is to melt through it with something stronger.  Something, like, I don't know, the focused remains of your soul and humanity.  Now you think on that while I melt away any doubts you might have.</i>\"\n\n", false);
        outputText("She resumes fucking you, driving you insane with need, all the while fiddling with her clit and pulling up a nipple to lick.  It feels so good, but you NEED to cum.  She fucks you like that for hours, until the table collapses under the pair of you and dumps you both on the floor. More than anything you crave release, and over time you cave in further and further to the need.  Eventually, you can feel the block weakening, melting, and eroding.  Your life has been distilled down into this one moment, this one desire, this need for release.  The block shatters, melting away under the force of your need.\n\n", false);
        outputText("A look of shock and pleasure spreads over the succubus' face as you release into her hot snatch, cumming with a force unlike anything you've felt before.  Her walls squeeze and caress in time with your orgasm, milking you of every drop.  Your body clenches and squeezes, shuddering as the orgasm continues for far longer than normal.  Though you don't feel like you're pushing out as much fluid as normal, somehow it feels even better, like a slow drip of pleasure and release.  When at last your " + cockDescript(game.player, 0) + " empties, you feel drained and strangely energized at the same time.\n\n", false);
        outputText("The slutty succubus stands up, her puffy vulva coated in a shining pink fluid.  Did that just come out of you?  She grunts, her eyes glowing for a moment as the pink goop disappears into her skin, vanishing entirely.\n\n", false);
        outputText("\"<i>Ahhhhh,</i>\" she sighs, \"<i>nothing like fresh Lethicite.  Mmmm, your's was soooo potent!</i>\"\n\n", false);
        outputText("You stand up, dissatisfied at the sudden lack of sensation you're forced to endure.  The gloating demoness looks rather pleased with herself, and brimming with her new-found power.  You resolve to ", false);
        if (player.effects.findByType(StatusAffects.MaraesLethicite) < 0) outputText("gather some yourself at the next opportunity...", false);
        else outputText("devour Marae's as soon as you get a chance.", false);
        outputText("  But first you know a certain demoness you intend to wrap around your ", false);
        if (player.demonCocks() > 0) outputText("growing", false);
        else outputText("new", false);
        outputText(" demon-cock for a few more orgasms.", false);
        outputText("  Before you get into that, you spy a small piece of pink crystal on the floor between your legs.  You snatch it and devour it before the succubus has a chance and eat it, turning part of your soul into new-found demonic strength before you return to a long night of sex...", false);
    }
    player.orgasm();
    dynStats("str", 2, "tou", 2, "spe", 2, "int", 2, "lib", 2, "sen", 2, "cor", 100);
    doNext(demonBadEnd2);
}
// epilogues
export function demonBadEnd2(): void {
    outputText("", true);
    if (player.gender == 1) outputText("As a demon, you rapidly moved up the ranks, eventually taking command of the factory and its inhabitants.  The previous commander was reduced to a willing cock-sleeve, ever-eager to obey your slightest order.  By the time the next year has come around, you've managed to earn the coveted honor of collecting the next champion.", false);
    else if (player.gender == 2) outputText("Now a full-fledged demon, you leave the factory, setting off on your own.  Over the next year you capture many foolish mortals, and even convince more than a few of them to give up their souls.  With your rapid gain in power, it's easy to rise in the demonic ranks, and in no time flat your power far exceeds that of the succubus that 'turned' you.  You live in luxury, surrounded by a harem of slaves, waiting in your camp for the next victim to step through...", false);
    else outputText("As a demon, you rapidly moved up the ranks, eventually taking command of the factory and its inhabitants.  The previous commander was reduced to a willing cock-sleeve, ever-eager to obey your slightest order.  By the time the next year has come around, you've managed to earn the coveted honor of collecting the next champion. It should be quite satisfying...", false);
    gameOver();
}
