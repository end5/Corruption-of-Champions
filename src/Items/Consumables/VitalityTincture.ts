// Vitality Tincture
export function vitalityTincture(player: Player): void {
    player.slimeFeed();
    outputText("You down the contents of the bottle. The liquid is thick and tastes remarkably like cherries. Within moments, you feel much more fit and healthy.", true);
    // str change
    temp = rand(3);
    dynStats("str", temp);
    // Garunteed toughness if no str
    if (temp == 0) {
        temp = rand(3);
        if (temp == 0)
            temp = 1;
    }
    else
        temp = rand(3);
    // tou change
    dynStats("tou", temp);
    // Chance of fitness change
    if (HPChange(50, false))
        outputText("  Any aches, pains and bruises you have suffered no longer hurt and you feel much better.", false);
    if (rand(3) == 0)
        outputText(modTone(player, 95, 3), false);
}
