export function lionpaws(skipped: boolean = false): void {
    clearOutput();
    // [skip riddles, just request from menu (requires some event occurrence > 1)]
    if (skipped) {
        outputText("\"<i>Really, [name]?</i>\"  Sanura smirks and shakes her head.  \"<i>I probably shouldn't do this sort of thing just because you ask for it, but your fascination with my paws is too cute to ignore.  Go on, then, strip for me and I'll get to it.</i>\"  You oblige, happily tossing aside your armor.  [EachCock], already standing erect with anticipation, bounces freely before you.  The sphinx eyes ");
        if (player.cocks.length == 1) outputText("it");
        else outputText("them");
        outputText(" lustfully, momentarily entranced by the swaying motions of your member");
        if (player.cocks.length > 1) outputText("s");
        outputText(".");
    }
    // [player requests big fluffy paws on their dick after solving a riddle]
    // [if event occurrence == 0]
    else if (flags[kFLAGS.PAWJOBS] == 0) {
        outputText("Sanura raises her eyebrows at your demand, her expression somewhere between surprise and curiosity.  \"<i>Well, that's something of an odd request, but I suppose I'm obliged if it's your wish.</i>\"  Not bothering to give her a chance to consider your demand any further, you pull off your armor and cast it aside.  \"<i>Can't say I've even been asked for something like this before...  I apologize in advance for my inexperience, [name].</i>\"  The sphinx looks down at her paws, obviously confused as to why you would ask for this in particular.");
    }
    // [if event occurrence > 0]
    else {
        outputText("\"<i>Again?</i>\" Sanura asks, cocking her head to the side.  \"<i>They must feel better than I imagine... well then, get out of your clothes and I'll do as you ask.");
        if (player.cocks.biggestCockArea() > 100) outputText("  It's not as if there's all that much else I can do for that monster of yours anyways.");
        outputText("</i>\" She raises a paw and examines it, as though trying to figure out just what it is about them that you enjoy so much.  You cough as a means of drawing her attention once you've stripped off the last bit of your armor, shaking her from her reverie.");
    }

    outputText("\n\nSanura asks that you kneel, and you eagerly comply.  ");
    // [if dick isn't already hard and PC knows what's coming]
    if (player.lust < 50 && flags[kFLAGS.PAWJOBS] == 0) {
        outputText("Even as you drop to your knees before Sanura, your cock");
        if (player.cocks.length > 1) outputText("s");
        outputText(" begin");
        if (player.cocks.length == 1) outputText("s");
        outputText(" to harden in anticipation while your mind wonders at just what this will feel like.  ");
    }
    outputText("The sphinx bends too, so that her head is level with your crotch.  With a little bounce, she throws her large paws around your hips and roughly pulls you closer.  The guardian wastes no time, licking along the shaft");
    if (player.cocks.length > 1) outputText("s");
    outputText(" of your ");
    if (player.cocks.length > 1) outputText("various ");
    outputText("prick");
    if (player.cocks.length > 1) outputText("s");
    outputText(" with a soft, skilled tongue.");
    // [if pc was soft before]
    if (player.lust < 50 && flags[kFLAGS.PAWJOBS] == 0) {
        outputText("  It isn't long before her oral ministrations have your cock");
        if (player.cocks.length > 1) outputText("s");
        outputText(" standing erect, throbbing with hunger for more sensation.  You wonder as to what exactly she has planned, but you think it's shaping up to be something good.");
    }
    // [continue]
    outputText("  Her long, expert strokes methodically coat your member");
    if (player.cocks.length > 1) outputText("s");
    outputText(" in a glistening veil of saliva. After a while, she pulls her head away and examines her work.");

    outputText("\n\nApparently deeming ");
    if (player.cocks.length > 1) outputText("them");
    else outputText("it");
    outputText(" sufficiently lubricated, Sanura lifts a foreleg and carefully guides her paw towards your crotch.");
    // [if PC doesn't expect it]
    if (player.lust < 50 && flags[kFLAGS.PAWJOBS] == 0) outputText("  You raise your eyebrows in surprise, but you're not in much of a position to do anything about her foot's advance.");
    outputText("  She playfully taps at your cock, purring sensually as she sets it bouncing with a light bat.  After watching it for a moment, she hesitantly pushes forward so that her paw gingerly rests against ");
    if (player.cocks.length > 1) outputText("one of ");
    outputText("your shaft");
    if (player.cocks.length > 1) outputText("s");
    outputText(", pushing your cock up against your waist and trembling with the effort of keeping her touch gentle.  The pad of her paw, made soft and warm by the sands of the desert, presses lightly around your cock.  Slowly, hesitantly, she begins to rub up and down, her paw gliding along your slickened skin.");
    // [if cockradius < xXXXX(most people should see this)]
    if (player.cocks.smallestCockArea() < 100) outputText("  As she pushes onto you just a bit more forcefully, your member slips between two of her digits.  She continues her slow, rhythmic movements with just a bit more grip, and you're made quite thankful that her claws are so retractable as she brushes against your belly.");

    outputText("\n\nTan, fluffy fur tickles you as Sanura keeps stroking away, motions made perfectly smooth by the thick coat of saliva that still covers your cock.  The wide, cushiony embrace of her paw feels as though it might engulf your cock at any moment, so strongly do you feel the comfortable, pleasurable sensations.  ");
    // [if PC did not request da paws && event occurrence == 0]
    if (!skipped && flags[kFLAGS.PAWJOBS] == 0) outputText("It feels wonderful in a peculiar sort of way; though it's certainly not the treatment you expected to receive, you can definitely feel your arousal being pushed along and built up by her foot.  ");
    // [if PC has 2+ dicks]
    if (player.cocks.length > 1) outputText("Not content to leave your other cocks neglected, the sphinx leans in and starts to lick and suckle once again at the pricks not beneath her paw.  You shudder at the feeling of her tongue darting from shaft to shaft and teasing your heads, sharper sensations punctuating her foot's more constant pleasuring.  ");
    outputText("The fuzzy warmth clouding your mind dazes you, and you sway slightly in place, letting her rock you back and forth with her motions.");

    outputText("\n\nThough her attentions definitely feel nice, the shaky, imperfect nature of the pawjob leave you thirsting for more as the tension builds in your cock");
    if (player.cocks.length > 1) outputText("s");
    outputText(".  You suddenly grab her ankle, and she looks up at you confused, probably thinking you mean for her to stop.  You guide her back into steadier, quicker motions in short order though, eliciting a giggle from the playful sphinx.  She presses against you more confidently with your hand there to guide her, less fearful of causing you harm.  You slide her paw faster and faster, desperate to bring yourself more sensation and to orgasm.  Not feeling like it's quite enough, you take her other large paw from your hip and press its pad against your shaft too, using her feet like some odd sex toy to hug your [cock biggest].  Rather than being upset about being used in such an unusual manner, Sanura coos and grasps at your meat even tighter, reveling in the strange experience.  You buck your hips slightly in time with the strokes, and it's not long before you feel a familiar need and warmth well up inside.");

    // [if cum output is normal]
    if (player.cumQ() < 250) outputText("\n\nWith a few final pushes you find release, spraying ropes of thick cum along the length of her leg.");
    else {
        outputText("\n\nA torrent of cum bursts forth from your cock");
        if (player.cocks.length > 1) outputText("s");
        outputText(" like a geyser, covering both you and Sanura in a flood of your semen.  The flow doesn't stop, cum churning and burning as it roils within you.  The sphinx pulls away in an effort to dodge the unexpected volume of man-milk, but to no avail: both halves of her body are painted white and your cum drips from her hair to her skin, fur, and wings. She tries to wipe her face at least clean, but manages only to smear more across her cheek.  With a sigh, she shakes what she can off her hands.");
    }
    outputText("  Exhausted from the orgasm, you let go of her, leaving the sphinx to milk out the last drops of cum with gentle pressure from her pad on her own.  Sanura stands back up and laughs.  \"<i>Look at the mess you made!</i>\"  She places her dirtied paw on your chest and pushes you back, easily making you fall on your [ass].  \"<i>Well, that was... interesting");
    if (flags[kFLAGS.PAWJOBS] > 0) outputText(" as always");
    outputText(", [name].  Now get your clothes back on, I've a temple to guard and a coat to clean.</i>\"  At that, she turns and pads away from you, lying down in front of the door and licking at her");
    // [if cum output is normal]
    if (player.cumQ() < 250) outputText(" leg.");
    else outputText(" stained-white fur in a futile attempt to get some of your cum off.");

    player.orgasm();
    dynStats("sen", -2);
    menu();
    if (skipped) {
        game.dungeonLoc = 0; // Replaces inDungeon = false;
        addButton(0, "Next", Camp.returnToCampUseOneHour);
    }
    else {
        menu();
        addButton(0, "Enter", openZeDoorToParadize);
        addButton(4, "Leave", leaveBoobsDungeon);
    }
}

