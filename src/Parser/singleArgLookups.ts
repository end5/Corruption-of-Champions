
// Lookup dictionary for converting any single argument brackets into it's corresponding string
// basically [armor] results in the "[armor]" segment of the string being replaced with the
// results of the corresponding anonymous function, in this case: function():* {return player.armorName;}
// tags not present in the singleArgConverters object return an error message.
//
// Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.

export let singleArgConverters: Record<string, any> =
{
    // all the errors related to trying to parse stuff if not present are
    // already handled in the various *Descript() functions.
    // no need to duplicate them.

    // Note: all key strings MUST be ENTIRELY lowercase.

    agility(thisPtr: any): any { return "[Agility]"; },
    armor(thisPtr: any): any { return game.player.armorName; },
    armorname(thisPtr: any): any { return game.player.armorName; },
    ass(thisPtr: any): any { return buttDescript(); },
    asshole(thisPtr: any): any { return assholeDescript(); },
    balls(thisPtr: any): any { return ballsDescriptLight(); },
    boyfriend(thisPtr: any): any { return game.player.mf("boyfriend", "girlfriend"); },
    butt(thisPtr: any): any { return buttDescript(); },
    butthole(thisPtr: any): any { return assholeDescript(); },
    chest(thisPtr: any): any { return game.player.chestDesc(); },
    clit(thisPtr: any): any { return clitDescript(); },
    cock(thisPtr: any): any { return game.player.cockDescript(0); },
    cockhead(thisPtr: any): any { return game.player.cockHead(0); },
    cocks(thisPtr: any): any { return game.player.multiCockDescriptLight(); },
    cunt(thisPtr: any): any { return vaginaDescript(); },
    eachcock(thisPtr: any): any { return game.player.sMultiCockDesc(); },
    evade(thisPtr: any): any { return "[Evade]"; },
    face(thisPtr: any): any { return face(game.player); },
    feet(thisPtr: any): any { return game.player.feet(); },
    foot(thisPtr: any): any { return game.player.foot(); },
    fullchest(thisPtr: any): any { return game.player.allChestDesc(); },
    hair(thisPtr: any): any { return hairDescript(); },
    hairorfur(thisPtr: any): any { return hairOrFur(); },
    he(thisPtr: any): any { return game.player.mf("he", "she"); },
    he2(thisPtr: any): any { return game.player2.mf("he", "she"); },
    him(thisPtr: any): any { return game.player.mf("him", "her"); },
    him2(thisPtr: any): any { return game.player2.mf("him", "her"); },
    himher(thisPtr: any): any { return game.player.mf("him", "her"); },
    himself(thisPtr: any): any { return game.player.mf("himself", "herself"); },
    herself(thisPtr: any): any { return game.player.mf("himself", "herself"); },
    hips(thisPtr: any): any { return hipDescript(); },
    his(thisPtr: any): any { return game.player.mf("his", "her"); },
    hisher(thisPtr: any): any { return game.player.mf("his", "her"); },
    his2(thisPtr: any): any { return game.player2.mf("his", "her"); },
    leg(thisPtr: any): any { return game.player.leg(); },
    legs(thisPtr: any): any { return game.player.legs(); },
    man(thisPtr: any): any { return game.player.mf("man", "woman"); },
    men(thisPtr: any): any { return game.player.mf("men", "women"); },
    master(thisPtr: any): any { return game.player.mf("master", "mistress"); },
    misdirection(thisPtr: any): any { return "[Misdirection]"; },
    multicock(thisPtr: any): any { return game.player.multiCockDescriptLight(); },
    multicockdescriptlight(thisPtr: any): any { return game.player.multiCockDescriptLight(); },
    name(thisPtr: any): any { return game.player.short; },
    nipple(thisPtr: any): any { return nippleDescript(0); },
    nipples(thisPtr: any): any { return nippleDescript(0) + "s"; },
    onecock(thisPtr: any): any { return game.player.oMultiCockDesc(); },
    pg(thisPtr: any): any { return "\n\n"; },
    pussy(thisPtr: any): any { return vaginaDescript(); },
    race(thisPtr: any): any { return game.player.race(); },
    sack(thisPtr: any): any { return sackDescript(player); },
    sheath(thisPtr: any): any { return game.player.sheathDescription(); },
    skin(thisPtr: any): any { return skin(game.player); },
    skinfurscales(thisPtr: any): any { return game.player.skinFurScales(); },
    teasetext(thisPtr: any): any { return teaseText(); },
    tongue(thisPtr: any): any { return tongueDescript(); },
    vag(thisPtr: any): any { return vaginaDescript(); },
    vagina(thisPtr: any): any { return vaginaDescript(); },
    vagorass(thisPtr: any): any { return (game.player.hasVagina() ? vaginaDescript() : assholeDescript()); },
    weapon(thisPtr: any): any { return game.player.weaponName; },
    weaponname(thisPtr: any): any { return game.player.weaponName; },

    latexyname(thisPtr: any): any { return game.flags[kFLAGS.GOO_NAME]; },
    bathgirlname(thisPtr: any): any { return game.flags[kFLAGS.MILK_NAME]; },
    cockplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "cock" : "cocks"; },
    dickplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "dick" : "dicks"; },
    headplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "head" : "heads"; },
    prickplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "prick" : "pricks"; },
    boy(thisPtr: any): any { return game.player.mf("boy", "girl"); },
    guy(thisPtr: any): any { return game.player.mf("guy", "girl"); },
    wings(thisPtr: any): any { return wingsDescript(); },
    tail(thisPtr: any): any { return tailDescript(); },
    onetail(thisPtr: any): any { return oneTailDescript(); }

};
