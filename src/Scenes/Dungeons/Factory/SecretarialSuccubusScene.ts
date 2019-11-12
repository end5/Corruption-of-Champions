function succubusTalkOne(): void {
    spriteSelect(55);
    clearOutput();
    outputText("\"<i>I suppose I really should thank you for coming down all by your lonesome.  The boss is gonna be sooo happy we found you.  Just think, in an hour or two we can get you strapped in and working with the others,</i>\"  says the secretarial succubus as she saunters over, still sipping her coffee, \"<i>You're so cute!  I tell you what, if you agree to come with me, I'll, like, make sure the experience is pleasurable.</i>\"\n\n");
    outputText("She runs a stocking covered foot up your leg and thigh, almost to your groin.  Giggling, the succubus pulls it away and asks, \"<i>So are you ready and willing?</i>\"");
    simpleChoices("For what?", succubusTalkTwo, "Yes", succubusBadEnd, "No", succubusRefuseOffer, "", null, "", null);
}

function succubusTalkTwo(): void {
    spriteSelect(55);
    clearOutput();
    outputText("The succubus looks at you with a bemused expression, \"<i>You haven't figured it out yet?  Really?  What do you think we make at this factory, bubble-gum?</i>\" she asks with a cruel smile, \"<i>We take human and once-human champions like you, pump you full of aphrodisiacs, body-altering drugs, and corrupting agents, and then milk you of your tainted fluids continually for the rest of your life!  And don't even start to ask why, I'll tell you – there are still pockets of purity out there that repel cute demons like me.  So the best way to deal with those is just to release a river of drug-filled sex-juice at them.  By the time the area dries off, the locals welcome us with open arms... and spread legs.</i>\"");
    simpleChoices("Sick!", succubusRefuseOffer, "Sounds Fun", succubusBadEnd, "", null, "", null, "", null);
}

function succubusCombatStart(): void {
    spriteSelect(55);
    player.effects.create(StatusAffects.FactorySuccubusDefeated, 0, 0, 0, 0);
    startCombat(new SecretarialSuccubus(), true); // Won't matter if you lose
}

function succubusRefuseOffer(): void {
    spriteSelect(55);
    clearOutput();
    outputText("She frowns, \"<i>I was secretly hoping you would say that... I'm going to make you beg me to hook you into the machines.  Just wait.</i>\"");
    doNext(succubusCombatStart);
}

export function secretarialSuccubusInsult(): void {
    clearOutput();
    outputText("You laugh mockingly at the stupid demon, roaring, \"<i>I'm the bloody champion you vapid cunt!</i>\"\n\nShe whirls, her beautiful face marred by rage.  It looks like you have a fight on your hands...");
    // (START FIGHT – Succubus Defense -10)
    succubusCombatStart();
    monster.armorDef -= 10;
}

function succubusBadEnd(): void {
    spriteSelect(55);
    clearOutput();
    outputText("The blue skinned seductress steps forward and wraps her arms around you, pulling your head down and crushing it into her heavenly breasts as she speaks, \"<i>My my, aren't you the kinky little play-toy.  Let's get you hooked up.</i>\"\n\n");
    outputText("She catches you off-guard, lifting your feet off the ground.  You realize she has somehow grown taller.  You stretch to see what's going on, but have no leverage to pry your face from the smooth globes of flesh that smother you.   Vaguely, the click-clack of heels reaches you through the walls of flesh.  You're being moved deeper into the facility.   A creaky door opens, allowing you to hear the loud humming of machinery, mixed with what sounds like desperate sexual moans.\n\n");
    outputText("Abruptly you are pulled free from the succubus' fleshy prison and bodily thrown into padded restraints.  Blinded by the sudden onslaught of light, you blink away tears as restraints are placed securely around your wrists.  Warm lips press against your own as a foreign tongue penetrates your lips, mouth-raping you.  It tastes of sweet exotic spices, like nothing you've ever had before.   Helpless to do anything but return the kiss, you respond, sliding your tongue along the slippery sweetness of your captor's.  You risk opening your eyes and see your inhuman captor to be enjoying the kiss every bit as much as you.");
    doNext(succubusBadEndPartTwo);
}

