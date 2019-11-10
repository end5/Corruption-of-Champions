import { trace } from "console";
import { Character } from "../Character/Character";
import { num2Text, rand } from "../Display/Utils";
import { PerkLib } from "../Effects/PerkLib";
import { StatusAffects } from "../Effects/StatusAffects";
import { dynStats, outputText } from "../Game/engineCore";
import { kFLAGS } from "../Game/Flags";
import { flags } from "../Game/Game";
import { hasCock } from "../Scenes/Places/TelAdre/Katherine";
import { breastCup, cockDescript, multiCockDescriptLight, nippleDescription, sackDescript, vaginaDescript } from "./Appearance";
import { VaginaLooseness } from "./appearanceDefs";
import { ballsDescriptLight, breastDescript } from "./CreatureDescriptors";
import { buttChangeNoDisplay, cuntChangeNoDisplay } from "./Modifiers";

export function cuntChange(char: Character, cArea: number, display: boolean, spacingsF: boolean = false, spacingsB: boolean = true): boolean {
    if (char.vaginas.length == 0) return false;
    const wasVirgin: boolean = char.vaginas[0].virgin;
    const stretched: boolean = cuntChangeNoDisplay(char, cArea);
    const devirgined: boolean = wasVirgin && !char.vaginas[0].virgin;
    if (devirgined) {
        if (spacingsF) outputText("  ");
        outputText("<b>Your hymen is torn, robbing you of your virginity.</b>", false);
        if (spacingsB) outputText("  ");
    }
    // STRETCH SUCCESSFUL - begin flavor text if outputting it!
    if (display && stretched) {
        // Virgins get different formatting
        if (devirgined) {
            // If no spaces after virgin loss
            if (!spacingsB) outputText("  ");
        }
        // Non virgins as usual
        else if (spacingsF) outputText("  ");
        if (char.vaginas[0].vaginalLooseness == VaginaLooseness.LEVEL_CLOWN_CAR) outputText("<b>Your " + Appearance.vaginaDescript(char, 0) + " is stretched painfully wide, large enough to accomodate most beasts and demons.</b>");
        if (char.vaginas[0].vaginalLooseness == VaginaLooseness.GAPING_WIDE) outputText("<b>Your " + Appearance.vaginaDescript(char, 0) + " is stretched so wide that it gapes continually.</b>");
        if (char.vaginas[0].vaginalLooseness == VaginaLooseness.GAPING) outputText("<b>Your " + Appearance.vaginaDescript(char, 0) + " painfully stretches, the lips now wide enough to gape slightly.</b>");
        if (char.vaginas[0].vaginalLooseness == VaginaLooseness.LOOSE) outputText("<b>Your " + Appearance.vaginaDescript(char, 0) + " is now very loose.</b>", false);
        if (char.vaginas[0].vaginalLooseness == VaginaLooseness.NORMAL) outputText("<b>Your " + Appearance.vaginaDescript(char, 0) + " is now a little loose.</b>", false);
        if (char.vaginas[0].vaginalLooseness == VaginaLooseness.TIGHT) outputText("<b>Your " + Appearance.vaginaDescript(char, 0) + " is stretched out to a more normal size.</b>");
        if (spacingsB) outputText("  ");
    }
    return stretched;
}

export function buttChange(char: Character, cArea: number, display: boolean, spacingsF: boolean = true, spacingsB: boolean = true): boolean {
    const stretched: boolean = buttChangeNoDisplay(char, cArea);
    // STRETCH SUCCESSFUL - begin flavor text if outputting it!
    if (stretched && display) {
        if (spacingsF) outputText("  ");
        buttChangeDisplay(char);
        if (spacingsB) outputText("  ");
    }
    return stretched;
}

