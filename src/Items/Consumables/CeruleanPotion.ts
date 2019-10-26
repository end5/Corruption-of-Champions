
// Cerulean P.
export function ceruleanPotion(player: Player): void {
    player.slimeFeed();
    // Repeat genderless encounters
    if (player.gender == 0 && flags[kFLAGS.CERULEAN_POTION_NEUTER_ATTEMPTED] > 0) {
        outputText("You take another sip of the Cerulean Potion.  You find it soothing and become very excited about the possibility of another visit from the succubus.", true);
    }
    else if (player.gender == 3 && flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00111] > 0) {
        outputText("With anticipation, you chug down another bottle of the Cerulean Potion. A warm sensation radiates out from your stomach as you feel the potion course through your body.", true);
    }
    // All else
    else {
        outputText("The liquid tastes rather bland and goes down easily. ", true);
        // Special repeat texts
        if (player.effects.findByType(StatusAffects.RepeatSuccubi) >= 0)
            outputText("You look forwards to tonight's encounter.", false);
        // First timer huh?
        else
            outputText("You do not notice any real effects.  Did the merchant con you?", false);
    }
    if (player.effects.findByType(StatusAffects.SuccubiNight) >= 0) {
        if (player.effects.getValue1Of(StatusAffects.SuccubiNight) < 3)
            player.effects.addValue(StatusAffects.SuccubiNight, 1, 1);
    }
    else
        player.effects.create(StatusAffects.SuccubiNight, 1, 0, 0, 0);
}