function succubusBadEndPartTwo(): void {
    spriteSelect(55);
    clearOutput();
    outputText("In no time flat your blood begins to burn hot with the fires of unnatural lust.  "); // Arousal
    if (player.breastRows.biggestLactation() < 1) { // Tits – regular
        outputText("Your " + nippleDescription(player, 0) + "s begin prodding painfully against your " + player.armorName + ", every touch serving to make them harder and more erect.  ");
    }
    else if (player.breastRows.biggestLactation() < 3) { // Tits – lactating
        outputText("Your " + nippleDescription(player, 0) + "s get painfully hard as you feel milk begin backing up inside your " + allBreastsDescript(player) + ".   The succubus glances down mischieviously as her hands begin to grope you through your " + player.armorName + ", squeezing out a few drops of milk.  ");
    }
    else { // Tits – megalactating
        outputText("Your " + nippleDescription(player, 0) + "s get painfully hard as milk begins drooling down your over-productive chest, making your " + player.armorName + " slide across your leaky milk-spouts in an agonizingly pleasurable way.  ");
    }
    if (player.cocks.length == 1) { // Cock – single
        if (player.cocks.cockArea(0) < 30) {
            outputText("Swooning from sudden blood loss, you struggle to maintain the kiss as your body takes your " + cockDescript(game.player, 0) + " to full hardness in seconds.  ");
        }
        else if (player.cocks.cockArea(0) < 100) { // Cock – single big
            outputText("Nearly blacking out, you struggle to stay awake as your body shifts your blood to your disproportionate " + cockNoun(CockTypesEnum.HUMAN) + ".  ");
        }
        else outputText("As you struggle not to lose consciousness, you realize your over-aroused body had pumped most of your blood to your over-sized " + cockNoun(CockTypesEnum.HUMAN) + ", which now droops to the floor, pulsing hotly.  "); // Cock -megahuge
    }
    // DO MULTIZ
    if (player.cocks.length > 1) outputText("The feeling of light-headedness nearly robs you of consciousness as your " + multiCockDescript(player) + " fill with blood, pulsating with arousal as they reach full size.  ");
    if (player.vaginas.length > 0) { // Vagooooz
        if (player.clitLength >= 4.5) { // 'uge clit
            outputText("Popping from between your thighs, your " + clitDescription(player) + " responds to the sheer hotness of the situation by making itself known.   You squeeze your legs tightly together, hungry for additional sensation.  ");
        }
        else if (player.clitLength > 1) { // big clit
            outputText("A wave of pleasure erupts from between your legs as your " + clitDescription(player) + " pops free.    You squeeze your legs tightly together, hungry for the additional sensations.  ");
        }
        else if (player.vaginas[0].vaginalWetness >= VaginaWetness.SLICK) { // slick
            outputText("Squishing wetly, your bottoms become soggy with the flood of fluids leaking from your " + vaginaDescript(player, 0) + ".   Your legs spread apart on their own, begging for any kind of intrusion.  ");
        }
        else outputText("Groaning softly, you feel yourself getting wetter and wetter with arousal.  You wish your sticky bottoms were off so you could let something into your " + vaginaDescript(player, 0) + ".  "); // normal
    }
    outputText("\n\n"); // New PG
    outputText("No longer caring about modesty, etiquette, or even your own safety, you squirm against your bindings, lewdly putting on a display for your captor as you suck her tongue as if your life depended on it.   She breaks the kiss with a smile, \"<i>I told you I'd make sure it was pleasurable.  Now you sit tight while I get you hooked up, and we'll have you cumming what's left of your brains out in no time,</i>\" she promises.\n\n");
    outputText("The succubus pushes a button on the wall, and a number of strange looking suction tubes and hoses drop down from above you.   Moving with practiced efficiency, she hooks a ");
    if (player.breastRows.length == 1)
        outputText("pair of");
    else outputText("number of");
    outputText(" hoses to your breasts, ");
    if (player.cocks.length == 0) {
        if (player.vaginas.length > 0)
            outputText("and a vacuum pump to your clit.  ");
        else {
            outputText("and another vacuum pump to your bare groin.  In seconds a wet fleshy growth erupts.  You have grown a cock!  ");
            player.cocks.createCock();
        }
    }
    else if (player.vaginas.length > 0)
        outputText("a vacuum pump to your clit, and a pump many times bigger than your " + cockDescript(game.player, 0) + " to it.  ");
    else outputText("and a pump many times bigger than your " + cockDescript(game.player, 0) + " to it.  ");
    outputText("At first there is only a gentle suction, you assume in order to keep them in place.  Unfinished, your captor places something large and hollow against your backdoor");
    if (player.vaginas.length == 0)
        outputText(".");
    else outputText(" and an ever larger dildo against your " + vaginaDescript(player, 0) + ".  It seems to pulse and wiggle with a life of its own, rubbing the bumps of its lumpy head against your lips.");
    outputText("  You swoon as you hear the solid click of a button being pushed, and all at once all devices attached to you leap to life.");
    doNext(succubusBadEndPartThree);
}

function succubusBadEndPartThree(): void {
    spriteSelect(55);
    clearOutput();
    outputText("The beautiful seductress that bound you giggles and says, \"<i>Oh it only gets better baby,</i>\" as she pushes another button.  You see a number of needles lower from the equipment above.  Two pause at chest height.  Faded parchment labels on the tubes mark them as \"Gro+\".  You spot the same markings on at least some of the hoses gathering around your groin.  A few are marked with different labels, but you cannot make out the demonic script.  As one, the hoses rear back, then plunge forward, burying themselves into your supple flesh and injecting their drugged payload into your body.  It hurts at first, but the drugs fog your mind, blocking the pain with pulsing waves of desire.   You begin cumming as your body erupts with artificial pleasure.\n\n");
    // Nipples
    outputText("The suction pulls squirt after squirt of milk from your breasts as your " + allBreastsDescript(player) + " start to grow, swelling heavier as they enlarge to produce more milk.  You squeal with delight as your nipples turn black, tainted by corruptive chemicals that are slowly dripped into you.  ");
    // Dick
    if (player.cocks.length > 0) {
        outputText("The vacuum-pump on your cock noisily sucks down all your spoo, ");
        // High cum variant
        if (player.cumQ() > 300)
            outputText("struggling with the amount you put off.  Grinning, the succubus reaches over and flips a lever.  You feel the suction increase as the machine is turned up to accommodate your altered physique.  ");
        // else
        else outputText("the suction and drugs make it so easy to just keep cumming and cumming.  ");
        // either or:
        outputText("Dimly, you feel a needle lodged in your taint, pumping your prostate full of something.  Your " + cockDescript(game.player, 0) + " begins growing mid-orgasm, the skin turning a deep purple even as small nodule-like bumps form all over it, rapidly becoming a bloated parody of its demonic counterparts.  ");
    }
    // Puss Orgasmz
    if (player.vaginas.length > 0) outputText("Clenching tightly, your " + vaginaDescript(player, 0) + " squeezes tightly on its intruder as its repeatedly violated by the machines.  ");
    // End
    outputText("\n\nThe world around you disappears, leaving you alone with the drug-enhanced sensations assaulting your body.  In truth, you don't want it to end.  You find yourself wishing it would never end, and no doubt the equipment you're hooked in to will see to that.\n\n");
    if (player.effects.getValue3Of(StatusAffects.Marble) == 1) {
        outputText("Later on, you are briefly pulled out of your reverie by a familiar warm fluid flowing down your throat.  You come to your senses and see Marble looking down at you with an odd expression on her face.  ");
        outputText("She seems to be in a state of bliss. Looking down, you see that she is wearing some kind of pair of pink panties.  Marble gasps and the surface of the panties ripples; it's a living thing!\n\nYou look around and realize you aren't alone.  ");
    }
    else if (player.effects.findByType(StatusAffects.CampMarble) >= 0) {
        outputText("You are given a brief moment of clarity as you see Marble standing in front of you.  ");
        outputText("She seems to be in a state of bliss. Looking down, you see that she is wearing some kind of pair of pink panties.  Marble gasps and the surface of the panties ripples; it's a living thing!\n\nYou look around and realize you aren't alone.  ");
    }
    else outputText("Later on, in a moment of clarity, you look around and realize you aren't alone.  ");
    outputText("In rows alongside you are a large number of other captives, every single one endowed with freakishly sized breasts, and nearly all gifted with throbbing demonic dicks.  Some small analytical part of you notes that the farther down the line they are, the older and larger they have become.   You look down and see your own massive tits, shiny tainted nipples still pumping out streams of milk.  The huge throbbing demon-cock between your legs begins to get hard as the machines crank back up, filling you full of happy horniness.");
    if (player.effects.getValue3Of(StatusAffects.Marble) == 1 || player.effects.findByType(StatusAffects.CampMarble) >= 0) outputText("  With Marble here too, you'll be around for a long time.");
    gameOver();
}

