export function sweetGossamer(type: number, player: Player): void {
    outputText("", true);
    let changes: number = 0;
    let changeLimit: number = 1;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(2) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    // Consuming Text
    if (type == 0)
        outputText("You wad up the sweet, pink gossamer and eat it, finding it to be delicious and chewy, almost like gum.  Munching away, your mouth generates an enormous amount of spit until you're drooling all over yourself while you devour the sweet treat.", false);
    else if (type == 1)
        outputText("You wad up the sweet, black gossamer and eat it, finding it to be delicious and chewy, almost like licorice.  Munching away, your mouth generates an enormous amount of spit until you're drooling all over yourself while you devour the sweet treat.", false);
    // *************
    // Stat Changes
    // *************
    // (If speed<70, increases speed)
    if (player.spe < 70 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nYour reflexes feel much faster. Experimentally, you make a grab at a fly on a nearby rock and quickly snatch it out of the air.  A compulsion to stuff it in your mouth and eat it surfaces, but you resist the odd desire.  Why would you ever want to do something like that?", false);
        dynStats("spe", 1.5);
        changes++;
    }
    // (If speed>80, decreases speed down to minimum of 80)
    if (player.spe > 80 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nYou feel like resting high in the trees and waiting for your unsuspecting prey to wander below so you can take them without having to exert yourself.  What an odd thought!", false);
        dynStats("spe", -1.5);
        changes++;
    }
    // (increases sensitivity)
    if (changes < changeLimit && rand(3) == 0) {
        outputText("\n\nThe hairs on your arms and legs stand up straight for a few moments, detecting the airflow around you. Touch appears to be more receptive from now on.", false);
        dynStats("sen", 1);
        changes++;
    }
    // (Increase libido)
    if (changes < changeLimit && rand(3) == 0) {
        outputText("\n\nYou suddenly feel slightly needier, and your loins stir in quiet reminder that they could be seen to. The aftertaste hangs on your tongue and your teeth.  You wish there had been more.", false);
        dynStats("lib", 1);
        changes++;
    }
    // (increase toughness to 60)
    if (changes < changeLimit && rand(3) == 0 && player.tou < 60) {
        outputText("\n\nStretching languidly, you realize you're feeling a little tougher than before, almost as if you had a full-body shell of armor protecting your internal organs.  How strange.  You probe at yourself, and while your " + skinFurScales(player) + " doesn't feel much different, the underlying flesh does seem tougher.", false);
        dynStats("tou", 1);
        changes++;
    }
    // (decrease strength to 70)
    if (player.str > 70 && rand(3) == 0) {
        outputText("\n\nLethargy rolls through you while you burp noisily.  You rub at your muscles and sigh, wondering why you need to be strong when you could just sew up a nice sticky web to catch your enemies.  ", false);
        if (spiderScore(player) < 4)
            outputText("Wait, you're not a spider, that doesn't make any sense!", false);
        else
            outputText("Well, maybe you should put your nice, heavy abdomen to work.", false);
        dynStats("str", -1);
        changes++;
    }
    // ****************
    // Sexual Changes
    // ****************
    // Increase venom recharge
    if (player.tailType == TailType.SPIDER_ADBOMEN && player.tailRecharge < 25 && changes < changeLimit) {
        changes++;
        outputText("\n\nThe spinnerets on your abdomen twitch and drip a little webbing.  The entirety of its heavy weight shifts slightly, and somehow you know you'll produce webs faster now.", false);
        player.tailRecharge += 5;
    }
    // (tightens vagina to 1, increases lust/libido)
    if (player.vaginas.length > 0) {
        if (player.looseness() > 1 && changes < changeLimit && rand(3) == 0) {
            outputText("\n\nWith a gasp, you feel your " + vaginaDescript(player, 0) + " tightening, making you leak sticky girl-juice. After a few seconds, it stops, and you rub on your " + vaginaDescript(player, 0) + " excitedly. You can't wait to try this out!", false);
            dynStats("lib", 2, "lus", 25);
            changes++;
            player.vaginas[0].vaginalLooseness--;
        }
    }
    // (tightens asshole to 1, increases lust)
    if (player.ass.analLooseness > 1 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nYou let out a small cry as your " + assholeDescript(player) + " shrinks, becoming smaller and tighter. When it's done, you feel much hornier and eager to stretch it out again.", false);
        dynStats("lib", 2, "lus", 25);
        changes++;
        player.ass.analLooseness--;
    }
    // [Requires penises]
    // (Thickens all cocks to a ratio of 1\" thickness per 5.5\"
    if (player.cocks.length > 0 && changes < changeLimit && rand(4) == 0) {
        // Use temp to see if any dicks can be thickened
        temp = 0;
        counter = 0;
        while (counter < player.cocks.length) {
            if (player.cocks[counter].cockThickness * 5.5 < player.cocks[counter].cockLength) {
                player.cocks[counter].cockThickness += .1;
                temp = 1;
            }
            counter++;
        }
        // If something got thickened
        if (temp == 1) {
            outputText("\n\nYou can feel your " + multiCockDescriptLight(game.player) + " filling out in your " + player.armorName + ". Pulling ", false);
            if (player.cocks.length == 1)
                outputText("it", false);
            else
                outputText("them", false);
            outputText(" out, you look closely.  ", false);
            if (player.cocks.length == 1)
                outputText("It's", false);
            else
                outputText("They're", false);
            outputText(" definitely thicker.", false);
            let counter: number;
            changes++;
        }
    }
    // [Increase to Breast Size] - up to Large DD
    if (player.breastRows.smallestTitSize() < 6 && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nAfter eating it, your chest aches and tingles, and your hands reach up to scratch at it unthinkingly.  Silently, you hope that you aren't allergic to it.  Just as you start to scratch at your " + breastDescriptOfRow(player, player.breastRows.smallestTitRow()) + ", your chest pushes out in slight but sudden growth.", false);
        player.breastRows[player.breastRows.smallestTitRow()].breastRating++;
        changes++;
    }
    // [Increase to Ass Size] - to 11
    if (player.buttRating < 11 && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nYou look over your shoulder at your " + buttDescription(player) + " only to see it expand just slightly. You gape in confusion before looking back at the remaining silk in your hands. You finish it anyway. Dammit!", false);
        player.buttRating++;
        changes++;
    }
    // ***************
    // Appearance Changes
    // ***************
    // (Ears become pointed if not human)
    if (player.earType != EarType.HUMAN && player.earType != EarType.ELFIN && rand(4) == 0 && changes < changeLimit) {
        outputText("\n\nYour ears twitch once, twice, before starting to shake and tremble madly.  They migrate back towards where your ears USED to be, so long ago, finally settling down before twisting and stretching, changing to become <b>new, pointed elfin ears.</b>", false);
        player.earType = EarType.ELFIN;
        changes++;
    }
    // (Fur/Scales fall out)
    if (player.skinType != SkinType.PLAIN && (player.earType == EarType.HUMAN || player.earType == EarType.ELFIN) && rand(4) == 0 && changes < changeLimit) {
        outputText("\n\nA slowly-building itch spreads over your whole body, and as you idly scratch yourself, you find that your " + skinFurScales(player) + " ", false);
        if (player.skinType == SkinType.SCALES)
            outputText("are", false);
        else
            outputText("is", false);
        outputText(" falling to the ground, revealing flawless, almost pearly-white skin underneath.  <b>You now have pale white skin.</b>", false);
        player.skinTone = "pale white";
        player.skinAdj = "";
        player.skinType = SkinType.PLAIN;
        player.skinDesc = "skin";
        changes++;
    }
    // (Gain human face)
    if (player.skinType == SkinType.PLAIN && (player.faceType != FaceType.SPIDER_FANGS && player.faceType != FaceType.HUMAN) && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nWracked by pain, your face slowly reforms into a perfect human shape.  Awed by the transformation, you run your fingers delicately over the new face, marvelling at the change.  <b>You have a human face again!</b>", false);
        player.faceType = FaceType.HUMAN;
        changes++;
    }
    // -Remove breast rows over 2.
    if (changes < changeLimit && player.breastRows.length > 2 && rand(3) == 0 && !flags[kFLAGS.HYPER_HAPPY]) {
        changes++;
        outputText("\n\nYou stumble back when your center of balance shifts, and though you adjust before you can fall over, you're left to watch in awe as your bottom-most " + breastDescriptOfRow(player, player.breastRows.length - 1) + " shrink down, disappearing completely into your ", false);
        if (player.breastRows.length >= 3)
            outputText("abdomen", false);
        else
            outputText("chest", false);
        outputText(". The " + nippleDescription(player, player.breastRows.length - 1) + "s even fade until nothing but ", false);
        if (player.skinType == SkinType.FUR)
            outputText(player.hairColor + " " + player.skinDesc, false);
        else
            outputText(player.skinTone + " " + player.skinDesc, false);
        outputText(" remains. <b>You've lost a row of breasts!</b>", false);
        dynStats("sen", -5);
        player.breastRows.removeBreastRow(player.breastRows.length - 1, 1);
    }
    // -Nipples reduction to 1 per tit.
    if (player.breastRows.averageNipplesPerBreast() > 1 && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nA chill runs over your " + allBreastsDescript(player) + " and vanishes.  You stick a hand under your " + player.armorName + " and discover that your extra nipples are missing!  You're down to just one per ", false);
        if (player.breastRows.biggestTitSize() < 1)
            outputText("'breast'.", false);
        else
            outputText("breast.", false);
        changes++;
        // Loop through and reset nipples
        for (temp = 0; temp < player.breastRows.length; temp++) {
            player.breastRows[temp].nipplesPerBreast = 1;
        }
    }
    // Nipples Turn Black:
    if (player.effects.findByType(StatusAffects.BlackNipples) < 0 && rand(6) == 0 && changes < changeLimit) {
        outputText("\n\nA tickling sensation plucks at your nipples and you cringe, trying not to giggle.  Looking down you are in time to see the last spot of flesh tone disappear from your [nipples].  They have turned an onyx black!");
        player.effects.create(StatusAffects.BlackNipples, 0, 0, 0, 0);
        changes++;
    }
    // eyes!
    if (player.skinType == SkinType.PLAIN && (player.faceType != FaceType.SPIDER_FANGS || player.faceType != FaceType.HUMAN) && player.eyeType == EyeType.HUMAN && rand(4) == 0 && changes < changeLimit) {
        player.eyeType = EyeType.FOUR_SPIDER_EYES;
        changes++;
        outputText("\n\nYou suddenly get the strangest case of double vision.  Stumbling and blinking around, you clutch at your face, but you draw your hands back when you poke yourself in the eye.  Wait, those fingers were on your forehead!  You tentatively run your fingertips across your forehead, not quite believing what you felt.  <b>There's a pair of eyes on your forehead, positioned just above your normal ones!</b>  This will take some getting used to!", false);
        dynStats("int", 5);
    }
    // (Gain spider fangs)
    if (player.faceType == FaceType.HUMAN && player.skinType == SkinType.PLAIN && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nTension builds within your upper gum, just above your canines.  You open your mouth and prod at the affected area, pricking your finger on the sharpening tooth.  It slides down while you're touching it, lengthening into a needle-like fang.  You check the other side and confirm your suspicions.  <b>You now have a pair of pointy spider-fangs, complete with their own venom!</b>", false);
        player.faceType = FaceType.SPIDER_FANGS;
        changes++;
    }
    // (Arms to carapace-covered arms)
    if (player.armType != ArmType.SPIDER && changes < changeLimit && rand(4) == 0) {
        outputText("\n\n", false);
        // (Bird pretext)
        if (player.armType == ArmType.HARPY)
            outputText("The feathers covering your arms fall away, leaving them to return to a far more human appearance.  ", false);
        outputText("You watch, spellbound, while your forearms gradually become shiny.  The entire outer structure of your arms tingles while it divides into segments, turning the " + skinFurScales(player) + " into a shiny black carapace.  You touch the onyx exoskeleton and discover to your delight that you can still feel through it as naturally as your own skin.", false);
        player.armType = ArmType.SPIDER;
        changes++;
    }
    // (Centaurs -> Normal Human Legs) (copy from elsewhere)
    if (player.isTaur() && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nYour quadrupedal hind-quarters seizes, overbalancing your surprised front-end and causing you to stagger and fall to your side.  Pain lances throughout, contorting your body into a tightly clenched ball of pain while tendons melt and bones break, melt, and regrow.  When it finally stops, <b>you look down to behold your new pair of human legs</b>!", false);
        player.lowerBody = LowerBodyType.HUMAN;
        changes++;
    }
    // (Goo -> Normal Human Legs) (copy from elsewhere)
    if (player.isGoo() && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nYour lower body rushes inward, molding into two leg-like shapes that gradually stiffen up.  In moments they solidify into normal-looking legs, complete with regular, human feet.  <b>You now have normal feet!</b>", false);
        player.lowerBody = LowerBodyType.HUMAN;
        changes++;
    }
    // (Naga -> Normal Human Legs) (copy from elsewhere)
    if (player.isNaga() && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nYou collapse as your sinuous snake-tail tears in half, shifting into legs.  The pain is immense, particularly where your new feet are forming.  <b>You have human legs again.</b>", false);
        player.lowerBody = LowerBodyType.HUMAN;
        changes++;
    }
    // Drider butt
    if (type == 1 && player.perks.findByType(PerkLib.SpiderOvipositor) < 0 && player.isDrider() && player.tailType == TailType.SPIDER_ADBOMEN && changes < changeLimit && rand(3) == 0 && (player.hasVagina || rand(2) == 0)) {
        outputText("\n\nAn odd swelling sensation floods your spider half.  Curling your abdomen underneath you for a better look, you gasp in recognition at your new 'equipment'!  Your semi-violent run-ins with the swamp's population have left you <i>intimately</i> familiar with the new appendage.  <b>It's a drider ovipositor!</b>  A few light prods confirm that it's just as sensitive as any of your other sexual organs.  You idly wonder what laying eggs with this thing will feel like...");
        outputText("\n\n(<b>Perk Gained:  Spider Ovipositor - Allows you to lay eggs in your foes!</b>)");
        // V1 - Egg Count
        // V2 - Fertilized Count
        player.perks.create(PerkLib.SpiderOvipositor, 0, 0, 0, 0);
        // Opens up drider ovipositor scenes from available mobs. The character begins producing unfertilized eggs in their arachnid abdomen. Egg buildup raises minimum lust and eventually lowers speed until the player has gotten rid of them.  This perk may only be used with the drider lower body, so your scenes should reflect that.
        // Any PC can get an Ovipositor perk, but it will be much rarer for characters without vaginas.
        // Eggs are unfertilized by default, but can be fertilized:
        // -female/herm characters can fertilize them by taking in semen; successfully passing a pregnancy check will convert one level ofunfertilized eggs to fertilized, even if the PC is already pregnant.
        // -male/herm characters will have a sex dream if they reach stage three of unfertilized eggs; this will represent their bee/drider parts drawing their own semen from their body to fertilize the eggs, and is accompanied by a nocturnal emission.
        // -unsexed characters cannot currently fertilize their eggs.
        // Even while unfertilized, eggs can be deposited inside NPCs - obviously, unfertilized eggs will never hatch and cannot lead to any egg-birth scenes that may be written later.
        changes++;
    }
    // (Normal Biped Legs -> Carapace-Clad Legs)
    if (((type == 1 && player.lowerBody != LowerBodyType.DRIDER_LOWER_BODY && player.lowerBody != LowerBodyType.CHITINOUS_SPIDER_LEGS) || (type != 1 && player.lowerBody != LowerBodyType.CHITINOUS_SPIDER_LEGS)) && (!player.isGoo() && !player.isNaga() && !player.isTaur()) && changes < changeLimit && rand(4) == 0) {
        outputText("\n\nStarting at your " + feet(player) + ", a tingle runs up your " + legs(player) + ", not stopping until it reaches your thighs.  From the waist down, your strength completely deserts you, leaving you to fall hard on your " + buttDescription(player) + " in the dirt.  With nothing else to do, you look down, only to be mesmerized by the sight of black exoskeleton creeping up a perfectly human-looking calf.  It crests up your knee to envelop the joint in a many-faceted onyx coating.  Then, it resumes its slow upward crawl, not stopping until it has girded your thighs in glittery, midnight exoskeleton.  From a distance it would look almost like a black, thigh-high boot, but you know the truth.  <b>You now have human-like legs covered in a black, arachnid exoskeleton.</b>", false);
        player.lowerBody = LowerBodyType.CHITINOUS_SPIDER_LEGS;
        changes++;
    }
    // (Tail becomes spider abdomen GRANT WEB ATTACK)
    if (player.tailType != TailType.SPIDER_ADBOMEN && (player.lowerBody == LowerBodyType.CHITINOUS_SPIDER_LEGS || player.lowerBody == LowerBodyType.DRIDER_LOWER_BODY) && player.armType == ArmType.SPIDER && rand(4) == 0) {
        outputText("\n\n", false);
        // (Pre-existing tails)
        if (player.tailType > TailType.NONE)
            outputText("Your tail shudders as heat races through it, twitching violently until it feels almost as if it's on fire.  You jump from the pain at your " + buttDescription(player) + " and grab at it with your hands.  It's huge... and you can feel it hardening under your touches, firming up until the whole tail has become rock-hard and spherical in shape.  The heat fades, leaving behind a gentle warmth, and you realize your tail has become a spider's abdomen!  With one experimental clench, you even discover that it can shoot webs from some of its spinnerets, both sticky and non-adhesive ones.  That may prove useful.  <b>You now have a spider's abdomen hanging from above your " + buttDescription(player) + "!</b>\n\n", false);
        // (No tail)
        else
            outputText("A burst of pain hits you just above your " + buttDescription(player) + ", coupled with a sensation of burning heat and pressure.  You can feel your " + skinFurScales(player) + " tearing as something forces its way out of your body.  Reaching back, you grab at it with your hands.  It's huge... and you can feel it hardening under your touches, firming up until the whole tail has become rock-hard and spherical in shape.  The heat fades, leaving behind a gentle warmth, and you realize your tail has become a spider's abdomen!  With one experimental clench, you even discover that it can shoot webs from some of its spinnerets, both sticky and non-adhesive ones.  That may prove useful.  <b>You now have a spider's abdomen hanging from above your " + buttDescription(player) + "!</b>", false);
        player.tailType = TailType.SPIDER_ADBOMEN;
        player.tailVenom = 5;
        player.tailRecharge = 5;
        changes++;
    }
    // (Drider Item Only: Carapace-Clad Legs to Drider Legs)
    if (type == 1 && player.lowerBody == LowerBodyType.CHITINOUS_SPIDER_LEGS && rand(4) == 0 && player.tailType == TailType.SPIDER_ADBOMEN) {
        outputText("\n\nJust like when your legs changed to those of a spider-morph, you find yourself suddenly paralyzed below the waist.  Your dark, reflective legs splay out and drop you flat on your back.   Before you can sit up, you feel tiny feelers of pain mixed with warmth and tingling running through them.  Terrified at the thought of all the horrible changes that could be wracking your body, you slowly sit up, expecting to find yourself turned into some incomprehensible monstrosity from the waist down.  As if to confirm your suspicions, the first thing you see is that your legs have transformed into eight long, spindly legs.  Instead of joining directly with your hips, they now connect with the spider-like body that has sprouted in place of where your legs would normally start.  Your abdomen has gotten even larger as well.  Once the strength returns to your new, eight-legged lower body, you struggle up onto your pointed 'feet', and wobble around, trying to get your balance.  As you experiment with your new form, you find you're even able to twist the spider half of your body down between your legs in an emulation of your old, bipedal stance.  That might prove useful should you ever want to engage in 'normal' sexual positions, particularly since your " + buttDescription(player) + " is still positioned just above the start of your arachnid half.  <b>You're now a drider.</b>", false);
        player.lowerBody = LowerBodyType.DRIDER_LOWER_BODY;
        changes++;
    }
    if (rand(4) == 0 && player.gills && changes < changeLimit) {
        outputText("\n\nYour chest itches, and as you reach up to scratch it, you realize your gills have withdrawn into your skin.", false);
        player.gills = false;
        changes++;
    }
    if (changes == 0) {
        outputText("\n\nThe sweet silk energizes you, leaving you feeling refreshed.", false);
        fatigue(-33);
    }
}
