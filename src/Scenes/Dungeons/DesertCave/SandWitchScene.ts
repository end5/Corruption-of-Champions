// Repeat Desert Loss Female & Herm
export function savinMakesAwesomeFemdom(): void {
    clearOutput();
    // (HP)
    if (player.HP < 1) outputText("Unable to further withstand the witch's magical assault, you topple over into the soft, warm sands. Before you can recover, the witch is on top of you, her powerful legs straddling your [hips]. Her long, dainty fingers lock through your [armor], pulling your face out of the sand and rolling you over to look up at her.");
    // (Lust)
    else outputText("Uncontrollable lust surges through you, your heart pounding beneath your [chest] as your [legs] collapse out from under you.  Your hands desperately claw at your [armor], trying to touch your needy cunt, the fire in your genitals burning like whitefire through your veins.  You moan with helpless lust as the witch looms over you, grabbing your hands away from your crotch and pushing you onto your back.  A moment later, she's on you, straddling your [hips] between her lush thighs.");
    outputText("\n\nPinned beneath the witch, you struggle weakly in her grasp as she slowly strips off your [armor], bearing your [chest] to her surprisingly soft, gentle caresses.  ");
    // if Multiboob:
    if (player.breasts.length > 1) {
        outputText("She caresses each of your breasts, cupping each in turn, running her thumb over each nipple");
        if (player.lactationQ() >= 200) outputText(" until milk streams down your chest, much to her delight");
        outputText(".");
    }
    else if (player.lactationQ() >= 200) outputText("Her fingers deftly work across your [nipples], caressing out a trickle of milk, which she laps up with a long, languid motion that electrifies your sun-kissed skin.");
    else outputText("She tweaks your [nipples] between her dexterous fingers, sending shivers of pleasure up your spine, but seems oddly discontent...  \"<i>No milk for me? We'll have to do something about that...</i>\"");
    outputText("  Slowly, she works her way down from your [chest] to your belly, peeling off your [armor] as she goes to reveal more and more of your " + skinFurScales(player) + ", never neglecting to run her hands all across you, stroking and kissing along every exposed inch until she comes to your groin.  Instinctively, you writhe in her grip as she tosses the last of you [armor] aside, leaving you wholly bare between her legs.");

    // If PC has a cock:
    if (player.cocks.length > 0) {
        outputText("\n\n[EachCock] sits half-erect, lying against your belly.  With a grin, the cum witch opens her robes, letting them hang on her shoulders to reveal her own endowments.  Her cock, a huge, throbbing pole of meat flops down atop yours, ");
        if (player.cocks.longestCockLength() < 10) outputText("overshadowing your comparatively tiny little rod");
        else if (player.cocks.longestCockLength() < 15) outputText("nearly equal to your own [cock]");
        else outputText("seeming tiny compared to your monstrous shaft");
        outputText(".  Chuckling, she wraps a hand around both your cock and hers and gives a few experimental pumps, gently grinding her hips into yours.  She frots against you for a long while, making you shudder and squirm as her thick fuckpole glides across your sensitive cockflesh... but the penile pleasure lasts only a few minutes, as soon the witch's attention turns elsewhere, to the womanly slit beneath your rod.");
    }

    outputText("\n\nLicking her ebony lips with lust, the witch ");
    if (player.isGoo() || player.isNaga() || player.isDrider() || player.isTaur()) outputText("shifts down your inhuman body");
    else outputText("spreads your legs, hiking them over her shoulders so that your feet dangle behind her");
    outputText(".  She grasps her huge, throbbing cock, stroking it idly in one hand as the other caresses your thighs, exploring your groin and the sensitive flesh around your womanhood.  One of her fingers, surprisingly dainty, slips around your outer lips, circling your hole until it brushes your [clit], sending a shock of pleasure through you; a trickle of feminine fluid leaks from your loins at her touch, lubricating her finger until it sheens in the desert sun.  The witch makes a show of bringing the glistening finger to her lips, running the tip across her full black lips before lapping up the fluids with exquisitely long strokes of her tongue, soon sucking her own finger like a slender little cock covered in your juices.");

    outputText("\n\nSlowly, the witch turns her attention back to your quivering [vagina].  Her cock, now lying flat on your belly, is thrumming hotly, her heartbeat easily felt through her ready rod, a steady trickle of precum flooding down your chest in eager anticipation of the coming fucking.  You brace yourself as best you can as the witch leans back, sliding her prick down your flesh until its thick head brushes your [vagina].  You shiver, half in anticipation and half in lust-filled need; your quavering cunt's cockhungry muscles easily relax at her touch as she pushes in, the first inches of witchcock spreading your vaginal walls wide in acceptance of the dominating cock, womb ready to be bred, to suck every drop of seed from the cum witch's potent loins.");

    outputText("\n\n\"<i>There's a good girl,</i>\" the witch coos, stroking your " + hairDescription(player) + " as she slowly, tenderly enters you, her wide hips pushing inch after throbbing inch of cock into your hole.  ");
    cuntChange(player, monster.cocks.cockArea(0), true, false, true);
    outputText("Suddenly, the witch hooks her fingers around the back of your neck, lifting you up from the sand.  You gasp, unsure, until the witch guides your head up to her massive breast, already leaking milk in anticiaption.  She smiles at you, surprisingly warmly, as she nestles your cheek into the wide valley of her cleavage.  A sudden, primal instinct overtakes you, and you wrap your arms around the witch's waist, holding yourself to her in a tight hug.  The witch gasps, surprised by your sudden act, but relaxes in your grasp as you did in hers, allowing you to support yourself as she cups one of her teats for you, guiding the leaking nipple to your lips.  You take it eagerly, breath catching as the first sweet, creamy drops enter your waiting mouth.  You suckle from the witch like a babe, drinking her delicious milk as it pours into you.  The witch moans loudly, her head rolling back as her milk flows into you, her flared hips finally pressing into yours, her tremendous cock fully buried inside you, its head kissing the lips of your cervix.  \"<i>Good girl,</i>\" she echoes, stroking your hair and milk-bloated cheeks, otherwise still in your sexual embrace.");

    outputText("\n\nSlowly, the witch begins to roll her hips, pulling mere inches from your loins before slipping back in, your lubricants and her free-flowing precum sloshing out around her cock to stain the desert sands.  In tune with your suckling, she fucks your [vagina], pushing in again and again, holding you tight to herself as more and more pre fills your hungry womb.  She moans deeply, eyes closed and head resting against your own, her breath hot and heavy on your bare flesh.");

    outputText("\n\nNow, the witch almost seems lost in bliss....  Perhaps you could turn the tables on her, and end up on top?  Then again, she's so gentle, and her milk is so very, very good...  Do you even want to resist her as she breeds you, pumping you full of cum and milk?");

    menu();
    addButton(0, "Resist", resistSavinStuff);
    addButton(1, "Don't", doNotResistSavin);
}

