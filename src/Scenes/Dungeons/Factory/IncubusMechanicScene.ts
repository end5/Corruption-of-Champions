function talkToIncubus(): void {
    spriteSelect(30);
    clearOutput();
    if (player.keyItems.has("Hentai Comic") >= 0) {
        outputText("The incubus speaks to you with a calm, deep voice, \"<i>And so the insect, heedless of its path, stumbled directly into the spider's web.  Tiny insect... wait, what is that book you're carrying?  Is that hentai?  It IS!  Let me offer you a deal – I'm not really hungry or interested in fighting. So if you hand over the comic, I'll happily ignore your presence here. Though, I guess you could also just submit. Then I could put you to work and still get the comic.</i>\"");
        simpleChoices("Fight", startIncubusFight, "Trade", tradeComic, "Submit", submitToIncubus, "", null, "", null);
    }
    else {
        outputText("The incubus speaks to you with a calm, deep voice, \"<i>And so the insect, unaware of its path, stumbles directly into the spider's web.  Tiny insect, you have little to offer me, but everything to offer our facility.  Why don't you come along quietly?</i>\"");
        simpleChoices("Fight", startIncubusFight, "Submit", submitToIncubus, "", null, "", null, "", null);
    }
}

function startIncubusFight(): void {
    spriteSelect(30);
    player.effects.create(StatusAffects.FactoryIncubusDefeated, 0, 0, 0, 0); // Won't matter if you lose
    startCombat(new IncubusMechanic(), true);
}

function submitToIncubus(): void {
    spriteSelect(30);
    outputText("\"<i>It is good to see the insect accept its fate as the spider closes in,</i>\" intones the strange demonic mechanic as he takes you by the arm and leads you deeper into the facility.  ");
    if (player.effects.findByType(StatusAffects.DungeonShutDown) >= 0) {
        outputText("\n\nYou enter the main milking chamber, and the incubus gives a start when he realizes what has happened.  With a grunt of rage he throws you through the doorways back into his chamber.  The demon stalks after you, taking up a fighting stance.");
        doNext(startIncubusFight);
        return;
    }
    outputText("You are brought into a room full of moaning humans, lined up in machines along the walls. You can see they're apparently sorted by age, as the victims' hair turns more and more grey and silver as you look down the line toward the far wall. All of them are hermaphrodites, the older individuals seeming to have larger breasts and genitals than the younger ones.  Most have a number of syringes embedded into their bodies, pumping them full of tainted chemical aphrodisiacs and demonic mutagens.  Clear cups and tubes are attached to leaky nipples, pulling steady streams of milk from the insensible captives as they pant and moan like drug-addicted sluts.  Similar tubes cradle their enhanced man-hoods, rhythmically squeezing cum from their constantly orgasming bodies.  Hoses suck away the jizz and milk, pumping it to places unknown.  Despite yourself, you are beginning to be majorly turned on, realizing that you'll probably become another milk-dripping pleasure-addict in a few minutes.\n\n");
    outputText("\"<i>Time to serve your purpose, insect,</i>\" says the incubus, gesturing towards an empty harness. You stand immobile, either from fear or lust, until the incubus shoves you into the machine.  It automatically straps you down, leather pieces crisscrossing over your body and holding you in place.  You see something move at the edge of your vision, but due to the harness you can't turn your head to see it.  Something sharp pinches your neck and you fade to blackness....");
    doNext(factoryFinisher);
}

function tradeComic(): void {
    spriteSelect(30);
    clearOutput();
    outputText("You hand over the Hentai Comic tentatively to the male sex demon.  As soon as he has it in his grubby mitts he sits down and starts thumbing through the pages, toying with his half-hard member the entire time.  He must really like porn.");
    player.keyItems.remove("Hentai Comic");
    player.effects.create(StatusAffects.IncubusBribed, 0, 0, 0, 0);
    doNext(playerMenu);
}

