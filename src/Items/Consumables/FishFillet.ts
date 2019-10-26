// Fish Fillet
export function fishFillet(player: Player): void {
    clearOutput();
    if (!game.inCombat)
        outputText("You sit down and unwrap your fish fillet. It's perfectly flaky, allowing you to break it off in bite-sized chunks.  The salty meal disappears quickly, and your stomach gives an appreciative gurgle.");
    // (In combat?)
    else
        outputText("You produce the fish fillet from your bag.  Rather than unwrap it and savor the taste as you normally would, you take a large bite out of it, leaf wrapping and all.  In no time your salty meal is gone, your stomach giving an appreciative gurgle.");
    // Increase HP by quite a bit!)
    // (Slight chance at increasing Toughness?)
    // (If lake has been tainted, +1 Corruption?)
    if (player.effects.findByType(StatusAffects.FactoryOverload) >= 0)
        dynStats("cor", 0.5);
    dynStats("cor", 0.1);
    HPChange(Math.round(player.maxHP() * .25), false);
}