export function buttChangeDisplay(char: Character): void {	// Allows the test for stretching and the text output to be separated
    if (char.ass.analLooseness == 5) outputText("<b>Your " + Appearance.assholeDescript(char) + " is stretched even wider, capable of taking even the largest of demons and beasts.</b>");
    if (char.ass.analLooseness == 4) outputText("<b>Your " + Appearance.assholeDescript(char) + " becomes so stretched that it gapes continually.</b>", false);
    if (char.ass.analLooseness == 3) outputText("<b>Your " + Appearance.assholeDescript(char) + " is now very loose.</b>");
    if (char.ass.analLooseness == 2) outputText("<b>Your " + Appearance.assholeDescript(char) + " is now a little loose.</b>");
    if (char.ass.analLooseness == 1) outputText("<b>You have lost your anal virginity.</b>", false);
}

export function shrinkTits(char: Character, ignore_hyper_happy: boolean = false): void {
    if (flags[kFLAGS.HYPER_HAPPY] && !ignore_hyper_happy) {
        return;
    }
    if (char.breastRows.length == 1) {
        if (char.breastRows[0].breastRating > 0) {
            // Shrink if bigger than N/A cups
            let temp: number;
            temp = 1;
            char.breastRows[0].breastRating--;
            // Shrink again 50% chance
            if (char.breastRows[0].breastRating >= 1 && rand(2) == 0 && char.perks.findByType(PerkLib.BigTits) < 0) {
                temp++;
                char.breastRows[0].breastRating--;
            }
            if (char.breastRows[0].breastRating < 0) char.breastRows[0].breastRating = 0;
            // Talk about shrinkage
            if (temp == 1) outputText("\n\nYou feel a weight lifted from you, and realize your breasts have shrunk!  With a quick measure, you determine they're now " + breastCup(0) + "s.", false);
            if (temp == 2) outputText("\n\nYou feel significantly lighter.  Looking down, you realize your breasts are much smaller!  With a quick measure, you determine they're now " + breastCup(0) + "s.", false);
        }
    }
    else if (char.breastRows.length > 1) {
        // multiple
        outputText("\n", false);
        // temp2 = amount changed
        // temp3 = counter
        let temp2: number = 0;
        let temp3: number = char.breastRows.length;
        while (temp3 > 0) {
            temp3--;
            if (char.breastRows[temp3].breastRating > 0) {
                char.breastRows[temp3].breastRating--;
                if (char.breastRows[temp3].breastRating < 0) char.breastRows[temp3].breastRating = 0;
                temp2++;
                outputText("\n", false);
                if (temp3 < char.breastRows.length - 1) outputText("...and y", false);
                else outputText("Y", false);
                outputText("our " + breastDescript(char, temp3) + " shrink, dropping to " + breastCup(temp3) + "s.", false);
            }
            if (char.breastRows[temp3].breastRating < 0) char.breastRows[temp3].breastRating = 0;
        }
        if (temp2 == 2) outputText("\nYou feel so much lighter after the change.", false);
        if (temp2 == 3) outputText("\nWithout the extra weight you feel particularly limber.", false);
        if (temp2 >= 4) outputText("\nIt feels as if the weight of the world has been lifted from your shoulders, or in this case, your chest.", false);
    }
}

