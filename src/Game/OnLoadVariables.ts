/**
 * All the variables that have been left around but don't fit into the GlobalVariables file
 */

// import classes.creature;

//Used when save/loading
export var notes: string = "";
// nameBox.maxChars = 54;

//Images for image pack!
//NO! Images now work through ImageManager in GlobalVariables
//var images = new Array();

//System time
export var date: Date = new Date();

//Used to set what each action buttons displays and does. I don't know why it is initialized here.
//var args:Array = new Array();
//var funcs:Array = new Array();

//Loeri stuff
//import flash.system.*

//if ( ApplicationDomain.currentDomain.hasDefinition("Creature")) trace("Class exists");

//dungeoneering variables
//Setting dungeonLoc = 0 handles this:	public var inDungeon:Boolean = false;
export var dungeonLoc: number = 0;

// To save shitting up a lot of code...
export var inRoomedDungeon: boolean = false;
export var inRoomedDungeonResume: () => void = null;

//Used to restrict random drops from overlapping uniques
export var plotFight: boolean = false;
export var timeQ: number = 0;
export var campQ: boolean = false;

//Possibly redundant, not used anywhere else.
//Input vars
/* Yup, not used at all
public var button0Choice:Number = 0;
public var button1Choice:Number = 0;
public var button2Choice:Number = 0;
public var button3Choice:Number = 0;
public var button4Choice:Number = 0;
public var button5Choice:Number = 0;
public var button6Choice:Number = 0;
public var button7Choice:Number = 0;
public var button8Choice:Number = 0;
public var button9Choice:Number = 0;
*/