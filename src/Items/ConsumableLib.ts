/**
 * Created by aimozg on 10.01.14.
 */

export class ConsumableLib {
    public static DEFAULT_VALUE: number = 6;
    public AUBURND = ConsumableLib.mk("AuburnD", "AuburnD", "a vial of auburn hair dye", curry(hairDye, "auburn"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public B__BOOK = ConsumableLib.mk("B. Book", "B. Book", "a small book with a midnight-black cover", blackSpellbook, "This solid black book is totally unmarked, saved for a blood red clasp that holds the covers closed until you are ready to read it.  The pages are edged with gold, like some of the fancy books in the monastary back home.", 40);
    public B_GOSSR = ConsumableLib.mk("B.Gossr", "B.Gossr", "a bundle of black, gossamer webbing", curry(sweetGossamer, 1), "These strands of gooey black gossamer seem quite unlike the normal silk that driders produce.  It smells sweet and is clearly edible, but who knows what it might do to you?");
    public BC_BEER = ConsumableLib.mk("BC Beer", "BC Beer", "a mug of Black Cat Beer", Niamh.blackCatBeerEffects, "A capped mug containing an alcoholic drink secreted from the breasts of Niamh.  It smells tasty.", 1);
    public BEEHONY = new BeeHoney(false, false);
    public BIMBOCH = ConsumableLib.mk("BimboCh", "BimboCh", "a bottle of bimbo champagne", (player: Player) => Niamh.bimboChampagne(player, true, true), "", 1);
    public BIMBOLQ = new BimboLiqueur();
    public BLACK_D = ConsumableLib.mk("Black D", "Black D", "a vial of black hair dye", curry(hairDye, "black"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public BLACKEG = ConsumableLib.mk("BlackEg", "BlackEg", "a rubbery black egg", curry(blackRubberEgg, false), "This is an oblong egg, not much different from a chicken egg in appearance (save for the color).  Something tells you it's more than just food.");
    public BLACKPP = ConsumableLib.mk("BlackPp", "BlackPp", "a solid black canine pepper", curry(caninePepper, 3), "This solid black canine pepper is smooth and shiny, but something about it doesn't seem quite right...", 10);
    public BLOND_D = ConsumableLib.mk("Blond D", "Blond D", "a vial of blonde hair dye", curry(hairDye, "blonde"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public BLUEDYE = ConsumableLib.mk("BlueDye", "BlueDye", "a vial of blue hair dye", curry(hairDye, "dark blue"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public BLUEEGG = ConsumableLib.mk("BlueEgg", "BlueEgg", "a blue and white mottled egg", curry(blueEgg, false), "This is an oblong egg, not much different from a chicken egg in appearance (save for the color).  Something tells you it's more than just food.");
    public BROBREW = ConsumableLib.mk("BroBrew", "BroBrew", "a can of Bro Brew", broBrew, "This aluminum can is labelled as 'Bro Brew'.  It even has a picture of a muscly, bare-chested man flexing on it.  A small label in the corner displays: \"Demon General's Warning: Bro Brew's effects are as potent (and irreversible) as they are refreshing.\"");
    public BROWN_D = ConsumableLib.mk("Brown D", "Brown D", "a vial of brown hair dye", curry(hairDye, "brown"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public BROWNEG = ConsumableLib.mk("BrownEg", "BrownEg", "a brown and white mottled egg", curry(brownEgg, false), "This is an oblong egg, not much different from a chicken egg in appearance (save for the color).  Something tells you it's more than just food.");
    public BULBYPP = ConsumableLib.mk("BulbyPp", "BulbyPp", "a bulbous pepper", curry(caninePepper, 5), "This bulbous pepper has a slightly different shape than the other canine peppers, with two large orb-like protrusions at the base.", 10);
    public CANINEP = ConsumableLib.mk("CanineP", "CanineP", "a Canine pepper", curry(caninePepper, 0), "The pepper is shiny and red, bulbous at the base but long and narrow at the tip.  It smells spicy.");
    public CCUPCAK = ConsumableLib.mk("CCupcak", "CCupcak", "a gigantic, chocolate cupcake", giantChocolateCupcake, "", 250);
    public CERUL_P = ConsumableLib.mk("Cerul P", "Cerulean P.", "a cerulean-tinted potion", ceruleanPotion, "This is a mysterious bottle filled with a sky-blue liquid that sloshes gently inside.  Supposedly it will make you irresistible, though to what or who you cannot say.");
    public COAL___ = ConsumableLib.mk("Coal   ", "Coal   ", "two pieces of coal", coal, "");
    public DBLPEPP = ConsumableLib.mk("DblPepp", "DblPepp", "a double canine pepper", curry(caninePepper, 2), "This canine pepper is actually two that have grown together due to some freak coincidence.", 10);
    public DEBIMBO = new DeBimbo();
    public DRGNEGG = ConsumableLib.mk("DrgnEgg", "DrgnEgg", "an unfertilized dragon egg", eatEmberEgg, "A large, solid egg, easily the size of your clenched fist.  Its shell color is reddish-white, with blue splotches.");
    public DRYTENT = ConsumableLib.mk("DryTent", "DryTent", "a shriveled tentacle", shriveledTentacle, "A dried tentacle from one of the lake anemones.  It's probably edible, but the stingers are still a little active.");
    public ECTOPLS = ConsumableLib.mk("EctoPls", "EctoPls", "a bottle of ectoplasm", ectoplasm, "The green-tinted, hardly corporeal substance flows like a liquid inside its container. It makes you feel... uncomfortable, as you observe it.");
    public EQUINUM = ConsumableLib.mk("Equinum", "Equinum", "a vial of Equinum", equinum, "This is a long flared vial with a small label that reads, \"<i>Equinum</i>\".  It is likely this potion is tied to horses in some way.");
    public EXTSERM = new HairExtensionSerum();
    public F_DRAFT = ConsumableLib.mk("F.Draft", "F.Draft", "a vial of roiling red fluid labeled \"Fuck Draft\"", curry(lustDraft, true), "This vial of red fluid bubbles constantly inside the glass, as if eager to escape.  It smells very strongly, though its odor is difficult to identify.  The word \"Fuck\" is inscribed on the side of the vial.");
    public FISHFIL = ConsumableLib.mk("FishFil", "FishFil", "a fish fillet", fishFillet, "A perfectly cooked piece of fish.  You're not sure what type of fish is, since you're fairly certain \"delicious\" is not a valid species.");
    public FOXBERY = ConsumableLib.mk("FoxBery", "Fox Berry", "a fox berry", curry(foxTF, false), "This large orange berry is heavy in your hands.  It may have gotten its name from its bright orange coloration.  You're certain it is no mere fruit.");
    public FRRTFRT = ConsumableLib.mk("Frrtfrt", "Frrtfrt", "a ferret fruit", ferretTF, "This fruit is curved oddly, just like the tree it came from.  The skin is fuzzy and brown, like the skin of a peach.");
    public FOXJEWL = ConsumableLib.mk("FoxJewl", "Fox Jewel", "a fox jewel", curry(foxJewel, false), "A shining teardrop-shaped jewel.  An eerie blue flame dances beneath the surface.");
    public GLDSEED = ConsumableLib.mk("GldSeed", "GoldenSeed", "a golden seed", curry(goldenSeed, 0), "This seed looks and smells absolutely delicious.  Though it has an unusual color, the harpies prize these nuts as delicious treats.  Eating one might induce some physical transformations.");
    public GODMEAD = ConsumableLib.mk("GodMead", "GodMead", "a pint of god's mead", godMead, "");
    public PROMEAD = ConsumableLib.mk("ProMead", "ProMead", "a pint of premium god's mead", proMead, "");
    public GOB_ALE = ConsumableLib.mk("Gob.Ale", "Gob.Ale", "a flagon of potent goblin ale", goblinAle, "This sealed flagon of 'Goblin Ale' sloshes noisily with alcoholic brew.  Judging by the markings on the flagon, it's a VERY strong drink, and not to be trifled with.");
    public GRAYDYE = ConsumableLib.mk("GrayDye", "GrayDye", "a vial of gray hair dye", curry(hairDye, "gray"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public GREEN_D = ConsumableLib.mk("Green D", "Green D", "a vial of green hair dye", curry(hairDye, "green"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public GROPLUS = new GroPlus();
    public HUMMUS_ = ConsumableLib.mk("Hummus ", "Hummus ", "a blob of cheesy-looking hummus", Hummus, "This pile of hummus doesn't look that clean, and you really don't remember where you got it from.  It looks bland.  So bland that you feel blander just by looking at it.");
    public IMPFOOD = ConsumableLib.mk("ImpFood", "ImpFood", "a parcel of imp food", impFood, "This is a small parcel of reddish-brown bread stuffed with some kind of meat.  It smells delicious.");
    public INCUBID = ConsumableLib.mk("IncubiD", "IncubiD", "an Incubi draft", curry(incubiDraft, true), "The cork-topped flask swishes with a slimy looking off-white fluid, purported to give incubi-like powers.  A stylized picture of a humanoid with a huge penis is etched into the glass.");
    public IZYMILK = ConsumableLib.mk("IzyMilk", "IzyMilk", "a bottle of Isabella's milk", isabellaMilk, "This is a bottle of Isabella's milk.  Isabella seems fairly certain it will invigorate you.");
    public KANGAFT = ConsumableLib.mk("KangaFt", "KangaFruit", "a piece of kanga fruit", curry(kangaFruit, 0), "A yellow, fibrous, tubular pod.  A split in the end reveals many lumpy, small seeds inside.  The smell of mild fermentation wafts from them.");
    public KITGIFT = new KitsuneGift();
    // 		public const KITGIFT:SimpleConsumable = mk("KitGift","KitGift", "a kitsune's gift", m.kitsunesGift, "A small square package given to you by a forest kitsune.  It is wrapped up in plain white paper and tied with a string.  Who knows what's inside?", 0);
    public KNOTTYP = ConsumableLib.mk("KnottyP", "KnottyP", "a knotty canine pepper", curry(caninePepper, 4), "This knotted pepper is very swollen, with a massive, distended knot near the base.", 10);
    public L_DRAFT = ConsumableLib.mk("L.Draft", "LustDraft", "a vial of roiling bubble-gum pink fluid", curry(lustDraft, false), "This vial of bright pink fluid bubbles constantly inside the glass, as if eager to escape.  It smells very sweet, and has \"Lust\" inscribed on the side of the vial.", 20);
    public L_BLKEG = ConsumableLib.mk("L.BlkEg", "L.BlkEg", "a large rubbery black egg", curry(blackRubberEgg, true), "This is an oblong egg, not much different from an ostrich egg in appearance (save for the color).  Something tells you it's more than just food.  For all you know, it could turn you into rubber!");
    public L_BLUEG = ConsumableLib.mk("L.BluEg", "L.BluEg", "a large blue and white mottled egg", curry(blueEgg, true), "This is an oblong egg, not much different from an ostrich egg in appearance (save for the color).  Something tells you it's more than just food.");
    public L_BRNEG = ConsumableLib.mk("L.BrnEg", "L.BrnEg", "a large brown and white mottled egg", curry(brownEgg, true), "This is an oblong egg, not much different from an ostrich egg in appearance (save for the color).  Something tells you it's more than just food.");
    public L_PNKEG = ConsumableLib.mk("L.PnkEg", "L.PnkEg", "a large pink and white mottled egg", curry(pinkEgg, true), "This is an oblong egg, not much different from an ostrich egg in appearance (save for the color).  Something tells you it's more than just food.");
    public L_PRPEG = ConsumableLib.mk("L.PrpEg", "L.PrpEg", "a large purple and white mottled egg", curry(purpleEgg, true), "This is an oblong egg, not much different from an ostrich egg in appearance (save for the color).  Something tells you it's more than just food.");
    public L_WHTEG = ConsumableLib.mk("L.WhtEg", "L.WhtEg", "a large white egg", curry(whiteEgg, true), "This is an oblong egg, not much different from an ostrich egg in appearance.  Something tells you it's more than just food.");
    public LABOVA_ = ConsumableLib.mk("LaBova ", "La Bova", "a bottle containing a misty fluid labeled \"LaBova\"", curry(laBova, true, false), "A bottle containing a misty fluid with a grainy texture, it has a long neck and a ball-like base.  The label has a stylized picture of a well endowed cowgirl nursing two guys while they jerk themselves off.");
    public LACTAID = ConsumableLib.mk("Lactaid", "Lactaid", "a pink bottle labelled \"Lactaid\"", lactaid, "Judging by the name printed on this bottle, 'Lactaid' probably has an effect on the ability to lactate, and you doubt that effect is a reduction.");
    public LARGEPP = ConsumableLib.mk("LargePp", "LargePp", "an overly large canine pepper", curry(caninePepper, 1), "This large canine pepper is much bigger than any normal peppers you've seen.", 10);
    public LUSTSTK = new LustStick();
    public M__MILK = ConsumableLib.mk("M. Milk", "M. Milk", "a clear bottle of milk from Marble", useMarbleMilk, "A clear bottle of milk from Marble's breasts. It smells delicious.");
    public MAGSEED = ConsumableLib.mk("MagSeed", "MagSeed", "a magically-enhanced golden seed", curry(goldenSeed, 1), "This seed glows with power.  It's been enhanced by Lumi to unlock its full potential, allowing it to transform you more easily.");
    public MGHTYVG = ConsumableLib.mk("MghtyVg", "MghtyVg", "a mightily enhanced piece of kanga fruit", curry(kangaFruit, 1), "A yellow, fibrous, tubular pod.  A split in the end reveals many lumpy, small seeds inside.  The smell of mild fermentation wafts from them.  It glows slightly from Lumi's enhancements.");
    public MOUSECO = ConsumableLib.mk("MouseCo", "MouseCo", "a handful of mouse cocoa", mouseCocoa, "A handful of rare aromatic beans with sharp creases in the middle, making them look like small mouse ears.  Allegedly very popular and plentiful before the mice-folk were wiped out.");
    public MINOBLO = ConsumableLib.mk("MinoBlo", "MinoBlo", "a vial of Minotaur blood", minotaurBlood, "You've got a scratched up looking vial full of bright red minotaur blood.  Any time you move it around it seems to froth up, as if eager to escape.");
    public MINOCUM = ConsumableLib.mk("MinoCum", "MinoCum", "a sealed bottle of minotaur cum", minotaurCum, "This bottle of minotaur cum looks thick and viscous.  You know it has narcotic properties, but aside from that its effects are relatively unknown.", 60);
    public MYSTJWL = ConsumableLib.mk("MystJwl", "MystJwl", "a mystic jewel", curry(foxJewel, true), "The flames within this jewel glow brighter than before, and have taken on a sinister purple hue.  It has been enhanced to increase its potency, allowing it to transform you more easily, but may have odd side-effects...", 20);
    public NUMBROX = ConsumableLib.mk("NumbRox", "Numb Rox", "a strange packet of candy called 'Numb Rocks'", numbRocks, "This packet of innocuous looking 'candy' guarantees to reduce troublesome sensations and taste delicious.", 15);
    public NPNKEGG = ConsumableLib.mk("NPnkEgg", "NPnkEgg", "a neon pink egg", curry(neonPinkEgg, false), "This is an oblong egg with an unnatural neon pink coloration.  It tingles in your hand with odd energies that make you feel as if you could jump straight into the sky.");
    public ORANGDY = ConsumableLib.mk("OrangDy", "OrangDy", "a vial of brilliant orange hair dye", curry(hairDye, "bright orange"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public OVIELIX = new OvipositionElixir();
    public P_DRAFT = ConsumableLib.mk("P.Draft", "P.Draft", "an untainted Incubi draft", curry(incubiDraft, false), "The cork-topped flask swishes with a slimy looking off-white fluid, purported to give incubi-like powers.  A stylized picture of a humanoid with a huge penis is etched into the glass. Rathazul has purified this to prevent corruption upon use.", 20);
    public P_LBOVA = ConsumableLib.mk("P.LBova", "P.LBova", "a bottle containing a white fluid labeled \"Pure LaBova\"", curry(laBova, false, false), "A bottle containing a misty fluid with a grainy texture; it has a long neck and a ball-like base.  The label has a stylized picture of a well-endowed cow-girl nursing two guys while they jerk themselves off. It has been purified by Rathazul.");
    public P_PEARL = ConsumableLib.mk("P.Pearl", "P.Pearl", "a pure pearl", purePearl, "", 1000);
    public P_S_MLK = ConsumableLib.mk("P.S.Mlk", "P.S.Mlk", "an untainted bottle of Succubi milk", curry(succubiMilk, false), "This milk-bottle is filled to the brim with a creamy white milk of dubious origin.  A pink label proudly labels it as \"<i>Succubi Milk</i>\".  In small text at the bottom of the label it reads: \"<i>To bring out the succubus in YOU!</i>\"  Purified by Rathazul to prevent corruption.", 20);
    public P_WHSKY = new PhoukaWhiskey();
    public PEPPWHT = ConsumableLib.mk("PeppWht", "PeppWht", "a vial of peppermint white", (player: Player) => peppermintWhite(player), "This tightly corked glass bottle gives off a pepperminty smell and reminds you of the winter holidays.  How odd.", 120);
    public PINKDYE = ConsumableLib.mk("PinkDye", "PinkDye", "a vial of bright pink hair dye", curry(hairDye, "neon pink"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public PINKEGG = ConsumableLib.mk("PinkEgg", "PinkEgg", "a pink and white mottled egg", curry(pinkEgg, false), "This is an oblong egg, not much different from a chicken egg in appearance (save for the color).  Something tells you it's more than just food.");
    public PRFRUIT = ConsumableLib.mk("PrFruit", "PrFruit", "a purple fruit", purpleFruitEssrayle, "This sweet-smelling produce looks like an eggplant, but feels almost squishy, and rubbery to the touch. Holding it to your ear, you think you can hear some fluid sloshing around inside.");
    public PROBOVA = ConsumableLib.mk("ProBova", "ProBova", "a bottle containing a misty fluid labeled \"ProBova\"", curry(laBova, true, true), "This cloudy potion has been enhanced by the alchemist Lumi to imbue its drinker with cow-like attributes.");
    public PSDELIT = ConsumableLib.mk("PSDelit", "PSDelit", "an untainted bottle of \"Succubi's Delight\"", curry(succubisDelight, false), "This precious fluid is often given to men a succubus intends to play with for a long time.  It has been partially purified by Rathazul to prevent corruption.", 20);
    public PURHONY = new BeeHoney(true, false);
    public PURPDYE = ConsumableLib.mk("PurpDye", "PurpDye", "a vial of purple hair dye", curry(hairDye, "purple"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public PURPEAC = ConsumableLib.mk("PurPeac", "PurPeac", "a pure peach", purityPeach, "This is a peach from Minerva's spring, yellowy-orange with red stripes all over it.", 10);
    public PURPLEG = ConsumableLib.mk("PurplEg", "PurplEg", "a purple and white mottled egg", curry(purpleEgg, false), "This is an oblong egg, not much different from a chicken egg in appearance (save for the color).  Something tells you it's more than just food.");
    public RED_DYE = ConsumableLib.mk("Red Dye", "Red Dye", "a vial of red hair dye", curry(hairDye, "red"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public REPTLUM = ConsumableLib.mk("Reptlum", "Reptlum", "a vial of Reptilum", reptilum, "This is a rounded bottle with a small label that reads, \"<i>Reptilum</i>\".  It is likely this potion is tied to reptiles in some way.");
    public REDUCTO = new Reducto();
    public RINGFIG = ConsumableLib.mk("RingFig", "RingFig", "a ringtail fig", ringtailFig, "A dried fig with two lobes and thin dark rings just below its stem.  The skin is wrinkly and it looks vaguely like a bulging scrotum.");
    public RIZZART = new RizzaRoot();
    public S_DREAM = ConsumableLib.mk("S.Dream", "S.Dream", "a bottle of 'Succubus' Dream'", succubisDream, "This precious fluid is often given to men a succubus intends to play with for a long time, though this batch has been enhanced by Lumi to have even greater potency.");
    public S_GOSSR = ConsumableLib.mk("S.Gossr", "S.Gossr", "a bundle of pink, gossamer webbing", curry(sweetGossamer, 0), "These strands of gooey pink gossamer seem quite unlike the normal silk that spider-morphs produce.  It smells sweet and is clearly edible, but who knows what it might do to you?");
    public SDELITE = ConsumableLib.mk("SDelite", "Sucb.Delite", "a bottle of 'Succubi's Delight'", curry(succubisDelight, true), "This precious fluid is often given to men a succubus intends to play with for a long time.");
    public SENSDRF = ConsumableLib.mk("SensDrf", "Sens. Draft", "a bottle of sensitivity draft", sensitivityDraft, "This carefully labelled potion is a 'Sensitivity Draft', and if the diagrams are any indication, it will make your body more sensitive.", 15);
    public SHARK_T = ConsumableLib.mk("Shark.T", "Shark.T", "a sharp shark tooth", curry(sharkTooth, 0), "A glinting white tooth, very sharp and intimidating.");
    public SHEEPMK = ConsumableLib.mk("SheepMk", "SheepMk", "a bottle of sheep milk", sheepMilk, "This bottle of sheep milk is said to have corruption-fighting properties.  It may be useful.");
    public SMART_T = ConsumableLib.mk("Smart T", "Scholars T.", "a cup of scholar's tea", scholarsTea, "This powerful brew supposedly has mind-strengthening effects.");
    public SNAKOIL = ConsumableLib.mk("SnakOil", "SnakOil", "a vial of snake oil", snakeOil, "A vial the size of your fist made of dark brown glass. It contains what appears to be an oily, yellowish liquid. The odor is abominable.");
    public SPHONEY = new BeeHoney(false, true);
    public SUCMILK = ConsumableLib.mk("SucMilk", "SucMilk", "a bottle of Succubi milk", curry(succubiMilk, true), "This milk-bottle is filled to the brim with a creamy white milk of dubious origin.  A pink label proudly labels it as \"<i>Succubi Milk</i>\".  In small text at the bottom of the label it reads: \"<i>To bring out the succubus in YOU!</i>\"");
    public TRAPOIL = ConsumableLib.mk("TrapOil", "TrapOil", "a vial of trap oil", trapOil, "A round, opaque glass vial filled with a clear, viscous fluid.  It has a symbol inscribed on it, a circle with a cross and arrow pointing out of it in opposite directions.  It looks and smells entirely innocuous.");
    public TSCROLL = ConsumableLib.mk("TScroll", "TScroll", "a tattered scroll", tatteredScroll, "This tattered scroll is written in strange symbols, yet you have the feeling that if you tried to, you could decipher it.");
    public TSTOOTH = ConsumableLib.mk("TSTooth", "TSTooth", "a glowing tiger shark tooth", curry(sharkTooth, 1), "This looks like a normal shark tooth, though with an odd purple glow.");
    public VITAL_T = ConsumableLib.mk("Vital T", "Vitality T.", "a vitality tincture", vitalityTincture, "This potent tea is supposedly good for strengthening the body.");
    public VIXVIGR = ConsumableLib.mk("VixVigr", "VixVigr", "a bottle labelled \"Vixen's Vigor\"", curry(foxTF, true), "This small medicine bottle contains something called \"Vixen's Vigor\", supposedly distilled from common fox-berries.  It is supposed to be a great deal more potent, and a small warning label warns of \"extra boobs\", whatever that means.", 30);
    public W__BOOK = ConsumableLib.mk("W. Book", "W. Book", "a small book with a pristine white cover", whiteSpellbook, "This white book is totally unmarked, and the cover is devoid of any lettering or title.  A shiny brass clasp keeps the covers closed until you are ready to read it.", 40);
    public W_FRUIT = ConsumableLib.mk("W.Fruit", "W.Fruit", "a piece of whisker-fruit", catTransformation, "This small, peach-sized fruit has tiny whisker-like protrusions growing from the sides.");
    public W_STICK = new WingStick();
    public WETCLTH = ConsumableLib.mk("WetClth", "WetClth", "a wet cloth dripping with slippery slime", gooGasmic, "Dripping with a viscous slime, you've no doubt rubbing this cloth on your body would have some kind of strange effect.");
    public WHITEDY = ConsumableLib.mk("WhiteDy", "WhiteDy", "a vial of white hair dye", curry(hairDye, "white"), "This bottle of dye will allow you to change the color of your hair.  Of course if you don't have hair, using this would be a waste.");
    public WHITEEG = ConsumableLib.mk("WhiteEg", "WhiteEg", "a milky-white egg", curry(whiteEgg, false), "This is an oblong egg, not much different from a chicken egg in appearance.  Something tells you it's more than just food.");

    public PRNPKR = ConsumableLib.mk("PrnsPkr", "PrnsPkr", "a vial of pinkish fluid", princessPucker, "A vial filled with a viscous pink liquid.");

    public HRBCNT = ConsumableLib.mk("HrblCnt", "HrblCnt", "a bundle of verdant green leaves", herbalContraceptive, "A small bundle of verdant green leaves.");

    public LARGE_EGGS = [this.L_BLKEG, this.L_BLUEG, this.L_BRNEG, this.L_PNKEG, this.L_PRPEG, this.L_WHTEG];
    public SMALL_EGGS = [this.BLACKEG, this.BLUEEGG, this.BROWNEG, this.PINKEGG, this.PURPLEG, this.WHITEEG];

    /**
     * A handy function to create SimpleConsumables (useable by any player, effect is a function accepting player:Player,
     * shortName, longName, description and value are const)
     * @param id id. Must be String 7 chars long
     * @param shortName shortName, null to use id as shortName
     * @param longName null to use shortName as longName
     * @param effect function(player:Player) called to produce effect
     * @param description null to use longName as description
     */
    private static mk(id: string, shortName: string, longName: string, effect: (player: Player) => void, description: string, value: number = ConsumableLib.DEFAULT_VALUE) {
        return new SimpleConsumable(id, shortName, longName, effect, value, description);
    }
}
