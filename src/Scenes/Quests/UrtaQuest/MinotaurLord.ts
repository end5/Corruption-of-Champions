


export class MinotaurLord extends Monster {

    protected performCombatAction(): void {
        if (HP < 300 && this.effects.getValue1Of(StatusAffects.MinoMilk) < 4) minotaurDrankMalk();
        else if (rand(4) == 0 && player.weaponName != "fists") minotaurDisarm();
        else if (this.effects.findByType(StatusAffects.Timer) < 0) minotaurLordEntangle();
        else if (this.effects.findByType(StatusAffects.MinotaurEntangled) >= 0) minotaurCumPress();
        else {
            if (rand(2) == 0) minotaurPrecumTease();
            else eAttack();
        }
    }

    private minotaurDrankMalk(): void {
        outputText("The minotaur lord snorts audibly and turns to look at his mistress.  \"<i>What is it, Fido, boy?  You thirsty?</i>\"  The hulking minotaur nods.");
        // Success:*
        if (this.effects.getValue1Of(StatusAffects.MinoMilk) < 3) {
            outputText("\"<i>Catch!</i>\"  The succubus throws a bottle containing a milky-white substance to the minotaur.  He grabs it and uncorks the bottle, quickly chugging its contents with obvious enjoyment.  After he is done he looks even more energetic and ready to fight, and his cock looks even harder!");
            addHP(300);
            lust += 10;
            if (this.effects.findByType(StatusAffects.MinoMilk) < 0)
                this.effects.create(StatusAffects.MinoMilk, 1, 0, 0, 0);
            else
                this.effects.addValue(StatusAffects.MinoMilk, 1, 1);
        }
        // Failure:*
        else {
            outputText("\"<i>Well too bad!  We're all out of milk... but don't worry, my dear pet, I'll let you drink as much as you want after you're done with this bitch.</i>\"  The succubus replies, idly checking her elongated nails.");
            outputText("\n\nThe minotaur glares at you and snorts, obviously pissed at not getting his serving...");
            this.effects.addValue(StatusAffects.MinoMilk, 1, 1);
        }
        combatRoundOver();
    }

    private minotaurDisarm(): void {
        outputText("The giant of a minotaur raises his chain threateningly into the air, clearly intent on striking you down.  With your trained reflexes, you quickly move to block his blow with your halberd.  You recoil as the chain impacts your halberd with a loud clang, wrapping around it.  You smile triumphantly at the minotaur, only to glance at his smirk.  With a strong pull, he rips the halberd off your hands and into a corner of the room. Shit!");
        outputText("\n\nThe succubus laughs maniacally.  \"<i>Good boy, Fido!  Take that fox slut's toys away so she'll be easier to play with!</i>\"  The minotaur puffs his chest, proud of himself for pleasing his mistress.");
        player.setWeapon(WeaponLib.FISTS);
        // 			player.weapon.unequip(player, false, true);
        combatRoundOver();
    }

    private minotaurLordEntangle(): void {
        outputText("The minotaur lord lashes out with his chain, swinging in a wide arc!\n");
        this.effects.create(StatusAffects.Timer, 2 + rand(4), 0, 0, 0);
        // {dodge/whatever}
        if (combatMiss() || combatEvade() || combatFlexibility() || combatMisdirect()) {
            outputText("You leap over the clumsy swing, allowing the chain to fly harmlessly underneath you!");
        }
        else {
            outputText("You try to avoid it, but you're too slow, and the chain slaps into your hip, painfully bruising you with the strength of the blow, even through your armor.  The inertia carries the back half of the whip around you, and in a second, the chain has you all wrapped up with your arms pinned to your sides and your movement restricted.");
            outputText("\n\n\"<i>Hahaha!  Good boy, Fido!  Leash that bitch up!</i>\"  The succubus laughs with glee.");
            outputText("\n\n<b>You're tangled up in the minotaur lord's chain, and at his mercy, unless you can break free!</b>");
            this.effects.create(StatusAffects.MinotaurEntangled, 0, 0, 0, 0);
        }
        combatRoundOver();
    }

    private minotaurCumPress(): void {
        outputText("The minotaur lord tugs on the end of the chain, pulling you toward him, making you spin round and round so many times that you're dazed and dizzy.  You can feel the links coming free of your fur, and the closer you get, the more freedom of movement you have.  Yet, the dizziness makes it hard to do anything other than stumble.  You splat into something wet, sticky, and spongy.  You gasp, breathing a heavy gasp of minotaur musk that makes your head spin in a whole different way.  You pry yourself away from the sweaty, sperm-soaked nuts you landed on and look up, admiring the towering horse-cock with its three-rings of pre-puce along its length.  A droplet of pre-cum as fat as your head smacks into your face, staggering you back and dulling your senses with narcotic lust.");
        dynStats("lus", 22 + player.lib / 8 + player.sens / 8);
        outputText("You tumble to your knees a few feet away, compulsively licking it up.  Once it's gone, ");
        if (player.lust > 99) outputText("you rise up, horny and hungry for more.");
        else {
            outputText("you realize what you've been doing.  Your embarrassment gives you the strength to re-adopt your fighting pose, but it's hard with how rigid");
            if (player.lust >= 80) outputText(" and drippy");
            outputText(" your cock has become.  You want another taste...");
        }
        this.effects.remove(StatusAffects.MinotaurEntangled);
        combatRoundOver();
    }

