
/**
 * ...
 * @author Fake-Name
 */

export class Minotaur extends Monster {
    public hasAxe: boolean;

    public defeated(hpVictory: boolean): void {
        if (this.effects.findByType(StatusAffects.PhyllaFight) >= 0) {
            this.effects.remove(StatusAffects.PhyllaFight);
            outputText("You defeat a minotaur!  ", true);
            game.desert.antsScene.phyllaBeatAMino();
        } else {
            game.mountain.minotaurScene.minoVictoryRapeChoices();
        }
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (this.effects.findByType(StatusAffects.PhyllaFight) >= 0) {
            this.effects.remove(StatusAffects.PhyllaFight);
            game.desert.antsScene.phyllaPCLostToMino();
        } else if (pcCameWorms) {
            outputText("\n\nThe minotaur picks you up and forcibly tosses you from his cave, grunting in displeasure.", false);
            cleanupAfterCombat();
        } else
            game.mountain.minotaurScene.getRapedByMinotaur();
    }

    public get long(): string {
        return "An angry-looking minotaur looms over you.  Covered in shaggy " + hairColor + " fur, the beast is an imposing sight.  Wearing little but an obviously distended loincloth, he is clearly already plotting his method of punishment.  Like most minotaurs he has hooves, a cow-like tail and face, prominent horns, and impressive musculature. " +
            (ballSize > 4 ? ("  Barely visible below the tattered shreds of loincloth are " + Appearance.ballsDescription(true, true, this) + ", swollen with the minotaur's long pent-up need.") : "") +
            (hasAxe ? "<b>This minotaur seems to have found a deadly looking axe somewhere!</b>" : "");
    }

    public constructor(axe: boolean = false) {
        // Most times they dont have an axe
        hasAxe = axe || rand(3) == 0;
        const furColor: string = randomChoice("black", "brown");

        trace("Minotaur Constructor!");
        trace(game.flags);
        this.a = "the ";
        this.short = "minotaur";
        this.imageName = "minotaur";
        this.long = "";
        // this.plural = false;
        this.createCock(rand(13) + 24, 2 + rand(3), CockTypesEnum.HORSE);
        this.balls = 2;
        this.ballSize = 2 + rand(13);
        this.cumMultiplier = 1.5;
        this.hoursSinceCum = this.ballSize * 10;
        createBreastRow(0);
        this.ass.analLooseness = ANAL_LOOSENESS_STRETCHED;
        this.ass.analWetness = ANAL_WETNESS_NORMAL;
        this.effects.create(StatusAffects.BonusACapacity, 30, 0, 0, 0);
        this.tallness = rand(37) + 84;
        this.hipRating = HIP_RATING_AVERAGE;
        this.buttRating = BUTT_RATING_AVERAGE;
        this.lowerBody = LOWER_BODY_TYPE_HOOFED;
        this.skinTone = furColor;
        this.skinType = SKIN_TYPE_FUR;
        this.skinDesc = "shaggy fur";
        this.hairColor = furColor;
        this.hairLength = 3;
        initStrTouSpeInte(hasAxe ? 75 : 50, 60, 30, 20);
        initLibSensCor(40 + this.ballSize * 2, 15 + this.ballSize * 2, 35);
        this.faceType = FACE_COW_MINOTAUR;
        this.weaponName = hasAxe ? "axe" : "fist";
        this.weaponVerb = hasAxe ? "cleave" : "punch";
        this.armorName = "thick fur";
        this.bonusHP = 20 + rand(this.ballSize * 2);
        this.lust = this.ballSize * 3;
        this.lustVuln = hasAxe ? 0.84 : 0.87;
        this.temperment = TEMPERMENT_LUSTY_GRAPPLES;
        this.level = hasAxe ? 6 : 5;
        this.gems = rand(5) + 5;
        if (hasAxe) {
            this.drop = new WeightedDrop(consumables.MINOBLO, 1);
        } else {
            this.drop = new ChainedDrop().add(consumables.MINOCUM, 1 / 5)
                .add(consumables.MINOBLO, 1 / 2)
                .elseDrop(null);
        }
        this.special1 = game.mountain.minotaurScene.minoPheromones;
        this.tailType = TAIL_TYPE_COW;
        checkMonster();
    }

}
