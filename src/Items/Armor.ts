/**
 * Created by aimozg on 10.01.14.
 */

export class Armor extends Useable {
    private _def: number;
    private _perk: string;
    private _name: string;
    private _supportsBulge: boolean;

    public constructor(id: string, shortName: string, name: string, longName: string, def: number, value: number = 0, description?: string, perk: string = "", supportsBulge: boolean = false) {
        super(id, shortName, longName, value, description);
        this._name = name;
        this._def = def;
        this._perk = perk;
        this._supportsBulge = supportsBulge;
    }

    public get def(): number { return this._def; }

    public get perk(): string { return this._perk; }

    public get name(): string { return this._name; }

    public get supportsBulge(): boolean { return this._supportsBulge && game.player.modArmorName == ""; }
    // For most clothes if the modArmorName is set then it's Exgartuan's doing. The comfortable clothes are the exception, they override this function.

    public useText(): void {
        outputText("You equip " + this.longName + ".  ");
    }

    public playerEquip(): Armor { // This item is being equipped by the player. Add any perks, etc. - This function should only handle mechanics, not text output
        return this;
    }

    public playerRemove(): Armor | null { // This item is being removed by the player. Remove any perks, etc. - This function should only handle mechanics, not text output
        while (game.player.perks.findByType(PerkLib.BulgeArmor) >= 0) game.player.perks.remove(PerkLib.BulgeArmor); // TODO remove this Exgartuan hack
        if (game.player.modArmorName.length > 0) game.player.modArmorName = "";
        return this;
    }

    public removeText(): void { } // Produces any text seen when removing the armor normally

}
