// Item: Dragon Egg (Z) (FEN CODED TO HERE - OR AT LEAST COPIED INTO THE CODE FOR FUTURE CODING)
// Itemdescription - "A large, solid egg, easily the size of your clenched fist.  Its shell color is reddish-white, with blue splotches."
export function eatEmberEgg(player: Player): void {
    clearOutput();
    // Effect:
    // Boosts the special effect of Dragonbreath by 20% for 1 use. ie: if Tainted's breath weapon has a 80% chance to stun on hit, +20% equals 100% chance to stun.
    outputText("You crack the shell easily and swallow the large yolk and the copious amounts of albumen - the yolk is blue, while the rest is crimson-tinted.  It tastes like... well, it tastes mostly of spiced mint, you think.");
    if (player.perks.findByType(PerkLib.Dragonfire) >= 0) {
        if (player.effects.findByType(StatusAffects.DragonBreathCooldown) >= 0)
            player.effects.remove(StatusAffects.DragonBreathCooldown);
        else {
            if (player.effects.findByType(StatusAffects.DragonBreathBoost) < 0)
                player.effects.create(StatusAffects.DragonBreathBoost, 0, 0, 0, 0);
        }
        // (if PC has breath weapon)
        outputText("\n\nA sudden surge of energy fills your being and you feel like you could blast anything to atoms with a single breath, like the mighty dragons of legends.");
    }
    fatigue(-20);
}
