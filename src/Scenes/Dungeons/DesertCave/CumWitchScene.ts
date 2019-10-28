export function cumWitchAI(): void {
    // Hurt!
    if (monster.HPRatio() < .6) {
        sandWitchCuntHeals();
        return;
    }

    const choices: any[] = [];

    // Dicks only
    if (player.cocks.length > 0) choices[choices.length] = cumMagicAttack;
    choices[choices.length] = bukkakeAttack;
    choices[choices.length] = cocknosisAttack;
    if (monster.effects.findByType(StatusAffects.Shell) < 0) {
        choices[choices.length] = shellDefense;
        choices[choices.length] = shellDefense;
        choices[choices.length] = shellDefense;
    }
    // HERMS
    if (player.gender == 3) choices[choices.length] = genderConfusionAttack;
    // VAGOOZLES
    if (player.vaginas.length > 0) choices[choices.length] = cumHungerAttack;
    choices[rand(choices.length)]();
}

// *Attack: Bukkake
export function bukkakeAttack(): void {
    // *Cum Witch hikes up her dress and bukkake's at PC.  Large # of chance for 'hits' for low individual damage.  Small reduction to sand witch lust.  Used more at high lust.
    outputText("The Cum Witch moans and daintily peels her robes away from her swollen cock-flesh.  A bubble of precum pops wetly from her urethra to splatter on the floor as her balls suddenly swell.  You look back up in time to see the telltale glow of magic surrounding her staff, but then she's thrusting her hips at you, lewdly humping the air as she unleashes rope after thick rope of potent jism in your direction!\n");
    let hits: number = 5 + rand(8);
    let bonus: number = 0;
    let damage: number = 0;
    while (hits > 0) {
        if (combatMiss() || combatMisdirect()) {
            // Miss1
            if (rand(3) == 0) outputText("\nA glob of her goo goes wide, over your shoulder!");
            else if (rand(2) == 0) outputText("\nOne wave of alabaster falls short, to splatter at your [feet].");
            else outputText("\nSome of the Cum Witch's cum nearly hits you, but you manage to step aside.");
        }
        // Evade
        else if (combatEvade()) outputText("\nYou roll away from some of the hermaphrodite spunk, easily evading it.");
        // Misdirect
        else if (combatMisdirect()) outputText("\nYou feint one direction and then move another, misdirecting like a pro and avoiding some of the sexual artillery.");
        // Flexibility
        else if (combatFlexibility()) outputText("\nYou twist aside, making the most of your cat-like reflexes to avoid some of the stuff.");
        else {
            temp = rand(5);
            // Hit1
            if (temp == 0) outputText("\nA mass of jizz splatters into your [hair], soaking it with thick, salty goo.");
            else if (temp == 1) outputText("\nOne jet of thick witch-cum hits you in the [chest] before you can react.  You can feel it getting inside your [armor], squishing and sliding over your [nipples] as you try to fight.");
            else if (temp == 2) outputText("\nSome of the stuff spatters off your arm and soaks your hand, making it a slimy mess.");
            else if (temp == 3) outputText("\nA creamy deluge hits your [legs], though rather than running down, it seems to come up, flowing into your [armor] to squish wetly across your sensitive groin.");
            else {
                outputText("\nSpunk nearly blinds you as the Cum Witch's virile fluids take you in the face.  You spit some of it out, the smell of the stuff making your head swim.");
                // bonus damage!
                bonus = 3;
            }
            damage += 2;
        }
        hits--;
    }
    dynStats("lus", damage + bonus);
    combatRoundOver();
}

// *Attack: Cum Magic
export function cumMagicAttack(): void {
    // *Used on males only, casts spell that causes balls to temporarily swell and increase lust by a moderate amount.  Unavoidable.
    outputText("Gesticulating with her free hand, the Cum Witch utters impossible to pronounce words before closing her fingers tightly into a fist.  That same instant, you feel an onset of warmth in your [balls], a spreading heat that makes you tremble with growing lust.  A second later, [eachCock] is throbbing, and a runner of cum trickles from the [cockHead], a hint of your temporarily-enhanced virility.");
    // (15-30 lust, based on libido)
    dynStats("lus", 5 + player.lib / 12);
    player.hoursSinceCum += 100;
    combatRoundOver();
}
// *Attack: Cum Hunger
// *Used on vagoozles, spell that causes womb to literally thirst for sperm.  Unavoidable moderate lust gain.  Pregnant character's are immune.
export function cumHungerAttack(): void {
    outputText("Moaning luridly, the Cum Witch swivels her staff and opens her hand to spread her fingers wide.  At the same time, you feel her magic slam into your midsection, burrowing into your womb.  ");
    if (player.pregnancyIncubation > 0) {
        outputText("Yet, whatever she tries to do fails, as her otherworldly conjuration falls apart as soon as soon as it reaches you.");
        combatRoundOver();
        return;
    }
    outputText("It worms around your uterus, tickling it faintly before gently kneading your ovaries.  Your [legs] go weak as your womb throbs, hungering for something to fill it.  A trickle of wetness squirts from your [vagina] as the magic fades, and you squirm as your lust rises. If only something would make you pregnant!  Your eyes dart unbidden to the Witch's groin before you yank them away.");
    dynStats("lus", 5 + player.lib / 12);
    combatRoundOver();
}

// *Attack: Gender Confusion
export function genderConfusionAttack(): void {
    // *Used on genderless and hermaphrodite characters.  Mental attack that draws on disharmony with standard gender types to stun for one round.  3 turn cooldown
    outputText("Touching her alabaster staff to her brow, just under the brim of her hat, the Cum Witch makes a brief incantation and fixes you with her gaze.  Her eyes flash blindingly white, and then you feel her inside you, rifling through your memories, digging up memories of your childhood, your past, and throwing them against you.  ");
    if (player.inte / 5 + rand(20) + player.level / 2 < 18) {
        outputText("She batters your consciousness with conflicting memories of your gender, utterly dazing you.  How can you fight when you can barely tell who you are anymore?");
        player.effects.create(StatusAffects.Confusion, 0, 0, 0, 0);
    }
    else {
        outputText("You parse the flood of information with mental focus and expel the intruder from your mind with a clenching of your sizable intellect.");
    }
    combatRoundOver();
}
// *Attack: Shell
export function shellDefense(): void {
    // *Grants immunity to all magic-based attacks for the next two turns.
    outputText("The Cum Witch holds her staff in both hands and rotates it in a circle, chanting all the while.  Her voice rises in pitch and intensity until she's screaming out unwords of power.  With one final cry, she slams her staff down into the ground hard enough to kick up a puff of sandy dust.  It quickly settles, but the Cum Witch has some kind of glittering, reflective shield around herself now!");
    monster.effects.create(StatusAffects.Shell, 3, 0, 0, 0);
    combatRoundOver();
}

// *Attack: Cocknosis
// *Intelligence dependant attack with possibility of very high lust gain.
export function cocknosisAttack(): void {
    outputText("Lifting her robes enticingly, the Cum Witch reveals her ");
    if (monster.lust < 50) outputText("half-hard");
    else if (monster.lust < 70) outputText("hard");
    else if (monster.lust < 85) outputText("throbbing");
    else outputText("hard, dripping");
    outputText(" cock.  She gently begins to sway her hips, bouncing back and forth with near-mechanical precision, her softly bobbing cock catching your eyes with its metronome-like precision.  She softly begins to speak, enunciating each word to the time and tune of her movements.");

    outputText("\n\n\"<i>See my cock?  See the glistening thickness of it?  Watch how it sways and bobs for you, moving with such smooth and easy grace.  Can you feel your eyes following it, locking onto it and never letting go?</i>\"\n\n");

    if (player.inte / 20 + rand(20) >= 13) {
        outputText("You chuckle at her crude attempt to hypnotize you with her member.  She stomps her foot in irritation and drops her robes back into place.");
    }
    else {
        outputText("The Witch smirks, though you're too focused on her cock to see, and she continues, \"<i>Good " + mf(player, "boy", "girl") + ".  Watch it sway.  You're so focused on my cock now that the world is just falling away around it, sinking into nothingness, leaving only that wonderful cock behind for you to watch.  And since it's filling your view, you can feel it filling your mind as well, can't you?</i>\"");
        outputText("\n\nYou nod, your view rigidly attached to her equally rigid tool as you utterly and completely fixate on her penis, admiring its curves, its thickness, and the way it seems to pulsate happily for you whenever you look at it just right.  The Witch keeps talking, but it's her dick that's important.  You start to drool as your " + skin(player) + " flushes and your body heats.  Gods, her cock is gorgeous.  Reaching down, you begin to masturbate without thinking.  You don't know why, but it just feels like the right thing to do.");
        dynStats("lus", 20);
        if (player.lust <= 99) outputText("\n\nYou bump against something, startling yourself out of the cocknosis before you can completely fall for it.  Still, you keep seeing her dick every time you close your eyes, and your body is very turned on from how you were touching yourself.");
        else outputText("\n\nYou play with yourself until you're on the very edge of orgasm.  At that moment, a loud *SNAP* startles you back to wakefulness, and as you look down at the cock bobbing just a few inches away, you realize it's hopeless.  You can't fight this.");
        outputText("\n\nThe witch smiles knowingly.");
    }
    combatRoundOver();
}

// *Attack: Heal
// *Restores one third of her HP.
export function sandWitchCuntHeals(): void {
    outputText("The Witch smirks at you and holds her free hand under her robes.  When she pulls it out, you realize she's gathered a handful of her cum.  She holds it up and exhales over it, the air making a slight whistle as it blows through her parted lips.  The ebony sorceress then smears the goop over her wounds, which seem to drink in the cum and vanish before your eyes.  She scolds, \"<i>Physical damage?  How artless.</i>\"");
    monster.addHP(monster.eMaxHP() * 0.33);
    monster.fatigue;
    combatRoundOver();
}

