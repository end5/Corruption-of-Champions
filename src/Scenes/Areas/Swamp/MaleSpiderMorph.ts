
export class MaleSpiderMorph extends AbstractSpiderMorph {

    public defeated(hpVictory: boolean): void {
        MaleSpiderMorphScene.defeatSpiderBoy();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (pcCameWorms) {
            outputText("\n\nThe spider flashes a predatory grin while she waits it out...");
            doNext(game.endLustLoss);
        } else {
            MaleSpiderMorphScene.loseToMaleSpiderMorph();
        }
    }

    public constructor() {
        this.a = "the ";
        this.short = "male spider-morph";
        this.imageName = "malespidermorph";
        this.long = "The male spider-morph is completely nude, save for his thigh-high stockings and forearm-length gloves, which upon closer inspection, appear to be actually be part of his body - his exoskeleton.  His exposed skin is pale as the full moon, save for the dusk of his nipples and a patch of jet-black that spreads out over his groin, glossing the male's foreskinned cock and dangling sack in glistening ebon.  His ass is small but well-rounded, with a weighty spider-abdomen hanging from just above.  The spider-man is currently eyeing you with a strange expression and his fangs bared.";
        // this.plural = false;
        this.cocks.createCock(6, 2);
        this.balls = 2;
        this.ballSize = 2;
        this.breasts.createBreastRow(0);
        this.ass.analLooseness = AnalLooseness.TIGHT;
        this.ass.analWetness = AnalWetness.DRY;
        this.effects.create(StatusAffects.BonusACapacity, 40, 0, 0, 0);
        this.tallness = 7 * 12 + 6;
        this.hipRating = HipRating.CURVY + 2;
        this.buttRating = ButtRating.LARGE + 1;
        this.lowerBody = LowerBodyType.CHITINOUS_SPIDER_LEGS;
        this.skinTone = "dusky";
        this.hairColor = "red";
        this.hairLength = 13;
        initStrTouSpeInte(60, 50, 99, 99);
        initLibSensCor(35, 35, 20);
        this.weaponName = "dagger";
        this.weaponVerb = "stab";
        this.weaponAttack = 15;
        this.armorName = "exoskeleton";
        this.armorDef = 14;
        this.armorPerk = "";
        this.armorValue = 70;
        this.bonusHP = 200;
        this.lust = 20;
        this.lustVuln = .6;
        this.temperment = TEMPERMENT_RANDOM_GRAPPLES;
        this.level = 13;
        this.gems = rand(10) + 10;
        this.drop = new WeightedDrop().add(ConsumableLib.S_GOSSR, 5)
            .add(UseableLib.T_SSILK, 1)
            .add(null, 4);
        this.tailType = TailType.SPIDER_ADBOMEN;
        this.tailRecharge = 0;
        checkMonster();
    }

}
