
// BREAKING ALL THE RULES.

// This line not necessary, but added because I'm pedantic like that.

// Class based content? In my CoC?! It's more likely than you think!

/****
    classes.CoC: The Document class of Corruption of the Champions.
****/

// [SWF( width="1000", height="800", pageTitle="Corruption of Champions" )]

export class CoC extends MovieClip {

    // Include the functions. ALL THE FUNCTIONS
    // No longer needed. Added into CharCreation.as:		include "../../includes/customCharCreation.as";

    // include "../../includes/descriptors.as";
    // include "../../includes/appearance.as";

    // No longer needed:		include "../../includes/InitialiseUI.as";
    // include "../../includes/input.as";
    // include "../../includes/OnLoadVariables.as";
    // include "../../includes/startUp.as";
    // include "../../includes/debug.as";

    // include "../../includes/combat.as";
    // No longer needed. This file has been chopped up and spread throughout the codebase:		include "../../includes/doEvent.as";
    // include "../../includes/eventParser.as";

    // include "../../includes/eventTest.as";

    // include "../../includes/transform.as";

    // include "../../includes/engineCore.as";

    // Lots of constants
    // include "../../includes/flagDefs.as";
    // include "../../includes/appearanceDefs.as";

    // Any classes that need to be made aware when the game is saved or loaded can add themselves to this array using saveAwareAdd.
    // 	Once in the array they will be notified by Saves.as whenever the game needs them to write or read their data to the flags array.
    private static _saveAwareClassList: Vector.<SaveAwareInterface> = new Vector.<SaveAwareInterface>();

    // Called by the saveGameObject function in Saves
    public static saveAllAwareClasses(game: CoC): void { for (const sac = 0; sac < _saveAwareClassList.length; sac++) _saveAwareClassList[sac].updateBeforeSave(game); }

    // Called by the loadGameObject function in Saves
    public static loadAllAwareClasses(game: CoC): void { for (const sac = 0; sac < _saveAwareClassList.length; sac++) _saveAwareClassList[sac].updateAfterLoad(game); }

    public static saveAwareClassAdd(newEntry: SaveAwareInterface): void { _saveAwareClassList.push(newEntry); }

    // Any classes that need to be aware of the passage of time can add themselves to this array using timeAwareAdd.
    // 	Once in the array they will be notified as each hour passes, allowing them to update actions, lactation, pregnancy, etc.
    private static _timeAwareClassList: Vector.<TimeAwareInterface> = new Vector.<TimeAwareInterface>(); // Accessed by goNext function in eventParser
    private static timeAwareLargeLastEntry: number = -1; // Used by the eventParser in calling timeAwareLarge
    private playerEvent: PlayerEvents;

    public static timeAwareClassAdd(newEntry: TimeAwareInterface): void { _timeAwareClassList.push(newEntry); }

    private static doCamp: () => void; // Set by campInitialize, should only be called by playerMenu
    private static campInitialize(passDoCamp: () => void): void { doCamp = passDoCamp; }

