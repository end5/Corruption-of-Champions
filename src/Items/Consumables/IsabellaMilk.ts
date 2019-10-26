export function isabellaMilk(player: Player): void {
    outputText("", true);
    outputText("You swallow down the bottle of Isabella's milk.", false);
    if (player.fatigue > 0)
        outputText("  You feel much less tired! (-33 fatigue)", false);
    fatigue(-33);
}
