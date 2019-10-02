		//Calls are now made through kGAMECLASS rather than thisPtr. This allows the compiler to detect if/when a function is inaccessible.
		 



		// Possible text arguments in the conditional of a if statement
		// First, there is an attempt to cast the argument to a Number. If that fails,
		// a dictionary lookup is performed to see if the argument is in the conditionalOptions[]
		// object. If that fails, we just fall back to returning 0
		export var conditionalOptions:Record<string, any> =
		{
				"strength"			: function(thisPtr:any):any {return  game.player.str;},
				"toughness"			: function(thisPtr:any):any {return  game.player.tou;},
				"speed"				: function(thisPtr:any):any {return  game.player.spe;},
				"intelligence"		: function(thisPtr:any):any {return  game.player.inte;},
				"libido"			: function(thisPtr:any):any {return  game.player.lib;},
				"sensitivity"		: function(thisPtr:any):any {return  game.player.sens;},
				"corruption"		: function(thisPtr:any):any {return  game.player.cor;},
				"fatigue"			: function(thisPtr:any):any {return  game.player.fatigue;},
				"hp"				: function(thisPtr:any):any {return  game.player.HP;},
				"hour"				: function(thisPtr:any):any {return  game.time.hours;},
				"days"				: function(thisPtr:any):any {return  game.time.days;},
				"tallness"			: function(thisPtr:any):any {return  game.player.tallness;},
				"hairlength"		: function(thisPtr:any):any {return  game.player.hairLength;},
				"femininity"		: function(thisPtr:any):any {return  game.player.femininity;},
				"masculinity"		: function(thisPtr:any):any {return  100 - game.player.femininity;},
				"cocks"				: function(thisPtr:any):any {return  game.player.cockTotal();},
				"breastrows"		: function(thisPtr:any):any {return  game.player.bRows();},
				"biggesttitsize"	: function(thisPtr:any):any {return  game.player.biggestTitSize();},
				"vagcapacity"		: function(thisPtr:any):any {return  game.player.vaginalCapacity();},
				"analcapacity"		: function(thisPtr:any):any {return  game.player.analCapacity();},
				"balls"				: function(thisPtr:any):any {return  game.player.balls;},
				"cumquantity"		: function(thisPtr:any):any {return  game.player.cumQ();},
				"biggesttitsize"	: function(thisPtr:any):any {return  game.player.biggestTitSize();},
				"milkquantity"		: function(thisPtr:any):any {return  game.player.lactationQ();},
				"hasvagina"			: function(thisPtr:any):any {return  game.player.hasVagina();},
				"istaur"			: function(thisPtr:any):any {return  game.player.isTaur();},
				"isnaga"			: function(thisPtr:any):any {return  game.player.isNaga();},
				"isgoo"				: function(thisPtr:any):any {return  game.player.isGoo();},
				"isbiped"			: function(thisPtr:any):any {return  game.player.isBiped();},
				"hasbreasts"		: function(thisPtr:any):any {return  (game.player.biggestTitSize() >= 1);},
				"hasballs"			: function(thisPtr:any):any {return  (game.player.balls > 0);},
				"hascock"			: function(thisPtr:any):any {return  game.player.hasCock();},
				"isherm"			: function(thisPtr:any):any {return  (game.player.gender == 3);},
				"cumnormal"			: function(thisPtr:any):any {return  (game.player.cumQ() <= 150);},
				"cummedium"			: function(thisPtr:any):any {return  (game.player.cumQ() > 150 && game.player.cumQ() <= 350);},
				"cumhigh"			: function(thisPtr:any):any {return  (game.player.cumQ() > 350 && game.player.cumQ() <= 1000);},
				"cumveryhigh"		: function(thisPtr:any):any {return  (game.player.cumQ() > 1000 && game.player.cumQ() <= 2500);},
				"cumextreme"		: function(thisPtr:any):any {return  (game.player.cumQ() > 2500);},
				"issquirter"		: function(thisPtr:any):any {return  (game.player.wetness() >= 4);},
				"ispregnant"		: function(thisPtr:any):any {return  (game.player.pregnancyIncubation > 0);},
				"isbuttpregnant"	: function(thisPtr:any):any {return  (game.player.buttPregnancyIncubation > 0);},
				"hasnipplecunts"	: function(thisPtr:any):any {return  game.player.hasFuckableNipples();},
				"canfly"			: function(thisPtr:any):any {return  game.player.canFly();},
				"islactating"		: function(thisPtr:any):any {return  (game.player.lactationQ() > 0);},
				"true"				: function(thisPtr:any):any {return  true;},
				"false"				: function(thisPtr:any):any {return  false;}
			}
