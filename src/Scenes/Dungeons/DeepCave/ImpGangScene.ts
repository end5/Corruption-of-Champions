export function loseToImpMob(): void {
    outputText("", true);
    // (HP)
    if (player.HP < 1) outputText("Unable to handle your myriad wounds, you collapse with your strength exhausted.\n\n", false);
    // (LUST)
    else outputText("Unable to handle the lust coursing through your body, you give up and collapse, hoping the mob will get you off.\n\n", false);

    outputText("In seconds, the squirming red bodies swarm over you, blotting the rest of the room from your vision.  You can feel their scrabbling fingers and hands tearing off your " + player.armorName + ", exposing your body to their always hungry eyes.   Their loincloths disappear as their growing demonic members make themselves known, pushing the tiny flaps of fabric out of the way or outright tearing through them.   You're groped, touched, and licked all over, drowning in a sea of long tongues and small nude bodies.\n\n", false);

    outputText("You're grabbed by the chin, and your jaw is pried open to make room for a swollen dog-dick.   It's shoved in without any warmup or fan-fare, and you're forced to taste his pre in the back of your throat.  You don't dare bite down or resist in such a compromised position, and you're forced to try and suppress your gag reflex and keep your teeth back as he pushes the rest of the way in, burying his knot behind your lips.\n\n", false);

    // (tits)
    if (player.breasts.biggestTitSize() > 1) {
        outputText("A sudden weight drops onto your chest as one of the demons straddles your belly, allowing his thick, tainted fuck-stick to plop down between your " + allBreastsDescript(player) + ".  The hot fluid leaking from his nodule-ringed crown  swiftly lubricates your cleavage.  In seconds the little devil is squeezing your " + breastDescript(game.player, 0) + " around himself as he starts pounding his member into your tits.  The purplish tip peeks out between your jiggling flesh mounds, dripping with tainted moisture.", false);
        if (player.breasts.biggestLactation() > 1) outputText("  Milk starts to squirt from the pressure being applied to your " + breastDescript(game.player, 0) + ", which only encourages the imp to squeeze even harder.", false);
        outputText("\n\n", false);
    }
    // (NIPPLECUNTS!)
    if (player.breasts.hasFuckableNipples()) {
        outputText("A rough tweak on one of your nipples startles you, but your grunt of protest is turned into a muffled moan when one of the imp's tiny fingers plunges inside your " + nippleDescription(player, 0) + ".  He pulls his hand out, marveling at the sticky mess, and wastes no time grabbing the top of your tit with both hands and plunging himself in.", false);
        if (player.breasts.biggestTitSize() < 7) outputText("  He can only get partway in, but it doesn't seem to deter him.", false);
        else outputText("  Thanks to your massive bust, he is able to fit his entire throbbing prick inside you.", false);
        outputText("  The demon starts pounding your tit with inhuman vigor, making the entire thing wobble enticingly.  The others, seeing their brother's good time, pounce on ", false);
        if (player.breasts.totalNipples() > 2) outputText("each of ", false);
        outputText("your other " + nippleDescription(player, 0), false);
        if (player.breasts.totalNipples() > 2) outputText("s", false);
        outputText(", fighting over the opening", false);
        if (player.breasts.totalNipples() > 2) outputText("s", false);
        outputText(".  A victor quickly emerges, and in no time ", false);
        if (player.breasts.totalNipples() == 2) outputText("both", false);
        else outputText("all the", false);
        outputText(" openings on your chest are plugged with a tumescent demon-cock.\n\n", false);
    }
    // (SINGLE PEN)
    if (!player.vaginas.length > 0) {
        outputText("Most of the crowd centers itself around your lower body, taking a good long look at your " + assholeDescript(player) + ".  An intrepid imp steps forwards and pushes his member into the unfilled orifice.  You're stretched wide by the massive and unexpectedly forceful intrusion.  The tiny corrupted nodules stroke every inch of your interior, eliciting uncontrollable spasms from your inner muscles.  The unintentional dick massage gives your rapist a wide smile, and he reaches down to smack your ass over and over again throughout the ordeal.", false);
        buttChange(player, 12, true, true, false);
        outputText("\n\n", false);
    }
    // (DOUBLE PEN)
    else {
        outputText("Most of the crowd centers itself around your lower body, taking a good long look at your pussy and asshole.  Two intrepid imps step forward and push their members into the unplugged orifices.  You're stretched wide by the massive, unexpectedly forceful intrusions.  The tiny corrupted nodules stroke every inch of your interiors, eliciting uncontrollable spasms from your inner walls.  The unintentional dick massage gives your rapists knowing smiles, and they go to town on your ass, slapping it repeatedly as they double-penetrate you.", false);
        buttChange(player, 12, true, true, false);
        cuntChange(player, 12, true, true, false);
        outputText("\n\n", false);
    }
    // (DICK!)
    if (player.cocks.length > 0) {
        outputText("Some of the other imps, feeling left out, fish out your " + multiCockDescript(player) + ".  They pull their own members alongside yours and begin humping against you, frotting as their demonic lubricants coat the bundle of cock with slippery slime.   Tiny hands bundle the dicks together and you find yourself enjoying the stimulation in spite of the brutal fucking you're forced to take.  Pre bubbles up, mixing with the demonic seed that leaks from your captors members until your crotch is sticky with frothing pre.\n\n", false);
    }
    // (ORGAZMO)
    outputText("As one, the crowd of demons orgasm.  Hot spunk gushes into your ass, filling you with uncomfortable pressure.  ", false);
    if (player.vaginas.length > 0) outputText("A thick load bastes your pussy with whiteness, and you can feel it seeping deeper inside your fertile womb.  ", false);
    outputText("Your mouth is filled with a wave of thick cream.  Plugged as you are by the demon's knot, you're forced to guzzle down the stuff, lest you choke on his tainted baby-batter.", false);
    if (player.breasts.biggestTitSize() > 1) {
        outputText("  More and more hits your chin as the dick sandwiched between your tits unloads, leaving the whitish juice to dribble down to your neck.", false);
        if (player.breasts.hasFuckableNipples()) {
            if (player.breasts.totalNipples() == 2) outputText("  The pair", false);
            else outputText("  The group", false);
            outputText(" of cocks buried in your " + nippleDescription(player, 0) + " pull free before they cum, dumping the spooge into the gaping holes they've left behind.  It tingles hotly, making you quiver with pleasure.", false);
        }
    }
    outputText("  Finally, your own orgasm arrives, ", false);
    if (player.cocks.length == 0) outputText("and you clench tightly around the uncomfortable intrusion.", false);
    else {
        outputText("and " + sMultiCockDesc(player) + " unloads, splattering the many demons with a bit of your own seed.  You'd smile if your mouth wasn't so full of cock.  At least you got to make a mess of them!", false);
    }
    if (player.vaginas.length > 0) {
        outputText("  Your cunt clenches around the invading cock as orgasm takes you, massaging the demonic tool with its instinctual desire to breed.  Somehow you get him off again, and take another squirt of seed into your waiting cunt.", false);
    }
    outputText("\n\n", false);

    outputText("Powerless and in the throes of post-coital bliss, you don't object as you're lifted on the table", false);
    if (!player.vaginas.length > 0) outputText(" and forced to start drinking bottle after bottle of succubi milk", false);
    outputText(".  You pass out just as round two is getting started, but the demons don't seem to mind....", false);
    doNext(loseToImpMobII);
}
// [IMP GANGBANG VOL 2]
export function loseToImpMobII(): void {
    outputText("", true);
    outputText("You wake up, sore from the previous activity and a bit groggy.  You try to move, but find yourself incapable.  Struggling futilely, you thrash around until you realize your arms and legs are strapped down with heavy iron restraints.  You gasp out loud when you look down and discover your ", false);
    if (player.breasts.biggestTitSize() < 1) outputText("new", false);
    else outputText("much larger", false);
    outputText(" tits, wobbling with every twist and movement you make.  You're stark naked, save for a sheer and somewhat perverse nurse's outfit.   The room around you looks to be empty, though you can see a number of blankets piled in the corners and a few cages full of spooge-covered faeries, all snoring contently.\n\n", false);

    outputText("Eventually a lone imp enters the room.  It's Zetaz!  He looks you up and down and decrees, \"<i>You're ready.</i>\"  You struggle to shout him down, but all that escapes the gag in your mouth is incomprehensible gibberish.  He chuckles and flips a switch on the wall, and suddenly the most heavenly vibration begins within your sopping twat.", false);
    if (!player.vaginas.length > 0) {
        outputText("...Wait, your what?  You have a cunt now!?", false);
    }
    outputText("  Your eyes cross at the pleasure as your mind struggles to figure out why it feels so good.\n\n", false);

    outputText("Zetaz pours a few bottles into a larger container and connects a tube to an opening on the bottom of the bottle.  Your eyes trace the tube back to the gag in your mouth, and after feeling around with your tongue, you realize it's been threaded through the gag and down your throat.   Zetaz lifts up the bottle and hangs it from a hook on the ceiling, and you watch in horror as the fluid flows through the tube, helpless to stop it.  You shake your head desperately, furious at having fallen into the little fucker's hands at last.\n\n", false);

    outputText("Zetaz walks up and paws at your ", false);
    if (player.breasts.biggestTitSize() < 1) outputText("new", false);
    else outputText("larger", false);
    outputText(" mounds, flitting into the air to bring himself to eye-level.  He rambles, \"<i>It's so good to see you again, " + player.short + ".  Because of you, I had to flee from my honored place by Lethice's side.  I've had to hide in this fetid forest.  I'll admit, it hasn't been all bad.  We've caught a few faeries to play with, and with you here, the boys and I will have lots of fun.  We just need to reshape that troubled mind a little bit.</i>\"\n\n", false);

    outputText("You barely register his monologue.  You're far too busy cumming hard on the vibrating intruder that's currently giving your stuffed snatch the workout of a lifetime.  Zetaz chuckles at your vacant stare and massages your temples gently, and you feel the touch of his dark magic INSIDE you.  It feels warm and wet, matching the feel of your body's other intrusion.   You try to fight it, and for a moment you feel like you might push the demon out of your mind.  Then your body cums, and your resistance melts away.  You violently thrash against your restraints, caving in to the pleasure as the imp rapes your body and mind as one.\n\n", false);

    outputText("The desire to protect your village drips out between your legs, and thoughts of your independence are fucked away into nothing.  It feels good to cum, and your eyes cross when you see the bulge at your master's crotch, indicative of how well you're pleasing him.  It feels so good to obey!  Zetaz suddenly kisses you, and you enthusiastically respond in between orgasms.\n\n", false);

    outputText("You gladly live out the rest of your life, fucking and birthing imps over and over as their live-in broodmother.", false);
    player.orgasm();
    player.HP += 100;
    gameOver();
}

