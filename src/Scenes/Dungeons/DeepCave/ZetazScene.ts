
// ZETAZ START
export function zetazTaunt(): void {
    if (monster.effects.findByType(StatusAffects.round) < 0) {
        monster.effects.create(StatusAffects.round, 1, 0, 0, 0);
        outputText("Zetaz asks, \"<i>Do you even realize how badly you fucked up my life, ", false);
        if (humanScore(player) >= 4) outputText("human", false);
        else outputText("'human'", false);
        outputText("?  No, of course not.  That's the kind of attitude I'd expect from one of you!</i>\"", false);
    }
    else {
        monster.effects.addValue(StatusAffects.round, 1, 1);
        if (monster.effects.getValue1Of(StatusAffects.round) == 2) outputText("\"<i>I lost my post!  And when you screwed up the factory?  I barely escaped with my life!  You ruined EVERYTHING!</i>\" screams Zetaz.", false);
        else if (monster.effects.getValue1Of(StatusAffects.round) == 3) outputText("Zetaz snarls, \"<i>Do you know how hard it is to hide from Lethice?  DO YOU HAVE ANY IDEA!?  I've had to live in this fetid excuse for a jungle, and just when I found some friends and made it livable, you show up and DESTROY EVERYTHING!</i>\"", false);
        else if (monster.effects.getValue1Of(StatusAffects.round) == 4) outputText("Zetaz explains, \"<i>I won't let you go.  I'm going to break you.</i>\"", false);
        else if (monster.effects.getValue1Of(StatusAffects.round) == 5) outputText("\"<i>Would it have been that bad to go along with me?  You've seen the factory.  We would've kept you fed, warm, and provided you with limitless pleasure.  You would've tasted heaven and served a greater purpose.  It's not too late.  If you come willingly I can make sure they find a good machine to milk you with,</i>\" offers the imp lord.", false);
        else if (monster.effects.getValue1Of(StatusAffects.round) == 6) outputText("\"<i>Why won't you fall?</i>\" questions Zetaz incredulously.", false);
        else if (monster.effects.getValue1Of(StatusAffects.round) == 7) outputText("The imp lord suggests, \"<i>If you give up and let me fuck your ass maybe I'll let you go.</i>\"", false);
        else if (monster.effects.getValue1Of(StatusAffects.round) == 8) outputText("Zetaz pants, \"<i>Just give up!  I'm nothing like the weakling you met so long ago!  I've been through hell to get here and I'm not giving it up just because you've shown up to destroy my hard work!</i>\"", false);
        else outputText("He glares at you silently.", false);
    }
}

// ZETAZ AI:
export function zetazAI(): void {
    // Zetaz taunts.
    zetazTaunt();
    outputText("\n\n", false);
    // If afflicted by blind or whispered and over 50% lust,
    // burns lust and clears statuses before continuing with
    // turn.
    if (monster.lust > 50 && (monster.effects.findByType(StatusAffects.Fear) >= 0 || monster.effects.findByType(StatusAffects.Blind) >= 0)) {
        monster.effects.remove(StatusAffects.Fear);
        monster.effects.remove(StatusAffects.Blind);
        monster.lust -= 10;
        outputText("Zetaz blinks and shakes his head while stroking himself.  After a second his turgid member loses some of its rigidity, but his gaze has become clear.  He's somehow consumed some of his lust to clear away your magic!", false);
    }

    // STANDARD COMBAT STATUS AFFECTS HERE
    if (monster.effects.findByType(StatusAffects.Stunned) >= 0) {
        outputText("Your foe is too dazed from your last hit to strike back!", false);
        monster.effects.remove(StatusAffects.Stunned);
        combatRoundOver();
        return;
    }
    const select: number = 1;
    const rando: number = 1;
    // Exgartuan gets to do stuff!
    if (player.effects.findByType(StatusAffects.Exgartuan) >= 0 && player.effects.getValue2Of(StatusAffects.Exgartuan) == 0 && rand(3) == 0) {
        exgartuan.exgartuanCombatUpdate();
        outputText("\n\n", false);
    }
    if (monster.effects.findByType(StatusAffects.Constricted) >= 0) {
        // Enemy struggles -
        outputText("Your prey pushes at your tail, twisting and writhing in an effort to escape from your tail's tight bonds.", false);
        if (monster.effects.getValue1Of(StatusAffects.Constricted) <= 0) {
            outputText("  " + monster.capitalA + monster.short + " proves to be too much for your tail to handle, breaking free of your tightly bound coils.", false);
            monster.effects.remove(StatusAffects.Constricted);
        }
        monster.effects.addValue(StatusAffects.Constricted, 1, -1);
        combatRoundOver();
        return;
    }
    // STANDARD COMBAT STATUS AFFECTS END HERE
    // -If over 50 lust and below 50% hp
    // --burns 20 lust to restore 20% hp.
    if (monster.lust > 50 && monster.HPRatio() <= .5) {
        outputText("The imp lord shudders from his wounds and the pulsing member that's risen from under his tattered loincloth.  He strokes it and murmurs under his breath for a few moments.  You're so busy watching the spectacle of his masturbation that you nearly miss the sight of his bruises and wounds closing!  Zetaz releases his swollen member, and it deflates slightly.  He's used some kind of black magic to convert some of his lust into health!", false);
        monster.addHP(0.25 * monster.eMaxHP());
        monster.lust -= 20;
        dynStats("lus", 2);
    }
    else {
        const attackChoice: number = rand(3);
        if (attackChoice == 0) {
            // Chucks faux-heat draft ala goblins. -
            outputText("Zetaz grabs a bottle from a drawer and hurls it in your direction!  ", false);
            if ((player.perks.findByType(PerkLib.Evade) >= 0 && rand(4) == 0) ||
                (player.perks.findByType(PerkLib.Flexibility) >= 0 && rand(6) == 0) ||
                (player.spe > 65 && rand(10) == 0) ||
                (player.perks.findByType(PerkLib.Misdirection) >= 0 && rand(100) < 20 && player.armorName == "red, high-society bodysuit")) {
                outputText("You sidestep it a moment before it shatters on the wall, soaking the tapestries with red fluid!", false);
            }
            else {
                outputText("You try to avoid it, but the fragile glass shatters against you, coating you in sticky red liquid.  It seeps into your " + player.skinDesc + " and leaves a pleasant, residual tingle in its wake.  Oh no...", false);
                // [Applies: "Temporary Heat" status]
                if (player.effects.findByType(StatusAffects.TemporaryHeat) < 0) player.effects.create(StatusAffects.TemporaryHeat, 0, 0, 0, 0);
            }
        }
        else if (attackChoice == 1) {
            // 'Gust' – channels a pidgy's spirit to beat
            // his wings and kick up dust, blinding the PC
            // next turn and dealing light damage. -
            outputText("The imp leaps into the air with a powerful spring, beating his wings hard to suspend himself in the center of his bedchamber.  Dust kicks up into the air from the force of his flight and turns the room into a blinding tornado!  Small objects smack off of you, ", false);
            // (causing little damage/
            if (player.tou > 60) outputText("causing little damage", false);
            else {
                let dmg: number = 1 + rand(6);
                dmg = takeDamage(dmg);
                outputText("wounding you slightly (" + dmg + ")", false);

            }
            outputText(" while the dust gets into your eyes, temporarily blinding you!", false);
            player.effects.create(StatusAffects.Blind, 1, 0, 0, 0);
        }
        // Gigarouse – A stronger version of normal imp's
        // 'arouse' spell. - copy normal arouse text and
        // spice it up with extra wetness!
        else {
            gigaArouse();
        }
    }
    combatRoundOver();
}

