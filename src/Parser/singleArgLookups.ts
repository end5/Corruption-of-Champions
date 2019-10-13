
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
    ass(thisPtr: any): any { return buttDescription(player); },
    asshole(thisPtr: any): any { return assholeDescript(player); },
    balls(thisPtr: any): any { return ballsDescriptLight(player); },
    boyfriend(thisPtr: any): any { return mf(game.player, "boyfriend", "girlfriend"); },
    butt(thisPtr: any): any { return buttDescription(player); },
    butthole(thisPtr: any): any { return assholeDescript(player); },
    chest(thisPtr: any): any { return chestDesc(game.player); },
    clit(thisPtr: any): any { return clitDescription(player); },
    cock(thisPtr: any): any { return cockDescript(game.player, 0); },
    cockhead(thisPtr: any): any { return cockHead(game.player, 0); },
    cocks(thisPtr: any): any { return multiCockDescriptLight(game.player); },
    cunt(thisPtr: any): any { return vaginaDescript(player); },
    eachcock(thisPtr: any): any { return sMultiCockDesc(game.player); },
    evade(thisPtr: any): any { return "[Evade]"; },
    face(thisPtr: any): any { return face(game.player); },
    feet(thisPtr: any): any { return feet(game.player); },
    foot(thisPtr: any): any { return foot(game.player); },
    fullchest(thisPtr: any): any { return allChestDesc(game.player); },
    hair(thisPtr: any): any { return hairDescription(player); },
    hairorfur(thisPtr: any): any { return hairOrFur(player); },
    he(thisPtr: any): any { return mf(game.player, "he", "she"); },
    he2(thisPtr: any): any { return game.player2.mf("he", "she"); },
    him(thisPtr: any): any { return mf(game.player, "him", "her"); },
    him2(thisPtr: any): any { return game.player2.mf("him", "her"); },
    himher(thisPtr: any): any { return mf(game.player, "him", "her"); },
    himself(thisPtr: any): any { return mf(game.player, "himself", "herself"); },
    herself(thisPtr: any): any { return mf(game.player, "himself", "herself"); },
    hips(thisPtr: any): any { return hipDescription(player); },
    his(thisPtr: any): any { return mf(game.player, "his", "her"); },
    hisher(thisPtr: any): any { return mf(game.player, "his", "her"); },
    his2(thisPtr: any): any { return game.player2.mf("his", "her"); },
    leg(thisPtr: any): any { return leg(game.player); },
    legs(thisPtr: any): any { return legs(game.player); },
    man(thisPtr: any): any { return mf(game.player, "man", "woman"); },
    men(thisPtr: any): any { return mf(game.player, "men", "women"); },
    master(thisPtr: any): any { return mf(game.player, "master", "mistress"); },
    misdirection(thisPtr: any): any { return "[Misdirection]"; },
    multicock(thisPtr: any): any { return multiCockDescriptLight(game.player); },
    multicockdescriptlight(thisPtr: any): any { return multiCockDescriptLight(game.player); },
    name(thisPtr: any): any { return game.player.short; },
    nipple(thisPtr: any): any { return nippleDescription(player, 0); },
    nipples(thisPtr: any): any { return nippleDescription(player, 0) + "s"; },
    onecock(thisPtr: any): any { return oMultiCockDesc(game.player); },
    pg(thisPtr: any): any { return "\n\n"; },
    pussy(thisPtr: any): any { return vaginaDescript(player); },
    race(thisPtr: any): any { return race(game.player); },
    sack(thisPtr: any): any { return sackDescript(player); },
    sheath(thisPtr: any): any { return sheathDescription(game.player); },
    skin(thisPtr: any): any { return skin(game.player); },
    skinfurscales(thisPtr: any): any { return skinFurScales(game.player); },
    teasetext(thisPtr: any): any { return teaseText(); },
    tongue(thisPtr: any): any { return tongueDescription(player); },
    vag(thisPtr: any): any { return vaginaDescript(player); },
    vagina(thisPtr: any): any { return vaginaDescript(player); },
    vagorass(thisPtr: any): any { return (game.player.hasVagina() ? vaginaDescript(player) : assholeDescript(player)); },
    weapon(thisPtr: any): any { return game.player.weaponName; },
    weaponname(thisPtr: any): any { return game.player.weaponName; },

    latexyname(thisPtr: any): any { return game.flags[kFLAGS.GOO_NAME]; },
    bathgirlname(thisPtr: any): any { return game.flags[kFLAGS.MILK_NAME]; },
    cockplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "cock" : "cocks"; },
    dickplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "dick" : "dicks"; },
    headplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "head" : "heads"; },
    prickplural(thisPtr: any): any { return (game.player.cocks.length == 1) ? "prick" : "pricks"; },
    boy(thisPtr: any): any { return mf(game.player, "boy", "girl"); },
    guy(thisPtr: any): any { return mf(game.player, "guy", "girl"); },
    wings(thisPtr: any): any { return wingsDescript(player); },
    tail(thisPtr: any): any { return tailDescript(player); },
    onetail(thisPtr: any): any { return oneTailDescript(player); }

};
