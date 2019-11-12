/**
 * Created by aimozg on 18.01.14.
 */

export class LeatherArmorSegments extends Armor {

    public constructor() {
        super("UrtaLta", "UrtaLta", "leather armor segments", "leather armor segments", 5, 76, undefined, "Light", true);
    }
    public removeText() {
        outputText("You have your old set of " + ArmorLib.LEATHRA.longName + " left over.  ");
    }

    public playerRemove() {
        super.playerRemove();
        return ArmorLib.LEATHRA;
    }

}