// *PC Loss - Female - Become Sand Witch
export function turnIntoASammitch(): void {
    clearOutput();
    outputText("Helplessly, you ");
    if (player.lust > 99) {
        if (player.vaginas.length > 0) outputText("dig your hands into your loins, frigging your hungry cunt so hard your juices splatter the Witch's robe.");
        else outputText("dig your finger into your [asshole], frigging it like your life depended on it.");
    }
    else outputText("try to rise, but all you manage to do is slip back down to the ground.");
    outputText("  The Cum Sorceress smiles and releases her staff.  Instead of clattering to the ground, it dematerializes a piece at a time, fading away in a way that would be mesmerizing were you not otherwise occupied.  She hikes her robes up and pulls off her hat with them, shaking her surprisingly light, blonde hair free.  \"<i>Now, all that got me pretty worked up, and I don't think the girls will mind if I give you your first sampling of cum witchery.  What do you think, hun?</i>\" she asks, glancing back towards the comatose witch behind her.");

    outputText("\n\n\"<i>i'z fine...</i>\" a quiet voice draws, barely loud enough to be heard.");

    outputText("\n\nYour captor flashes you a smile and giggles, \"<i>See?  I told you they wouldn't mind.  Now, ");
    if (player.pregnancyType == 0) outputText("let's go ahead and get your first daughter inside you, shall we?");
    else outputText("let's go ahead and have some fun, shall we?  We'll have to wait until you pop out whatever's in your womb before I give you your first witch child.");
    outputText("  There will be plenty of time to make you one of us while we're waiting.</i>\"");

    if (!player.vaginas.length > 0) {
        outputText("\n\nShe gestures towards you and releases a flow of salmon-hued light in your direction.  As soon as it touches you, you moan out loud and begin to lift your [hips] into the air, humping against an unseen but clearly felt pressure on your loins.  A slowly spreading, vertical slit opens there, glistening with moisture as it parts to reveal a fresh clit.  <b>You've grown a cunt!</b>");
        player.vaginas.createVagina();
        player.clitLength = .25;
    }

    outputText("\n\nThe dark-skinned futanari strokes");
    if (monster.lust < 65) outputText(" herself to full hardness, smiling when thick strings of cum begin to drizzle from her swollen cock-tip.");
    else if (monster.lust < 85) outputText(" herself until cum begins to drizzle from her swollen cock-tip.");
    else outputText(" herself, gathering up the constantly-dripping cum and smearing it all over her shaft.");

    outputText("\n\nHer tongue licks her lips in anticipation as she readies herself, though she stops a moment later when she sees you still have a bit of fight in your eyes");
    if (player.lust > 99) outputText(", even though your hand is knuckle-deep in your twat");
    outputText(".");

    outputText("\n\nKneeling before your helpless form, the mysterious witch sighs and whispers, \"<i>Why can't you just accept it?  You belong with us.  We're going to fix this desert - and Mareth.  The demons can't stop us.  The monsters won't stop us.  They CAN'T.</i>\"  She gently brushes her hand through your hair, smearing you with her sex-juices unthinkingly as she prattles on, \"<i>Just relax, babe.  Here, maybe this will help.</i>\"  The Witch's hands are suddenly holding you by your ears and her lips are moving in nonsensical ways.  Whatever she's saying you can't hear it with how she's holding you.");

    outputText("\n\nHer spell goes off like a gunshot, at least that's what it seems like to you.  It cracks through your consciousness with a booming ripple that stuns you into unthinking silence, your thought process momentarily short-circuited.  Your mouth lamely opens, your tongue slipping out and drooling as your whole body goes limp, uncontrolled. If it weren't for the Cum Witch's capable hands, you'd have fallen over into some of her fluids, but she kindly keeps you up, even as she begins to remove your [armor].");

    outputText("\n\n\"<i>There, there hun, isn't that better?</i>\" the sorceress asks, \"<i>It's always better to listen to me.</i>\"  You stare at her, unblinking.  \"<i>Right,</i>\" she giggles, \"<i>That's what I thought!  You're going to love being a Sand Witch, absolutely love it.</i>\"  A dark hand, lighter on the palm than the outside gently touches your cheek and guides your head into a little nod.  She quips, \"<i>That's right, being a Sand Witch is the best!  You'll get to have four big, milky tits to milk whenever you have free time, and two cunts that you can get filled any time you come visit.</i>\"  Each rambling explanation slips into your ears and settles over your dimmed mind, slipping into the thoughtless, crevices before your brain reasserts itself.");

    outputText("\n\nThe Cum Witch begins moving your hand for you, artlessly toying with your cunt as she whispers into your ear.  She's brainwashing you, and you're too helpless, too vacant to lift a finger.  Besides, it's better to listen to her.  Just listening, it's better.  Yes, that's it.");

    outputText("\n\n\"<i>Oh, I can just tell you're going to be a great sister!  You'll love being milked almost as much as you'll love having my kids.</i>\" she coos.  You start to nod in agreement before you remember to listen, your thought processes slowly resuming.  \"<i>You'll love having my babies so much that you'll try to keep both your wombs full all the time, once you get your second one, won't you?  You love my cum, and you want it in all of your holes, but mostly your wombs</i>\"  This time you do nod - it's going to be fun!  You can't wait to ");
    if (player.breasts.length < 2) outputText("get four big, milky tits");
    else if (player.lactationQ() < 200) outputText("have your tits made into perfect milkers");
    else outputText("get your four, big tits milked");
    outputText(" or to get your first proper administration of witch-cum.");

    outputText("\n\nGiggling, you agree wholeheartedly and ask her to help you up onto a bench, so you can be properly bred.  Getting one in the oven now will give you a headstart on getting both your wombs pregnant - you just need to get them to give you a second cunt after this.");
    if (player.pregnancyIncubation > 0) outputText("  It seems you've somehow managed to forget that you're already pregnant, and the Cum Witch doesn't seem keen to remind you.");
    outputText("  Just thinking about her gets you wet, wetter than you were already, and you were already so hot and moist from earlier.  Your legs spread of their own accord as she lifts you onto a waist-high bench, your cunt-juices drooling down the jizz-polished hardwood, your head swimming from the potent smells of sex that saturate this room.  Wiggling your bottom, you move your [butt] back and forth enticingly, shaking it in front of your partner's leaky tool, your eyes locking onto that messy implement as if it were going to save your life somehow.");

    outputText("\n\nThe cum witch gives your impertinent bottom a slap to steady it, bursting an exclamation of pain from your mouth at the sudden rough treatment.  'She's so rough,' you mentally whine, but another voice answers, 'But she'll be so good to you!'  Sighing contently, you listen to that second, louder thought and lie there, watching your lover slowly line herself with your entrance.  When her cock's oozing tip first brushes your folds, an electric bolt of raw pleasure runs through your body, drawing out a slippery spurt of lady-spunk just from that touch.  Gods above and below, it's so hot, just touching it seems to make your pussy wetter.  If you didn't know better, you'd swear your pussy was boiling over with lust and frothing with need.");

    outputText("\n\nTwo huge tits come to rest on your back, pinning you underneath their enormous weight, smooth, sweat-slicked skin sliding across your body like silk as the hard shaft spreads your vulva wide and slides through the curtain of oozing fem-cum. You moan happily at that welcome intrusion, a sensation of amazing fullness - no, rightness - filling you up in the most perfect and womanly way.");
    if (player.cocks.length > 0) outputText("  [EachCock] throbs beneath you, hard as rock and crushed between your belly and the slippery-smooth wood.  It seems unimportant compared to what's going on above it.");
    player.cuntChange(monster.cocks.cockArea(0), true, true, false);
    // Virgin check here!

    outputText("When the two, wondrously bulging nuts come to rest on your [butt], you realize she's completely and utterly inside you.  That hard, wonderful cock is inside you and pressing up on your cervix, the thick, potent cum oozing directly into you, where it belongs.  You sigh in contentment and work your internal muscles, clenching the dick inside you as if you could milk it, drawing a surprised gasp from the dusky lips of your dark-skinned lover.  Her hard nipples dig harder into your back and an increase in the wet warmth in your [vagina] alerts you to just how much she's enjoying it.");

    outputText("\n\nThe Cum Witch strokes your hair and promises, \"<i>I'll do this for you every day, every hour if I have to, until you're pregnant... and then I'll come visit you in the wards and give you all the cum you'd ever want.</i>\"  A fat bulge distends your labia as it works its way down the Witch's dick, squirting explosively inside you, proof of her excitement for the idea.  You couldn't be happier!  Not only are you going to be a huge-tittied milk-witch, but your lover is going to keep you so full... warm and packed with spunk and life.  Your [vagina] tingles and quivers at the thought, massaging the woman's thick, black dick happily as she begins to slowly move her hips, gently sliding herself out just enough to release a few bubbles of cum before sheathing herself in your twat once again.");

    outputText("\n\nYou shiver wildly, now impaled again, just the way you wanted.  That perfect bliss is fleeting, as the Cum Witch begins to fuck you faster and harder, tits wobbling dangerously on top of you as her bottom arches and straightens with each thrust.  You begin moaning with every thrust, a picture of feminine contentment as you're perfectly mounted by another (partial) female.  Smiling knowingly, your blonde-haired lover kisses at your shoulders.  Her moist, soft lips slowly but inexorably travel closer and closer to your spine, until, with an electric thrill, they kiss one of your vertebrae. You shiver, but she isn't done yet.  Her gentle kisses work up to the nape of your neck where they pause, a saliva-slicked tongue smoothly gliding across your body to lick at the corner of your ear.");

    outputText("\nThroughout the sensual love-making, you feel the spooge bubbling up into your body, a constant, pulsing reminder of the Cum Witch's seemingly endless affection.  Globules of her seed have already begin to slip out of your cunt-lips, hanging from your [clit] for a moment before they drip to the floor.  This constant fluid flow proves surprisingly pleasurable, and if you weren't already moaning like a whore in paradise, you'd start now.  The thick cock inside you seems to find the sensation equally enjoyable, if its twitching and gradually increasing cum-flow is any indication to go by.  With her hips pistoning hard, the hermaphrodite seems to relentless in her attentions, but passionate beyond belief.");

    outputText("\n\nThen, just when you expect her to go wild and take you both to orgasm, she pulls out and flips you over, turning you up to face her.  Her sky-blue eyes twinkle happily as she admires your cum-pudged belly, but when you reach down and pull your hungry pussy-lips apart, the interlude comes to an end.  With animal savagery, the Cum Witch mounts you, throwing her whole body atop you and crudely pounding your box.  Fat globules of cum squirt from her shaft almost constantly with each push inside your well-juiced nethers.  Still, even though you're quaking and shaking with her, you can tell that she hasn't cum yet.  Her eyes do look a little distant, and thinking to bring about your fertilization that much quicker, you reach up for her huge nipples.");

    outputText("\n\nThey're as soft as the rest of her, though they have a slightly pebbly texture that makes you wish you could lick and suck on one.  Instead, the huge knockers are threatening to completely envelop your hands, the huge tits smashing flat against your [chest].  The Cum Witch suddenly cries out, and you see her biting down on her lower lip, her eyelids low and her body shaking.  Her hips slam into you one last time, hard, deliciously filling you.  Her balls bounce up and down, and you feel her shaft suddenly thickening from base to tip, expanding to pass the huge torrent of cum she's starting to pump into your womb.  Blessed heat washes through you, and you feel the " + skin(player) + " stretching tight.  You feel so full and taut that you could use your belly like a drum, but the Cum Witch's orgasm is just getting started.  Each pulsing blast of semen is answered by a matching torrent of cum that sprays from your soaked pussy, puddling on the floor.  You twitch beneath her, orgasming from the feel of so much fluid flowing through your box, and closing your eyes as the pleasure overwhelms you.");

    outputText("\n\nThe two of you stay joined at the hips for an indeterminable amount of time, sweating bodies joined in ecstatic bliss.  Like all good things, it does come to an end, and one of the normal sand witches enters to interrupt you.  The ebon beauty leaves you suddenly empty, a flood of her fluid dripping to the floor as she announces, \"<i>I subdued the interloper, but I convinced her to join us.</i>\"");

    outputText("\n\nThe other woman looks a little confused at this, but when she sees your wide, excited eyes, she reluctantly nods.  There's a flash of irritation at your presence, but it fades when your lover offers, \"<i>Don't be sour, I saved some for you, hun.  Why don't you take your sister to the mother, and when you come back, I'll make sure to pack all three of your cunts, okay?</i>\"");

    outputText("\n\nThis seems to placate the four-breasted, three-pussied woman, a wide grin breaking out on her face.  She helps you up and leads you from the room to your new life, the last thing you see as you go a subtle wink from the Cum Witch...");
    player.orgasm();
    dynStats("lib", 100, "sen", 100);
    // Next
    menu();
    addButton(0, "Next", chicksLoseToSandWitchesBadEndFinale);
}

export function chicksLoseToSandWitchesBadEndFinale(): void {
    clearOutput();
    outputText("<b>Some time later...</b>");

    outputText("\nYou smile and rub your hands across your womb.  True to her word, the Cum Witch got both your wombs pregnant in short order, and you couldn't be happier.  Your sisters have doted on you ever since they discovered your devotion to milk-production and child-incubation.  At first, they were a bit disturbed by your seemingly endless love for the Cum Witch's cum, but as you produced more and more milk (and children) they stopped worrying about making you stay clothed or cleaning her cum from your skin.  Not long after that, you moved in with her as a live-in cum-dump. Life is good.");

    outputText("\n\nYou swallow a creamy batch of her spunk and cup her heavy balls.  They've grown a little since you moved in, you suppose to keep up with your voracious appetite for her seed, but your black lover doesn't seem to mind.  If anything, she seems quite happy to have you between her knees while she's studying her spells.  You can focus on swallowing her cum until you're full, and she gets the motivation she needs to properly develop her magics.  Why, just last week she learned how to make her jizz taste like chocolate - that was a great week!");

    outputText("\n\nStill, as you massage her quaking testes and drink down her delicious jism, you have to think, \"<i>Life is good.</i>\"");
    gameOver();
}
// *Male Loss - Turned Into Cum Pump
export function cumWitchCumPumpBadEnd(): void {
    clearOutput();
    outputText("Laid low by ");
    if (player.HP < 1) outputText("your wounds");
    else outputText("by the lust coursing through your veins");
    outputText(", you slump over against a desk, leaning heavily on it for support while ");
    if (player.HP < 1) outputText("you struggle to rise");
    else outputText("you struggle to get your crotch");
    outputText(".");
    outputText("\n\n\"<i>Let me help you with that,</i>\" the robed beauty whispers as she deftly removes your [armor], leaving you bare and exposed, naked to her casual caresses and lecherous looks.  \"Such a lovely " + mf(player, "male", "hermaphroditic") + " specimen");
    if (player.cumQ() > 1000) {
        if (player.balls > 0) outputText(" and such virile, cum-swollen testes.  An excellent breeder for sure!");
        else outputText(" and such a virile body!  An excellent breeder for sure!");
    }
    else outputText("but with such a pathetic virility.");
    outputText("  A little magic later, and you'll be quite suited to breeding daughters with me.  Perhaps if you do well enough, I'll allow you to seed MY womb.</i>\"");

    outputText("\n\nWith her slender fingers trailing over your heaving, exhausted form, the cum witch explains, \"<i>Before we get to the fun part, let's see about getting you in the proper mood.</i>\"  You ");
    if (player.HP < 1) outputText("grunt and strain in response, still trying to fight, even though you know it's hopeless.");
    else outputText("groan and touch yourself, trying to show her just how 'in the mood' you are.");
    outputText("  She affectionately ruffles your " + hairDescription(player) + " and tuts, \"<i>Now, now, it's cute that you think you still have some agency here, but you really ought to just lay back and let me take worry about it!</i>\"");

    outputText("\n\nThe cum witch rolls up her sleeves and gesticulates rhythmically.  Trails of phosphorescent fire trail from her nails with each motion, and you're being lifted, raised up into the air on streams of phantasmal force.  You hover like that for a moment, then with a brush of luminous energy, you slide sideways onto a bench, the magic disappointing to rest you gently upon the firm wooden surface.  Exposed as it is, [eachCock] rises powerfully, as if displaying itself for inspection.  Given the circumstances, it very well may be.");

    outputText("\n\nSnapping her fingers, the black-skinned spellcaster snares glowing bands of force around your chest, wrists, biceps, and [feet], effectively restraining you as efficiently as any torture rack.  You struggle briefly, though you cannot say whether to free or touch yourself.  Does it really matter?  Either way, you're bound, nude, helpless, and aroused.  Gentle touches rub the " + skinFurScales(player) + " of your [chest] as she reassuringly coos, \"<i>Relax, my mighty friend.  You undoubtedly fought hard to get here, but now, all you need to do is relax.</i>\"");

    outputText("\n\nSoft touches trace across your belly button and around your loins, skirting the sensitive, hard flesh in the middle to trace towards your [legs].  \"<i>Feel how soothing my touches are?  How absolutely relaxing it is to be massaged in such a way?  Your muscles just... go slack, the tension draining out your [feet] to leave you with nothing but comfort.</i>\"  You want to resist, but after fighting your way here and losing, it just feels too damned good.  Heedless of your desires, your [legs] relax and let the tension go.  You sigh in unexpected happiness as she continues.");

    outputText("\n\nNext, the witch rubs her way back up to your [hips].  She suggests, \"<i>I'm going to work my way up your body, and with every part I rub, you're going to let out more and more of your pent up tension.</i>\"  True to her words, your body is beginning to feel like putty from the waist down - a limp facsimile of its former self.  The softness has even infected your " + multiCockDescriptLight(player) + ", robbing some of the former stiffness.  You sigh and inadvertently let your guard down.  You've already lost, and if this woman wants to give you a massage before she has her way with you, why not enjoy it?");

    outputText("\n\n\"<i>As a matter of fact, you're getting so relaxed now that you don't even need my touches for that wonderful, soft sensation to climb higher.  You can feel skilled fingers working the tension out of every single part of you, relaxing you to the core,</i>\" instructs your captor, removing her hands from your body.  The words ring true, and your arms gradually deaden, going as limp as the rest of you.  That wonderful relaxation moves into your core, and you exhale happily.");

    outputText("\n\n\"So very relaxed,</i>\" the witch whispers, \"<i>You've let out so much tension that you're getting tired, so very tired that your eyelids are starting to sag.  They are heavy, aren't they?  Don't try to answer.  Just feel them dragging down, as if iron weights were suspended from them, tugging your eyelids closed.</i>\"");

    outputText("\n\nYou strain to stay awake, but with the sensation of so many soothing caresses lingering on your " + skinFurScales(player) + " and the heavy weights pulling down... down.  You blink, getting your eyes half open. The next time they close, they stay closed, leaving you to dwell on the imaginary massage.");

    outputText("\n\nPlacid feelings fill your form as your heartbeat slows, and you wonder when she plans to get to the sex.  \"<i>Now, don't think.  Just relax.  You feel so good like this, and with your eyes closed, you can focus entirely on feeling good and listening to me.  Now you can hear me so clearly that my voice seems to be coming from inside you, seeping into your relaxed body and mind with every statement of fact.  Doesn't it feel nice?  If it does, feel free to sink deeper and let the soothing sound of words flow into you without thought or question.</i>\"");

    outputText("\n\n...Wait, what?  Your brow furrows as you try to pay more attention to her words and figure out what just happened, but her fingers are on your forehead in an instant, massaging your worry away.  Your face visibly relaxes at her touches, and your breathing evens to a slow, peaceful tempo.  \"<i>Good " + mf(player, "boy", "girl") + ",</i>\" the cum witch says in a honeyed, syrupy-sweet tone, \"<i>Now that you're nice and receptive, let's speed things along a little, shall we?</i>\"");

    outputText("\n\nSparks of magic glimmer and flicker, bright enough be seen through the darkness of your eyelids.  They move up, circling the sorceress's fingers before following her firm presses into your skull.  To you, the only difference is the disappearance of the light and perhaps an increased sense of tranquility, a soft blanket of bliss that settles over you and snuffs out errant thoughts before they can begin.  You're pliant and receptive, open to feel and listen, but unable to form cogent messages of your own.  \"<i>Perfect.</i>\"");

    outputText("\n\nA lecture of words, information, and instructions starts, though by the third paragraph you stop paying attention with your conscious mind and allow them to mold you unhindered.  At some point, the massaging fingers withdraw.  It doesn't matter, as per the earlier instructions, you can still feel them on your flesh, smoothing out any worry or disharmony in your mind.  A shrinking part of you continues to act up and resist it, but each time it gets smoothed over and forgotten.  With every overpowered token of resistance, it grows weaker, smaller, and less resilient, taking longer to crop up and fight.");

    // [NEXT]
    menu();
    addButton(0, "Next", beACumPumpPartII);
    player.orgasm();
    dynStats("lib", 100, "sen", 100);
}

