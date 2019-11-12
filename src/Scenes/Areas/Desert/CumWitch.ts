
export class CumWitch extends Monster {

    protected performCombatAction(): void {
        game.cumWitchAI();
    }

    public defeated(hpVictory: boolean): void {
        game.cumWitchDefeated();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        game.defeatedByCumWitch();
    }

    public constructor() {
        this.a = "the ";
        this.short = "Cum Witch";
        this.imageName = "cumwitch";
        this.long = "The Cum Witch is a moderately tall woman, almost six feet in height.  Her dark ebony skin is nearly as black as pitch, though it glitters with sweat from her recent sexual activities and the fight.  She has plump lips and long, smooth blonde hair, though much of it is hidden behind a pointed, wide-brimmed hat.  Her robes are even blacker than she is, but she wields an alabaster staff that fairly sizzles with magical might.  Of course, her garments don't do much to conceal her gigantic breasts.  Though there are only two, they're large enough to dwarf the four tits most sand witches are packing.";
        // this.plural = false;
        this.cocks.createCock(12, 2, CockTypesEnum.HUMAN);
        this.balls = 0;
        this.ballSize = 0;
        this.cumMultiplier = 3;
        this.hoursSinceCum = 20;
        this.vaginas.createVagina(false, VaginaWetness.WET, VaginaLooseness.LOOSE);
        this.effects.create(StatusAffects.BonusVCapacity, 20, 0, 0, 0);
        this.breastRows.createBreastRow(breastCupInverse("E"));
        this.ass.analLooseness = AnalLooseness.TIGHT;
        this.ass.analWetness = AnalWetness.NORMAL;
        this.tallness = rand(12) + 55;
        this.hipRating = HipRating.CURVY;
        this.buttRating = ButtRating.LARGE;
        this.skinTone = "black";
        this.hairColor = "sandy-blonde";
        this.hairLength = 15;
        initStrTouSpeInte(35, 35, 35, 85);
        initLibSensCor(55, 40, 30);
        this.weaponName = "fists";
        this.weaponVerb = "punches";
        this.armorName = "robes";
        this.bonusHP = 100;
        this.lust = 30;
        this.lustVuln = .8;
        this.temperment = TEMPERMENT_RANDOM_GRAPPLES;
        this.level = 6;
        this.gems = rand(15) + 5;
        this.drop = new WeightedDrop().addMany(1,
            ConsumableLib.TSCROLL,
            ConsumableLib.OVIELIX,
            ConsumableLib.LACTAID,
            ConsumableLib.LABOVA_,
            ConsumableLib.W__BOOK,
            ConsumableLib.B__BOOK,
            null);
        checkMonster();
    }

}
