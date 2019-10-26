// ATTACK ONE: SPARTAN RUSH
export function phoenixPlatoonRush(): void {
    outputText("You fall back under a hail of scimitar attacks.  The sheer number of phoenixes attacking is bad enough, but their attacks are perfectly coordinated, leaving virtually no room for escape or maneuver without getting hit!\n");
    // (Effect: Multiple medium-damage attacks)
    // (Effect: Multiple light attacks)
    monster.effects.create(StatusAffects.Attacks, 2 + rand(3), 0, 0, 0);
    monster.eAttack();
    combatRoundOver();
}

// ATTACK TWO: FIRE BREATH
export function phoenixPlatoonFireBreath(): void {
    outputText("Suddenly, the shield wall parts, revealing a single member of the platoon, a particularly muscular girl with a raging erection.  Before you can consider what's going on, she rears back and huffs at you.  To your horror, a great gout of fire erupts from her mouth, rolling towards you.  You dive, but are still caught partially in the inferno.");
    // (Effect: One heavy-damage attack)
    let damage: number = 100 + rand(50);
    damage = takeDamage(damage);
    outputText(" (" + damage + ")");
    combatRoundOver();
}
// ATTACK THREE: LUSTBANG GRENADE
export function phoenixPlatoonLustbang(): void {
    outputText("\"<i>LUSTBANG OUT!</i>\" one of the rear-most phoenixes shouts, causing all the other warriors to duck down behind their shields.  Oh, shit!  A large glass sphere rolls out from the shield wall, and immediately explodes in a great pink cloud.  You cough and wave your arms, but by the time the cloud has dissipated, you feel lightheaded and lusty, barely able to resist the urge to throw yourself at the phoenixes and beg for their cocks and cunts.");
    // (Effect: Large lust increase)
    dynStats("lus", 40);
    combatRoundOver();
}

export function phoenixPlatoonAI(): void {
    if (monster.effects.findByType(StatusAffects.Platoon) < 0) {
        phoenixPlatoonRush();
        monster.effects.create(StatusAffects.Platoon, 0, 0, 0, 0);
    }
    else if (monster.effects.getValue1Of(StatusAffects.Platoon) == 0) {
        phoenixPlatoonFireBreath();
        monster.effects.addValue(StatusAffects.Platoon, 1, 1);
    }
    else {
        phoenixPlatoonLustbang();
        monster.effects.remove(StatusAffects.Platoon);
    }
}

// Phoenix Platoon -- PC is Defeated
export function phoenixPlatoonMurdersPC(): void {
    clearOutput();
    outputText("You collapse, too ");
    if (player.lust > 99) outputText("turned on");
    else outputText("badly injured");
    outputText(" to continue the fight.  The platoon of heavy infantry breaks their formation, circling around you with shields still raised, keeping you from making any kind of last-ditch attack.  One prods you with the flat of her blade.  \"<i>Is " + mf(player, "he", "she") + " down?</i>\"");

    outputText("\n\n\"<i>Yeah,</i>\" another says. \"<i>This one's a goner. Let's bring " + mf(player, "him", "her") + " up to mom.</i>\"");
    // (Go to \"<i>Harpy Breeding Slut</i>\" Bad End)
    menu();
    addButton(0, "Next", harpyQueenBeatsUpPCBadEnd, true);
}

// Phoenix Platoon -- PC is Victorious
export function phoenixPlatoonLosesToPC(): void {
    clearOutput();
    outputText("With one final grunt, the last of the phoenixes collapses onto the pile of defeated warriors you've left in your wake.  The once-mighty platoon of soldiers has been reduced to a bruised, lusty heap of flesh, scales and feathers.  Seeing that the battle is won, you lower your [weapon] and take a look around.");
    flags[kFLAGS.HEL_PHOENIXES_DEFEATED]++;
    cleanupAfterCombat();
}