// SPHINX RIDDLES for the Gentleman Gamer
// Accept the Riddle Challenge
export function riddleGameGo(): void {
    clearOutput();
    flags[kFLAGS.RIDDLE_ONE] = 0;
    flags[kFLAGS.RIDDLE_TWO] = 0;
    flags[kFLAGS.RIDDLE_THREE] = 0;
    outputText("\"<i>Oh!  You'll play my game?  Marvelous!  Well then, let's begin...</i>\"");
    // [NEXT]
    menu();
    addButton(0, "Next", riddlePicker);
}

export function riddlePicker(): void {
    const choices: any[] = [];
    if (flags[kFLAGS.RIDDLE_ONE] != riddleOne && flags[kFLAGS.RIDDLE_TWO] != riddleOne) choices[choices.length] = riddleOne;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleTwo && flags[kFLAGS.RIDDLE_TWO] != riddleTwo) choices[choices.length] = riddleTwo;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleThree && flags[kFLAGS.RIDDLE_TWO] != riddleThree) choices[choices.length] = riddleThree;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleFour && flags[kFLAGS.RIDDLE_TWO] != riddleFour) choices[choices.length] = riddleFour;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleFive && flags[kFLAGS.RIDDLE_TWO] != riddleFive) choices[choices.length] = riddleFive;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleSix && flags[kFLAGS.RIDDLE_TWO] != riddleTwo) choices[choices.length] = riddleSix;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleSeven && flags[kFLAGS.RIDDLE_TWO] != riddleSeven) choices[choices.length] = riddleSeven;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleEight && flags[kFLAGS.RIDDLE_TWO] != riddleEight) choices[choices.length] = riddleEight;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleNine && flags[kFLAGS.RIDDLE_TWO] != riddleNine) choices[choices.length] = riddleNine;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleTen && flags[kFLAGS.RIDDLE_TWO] != riddleTen) choices[choices.length] = riddleTen;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleEleven && flags[kFLAGS.RIDDLE_TWO] != riddleEleven) choices[choices.length] = riddleEleven;
    if (flags[kFLAGS.RIDDLE_ONE] != riddleTwelve && flags[kFLAGS.RIDDLE_TWO] != riddleTwelve) choices[choices.length] = riddleTwelve;
    if (flags[kFLAGS.RIDDLE_ONE] == 0) {
        flags[kFLAGS.RIDDLE_ONE] = choices[rand(choices.length)];
        flags[kFLAGS.RIDDLE_ONE]();
    }
    else if (flags[kFLAGS.RIDDLE_TWO] == 0) {
        flags[kFLAGS.RIDDLE_TWO] = choices[rand(choices.length)];
        flags[kFLAGS.RIDDLE_TWO]();
    }
    else {
        flags[kFLAGS.RIDDLE_THREE] = choices[rand(choices.length)];
        flags[kFLAGS.RIDDLE_THREE]();
    }
}

