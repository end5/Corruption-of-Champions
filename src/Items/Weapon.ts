/**
 * Created by aimozg on 09.01.14.
 */

export class Weapon extends Useable // Equipable
{
    private _verb: string;
    private _attack: number;
    private _perk: string;
    private _name: string;

    public constructor(id: string, shortName: string, name: string, longName: string, verb: string, attack: number, value: number = 0, description: string = null, perk: string = "") {
        super(id, shortName, longName, value, description);
        this._name = name;
        this._verb = verb;
        this._attack = attack;
        this._perk = perk;
    }

    public get verb(): string { return _verb; }

    public get attack(): number { return _attack; }

    public get perk(): string { return _perk; }

    public get name(): string { return _name; }

    public useText(): void {
        outputText("You equip " + longName + ".  ");
    }

    public playerEquip(): Weapon { // This item is being equipped by the player. Add any perks, etc. - This function should only handle mechanics, not text output
        return this;
    }

    public playerRemove(): Weapon { // This item is being removed by the player. Remove any perks, etc. - This function should only handle mechanics, not text output
        return this;
    }

    public removeText(): void { } // Produces any text seen when removing the armor normally

    /*
            override protected function equip(player:Player, returnOldItem:Boolean, output:Boolean):void
            {
                if (output) clearOutput();
                if (canUse(player,output)){
                    var oldWeapon:Weapon = player.weapon;
                    if (output) {
                        outputText("You equip your " + longName + ".  ");
                    }
                    oldWeapon.unequip(player, returnOldItem, output);
                    player.setWeaponHiddenField(this);
                    equipped(player,output);
                }
            }

            override public function unequip(player:Player, returnToInventory:Boolean, output:Boolean = false):void
            {
                if (returnToInventory) {
                    var itype:ItemType = unequipReturnItem(player, output);
                    if (itype != null) {
                        if (output && itype == this)
                            outputText("You still have " + itype.longName + " left over.  ");
                        game.itemSwapping = true;
                        inventory.takeItem(this, false);
                    }
                }
                player.setWeaponHiddenField(WeaponLib.FISTS);
                unequipped(player,output);
            }
    */
}