export function growTits(char: Character, amount: number, rowsGrown: number, display: boolean, growthType: number): void {
    if (char.breastRows.length == 0) return;
    // GrowthType 1 = smallest grows
    // GrowthType 2 = Top Row working downward
    // GrowthType 3 = Only top row
    let temp2: number = 0;
    let temp3: number = 0;
    // Chance for "big tits" perked characters to grow larger!
    if (char.perks.findByType(PerkLib.BigTits) >= 0 && rand(3) == 0 && amount < 1) amount = 1;

    // Needs to be a number, since uint will round down to 0 prevent growth beyond a certain point
    let temp: number = char.breastRows.length;
    if (growthType == 1) {
        // Select smallest breast, grow it, move on
        while (rowsGrown > 0) {
            // Temp = counter
            temp = char.breastRows.length;
            // Temp2 = smallest tits index
            temp2 = 0;
            // Find smallest row
            while (temp > 0) {
                temp--;
                if (char.breastRows[temp].breastRating < char.breastRows[temp2].breastRating) temp2 = temp;
            }
            // Temp 3 tracks total amount grown
            temp3 += amount;
            trace("Breastrow chosen for growth: " + String(temp2) + ".");
            // Reuse temp to store growth amount for diminishing returns.
            temp = amount;
            if (!flags[kFLAGS.HYPER_HAPPY]) {
                // Diminishing returns!
                if (char.breastRows[temp2].breastRating > 3) {
                    if (char.perks.findByType(PerkLib.BigTits) < 0)
                        temp /= 1.5;
                    else
                        temp /= 1.3;
                }

                // WHy are there three options here. They all have the same result.
                if (char.breastRows[temp2].breastRating > 7) {
                    if (char.perks.findByType(PerkLib.BigTits) < 0)
                        temp /= 2;
                    else
                        temp /= 1.5;
                }
                if (char.breastRows[temp2].breastRating > 9) {
                    if (char.perks.findByType(PerkLib.BigTits) < 0)
                        temp /= 2;
                    else
                        temp /= 1.5;
                }
                if (char.breastRows[temp2].breastRating > 12) {
                    if (char.perks.findByType(PerkLib.BigTits) < 0)
                        temp /= 2;
                    else
                        temp /= 1.5;
                }
            }

            // Grow!
            trace("Growing breasts by ", temp);
            char.breastRows[temp2].breastRating += temp;
            rowsGrown--;
        }
    }

    if (!flags[kFLAGS.HYPER_HAPPY]) {
        // Diminishing returns!
        if (char.breastRows[0].breastRating > 3) {
            if (char.perks.findByType(PerkLib.BigTits) < 0) amount /= 1.5;
            else amount /= 1.3;
        }
        if (char.breastRows[0].breastRating > 7) {
            if (char.perks.findByType(PerkLib.BigTits) < 0) amount /= 2;
            else amount /= 1.5;
        }
        if (char.breastRows[0].breastRating > 12) {
            if (char.perks.findByType(PerkLib.BigTits) < 0) amount /= 2;
            else amount /= 1.5;
        }
    }
    /*if(breastRows[0].breastRating > 12) {
        if(hasPerk("Big Tits") < 0) amount/=2;
        else amount /= 1.5;
    }*/
    if (growthType == 2) {
        temp = 0;
        // Start at top and keep growing down, back to top if hit bottom before done.
        while (rowsGrown > 0) {
            if (temp + 1 > char.breastRows.length) temp = 0;
            char.breastRows[temp].breastRating += amount;
            trace("Breasts increased by " + amount + " on row " + temp);
            temp++;
            temp3 += amount;
            rowsGrown--;
        }
    }
    if (growthType == 3) {
        while (rowsGrown > 0) {
            rowsGrown--;
            char.breastRows[0].breastRating += amount;
            temp3 += amount;
        }
    }
    // Breast Growth Finished...talk about changes.
    trace("Growth ammout = ", amount);
    if (display) {
        if (growthType < 3) {
            if (amount <= 2) {
                if (char.breastRows.length > 1) outputText("Your rows of " + breastDescript(char, 0) + " jiggle with added weight, growing a bit larger.", false);
                if (char.breastRows.length == 1) outputText("Your " + breastDescript(char, 0) + " jiggle with added weight as they expand, growing a bit larger.", false);
            }
            else if (amount <= 4) {
                if (char.breastRows.length > 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your rows of " + breastDescript(char, 0) + " expand significantly.", false);
                if (char.breastRows.length == 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your " + breastDescript(char, 0) + " expand significantly.", false);
            }
            else {
                if (char.breastRows.length > 1) outputText("You drop to your knees from a massive change in your body's center of gravity.  Your " + breastDescript(char, 0) + " tingle strongly, growing disturbingly large.", false);
                if (char.breastRows.length == 1) outputText("You drop to your knees from a massive change in your center of gravity.  The tingling in your " + breastDescript(char, 0) + " intensifies as they continue to grow at an obscene rate.", false);
            }
            if (char.breastRows.biggestTitSize() >= 8.5 && char.nippleLength < 2) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = 2;
            }
            if (char.breastRows.biggestTitSize() >= 7 && char.nippleLength < 1) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = 1;
            }
            if (char.breastRows.biggestTitSize() >= 5 && char.nippleLength < .75) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = .75;
            }
            if (char.breastRows.biggestTitSize() >= 3 && char.nippleLength < .5) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = .5;
            }
        }
        else {
            if (amount <= 2) {
                if (char.breastRows.length > 1) outputText("Your top row of " + breastDescript(char, 0) + " jiggles with added weight as it expands, growing a bit larger.", false);
                if (char.breastRows.length == 1) outputText("Your row of " + breastDescript(char, 0) + " jiggles with added weight as it expands, growing a bit larger.", false);
            }
            if (amount > 2 && amount <= 4) {
                if (char.breastRows.length > 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your top row of " + breastDescript(char, 0) + " expand significantly.", false);
                if (char.breastRows.length == 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your " + breastDescript(char, 0) + " expand significantly.", false);
            }
            if (amount > 4) {
                if (char.breastRows.length > 1) outputText("You drop to your knees from a massive change in your body's center of gravity.  Your top row of " + breastDescript(char, 0) + " tingle strongly, growing disturbingly large.", false);
                if (char.breastRows.length == 1) outputText("You drop to your knees from a massive change in your center of gravity.  The tinglng in your " + breastDescript(char, 0) + " intensifies as they continue to grow at an obscene rate.", false);
            }
            if (char.breastRows.biggestTitSize() >= 8.5 && char.nippleLength < 2) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = 2;
            }
            if (char.breastRows.biggestTitSize() >= 7 && char.nippleLength < 1) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = 1;
            }
            if (char.breastRows.biggestTitSize() >= 5 && char.nippleLength < .75) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = .75;
            }
            if (char.breastRows.biggestTitSize() >= 3 && char.nippleLength < .5) {
                outputText("  A tender ache starts at your " + nippleDescription(char, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                char.nippleLength = .5;
            }
        }
    }
}