// [Phoenixes]
export function checkOutDemBirdBitches(): void {
    clearOutput();
    outputText("You loom over the defeated heavy infantry, marveling at them.  The half-breeds were probably the most organized and efficient fighting unit you've ever come across here in Mareth, and though you defeated them, you know most denizens of the region wouldn't have stood a chance.");
    let missionary: () => void = null;
    let wanked: () => void = null;
    let rideAnal: () => void = null;
    let rideVaginal: () => void = null;
    if (player.lust > 33) {
        outputText("\n\nYou suppose you could use one of them to get yourself off.");
        // (Display Options:
        // If Male: [Missionary] [Get Wanked] [Ride Anal] (Capacity: 80)
        if (player.cocks.length > 0) {
            if (player.cocks.cockThatFits(80) >= 0) missionary = phoenixMissionary;
            else outputText("\n\nYou're too big to fuck one of them properly.");
            wanked = phoenixWanking;
        }
        if (player.vaginas.length > 0) rideVaginal = phoenixAginal;
        // If Female: [Ride Vaginal] [Ride Anal]
        // If Genderless: [Ride Anal]
        rideAnal = gitButtRoadPhoenix;
    }
    choices("Missionary", missionary, "Get Wanked", wanked, "Ride Anal", rideAnal, "Ride Vaginal", rideVaginal, "", null, "", null, "", null, "", null, "", null, "Back", playerMenu);
}

// Phoenixes -- [Missionary]
export function phoenixMissionary(): void {
    clearOutput();
    let x: number = player.cocks.cockThatFits(80);
    if (x < 0) x = player.cocks.smallestCockIndex();
    const y: number = x + 1;
    outputText("You grab the healthiest looking phoenix off the top of the pile and throw the hermaphrodite on her back a few feet from her sisters.  She grunts, looking up at you with grim, fierce eyes.  \"<i>I'll never submit!  I am a proud warrior, not some-</i>\" Yeah, whatever.  You rip her chain shirt open, revealing the large, soft globes of her D-cups beneath.  The phoenix gasps at the sudden exposure and turns her head away, fixing her expression in place like chiseled marble, determined not to look you in the eye as you take your pleasure.");

    outputText("\n\nYou grab her legs and force them apart, revealing her slick pussy and half-rigid cock, surprisingly aroused for someone who seems insistent on not enjoying herself.  You slip a hand into her soaking twat, letting a pair of fingers slither inside her. She groans, gritting her teeth as you go deeper and deeper inside her.  With a grin, you pull out and force those same fingers into her mouth.  Wide-eyed, she sputters and shakes her head, but you don't let up until she's had a good, long taste.");

    outputText("\n\nYou chide her, telling her that if she doesn't want it so much, why is she so wet?");

    outputText("\n\n\"<i>I-I am not! It's natural!</i>\"");

    outputText("\n\nOh, really? Is she sure she doesn't just want your cock?");

    outputText("\n\n\"<i>I... well... maybe...</i>\" she admits, and you nod as her once-struggling legs go a bit limp.");

    outputText("\n\nYou return your attention to between her legs.  Getting her fully erect reptilian cock out of the way, you expose your prize - her sodden cunt");
    if (player.cocks.length > 1) outputText(" and the tight ring of her pucker");
    outputText(".  You grasp her wide flanks and, lining your [cock " + y + "]");
    if (player.cocks.length > 1) outputText(" and extra boner up with her holes");
    else outputText(" up with her hole");
    outputText(", push in, penetrating her cunt");
    if (player.cocks.length > 1) outputText(" and ass");
    outputText(" and sliding into her warm, wet channel");
    if (player.cocks.length > 1) outputText("s");
    outputText(".");

    outputText("\n\nThe phoenix squirms as you push into her depths, groaning as more and more of your cockmeat pierces her until you finally hilt her.  Gritting her teeth, the phoenix reaches up and grabs your shoulders, holding onto you as your cock");
    if (player.cocks.length > 1) outputText("s drive");
    else outputText(" drives");
    outputText(" into her; you roll your hips back and forth for short but powerful strokes into her blazing hot innards.  As the pace picks up, you pull the phoenix-girl into a long, tender kiss.  The kiss soon turns into her moaning into your mouth as you fuck her cunt ");
    if (player.cocks.length > 1) outputText("and ass ");
    outputText("hard, slamming your hips into hers.");

    outputText("\n\nShe cums first");
    if (player.cocks.length > 1) outputText(", your double penetration too much for her to handle");
    outputText(".  The phoenix grips your shoulders tight enough for her claws to cut into you as her tight pussy ");
    if (player.cocks.length > 1) outputText("and tighter sphincter spasm");
    else outputText("spasms");
    outputText(" around your dick");
    if (player.cocks.length > 1) outputText("s");
    outputText(".  With her squirming in your embrace and squeezing down so hard, you can't help but blow your load.  You press your lips hard into hers and cum, pumping thick ropes of steaming jizz into her wet box");
    if (player.cocks.length > 1) outputText(" and hot asshole");
    outputText(".  As you cum into her, you feel her reptile prick shoot off, squirting a long white rope onto her chest and yours until her tits are soaked with her spunk.");

    outputText("\n\nYou release the phoenix from your embrace, and are pleased to see she's passed out from the overwhelming pleasure.  Grinning, you pull your cock");
    if (player.cocks.length > 1) outputText("s");
    outputText(" out of her ravaged hole");
    if (player.cocks.length > 1) outputText("s");
    outputText(" and gather your gear.");
    // (Return to Mezzanine main menu)
    player.orgasm();
    doNext(playerMenu);
}