export function incubusLossRape(): void {
    player.slimeFeed();
    outputText("", true);
    // Nipplefuck city
    if (player.breastRows.hasFuckableNipples() && player.lust >= 100) {
        outputText("Molten arousal pumps through your veins, burning away your reason with an unquenchable desire to mate.  You drop your top, exposing your " + allBreastsDescript(player) + " to your foe in a submissive display. Lowering your eyes, you hope you can tempt him to plug your " + nippleDescription(player, 0) + " with his demonic prick.  You roughly squeeze each sensitive tit, trailing your fingers down the sensitive breast-flesh towards your rapidly dampening fuck-holes.\n\n", false);
        outputText("Your eyes relax as pure sensation overwhelms your already over-excited body.  Your fingers find your nipple-holes, locking around them while tugging and squeezing, stretching them tight with pleasure and pain.  You cast a seductive glance to the incubus' groin, noting that he's been taken in by your wanton display.  He takes a step, his cock rippling and twisting as it shifts and changes before your eyes. It divides it half, splitting into two full-sized pricks.", false);
        if (player.breastRows.totalNipples() > 2) outputText("  Each of those divides again, splitting into four prehensile penises.", false);
        if (player.breastRows.totalNipples() > 4) outputText("  They continue dividing until his wriggling mass is sufficient to penetrate every single nipple and then some.", false);
        outputText("\n\n", false);
        outputText("A pleading moan escapes your lips and your captor obliges you, the cocks wriggling forward under their own power and sliding into your slippery " + nippleDescription(player, 0) + "s with ease.  Each member is perfectly sized to stimulate you without over-stretching your tender breast-flesh.  You barely stifle a giggle, drunk on enough pleasure to shatter a lesser mind.  Your giggling is rudely interrupted by something hard and slick forcing itself between your lips.  You smile and slurp on it like a pacifier, swallowing droplets of pre-cum as his tentacle-like pricks fuck your breasts hard and fast, ", false);
        if (player.breastRows.biggestLactation() > 1) outputText("splattering milk and pre everywhere.\n\n", false);
        else outputText("splattering your tits with escaped sexual fluids.\n\n", false);
        outputText("The demon tenses, pulling your head forwards and burying your nose against his belly.  The dick in your mouth slides down your throat, hanging just above your belly as it begins to fill your gut with bursts of demonic warmth.  Black cum erupts from your nipples as his orgasm overwhelms their meager storage capacity, soaking your tits in his corruptive essence as the pleasure finally breaks your mind.  Your eyes roll back into your head as you begin cumming... and cumming... and cumming. The orgasm drags on and on as more and more cum pours into your body.  Like a passenger in a car you see what's happening but have no control.  Your body is used and abused for hours before you finally drift off to sleep.", false);
        player.orgasm();
        dynStats("cor", 20);
        if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0)
            doNext(factoryFinisher);
        else cleanupAfterCombat();
        return;
    }
    // Tentacle gangbang
    else {
        if (player.lust > 99) outputText("Molten arousal pumps through your veins, burning away your reason with an unquenchable desire to mate. You drop your top, exposing your " + allBreastsDescript(player) + " to your foe in a submissive display, ", false);
        else outputText("You lower your top, exposing your nubile form to your foe in a submissive display, ", false);
        outputText("lowering your eyes and fixating on his now-rigid demonic member.  Right before your eyes, it begins splitting and dividing into thinner prehensile penises that squirm about in the air, each one reminding you of a snake on the prowl.  ", false);
        if (player.cor < 80) outputText("In a disgusting display", false);
        else outputText("As you grope yourself noisily with your hand into your undergarments, a salacious smile on your lips", false);
        outputText(", you watch as his pricks pulse and thicken out until their masses are as wide as his original dick.\n\n", false);
        if (player.cor >= 80) outputText("As you realize their size and number, you open your eyes wide and smile broadly, reflexively spreading your legs wide, practically begging him to fuck you.  ", false);
        outputText("In a flash, each fat tentacle-cock whips out and surrounds your body in slick demon-flesh.  The tentacles constrict, working in pairs to take off every piece of your " + player.armorName + ".  ", false);
        if (player.breastRows.biggestTitSize() >= 2) outputText("They make sure to rub each of your breasts, spending a few seconds smearing slick pre-cum into your " + nippleDescription(player, 0) + ".  ", false);
        outputText("A pair of them slides into your undergarments, pressing against your needy crotch and teasing your " + assholeDescript(player) + " with more slick demonic cum.  ", false);
        if (player.cor < 80) outputText("You wriggle and whine,", false);
        else outputText("You grab the thick tentacle-cock working on your cunt with both hands, as you can barely grab it with one. Then,  while letting out moans fit for a bitch in heat, which you are, you begin", false);
        if (player.vaginas.length > 0) outputText("squeezing your legs around them and grinding your " + clitDescription(player) + " against the oddly textured demon-cock.", false);
        else {
            if (player.balls > 0) outputText("grinding down against the ribbed and textured demonic cock as it slides between your " + ballsDescriptLight(player) + ".", false);
            else if (player.cocks.length > 0) outputText("squeezing your legs around the thick demonic flesh as a steady dribble of pre-cum drips from your " + cockDescript(game.player, 0) + ".", false);
            if (player.gender == 0) outputText("grinding suggestively on your captor's rods, barely noticing as the last of your " + player.armorName + " falls away.", false);
        }
        outputText("\n\n", false);
        // FUCKKKING
        // Female paragraph
        if (player.vaginas.length > 0 && (player.cocks.length == 0 || rand(2))) {
            outputText("The incubus at last decides to tend to your over-aroused body and pulls you off the ground with his tentacles, suspending you in mid-air.  ", false);
            if (player.cor < 80) outputText("You feel your " + legs(player) + " lifted and pulled tight as countless demonic cocks encircle your body, binding and constraining you further.  You whimper as a demonic tentacle probes your back door while a thicker one lines itself up just below your " + clitDescription(player) + ".  ", false);
            else outputText("As he lifts you, you spread your legs, showing him your cunt which is dripping wet from anticipation, and grabbing your ass to give him a perfect view of your " + assholeDescript(player) + ".  You then beg him, between lecherous moans, to use his three biggest tentacles, as you want to have the most sensations.  With a sadistic smile, he lines up two tentacle cocks about as big as your arm over your " + vaginaDescript(player, 0) + " and your " + assholeDescript(player) + ".  ", false);
            outputText("You then giggle and try to wiggle your " + hipDescription(player) + " forward, begging for him to take you and quench the fire burning in your " + vaginaDescript(player, 0) + ".  The incubus obliges, pressing forth with both drooling members and simultaneously plugging your front and back doors.  ", false);
            if (player.cor < 80) outputText("You gasp from pleasure and surprise, ", false);
            else outputText("You open your mouth wide, as the enormous tentacle-cocks force their way in, dripping demonic pre-cum all over. Quickly, it acts as additional lubricant, and the pain largely subsides.  You find that these massive demonic cocks' size is perfect to stimulate, in an incredibly pleasurable way, all sides of your cunt at once, and to stretch your ass just a bit over your preferred size.  As the incubus starts moving his appendages in rhythm, you're lost in heavenly pleasure, eyes closed, letting out deafening moans of lust, your legs and arms dangling without any thought for dignity.  You are deeply ", false);
            outputText("enjoying the knobbed texture of his shafts as you're double-penetrated by a single demon. The incubus smirks as another cock-tentacle wraps itself up around your neck like a shiny student collar and plugs your noisy little mouth.  You groan into his member as you're ", false);
            if (player.cor < 80) outputText("squeezed and caressed by the writhing tentacle-pricks in and around your body, lost in the pleasure and taste of demonic pre-cum.\n\n", false);
            else outputText("getting roughly fucked by the two tentacle-cocks at the same time.  Taking the tentacle-cock in your mouth with both hands, you eagerly swallow every bit of demonic pre-cum, then suckle on the huge cock-slit. \n\n", false);

            // FemCum
            if (player.clitLength > 3) outputText("You nearly cum on the spot when the cock fucking your pussy loops its length around your " + clitDescription(player) + ", the cum-slickened coils driving you mad with pleasure as they coil, slide, and jerk around your clit as if it was a cock.  ", false);
            else outputText("You nearly cum on the spot when the cock fucking your pussy curves up to rub its textured nodules against your " + clitDescription(player) + ".  ", false);
            cuntChange(player, player.vaginalCapacity() * .8, true);
            if (player.cor >= 80) outputText("You cum more times than you are able to count, each time causing a tightening of your fuckholes, which increases the rubbing against the demonic nodules and sends another wave of pleasure to your dazed brain.  You begin to drool freely, reveling in this most unholy mating.  ", false);
            outputText("The prick in your mouth surges forward, sliding deep into your throat.  The coils around your neck tighten in response, choking your neck into a tight cock-sleeve as you feel bulges of cum moving along its length.  In moments you feel your belly starting to grow full, sloshing with cum as you become desperate to breathe.  The tentacles lodged in your " + assholeDescript(player) + " and " + vaginaDescript(player, 0) + " react in similar fashion, stretching you wide as they begin pumping your body full of vast quantities of spunk.  A few free tentacles begin spurting gobs of the white stuff onto your " + player.skinDesc + ", soaking you in the stuff as you black out from a combination of oxygen deprivation and pleasure.", false);
            player.orgasm();
            dynStats("cor", 25);
            buttChange(player, monster.cocks.cockArea(0), true);
            if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0)
                doNext(factoryFinisher);
            else cleanupAfterCombat();
            return;
        }
        // Male/Genderless
        else {
            outputText("The incubus at last decides to tend to your over-aroused body and pulls you off the ground with his tentacles, suspending you in mid-air.  You feel your " + legs(player) + " lifted and pulled tight as countless demonic cocks encircle your body, binding and constraining you further.  You whimper as a demonic tentacle probes your back door, slathering your " + assholeDescript(player) + " with a nubby cock-head as it slowly presses forward and fills you with incredible tainted warmth.  Each nub and ridge that grinds past your sphincter bumps against the organs in your backdoor and fills you with pleasure that only increases as more of the demonic pre-cum is wicked into your body.  The gasp you started fades into a soft croon of pleasure before being muffled entirely by another thick prick.  The shaft belonging to the dick in your mouth curls around your neck like the collar a pet or submissive slut would wear.", false);
            if (player.cocks.length > 0) outputText("  As your body's orifices fill with more and more dripping demonic dick-flesh, your " + cockDescript(game.player, 0) + " becomes painfully hard.  Another tentacle wastes no time in wrapping itself tightly around the base like a cock-ring.  The rest of the demon's prehensile tool slides along your shaft, curling around to squeeze and jerk you off.", false);
            if (player.balls > 0) outputText("  You groan around the dick plugging your throat as another tentacle-like appendage wraps around your " + sackDescript(player) + ", pulling your " + ballsDescriptLight(player) + " down and gently squeezing them.", false);
            outputText("\n\n", false);
            // Genderless Orgasm
            if (player.gender == 0) outputText("The tainted cum mixed with the sensation of fullness provide you with pleasures beyond what your genderless body could accomplish on its own.  You writhe as the demon face-fucks you with one tendril while another continues to bury itself ever-deeper into your abused " + assholeDescript(player) + ".  ", false);
            if (player.cocks.length > 0) outputText("The cock-tentacle around your " + cockDescript(game.player, 0) + "  increases the pace of its stimulation as it begins to spurt hot wet cum over you, giving it lubrication as it jacks you off while staying tight around your base to prevent you from an orgasming.  ", false);
            outputText("You feel cum pulse through the tentacles encircling you as the incubus loses control of his tentacles.  Cum pumps into your belly, suffusing you with drug-like warmth as the tentacle around your neck pulls tight enough to squeeze the cock inside your throat.  You squirm and gasp for oxygen as spooge begins unloading into and around your body to the point where you aren't sure where your body begins and the demonic-spunk ends.  You twitch in what you assume is orgasm as you fight to breathe; all the while more cum is squeezed into your stuffed belly and ruined anus. The tentacle in your ass backs out slowly, having filled every inch of your intestines with cum, until it pops free with a splatter.", false);
            outputText("\n\n", false);
            if (player.cocks.length > 0) {
                outputText("Being so thoroughly used and stimulated pushes you over the edge of orgasm, and your ", false);
                if (player.balls > 0) outputText("balls", false);
                else outputText("prostate", false);
                outputText(" unloads with enough force to squeeze past the constrictor clutching at your groin.\n\n", false);
                // Small cum
                if (player.cumQ() < 50) outputText("You groan and orgasm with enough force to splatter a few ropes of cum into the sea of demon-spunk that soaks you from head to toe.  ", false);
                // Big cum
                if (player.cumQ() >= 50 && player.cumQ() < 400) outputText("Your orgasm goes off like a shotgun blast, splattering the incubus with a huge wad of cum.  It's but the first of many, and though each load of jizz is of comparable size, the force behind them diminishes until the last few blasts drip down your body and soak your " + legs(player) + " and " + feet(player) + ".  ", false);
                // Huge cum
                if (player.cumQ() >= 400) outputText("Your orgasm goes off like a volcano, visibly distending your " + cockDescript(game.player, 0) + " as a huge wave of cum erupts from your groin, painting the incubus and floor with your spoo.  You cry from the sheer pleasure as the next wave builds and erupts, nearly as large as the last.  The demon-cock controlling your prick aims this blast up, forcing you to soak your " + hairDescription(player) + " and face with slick goo. The orgasming drags on and on while you slowly turn blue from oxygen deprivation. Before long, both you and the incubus are buried under a wave of white.  ", false);
            }
            outputText("The feeling is so intense that your " + hipDescription(player) + " twitch and move of their own volition while your eyes roll back in pleasure.\n\n", false);
            outputText("You black out just as you feel the cock-tentacle in your throat retracting. You dully feel your body drop to the ground, your pregnant-looking belly sloshing with demon jizz.", false);
            buttChange(player, monster.cocks.cockArea(0), true);
            player.orgasm();
            dynStats("cor", 25);
            if (player.effects.findByType(StatusAffects.DungeonShutDown) < 0)
                doNext(factoryFinisher);
            else cleanupAfterCombat();
        }
    }
}

