
export class PhoenixPlatoon extends Monster {

    protected performCombatAction(): void {
        game.phoenixPlatoonAI();
    }

    public defeated(hpVictory: boolean): void {
        game.phoenixPlatoonLosesToPC();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        game.phoenixPlatoonMurdersPC();
    }

    public constructor() {
        this.a = "the ";
        this.short = "phoenix platoon";
        this.imageName = "phoenixmob";
        this.long = "You are faced with a platoon of heavy infantry, all armed to the teeth and protected by chain vests and shields. They look like a cross between salamander and harpy, humanoid save for crimson wings, scaled feet, and long fiery tails. They stand in a tight-knit shield wall, each phoenix protecting herself and the warrior next to her with their tower-shield. Their scimitars cut great swaths through the room as they slowly advance upon you.";
        this.plural = true;
        this.pronoun1 = "they";
        this.pronoun2 = "them";
        this.pronoun3 = "their";
        this.cocks.createCock();
        this.balls = 2;
        this.ballSize = 1;
        this.cumMultiplier = 3;
        this.vaginas.createVagina(false, VaginaWetness.SLAVERING, VaginaLooseness.LOOSE);
        this.breastRows.createBreastRow(breastCupInverse("D"));
        this.ass.analLooseness = AnalLooseness.STRETCHED;
        this.ass.analWetness = AnalWetness.DRY;
        this.tallness = rand(8) + 70;
        this.hipRating = HipRating.AMPLE + 2;
        this.buttRating = ButtRating.LARGE;
        this.lowerBody = LowerBodyType.LIZARD;
        this.skinTone = "red";
        this.hairColor = "black";
        this.hairLength = 15;
        initStrTouSpeInte(70, 60, 120, 40);
        initLibSensCor(40, 45, 50);
        this.weaponName = "spears";
        this.weaponVerb = "stab";
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
        this.hornType = HornType.DRACONIC_X2;
        this.horns = 2;
        this.tailType = TailType.HARPY;
        this.wingType = WingType.FEATHERED_LARGE;
        this.drop = NO_DROP;
        checkMonster();
    }

}
