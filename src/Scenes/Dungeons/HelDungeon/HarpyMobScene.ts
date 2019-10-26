// ATTACK ONE: Claw Flurry
export function harpyHordeClawFlurry(): void {
    outputText("The harpies lunge at you, a veritable storm of talons and claws raining down around you.  You stumble back, trying desperately to deflect some of the attacks, but there are simply too many to block them all!  Only a single harpy in the brood seems to be holding back...\n");
    // (Effect: Multiple light attacks)
    monster.effects.create(StatusAffects.Attacks, 3 + rand(3), 0, 0, 0);
    monster.eAttack();
    combatRoundOver();
}

// ATTACK TWO: Gangbang
export function harpyHordeGangBangAttack(): void {
    outputText("Suddenly, a pair of harpies grabs you from behind, holding your arms to keep you from fighting back! Taking advantage of your open state, the other harpies leap at you, hammering your chest with punches and kicks - only one hangs back from the gang assault.\n\n");
    player.effects.create(StatusAffects.HarpyBind, 0, 0, 0, 0);
    // (PC must struggle:
    harpyHordeGangBangStruggle(false);
}

export function harpyHordeGangBangStruggle(clearDisp: boolean = true): void {
    if (clearDisp) clearOutput();
    // Failure:
    // If fail:
    if (rand(10) > 0 && player.str / 5 + rand(20) < 23) {
        let damage: number = 80 + rand(40);
        damage = takeDamage(damage);
        outputText("You struggle in the harpies' grasp, but can't quite get free.  The brood continues to hammer away at your defenseless self. (" + damage + ")");
    }
    // Success:
    else {
        player.effects.remove(StatusAffects.HarpyBind);
        outputText("With a mighty roar, you throw off the harpies grabbing you and return to the fight!");
    }
    combatRoundOver();
}

// ATTACK THREE: LUSTY HARPIES!
export function harpyHordeLustAttack(): void {
    outputText("The harpies back off for a moment, giving you room to breathe - only to begin a mini strip-tease, pulling off bits of clothing to reveal their massive asses and hips or bearing their small, perky tits.  They caress themselves and each other, moaning lewdly.  Distracted by the burlesque, you don't notice a lipstick-wearing harpy approaching you until it's too late!  She plants a kiss right on your lips, ");
    if (player.perks.findByType(PerkLib.LuststickAdapted) >= 0) outputText("doing relatively little thanks to your adaptation");
    else {
        outputText("sending shivers of lust up your spine");
        dynStats("lus", 5);
        if (player.cocks.length > 0) dynStats("lus", 15);
    }
    outputText(".");
    dynStats("lus", 10);
    combatRoundOver();
}

export function harpyHordeAI(): void {
    if (rand(3) == 0) harpyHordeLustAttack();
    else if (rand(3) > 0) harpyHordeClawFlurry();
    else harpyHordeGangBangAttack();
}
// Harpy Horde -- PC is Defeated (MAYBE BAD END!!!)
export function pcLosesToHarpyHorde(): void {
    outputText("\n\nUnable to withstand the ");
    if (player.HP < 1) outputText("brutal assault");
    else outputText("raw sexuality");
    outputText(", you collapse, utterly at the harpies' mercy.  The group looms over you, lusty, evil grins all around, but to your surprise, one of them shouts a harsh command, making the swarm of feathery bitches back off.  A particularly slight harpy with a shock of bright-orange hair waves the brood off, astonishingly commanding for the runt of the litter.  The other harpies hiss and growl at her, but still she speaks, \"<i>Hold it!  We can't have the intruder yet.  Mother will want to talk to " + mf(player, "him", "her") + " first.</i>\"");
    outputText("\n\nThe brood grumbles, but you are hauled off your feet and dragged upstairs...");
    // (Go to \"<i>Harpy Breeding Slut</i>\" Bad End)
    menu();
    addButton(0, "Next", harpyQueenBeatsUpPCBadEnd, true);
}

// Harpy Horde -- PC is Victorious
export function pcDefeatsHarpyHorde(): void {
    clearOutput();
    flags[kFLAGS.HEL_HARPIES_DEFEATED] = 1;
    outputText("The harpies collapse in a pile in the center of the room, all utterly defeated... except one.  The lone harpy that did not attack you throughout the fight, a rather slight girl with a shock of bright orange hair, still stands, gaping at the destruction you've wrought.  Eventually, her gaze shifts up to you.");

    outputText("\n\n\"<i>Holy shit, " + mf(player, "dude", "lady") + ".  You're a goddamn one-" + race(player) + "-army, aren't you? You... you must be [name], right? Hel... er, Miss Helia told me about you.  I'm, uh... I'm Kiri.  Sorry about the other girls - I'd just spiked their drinks, but they didn't have time to finish them.  You're a little earlier than I was expecting.  Sorry,</i>\" she whispers nervously, rubbing the back of her neck.");

    outputText("\n\nYou ask her who she is exactly and how she knows Hel.");

    outputText("\n\n\"<i>Uh, well, I'm the one who told her about this place. You could say I'm her informant, I guess,</i>\" she shrugs and slips her hands behind her inhumanly wide hips.  Cocking an eyebrow, you notice the girl is actually quite pretty - her wings and hair are an orange as bright as the sun, and she has deliciously curvaceous thighs and hips, not to mention cute perky breasts.  Noticing your lusty glances, she makes a little giggle and bites her lower lip.");

    outputText("\n\n\"<i>Anyway, Miss Helia asked me to help you any way I can, so... I guess, just ask me if you need anything.</i>\"");
    cleanupAfterCombat();
}
