export function purePearl(player: Player): void {
    outputText("You cram the pearl in your mouth and swallow it like a giant pill with some difficulty.  Surprisingly there is no discomfort, only a cool calming sensation that springs up from your core.", true);
    dynStats("lib", -5, "lus", -25, "cor", -10);
    if (player.perks.findByType(PerkLib.PurityBlessing) < 0)
        player.perks.create(PerkLib.PurityBlessing, 0, 0, 0, 0);
}
