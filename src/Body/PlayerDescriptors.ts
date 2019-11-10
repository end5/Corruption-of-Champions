import { Character } from "../Character/Character";
import { num2Text } from "../Display/Utils";
import { outputText } from "../Game/engineCore";
import { kFLAGS } from "../Game/Flags";
import { flags } from "../Game/Game";
import { cockDescript, multiCockDescript, multiCockDescriptLight } from "./Appearance";
import { BreastCup } from "./appearanceDefs";

// Body Type
export function bodyType(char: Character): string {
    let desc: string = "";
    // OLD STUFF
    // SUPAH THIN
    if (char.thickness < 10) {
        // SUPAH BUFF
        if (char.tone > 90)
            desc += "a lithe body covered in highly visible muscles";
        else if (char.tone > 75)
            desc += "an incredibly thin, well-muscled frame";
        else if (char.tone > 50)
            desc += "a very thin body that has a good bit of muscle definition";
        else if (char.tone > 25)
            desc += "a lithe body and only a little bit of muscle definition";
        else
            desc += "a waif-thin body, and soft, forgiving flesh";
    }
    // Pretty thin
    else if (char.thickness < 25) {
        if (char.tone > 90)
            desc += "a thin body and incredible muscle definition";
        else if (char.tone > 75)
            desc += "a narrow frame that shows off your muscles";
        else if (char.tone > 50)
            desc += "a somewhat lithe body and a fair amount of definition";
        else if (char.tone > 25)
            desc += "a narrow, soft body that still manages to show off a few muscles";
        else
            desc += "a thin, soft body";
    }
    // Somewhat thin
    else if (char.thickness < 40) {
        if (char.tone > 90)
            desc += "a fit, somewhat thin body and rippling muscles all over";
        else if (char.tone > 75)
            desc += "a thinner-than-average frame and great muscle definition";
        else if (char.tone > 50)
            desc += "a somewhat narrow body and a decent amount of visible muscle";
        else if (char.tone > 25)
            desc += "a moderately thin body, soft curves, and only a little bit of muscle";
        else
            desc += "a fairly thin form and soft, cuddle-able flesh";
    }
    // average
    else if (char.thickness < 60) {
        if (char.tone > 90)
            desc += "average thickness and a bevy of perfectly defined muscles";
        else if (char.tone > 75)
            desc += "an average-sized frame and great musculature";
        else if (char.tone > 50)
            desc += "a normal waistline and decently visible muscles";
        else if (char.tone > 25)
            desc += "an average body and soft, unremarkable flesh";
        else
            desc += "an average frame and soft, untoned flesh with a tendency for jiggle";
    }
    else if (char.thickness < 75) {
        if (char.tone > 90)
            desc += "a somewhat thick body that's covered in slabs of muscle";
        else if (char.tone > 75)
            desc += "a body that's a little bit wide and has some highly-visible muscles";
        else if (char.tone > 50)
            desc += "a solid build that displays a decent amount of muscle";
        else if (char.tone > 25)
            desc += "a slightly wide frame that displays your curves and has hints of muscle underneath";
        else
            desc += "a soft, plush body with plenty of jiggle";
    }
    else if (char.thickness < 90) {
        if (char.tone > 90)
            desc += "a thickset frame that gives you the appearance of a wall of muscle";
        else if (char.tone > 75)
            desc += "a burly form and plenty of muscle definition";
        else if (char.tone > 50)
            desc += "a solid, thick frame and a decent amount of muscles";
        else if (char.tone > 25)
            desc += "a wide-set body, some soft, forgiving flesh, and a hint of muscle underneath it";
        else {
            desc += "a wide, cushiony body";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 3 || char.hipRating > 7 || char.buttRating > 7)
                desc += " and plenty of jiggle on your curves";
        }
    }
    // Chunky monkey
    else {
        if (char.tone > 90)
            desc += "an extremely thickset frame and so much muscle others would find you harder to move than a huge boulder";
        else if (char.tone > 75)
            desc += "a very wide body and enough muscle to make you look like a tank";
        else if (char.tone > 50)
            desc += "an extremely substantial frame packing a decent amount of muscle";
        else if (char.tone > 25) {
            desc += "a very wide body";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 4 || char.hipRating > 10 || char.buttRating > 10)
                desc += ", lots of curvy jiggles,";
            desc += " and hints of muscle underneath";
        }
        else {
            desc += "a thick";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 4 || char.hipRating > 10 || char.buttRating > 10)
                desc += ", voluptuous";
            desc += " body and plush, ";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 4 || char.hipRating > 10 || char.buttRating > 10)
                desc += " jiggly curves";
            else
                desc += " soft flesh";
        }
    }
    return desc;
}

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