export function killCocks(char: Character, deadCock: number): void {
    // Count removal for text bits
    let removed: number = 0;
    let temp: number;
    // Holds cock index
    let storedCock: number = 0;
    // Less than 0 = PURGE ALL
    if (deadCock < 0) {
        deadCock = char.cocks.length;
    }
    // Double loop - outermost counts down cocks to remove, innermost counts down
    while (deadCock > 0) {
        // Find shortest cock and prune it
        temp = char.cocks.length;
        while (temp > 0) {
            temp--;
            // If anything is out of bounds set to 0.
            if (storedCock > char.cocks.length - 1) storedCock = 0;
            // If temp index is shorter than stored index, store temp to stored index.
            if (char.cocks[temp].cockLength <= char.cocks[storedCock].cockLength) storedCock = temp;
        }
        // Smallest cock should be selected, now remove it!
        char.cocks.removeCock(storedCock, 1);
        removed++;
        deadCock--;
        if (char.cocks.length == 0) deadCock = 0;
    }
    // Texts
    if (removed == 1) {
        if (char.cocks.length == 0) {
            outputText("<b>Your manhood shrinks into your body, disappearing completely.</b>", false);
            if (char.effects.findByType(StatusAffects.Infested) >= 0) outputText("  Like rats fleeing a sinking ship, a stream of worms squirts free from your withering member, slithering away.", false);
        }
        if (char.cocks.length == 1) {
            outputText("<b>Your smallest penis disappears, shrinking into your body and leaving you with just one " + cockDescript(char, 0) + ".</b>", false);
        }
        if (char.cocks.length > 1) {
            outputText("<b>Your smallest penis disappears forever, leaving you with just your " + multiCockDescriptLight(char) + ".</b>", false);
        }
    }
    if (removed > 1) {
        if (char.cocks.length == 0) {
            outputText("<b>All your male endowments shrink smaller and smaller, disappearing one at a time.</b>", false);
            if (char.effects.findByType(StatusAffects.Infested) >= 0) outputText("  Like rats fleeing a sinking ship, a stream of worms squirts free from your withering member, slithering away.", false);
        }
        if (char.cocks.length == 1) {
            outputText("<b>You feel " + num2Text(removed) + " cocks disappear into your groin, leaving you with just your " + cockDescript(char, 0) + ".", false);
        }
        if (char.cocks.length > 1) {
            outputText("<b>You feel " + num2Text(removed) + " cocks disappear into your groin, leaving you with " + multiCockDescriptLight(char) + ".", false);
        }
    }
    // remove infestation if cockless
    if (char.cocks.length == 0) char.effects.remove(StatusAffects.Infested);
    if (char.cocks.length == 0 && char.balls > 0) {
        outputText("  <b>Your " + sackDescript(char) + " and " + ballsDescriptLight(char) + " shrink and disappear, vanishing into your groin.</b>", false);
        char.balls = 0;
        char.ballSize = 1;
    }
}

