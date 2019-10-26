
// Kiri -- [Talk]
export function talkToKiri(): void {
    clearOutput();
    outputText("You ask Kiri if she wouldn't mind sharing a bit of information with you.");
    outputText("\n\n\"<i>Of course,</i>\" she says pleasantly, \"<i>that's what I'm here for!  What do you want to know?</i>\"");
    // (Display Options: [Hel] [Harpies] [Salamander] [Kiri])
    simpleChoices("Hel", askKirkAboutHel, "Harpies", askKiriAboutHarpies, "Salamander", askKiriAboutSalamander, "Kiri", askKiriAboutKiri, "Nevermind", playerMenu);
}

// Kiri -- [Talk] -- [Hel]
export function askKirkAboutHel(): void {
    clearOutput();
    outputText("You ask the harpy girl how she knows Hel, exactly.");
    outputText("\n\n\"<i>Oh, uh,</i>\" she starts nervously, obviously taken aback by your question.  \"<i>I've known Miss Helia for quite a while now. She saved my life a couple of years ago, and, well, we've been friends ever since.  When I realized what was going on here - who the salamander in the dungeon was - I couldn't help but try and tell her what's up.</i>\"");

    outputText("\n\nKnowing Hel as well as you do, you venture to ask Kiri if she and Hel are just friends.");
    outputText("\n\n\"<i>Wha - what!?</i>\" she stammers, aghast.  \"<i>I, we, uh, I mean... Gah.</i>\"  She slumps her shoulders.  \"<i>Yeah, I guess you could say that. It's not like we're in love or anything, but, you know...</i>\" The harpy trails off with a light shrug.  \"<i>She's been good to me.</i>\"");
    doNext(talkToKiri);
}

// Kiri -- [Talk] -- [Harpies]
export function askKiriAboutHarpies(): void {
    clearOutput();
    outputText("You ask Kiri about the harpies remaining in the tower and their relative strength and position - anything to give you an advantage.");
    outputText("\n\n\"<i>Right, yeah, Hel asked me to scout around and remember that stuff.  Uh... Oh yeah!</i>\" she clears her throat and begins to recite:  \"<i>Dungeon Level: Brigid the Jailer, salamander prisoner.  Mezzanine: Phoenix Heavy Infantry unit, trained but inexperienced.  Second Floor: Honor Guard, elite bodyguards; and our Broodmother, Calais, queen of the tower.</i>\"");
    outputText("\n\nYou nod, then ask, \"<i>Phoenixes?</i>\"");
    outputText("\n\n\"<i>Oh, yes... That's what Hel is here to stop, I think.  They're the half-breeds mother has made with the salamander prisoner down below.</i>\"");
    doNext(talkToKiri);
}

// Kiri -- [Talk] -- [Salamander]
export function askKiriAboutSalamander(): void {
    clearOutput();
    outputText("You ask her about the salamander prisoner you're here to help free.");
    outputText("\n\n\"<i>Oh, yeah...</i>\" Kiri says nervously \"<i>About that...</i>\"");
    outputText("\n\nUh-oh.");
    outputText("\n\n\"<i>No, no!  He's fine! Er, well, as fine as he can be, all things considered.  I just... uh... thought you should know: his name is Hakon en Kahlesin.  He's Hel's dad.  And mine.</i>\"");
    outputText("\n\nWell, shit.");
    outputText("\n\n\"<i>Hel doesn't know yet... I didn't want her to lose her head or do something reckless.  But, yeah, that's dad down there.  I just wish... I could have done something more to help him.</i>\"");
    outputText("\n\nYou ask how you can free him.");
    outputText("\n\n\"<i>Mother keeps the key to his hand shackles on her at all times.  Brigid has the one for his legs.  You'll need to defeat both to free him.</i>\"");
    doNext(talkToKiri);
}

// Kiri -- [Talk] -- [Kiri]
export function askKiriAboutKiri(): void {
    clearOutput();
    outputText("You ask Kiri to tell you a little about herself.");
    outputText("\n\n\"<i>Who, me? Oh, I'm nobody special, really...</i>\" she says with a self-conscious chuckle.");
    outputText("\n\nYou urge her to tell you something anyway.");
    outputText("\n\n\"<i>Well, I guess you could say I'm a half-breed, of sorts.  My dad's the salamander downstairs, mom's the broodmother you're going to fight in a bit.  Mom hadn't quite figured out the magic she needed to produce the phoenixes when I was born - I didn't turn out quite right.  I'm really just a harpy.  Nothing special.</i>\"");
    outputText("\n\nShe doesn't seem to want to say more, so you shrug and carry on.");
    doNext(talkToKiri);
}
// Kiri -- [Sex] (Intro)
export function kiriSexIntro(): void {
    clearOutput();
    outputText("You ask Kiri if she could help you blow off some steam.");
    outputText("\n\n\"<i>Wha-WHAT!?</i>\" she yelps, recoiling.  \"<i>Hey, look, I owe Hel big time, but I never agreed to do... to do that!  You... no way!</i>\"");
    outputText("\n\nYou remind Kiri that here in Mareth an errant tease or stroke of skin can mean the difference between victory and being raped if you're too horny.  And, she promised Hel she'd help you...");
    outputText("\n\n\"<i>I... but... that's not fair!</i>\" she groans.  She hangs her head and sighs.  \"<i>I guess I wouldn't want you getting raped and imprisoned as a breeding slut hanging over my head all my life.  Fine!  Just... use me however you need to.  But be gentle, okay?</i>\"");
    // (Display Options:
    // If Male: [Anal]
    // If Female [Get Licked]
    // If Genderless: \"<i>Unfortunately, there's not much she can do for you...</i>\"
    menu();
    if (player.gender == 0) outputText("Unfortunately, there's not much she can do for you...");
    if (player.cocks.length > 0) addButton(0, "Anal", kiriSexAnal);
    if (player.vaginas.length > 0) addButton(1, "Get Licked", kiriSexGetLicked);
    addButton(4, "Back", playerMenu);
}