export function gigaArouse(): void {
    outputText("You see " + monster.a + monster.short + " make familiar arcane gestures at you, but his motions seem a lot more over the top than you'd expect from an imp.\n\n", false);
    dynStats("lus", rand(player.lib / 10) + player.cor / 10 + 15);
    if (player.lust < 30) outputText("Your nethers pulse with pleasant warmth that brings to mind pleasant sexual memories.  ", false);
    if (player.lust >= 30 && player.lust < 60) outputText("Blood rushes to your groin in a rush as your body is hit by a tidal-wave of arousal.  ", false);
    if (player.lust >= 60) outputText("Your mouth begins to drool as you close your eyes and imagine yourself sucking off Zetaz, then riding him, letting him sate his desires in your inviting flesh.  The unnatural visions send pulses of lust through you so strongly that your body shivers.  ", false);
    if (player.cocks.length > 0) {
        if (player.lust >= 60 && player.cocks.length > 0) outputText("You feel " + sMultiCockDesc(player) + " dribble pre-cum, bouncing with each beat of your heart and aching to be touched.  ", false);
        if (player.lust >= 30 && player.lust < 60 && player.cocks.length == 1) outputText(SMultiCockDesc(player) + " hardens and twitches, distracting you further.  ", false);
    }
    if (player.vaginas.length > 0) {
        if (player.lust >= 60 && player.vaginas[0].vaginalWetness == VAGINA_WETNESS_NORMAL && player.vaginas.length == 1) outputText("Your " + allVaginaDescript(player) + " dampens perceptibly, feeling very empty.  ", false);
        if (player.lust >= 60 && player.vaginas[0].vaginalWetness == VAGINA_WETNESS_WET && player.vaginas.length > 0) outputText("Your crotch becomes sticky with girl-lust, making it clear to " + monster.a + monster.short + " just how welcome your body finds the spell.  ", false);
        if (player.lust >= 60 && player.vaginas[0].vaginalWetness == VAGINA_WETNESS_SLICK && player.vaginas.length == 1) outputText("Your " + allVaginaDescript(player) + " becomes sloppy and wet, dribbling with desire to be mounted and fucked.  ", false);
        if (player.lust >= 60 && player.vaginas[0].vaginalWetness == VAGINA_WETNESS_DROOLING && player.vaginas.length > 0) outputText("Thick runners of girl-lube stream down the insides of your thighs as your crotch gives into the demonic magics.  You wonder what " + monster.a + monster.short + "'s cock would feel like inside you?  ", false);
        if (player.lust >= 60 && player.vaginas[0].vaginalWetness == VAGINA_WETNESS_SLAVERING && player.vaginas.length == 1) outputText("Your " + allVaginaDescript(player) + " instantly soaks your groin with the heady proof of your need.  You wonder just how slippery you could " + monster.a + monster.short + "'s dick when it's rammed inside you?  ", false);
    }
    if (player.lust >= 100) doNext(endLustLoss);
    else doNext(playerMenu);
}

export function defeatZetaz(): void {
    flags[kFLAGS.DEFEATED_ZETAZ]++;
    outputText("", true);
    // [VICTORY HP]
    if (monster.HP < 1) outputText("Zetaz sinks down on his knees, too wounded to continue.  He looks up at you with helpless rage in his eyes and asks, \"<i>Are you satisfied now?  Go ahead then, kill me.  My life hasn't been worth living since I met you anyway.</i>\"\n\n", false);
    // [VICTORY LUST]
    else outputText("Zetaz sinks down on his knees and fishes his massive, pre-drooling member from under his loincloth.  He looks up at you, nearly crying and moans, \"<i>Why? Ruining my life wasn't enough?  You had to make me jerk off at your feet too?  Just kill me, I don't want to live anymore.</i>\"\n\n", false);

    // [Both]
    outputText("He can't die yet.  You need to know where his master, this 'Lethice', is.  It sounds like she's the queen-bitch of the demons, and if you're going to break this vicious cycle", false);
    // ( or take her place)
    if (player.cor > 66) outputText(" or take her place", false);
    outputText(", you need to find her and bring her down.  What do you do?", false);
    outputText("\n\n(Sexually Interrogate, Kill Him, or Offer Safety for Information?)\n", false);
    // [Sexual Interrogation] [Brutal Interrogation] [Release for Info]
    simpleChoices("Sexual", sexualInterrogation, "End Him", endZetaz, "Safety", releaseZForInfo, "", null, "", null);
}

// [Release Zetaz 4 Info Win]
export function releaseZForInfo(): void {
    outputText("", true);
    outputText("You look the pathetic imp up and down and smirk.  He closes his eyes, expecting a summary execution, but you present him with an offer instead.  If he gives you more information on Lethice and where to find her, you'll let him go scot-free and avoid him if he doesn't make a nuisance of himself.\n\n", false);

    outputText("\"<i>Really?</i>\" questions Zetaz in a voice laced with suspicion. \"<i>For fuck's sake, I'm already a renegade.  I'll take your deal.  It's not like it costs me anything I wouldn't give away for free anyway.</i>\"\n\n", false);

    outputText("Invigorated by the promise of safety and freedom, Zetaz pulls himself up and ", false);
    if (monster.HP < 1) outputText("staggers", false);
    else outputText("nearly stumbles over his lust-filled cock", false);
    outputText(" towards a desk.  His dextrous fingers twist the knob on the top drawer expertly until a quiet 'click' comes from the furniture.  He reaches down to the divider between the drawers and pulls on it, revealing a tiny, hidden compartment.  In the center of it is a detailed map of the mountain and its upper reaches.  Though the secret diagram is quite crude, it depicts a winding trail that bypasses numerous harpy nests, minotaur caves, and various unrecognizable pitfalls to reach the cloud-shrouded mountain peak.  The drawing loses much of its detail once it gets to the demon fortifications at the top, but it can't be that hard to track down Lethice once you've entered the seat of her power, can it?\n\n", false);

    outputText("A loincloth flies across the room and deposits itself on your shoulder, startling you from your planning.  You glance back and see Zetaz tearing through his possessions, tossing his most prized items into a burlap sack with reckless abandon.  His whole body is trembling, as he ties it to a wooden pole, never once looking up at you.  Perhaps he fears you might change your mind?  ", false);
    if (player.cor > 66) {
        outputText("You smirk down at him and fold your arms over your ", false);
        if (player.breasts.biggestTitSize() < 1) outputText("chest", false);
        else outputText(breastDescript(game.player, 0), false);
        outputText(", relishing his fear while you consider the possibilities", false);
    }
    else if (player.cor > 33) {
        outputText("You chuckle with amusement and watch the little bastard scrabble to pack up his life, relishing the chance to pay him back for your previous encounter", false);
    }
    else {
        outputText("You sigh and rub at your temples as the little jerk scrabbles to pack his life away.  In spite of yourself, you actually feel a little bad about the situation", false);
    }
    outputText(".  Zetaz scrambles out the south door, never once looking back at the tattered remnants of his old home.", false);
    outputText("\n\n<b>(Key Item Acquired: Zetaz's Map!)</b>", false);
    player.keyItems.create("Zetaz's Map", 0, 0, 0, 0);
    cleanupAfterCombat();
}

