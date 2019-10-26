// Scholar's Tea
export function scholarsTea(player: Player): void {
    player.slimeFeed();
    outputText("Following the merchant's instructions, you steep and drink the tea. Its sharp taste fires up your palate and in moments, you find yourself more alert and insightful. As your mind wanders, a creative, if somewhat sordid, story comes to mind. It is a shame that you do not have writing implements as you feel you could make a coin or two off what you have conceived. The strange seller was not lying about the power of the tea.", true);
    if (rand(3) == 0)
        outputText(modTone(player, 15, 1), false);
    dynStats("int", (2.5 + rand(5)));
}
