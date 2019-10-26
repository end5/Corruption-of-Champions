export function useMarbleMilk(player: Player): void {
    player.slimeFeed();
    // Bottle of Marble's milk - item
    // Description: "A clear bottle of milk from Marble's breasts.  It smells delicious.  "
    outputText("", true);
    // Text for when the player uses the bottle:
    // [before the player is addicted, Addiction < 30]
    if (player.effects.getValue2Of(StatusAffects.Marble) < 30 && player.effects.getValue3Of(StatusAffects.Marble) == 0)
        outputText("You gulp down the bottle's contents; Marble makes some good tasting milk.\n\n", false);
    // [before the player is addicted, Addiction < 50]
    else if (player.effects.getValue3Of(StatusAffects.Marble) <= 0)
        outputText("You gulp down the bottle's contents; Marble makes some really good tasting milk.\n\n", false);
    else if (player.effects.getValue3Of(StatusAffects.Marble) > 0) {
        // [player is completely addicted]
        if (player.perks.findByType(PerkLib.MarblesMilk) >= 0)
            outputText("You gulp down the bottle's contents; it's no substitute for the real thing, but it's a nice pick me up.\n\n", false);
        else {
            // [player is no longer addicted]
            if (player.perks.findByType(PerkLib.MarbleResistant) >= 0)
                outputText("You gulp down the bottle's contents; you're careful not to get too attached to the taste.\n\n", false);
            // [player is addicted]
            else
                outputText("You gulp down the bottle's contents; you really needed that.\n\n", false);
        }
    }
    // Increases addiction by 5, up to a max of 50 before the player becomes addicted, no max after the player is addicted.
    marbleScene.marbleStatusChange(0, 5);
    // Does not apply the 'Marble's Milk' effect
    // Purge withdrawl
    if (player.effects.findByType(StatusAffects.MarbleWithdrawl) >= 0) {
        player.effects.remove(StatusAffects.MarbleWithdrawl);
        dynStats("tou", 5, "int", 5);
        outputText("You no longer feel the symptoms of withdrawal.\n\n", false);
    }
    // Heals the player 70-100 health
    HPChange(70 + rand(31), true);
    // Restores a portion of fatigue (once implemented)
    changeFatigue(-25);
    // If the player is addicted, this item negates the withdrawal effects for a few hours (suggest 6), there will need to be a check here to make sure the withdrawal effect doesn't reactivate while the player is under the effect of 'Marble's Milk'.
    if (player.effects.findByType(StatusAffects.BottledMilk) >= 0) {
        player.effects.addValue(StatusAffects.BottledMilk, 1, (6 + rand(6)));
    }
    else
        player.effects.create(StatusAffects.BottledMilk, 12, 0, 0, 0);
}