    // /
    private _perkLib: PerkLib = new PerkLib(); // to init the static
    private _statusAffects: StatusAffects = new StatusAffects(); // to init the static
    public charCreation: CharCreation = new CharCreation();
    public saves: Saves = new Saves(gameStateDirectGet, gameStateDirectSet);
    // Items/
    // public mutations: Mutations = new Mutations();
    // public consumables: ConsumableLib = new ConsumableLib();
    // public useables: UseableLib;
    // public weapons: WeaponLib = new WeaponLib();
    // public armors: ArmorLib = new ArmorLib();
    // public miscItems: MiscItemLib = new MiscItemLib();
    // Scenes/
    // public camp: Camp = new Camp(campInitialize);
    // public exploration: Exploration = new Exploration();
    // public followerInteractions: FollowerInteractions = new FollowerInteractions();
    // public inventory: Inventory = new Inventory(saves);
    // public masturbation: Masturbation = new Masturbation();
    // Scenes/Areas/
    // public bog: Bog = new Bog();
    // public desert: Desert = new Desert();
    // public forest: Forest = new Forest();
    // public highMountains: HighMountains = new HighMountains();
    // public lake: Lake = new Lake();
    // public mountain: Mountain = new Mountain();
    // public plains: Plains = new Plains();
    // public swamp: Swamp = new Swamp();
    // Scenes/Dungeons
    // public brigidScene: BrigidScene = new BrigidScene();
    // public d3: D3 = new D3();
    // Scenes/Explore/
    // public gargoyle: Gargoyle = new Gargoyle();
    // public lumi: Lumi = new Lumi();
    // Scenes/Monsters/
    // public goblinScene: GoblinScene = new GoblinScene();
    // public impScene: ImpScene = new ImpScene();
    // public goblinAssassinScene: GoblinAssassinScene = new GoblinAssassinScene();
    // Scenes/NPC/
    // public amilyScene: AmilyScene = new AmilyScene();
    // public anemoneScene: AnemoneScene = new AnemoneScene();
    // public arianScene: ArianScene = new ArianScene();
    // public ceraphScene: CeraphScene = new CeraphScene();
    // public ceraphFollowerScene: CeraphFollowerScene = new CeraphFollowerScene();
    // public emberScene: EmberScene = new EmberScene();
    // public exgartuan: Exgartuan = new Exgartuan();
    // public helFollower: HelFollower = new HelFollower();
    // public helScene: HelScene = new HelScene();
    // public helSpawnScene: HelSpawnScene = new HelSpawnScene();
    // public holliScene: HolliScene = new HolliScene();
    // public isabellaScene: IsabellaScene = new IsabellaScene();
    // public isabellaFollowerScene: IsabellaFollowerScene = new IsabellaFollowerScene();
    // public izmaScene: IzmaScene = new IzmaScene();
    // public jojoScene: JojoScene = new JojoScene();
    // public kihaFollower: KihaFollower = new KihaFollower();
    // public kihaScene: KihaScene = new KihaScene();
    // public latexGirl: LatexGirl = new LatexGirl();
    // public marbleScene: MarbleScene = new MarbleScene();
    // public marblePurification: MarblePurification = new MarblePurification();
    // public milkWaifu: MilkWaifu = new MilkWaifu();
    // public raphael: Raphael = new Raphael();
    // public rathazul: Rathazul = new Rathazul();
    // public sheilaScene: SheilaScene = new SheilaScene();
    // public shouldraFollower: ShouldraFollower = new ShouldraFollower();
    // public shouldraScene: ShouldraScene = new ShouldraScene();
    // public sophieBimbo: SophieBimbo = new SophieBimbo();
    // public sophieFollowerScene: SophieFollowerScene = new SophieFollowerScene();
    // public sophieScene: SophieScene = new SophieScene();
    // public urta: Urta = new Urta();
    // public urtaHeatRut: UrtaHeatRut = new UrtaHeatRut();
    // public urtaPregs: UrtaPregs = new UrtaPregs();
    // public valeria: Valeria = new Valeria();
    // public vapula: Vapula = new Vapula();
    // Scenes/Places/
    // public bazaar: Bazaar = new Bazaar();
    // public boat: Boat = new Boat();
    // public farm: Farm = new Farm();
    // public owca: Owca = new Owca();
    // public telAdre: TelAdre = new TelAdre();
    // Scenes/Quests/
    // public urtaQuest: UrtaQuest = new UrtaQuest();

    // Force updates in Pepper Flash ahuehue
    private _updateHack: Sprite = new Sprite();

    // Other scenes

    // include "../../includes/april_fools.as";

