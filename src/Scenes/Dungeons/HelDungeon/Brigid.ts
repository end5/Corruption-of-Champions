
export class Brigid extends Monster {

    // Attack One: Hot Poker, Right Up Your Ass!
    private brigidPoke(): void {
        outputText("Brigid stalks forward with confidence, her shield absorbing your defensive blows until she's right on top of you. She bats your [weapon] aside and thrashes you with her hot poker, scalding your " + skin(player) + " and sending you reeling.");
        // (Effect: Heavy Damage)
        let damage: number = Math.round((str + weaponAttack) - rand(player.tou) - player.armorDef);
        if (damage < 30) damage = 30;
        damage = player.takeDamage(damage);
        outputText(" (" + damage + ")");
        combatRoundOver();
    }

    // Attack Two: SHIELD BOP! OOM BOP!
    private brigidBop(): void {
        outputText("The harpy feints at you with her poker; you dodge the blow, but you leave yourself vulnerable as she spins around and slams her heavy shield into you, knocking you off balance.");
        // (Effect: Stagger/Stun)
        let damage: number = 5;
        damage = player.takeDamage(5);
        outputText(" (" + damage + ")");
        if (player.perks.findByType(PerkLib.Resolute) >= 0) outputText("  Of course, your resolute posture prevents her from accomplishing much.");
        else player.effects.create(StatusAffects.Stunned, 0, 0, 0, 0);
        combatRoundOver();
    }

    // Attack Three: Harpy Ass Grind GO!
    private BrigidAssGrind(): void {
        outputText("Brigid grins as she approaches you.  She handily deflects a few defensive blows and grabs you by the shoulders.  She forces you onto your knees and before you can blink, has turned around and smashed your face into her ass!  \"<i>Mmm, you like that, don'tcha?</i>\" she growls, grinding her huge, soft ass across your face, giving you an up-close and personal feel of her egg-laying hips.");
        dynStats("lus", 30);
        combatRoundOver();
    }
    protected performCombatAction(): void {
        if (player.effects.findByType(StatusAffects.Stunned) >= 0) {
            player.effects.remove(StatusAffects.Stunned);
            if (rand(2) == 0) BrigidAssGrind();
            else brigidPoke();
            return;
        }
        if (rand(3) == 0) BrigidAssGrind();
        else if (rand(2) == 0) brigidBop();
        else brigidPoke();
    }

    public defeated(hpVictory: boolean): void {
        game.brigidScene.pcDefeatsBrigid();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        game.brigidScene.pcDefeatedByBrigid();
    }

    public constructor() {
        this.a = "";
        this.short = "Brigid the Jailer";
        this.imageName = "brigid";
        this.long = "Brigid is a monster of a harpy, standing a foot taller than any other you've seen. She's covered in piercings, and her pink-dyed hair is shaved down to a long mohawk. She's nude, save for the hot poker in her right hand and the shield in her left, which jingles with every step she takes thanks to the cell keys beneath it.";
        // this.plural = false;
        this.vaginas.createVagina(false, VAGINA_WETNESS_SLAVERING, VAGINA_LOOSENESS_LOOSE);
        if (LOWER_BODY_TYPE_HARPY > 0) {
            this.effects.create(StatusAffects.BonusVCapacity, LOWER_BODY_TYPE_HARPY, 0, 0, 0);
        }
        this.breasts.createBreastRow(Appearance.breastCupInverse("D"));
        this.ass.analLooseness = ANAL_LOOSENESS_STRETCHED;
        this.ass.analWetness = ANAL_WETNESS_DRY;
        this.tallness = rand(8) + 70;
        this.hipRating = HIP_RATING_AMPLE + 2;
        this.buttRating = BUTT_RATING_LARGE;
        this.skinTone = "red";
        this.hairColor = "black";
        this.hairLength = 15;
        initStrTouSpeInte(90, 60, 120, 40);
        initLibSensCor(40, 45, 50);
        this.weaponName = "poker";
        this.weaponVerb = "burning stab";
        this.weaponAttack = 30;
        this.armorName = "armor";
        this.armorDef = 20;
        this.bonusHP = 1000;
        this.lust = 20;
        this.lustVuln = .25;
        this.temperment = TEMPERMENT_LOVE_GRAPPLES;
        this.level = 19;
        this.gems = rand(25) + 140;
        this.additionalXP = 50;
        this.wingType = WING_TYPE_FEATHERED_LARGE;
        this.tailType = TAIL_TYPE_DEMONIC;
        this.hornType = HORNS_DEMON;
        this.horns = 2;
        this.drop = NO_DROP;
        checkMonster();
    }

}