export function beACumPumpPartII(): void {
    clearOutput();
    outputText("<b>*SNAP*</b>  You yawn and begin to blink the sleep from your eyes, shielding your gaze from the room's ambient light with your hand.  Your head is muzzy, like you stayed up too late or overindulged in milk again.  A soft hand is massaging your balls, caressing the orbs with the tenderness of a lover. They feel warm... and full.  ");
    if (player.balls == 0) outputText("Wait a moment, you don't - didn't - have balls! Turning your accusing stare towards the busty witch, you watch in wonder as the newly grown sack slowly turns taut, stretched by the burgeoning size of your cum-stuffed spunk-factories.  She pats your newly-stuffed nutsack and remarks, \"<i>I had to make sure you were suitably virile...  Besides, I needed to make sure you'd only sire daughters for us.  We don't need that many like you, my loyal " + mf(player, "stud", "cum donor") + ".</i>\"");
    else if (player.cumQ() < 3000) outputText("The cum witch gives them a gentle shake, smiling as they grow and swell, burgeoning with full, ripe seed.  She remarks, \"<i>Nothing like the virility of a bull and enough seed to father an army of females to make a useless intruder a contributing member of society, eh breeder?</i>\"");
    else outputText("The cum witch gives them a gentle pat and remarks, \"<i>No sense messing with perfection... at least not beyond necessary.  We wouldn't want you fathering any boys, would we?</i>\"");
    // add balls if necessary
    if (player.balls < 2) player.balls = 2;

    outputText("\n\n\"<i>Perhaps just a little more,</i>\" the lusty woman breathily exhales as she rubs your balls.  Your sack stretches a little tighter, the skin going glossy and smooth, unblemished and perfect.  She massages the swollen orbs with motherly care as they seem to grow denser, fuller.  You swear you can hear them sloshing as she manhandles your jewels, so full of thick seed that it's nearly painful.  Your back arches, lifting your hips as you get into it a little bit, your lust rising in equal pace with your surging erection");
    if (player.cocks.length > 1) outputText("s");
    outputText(".  Of course, the wicked witch only releases you at this point.  \"<i>Do I look like one of the cum-hungry wenches around here?</i>\"");

    // add lust
    dynStats("lus=", 100, "resisted", false);

    outputText("\n\nAt that, a few nagging worries surge up to the forefront of your lust-addled thoughts.  You were hypnotized!  Worse than that, you can barely remember anything, let alone how you got here.  In addition, though less pressing, she's done something to you that'll make you only father females.  You don't remember much, but you know that's not quite right.  You jump up and nearly fall over your own [feet] in your hurry to get away from this woman - alluring and arousing as she is.  Pressing your back flat against the wall, you begin breathing faster and faster as you wrack your consciousness for an explanation.");

    outputText("\n\nThe dark-skinned woman (who seems INCREDIBLY familiar) calmly approaches you as she apologizes, \"Oh dear, this must be terribly jarring for you.  Come, sit down.  I promise not to bite.</i>\"");

    outputText("\n\nReluctantly, with wariness coursing through your veins, you sit, your once-erect phallus");
    if (player.cocks.length > 1) outputText("es");
    outputText(" wilting from the force of your surprise and fear.");

    outputText("\n\n\"<i>You just completed the cum witch initiation, which appears to have traumatized you greatly.  A decade ago, you were born to assist me in my duty, and today, the culmination of your potential has been fulfilled,</i>\" she explains with hooded mysterious eyes.  You frown at that - you could have sworn you were born somewhere else, with friends of both genders... somewhere happy.");

    outputText("\n\n\"<i>Naughty pump,</i>\" the witch states when she sees you screwing up your brow in thought.  Immediately, you cry out and cum, hard.  Your eyes roll back from pleasure, and [eachCock] erupts, spewing jism all over your [legs] even in its limp state.  You cum and cum, puddling all over the floor and draining your prodigious balls of every ounce and then some. The bliss blasts through your brain, carrying the thoughts and questions away with them, pumping them straight out onto the floor to wash down the drain.  Only once your questions have been obliterated by bliss are you allowed to stop and sink into a drooling, receptive state.");

    outputText("\n\nWhen you come to, you smile, and sigh, happy your mistress deigned to let you cum.  You must have done something really good to earn such a spontaneous orgasm!  Now, what were you doi- oh yeah, she was reminding you why you let her fix your balls!  Smiling, you let her know you're all calmed down and ready to continue.");

    outputText("\n\nThe uncharacteristically blonde sex-bomb clears her throat before she goes on.  \"<i>Right, as I was saying, you were groomed for this, and today, you've started down the road of unlocking your full potential.  You're my apprentice " + mf(player, "wizard", "witch") + ", and with a tool that fine AND magic-enhanced balls, you'll do fine.  Now, since you've already cum, your first task is going to be learning the incantation of virility.  Take this tome and learn the spell, then cast it upon yourself no less than a dozen times.</i>\"");

    outputText("\n\nYour mistress hands you the book, promising, \"<i>More is better.  When you can take it no longer, I'll bring you a sister to impregnate.</i>\"  Nodding happily, you rise and stumble over to a nearby desk.  The spellbook is new, though the writing is ancient.  You study it eagerly, soaking up the new knowledge like a sponge.  It's comical how easy your brain seems to wick up new information really, almost like whole swathes of it were cleared out and made ready to learn.  You learn the spell within the hour, though your task is made more difficult by the noisy witch your mistress is busy drilling in every hole.");

    outputText("\n\nWith the first part of your task complete, you set upon the second.  With nervous, shaky hands, you cast the spell, trying hard not to lose your concentration when a fevered \"<i>OH GODS YES!</i>\" is screamed mid-sentence.  You maintain your focus, and the rush of magic washes through you, stiffening [eachCock] to a semi-hard state.  Burbles of pre drip from your cum-slit as your [balls] refill with alarming speed.  With all that happening from just one cast... how will you make it through a dozen?");

    outputText("\n\nYour teacher pushes a cum-filled witch to the floor, her belly comically distended.  Twin runners of spunk squirt from her well-used twat, matching a similar stream that drizzles from her abused backdoor.  It seems your mistress had little time for personal pleasure beyond the usual insemination.  She saunters over, nude and glistening with sexual juices.  Her voice encourages you, \"<i>Go on.  Do them faster.  If you cannot endure a measly twelve castings for virility, then you are not fit to my apprentice.</i>\"");

    outputText("\n\nNo!  You close your eyes and chant, blowing through the spell as fast as you can.  Each time it completes, you grit your teeth and start anew.  The lust coursing through you by your fourth incantation makes it difficult to focus - you're fully hard by that point and your balls feel as full as ever, but you tamp down the errant emotion and focus on the task at hand.  Five... six... seven times you've managed to cast it now!  The bench is getting sticky from all your leaking pre, making you fidget nervously as your swollen balls drag through your juices.  The next arcane ritual makes you shiver with need.  You keep your eyes fixed close and try for number nine, knowing if you were to sneak even the barest glimpse at your hermaphrodite mistress that you'd lose control and beg her to fuck you.");

    outputText("\n\nYou shiver at the thought and nearly cave in just then, your turgid cum-spewing cock constantly leaking at this point.  Your body is so full of the salty cream that it's forced out from you in a steady flow, a lewd imitation of a proper orgasm that only grows stronger when you complete your ninth, tenth, and eleventh casts of the spell.  You shiver in pleasure and aching need, but as you begin speaking the words of the twelfth and final utterance, the witch interrupts.");

    outputText("\n\n\"<i>Stop!</i>\" she cries, pointing to your throbbing, jizz-belching boner");
    if (player.cocks.length > 1) outputText("s");
    outputText(", \"<i>I did not think you would get this far.  Your will is truly mighty, [name], but the task I gave you is something I've never been able to do.  Ten is as far as I ever got.  I would not have you damage yourself just yet.</i>  She pulls open the curtain and bellows, \"<i>Next!</i>\"");

    outputText("\n\nAnother woman, an olive-skinned beauty with breasts so pendulous they seem to weigh her body down, enters, glancing at you hesitantly.  The hermaphrodite smiles and nods, gesturing for her to approach you.  [EachCock] looks like a sperm volcano at this point, shrouded in bubbling flows of alabaster spunk that never seem to end.  Your balls are bloated and visibly churn, stuffed more than full of spunk even as they produce more.  The huge-titted milk-witch frowns, but reluctantly straddles you, sinking down upon your spermy scepter with ease.");
    if (player.cocks.smallestCockArea() >= 100) outputText("  The penetration is eased somewhat by your shrinking dick.  You glance at the sand witch in awe, noting her glowing hands.  She gives you a knowing wink and turns, her spell complete, leaving you to enjoy yourself.");

    outputText("\n\nThe huge tits on the new witch crush into your face, smearing you with squirting milk as she begins to ride your geysering erection.  ");
    if (player.cocks.length > 1) outputText("Her voluminous butt is thoroughly smeared by the goo from the rest of your " + multiCockDescriptLight(player) + ", shining with white from your magical virility.  ");
    outputText("She rides you with surprising skill for one who seems to be so hesitant about such a healthy jizz output, her four breasts squishing tight against [chest].  Her tight cunny squeezes and ripples around you, rapidly growing soaked with white, thoroughly spunk-lubed and hungry for more.");

    outputText("\n\nAs turned on as you are, you blow in seconds, arching your back and grabbing hold of her plush butt for stablity.  Your load sprays out in huge torrents, easily filling the witch's first womb with the first explosion and bulging her belly from the force.  She sighs and somehow finds the strength to rise, only to drop back down on you with her second cunt.  You fill that womb in seconds, massive spurts of alabaster turning her once-flat tummy into a gravid jizz-sphere.  She cries out in orgasm and twitches weakly atop you with all the strength of a wet rag.  Soon, she's so full that she slides off you onto the ground, her passage marked by a river of white that bursts free of her loins.  She leans forward to kiss your dick thankfully, earning herself a mask of white, and since she failed at that, she just wraps all four of her tits around it.  Your cock is smothered in slippery tits.  You glaze them all before your magical virility finally wanes, slowly to a pleasured trickle.");

    outputText("\n\nThe sputtering witch sighs, \"<i>Thanks,</i>\" and turns to the smiling hermaphrodite, \"<i>He'll... he'll do fine I think... gods, I'm full.</i>\"  She nervously wobbles out, giving you a wink and a bit of sexy sway as she goes.  You can't wait to have a chance at her again!");

    // [Next]
    menu();
    addButton(0, "Next", cumPumpVolumeThree);
}

