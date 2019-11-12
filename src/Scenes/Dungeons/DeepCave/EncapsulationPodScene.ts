// Encapsulation Start
// [Get it]
export function getSwordAndGetTrapped(): void {
    outputText("", true);
    outputText("You start to walk over to the corpse and its discarded weapon, but halfway through your journey, the unexpected happens.   The leaf-like petals shift underfoot, snapping up with lightning-quick speed.  You ", false);
    if (player.spe < 50) outputText("fall flat on your " + buttDescription(player) + ", slipping on the slick, shifting surface.", false);
    else outputText("stumble and nearly fall, slipping on the shifting, slick surface.", false);
    // [ADD 'CONTINUE' ON]
    getTrappedContinuation();
}
// [Fly-Get It]
export function flyToSwordAndGetTrapped(): void {
    outputText("", true);
    outputText("You start to fly over to the corpse and its discarded weapon, but about halfway through your flight, the unexpected happens.  One of the leaf-like petals springs up and slaps into your face with stunning force, dropping you to the ground.  You try to pick yourself up, but slip on the shifting, slick surface of another pad.", false);
    // [ADD 'CONTINUE' ON]
    getTrappedContinuation();
}

// [CONTINUE ON]
export function getTrappedContinuation(): void {
    outputText("\n\nA loud 'slap' nearly deafens you, and the visible light instantly diminishes to a barely visible, purple glow.  The fungal 'leaves' have completely encapsulated you, sealing you inside a fleshy, purple pod.  No light can penetrate the thick sheath surrounding you, but muted illumination pulses from the flexing walls of your new prison, oscillating in strength with the subtle shifts of the organic chamber.\n\n", false);

    outputText("The sweet aroma that you smelled before is much, MUCH stronger when enclosed like this.  It's strong enough to make you feel a little dizzy and light-headed.  Deciding that you had best escape from this impromptu prison with all possible speed, you try to find a joint to force your way out through, but the pod's walls appear completely seamless.  You pound on the mushy surface, but your repeated blows have little effect.  Each impact brings with it a burst of violet radiance, but the fungus seems built to resist such struggles.  Moisture beads on the capsule's walls in larger and larger quantities, drooling into a puddle around your feet.\n\n", false);

    outputText("Meanwhile, a number of tentacles have sprung up from below, and are crawling up your " + legs(player) + ".  It's becoming fairly clear how the skeleton wound up in this cave...  You've got to escape!", false);

    // [FIGHT]
    startCombat(new EncapsulationPod(), true);
}

