export function impFood(player: Player): void {
    outputText("", true);
    if (player.cocks.length > 0) {
        outputText("The food tastes strange and corrupt - you can't really think of a better word for it, but it's unclean.", false);
        if (player.cocks[0].cockLength < 12) {
            temp = player.increaseCock(0, rand(2) + 2);
            outputText("\n\n", false);
            lengthChange(player, temp, 1);
        }
        outputText("\n\nInhuman vitality spreads through your body, invigorating you!\n", false);
        HPChange(30 + player.tou / 3, true);
        dynStats("lus", 3, "cor", 1);
        // Shrinkage!
        if (rand(2) == 0 && player.tallness > 42) {
            outputText("\n\nYour skin crawls, making you close your eyes and shiver.  When you open them again the world seems... different.  After a bit of investigation, you realize you've become shorter!\n", false);
            player.tallness -= 1 + rand(3);
        }
        // Red skin!
        if (rand(30) == 0 && player.skinTone != "red") {
            if (player.skinType == SkinType.FUR)
                outputText("\n\nUnderneath your fur, your skin ", false);
            else
                outputText("\n\nYour " + player.skinDesc + " ", false);
            if (rand(2) == 0)
                player.skinTone = "red";
            else
                player.skinTone = "orange";
            outputText("begins to lose its color, fading until you're as white as an albino.  Then, starting at the crown of your head, a reddish hue rolls down your body in a wave, turning you completely " + player.skinTone + ".", false);
        }
        return;
    }
    else {
        outputText("The food tastes... corrupt, for lack of a better word.\n", false);
        HPChange(20 + player.tou / 3, true);
        dynStats("lus", 3, "cor", 1);
    }
    // Red skin!
    if (rand(30) == 0 && player.skinTone != "red") {
        if (player.skinType == SkinType.FUR)
            outputText("\n\nUnderneath your fur, your skin ", false);
        else
            outputText("\n\nYour " + player.skinDesc + " ", false);
        if (rand(2) == 0)
            player.skinTone = "red";
        else
            player.skinTone = "orange";
        outputText("begins to lose its color, fading until you're as white as an albino.  Then, starting at the crown of your head, a reddish hue rolls down your body in a wave, turning you completely " + player.skinTone + ".", false);
    }
    // Shrinkage!
    if (rand(2) == 0 && player.tallness > 42) {
        outputText("\n\nYour skin crawls, making you close your eyes and shiver.  When you open them again the world seems... different.  After a bit of investigation, you realize you've become shorter!", false);
        player.tallness -= 1 + rand(3);
    }
}