export function succubusLossRape(): void {
    spriteSelect(55);
    clearOutput();
    if (player.cocks.length > 0) {
        if (player.lust > 99) outputText("Driven half mad with lust, you drop to your knees. Your fingers fly over your body as you pry off every last piece of your " + player.armorName + ", displaying just how hard your alluring opponent has gotten you.  The succubus saunters over, every sinuous step radiating the inhuman sexuality that pours off her skin like heat from a bonfire.\n\n", false);
        else outputText("Exhausted, you collapse before the succubus.  She effortlessly slices away your " + player.armorName + ", peeling your possessions away with practiced ease.  In moments you are stark naked and wholly exposed to your captor.  In spite of yourself, your body begins to respond to her sultry aura, displaying the hardness of your desire and shame immediately.\n\n", false);
        outputText("\"<i>Awww, did I get you all <b>HOT</b> and bothered?</i>\" She croons, poising a stocking clad foot above you as her high-heels seem to fade away.  Warm silk begins to press against your groin as slender toes curl around the head of your throbbing maleness, your foe having her way with your desire-saturated form.  You mewl pitifully at the sensation, your hips twitching involuntarily against her demonic sole. The slippery surface of her foot squeezes as she expertly strokes you with her foot, delighting in her complete dominance over your easily controlled member.\n\n", false);
        // balls or pussy play
        if (player.balls > 0) {
            // [[balls]]
            if (player.ballSize < 6) outputText("Your sultry captor leans low over you, her luscious tits wobbling enticingly as she reaches down and caresses your " + ballsDescriptLight(player) + " with soft touches.  Almost immediately you feel them clench with boiling heat, growing heavy and churning with a load big enough to satisfy a thirsty succubus.", false);
            // [[huge balls]]
            else outputText("Your sultry captor leans low, marveling at the size of your " + ballsDescriptLight(player) + " as she reaches down to caress them.  Her tits swing lewdly above you, bouncing in hypnotic motions. Her hands work gently, taking each one of your " + ballsDescriptLight(player) + " and hefting it gently.  Almost immediately you feel them fill with an unnatural heat that spreads everywhere her slender fingers touch.  They begin to feel full and heavy, practically sloshing as the pent up need inside you is channeled into liquid form.  \"So ripe... and full,\" she whispers to herself as she caresses them, her silken foot still sliding all over your " + cockDescript(game.player, 0) + ", pumping stroke after stroke of pleasure into your lust-weakened form.", false);
        }
        else {
            // [[no balls no pussy]]
            if (player.vaginas.length == 0) outputText("Your sultry captor leans low over you, her luscious tits wobbling enticingly as she reaches down and caresses the skin between your " + cockDescript(game.player, 0) + " and " + assholeDescript(player) + " with a slender finger.  Almost immediately you feel your groin clench with the boiling heat of a growing orgasm, thick cum churning out from your prostate as your body readies a load large enough to satisfy a thirsty succubus.", false);
            // [[no balls + pussy]]
            else outputText("Your sultry captor leans low over you, her luscious tits wobbling enticingly as she reaches down and caresses the slick skin of your slit with a single digit.  Other fingers circle your " + clitDescription(player) + ", teasing it from between the folds as it grows hard, peeking out from the hood and turning cherry-red.  Almost immediately you feel your groin clench with the boiling heat of a growing orgasm, thick cum churning in your prostate as your body readies a load large enough to satisfy a thirsty succubus.", false);
        }
        outputText("\n\n", false);
        // [[Cum]]
        outputText("The succubus licks her lips in anticipation as she curls her silk-clad toes tighter around you, making you bulge and twitch in obscene pleasure.  With a naughty smile, she caresses your ass with her bulbous demonic tail.  Before you can react, it plunges inside you, easily slipping through your " + assholeDescript(player) + " and pressing tightly against your prostate.  The suddenness pushes you over the edge, but she immediately wraps her fingers around you, pinching tightly, bottling your cum inside you.  You cry out in pain and surprise as your entire thick load is trapped inside you.  After nearly a full minute, your groin aches with the discomfort of it all.\n\n", false);
        // More cum paragraph.  HAHA! TINY BABY CUM!
        outputText("She wastes no time, and caresses you again.  You instantly feel another surge of heat and desire as a fresh load of cum brews behind your first strangled orgasm.  You need to cum so bad, her foot still stroking and squeezing you full of perverted desire.  She slaps your ", false);
        if (player.balls > 0) outputText("balls", false);
        else outputText("ass", false);
        outputText(" as she releases your " + cockDescript(game.player, 0) + ", shouting, \"<i>CUM!  Feed me!</i>\"  You are all too happy to oblige.  ", false);
        // [[normal volume]]
        if (player.cumQ() < 50) outputText("Freed at last, your body clenches tightly as it squirts the first jet of cum from your " + cockDescript(game.player, 0) + ".  She smears her foot over the head, catching the cum and using it to lubricate her silken foot as it massages your member with merciless strokes, alternatively catching your spooge and milking more from your obedient maleness.  Your orgasm lasts many times longer than normal as your dual loads feed her demonic hunger.", false);
        // [[big volume]]
        if (player.cumQ() >= 50 && player.cumQ() < 400) outputText("Freed at last, your body clenches tightly as it spurts a big glob of cum onto her waiting sole, soaking the bottom of her foot with slippery male-milk.  She smears her cum-covered foot over every inch of your " + cockDescript(game.player, 0) + ", making each successive spurt bigger and messier than the last. Somehow she manages to catch more and more of your jizm over her foot, bathing you in cummy silkiness.  You groan helplessly as she milks more and more of from you till her foot is dripping steadily, your own groin and belly soaked with the stuff.  You give a few final exhausted squirts as she languidly rubs it into you.", false);
        // [[huge volume]]
        if (player.cumQ() > 400) outputText("Freed at last, your body clenches powerfully as a massive eruption of cum launches from your " + cockDescript(game.player, 0) + " onto her waiting foot.  The succubus looks on incredulously as her entire foot is soaked with your sticky whiteness, forgetting to move as the second wave of cum drenches her to the ankle and rains down over your stomach.  She giggles and moves it back to your cock, massaging your slick spooge into your cock with her foot, wringing an even bigger explosion of cum from your tortured body.  Flopping back, she gets her other foot in on the action, milking you between her feet as you soak yourself completely with bigger and bigger eruptions until at last your orgasm begins to wane.  She slides forwards, rubbing against you and smearing the mess over herself with a blissful expression.", false);
        outputText("\n\n\"<i>Good boy,</i>\" she croons, mopping the cum up as it seems to wick into her stockings, \"<i>You'll do well once we get you on the line.</i>\"  You don't have time to ponder the significance of that as you lose consciousness.", false);
        // ONWARD TO BAD-END-IA!
        player.orgasm();
        doNext(factoryFinisher);
    }
    else {
        if (player.lust > 99) {
            outputText("Driven half mad with lust, you shake yourself free from the trappings of your " + player.armorName + ", first revealing your " + allBreastsDescript(player) + ", then " + hipDescription(player) + " and finally your ", false);
            if (player.vaginas.length > 0) outputText(vaginaDescript(player, 0) + " as the last pieces fall away.\n\n", false);
            else outputText("bare groin as the last pieces fall away.\n\n", false);
        }
        // (HP loss)
        else outputText("You realize you're wobbling unsteadily, either from a blow to the head or blood loss, you can't be sure which.  In a display of sublime defiance, you manage to stay on your feet.  Though your tenacity does little good as your lightning-fast foe effortlessly undresses you, easily avoiding your clumsy and pain-addled movements.\n\n", false);
        // START ZE RAPE
        outputText("The succubus steps away from you, withdrawing a tiny vial from a pocket in her vest.  She uncaps it with practiced ease, her outfit shifting into latex parody of a nurse's uniform as she attaches a small needle, completing the assembly of her injector.  \"<i>Like, don't worry about a thing hun, this will only hurt for a second,</i>\" she coos as she prances forwards, easily sinking the entire needle into your shoulder.\n\n\"<i>W-what did you do to me?</i>\" you manage to stammer.\n\n", false);
        outputText("She merely smiles and slips a delicately manicured finger under a rapidly disappearing skirt.  You ignore her crude display of wanton sexuality for the moment and try to focus on figuring out what the drugs did you, and what her needy slit smells like.  No, that wasn't it... you wanted to taste her nipples!  You shake your head and try to focus, but fail completely as the succubus lifts her sticky latex skirt, exposing her dripping snatch to you.  Your eyes lock on to the wondrous slut's fuckhole as her fingers tease you with glimpses between her folds every few seconds while she continues pleasuring herself.  With a flash of intuition, you realize what you were trying to think about:  finding something hard to penetrate that perfect hole with.  That little hungry snatch deserves to be filled with something throbbing and hard...\n\n", false);
        outputText("\"<i>OoooooOOOOH!  ...you're feeling it now are-AH AH YES-you dear?  Mmmmm yes, I bet this pussy is all you can think about.  I wonder if you can feel it-aaahhhhhhmmmm-yet?  This is always, like, the best part...</i>\" gasps out the succubus as she pleasures herself.  You wonder what she could be talking about as ", false);
        if (player.vaginas.length > 0) outputText("your " + clitDescription(player) + " parts your folds, growing harder.", false);
        else outputText("a fleshy growth erupts from your pale flesh, growing harder.", false);
        outputText("  In seconds you're playing with it, tugging the sensitive button as it fills up with more and more blood, growing bigger and harder than ever before.  Your legs give out as you begin stroking it with feverish intensity, barely registering as it grows to nearly eighteen inches in length, not noticing the increasingly veiny surface or different texture at the tip.  You force yourself to stop as a sudden truth asserts itself upon your consciousness - you need to shove your clit-like cock into a pussy.  You need to cum inside that hungry slut's blue spunk-receptacle.\n\n", false);
        outputText("You stand on shaky legs and lunge forwards, impaling the slutty nurse on your new tool with a violent animalistic passion.  Fucking her roughly, you lick her nipples to finally get the taste you've ached for.  Girl-cum squirts from the sloppy fuck-hole of the latex-nurse underneath you as you fuck her like a desperate animal.  She squeals with pleasure, splitting her legs wide apart to encourage your new maleness.  Your eyes roll back from the drug-enhanced pleasure of her dripping cunt as a male orgasm rocks your mind.  Mixed fluids splatter your pistoning hips as you do what you were always meant to do - feed and pleasure succubi.  Somehow your tool remains rigid and your hips continue plunging your new cum-spigot deeper and deeper into your mistress as the next orgasm begins to build inside your drug-addled mind, even as you black out.", false);
        player.cocks.createCock();
        player.cocks[0].cockLength = 16;
        player.cocks[0].cockThickness = 1.5;
        // [[[[To bad end!]]]
        player.orgasm();
        doNext(factoryFinisher);
    }
}

