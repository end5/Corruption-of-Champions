import { Character } from "../../Character/Character";
import { num2Text } from "../../Display/Utils";
import { outputText } from "../../Game/engineCore";
import { kFLAGS } from "../../Game/Flags";
import { flags } from "../../Game/Game";
import { cockDescript, multiCockDescript, multiCockDescriptLight } from "./Appearance";
import { BreastCup } from "../../Body/Descriptors/Types";

export function lengthChange(char: Character, temp2: number, ncocks: number): void {

    if (temp2 < 0 && flags[kFLAGS.HYPER_HAPPY])  // Early return for hyper-happy cheat if the call was *supposed* to shrink a cock.
    {
        return;
    }
    // DIsplay the degree of length change.
    if (temp2 <= 1 && temp2 > 0) {
        if (char.cocks.length == 1) outputText("Your " + cockDescript(char, 0) + " has grown slightly longer.", false);
        if (char.cocks.length > 1) {
            if (ncocks == 1) outputText("One of your " + multiCockDescriptLight(char) + " grows slightly longer.", false);
            if (ncocks > 1 && ncocks < char.cocks.length) outputText("Some of your " + multiCockDescriptLight(char) + " grow slightly longer.", false);
            if (ncocks == char.cocks.length) outputText("Your " + multiCockDescriptLight(char) + " seem to fill up... growing a little bit larger.", false);
        }
    }
    if (temp2 > 1 && temp2 < 3) {
        if (char.cocks.length == 1) outputText("A very pleasurable feeling spreads from your groin as your " + cockDescript(char, 0) + " grows permanently longer - at least an inch - and leaks pre-cum from the pleasure of the change.", false);
        if (char.cocks.length > 1) {
            if (ncocks == char.cocks.length) outputText("A very pleasurable feeling spreads from your groin as your " + multiCockDescriptLight(char) + " grow permanently longer - at least an inch - and leak plenty of pre-cum from the pleasure of the change.", false);
            if (ncocks == 1) outputText("A very pleasurable feeling spreads from your groin as one of your " + multiCockDescriptLight(char) + " grows permanently longer, by at least an inch, and leaks plenty of pre-cum from the pleasure of the change.", false);
            if (ncocks > 1 && ncocks < char.cocks.length) outputText("A very pleasurable feeling spreads from your groin as " + num2Text(ncocks) + " of your " + multiCockDescriptLight(char) + " grow permanently longer, by at least an inch, and leak plenty of pre-cum from the pleasure of the change.", false);
        }
    }
    if (temp2 >= 3) {
        if (char.cocks.length == 1) outputText("Your " + cockDescript(char, 0) + " feels incredibly tight as a few more inches of length seem to pour out from your crotch.", false);
        if (char.cocks.length > 1) {
            if (ncocks == 1) outputText("Your " + multiCockDescriptLight(char) + " feel incredibly tight as one of their number begins to grow inch after inch of length.", false);
            if (ncocks > 1 && ncocks < char.cocks.length) outputText("Your " + multiCockDescriptLight(char) + " feel incredibly number as " + num2Text(ncocks) + " of them begin to grow inch after inch of added length.", false);
            if (ncocks == char.cocks.length) outputText("Your " + multiCockDescriptLight(char) + " feel incredibly tight as inch after inch of length pour out from your groin.", false);
        }
    }
    // Display LengthChange
    if (temp2 > 0) {
        if (char.cocks[0].cockLength >= 8 && char.cocks[0].cockLength - temp2 < 8) {
            if (char.cocks.length == 1) outputText("  <b>Most men would be overly proud to have a tool as long as yours.</b>", false);
            if (char.cocks.length > 1) outputText("  <b>Most men would be overly proud to have one cock as long as yours, let alone " + multiCockDescript(char) + ".</b>", false);
        }
        if (char.cocks[0].cockLength >= 12 && char.cocks[0].cockLength - temp2 < 12) {
            if (char.cocks.length == 1) outputText("  <b>Your " + cockDescript(char, 0) + " is so long it nearly swings to your knee at its full length.</b>", false);
            if (char.cocks.length > 1) outputText("  <b>Your " + multiCockDescriptLight(char) + " are so long they nearly reach your knees when at full length.</b>", false);
        }
        if (char.cocks[0].cockLength >= 16 && char.cocks[0].cockLength - temp2 < 16) {
            if (char.cocks.length == 1) outputText("  <b>Your " + cockDescript(char, 0) + " would look more at home on a large horse than you.</b>", false);
            if (char.cocks.length > 1) outputText("  <b>Your " + multiCockDescriptLight(char) + " would look more at home on a large horse than on your body.</b>", false);
            if (char.breastRows.biggestTitSize() >= BreastCup.C) {
                if (char.cocks.length == 1) outputText("  You could easily stuff your " + cockDescript(char, 0) + " between your breasts and give yourself the titty-fuck of a lifetime.", false);
                if (char.cocks.length > 1) outputText("  They reach so far up your chest it would be easy to stuff a few cocks between your breasts and give yourself the titty-fuck of a lifetime.", false);
            }
            else {
                if (char.cocks.length == 1) outputText("  Your " + cockDescript(char, 0) + " is so long it easily reaches your chest.  The possibility of autofellatio is now a foregone conclusion.", false);
                if (char.cocks.length > 1) outputText("  Your " + multiCockDescriptLight(char) + " are so long they easily reach your chest.  Autofellatio would be about as hard as looking down.", false);
            }
        }
        if (char.cocks[0].cockLength >= 20 && char.cocks[0].cockLength - temp2 < 20) {
            if (char.cocks.length == 1) outputText("  <b>As if the pulsing heat of your " + cockDescript(char, 0) + " wasn't enough, the tip of your " + cockDescript(char, 0) + " keeps poking its way into your view every time you get hard.</b>", false);
            if (char.cocks.length > 1) outputText("  <b>As if the pulsing heat of your " + multiCockDescriptLight(char) + " wasn't bad enough, every time you get hard, the tips of your " + multiCockDescriptLight(char) + " wave before you, obscuring the lower portions of your vision.</b>", false);
            if (char.cor > 40 && char.cor <= 60) {
                if (char.cocks.length > 1) outputText("  You wonder if there is a demon or beast out there that could take the full length of one of your " + multiCockDescriptLight(char) + "?", false);
                if (char.cocks.length == 1) outputText("  You wonder if there is a demon or beast out there that could handle your full length.", false);
            }
            if (char.cor > 60 && char.cor <= 80) {
                if (char.cocks.length > 1) outputText("  You daydream about being attacked by a massive tentacle beast, its tentacles engulfing your " + multiCockDescriptLight(char) + " to their hilts, milking you dry.\n\nYou smile at the pleasant thought.", false);
                if (char.cocks.length == 1) outputText("  You daydream about being attacked by a massive tentacle beast, its tentacles engulfing your " + cockDescript(char, 0) + " to the hilt, milking it of all your cum.\n\nYou smile at the pleasant thought.", false);
            }
            if (char.cor > 80) {
                if (char.cocks.length > 1) outputText("  You find yourself fantasizing about impaling nubile young champions on your " + multiCockDescriptLight(char) + " in a year's time.", false);
            }
        }
    }
    // Display the degree of length loss.
    if (temp2 < 0 && temp2 >= -1) {
        if (char.cocks.length == 1) outputText("Your " + multiCockDescriptLight(char) + " has shrunk to a slightly shorter length.", false);
        if (char.cocks.length > 1) {
            if (ncocks == char.cocks.length) outputText("Your " + multiCockDescriptLight(char) + " have shrunk to a slightly shorter length.", false);
            if (ncocks > 1 && ncocks < char.cocks.length) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(char) + " have shrunk to a slightly shorter length.", false);
            if (ncocks == 1) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(char) + " has shrunk to a slightly shorter length.", false);
        }
    }
    if (temp2 < -1 && temp2 > -3) {
        if (char.cocks.length == 1) outputText("Your " + multiCockDescriptLight(char) + " shrinks smaller, flesh vanishing into your groin.", false);
        if (char.cocks.length > 1) {
            if (ncocks == char.cocks.length) outputText("Your " + multiCockDescriptLight(char) + " shrink smaller, the flesh vanishing into your groin.", false);
            if (ncocks == 1) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(char) + " shrink smaller, the flesh vanishing into your groin.", false);
            if (ncocks > 1 && ncocks < char.cocks.length) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(char) + " shrink smaller, the flesh vanishing into your groin.", false);
        }
    }
    if (temp2 <= -3) {
        if (char.cocks.length == 1) outputText("A large portion of your " + multiCockDescriptLight(char) + "'s length shrinks and vanishes.", false);
        if (char.cocks.length > 1) {
            if (ncocks == char.cocks.length) outputText("A large portion of your " + multiCockDescriptLight(char) + " receeds towards your groin, receding rapidly in length.", false);
            if (ncocks == 1) outputText("A single member of your " + multiCockDescriptLight(char) + " vanishes into your groin, receding rapidly in length.", false);
            if (ncocks > 1 && char.cocks.length > ncocks) outputText("Your " + multiCockDescriptLight(char) + " tingles as " + num2Text(ncocks) + " of your members vanish into your groin, receding rapidly in length.", false);
        }
    }
}