// [Sexual Interrogation]
export function sexualInterrogation(): void {
    outputText("", true);
    outputText("You lean down until your face hovers over Zetaz, looking him square in the eyes, and explain, \"<i>I can't have someone who knows the way to the demons' headquarters dying before they tell me how to get there, can I?</i>\"\n\n", false);

    outputText("\"<i>Piss off!  You won't get shit from me,</i>\" retorts the defeated demon, \"<i>You may as well finish me off – I'll NEVER help a " + mf(player, "jackass", "bitch") + " like you!</i>\"\n\n", false);

    outputText("Smirking, you grab a strip of leather from Zetaz's dresser and dangle it over his nose.\n\n", false);

    outputText("You whisper, \"<i>This is all I'll need.</i>\"\n\n", false);

    outputText("The imp looks up with his face shrouded in confusion as he asks, \"<i>I don't think a string is going to help you much, " + mf(player, "dork", "skank") + ".</i>\"\n\n", false);

    outputText("\"<i>Give me a moment, my stupid little snitch,</i>\" you taunt as you lift his loincloth, exposing the hardness concealed within.  It pulses, growing harder and an inch longer just from your brief touch and exposure to the air.  Perhaps the imp isn't as in control of his libido as he'd like you to think?  You twirl the leather strip around his base and swiftly knot it, getting a tight enough seal to make Zetaz grunt in discomfort. \"<i>Ungh! What the fuck!? Ow, goddamnit!</i>\"\n\n", false);

    outputText("Even with his protests and cries, you watch his cock inflate further, until it looks stuffed far beyond his normal capacity.  It twitches and drools corrupted pre-seed as you slide your finger along his urethra, watching the member bob and twitch from the slight, soft touches.  That must feel quite good.  Zetaz confirms your hunch by lifting his hips off the ground, shaking them lewdly to try to grind against your hand.  You don't deny him the friction he craves, wrapping your hand around as much of his meat as your fingers will encircle until steady dribbles of fluid escape from his urethra.  The tainted nodules of his demonic dick begin to flare and pulse, signaling that his orgasm is almost upon him.\n\n", false);

    outputText("He's NOT allowed to cum – not until you get the information you need!   You slide your fingers down to his base in one fluid stroke, slamming your hand against his crotch as his orgasm starts to bubble up.  Before your opponent can attain release, you squeeze hard with one hand and tighten the leather cord with the other, clamping the base until the imp's cum is bottled up in his abdomen.  Zetaz cries, \"<i>No-no-no, let me cum, please let me cum, need-ta-cum-nooowwww.</i>\"\n\n", false);

    outputText("No such luck.  You wait for his body to stop convulsing and return to your task, one hand sealed around his base while the other begins to stroke him with firm, steady motions, sliding over the pebbly surface of his dick's nubs.  Your victim continues his begging and crying, but you don't let up as you pause to gather his escaped pre-cum and smear it over his tip.  Zetaz pants and groans, trembling and swelling in your hand from your efficient hand-job.   Spitting on your palm, you bump up the tempo and begin to stroke him hard and fast, sliding over his cockring-swollen prick with practiced, deliberate motions.\n\n", false);

    outputText("\"<i>Tell me how to find the head demon and I'll let you cum.  Don't make this any 'harder' than it has to be,</i>\" you whisper.\n\n", false);

    outputText("The demon's voice starts to crack in spite of his efforts to remain defiant. \"<i>No!  I-uh-won't let yo-oooooh-control meeeeee!</i>\"\n\n", false);

    outputText("His protests trail into incoherent squeals and babbles as you bottle up his second orgasm behind the tightly tied strap.  Again, his body twists and writhes in your grip, tortured with the ever-increasing sexual tension.  Zetaz looks up at you with a pleading, cross-eyed expression as he tries to regain his wits, but you just keep pumping away.  His balls are visibly pulsing and quivering, desperately needing to release the building pressure.  You meet his gaze calmly, your hands continuing their work on the bloated imp-cock, and you break into a knowing smile as he thickens in your grip for the third time.\n\n", false);

    outputText("\"<i>Well Zetaz?  Is three the lucky number, or do I have to switch hands and keep backing you up until you go mad?</i>\" you ask.\n\n", false);

    outputText("His hands claw the rug underneath him as he gasps, \"<i>You win, you win!  The desk has a-ah ah ahh-hidden drawer with a map to Lethice's hideout.  Please justletmecomeletmecomeletmecomePLEAAAAASE!</i>\"\n\n", false);

    outputText("What do you do?", false);
    // ['Release' him] [Tighten Strap] [End Him]
    simpleChoices("'Release'", sexualTortureReleaseZetaz, "Tighten", sexualTortureTightenZetaz, "End Him", endZetaz, "", null, "", null);
}

// [Release Him]
function sexualTortureReleaseZetaz(): void {
    outputText("", true);
    outputText("In a moment of kindness", false);
    if (player.lust > 60 || player.lib > 60 || player.cor > 60) outputText(", or perhaps perversion,", false);
    outputText(" you release the taut cord and allow it to unravel.  It whips off Zetaz's prick at once, tossed across the chamber by the pressure boiling forth from the imp's shaking hips.   Nodules flare from his prick's base to his tip in a wavelike motion, nearly doubling in size by the time the 'wave' reaches the ring around his crown.  Simultaneously, his urethra parts and unloads the imp's pent-up cargo with cannon-like force.  Sticky spoo rockets upwards, splatters against the ceiling, and hangs for a moment as the first 'jet' glazes the roof.  The eruption slowly peters out, letting the last of the rope fall over Zetaz's form.\n\n", false);

    outputText("You marvel at the force as you feel the next bulge moving up that demon-dick, squeezing past your gently caressing fingertips.  The next burst doesn't surface with the explosive force of its precursor, but what it lacks in speed, it makes up for in raw volume.  Zetaz's body arches and twitches with the effort of trying to push out three orgasms worth of backed-up demon jizz, and easily launches a missile-like globule onto his bed, where it splatters to great effect.  The third spout of white lacks the thrust and mass of it's predecessors, but easily puts out more love juice than most people's entire orgasm.  With a knowing smile on your face, you stroke out the remainder of his seed, keeping count of each rope as it's fired – four, five, six, seven, eight, nine, ten... eleven.\n\n", false);

    outputText("The imp has managed to soak his body, his nightstand, the bed, one of the walls, and even the ceiling, but all that pleasure came at a cost.  Zetaz's eyes have closed – the little guy passed out.  Smirking, you wipe your hand off in his hair and head over to the desk.  Somehow it managed to avoid the great spoogey deluge, and it almost seems to be standing aloof from the depraved scene that's devoured the rest of the room.  It has two visible drawers with a divider between them, but at a glance there doesn't seem to be enough room in the furniture to contain a hidden drawer or compartment.\n\n", false);

    outputText("You poke and prod around the desk's circumference, checking for false panels, weak points, or hidden latches inside the woodwork.  It refuses to give up its secrets, and you find yourself wondering for a moment if it's somehow capable of such deception before you dismiss the notion as insane.  For all this place's craziness, you doubt Zetaz would have a piece of possessed furniture in his bedroom.  Irritated, you yank open each drawer, but nothing seems out of the ordinary.  You grumble and slam them closed, twisting on the knobs with accidental fury.  A barely audible 'click' reaches your ears, and the divider between the drawers now protrudes ever so slightly forward, far enough to get a good grip on.\n\n", false);

    outputText("The unfinished wood behind the divider's facade chafes your fingertips as you gently pull on it, revealing a narrow, hidden compartment.  The only object inside is a detailed map of the mountain and its upper reaches.  Though the secret diagram is quite crude, it depicts a winding trail that bypasses numerous harpy nests, minotaur caves, and various unrecognizable pitfalls to reach the cloud-shrouded mountain peak.  The drawing loses much of its detail once it gets to the demon fortifications at the top, but it can't be that hard to track down Lethice once you've entered the seat of her power, can it?\n\n", false);

    outputText("You hear the faint scrabble of claws on stone and turn around, alarmed, but there's nothing there.  Not even Zetaz.  You imagine the cum-slicked imp sprinting from his own cave and into the deep woods, and the absurd image brings a smile to your face.\n\n", false);

    outputText("<b>(Key Item Acquired: Zetaz's Map!)</b>", false);
    player.keyItems.create("Zetaz's Map", 0, 0, 0, 0);
    cleanupAfterCombat();
}

// [Tighten Strap]
function sexualTortureTightenZetaz(): void {
    outputText("", true);
    outputText("\"<i>Idiot,</i>\" you taunt while you tighten the strap further.  Zetaz actually starts to bawl in anguish while another orgasm worth of cum backs up inside him.  You don't want him to get out of the binding while you search for his map, so you pull the cord under his leg and use the free end to bind his wrists together behind his back.  Fondling his turgid prick one last time for good luck, you leave him to struggle with his need as you search for your map.  It's difficult to blank out all the whines and cries, but you manage.\n\n", false);

    outputText("Zetaz's desk sits against a wall, just far enough away from the rest of the furniture to give it an aloof appearance.  You get up and walk closer, kicking the imp in the belly on your way in order to get a little peace and quiet.  The desk has two visible drawers with a divider between them, but at a glance there doesn't seem to be enough room in the furniture to contain a hidden drawer or compartment. It will take a more careful examination to uncover this 'map'.\n\n", false);

    outputText("You poke and prod around the desk's circumference, checking for false panels, weak points, or hidden latches inside the woodwork.  It refuses to give up its secrets, and you find yourself wondering for a moment if it's somehow capable of such deception before you dismiss the notion as insane.  For all this place's craziness, you doubt Zetaz would have a piece of possessed furniture in his bedroom.  Irritated, you yank open each drawer, but nothing seems out of the ordinary.  You grumble and slam them closed, twisting on the knobs with accidental fury.  A barely audible 'click' reaches your ears, and the divider between the drawers now protrudes ever so slightly forward, far enough to get a good grip on.\n\n", false);

    outputText("The unfinished wood behind the divider's facade grates your fingertips as you gently pull on it, revealing a narrow, hidden compartment.  The only object inside is a detailed map of the mountain and its upper reaches.  Though the secret diagram is quite crude, it depicts a winding trail that bypasses numerous harpy nests, minotaur caves, and various unrecognizable pitfalls to reach the cloud-shrouded mountain peak.  The drawing loses much of its detail once it gets to the demon fortifications at the top, but it can't be that hard to track down Lethice once you've entered the seat of her power, can it?\n\n", false);

    outputText("You hear the faint scrabble of claws on stone and turn around, alarmed, but there's nothing there.  Not even Zetaz.  You imagine the partly hog-tied imp sprinting from his own cave and into the deep woods, his bloated cock bobbing dangerously with every step, and the absurd image brings a smile to your face.\n\n", false);

    outputText("<b>(Key Item Acquired: Zetaz's Map!)</b>", false);
    player.keyItems.create("Zetaz's Map", 0, 0, 0, 0);
    cleanupAfterCombat();
}