export function cumPumpVolumeThree(): void {
    clearOutput();
    outputText("With the champion brainwashed into a little more than a loyal cum-pump for the sand witches, they grow in number and strength with alarming speed.  In the space of eight years, the desert is transformed into a verdant forest.  For better or for worse, the witches finally rival the demons in power.  They spread their influence wider, eventually ");
    if (player.effects.findByType(StatusAffects.FactoryOverload) >= 0) outputText("destroying");
    else outputText("rescuing");
    outputText(" Marae.  Their abilities, numbers, and familiarity at dealing with demons lend them great success at battling Lethice's growing hordes, and within the span of another decade, the demons are exterminated.  The witches are hailed as saviors, and young females of all races seek to join them.  You, of course, inseminate all of them.");
    gameOver();
}
// *Repeat Desert Loss Male
export function repeatLoseToCumWitchForDudes(): void {
    clearOutput();
    // HP:
    if (player.HP < 1) {
        outputText("Collapsing under the weight of your injuries, you tumble back onto your [butt], kicking up a cloud of sand as you fall fully prone.  Laughing at your predicament, the ebony futanari cooly advances, tossing her wide-brimmed hat aside as she goes.  \"<i>Oh you poor, poor Champion.  Did you ask the Sand Mother to let us out so that we could this?  Does the strong, mighty " + mf(player, "hero", "heroine") + " have a thing for submitting to my touches and fat cock?  Or perhaps, you want something else...</i>\"");

        outputText("\n\nCaressing you as she removes your [armor], the witch shows remarkable tenderness for your injuries, knitting the worst with magic to ensure your well-being and kissing others as if it would somehow make them all better.  She stops at your groin to consider [eachCock] for a moment, slithering her fingers around [oneCock] and hefting its supple, ");
        if (player.lust < 40) outputText("flaccid");
        else if (player.lust < 60) outputText("semi-flaccid");
        else if (player.lust < 70) outputText("semi-hard");
        else outputText("turgid");
        outputText(" weight.  Pumping her hand with deft strokes and watching your expression intently, the curvy woman works you into a pleasant, erotic warmth, excitement coursing through your body with such fervor that your remaining wounds seem insignificant in comparison.");
    }
    // Lust:
    else {
        outputText("Dropping down on your [legs], you rip off your [armor] and flop onto your back so that you can focus on abusing your genitalia.  [EachCock] is already hard enough to be leaking pre");
        if (player.balls > 0) outputText(", and your [balls] are practically quaking with need");
        outputText(".  The ebony futanari laughs at you as she confidently strides forward and discards her hat.  \"<i>Did you really have any intention of fighting me, or did you ask the Sand Mother to send us out so that we could abuse your insatiable libido?  I don't know how you didn't wind up captured, but I suppose I can tend to your needs... this time.</i>\"");

        outputText("\n\nKneeling next to you, the witch runs her hands across your " + skinFurScales(player) + " toward your groin.  She grabs hold of [oneCock], hefting the rigid weight as she gauges your size.  Her fingers are soon glossy with your dribbling pre-cum, and she slowly pumps you to make sure she has your undivided attention.  \"<i>So helpless...  Still, hopefully this can produce a decent cum-shot.</i>\"  Her eyes twinkle with mirth, and she finishes, \"<i>If not, I can always encourage it.</i>\"");
    }
    // *Dick No Fit Male Loss Scene
    // Frotting -> Double Facial?
    // Urethral Pen?
    // Fingers PC's cock?
    if (player.cocks.cockThatFits(monster.vaginalCapacity()) < 0) {
        outputText("\n\nAbruptly, the Cum Witch climbs atop your lust-wracked body.  Her robe is off in a flash, and you're finally able to appreciate her sweat-slicked, onyx-skinned body as she sits on your immense, oversized maleness, her form glistening in the desert sun.  Thumbing a finger just under your " + cockHead(player, x) + ", she teases your gigantic dong while her own hard prick flops down on top of it, just heavy enough to leave a cock-shaped impressed on your urethral bulge.  The omnipresent heat and the fight have ensured that both bodies are soaked with sweat and able to slip and slide over each other easily.  Utilizing this, the Cum Witch rocks her hips slowly, folds splayed and leaking over your cock.  Her dick is already dripping a slow flow of girl-jism onto your own, almost claiming it as her own.");

        outputText("\n\nGiggling, the onyx sperm-mage laughs as she slowly begins to frot with you.  \"<i>Why have a dong this big if you can't fit it in anything?</i>\"  She sensually caresses some of your copious cock before bending down and licking at the " + cockHead(player, x) + ".  You shiver and express a drop of pre-cum onto your own ");
        if (player.cocks.biggestCockLength() < player.tallness / 2) outputText("[chest]");
        else if (player.cocks.biggestCockLength() < player.tallness / 1.6) outputText(face(player));
        else outputText(hairDescription(player));
        outputText(".  The black spellcaster comments, \"<i>I must admit it is fun to look at, but it doesn't look like it's ready to blow just yet.  How about a little encouragement?</i>\"");

        outputText("\n\nThe Cum Witch snaps her fingers, and two smooth, spherical bits of stone lift up.  They begin to vibrate so fast that you can hear them humming in the air.  They arc over your chest and flutter down onto ");
        if (player.breasts.totalNipples() > 2) outputText("two of ");
        outputText("your [nipples]");
        if (player.breasts.hasFuckableNipples()) outputText(", sinking inside your moist tit-holes almost immediately");
        outputText(".  With two vibrators savaging your [nipples] and the black-hued beauty riding your cock like her own personal rocket, you can barely contain yourself.  Your back arches, and you try to buck your hips, to fuck her, her cock, whatever, but you're still too exhausted from the fight to shift her body weight.  You can do nothing but lie there while she uses you, humping your cock, her ebony length dragging its lurid pleasure across your " + cockDescript(game.player, x) + " while you wriggle and writhe ecstatically.");

        outputText("\n\nAfter a while of continual teasing, the sable seductress leans over you and lets her huge breasts sweetly kiss on your elephantine mass.  She leans down as if to kiss you, but at the last moment, she swerves to the side, licking the nape of your neck up to your ear before breathily whispering promises into your ear, \"<i>There's nothing like blowing off some steam out here in the sands after my work.  And to have such a... gifted " + mf(player, "boy", "girl") + " to play with is a treat in and of itself.</i>\"  She grunts, sweaty balls bouncing on your [sheath].  \"<i>You look so helpless for someone who's packing so much.  I look forward to seeing how you look with my cum hiding that expression.</i>\"");

        outputText("\n\nYou frown until she rubs a particularly sensitive spot on your " + cockDescript(game.player, x) + ", then a dopey, pleasure-addled smile replaces it.  She kissing your cheek and coos, \"<i>That's more like it, pet.  I'm going to make you so messy.</i>\"  Her toes fondle your [sheath] as they slide down to your ");
        if (player.balls > 0) {
            outputText("[balls], rolling the ");
            if (player.ballSize < 2) outputText("petite ");
            else if (player.ballSize >= 5) outputText("weighty ");
            outputText("orbs across her soles.");
        }
        else if (player.vaginas.length > 0) outputText("[vagina], slipping a few toes through your folds while a big toe diddles your [clit].");
        else outputText("taint, softly stroking the sensitive skin between your groin and [asshole].");

        outputText("\n\nGroaning, the Cum Witch asks, \"<i>Since your big, sensitive shaft is so much fun for me to play with...  oooh, yeah....  Uh, I'll give you a choice!</i>\"  She smirks and slides her whole body along your prodigious length, breasts bouncing along the side while her cock drips all over you, glazing you white.  \"<i>I'll cum all over your face, and make sure you do too, but I'll be sure to leave you just a little more virile in exchange.  Or, I'll aim off the side, but borrow a little bit of your potency when I do.  What'll it be, " + mf(player, "stud", "hun") + "?</i>\"");

        outputText("\n\nSo if you avoid a facial she'll steal some of your semen production, but if you take it, she'll make you MORE virile.  While you're mulling it over, she's still grinding on you, distracting you with flashes of salacious delight.  The clock is ticking, and if you don't pick soon, she might pick for you.");
        // [Facial] [No Facial]
        dynStats("lus=", 100, "resisted", false);
        addButton(0, "Facial", tooBigCumWitchLossFacial);
        addButton(1, "No Facial", tooBigCumWitchLossNoFacial);
    }
    else {
        // *Dick Fits Male Loss Scene
        // Get cock ridden
        outputText("\n\nAbruptly, the Cum Witch climbs atop your lust-wracked body.  Her robe is off in a flash, and you're finally able to appreciate her sweat-slicked, onyx-skinned body as she sits on your midsection, glistening in the desert sun.  She crosses her arms under her immense breasts, so large they'd put a cow-girl to shame, and flexes to make them shake and wobble, big brown nipples swaying hypnotically before you.  Your eyes gravitate towards the heavenly teats, each wide and supple, capped with a hard, pebbly protrusion that seems to call for your tongue.  Giggling, she moves one of her arms back to grab [oneCock], and she rolls her hips back until your boner is devoured by her slippy butt-cheeks, pressing through the ebony crack until it feels her dusky, moist cunt-lips dragging along it.  Your " + cockHead(player, x) + " appears underneath her large balls, peeping out to leak its lust onto your belly.");

        outputText("\n\n\"<i>How about this?  I can just slide back and forth on you while your eyes track my tits, entranced by nipples until you're creaming your little tummy with your spent seed.</i>\" she suggests, interrupted by her own coo of pleasure when your " + cockDescript(game.player, x) + " lurches underneath her and floods with excitement.  \"<i>Oh, you liked that huh?  Does the Champion have a titty little hypno-fetish?</i>\"  Her breasts continue to sway slowly, and her hips join in with the same slow rhythm.  Each of her hands is glowing now, lighting up with purplish-white intensite as she shakes her breasts and butt for your pleasure.  Confidently, she explains, \"<i>I'm quite skilled at mental manipulation, but surely you know that already.  My nipples ARE quite erotic.  You can't even look away any more, but surely you don't mind?</i>\"");

        outputText("\n\nSqueezing her cheeks around your spasming erection, the Cum Witch releases your " + cockDescript(game.player, x) + " so that she can support herself as she leans forward, bringing her bouncing, hypnotic breasts closer to your face.  You open your eyes wider to try and take in more of their erotic expanse.  Your " + cockDescript(game.player, x) + " is getting hotter and wetter, and the sorceress's own erection has risen to complete and full hardness, the ebony tool bouncing lewdly on your [chest] as she grinds her sopping-wet cunt across you.");

        outputText("\n\nHer voice purrs, \"<i>Just focus on my nipples and let me worry about making you feel good.  My pussy has your cock entranced and obedient, sure to cum before long, and you can just relax and enjoy the swaying, heavenly shape of chest, can't you?</i>\"");

        outputText("\n\nYou DO feel good... so good.  It probably won't be long before you're erupting, and as close as her breasts are, there's nothing else to look at anyways.  Increasingly, your muscles are going slack, and a dopey smile has spread on your face.  This woman knows her way around a dick.");

        outputText("\n\n\"<i>See?  I told you that focusing on my nipples would help you feel good.  Now, just keep looking at them.  Let your mind completely fixate on them to exclusion of all else and I'll keep you feeling better and better,</i>\" the witch says, as everything excepting her supple, dark buds seems to fade into a haze of pleasure.  Her voice goes low and husky as she continues, \"<i>That's right, pet.  You focus on the nipples and listen to my voice.  It'll tell you what you're feeling.</i>\"  There's a sloppy, wet squish as your " + cockDescript(game.player, x) + " is pulled into a silky, wet hole.  \"<i>And you're feeling so good thanks to how well you're focusing.  The more you focus, the better it feels and the less you have to worry about what I'm saying and simply FEEL.</i>\"");

        outputText("\n\nShe's so right, and it feels so good.  It's like your head is slowly emptying of everything but the view of her nipples, and warm, wet pleasure is filling in along with the periphery, along with words you can't take the time to process - enjoying the view and the pleasure is too important.  A high pitched whimper of pleasure escapes your lips when you the snug tunnel compress around your " + cockDescript(game.player, x) + ".  It's so perfect - like it was crafted for you and you alone, and the folds are sliding and rubbing every vein, every nerve ending, every part of your tool, washing you with unholy pleasure that you're barely conscious of.  It feels so good to relax underneath her.");

        outputText("\n\nThe breasts stop swaying, but that doesn't matter - it just lets you oggle her nipples more effectively.  Even when she moves to press one into your lips, you can still see it your minds eye as if viewed from a disembodied perspective.  Her beautiful, bountiful breasts are all over you, and everything is so warm and wet and pleasant that you just feel like you could melt right into her bosom.  It tastes as marvelous as it looks, and you suckle with unthinking passion.");

        // Balls
        if (player.balls > 0) outputText("\n\nA hand secures itself to your [sack] firmly, squeezing a tugging on your twitching cum-factories, massaging the bubbling seed within to a frenzy.  The witch's voice grows insistent as she massages your nuts, ");
        else outputText("\n\nA hand presses down on the border between your gentials and your [asshole], rubbing in slow circles, just hard enough that you can barely feel it pushing on something inside you.  The witch's voice grows insistent as she works your body, ");
        outputText("loud and firm enough for your dazzled mind to cogitate her words: \"<i>Oh, my pretty bitch " + mf(player, "boy", "girl") + ", feel the pressure building up inside you.  Higher and higher now... It's almost too much, isn't it?  You don't need to answer, just feel it grow thicker and hotter.  You're going to cum like a geyser, because of me, and you're going to love it.  You'll always want to cum for me, won't you?</i>\"");

        outputText("\n\nA vibrating, staccato pleasure sizzles from the tips of her fingers and directly into your [balls].  Instantly, a heaviness sets in.  There's a palpable denseness in your reproductive organs, like they've swollen slightly or at the very least simply increased in capacity, and they STILL feel so full you're about to burst.  Cum is freely drizzling from [eachCock]");
        if (player.cocks.length > 1) outputText(
            ", particularly the one inside her.");
        outputText("  It drips all over you, leaking out from inside her nethers, so thick it's tinted whitish with the absurd amount of semen boiling out of you.  You gurgle in delight as a fresh spasm of magical energy washes through your loins, plumping you perfectly down there until you can contain it no longer.  The voice inside you breathily whispers, \"<i>Cum for me,</i>\" and you do.");

        outputText("\n\nYour orgasm is the most relaxing, sublime orgasm you've had in recent memory.  The ecstatic pleasure shooting through your nervous system is so strong that you're not sure how long you can take it, but your flagging, relaxed body limply lays there while your hips and groin contort themselves to keep up the pulsating biological rhythm going.  Warm splashes splatter across your chest");
        if (player.cocks.length > 1) {
            outputText(" while your extra erection");
            if (player.cocks.length > 1) outputText("s spurt");
            else outputText(" spurt");
            outputText(" some cream up the ebony arch of your mistress's back");
        }
        else outputText(" from her bouncing, ebony erection");
        outputText(".  At the same time, her clenching, pussy climaxes around you while you fill it.  You're spraying ropes of spooge into her so fast that it's backwashing out around your " + cockDescript(game.player, x) + ", the veins pumping almost as hard as your overactive reproductive system.");

        outputText("\n\nIt goes on for so long that you're still cumming long after you would have thought it should end, and you just can't take it anymore.  Even though you're still fixated on her gorgeous nipples, your eyes start rolling back into your head, jerking further under your eyelids with the frothy seed-packed payloads you're releasing.  You whimper when she pulls off you, seed still dripping from her well-used cunt and slowly-deflating cock.  Still cumming, still feeling the glorious bliss she's conditioned you to feel in the presence of her breasts, you squirt wet ropes straight into the air while she dresses and kneels down next to you, whispering promises of how she'll make you cum more and more every time you give in to her.");

        outputText("\n\nYou black out when she prods your groin with a fresh tingle of magic, launching a torrent of jism a dozen feet into the air in the process.");

        player.orgasm();
        dynStats("sen", 5);
        if (player.cumQ() < 60000) player.cumMultiplier += 2;
        cleanupAfterCombat();
    }
}