// Resist
export function resistSavinStuff(): void {
    clearOutput();
    outputText("It takes nothing more than a gentle push to put the witch on her back.  She gasps as you straddle her, [legs] spread around her wide, birthing hips, her cock buried to the hilt inside you.  To your surprise, she reaches up from her now-submissive position, stroking your cheek and purring like a pleasured cat.  You lean down, kissing her lips for once, rather than her teats, leaving a pearly milk stain on the full black lines.  With a smile, you plant your hands on her chest to steady yourself as you begin to rise and fall on her cock, dragging the massive thing nearly out of you before sliding back down with tantalizing slowness, reveling in the sensation of being filled to the brim once again.  Again and again you buck your hips and bounce on her cock, picking up the pace to a fury of lusty fucking, a symphony of moans and primal grunts echoing out across the desert as you breed the witch, coaxing the cum you need so desperately out of her thick, throbbing pole.");

    outputText("\n\n\"<i>Yes, oh please,</i>\" she groans, clutching at your [hips] as you ride her cock, \"<i>take my seed inside yourself, become great with my children....  We need it, both of us, yes?  Don't hold back... FUCK ME!</i>\"");

    outputText("\n\nYou slam yourself down on her rod one last time, screaming with pleasure as the first blast of cum smears your inner walls, painting your insides white with potent witchseed.  Your cunt grasps her prick, milking it as the witch groans in feral pleasure, bucking her hips into you as seed fills you and more, spilling out around her cock until the sand seems like snow beneath you.");

    outputText("\n\n\"<i>Yes, oh yes,</i>\" the witch groans, falling back against the cum-covered dunes, her milky chest heaving, adding to the organic mess.  \"<i>Let me be the father of your children... you'll be an excellent mother, and our children will be glorious.</i>\"");

    outputText("\n\nSilently, you nod, and collapse atop her, head buried in her milk-laden chest as you pass out from sexual exhaustion.");
    player.orgasm();
    dynStats("sen", 2);
    cleanupAfterCombat();
    // knock up hurrrr
    player.knockUp(PregnancyStore.PREGNANCY_SAND_WITCH, PregnancyStore.INCUBATION_SAND_WITCH, 90);
}
// Do Nothing
export function doNotResistSavin(): void {
    clearOutput();
    outputText("You need her inside you, to be filled with her seed... her children.  To be dominated, to be bred.  You sink into the witch's embrace, letting her slowly, lovingly pump her thick hips into you, taking more and more of her pre-cum and milk into you until you feel bloated, heavy-laden with white witchseed and the food you'll soon be making for your shared offspring.  The cum witch is incredibly gentle, her motions always tender, taking the best of care of you -- loving, in their way -- as she fills you with her cock again and again.  You bask in the fullness of it, going limp from pleasure, content to let her fuck you full of little witches, to be the mother of the dunes as you deserve.");

    outputText("\n\n\"<i>A good girl, beautiful girl.  So strong, so eager.  So willing.  You'll make a fine mother, a good broodmare, won't you?</i>\"  You nod eagerly, punctuated by her thrusting harder, faster into you. \"<i>Our children will be wonderful, beautiful witches, the queens of the desert.  Your womb will be the building block of the demons' downfall.... Now take my seed, and make it yours, a child for us both.</i>\"");

    outputText("\n\nYou can do nothing more than gasp, milk sputtering from your lips as the first hot spurt of cum pierces your womb.  The witch rocks her hips, pumping you with load after load of creamy seed, filling you with the hope of offspring until thick semen stains your thighs, pouring out around her massive, dominating rod.  The witch seems to go on forever with an infinite reserve of cum inside her, pumping you full of more and more until the dune is snow-white with excess witchseed.");

    outputText("\n\nFinally, the endless orgasm fades, and the witch groans with contentment, falling back against the cum-covered dunes, her milky chest heaving, adding to the organic mess.  \"<i>Let me be the father of your children... you'll be an excellent mother, and our children will be glorious.</i>\"");

    outputText("\n\nSilently, you nod, and collapse atop her, head buried in her milk-laden chest as you pass out from sexual exhaustion.");
    player.orgasm();
    dynStats("sen", 2);
    cleanupAfterCombat();
    // knock up hurrrr
    player.knockUp(PregnancyStore.PREGNANCY_SAND_WITCH, PregnancyStore.INCUBATION_SAND_WITCH, 90);
}