    // include "../../includes/dreams.as";
    // include "../../includes/dungeon2Supplimental.as";
    // include "../../includes/dungeonCore.as";
    // No longer needed. This file has been chopped up and spread throughout the codebase:		include "../../includes/dungeonEvents.as";
    // include "../../includes/dungeonHelSupplimental.as";
    // include "../../includes/dungeonSandwitch.as";
    // include "../../includes/fera.as";
    // Moved to Scenes/Masturbation.as		include "../../includes/masturbation.as";
    // include "../../includes/pregnancy.as";
    // include "../../includes/runa.as";
    // include "../../includes/symGear.as";
    // include "../../includes/tamaniDildo.as";
    // include "../../includes/thanksgiving.as";
    // include "../../includes/valentines.as";
    // include "../../includes/worms.as";
    // include "../../includes/xmas_bitch.as";
    // include "../../includes/xmas_gats_not_an_angel.as";
    // include "../../includes/xmas_jack_frost.as";
    // include "../../includes/xmas_misc.as";

    /****
        This is used purely for bodges while we get things cleaned up.
        Hopefully, anything you stick to this object can be removed eventually.
        I only used it because for some reason the Flash compiler wasn't seeing
        certain functions, even though they were in the same scope as the
        function calling them.
    ****/
    // Looks like this dangerous little var is no longer used anywhere, huzzah.		public var semiglobalReferencer :* = {};

    public mainView: MainView;

    public model: GameModel;

    public parser: Parser;

    // ALL THE VARIABLES:
    // Declare the various global variables as class variables.
    // Note that they're set up in the constructor, not here.
    public debug: boolean;
    public ver: string;
    public version: string;
    public mobile: boolean;
    public images: ImageManager;
    public player: Player;
    public player2: Player;
    // No longer used:		public var tempPerk:PerkClass;
    public monster: Monster;
    // No longer used:		public var itemSwapping:Boolean;
    public flags: DefaultDict;
    private gameState: number;
    // Gone, last use replaced by newRound arg for combatMenu:		public var menuLoc:Number;
    // No longer used:		public var itemSubMenu:Boolean;
    // No longer used:		public var supressGoNext:Boolean = false;
    public time: TimeModel;
    public currentText: string;

    public explored: boolean;
    public foundForest: boolean;
    public foundDesert: boolean;
    public foundMountain: boolean;
    public foundLake: boolean;
    public whitney: number;
    public monk: number;
    public sand: number;
    public giacomo: number;
    // Replaced by flag		public var beeProgress:Number;
    // Now in Inventory.as		public var itemStorage:Array;
    // Now in Inventory.as		public var gearStorage:Array;
    public temp: number;
    public args: any[];
    public funcs: any[];
    public oldStats: any; // I *think* this is a generic object
    public inputManager: InputManager;

    public monkey: ChaosMonkey;
    public testingBlockExiting: boolean;

    public kFLAGS_REF: any;

    public get inCombat(): boolean { return gameState == 1; }

    public set inCombat(value: boolean): void { gameState = (value ? 1 : 0); }

    private gameStateDirectGet(): number { return gameState; }

    private gameStateDirectSet(value: number): void { gameState = value; }

    public rand(max: number): number {
        return rand(max);
    }

    // holidayz
    public isEaster(): boolean {
        return BunnyGirl.isItEaster();
    }