// Take The Too Big Loss Facial
export function tooBigCumWitchLossFacial(): void {
    clearOutput();
    outputText("Ruefully, you tell her that you don't mind a little cum in exchange for having your own abilities enhanced.  The knowing grin that spreads across her face makes it seem like she knew the result was a foregone conclusion.");
    if (player.cor < 33) outputText("  You shudder at the knowledge of what's going to happen to you.  Just why did you agree to this?");
    else if (player.cor < 66) outputText("  You catch yourself licking your lips as the knowledge of what is about to happen to you sinks in. Despite hastily stopping yourself, the Cum Witch still saw, and she smiles.");
    else outputText("  You give her a lewd look and lick your tongue across your lips as you anticipate the big, fat load she's going to feed you, hungry for wet, decadent pleasure regardless of inhibitions.");

    outputText("\n\nThe hot moisture she's secreting all over your " + cockDescript(game.player, x) + " seems to be affecting you as well as the vibrations ");
    if (player.breasts.hasFuckableNipples()) outputText("in");
    else outputText("on");
    outputText(" your [nipples].  It feels like there's so much blood being forced inside your erection that the sheer over-tumescence will make you burst.  The need is overwhelming.  You HAVE to cum, and you're so wet, so stained with spunk and juice that there's no time like now.  The Cum Witch's heels press in on your ");
    if (player.balls > 0) outputText("[balls], compressing them slightly as a tingle of magic lances into you, fattening them under her ministrations");
    else if (player.vaginas.length > 0) outputText("[vagina], digging into the slippery slit as a tingle of magic spreads through it and into your core, thickening some organ inside you");
    else outputText("taint, rubbing it as a tingle of electric need phases through your " + skinFurScales(player) + " to assault your swelling prostate and seminal vesicles");
    outputText(", and in that moment, you lose all ability to hold out.  You're cumming, and you're cumming now.");

    outputText("\n\nLooking on in awe, you watch your gigantic urethra slowly dilate, opening wide to reveal the onrushing torrent of sticky, white goo, mere moments before it launches straight into your face, hair, and mouth.");
    if (player.cocks.biggestCockLength() >= player.tallness / 1.6) outputText("  The Cum Witch smiles as she holds it, bending it to make sure the overlong shaft deposits its thick load on your " + face(player) + " where it belongs.");
    outputText("  Your captor is still humping it even as you cum, moaning as the bulges of copious cream press on her smaller boner.  Her visage is alight with ecstasy, and her heavy nipples are dragging on your [chest] as she begins to grunt, her motions going jerky in her ecstasy.");

    outputText("\n\nOozing jism splatters into you with increasing frequency as your supercharged reproductive system asserts itself, thick globs dripping from your chin even as the Cum Witch peaks, adding her own virile sprays into the semen-shower.  Your " + hairDescription(player) + " mats down as it's soaked with the alabaster sperm, so much so that it dangles in sticky ringlets from your ears.  It feels so good that you start to moan, but that's immediately silenced by a cheek-bulging seed-eruption.  You're not sure whether it's yours or hers, but all you can do is swallow it down and try to breathe through the salty mask as it's piled on thicker and thicker.  There's so much that it's forming a hot, wet puddle behind you and dripping down your [chest], making the buzzing stones squish and splash it about as they help to bring you off.");

    outputText("\n\nThe Cum Witch climbs off you after what must be a minute of non-stop bukkake, but you keep cumming, too addled with pleasure to move your own spooge-hose.  Eyes rolling back in bliss, you cum yourself into unconsciousness while the victorious futanari gets dressed, stopping to rub a last few twinges of magic into you before she goes.  She wouldn't want you to run out of jism early, now would she?");
    // Cum and ballsize boost if appropriate
    if (player.cumQ() < 1000) {
        player.cumMultiplier += 5;
    }
    else player.cumMultiplier += 2;
    if (player.ballSize < 7) player.ballSize++;
    player.orgasm();
    dynStats("lib", 1, "sen", 1);
    cleanupAfterCombat();
}

// Avoid The Too Big Loss Facial
export function tooBigCumWitchLossNoFacial(): void {
    clearOutput();
    outputText("You tell her you'd rather not get a face full of her spunk.  Judging by the sour look on her face, she seems to be honestly surprised by your choice, like she never expected that anyone would choose not to get a faceful of her spunk.  This bitch clearly has spent too much time with her nymphomaniac sisters.");

    outputText("\n\nShe growls, \"<i>Your loss, " + mf(player, "handsome", "beautiful") + ".  I'm still gonna, gonna... get mine.</i>\"  The Cum Witch forcibly twists her hips to angle your [cock biggest] off to the side, shuddering as her black cock convulses on top of you, spraying a fresh gout of goo on top of you, and she hasn't even cum yet.  Her balls are quaking needily, pulsing and bouncing as they prepare to blow");
    if (player.balls > 0) outputText(", just like your own");
    outputText(", and she smiles cruelly as her feet press harder on you, suddenly tingling with supernatural forces.  Almost painful heat floods through your middle as she frots you harder and harder, inadvertently tit-fucking your immense erection all the way to orgasm.");

    outputText("\n\nYour first squirt is a nice, long thick spray that immediately soaks into the sand.  The second is much smaller, only a small, slimy trail.  Exploding atop you, the Cum Witch's boner hoses out a globule of cum so big that it breaks apart under its own weight and drops down both sides of your boner on its path to the sands.  Your dick is completely soaked in her jism at this point, and though less noticeable, her girl-cum is dripping down your [sheath] and [hips], marking you with her sweet, feminine scent while her salty goo drenches your bigger boner.  Her sprays get more voluminous as yours dwindle, until you're cumming out pathetic, tiny white droplets so small that it takes a few of them to get big enough to drip down to the ground.");

    outputText("\n\nExhaustion takes you as you finish, causing you to fall into a fitful slumber while the Cum Witch finishes pumping what looks like a lake out of her wang.  Just how much of your potency did she steal?");

    // Big-ish cum multiplier loss!  Lose some ball size if they're huge
    if (player.ballSize > 5) player.ballSize -= Math.round(player.ballSize * 0.333);
    player.cumMultiplier = Math.round(player.cumMultiplier * .75);
    player.orgasm();
    cleanupAfterCombat();
}
// TDM's generic loss to cum witch scene
// requires that the PC have a dick that can fit inside the cum witch's vagina.  The scene can be used with herms.
export function TDMsLoseToCumWitchScene(): void {
    clearOutput();
    let x: number = player.cocks.cockThatFits(monster.vaginalCapacity());
    if (x < 0) x = player.cocks.smallestCockIndex();
    outputText("Robes already lay discarded nearby and the cum witch stands triumphantly over your body.  A bobbing cock brushes up next to your face, quite erect and eager for service.  The hermaphrodite doesn't bother with conversation and roughly forces you onto your back.  She snaps her fingers; curving bands of stone snap out of the ground, curling over your limbs and binding you securely to the ground.  It's clear that you're about to get fucked, whether you like it or not.  Looking up, a cryptic smile plays across the black woman's visage as she deftly removes your [armor].  In an instant, your " + cockDescript(game.player, x) + " has been mounted.");

    // multicock section
    // if the PC has more than one dick, this witch puts hoods on them, which make them feel like they don't exist.
    if (player.cocks.length > 1) {
        outputText("\n\nWith your " + cockDescript(game.player, x) + " well entrenched in her singular vagina, the witch reaches over and pulls several small cloth pouches out of her discarded robes.  She smiles when she notices your confusion, but refrains from giving an explanation before putting a pouch onto ");
        // if (cocks = 2)
        if (player.cocks.length == 2) outputText("your other phallus.");
        // [if (cocks > 2)
        else outputText("the rest of your " + multiCockDescriptLight(player) + ".");
        outputText("  The futa on top of you continues to smile mysteriously, and spares not another moment of her attention on your genitals.");
    }

    outputText("\n\nThat finished, your assailant assumes an air of concentration for a moment before saying, \"<i>Enim emoceb lliw nemes dna doohnam ruoy!</i>\"  Magic strikes you, and suddenly [eachCock] goes numb, then you become aware of an alien appendage.  It feels like it is coming out of your crotch, and it feels like a cock, but it isn't ");
    if (player.cocks.length > 1) outputText("one of ");
    outputText("yours...");

    outputText("\n\nLooking up once more at the cum witch's mysterious knowing smile, a sense of fear slithers down your spine.  She gently taps her nose with one of her long, black fingers, then leads you down to her bobbing prick.  She gives it a gentle stroke, and you realize just what you've become aware of.  You're feeling her cock as if it were your own!  Based on the laughter of the dark-skinned spellcaster, your amazement and surprise are painted on your face, clear for all to see.");

    outputText("\n\nThe fearsome futanari proceeds to tease the head of her cock, drawing a small circle around the tip.  You find yourself trying to buck your body up into hers in response.  Unfortunately, this does nothing to increase the stimulation on her phallus, and you still can't feel anything from your own.  A view of her large breasts bouncing in front of you is your only reward.  \"<i>Are you frustrated?</i>\" she asks you, still smiling.  \"<i>Do you want to get off?</i>\"  The teasing continues, only doing the slightest of stimulations on her length.  With an angry grunt you struggle against the sandstone bonds holding you down, desperately trying to get more stimulation.  \"<i>Oh you are!  Good.  Then I have some good news for you.  You will in a moment, don't worry.</i>\"  You're getting really sick of seeing that same cryptic smile plastered all over her face.");

    outputText("\n\nYour attention is suddenly drawn down to ");
    if (player.balls > 0) outputText("the one part of your manhood that you can still feel, your [sack].");
    else outputText("a part of your body just behind and above the base of [eachCock], probably your prostate.");
    outputText("\n\nIt feels odd.  It's tingling and feels tight and compressed, like a spring wound up too far.  You feel as if all of your cum is being squeezed out of your body, but it isn't an orgasm; more like you're building up towards something much bigger.  It's a sensation that's really hard to describe, but it does feel good.");

    outputText("\n\nLeaning in close, her face is only inches away; a gentle whisper comes from her lips, \"<i>Looks like you're ready now.  Do you still want to cum?</i>\"  When you indicate in the affirmative, she snaps her fingers and the bindings around your arms are released.  \"<i>Then let's see how well you can work my meat,</i>\" she proclaims while returning to her old pose and licking her lips.");

    // end of the foreplay?  I guess now we have handjobs!  I've actually never written a handjob scene before... I don't actually know how to go from here!
    outputText("\n\nYou grip her length with both hands firmly and start jerking it in earnest.  At last, the stimulation that you wanted so much is literally at your fingertips!  Large drops of pre start to flow out of the tip, and the sorcerous seductress encourages you to use her fluids for added lubrication.  Eager to get any more sensation you can from this wonderful cock bobbing and bouncing in front of you, you put every drop of pre that escapes to work accomplishing that very purpose.");

    outputText("\n\nWorking that black bar is quite an experience.  It feels very different from your " + multiCockDescriptLight(player) + ".  ");
    // [if (sensitivity < 70)]
    if (player.sens < 70) outputText("It's more sensitive than yours, for one thing, and");
    else outputText("It isn't as sensitive as yours {are/is}, for one thing, but");
    outputText(" the flow of her constantly dribbling pre, tingling with magical power is something that you've never felt before.  Making things more interesting, the position that you're in leaves your grip on her dick remarkably different than how you'd grab your own while masturbating.  Of course what is important is that you want to rub every last inch of her lovely length, and feel every second of it through her strange spell.  The feeling of your cum being sucked out of your [balls] only makes the whole experience feel even better.");

    outputText("\n\nA loud slapping noise fills the air, and you notice that you're actually trying to thrust up into the cum witch's pussy with your " + cockDescript(game.player, x) + ", despite the fact that you can't feel it.  You stop yourself, only to have the witch start to gyrate her hips, spinning you around her insides with your " + cockDescript(game.player, x) + ", while simultaniously thrusting her cock through your hands.  You guess that while you can't feel your shaft inside her, she certainly can.");

    // orgasmsssss
    outputText("\n\nNow nearing your peak, the witch commands you to take your hands off her length; you do so reluctantly.  Things seem to pass in slow-motion to you, black hands move down and grip the cock you were just jacking firmly.  The witch leans back.  She aims her hermhood skyward, and a massive gout of spunk flies into the air.");

    // cum volume variations
    if (player.cumQ() < 200) outputText("\n\nMany streams of jizz fly up several feet before showering down on the ground and your lust locked bodies.  Anything that hits the sand is quickly absorbed into the hungry desert, while you and the dark skinned woman are covered liberally in her semen.  That cum couldn't have been just hers.  You swear what she pulled out of you was mixed in there as well.  It felt like she drew out a lot more than you'd usually let out in a single ejaculation for sure.  You feel completely drained, ");
    else if (player.cumQ() < 3000) outputText("\n\nThe flow of jizz pumping out of your collective cock lasts for at least half a minute!  A bizarre white fountain of spunk rains down around you, and onto you.  While you and the dark-skinned woman are completely drenched in the stuff, the desert sands look almost completely dry afterwards.  You end up receiving a look of admiration for your generous contribution.  Nodding through your sticky mask, you're somehow sure that most of that was the signature megaload of your [balls], though somehow, it was even more than you usually let go.  Your perverse partner drained you pretty good, ");
    else outputText("\n\nEverything goes white - there is no other way to say it.  The sensations have overpowered your senses, and it feels as though your very life is being pumped out of that damned cock.  You don't know how long it goes on for, but you know that you cum for minutes, at least.  The experience leaves your whole body drenched in hot, sticky fluid.  The incredible quantity of spunk you normally let out combined with the effects of the witch's strange spell has awoken what feels like the wrath of a jizz god, and you love every second of it.[pg]When it finally ends, you wipe the spunk from your face, and you're very surprised to see the last of the cum that didn't fall on the both of you quickly absorbing into the desert sands.  It feels as if you're on death's door, completely drained of everything, ");
    if (silly()) outputText("in both body and in [balls].");
    else outputText("in both body, and in spirit.");

    outputText("\n\nThe woman covered in your combined spunk rises up off of your body and dons her significantly whiter robes.  She wipes off her face, revealing that same cryptic, knowing smile once more, before gently touching your head and whispering something in your ear.  Another spell grips your body, and you drift off into a deep sleep.");

    // Decrease PC's strength by 2 for every digit of cum production they have after 100 (I can provide an algorithm for that if you need it, it is very simple), set lust to 0, increase cum production multiplier by 1
    player.orgasm();
    dynStats("str", -1);
    player.cumMultiplier++;
    if (player.cumQ() >= 200) dynStats("str", -1);
    if (player.cumQ() >= 3000) dynStats("str", -1);
    // Usual loss text+gem loss.
    cleanupAfterCombat();
}

export function defeatedByCumWitch(): void {
    if (game.inDungeon) {
        // Dudally-diddly.
        if (player.cocks.length > 0 && (player.gender == 1 || rand(2) == 0)) cumWitchCumPumpBadEnd();
        // Ladies and Genderless
        else turnIntoASammitch();
    }
    else {
        if (player.cocks.length > 0 && (!player.vaginas.length > 0 || rand(2) == 0)) {
            if (rand(2) == 0) TDMsLoseToCumWitchScene();
            else repeatLoseToCumWitchForDudes();
        }
        else if (player.vaginas.length > 0) {
            savinMakesAwesomeFemdom();
        }
        else cleanupAfterCombat();
    }
}

