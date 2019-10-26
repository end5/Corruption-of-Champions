// [Armor]:
export function takeGooArmor(): void {
    clearOutput();
    outputText("You approach the armor rack.  A suit of heavy plated armor sits upon it, overlaying a flexible chain vest.  Contrasting against the rotting room, the armor seems to be in pristine condition, even shining.  Perhaps someone uses this heavy equipment - but surely not a harpy? You suppose you could take it.");
    // (Display Options: [Take Armor] [Back])
    simpleChoices("Take Armor", takeGooArmor4Realz, "", null, "", null, "", null, "Back", playerMenu);
    // (Back takes you back to Room 1 menu)
}

// [Armor] -> [Take]:
export function takeGooArmor4Realz(): void {
    clearOutput();
    spriteSelect(79);
    outputText("You reach out to grab the armor, but as soon as your finger brushes the shiny surface, a human-like face appears in the helm!  You recoil as a daintily feminine and bright blue face takes shape out of nowhere, staring at you with eyes afire with rage.  More of the gooey substance that makes up the girl's face fills out the armor, yanking it off the racks on feet made of goop.");
    outputText("\n\nQuietly, the armored goo-girl growls, \"<i>You dare to disturb my rest, mortal? Prepare yourself for my vengeance!</i>\"");
    outputText("\n\nWhat the fuck!? Oh well, looks like she wants a fight!");
    startCombat(new GooArmor());
}

export function gooArmorAI(): void {
    spriteSelect(79);
    if (rand(2) == 0 && player.effects.findByType(StatusAffects.GooArmorSilence) < 0) gooSilenceAttack();
    else if (rand(3) > 0) gooArmorAttackPhysical();
    else gooArmorAttackTwoGooConsume();
}
// ATTACK ONE: Greatsword
export function gooArmorAttackPhysical(): void {
    if (combatMiss()) {
        outputText("The goo-armor rushes forward and swings her sword in a mighty arc, but you dodge it!");
    }
    else if (combatEvade()) {
        outputText("The goo-armor rushes forward and swings her sword in a mighty arc, but you evade the attack!");
    }
    else if (combatFlexibility()) {
        outputText("The goo-armor swings a greatsword at you in a mighty arc, but your cat-like flexibility makes it easy to twist out of the way.");
    }
    else if (combatMisdirect()) {
        outputText("The goo-armor swings a sword at you in a mighty arc, but your training with Raphael allows you to misdirect her into a miss!");
    }
    // HIT!
    else {
        outputText("The goo-armor rushes forward and swings her sword in a mighty arc.  You aren't quite quick enough to dodge her blow, and the goopy sword slams into you, throwing you back and leaving a nasty welt.");
        let damage: number = Math.round((monster.str + monster.weaponAttack) - rand(player.tou) - player.armorDef);
        if (damage <= 0) damage = 1;
        damage = takeDamage(damage);
        outputText(" (" + damage + ")");
    }
    combatRoundOver();
}
// ATTACK TWO: Goo Consume
export function gooArmorAttackTwoGooConsume(): void {
    outputText("Suddenly, the goo-girl leaks half-way out of her heavy armor and lunges at you.  You attempt to dodge her attack, but she doesn't try and hit you - instead, she wraps around you, pinning your arms to your chest.  More and more goo latches onto you - you'll have to fight to get out of this.");
    player.effects.create(StatusAffects.GooArmorBind, 0, 0, 0, 0);
    combatRoundOver();
}
// (Struggle)
export function struggleAtGooBind(): void {
    clearOutput();
    // If fail:
    if (rand(10) > 0 && player.str / 5 + rand(20) < 23) {
        outputText("You try and get out of the goo's grasp, but every bit of goop you pull off you seems to be replaced by twice as much!");
        // (If fail 5 times, go to defeat scene)
        player.effects.addValue(StatusAffects.GooArmorBind, 1, 1);
        if (player.effects.getValue1Of(StatusAffects.GooArmorBind) >= 5) {
            if (monster.effects.findByType(StatusAffects.Spar) >= 0) valeria.pcWinsValeriaSparDefeat();
            else gooArmorBeatsUpPC();
            return;
        }
    }
    // If succeed:
    else {
        outputText("You finally pull the goop off of you and dive out of her reach before the goo-girl can re-attach herself to you.  Pouting, she refills her suit of armor and reassumes her fighting stance.");
        player.effects.remove(StatusAffects.GooArmorBind);
    }
    combatRoundOver();
}
// ATTACK THREE: Goo Silence
export function gooSilenceAttack(): void {
    outputText("The goo pulls a hand off her greatsword and shoots her left wrist out towards you.  You recoil as a bit of goop slaps onto your mouth, preventing you from speaking - looks like you're silenced until you can pull it off!");
    // (No spells until PC passes a moderate STR check or burns it away)
    player.effects.create(StatusAffects.GooArmorSilence, 0, 0, 0, 0);
    combatRoundOver();
}