// Phoenixes -- [Get Wanked]
export function phoenixWanking(): void {
    const x: number = player.cocks.biggestCockIndex();
    const y: number = x + 1;

    clearOutput();
    outputText("You grab the healthiest looking phoenix off the top of the pile and throw the hermaphrodite on her back a few feet from her sisters.  She grunts, looking up at you with grim, fierce eyes.  \"<i>I'll never submit!  I am a proud warrior, not some-</i>\"  Yeah, whatever.  You rip her chain shirt open, revealing the large, soft globes of her D-cups beneath.  The phoenix gasps at the sudden exposure and turns her head away, determined not to look you in the eye as you take your pleasure.  You grope one of her breasts roughly, pinching the nipple between your fingers until she's whimpering with pain and pleasure.  You let up for just a moment and tell the girl that she's going to get you off with her special endowments, or you're going to put her in a world of hurt.");

    outputText("\n\nWith a groan, she nods her head.  You release her sensitive breast and present your [cock " + y + "].  Reluctantly, the phoenix-girl brings her fiery tail around and, extinguishing it, begins to snake it around your prick.  You urge her on as she wraps her long, prehensile appendage around your shaft, wringing it like a sponge as her tail's grip tightens.  You run your hands through the girl's bright red hair, stroking her gently as she starts to jerk your [cock " + y + "] off with her tail.");

    outputText("\n\nIt feels heavenly, and you shudder with delight as her warm, scaly tail rubs and strokes and squeezes you... But it isn't quite enough, not with so many other parts of her left!  You push her looped tail off the tip of your [cock " + y + "] and tell the phoenix to put her soft, feathery red wings to good use.  She gawks at you, but a quick grope of her tits urges her to the task.  She furls her auburn wings around her shoulders, letting the fringes stroke and caress the sensitive [cockHead " + y + "] of your cock.  You barely contain yourself at the downy touch of her feathers along your [cock " + y + "]'s head and length, and urge her onwards with encouraging words and more gentle, loving squeezes and teases of her lush tits.");

    outputText("\n\nYou notice that by now the phoenix-girl is openly fingering herself.  You continue to run your fingers through her hair, whispering encouragements and sweet nothings at her as she continues to squeeze and gently caress your [cock " + y + "].  You feel your orgasm coming, and quickly grab the phoenix by the shoulders and push her forward, forcing her to take your cockhead into her mouth as you cum.");

    outputText("\n\nYour [cock " + y + "] explodes, pumping a thick load into the shocked phoenix's mouth.  She gags on your cum, finally swallowing it as the last of your sperm drips into her mouth.  With a grin, you tell her what a good job she did as you withdraw your [cock " + y + "]  from her grip.  With little rivulets of cum dripping down her face, the half-breed collapses onto her back, rapidly fingering herself.");
    // (Return to Mezzanine main menu)
    player.orgasm();
    doNext(playerMenu);
}

