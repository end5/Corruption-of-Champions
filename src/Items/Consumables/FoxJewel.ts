// Inventory Description:
// 9999A shining teardrop-shaped jewel.  An eerie blue flame dances beneath the surface.
// Fox Jewel (Magatama)
// Consume:
export function foxJewel(mystic: boolean, player: Player): void {
    clearOutput();
    let changes: number = 0;
    let changeLimit: number = 1;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(3) == 0)
        changeLimit++;
    if (mystic)
        changeLimit += 2;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    if (mystic)
        outputText("You examine the jewel for a bit, rolling it around in your hand as you ponder its mysteries.  You hold it up to the light with fascinated curiosity, watching the eerie purple flame dancing within.  Without warning, the gem splits down the center, dissolving into nothing in your hand.  As the pale lavender flames swirl around you, the air is filled with a sickly sweet scent that drips with the bitter aroma of licorice, filling you with a dire warmth.");
    else
        outputText("You examine the jewel for a bit, rolling it around in your hand as you ponder its mysteries.  You hold it up to the light with fascinated curiosity, watching the eerie blue flame dancing within.  Without warning, the gem splits down the center, dissolving into nothing in your hand.  As the pale azure flames swirl around you, the air is filled with a sweet scent that drips with the aroma of wintergreen, sending chills down your spine.");
    // **********************
    // BASIC STATS
    // **********************
    // [increase Intelligence, Libido and Sensitivity]
    if (player.inte < 100 && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(4) == 0))) {
        outputText("\n\nYou close your eyes, smirking to yourself mischievously as you suddenly think of several new tricks to try on your opponents; you feel quite a bit more cunning.  The mental image of them helpless before your cleverness makes you shudder a bit, and you lick your lips and stroke yourself as you feel your skin tingling from an involuntary arousal.");
        // Raise INT, Lib, Sens. and +10 LUST
        dynStats("int", 2, "lib", 1, "sen", 2, "lus", 10);
        changes++;
    }
    // [decrease Strength toward 15]
    if (player.str > 15 && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0))) {
        outputText("\n\nYou can feel your muscles softening as they slowly relax, becoming a tad weaker than before.  Who needs physical strength when you can outwit your foes with trickery and mischief?  You tilt your head a bit, wondering where that thought came from.");
        dynStats("str", -1);
        if (player.str > 70)
            dynStats("str", -1);
        if (player.str > 50)
            dynStats("str", -1);
        if (player.str > 30)
            dynStats("str", -1);
        changes++;
    }
    // [decrease Toughness toward 20]
    if (player.tou > 20 && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0))) {
        // from 66 or less toughness
        if (player.tou <= 66)
            outputText("\n\nYou feel your " + skinFurScales(player) + " becoming noticeably softer.  A gentle exploratory pinch on your arm confirms it - your " + skinFurScales(player) + " won't offer you much protection.");
        // from 66 or greater toughness
        else
            outputText("\n\nYou feel your " + skinFurScales(player) + " becoming noticeably softer.  A gentle exploratory pinch on your arm confirms it - your hide isn't quite as tough as it used to be.");
        dynStats("tou", -1);
        if (player.tou > 66)
            dynStats("tou", -1);
        changes++;
    }
    if (mystic && changes < changeLimit && rand(2) == 0 && player.cor < 100) {
        if (player.cor < 33)
            outputText("\n\nA sense of dirtiness comes over you, like the magic of this gem is doing some perverse impropriety to you.");
        else if (player.cor < 66)
            outputText("\n\nA tingling wave of sensation rolls through you, but you have no idea what exactly just changed.  It must not have been that important.");
        else
            outputText("\n\nThoughts of mischief roll across your consciousness, unbounded by your conscience or any concern for others.  You should really have some fun - who cares who it hurts, right?");
        dynStats("cor", 1);
    }
    // **********************
    // MEDIUM/SEXUAL CHANGES
    // **********************
    // [adjust Femininity toward 50]
    // from low to high
    // Your facial features soften as your body becomes more androgynous.
    // from high to low
    // Your facial features harden as your body becomes more androgynous.
    if (((mystic && rand(2) == 0) || (!mystic && rand(4) == 0)) && changes < changeLimit && player.femininity != 50) {
        outputText(modFem(player, 50, 2), false);
        changes++;
    }
    // [decrease muscle tone toward 40]
    if (player.tone >= 40 && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(4) == 0))) {
        outputText("\n\nMoving brings with it a little more jiggle than you're used to.  You don't seem to have gained weight, but your muscles seem less visible, and various parts of you are pleasantly softer.");
        player.tone -= 2 + rand(3);
        changes++;
    }
    // [Adjust hips toward 10 – wide/curvy/flared]
    // from narrow to wide
    if (player.hipRating < 10 && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0)) && changes < changeLimit) {
        player.hipRating++;
        if (player.hipRating < 7)
            player.hipRating++;
        if (player.hipRating < 4)
            player.hipRating++;
        outputText("\n\nYou stumble a bit as the bones in your pelvis rearrange themselves painfully.  Your hips have widened nicely!");
        changes++;
    }
    // from wide to narrower
    if (player.hipRating > 10 && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0)) && changes < changeLimit) {
        player.hipRating--;
        if (player.hipRating > 14)
            player.hipRating--;
        if (player.hipRating > 19)
            player.hipRating--;
        if (player.hipRating > 24)
            player.hipRating--;
        outputText("\n\nYou stumble a bit as the bones in your pelvis rearrange themselves painfully.  Your hips have narrowed.");
        changes++;
    }
    // [Adjust hair length toward range of 16-26 – very long to ass-length]
    if ((player.hairLength < 16 || player.hairLength > 26) && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0)) && changes < changeLimit) {
        // from short to long
        if (player.hairLength < 16) {
            player.hairLength += 3 + rand(3);
            outputText("\n\nYou experience a tingling sensation in your scalp.  Feeling a bit off-balance, you discover your hair has lengthened, becoming " + hairDescription(player) + ".");
        }
        // from long to short
        else {
            player.hairLength -= 3 + rand(3);
            outputText("\n\nYou experience a tingling sensation in your scalp.  Feeling a bit off-balance, you discover your hair has shed a bit of its length, becoming " + hairDescription(player) + ".");
        }
        changes++;
    }
    // [Increase Vaginal Capacity] - requires vagina, of course
    if (player.vaginas.length > 0 && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0)) && player.effects.getValue1Of(StatusAffects.BonusVCapacity) < 200 && changes < changeLimit) {
        outputText("\n\nA gurgling sound issues from your abdomen, and you double over as a trembling ripple passes through your womb.  The flesh of your stomach roils as your internal organs begin to shift, and when the sensation finally passes, you are instinctively aware that your " + vaginaDescript(player, 0) + " is a bit deeper than it was before.");
        if (player.effects.findByType(StatusAffects.BonusVCapacity) < 0) {
            player.effects.create(StatusAffects.BonusVCapacity, 0, 0, 0, 0);
        }
        player.effects.addValue(StatusAffects.BonusVCapacity, 1, 5 + rand(10));
        changes++;
    }
    // [Vag of Holding] - rare effect, only if PC has high vaginal looseness
    else if (player.vaginas.length > 0 && ((mystic) || (!mystic && rand(5) == 0)) && player.effects.getValue1Of(StatusAffects.BonusVCapacity) >= 200 && player.effects.getValue1Of(StatusAffects.BonusVCapacity) < 8000 && changes < changeLimit) {
        outputText("\n\nYou clutch your stomach with both hands, dropping to the ground in pain as your internal organs begin to twist and shift violently inside you.  As you clench your eyes shut in agony, you are overcome with a sudden calm.  The pain in your abdomen subsides, and you feel at one with the unfathomable infinity of the universe, warmth radiating through you from the vast swirling cosmos contained within your womb.");
        if (silly())
            outputText("  <b>Your vagina has become a universe unto itself, capable of accepting colossal insertions beyond the scope of human comprehension!</b>");
        else
            outputText("  <b>Your vagina is now capable of accepting even the most ludicrously sized insertions with no ill effects.</b>");
        player.effects.setValue(StatusAffects.BonusVCapacity, 1, 8000);
        changes++;
    }
    // **********************
    // BIG APPEARANCE CHANGES
    // **********************
    // [Grow Fox Tail]
    if (player.tailType != TAIL_TYPE_FOX && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(4) == 0))) {
        // if PC has no tail
        if (player.tailType == TAIL_TYPE_NONE) {
            outputText("\n\nA pressure builds on your backside.  You feel under your " + player.armorName + " and discover a strange nodule growing there that seems to be getting larger by the second.  With a sudden flourish of movement, it bursts out into a long and bushy tail that sways hypnotically, as if it has a mind of its own.  <b>You now have a fox-tail.</b>");
        }
        // if PC has another type of tail
        else if (player.tailType != TAIL_TYPE_FOX) {
            outputText("\n\nPain lances through your lower back as your tail shifts and twitches violently.  With one final aberrant twitch, it fluffs out into a long, bushy fox tail that whips around in an almost hypnotic fashion.  <b>You now have a fox-tail.</b>");
        }
        player.tailType = TAIL_TYPE_FOX;
        player.tailVenom = 1;
        changes++;
    }
    if (!mystic && player.earType == EARS_FOX && player.tailType == TAIL_TYPE_FOX && player.tailVenom == 8 && rand(3) == 0) {
        outputText("\n\nYou have the feeling that if you could grow a ninth tail you would be much more powerful, but you would need to find a way to enhance one of these gems or meditate with one to have a chance at unlocking your full potential.");
    }
    // [Grow Addtl. Fox Tail]
    // (rare effect, up to max of 8 tails, requires PC level and int*10 = number of tail to be added)
    else if (player.tailType == TAIL_TYPE_FOX && player.tailVenom < 8 && player.tailVenom + 1 <= player.level && player.tailVenom + 1 <= player.inte / 10 && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0))) {
        // if PC has 1 fox tail
        if (player.tailVenom == 1) {
            outputText("\n\nA tingling pressure builds on your backside, and your bushy tail begins to glow with an eerie, ghostly light.  With a crackle of electrical energy, your tail splits into two!  <b>You now have a pair of fox-tails.</b>");
            // increment tail by 1
        }
        // else if PC has 2 or more fox tails
        else {
            outputText("\n\nA tingling pressure builds on your backside, and your bushy tails begin to glow with an eerie, ghostly light.  With a crackle of electrical energy, one of your tails splits in two, giving you " + num2Text(player.tailVenom + 1) + "!  <b>You now have a cluster of " + num2Text(player.tailVenom + 1) + " fox-tails.</b>");
            // increment tail by 1
        }
        player.tailVenom++;
        changes++;
    }
    // [Grow 9th tail and gain Corrupted Nine-tails perk]
    else if (mystic && rand(4) == 0 && changes < changeLimit && player.tailType == TAIL_TYPE_FOX && player.tailVenom == 8 && player.level >= 9 && player.earType == EARS_FOX && player.inte >= 90 && player.perks.findByType(PerkLib.CorruptedNinetails) < 0 && player.perks.findByType(PerkLib.EnlightenedNinetails) < 0) {
        outputText("Your bushy tails begin to glow with an eerie, ghostly light, and with a crackle of electrical energy, split into nine tails.  <b>You are now a nine-tails!  But something is wrong...  The cosmic power radiating from your body feels...  tainted somehow.  The corruption pouring off your body feels...  good.</b>");
        outputText("\n\nYou have the inexplicable urge to set fire to the world, just to watch it burn.  With your newfound power, it's a goal that is well within reach.");
        outputText("\n\n(Perk Gained: Corrupted Nine-tails - Grants two magical special attacks.)");
        player.perks.create(PerkLib.CorruptedNinetails, 0, 0, 0, 0);
        dynStats("lib", 2, "lus", 10, "cor", 10);
        player.tailVenom = 9;
        changes++;
    }
    // [Grow Fox Ears]
    if (player.tailType == TAIL_TYPE_FOX && ((mystic && rand(2) == 0) || (!mystic && rand(4) == 0)) && player.earType != EARS_FOX && changes < changeLimit) {
        // if PC has non-animal ears
        if (player.earType == EARS_HUMAN)
            outputText("\n\nThe sides of your face painfully stretch as your ears morph and begin to migrate up past your hairline, toward the top of your head.  They elongate, becoming large vulpine triangles covered in bushy fur.  You now have fox ears.");
        // if PC has animal ears
        else
            outputText("\n\nYour ears change shape, shifting from their current shape to become vulpine in nature.  You now have fox ears.");
        player.earType = EARS_FOX;
        changes++;
    }
    // [Change Hair Color: Golden-blonde, SIlver Blonde, White, Black, Red]
    if (((mystic && rand(2) == 0) || (!mystic && rand(4) == 0)) && changes < changeLimit && player.hairColor != "golden blonde" && player.hairColor != "silver blonde" && player.hairColor != "white" && player.hairColor != "black" && player.hairColor != "red") {
        const hairTemp: number = rand(10);
        if (hairTemp == 0)
            player.hairColor = "golden blonde";
        else if (hairTemp == 1)
            player.hairColor = "silver blonde";
        else if (hairTemp <= 3)
            player.hairColor = "white";
        else if (hairTemp <= 6)
            player.hairColor = "black";
        else
            player.hairColor = "red";
        outputText("\n\nYour scalp begins to tingle, and you gently grasp a strand, pulling it forward to check it.  Your hair has become the same " + player.hairColor + " as a kitsune's!");
        changes++;
    }
    // [Change Skin Type: remove fur or scales, change skin to Tan, Olive, or Light]
    if (player.skinType == SKIN_TYPE_FUR || player.skinType == SKIN_TYPE_SCALES && ((mystic) || (!mystic && rand(2) == 0))) {
        outputText("\n\nYou begin to tingle all over your " + skin(player) + ", starting as a cool, pleasant sensation but gradually worsening until you are furiously itching all over.");
        if (player.skinType == SKIN_TYPE_FUR)
            outputText("  You stare in horror as you pull your fingers away holding a handful of " + player.hairColor + " fur!  Your fur sloughs off your body in thick clumps, falling away to reveal patches of bare, " + player.skinTone + " skin.");
        else if (player.skinType == SKIN_TYPE_SCALES)
            outputText("  You stare in horror as you pull your fingers away holding a handful of dried up scales!  Your scales continue to flake and peel off your skin in thick patches, revealing the tender " + player.skinTone + " skin underneath.");
        outputText("  Your skin slowly turns raw and red under your severe scratching, the tingling sensations raising goosebumps across your whole body.  Over time, the itching fades, and your flushed skin resolves into a natural-looking ");
        player.skinType = SKIN_TYPE_PLAIN;
        player.skinAdj = "";
        player.skinDesc = "skin";
        if (!mystic && player.skinTone != "tan" && player.skinTone != "olive" && player.skinTone != "light") {
            const skinTemp: number = rand(3);
            if (skinTemp == 0)
                player.skinTone = "tan";
            else if (skinTemp == 1)
                player.skinTone = "olive";
            else
                player.skinTone = "light";
        }
        else if (mystic && player.skinTone != "dark" && player.skinTone != "ebony" && player.skinTone != "ashen" && player.skinTone != "sable" && player.skinTone != "milky white") {
            const skinT: number = rand(5);
            if (skinT == 0)
                player.skinTone = "dark";
            else if (skinT == 1)
                player.skinTone = "ebony";
            else if (skinT == 2)
                player.skinTone = "ashen";
            else if (skinT == 3)
                player.skinTone = "sable";
            else
                player.skinTone = "milky white";
        }
        outputText(player.skinTone + " complexion.");
        outputText("  <b>You now have " + skin(player) + "!</b>");
        changes++;
    }
    // Change skin tone if not changed you!
    else if (mystic && player.skinTone != "dark" && player.skinTone != "ebony" && player.skinTone != "ashen" && player.skinTone != "sable" && player.skinTone != "milky white" && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0))) {
        outputText("\n\nYou feel a crawling sensation on the surface of your skin, starting at the small of your back and spreading to your extremities, ultimately reaching your face.  Holding an arm up to your face, you discover that <b>you now have ");
        const mtoneTemp: number = rand(5);
        if (mtoneTemp == 0)
            player.skinTone = "dark";
        else if (mtoneTemp == 1)
            player.skinTone = "ebony";
        else if (mtoneTemp == 2)
            player.skinTone = "ashen";
        else if (mtoneTemp == 3)
            player.skinTone = "sable";
        else
            player.skinTone = "milky white";
        outputText(skin(player) + "!</b>");
        changes++;
    }
    // Change skin tone if not changed you!
    else if (!mystic && player.skinTone != "tan" && player.skinTone != "olive" && player.skinTone != "light" && changes < changeLimit && ((mystic && rand(2) == 0) || (!mystic && rand(3) == 0))) {
        outputText("\n\nYou feel a crawling sensation on the surface of your skin, starting at the small of your back and spreading to your extremities, ultimately reaching your face.  Holding an arm up to your face, you discover that <b>you now have ");
        const toneTemp: number = rand(3);
        if (toneTemp == 0)
            player.skinTone = "tan";
        else if (toneTemp == 1)
            player.skinTone = "olive";
        else
            player.skinTone = "light";
        outputText(skin(player) + "!</b>");
        changes++;
    }
    // [Change Skin Color: add "Tattoos"]
    // From Tan, Olive, or Light skin tones
    else if ((mystic && 9999 == 0 && (player.skinTone == "dark" || player.skinTone == "ebony" || player.skinTone == "ashen" || player.skinTone == "sable" || player.skinTone == "milky white")) || (!mystic && 9999 == 0 && (player.skinTone == "tan" || player.skinTone == "olive" || player.skinTone || "light")) && changes < changeLimit) {
        outputText("You feel a crawling sensation on the surface of your skin, starting at the small of your back and spreading to your extremities, ultimately reaching your face.  You are caught by surprise when you are suddenly assaulted by a blinding flash issuing from areas of your skin, and when the spots finally clear from your vision, an assortment of glowing tribal tattoos adorns your " + skin(player) + ".  The glow gradually fades, but the distinctive ");
        if (mystic)
            outputText("angular");
        else
            outputText("curved");
        outputText(" markings remain, as if etched into your skin.");
        changes++;
        // 9999 - pending tats system
    }
    // Nipples Turn Back:
    if (player.effects.findByType(StatusAffects.BlackNipples) >= 0 && changes < changeLimit && rand(3) == 0) {
        outputText("\n\nSomething invisible brushes against your " + nippleDescription(player, 0) + ", making you twitch.  Undoing your clothes, you take a look at your chest and find that your nipples have turned back to their natural flesh colour.");
        changes++;
        player.effects.remove(StatusAffects.BlackNipples);
    }
    // Debugcunt
    if (changes < changeLimit && rand(3) == 0 && player.vaginaType() == 5 && player.vaginas.length > 0) {
        outputText("\n\nSomething invisible brushes against your sex, making you twinge.  Undoing your clothes, you take a look at your vagina and find that it has turned back to its natural flesh colour.");
        player.vaginaType(0);
        changes++;
    }
    if (changes == 0) {
        outputText("\n\nOdd.  You don't feel any different.");
    }
}

