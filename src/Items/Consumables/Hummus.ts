export function Hummus(player: Player): void {
    outputText("", true);
    if (game.debug) {
        outputText("You're about to eat the humus when you see it has bugs in it. Not wanting to eat bugged humus or try to debug it you throw it into the portal and find something else to eat.", false);
        player.inv.destroyItems(ConsumableLib.HUMMUS_, 1);
        return;
    }
    outputText("You shovel the stuff into your face, not sure WHY you're eating it, but once you start, you just can't stop.  It tastes incredibly bland, and with a slight hint of cheese.", false);
    player.str = 30;
    player.spe = 30;
    player.tou = 30;
    player.inte = 30;
    player.sens = 20;
    player.lib = 25;
    player.cor = 5;
    player.lust = 10;
    player.hairType = 0;
    if (humanScore(player) > 4) {
        outputText("\n\nYou blink and the world twists around you.  You feel more like yourself than you have in a while, but exactly how isn't immediately apparent.  Maybe you should take a look at yourself?", false);
    }
    else {
        outputText("\n\nYou cry out as the world spins around you.  You're aware of your entire body sliding and slipping, changing and morphing, but in the sea of sensation you have no idea exactly what's changing.  You nearly black out, and then it's over.  Maybe you had best have a look at yourself and see what changed?", false);
    }
    player.armType = ArmType.HUMAN;
    player.eyeType = EyeType.HUMAN;
    player.antennae = AntennaeType.NONE;
    player.faceType = FaceType.HUMAN;
    player.lowerBody = LowerBodyType.HUMAN;
    player.wingType = WingType.NONE;
    player.wingDesc = "non-existant";
    player.tailType = TailType.NONE;
    player.tongueType = TongueType.HUMAN;
    player.tailRecharge = 0;
    player.horns = 0;
    player.hornType = HornType.NONE;
    player.earType = EarType.HUMAN;
    player.skinType = SkinType.PLAIN;
    player.skinDesc = "skin";
    player.skinAdj = "";
    player.armType = ArmType.HUMAN;
    player.tongueType = TongueType.HUMAN;
    player.eyeType = EyeType.HUMAN;
    if (player.fertility > 15)
        player.fertility = 15;
    if (player.cumMultiplier > 50)
        player.cumMultiplier = 50;
    let virgin: boolean = false;
    // Clear cocks
    while (player.cocks.length > 0) {
        player.cocks.removeCock(0, 1);
        trace("1 cock purged.");
    }
    // Reset dongs!
    if (player.gender == 1 || player.gender == 3) {
        player.cocks.createCock();
        player.cocks[0].cockLength = 6;
        player.cocks[0].cockThickness = 1;
        player.ballSize = 2;
        if (player.balls > 2)
            player.balls = 2;
    }
    // Non duders lose any nuts
    else {
        player.balls = 0;
        player.ballSize = 2;
    }
    // Clear vaginas
    while (player.vaginas.length > 0) {
        virgin = player.vaginas[0].virgin;
        player.vaginas.removeVagina(0, 1);
        trace("1 vagina purged.");
    }
    // Reset vaginal virginity to correct state
    if (player.gender >= 2) {
        player.vaginas.createVagina();
        player.vaginas[0].virgin = virgin;
    }
    player.clitLength = .25;
    // Tighten butt!
    player.buttRating = 2;
    player.hipRating = 2;
    if (player.ass.analLooseness > 1)
        player.ass.analLooseness = 1;
    if (player.ass.analWetness > 1)
        player.ass.analWetness = 1;
    // Clear breasts
    player.breastRows = [];
    player.breastRows.createBreastRow();
    player.nippleLength = .25;
    // Girls and herms get bewbs back
    if (player.gender > 2) {
        player.breastRows[0].breastRating = 2;
    }
    else
        player.breastRows[0].breastRating = 0;
    player.gills = false;
    player.effects.remove(StatusAffects.Uniball);
    player.effects.remove(StatusAffects.BlackNipples);
    player.vaginaType(0);
}
