
export class Imp extends Monster {
    public defeated(hpVictory: boolean): void {
        if (this.effects.findByType(StatusAffects.KitsuneFight) >= 0) {
            KitsuneScene.winKitsuneImpFight();
        } else {
            ImpScene.impVictory();
        }
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (this.effects.findByType(StatusAffects.KitsuneFight) >= 0) {
            KitsuneScene.loseKitsuneImpFight();
        } else if (pcCameWorms) {
            outputText("\n\nThe imp grins at your already corrupted state...", false);
            player.lust = 100;
            doNext(ImpScene.impRapesYou);
        } else {
            ImpScene.impRapesYou();
        }
    }

    protected lustMagicAttack(): void {
        outputText("You see " + a + short + " make sudden arcane gestures at you!\n\n");
        dynStats("lus", player.lib / 10 + player.cor / 10 + 10);
        if (player.lust < 30) outputText("You feel strangely warm.  ");
        if (player.lust >= 30 && player.lust < 60) outputText("Blood rushes to your groin as a surge of arousal hits you, making your knees weak.  ");
        if (player.lust >= 60) outputText("Images of yourself fellating and fucking the imp assault your mind, unnaturally arousing you.  ");
        if (player.cocks.length > 0) {
            if (player.lust >= 60)
                outputText("You feel your " + multiCockDescriptLight(player) + " dribble pre-cum.");
            else if (player.lust >= 30 && player.cocks.length == 1)
                outputText("Your " + cockDescript(player, 0) + " hardens, distracting you further.");
            else if (player.lust >= 30 && player.cocks.length > 1)
                outputText("Your " + multiCockDescriptLight(player) + " harden uncomfortably.");
            if (player.vaginas.length > 0) outputText("  ");
        }
        if (player.lust >= 60 && player.vaginas.length > 0) {
            switch (player.vaginas[0].vaginalWetness) {
                case VAGINA_WETNESS_NORMAL:
                    outputText("Your " + allVaginaDescript(player) + " dampen" + (player.vaginas.length > 1 ? "" : "s") + " perceptibly.");
                    break;
                case VAGINA_WETNESS_WET:
                    outputText("Your crotch becomes sticky with girl-lust.");
                    break;
                case VAGINA_WETNESS_SLICK:
                    outputText("Your " + allVaginaDescript(player) + " become" + (player.vaginas.length > 1 ? "" : "s") + " sloppy and wet.");
                    break;
                case VAGINA_WETNESS_DROOLING:
                    outputText("Thick runners of girl-lube stream down the insides of your thighs.");
                    break;
                case VAGINA_WETNESS_SLAVERING:
                    outputText("Your " + allVaginaDescript(player) + " instantly soak" + (player.vaginas.length > 1 ? "" : "s") + " your groin.");
                default: // Dry vaginas are unaffected

            }
        }
        outputText("\n");
        if (player.lust > 99)
            doNext(game.endLustLoss);
        else doNext(playerMenu);
    }

    public constructor(noInit: boolean = false) {
        if (noInit) return;
        trace("Imp Constructor!");
        this.a = "the ";
        this.short = "imp";
        this.imageName = "imp";
        this.long = "An imp is short, only a few feet tall.  An unkempt mane of shaggy black hair hangs from his head, parted by two short curved horns.  His eyes are solid black, save for tiny red irises which glow with evil intent.  His skin is bright red, and unencumbered by clothing or armor, save for a small loincloth at his belt.  His feet are covered by tiny wooden sandals, and his hands tipped with sharp claws.  A pair of tiny but functional wings occasionally flap from his back.";
        // this.plural = false;
        this.cocks.createCock(rand(2) + 11, 2.5, CockTypesEnum.DEMON);
        this.balls = 2;
        this.ballSize = 1;
        this.breasts.createBreastRow(0);
        this.ass.analLooseness = ANAL_LOOSENESS_STRETCHED;
        this.ass.analWetness = ANAL_WETNESS_NORMAL;
        this.tallness = rand(24) + 25;
        this.hipRating = HIP_RATING_BOYISH;
        this.buttRating = BUTT_RATING_TIGHT;
        this.skinTone = "red";
        this.hairColor = "black";
        this.hairLength = 5;
        initStrTouSpeInte(20, 10, 25, 12);
        initLibSensCor(45, 45, 100);
        this.weaponName = "claws";
        this.weaponVerb = "claw-slash";
        this.armorName = "leathery skin";
        this.lust = 40;
        this.temperment = TEMPERMENT_LUSTY_GRAPPLES;
        this.level = 1;
        this.gems = rand(5) + 5;
        this.drop = new WeightedDrop().
            add(ConsumableLib.SUCMILK, 3).
            add(ConsumableLib.INCUBID, 3).
            add(ConsumableLib.IMPFOOD, 4);
        this.special1 = lustMagicAttack;
        this.wingType = WING_TYPE_IMP;
        checkMonster();
    }

}