export function succubusVictoryRape(): void {
    spriteSelect(55);
    clearOutput();
    player.slimeFeed();
    // MALE
    if (player.cocks.length > 0 && (player.gender != 3 || rand(2))) {
        // (LUSTY)
        if (monster.lust > 99) outputText("Panting hotly, the succubus staggers towards you, her eyes fixated on the bulge in your crotch.  Dark viscous liquid drips from her dusky folds as her hips undulate hypnotically.  Blue fingers smear the corrupted lubricants over the smooth outer folds of her sex as she lies back enticingly, giving up on anything but bedding you.  In moments your " + player.armorName + " are on the floor and you approach your prize.\n\n", false);
        // (HP)
        else outputText("The succubus collapses on the floor, groaning in pain.  Most of her clothes have been destroyed by the combat and her blue skin is marked with deep purple bruises and bloody lacerations.  You undress, straddling your conquest and gazing down on her helpless, curvaceous form.  She looks up at you and forces a smile, licking the blood from a cracked lip and beginning to masturbate for you.\n\n", false);
        // START ZE RAEP CANNONZ
        outputText("While pondering the best way to take your horny prize, her complexion begins to change, the marks of combat disappearing from her toned body.  The demonic horns crowning her perfect visage begin withdrawing into her head, and her hair ", false);
        if (player.hairLength > monster.hairLength) outputText("lengthens", false);
        else outputText("shortens", false);
        outputText(", shifting to " + player.hairColor + ".  The bone structures of her cheeks, nose, and face shift ever so slightly, and you suddenly realize you are looking down at a slutty version of yourself!  You aren't sure if it's the growing pool of succubus fluid below you or how hot your female twin is, but your " + cockDescript(game.player, 0) + " is as hard as a rock.\n\n", false);
        outputText("Well, you DID decide to rape her, and now you know that you ARE smoking hot.  You shrug and shove your fem-double's legs apart, exposing her glistening fuck-target.  You bend down and bite her nipple as you position yourself at her entrance, allowing her to grasp your " + cockDescript(game.player, 0) + " and coat it with her slick dark fluids.  It tingles as the tainted cunt-juices wick up into your dick like the oil from a lantern back home. At first it burns painfully, as if badly sunburned, but you adjust to the discomfort and marvel as your skin turns blackish-purple. Midnight-colored nodules sprout along the upper and lower portions of your " + cockDescript(game.player, 0) + ", perfectly shaped to tease clits.  Just under its head, a ring of larger growths emerge, somewhat pointy, but flexible, rubbery and incredibly sensitive.  Your " + cockDescript(game.player, 0) + " gets harder and harder as it grows slightly beyond its normal size.  It tugs your groin forwards, practically leaping towards its demonic mate on its own volition.  You cave in and press forwards, parting her folds and submerging your crown in corruptive bliss.\n\n", false);
        // ((TOO BIG))
        if (player.cocks.cockArea(0) > monster.vaginalCapacity()) {
            outputText("But the pleasure is short-lived, as even her altered physiology can't accommodate your massive tool. With a grunt of frustration you yank your hungry demonic cock away from your goal.  She smiles knowingly and massages her breasts, releasing streams of the same black fluid from her tumescent nipples. It coats the valley of her pornstar-sized breasts, allowing the fluid to flow down and pool in her tight little belly button.\n\n", false);
            outputText("\"<i>This will, like, be even better anyways stud!</i>\" coos a higher pitched you, smashing her tits together wetly for emphasis.  Viscous strings of lubricants form a mesmerizing lattice between her mountainous tits as she puts on a show for you.  Entirely of its own accord, your " + cockDescript(game.player, 0) + " drags you into her web of corruption, plopping itself firmly into the river of desire that fountains from the peaks on either side. With a steady rhythm, you rock your " + hipDescription(player) + " back and forwards, plunging into her delicious fuckpillows without abandon. With an inhuman strength, she pushes them together, forcing them to completely encircle your over-sized pole with a tight ring of corruption-dripping tit-flesh.\n\n", false);
            player.cocks[0].cockType = CockTypesEnum.DEMON;
            // [normal]
            if (player.cumQ() < 50) outputText("Droplets of pre begin to escape your cock-slit every time your sensitive nodules pass between your fem-clone's wondrous pleasure-tits.  You fuck harder, no longer caring if it's your choice or your cock's, mashing your purplish head against her lips with every stroke.  The flash-fire of an orgasm sweeps over you, over-engorging the nodules all over your cock and doubling their size.  Your hips resort to tiny rocking motions as you rub your cock-slit into your fem-self's open mouth, blasting thick ropes of tainted black cum into her mouth. Though you quickly empty of cum and collapse onto her, your " + hipDescription(player) + " continue to fuck like a machine.  All you can do is hang on to your meat and try to stay conscious as your demonic prick feasts on your double.\n\n", false);
            // [high]
            if (player.cumQ() >= 50 && player.cumQ() < 500) {
                outputText("A steady stream of pre begins to escape your cock-slit, drooling over your double's face and tits as you pound away at her bouncing ring of titflesh.  Every new bump and nodule seems as sensitive as your entire maleness used to be.  Every thrust into the dark wet prison only makes your pre-cum drool faster and your " + cockDescript(game.player, 0) + "'s new adornments grow fuller and even more tender.  In a flash, the fire of orgasm overwhelms your body's new taint-saturated cock.  Like a kinky 'wave', each nodule from the base to the pointy ring at your crown grows larger as your muscles clench.  ", false);
                if (player.balls > 0) outputText("Your " + ballsDescriptLight(player) + " practically glow with relief as they begin contracting.  Their entire surface is covered with black veins that radiate from your demonic prick, sharing the corruption with your sperm factories.  ", false);
                outputText("You throw back your head as the first wave of release pours from your tip, splattering your female clone with inky black cum!  The color startles you for a moment before the next blast moves down your shaft, visibly distending your urethra until it bursts free to coat her hair.  Your hips keep moving of their own accord, massaging the crown-ring with tits during each thrust forwards and accompanying cumshot.  By the fourth load, your double is opening her soaked lips wide and guzzling it down.  By the sixth she's sputtering and coughing as the black sex juice sloughs off her.  By the ninth she's managed to clamp her lips over your cock-tip, and her throat bulges ludicrously with the effort of taking each load.  Thankfully, your orgasm finally winds down.  As the last few globs of inky jism escape from you, you realize your hips are still moving, plunging your massive possessed tool into its new favorite place.  Sighing, you hang onto your endowment and try to stay conscious in spite of your exhaustion and the overwhelming feelings coming from your groin.\n\n", false);
            }
            // [ultrahigh]
            if (player.cumQ() >= 500) {
                outputText("A river of pre-cum begins pouring from your cock-tip's slit, soaking your slutty double's face and tits as it mixes with the corruptive fluids already smeared about.  The alien bumps and nodules upon your " + cockDescript(game.player, 0) + " flex and twitch at every pass through the fuck-able foe's soft tits, slowly growing as they absorb more of your slut-self's taint.  The tight squeeze around your newly retextured " + cockDescript(game.player, 0) + " overwhelms any sense of control you may have had as your arousal-soaked groin takes over completely.  You begin pounding the tit-pussy as if your life depended on it, jack-hammering  your " + cockDescript(game.player, 0) + " forward and back hard enough to make the mountains of breast ripple and shake like jello during an earthquake.  The ring of pointed nodules around your crown continues to swell and grow with every pass through the inky passage, soaking up more and more of the corruption until they are each nearly two inches long.  Overwhelmed by the pleasure, your eyes roll back and a mighty orgasm comes to boil in your groin.  ", false);
                if (player.balls > 0) outputText("Your " + ballsDescript(player) + " twitch and shake, the veiny surface of your sack darkening as the corruption begins to fill them.  ", false);
                outputText("\n\nLike a perverted version of the wave, the nodules along your length fill with blood, doubling in size along your length as a massive bulge of cum rushes out your urethra.  Black cream drizzles from the tiny growths as the first blast of cum passes into your dick's crown moments before erupting like a volcano.  One second the sexy female version of you is moaning like a whore and licking her lips. The next she is sputtering and gasping as a half-gallon of inky black cum soaks her from head to tits.  Heedless of her discomfort, your legs keep sawing your " + cockDescript(game.player, 0) + " deeper into this perfect titfuck as more thick bulges of tainted spunk begin to stretch your urethra on their way out.  You babble incoherently as your cock's tip plants itself against her open lips, blasting even more spunk directly into her waiting gullet.  Her cheeks bulge comically as the stuff drips from her nose, but somehow she manages to swallow the bulk of it, her hands vigorously milking your " + cockDescript(game.player, 0) + " with her fuck-bags.  By the time the third jet of cum erupts, she's unhinged her jaw and somehow taken the head into her mouth, giving unfettered access to pump her belly full of your black jism.  You groan with uncontrollable pleasure as her belly fills with spunk.  Her eyes roll back as the next blasts expand her belly further, at first making her look slightly pregnant and then gradually stretching her belly until she looks like she could have minotaur twins.  You lose count of how much cum you put into her, but eventually she can take no more and your cock is pushed free by the pressure, splattering her face again.  Far from finished, you blast cum over her face as you realize she's lost consciousness; her eyes are totally rolled back and her tongue lolls from her mouth like that of a sleeping bitch.  Eventually your orgasm winds down, but not before leaving her in a 4 inch deep puddle of spunk, looking like more like a blue balloon full of dark water than woman.\n\n", false);
            }
            outputText("Still, your possessed maleness is far from finished as it continues to slide along her belly and between her still-dripping tits, and before long you feel another orgasm building.  You hang on for dear life, hoping just to stay conscious through the ordeal...\n\n\nHours later you pull away, sated.  For now.", false);
        }
        // ((IT FITS))
        else {
            outputText("You plunge in to her velvety depths and feel her rippling cunt-muscles contract tightly around you for a perfect fit.  She gasps as each cock-distorting nodule bounces her two-inch clitty, making your mirror image moan like a bitch in heat.  The corrupted fluids dripping from her snatch squelch loudly, making your groin burn with pleasure.  ", false);
            if (player.balls > 0) outputText("Looking down, you even see the veins on your sack darkening to solid black as the corruption begins tainting your sperm-factories.  ", false);
            outputText("You pull back, letting the ring of pointed fleshy barbs spring free before plunging them back in. The pleasure makes you swoon, nearly forcing you to orgasm on the spot.  ", false);
            if (player.breastRows.biggestTitSize() > 0) outputText("Your female double reaches down to pinch your nipple, spurring you on, \"<i>Please, could you like, cum for me?</i>\"", false);
            // New PG
            outputText("\n\n", false);
            player.cocks[0].cockType = CockTypesEnum.DEMON;
            outputText("The succubus bucks her hips weakly, still clearly defeated, but egging on your orgasm as dark fluids squelch free from her quim.  \"<i>Please... can't you see how hot you're making me?  I've made your cock perfect, so please make me cum!</i>\" she begs as she quivers with delight.  ", false);
            outputText("You pause to think about it, not noticing that your groin is pounding away with furious energy, splattering cum and pre over her thighs as your new cock's instincts take control from your waist down.  Gasping with sudden pleasure, you feel a flash of heat pass through your tainted meatstick as an orgasm builds.", false);
            // New PG
            outputText("Each of the new bumps and rounded spines of your " + cockDescript(game.player, 0) + " flood with blood, doubling in size as orgasm overtakes you.  ", false);
            outputText("Your hips bury your entire length inside her, acting on their own as your " + cockDescript(game.player, 0) + " clenches, pouring more and more spunk inside her", false);
            if (player.balls > 0) outputText(" as your balls empty their load queue", false);
            outputText(".  ", false);
            // Big cum
            if (player.cumQ() >= 50 && player.cumQ() < 400) outputText("You inhale as black cum spatters from her entrance, her belly distending slightly as you empty what feels like a gallon inside her.  ", false);
            // ((Ginormohuge))
            if (player.cumQ() >= 400) outputText("Gasping in pleasure and surprise, you marvel as her belly visibly expands with each eruption of your dark load.  At first it looks like a tiny belly, but by the time the orgasm finishes, your girlish double looks like a woman in her ninth month of pregnancy – with twins.", false);
            outputText("\n\nYou pant with exertion and pull back, only to have your " + cockDescript(game.player, 0) + " plunge right back in. Beginning another rough fucking session, your hips force-fuck her beyond your control.  Exhausted, you lean over her, figuring you may as well enjoy your double's wondrous breasts until your demonic cock has finally sated itself.  You just hope you don't black out from the waves of pleasure each of your new nubs radiates.\n\n\nHours later you pull away, sated.  For now.", false);
        }
        outputText("\n\nThe succubus licks her fingers clean, looking totally recovered.  In the blink of an eye, she dashes out the door, disappearing.", false);
        player.orgasm();
        dynStats("cor", 5);
        cleanupAfterCombat();
    }
    // FEMSAUCE
    else {
        if (monster.HP < 1) outputText("Your foe staggers and falls hard on her ass, utterly defeated.  Her bruises and lacerations slowly fade and heal, regenerating with the aid of her demonic powers.  You easily tear through her clothes, leaving only the damaged stockings that gird her legs. It doesn't take much to force her down on her back and straddle her as you disrobe, ready to take your pleasure.\n\n", false);
        else outputText("Your foe drops to her knees, stuffing three digits into her greedy snatch as arousal overcomes her desire to subdue you.  With great care, you approach your insensible enemy and tear off her clothes, leaving her wearing only the remains of her stockings as you force her down on her back.  As if possessing a will of their own, her legs lewdly spread as you disrobe.\n\n", false);
        outputText("Her budding clit rises from between her folds, hardening like a tiny three inch dick.\n\n", false);
        if (player.breastRows.biggestLactation() > 1) {
            outputText("<b>You could scissor with her, or maybe force-feed her some of the milk you've backed up.  Which will it be?</b>", false);
            simpleChoices("Scissor", dungeonSuccubusForceScissor, "ForceFeed", dungeonSuccubusForceFeed, "", null, "", null, "", null);
        }
        // No choices if not lactating...
        else {
            dungeonSuccubusForceScissor();
        }
    }
}