// Goo Armor -- PC Defeated (PC has Gender)
export function gooArmorBeatsUpPC(): void {
    spriteSelect(79);
    outputText("\n\nYou collapse, unable to resist the goo-armor's onslaught.  Laughing, she slithers out from underneath her armor, completely encasing you before you can do anything more than scream.  Laughing maniacally, the goo looms over you, hands on her hips.  \"<i>Tsk, tsk, tsk.  Not so eager to steal my armor now, are you?  Well... what am I to do with you, hmm?</i>\"  You struggle, but wrapped snugly in her goo, you can do little more than wiggle your hips and chest, accidentally moving yourself seductively.");
    outputText("\n\nAs you realize your mistake, a little smile spreads on her face.  \"<i>Ah, I know... I haven't had my precious fluids in so very long...</i>\"");
    // (PC has Vagina)
    if (player.vaginas.length > 0) {
        outputText("\n\nShe begins to use her goo to peel back your [armor], soon revealing your defenseless [vagina], and makes a show of licking her lips as tendrils of goo seep into your cunt, filling you utterly.  You writhe and struggle against your gooey bonds, but your efforts are futile.  The goo-girl inside the armor only shakes her head at you, and withdraws herself from your [vagina].");
        outputText("\n\nYou have only a moment to figure out what's coming before her goo -- now perfectly shaped like the inside of your cunt -- slams back into you like a stiff cock. You can't help yourself as a moan escapes your lips, barely audible through the goop covering your mouth.");
        outputText("\n\n\"<i>Oh, you like that do you?</i>\" the armor-goo asks, smiling evilly.  \"<i>Well, maybe this can be mutually... beneficial.</i>\"  Still grinning, she begins to hammer her cock-like appendage into your pussy, fucking you fast and hard with her goo-dildo.");
        player.cuntChange(25, true, true, false);
        // [If PC has breasts > A-cups:
        if (player.breasts.biggestTitSize() > 1) {
            outputText("  As she hammers your cunny, bits of her goo swirl around your [chest], squeezing and massaging your tits.  You squirm as she roughly teases your boobs, pinching at your nipples and squeezing your tender flesh roughly.");
            // [if PC is lactating: \"<i>
            if (player.lactationQ() > 0) outputText("  To her delight, a spray of warm milk jets out of your sore nipples, milky white mixing into blue goo like oil in water. \"<i>Mmm, tasty!</i>\" she teases, massaging more and more from you.</i>\"");
        }
        outputText("\n\nShe continues to pound your cunt mercilessly, her grin spreading to inhuman width as your juices begin to flow around and into her gooey penetration.  She soaks your fem-lube up greedily, enjoying the meal, but her fucking is relentless until you feel orgasm approaching.  \"<i>Aw, ");
        // [if height is less than 6':
        if (player.tallness < 70) outputText("little");
        else outputText("big");
        outputText(" girl ready to cum?  Well, go on then. Feed me!</i>\"");

        outputText("\n\nYou erupt, femspunk gushing out of your [vagina] and into the goo-cock.  Laughing, the goo-girl absorbs your cum, growing larger and larger as you feed her, until she towers over you, her massive cock now wide enough to painfully stretch your walls.  \"<i>Oh, that's good.  Good, girl, good.  Yes, let it all out, just like that... just like that,</i>\" she coos, soaking your juices up until your orgasm finally passes.  Sated, she withdraws from inside you, leaving a decidedly empty feeling in your gut as she allows you to stand.");

        outputText("\n\n\"<i>Mmm, that was fun,</i>\" the goo-girl says, patting her full belly.  You can see a bit of your cum ");
        if (player.breasts.biggestTitSize() > 1 && player.lactationQ() > 0) outputText("and milk ");
        outputText("swirling around inside her.  \"<i>Well, I suppose since you fed me so well, I'll let you go.  This time! See you around, tasty!</i>\"");

        outputText("\n\nBefore you can recover enough to say a word, the goo-girl saunters off out the door.  To your surprise, you feel rather invigorated after the battle, and rolling your shoulders, you turn your attention back to the dungeon ahead.");
    }
    // (PC has Dick)
    else if (player.cocks.length > 0) {
        outputText("She begins to use her goo to peel back your armor, soon revealing your defenseless, half-erect cock");
        if (player.cocks.length > 1) outputText("s");
        outputText(".  She makes a show of licking her lips as tendrils of goo wrap tightly around [eachCock] like a warm, wet onahole. You writhe and struggle against your gooey bonds, but your efforts are futile.  The goo-girl inside the armor only shakes her head at you, and squeezes [eachCock] tighter.");
        outputText("\n\nYou gasp with pleasure as she starts to stroke your " + multiCockDescriptLight(player) + ", jerking you off as she looms over you, grinning wickedly.  \"<i>Oh, you like that do you?</i>\" the armor-goo asks.  \"<i>Well, maybe this can be mutually... beneficial.</i>\"  She starts to increase her tempo, making you squirm and writhe as she wanks your " + multiCockDescriptLight(player) + ", licking her lips as little bubbles of pre-cum form.  Helpless, you can only submit and try to enjoy yourself as the armored goo-girl continues to milk you.");
        outputText("\n\nShe continues to jerk you off mercilessly, her grin spreading to inhuman width as your pre begins to flow around and into her gooey 'hands'.  She soaks you up greedily, enjoying the meal, but her fucking is relentless until you feel orgasm approaching.  \"<i>Aw, ");
        if (player.tallness < 70) outputText("little");
        else outputText("big");
        outputText(" " + mf(player, "boy", "girl") + " ready to cum? Well, go on then. Feed me!</i>\"");

        outputText("\n\nYou climax, ropes of thick, white jizz shooting out of [eachCock] and into the goo's waiting body.  Laughing, the goo-girl absorbs your cum, growing larger and larger as you feed her until she towers over you, her expanding breasts and belly now hanging over you. \"<i>Oh, that's good. Good, " + mf(player, "boy", "girl") + ", good.  Yes, let it all out, just like that... Just like that,</i>\" she coos, soaking your cum up until your orgasm finally passes.  Sated, she withdraws from around you, leaving your " + multiCockDescriptLight(player) + " decidedly empty and sore.");

        outputText("\n\n\"<i>Mmm, that was fun,</i>\" the goo-girl says, patting her full belly.  You can see a bit of your cum swirling around inside her.  \"<i>Well, I suppose since you fed me so well, I'll let you go.  This time!  See you around, tasty!</i>\"");

        outputText("\n\nBefore you can recover enough to say a word, the goo-girl saunters off out the door.  To your surprise, you feel rather invigorated after the battle, and rolling your shoulders, you turn your attention back to the dungeon ahead.");
    }
    // Genderless
    else {
        outputText("You collapse, unable to resist the goo-armor's onslaught.  Laughing, goo slithers out from the bottom of her armor, completely encasing you before you can do anything more than scream.  Laughing maniacally, the goo looms over you, hands on her hips.  \"<i>Tsk, tsk, tsk.  Not so eager to steal my armor now, are you?  Well... what am I to do with you, hmm?</i>\"  You struggle, but wrapped snugly in her goo, you can do little more than wiggle your hips and chest, accidentally moving yourself seductively.");

        outputText("\n\nAs you realize your mistake, a little smile spreads on your face.  \"<i>Ah, I know... I haven't had my precious fluids in so very long...</i>\" She begins to use her goo to peel back your armor, but stops with a look of horror as she reveals you bare, empty crotch.");

        outputText("\n\n\"<i>What. Just... WHAT. How do you... " + mf(player, "Dude", "Babe") + ", how do you PEE!?</i>\"");

        outputText("\n\nYou struggle weakly, unable to respond.");

        outputText("\n\n\"<i>Oh... fuck it. Just... whatever. Go away, you freak.</i>\"");

        outputText("\n\nThe goo-girl shrugs and saunters out the front door.");

        outputText("\n\nSore, you pick yourself up off the floor and wipe a bit of gooey residue off your gear.  To your surprise, you feel rather invigorated after the battle, and rolling your shoulders, you turn your attention back to the dungeon ahead.");
    }
    // (PC regains HP)
    HPChange(1000, false);
    player.orgasm();
    dynStats("lib", 1, "sen", 3);
    cleanupAfterCombat();
    doNext(playerMenu);
    flags[kFLAGS.LOST_GOO_ARMOR_FIGHT] = 1;
}