// WIN
export function impGangVICTORY(): void {
    outputText("", true);
    // Flag them defeated!
    flags[kFLAGS.ZETAZ_IMP_HORDE_DEFEATED] = 1;
    if (monster.HP < 1) outputText("The last of the imps collapses into the pile of his defeated comrades.  You're not sure how you managed to win a lopsided fight, but it's a testament to your new-found prowess that you succeeded at all.", false);
    else outputText("The last of the imps collapses, pulling its demon-prick free from the confines of its loincloth.  Surrounded by masturbating imps, you sigh as you realize how enslaved by their libidos the foul creatures are.", false);
    if (player.lust >= 33 && player.gender > 0) {
        outputText("\n\nFeeling a bit horny, you wonder if you should use them to sate your budding urges before moving on.  Do you rape them?", false);
        if (player.gender == 1) simpleChoices("Rape", impGangGetsRapedByMale, "", null, "", null, "", null, "Leave", cleanupAfterCombat);
        if (player.gender == 2) simpleChoices("Rape", impGangGetsRapedByFemale, "", null, "", null, "", null, "Leave", cleanupAfterCombat);
        if (player.gender == 3) simpleChoices("Male Rape", impGangGetsRapedByMale, "Female Rape", impGangGetsRapedByFemale, "", null, "", null, "Leave", cleanupAfterCombat);
    }
    else cleanupAfterCombat();
}