export function dungeonSuccubusForceScissor(): void {
    spriteSelect(55);
    clearOutput();
    outputText("You shiver with anticipation as you hook your leg under her thick thighs, lining up your " + vaginaDescript(player, 0) + " as you press forwards.  The anticipation builds as your matched honeypots grow ever closer.  Making contact, your folds part as her purplish-red clit slips betwixt your nether-lips, vibrating slightly in tune with the succubus' heartbeats.  You gasp, feeling your own " + clitDescription(player) + " erecting and rubbing against her smooth mound.\n\n", false);
    if (player.clitLength >= 3) outputText("You groan with wanton desire as your " + clitDescription(player) + " continues to grow and grow until reaching full size and slipping inside the defeated slut's sloppy pleasure-hole.  ", false);
    outputText("It takes only a few seconds to get the succubus' juices really flowing, the sounds of your grinding hips dissolving into a cacophony of liquid squelches.  The gooey corrupt fem-cum tingles, spreading warmth through every patch of skin it touches.  Your locked hips writhe and twist with her's, eliciting pants and squeals from the both of you.  In no time flat, you find yourself cumming and feel your " + vaginaDescript(player, 0) + "'s muscles clench hungrily with an unquenchable desire to be filled.  The succubus shivers in pleasure, probably feeding off your orgasm.  You back off, fingering your " + vaginaDescript(player, 0) + " languidly and denying her a full meal.  Pouting, the succubus dips her fingers back in, determined to cum.", false);
    outputText("\n\nYou turn away with a bemused sigh.  When you glance back, she has vanished!", false);
    player.orgasm();
    dynStats("cor", 1);
    cleanupAfterCombat();
}