// *Victory Intro
export function cumWitchDefeated(): void {
    clearOutput();
    // (HP)
    if (monster.HP < 1) outputText("The chocolate-skinned witch collapses down onto her hands and knees with the tattered remnants of her robes swirling about her.  With her clothing destroyed, you're treated to the perfect view of her semi-erect cock and swollen testes swaying enticingly beneath her, paired with the glimmering wetness of her juicy cunny - also on display.  Her udder-like melons sway and jiggle in sympathy to her uncoordinated swaying.  She grumbles, \"<i>You've beaten me, interloper...</i>\"");
    else outputText("The chocolate-skinned witch collapses down onto her hands and knees, shredding her robes as she goes.  Her throbbing-hard cock drips with precum above her quaking testes while her equally enticing pussy looks positively soaked with feminine lubricants.  She rolls onto her back, tits jiggling wildly, and jams both her hands into her groin, masturbating furiously.  Panting, the witch moans, \"<i>You win... ooooohhh...  Come over here and fuck me!  Please!</i>\"\n\nWell, she did ask nicely...");
    flags[kFLAGS.CUM_WITCH_DEFEATED] = 1;
    menu();
    if (player.cocks.length > 0) {
        // *Male "Too Big" Victory Sex
        if (player.cocks.biggestCockArea() > monster.vaginalCapacity()) addButton(0, "Too Big Fuck", maleTooBigVictorySex);
        // *Male Victory Sex
        if (player.cocks.cockThatFits(monster.vaginalCapacity()) >= 0) addButton(1, "Fuck Her", menFuckUpSomeCumWitch);
    }
    // Tentacle Victory Gangbang
    // 3+ Tentas
    if (player.cocks.tentacleCocks() >= 3) addButton(2, "Tentacles", tentacleVictoryGangbangCumWitch);
    // Female Victory Sex
    if (player.vaginas.length > 0) addButton(3, "Ladysex", ladyVictorySex);

    if (game.inCombat) {
        if (monster.HP >= 1) addButton(9, "Leave", declineSandWitch);
        else addButton(9, "Leave", cleanupAfterCombat);
    }
    else addButton(9, "Back", playerMenu);
}

// *Decline Sex
export function declineSandWitch(): void {
    clearOutput();
    outputText("Dusting yourself off, you lower your [weapon] and leave the cum witch to recover from the humiliation of losing to you.  The haunted, hungry look in her eyes leaves little doubt that she'll challenge you again or that she still wants to fuck you.  For now, she slips down into her own puddled cum, idly touching herself.");
    if (game.inCombat)
        cleanupAfterCombat();
    else doNext(playerMenu);
}

// *Male Victory Sex
export function menFuckUpSomeCumWitch(): void {
    clearOutput();
    const x: number = player.cocks.cockThatFits(monster.vaginalCapacity());
    const y: number = player.cocks.cockThatFits2(monster.vaginalCapacity());
    outputText("You shuck out of your [armor] in eager anticipation, [eachCock] aleady ");
    if (player.lust < 50) outputText("half-hard");
    else outputText("rock-hard");
    outputText(" and pulsing with growing readiness.  The cum witch looks up at you with disdain, but the rigidity of her shaft and sloppy wetness of her flushed quim leave no doubt as to her state.   Her body blushes honestly as you reposition her, spreading her legs nice and wide.  You have to lift her hefty sack to expose the thick, wet lips of her pussy.  Jumping in response, her fat cock oozes a trickle of precum onto her dusky belly, oiling her dusky skin into a sensual shine.");

    outputText("\n\n\"<i>You think THAT compares to m-my wondrous... perfect penis?  I've knocked up more women than youUUU-</i>\" she taunts until you cut her off with a well-placed thrust.  [OneCock] vanishes ");
    if (player.cocks.cockThatFits(monster.vaginalCapacity()) < 0) outputText("most of");
    else outputText("all of the way");
    outputText(" inside her, sheathed deep in her under-used twat.  Her tight passage fits around your " + cockDescript(game.player, x) + " like a custom-made glove, a slippery warm embrace that threatens to rob you of your very reason.  The witch begins pumping her ebony cock along with the motions of your hips, throwing her head back in wordless pleasure that only a true hermaphrodite can experience.");
    if (player.vaginas.length > 0) outputText("  Two can play at that game.");
    // Herm sexback
    if (player.gender == 3) {
        outputText("\n\nYou pivot around so your [butt] is facing her and your dick is spearing straight down into her honeyed vise.  It's less pleasurable than your previous position, at least until you yank the dickgirl's cock out of her hands and ram it into your slit, fucking both her virile tool and fertile cunt at the same time.  Your futanari lover finally gives in the pleasures of the act and stops resisting.  She begs, \"<i>Yes, don't stop!  Fucking ride me!  By the mothers, that's good!</i>\" while her hips lift against your, slamming hard into your groin with echoing force.");
        // cuntchange
        player.cuntChange(monster.cocks.biggestCockArea(), true, true, false);

        outputText("\n\nDetermined to ride this rebellious cow into submission, you match her motions thrust for thrust and pump for pump, pushing harder and harder into the ground with each contact.  In no time, you're both covered in a fine sheen of sweat, recklessly rutting with the force of four animals trapped in two meager bodies.  Daringly, the witch begins to spank your [butt] with each concussive clap of crotches, only adding to the cacophony of noisy slaps.  You can't do anything but scowl in displeasure due to your positioning, even though the hits make your cock throb and your pussy clench.");

        outputText("\n\n");
        if (player.balls > 0) outputText("Your sweaty nutsacks slide over each other while you fuck, compressing together into a mass of sweaty orbs twitching against each other in a competition to disgorge their frothy load before the other.");
        else outputText("Her sweaty nutsack glides over your " + skinFurScales(player) + " as you fuck, compressing and twitching against you as it begs to discharge its frothy load.");

        outputText("\n\nFortunately, the feverish fucking reaches a simultaneous crescendo with a bone-jarring clap of sex to sex, male and female joined together in perfect, ecstatic harmony.  The brutal ass-slapping immediately turns into passionate, worshipful groping as the witch cums with you.  Both of your cum-bloated tools explode inside the other, disgorging thick flows of seed to paint the matching womb white, balls visibly shrinking as they empty at last.");
        if (player.cumQ() > 2000) outputText("  Of course, you outlast even the jizz-witch's magics, plugging her so full of semen that her belly rounds into a gravid orb while yours remains only slightly bloated.");
        else if (player.cumQ() > 1000) outputText("  Of course, you both manage to bulge each other's bellies with sexual discharge.");
        else outputText("  Of course, she cums far longer and harder than you, plugging your belly full of semen until it has a slightly fecund curve to it.");

        outputText("\n\nRising slowly, you withdraw yourself from the goo-glazed pussy beneath you and try to ignore the matching river of white that pours out from betwixt your thighs.  You make sure to lean over your onyx lover, salting her with her own dripping seed until the flow slows to a trickle.  She meekly protests at first, then gives up with a lusty sigh, smearing her skin with pristine white as her mind slides back into the gutter.  You make sure to admire your work while you get dressed.");
        // (cum, then +5 lust){preg check for sammitches}
        // sand witch preg
        player.knockUp(PregnancyStore.PREGNANCY_SAND_WITCH, PregnancyStore.INCUBATION_SAND_WITCH, 90);
        player.orgasm();
        dynStats("lus", 5);
    }
    // DP Males
    else if (y >= 0) {
        outputText("\n\nScowling, you pull her hand away from her bouncing, super-hard rod and say, \"<i>You want to feel twice the pleasure?  Then feel THIS!</i>\"  You punctuate the declaration by pulling back and aligning your " + cockDescript(game.player, y) + " with her back-door, slamming it home without waiting.  She winces in pain and shock, looking up at you aghast but wordless.  Smirking, you twirl a thick lock of her blonde hair about your fist and yank her up for a kiss, tonguing her mouth with the same brutal, forceful intensity that now violates her anus.  The woman screams in pleasure and pain, tongue-fucking back with hateful passion as her muffled cries fade away.");

        outputText("\n\nThough she still grapples with you, her silken tunnel is soon anxiously squeezing your " + cockDescript(game.player, x) + ", and her tight pucker gradually loosens.  Even relaxed, it still flutters with a tight warmth that far exceeds her pussy.  You could almost grow addicted to it.  The hapless brown-skinned goddess milks the " + cockDescript(game.player, y) + " in her butt while her engorged nipples press against your own, sliding slickly over your sweaty skin.  You bite her lip and pound her all the harder, mounting her with hard pounding strokes.  This is entirely about getting YOUR " + multiCockDescriptLight(player) + " off, and you don't worry in the least about her pleasure.");

        outputText("\n\nThe witch weakly tries to grab at her cock again while you brutalize her ass, but you crudely slap one of her breasts.  She squeezes and drips thick ribbons of pre-cum at the harsh contact.  Well, if that's what she wants...  You begin slapping her tits in time with your thrusts, pounding the mammaries until the dusky, sweat-oiled skin is flushed red in irritation.  Her nipples seem even bigger and harder from the abuse, and once you tire of the pleasant jiggle your strikes induce, you grab one of the chest-buds and pinch, hard.");

        outputText("\n\nA torrent of thick herm-cream spouts from the woman's neglected erection as you utterly abuse and humiliate her.  Taking this as your signal to go balls out, you twist that nipple sideways and rut her like a " + mf(player, "man", "woman") + " possessed, slapping both cocks into her spasming holes non-stop until you feel the heat surging in your loins, ready to explode inside her.");

        outputText("\n\nYou ask, \"<i>Are you ready, bitch?</i>\" to the blubbering, orgasmic wreck, and when she fails to answer, you yell out in pleasure and cum.  Jizz ");
        if (player.cumQ() < 250) outputText("pours out of your dual cum-slits, making a sloppy mess of both holes.");
        else if (player.cumQ() < 500) outputText("gushes out of your dual cum-slits, soaking both holes in and out with pearly white.");
        else if (player.cumQ() < 1000) outputText("gushes out with incredible force from your dual cum-slits, quickly plugging both holes so full of seed that the witch's belly slowly rises, cum-inflated.");
        else outputText("washes out of your dual cum-slits in a tidal wave, flooding the hungry holes with your virile seed.  You cum and cum, spunking up the witch's belly.  First it bulges slightly, but all too soon you have it rounded into a pregnant dome.");
        outputText("  The bouncing girl-cock above the woman's gushing pussy does a fine job of painting her belly and bust white.  It spurts rope after rope onto her chocolate-toned flesh, and soon she looks more like an icing-drizzled tart than a formidable foe.");
        outputText("\n\nFeeling empty and sated, you unsheath your double dongs to reveal the fruits of your labors - a pair of juicy creampies, one vertical, the other small, puckered, and oozing.");
        player.orgasm();
    }
    // Regular Dicking
    else {
        outputText("\n\nPulling the disobedient wench's hand away, you scold, \"<i>Tsk tsk, naughty bitches don't get to have cocks.</i>\"  She pouts like a petulant child and idly blows a lock of blonde hair out of her face, sticking her lower lip out even further. Laughing, you pinch her cheek and tease, \"<i>Come on, if you wanted to fuck for fun, you shouldn't have tried to force yourself at me.  Until you learn how to be polite, your dick is mine to control");
        // (silly:) outputText(", and I don't want it.  I think it's messy");
        outputText(".</i>\"");

        outputText("\n\nThe spellcaster's lube-oozing entrance seems to get wetter at your authoritative denial, so you keep at it, fucking her slowly and idly batting away any attempt from the woman to touch herself.  It isn't until she gives up and gently grabs your shoulders that you give her a smile ");
        if (player.cor < 50) outputText("and a hint of compassion");
        else outputText("and finally deign to let her have some pleasure");
        outputText(".  You gradually increase the tempo of your lovemaking and let your hand lazily drift lower, grabbing the witch by her soft, supple thigh.  Her skin is warm and flushed (or as flushed as ebony skin can get), and the higher your fingers reach, the damper it gets.  Gently, you prod around her lips and your own maleness to find the hardness of clit.");

        outputText("\n\nThose beautiful onyx thighs cross behind your back as soon as you bump the enchantress's buzzer.  One heel hooks over the other, and they flex encouraging, begging you to pull deeper inside the sexy black minx's twat.  Your cock is in heaven, held deep in a steamy velvet embrace that caresses it with the touch only a skilled lover provide.  Breathing heavily, you lean over the woman as you rhythmically fuck her.  Her arms entwine around your neck, caressing your shoulders and back with previously unseen tenderness.");

        outputText("\n\nYou kiss up the lady's lithe neck to her ear and whisper, \"<i>That's better,</i>\" just before giving her lobe a soft nibble.  She looks up at you when you pull back, partly confused and more than a little lust-lost, licking her lips and asking, \"<i>Harder... please?</i>\"");

        outputText("\n\nBrushing back the blond tresses, you give a gentle nod and begin to move faster, sawing your " + cockDescript(game.player, x) + " through the velvet tunnel faster and faster.  She arches her back hard enough to lift her tits to your mouth, and you greedily suckle one, allowing your fingers to dive down into her spasming cleft to rub her button.  Throughout it all, the witch's member is fitfully bouncing and pulsing as if desperate for attention.  You ignore it and the steadily growing puddle of pre, focused utterly on showing the woman what it means to love as a woman.");

        outputText("\n\nHer legs tremble behind you, gradually losing their grip.  The witch looks pleadingly looks up and begs, \"<i>I'm gonna... p-p-please... can I - OOooooh... c-can I cum!?  I'm so close... just... just let me cum!</i>\"  Being none too far from climax yourself, you graciously nod and slam your " + cockDescript(game.player, x) + " deep into its new home, crushing the witch's soft buns into your thighs.  She squeals happily and seizes up, her heels pressing hard into your back, trapping you inside her.  At the same time, her thick tool lifts an inch off her belly and thickens, the urethra bulging out for a moment before it begins to convulse and spray her goo over her tits and face. Her pussy drenches your loins in fragrant female goo, and you finally let go, pushing harder against her even though you're already dick-deep in quim.  Your " + cockDescript(game.player, x) + " unloads your thick gouts of spunk without delay");
        if (player.cumQ() < 700) outputText(", spurting with unceasing quantity until she's absolutely flooded with jizz and a little bulgy around the middle.");
        else outputText(", spooging up her cunny until it's completely flooded, her belly bloated into a rounded dome.");
        if (player.cumQ() >= 1500) outputText("  You keep going beyond that, but there's just no room, and spouts of semen spurt from the woman's poor, over-filled twat.");

        outputText("\n\nThe witch sighs and idly rubs her ");
        if (player.cumQ() >= 700) outputText("swollen ");
        outputText("tummy, smearing her own wasted goo into her skin as you withdraw and re-dress.");
        if (player.cor < 33) outputText("  You hope she learned something from the experience, but knowing most people in this strange land, she'll go right back to her rotten ways.");
        else if (player.cor < 66) outputText("  You wonder if she'll learn anything from this and shrug nonchalantly.  Who cares?");
        else outputText("  You smirk as you wonder if she'll learn anything from this.  You hope not - it's a fun lesson to teach.");
        player.orgasm();
    }
    if (game.inDungeon) {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(playerMenu);
    }
    else {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(Camp.returnToCampUseOneHour);
    }
}
// *Male "Too Big" Victory Sex
export function maleTooBigVictorySex(): void {
    clearOutput();
    const x: number = player.cocks.biggestCockIndex();
    outputText("You slip out of your [armor] with deliberate slowness, the tight, constraining pressure on your massive tool shifting in the most delicious way.  The uncomfortable yet tantalizing weight lessens gradually, and at the first hint of freedom, your " + cockDescript(game.player, x) + " flops free to taste the freedom of the open air, nearly doubling in size as your blood surges through it.  The witch's eyes look up in confusion at your prodigious proportions and widen in shock.");

    outputText("\n\n\"<i>Y-you're bigger than me...</i>\" she drawls, her mouth hanging open in shock at the declaration.  She covers the hanging orifice with her palm, lamely trying to conceal her shock at your gargantuan boner.");

    outputText("\n\nGripping yourself by the root, you casually aim it forward and let it grow until it brushes up on her nose, your urethra threatening to swallow it whole.  The ebon sorceress's pupils cross to focus on your shaft, and her visage takes on a hungry, somewhat confused look.  She protests, \"<i>This... this will never fit inside me!</i>\"  Glancing up at you with worry, she caresses the underside.  \"<i>I'm sure we can find another way...</i>\"");

    outputText("\n\nYou push the witch away roughly, flat onto her back.  She lands flat with fear in her eyes and nervously folds her arms across her exposed, jiggling breasts.  You ignore her, firmly grasping her thighs to unceremoniously yank them apart and expose the pink-tinged folds of her flower.  Your dick flops into place now that your supporting hands are gone, draping down to obscure the black flesh with supple, throbbing erection.  The witch pulls her arms out from under your mass, which releases her tits and allows them to drape to the sides, molding around the heavy cock atop her.");

    outputText("\n\nThe enchantress gives you a smokey look when you begin to move, giving up cute gasps of bliss whenever one of your veins catches on her clit or presses her prick harder into her belly.  Your member quickly grows slick with witch-pre and girl-lube, so when you tug her nipples to get more tit-contact on your pole, it glides right through.  Your lust-dilated urethra disgorges a thick bead of pre onto her chin as you command, \"<i>Hold them there.</i>\"");

    outputText("\n\nThe witch smiles and answers, \"<i>I can do one better!</i>\"  She gestures with her fingers, wreathing them in pink flames, and then she presses on her rapidly slickening bosom.  As the dark fingers withdraw, pink silhouttes remain, supporting the dick-hugging mammaries for her, and leaving her hands free to caress your " + cockHead(player, x));
    if (player.balls > 0) outputText(" or fondle your [balls]");
    outputText(".  You take her feet in hand and lift them high, bringing the weight of her supple thighs to bear around your [sheath].  With so much smooth skin surrounding you, the pleasure is intense, almost mind-bendingly good.  The witch's hands dance over your shaft, shooting tingles of pleasure up it and into your [balls], and each time you pump it forward, she smears your pre over the head with her plump, dark lips.");

    outputText("\n\nDuring one of the long, long pulls back, your cum-obsessed companion coos, \"<i>Gods, keep going!  It's so - mrpPPHHH.</i>\"  You plug her rambling with fat cock and marvel when her luscious, sucking cock-pillows reshape into a suctioning 'o'.  You can feel her drawing pre-cum straight through your urethra, all the way to her bulging cheeks.  When she releases the vacuum to swallow, you pop free and slide back again, but you feel even more lusty, more full, more ready to cum than before.  The shadowy beauty smiles up through her low-hanging lashes with overflowing mirth.  You realize she's used her magic on you somehow, likely to boost the strength of your orgasm, but do you really mind the thought of bukkaking this blonde bitch in gratuitous waves of white?");

    outputText("\n\nYou thrust forward hard enough that the woman is forced to accept the first few inches of your " + cockHead(player, x) + " inside herself and swallow the thick gouts of clear pre-seed that spurt out with each convulsion of pleasure.  Her eyes cross, fluttering from pleasure.  When you pull back, she moans lasciviously, licking the last of your residue from your lips even as her inferior cock bulges underneath your own.  You're aware of some extra warmth and a slimy heat below - did she just cum?  You piston faster, enjoying the extra lubrication and confirming your suspicion.");

    outputText("\n\nJiggling gently as you fuck her, the witch's asscheeks are a suitable target for your roving hands, and you turn to kneed one, smacking the other.  Still cumming under your girthy cock, she crosses her heels to squeeze you with the whole of both her legs.  Her arms do like-wise, hugging the cum-coated cock tightly into the quaking tit-flesh.  The sorceress seems to be molding her entire body into a masturbation sleeve, and each time you slam your dick into her mouth, she sucks more hungrily upon it, drinking deeply of your essence.  Her eyes close more often than open, and each time her lips aren't locked on cock, she's moaning and creaming her belly.  Her frothing, everpresent cum drips down the sides of her body, but the sight of it only spurs you on to fuck her harder and faster, until you can spill your own mighty load.");

    outputText("\n\nThe cum-soaked, hermaphrodite witch tries to beg for your cum, but you shut her up with another load of bubbling pre.  As you watch her try to swallow it all, you feel a twinge of heat inside yourself");
    if (player.balls > 0) outputText(" along with your [balls] growing tight");
    outputText(", and you know your climax has arrived.  You hammer your " + cockDescript(game.player, x) + " back home, smashing it into her face.  The first wave seems to languish in your body forever, gradually stretching your urethra wide until you see your " + cockHead(player, x) + " swell and open.  A wave of white fills the bitch's mouth, soaks her hair, and washes over her shoulders.  There's so much of the alabaster gunk that ropes of it dangle around her head in a shroud, slowly dripping into a puddle onto the floor.  You inch back a bit, and let the next explosion take her in the tits.  The jism pours out like it water from a five gallon bucket, and the black tits are immediately wreathed in glistening white.");

    outputText("\n\nDemanding more friction, your " + cockDescript(game.player, x) + " draws you right back up to her face, and this time she doesn't even try to catch it in her mouth.  The black slut simply plants a kiss just below your opening and meets your gaze as the alabaster flow takes her, holding eye contact for as long as she can.  Of course, that isn't long, and she's quickly drenched in spunk, her eyes glued shut with syrupy strings of spooge.");

    outputText("\n\nYou aren't done!  Not by a long shot!  This dark creature blessed you with unholy levels of virility, and you aren't going to waste it.  You stand away and butt your " + cockHead(player, x) + " into her nether-lips, and the remainder of your orgasm is injected directly into the woman's waiting womb.  Her belly rounds into a nice, gravid bump that carries her cock up with it, and you're given the first chance to see the results of the cum witch's own orgasm.  The dark, glossy cock is absolutely soaked in sperm, while her balls are wreathed in churned up, frothy cum.  Once you've made her uterus a swollen dome, you aim up and drizzle the last ropes atop her pathetic, half-limp dick.");

    outputText("\n\nExhausted at last, you pat your " + cockDescript(game.player, x) + " affectionately.  You'd wipe it off on the witch's hair, if it wasn't messier than the " + skin(player) + " you plan to clean.  She begins to lick her fingers and clean the stuff off her face.  You just laugh, and get dressed.  There's still much to do.");
    player.orgasm();
    if (game.inDungeon) {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(playerMenu);
    }
    else {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(Camp.returnToCampUseOneHour);
    }
}

