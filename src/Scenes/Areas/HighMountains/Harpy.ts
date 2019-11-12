
export class Harpy extends Monster {

    // *Note, special attack one is an idea based on Ceraph.
    // About the attack that raises your Lust to 100 if you
    // don't "wait" when she unleashes it. Alright, I
    // basically used the idea, sorry. But it's a neat idea
    // so it should be fitting, right? Or you could just
    // dump it out altogether. It'd cause severe damage,
    // in the 150 region if you don't wise up.*

    protected harpyUberCharge(): void {
        // (Harpy special attack 1, part one)
        if (this.effects.findByType(StatusAffects.Uber) < 0) {
            this.effects.create(StatusAffects.Uber, 0, 0, 0, 0);
            outputText("Flapping her wings frantically, she flies away from you and gains height, hanging in the light before you.  She lets out a shrill and terrifying cry, narrowing her eyes as she focuses in on you!", false);
        }
        // (Harpy special attack 1, part two if PC does anything but "Wait")
        else {
            if (flags[kFLAGS.IN_COMBAT_USE_PLAYER_WAITED_FLAG] == 0) {
                let damage: number = 160 + rand(20);
                damage = player.takeDamage(damage);
                outputText("The harpy lets out a terrible cry and drops, reaching an almost impossible speed as she dives down at you.  Her eyes are narrowed like a true bird of prey.  You were too busy with your own attack to avoid it!  Her claws surge down and pierce your " + player.armorName + " like paper, driving hard into the flesh beneath and making you cry out in pain.  The harpy dumps you onto the ground, your wounds bleeding profusely. (" + damage + ")", false);
                this.effects.remove(StatusAffects.Uber);
            }
            else {
                outputText("You stand firm and ready yourself as the crazed harpy hovers above you. Letting out an ear-splitting cry she dives at you with her claws extended, reaching an incredible speed before she levels out.  The harpy is heading right for you!  Thanks to your ready position, you manage to dive aside just as the harpy reaches you.  She clips you slightly, spinning you as you dive for the ground.  You hit the ground hard, but look up in time to see her make a rough, graceless landing.  Her body rolls until it reached a standstill.  The enraged harpy drags herself up and takes flight once more!", false);
                player.takeDamage(10 + rand(10));
                this.effects.remove(StatusAffects.Uber);
                HP -= 20;
            }
        }
        combatRoundOver();
    }

    // (Harpy special attack 2, lust increase)
    protected harpyTease(): void {
        outputText("The harpy charges at you carelessly, her body striking you with the full weight of her motherly hips.  The pair of you go crashing backwards onto the ground.  You grapple with her weighty ass, trying your best not to think dirty thoughts, but the way she's maniacally flapping and writhing her curvy body against you makes it impossible! After a brief, groping wrestle on the ground, she pushes you away and takes flight again.", false);
        dynStats("lus", (12 + rand(player.sens / 5)));
        combatRoundOver();
    }

    protected performCombatAction(): void {
        const select: number = 1;
        if (this.effects.findByType(StatusAffects.Uber) >= 0) {
            harpyUberCharge();
            return;
        }
        super.performCombatAction();
    }

    public defeated(hpVictory: boolean): void {
        HarpyScene.harpyVictoryuuuuu();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (pcCameWorms) {
            outputText("\n\nYour foe doesn't seem disgusted enough to leave...");
            doNext(game.endLustLoss);
        } else {
            HarpyScene.harpyLossU();
        }
    }

    protected outputPlayerDodged(dodge: number): void {
        outputText("With another deranged cry the harpy dives at you, swinging her razor-sharp talons through the air with the grace of a ballerina. Your quick reflexes allow you to dodge every vicious slash she makes at you.\n", false);
    }

    public outputAttack(damage: number): void {
        if (damage <= 0) {
            outputText("The harpy dives at you with her foot-talons, but you deflect the attack, grasp onto her leg, and swing her through the air, tossing her away from you before she has a chance to right herself.", false);
        } else {
            outputText("The harpy surges forward, bringing her razor-sharp claws down on you, tearing at all the exposed flesh she can reach! (" + damage + ")", false);
        }
    }

    public constructor(noInit: boolean = false) {
        if (noInit) return;
        trace("Harpy Constructor!");
        this.a = "the ";
        this.short = "harpy";
        this.imageName = "harpy";
        this.long = "You are fighting a tall, deranged harpy. She appears very human, about six feet six inches tall but covered in a fine layer of powder-blue down. Her arms are sinewy and muscular, with a long web connecting them to her ample hips, covered in stringy blue feathers to aid her flight. A larger pair of powdery-blue wings also protrudes from her shoulder blades, flapping idly. She appears quite deranged as she circles you, approaching and backing away erratically. Her face is quite beautiful, with fine lilac makeup adorning the features of a handsome woman, and her lips are traced with rich golden lipstick. As she circles you, squawking frantically and trying to intimidate you, your eyes are drawn to her slender torso and small, pert breasts, each the size of a small fruit and covered in a layer of the softest feathers which ripple and move with the gusts from her wings. As astounding as her breasts are, her egg-bearing hips are even more impressive.  They're twice as wide as her torso, with enormous, jiggling buttocks where her huge, meaty thighs are coming up to meet them. Her legs end in three-pronged talons; their shadowy black curves glinting evilly in the light.";
        // this.plural = false;
        this.vaginas.createVagina(false, VaginaWetness.SLICK, VaginaLooseness.GAPING_WIDE);
        this.effects.create(StatusAffects.BonusVCapacity, 40, 0, 0, 0);
        this.breastRows.createBreastRow(breastCupInverse("B"));
        this.ass.analLooseness = AnalLooseness.TIGHT;
        this.ass.analWetness = AnalWetness.DRY;
        this.effects.create(StatusAffects.BonusACapacity, 20, 0, 0, 0);
        this.tallness = 6 * 12 + 6;
        this.hipRating = HipRating.INHUMANLY_WIDE;
        this.buttRating = ButtRating.EXPANSIVE;
        this.lowerBody = LowerBodyType.HARPY;
        this.skinTone = "pink";
        this.skinType = SkinType.PLAIN;
        this.skinDesc = "feathers";
        this.hairColor = "blue";
        this.hairLength = 16;
        initStrTouSpeInte(60, 40, 90, 40);
        initLibSensCor(70, 30, 80);
        this.weaponName = "talons";
        this.weaponVerb = "slashing talons";
        this.weaponAttack = 15;
        this.armorName = "feathers";
        this.armorDef = 5;
        this.bonusHP = 150;
        this.lust = 10;
        this.lustVuln = .7;
        this.temperment = TEMPERMENT_RANDOM_GRAPPLES;
        this.level = 10;
        this.gems = 10 + rand(4);
        this.drop = new ChainedDrop().add(ArmorLib.W_ROBES, 1 / 10)
            .elseDrop(ConsumableLib.GLDSEED);
        this.wingType = WingType.HARPY;
        this.special1 = harpyUberCharge;
        this.special2 = harpyTease;
        checkMonster();
    }

}
