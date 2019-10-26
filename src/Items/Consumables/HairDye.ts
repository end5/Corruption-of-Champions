export function hairDye(color: string, player: Player): void {
    if (player.hairColor.indexOf("rubbery") != -1 || player.hairColor.indexOf("latex-textured") != -1) {
        outputText("You massage the dye into your " + hairDescription(player) + " but the dye cannot penetrate the impermeable material your hair is composed of.", true);
        return;
    }
    if (player.hairLength == 0) {
        outputText("You rub the dye into your bald head, but it has no effect.", true);
        return;
    }
    outputText("You rub the dye into your " + hairDescription(player) + ", then use a bucket of cool lakewater to rinse clean a few minutes later.  ", true);
    player.hairColor = color;
    outputText("You now have " + hairDescription(player) + ".", false);
    if (player.lust > 50) {
        outputText("\n\nThe cool water calms your urges somewhat, letting you think more clearly.", false);
        dynStats("lus", -15);
    }
}