// RAEP -M
export function impGangGetsRapedByMale(): void {
    outputText("", true);
    outputText("You walk around and pick out three of the demons with the cutest, girliest faces.  You set them on a table and pull aside your " + player.armorName + ", revealing your " + multiCockDescriptLight(player) + ".  You say, \"<i>Lick,</i>\" in a tone that brooks no argument.  The feminine imps nod and open wide, letting their long tongues free.   Narrow and slightly forked at the tips, the slippery tongues wrap around your " + cockDescript(game.player, 0) + ", slurping wetly as they pass over each other in their attempts to please you.\n\n", false);

    outputText("Grabbing the center one by his horns, you pull him forwards until your shaft is pressed against the back of his throat.  He gags audibly, but you pull him back before it can overwhelm him, only to slam it in deep again.  ", false);
    outputText("The girly imp to your left, seeing how occupied your " + cockDescript(game.player, 0) + " is, shifts his attention down to your ", false);
    if (player.balls > 0) outputText(ballsDescriptLight(player), false);
    else if (player.vaginas.length > 0) outputText(vaginaDescript(player, 0), false);
    else outputText("ass", false);
    outputText(", licking with care", false);
    if (player.balls == 0) outputText(" and plunging deep inside", false);
    outputText(".  The imp to the right wraps his tongue around the base ", false);
    if (player.cocks.hasSheath()) outputText("just above your sheath ", false);
    outputText(" and pulls it tight, acting as an organic cock-ring.\n\n", false);

    outputText("Fucking the little bitch of a demon is just too good, and you quickly reach orgasm.  ", false);
    if (player.balls > 0) outputText("Cum boils in your balls, ready to paint your foe white.  ", false);
    outputText("With a mighty heave, you yank the imp forward, ramming your cock deep into his throat.  He gurgles noisily as you unload directly into his belly.   Sloshing wet noises echo in the room as his belly bulges slightly from the load, and his nose dribbles cum.   You pull him off and push him away.  He coughs and sputters, but immediately starts stroking himself, too turned on to care.", false);
    if (player.cumQ() > 1000) outputText("  You keep cumming while the other two imps keep licking and servicing you.   By the time you finish, they're glazed in spooge and masturbating as well.", false);
    outputText("\n\n", false);

    outputText("Satisfied, you redress and prepare to continue with your exploration of the cave.", false);
    dynStats("cor", 1);
    player.orgasm();
    cleanupAfterCombat();
}
// RAEP-F
export function impGangGetsRapedByFemale(): void {
    outputText("", true);
    outputText("You walk around to one of the demons and push him onto his back.  Your " + player.armorName + " falls to the ground around you as you disrobe, looking over your tiny conquest.  A quick ripping motion disposes of his tiny loincloth, leaving his thick demon-tool totally unprotected. You grab and squat down towards it, rubbing the corrupted tool between your legs ", false);
    if (player.vaginas[0].vaginalWetness >= VaginaWetness.SLICK) outputText("and coating it with feminine drool ", false);
    outputText("as you become more and more aroused.  It parts your lips and slowly slides in.  The ring of tainted nodules tickles you just right as you take the oddly textured member further and further into your willing depths.", false);
    cuntChange(player, 15, true, true, false);
    outputText("\n\n", false);

    outputText("At last you feel it bottom out, bumping against your cervix with the tiniest amount of pressure.  Grinning like a cat with the cream, you swivel your hips, grinding your " + clitDescription(player) + " against him in triumph.  ", false);
    if (player.clitLength > 3) outputText("You stroke the cock-like appendage in your hand, trembling with delight.  ", false);
    outputText("You begin riding the tiny demon, lifting up, and then dropping down, feeling each of the nodes gliding along your sex-lubed walls.   As time passes and your pleasure mounts, you pick up the pace, until you're bouncing happily atop your living demon-dildo.\n\n", false);

    outputText("The two of you cum together, though the demon's pleasure starts first.  A blast of his tainted seed pushes you over the edge.  You sink the whole way down, feeling him bump your cervix and twitch inside you, the bumps on his dick swelling in a pulsating wave in time with each explosion of fluid.  ", false);
    if (player.vaginas[0].vaginalWetness >= VaginaWetness.SLAVERING) outputText("Cunt juices splatter him as you squirt explosively, leaving a puddle underneath him.  ", false);
    else outputText("Cunt juices drip down his shaft, oozing off his balls to puddle underneath him.  ", false);
    outputText("The two of you lie together, trembling happily as you're filled to the brim with tainted fluids.\n\n", false);

    outputText("Sated for now, you rise up, your body dripping gooey whiteness.  Though in retrospect it isn't nearly as much as was pumped into your womb.", false);
    if (player.pregnancyIncubation == 0) outputText("  You'll probably get pregnant.", false);
    dynStats("cor", 1);
    player.orgasm();
    player.knockUp(PregnancyStore.PREGNANCY_IMP, PregnancyStore.INCUBATION_IMP - 14, 50);
    cleanupAfterCombat();
}
