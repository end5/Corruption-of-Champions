/**
 * Created by aimozg on 18.01.14.
 */

export class OvipositionElixir extends Consumable {

    public constructor() {
        super("OviElix", "Ovi Elixir", "a hexagonal crystal bottle tagged with an image of an egg", 30, "This hexagonal crystal bottle is filled with a strange green fluid.  A tag with a picture of an egg is tied to the neck of the bottle, indicating it is somehow connected to egg-laying.");
    }

    public canUse(): boolean {
        if (game.player.vaginas.length > 0) return true;
        outputText("You pop the cork and prepare to drink the stuff, but the smell nearly makes you gag.  You cork it hastily.\n\n");
        return false;
    }

    // Oviposition Elixer!
    /* Notes on StatusAffects.Eggs
     v1 = egg type.
     v2 = size - 0 for normal, 1 for large
     v3 = quantity
     EGG TYPES-
     0 - brown - ass expansion
     1 - purple - hip expansion
     2 - blue - vaginal removal and/or growth of existing maleness
     3 - pink - dick removal and/or fertility increase.
     4 - white - breast growth.  If lactating increases lactation.
     5 - rubbery black
     */
    public useItem(): boolean {
        game.player.slimeFeed();
        outputText("You pop the cork and gulp down the thick greenish fluid.  The taste is unusual and unlike anything you've tasted before.");
        if (game.player.pregnancyType == PregnancyStore.PREGNANCY_GOO_STUFFED) {
            outputText("\n\nFor a moment you feel even more bloated than you already are.  That feeling is soon replaced by a dull throbbing pain.  It seems that with Valeria's goo filling your womb the ovielixir is unable to work its magic on you.");
            return (false);
        }
        if (game.player.pregnancyType == PregnancyStore.PREGNANCY_WORM_STUFFED) {
            outputText("\n\nFor a moment you feel even more bloated than you already are.  That feeling is soon replaced by a dull throbbing pain.  It seems that with the worms filling your womb the ovielixir is unable to work its magic on you.");
            return (false);
        }
        if (game.player.pregnancyIncubation == 0) { // If the player is not pregnant, get preggers with eggs!
            outputText("\n\nThe elixir has an immediate effect on your belly, causing it to swell out slightly as if pregnant.  You guess you'll be laying eggs sometime soon!");
            game.player.knockUp(PregnancyStore.PREGNANCY_OVIELIXIR_EGGS, PregnancyStore.INCUBATION_OVIELIXIR_EGGS, 1, 1);
            game.player.effects.create(StatusAffects.Eggs, rand(6), 0, rand(3) + 5, 0);
            return (false);
        }
        let changeOccurred: boolean = false;
        if (game.player.pregnancyType == PregnancyStore.PREGNANCY_OVIELIXIR_EGGS) { // If player already has eggs, chance of size increase!
            if (game.player.effects.findByType(StatusAffects.Eggs) >= 0) {
                // If eggs are small, chance of increase!
                if (game.player.effects.getValue2Of(StatusAffects.Eggs) == 0) {
                    // 1 in 2 chance!
                    if (rand(3) == 0) {
                        game.player.effects.addValue(StatusAffects.Eggs, 2, 1);
                        outputText("\n\nYour pregnant belly suddenly feels heavier and more bloated than before.  You wonder what the elixir just did.");
                        changeOccurred = true;
                    }
                }
                // Chance of quantity increase!
                if (rand(2) == 0) {
                    outputText("\n\nA rumble radiates from your uterus as it shifts uncomfortably and your belly gets a bit larger.");
                    game.player.effects.addValue(StatusAffects.Eggs, 3, rand(4) + 1);
                    changeOccurred = true;
                }
            }
        }
        if (!changeOccurred && game.player.pregnancyIncubation > 20 && game.player.pregnancyType != PregnancyStore.PREGNANCY_BUNNY) { // If no changes, speed up pregnancy.
            outputText("\n\nYou gasp as your pregnancy suddenly leaps forwards, your belly bulging outward a few inches as it gets closer to time for birthing.");
            let newIncubation: number = game.player.pregnancyIncubation - int(game.player.pregnancyIncubation * 0.3 + 10);
            if (newIncubation < 2) newIncubation = 2;
            game.player.knockUpForce(game.player.pregnancyType, newIncubation);
            trace("Pregger Count New total:" + game.player.pregnancyIncubation);
        }
        return (false);
    }
}
