import { Monster } from "../Character/Monster";
import { Player } from "../Character/Player";
import { GameState } from "./GameState";
import { TimeModel } from "./TimeModel";

export type Flags = Record<string, any>;

// These are exported because of very frequent use
export let player: Player;
export let flags: Flags;

class Game {
    public debug = false;
    public ver = '1.0.2';
    public version = this.ver + " (<b>Random words go here</b>)";
    public player = new Player();
    public monster: Monster | undefined;
    public flags: Flags = {};
    public time = new TimeModel();

    /// Used everywhere to establish what the current game state is
    // Key system variables
    // 0 = normal
    // 1 = in combat
    // 2 = in combat in grapple
    // 3 = at start or game over screen
    public gameState = 0;

    public explored = false;
    public foundForest = false;
    public foundDesert = false;
    public foundMountain = false;
    public foundLake = false;
    public whitney = 0;
    public monk = 0;
    public sand = 0;
    public giacomo = 0;

    public inCombat = false;

    // Save Notes
    public notes = '';

    // System Time
    public date = new Date();

    public dungeonLoc = 0;
    public inRoomedDungeon = false;
    public inRoomedDungeonResume: (() => void) | undefined;

    public plotFight = false;
    public timeQ = 0;
    public campQ = false;

    public constructor() {
        // Reset exported values here
        player = this.player;
        flags = {};
    }
}

export const game = GameState.create(Game);