    public constructor() {
        // Cheatmode.
        kGAMECLASS = this;

        useables = new UseableLib();

        this.kFLAGS_REF = kFLAGS;
        // cheat for the parser to be able to find kFLAGS
        // If you're not the parser, DON'T USE THIS

        // This is a flag used to prevent the game from exiting when running under the automated tester
        // (the chaos monkey)
        testingBlockExiting = false;

        // Used for stopping chaos monkey on syntax errors. Separate flag so we can make stopping optional
        CoC_Settings.haltOnErrors = false;

        this.parser = new Parser(this, CoC_Settings);

        this.model = new GameModel();
        this.mainView = new MainView(this.model);
        this.mainView.name = "mainView";
        this.stage.addChild(this.mainView);

        // Hooking things to MainView.
        this.mainView.onNewGameClick = CharCreation.newGameGo;
        this.mainView.onAppearanceClick = appearance;
        this.mainView.onDataClick = saves.saveLoad;
        this.mainView.onLevelClick = levelUpGo;
        this.mainView.onPerksClick = displayPerks;
        this.mainView.onStatsClick = displayStats;

        // Set up all the messy global stuff:

        // ******************************************************************************************

        const mainView: MainView = this.mainView;
        const model: GameModel = this.model;

        /**
         * Global Variables used across the whole game. I hope to whittle it down slowly.
         */

        /**
         * System Variables
         * Debug, Version, etc
         */
        // { region SystemVariables

        // DEBUG, used all over the place
        debug = false;
        // model.debug = debug; // TODO: Set on model?

        // Version NUMBER
        ver = "1.0.2";
        version = ver + " (<b>Random words go here</b>)";

        // Indicates if building for mobile?
        mobile = false;
        model.mobile = mobile;

        this.images = new ImageManager(stage);
        this.inputManager = new InputManager(stage, false);
        // include "../../includes/ControlBindings.as";

        this.monkey = new ChaosMonkey(this);

        // } endregion

        /**
         * Player specific variables
         * The player object and variables associated with the player
         */
        // { region PlayerVariables

        // The Player object, used everywhere
        player = new Player();
        game.player = player;
        player2 = new Player();
        playerEvent = new PlayerEvents();

        // Used in perk selection, mainly eventParser, input and engineCore
        // tempPerk = null;

        // Create monster, used all over the place
        monster = new Monster();
        // } endregion

        /**
         * State Variables
         * They hold all the information about item states, menu states, game states, etc
         */
        // { region StateVariables

        // User all over the place whenever items come up
        // No longer used:			itemSwapping = false;

        // The extreme flag state array. This needs to go. Holds information about everything, whether it be certain attacks for NPCs
        // or state information to do with the game.
        flags = new DefaultDict();
        game.flags = flags;

        /// Used everywhere to establish what the current game state is
        // Key system variables
        // 0 = normal
        // 1 = in combat
        // 2 = in combat in grapple
        // 3 = at start or game over screen
        // GameState 4 eliminated			//4 = at giacomo
        // GameState 5 eliminated			//5 = getting succubi potion
        // GameState 6 eliminated			//6 = at alchemist choices.
        // GameState 7 eliminated			//7 = item duuuuump
        // GameState 8 eliminated			//8 = worked at farm
        gameState = 0;

        // Gone, last use replaced by newRound arg for combatMenu
        // Another state variable used for menu display used everywhere
        // menuLoc
        // 0 - normal
        // 1 - items menu - no heat statuses when leaving it in combat
        // 2 - needs to add an hour after grabbing item
        // 3 - In tease menu - no heat statuses when leaving it.
        // MenuLoc 8 eliminated			//8 - Find Farm Pepper - 2 hours wait
        // MenuLoc 9 eliminated			//9 - Armor shop
        // MenuLoc 10 eliminated			//10- Tailor shop
        // MenuLoc 11 eliminated			//11- Midsleep loot
        // MenuLoc 12 eliminated			//12 - lumi potions
        // MenuLoc 13 eliminated			//13 - lumi enhancements
        // MenuLoc 14 eliminated			//14 - late night receive item
        // MenuLoc 15 eliminated			//15 - Weapon shop in TelAdra
        // MenuLoc 16 eliminated			//16 - Incubus Shop
        // MenuLoc 17 eliminated			//17 - 4 hours wait
        // MenuLoc 18 eliminated			//18 - 8 hours wait
        // MenuLoc 19 eliminated			//19 - Bakery!
        // MenuLoc 20 eliminated			//20 - weapon rack stuffing
        // MenuLoc 21 eliminated			//21 - weapon rack taking
        // MenuLoc 24 eliminated			//24 - Niamh booze
        // MenuLoc 25 eliminated			//25 - Owca Shop
        // MenuLoc 26 eliminated			//26 - Benoit Shop
        // MenuLoc 27 eliminated			//27 - Chicken Harpy Shop
        // MenuLoc 28 eliminated			//28 - Items menu
        // 			menuLoc = 0;

        // State variable used to indicate whether inside an item submenu
        // The item sub menu
        // 			itemSubMenu = false;
        // } endregion

        /**
         * Display Variables
         * Variables that hold display information like number of days and all the current displayed text
         */
        // { region DisplayVariables

        // Holds the date and time display in the bottom left
        time = new TimeModel();
        game.time = time;

        // The string holds all the "story" text, mainly used in engineCore
        currentText = "";
        // }endregion

        /**
         * Item variables
         * Holds all the information about items in your inventory and stashes away
         */
        // {region ItemVariables

        /**
         * Plot Variables
         * Booleans and numbers about whether you've found certain places
         */
        // { region PlotVariables

        // Plot variables
        explored = false;
        foundForest = false;
        foundDesert = false;
        foundMountain = false;
        foundLake = false;
        whitney = 0;
        monk = 0;
        sand = 0;
        giacomo = 0;
        // Replaced by flag			beeProgress = 0;

        // 			itemStorage = [];
        // 			gearStorage = [];
        // }endregion

        // These are toggled between by the [home] key.
        mainView.textBGWhite.visible = false;
        mainView.textBGTan.visible = false;

        // *************************************************************************************

        // import flash.events.MouseEvent;

        // const DOUBLE_ATTACK_STYLE:int = 867;
        // const SPELLS_CAST:int = 868;

        // Fenoxo loves his temps
        temp = 0;

        // Used to set what each action buttons displays and does.
        // args = [];
        // funcs = [];

        // Used for stat tracking to keep up/down arrows correct.
        oldStats = {};
        model.oldStats = oldStats;
        oldStats.oldStr = 0;
        oldStats.oldTou = 0;
        oldStats.oldSpe = 0;
        oldStats.oldInte = 0;
        oldStats.oldSens = 0;
        oldStats.oldLib = 0;
        oldStats.oldCor = 0;
        oldStats.oldHP = 0;
        oldStats.oldLust = 0;

        model.maxHP = maxHP;

        // ******************************************************************************************

        mainView.aCb.dataProvider = new DataProvider([{ label: "TEMP", perk: new PerkClass(PerkLib.Acclimation) }]);
        mainView.aCb.addEventListener(Event.CHANGE, changeHandler);

        // mainView._getButtonToolTipText = getButtonToolTipText;

        // Register the classes we need to be able to serialize and reconstitute so
        // they'll get reconstituted into the correct class when deserialized
        registerClassAlias("AssClass", AssClass);
        registerClassAlias("Character", Character);
        registerClassAlias("Cock", Cock);
        registerClassAlias("CockTypesEnum", CockTypesEnum);
        registerClassAlias("Enum", Enum);
        registerClassAlias("Creature", Creature);
        registerClassAlias("ItemSlotClass", ItemSlotClass);
        registerClassAlias("KeyItemClass", KeyItemClass);
        registerClassAlias("Monster", Monster);
        registerClassAlias("Player", Player);
        registerClassAlias("StatusAffectClass", StatusAffectClass);
        registerClassAlias("VaginaClass", VaginaClass);
        // registerClassAlias("Enum", Enum);

        // Hide sprites
        mainView.hideSprite();
        // Hide up/down arrows
        mainView.statsView.hideUpDown();

        this.addFrameScript(0, this.run);
    }

    public run(): void {
        mainMenu();
        this.stop();

        _updateHack.name = "wtf";
        _updateHack.graphics.beginFill(0xFF0000, 1);
        _updateHack.graphics.drawRect(0, 0, 2, 2);
        _updateHack.graphics.endFill();

        stage.addChild(_updateHack);
        _updateHack.x = 999;
        _updateHack.y = 799;
    }

    public forceUpdate(): void {
        _updateHack.x = 999;
        _updateHack.addEventListener(Event.ENTER_FRAME, moveHackUpdate);
    }

    public moveHackUpdate(e: Event): void {
        _updateHack.x -= 84;

        if (_updateHack.x < 0) {
            _updateHack.x = 0;
            _updateHack.removeEventListener(Event.ENTER_FRAME, moveHackUpdate);
        }
    }
}