// [END HIM – Ew death!]
function endZetaz(): void {
    outputText("", true);
    outputText("You grab his head in both hands and twist violently, popping his neck in an instant.  Glaring down at the corpse of your first demonic foe, you utter, \"<i>Wish granted.</i>\"\n\n", false);

    outputText("With him dead, you'll have to see if there's anything here that could lead you to this 'Lethice', so that you can put an end to the ridiculous plague affecting Mareth once and for all.  Perhaps you'll even get to go home, see your family, and have a rather violent talk with certain elders?  You tear through every drawer, pack, and chest in the place, but all you find are loincloths, extraordinairily fetishist porn, and junk.  Desperate for any clue, you even search under the bed and move the furniture, but it doesn't help.  You take your displeasure out on Zetaz's furnishings, slamming them into one another with all your might.\n\n", false);

    outputText("The chair in your hands disintegrates, the desk it impacts splinters apart, and you feel a little bit better.  A piece of parchment flutters back and forth in the middle of it all, freed from some hidden compartment and mostly unscathed.  One of the corners is ripped off, and it has a tear half way across, but it's still perfectly legible.  It's a map!  Though the secret diagram is quite crude, it depicts a winding trail that bypasses numerous harpy nests, minotaur caves, and various unrecognizable pitfalls to reach the cloud-shrouded mountain peak.  The drawing loses much of its detail once it gets to the demon fortifications at the top, but it can't be that hard to track down Lethice once you've entered the seat of her power, can it?\n\n", false);

    outputText("<b>(Key Item Acquired: Zetaz's Map!)</b>", false);
    player.keyItems.create("Zetaz's Map", 0, 0, 0, 0);
    // (ZETAZ IS DEAD)
    flags[kFLAGS.ZETAZ_DEFEATED_AND_KILLED]++;
    cleanupAfterCombat();
}

// [Lose to Zetaz]
export function loseToZetaz(): void {
    outputText("", true);
    outputText("\"<i>Well, isn't this familiar?</i>\" asks Zetaz as he watches your ", false);
    if (player.lust > 99) outputText("masturbating", false);
    else outputText("prone", false);
    outputText(" form with an amused expression, \"<i>The first champion in ages to retain " + mf(player, "his", "her") + " free will for more than a few minutes, and " + mf(player, "he", "she") + "'s brought to " + mf(player, "his", "her") + " knees by the very imp " + mf(player, "he", "she") + " escaped!  Once you've learned your proper place, you'll guarantee my safe return to my rightful station.  Perhaps I'll even get a promotion?  After all, you've defeated so many higher ranking demons already.</i>\"\n\n", false);

    // 'Fix' genderless folks.
    if (player.gender == 0) {
        outputText("He squints down at you with a bemused look and laughs, \"<i>How did you lose your gender anyhow?  Never mind, we've got to do something about that!</i>\"\n\n", false);
        outputText("Zetaz grabs a bottle, uncorks it, and crams it against your lips while you're still too dazed to resist.  He massages your throat to make you swallow the milk-like fluid, and in seconds the skin of your groin splits to form a new, virgin pussy.\n\n", false);
        player.vaginas.createVagina();
        player.gender = 2;
    }
    // (fork to male/female/herm)
    if (player.gender == 1) malesZetazOver();
    if (player.gender == 2) femaleZetazOver();
    if (player.gender == 3) hermZetazOver();
}

export function femaleZetazOver(): void {
    // F-drugged up and tied to the table in the main room.  Cum in by all the imps till pregnant.  Daily fuckings with accompanying mind-fuck.

    outputText("With your resistance ", false);
    if (player.HP < 1) outputText("beaten out of you", false);
    else outputText("moistening the delta of your legs", false);
    outputText(", you don't even struggle as Zetaz calls in several friends.   You just lie there, meek and defeated as they carry you through the tunnels towards their dining room, but from the looks in the small demons' eyes, they aren't planning to feed you... not with food, anyway.  The mob you defeated earlier seems to have returned, and gleeful hoots and catcalls ", false);
    if (player.cor < 33) outputText("shame", false);
    else if (player.cor < 66) outputText("confuse", false);
    else outputText("arouse", false);
    outputText(" you as you're thrown atop one of the tables.   You grunt as leather straps are produced and laid over your form to restrain you.  In the span of a minute you're completely immobilized from the neck down, and your " + legs(player) + " are kept spread to allow easy access to your " + vaginaDescript(player, 0) + ".\n\n", false);

    outputText("Shuffling as they remove their garments, the entire gang of imps, as well as Zetaz, are completely nude.  They've all grown full and hard from the sight of your nubile, restrained body, and in spite of yourself you get ", false);
    if (player.vaginas[0].vaginalWetness >= VAGINA_WETNESS_DROOLING) outputText("even more wet ", false);
    else outputText("a little wet ", false);
    outputText("from the masculine scent the aroused penises are producing.  ", false);
    if (player.cor < 33) outputText("How could you be turned on by such a repulsive situation?  You're going to be raped, brainwashed, and either kept as a pet or tossed in a milking tube for the rest of your life and your body is acting like some horny slut!", false);
    else if (player.cor < 66) outputText("You marvel at just how turned on you're getting from the strange situation.  You know you'll be raped, drugged, and used as a toy or milk cow, but your loins are thrumming with warm, wet desire.", false);
    else outputText("How did you wind up in such an arousing situation?  You're going to be raped, drugged, and probably milked in a factory for the rest of your life.  Your body is so fucking turned on that you know you'll love every second of it, but your desire to triumph and dominate mourns the loss of your freedom.", false);
    outputText("  The crowd draws close, but Zetaz's voice rings out, thick with the tone of command, \"<i>Not yet, my brothers; this one will be mine first.  I'll claim each of her holes, then you may each have your fill of her.</i>\"\n\n", false);

    outputText("The imps draw back, clearing a path for their leader to emerge, and the new, much more imposing Zetaz climbs atop the table.   He glances at your " + vaginaDescript(player, 0) + " with a knowing eye and smiles, walking further forward until he's standing next to your face with his tainted, corruption-filled cock dangling overhead.  You're so distracted by the purplish-black demon-cock swinging above your lips that the sharp pain takes you completely off-guard. As soon as the discomfort passes you twist your head around to try and find the source of your irritation.\n\n", false);

    outputText("Zetaz turns away from you, holding a spent needle in one of his clawed hands as he exchanges it with one of his kin for another injector, only this one is filled with viscous white fluid.  He glances down at you, watching you intently for some kind of reaction, but you won't give him the satisfaction!  Even so, the room is getting so bright that your eyes start tearing up, and you blink repeatedly to rid yourself of them before half-closing your eyelids to shield your poor pupils.  Maybe that's what he's looking for?  The room spins and you find yourself thankful to be strapped down; even if only seated, you would probably tumble from your chair.\n\n", false);

    outputText("Your lips start to tingle, and you run your tongue over them reflexively.  A shiver of pleasure worms through your body, and you instinctively press your " + legs(player) + " against the straps in an effort to spread them further.  Worse yet, your lips feel much plumper and fuller than a few moments ago.  ", false);
    if (flags[kFLAGS.NUMBER_OF_TIMES_MET_SCYLLA] > 0) outputText("Unbidden, Scylla's face comes to mind, and you realize the drugs coursing through your veins must be doing something similar to you!  Her visage changes to your own, though the thick, cock-sucking lips remain behind, eager to be penetrated.", false);
    else outputText("Unbidden, you imagine yourself with thick, cock-sucking lips, so swollen and bloated that they're slightly pursed and ready to be penetrated.", false);
    outputText("  Warm slipperiness slides over your lips again, feeling nearly as good as it would on your lower lips, and you pull your rebellious tongue back into your mouth with a gasp of pleasure.\n\n", false);

    outputText("This must be what Zetaz was waiting for, and the imp carefully injects the next chemical cocktail into the other side of your neck while you're distracted by orally masturbating your new mouth.  Your " + vaginaDescript(player, 0) + " ", false);
    if (player.vaginas[0].vaginalWetness >= VAGINA_WETNESS_DROOLING) outputText("gushes fresh fluids into a puddle on the table", false);
    else if (player.vaginas[0].vaginalWetness >= VAGINA_WETNESS_WET) outputText("drools a heavy flow of liquid arousal onto the hardwood table", false);
    else outputText("begins to dribble a steady flow of liquid on to the table's girl-slicked boards", false);
    outputText(".  ", false);
    if (player.inHeat) outputText("D", false);
    else outputText("Foreign d", false);
    outputText("esires wash through your doped up body, and your hungry slit practically demands to be filled with cock and injected with semen.  It wants to be filled with... with males, and with their hot, sticky cum. No, your hot little pussy doesn't want that – you do.  Gods above and below, you want to feel your belly pumped full of imp sperm until their offspring are wriggling in your womb.  And then you want them to come in you some more!\n\n", false);

    outputText("That sexy-... no, that bastard's dick is so hard, and he's starting to squat down now that you're feeling so randy.  The artificial needs coursing through your body make it hard to resist, but you've got to try!  You can't open your mouth and... mmm, it feels so good when those nubs touch your bee-stung lips.  Giving in isn't an option, even if you can't stop him from fucking your mouth, you aren't going to curl your tongue around his member and lick it, just like that, sliding it over his bumpy surface until corrupted pre is dripping onto your tongue. Yes, you won't let him out of your mouth until you can get his seed inside you, what are the other imps waiting for?  Your other hole is soooo hungry!\n\n", false);

    outputText("The mental incongruities in your thoughts are subsumed in a wave of hot, sticky fuck that's slowly rising over your thought processes with each lick and suck of Zetaz's thick, sexy dick.  He plunges down, stuffing your greedy gullet with the full length of his elephantine member and letting you know just how much he's enjoying your oral cum-hole.  You stick your tongue out to slurp at his desire-filled balls, swooning at the feeling of so much cock-flesh and slippery tongue sliding between your sensitive-as-a-pussy lips.  They twitch and pull tightly against his groin as he grabs your " + hairDescription(player) + " and hilts himself, allowing your lips to seal around his base as his urethra rhythmically bulges with orgasm.  A feeling of warm fullness grows in your gut with each pulse of cum, and you work your throat muscles to squeeze his tip of every last drop while you try to get off on the feelings coming from your mouth.\n\n", false);

    outputText("Once finished, the imp yanks himself up and pulls his orgasm-distended member from your lips with such force that it feels like each of his nubs is flicking your lips.  The orgy of oral pleasure sets off fireworks in your head strong enough to cross your eyes and make you babble incoherent 'thank-you's and moans.  You pant happily and lick the residue of Zetaz's love from your lips, shivering from the sensitivity and trying to come to grips with what happened.  It doesn't do much good – you're already getting horny again, and you still haven't been knocked up.  Even though you know something about the situation is deeply wrong, you're horny as hell and desperately desire to be a mother.  Maybe it's just that there's all these strong, handsome males here but none of them are fucking your horny, wet twat.  There's something wrong with that!", false);
    // (max libido, lust, and sensitivity)
    dynStats("lib", 100, "sen", 100, "lus=", 1000, "cor", 50);
    // [NEXT]
    doNext(femaleZetazOverPtII);
}