// Female Victory Sex
export function ladyVictorySex(): void {
    clearOutput();
    outputText("You disrobe, casting aside the garments with a feminine sigh.  As soon as you expose yourself, the witch's eyes twinkle happily.  She caresses her stiff tool and tweaks one of her nipples as she watches you.  \"<i>If you wanted to get fucked by little old me, all you had to do was bend over, honey.</i>\"");

    outputText("\n\nPlanting a [foot] on her hip, you stop her fidgeting with a menacing glare.  \"<i>You don't get to fuck me, witch.  I'm fucking YOU,</i>\"  you decree.  The well-endowed ganguro slut creases her pretty face into a frown, but meekly nods.  Her pussy still seems puffy and wet, and her cock hasn't shrunk at all.  You sidle up and push a few fingers into her twat, testing the waters.  As you expected, her fluids are as bountiful as most sand witch's breasts.  She squirms weakly at the attention, and her cock bobs happily on her belly.  You affectionally pat the dark-hued member and playfully tug on her ebon skin.");

    outputText("\n\n\"<i>Ahh... don't tease me!</i>\" she protests as she tries to wriggle away from your probing fingers.  You pinch your fingers into a tight circle around her sack and pull down, stopping her in her tracks.  The lusty woman whines plaintively, but you tighten your grip and jam your fingers deeper inside her.  In spite of her discomfort, the ebony babe's nipples are sticking straight up, huge and puffy.  Her cock is leaking trickles of precum all over her belly, and she gasps, \"<i>Noo...</i>\"");

    outputText("\n\nFeeling merciful, you release her balls, but you keep your fingers right where they are.  She bites her lower lip in frustration but her hips wiggle up at you.  Sneaking under her balls, your fingers find her clit and begin to diddle it, sliding over, around, and under it.  The little buzzer throbs happily in your grip, almost begging you to touch it, stroke it.  Of course, you do all of that, manipulating the woman's heaving, female flesh into a frenzy of pleasured moans.  She grabs onto your arm for dear life and pulls it deeper into her self, screeching like a banshee as she cums.  Liquid love gushes from her pussy to stain your hands, so you pump a little faster, and get rewarded with an even greater flow.  Her wet walls grab you like a vice, wringing your hand with unholy force, and then like a light going off, she shuts down, babbling weakly.");

    outputText("\n\nYou wipe your hand on the supple skin of her thigh and scold her for making such a mess.  The witch, for her part, is half conscious and panting, blissed beyond rational thought.  A glaze of white goo puddles on her belly, but her cock is still plenty hard, seemingly super-turgid from the strength of her recent orgasm.  You lift it up gingerly and climb atop it, grinding your own [vagina] along the shaft slowly to get yourself ready.  Only after the swollen rod is liberally coated in fem-spunk do you shift position and aim it up inside.");

    outputText("\n\nSinking down on the firm pole, you revel in the sensation of it splitting your nethers, beautifully stretching your canal's walls into a wide, cock-swallowing 'o'.  Your [clit] thrums with heat and pleasure while you continue your slow descent, and by the time you hit cock-bottom, your [legs] are shaking weakly and your abdominal muscles are fluttering, clenching uncontrollably.  You bend over to nuzzle against the brown breasts, and they form a comfortable pillow for you to lean upon once you start to move your [hips].");

    // cuntCheck Here
    player.cuntChange(monster.cocks.biggestCockArea(), true, true, false);
    outputText("\n\nThe semi-conscious witch stirs beneath you, responding to the sexual pleasure you've forced back upon her.  \"<i>...Wha?</i>\" she asks as comprehension washes over her features.  \"<i>Oooh... you're not done?</i>\"  You bite her lower lip as your work her cock over, pumping away with wild abandon.  The only answer she needs is the feel of your body climaxing atop her, and you begin to play with her breasts as you work towards that goal.");

    outputText("\n\nThe dark-skinned blond pants, \"<i>Too soon... gonna... gonna cum... again!</i>\"  She screws up her eyes and throws back her head, her tongue weakly flopping to the side, and you feel her cock erupt, the heavy orbs of her balls twitching under your [butt].  Molten hot semen gushes through your passage, bathing your womb in thick sperm until you feel full in a whole different way, and as if triggered by biological imperative, you cum, creaming that thick rod with your lady-spunk.");
    if (player.vaginas.wetness() >= 5) outputText("  It gushes out of you in a soaking river, utterly drenching the futa's stomach, hips, and butt.");
    if (player.lactationQ() >= 50) outputText("  At the same time, milk spouts from your bosom to wash over your hermaphrodite.");

    outputText("\n\nThe orgasm drives your body relentlessly, and you're forced to ride the hermaphrodite like a bucking bronco, milking her cock relentlessly.  You hips thump wetly atop the chocolate lady's thighs, and it isn't until you make that final, echoing smack of soaked flesh on flesh that you come down, sagging weakly into the comfortable tits below.  The witch sighs contently and begins to stroke your [hair], but her fingers fall away after a second as her eyes flutter closed.");

    outputText("\n\nYou recover after a few minutes and rise up, legs shaking at the overpowering sensation of the witch's withdrawing phallus, but you make it up with spunk pouring from your [vagina].  What a victory!");

    player.knockUp(PregnancyStore.PREGNANCY_SAND_WITCH, PregnancyStore.INCUBATION_SAND_WITCH, 90);
    player.orgasm();
    if (game.inDungeon) {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(playerMenu);
    }
    else {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(Camp.returnToCampUseOneHour);
    }
}

