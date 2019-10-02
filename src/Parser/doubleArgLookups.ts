
		// provides rubiLookups and arianLookups
		// note that these are only used in doubleArgLookups, not in Parser.as itself
		//
		// =!= NOTE: MUST BE IMPORTED BEFORE "./doubleArgLookups.as" =!=
		// 
		//Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.
		 
		// include "./npcLookups.as";


		// PC ASCII Aspect lookups

		export var cockLookups:Record<string, any> = // For subject: "cock"
		{
			"all"		: function(thisPtr:any):any{ return game.player.multiCockDescriptLight(); },
			"each"		: function(thisPtr:any):any{ return game.player.sMultiCockDesc(); },
			"one"		: function(thisPtr:any):any{ return game.player.oMultiCockDesc(); },
			"largest"	: function(thisPtr:any):any{ return game.player.cockDescript(game.player.biggestCockIndex()); },
			"biggest"	: function(thisPtr:any):any{ return game.player.cockDescript(game.player.biggestCockIndex()); },
			"biggest2"	: function(thisPtr:any):any{ return game.player.cockDescript(game.player.biggestCockIndex2()); },
			"biggest3"  : function(thisPtr:any):any{ return game.player.cockDescript(game.player.biggestCockIndex3()); },
			"smallest"	: function(thisPtr:any):any{ return game.player.cockDescript(game.player.smallestCockIndex()); },
			"smallest2" : function(thisPtr:any):any{ return game.player.cockDescript(game.player.smallestCockIndex2()); },
			"longest"	: function(thisPtr:any):any{ return game.player.cockDescript(game.player.longestCock()); },
			"shortest"	: function(thisPtr:any):any{ return game.player.cockDescript(game.player.shortestCockIndex()); }
		}


		export var cockHeadLookups:Record<string, any> = // For subject: "cockHead"
		{
			"biggest"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.biggestCockIndex()); },
			"biggest2"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.biggestCockIndex2()); },
			"biggest3"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.biggestCockIndex3()); },
			"largest"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.biggestCockIndex()); },
			"smallest"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.smallestCockIndex()); },
			"smallest2"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.smallestCockIndex2()); },
			"longest"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.longestCock()); },			// the *head* of a cock has a length? Wut?
			"shortest"	: function(thisPtr:any):any{ return game.player.cockHead(game.player.shortestCockIndex()); }
		}


		// These tags take a two-word tag with a **numberic** attribute for lookup.
		// [object NUMERIC-attribute]
		// if "NUMERIC-attribute" can be cast to a Number, the parser looks for "object" in twoWordNumericTagsLookup.
		// If it finds twoWordNumericTagsLookup["object"], it calls the anonymous function stored with said key "object"
		// like so: twoWordNumericTagsLookup["object"](Number("NUMERIC-attribute"))
		//
		// if attribute cannot be case to a number, the parser looks for "object" in twoWordTagsLookup.
		export var twoWordNumericTagsLookup:Record<string, any> =
		{
				"cockfit":
					function(thisPtr:any, aspect:any):any
					{
						if(!game.player.hasCock()) return "<b>(Attempt to parse cock when none present.)</b>";
						else
						{
							if(game.player.cockThatFits(aspect) >= 0) return game.player.cockDescript(game.player.cockThatFits(aspect));
							else return game.player.cockDescript(game.player.smallestCockIndex());
						}
					},
				"cockfit2":
					function(thisPtr:any, aspect:any):any
					{
						if(!game.player.hasCock()) return "<b>(Attempt to parse cock when none present.)</b>";
						else {
							if(game.player.cockThatFits2(aspect) >= 0) return game.player.cockDescript(game.player.cockThatFits2(aspect));
							else return game.player.cockDescript(game.player.smallestCockIndex());
						}
					},
				"cockheadfit":
					function(thisPtr:any, aspect:any):any
					{
						if (!game.player.hasCock())
						{
							return "<b>(Attempt to parse cockhead when none present.)</b>";
						}
						else {
							if(game.player.cockThatFits(aspect) >= 0) return game.player.cockHead(game.player.cockThatFits(aspect));
							else return game.player.cockHead(game.player.smallestCockIndex());
						}
					},
				"cockheadfit2":
					function(thisPtr:any, aspect:any):any
					{
						if(!game.player.hasCock()) return "<b>(Attempt to parse cockhead when none present.)</b>";
						else {
							if(game.player.cockThatFits2(aspect) >= 0) return game.player.cockHead(game.player.cockThatFits2(aspect));
							else return game.player.cockHead(game.player.smallestCockIndex());
						}
					},
				"cock":
					function(thisPtr:any, aspect:any):any
					{
						if(!game.player.hasCock()) return "<b>(Attempt to parse cock when none present.)</b>";
						else
						{
							if(aspect-1 >= 0 && aspect-1 < game.player.cockTotal()) return game.player.cockDescript(aspect - 1);
							else return "<b>(Attempt To Parse CockDescript for Invalid Cock)</b>";
						}
					},
				"cockhead":
					function(thisPtr:any, aspect:any):any
					{
						if(!game.player.hasCock()) return "<b>(Attempt to parse cockHead when none present.)</b>";
						else
						{
							var intAspect:number = int(aspect - 1);
							if (intAspect >= 0 && intAspect < game.player.cockTotal()) return game.player.cockHead(intAspect);
							else return "<b>(Attempt To Parse CockHeadDescript for Invalid Cock)</b>";
						}
					}

		}

		// These tags take an ascii attribute for lookup.
		// [object attribute]
		// if attribute cannot be cast to a number, the parser looks for "object" in twoWordTagsLookup,
		// and then uses the corresponding object to determine the value of "attribute", by looking for
		// "attribute" twoWordTagsLookup["object"]["attribute"]
		export var twoWordTagsLookup:Record<string, any> =
		{
			// NPCs:
			"rubi"		: rubiLookups,
			"arian"		: arianLookups,

			// PC Attributes:

			"cock"		: cockLookups,
			"cockhead"	: cockHeadLookups
		}
