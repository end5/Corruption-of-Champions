
/**
 * ...
 * @author ...
 */
export class FemaleSpiderMorph extends AbstractSpiderMorph {

    public defeated(hpVictory: boolean): void {
        FemaleSpiderMorphScene.defeatASpiderBitch();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (pcCameWorms) {
            outputText("\n\nThe spider flashes a predatory grin while she waits it out...");
            doNext(game.endLustLoss);
        } else {
            FemaleSpiderMorphScene.loseToFemaleSpiderMorph();
        }
    }

    public constructor() {
        this.a = "the ";
        this.short = "female spider-morph";
        this.imageName = "femalespidermorph";
        this.long = "The female spider-morph is completely nude, save for her thigh-high stockings and forearm-length gloves, which upon closer inspection, appear to be actually be part of her body - her exoskeleton.  Her exposed skin is pale as the full moon, save for the dusky skin of her nipples and the black-skinned delta of her sex.  Her breasts and ass are both full and well-rounded, and just above her ass-cheeks there's a bulbous spider-abdomen.  The spider-girl is currently eyeing you with a strange expression and her fangs bared.";
        // this.plural = false;
        this.vaginas.createVagina(false, VaginaWetness.DROOLING, VaginaLooseness.LOOSE);
        this.effects.create(StatusAffects.BonusVCapacity, 40, 0, 0, 0);
        this.breastRows.createBreastRow(breastCupInverse("E+"));
        this.ass.analLooseness = AnalLooseness.VIRGIN;
        this.ass.analWetness = AnalWetness.DRY;
        this.effects.create(StatusAffects.BonusACapacity, 30, 0, 0, 0);
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
        this.armorValue = 50;
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
        checkMonster();
    }

}
