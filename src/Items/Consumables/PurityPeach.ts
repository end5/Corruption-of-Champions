// PurPeac
// Purity Peach - Inventory
export function purityPeach(player: Player): void {
    clearOutput();
    outputText("You bite into the sweet, juicy peach, feeling a sensation of energy sweeping through your limbs and your mind.  You feel revitalized, refreshed, and somehow cleansed.");
    fatigue(-15);
    HPChange(Math.round(player.maxHP() * 0.25), false);
}
