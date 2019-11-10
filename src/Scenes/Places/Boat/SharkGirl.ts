
export class SharkGirl extends Monster {
    // Lust-based attacks:
    private sharkTease(): void {
        game.spriteSelect(70);
        if (rand(2) == 0) {
            outputText("You charge at the shark girl, prepared to strike again, but stop dead in your tracks when she bends over and wiggles her toned ass towards you. It distracts you long enough for her tail to swing out and smack you to the ground. She coos, \"<i>Aw... You really do like me!</i>\"", false);
            // (Small health damage, medium lust build).
            player.takeDamage(4 + rand(4));
            dynStats("lus", (10 + (player.lib / 20)));
        }
        else {
            outputText("You pull your " + player.weaponName + " back, getting a running start to land another attack. The Shark girl smirks and pulls up her bikini top, shaking her perky breasts in your direction. You stop abruptly, aroused by the sight just long enough for the shark girl to kick you across the face and knock you to the ground.  She teases, \"<i>Aw, don't worry baby, you're gonna get the full package in a moment!</i>\"", false);
            // (Small health damage, medium lust build)
            player.takeDamage(4 + rand(4));
            dynStats("lus", (5 + (player.lib / 10)));
        }
        combatRoundOver();
    }
    public defeated(hpVictory: boolean): void {
        SharkGirlScene.sharkWinChoices();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (pcCameWorms) {
            outputText("\n\nYour foe doesn't seem disgusted enough to leave...");
            doNext(game.endLustLoss);
        } else {
            SharkGirlScene.sharkLossRape();
        }
    }

    public constructor() {
        trace("SharkGirl Constructor!");
        this.a = "the ";
        this.short = "shark-girl";
        this.imageName = "sharkgirl";
        this.long = "The shark girl stands just over 5'5\", with grey skin shimmering from water droplets catching the sunlight and slender muscles built for swimming.  Her shoulder-length silver hair brushes past her pretty face and her eyes are a striking shade of red. She has rows of intimidating sharp teeth glinting in the light. A fish-like tail protrudes from her backside, wrapping around her toned legs at every opportunity. She's wearing a rather skimpy black bikini, strings done in such a way that they move around her fin; though the swimwear itself barely covers her perky breasts and tight snatch.";
        // this.plural = false;
        this.vaginas.createVagina(false, VaginaWetness.DROOLING, VaginaLooseness.NORMAL);
        this.effects.create(StatusAffects.BonusVCapacity, 15, 0, 0, 0);
        this.breasts.createBreastRow(Appearance.breastCupInverse("D"));
        this.ass.analLooseness = AnalLooseness.TIGHT;
        this.ass.analWetness = AnalWetness.DRY;
        this.effects.create(StatusAffects.BonusACapacity, 40, 0, 0, 0);
        this.tallness = 5 * 12 + 5;
        this.hipRating = HipRating.AMPLE + 2;
        this.buttRating = ButtRating.LARGE;
        this.skinTone = "gray";
        this.hairColor = "silver";
        this.hairLength = 16;
        initStrTouSpeInte(40, 40, 55, 42);
        initLibSensCor(75, 35, 40);
        this.weaponName = "shark teeth";
        this.weaponVerb = "bite";
        this.weaponAttack = 3;
        this.armorName = "tough skin";
        this.armorDef = 5;
        this.bonusHP = 20;
        this.lust = 40;
        this.lustVuln = .9;
        this.temperment = TEMPERMENT_RANDOM_GRAPPLES;
        this.level = 4;
        this.gems = rand(15) + 5;
        this.drop = new WeightedDrop().
            add(ConsumableLib.L_DRAFT, 3).
            add(ArmorLib.S_SWMWR, 1).
            add(ConsumableLib.SHARK_T, 5).
            add(null, 1);
        this.special1 = sharkTease;
        this.special2 = sharkTease;
        checkMonster();
    }

}
