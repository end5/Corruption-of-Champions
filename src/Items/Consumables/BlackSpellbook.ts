export function blackSpellbook(player: Player): void {
    outputText("You open the small black book, and discover it to be an instructional book on the use of black magic.  Most of it is filled with generic information about black magic - how it is drawn from emotions (typically lust), and how it has the power to affect bodies and emotions.  It also warns against using it on oneself, as it is difficult to draw on your emotions while meddling with your own body.  In no time at all you've read the whole thing, but it disappears into thin air before you can put it away.", true);
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
    if (player.inte >= 25 && player.effects.findByType(StatusAffects.KnowsArouse) < 0) {
        outputText("\n\nYou blink in surprise, assaulted by the knowledge of a <b>new spell: Arouse.</b>", false);
        player.effects.create(StatusAffects.KnowsArouse, 0, 0, 0, 0);
        return;
    }
    // Smart enough for arouse and doesnt have it
    if (player.inte >= 30 && player.effects.findByType(StatusAffects.KnowsHeal) < 0) {
        outputText("\n\nYou blink in surprise, assaulted by the knowledge of a <b>new spell: Heal.</b>", false);
        player.effects.create(StatusAffects.KnowsHeal, 0, 0, 0, 0);
        return;
    }
    // Smart enough for arouse and doesnt have it
    if (player.inte >= 40 && player.effects.findByType(StatusAffects.KnowsMight) < 0) {
        outputText("\n\nYou blink in surprise, assaulted by the knowledge of a <b>new spell: Might.</b>", false);
        player.effects.create(StatusAffects.KnowsMight, 0, 0, 0, 0);
    }
}
