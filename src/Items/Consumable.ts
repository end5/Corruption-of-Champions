/**
 * Created by aimozg on 09.01.14.
 */

/**
	 * An item, that is consumed by player, and disappears after use. Direct subclasses should override "doEffect" method
	 * and NOT "useItem" method.
	 */
export class Consumable extends Useable {

    public constructor(id: string, shortName: string = null, longName: string = null, value: number = 0, description: string = null) {
        super(id, shortName, longName, value, description);
    }

    /*
            public function canUse(player:Player,output:Boolean):Boolean
            {
                return true;
            }
    */

    /**
     * Perform effect on player WITHOUT requiring item being in player's inventory and removing it
     */
    /*
            public function doEffect(player:Player,output:Boolean):void
            {
                Logger.errorAMC("Consumable","doEffect",id);
            }
    */

    /**
     * Removes item from player and does effect
     */
    /*
            override public function useItem(player:Player, output:Boolean, external:Boolean):void
            {
                if (canUse(player,output)){
                    if (!external && !game.debug) player.inv.consumeItem(this,1);
                    doEffect(player,output);
                }
            }
    */
}