export function incubusVictoryRapeBackdoor(): void {
    outputText("Every day you've spent in this corrupted landscape has made you stronger and hornier, the evidence of which now kneels at your feet.\n\n", true);
    outputText("The fight over, your eyes begin to wander. You find you cannot resist staring at the huge swinging cock exposed by the incubus' crotchless overalls. The sight ignites desire that has been building within you ever since you arrived in this corrupted land. With an unnatural hunger, you knock the defeated incubus onto his back. He closes his eyes and groans, lost in his own world of lust and pain and unable to resist as you wantonly straddle him. His tool is hot in your hand as you tease it and his cock begins to grow slick with pre-cum. You lick your lips at the sight of his now glistening member, but not for hunger of food or drink. It is another kind of hunger that longs for satisfaction, a hole that needs to be filled. Eagerly, you position his swollen glans against your " + assholeDescript(player) + " and begin to ease yourself down over the massive tool. You start slowly, but the pleasure it's giving feels so good you ram the rest of the incubus' cock deep into your " + assholeDescript(player) + ".  ", false);
    outputText("His eyes flash open as if you'd just sent a jolt of electricity through him and he regains his senses, becoming hyper-aware of what you're doing. The incubus instinctively moves to control your " + hipDescription(player) + " and " + buttDescription(player) + " as they grind against him, guiding his cock towards pleasurable areas up your " + assholeDescript(player) + " that you would never have guessed were there a short while ago.\n\n", false);
    outputText("All too soon, he grunts and shivers as loads of his hot cum begin to squirt into you. He may be cumming, but you're not done yet; each squirt of seed only fans the flames of lust within you, making your increasingly wet and noisy thrusts even harder. Enjoying the ride and still nowhere near satisfied, you start sliding up and down on his slick pole even faster than before. He halfheartedly tries to push you off as you continue draining him of his seed, your lust seemingly unquenchable. But you cannot be stopped; his efforts only add to your pleasure as he struggles and unloads underneath you. With your belly beginning to swell with the cum you're relentlessly drawing from the incubus, you don't know how much longer either of you will last. Each movement of his tool inside you heightens the fire inside you until, with an unholy roar, the pleasure peaks and wave after wave of shuddering orgasm crashes over you. Each one hits hotter and harder than the last until finally, your senses are overcome and you lose consciousness entirely.\n\n", false);
    outputText("You awaken moments later beside a sleeping, limp, and drained incubus. You have definitely come out on top from the encounter. Though you feel stretched, sticky and a little sore, for the moment at least the burning desire to fill your " + assholeDescript(player) + " is satisfied.", false);
    buttChange(player, monster.cocks.cockArea(0), true);
    player.slimeFeed();
    player.orgasm();
    dynStats("cor", 2);
    cleanupAfterCombat();
}

