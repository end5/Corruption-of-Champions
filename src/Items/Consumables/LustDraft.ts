export function lustDraft(fuck: boolean, player: Player): void {
    player.slimeFeed();
    outputText("You drink the ", true);
    if (fuck)
        outputText("red", false);
    else
        outputText("pink", false);
    outputText(" potion, and its unnatural warmth immediately flows to your groin.", false);
    dynStats("lus", (30 + rand(player.lib / 10)), "resisted", false);
    // Heat/Rut for those that can have them if "fuck draft"
    if (fuck) {
        // Try to go into intense heat.
        goIntoHeat(player, true, 2);
        // Males go into rut
        goIntoRut(player, true);
    }
    // ORGAZMO
    if (player.lust >= 100 && !game.inCombat) {
        outputText("\n\nThe arousal from the potion overwhelms your senses and causes you to spontaneously orgasm.  You rip off your " + player.armorName + " and look down as your ", false);
        if (player.cocks.length > 0) {
            outputText(multiCockDescriptLight(game.player) + " erupts in front of you, liberally spraying the ground around you.  ", false);
        }
        if (player.cocks.length > 0 && player.vaginas.length > 0) {
            outputText("At the same time your ", false);
        }
        if (player.vaginas.length > 0) {
            outputText(vaginaDescript(player, 0) + " soaks your thighs.  ", false);
        }
        if (player.gender == 0)
            outputText("body begins to quiver with orgasmic bliss.  ", false);
        outputText("Once you've had a chance to calm down, you notice that the explosion of pleasure you just experienced has rocked you to your core.  You are a little hornier than you were before.", false);
        // increase player libido, and maybe sensitivity too?
        player.orgasm();
        dynStats("lib", 2, "sen", 1);
    }
    if (player.lust > 100)
        player.lust = 100;
    outputText("\n\n", false);
}