// Phoenixes -- [Git Butt-rode]
export function gitButtRoadPhoenix(): void {
    clearOutput();
    outputText("You grab the healthiest looking phoenix off the top of the pile and throw the hermaphrodite on her back a few feet from her sisters.  She grunts, looking up at you with grim, fierce eyes.  \"<i>I'll never submit!  I am a proud warrior, not some-</i>\" Yeah, whatever.  You rip her chain shirt open, revealing the large, soft globes of her D-cups beneath. The phoenix gasps at the sudden exposure and turns her head away, determined not to look you in the eye as you take your pleasure.  Gripping the warrior by her hefty boobs, you tell the phoenix that it's her lucky goddamn day: you're going to let her fuck your ass.");

    outputText("\n\nThe phoenix stares up at you with a mix of eagerness and caution.  \"<i>Wait... you're gonna let me... do that? Really?</i>\"");

    outputText("\n\nYou nod.");

    outputText("\n\n\"<i>Uh, well... okay, then. If that's what you want....</i>\"");

    outputText("\n\nYou quickly discard your [armor] and, pushing the girl back onto her back, squat over your prize.  You wrap your hand around her stiff lizard prick and start to stroke it, running your hand along her bulbous purple shaft.  The phoenix makes a pleasured gasp as you start to jerk her off, idly playing with her lush tits or slick pussy as you stroke her to full hardness.");

    outputText("\n\nOnce you're satisfied that she's completely rigid, you shift your [hips] so that your [asshole] is hovering over the phoenix's thick twelve-incher.  You allow her to put her hands on your hips and guide you down, until you can feel her narrow head pressed against your backdoor.  Biting your lip to stifle a cry of pain and pleasure, you do the honors, guiding her wide prick to slip past your relaxed sphincter and into your bowels.");
    player.buttChange(30, true, true, false);

    outputText("\n\nYou grunt as she bottoms out inside you, leaving you with a feeling of intense fullness and warmth, grinning down at the phoenix-girl and pleased to see the look of rapture on her face as your ass muscles squeeze down on her stiff lizard-cock.  You feel her hands digging into your [hips], and in return you give her soft breasts a playful squeeze.  You start to rock your hips, letting an inch or two of her dick spill out of you before your stretched [asshole] sucks it back up.");

    outputText("\n\nSurprisingly, the phoenix-girl shifts her hands from your hips to your shoulders and pulls you down on top of her, pushing your face into her pillowy breasts.  Before you can chastise her, your lover slams her cock into you, making you scream with pleasure into her soft flesh.  Grinning, she wraps her wings, legs, and tail around you, completely immobilizing you as she starts to hammer your ass, pistoning her cock in and out of you.");

    outputText("\n\nHelpless under the phoenix's surprise attack, you can do little more than grit your teeth and let the pleasure take you.  You return her embrace, taking one of her nipples into your mouth to play with as she fucks you raw.  You can feel an anal orgasm mounting and quickly try to relax yourself, letting in more and more of her cock until she is again hilting you, her hips slamming into your [butt].");

    outputText("\n\nUnable to hold on for long, you bite down on her pink nipple and cum, letting waves of pleasure wash over you from your rectal intruder.  Your sphincter clamps down hard on the lizard prick inside you, milking it just like a pussy would until, spurred on by your orgasm and bite to her most sensitive flesh, the phoenix-girl cums.  You yelp as her burning-hot cum rushes into your ass, scalding your walls until you feel a massive wave of pleasure crash into you - a second orgasm! Your mind goes utterly numb, nearly blacking out as tremors of ecstasy pump into you from her dick.");

    outputText("\n\nWhen you come to your senses a few minutes later, the phoenix-girl is asleep, still holding you tight.  You pull her deflated lizard dick out of your ass and shudder as a torrent of her sizzling hot spunk dribbles out onto her thighs and hips.  You wriggle out of her tight embrace and give her a little kiss on the cheek before collecting your [armor] and heading out.");
    // (Return to Mezzanine main menu)
    player.orgasm();
    doNext(playerMenu);
}