// Tentacle Victory Gangbang
// 3+ Tentas
export function tentacleVictoryGangbangCumWitch(): void {
    clearOutput();
    outputText("The defeated sorceress eyes you questioningly as you step closer, and her surprise only deepens when you part your [armor] to expose your " + multiCockDescriptLight(player) + ".   You gleefully twist your multiple members around each other into a many-layered helix, oily, pre-dripping plant-cocks squirming together in a bundle of barely-restrained, bubbling lust.  The pliant flesh pulsates happily at its freedom and immediately takes a twist towards the horny witch, pausing above her as if considering the tightness of her slick folds or the softness of her erect cock's skin.");

    outputText("\n\nWith your erections poised to strike, the blonde can only stare and worry.  Her lower lip quivers with uncertainty, but as she soon as she dares to protest, you unspool a wiggling wang and stuff it so deep into her gullet that all she can say is, \"<i>-uRMMPH!!!</i>\"  The ebony girl's throat bulges obscenely while your monstrous tool burrows deeper, nesting the purple-hued head deep in her supple, exquisitely textured throat.  The suction generated by her attempts to breath only make your cock swell larger inside her, pumping you up as effectively as a goblin-machined sex-toy.");

    outputText("\n\nGroaning from the sensations, you relax the control that kept your bundle of cock twined into a single dick and allow them to fly freely.  The quickest cock immediately snaps down to nuzzle at the cunt-lips, smearing your fluids into her own.  The quick rubs stir the sensual fluids into a bubbly, off-white mess of slippery debauchery.  Unfortunately for it, that early cock is soon supplanted by another of your tentacle members.  The new one glides along the underside of the first, then squeezes between the other dick and the glorious wet slit, arching down to nestle itself inside.  The witch arches her back, eyes rolling wildly, as she struggles both to breathe and endure the sudden, forceful penetration.");

    outputText("\n\nVibrating spitefully, the now-denied cock arches up, scorpion-like and ready to strike.  It considers its options, perhaps seeing its brothers nailing the horny hussy's two holes through your eyes.  The prehensile penis decides to take a leg and curl about it like a snake, climbing higher and higher across the smooth, dusky skin.  Once it has nearly reached the oozing, freshly-fucked twat, it twists lower, down into the dark valley between the ass-cheeks, and with a happy sigh from your lips, you let your third tentacle pecker slide into the vulnerable anus.  It slides through her sphincter with ease and immediately begins to piston in out and out, slowly sawing through the witch's abused rectum without care for her comfort.");

    outputText("\n\nYou pull the throat-plugging prong free of the cum witch's oral cavity and smile down at her, laying the spittle-lubricated cock between the spellcaster's perky tits.  She coughs and gasps around, chest heaving.  In response, her swollen udders jiggle pleasantly around your embedded tool, inadvertently massaging your wiggly plug.  You rock your hips in response to the three layers of pleasure, even though your members can thrust quite adequately without you having to add any motion to the ocean.  It just feels so good to cut loose and truly enjoy the fruits of your blessed form!  You pick up the pace, dicks folding back and lunging forward like snakes, setting every part of the spunk-obsessed witch's body shaking, even her leaky cock.");

    if (player.cocks.tentacleCocks() >= 4) outputText("\n\nYour fourth free prick twines around the enchantress's dusky shaft, frotting and jerking it all at once, the twin cocks oozing a bubbly mess over each others' lengths.  Arching over top of the ebony tool, your dick leans down and smashes its tip against the other, and you shudder at the feeling of pre being swapped back and forth between the cum-slits.  The cum witch's eyes roll back from the bliss she's been forced to experience.  Simultaneously, her mouth dilates, and drool dribbles from her facile mouth, oozing down her chin.  You tighten your coils around the black cock and squeeze a dollop of fresh pre-jism from it, picking up the pace to match the vigorous fucking you're giving.");

    outputText("\n\nThe ebony beauty's back arches from the raw sexual power of your many-pronged assault, and she cums, as messily as noisily, her voice screeching like a banshee.  A torrent of white bursts from her bulging, pulsating penis");
    if (player.cocks.tentacleCocks() >= 4) outputText(", splatting over your frotting cock-tip in wild abandon");
    outputText(", more like a firehose than an orgasm.  The alabaster flood rushes across the taut skin of her belly, glazing down your titty-fucking cock and the jiggling underswell of the witch's bust.  Her tight cunt clenches down around you like a vice, with wave-like ripples cycling from your deeply embedded tip all the way to your base.  The tight pucker of the witch's anus contracts likewise, and though it doesn't endeavor to milk your cock like her pussy, the squeezing hot tightness feels utterly divine in its own way.");

    if (player.balls > 0) outputText("\n\nYour balls begin to tremble with quaking warmth, releasing their thick cargo to pump up [eachCock].");
    else outputText("\n\nYour body begins to tremble with the quaking warmth, releasing its thick cargo to pump up [eachCock].");
    outputText("  You shudder and grab the ebony sorceress's tits in your hands, squeezing her bronzed orbs tightly as you release works through you.  Jets of cum well up to plug the witch's pussy and anus simultaneously.  The spit-soaked, cum-splattered vine between her tits quivers meaningfully, and then unloads, squirting a thick wave of jizz onto her face.");
    if (player.cocks.tentacleCocks() >= 4) outputText("  Of course, your fourth prick is not to be outdone, and blasts a gooey coating of cream across the witch's own pulsating prick, wreathing it in drizzles of syrupy white.");
    if (player.cumQ() >= 500) outputText("  Wave after wave of spunk washes into the tight holes and toned form of your foe, turning her into a complete mess.");
    if (player.cumQ() >= 1000) outputText("  A few more virile splurts see to her utterly inundated state, bloating her belly into a tightly-stretched dome.");

    outputText("\n\nYou retract your spent shafts and smirk at the backflow of bukkake that bursts from the cum witch's soiled loins.  She's utterly wrecked, dominated by dick in every sense.  What delicious irony that a sorceress should be taken with the very type of organ she glorifies!  Getting dressed, you give her a lazy wave and invite her to try again some other time.");

    player.orgasm();
    if (game.inDungeon) {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(playerMenu);
    }
    else {
        if (game.inCombat)
            cleanupAfterCombat();
        else doNext(Camp.returnToCampUseOneHour);
    }
}

// *Friendly Cum Witch Blessing
// ✓Kirbu
export function friendlyCumWitchBlessing(): void {
    clearOutput();
    outputText("You ask the Cum Witch if she could use her magic to gift you with some kind of blessing since she has such an affinity for sexualized magics and fertility.  ");
    if (player.cor < 33) outputText("Blushing, ");
    else if (player.cor < 66) outputText("Nervously, ");
    else outputText("Boldly, ");
    outputText("you remove your armor, figuring whatever blessing she's going to give is going to be at least a little bit sexual.");

    outputText("\n\n\"<i>Oh my, you are eager, aren't you?</i>\"  The dusky sorceress circles you as she takes off her hat, shaking her almost platinum-white tresses sensually as she frees them from constriction.  \"<i>Well, I could give you my blessing, but you have to truly want it.  My 'magic wand' will need to be charged up before it can gift you with its power.</i>\" She sheds her robes, exposing her long, ebony phallus, already beading with pre.  It doesn't look like it would need much encouragement to 'bless' you, but perhaps this woman's unceasing sexual conquests have given her stamina beyond your expectations.");

    // {M:}
    if (player.gender == 1) outputText("\n\nThe cum witch says, \"<i>Since you're being so nice about this, I can bless you with enhanced volume and virility.  All you have to do is help me release some of mine onto you...</i>\"");
    // {F:}
    else if (player.vaginas.length > 0) outputText("\n\nThe cum witch says, \"<i>Since you're being so nice about this, I can bless you with superhuman fertility.  Just a little seed inside you and you'll be swelling with babies.  Doesn't that sound nice?</i>\"");
    else if (player.gender == 3) outputText("\n\nThe cum witch says, \"<i>Ohhh, a fellow hermaphrodite.  Tell me, would you rather I gift you with unceasing virility or the fertility of a slut in heat?  I can only give you one.</i>\"");
    else outputText("\n\nThe cum witch says, \"<i>Oh, you lack a gender.  Why don't you pick up some sexual equipment and come back for some real fun.</i>\"");
    // [Virility] [Fertility] [Nevermind]
    menu();
    if (player.cocks.length > 0) addButton(0, "Virility", cumWitchBlessed, true);
    if (player.vaginas.length > 0) addButton(1, "Fertility", cumWitchBlessed, false);
    addButton(4, "Nevermind", changeMindAboutBlessings);
}
// *Nevermind ✓Kirbu
export function changeMindAboutBlessings(): void {
    clearOutput();
    outputText("Thinking better of it, you grab your [armor] and get dressed, telling the jizz-obsessed enchantress that you don't need her gifts for now.");
    outputText("\n\n\"<i>Awww, and I thought we were going to have some fun,</i>\" the sable seductress purrs.  \"<i>Perhaps you'll see the error of your ways and come back for a proper blessing soon.</i>\"  She pumps her fat cock until thick dribbles of sperm-tinted pre-cum slobbers out of her drooling dick-tip once more.  \"<i>Don't be a stranger.</i>\"");
    doNext(playerMenu);
}

// *Virility/Fertility
export function cumWitchBlessed(virility: boolean = true): void {
    clearOutput();
    outputText("Your choice made, you lower yourself until you are seated on your [legs], your face aligned at the perfect height to fellate her drippy, onyx dong.  You can still smell the scent of freshly-fucked pussy hanging around her shaft like some kind of sexual haze.  She saunters up, wide ebony hips swaying hypnotically as her male-half sways pendulously, closer and closer.  Her hands come to rest on your head and run through your " + hairDescription(player) + " with slow strokes as she nudges her crown against your upper lip, letting it smear her juices under your nose and across your cheek.  The eleven inches throb pleasantly against the side of your face, the veins standing out in stark relief as you glance down to her orange-sized cum-factories, held in a tight, smooth pouch just below.");
    outputText("\n\nUnthinkingly, you reach out to fondle the heavy package, your fingers curling around the woman's soft sack and rolling the swollen testes back and forth.  The black beauty grabs her shaft and lays it across your nose, up between your eyes, and onto your forehead, forcing you to go cross-eyed as you admire it.  An electric tingle runs through her fingers and into your scalp, short-circuiting your thoughts for a second.");

    outputText("\n\n...Her cock is gorgeous.  Your mouth waters just looking at it.  You lick your lips before hesitantly extending your tongue out, lapping at the bottommost portions of her divine dick.  The taste of her sweat and caked-on girl-cum is so strong that it makes you shiver.  Another jolt of power slips into you.  It tastes <b>soo good</b>!  You slobber all over it, trying to gather up every taste of her old, spent seed onto your tongue, your eyes fixated on the erection as it dribbles a trail of liquid need down the bridge of your nose.  It likes you!  A ecstatic thrill shivers through your spine at the knowledge that you've pleased it so excellently, and you gingerly grab hold of it, pulling back so that you can plunge the entire thing straight into your mouth.");

    outputText("\n\nAs it plunges through your lips, across your wiggling tongue, and into the back of your throat, you stop caring about whether or not you get a blessing out of the deal.  You've got her perfect prick in your mouth where it belongs, and you let out a hum of pure, divine excitement.  Bobbing back and forth, you admire the way your spit froths and shines her glorious rod while you fellate it.  A couple times, you nearly gag on it, but while you're coughing around her meat, the cum witch's hands massage her familiar tingles into you, tamping down any such worry.  The next time you go forward, you let her the entire way into your throat, and it feels oh so good to let her fuck your throat.");

    outputText("\n\nWrenching your eyes from her thickness, you look up at her innocently, still squeezing her slowly filling sack - those nuts are each big enough to fill a hand at this point.  The sorceress of seed gives you a lascivious smile and begins to rock her hips, fucking your mouth.  You let her have control and purse your lips into a tightly-sealed 'o'.  Fucking your mouth faster and harder, the cum witch sighs and says, \"<i>Oh, your mouth is nice and wet.  Such a tight little fuck-hole you've got there - you'll have my blessing in no time slut.  Doesn't that make you happy?</i>\"");

    outputText("\n\nGiving a hum of assent, you let the corners of your mouth crinkle upward in a smile as you're used.  It's starting to feel really good, like your throat really is a cunt, a horny, cock-hungry twat that needs to be plowed deep, long, and hard by her thick ebony dong.  It's dripping long ropes of wasted pre-seed into your belly, and it tingles with the pleasant promise of spooge to come.  You waggle your tongue around as best you can to enhance the sensation, getting hotter and hornier with each passing moment.");
    if (player.tongueType > TONUGE_HUMAN) outputText("  Your inhuman tongue slides further and further out, following the witch's bulging, pre-cum filled urethra towards her balls where it can curl around them, embracing them with slick, slippery saliva.  You can taste her unique flavor on her skin, and it makes you shudder with arousal.");

    outputText("\n\n\"<i>Fuck, I hope you're ready for a blessing,</i>\" the groaning futanari announces as she pulls out.  One of her hands stays on her delicious, spit-and-cum soaked dick, pumping through the frothy mix as she looks at your whorish, pursed lips.  The other stays in your hair, tingling almost constantly as you ready yourself for her anointment, the perfect gift you've been craving.  Your lust has risen to unbearable levels, making ");
    if (virility) outputText("[eachCock] drip and drool your own seed onto the floor.  The heat inside you is so hot that you can't keep your ardor penned up, and it's slowly boiling out of your [balls] in a pleasure-filled orgasm that provides everything but relief.  You're sure that touching yourself would give you a proper orgasm, but you keep your hands where they belong - on her balls.");
    else {
        outputText("your [vagina] ");
        if (player.vaginas.wetness() < 3) outputText("drip");
        else if (player.vaginas.wetness() < 4) outputText("drool");
        else if (player.vaginas.wetness() < 5) outputText("leak");
        else outputText("spray");
        outputText(" your juicy secretions onto the ground below.  Your lust has risen to such unbearable levels that you're clenching and dripping in orgasmic delight without any release.  You're sure just a touch on your clit would have you cumming your brains out, but you keep your hands on her balls.");
    }
    outputText("\n\nHer perfect, glossy tip suddenly opens up, and her holy fluid comes out.  You open up to try and catch it on your tongue, to taste her perfect flavor, but it slaps wetly across your forehead instead.  The next blob smears across your cheek, so voluminous that it's dripping from your chin already.  Everywhere her blessed goo touches lights up with pleasure, and soon you ARE cumming, shuddering and shaking with an orgasm of indescribable pleasure.  Your eyes roll back as fat dollops of seed splatter across your [chest] and belly, even your [legs].  You're painted with the stuff, and when you manage to catch some in your mouth?  Your tongue itself cums, spasming and slapping around your mouth, sloshing the tasty stuff around before you convulsively swallow it.");

    outputText("\n\nYou flop onto your back as she continues to hose you down with her unholy virility, giving you a full-body-gasm of incredible potency.  When you blink the ropes of jism from your eyes and look up with a dopey expression, you see the cum witch banging a sand witch on the other side of the room, already filling the twat with her oozing precum.  A pang of jealousy runs through you before you realize how she made you lust for her juices artificially, but there is a certain fullness in your ");
    if (!virility) outputText("womb");
    else outputText("[balls]");
    outputText(" that reminds you that you got exactly you asked for, even if she made you like it a little bit more than you would have liked...");
    outputText("<b>");
    if (virility) {
        outputText("\n\n(Perk Unlocked: Magical Virility - 200 mLs more cum per orgasm and enhanced virility.)");
        player.perks.create(PerkLib.MagicalVirility, 0, 0, 0, 0);
    }
    else {
        outputText("\n\n(Perk Unlocked: Magical Fertility - 10% higher chance of pregnancy and increased pregnancy speed.)");
        player.perks.create(PerkLib.MagicalFertility, 0, 0, 0, 0);
    }
    flags[kFLAGS.BEEN_BLESSED_BY_CUM_WITCH] = 1;
    player.orgasm();
    dynStats("lib", 1, "sen", -5);
    outputText("</b>");
    doNext(playerMenu);
}