export function femaleZetazOverPtII(): void {
    outputText("", true);
    hideUpDown();
    outputText("While you're gathering your thoughts, Zetaz staggers back down the table and accepts a flask from one of his lackeys.  He guzzles down the bubbling pink fluid in seconds, and the effect is immediate and greatly pleasing to your fuck-happy worldview.  The imp's cock, which had been slowly retracting, thickens at the base and rapidly fills until it's hard and twitching with sexual need.  He glances down at your exposed " + vaginaDescript(player, 0) + " with a hungry look and drops to his knees, lining the nodule-ringed crown of his wondrous dick up with your lust-juiced slit.\n\n", false);

    outputText("You look down at the male and moan, \"<i>Please, hurry up... I need your cum... your babies.  Put your cock inside me!</i>\"\n\n", false);

    outputText("Zetaz looks surprised at your words, and you start to wonder why, but the heat and pleasure of his long, thick member spearing your love-canal interrupts your thought process.  He reaches up, and begins to ", false);
    if (player.breasts.biggestTitSize() < 1) outputText("tweak your " + nippleDescription(player, 0) + "s roughly, pulling and yanking on them as", false);
    else outputText("maul at your " + allBreastsDescript(player) + ", slapping and squeezing them as", false);
    outputText(" he begins to repeatedly thrust against your " + vaginaDescript(player, 0) + ", fucking you in earnest.  The wet slap of his balls on your juice-slimed body fills the chamber and sends ripples of pleasure down your " + legs(player) + ".  With your eyelids half-closed, your tongue masturbating your lips, and your pussy practically squirting lubricants at the end of each thrust, you must look like every male's wet dream.\n\n", false);

    outputText("Looking around, you see a large number of the imps are masturbating, and one of the larger ones has the audacity to speak while his boss is plowing your quim with savage strokes. \"<i>Since you already got to use her mouth, I'm going to put that fuck-hole to use.</i>\"\n\n", false);

    outputText("Zetaz waves his hand, though you aren't sure if it's meant to be a dismissal or permission.  He's far too busy sawing away, sending bliss up your spine that makes you giggle and moan with desire.  You're already getting close to cumming!  Before you can vocalize just how great it feels, the imp that spoke is straddling your neck and dangling his own member towards the bloated, bimbo-like cum-receptacle that was once your mouth.\n\n", false);

    outputText("The pointed tip of the new imps dick slides through your sensitive orifice with ease, at least until you feel the curvature of his knot pushing apart your jaw.  The utter wrongness of being double-teamed by tiny, huge-cocked demons rears its ugly head, and you knit your brows together as you try to puzzle it out.  What could be wrong?  Your lips feel so good and you're about to be pregnant.  Wasn't there a reason not to, though?  Something about saving something?  You unconsciously lick at the new invader as his knot finally gets past your lips, humming and sucking while your drug-dulled mind tries to refocus on something other than getting knocked up.\n\n", false);

    outputText("Zetaz grunts and bottoms out, punching his tip into your cervix and blasting a thick rope of seed into your empty, ready womb.  You climax immediately from the act, and moan into the dog-cock that fills your mouth, using it like a ballgag.  There wasn't any natural buildup, just spunk hitting your womb and then a climax strong enough to make you see white.  Your " + vaginaDescript(player, 0) + " clenches tightly, hugging and squeezing Zetaz's potent prick as it dumps more and more of his corrupt demon-spoo into your fertile breeding grounds.  The thick goop tingles in a way that makes you sure you'll be giving him a litter of horny little sons before long.  Maybe they'll fuck you like they do Vala?\n\n", false);

    outputText("The knot in your mouth pops out, and your belly gurgles, feeling very full.  The second imp must have come while his master was fertilizing your pussy.  You sigh and sag against your restraints as Zetaz steps away and lines begin to form.  In a few seconds, you've got a rubbery, spined cat-cock twitching inside your cunt, and are wrapping your sensitive lips around a horse-cock.  This must be what nirvana feels like.", false);
    player.orgasm();
    dynStats("cor", 50);

    // [Epilogue]
    doNext(zetazBadEndEpilogue);
}
export function zetazBadEndEpilogue(): void {
    outputText("", true);
    if (player.gender == 2) {
        outputText("The once-champion, " + player.short + " was raped repeatedly by every imp that survived her initial assault.  Her mind never recovered from the initial orgy, and she found herself happy to be named 'Fuck-cow'.  She quickly became a favorite of Zetaz's ever growing brood, and surprised them all with her fertility and rapidly decreasing incubation times.  Within a few months, she was popping out litters of tiny masters even faster than Vala.  Within a year, her body was so well trained and her womb so stretched that she could keep multiple litters growing within at all times.\n\n", false);

        outputText("It was rare for Fuck-cow's cunt or mouth to be empty, and she delighted in servicing any male she was presented with.  Her masters even captured bee-girls, so that fuck-cow's ass could be kept as pregnant as her belly.  Fuck-cow came to love her masters dearly, and with her constantly growing ability to birth imps, she was able to incubate enough troops for Zetaz to challenge Lethice's armies.  The imps never managed to overthrow the old demon lord, but the land was eventually divided in half, split between two growing demonic empires.", false);
    }
    else if (player.gender == 3) {
        // [Epilogue]
        outputText("The champion was fucked and brainwashed repeatedly for a few more days until Zetaz was sure she understood her place in the world.  Once rendered completely obedient, they released her from her bindings.  It was time she was turned over to Lethice.  ", false);
        if (player.wingType != WING_TYPE_BAT_LIKE_TINY || player.wingType != WING_TYPE_BAT_LIKE_LARGE) outputText("Zetaz gave her one of the weaker imps to penetrate and taught her to fly with her new, demonic wings.  ", false);
        else outputText("Zetaz gave her one of the weaker imps to penetrate during the journey.  ", false);
        outputText("With preparations complete, Zetaz, the champion, and a few dozen imps flew to the mountain peak.\n\n", false);

        outputText("The champion was presented to Lethice, and the demonic mistress was so pleased with Zetaz's gift that she gave him a pair of nubile slave-girls and promoted him over a small army of his own kind.  Once the imps departed, Lethice put the champion through her paces, using her as a fucktoy whenever the mood took her.  The rest of the time the champion was kept bound and unable to orgasm, tortured with unholy levels of arousal, but she didn't mind.  When Lethice allowed her to cum, the champion's orgasms were long and intense enough for her to love her mistress in spite of having to be so pent up.", false);
    }
    else {
        outputText("The imps never released the champion from that chamber after that.  'He' gave birth to a healthy litter of imps a few weeks later, and the hormones from the pregnancy ", false);
        if (player.breasts.biggestTitSize() < 1) outputText("created a decent set of chest-bumps.", false);
        else outputText("swelled her already impressive rack with milk.", false);
        outputText("  After that, the imps really took a liking to her, and she was let down from her restraints.  She never got much chance to get up though; she was well and truly fucked at every opportunity.  She was already hooked.  With her incredible libido and the constant fucking, staying was the easy choice.\n\n", false);

        outputText("After a few months the champion started to become acclimated to her new life, and began birthing imps in larger broods with shorter gestations.  She had become the ideal broodmother, and her worldview shrank down to two powerful priorities: acquiring cum, and birthing.", false);
    }
    player.orgasm();
    player.HP += 150;
    gameOver();
}

