
export class HarpyQueen extends Monster {

    protected performCombatAction(): void {
        game.harpyQueenAI();
    }

    public defeated(hpVictory: boolean): void {
        game.harpyQueenDefeatedByPC();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        game.harpyQueenBeatsUpPCBadEnd();
    }

    public constructor() {
        this.a = "the ";
        this.short = "Harpy Queen";
        this.imageName = "harpyqueen";
        this.long = "You face the Harpy Queen, a broodmother of epic proportions - literally.  Her hips are amazingly wide, thrice her own width at the least, and the rest of her body is lushly voluptuous, with plush, soft thighs and a tremendous butt.  Her wide wings beat occasionally, sending ripples through her jiggly body.  She wields a towering whitewood staff in one hand, using the other to cast eldritch spells.";
        // this.plural = false;
        this.vaginas.createVagina(false, VaginaWetness.SLAVERING, VaginaLooseness.LOOSE);
        this.breastRows.createBreastRow(breastCupInverse("D"));
        this.ass.analLooseness = AnalLooseness.STRETCHED;
        this.ass.analWetness = AnalWetness.DRY;
        this.tallness = rand(8) + 70;
        this.hipRating = HipRating.AMPLE + 2;
        this.buttRating = ButtRating.LARGE;
        this.lowerBody = LowerBodyType.HARPY;
        this.skinTone = "red";
        this.skinType = SkinType.PLAIN;
        this.skinDesc = "feathers";
        this.hairColor = "black";
        this.hairLength = 15;
        initStrTouSpeInte(70, 60, 120, 40);
        initLibSensCor(40, 45, 50);
        this.weaponName = "eldritch staff";
        this.weaponVerb = "thwack";
        this.weaponAttack = 20;
        this.armorName = "armor";
        this.armorDef = 20;
        this.bonusHP = 1000;
        this.lust = 20;
        this.lustVuln = .15;
        this.temperment = TEMPERMENT_LOVE_GRAPPLES;
        this.level = 20;
        this.gems = rand(25) + 160;
        this.additionalXP = 50;
        this.tailType = TailType.HARPY;
        this.wingType = WingType.FEATHERED_LARGE;
        this.drop = NO_DROP;
        checkMonster();
    }

}
