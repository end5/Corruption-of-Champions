/**
 * Created by aimozg on 10.01.14.
 */

export class Spellblade extends Weapon {

    public constructor() {
        super("S.Blade", "S.Blade", "inscribed spellblade", "a spellblade", "slash", 8, 500, "Forged not by a swordsmith but a sorceress, this arcane-infused blade amplifies your magic.  Unlike the wizard staves it is based on, this weapon also has a sharp edge, a technological innovation which has proven historically useful in battle.", "Wizard's Focus");
    }

    public playerEquip(): Weapon {
        while (game.player.perks.findByType(PerkLib.WizardsFocus) >= 0) game.player.perks.remove(PerkLib.WizardsFocus);
        game.player.perks.create(PerkLib.WizardsFocus, 0.5, 0, 0, 0);
        return super.playerEquip();
    }

    public playerRemove(): Weapon {
        while (game.player.perks.findByType(PerkLib.WizardsFocus) >= 0) game.player.perks.remove(PerkLib.WizardsFocus);
        return super.playerRemove();
    }

    /*
            override public function equipEffect(player:Player, output:Boolean):void
            {
                player.perks.create(PerkLib.WizardsFocus,.5,0,0,0);
            }

            override public function unequipEffect(player:Player, output:Boolean):void
            {
                player.perks.remove(PerkLib.WizardsFocus);
            }
    */
}