// Goo Armor -- PC is Victorious (Intro)
export function beatUpGooArmor(): void {
    spriteSelect(79);
    clearOutput();
    outputText("Succumbing to your ");
    if (monster.lust > 99) outputText("erotic abilities");
    else outputText("skill in battle");
    outputText(", the armored goo slumps backwards against the wall, unable to stand.  You loom over her, grinning as you contemplate what to do with your helpless opponent.");

    outputText("\n\n\"<i>Hey... hey wait!</i>\" the goo gasps, waving a hand emphatically to ward you off.  \"<i>It... it doesn't have to be like this.  I think... Hey, yeah, I think we can come to an understanding.  You're a reasonable sort, right? No need to get violent...</i>\"");

    outputText("\n\nYou scowl at the armor-goo, but allow her to speak.");

    outputText("\n\n\"<i>Eheh. Uh, I was only playing, see? Just hungry, is all.  Don't get many folks up hereabouts, except the damn harpies, who don't bother me much.  Uh, so, what do you say we cut a deal, huh?</i>\"  You raise an eyebrow at her.  \"<i>You just kicked my ass royally.  That's damn impressive, considering I used to be pretty hot stuff with a sword back in the day.  Now that I'm, uh, less solid than I was... Well, I'm just not cut out to be an adventurer on my own anymore.  You proved that all right.</i>\"");

    outputText("\n\n\"<i>So what do you say... I come with you? Hmm? How about it?  You can fit right inside me and this old lug,</i>\" she raps her gooey knuckles silently on her shiney breastplate.  She scowls; her fist's lack of solidity seems to perturb her greatly.  \"<i>Seriously, though.  You can wear me just like any other armor - damn good armor at that!  And, if you're feeling antsy on your - our - adventures, then maybe I can help you out with that, too?</i>\"");

    outputText("\n\nWell, that's certainly an interesting offer. Do you take the goo-girl armor with you?");
    // (Display Options: [Take Her] [Refuse Her])
    simpleChoices("Take Her", takeGooArmorAndWearIt, "Refuse Her", refuseGooArmorOffer, "", null, "", null, "", null);
    flags[kFLAGS.WON_GOO_ARMOR_FIGHT] = 1;
}
// [Refuse Her]
export function refuseGooArmorOffer(): void {
    spriteSelect(79);
    clearOutput();
    outputText("You tell her to fuck off -- you don't need armor that might try to kill or rape you at night.");
    outputText("\n\nShe huffs indignantly and scrambles to her feet.  \"<i>Well fine, and fuck you anyway.  I hope you get raped by harpies, " + mf(player, "sir", "madam") + ".</i>\"  After a moment, she hesitantly adds, \"<i>But if you change your mind later... Well, we'll see if you live through this place without me!</i>\"  Before you can stop her, she ducks out the front door and off to... Wherever goo-armor-girl-things would go, you guess.  Still, to your surprise, you feel rather invigorated after the battle, and rolling your shoulders, you turn your attention back to the dungeon ahead.");
    HPChange(1000, false);
    cleanupAfterCombat();
    doNext(playerMenu);
}
// [Take Her]
export function takeGooArmorAndWearIt(): void {
    spriteSelect(79);
    clearOutput();
    outputText("You mull the proposition over for a few moments and then agree. Why the hell not.");
    outputText("\n\nWith an ecstatic smile, the goo-armor jumps to her feet and throws her arms around your shoulders.  \"<i>Oh, this is going to be so much fun!  Thank you thank you thank you!  I promise I'll keep you nice and snug and safe, don't you worry.  Oooh, a real adventure again!  WHEEE!</i>\"");
    outputText("\n\nBefore she can get too excited, you remind the goo that she's supposed to be your armor right about now.  Clasping her hands over her mouth in embarrassment, she utters a muted apology and urges you to just \"<i>put me on!</i>\"  Awkwardly, you strip out of your [armor] and open up the platemail armor and clamber in.  It's wet and squishy, making you shudder and squirm as you squash your new friend flat against the metal armor.");
    outputText("\n\nEventually, the two of you get situated. The goo-girl slips around your body inside the heavy armor, maneuvering so that your face is unobstructed and your joints, not protected by the armor, are soundly clad in squishy goo.  She even forms a gooey beaver on your new helm, allowing you to open and close her like a visor in battle.  Eventually, her goo settles around your ");
    if (player.vaginas.length > 0) outputText("[vagina]");
    if (player.vaginas.length > 0 && player.cocks.length > 0) outputText(" and ");
    if (player.cocks.length > 0) outputText(multiCockDescriptLight(player));
    if (player.gender == 0) outputText("groin");
    outputText(", encasing your loins in case you need a little mid-battle release, she says.");

    outputText("\n\nAfter a few minutes, you and your armor-friend are settled and ready to go.  As you ready yourself for the dungeon ahead, the goo giggles into your ear.  \"<i>Oh shit, silly me.  I forgot, my name's Valeria.  Ser Valeria, if you're feeling fancy.</i>\"  You introduce yourself, awkwardly shaking your own hand by way of pleasantries.");

    outputText("\n\n\"<i>Well, alright then, [name]!</i>\" Valeria says excitedly, \"<i>Let's go!</i>\"");

    // (\"<i>You gained ValeriaArmor!</i>\")
    cleanupAfterCombat();
    // (\"<i>You put a (previous armorName) in your X pouch)
    outputText("\n\nTo your surprise, you feel rather invigorated after the battle, thanks to Valeria's strange healing properties, and with a smirk, you turn your attention back to the dungeon ahead.\n\n");
    // (PC regains HP)
    inventory.takeItem(player.setArmor(armors.GOOARMR), playerMenu);
    // armors.GOOARMR.equip(player,true,false);
    flags[kFLAGS.MET_VALERIA] = 1;
    HPChange(1000, false);
    flags[kFLAGS.TOOK_GOO_ARMOR] = 1;
}