export function incubusVictoryRapeSex(): void {
    outputText("", true);
    // RAPE THE DEMON -
    // (BUTTRAPE - Requires Penis)
    if (player.cocks.length > 0) {
        outputText("With a few deft motions, you shift your " + player.armorName + " to expose your ", false);
        if (player.gender == 3) {
            if (player.balls > 0) outputText(multiCockDescriptLight(player) + ", " + ballsDescriptLight(player) + ", and " + vaginaDescript(player, 0), false);
            else outputText(multiCockDescriptLight(player) + " and " + vaginaDescript(player, 0), false);
        }
        else {
            if (player.balls > 0) outputText(multiCockDescriptLight(player) + " and " + ballsDescriptLight(player), false);
            else outputText(multiCockDescriptLight(player), false);
        }
        outputText(".  Having resolved to take the demon's backdoor, you approach his weakened form with brimming confidence.  He looks up, clearly hoping your plan is to squat on his throbbing member.  You dispel his misguided notion when you grab him by the horns and shove his face against the floor. He struggles weakly until you press down harder, making it clear he is to stay in position - on his knees with his head down and his ass in the air.  Circling your prey, you inspect his flawless body and carefully note that the hole at his crotch actually exposes a fair portion of his very supple and surprisingly feminine-looking backside.\n\n", false);
        outputText("You don't waste any time, gripping your " + cockDescript(game.player, 0) + " in one hand and ", false);
        if (player.cocks[0].cockType == CockTypesEnum.HORSE) outputText("pressing your thick flare ", false);
        if (player.cocks[0].cockType == CockTypesEnum.DOG) outputText("pressing your pointed tip ", false);
        if (player.cocks[0].cockType == CockTypesEnum.HUMAN || player.cocks[0].cockType.Index > 2) outputText("pressing your head ", false);
        outputText("between the incubus' cheeks towards his inhumanly smooth rear-passage.  You gasp in delight at the tight ribbed texture of his asshole as you slide ", false);
        if (player.cocks[0].cockLength > 10) outputText("deep inside ", false);
        else outputText("inside ", false);
        outputText(".  The demon underneath you grunts in an attempt to sound displeased, but it's plain to see the pre-cum he's dripping all over the floor.  What a slut!  You slap his ass and begin roughly butt-fucking him, panting with each plunge into the depths of his ridged passage, gradually increasing your tempo until your " + hipDescription(player) + " fill the room with loud slapping noises.", false);
        if (player.balls > 0) outputText("  Your " + ballsDescriptLight(player) + " swing freely, smacking into the demon's own and making both of you squeal and dribble more pre-cum.", false);
        outputText("\n\n", false);
        // (CUM)
        if (player.balls > 0) outputText("You feel your " + ballsDescriptLight(player) + " draw up tight against your body.  ", false);
        outputText("Warm heat begins to build inside your groin, pooling under the base of your " + cockDescript(game.player, 0) + ".  You realize you're about to paint this demon's gut with white, the thought only turning you on more.  ", false);
        if (player.cumQ() > 200) outputText("You groan as you feel your urethra being stretched by the sheer volume of fluid beginning to shoot through it.  ", false);
        outputText("You throw back your head and cum, slapping the incubus' ass with one hand while you grip and squeeze the jiggling flesh of his other cheek.  ", false);
        if (player.cumQ() < 50) outputText("A few thick spurts later and y", false);
        if (player.cumQ() >= 50 && player.cumQ() < 400) outputText("Thick jets of cum pump into the demon's plump backside, soon building up a wave of pressure that pushes back against you.  Y", false);
        if (player.cumQ() >= 400) outputText("A massive cock-distending bulge of cum works through your shaft, splashing into the demon's rectum in an explosive burst of pleasure. Unfortunately for your victim, it is only the first of many such cum-blasts. In no time flat, jism is spurting from his overfilled rectum while his belly looks a few months pregnant. You feel weak from discharging so much fluid, and y", false);
        outputText("ou fall back, the fluid of your orgasm dripping from your " + cockDescript(game.player, 0) + " and the gaping asshole of your latest conquest.\n\nYou turn to gather your " + player.armorName + ", and when you look back the demon is gone, leaving only a small puddle of male fluids in his wake.", false);
        player.orgasm();
        cleanupAfterCombat();
        return;
    }
    // (VAGINAL - Requires Vagina)
    else {
        player.slimeFeed();
        outputText("With a few deft motions, you shift your " + player.armorName + " to expose your ", false);
        // Herm
        if (player.gender == 3) {
            if (player.balls > 0) outputText(multiCockDescriptLight(player) + ", " + ballsDescriptLight(player) + ", and " + vaginaDescript(player, 0), false);
            else if (player.balls > 0) outputText(multiCockDescriptLight(player) + " and " + vaginaDescript(player, 0), false);
        }
        else {
            outputText(vaginaDescript(player, 0), false);
        }
        outputText(".  Striding forwards with hunger in your eyes, you give your left hand free access to your groin and slip your fingers between the moist folds of your " + vaginaDescript(player, 0) + ".  As you undulate into the incubus' personal space, a swift thrust of your " + hipDescription(player) + " buries your fingers up to the knuckles and knocks the demon onto his well-muscled back.\n\n", false);
        outputText("He looks up at you with a practiced eye, adjusting his demon-tool's size to better fill your " + vaginaDescript(player, 0) + ".  ", false);
        // (set cocksize = to 80% vaginalCapacity).

        outputText("Thankful for the gesture, you sink down onto him, letting the nubs of his crown stimulate your lips and the underside of your " + clitDescription(player) + ".  ", false);
        if (player.vaginas[0].vaginalWetness >= VaginaWetness.SLICK) outputText("In no time flat your drooling fluids soak him in slippery wetness.  ", false);
        if (player.vaginas[0].vaginalWetness < VaginaWetness.SLICK && player.vaginas[0].vaginalWetness != VaginaWetness.DRY) outputText("Before long, you've lubricated a fair portion of his tool with wetness.  ", false);
        if (player.vaginas[0].vaginalWetness == VaginaWetness.DRY) outputText("Despite your usual light lubrication, you manage to moisten the top-half of his tool with wetness.  ", false);
        outputText("Relaxing the muscles in your " + legs(player) + ", you let a few inches of his length slip inside you, every nub and nodule of his corrupted prick filling the walls of your love-canal with inhuman pleasures that make your knees weak.  A particularly delightful bump brushes your " + clitDescription(player) + ", causing your " + legs(player) + " to finally give out. The incubus' nubbly cock plunges entirely inside you.\n\n", false);
        outputText("You gasp and moan like a cheap whore, disgusted by yourself and yet so turned on by the total loss of self-control.  The incubus is leering up at you, having regained some of his lost confidence.  Despite the lust, desire and pleasure burning through the hot pole buried in your abdomen, you work up enough rage to grip his neck with your left hand and practically choke him out.  You work your hips quickly as you feel his pre start to drip into your canal, spreading tingling warmth in the deepest parts of your passage and into your cervix.  You tighten your grip as you forcibly take your pleasure, barking in displeasure at the demon, \"<i>Don't look like you're enjoying this too much bitch, or I'll take it out of your hide.</i>\"  Satisfied at the renewed look of fear in his eyes, you return to using his magnificent tool as a masturbation aid.\n\n", false);
        outputText("Unable to contain your body's desires due to either the demon's aura or his wonderful penis, you slam your " + vaginaDescript(player, 0) + " onto his member with impunity, twitching and squeezing involuntarily.  His tainted pre-cum begins seeping deep inside your uterus and you cry out with orgasmic intensity.  Your entire body clenches down, even the hand clamped on the incubus' windpipe. You feel his demon-cock swell up inside you in response to his stress, stretching your cunt taut.  His skin darkens from the lack of oxygen as he begins cumming HARD inside you.  Your womb immediately fills with his demon-seed, leaving ribbons of spunk to drip from your tightly-stretched cunt.  You sigh in delight as your muscles slowly stop quivering.  With a pleasured gasp, you rise off the distended demon-prick, and realize that you've choked your foe into unconsciousness. Still, you did let him cum, so maybe he won't mind too much when he wakes.  Feeling sensual and sated, you redress and prepare to explore the rest of the factory. ", false);
        cuntChange(player, player.vaginalCapacity() * .8, true);
        player.orgasm();
        dynStats("cor", 2);
        cleanupAfterCombat();
        return;
    }
}

