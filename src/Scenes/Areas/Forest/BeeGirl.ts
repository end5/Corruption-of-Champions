
export class BeeGirl extends Monster {

    public defeated(hpVictory: boolean): void {
        clearOutput();
        if (player.gender > 0) {
            if (hpVictory) {
                outputText("You smile in satisfaction as the " + short + " collapses, unable to continue fighting.  The sweet scent oozing from between her legs is too much to bear, arousing you painfully, and you see an easy way to relieve it..\n\nWhat do you do to her?");
            }
            else {
                outputText("You smile in satisfaction as the " + short + " spreads her legs and starts frigging her honey-soaked cunt.  The sweet scent oozing from between her legs is too much to bear, arousing you painfully, and you see an easy way to relieve it..\n\nWhat do you do to her?");
            }
            player.lust = 98;
            dynStats("lus", 1);
            const dildoRape: () => void = (player.keyItems.has("Deluxe Dildo") >= 0 ? BeeGirlScene.beeGirlsGetsDildoed : null);
            const milkAndHoney: () => void = (player.effects.findByType(StatusAffects.Feeder) >= 0 ? BeeGirlScene.milkAndHoneyAreKindaFunny : null);
            simpleChoices("Rape", BeeGirlScene.rapeTheBeeGirl, "Dildo Rape", dildoRape, "", null, "B. Feed", milkAndHoney, "Leave", leaveAfterDefeating);
        }
        else if (player.effects.findByType(StatusAffects.Feeder) >= 0) { // Genderless can still breastfeed
            if (hpVictory) {
                outputText("You smile in satisfaction as the " + short + " collapses, unable to continue fighting.  The sweet scent oozing from between her legs is too much to bear, arousing you painfully.\n\nWhat do you do?");
            }
            else {
                outputText("You smile in satisfaction as the " + short + " spreads her legs and starts frigging her honey-soaked cunt.  The sweet scent oozing from between her legs is too much to bear, arousing you painfully.\n\nWhat do you do?");
            }
            simpleChoices("B. Feed", BeeGirlScene.milkAndHoneyAreKindaFunny, "", null, "", null, "", null, "Leave", leaveAfterDefeating);
        }
        else {
            game.finishCombat();
        }
    }

    private leaveAfterDefeating(): void {
        if (HP < 1) {
            flags[kFLAGS.BEE_GIRL_COMBAT_WINS_WITHOUT_RAPE]++; // This only happens if you beat her up and then don't rape her
        }
        else {
            flags[kFLAGS.BEE_GIRL_COMBAT_WINS_WITH_RAPE]++; // All wins by lust count towards the desire option, even when you leave
        }
        cleanupAfterCombat();
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (pcCameWorms) {
            outputText("\n\nThe bee-girl goes white and backs away with a disgusted look on her face.\n\n");
            cleanupAfterCombat();
        }
        else {
            BeeGirlScene.beeRapesYou();
        }
    }