// [Valeria]
export function talkToValeria(): void {
    clearOutput();
    outputText("Now that you have a few moments to catch your breath, you ask your goo-armor what she thinks about the situation.");
    outputText("\n\n\"<i>Oh, hi,</i>\" she laughs.  She pours half-way out of your armor, forming her face a few inches from yours.  Kiri leaps in shock, wide-eyed as your armor becomes a new person before you.");
    outputText("\n\n\"<i>Well hey there, cutie,</i>\" Valeria says, giving Kiri a little wink.  The harpy shudders slightly and shakes the surprise off.");
    outputText("\n\nYou clear your throat and repeat your question.");
    // [If Broodmother hasn't been defeated]
    if (flags[kFLAGS.HEL_HARPY_QUEEN_DEFEATED] == 0) outputText("\n\n\"<i>Oh, right. Well, that harpy broodmother is serious business. She's a powerful mage, and a heavy-hitter besides.  Careful with her, or you're liable to end up drugged out of your mind and used as breeding stock 'til you die.  I've seen it happen to other adventurers coming through.</i>\"");
    // [If Jailer hasn't been defeated]
    if (flags[kFLAGS.HEL_BRIGID_DEFEATED] == 0) outputText("\n\n\"<i>Brigid the Jailer is a big girl, probably the meanest harpy here. The others give her plenty of space, from what I've seen.  She uses a hot poker as her weapon, too.  Watch out unless you wanna get burned!</i>\"");
    // [If phoenixes haven't been defeated]
    if (flags[kFLAGS.HEL_PHOENIXES_DEFEATED] == 0) outputText("\n\n\"<i>There's some freaky-ass half-breed harpy things upstairs that I've seen around a bit.  Phoenixes, I guess they're called.  They breathe fire, so watch your ass.  I can absorb some of the heat, but... Don't get roasted, okay?</i>\"");
    doNext(playerMenu);
}
