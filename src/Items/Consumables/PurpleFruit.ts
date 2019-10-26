// New Item: "Purple Fruit"
// This sweet-smelling produce looks like an eggplant but feels almost squishy, and rubbery to the touch. Holding it to your ear, you think you can hear some fluid sloshing around inside.
// >When Used
export function purpleFruitEssrayle(player: Player): void {
    clearOutput();
    outputText("You bite into the fruit Essrayle gave you with little hesitation.  It's amazingly sweet, with a texture that's rather gummy.  The juice is a candied grape syrup that fills your cheeks and flows down your throat with far more fluid than the size of the plant should allow.  You hastily devour the entire thing, unable to stop yourself once you've started.");
    outputText("\n\nA tingling warmth shifts to a roaring inferno in your veins, your heart-rate spiking abruptly.  The intensity of it almost makes your body feel molten!  But, as quickly as it came, the sensation fades into merely a pleasing warmth that settles in your chest.");
    if (player.breasts.averageNipplesPerBreast() < 4) {
        outputText("  At first you think nothing has changed, but a second look confirms that your breasts now sport the same quartet of cow-like nipples the bovine plant-girl bears.");
        if (player.nippleLength < 4)
            player.nippleLength = 4;
        temp = player.breasts.length;
        while (temp > 0) {
            temp--;
            player.breastRows[temp].nipplesPerBreast = 4;
        }
    }
    // [Player gains quad nipples, milk production and libido way up]
    dynStats("lib", 5);
    player.boostLactation(3 * player.breasts.length);
}
