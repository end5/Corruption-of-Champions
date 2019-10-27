// Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.

// PRONOUNS: The parser uses Elverson/Spivak Pronouns specifically to allow characters to be written with non-specific genders.
// http://en.wikipedia.org/wiki/Spivak_pronoun
//
// Cheat Table:
//           | Subject    | Object       | Possessive Adjective | Possessive Pronoun | Reflexive         |
// Agendered | ey laughs  | I hugged em  | eir heart warmed     | that is eirs       | ey loves emself   |
// Masculine | he laughs  | I hugged him | his heart warmed     | that is his        | he loves himself  |
// Feminine  | she laughs | I hugged her | her heart warmed     | that is hers       | she loves herself |

// (Is it bad that half my development time so far has been researching non-gendered nouns? ~~~~Fake-Name)

export let arianLookups: Record<string, any> = // For subject: "arian"
{
    man(thisPtr: CoC): string { return ArianScene.arianMF("man", "woman"); },
    // argh! "Man" is the mass-noun for humanity, and I'm loathe to choose an even more esoteric variant.
    // Elverson/Spivak terminology is already esoteric enough, and it lacks a ungendered mass noun.

    ey(thisPtr: CoC): string { return ArianScene.arianMF("he", "she"); },
    em(thisPtr: CoC): string { return ArianScene.arianMF("him", "her"); },
    eir(thisPtr: CoC): string { return ArianScene.arianMF("his", "her"); },
    eirs(thisPtr: CoC): string { return ArianScene.arianMF("his", "hers"); },
    emself(thisPtr: CoC): string { return ArianScene.arianMF("himself", "herself"); },

    chestadj(thisPtr: CoC): string { return ArianScene.arianChestAdjective(); },
    chest(thisPtr: CoC): string { return ArianScene.arianChest(); }
};
// Arian unhandled terms (I have not decided how to support them yet):
// arianMF("mas","mis")
// arianMF("master","mistress")
// arianMF("male","girly")

export let rubiLookups: Record<string, any> = // For subject: "rubi"
{
    man(thisPtr: CoC): string { return Rubi.rubiMF("man", "woman"); },

    ey(thisPtr: CoC): string { return Rubi.rubiMF("he", "she"); },
    em(thisPtr: CoC): string { return Rubi.rubiMF("him", "her"); },
    eir(thisPtr: CoC): string { return Rubi.rubiMF("his", "her"); },
    eirs(thisPtr: CoC): string { return Rubi.rubiMF("his", "hers"); },
    emself(thisPtr: CoC): string { return Rubi.rubiMF("himself", "herself"); },

    cock(thisPtr: CoC): string { return Rubi.rubiCock(); },
    breasts(thisPtr: CoC): string { return Rubi.rubiBreasts(); }

};
		// Rubi unhandled terms :
		// rubiMF("boy","girl")
		// rubiMF("demon","demoness")
		// rubiMF("gentleman","lady")
