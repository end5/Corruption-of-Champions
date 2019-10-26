export function herbalContraceptive(player: Player): void {
    clearOutput();
    // Placeholder, sue me
    outputText("You chew on the frankly awfully bitter leaves as quickly as possible before swallowing them down.");
    player.effects.create(StatusAffects.Contraceptives, 1, 48, 0, 0);
}
