export function minotaurCum(player: Player): void {
    player.slimeFeed();
    // Minotaur cum addiction
    player.minoCumAddiction(7);
    outputText("", true);
    outputText("As soon as you crack the seal on the bottled white fluid, a ", false);
    if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] == 0)
        outputText("potent musk washes over you.", false);
    else
        outputText("heavenly scent fills your nostrils.", false);
    if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] < 50)
        outputText("  It makes you feel dizzy, ditzy, and placid.", false);
    else
        outputText("  It makes you feel euphoric, happy, and willing to do ANYTHING to keep feeling this way.", false);
    outputText("  Unbidden, your hand brings the bottle to your lips, and the heady taste fills your mouth as you convulsively swallow the entire bottle.", false);
    // -Raises lust by 10.
    // -Raises sensitivity
    dynStats("sen", 1, "lus", 10);
    // -Raises corruption by 1 to 50, then by .5 to 75, then by .25 to 100.
    if (player.cor < 50)
        dynStats("cor", 1);
    else if (player.cor < 75)
        dynStats("cor", .5);
    else
        dynStats("cor", .25);
    outputText("\n\nIntermittent waves of numbness wash through your body, turning into a warm tingling that makes you feel sensitive all over.  The warmth flows through you, converging in your loins and bubbling up into lust.", false);
    if (player.cocks.length > 0) {
        outputText("  ", false);
        if (player.cocks.length == 1)
            outputText("Y", false);
        else
            outputText("Each of y", false);
        outputText("our " + multiCockDescriptLight(game.player) + " aches, flooding with blood until it's bloating and trembling.", false);
    }
    if (player.vaginas.length > 0) {
        outputText("  Your " + clitDescription(player) + " engorges, ", false);
        if (player.clitLength < 3)
            outputText("parting your lips.", false);
        else
            outputText("bursting free of your lips and bobbing under its own weight.", false);
        if (player.vaginas[0].vaginalWetness <= VAGINA_WETNESS_NORMAL)
            outputText("  Wetness builds inside you as your " + vaginaDescript(player, 0) + " tingles and aches to be filled.", false);
        else if (player.vaginas[0].vaginalWetness <= VAGINA_WETNESS_SLICK)
            outputText("  A trickle of wetness escapes your " + vaginaDescript(player, 0) + " as your body reacts to the desire burning inside you.", false);
        else if (player.vaginas[0].vaginalWetness <= VAGINA_WETNESS_DROOLING)
            outputText("  Wet fluids leak down your thighs as your body reacts to this new stimulus.", false);
        else
            outputText("  Slick fluids soak your thighs as your body reacts to this new stimulus.", false);
    }
    // (Minotaur fantasy)
    if (!game.inCombat && rand(10) == 1) {
        outputText("\n\nYour eyes flutter closed for a second as a fantasy violates your mind.  You're on your knees, prostrate before a minotaur.  Its narcotic scent fills the air around you, and you're swaying back and forth with your belly already sloshing and full of spunk.  Its equine-like member is rubbing over your face, and you submit to the beast, stretching your jaw wide to take its sweaty, glistening girth inside you.  Your tongue quivers happily as you begin sucking and slurping, swallowing each drop of pre-cum you entice from the beastly erection.  Gurgling happily, you give yourself to your inhuman master for a chance to swallow into unthinking bliss.", false);
        dynStats("lib", 1, "lus", rand(5) + player.cor / 20 + flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] / 5);
    }
    // (Healing – if hurt and uber-addicted (hasperk))
    if (player.HP < player.maxHP() && player.perks.findByType(PerkLib.MinotaurCumAddict) >= 0) {
        outputText("\n\nThe fire of your arousal consumes your body, leaving vitality in its wake.  You feel much better!", false);
        HPChange(int(player.maxHP() / 4), false);
    }
    // Uber-addicted status!
    if (player.perks.findByType(PerkLib.MinotaurCumAddict) >= 0 && flags[kFLAGS.MINOTAUR_CUM_REALLY_ADDICTED_STATE] <= 0) {
        flags[kFLAGS.MINOTAUR_CUM_REALLY_ADDICTED_STATE] = 3 + rand(2);
        outputText("\n\n<b>Your body feels so amazing and sensitive.  Experimentally you pinch yourself and discover that even pain is turning you on!</b>", false);
    }
}