    private minotaurPrecumTease(): void {
        outputText("The minotaur smiles at you and lifts his loincloth, flicking it at you.  Thick ropes of pre-cum fly through the air in a swarm,");
        if (rand(2) == 0) {
            outputText(" slapping into your face before you can react!  You wipe the slick snot-like stuff out of your eyes and nose, ");
            if (player.lust >= 70) outputText("swallowing it into your mouth without thinking.  You greedily guzzle the potent, narcotic aphrodisiac down, even going so far as to lick it from each of your fingers in turn, sucking every drop into your waiting gullet.");
            else outputText("feeling your heart hammer lustily.");
            dynStats("lus", 15 + player.lib / 8 + player.sens / 8);
        }
        else {
            outputText(" right past your head, but the smell alone is enough to make you weak at the knees.");
            outputText("  The animalistic scent of it seems to get inside you, the musky aroma burning a path of liquid heat to your groin, stiffening your horse-cock to absurd degrees.");
            dynStats("lus", 11 + player.lib / 10);
        }
        // (1)
        if (player.lust <= 75) outputText("  You shiver with need, wanting nothing more than to bury your face under that loincloth and slurp out every drop of goopey goodness.");
        else outputText("  <b>You groan and lick your lips over and over, craving the taste of him in your mouth.</b>");
        combatRoundOver();
    }

    public defeated(hpVictory: boolean): void {
        clearOutput();
        outputText("The minotaur lord is defeated!  ");
        outputText("  You could use him for a quick fuck to sate your lusts before continuing on.  Do you?");
        menu();
        addButton(0, "Fuck", game.urtaQuest.winRapeAMinoLordAsUrta);
        addButton(4, "Leave", game.urtaQuest.beatMinoLordOnToSuccubi);
    }

    public won(hpVictory: boolean, pcCameWorms: boolean): void {
        if (hpVictory) game.urtaQuest.urtaLosesToMinotaurRoughVersion();
        else game.urtaQuest.urtaSubmitsToMinotaurBadEnd();
    }

    public constructor() {
        this.a = "the ";
        this.short = "minotaur lord";
        this.imageName = "minotaurlord";
        this.long = "Across from you is the biggest minotaur you've ever seen.  Fully eleven feet tall, this shaggy monstrosity has muscles so thick that they stand even through his thick, obscuring fur.  A leather collar with a tag indicates his status as 'pet' though it seems completely out of place on the herculean minotaur.  His legs and arms are like thick tree trunks, imposing and implacable, flexing fiercely with every movement.  This can only be a minotaur lord, a minotaur of strength and virility far beyond his lesser brothers. In his hands, a massive chain swings, connected to his collar, but used as an impromptu weapon for now.  A simple loincloth girds his groin, though it does little to hide the massive, erect length that tents it.  It winds up looking more like a simple, cloth condom than any sort of clothing, and it drips long strings of musky pre-slime in ribbons onto the ground.  Below, heavy testes, each easily the size of a basketball, swing in a taut, sloshing sack.  You can almost smell the liquid bounty he has for you, and the musk he's giving off makes it seem like a good idea...";
        // this.plural = false;
        this.createCock(rand(13 + 24), 2 + rand(3), CockTypesEnum.HORSE);
        this.balls = 2;
        this.ballSize = 2 + rand(13);
        this.cumMultiplier = 1.5;
        this.hoursSinceCum = this.ballSize * 10;
        createBreastRow(0);
        this.ass.analLooseness = ANAL_LOOSENESS_STRETCHED;
        this.ass.analWetness = ANAL_WETNESS_NORMAL;
        this.effects.create(StatusAffects.BonusACapacity, 50, 0, 0, 0);
        this.tallness = rand(37) + 84;
        this.hipRating = HIP_RATING_AVERAGE;
        this.buttRating = BUTT_RATING_AVERAGE + 1;
        this.lowerBody = LOWER_BODY_TYPE_HOOFED;
        this.skinTone = "red";
        this.skinType = SKIN_TYPE_FUR;
        this.skinDesc = "shaggy fur";
        this.hairColor = randomChoice("black", "brown");
        this.hairLength = 3;
        this.faceType = FACE_COW_MINOTAUR;
        initStrTouSpeInte(125, 90, 30, 30);
        initLibSensCor(70, 25, 85);
        this.weaponName = "chain";
        this.weaponVerb = "chain-whip";
        this.weaponAttack = 50;
        this.armorName = "thick fur";
        this.bonusHP = 700;
        this.lust = 50;
        this.lustVuln = 0.33;
        this.temperment = TEMPERMENT_LUSTY_GRAPPLES;
        this.level = 15;
        this.gems = rand(5) + 5;
        this.drop = NO_DROP;
        this.tailType = TAIL_TYPE_COW;
        this.special1 = game.mountain.minotaurScene.minoPheromones;
        checkMonster();
    }

}