// Attempts to put the player in heat (or deeper in heat).
// Returns true if successful, false if not.
// The player cannot go into heat if she is already pregnant or is a he.
//
// First parameter: boolean indicating if function should output standard text.
// Second parameter: intensity, an integer multiplier that can increase the
// duration and intensity. Defaults to 1.
export function goIntoHeat(char: Character, output: boolean, intensity: number = 1): boolean {
    if (char.vaginas.length <= 0 || char.pregnancyIncubation != 0) {
        // No vagina or already pregnant, can't go into heat.
        return false;
    }

    // Already in heat, intensify further.
    if (char.inHeat) {
        if (output) {
            outputText("\n\nYour mind clouds as your " + vaginaDescript(char, 0) + " moistens.  Despite already being in heat, the desire to copulate constantly grows even larger.", false);
        }
        const temp: number = char.effects.findByType(StatusAffects.Heat);
        char.effects[temp].value1 += 5 * intensity;
        char.effects[temp].value2 += 5 * intensity;
        char.effects[temp].value3 += 48 * intensity;
        dynStats("lib", 5 * intensity, "resisted", false, "noBimbo", true);
    }
    // Go into heat.  Heats v1 is bonus fertility, v2 is bonus libido, v3 is hours till it's gone
    else {
        if (output) {
            outputText("\n\nYour mind clouds as your " + vaginaDescript(char, 0) + " moistens.  Your hands begin stroking your body from top to bottom, your sensitive skin burning with desire.  Fantasies about bending over and presenting your needy pussy to a male overwhelm you as <b>you realize you have gone into heat!</b>", false);
        }
        char.effects.create(StatusAffects.Heat, 10 * intensity, 15 * intensity, 48 * intensity, 0);
        dynStats("lib", 15 * intensity, "resisted", false, "noBimbo", true);
    }
    return true;
}

// Attempts to put the player in rut (or deeper in heat).
// Returns true if successful, false if not.
// The player cannot go into heat if he is a she.
//
// First parameter: boolean indicating if function should output standard text.
// Second parameter: intensity, an integer multiplier that can increase the
// duration and intensity. Defaults to 1.
export function goIntoRut(char: Character, output: boolean, intensity: number = 1): boolean {
    if (!hasCock()) {
        // No cocks, can't go into rut.
        return false;
    }

    // Has rut, intensify it!
    if (char.inRut) {
        if (output) {
            outputText("\n\nYour " + cockDescript(char, 0) + " throbs and dribbles as your desire to mate intensifies.  You know that <b>you've sunken deeper into rut</b>, but all that really matters is unloading into a cum-hungry cunt.", false);
        }

        char.effects.addValue(StatusAffects.Rut, 1, 100 * intensity);
        char.effects.addValue(StatusAffects.Rut, 2, 5 * intensity);
        char.effects.addValue(StatusAffects.Rut, 3, 48 * intensity);
        dynStats("lib", 5 * intensity, "resisted", false, "noBimbo", true);
    }
    else {
        if (output) {
            outputText("\n\nYou stand up a bit straighter and look around, sniffing the air and searching for a mate.  Wait, what!?  It's hard to shake the thought from your head - you really could use a nice fertile hole to impregnate.  You slap your forehead and realize <b>you've gone into rut</b>!", false);
        }

        // v1 - bonus cum production
        // v2 - bonus libido
        // v3 - time remaining!
        char.effects.create(StatusAffects.Rut, 150 * intensity, 5 * intensity, 100 * intensity, 0);
        dynStats("lib", 5 * intensity, "resisted", false, "noBimbo", true);
    }

    return true;
}
