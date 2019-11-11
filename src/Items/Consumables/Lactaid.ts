export function lactaid(player: Player): void {
    player.slimeFeed();
    let i: number = 0;
    outputText("You gulp down the bottle of lactaid, easily swallowing the creamy liquid.", true);
    // Bump up size!
    if (player.breastRows.averageBreastSize() < 8) {
        outputText("\n\n", false);
        if (player.breastRows.length == 1)
            growTits(player, (1 + rand(5)), 1, true, 1);
        else
            growTits(player, 1 + rand(2), player.breastRows.length, true, 1);
    }
    // Player doesn't lactate
    if (player.breastRows.biggestLactation() < 1) {
        outputText("\n\n", false);
        outputText("You feel your " + nippleDescription(player, 0) + "s become tight and engorged.  A single droplet of milk escapes each, rolling down the curves of your breasts.  <b>You are now lactating!</b>", false);
        for (i = 0; i < player.breastRows.length; i++) {
            player.breastRows[i].lactationMultiplier += 2;
        }
    }
    // Boost lactation
    else {
        outputText("\n\n", false);
        outputText("Milk leaks from your " + nippleDescription(player, 0) + "s in thick streams.  You're lactating even more!", false);
        for (i = 0; i < player.breastRows.length; i++) {
            player.breastRows[i].lactationMultiplier += 1 + rand(10) / 10;
        }
    }
    dynStats("lus", 10);
    if (rand(3) == 0) {
        outputText(modFem(player, 95, 1), false);
    }
}