// [HERMS]
export function hermZetazOver(): void {
    // H-fed incubi and succubi potions repeatedly until demonic and even more over-endowed, knocked up while dick is milked by factory like milker + MC?
    outputText("With your resistance ", false);
    if (player.HP < 1) outputText("beaten out of you", false);
    else outputText("moistening the delta of your legs", false);
    outputText(", you don't even struggle as Zetaz calls in several friends.   You just lie there, meek and defeated as they carry you through the tunnels towards their dining room, but from the looks in the small demons' eyes, they aren't planning to feed you, not food anyway.  The mob you defeated earlier seems to have returned, and gleeful hoots and catcalls ", false);
    if (player.cor < 33) outputText("shame", false);
    else if (player.cor < 66) outputText("confuse", false);
    else outputText("arouse", false);
    outputText(" you as you're thrown atop one of the tables.   You grunt as leather straps are produced and laid over your form to restrain you.  In the span of a minute you're completely immobilized from the neck down, and your " + legs(player) + " are kept spread to allow easy access to your " + vaginaDescript(player, 0) + ".\n\n", false);

    outputText("Your willpower starts to come back, and you struggle in vain against the tight leather straps, accomplishing nothing.  Zetaz leers down at your double-sexed form and roughly manhandles both your male and female organs as he taunts, \"<i>I don't remember ", false);
    if (player.cocks.length == 1) outputText("both", false);
    else outputText("all", false);
    outputText(" of these being here when we met.  Did you sample some incubi draft?  Or did you guzzle some succubi milk?  Perhaps both?  In any event, I think you could do with a little more of each.</i>\"\n\n", false);

    outputText("Oh no.  Your eyes widen in fear at his bold declaration, but Zetaz only throws back his head and laughs, \"<i>Oh yes!</i>\"  He turns to the mob and orders something in a tongue you don't understand, then returns to fondling your " + cockDescript(game.player, 0) + ".  \"<i>How perverse.  Why would you have something like this when you have such a beautiful pussy hiding below it?</i>\" asks the imp lord.  Despite his questioning words, he doesn't stop stroking you until you're full, hard and twitching.  Your poor " + vaginaDescript(player, 0) + " is aching from being ignored with all this building sexual tension.\n\n", false);

    outputText("The sounds of numerous footfalls and clinking glass signal that the mob of imps has returned, bringing what sounds like hundreds of vials worth of their foul concoctions.  Zetaz releases your tumescent member and reaches over for something, then returns to your view bearing a ring gag.  Even turned on, defeated, and immobilized on a table, you try your best to fight him, but all that gets you is slapped.  The imp's palm smacks you hard enough to stun you and leave your ears ringing, and when you blink the stars from your eyes, your mouth is forced open with your tongue hanging out lewdly.\n\n", false);

    outputText("Another of Zetaz's brothers, or perhaps sons, hands him a tube with a funnel, and he easily threads the funnel's tube through the ring gag.  Foul remnants of whatever it was used for last leave a sour taste on your tongue, but worse yet is the knowledge that you're going to be force-fed tainted, body-altering, mind-melting drugs.  A drop of pre-cum hits your belly and your thighs grow ", false);
    if (player.vaginas[0].vaginalWetness < VAGINA_WETNESS_DROOLING) outputText("sticky", false);
    else outputText("soaked", false);
    outputText(" from the thoughts.  ", false);
    if (player.cor < 33) outputText("Are you really being turned on by such lewd, debased thoughts?", false);
    else if (player.cor < 66) outputText("Are you this much of a pervert?  Yes, it'll feel good, but you're a little ashamed of your body's immediate and lewd reaction.", false);
    else outputText("Are you really this much of a submissive?  Yeah, sucking down drinks like this is hot as hell, but you'd like to be doing it on your own terms.  At least you'll probably start cumming after a few bottles worth of the stuff.", false);
    outputText("\n\n", false);

    outputText("\"<i>Hey boss!  She's already starting to drip!  To think she tried to fight us.  She's showing us her true nature – that of a pervert-slut,</i>\" raves one of the horde.  You can't pick out the source of his voice in the crowd, but the words sting enough to make your whole body blush with ", false);
    if (player.cor < 33) outputText("shame", false);
    else if (player.cor < 66) outputText("confusion", false);
    else outputText("arousal", false);
    outputText(".  The imp lord nods in agreement and upends the first bottle over the funnel, channeling fragrant white fluid into your mouth.  It tastes fantastic!  Your throat instinctively gulps down the creamy delight before you can make a conscious decision.  The effect is immediate and strong.  Warmth builds on your chest as weight is added to your " + allBreastsDescript(player) + " while a gush of fluid squirts from your " + vaginaDescript(player, 0) + ".\n\n", false);

    outputText("Zetaz is just getting started.  Before you have time to react to your predicament, the next bottle is empty and thicker cream is flooding your mouth.  You don't swallow for a moment, so the imp pours another bottle in, backing up more of the fluid.  Faced with a choice between corruption and drowning, you try to gulp down enough liquid to breathe.  " + SMultiCockDesc(player) + " puffs and swells, spurting thick ropes of cum as it adds a half-dozen inches to its length.  Your eyes cross from the sudden change, but you get a fresh breath before the imps begin to pour several bottles in at once.\n\n", false);

    outputText("You swallow in loud, greedy gulps as your body is slowly warped by the fluids you're consuming.  Though your " + allBreastsDescript(player) + " and " + multiCockDescriptLight(player) + " sometimes shrink, they grow far more often, and after a few minutes of force-feeding, you're pleading for more each time they stop to let you breath.  You're a mess of sexual fluids, your tits are squirting milk, and your pussy squirts from every touch.  Demon horns are swelling from your brow, curling back over your ears", false);
    if (player.horns > 0) outputText(" and adding to your existing pair", false);
    else outputText(" and giving you an exotic, tainted appearance", false);
    outputText(".  ", false);
    if (player.lowerBody != LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS) outputText("Your " + feet(player) + " have been changing throughout the ordeal, but you didn't notice your " + legs(player) + " becoming such lissom, lengthy legs, or your heels growing long, high-heel-like spikes.  ", false);
    if (player.tailType != TAIL_TYPE_DEMONIC) outputText("A tail snakes around your leg and begins to caress your " + vaginaDescript(player, 0) + ", then plunges in to fuck the squirting orifice while you drink.  ", false);
    else outputText("Your tail snakes around your leg and begins to caress your " + vaginaDescript(player, 0) + ", then plunges in to fuck the squirting orifice while you drink.  ", false);
    outputText("The imps start hooting and cat-calling, laughing and prodding your body with their twisted demonic members as your mind starts to come apart in the seething oven of unnatural lust.\n\n", false);
    // NEXT
    dynStats("lib", 100, "sen", 100, "lus=", 1000, "cor", 50);
    doNext(hermZetazOverPtII);
}