// Phoenix -- [Ride Vaginal]
export function phoenixAginal(): void {
    clearOutput();
    outputText("You grab the healthiest looking phoenix off the top of the pile and throw the hermaphrodite on her back a few feet from her sisters.  She grunts, looking up at you with grim, fierce eyes.  \"<i>I'll never submit!  I am a proud warrior, not some-</i>\"  Yeah, whatever.  You rip her chain shirt open, revealing the large, soft globes of her D-cups beneath.  The phoenix gasps at the sudden exposure and turns her head away, determined not to look you in the eye as you take your pleasure.  You ignore her temporary defiance and grab her cock.");

    outputText("\n\n\"<i>Heeeey,</i>\" the phoenix whines squirming to get out of your grip.");

    outputText("\n\nYou maintain your grasp on her long, purple lizard dick and tell her that you're doing her a favor: you're going to let her fuck your [vagina].  She stops struggling at the invitation.");

    outputText("\n\n\"<i>Oh. Well,</i>\" she says, smirking slightly.  \"<i>If you want a bit of phoenix seed... I guess I wouldn't mind a chance at being a daddy.</i>\"");

    outputText("\n\n");
    // [If Broodmother, not pregnant:
    if (player.perks.findByType(PerkLib.BroodMother) >= 0) outputText("You assure her she will be soon");
    else outputText("You grin at her");
    outputText(" and strip out of your [armor]. The phoenix, a bit more dominant than you might have liked, roughly grabs your [chest], pinching your nipples as she takes over wringing her cock from you. Oh well. You decide to roll with it and slide a hand down to your [vagina], stroking your pussy as your lover warms up.");

    outputText("\n\nWhen she's nice and hard, you give the phoenix a little push onto her back and clamber into her lap, lining her lizard prick up with your [vagina].  Before you can get properly situated, though, the girl pulls you down onto her cock, impaling you up to her hilt in one massive thrust.  You roll your head back and scream, a mix of pleasure and burning pain shooting through you as her white-hot rod slams into your innermost depths.");
    player.cuntChange(12, true, true, false);

    outputText("\n\nBy the time you're somewhat recovered from her surprise attack, the phoenix-girl has started rocking her hips into yours, grinding her long prick into you.  You give her hefty tits a rough squeeze and push her back down, holding her down by her mammaries as you start to ride her cock.  Having gotten her thrill, the phoenix-girl submits to you, only venturing to hold onto your [hips] as you fuck her.  For your part, you bask in the sensation of her thick dick sliding in and out of your well-lubricated depths, rubbing and stroking your sensitive inner walls with its bulbous length.");

    outputText("\n\nNow that you're into the swing of things, you give your phoenix lover a hand up, pulling her into a sitting position and burying her face into your [chest].  She struggles for a moment but, after seeing how nice cuddling against your warm flesh is, she relaxes into your embrace.  You start to bounce on her cock, smushing her face into your breasts at the apex of each bounce, and slamming her prick deep inside you as you fall.");

    outputText("\n\nUnable to take the cumulative pleasure, the phoenix cums.  You go wide-eyed as her burning hot cum pours into your waiting womb, scalding your depths with her sizzling, potent seed.  You can only keep riding her, letting her jizz flow into you until the heat and pleasure sends you over the edge too.  You hug the phoenix tight as orgasm hits you, shuddering and gasping as ecstasy threatens to overwhelm you.  Your [vagina] milks your lover for every last drop until, breathless, you release your death-hold on your lover, letting her flop, insensate, to the ground.");

    outputText("\n\nYou stand, a bit bow-legged, and watch as a bucket's worth of her extra seed pours out of your sodden twat, pooling on the phoenix's breasts and belly.  Giggling, you stumble off her and collect your [armor].");
    player.knockUp(PregnancyStore.PREGNANCY_OVIELIXIR_EGGS, PregnancyStore.INCUBATION_OVIELIXIR_EGGS + 70, 100);
    // v1 = egg type.
    // v2 = size - 0 for normal, 1 for large
    // v3 = quantity
    player.effects.create(StatusAffects.Eggs, rand(6), 0, (5 + rand(3)), 0);
    // (Return to Mezzanine main menu)
    player.orgasm();
    doNext(playerMenu);
}