export function dungeonSuccubusForceFeed(): void {
    spriteSelect(55);
    clearOutput();
    outputText("You chuckle as you decide to release some of the pent up pressure in your " + allBreastsDescript(player) + ".  Laying down over your conquest, you grasp her wrists and pin them to the floor as you shove your tits in her face", false);
    if (player.breastRows.biggestTitSize() > 6) outputText(", nearly smothering the succubus with the swell of tit-flesh", false);
    outputText(".  You jiggle back and forth, lining up a " + nippleDescription(player, 0) + " with the demon's parted lips.  You press your weight down threateningly, making it clear you could suffocate her with a boob.\n\n", false);
    outputText("\"<i>Drink up bitch, these tits are full!</i>\" you command.\n\n", false);
    outputText("The succubus tentatively takes a " + nippleDescription(player, 0) + " into her mouth, sighing at the tangy taste of your sweat-drenched skin.  Her lips gently suckle, wrapping around the perky hardening nub as it fills with arousal and milk.  You feel something let go inside your " + breastDescriptOfRow(game.player, 0) + " and the succubus smiles, now working to free more of your trapped cream.\n\n", false);
    if (player.breastRows.biggestLactation() < 2) outputText("Her flexible tongue easily curls around one of your " + nippleDescription(player, 0) + "'s, letting her pull and tug on it as she increases the suction from her lips.  Your body rewards her efforts with a faster flow of milk that she sucks down as if she were starving.\n\n", false);
    if (player.breastRows.biggestLactation() >= 2 && player.breastRows.biggestLactation() < 3) {
        outputText("Her flexible tongue wraps around your milk-engorged nipple, pulling it tightly as she increases the suction of her lips.  Your body wastes no time rewarding her and she begins gulping down a steady supply of your breastmilk with a pleased expression on her face. You muse to yourself that perhaps succubi are masochists as breast-milk runs freely from your un-milked ", false);
        if (player.breastRows.totalBreasts() > 2) outputText("tits.\n\n", false);
        else outputText("tit.\n\n", false);
    }
    if (player.breastRows.biggestLactation() >= 3 && player.breastRows.biggestLactation() < 4) {
        outputText("Her flexible tongue wraps around a milk-swollen nipple, immediately squeezing out a jet of thick breast-milk.  The tongue squeezes and tugs while the succubus ramps up the suction between her thick bee-stung lips.  Your body rewards her with fountains of milk, forcing her to visibly gulp and struggle to keep up with the heavy flow.  Milk runs freely down the " + player.skinDesc + " on your chest, pooling around the succubus' groin and your own as the unattended nipple", false);
        if (player.breastRows.totalBreasts() > 2) outputText("s", false);
        outputText(" can't help but dribble in sympathy.\n\n", false);
    }
    if (player.breastRows.biggestLactation() >= 4) {
        outputText("Her flexible tongue wraps around a milk-bloated nipple, immediately releasing a massive spray of cream that pours into her gullet, nearly choking her.  You stifle a giggle and pull her closer.  Thankfully, her determined tongue manages to stay in place and start tugging your nipple about, releasing even more of your over-large milk production.  She struggles, her throat and cheeks bulging from your explosive output of milk, until it overwhelms her and begin to pour out of her nose.  More milk pours from your unoccupied nipple", false);
        if (player.breastRows.totalBreasts() > 2) outputText("s", false);
        outputText(" in sympathy, drenching your " + player.skinDesc + " with creamy goodness until it puddles on your captive demon.\n\n", false);
    }
    if (player.breastRows.totalNipples() == 2) outputText("As your first nipple drains, you move her to your other breast, being sure to motivate her cunt by grinding it with your " + foot(player) + ".  She squeals and sucks harder, emptying the last of your milk with a cute burp.  ", false);
    if (player.breastRows.totalNipples() > 2 && player.breastRows.totalNipples() < 6) outputText("As your first " + nippleDescription(player, 0) + " drains, you forcibly move her to the next, unleashing a fresh batch of milk for her to feast upon.  Eventually, it too dries up, so you migrate her onwards to your next " + nippleDescription(player, 0) + ".  After she drains each of your " + num2Text(player.breastRows.totalNipples()) + ", you smile happily at your now emptied breasts.  ", false);
    if (player.breastRows.totalNipples() >= 6) outputText("As your first " + nippleDescription(player, 0) + " drains, you force her over to the next, unleashing even more milk for her to feast upon.  In time, that " + nippleDescription(player, 0) + " also empties and you rotate her on to the next.  The cycle repeats seemingly endlessly as you work her from nipple to nipple, relieving the insistent pressure of your breasts and slowly filling her with your milk.  ", false);
    if (player.breastRows.averageLactation() * player.breastRows.totalBreasts() < 6) outputText("Her belly bulges slightly from all the breast-milk she's consumed.\n\n", false);
    else outputText("The succubus looks bloated and pregnant from all the milk you've forced into her.  She sloshes and moans incoherently from the strain of it all.\n\n", false);
    outputText("Despite the relief your " + allBreastsDescript(player) + " now feel, your " + vaginaDescript(player, 0), false);
    if (player.cocks.length > 0) outputText(" and " + multiCockDescriptLight(player) + " feel hungrier than ever.  ", false);
    else outputText(" feels hungrier than ever.  ", false);
    outputText("You shove your crotch into your milk-dazed foe's white-stained visage, grinding your " + vaginaDescript(player, 0) + " into her mouth until you cum all over her", false);
    if (player.cocks.length == 0) {
        temp = rand(3);
        if (player.vaginas[0].vaginalWetness >= VaginaWetness.SLAVERING) outputText(", soaking her with girl-cum.", false);
        else {
            if (player.vaginas[0].vaginalWetness <= VaginaWetness.WET) outputText(", slicking her face with girlish cum.", false);
            else outputText(", drenching her with a deluge of girlcum.", false);
        }
    }
    else outputText(", and unloading a wave of hot spunk into her hair.", false);
    outputText("\n\nYou push her over, noting that her freed fingers immediately bury themselves in her demonic snatch, loudly squelching as she tends to her own arousal.  Her perfect visage is a mess, coated with musky girlcum", false);
    if (player.cocks.length > 0) outputText(" and a thick layer of spunk", false);
    outputText(".", false);
    outputText("\n\nYou turn away with a bemused sigh.  When you glance back, she has vanished!", false);
    dynStats("lus", -50);
    cleanupAfterCombat();
}
