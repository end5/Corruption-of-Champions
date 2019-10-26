export function goldenSeed(type: number, player: Player): void {
    // 'type' refers to the variety of seed.
    // 0 == standard.
    // 1 == enhanced - increase change limit and no pre-reqs for TF
    let changes: number = 0;
    let changeLimit: number = 1;
    if (type == 1)
        changeLimit += 2;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(2) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    // Generic eating text:
    outputText("", true);
    outputText("You pop the nut into your mouth, chewing the delicious treat and swallowing it quickly.  No wonder harpies love these things so much!", false);
    // ****************
    // Stats:
    // ****************
    // -Speed increase to 100.
    if (player.spe < 100 && rand(3) == 0) {
        changes++;
        if (player.spe >= 75)
            outputText("\n\nA familiar chill runs down your spine. Your muscles feel like well oiled machinery, ready to snap into action with lightning speed.", false);
        else
            outputText("\n\nA chill runs through your spine, leaving you feeling like your reflexes are quicker and your body faster.", false);
        // Speed gains diminish as it rises.
        if (player.spe < 40)
            dynStats("spe", .5);
        if (player.spe < 75)
            dynStats("spe", .5);
        dynStats("spe", .5);
    }
    // -Toughness decrease to 50
    if (player.tou > 50 && rand(3) == 0 && changes < changeLimit) {
        changes++;
        if (rand(2) == 0)
            outputText("\n\nA nice, slow warmth rolls from your gut out to your limbs, flowing through them before dissipating entirely. As it leaves, you note that your body feels softer and less resilient.", false);
        else
            outputText("\n\nYou feel somewhat lighter, but consequently more fragile.  Perhaps your bones have changed to be more harpy-like in structure?", false);
        dynStats("tou", -1);
    }
    // antianemone corollary:
    if (changes < changeLimit && player.hairType == 4 && rand(2) == 0) {
        // -insert anemone hair removal into them under whatever criteria you like, though hair removal should precede abdomen growth; here's some sample text:
        outputText("\n\nAs you down the seed, your head begins to feel heavier.  Reaching up, you notice your tentacles becoming soft and somewhat fibrous.  Pulling one down reveals that it feels soft and fluffy, almost feathery; you watch as it dissolves into many thin, feathery strands.  <b>Your hair is now like that of a harpy!</b>", false);
        player.hairType = 1;
        changes++;
    }
    // -Strength increase to 70
    if (player.str < 70 && rand(3) == 0 && changes < changeLimit) {
        changes++;
        // (low str)
        if (player.str < 40)
            outputText("\n\nShivering, you feel a feverish sensation that reminds you of the last time you got sick. Thankfully, it passes swiftly, leaving slightly enhanced strength in its wake.", false);
        // (hi str – 50+)
        else
            outputText("\n\nHeat builds in your muscles, their already-potent mass shifting slightly as they gain even more strength.", false);
        // Faster until 40 str.
        if (player.str < 40)
            dynStats("str", .5);
        dynStats("str", .5);
    }
    // -Libido increase to 90
    if ((player.lib < 90 || rand(3) == 0) && rand(3) == 0 && changes < changeLimit) {
        changes++;
        if (player.lib < 90)
            dynStats("lib", 1);
        // (sub 40 lib)
        if (player.lib < 40) {
            outputText("\n\nA passing flush colors your " + face(player) + " for a second as you daydream about sex. You blink it away, realizing the item seems to have affected your libido.", false);
            if (player.vaginas.length > 0)
                outputText(" The moistness of your " + vaginaDescript(player) + " seems to agree.", false);
            else if (player.cocks.length > 0)
                outputText(" The hardness of " + sMultiCockDesc(game.player) + " seems to agree.", false);
            dynStats("lus", 5);
        }
        // (sub 75 lib)
        else if (player.lib < 75)
            outputText("\n\nHeat, blessed heat, works through you from head to groin, leaving you to shudder and fantasize about the sex you could be having right now.\n\n", false);
        // (hi lib)
        else if (player.lib < 90)
            outputText("\n\nSexual need courses through you, flushing your skin with a reddish hue while you pant and daydream of the wondrous sex you should be having right now.\n\n", false);
        // (90+)
        else
            outputText("\n\nYou groan, something about the seed rubbing your libido in just the right way to make you horny. Panting heavily, you sigh and fantasize about the sex you could be having.\n\n", false);
        // (fork to fantasy)
        if (player.lib >= 40) {
            dynStats("lus", (player.lib / 5 + 10));
            // (herm – either or!)
            // Cocks!
            if (player.cocks.length > 0 && (player.gender != 3 || rand(2) == 0)) {
                // (male 1)
                if (rand(2) == 0) {
                    outputText("In your fantasy you're winging through the sky, " + sMultiCockDesc(game.player) + " already hard and drizzling with male moisture while you circle an attractive harpy's nest. Her plumage is as blue as the sky, her eyes the shining teal of the sea, and legs splayed in a way that shows you how ready she is to be bred. You fold your wings and dive, wind whipping through your " + hairDescription(player) + " as she grows larger and larger. With a hard, body-slapping impact you land on top of her, plunging your hard, ready maleness into her hungry box. ", false);
                    if (player.cocks.length > 1) {
                        outputText("The extra penis", false);
                        if (player.cocks.length > 2)
                            outputText("es rub ", false);
                        else
                            outputText("rubs ", false);
                        outputText("the skin over her taut, empty belly, drooling your need atop her.  ", false);
                        outputText("You jolt from the vision unexpectedly, finding your " + sMultiCockDesc(game.player) + " is as hard as it was in the dream. The inside of your " + player.armorName + " is quite messy from all the pre-cum you've drooled. Perhaps you can find a harpy nearby to lie with.", false);
                    }
                }
                // (male 2)
                else {
                    outputText("In your fantasy you're lying back in the nest your harem built for you, stroking your dick and watching the sexy bird-girl spread her thighs to deposit another egg onto the pile. The lewd moans do nothing to sate your need, and you beckon for another submissive harpy to approach. She does, her thick thighs swaying to show her understanding of your needs. The bird-woman crawls into your lap, sinking down atop your shaft to snuggle it with her molten heat. She begins kissing you, smearing your mouth with her drugged lipstick until you release the first of many loads. You sigh, riding the bliss, secure in the knowledge that this 'wife' won't let up until she's gravid with another egg. Then it'll be her sister-wife's turn. The tightness of " + sMultiCockDesc(game.player) + " inside your " + player.armorName + " rouses you from the dream, reminding you that you're just standing there, leaking your need into your gear.", false);
                }
            }
            // Cunts!
            else if (player.vaginas.length > 0) {
                // (female 1)
                if (rand(2) == 0) {
                    outputText("In your fantasy you're a happy harpy mother, your womb stretched by the sizable egg it contains. The surging hormones in your body arouse you again, and you turn to the father of your children, planting a wet kiss on his slobbering, lipstick-gilt cock. The poor adventurer writhes, hips pumping futilely in the air. He's been much more agreeable since you started keeping his cock coated with your kisses. You mount the needy boy, fantasizing about that first time when you found him near the portal, in the ruins of your old camp. The feeling of your stiff nipples ", false);
                    if (player.breasts.hasFuckableNipples())
                        outputText("and pussy leaking over ", false);
                    else if (player.breasts.biggestLactation() >= 1.5)
                        outputText("dripping milk inside ", false);
                    else
                        outputText("rubbing inside ", false);
                    outputText("your " + player.armorName + " shocks you from the dream, leaving you with nothing but the moistness of your loins for company. Maybe next year you'll find the mate of your dreams?", false);
                }
                // (female 2)
                else {
                    outputText("In your fantasy you're sprawled on your back, thick thighs splayed wide while you're taken by a virile male. The poor stud was wandering the desert all alone, following some map, but soon you had his bright red rod sliding between your butt-cheeks, the pointed tip releasing runnels of submission to lubricate your loins. You let him mount your pussy before you grabbed him with your powerful thighs and took off. He panicked at first, but the extra blood flow just made him bigger. He soon forgot his fear and focused on the primal needs of all males – mating with a gorgeous harpy. You look back at him and wink, feeling his knot build inside you. Your aching, tender " + nippleDescription(player, 0) + "s pull you out of the fantasy as they rub inside your " + player.armorName + ". Maybe once your quest is over you'll be able to find a shy, fertile male to mold into the perfect cum-pump.", false);
                }
            }
        }
    }
    // ****************
    //   Sexual:
    // ****************
    // -Grow a cunt (guaranteed if no gender)
    if (player.gender == 0 || (!player.vaginas.length > 0 && changes < changeLimit && rand(3) == 0)) {
        changes++;
        // (balls)
        if (player.balls > 0)
            outputText("\n\nAn itch starts behind your " + ballsDescriptLight(player) + ", but before you can reach under to scratch it, the discomfort fades. A moment later a warm, wet feeling brushes your " + sackDescript(player) + ", and curious about the sensation, <b>you lift up your balls to reveal your new vagina.</b>", false);
        // (dick)
        else if (player.cocks.length > 0)
            outputText("\n\nAn itch starts on your groin, just below your " + multiCockDescriptLight(game.player) + ". You pull your manhood aside to give you a better view, and you're able to watch as <b>your skin splits to give you a new vagina, complete with a tiny clit.</b>", false);
        // (neither)
        else
            outputText("\n\nAn itch starts on your groin and fades before you can take action. Curious about the intermittent sensation, <b>you peek under your " + player.armorName + " to discover your brand new vagina, complete with pussy lips and a tiny clit.</b>", false);
        player.vaginas.createVagina();
        player.clitLength = .25;
        dynStats("sen", 10);
        player.genderCheck();
    }
    // -Remove extra breast rows
    if (changes < changeLimit && player.breastRows.length > 1 && rand(3) == 0 && !flags[kFLAGS.HYPER_HAPPY]) {
        changes++;
        outputText("\n\nYou stumble back when your center of balance shifts, and though you adjust before you can fall over, you're left to watch in awe as your bottom-most " + breastDescript(player, player.breastRows.length - 1) + " shrink down, disappearing completely into your ", false);
        if (player.breastRows.length >= 3)
            outputText("abdomen", false);
        else
            outputText("chest", false);
        outputText(". The " + nippleDescription(player, player.breastRows.length - 1) + "s even fade until nothing but ", false);
        if (player.skinType == SKIN_TYPE_FUR)
            outputText(player.hairColor + " " + player.skinDesc, false);
        else
            outputText(player.skinTone + " " + player.skinDesc, false);
        outputText(" remains. <b>You've lost a row of breasts!</b>", false);
        dynStats("sen", -5);
        player.breasts.removeBreastRow(player.breastRows.length - 1, 1);
    }
    // -Shrink tits if above DDs.
    // Cannot happen at same time as row removal
    else if (changes < changeLimit && player.breastRows.length == 1 && rand(3) == 0 && player.breastRows[0].breastRating >= 7 && !flags[kFLAGS.HYPER_HAPPY]) {
        changes++;
        // (Use standard breast shrinking mechanism if breasts are under 'h')
        if (player.breastRows[0].breastRating < 19) {
            player.shrinkTits();
        }
        // (H+)
        else {
            player.breastRows[0].breastRating -= (4 + rand(4));
            outputText("\n\nYour chest pinches tight, wobbling dangerously for a second before the huge swell of your bust begins to shrink into itself. The weighty mounds jiggle slightly as they shed cup sizes like old, discarded coats, not stopping until they're " + breastCup(player, 0) + "s.", false);
        }
    }
    // -Grow tits to a B-cup if below.
    if (changes < changeLimit && player.breastRows[0].breastRating < 2 && rand(3) == 0) {
        changes++;
        outputText("\n\nYour chest starts to tingle, the " + player.skinDesc + " warming under your " + player.armorName + ". Reaching inside to feel the tender flesh, you're quite surprised when it puffs into your fingers, growing larger and larger until it settles into a pair of B-cup breasts.", false);
        if (player.breastRows[0].breastRating < 1)
            outputText("  <b>You have breasts now!</b>", false);
        player.breastRows[0].breastRating = 2;
    }
    // ****************
    // General Appearance:
    // ****************
    // -Femininity to 85
    if (player.femininity < 85 && changes < changeLimit && rand(3) == 0) {
        changes++;
        outputText(modFem(player, 85, 3 + rand(5)), false);
    }
    // -Skin color change – tan, olive, dark, light
    if ((player.skinTone != "tan" && player.skinTone != "olive" && player.skinTone != "dark" && player.skinTone != "light") && changes < changeLimit && rand(5) == 0) {
        changes++;
        outputText("\n\nIt takes a while for you to notice, but <b>", false);
        if (player.skinType == SKIN_TYPE_FUR)
            outputText("the skin under your " + player.hairColor + " " + player.skinDesc, false);
        else
            outputText("your " + player.skinDesc, false);
        outputText(" has changed to become ", false);
        temp = rand(4);
        if (temp == 0)
            player.skinTone = "tan";
        else if (temp == 1)
            player.skinTone = "olive";
        else if (temp == 2)
            player.skinTone = "dark";
        else if (temp == 3)
            player.skinTone = "light";
        outputText(player.skinTone + " colored.</b>", false);
    }
    // -Grow hips out if narrow.
    if (player.hipRating < 10 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nYour gait shifts slightly to accommodate your widening " + hipDescription(player) + ". The change is subtle, but they're definitely broader.", false);
        player.hipRating++;
        changes++;
    }
    // -Narrow hips if crazy wide
    if (player.hipRating >= 15 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nYour gait shifts inward, your " + hipDescription(player) + " narrowing significantly. They remain quite thick, but they're not as absurdly wide as before.", false);
        player.hipRating--;
        changes++;
    }
    // -Big booty
    if (player.buttRating < 8 && changes < changeLimit && rand(3) == 0) {
        player.buttRating++;
        changes++;
        outputText("\n\nA slight jiggle works through your rear, but instead of stopping it starts again. You can actually feel your " + player.armorName + " being filled out by the growing cheeks. When it stops, you find yourself the proud owner of a " + buttDescription(player) + ".", false);
    }
    // -Narrow booty if crazy huge.
    if (player.buttRating >= 14 && changes < changeLimit && rand(4) == 0) {
        changes++;
        player.buttRating--;
        outputText("\n\nA feeling of tightness starts in your " + buttDescription(player) + ", increasing gradually. The sensation grows and grows, but as it does your center of balance shifts. You reach back to feel yourself, and sure enough your massive booty is shrinking into a more manageable size.", false);
    }
    // -Body thickness to 25ish
    if (player.thickness > 25 && changes < changeLimit && rand(3) == 0) {
        outputText(modThickness(player, 25, 3 + rand(4)), false);
        changes++;
    }
    // Remove odd eyes
    if (changes < changeLimit && rand(5) == 0 && player.eyeType > EYES_HUMAN) {
        if (player.eyeType == EYES_BLACK_EYES_SAND_TRAP) {
            outputText("\n\nYou feel a twinge in your eyes and you blink.  It feels like black cataracts have just fallen away from you, and you know without needing to see your reflection that your eyes have gone back to looking human.");
        }
        else {
            outputText("\n\nYou blink and stumble, a wave of vertigo threatening to pull your " + feet(player) + " from under you.  As you steady and open your eyes, you realize something seems different.  Your vision is changed somehow.", false);
            if (player.eyeType == EYES_FOUR_SPIDER_EYES)
                outputText("  Your multiple, arachnid eyes are gone!</b>", false);
            outputText("  <b>You have normal, humanoid eyes again.</b>", false);
        }
        player.eyeType = EYES_HUMAN;
        changes++;
    }
    // ****************
    // Harpy Appearance:
    // ****************
    // -Harpy legs
    if (player.lowerBody != LOWER_BODY_TYPE_HARPY && changes < changeLimit && (type == 1 || player.tailType == TAIL_TYPE_HARPY) && rand(4) == 0) {
        // (biped/taur)
        if (!player.isGoo())
            outputText("\n\nYour " + legs(player) + " creak ominously a split-second before they go weak and drop you on the ground. They go completely limp, twisting and reshaping before your eyes in ways that make you wince. Your lower body eventually stops, but the form it's settled on is quite thick in the thighs. Even your " + feet(player) + " have changed.  ", false);
        // goo
        else
            outputText("\n\nYour gooey undercarriage loses some of its viscosity, dumping you into the puddle that was once your legs. As you watch, the fluid pulls together into a pair of distinctly leg-like shapes, solidifying into a distinctly un-gooey form. You've even regained a pair of feet!  ", false);
        player.lowerBody = LOWER_BODY_TYPE_HARPY;
        changes++;
        // (cont)
        outputText("While humanoid in shape, they have two large, taloned toes on the front and a single claw protruding from the heel. The entire ensemble is coated in " + player.hairColor + " feathers from ankle to hip, reminding you of the bird-women of the mountains. <b>You now have harpy legs!</b>", false);
    }
    // -Feathery Tail
    if (player.tailType != TAIL_TYPE_HARPY && changes < changeLimit && (type == 1 || player.wingType == WING_TYPE_FEATHERED_LARGE) && rand(4) == 0) {
        // (tail)
        if (player.tailType > TAIL_TYPE_NONE)
            outputText("\n\nYour tail shortens, folding into the crack of your " + buttDescription(player) + " before it disappears. A moment later, a fan of feathers erupts in its place, fluffing up and down instinctively every time the breeze shifts. <b>You have a feathery harpy tail!</b>", false);
        // (no tail)
        else
            outputText("\n\nA tingling tickles the base of your spine, making you squirm in place. A moment later, it fades, but a fan of feathers erupts from your " + player.skinDesc + " in its place. The new tail fluffs up and down instinctively with every shift of the breeze. <b>You have a feathery harpy tail!</b>", false);
        player.tailType = TAIL_TYPE_HARPY;
        changes++;
    }
    // -Propah Wings
    if (player.wingType == WING_TYPE_NONE && changes < changeLimit && (type == 1 || player.armType == ARM_TYPE_HARPY) && rand(4) == 0) {
        outputText("\n\nPain lances through your back, the muscles knotting oddly and pressing up to bulge your " + player.skinDesc + ". It hurts, oh gods does it hurt, but you can't get a good angle to feel at the source of your agony. A loud crack splits the air, and then your body is forcing a pair of narrow limbs through a gap in your " + player.armorName + ". Blood pumps through the new appendages, easing the pain as they fill out and grow. Tentatively, you find yourself flexing muscles you didn't know you had, and <b>you're able to curve the new growths far enough around to behold your brand new, " + player.hairColor + " wings.</b>", false);
        player.wingType = WING_TYPE_FEATHERED_LARGE;
        player.wingDesc = "large, feathered";
        changes++;
    }
    // -Remove old wings
    if (player.wingType != WING_TYPE_FEATHERED_LARGE && player.wingType > WING_TYPE_NONE && changes < changeLimit && rand(4) == 0) {
        if (player.wingType != WING_TYPE_SHARK_FIN)
            outputText("\n\nSensation fades from your " + player.wingDesc + " wings slowly but surely, leaving them dried out husks that break off to fall on the ground. Your back closes up to conceal the loss, as smooth and unbroken as the day you entered the portal.", false);
        else
            outputText("\n\nSensation fades from your large fin slowly but surely, leaving it a dried out husk that breaks off to fall on the ground. Your back closes up to conceal the loss, as smooth and unbroken as the day you entered the portal.", false);
        player.wingType = WING_TYPE_NONE;
        player.wingDesc = "non-existant";
        changes++;
    }
    // -Feathery Arms
    if (player.armType != ARM_TYPE_HARPY && changes < changeLimit && (type == 1 || player.hairType == 1) && rand(4) == 0) {
        outputText("\n\nYou smile impishly as you lick the last bits of the nut from your teeth, but when you go to wipe your mouth, instead of the usual texture of your " + player.skinDesc + " on your lips, you feel feathers! You look on in horror while more of the avian plumage sprouts from your " + player.skinDesc + ", covering your forearms until <b>your arms look vaguely like wings</b>. Your hands remain unchanged thankfully. It'd be impossible to be a champion without hands! The feathery limbs might help you maneuver if you were to fly, but there's no way they'd support you alone.", false);
        changes++;
        player.armType = ARM_TYPE_HARPY;
    }
    // -Feathery Hair
    if (player.hairType != 1 && changes < changeLimit && (type == 1 || player.faceType == FACE_HUMAN) && rand(4) == 0) {
        outputText("\n\nA tingling starts in your scalp, getting worse and worse until you're itching like mad, the feathery strands of your hair tickling your fingertips while you scratch like a dog itching a flea. When you pull back your hand, you're treated to the sight of downy fluff trailing from your fingernails. A realization dawns on you - you have feathers for hair, just like a harpy!", false);
        player.hairType = 1;
        changes++;
    }
    // -Human face
    if (player.faceType != FACE_HUMAN && changes < changeLimit && (type == 1 || (player.earType == EARS_HUMAN || player.earType == EARS_ELFIN)) && rand(4) == 0) {
        outputText("\n\nSudden agony sweeps over your " + face(player) + ", your visage turning hideous as bones twist and your jawline shifts. The pain slowly vanishes, leaving you weeping into your fingers. When you pull your hands away you realize you've been left with a completely normal, human face.", false);
        player.faceType = FACE_HUMAN;
        changes++;
    }
    // -Gain human ears (keep elf ears)
    if ((player.earType != EARS_HUMAN && player.earType != EARS_ELFIN) && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nOuch, your head aches! It feels like your ears are being yanked out of your head, and when you reach up to hold your aching noggin, you find they've vanished! Swooning and wobbling with little sense of balance, you nearly fall a half-dozen times before <b>a pair of normal, human ears sprout from the sides of your head.</b> You had almost forgotten what human ears felt like!", false);
        player.earType = EARS_HUMAN;
        changes++;
    }
    if (rand(4) == 0 && player.gills && changes < changeLimit) {
        outputText("\n\nYour chest itches, and as you reach up to scratch it, you realize your gills have withdrawn into your skin.", false);
        player.gills = false;
        changes++;
    }
    // SPECIAL:
    // Harpy Womb – All eggs are automatically upgraded to large, requires legs + tail to be harpy.
    if (player.perks.findByType(PerkLib.HarpyWomb) < 0 && player.lowerBody == LOWER_BODY_TYPE_HARPY && player.tailType == TAIL_TYPE_HARPY && rand(4) == 0 && changes < changeLimit) {
        player.perks.create(PerkLib.HarpyWomb, 0, 0, 0, 0);
        outputText("\n\nThere's a rumbling in your womb, signifying that some strange change has taken place in your most feminine area. No doubt something in it has changed to be more like a harpy. (<b>You've gained the Harpy Womb perk! All the eggs you lay will always be large so long as you have harpy legs and a harpy tail.</b>)", false);
        changes++;
    }
    if (changes < changeLimit && rand(4) == 0 && ((player.ass.analWetness > 0 && player.perks.findByType(PerkLib.MaraesGiftButtslut) < 0) || player.ass.analWetness > 1)) {
        outputText("\n\nYou feel a tightening up in your colon and your [asshole] sucks into itself.  You feel sharp pain at first but that thankfully fades.  Your ass seems to have dried and tightened up.");
        player.ass.analWetness--;
        if (player.ass.analLooseness > 1)
            player.ass.analLooseness--;
        changes++;
    }
    // Nipples Turn Back:
    if (player.effects.findByType(StatusAffects.BlackNipples) >= 0 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nSomething invisible brushes against your " + nippleDescription(player, 0) + ", making you twitch.  Undoing your clothes, you take a look at your chest and find that your nipples have turned back to their natural flesh colour.");
        changes++;
        player.effects.remove(StatusAffects.BlackNipples);
    }
    // Debugcunt
    if (changes < changeLimit && rand(3) == 0 && player.vaginaType() == 5 && player.vaginas.length > 0) {
        outputText("\n\nSomething invisible brushes against your sex, making you twinge.  Undoing your clothes, you take a look at your vagina and find that it has turned back to its natural flesh colour.");
        player.vaginaType(0);
        changes++;
    }
    if (changes == 0)
        outputText("\n\nAside from being a tasty treat, it doesn't seem to do anything to you this time.", false);
}
