  

	 
	 
	 
	 
	 
	 

	 
	 
	 
	/**
	 * Quick hacky method to wrap new content in a class-based structure
	 * BaseContent acts as an access wrapper around CoC, enabling children of BaseContent to interact with
	 * function instances/properties of CoC in the same manner older content does with the minimal amount
	 * of modification.
	 * Also this means we might start being able to get IDE autocomplete shit working again! Huzzah!
	 * @author Gedan
	 */
	export class BaseContent extends Utils
	{
		// TODO remove when we have proper enums for this
		// include "../../includes/appearanceDefs.as";

		public  constructor()
		{
			
		}
		protected  getGame():CoC
		{
			return kGAMECLASS;
		}

		protected  cheatTime(time:number):void
		{
			kGAMECLASS.cheatTime(time);
		}
		protected  get timeQ():number
		{
			return kGAMECLASS.timeQ;
		}

		protected  get camp():Camp {
			return kGAMECLASS.camp;
		}
		
		protected  get d3():D3 {
			return kGAMECLASS.d3;
		}

		public  goNext(time:number,defNext:boolean):boolean
		{
			return kGAMECLASS.goNext(time,defNext);
		}

		protected  isHalloween():boolean
		{
			return kGAMECLASS.isHalloween();
		}

		protected  isValentine():boolean
		{
			return kGAMECLASS.isValentine();
		}

		protected  isHolidays():boolean
		{
			return kGAMECLASS.isHolidays();
		}

		public  isEaster():boolean
		{
			return kGAMECLASS.isEaster();
		}

		protected  isThanksgiving():boolean
		{
			return kGAMECLASS.isThanksgiving();
		}

		protected  get date():Date
		{
			return kGAMECLASS.date;
		}

/*
		protected function inCombat():Boolean
		{
			return kGAMECLASS.inCombat();
		}
*/

		protected  get inDungeon():boolean
		{
			return kGAMECLASS.inDungeon;
		}
/* inDungeon is now read only
		protected function set inDungeon(v:Boolean):void
		{
			kGAMECLASS.inDungeon = v;
		}
*/
		
		protected  get inRoomedDungeon():boolean
		{
			return kGAMECLASS.inRoomedDungeon;
		}
		protected  set inRoomedDungeon(v:boolean):void
		{
			kGAMECLASS.inRoomedDungeon = v;
		}
		
		protected  get inRoomedDungeonResume():() => void
		{
			return kGAMECLASS.inRoomedDungeonResume;
		}
		protected  set inRoomedDungeonResume(v:() => void):void
		{
			kGAMECLASS.inRoomedDungeonResume = v;
		}
		
/*
		protected function get itemSubMenu():Boolean
		{
			return kGAMECLASS.itemSubMenu;
		}
		protected function set itemSubMenu(value:Boolean):void
		{
			kGAMECLASS.itemSubMenu = value;
		}
*/
		
		protected  showStats():void
		{
			kGAMECLASS.showStats();
		}

		protected  statScreenRefresh():void
		{
			kGAMECLASS.statScreenRefresh();
		}

		protected  cleanupAfterCombat(nextFunc:() => void = null):void
		{
			kGAMECLASS.cleanupAfterCombat(nextFunc);
		}

		protected  combatRoundOver():void
		{
			kGAMECLASS.combatRoundOver();
		}

		protected  enemyAI():void
		{
			kGAMECLASS.enemyAI();
		}

		protected  spriteSelect(choice:number = 0):void
		{
			kGAMECLASS.spriteSelect(choice);
		}

		protected  hideStats():void
		{
			kGAMECLASS.hideStats();
		}
		protected  hideUpDown():void
		{
			kGAMECLASS.hideUpDown();
		}

		/* This class extends Utils, no need for a non-static version of this function
		protected function curry(func:Function,...args):Function
		{
			return Utils.curry.apply(null,[func].concat(args));
		}
		*/
		
		/* None of these functions are called anymore
		protected function lazyIndex(obj:*,...args):Function
		{
			return Utils.lazyIndex.apply(null,[obj].concat(args));
		}
		protected function lazyCallIndex(func:Function,...args):Function
		{
			return Utils.lazyCallIndex.apply(null,[func].concat(args));
		}
		protected function lazyCallIndexCall(func:Function,...args):Function
		{
			return Utils.lazyCallIndexCall.apply(null,[func].concat(args));
		}
		*/

		protected  createCallBackFunction(func:() => void, arg:any):() => void
		{
			return kGAMECLASS.createCallBackFunction(func,arg);
		}

		protected  createCallBackFunction2(func:() => void, ...args):() => void
		{
			return kGAMECLASS.createCallBackFunction2.apply(null,[func].concat(args));
		}

		protected  startCombat(monster_:Monster,plotFight_:boolean=false):void{
			kGAMECLASS.startCombat(monster_,plotFight_);
		}
		protected  startCombatImmediate(monster:Monster, _plotFight:boolean = false):void
		{
			kGAMECLASS.startCombatImmediate(monster, _plotFight);
		}

		// Needed in a few rare cases for dumping text coming from a source that can't properly escape it's brackets
		// (Mostly traceback printing, etc...)
		protected  rawOutputText(output:string, purgeText:boolean = false):void
		{
			kGAMECLASS.rawOutputText(output, purgeText);
		}

		protected  outputText(output:string, purgeText:boolean = false, parseAsMarkdown:boolean = false):void
		{
			kGAMECLASS.outputText(output, purgeText, parseAsMarkdown);
		}
		
		protected  clearOutput():void
		{
			kGAMECLASS.currentText = "";
			kGAMECLASS.mainView.clearOutputText();
		}
		
		protected  doNext(eventNo:() => void):void //Now typesafe
		{
			kGAMECLASS.doNext(eventNo);
		}
		
		protected  menu():void
		{
			kGAMECLASS.menu();
		}

		protected  hideMenus():void
		{
			kGAMECLASS.hideMenus();
		}
		protected  choices(text1:string, butt1:() => void,
								text2:string, butt2:() => void,
								text3:string, butt3:() => void,
								text4:string, butt4:() => void,
								text5:string, butt5:() => void,
								text6:string, butt6:() => void,
								text7:string, butt7:() => void,
								text8:string, butt8:() => void,
								text9:string, butt9:() => void,
								text0:string, butt0:() => void):void { //Now typesafe
			kGAMECLASS.choices(
					text1, butt1,
					text2, butt2,
					text3, butt3,
					text4, butt4,
					text5, butt5,
					text6, butt6,
					text7, butt7,
					text8, butt8,
					text9, butt9,
					text0, butt0
			);
		}

		protected  simpleChoices(text1:string, butt1:() => void,
								text2:string, butt2:() => void,
								text3:string, butt3:() => void,
								text4:string, butt4:() => void,
								text5:string, butt5:() => void):void { //Now typesafe
			kGAMECLASS.simpleChoices(text1, butt1,
					text2, butt2,
					text3, butt3,
					text4, butt4,
					text5, butt5);
		}

		protected  doYesNo(eventYes:() => void, eventNo:() => void):void { //Now typesafe
			kGAMECLASS.doYesNo(eventYes, eventNo);
		}

		protected  addButton(pos:number, text:string = "", func1:() => void = null, arg1:any = -9000):void
		{
			kGAMECLASS.addButton(pos, text, func1, arg1);
		}

		protected  hasButton(arg:any):boolean
		{
			return kGAMECLASS.hasButton(arg);
		}

/* Replaced by Utils.formatStringArray, which does almost the same thing in one function
		protected function clearList():void{
			kGAMECLASS.clearList();
		}

		protected function addToList(arg:*):void{
			kGAMECLASS.addToList(arg);
		}

		protected function outputList():String{
			return kGAMECLASS.outputList();
		}
*/
		
		protected  sackDescript():string
		{
			return Appearance.sackDescript(player);
		}
		
		protected  cockClit(value:number = 0):string
		{
			return kGAMECLASS.cockClit(value);
		}
		
/* Was only used in Scylla's code. Replaced with conditionals
		protected function balls(balls:*, noBalls:*):String
		{
			return kGAMECLASS.balls(balls, noBalls);
		}
*/
		
		protected  sheathDesc():string
		{
			return kGAMECLASS.player.sheathDescription();
		}
		
		protected  chestDesc():string
		{
			return player.chestDesc();
			//return Appearance.chestDesc(player);
		}
		
		protected  allChestDesc():string
		{
			return player.allChestDesc();
		}
		
		protected  allBreastsDescript():string
		{
			return kGAMECLASS.allBreastsDescript();
		}
		
		protected  sMultiCockDesc():string
		{
			return kGAMECLASS.player.sMultiCockDesc();
		}
		
		protected  SMultiCockDesc():string
		{
			return kGAMECLASS.player.SMultiCockDesc();
		}
		
		protected  oMultiCockDesc():string
		{
			return kGAMECLASS.player.oMultiCockDesc();
		}
		
		protected  OMultiCockDesc():string
		{
			return kGAMECLASS.player.OMultiCockDesc();
		}
		
		protected  tongueDescript():string
		{
			return kGAMECLASS.tongueDescript();
		}
		
		protected  ballsDescriptLight(forcedSize:boolean = true):string {
			return kGAMECLASS.ballsDescriptLight(forcedSize);
		}

		protected  ballDescript():string {
			return kGAMECLASS.ballDescript();
		}

		/* All calls changed to monster.ballsDescriptLight
		protected function eBallsDescriptLight():String {
			return kGAMECLASS.eBallsDescriptLight();
		}
		*/
		
		/* Was never called
		protected function eBallsDescript():String {
			return kGAMECLASS.eBallsDescript();
		}
		*/

		protected  ballsDescript():string {
			return kGAMECLASS.ballsDescript();
		}
		
		protected  simpleBallsDescript():string {
			return kGAMECLASS.simpleBallsDescript();
		}

		protected  assholeDescript():string {
			return kGAMECLASS.assholeDescript();
		}
		
		protected  eAssholeDescript():string {
			return Appearance.assholeDescript(monster);
		}
				
		protected  hipDescript():string {
			return kGAMECLASS.hipDescript();
		}
		
		protected  assDescript():string {
			return kGAMECLASS.assDescript();
		}
		
		protected   buttDescript():string {
			return kGAMECLASS.buttDescript();
		}

		protected  assholeOrPussy():string {
			return Appearance.assholeOrPussy(player);
		}

/* Replaced by calls to Appearance.breastDescript
		protected function npcBreastDescript(size:Number):String {
			return kGAMECLASS.npcBreastDescript(size);
		}
*/
/* Was never used
		protected  function eButtDescript():String {
			return Appearance.buttDescriptionShort(monster);
		}
*/
/* Now in Utils.as
		protected function num2TextBest(number:int, capitalised:Boolean = false, positional:Boolean = false):String
		{
			return kGAMECLASS.num2TextBest(number, capitalised, positional);
		}
		
		protected function num2Text(number:int):String
		{
			return kGAMECLASS.num2Text(number);
		}
		protected function Num2Text(number:int):String
		{
			return kGAMECLASS.Num2Text(number);
		}
		protected  function num2Text2(number:int):String
		{
			return kGAMECLASS.num2Text2(number);
		}
*/
		
		protected  nippleDescript(rowNum:number):string
		{
			return kGAMECLASS.nippleDescript(rowNum);
		}
		
		protected  cockDescript(cockNum:number = 0):string
		{
			return kGAMECLASS.player.cockDescript(cockNum);
		}
		
/*
		protected function cockAdjective(cockNum:Number = -1):String
		{
			return kGAMECLASS.cockAdjective(cockNum);
		}
*/
		
		protected  multiCockDescript():string
		{
			return kGAMECLASS.player.multiCockDescript();
		}
		
		protected  multiCockDescriptLight():string
		{
			return kGAMECLASS.player.multiCockDescriptLight();
		}
		
/*
		protected function eMultiCockDescriptLight():String
		{
			return kGAMECLASS.eMultiCockDescriptLight();
		}
		
		protected function eCockHead(cockNum:Number = 0):String
		{
			return kGAMECLASS.eCockHead(cockNum);
		}
		
		protected function eCockDescript(cockIndex:Number = 0):String
		{
			return kGAMECLASS.eCockDescript(cockIndex);
		}
*/
		
		protected  breastDescript(rowNum:number):string
		{
			return player.breastDescript(rowNum);
		}
		
/*
		protected function cockHead(cockNum:Number = 0):String
		{
			return kGAMECLASS.cockHead(cockNum);
		}
*/
		
		protected  breastSize(val:number):string
		{
			return Appearance.breastSize(val);
		}
		
		protected  biggestBreastSizeDescript():string
		{
			return Appearance.biggestBreastSizeDescript(player);
		}
		
		protected  hairDescript():string
		{
			return kGAMECLASS.hairDescript();
		}
		
		protected  hairOrFur():string
		{
			return kGAMECLASS.hairOrFur();
		}
		
		protected  clitDescript():string
		{
			return kGAMECLASS.clitDescript();
		}
		
		protected  vaginaDescript(vaginaNum:number = 0):string
		{
			return kGAMECLASS.vaginaDescript(vaginaNum);
		}
		
		protected  allVaginaDescript():string
		{
			return kGAMECLASS.allVaginaDescript();
		}
		
/* Now called directly
		protected function breastCup(val:Number):String
		{
			return Appearance.breastCup(val);
		}
*/
		
/* Replaced with calls to Appearance.cockDescription
		protected function NPCCockDescript(cockType:*,cockLength:Number=0,lust:Number=50):String
		{
			return kGAMECLASS.NPCCockDescript(cockType,cockLength,lust);
		}
*/
		
		/**
		 * Apply statmods to the player. dynStats wraps the regular stats call, but supports "named" arguments of the form:
		 * 		"statname", value.
		 * Exclusively supports either long or short stat names with a single call.
		 * "str", "lib" "lus", "cor" etc
		 * "strength, "libido", lust", "corruption"
		 * Specify the stat you wish to modify and follow it with the value.
		 * Separate each stat and value with a comma, and each stat/value pair, again, with a comma.
		 * eg: dynStats("str", 10, "lust" -100); will add 10 to str and subtract 100 from lust
		 * Also support operators could be appended with + - * /=
		 * eg: dynStats("str+", 1, "tou-", 2, "spe*", 1.1, "int/", 2, "cor=", 0)
		 *     will add 1 to str, subtract 2 from tou, increase spe by 10%, decrease int by 50%, and set cor to 0
		 * 
		 * @param	... args
		 */
		protected  dynStats(... args):void
		{
			// Bullshit to unroll the incoming array
			kGAMECLASS.dynStats.apply(null, args);
		}

		protected  silly():boolean
		{
			return kGAMECLASS.silly();
		}

		protected  HPChange(changeNum:number,display:boolean):void
		{
			kGAMECLASS.HPChange(changeNum,display);
		}

		protected  fatigue(mod:number,type:number=0):void
		{
			kGAMECLASS.fatigue(mod,type);
		}


/*
		protected function get eventParser():Function
		{
			return kGAMECLASS.eventParser;
		}
*/
		
		protected  playerMenu():void { kGAMECLASS.playerMenu(); }
		
		protected  get player():Player
		{
			return kGAMECLASS.player;
		}
		
		protected  set player(val:Player):void
		{
			kGAMECLASS.player = val;
		}
		
		protected  get player2():Player
		{
			return kGAMECLASS.player2;
		}
		
		protected  set player2(val:Player):void
		{
			kGAMECLASS.player2 = val;
		}
		
		protected  get debug():boolean
		{
			return kGAMECLASS.debug;
		}
		
		protected  set debug(val:boolean):void
		{
			kGAMECLASS.debug = val;
		}
		
		protected  get ver():string
		{
			return kGAMECLASS.ver;
		}
		
		protected  set ver(val:string):void
		{
			kGAMECLASS.ver = val;
		}
		
		protected  get images():ImageManager
		{
			return kGAMECLASS.images;
		}
		
		protected  set images(val:ImageManager):void
		{
			kGAMECLASS.images = val;
		}
		
		protected  get monster():Monster
		{
			return kGAMECLASS.monster;
		}
		
		protected  set monster(val:Monster):void
		{
			kGAMECLASS.monster = val;
		}

		protected  get consumables():ConsumableLib{
			return kGAMECLASS.consumables;
		}
		protected  get useables():UseableLib{
			return kGAMECLASS.useables;
		}
		protected  get weapons():WeaponLib{
			return kGAMECLASS.weapons;
		}
		protected  get armors():ArmorLib{
			return kGAMECLASS.armors;
		}
		protected  get inventory():Inventory{
			return kGAMECLASS.inventory;
		}

/* No longer used
		protected function get itemSwapping():Boolean
		{
			return kGAMECLASS.itemSwapping;
		}
		
		protected function set itemSwapping(val:Boolean):void
		{
			kGAMECLASS.itemSwapping = val;
		}
*/
		
		protected  get time():TimeModel
		{
			return kGAMECLASS.time;
		}
		
		protected  set time(val:TimeModel):void
		{
			kGAMECLASS.time = val;
		}
		
/* Finally got rid of this var
		protected function get menuLoc():Number
		{
			return kGAMECLASS.menuLoc;
		}
		
		protected function set menuLoc(val:Number):void
		{
			kGAMECLASS.menuLoc = val;
		}
*/
		
/* Classes should now use inCombat instead of setting gameState directly
		protected function get gameState():Number
		{
			return kGAMECLASS.gameState;
		}
		
		protected function set gameState(val:Number):void
		{
			kGAMECLASS.gameState = val;
		}
*/

/*
		protected function get itemSlots():Array
		{
			return kGAMECLASS.player.itemSlots;
		}
*/
		
/*
		protected function get itemStorage():Array
		{
			return kGAMECLASS.itemStorage;
		}

		protected function set itemStorage(val:Array):void
		{
			kGAMECLASS.itemStorage = val;
		}
		
		protected function get gearStorage():Array
		{
			return kGAMECLASS.gearStorage;
		}
		
		protected function set gearStorage(val:Array):void
		{
			kGAMECLASS.gearStorage = val;
		}
*/
		
		protected  get temp():number
		{
			return kGAMECLASS.temp;
		}
		
		protected  set temp(val:number):void
		{
			kGAMECLASS.temp = val;
		}
		
		protected  get args():any[]
		{
			return kGAMECLASS.args;
		}
		
		protected  set args(val:any[]):void
		{
			kGAMECLASS.args = val;
		}
		
		protected  get funcs():any[]
		{
			return kGAMECLASS.funcs;
		}
		
		protected  set funcs(val:any[]):void
		{
			kGAMECLASS.funcs = val;
		}
		
		protected  get mainView():MainView
		{
			return kGAMECLASS.mainView;
		}
		
		protected  set mainView(val:MainView):void
		{
			kGAMECLASS.mainView = val;
		}
		
		protected  get model():GameModel
		{
			return kGAMECLASS.model;
		}
		
		protected  set model(val:GameModel):void
		{
			kGAMECLASS.model = val;
		}
		
		protected  get flags():DefaultDict
		{
			return kGAMECLASS.flags;
		}
		
		protected  set flags(val:DefaultDict):void
		{
			kGAMECLASS.flags = val;
		}
		
		protected  showStatDown(arg:string):void
		{
			kGAMECLASS.mainView.statsView.showStatDown(arg);
		}
		
		protected  showStatUp(arg:string):void
		{
			kGAMECLASS.mainView.statsView.showStatUp(arg);
		}
		
		/**
		 * PRIMO BULLSHIT FUNCTION ACCESS
		 */
		// Need to work out a better way of doing this -- I THINK maybe treating external functions as a string and calling
		// addButton like "addButton(0, "thing", "thisFunc");" might be a way to do it -- check if Func var is a Func type in this.addbutton args
		// if it is, pass it into kGAMECLASS, if it isn't, check if string. If it is, use the string to pull the func from kGAMECLASS
		// before passing it into addbutton etc.
		// Going the string route also makes it... not awful to call into other content classes too - split string on . and chain
		// lookups into objects ie "umasShop.firstVisitPart1" -> kGAMECLASS["umasShop"].["firstVisitPart1"]()
		// @aimozg: but kGAMECLASS.umasShop.firstVisistPart1 instead of String is compile-time safe.
		// Clearly this isn't going to fly long term, but it's... functional for now.

		/* @aimozg commented this out because telAdre
		protected function get armorShops():Function
		{
			return kGAMECLASS.armorShops;
		}

		protected function get telAdreMenu():Function
		{
			return kGAMECLASS.telAdreMenu;
		}*/

	}