export function encapsulationPodAI(): void {
    // [Round 1 Action]
    if (monster.effects.findByType(StatusAffects.Round) < 0) {
        outputText("You shiver from the feeling of warm wetness crawling up your " + legs(player) + ".   Tentacles brush against your ", false);
        if (player.balls > 0) {
            outputText(ballsDescriptLight(player) + " ", false);
            if (player.vaginas.length > 0) outputText("and ", false);
        }
        if (player.vaginas.length > 0) outputText(vaginaDescript(player, 0) + " ", false);
        else if (player.balls == 0) outputText("taint ", false);
        outputText("as they climb ever-further up your body.  In spite of yourself, you feel the touch of arousal licking at your thoughts.\n", false);
        if (player.lust < 35) {
            dynStats("lus", 1);
            player.lust = 35;
            statScreenRefresh();
        }
    }
    // [Round 2 Action]
    else if (monster.effects.getValue1Of(StatusAffects.Round) == 2) {
        outputText("The tentacles under your " + player.armorName + " squirm against you, seeking out openings to penetrate and genitalia to caress.  ", false);
        if (player.balls > 0) outputText("One of them wraps itself around the top of your " + sackDescript(player) + " while its tip slithers over your " + ballsDescriptLight(player) + ".  Another ", false);
        else outputText("One ", false);
        if (player.cocks.length > 0) {
            outputText("prods your " + cockDescript(game.player, 0) + " for a second before it begins slithering around it, snake-like.  Once it has you encircled from " + cockHead(player) + " to ", false);
            if (!player.cocks.hasSheath()) outputText("base", false);
            else outputText("sheath", false);
            outputText(", it begins to squeeze and relax to a pleasant tempo.  ", false);
        }
        else {
            if (player.vaginas.length > 0) {
                outputText("prods at your groin, circling around your " + vaginaDescript(player, 0) + " deliberately, as if seeking other toys to play with.  ", false);
                if (player.clitLength > 4) outputText("It brushes your " + clitDescription(player) + " then curls around it, squeezing and gently caressing it with a slow, pleasing rhythm.  ", false);
            }
            else {
                outputText("prods your groin before curling around to circle your " + assholeDescript(player) + " playfully.  The entire tendril pulses in a pleasant, relaxing way.  ", false);
            }
        }
        if (player.cocks.length > 1) {
            outputText("Your other ", false);
            if (player.cocks.length == 2) outputText(cockDescript(game.player, 1) + " gets the same treatment, and soon both of your " + multiCockDescriptLight(player) + " are quite happy to be here.  ", false);
            else outputText(multiCockDescriptLight(player) + " get the same treatment and soon feel quite happy to be here.  ", false);
        }
        if (player.vaginas.length > 0) {
            outputText("The violation of your " + vaginaDescript(player, 0) + " is swift and painless.  The fungus' slippery lubricants make it quite easy for it to slip inside, and you find your " + vaginaDescript(player, 0) + " engorging with pleasure in spite of your need to escape.  The tentacle folds up so that it can rub its stalk over your " + clitDescription(player) + ", ", false);
            if (player.clitLength > 3) outputText("and once it discovers how large it is, it wraps around it and squeezes.  It feels good!  ", false);
            else outputText("and it has quite an easy time making your bud grow hard and sensitive.  The constant rubbing feels good!  ", false);
        }
        outputText("One 'lucky' stalk manages to find your " + assholeDescript(player) + ".  As soon as it touches your rear 'entrance', it lunges forward to penetrate you.  The fluids coating the tentacle make your muscles relax, allowing it to slide inside you with ease.\n\n", false);

        outputText("The rest of the mass continues to crawl up you.  They tickle at your ", false);
        if (player.pregnancyIncubation > 0 && player.pregnancyIncubation < 120) outputText("pregnant ", false);
        outputText("belly as they get closer and closer to ", false);
        if (player.breastRows.biggestTitSize() < 1) outputText("your chest", false);
        else outputText("the underside of your " + allBreastsDescript(player), false);
        outputText(".  Gods above, this is turning you on!  Your lower body is being violated in every conceivable way and it's only arousing you more.  Between the mind-numbing smell and the sexual assault you're having a hard time focusing.\n", false);
        if (player.lust < 65) {
            dynStats("lus", 1);
            player.lust = 65;
            statScreenRefresh();
        }
    }
    // [Round 3 Action]
    else if (monster.effects.getValue1Of(StatusAffects.Round) == 3) {
        outputText("The wet, warm pressure of the fungus' protrusion working their way up your body feels better than it has any right to be.  It's like a combination of a warm bath and a gentle massage, and when combined with the thought-numbing scent in the air, it's nigh-impossible to resist relaxing a little.  In seconds the mass of tentacles is underneath your " + player.armorName + " and rubbing over your chest and " + nippleDescription(player, 0) + "s.  You swoon from the sensation and lean back against the wall while they stroke and caress you, teasing your sensitive " + nippleDescription(player, 0) + ".", false);
        if (player.breastRows.hasFuckableNipples()) outputText("  Proof of your arousal leaks from each " + nippleDescription(player, 0) + " as their entrances part for the probing tentacles.  They happily dive inside to begin fucking your breasts, doubling your pleasure.", false);
        outputText("  Moans escape your mouth as your hips begin to rock in time with the tentacles and the pulsing luminance of your fungus-pod.  It would be easy to lose yourself here.  You groan loudly enough to startle yourself back to attention.  You've got to get out!\n\n", false);

        outputText("The tentacles that aren't busy with your " + allBreastsDescript(player) + " are already climbing higher, and the slime has reached your waist.  If anything it actually makes the constant violation more intense and relaxing.  You start to sink down into it, but catch yourself and pull yourself back up.  No! You've got to fight!\n", false);
        if (player.lust < 85) {
            dynStats("lus", 1);
            player.lust = 85;
            statScreenRefresh();
        }
    }
    // [Round 4 Action]
    else {
        outputText("What's happening to you definitely isn't rape.  Not any more.  You like it too much.  You lean back against a wall of the pod and thrust your " + hipDescription(player) + " pitifully against a phantom lover, moaning lewdly as you're forcibly pleasured.  You grab hold of the fleshy walls with your hands and try to hold yourself up, but your " + legs(player) + " have the consistency of jello.   They fold neatly underneath you as you slide into the ooze and begin to float inside it.  It's comforting in an odd way, and while you're gasping in between moans, your balance finally gives out.  You sink deeper into the fluid and lose all sense of direction.  Up and down become meaningless constructs that no longer matter to you.\n\n", false);

        outputText("The thick slime passes over your lips and nose as you sink into the rising tide of bliss, and you find yourself wondering how you'll breathe.  Instinctively, you hold your breath.  Even riddled with sexual bliss and thought-obliterating drugs, you won't let yourself open your mouth when 'underwater'.  The lack of oxygen makes your heart hammer in your chest", false);
        if (player.cocks.length > 0) {
            outputText(", and " + sMultiCockDesc(player) + " bloats with blood, getting larger than ever", false);
        }
        outputText(".  Before you can pass out, the constant penetration forces a moan from your lips.\n\n", false);

        outputText("A tentacle takes the opportunity to slip into your mouth along with a wave of the slime.  You try to cough out the fluid, but there isn't any air left in your lungs to push it out.  The orally-fixated tendril widens and begins to pour more of it inside you, and with nowhere else to go, it packs your goo-filled lungs to the brim before you start to swallow.  You relax and exhale the last of your air from your nose as your body calms itself.  Somehow you can breathe the fungus-pod's fluids!\n\n", false);

        outputText("You're floating in pure liquid bliss.  Thoughts melt away before they can form, and every inch of your body is being caressed, squeezed, or penetrated by the warm, slime-slicked tentacles.  Nearly every muscle in your body goes completely slack as you're cradled with bliss.  Without your thoughts or stress bothering you, the pleasure swiftly builds to a crescendo.\n\n", false);

        outputText("The wave of need starts out inside your crotch, begging to be let out, but you can't even be bothered to move your " + hipDescription(player) + " anymore.  Without your help, release stays just out of reach, but the tentacles working your body seem intent on spurring it on.  The one inside your " + assholeDescript(player) + " begins to pump more quickly, and with the added pressure, you cum quickly.  ", false);
        if (!player.vaginas.length > 0) {
            outputText("Your body twitches weakly, too relaxed to move while it gets off from anal penetration.", false);
        }
        else outputText("Your body twitches weakly, too relaxed to move while it gets off from being double-penetrated.", false);
        if (player.breastRows.hasFuckableNipples()) {
            outputText("  Your " + nippleDescription(player, 0) + "s squirt around their phallic partners, leaking sexual lubricant ", false);
            if (player.breastRows.biggestLactation() > 1) outputText("and milk ", false);
            outputText("while the fucking continues.", false);
        }
        if (player.cocks.length > 0) {
            outputText("  The tentacles around " + sMultiCockDesc(player) + " squeeze and rotate, screwing you silly through your orgasm while cum dribbles in a steady stream from your loins.  Normally it would be squirting out in thick ropes, but the muscle-relaxing drugs in your system make the spurts a steady, weak flow.", false);
            if (player.cumQ() > 800) outputText("  Of course with all the semen you produce, the flesh-pod's ooze clouds over quite quickly, blocking your vision with a purple-white haze.", false);
        }
        if (player.breastRows.biggestLactation() > 1) {
            outputText("Milk leaks out too, ", false);
            if (player.breastRows.biggestLactation() < 2) outputText("though the slight dribble is barely noticeable to you.", false);
            else if (player.breastRows.biggestLactation() < 3) outputText("coloring things a little more white.", false);
            else outputText("thickening your fluid-filled prison with nutrients.", false);
        }
        // [NEXT – CHOOSE APPRORIATE]
        doNext(loseToThisShitPartII);
        return;
    }
    // Set flags for rounds
    if (monster.effects.findByType(StatusAffects.Round) < 0) {
        monster.effects.create(StatusAffects.Round, 2, 0, 0, 0);
    }
    else monster.effects.addValue(StatusAffects.Round, 1, 1);
    combatRoundOver();
}

