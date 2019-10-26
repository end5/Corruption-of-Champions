export function whiteSpellbook(player: Player): void {
    outputText("You open the white tome, and discover it to be an instructional book on the use of white magic.  Most of it is filled with generic information about white magic - how it is drawn for mental focus, is difficult to use when tired or aroused, and can be used to create and control energy.  In no time at all you've read the whole thing, but it disappears into thin air before you can put it away.", true);
    if (player.inte < 30) {
        outputText("\n\nYou feel greatly enlightened by your time spent reading.", false);
        dynStats("int", 4);
    }
    else if (player.inte < 60) {
        outputText("\n\nSpending some time reading was probably good for you, and you definitely feel smarter for it.", false);
        dynStats("int", 2);
    }
    else if (player.inte < 80) {
        outputText("\n\nAfter reading the small tome your already quick mind feels invigorated.", false);
        dynStats("int", 1);
    }
    else {
        outputText("\n\nThe contents of the book did little for your already considerable intellect.", false);
        dynStats("int", .6);
    }
    // Smart enough for arouse and doesnt have it
    if (player.inte >= 25 && player.effects.findByType(StatusAffects.KnowsCharge) < 0) {
        outputText("\n\nYou blink in surprise, assaulted by the knowledge of a <b>new spell: Charge Weapon.</b>", false);
        player.effects.create(StatusAffects.KnowsCharge, 0, 0, 0, 0);
        return;
    }
    // Smart enough for arouse and doesnt have it
    if (player.inte >= 30 && player.effects.findByType(StatusAffects.KnowsBlind) < 0) {
        outputText("\n\nYou blink in surprise, assaulted by the knowledge of a <b>new spell: Blind.</b>", false);
        player.effects.create(StatusAffects.KnowsBlind, 0, 0, 0, 0);
        return;
    }
    // Smart enough for arouse and doesnt have it
    if (player.inte >= 40 && player.effects.findByType(StatusAffects.KnowsWhitefire) < 0) {
        outputText("\n\nYou blink in surprise, assaulted by the knowledge of a <b>new spell: Whitefire.</b>", false);
        player.effects.create(StatusAffects.KnowsWhitefire, 0, 0, 0, 0);
    }
}
