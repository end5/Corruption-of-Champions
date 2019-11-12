
// provides rubiLookups and arianLookups
// note that these are only used in doubleArgLookups, not in Parser.as itself
//
// =!= NOTE: MUST BE IMPORTED BEFORE "./doubleArgLookups.as" =!=
//
// Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.

// include "./npcLookups.as";

// PC ASCII Aspect lookups

export let cockLookups: Record<string, any> = // For subject: "cock"
{
    all(thisPtr: any): any { return multiCockDescriptLight(game.player); },
    each(thisPtr: any): any { return sMultiCockDesc(game.player); },
    one(thisPtr: any): any { return oMultiCockDesc(game.player); },
    largest(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.biggestCockIndex()); },
    biggest(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.biggestCockIndex()); },
    biggest2(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.biggestCockIndex2()); },
    biggest3(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.biggestCockIndex3()); },
    smallest(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.smallestCockIndex()); },
    smallest2(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.smallestCockIndex2()); },
    longest(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.longestCock()); },
    shortest(thisPtr: any): any { return cockDescript(game.player, game.player.cocks.shortestCockIndex()); }
};

export let cockHeadLookups: Record<string, any> = // For subject: "cockHead"
{
    biggest(thisPtr: any): any { return cockHead(game.player, game.player.cocks.biggestCockIndex()); },
    biggest2(thisPtr: any): any { return cockHead(game.player, game.player.cocks.biggestCockIndex2()); },
    biggest3(thisPtr: any): any { return cockHead(game.player, game.player.cocks.biggestCockIndex3()); },
    largest(thisPtr: any): any { return cockHead(game.player, game.player.cocks.biggestCockIndex()); },
    smallest(thisPtr: any): any { return cockHead(game.player, game.player.cocks.smallestCockIndex()); },
    smallest2(thisPtr: any): any { return cockHead(game.player, game.player.cocks.smallestCockIndex2()); },
    longest(thisPtr: any): any { return cockHead(game.player, game.player.cocks.longestCock()); },			// the *head* of a cock has a length? Wut?
    shortest(thisPtr: any): any { return cockHead(game.player, game.player.cocks.shortestCockIndex()); }
};

// These tags take a two-word tag with a **numberic** attribute for lookup.
// [object NUMERIC-attribute]
// if "NUMERIC-attribute" can be cast to a Number, the parser looks for "object" in twoWordNumericTagsLookup.
// If it finds twoWordNumericTagsLookup["object"], it calls the anonymous function stored with said key "object"
// like so: twoWordNumericTagsLookup["object"](Number("NUMERIC-attribute"))
//
// if attribute cannot be case to a number, the parser looks for "object" in twoWordTagsLookup.
export let twoWordNumericTagsLookup: Record<string, any> =
{
    cockfit(thisPtr: any, aspect: any): any {
            if (game.player.cocks.length === 0) return "<b>(Attempt to parse cock when none present.)</b>";
            else {
                if (game.player.cocks.cockThatFits(aspect) >= 0) return cockDescript(game.player, game.player.cocks.cockThatFits(aspect));
                else return cockDescript(game.player, game.player.cocks.smallestCockIndex());
            }
        },
    cockfit2(thisPtr: any, aspect: any): any {
            if (game.player.cocks.length === 0) return "<b>(Attempt to parse cock when none present.)</b>";
            else {
                if (game.player.cocks.cockThatFits2(aspect) >= 0) return cockDescript(game.player, game.player.cocks.cockThatFits2(aspect));
                else return cockDescript(game.player, game.player.cocks.smallestCockIndex());
            }
        },
    cockheadfit(thisPtr: any, aspect: any): any {
            if (game.player.cocks.length === 0) {
                return "<b>(Attempt to parse cockhead when none present.)</b>";
            }
            else {
                if (game.player.cocks.cockThatFits(aspect) >= 0) return cockHead(game.player, game.player.cocks.cockThatFits(aspect));
                else return cockHead(game.player, game.player.cocks.smallestCockIndex());
            }
        },
    cockheadfit2(thisPtr: any, aspect: any): any {
            if (game.player.cocks.length === 0) return "<b>(Attempt to parse cockhead when none present.)</b>";
            else {
                if (game.player.cocks.cockThatFits2(aspect) >= 0) return cockHead(game.player, game.player.cocks.cockThatFits2(aspect));
                else return cockHead(game.player, game.player.cocks.smallestCockIndex());
            }
        },
    cock(thisPtr: any, aspect: any): any {
            if (game.player.cocks.length === 0) return "<b>(Attempt to parse cock when none present.)</b>";
            else {
                if (aspect - 1 >= 0 && aspect - 1 < game.player.cocks.length) return cockDescript(game.player, aspect - 1);
                else return "<b>(Attempt To Parse CockDescript for Invalid Cock)</b>";
            }
        },
    cockhead(thisPtr: any, aspect: any): any {
            if (game.player.cocks.length === 0) return "<b>(Attempt to parse cockHead when none present.)</b>";
            else {
                const intAspect: number = int(aspect - 1);
                if (intAspect >= 0 && intAspect < game.player.cocks.length) return cockHead(game.player, intAspect);
                else return "<b>(Attempt To Parse CockHeadDescript for Invalid Cock)</b>";
            }
        }

};

// These tags take an ascii attribute for lookup.
// [object attribute]
// if attribute cannot be cast to a number, the parser looks for "object" in twoWordTagsLookup,
// and then uses the corresponding object to determine the value of "attribute", by looking for
// "attribute" twoWordTagsLookup["object"]["attribute"]
export let twoWordTagsLookup: Record<string, any> =
{
    // NPCs:
    rubi: rubiLookups,
    arian: arianLookups,

    // PC Attributes:

    cock: cockLookups,
    cockhead: cockHeadLookups
};
