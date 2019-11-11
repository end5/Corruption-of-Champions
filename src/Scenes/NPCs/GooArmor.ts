
export class GooArmor extends GooGirl {

    protected performCombatAction(): void {
        game.gooArmorAI();
    }

    public defeated(hpVictory: boolean): void {
        if (this.effects.findByType(StatusAffects.Spar) >= 0) Valeria.pcWinsValeriaSpar();
        else game.beatUpGooArmor();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (pcCameWorms) {
            outputText("\n\nThe armored goo sighs while you exhaust yourself...");
            doNext(game.endLustLoss);
        } else {
            if (this.effects.findByType(StatusAffects.Spar) >= 0) Valeria.pcWinsValeriaSparDefeat();
            else game.gooArmorBeatsUpPC();
        }
    }

    public constructor() {
        super(true);
        this.a = "a ";
        this.short = "Goo Armor";
        this.imageName = "gooarmor";
        this.long = "Before you stands a suit of plated mail armor filled with a bright blue goo, standing perhaps six feet off the ground.  She has a beautiful, feminine face, and her scowl as she stands before you is almost cute.  She has formed a mighty greatsword from her goo, and has assumed the stance of a well-trained warrior.";
        // this.plural = false;
        this.vaginas.createVagina(false, VaginaWetness.SLAVERING, VaginaLooseness.GAPING_WIDE);
        this.breastRows.createBreastRow(Appearance.breastCupInverse("C"));
        this.ass.analLooseness = AnalLooseness.STRETCHED;
        this.ass.analWetness = AnalWetness.SLIME_DROOLING;
        this.tallness = rand(8) + 70;
        this.hipRating = HipRating.AMPLE + 2;
        this.buttRating = ButtRating.LARGE;
        this.skinTone = "blue";
        this.skinType = SkinType.GOO;
        // this.skinDesc = Appearance.Appearance.DEFAULT_SKIN_DESCS[SkinType.GOO];
        this.skinAdj = "goopey";
        this.hairColor = "black";
        this.hairLength = 15;
        this.hairType = HairType.GOO;
        initStrTouSpeInte(60, 50, 50, 40);
        initLibSensCor(60, 35, 50);
        this.weaponName = "goo sword";
        this.weaponVerb = "slash";
        this.weaponAttack = 60;
        this.armorName = "armor";
        this.armorDef = 50;
        this.bonusHP = 500;
        this.lustVuln = .35;
        this.temperment = TEMPERMENT_LOVE_GRAPPLES;
        this.level = 16;
        this.gems = rand(25) + 40;
        this.drop = NO_DROP;
        checkMonster();
    }

}