/*
 Perk

 Corrupted Nine-tails:
 Description: The mystical energy of the nine-tails surges through you, filling you with phenomenal cosmic power!  Your boundless magic allows you to recover quickly after casting spells, but your method of attaining it has corrupted the transformation, preventing you from achieving true enlightenment.
 Effect: Recover 1-3 Fatigue per Round in combat, 3 per hour out of combat.  Victory sex recovers fatigue equal to 2x the enemy's level.  Also applies Masochist and Sadist perks, if they are not already.
 //Alternatively, add the same effects as Masochist and Sadist but don't allow stacking, this way the effects can be removed if the player loses the corrupted nine-tails perk.
 Requirements: Have fox ears and obtain your 9th tail from the Mystic Jewel item.  Must maintain at least 80 corruption and 80 intelligence, fox ears and 9 tails, or lose the perk.

 Corrupted Fox Fire
 Fatigue Cost: 35
 Deals direct damage and lust regardless of enemy defenses.  Especially effective against non-corrupted targets.
 Cast: outputText( "Holding out your palm, you conjure corrupted purple flame that dances across your fingertips.  You launch it at the " + monster.short + " with a ferocious throw, and it bursts on impact, showering dazzling lavender sparks everywhere." );

 Terror
 Fatigue Cost: 25
 Inflicts fear and reduces enemy SPD.
 Cast: outputText( "The world goes dark, an inky shadow blanketing everything in sight as you fill the " + monster.short + "'s mind with visions of otherworldly terror that defy description."  + ((succeed) ? "They cower in horror as they succumb to your illusion, believing themselves beset by eldritch horrors beyond their wildest nightmares." : "The dark fog recedes as quickly as it rolled in as they push back your illusions, resisting your hypnotic influence.") );

 Seal
 Fatigue Cost: 35
 Seals enemy abilities, preventing them from using their specials.
 Cast: outputText( "You make a series of gestures, chanting in a strange tongue.  " + ((succeed) ? "A symbol made of flames appears on the " + monster.short + "'s body, temporarily preventing them from using any special abilities!" : "A symbol made of flames appears on the " + monster.short + "'s body, but it dissipates as quickly as it was formed, failing to properly seal them." ) );

 Enlightened Nine-tails:
 Description: The mystical energy of the nine-tails surges through you, filling you with phenomenal cosmic power!  Your boundless magic allows you to recover quickly after casting spells.
 Effect: Recover 1-3 Fatigue per Round in combat, 3 per hour out of combat.  Provides a buff to Tease.  Victory sex recovers fatigue equal to 2x the enemy's level.
 Requirements: Have fox ears and obtain your 9th tail from spiritual enlightenment.  Must maintain at least 80 intelligence, fox ears and 9 tails, or lose the perk.

 Fox Fire
 Fatigue Cost: 35
 Deals direct damage and lust regardless of enemy defenses.  Especially effective against corrupted targets.
 Cast: outputText( "Holding out your palm, you conjure an ethereal blue flame that dances across your fingertips.  You launch it at the " + monster.short + " with a ferocious throw, and it bursts on impact, showering dazzling azure sparks everywhere.");

 Illusion
 Fatigue Cost: 25
 Decrease enemy hit chance and increase their susceptibility to lust attacks.
 Cast: outputText( "The world begins to twist and distort around you as reality bends to your will, the " + monster.short + "'s mind blanketed in the thick fog of your illusions." + ((succeed) ? "They stumble humorously to and fro, unable to keep pace with the shifting illusions that cloud their perceptions" : "Like the snapping of a rubber band, reality falls back into its rightful place as they resist your illusory conjurations." ) );

 Seal
 Fatigue Cost: 35
 Seals enemy abilities, preventing them from using their specials.
 Cast: outputText( "You make a series of gestures, chanting in a strange tongue.  " + ((succeed) ? "A symbol made of flames appears on the " + monster.short + "'s body, temporarily preventing them from using any special abilities!" : "A symbol made of flames appears on the " + monster.short + "'s body, but it dissipates as quickly as it was formed, failing to properly seal them." ) );
 Teases

 // Specific to tentacle beasts
 outputText( "You find yourself unable to stifle a flirtatious giggle, waggling your fingers at the tentacle beast and grinning.  You stroll fearlessly up to the writhing abomination and run your hands through its thick, foliage-like coat, your tail" + ((player.tailVenum > 1) ? "s" : "" ) + " curling around its wriggling limbs.  " + ((succeed) ? "The creature's wild thrashing is quelled by confusion and arousal, a few of its limbs running along your face tenderly before you break away.  The beast resumes its savage flailing, but you can tell your touch had an effect on it." : "The creature is unmoved by your tender caresses, swinging a thick limb at you violently.  Thankfully, you are able to break away from it unscathed, but it's obvious that you're going to have to try harder to fluster this beast.") );
 */
