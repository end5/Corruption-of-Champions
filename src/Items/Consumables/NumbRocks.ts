// Numb Rocks
export function numbRocks(player: Player): void {
    outputText("", true);
    // Numb rocks lower lust significantly but have a chance of inducing the masturbation preventing effect from minotaur.
    outputText("You pop open the package of numb rocks and dump it into your waiting mouth.  The strange candy fizzes and pops, leaving the nerves on your tongue feeling a bit deadened as you swallow the sweet mess.", false);
    if (player.lust >= 33) {
        outputText("\n\nThe numbness spreads through your body, bringing with it a sense of calm that seems to muffle your sexual urges.", false);
        player.lust -= 20 + rand(40);
    }
    if (rand(5) == 0) {
        if (player.effects.findByType(StatusAffects.Dysfunction) < 0) {
            outputText("\n\nUnfortunately, the skin of ", false);
            if (player.cocks.length > 0) {
                outputText(sMultiCockDesc(game.player), false);
                if (player.vaginas.length > 0)
                    outputText(" and", false);
                outputText(" ", false);
            }
            if (player.vaginas.length > 0) {
                if (player.cocks.length === 0)
                    outputText("your ");
                outputText(vaginaDescript(player, 0) + " ", false);
            }
            if (!(player.cocks.length > 0 || player.vaginas.length > 0))
                outputText(assholeDescript(player) + " ", false);
            outputText(" numbs up too.  You give yourself a gentle touch, but are quite disturbed when you realize you can barely feel it.  You can probably still fuck something to get off, but regular masturbation is out of the question...", false);
            player.effects.create(StatusAffects.Dysfunction, 50 + rand(100), 0, 0, 0);
        }
        else {
            outputText("\n\nSadly your groin becomes even more deadened to sensation.  You wonder how much longer you'll have to wait until you can please yourself again.", false);
            player.effects.addValue(StatusAffects.Dysfunction, 1, 50 + rand(100));
        }
    }
    else if (rand(4) == 0 && player.inte > 15) {
        outputText("\n\nNumbness clouds your mind, making you feel slow witted and dull.  Maybe these candies weren't such a exceptio... fantas... good idea.", false);
        dynStats("int", -(1 + rand(5)));
    }
    if (player.perks.findByType(PerkLib.ThickSkin) < 0 && player.sens < 30 && rand(4) == 0) {
        outputText("Slowly, ", false);
        if (player.skinType == SkinType.PLAIN)
            outputText("your skin", false);
        else
            outputText("the skin under your " + player.skinDesc, false);
        outputText(" begins to feel duller, almost... thicker.  You pinch yourself and find that your epidermis feels more resistant to damage, almost like natural armor!\n<b>(Thick Skin - Perk Gained!)</b>", false);
        player.perks.create(PerkLib.ThickSkin, 0, 0, 0, 0);
    }
    outputText("\n\nAfter the sensations pass, your " + player.skinDesc + " feels a little less receptive to touch.", false);
    dynStats("sen", -3);
    if (player.sens < 1)
        player.sens = 1;
}
