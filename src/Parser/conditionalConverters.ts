// Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.

// Possible text arguments in the conditional of a if statement
// First, there is an attempt to cast the argument to a Number. If that fails,
// a dictionary lookup is performed to see if the argument is in the conditionalOptions[]
// object. If that fails, we just fall back to returning 0
export let conditionalOptions: Record<string, any> =
{
    strength(thisPtr: any): any { return game.player.str; },
    toughness(thisPtr: any): any { return game.player.tou; },
    speed(thisPtr: any): any { return game.player.spe; },
    intelligence(thisPtr: any): any { return game.player.inte; },
    libido(thisPtr: any): any { return game.player.lib; },
    sensitivity(thisPtr: any): any { return game.player.sens; },
    corruption(thisPtr: any): any { return game.player.cor; },
    fatigue(thisPtr: any): any { return game.player.fatigue; },
    hp(thisPtr: any): any { return game.player.HP; },
    hour(thisPtr: any): any { return game.time.hours; },
    days(thisPtr: any): any { return game.time.days; },
    tallness(thisPtr: any): any { return game.player.tallness; },
    hairlength(thisPtr: any): any { return game.player.hairLength; },
    femininity(thisPtr: any): any { return game.player.femininity; },
    masculinity(thisPtr: any): any { return 100 - game.player.femininity; },
    cocks(thisPtr: any): any { return game.player.cockTotal(); },
    breastrows(thisPtr: any): any { return game.player.bRows(); },
    biggesttitsize(thisPtr: any): any { return game.player.biggestTitSize(); },
    vagcapacity(thisPtr: any): any { return game.player.vaginalCapacity(); },
    analcapacity(thisPtr: any): any { return game.player.analCapacity(); },
    balls(thisPtr: any): any { return game.player.balls; },
    cumquantity(thisPtr: any): any { return game.player.cumQ(); },
    biggesttitsize(thisPtr: any): any { return game.player.biggestTitSize(); },
    milkquantity(thisPtr: any): any { return game.player.lactationQ(); },
    hasvagina(thisPtr: any): any { return game.player.hasVagina(); },
    istaur(thisPtr: any): any { return game.player.isTaur(); },
    isnaga(thisPtr: any): any { return game.player.isNaga(); },
    isgoo(thisPtr: any): any { return game.player.isGoo(); },
    isbiped(thisPtr: any): any { return game.player.isBiped(); },
    hasbreasts(thisPtr: any): any { return (game.player.biggestTitSize() >= 1); },
    hasballs(thisPtr: any): any { return (game.player.balls > 0); },
    hascock(thisPtr: any): any { return game.player.hasCock(); },
    isherm(thisPtr: any): any { return (game.player.gender == 3); },
    cumnormal(thisPtr: any): any { return (game.player.cumQ() <= 150); },
    cummedium(thisPtr: any): any { return (game.player.cumQ() > 150 && game.player.cumQ() <= 350); },
    cumhigh(thisPtr: any): any { return (game.player.cumQ() > 350 && game.player.cumQ() <= 1000); },
    cumveryhigh(thisPtr: any): any { return (game.player.cumQ() > 1000 && game.player.cumQ() <= 2500); },
    cumextreme(thisPtr: any): any { return (game.player.cumQ() > 2500); },
    issquirter(thisPtr: any): any { return (game.player.wetness() >= 4); },
    ispregnant(thisPtr: any): any { return (game.player.pregnancyIncubation > 0); },
    isbuttpregnant(thisPtr: any): any { return (game.player.buttPregnancyIncubation > 0); },
    hasnipplecunts(thisPtr: any): any { return game.player.hasFuckableNipples(); },
    canfly(thisPtr: any): any { return game.player.canFly(); },
    islactating(thisPtr: any): any { return (game.player.lactationQ() > 0); },
    true(thisPtr: any): any { return true; },
    false(thisPtr: any): any { return false; }
};