// Service the incubus after winning (WHY DO THIS?  BECAUSE ITS HOT!)
export function incubusVictoryService(): void {
    player.slimeFeed();
    outputText("", true);
    outputText("You lick your lips, moistening them as you decide that the demon will provide your next 'snack'.  Touching the defeated incubus' soft skin, you grab him by the wrists and yank him to his clawed feet. Leaning him back against the wall as he sways unsteadily, you tenderly slide down his body and take the measure of his monstrous meat with your hands. The smooth skin and tiny bumps slide between each finger as his manhood firms and twitches in response.  You glance up and grab his baseball size nuts, caressing the smooth hairless sack that contains them, watching the demon-man sigh and relax with equal parts desire and relief.\n\n", false);
    outputText("You lean forwards, opening your mouth ", false);
    if (player.hairLength > 10) outputText("and brushing a strand of " + player.hairColor + " out of the way ", false);
    outputText("as his shiny purplish monster-cock fills your view. You kiss the tip, swirling your tongue around the nubbly ridge that surrounds the crown.  After a few moments of your tongue's focused attention, you are rewarded with a dollop of slightly sweet pre-cum.  You pause momentarily to smile at your victim before you wrap your hand around as much of him as you can hold and start to jack him off, slowly cramming more and more of his length inside your mouth.  Your free hand continues to fondle his balls, occasionally sliding a finger along the inside of his thigh.\n\n", false);
    outputText("You feel his balls begin to grow. Perhaps he can sense your thirst for cum, or maybe he just wants to enjoy it - but you are sure he is going to finish spectacularly. They stop swelling just as they reach the size of grapefruits, tingling and pulsing spectacularly in your hand.  You stroke him faster, letting you guzzle his pre as it pours into your greedy mouth.  A coo of delight escapes from your tightly-stretched lips as you savor his tasty fluids.\n\n", false);
    outputText("The incubus' hips begin humping your face, stuffing a few more inches of his length into your throat and forcing you to struggle against gagging.  His cock swells wider and nearly unhinges your jaw as you feel a gooey warmth wash your throat, flooding your gullet with demon-seed.  Still impaled on his nubby member, your body is rocked back and forth by the strength of his orgasm, the motions making your belly slosh with an increasingly large load.  You moan at the warmth of his corruption seeping through your body as his orgasm diminishes. Yanking back hard, you let his dick slip free of your mouth as the last spurt of cum blasts your face.\n\n", false);
    outputText("You push the exhausted demon down and idly collect the cum from your face with your fingers, slowly licking each clean.  Feeling rather sensual and sated, you decide to resume exploring the factory.\n\nAfter redressing you turn about, and see the demon is gone, leaving only a small pool of cum in his wake.", false);
    cleanupAfterCombat();
    return;
}