    private beeStingAttack(): void {
        // Blind dodge change
        if (this.effects.findByType(StatusAffects.Blind) >= 0) {
            outputText(capitalA + short + " completely misses you with a blind sting!!");
            combatRoundOver();
            return;
        }
        // Determine if dodged!
        if (player.spe - spe > 0 && int(Math.random() * (((player.spe - spe) / 4) + 80)) > 80) {
            if (player.spe - spe < 8) outputText("You narrowly avoid " + a + short + "'s stinger!");
            if (player.spe - spe >= 8 && player.spe - spe < 20) outputText("You dodge " + a + short + "'s stinger with superior quickness!");
            if (player.spe - spe >= 20) outputText("You deftly avoid " + a + short + "'s slow attempts to sting you.");
            combatRoundOver();
            return;
        }
        // determine if avoided with armor.
        if (player.armorDef >= 10 && rand(4) > 0) {
            outputText("Despite her best efforts, " + a + short + "'s sting attack can't penetrate your armor.");
            combatRoundOver();
            return;
        }
        // Sting successful!  Paralize or lust?
        // Lust 50% of the time
        if (rand(2) == 0) {
            outputText("Searing pain lances through you as " + a + short + " manages to sting you!  You stagger back a step and nearly trip, flushing hotly.  ");
            outputText("Oh no!  You've been injected with some kind of aphrodisiac.  You've got to keep focused, you can't think about... fucking... ");
            if (player.gender == 1) outputText("or dripping honey-slicked cunts beckoning you. ");
            if (player.gender == 2) outputText("planting your aching sex over her face while you lick her sweet honeypot. ");
            if (player.gender == 3) outputText("or cocks, tits, and puffy nipples. ");
            dynStats("lus", 25);
            if (player.lust > 60) {
                outputText(" You shake your head and struggle to stay focused,");
                if (player.gender == 1 || player.gender == 3) outputText(" but it's difficult with the sensitive bulge in your groin.");
                if (player.gender == 2) outputText(" but can't ignore the soaking wetness in your groin.");
                if (player.sens > 50) outputText("  The sensitive nubs of your nipples rub tightly under your " + player.armorName + ".");
            }
            else outputText(" You shake your head and clear the thoughts from your head, focusing on the task at hand.");
            if (player.effects.findByType(StatusAffects.lustvenom) < 0) player.effects.create(StatusAffects.lustvenom, 0, 0, 0, 0);
        }
        // Paralise the other 50%!
        else {
            outputText("Searing pain lances through you as " + a + short + " manages to sting you!  You stagger back a step and nearly trip, finding it hard to move yourself.");
            const paralyzeIndex: number = player.effects.findByType(StatusAffects.ParalyzeVenom);
            if (paralyzeIndex >= 0) {
                player.effects[paralyzeIndex].value1 += 2.9; // v1 - strenght penalty, v2 speed penalty
                player.effects[paralyzeIndex].value2 += 2.9;
                dynStats("str", -3, "spe", -3);
                outputText("  It's getting much harder to move, you're not sure how many more stings like that you can take!");
            }
            else {
                player.effects.create(StatusAffects.ParalyzeVenom, 2, 2, 0, 0);
                dynStats("str", -2, "spe", -2);
                outputText("  You've fallen prey to paralyzation venom!  Better end this quick!");
            }
        }
        if (player.lust >= 100)
            doNext(game.endLustLoss);
        else doNext(playerMenu);
    }

    public constructor() {
        super();
        this.a = "a ";
        this.short = "bee-girl";
        this.imageName = "beegirl";
        this.long = "A bee-girl buzzes around you, filling the air with intoxicatingly sweet scents and a buzz that gets inside your head.  She has a humanoid face with small antennae, black chitin on her arms and legs that looks like shiny gloves and boots, sizable breasts, and a swollen abdomen tipped with a gleaming stinger.";
        this.vaginas.createVagina(false, VaginaWetness.SLAVERING, VaginaLooseness.GAPING);
        this.breasts.createBreastRow(Appearance.breastCupInverse("DD"));
        this.ass.analLooseness = AnalLooseness.STRETCHED;
        this.ass.analWetness = AnalWetness.NORMAL;
        this.tallness = rand(14) + 59;
        this.hipRating = HipRating.CURVY + 3;
        this.buttRating = ButtRating.EXPANSIVE;
        this.lowerBody = LowerBodyType.BEE;
        this.skinTone = "yellow";
        this.hairColor = randomChoice("black", "black and yellow");
        this.hairLength = 6;
        initStrTouSpeInte(30, 30, 30, 20);
        initLibSensCor(60, 55, 0);
        this.weaponName = "chitin-plated fist";
        this.weaponVerb = "armored punch";
        this.armorName = "chitin";
        this.armorDef = 9;
        this.lust = 20 + rand(40);
        this.lustVuln = 0.9;
        this.temperment = TEMPERMENT_LOVE_GRAPPLES;
        this.level = 4;
        this.gems = rand(15) + 1;
        this.drop = new WeightedDrop().add(ConsumableLib.BEEHONY, 4).addMany(1, ConsumableLib.OVIELIX, ConsumableLib.W__BOOK, UseableLib.B_CHITN, null);
        this.antennae = AntennaeType.BEE;
        this.wingType = WingType.BEE_LIKE_SMALL;
        this.tailType = TailType.BEE_ABDOMEN;
        this.tailVenom = 100;
        this.special1 = beeStingAttack;
        checkMonster();
    }

}