export function hermZetazOverPtII(): void {
    hideUpDown();
    outputText("", true);
    outputText("You awaken midway through a loud moan and nearly jump out of your " + player.skinDesc + " in surprise, but the fire of your unnaturally stoked libido immediately reasserts yourself.  You twitch your hips to and fro, thrusting against a ", false);
    if (player.cocks.length > 1) outputText("number of ", false);
    outputText("mechanical milking device", false);
    if (player.cocks.length > 1) outputText("s", false);
    outputText(".  " + SMultiCockDesc(player) + " is sucked rhythmically, producing a loud, wet, slurping noise that echoes around the small room.  You're suspended from a set of shackles on the wall, next to Vala.  The sexy faerie is chained up in a similar manner, but she's locked in coitus with a well-endowed imp, and making no secret of her enjoyment.  The sexual sight stirs your well-stimulated loins and you groan, filling the milker with what feels like gallons of male cream over the next minute and a half.\n\n", false);

    outputText("Slumping forwards, you hang there, but the corruption and lust in your blood refuses to be sated.  " + SMultiCockDesc(player) + " is already hard again, and after sucking your cum down some tubes, the milker begins its oh-so-pleasurable work again.  Still, you estimate it will be a few minutes before it gets you off again, so you look around the room.  A platform is set up in front of you, about knee-height and poorly built.  Judging by its height, it's probably there so that the imps can use it to fuck you without having to fly.  There's also a pair of platforms built into the walls next to each of your shoulders, though their function is less clear.\n\n", false);

    outputText("The door to the room bangs open, and Zetaz steps in, followed by two scrawnier-than-usual imps.  He smiles when he sees you awake and flushed, and steps up onto the platform, rubbing his palms together in excitement.\n\n", false);

    outputText("\"<i>You took quite well to our little experiment,</i>\" he announces, \"<i>In fact, your body is a demonic fucking machine.  I won't be transforming you into an actual demon though.  But we're going to have to have a little training to get you ready to meet Lethice.  After all the trouble you've caused her, she might want to turn you herself, or maybe hook you up in a factory?  I can't say for sure.</i>\"\n\n", false);

    outputText("With a flourish, the imp lord discards his loincloth, tossing it over his shoulder to reveal his erect demon dick.  He taunts, \"<i>Like what you see?</i>\" and orders his lackeys, \"<i>Go on, you know what to do.</i>\"  The pair of scrawny imps flit up to their perches while Zetaz advances and strokes himself, preparing for penetration.  Dozens of unanswered questions swarm through your mind, actually distracting you from your pending orgasm enough to ask, \"<i>Wha-what are you going to do to me?</i>\"\n\n", false);

    outputText("\"<i>Shhhh, shhh,</i>\" responds Zetaz, \"<i>just relax my pet.</i>\"  He ", false);
    if (player.balls > 0) outputText("gently shifts your " + ballsDescript(player) + " out of the way and ", false);
    outputText("lines up with your drooling fuck-hole, and with a long smooth stroke, he's inside you.  You cum immediately and hard, barely noticing the chanting that has started up on the adjacent platforms.  Each squirt of cum is accompanied by a thrust from Zetaz, sliding over your lube-leaking walls with ease.  The orgasm lasts nearly twice as long as your last one.  It never seems to end, but when it slowly trails off, you find yourself wondering how soon you can cum again.\n\n", false);

    outputText("You envision yourself on all fours, being taken in both openings by a pair of imps while you suck off a shadowy figure that your mind recognizes as your lord and master.  " + SMultiCockDesc(player) + " spurts and squirts with each penetration as your twin violators get off and stuff you full of their yummy imp cum, glazing your insides with corrupted white goo.  Maybe you'll get pregnant this time?  It's been a few weeks since your last litter.  You suck harder on your master's penis and caress his balls until he shows his affection by giving you a salty treat.  He pulls out and blasts a few ropes over your face and hair, so you do your best to look slutty to encourage him.  When he finishes, you lick your lips and beam at your master, Zetaz.\n\n", false);

    outputText("Wait- what!?  You shake your head and clear away the fantasy, though your sexual organs' constant delightful throbbings aren't doing much to help.  Zetaz is still fucking your pussy, taking it with long slow strokes that would've made your demonic legs give out ages ago if you weren't hanging on a wall.  The chanting is so loud, so insidious.  You can feel it snaking through your brain, twisting your thoughts and ideas.  You close your eyes, desperate to fight it, but it only enhances the sensation of dick-milking and being fucked by your- no, by that demon!\n\n", false);

    outputText("Glancing down at him, you remark that the little bastard is quite handsome for an imp.  With his perfect jawline and marvelous cock, you find yourself hard-pressed to justify resisting him so long ago.    How did you resist his charms?  His cock feels soooo fucking good inside you.  With an explosive burst, " + sMultiCockDesc(player) + " erupts again, squirting thick arousal and submission into the milker while your " + vaginaDescript(player, 0) + " wrings Zetaz's nodule-ringed cock incessantly.  His turgid member bulges obscenely, and he starts to cum inside you, squirting master's thick seed into your breeding hole.  Breeding hole?  Why would you call your slutty fuck-hole a breeding hole?  Something seems off about that last thought, but you can't place it.\n\n", false);

    outputText("Your master finishes squirting inside you and withdraws, pawing at your milk-leaking teats for a moment as you continue to shudder and cum like a good bitch.  Wow, you really are a good bitch aren't you?  Pride wells in your breast as the imp's chanting reaches a crescendo and a relaxed smile forms on your " + face(player) + ".  Yes, you're a good, breeding bitch.   Master is smiling up at you and you know you've made him feel very happy.  Hopefully he'll come back soon and fuck you some more.  Your pussy feels so empty without him.", false);
    player.orgasm();
    dynStats("cor", 50);
    doNext(zetazBadEndEpilogue);
}

// M-Males – drugged & pegged, slowly have their memories erased/brainwashed.
// [Males]
export function malesZetazOver(): void {
    outputText("You've been so thoroughly ", false);
    if (player.HP < 1) outputText("beaten", false);
    else outputText("teased", false);
    outputText(" that you don't even resist as Zetaz calls in several friends.   You just lie there, meek and defeated as they carry you through the tunnels towards their dining room, but from the looks in the small demons' eyes, they aren't planning to feed you... not with food anyway.  The mob you defeated earlier seems to have returned, and gleeful hoots and catcalls ", false);
    if (player.cor < 33) outputText("shame", false);
    else if (player.cor < 66) outputText("confuse", false);
    else outputText("arouse", false);
    outputText(" you as you're thrown atop one of the tables and rolled onto your side.   You grunt as leather straps are produced and laid over your form to restrain you.  In the span of a minute you're completely immobilized from the neck down, and your " + legs(player) + " are kept spread to allow easy access to " + sMultiCockDesc(player) + " and " + assholeDescript(player) + ".\n\n", false);

    outputText("Zetaz leaps atop the table in a single bound, the barely concealed bulge in his loincloth dangling freely underneath.  You begin to struggle, fearful of the cruel imp's intentions and ", false);
    if (player.ass.analLooseness < 4) outputText("worried he'll try to force the mammoth between his thighs into your backdoor", false);
    else outputText("worried he'll take advantage of your well-stretched backdoor", false);
    outputText(", but your feverish efforts are in vain – the restraints are too strong!  The imps start to laugh at your predicament, and Zetaz pushes the humiliation a step further by stepping squarely on your groin, painfully squeezing your " + cockDescript(game.player, 0) + " with his heel.  He throws his arms up in the air and shouts, \"<i>I am your champion!  I have brought the scourge of our kind to his knees, and ground him under my heel!</i>\"\n\n", false);

    outputText("You whine plaintively and squirm under the imp's heel, utterly humiliated and helpless.  Zetaz smirks down at your taunts, \"<i>What's the matter?  Is something bothering you?</i>\"  He raises his foot, letting you gasp, \"<i>Thank you,</i>\" before he delivers a kick to your gut, knocking the wind out of you.  Restrained as you are, your body convulses underneath the leather, trying to curl up while your diaphragm spasms repeatedly.  A strap is fastened around your head, and a ring gag is slipped into your mouth, holding it open and ready for whatever sick plans the imps have devised.\n\n", false);

    outputText("The imp lord gestures at his underlings with an irritated scowl while you catch your breath, and the horde scrambles to satisfy him before they can draw his ire.  A funnel with a clear tube suspended from the bottle is passed from the mass of bodies up to Zetaz, along with a few bottles filled with roiling pink and red fluids.   The funnel's exit-tube is threaded into your ring gag and there's nothing you can do but grunt in wide-eyed panic while it's secured in place.  The first bottle of what you assume to be lust-draft is upended into the funnel, and there's nothing you can do but drink or drown.\n\n", false);

    outputText("It has a bubblegum-like taste that makes your tongue tingle as it passes into your belly, but the more pressing sensation of " + sMultiCockDesc(player) + " getting rock-hard lets you know exactly what you just drank.  Even though you just finished chugging down that foul drink, the imps uncork another pair of potions and dump them into the funnel.  The sweet fluids flood your mouth, and once again you swallow and chug rather than drown.   After you finish the last swallow, you pant, completely out of breath and getting hotter by the moment.  Your " + player.skinDesc + " tingles and sweats, growing more and more sensitive with every passing second while " + sMultiCockDesc(player) + " begins to drip and drool.\n", false);

    outputText("Zetaz hands the funnel to an underling with a knowing laugh and repositions himself over your " + legs(player) + ".  Warm pressure pushes at your " + assholeDescript(player) + ", forcing your clenching flesh to yield around the intruder.  Normally such an instant penetration would be irritating, or perhaps painful, but the sudden pressure on your prostate only serves to release a copious squirt of pre-cum.  An unwelcome moan slips past your lips and sends a titter of laughter through the mob.  As if losing wasn't bad enough – they all know you're getting off on having your " + buttDescription(player) + " penetrated.  The worst part is that the humiliation is just making the situation hotter and " + sMultiCockDesc(player) + " harder.\n\n", false);

    outputText("You nearly choke as an unexpected wave of potions washes through the funnel into your mouth, but you start swallowing and gulp down what feels like a half-dozen lust potions before you can breathe again.  " + SMultiCockDesc(player) + " starts squirting and spurting, dumping heavy loads of cum onto the table and your belly from the effects of the potions alone.  Zetaz gathers a massive dollop in his hand and smears it over himself, using it as lubricant to penetrate your poor, beleaguered asshole with savage, rough strokes that smash against your prostate at the apex of each thrust.  You moan loudly and lewdly through the tube in your mouth, wriggling against your restraints and spurting helplessly as you're penetrated over and over.\n\n", false);

    outputText("As soon as your orgasm concludes, another wave of aphrodisiacs enters your mouth, and you have to drink all over again.  Something warm flashes in your backside, making you feel stuffed and hot, but then Zetaz pulls his cock free and another, slightly different prick is buried in your asshole.  The imps take turns battering your backdoor, force-feeding you potions, and sometimes even jerking you off to see how much you squirt, until your mind shuts down from the constant assault of drugs, sex, and pleasure.\n\n", false);

    dynStats("lib", 100, "sen", 100, "lus=", 1000, "cor", 50);
    doNext(malesZetazOverPtII);
}

