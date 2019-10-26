// 2. Sensitivity Draft
export function sensitivityDraft(player: Player): void {
    outputText("", true);
    outputText("You pop the cork on this small vial and drink down the clear liquid.  It makes your lips and tongue tingle strangely, letting you feel each globule of spit in your mouth and each breath of air as it slides past your lips.", false);
    if (player.effects.findByType(StatusAffects.Dysfunction) >= 0) {
        outputText("\n\nThankfully, the draft invigorates your groin, replacing the numbness with waves of raw sensation.  It seems your crotch is back to normal and <b>you can masturbate again!</b>", false);
        player.effects.remove(StatusAffects.Dysfunction);
    }
    if (rand(4) == 0 && player.effects.findByType(StatusAffects.LustyTongue) < 0) {
        outputText("The constant tingling in your mouth grows and grows, particularly around your lips, until they feel as sensitive as ", false);
        if (player.vaginas.length > 0)
            outputText("your", false);
        else
            outputText("a woman's", false);
        outputText(" lower lips.  You'll have to be careful not to lick them!", false);
        // (Lustytongue status)
        player.effects.create(StatusAffects.LustyTongue, 25, 0, 0, 0);
    }
    outputText("\n\nAfter the wave of sensation passes, your " + player.skinDesc + " feels a little more receptive to touch.  ", false);
    if (player.lust > 70 || player.lib > 70) {
        outputText("You shiver and think of how much better it'll make sex and masturbation.", false);
    }
    else
        outputText("You worry it'll make it harder to resist the attentions of a demon.", false);
    dynStats("sen", 10, "lus", 5);
}