// RIDDLE 1
export function riddleOne(): void {
    clearOutput();
    outputText("\"<i>Hmm, here's an old one, but a good one, I think.  One of my favorites, but stop me if you know the answer already: 'I walk on four legs in the morning, two in the afternoon, and three in the evening.  What am I?'</i>\"");
    menu();
    // [A Sphinx] (if PC int < 50 add this: [A Centaur]) [A Man] (if PC int < 35 add this: [Stilts]) [Fuck it, Attack]
    addButton(0, "A Sphinx", riddleOneSphinx);
    addButton(1, "A Centaur", answerWrong);
    addButton(2, "A Man", answerCorrect);
    if (player.inte < 35) addButton(3, "Stilts", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// Special Occurrence: Pick [A Sphinx]
export function riddleOneSphinx(): void {
    clearOutput();
    outputText("The sphinx narrows her eyes at you, crossing her arms over her chest.  \"<i>You don't say?  Come on, step it up, [name].  Sorry, but that's wrong.  Let's try again.</i>\"");
    menu();
    if (flags[kFLAGS.RIDDLE_ONE] == riddleOne) flags[kFLAGS.RIDDLE_ONE] = 0;
    else if (flags[kFLAGS.RIDDLE_TWO] == riddleOne) flags[kFLAGS.RIDDLE_TWO] = 0;
    else if (flags[kFLAGS.RIDDLE_THREE] == riddleOne) flags[kFLAGS.RIDDLE_THREE] = 0;
    addButton(0, "Next", riddlePicker);
}

// RIDDLE 2
export function riddleTwo(): void {
    clearOutput();
    outputText("\"<i>Mmm, I've always been fond of this one.  Delightfully simple, really - don't overthink it, dear.  'I always run, yet never walk; I murmur often, yet never talk; and I've a bed, yet never sleep.  What am I?'</i>\"");
    // [A River] [A Whisper] (if PC int < 50 add this: [A Nail]) (if PC int < 35 add this: [A Bunny Girl]) [Fuck it, Attack]
    menu();
    addButton(0, "A River", answerCorrect);
    addButton(1, "A Whisper", answerWrong);
    if (player.inte < 50) addButton(2, "A Nail", answerWrong);
    if (player.inte < 35) addButton(3, "A Bunny-Girl", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 3
export function riddleThree(): void {
    clearOutput();
    outputText("\"<i>Ooh, this is a morbid one: 'Whoever makes me, sells me.  He who buys me, never uses me. And he who uses me, well, they'll never know it.  What am I?'</i>\"");
    menu();
    // [Poison] (if PC int < 50 add this: [A Condom]) (if PC int < 35 add this: [Arrows]) [A Coffin] [Fuck it, Attack]
    addButton(0, "Poison", answerWrong);
    if (player.inte < 50) addButton(1, "A Condom", answerWrong);
    if (player.inte < 35) addButton(2, "Arrows", answerWrong);
    addButton(3, "A Coffin", answerCorrect);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 4
export function riddleFour(): void {
    clearOutput();
    outputText("\"<i>Here's a classic for you: 'I'm always hungry, and must be fed always, lest I flicker away.  Yet I will always bite the hand that feeds me, if it touches me.  What am I?'</i>\"");
    menu();
    // (if PC int < 35 add this: [A Fairy]) [Fire] [A Dog] (if PC int < 50 add this: [Disease]) [Fuck it, Attack]
    if (player.inte < 35) addButton(0, "A Fairy", answerWrong);
    addButton(1, "Fire", answerCorrect);
    addButton(2, "A Dog", answerWrong);
    if (player.inte < 50) addButton(3, "Disease", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 5
export function riddleFive(): void {
    clearOutput();
    outputText("\"<i>A favorite of my dear Goblin friends: 'When young, I am sweet in the sun; in middle age, I make you gay; but when I'm old, I'm more valuable than gold.  What am I?'</i>\"");
    menu();
    // (if PC int < 50 add this: [Men]) (if PC int < 35 add this: [Women]) [Wine] [Cheese] [Fuck it, Attack]
    if (player.inte < 50) addButton(0, "Men", answerWrong);
    if (player.inte < 35) addButton(1, "Women", answerWrong);
    addButton(2, "Wine", answerCorrect);
    addButton(3, "Cheese", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}
// RIDDLE 6
export function riddleSix(): void {
    clearOutput();
    outputText("\"<i>This riddle always makes me a bit sad, but... 'My life lasts but hours, and in service I'm devoured.  Thin, I am quick, fat I am slow, and wind is ever my foe.  What am I?'</i>\"");

    // (if PC int < 35 add this: [A Goblin]) [A Candle] (if PC int < 50 add this: [A Boat]) [An Arrow] [Fuck it, Attack]
    menu();
    if (player.inte < 35) addButton(0, "A Goblin", answerWrong);
    addButton(1, "A Candle", answerCorrect);
    if (player.inte < 50) addButton(2, "A Boat", answerWrong);
    addButton(3, "An Arrow", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 7
export function riddleSeven(): void {
    clearOutput();
    outputText("\"<i>In service to the Sand Witches, I can sympathize with this riddle's speaker: 'Each morning I appear to lie at your feet; all day I'll follow you no matter how fast you run, yet I'll nearly perish in the midday sun.  What am I?'</i>\"");

    // [A Shadow] [A Dog] (if PC int < 35 add this: [Water]) (if PC int < 50 add this: [The Breeze]) [Fuck it, Attack]
    menu();
    addButton(0, "A Shadow", answerCorrect);
    addButton(1, "A Dog", answerWrong);
    if (player.inte < 35) addButton(2, "Water", answerWrong);
    if (player.inte < 50) addButton(3, "The Breeze", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 8
export function riddleEight(): void {
    clearOutput();
    outputText("\"<i>Tsk, a sad tale this, fleeting as a melody on the breeze: 'You've heard me before, and will again, till fast I die - then you'll but summon me again.  What am I?'</i>\"");
    // (if PC int < 35 add this: [A Demon]) (if PC int < 50 add this: [Religion]) [An Idea] [An Echo] [Fuck it, Attack]
    menu();
    if (player.inte < 35) addButton(0, "A Demon", answerWrong);
    if (player.inte < 50) addButton(1, "Religion", answerWrong);
    addButton(2, "An Idea", answerWrong);
    addButton(3, "An Echo", answerCorrect);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 9
export function riddleNine(): void {
    clearOutput();
    outputText("\"<i>Like a cat comes this riddle of many lives: 'Three lives have I, gentle enough to sooth the skin, light enough to caress the sky, or hard enough to shatter stone.  What am I?'</i>\"");

    menu();
    // (if PC int < 35 add this: [A Dick]) [Water] [A Voice] (if PC int < 50 add this: [Faith]) [Fuck it, Attack]
    if (player.inte < 35) addButton(0, "A Dick", answerWrong);
    addButton(1, "Water", answerCorrect);
    addButton(2, "A Voice", answerWrong);
    if (player.inte < 50) addButton(3, "Faith", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 10
export function riddleTen(): void {
    clearOutput();
    outputText("\"<i>Devious, this: 'Whoever makes me, tells it not; he who takes me, knows it not; and he who knows me, takes me not.  What am I?'</i>\"");

    // [Disease] [Counterfeits] (if PC int < 35 add this: [Piss in a River]) (if PC int < 50 add this: [Tattered Scrolls]) [Fuck it, Attack]
    menu();
    addButton(0, "Disease", answerWrong);
    addButton(1, "Counterfeits", answerCorrect);
    if (player.inte < 35) addButton(2, "Piss In A River", answerWrong);
    if (player.inte < 50) addButton(3, "Tattered Scrolls", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 11
export function riddleEleven(): void {
    clearOutput();
    outputText("\"<i>The lovely Naga that roams this desert knows my speaker well: 'A box without hinges, lock or key, yet I've golden treasure within me.  What am I?'</i>\"");

    // (if PC int < 35 add this: [A Treasure Chest]) (if PC int < 50 add this: [Pure Honey]) [Eggs] [Booze Bottles] [Fuck it, Attack]
    menu();
    if (player.inte < 35) addButton(0, "Teasure Chest", answerWrong);
    if (player.inte < 50) addButton(1, "Pure Honey", answerWrong);
    addButton(2, "Eggs", answerCorrect);
    addButton(3, "Booze Bottles", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// RIDDLE 12
export function riddleTwelve(): void {
    clearOutput();
    outputText("\"<i>Here we've one that speaks to the stars and the earth at once: 'One by one we fall from the heavens, down into the depths of the past; our world is ever upturned, so that yet some time will last.  What are we?'</i>\"");

    // (if PC int < 50 add this: [Fallen Stars]) (if PC int < 35 add this: [Angels]) [Sand] [Rain] [Fuck it, Attack]
    menu();
    if (player.inte < 50) addButton(0, "Fallen Stars", answerWrong);
    if (player.inte < 35) addButton(1, "Angels", answerWrong);
    addButton(2, "Sand", answerCorrect);
    addButton(3, "Rain", answerWrong);
    addButton(4, "Uh, ATTACK!", fuckItAttack);
}

// ANSWER A RIDDLE RIGHT (Like a Boss)
export function answerCorrect(): void {
    clearOutput();
    if (flags[kFLAGS.RIDDLE_THREE] == 0) {
        outputText("The sphinx-girl sighs, \"<i>That's... correct.  Not bad, I suppose.  Well, we're not done yet... I've still got some tricks up my sleeves.  Er, so to speak.</i>\"");
        menu();
        addButton(0, "Next", riddlePicker);
    }
    else {

        // BEAT THE SPHINX AT HER OWN GAME (First Time)
        if (flags[kFLAGS.BEATEN_SANURA_COUNT] == 0) {
            outputText("\"<i>W-what!?</i>\"  the sphinx gasps as you correctly answer the last of her riddles.   \"<i>I-I don't... but how?  No one's ever had the wits to answer all three riddles!</i>\"");
            outputText("\n\nShe takes a moment to collect herself, then shrugs her shoulders lightly, \"<i>Well, that <i>was</i> unexpected.  My apologies, but I never actually expected you to win... still, I did offer you recompense for your efforts.  I am Sanura,</i>\" she bows, and over her shoulder you suddenly see a small door in the face of a dune emerge.  \"<i>You may enter the lair of the Sand Witches at your leisure.  Or... if you so desire... my body is yours to do with as you will,</i>\" she adds playfully.");
        }
        // BEAT THE SPHINX AT HER OWN GAME (REPEAT)
        else {
            outputText("\"<i>Tsk, I lose again!</i>\" Sanura pouts, crossing her arms.  \"<i>I suppose you'll just have to give me a victory ravishing, won't you?  Go easy, though... you've already damaged my pride so....</i>\"");
        }
        flags[kFLAGS.BEATEN_SANURA_COUNT]++;
        outputText("\n\nWhat do you do?");
        // (Display Options: [Fuck Her] [Door] [Leave])
        menu();
        addButton(0, "North Door", openZeDoorToParadize);
        addButton(1, "Fuck Her", fuckDatSphinx);
        addButton(4, "Leave", leaveBoobsDungeon);
    }
}

// THE SPHINX BEAT YOU AT HER OWN -- WAIT A SECOND
export function answerWrong(): void {
    clearOutput();
    outputText("\"<i>That's... wrong, I'm afraid,</i>\" she says, a proud smile playing across her lips.  \"<i>Wrong, wrong, wrong.  Well, perhaps </i>I<i> was wrong about </i>you<i> after all...  Here I thought you'd be some fun.  Still, though, at least your body will serve me well, I think.  Yes, you'll do nicely.  Go on then, love, strip out of your [armor] for me.  A deal's a deal, after all...</i>\"");
    // (Display Options: [Submit] [Fuck it, Attack])
    // (Submit goes to appropriate loss scene)
    menu();
    addButton(0, "Submit", sphinxSubmissionOptions);
    addButton(1, "Uh, ATTACK!", fuckItAttack);

}

// FUCK IT, ATTACK (First Time)
export function fuckItAttack(): void {
    clearOutput();
    outputText("To hell with this. You ready your [weapon] to beat your way through the damned sphinx, but as soon as you make a threatening move, the half-lion makes a shrill \"<i>EEEP</i>\" and throws her hands up in surrender. \"<i>Please, th-there's no need for violence! I've no loyalty to these witches, they </i>force<i> me to guard the door. I've no desire to fight you; I'll not stop you if you wish to enter the lair.</i>\"");
    // [Options: Enter, Leave. Either way, Sanura won't be encountered again]
    flags[kFLAGS.SANURA_DISABLED] = 1;
    menu();
    addButton(0, "Enter", openZeDoorToParadize);
    addButton(4, "Leave", leaveBoobsDungeon);
}

// Fuck Her
export function fuckDatSphinx(): void {
    clearOutput();
    outputText("Grinning lustily at the pretty leonine girl, you tell her it's time to have some fun. With an easy grace, she slips the sky blue shift from her shoulders, exposing her pert, palmable breasts.  \"<i>Well, you did win my game, after all... I'm yours to do with as you wish, my brilliant " + mf(player, "handsome", "beautiful") + " friend.</i>\"");
    // Male Options: [Get Blown] [Pawjob]
    // Female Options: [Force Dildos]
    menu();
    // Req Cock
    if (player.cocks.length > 0) {
        addButton(0, "Fuck Her", fuckDatLionPussah);
        addButton(1, "Get Blown", getBlown, false);
        addButton(2, "Pawjob", lionpaws, false);
    }
    // Cunts & NoDicks
    if (player.vaginas.length > 0 || !player.cocks.length > 0) addButton(3, "Magic Dildos", forceDildos);
}

// Get Blown (Males & Herms)
export function getBlown(submit: boolean = false): void {
    clearOutput();
    outputText("You shed your armor, unleashing your " + multiCockDescriptLight(player) + " into the dry heat of the desert.  Sanura licks her lips hungrily as you beckon her over, leaning back against the stone pillar to give her a good look at your fuckmeat.  The sphinx approaches, a sashay in her animalistic hips; soon she's running her small, delicate hands across your " + skinFurScales(player) + ", brushing against all the right places.  Fingertips trace along your [chest], circling your [nipples] with slow, teasing strokes before descending, tracing along your belly and down to your [hips]");
    if (player.balls > 0) outputText(", one hand slipping down to cup your [balls], rolling them in her palm until a white trickle escapes your [cockHead biggest]");
    outputText(".  The sphinx drops to her knees before you, leaning in to stroke her tongue along the side of your [cock biggest], caressing your manhood with a tongue that's rough, but surprisingly gentle on your most sensitive flesh.  She laps at the tip, eagerly drinking the first drops of sticky pre before turning her attentions elsewhere, letting the next drops stain the desert stands.");

    outputText("\n\nShe nuzzles against your crotch, slowly working ");
    if (player.cocks.length > 1) outputText("each of ");
    outputText("your dick");
    if (player.cocks.length > 1) outputText("s");
    outputText(", massaging your manhood until you feel ready to burst with pleasure.  Only then, with bright eyes looking up at you, locked with your own, does Sanura slip the [cockHead biggest] of your [cock biggest] into her mouth, wrapping her full lips around your throbbing erection.  You groan, [legs] wobbling with need and desperation as she licks and teases your cockhead, brushing her slender digits along the underside.");

    outputText("\n\n\"<i>Hold on just a little longer, my friend,</i>\" the sphinx says, words muffled around the cock in her mouth.  \"<i>We've only just started....</i>\"");

    outputText("\n\nYou start to question her meaning when she suddenly releases your prick, letting it bob stiffly in the air; spit and copious streams of pre dangle like flags from your pole.  A few strands still connect the two of you, trailing from your tip to Sanura's lips, painting her two full lines a milky white.  She grins up at you, even as her fingers begin to move in strange, arcane ways, weaving thin blue lines of magic in their wake as a spell takes shape.  In the blink of an eye, a pair of translucent hands appear just above Sanura's own, sparkling with eldritch light.  Your breath catches as the first of these magical hands brushes against your skin, a mind-numbing tingle rushing through your body from the point of contact.  Your mouth opens and closes wordlessly as your entire body seems to go slack, practically turning to liquid as the magical hands brush against your thighs and hips, tantalizingly far from your " + multiCockDescriptLight(player) + ", the tingling digits just out of reach of your most sensitive parts.");

    outputText("\n\nA finger brushes against your [cock biggest], just for the briefest moment.  You throw your head back and scream, your entire body convulsing as a thick rope of cum spurts from your tip, smearing Sanura's face with your seed.  She releases you utterly, leaving you to writhe as your ");
    if (player.balls > 0) outputText("balls empty");
    else outputText("body empties");
    outputText(" out onto her eager face.  As you feel yourself winding down from the magically-induced orgasm, however, a strange blue sigil appears in the air, encircling ");
    if (player.cocks.length > 1) outputText("each of your ");
    else outputText("your ");
    outputText("dripping cock");
    if (player.cocks.length > 1) outputText("s");
    outputText(".  \"<i>You do want to go again, yes?  I think I've got enough magic to keep that nice [cock biggest] hard for a little fun with my new hands....</i>\"");

    outputText("\n\nYou nod, then shudder as the sphinx's sex-magic works through you, her arcane symbols reinvigorating your spent manhood.  In moments, you're far harder than you were before, and thick ropes of cum spill out of your tip");
    if (player.cocks.length > 1) outputText("s");
    outputText(" - the salty liquid flows freely onto the desert sands from Sanura's open mouth as your ");
    if (player.balls > 0) outputText("[balls] churn");
    else outputText("body churns");
    outputText(" out a seemingly endless supply of seed.  Your breath comes ragged as more and more spills out of you, your newly-potent manhood making you feel lightheaded as it expels an endless tide of cum.  Slowly, gently, Sanura leans in, wrapping her lips around the tip of your [cock biggest], lapping up the river of semen that pours into her mouth.");

    // If Multi-cock = 3
    if (player.cocks.length >= 3) {
        outputText("\n\nAs Sanura slurps up the tip of your [cock], her ethereal hands grasp ");
        if (player.cocks.length == 2) outputText("your ");
        else outputText("two of your ");
        outputText("other " + num2Text(player.cocks.length - 1) + " members, wrapping tightly around their meaty lengths.  You groan throatily as tingling digits slowly work their way up your shafts, making your heart flutter wildly with the alien sensation.");
        // AND If Multicock = 5
        if (player.cocks.length >= 5) outputText("  You barely have time to adjust to the eldritch hands jerking off your extra cocks when Sanura's own come into play, wading into the jumble of wangs growing from your crotch to grab another pair of pricks.  With five cocks encircled in hands, magic, and mouth, Sanura slowly begins to synchronize her movements, gently stroking your many cocks.");
    }

    outputText("\n\nAfter a few moments of her mouth and hands working wonders around your flesh, the sphinx-girl begins to pick up pace; in the span of a minute she ramps up from a gentle blowjob to a full-on face-fuck, going faster and faster with every beat of your heart and spurt of seed flowing from your magically stimulated [balls].  Despite the sea of sperm you're creating, you can feel another orgasm approaching, rushing on despite the lingering aftershocks of the first.");

    outputText("\n\nWhen it hits, you almost lose consciousness, the sheer pleasure of the second orgasm throwing you onto your back in a writhing heap as your body convulses wildly with ecstasy.  You shudder and groan, your cock");
    if (player.cocks.length > 1) outputText("s");
    outputText(" geysering into the air, raining back down in a pool around you and the now cum-covered sphinx.");

    outputText("\n\n\"<i>Enjoy yourself?</i>\" the milk-white leonine girl asks, dropping to her knees beside you, a hand resting on your heaving chest.  You give her a weak thumbs-up, and stagger to your [feet].");
    player.orgasm();
    menu();
    if (submit) {
        game.dungeonLoc = 0; // Replaces inDungeon = false;
        addButton(0, "Next", Camp.returnToCampUseOneHour);
    }
    else {
        menu();
        addButton(0, "Enter", openZeDoorToParadize);
        addButton(4, "Leave", leaveBoobsDungeon);
    }
}

// Force Dildos (CuntCommanders & Genderless)
export function forceDildos(): void {
    clearOutput();
    outputText("You start to peel out of your [armor], but a twirled finger from Sanura has you turn to face the stone pillar and brace yourself.  With silent grace, the half-cat slinks up to you, wandering hands moving to explore your body, her slender fingers tracing along the supple curves of your [butt] and [hips], slowly moving toward your [chest] with slow, teasing motions, her every shift sending shivers up your spine.  Your breath catches as her fingers brush your [nipples], gently squeezing them");
    // if MilkyTits:
    if (player.lactationQ() >= 200) outputText(" until a gentle trickle of your motherly fluids pours out across her hands.  With a girlish giggle, the sphinx slips her head under your arm, lapping at your milky teats.  A throaty purr escapes her lips before you give her a little push, getting her back to the task at hand");
    outputText(".");

    outputText("\n\nThe sphinx slips down onto her knees, leaning down to put her face on level with your [butt].  You look back over your shoulder, watching as a lusty grin spreads across the leonine girl's lips.  She caresses your cheeks, slowly spreading them to give herself a good look at your waiting [vagOrAss].  You bend yourself over a little more, waggling your ass in Sanura's face invitingly.  She pats your [butt] and, looking you square in the eye, draws her tongue in a long, slow motion across your quivering hole, sending a spark of pleasure surging through your body.  Your [legs] quiver as your lover lavishes you with another lengthy, sensuous lick.  Your [vagOrAss] contracts powerfully as her feline tongue brushes it, begging for a cock to drain, to stuff it full to stretching and pump it full of warm, frothy cum.");

    outputText("\n\nInstead, the sphinx-girl teases you with another lick, and another; but as she does, you can see her fingers moving in arcane gestures, weaving thin blue lines of magic in their wake as a spell takes shape.  A long, wrist-thick pole of translucent blue light soon forms between her hands, the crown at its tip giving it the unmistakable shape of a phallus.  With a final lick across your sensitive flesh, the sphinx spreads your cheeks as wide as they'll go, letting your spit-slicked hole taste the dry desert air.  A moment later, you feel the tip of the spectral dildo against the mouth of your [vagOrAss], the magical energies that form it sending electric currents through your body; every hair on your bare form jumps to attention as pleasure burns in you like a fire, even before the slightest penetration.");

    outputText("\n\nWhen the tip does slide in, you nearly cum on the spot.");
    if (player.vaginas.length > 0) player.cuntChange(10, true, true, false);
    else player.buttChange(10, true, true, false);
    outputText("\n\nEvery inch of your sensitive inner walls that the arcane pseudo-cock presses past explodes in a conflagration of pleasure, electrifying your every nerve as Sanura slowly sinks her summoned dildo into your [vagOrAss].  You clench your teeth as you try to bear the orgasmic overload radiating from your fuck-hole, but the magical shock-wave soon spreads over your entire body.  Your [legs] quiver as the half-lion sinks her rod deeper and deeper into you, reaming your innermost depths wide with inch after inch of mind-numbing stimulation.  Suddenly, though, her advance ceases, leaving you skewered on a gently-vibrating rod of arcane ecstasy.  Just as your sex-addled mind starts to question the lack of movement, you feel a sudden and overwhelming force pressing into your [vagOrAss] atop the cock already embedded inside you, trying to stretch your hole even wider.  This second ethereal prick is even bigger than the first, slowly working and wedging itself into your abused hole, forcing you open until you're screaming in pleasure and pain.  Finally, the massive cock pops in, and relief spreads through you as Sanura starts gently working it in, cooing softly as she penetrates you once again.");

    if (player.vaginas.length > 0) {
        // if PC has Vagina
        outputText("\n\nAs your quivering cunt tries to adjust to the pair of massive intruders tearing it apart, the sultry sphinx conjures up a third rod, just as big as the last.  You grit your teeth, bracing for her attempt to cram THAT up your slit as well, but instead feel only a gentle, probing wetness against your [ass].  You shiver from your very core as Sanura drags her tongue along your backdoor, pressing the tip in, seeking entrance.  Despite the static pleasure roiling in your cunt, you try your best to relax the muscles in your sphincter; eventually, after a few long moments of prodding, you feel the first inch of the magic dildo pierce your [asshole], stretching you out to your limit and beyond as Sanura shapes its size to utterly fill your rear entrance.");
        player.buttChange(10, true, true, false);
    }
    // If PC Ain't Got No Cunt
    else {
        outputText("\n\nWith two arcade implements tearing your anus apart, you barely even notice as the tip of a third conjured rod begins pressing into your hole, fervently intent on joining its fellows.  Suddenly, you feel the two shafts already stuck inside you shift, moving aside to accommodate a third magicock, that's just as big as the last two Sanura filled you with.  Your entire body convulses as your poor, abused asshole is stretched beyond anything you thought it could ever take, the three massive cocks sliding deep into your bowels.  Your muscles spasm around the tingling rods, inner walls contracting hard as if to milk them of whatever these things might have that passes for cum.");
    }

    // Recombine
    outputText("\n\nWith three huge dildos of pure energy fucking you, you don't have much hope of lasting long.  You dig your fingers into the hard, unyielding stone of the desert obelisk, groaning as Sanura slides her dildos in and out of you with unforgiving rhythm, the strange magic from which they're formed electrifying your sensitive depths with eldritch pleasure.  When you cum, you cum hard - a scream tears past your lips, echoing across the dunes.");

    outputText("\n\nAs you cum, you feel - something - shooting inside you, a flood of boiling liquid that sets your loins ablaze, spreading throughout you with orgasmic pleasure.  You shudder violently as a backwash of magical cum floods back out your [vagOrAss] on onto Sanura's waiting face, your belly bloating to pregnant proportions before the orgasm finally subsides.");

    outputText("\n\nYou collapse as the dildos fade into nothing inside you, leaving you feeling empty to your very core.  \"<i>Enjoy yourself?</i>\" the spunk-covered leonine girl asks, dropping to her knees beside you, a hand resting on your heaving chest.  You give her a weak thumbs-up, and stagger to your [feet].");
    // (DIsplay Options: Leave, Enter)
    player.orgasm();
    menu();
    addButton(0, "Enter", openZeDoorToParadize);
    addButton(4, "Leave", leaveBoobsDungeon);
}

// Fuck Dat Lionpussy
// Written by Third. Available to those who BEAT Sanura's riddle challenge.
export function fuckDatLionPussah(): void {
    clearOutput();
    outputText("You disrobe, tossing your [armor] aside into a small pile.  You stretch your muscles in the dry desert air and exult in the warm rays beating down on your " + skinFurScales(player) + " and " + multiCockDescriptLight(player) + ".  Sanura pads around you, taking in your appearance with her chestnut-colored eyes before clicking her tongue approvingly.  Her leonine tail swishes across the top of your [cock biggest], stroking it with the silky soft tuft of fur at its tip.  You shiver at the contact, unsure of what to think.  Your penis, on the other hand, has no such conflictions, and immediately begins to rise.");

    // (Small dicks)
    if (player.cocks.biggestCockArea() < 6) outputText("\n\n\"<i>Aw, it's so cute and compact.  I didn't know these things came in women's sizes,</i>\" she giggles, flicking the [cockHead biggest] of your cock with her tail.  You blush brightly.  Even by Ingnam standards you're a little below average, and in Mareth, well, you're just plain tiny.  \"<i>Don't worry, love, it will suffice for what I have in mind.</i>\"");

    // (Normal-sized dicks)
    else if (player.cocks.biggestCockArea() < 30) outputText("\n\n\"<i>Hm, not the biggest I've seen out here, but it certainly looks delicious...</i>\" she purrs, wrapping her tail around your cock.  Sanura gives it a little squeeze and flicks her tail away with a giggle.");

    // (Large dicks)
    else if (player.cocks.biggestCockArea() < 100) {
        outputText("\n\n\"<i>Mmm, now that's what I'm talking about,</i>\" Sanura purrs, wrapping her tail around your large dick and teasing your ");
        if (player.balls > 0) outputText("balls");
        else if (player.vaginas.length > 0) outputText("cunt");
        else outputText("asshole");
        outputText(" with the little tuft of fur.  \"<i>That bad boy will be just perfect.</i>\"");
    }
    else outputText("\n\nSanura's eyes go wide upon seeing your monstrous cock.  She opens her mouth, attempting to speak, but no words come out.  Her tail reaches out, coiling around your dick in futility.  \"<i>By Marae's pillowy tits that thing is huge,</i>\" she says finally, regaining her voice.  \"<i>I don't know if I can take something that big... but goddamnit, I'm going to try.</i>\"");

    outputText("\n\nYour manhood spikes upwards at the attention, becoming painfully hard as the sphinx continues to survey your body.  Her tail flicks over your " + skinFurScales(player) + " gently, stopping briefly to tantalize ");
    if (player.breasts.totalNipples() == 2) outputText("both");
    else outputText("each");
    outputText(" of your nipples, which stiffen in response, just like your cock.  You can't help but think there's some sort of magic at work here.  Her tail passes between your thighs, gracefully tickling your ");
    if (player.vaginas.length > 0) outputText("damp cunt, which suddenly tightens up and practically gushes with slick juices.");
    else outputText("asshole, which reflexively tightens, sending a shiver up your spine.");

    outputText("\n\nFinally she stops and looks at you head on.  \"<i>All right then, lay down and let's do this,</i>\" she says casually, crossing her arms under her small breasts.  You quirk your eyebrow at her, questioningly.  \"<i>This is what you want, isn't it?</i>\" she asks,  turning her sensuous tauric body around to show off a moist, dripping cunt.  \"<i>Because that,</i>\" she says, pointing at your dick as she licks her lips, \"<i>is what I want.</i>\"");

    outputText("\n\nThe sight of that lionpussy is all the enticement you need.  You sink to your knees, and then flop onto your back, your cock standing tall and proud just like the stone pillar nearby.  The brilliant and ravishing sphinx strides over top of you, placing a soft leathery paw over your wrists gently.  \"<i>Mmm, don't worry about this, love, I just want to make sure you're not going anywhere.</i>\"  You gently struggle against the paws, not actually trying to free yourself, but rather testing her strength, and she is indeed strong.");

    outputText("\n\n\"<i>Let's start off with a bit of a warm up, shall we?</i>\" she asks with a mischievous grin.  Her leonine body lowers down towards yours, making you gasp sharply as your rigid rod contacts her feline folds.  But alas, there's no penetration.  Instead, Sanura rocks her body up and down your shaft, tantalizing and teasing it with her hot, wet folds.  You bite your lip while the sphinx above you moans with mild delight.  \"<i>O-ho,</i>\" she laughs, \"<i>you may have bested me intellectually, but I can still tease you.</i>\"");

    outputText("\n\nSanura grips one of her breasts, pinching the nipple roughly while she continues to slip up and down your pillar of cock.  You attempt to push your hips forward, aching to penetrate her pussy, but she merely mutters, \"<i>Tut-tut,</i>\" and waggles a finger at you disapprovingly.  You glower up at her for a moment, and then a plan alights in your brain.  As soon as the sumptuous sphinx turns her attentions back to her breasts, you concentrate on her hip motions, developing the rhythm in your head.");

    outputText("\n\nYou count out the rhythm, and when the time is right, thrust your hips up and forward, splitting Sanura's cunt wide.  A look of shock crosses her face, quickly replaced by an ecstatic look of bliss.  Her lips form an O-shape, allowing a long moan to escape.  \"<i>I... you're not supposed to...</i>\" she starts, looking down at you with a mixture of annoyance and pleasure.  \"<i>Oh fuck... so good!  Don't stop!</i>\"");

    outputText("\n\nYou grin and thrust into her again.  Her hips pick up the pattern and bounce along with your hips, making wet squelching noises as you plunge your [cock biggest] into her again and again.  Sanura's cunt squeezes you tightly, tighter than you'd imagine a tauric creature to be, while she plays with her pert little breasts, apparently lost in a sea of euphoric oblivion.  Small gasps leave her lips with every other thrust, escaping onto the warm desert breeze.  Your hips hammer away, your entire body becoming passionately hot, craving some form of release, but you don't give in just yet.");

    outputText("\n\nYou bring Sanura to her first screaming orgasm, then a second, and a third.  You don't stop until the sphinx is little more than a quivering mass of flesh wrapped in orgasmic rapture.  Her legs shake like jelly, barely holding your arms down, but that doesn't matter anymore.  You know who's in control of this situation, and it's certainly not the lioness atop you.  Thrust after thrust you bury your tool deeper within Sanura's cavern, bringing her to a fourth orgasm as her face distorts, showing little more than a climax-induced grin, her eyes rolled back in their sockets.");

    outputText("\n\nYou can't hold out much further either, and give one last push forward, embedding your cock as far as it will go");
    if (player.hasKnot(player.cocks.biggestCockIndex())) outputText(", your knot slipping into place with a moist <b>pop</b>, ensuring you'll be locked together for the foreseeable future");
    outputText(".  Jet after jet of cum erupts from your [cock], painting the sphinx's inner walls white.");

    // (low-average cum)
    if (player.cumQ() < 250) outputText("\n\nSome of your spunk dribbles out the side and down your shaft before dripping into the hot desert sand below.");
    // (average-high cum)
    else if (player.cumQ() < 750) outputText("\n\nA spurt of cum escapes Sanura's folds, splattering out onto your legs and the hot desert sand.");
    // (high-really high cum)
    else if (player.cumQ() < 3000) outputText("\n\nSanura's belly visibly enlarges with all the love spunk you're pumping into her, and several spurts of the stuff escape her folds, coating your legs and the sand beneath you.");
    // (really high-woah there cum)
    else if (player.cumQ() < 10000) outputText("\n\nSanura's belly distends, looking suddenly pregnant with an enormous cum-baby.  A veritable flood of spooge surges out of her abused cunt, absolutely coating your lower body and almost all the sand within several feet in the hot white fluid.");
    else outputText("\n\nSanura's belly expands outwards, as though she were suddenly nine months pregnant, but it doesn't stop there.  Her belly continues to inflate until it's resting on your stomach... and then it lifts her body off several inches of yours.  To top it all off, a milky white flood of biblical proportions flows out of her abused hole, coating your entire body, as well as most of the desert within ten feet, in semeny goodness.");

    outputText("\n\nFinally you collapse, letting all your muscles relax.  Sanura isn't far behind, falling to the side of you, ");
    if (player.hasKnot(player.cocks.biggestCockIndex())) outputText("which proves somewhat uncomfortable, given your knot is still lodged firmly within her, ");
    outputText("panting wildly.  It takes you several minutes to recover, the sphinx even longer, ");
    if (player.hasKnot(player.cocks.biggestCockIndex())) outputText("and even longer still for your knot to deflate enough to slip out of her, ");
    outputText("but you finally gather the strength to haul yourself up onto your [feet].");

    outputText("\n\n\"<i>Well, that's certainly not what I had in mind,</i>\" Sanura says, recomposing herself after that vicious fucking.  \"<i>But I can't say I can complain.</i>\"  Neither can you, you smirk to yourself.");
    player.orgasm();
    menu();
    addButton(0, "Enter", openZeDoorToParadize);
    addButton(4, "Leave", leaveBoobsDungeon);
}

// Submission Options
export function sphinxSubmissionOptions(): void {
    clearOutput();
    flags[kFLAGS.TIMES_SUBMITTED_TO_SANURA]++;
    outputText("Having lost the Riddle Game, you do as the sphinx-girl commands: you pull off your [armor], leaving yourself bare under the desert sun. \"<i>Now then, my dull little pet, what shall I do with you...</i>\"");
    menu();
    // SUBMISSION:
    addButton(0, "Get Pegged", fenPutsHisShittyFetishInYoSphinx);
    // Reqs Penis
    if (player.cocks.length > 0) {
        addButton(1, "Get Blown", getBlown, true);
        addButton(2, "Pawjob", lionpaws, true);
    }
}

// Horsecock Symphony
export function fenPutsHisShittyFetishInYoSphinx(): void {
    clearOutput();
    outputText("Starting to disrobe, ");
    if (player.cocks.length > 0) {
        outputText("you flop your " + multiCockDescriptLight(player) + " free in the dry desert heat, allowing ");
        if (player.cocks.length == 1) outputText("it");
        else outputText("them");
        outputText(" to sway back and forth");
    }
    else if (player.vaginas.length > 0) {
        outputText("you expose your [vagina] to the hot desert air, allowing it to moisten");
    }
    else outputText("you expose your [butt], allowing it to redden");
    outputText(" as the omnipresent heat and seductive sphinx have their way with your heightened libido.  Sanura snaps her palm up in front of your face as your [armor] hits the ground, landing with a heavy thump.");

    outputText("\n\n\"<i>You don't need to seduce me, you know?  Just go ahead and assume the position,</i>\" she commands, wings fluffing the hot, dry air across her breasts, fanning her delicious tan mounds.");

    outputText("\n\nUmm, position?  You're not quite sure you follow, and you're sure to say as much.");

    outputText("\n\nSanura folds her arms across her perky tits and rolls her eyes.  \"<i>You know, bent over, on the ground, ass-up and open?</i>\"  She blows a strand of black hair air of the way with an exasperated sigh.  \"<i>Just how long have you been in Mareth?  You know what?  Never mind, just get that ass up so I can plow it.</i>\"");

    outputText("\n\nYou can't help but point out the obvious: she doesn't have a penis, at least not one you can see.");

    outputText("\n\n\"<i>So?</i>\"");

    outputText("\n\nWell, she can't really fuck your [asshole] without one...");

    outputText("\n\nSanura laughs, \"<i>I'm a sphinx.  Reality is my plaything!  Go on...</i>\"  Her heavy forepaw falls on your shoulder, the soft, feline-like pads compressing soft and pillow-like against your " + skinFurScales(player) + ", forcing you down.  You lean over reluctantly and lift your [butt] towards the assertive lioness, shivering at how open and exposed you are like this, your [asshole] puckered and ready to be plowed.  Her other paw comes down on your right shoulder, and the shadow of her muscular, leonine lower body falls across you, causing her warm body heat to wash over you.  Sanura's soft underfur brushes across your back, tickling you sensually as she gets in position.  Curling over your shoulders, her toes extend deadly looking claws, but they do no more than press against the top of your chest, securing you in place with cushy paw-pads and pointed threats.");

    outputText("\n\nTilting your head to the side, you try to look up above, but all you can see past her brustling belly-fur are the pert swells of her cleavage and a few swirling, ephemeral hexagons floating around her wrists while her fingers swivel with inhuman dexterity.  There's a barely audible 'fwoomp' followed by a tingling against your [asshole], abruptly carrying its magical effervescence into your sphincter as something flat and blunted butts up against it.  Your eyes open wide in surprise at the pressure on your backdoor, something Sanura takes absolute delight in seeing, bending her human-half over to take in your expression while her forepaws push you harder onto her magical spear.");

    // Big capable entrances 100+
    if (player.analCapacity() >= 100) {
        outputText("\n\nYou will yourself to relax, and like magic, your [asshole] stretches out to handle the elephantine force-cock with ease, devouring the flat, flared phallus straight into your rectum.  It distends your belly slightly as it pushes deeper, Sanura grunting when a middle ring catches for a second before popping in, rapt with the ecstasy your welcoming asshole can provide.  She provides you with a lazy smile before straightening out and placing her hand on your head, stroking your " + hairDescription(player) + " and lazily patting you as she finally bottoms out, accompanied by the feeling of sparking, tingling nuts slapping hard into your [butt].");
        outputText("\n\n\"<i>Mmmm, I knew you'd be a good " + mf(player, "boy", "girl") + ".</i>\"");
    }
    // Medium capacity! 40+!
    else if (player.analCapacity() >= 40) {
        outputText("\n\nYou will yourself to relax, but even so, your [asshole] is stretched to its limit even before Sanura's flared force-cock can pop inside.  Whimpering in discomfort, you try to endure her forceful attempts at buttfucking.  She doesn't seem to have any such plans, smashing her fat, butt-destroying horse-cock against you again and again, each time spreading your asshole further, pounding your sphincter's structural integrity down into that of a weak, accepting anus.  You feel it bow under the pressure.  Growling, Sanura holds it there, pressing with such insistent strength that your entrance yields all at once; her member's brutal, bulging tip pops into your rectum.  She doesn't stop there.  Inch after inch of tingling, phantasmal dong is pushed straight up your straining rectum, only pausing for a brief moment when the swollen middle ring catches for a half-second.");
        outputText("\n\nElectrically charged balls the size of large melons plop against your [butt] as she bottoms out.  \"<i>Mmmm, I knew you'd be a good " + mf(player, "boy", "girl") + ".</i>\" Sanura purrs, patting you on the head.");
    }
    // Lowish Capacity
    else {
        outputText("\n\nYou will yourself to relax, but you just aren't big enough back there to make much of a difference.  Just having such an immense dong pressing at your backdoor is enough to push you to your limits, but your sphincter hasn't even dilated enough to take a fraction of her girth.  Sanura growls in frustration and begins to hump at it, smacking the blunted tip into it again and again. The shocking sensation makes your anal muscles twitch, spasm, and relax as she works to plow her way through your more than token resistance.");
        // VIRGIN ALT:
        if (player.ass.analLooseness == 0) {
            outputText("\n\nShe grunts, \"<i>Don't tell me you're a virgin?</i>\"  You nod and bite your lip as you try to endure.  Sanura stops immediately at that news, mulling it over with a detached expression, a smile slowly spreading across her features.  \"<i>Really?</i>\" she asks as her hips begin to slowly work at your ass once more, slowly picking back up to their old tempo.  \"<i>Then it's a good thing you're getting to ride my magic cock and not some brute's.  It might hurt a little, but I promise this will be buttsex worth remembering....</i>\"");
        }
        // Non-virgin
        else outputText("\n\nShe grunts, \"<i>Gods, you're tighter than a virgin imp's asshole!</i>\"");
    }
    // Merge, no new PG
    outputText("\n\nThat's no small comfort to your poor, sore rectum.  It's going to be left gaped by this monstrous woman in short order, pounded into open, stretched submission, just like its owner.  The pain of being opened up this forcefully is enough to bring a tear to your eye and a strange surge of excitement through your crotch.  How can you be enjoying this?  You don't have long to ponder it, your muscles are caving in underneath Sanura's butt-battering fucking, slowly, inexorably stretching to handle her fat flare.  Gods!  You whimper as your [asshole] abruptly gives up the ghost and allows Sanura's phantom member inside, inches of her tingly fuck-tool nestling inside you in seconds.");

    outputText("\n\nSanura straightens with an unseen smile, her hand playfully tangling with your " + hairDescription(player) + " as she hilts the rest of the way into your abused anus, not stopping until jiggling, magical nuts slap into your [butt].  \"<i>Atta " + mf(player, "boy", "girl") + ".  I thought for a moment that this might have been a waste of magic.  Now just settle in and enjoy it.</i>\"  You wince with the knowledge that somehow, you ARE enjoying it.  The pain seems to have faded with the magical buzzing in your butthole, and all that you're left with is a satisfied stretching and the friction that comes with it.");

    // END VARIATION
    // Buttchange 75
    player.buttChange(75, true, true, false);

    outputText("\n\nSanura reluctantly changes direction and begins to pull the immense length out of you.  She actually yanks it back far enough that the top flops out of your gaped orifice, flopping lewdly against a [leg] as she lines back up for a second push.  As the sphinx nudges her tree-trunk-like totem into you, you try to fathom the size of the thing.  It must be several feet long and at least four inches wide by the way it's distending your innards, maybe five inches across at the tip.  Moaning, you helplessly give yourself over to the unusual feelings her ephemeral erection installs in your plugged-up pucker.");

    outputText("\n\n\"<i>Yeah, I knew you'd like it,</i>\" Sanura drawls, \"<i>I had you pegged for some kind of butt-slut when I met you.</i>\"  She lurches her hips forward to bury herself the rest of the way inside.  \"<i>Now, I just have you pegged.</i>\"  She smirks and resumes a long, slow reaming of your bowels.");
    if (player.cocks.length > 0) outputText("  Pre-cum oozes from [eachCock] in steady strings that dangle onto the dirt, painting a swirled pattern beneath you as your prostate is pushed hard enough to squeeze trickles of your salty 'milk' from you.");

    outputText("\n\nMoving faster now, Sanura descends into sexual frenzy.  She ruts your butthole like a beast possessed, and given the phantasmal nature of her equine dick, you have to wonder if that isn't what happened.  The leonine beauty savagely pounds your [asshole] with long, heavy strokes, leaving nothing but tingling excitement in her wake.");
    if (player.cocks.length > 0) outputText("  Whenever her flare slides past your prostate, the wide, blunt head squeezes it hard enough to express a huge strand of pre.");
    outputText("  After a few such thrusts, her bouncing, fake balls rise up in their faux, fleshy sack.  Her swollen dick-tip engorges more than you thought possible inside you, wide enough for you to touch through your belly and marvel at the size.  Quivering from head to four lion-like toes, Sanura cums.");

    outputText("\n\nThe butt-breaking horse-cock releases enough cum into you to make your middle audibly gurgle and your belly begin to distend, flooding your intestines with tingles and liquid warmth.  Thankfully, Sanura slowly begins to pull out, even as she's cumming, her cock flexing in your brutalized asshole for every inch it's pulled past, leaving enough goo in its wake that your innards never get to relax.");
    if (player.cocks.length > 0) outputText("  When she crosses the lump that is your well used prostate, you lose control and shudder with a nice, long cum of your own, your arms giving out and dumping you face-down on the ground while you spurt milky whiteness onto your chest, chin, and then the ground.");
    else outputText("  When she's almost out, you give in and cum, quivering around her magical breeding tool while it finishes inseminating your guts.");
    outputText("  The head is so swollen that she actually struggles to pop it back out of your [asshole], bouncing her hips back a few times with little success");
    if (player.cocks.length > 0) outputText(" and dragging you through your fresh, milky puddle");
    outputText(".  Eventually, she gives a mighty, sphincter-stretching lurch and ejects from your [butt], painting it white on the way out.");
    outputText("\n\nYou collapse in a well-fucked heap while Sanura's extra addition fades away.  She lays down next to you, fanning her face with her wings as you try to recover.  Her arm rubs one of your cheeks, still sensitive from whatever magic was in her balls, and she says, \"<i>That was great fun.  Let's do it again sometime?</i>\"");
    outputText("\n\nYou muster the strength for a thumbs up, a dopey smile still painted on your face.");
    player.orgasm();
    game.dungeonLoc = 0; // Replaces inDungeon = false;
    menu();
    addButton(0, "Next", Camp.returnToCampUseOneHour);
}
