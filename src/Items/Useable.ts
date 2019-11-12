/**
 * Created by aimozg on 09.01.14.
 */

/**
 * Represent item that can be used but does not necessarily disappears on use. Direct subclasses should overrride
 * "useItem" method.
 */
export class Useable extends ItemType {

    // If an item cannot be used it should provide some description of why not
    public canUse(player: Player, output: boolean): boolean { return true; }

    public useItem(): boolean {
        Logger.errorAMC("Useable", "useItem", this.id);
        return (false);
    }

    // Produces any text seen when using or equipping the item normally
    public useText(): void { }

}
