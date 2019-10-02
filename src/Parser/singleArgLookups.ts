

		// Lookup dictionary for converting any single argument brackets into it's corresponding string
		// basically [armor] results in the "[armor]" segment of the string being replaced with the
		// results of the corresponding anonymous function, in this case: function():* {return player.armorName;}
		// tags not present in the singleArgConverters object return an error message.
		//
		//Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.
		 
		 
		
		export var singleArgConverters:Record<string, any> =
		{
				// all the errors related to trying to parse stuff if not present are
				// already handled in the various *Descript() functions.
				// no need to duplicate them.

				// Note: all key strings MUST be ENTIRELY lowercase.

				"agility"					: function(thisPtr:any):any { return "[Agility]"; },
				"armor"						: function(thisPtr:any):any { return game.player.armorName;},
				"armorname"					: function(thisPtr:any):any { return game.player.armorName;},
				"ass"						: function(thisPtr:any):any { return buttDescript();},
				"asshole"					: function(thisPtr:any):any { return assholeDescript(); },
				"balls"						: function(thisPtr:any):any { return ballsDescriptLight(); },
				"boyfriend"					: function(thisPtr:any):any { return game.player.mf("boyfriend", "girlfriend"); },
				"butt"						: function(thisPtr:any):any { return buttDescript();},
				"butthole"					: function(thisPtr:any):any { return assholeDescript();},
				"chest"						: function(thisPtr:any):any { return game.player.chestDesc(); },
				"clit"						: function(thisPtr:any):any { return clitDescript(); },
				"cock"						: function(thisPtr:any):any { return game.player.cockDescript(0);},
				"cockhead"					: function(thisPtr:any):any { return game.player.cockHead(0);},
				"cocks"						: function(thisPtr:any):any { return game.player.multiCockDescriptLight(); },
				"cunt"						: function(thisPtr:any):any { return vaginaDescript(); },
				"eachcock"					: function(thisPtr:any):any { return game.player.sMultiCockDesc();},
				"evade"						: function(thisPtr:any):any { return "[Evade]"; },
				"face"						: function(thisPtr:any):any { return game.player.face(); },
				"feet"						: function(thisPtr:any):any { return game.player.feet(); },
				"foot"						: function(thisPtr:any):any { return game.player.foot(); },
				"fullchest"					: function(thisPtr:any):any { return game.player.allChestDesc(); },
				"hair"						: function(thisPtr:any):any { return hairDescript(); },
				"hairorfur"					: function(thisPtr:any):any { return hairOrFur(); },
				"he"						: function(thisPtr:any):any { return game.player.mf("he", "she"); },
				"he2"						: function(thisPtr:any):any { return game.player2.mf("he", "she"); },
				"him"						: function(thisPtr:any):any { return game.player.mf("him", "her"); },
				"him2"						: function(thisPtr:any):any { return game.player2.mf("him", "her"); },
				"himher"					: function(thisPtr:any):any { return game.player.mf("him", "her"); },
				"himself"					: function(thisPtr:any):any { return game.player.mf("himself", "herself"); },
				"herself"					: function(thisPtr:any):any { return game.player.mf("himself", "herself"); },
				"hips"						: function(thisPtr:any):any { return hipDescript();},
				"his"						: function(thisPtr:any):any { return game.player.mf("his", "her"); },
				"hisher"					: function(thisPtr:any):any { return game.player.mf("his", "her"); },
				"his2"						: function(thisPtr:any):any { return game.player2.mf("his","her"); },
				"leg"						: function(thisPtr:any):any { return game.player.leg(); },
				"legs"						: function(thisPtr:any):any { return game.player.legs(); },
				"man"						: function(thisPtr:any):any { return game.player.mf("man", "woman"); },
				"men"						: function(thisPtr:any):any { return game.player.mf("men", "women"); },
				"master"					: function(thisPtr:any):any { return game.player.mf("master","mistress"); },
				"misdirection"				: function(thisPtr:any):any { return "[Misdirection]"; },
				"multicock"					: function(thisPtr:any):any { return game.player.multiCockDescriptLight(); },
				"multicockdescriptlight"	: function(thisPtr:any):any { return game.player.multiCockDescriptLight(); },
				"name"						: function(thisPtr:any):any { return game.player.short;},
				"nipple"					: function(thisPtr:any):any { return nippleDescript(0);},
				"nipples"					: function(thisPtr:any):any { return nippleDescript(0) + "s";},
				"onecock"					: function(thisPtr:any):any { return game.player.oMultiCockDesc();},
				"pg"						: function(thisPtr:any):any { return "\n\n";},
				"pussy"						: function(thisPtr:any):any { return vaginaDescript(); },
				"race"						: function(thisPtr:any):any { return game.player.race(); },
				"sack"						: function(thisPtr:any):any { return sackDescript(player); },
				"sheath"					: function(thisPtr:any):any { return game.player.sheathDescription(); },
				"skin"						: function(thisPtr:any):any { return game.player.skin(); },
				"skinfurscales"				: function(thisPtr:any):any { return game.player.skinFurScales(); },
				"teasetext"					: function(thisPtr:any):any { return teaseText(); },
				"tongue"					: function(thisPtr:any):any { return tongueDescript(); },
				"vag"						: function(thisPtr:any):any { return vaginaDescript(); },
				"vagina"					: function(thisPtr:any):any { return vaginaDescript(); },
				"vagorass"					: function(thisPtr:any):any { return (game.player.hasVagina() ? vaginaDescript() : assholeDescript()); },
				"weapon"					: function(thisPtr:any):any { return game.player.weaponName;},
				"weaponname"				: function(thisPtr:any):any { return game.player.weaponName; },
				
				"latexyname"				: function(thisPtr:any):any { return game.flags[kFLAGS.GOO_NAME]; },
				"bathgirlname"				: function(thisPtr:any):any { return game.flags[kFLAGS.MILK_NAME]; },
				"cockplural"				: function(thisPtr:any):any { return (game.player.cocks.length == 1) ? "cock" : "cocks"; },
				"dickplural"				: function(thisPtr:any):any { return (game.player.cocks.length == 1) ? "dick" : "dicks"; },
				"headplural"				: function(thisPtr:any):any { return (game.player.cocks.length == 1) ? "head" : "heads"; },
				"prickplural"				: function(thisPtr:any):any { return (game.player.cocks.length == 1) ? "prick" : "pricks"; },
				"boy"						: function(thisPtr:any):any { return game.player.mf("boy", "girl"); },
				"guy"						: function(thisPtr:any):any { return game.player.mf("guy", "girl"); },
				"wings"						: function(thisPtr:any):any { return wingsDescript(); },
				"tail"						: function(thisPtr:any):any { return tailDescript(); },
				"onetail"					: function(thisPtr:any):any { return oneTailDescript(); }

		}
