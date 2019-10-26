export function coal(player: Player): void {
    let changes: number = 0;
    outputText("", true);
    outputText("You handle the coal rocks experimentally and they crumble to dust in your hands!  You cough as you breathe in the cloud, sputtering and wheezing.  After a minute of terrible coughing, you recover and realize there's no remaining trace of the rocks, not even a sooty stain on your hands!", false);
    // Try to go into intense heat
    if (player.goIntoHeat(true, 2)) {
        changes++;
    }
    // Males go into rut
    else if (player.goIntoRut(true)) {
        changes++;
    }
    else {
        // Boost anal capacity without gaping
        if (player.effects.getValue1Of(StatusAffects.BonusACapacity) < 80) {
            if (player.effects.findByType(StatusAffects.BonusACapacity) < 0)
                player.effects.create(StatusAffects.BonusACapacity, 0, 0, 0, 0);
            player.effects.addValue(StatusAffects.BonusACapacity, 1, 5);
            outputText("\n\nYou feel... more accommodating somehow.  Your " + assholeDescript(player) + " is tingling a bit, and though it doesn't seem to have loosened, it has grown more elastic.", false);
            changes++;
        }
        else {
            outputText("\n\nYour whole body tingles for a moment but it passes.  It doesn't look like the coal can do anything to you at this point.", false);
        }
    }
}
