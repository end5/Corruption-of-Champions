export function sharkTooth(type: number, player: Player): void {
    let changes: number = 0;
    let changeLimit: number = 2;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(2) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    if (type == 0)
        outputText("You have no idea why, but you decide to eat the pointed tooth. To your surprise, it's actually quite brittle, turning into a fishy-tasting dust. You figure it must just be a tablet made to look like a shark's tooth.", true);
    else if (type == 1)
        outputText("You have no idea why, but you decide to eat the pointed, glowing tooth. To your surprise, it's actually quite brittle, crumbling into a fishy-tasting dust. Maybe it's just a tablet made to look like a shark's tooth.", true);
    // STATS
    // Increase strength 1-2 points (Up to 50) (60 for tiger)
    if (((player.str < 60 && type == 1) || player.str < 50) && rand(3) == 0) {
        dynStats("str", 1 + rand(2));
        outputText("\n\nA painful ripple passes through the muscles of your body.  It takes you a few moments, but you quickly realize you're a little bit stronger now.", false);
        changes++;
    }
    // Increase Speed 1-3 points (Up to 75) (100 for tigers)
    if (((player.spe < 100 && type == 1) || player.spe < 75) && rand(3) == 0) {
        dynStats("spe", 1 + rand(3));
        changes++;
        outputText("\n\nShivering without warning, you nearly trip over yourself as you walk.  A few tries later you realize your muscles have become faster.", false);
    }
    // Reduce sensitivity 1-3 Points (Down to 25 points)
    if (player.sens > 25 && rand(1.5) == 0 && changes < changeLimit) {
        dynStats("sen", (-1 - rand(3)));
        changes++;
        outputText("\n\nIt takes a while, but you eventually realize your body has become less sensitive.", false);
    }
    // Increase Libido 2-4 points (Up to 75 points) (100 for tigers)
    if (((player.lib < 100 && type == 1) || player.lib < 75) && rand(3) == 0 && changes < changeLimit) {
        dynStats("lib", (1 + rand(3)));
        changes++;
        outputText("\n\nA blush of red works its way across your skin as your sex drive kicks up a notch.", false);
    }
    // Decrease intellect 1-3 points (Down to 40 points)
    if (player.inte > 40 && rand(3) == 0 && changes < changeLimit) {
        dynStats("int", -(1 + rand(3)));
        changes++;
        outputText("\n\nYou shake your head and struggle to gather your thoughts, feeling a bit slow.", false);
    }
    // Smexual stuff!
    // -TIGGERSHARK ONLY: Grow a cunt (guaranteed if no gender)
    if (type == 1 && (player.gender == 0 || (!player.vaginas.length > 0 && changes < changeLimit && rand(3) == 0))) {
        changes++;
        // (balls)
        if (player.balls > 0)
            outputText("\n\nAn itch starts behind your " + ballsDescriptLight(player) + ", but before you can reach under to scratch it, the discomfort fades. A moment later a warm, wet feeling brushes your " + sackDescript(player) + ", and curious about the sensation, <b>you lift up your balls to reveal your new vagina.</b>", false);
        // (dick)
        else if (player.cocks.length > 0)
            outputText("\n\nAn itch starts on your groin, just below your " + multiCockDescriptLight(game.player) + ". You pull the manhood aside to give you a better view, and you're able to watch as <b>your skin splits to give you a new vagina, complete with a tiny clit.</b>", false);
        // (neither)
        else
            outputText("\n\nAn itch starts on your groin and fades before you can take action. Curious about the intermittent sensation, <b>you peek under your " + player.armorName + " to discover your brand new vagina, complete with pussy lips and a tiny clit.</b>", false);
        player.vaginas.createVagina();
        player.clitLength = .25;
        dynStats("sen", 10);
        player.genderCheck();
    }
    // WANG GROWTH - TIGGERSHARK ONLY
    if (type == 1 && (!player.cocks.length > 0) && changes < changeLimit && rand(3) == 0) {
        // Genderless:
        if (!player.vaginas.length > 0)
            outputText("\n\nYou feel a sudden stabbing pain in your featureless crotch and bend over, moaning in agony. Your hands clasp protectively over the surface - which is swelling in an alarming fashion under your fingers! Stripping off your clothes, you are presented with the shocking site of once-smooth flesh swelling and flowing like self-animate clay, resculpting itself into the form of male genitalia! When the pain dies down, you are the proud owner of a new human-shaped penis", false);
        // Female:
        else
            outputText("\n\nYou feel a sudden stabbing pain just above your " + vaginaDescript(player) + " and bend over, moaning in agony. Your hands clasp protectively over the surface - which is swelling in an alarming fashion under your fingers! Stripping off your clothes, you are presented with the shocking site of once-smooth flesh swelling and flowing like self-animate clay, resculpting itself into the form of male genitalia! When the pain dies down, you are the proud owner of not only a " + vaginaDescript(player) + ", but a new human-shaped penis", false);
        if (player.balls == 0) {
            outputText(" and a pair of balls", false);
            player.balls = 2;
            player.ballSize = 2;
        }
        outputText("!", false);
        player.cocks.createCock(7, 1.4);
        dynStats("lib", 4, "sen", 5, "lus", 20);
        player.genderCheck();
        changes++;
    }
    // (Requires the player having two testicles)
    if (type == 1 && (player.balls == 0 || player.balls == 2) && player.cocks.length > 0 && changes < changeLimit && rand(3) == 0) {
        if (player.balls == 2) {
            outputText("\n\nYou gasp in shock as a sudden pain racks your abdomen. Within seconds, two more testes drop down into your " + sackDescript(player) + ", your skin stretching out to accommodate them. Once the pain clears, you examine <b>your new quartet of testes.</b>", false);
            player.balls = 4;
        }
        else if (player.balls == 0) {
            outputText("\n\nYou gasp in shock as a sudden pain racks your abdomen. Within seconds, two balls drop down into a new sack, your skin stretching out to accommodate them. Once the pain clears, you examine <b>your new pair of testes.</b>", false);
            player.balls = 2;
            player.ballSize = 2;
        }
        dynStats("lib", 2, "sen", 3, "lus", 10);
        changes++;
    }
    // Transformations:
    // Mouth TF
    if (player.faceType != FACE_SHARK_TEETH && rand(3) == 0 && changes < changeLimit) {
        outputText("\n\n", false);
        if (player.faceType > FACE_HUMAN && player.faceType < FACE_SHARK_TEETH)
            outputText("Your " + face(player) + " explodes with agony, reshaping into a more human-like visage.  ", false);
        player.faceType = FACE_SHARK_TEETH;
        outputText("You firmly grasp your mouth, an intense pain racking your oral cavity. Your gums shift around and the bones in your jaw reset. You blink a few times wondering what just happened. You move over to a puddle to catch sight of your reflection, and you are thoroughly surprised by what you see. A set of retractable shark fangs have grown in front of your normal teeth, and your face has elongated slightly to accommodate them!  They even scare you a little.\n(Gain: 'Bite' special attack)", false);
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
    // Tail TF
    if (player.tailType != TAIL_TYPE_SHARK && rand(3) == 0 && changes < changeLimit) {
        changes++;
        if (player.tailType == TAIL_TYPE_NONE)
            outputText("\n\nJets of pain shoot down your spine, causing you to gasp in surprise and fall to your hands and knees. Feeling a bulging at the end of your back, you lower your " + player.armorName + " down just in time for a fully formed shark tail to burst through. You swish it around a few times, surprised by how flexible it is. After some modifications to your clothing, you're ready to go with your brand new shark tail.", false);
        else
            outputText("\n\nJets of pain shoot down your spine into your tail.  You feel the tail bulging out until it explodes into a large and flexible shark-tail.  You swish it about experimentally, and find it quite easy to control.", false);
        player.tailType = TAIL_TYPE_SHARK;
    }
    // Hair
    if (player.hairColor != "silver" && rand(4) == 0 && changes < changeLimit) {
        changes++;
        outputText("\n\nYou feel a tingling in your scalp and reach up to your head to investigate. To your surprise, your hair color has changed into a silvery color, just like that of a shark girl!", false);
        player.hairColor = "silver";
    }
    // Skin
    if (((player.skinTone != "rough gray" && player.skinTone != "orange and black striped") || player.skinType != SKIN_TYPE_PLAIN) && rand(7) == 0 && changes < changeLimit) {
        outputText("\n\n", false);
        if (player.skinType == SKIN_TYPE_FUR || player.skinType == SKIN_TYPE_SCALES)
            outputText("Your " + player.skinDesc + " falls out, collecting on the floor and exposing your supple skin underneath.  ", false);
        else if (player.skinType == SKIN_TYPE_GOO)
            outputText("Your gooey skin solidifies, thickening up as your body starts to solidy into a more normal form. ", false);
        else if (type == 0)
            outputText("Your skin itches and tingles becoming slightly rougher and turning gray.  ", false);
        if (type == 0) {
            outputText("You abruptly stop moving and gasp sharply as a shudder goes up your entire frame. Your skin begins to shift and morph, growing slightly thicker and changing into a shiny grey color. Your skin now feels oddly rough too, comparable to that of a marine mammal. You smile and run your hands across your new shark skin.", false);
            player.skinType = SKIN_TYPE_PLAIN;
            player.skinDesc = "skin";
            player.skinTone = "rough gray";
            changes++;
        }
        else {
            outputText("Your skin begins to tingle and itch, before rapidly shifting to a shiny orange color, marked by random black stripes. You take a quick look in a nearby pool of water, to see your skin has morphed in appearance and texture to become more like a tigershark!", false);
            player.skinType = SKIN_TYPE_PLAIN;
            player.skinDesc = "skin";
            player.skinTone = "orange and black striped";
            changes++;
        }
    }
    // FINZ R WINGS
    if (player.wingType != WING_TYPE_SHARK_FIN && changes < changeLimit && rand(3) == 0) {
        outputText("\n\n", false);
        if (player.wingType > WING_TYPE_NONE)
            outputText("Your wings fold into themselves, merging together with your back.  ", false);
        outputText("You groan and slump down in pain, almost instantly regretting eating the tooth. You start sweating profusely and panting loudly, feeling the space between your shoulder blades shifting about. You hastily remove your " + player.armorName + " just in time before a strange fin-like structure bursts from in-between your shoulders. You examine it carefully and make a few modifications to your " + player.armorName + " to accommodate your new fin.", false);
        player.wingType = WING_TYPE_SHARK_FIN;
        player.wingDesc = "";
        changes++;
    }
    if (changes == 0) {
        outputText("\n\nNothing happened.  Weird.", false);
    }
}
