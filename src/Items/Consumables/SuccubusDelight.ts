export function succubisDelight(tainted: boolean, player: Player): void {
    player.slimeFeed();
    let changes: number = 0;
    let crit: number = 1;
    // Determine crit multiplier (x2 or x3)
    if (rand(4) == 0)
        crit += rand(2) + 1;
    let changeLimit: number = 1;
    // Chances to up the max number of changes
    if (rand(2) == 0)
        changeLimit++;
    if (rand(2) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    // Generic drinking text
    outputText("You uncork the bottle and drink down the strange substance, struggling to down the thick liquid.", true);
    // low corruption thoughts
    if (player.cor < 33)
        outputText("  This stuff is gross, why are you drinking it?", false);
    // high corruption
    if (player.cor >= 66)
        outputText("  You lick your lips, marvelling at how thick and sticky it is.", false);
    // Corruption increase
    if (player.cor < 50 || rand(2)) {
        outputText("\n\nThe drink makes you feel... dirty.", false);
        temp = 1;
        // Corrupts the uncorrupted faster
        if (player.cor < 50)
            temp++;
        if (player.cor < 40)
            temp++;
        if (player.cor < 30)
            temp++;
        // Corrupts the very corrupt slower
        if (player.cor >= 90)
            temp = .5;
        if (tainted)
            dynStats("cor", temp);
        else
            dynStats("cor", 0);
        changes++;
    }
    // Makes your balls biggah! (Or cummultiplier higher if futa!)
    if (rand(1.5) == 0 && changes < changeLimit && player.balls > 0) {
        player.ballSize++;
        // They grow slower as they get bigger...
        if (player.ballSize > 10)
            player.ballSize -= .5;
        // Texts
        if (player.ballSize <= 2)
            outputText("\n\nA flash of warmth passes through you and a sudden weight develops in your groin.  You pause to examine the changes and your roving fingers discover your " + simpleBallsDescript(player) + " have grown larger than a human's.", false);
        if (player.ballSize > 2)
            outputText("\n\nA sudden onset of heat envelops your groin, focusing on your " + sackDescript(player) + ".  Walking becomes difficult as you discover your " + simpleBallsDescript(player) + " have enlarged again.", false);
        dynStats("lib", 1, "lus", 3);
    }
    // Boost cum multiplier
    if (changes < changeLimit && rand(2) == 0 && player.cocks.length > 0) {
        if (player.cumMultiplier < 6 && rand(2) == 0 && changes < changeLimit) {
            // Temp is the max it can be raised to
            temp = 3;
            // Lots of cum raises cum multiplier cap to 6 instead of 3
            if (player.perks.findByType(PerkLib.MessyOrgasms) >= 0)
                temp = 6;
            if (temp < player.cumMultiplier + .4 * crit) {
                changes--;
            }
            else {
                player.cumMultiplier += .4 * crit;
                // Flavor text
                if (player.balls == 0)
                    outputText("\n\nYou feel a churning inside your body as something inside you changes.", false);
                if (player.balls > 0)
                    outputText("\n\nYou feel a churning in your " + ballsDescriptLight(player) + ".  It quickly settles, leaving them feeling somewhat more dense.", false);
                if (crit > 1)
                    outputText("  A bit of milky pre dribbles from your " + multiCockDescriptLight(game.player) + ", pushed out by the change.", false);
                dynStats("lib", 1);
            }
            changes++;
        }
    }
    // Fail-safe
    if (changes == 0) {
        outputText("\n\nYour groin tingles, making it feel as if you haven't cum in a long time.", false);
        player.hoursSinceCum += 100;
        changes++;
    }
    if (player.balls > 0 && rand(3) == 0) {
        outputText(modFem(player, 12, 3), false);
    }
}