// Kiri -- [Sex] -- [Anal]
export function kiriSexAnal(): void {
    clearOutput();
    let x: number = player.cocks.cockThatFits(60);
    if (x < 0) x = player.cocks.smallestCockIndex();
    const y: number = x + 1;
    outputText("You whip your [cock " + (y) + "] out of your [armor] and tell Kiri to get on all fours.  She grimaces, but does as you ask.  You hike up her shift to reveal her large, egg-laying pussy and her tight little pucker.");
    outputText("\n\n\"<i>Just make sure you pull out, all right? I don't wanna get pregnant - EEEP!</i>\" she shrieks as your [cock " + y + "] pokes against her backdoor.  Her wings beat furiously around you, nearly lifting you both off the ground.  You give her a swat on the ass to help her get a grip as you take hold of her inhumanly wide hips.  She wriggles around for a bit before finally calming down and trying to relax as best she can.");
    outputText("\n\nIt takes some doing, but you eventually manage to push your prick in past her tight sphincter.  With a relieved sigh, you start to push into her ass, slowly but steadily feeding her inches of your [cock " + y + "] until ");
    if (player.cocks.cockArea(x) > 60) outputText("you can fit no more in");
    else outputText("you are buried to the hilt");
    outputText(".  Beneath you, Kiri writhes and groans in pained pleasure as you stuff her ass full of your cock.  When you've finally buried yourself as far as you'll go, you give her lush ass cheeks a little squeeze and start to rock your hips.  Kiri gasps, suddenly feeling empty as you withdraw from inside her - and screams when you slam yourself back in.");
    outputText("\n\nSinking your hands into her soft, plush butt, you start to hammer her asshole, fucking her hard and fast until you're both moaning like whores.  Your combined pre-cum and juices are staining the floor and her inner walls.  To your surprise, Kiri lifts herself off the ground and presses her back to your chest, letting her wings wrap around you.  Grinning, you grope her perky breasts as you continue to ream her ass.  She puts her hands on yours, pinching her nipples and guiding you to all her most sensitive spots.");
    outputText("\n\nYou cum quickly, grunting into her ear and ramming yourself until you're ");
    if (player.cocks.cockArea(x) > 60) outputText("as far in as you can manage");
    else outputText("filling her completely");
    outputText(".  Your cock squirts a thick load inside her, shooting creamy ropes of jizz deep into her bowels ");
    // [if High Cum Production:
    if (player.cumQ() > 500) outputText("until your cream squelches back out around your cock and onto the floor");
    outputText(".  With a scream of delight, Kiri clamps down on your [cock " + y + "] and climaxes too, leaking a pool of fem-spunk onto the ground.  She starts to bounce on your cock, riding out her anal orgasm until she's exhausted and you're deflated inside her.");

    outputText("\n\nYou pull out with a POP, letting a stream of cum leak out her butt.  You clean your cock off and stick it back in your [armor].");
    player.orgasm();
    doNext(playerMenu);
}

// Kiri -- [Sex] -- [Get Licked]
export function kiriSexGetLicked(): void {
    clearOutput();
    outputText("You ask Kiri to eat you out. She grimaces but drops to her knees and undoes the bottom of your [armor], revealing your lusty [vagina]");
    if (player.cocks.length > 0) outputText(" and " + multiCockDescriptLight(player));
    outputText(".  With a word of encouragement from you, she leans forward and presses her face into your groin, letting her tongue loose to explore your lower lips.");
    outputText("\n\nThe girl's tongue is surprisingly skilled.  She quickly teases it across your clitty, making you moan with unexpected pleasure.  She begins to tease and play with your pleasure buzzer, using the flat of her tongue to tickle the sensitive flesh around it; you urge her on with little pats of the head and shoulders, even reaching down to cup one of her perky breasts beneath her loose shift or stroke one of her great orange wings.");
    outputText("\n\nShe finally slips her tongue in and starts to caress the walls of your [vagina], running her soft, warm tongue along your innermost depths with delightful speed and gentleness.  You smile and run your hands through her short orange hair, stroking her as she grips your hips and buries her face in your twat.");
    outputText("\n\nYou begin to grind your slit into her face as she eats you out, rubbing your cunt along her nose and forehead to the beat of her tongue's skillful ministrations.  She makes a slow, steady progression inward, slipping her long tongue further and further into your cunny until you can feel her flicking around your cervix.");
    outputText("\n\nYou cannot resist her skillful tongue-fuck for long.  Grabbing Kiri's head, you force her face into your crotch, getting every last bit of her tongue inside you as you can as you climax, spraying your fem-cum all across her face.");
    outputText("\n\nUtterly satisfied, you stagger back from Kiri, letting her whip her head around to flick off your fem-cum.  You clean yourself off and suit up again.");
    player.orgasm();
    doNext(playerMenu);
}
