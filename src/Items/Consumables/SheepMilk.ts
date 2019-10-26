export function sheepMilk(player: Player): void {
    outputText("You gulp the bottle's contents, and its sweet taste immediately invigorates you, making you feel calm and concentrated", true);
    // -30 fatigue, -2 libido, -10 lust]
    fatigue(-30);
    dynStats("lib", -.25, "lus", -10, "cor", -0.5);
}