export function malesZetazOverPtII(): void {
    outputText("", true);
    outputText("You wake to a desert-dry, sandpapery feeling in the back of your throat as yet another moan escapes your mouth.   The ring gag is still there, and easily thwarts your tongues attempts to lick at your parched lips, but the jolts of pleasure exploding up your spine make it hard to get upset about it.  Hips rocking, you keep squirting and squirting from your orgasm, feeling each hot blast burst from your manhood until the wave of lust passes and you open your eyes.  You're in a dim cave, the one they used to hold Vala, and chained up to the wall in a similar manner.\n\n", false);

    outputText("While you observe the room, you realize that the waves of pleasure sliding up your spinal cord haven't stopped, and that your entire body is being shaken rhythmically.  You look down with a look of incredible, still-drugged confusion and behold the last thing you expected to see.  Somehow " + sMultiCockDesc(player) + " has been shrunk to less than half of its previous size", false);
    if (player.balls > 0) outputText(", and your balls have completely vanished", false);
    outputText("!  Just below your pint-sized shaft, a massive imp-cock is plowing in and out of your new, wet snatch with juicy-sounding slaps.  Y-you're a hermaphrodite!?  And what's happening to your dick?\n\n", false);

    outputText("A nearby imp with a limp dick and a bored-but-tired look on his face steps up after your orgasm and slathers your dick in some strange, pungent cream, chuckling up at you while he does so, \"Heh heh, your ", false);
    if (player.cocks.length == 1) outputText("cock's", false);
    else outputText("cocks're", false);
    outputText(" gonna be so tiny ", false);
    if (player.cocks.length == 1) outputText("it", false);
    else outputText("they", false);
    outputText("'ll make a baby's look huge.  Boss said we need to dose you with Reducto after each orgasm, so try not to cum too much while we gangbang you, okay?  Oh yeah, I almost forgot, I have to inject something too...</i>\"\n\n", false);

    outputText("The little demon picks an small, glass injector stamped in black ink with the words 'GroPlus'.  Your eyes go wide at sight of the lettering.  As your maleness dwindles, the imp carelessly flicks it to the side and lines the needle's tip up with your tiny bud – they're going to shrink your dick to nothing and pump your clit full of growth chemicals!  He plunges it in, lighting your world up with pain, but the bindings around your body prevent you from escaping or injuring yourself in struggle.  Heat erupts inside your clitty, and it visibly swells up until it nearly reaches the size of your shrinking wang.  Your rapist, or 'sexual partner' with how horny you are, thrusts hard inside you and swells, stroking your walls with the nubby protrusions of a demon's cock.  It feels so good that another orgasm builds on the spot.\n\n", false);

    outputText("With hot, tainted jism filling your womb, your body starts to spasm and squirt, actually making your increasingly tiny dick shake around from the force of ejaculation.  It splatters off the imp's horns and forehead, but he doesn't seem to mind much as he slumps down, dragging his still-rigid member from your cock-hungry fem-sex.  You moan wantonly, still spurting as the imp 'medic' applies another layer of Reducto to " + sMultiCockDesc(player) + ", rapidly shortening ", false);
    if (player.cocks.length == 1) outputText("it until it's", false);
    else outputText("them until they're", false);
    outputText(" barely three inches long, even while hard.  He pulls out another plunger and rams the needle into your still-aching clit, making it swell until it's almost five inches long and trembling like your manhood used to.\n\n", false);

    outputText("\"<i>Now you're starting to look like a proper bitch.  ", false);
    if (player.breasts.biggestTitSize() < 2) outputText("It doesn't look right without a decent rack, but boss said no tits for the new breeding bitch.  Sure makes it hard to get excited about fucking that new twat of yours though...", false);
    else outputText("With a rack like that and a nice, wet cunt, you'll have the other guys lining up for their turn in no time...", false);
    outputText("</i>\" rambles one of the imps.  You groan and shake your hips lewdly, still turned on after all the fucking, feeling empty without the unholy heat of an imp inside you.  A hunger buzzes away in your womb, demanding you get pregnant, and you're thrilled to see Zetaz stride in with a raging, fully erect stiffy.  It throbs hungrily as he smiles up at you and climbs atop the conveniently positioned platform.\n\n", false);

    outputText("\"<i>It looks like you're ready now, huh?  Nice, wet cunt, barely discernible dick, and a huge, lewd clit.  I considered getting rid of your dick, but I figured it would be more humiliating to keep that to remind you how far you've fallen.  And with all that cum dripping from that hole above your " + legs(player) + ", you'll probably get pregnant, but I should make sure shouldn't I?</i>\" questions your old foe.\n\n", false);

    outputText("Before he gets started, Zetaz picks up another needle of GroPlus and jams it into your clit, making the love-button swell up to the size of a large, veiny prick.  He strokes it hard and slides himself into you, spearing you while you're distracted by the sensations of your over-sized buzzer.   The sudden penetration makes your eyes cross and your tongue loll out from its ring-gag prison.  You moan and pant, shaking against him, still dripping the last of your male orgasms from your tiny, under-sized dick onto your long, thick clit.\n\n", false);

    outputText("Zetaz laughs and pumps at the huge button; even though it's quite lacking in femininity, it still makes you squeal like a little girl.  Your " + legs(player) + " shake wildly, trembling against the wall while your juicy snatch gets fucked good and hard and the mixed jism boils out around the imp lord's massive, swollen member.   The fucking is hard, fast, and so brutal that you get off multiple times in the span of a few minutes, though the imps don't even try to dose you for each one.  Zetaz slaps your " + buttDescription(player) + " a few times before he pushes himself to the hilt, stretching your well-fucked cunt to its limits.  He twitches and grunts, and a blast of gooey heat suffuses your core with corrupt pleasure.  Somehow you know, just know, that you'll be pregnant from this, but you have a hard time caring.  It feels too good...\n\n", false);

    dynStats("lib", 100, "sen", 100, "lus=", 1000, "cor", 50);
    doNext(zetazBadEndEpilogue);
}