export function loseToThisShitPartII(): void {
    hideUpDown();
    outputText("", true);
    // [OPTIONAL CUM ESCAPE]
    if (player.cumQ() > 3500) {
        outputText("Your orgasm drags on for so long that you begin to feel pressure from the cum-slime surrounding you.  It doesn't seem to matter to " + sMultiCockDesc(player) + ", which is too busy sending bliss to your brain and squirting cum for the tentacles to care.  It actually kind of hurts.  The oscillating purple ambiance flashes brighter in protest for a second, and then everything releases all at once.  The pressure is gone and you're sliding down on a wave of fungal-slime cum, feeling the tentacles being pulled from you by the sudden shift of position.  Moist cave air tickles at your " + player.skinDesc + " as you come to rest on another spongy petal and begin to cough out the sludge.\n\n", false);

        outputText("Over the next minute your head clears and your strength returns.  You push yourself up on something hard, then glance down and realize you washed up next to the skeleton!  The bleached bone leers up at you knowingly, and everything you can see is covered in a thick layer of your spooge.  " + SMultiCockDesc(player) + " is still dripping more spunk.  Clearly your ruined orgasm didn't pump it ALL out.  You look down at the rapier and pick it up out of your mess, examining it.  The blade shines keenly, and the sword is balanced to perfection.  Though you succumbed to the same fate as its owner, your warped body saved you from sharing his fate.  Thankfully potential pods that carpet the floor don't even twitch at you.  Perhaps your orgasm was enough to sate them all?  Or maybe they've learned their lesson.", false);
        // (switch from loss to victory, sword loot)
        monster.lust = 100;
        player.orgasm();
    }
    // [OPTIONAL MILK ESCAPE]
    else if (player.lactationQ() > 3500 || (player.lactationQ() + player.cumQ() > 4500)) {
        outputText("Your milk-spouting " + nippleDescription(player, 0) + "s continuously pour your breast-milk into the soupy fluids surrounding you.  Once you let down your milk, there was no stopping it.  Pressure backs up inside the flesh-pod, pressing down on you with near painful intensity, but your " + allBreastsDescript(player) + " refuse to give up or slow down.  Even though each squirt jacks up the force on your body, your unholy milk production will not relent.  The oscillating purple ambience flashes bright in protest, then gives out entirely, along with the pressure.  At once you're pulled away by a wave of milk-laced fungus-slime, yanking the tentacles away from your body with the change in position.\n\n", false);

        outputText("Over the next minute your head clears and your strength returns.  You push yourself up on something hard, then glance down and realize you washed up next to the skeleton!  The bleached bone leers up at you knowingly, and everything you can see is covered in a thick layer of slime and milk.  Your " + breastDescript(game.player, 0) + " are still pouring out milk.  Clearly you weren't even close to done with your pleasure-induced lactation.  You look down at the rapier and pick it up out of your mess, examining it.  The blade shines keenly, and the sword is balanced to perfection.  Though you succumbed to the same fate as its owner, your warped body saved you from sharing his fate.  Thankfully potential pods that carpet the floor don't even twitch at you.  Perhaps your milk was enough to sate them all?  Or maybe they've learned their lesson.", false);
        // (switch from loss to victory, sword loot)
        monster.lust = 100;
        player.orgasm();
    }
    // (GENDERLESS)
    else if (player.gender == 0) {
        outputText("You orgasm around the tentacle in your " + assholeDescript(player) + " for what feels like hours, though some dim, half forgotten whisper of your mind tells you it can't possibly have gone on for that long.  It feels so right and so perfect that resistance is almost a foreign concept to you at this point.  How could you have tried to fight off this heaven?  You're completely limp, totally helpless, and happier than you ever remember.  The pulsing lights of your womb-like prison continue their steady beat in time with the tentacle buried in your ass, soothing you while your body is played like a violin heading towards its latest crescendo.\n\n", false);

        outputText("In spite of the constant stimulation, it unceremoniously comes to a halt.  The tentacle in your " + assholeDescript(player) + " yanks out with near-spiteful force, and the fluid starts to drain from around you.  With so many strange chemicals pumping in your blood, it's too hard to stand, so you lie down on the fleshy 'floor' as the last of the pod's ooze empties out.  The petals unfold, returning the view of the outside world to your drug and orgasm riddled mind.  Over the next minute your head clears and your strength slowly returns.\n\n", false);

        outputText("You walk over to the skeleton and get a good look at it.  The bleached bone leers up at you knowingly, and its jaw is locked in a rictus grin.  Looking down at the rapier, you decide to pick it up out of your mess and examine it.  The blade shines keenly, and the sword is balanced to perfection.  Though you succumbed to the same fate as its owner, your genderless body must have saved you from sharing his fate.  The potential pods that carpet the floor don't even twitch at you, and you breathe a silent prayer of thanks while a dark part of you curses.", false);
        monster.lust = 100;
        monster.XP = 1;
        player.orgasm();
    }
    // Done if escaped
    if (monster.lust == 100) {
        flags[kFLAGS.ZETAZ_FUNGUS_ROOM_DEFEATED]++;
        cleanupAfterCombat();
        return;
    }
    // [BAD-END GO]
    // (MALE)
    if (player.gender == 1 || (player.gender == 3 && rand(2) == 0)) {
        outputText("The orgasm squirts and drips from " + sMultiCockDesc(player) + " for what seems like forever.  It feels so right, so perfect, that you actually whine in disappointment when it finally does end.  You can't even be bothered to reach down and stroke yourself.  The softening in your loins is nothing compared to your flaccid, listless muscles.  You couldn't make your arms reach down to touch yourself even if you could work up the motivation to try.  Thankfully the slippery tentacles curl back around your ", false);
        if (!player.cocks.hasSheath()) outputText("base", false);
        else outputText("sheath", false);
        outputText(" and squeeze, forcing " + sMultiCockDesc(player) + " to inflate to readiness.  Deep inside your " + assholeDescript(player) + ", the tentacle starts to rub against your prostate.  It caresses the male organ on each side and pauses to squeeze the center of it, pushing a few drops of sticky cum from your trembling " + cockNoun(CockTypesEnum.HUMAN) + ".\n\n", false);

        outputText("The vine-like stalks currently hugging " + sMultiCockDesc(player) + " constrict the base and begin to swirl around it in a circular motion.  Warm fungi-flesh and viscous, drugged ooze work together to send hot spikes of pleasure up your spinal-cord.  Despite your recent orgasm, you aren't being given any chance to recover or refill your ", false);
        if (player.balls > 0) outputText("balls", false);
        else outputText("prostate", false);
        outputText(".  Things like logic and rest don't matter in this warm, soupy environment, at least not to your poor, unthinking mind and erect, sensitive dick", false);
        if (player.cocks.length > 1) outputText("s", false);
        outputText(".  With such stimulation coming so closely on the heels of your last orgasm, [eachCock] is suffering painful levels of pleasure.  Your whole body shakes from the sensory overload; though with your muscles so completely shut down, it's more of a shiver.\n\n", false);

        outputText("Another wave of sperm begins the slow escape from your helpless, pinned form, drawn out by the fungus' constant sexual ministrations.  The fluid inside your pod gurgles noisily as the fluids are exchanged, but the sensory input doesn't register to your overloaded, drugged-out shell of a mind.  You've lost yourself to mindless pleasure, and repeated, endless orgasms.  The rest of your life is spent floating in an artificial womb, orgasming over and over to feed your fungus prison, and enjoying the pleasure that long ago eroded your ability to reason.", false);
        gameOver();
    }
    // (FEM)
    else {
        outputText("You orgasm around the tentacles in your " + vaginaDescript(player, 0) + " and " + assholeDescript(player) + " for what feels like hours, though some dim, half forgotten whisper of your mind tells you it can't possibly have gone on for that long.  It feels so right and so perfect that resistance is almost a foreign concept to you at this point.  How could you have tried to fight off this heaven?  You're completely limp, totally helpless, and happier than you ever remember.  The pulsing lights of your womb-like prison continue their steady beat in time with the tentacles buried in your snatch, soothing you while your body is played like a violin heading towards its latest crescendo.\n\n", false);

        outputText("The steady rhythm of your penetration sends rockets of bliss-powered pleasure up your spinal cord and straight into your brain, where it explodes in orgasm.  Your body barely twitches, too relaxed to work up any muscle response, involuntary or otherwise.  A moment to rest never presents itself.  The cruel fungus never relents.  It never slows, unless it's only the briefest pause to intensify the next thrust.  Were you in the open air, away from the strange fluid you're now breathing, you'd be twisting and screaming with pleasure.  Instead you float and cum in silence.\n\n", false);

        outputText("Fluids gurgle and shift inside the pod as they are exchanged.  If you were capable of noticing the sound or change, you might wonder if it's harvesting your sexual fluids, but even those thoughts are beyond you now. You've lost yourself to mindless pleasure, and repeated, endless orgasms.  The rest of your life is spent floating in an artificial womb, orgasming over and over to feed your fungus prison, and enjoying the pleasure that long ago eroded your ability to reason.", false);
        gameOver();
    }
}

export function encapsulationVictory(): void {
    if (monster.HP <= 0) {
        flags[kFLAGS.ZETAZ_FUNGUS_ROOM_DEFEATED]++;
        outputText("", true);
        outputText("The pod's wall bursts under your onslaught.  The strength goes out of the tentacles holding you at once, giving them all the power of a limp noodle.  The spongy surface of the pod gives out, and the 'petals' split apart, falling down to the ground with a heavy 'thwack'.  You stand there, exulting in your freedom.  You've won!\n\nThe rapier you approached originally still lies there, and you claim your prize.", false);
    }
    cleanupAfterCombat();
}
