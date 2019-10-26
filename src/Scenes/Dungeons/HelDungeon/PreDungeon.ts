
// Introduction Scene -- Helia's Discovery
// Requirements:
// -PC has achieved \"<i>Fuckbuddy</i>\" status with Helia.
// -HelAffection >= 70
export function heliaDiscovery(): void {
    // clearOutput();
    // (Scene proc's the first time all requirements are met and the player chooses [Sleep] at camp.)
    outputText("Before bedding down for the night, you make one last check of your camp's perimeter, making sure all your traps and defenses are still in place and primed in the event of a surprise nighttime assault.  As you come to the outermost parts of your makeshift camp, you notice a cloaked stranger approaching out of the evening darkness.  You're about to ready your [weapon], but you recognize the shapely figure of Hel the salamander walking towards you, hips a-sway underneath her loose traveling cloak.");

    // (If Hel has never been to camp before (ie, no Isabella threesome at camp)
    if (flags[kFLAGS.HEL_ISABELLA_THREESOME_ENABLED] == 0) {
        outputText("\n\n\"<i>[name]!</i>\" the salamander shouts, waving emphatically as she approaches.  \"<i>Shit, do you have any idea how hard you are to track down? I've been looking for you everywhere!</i>\"  You ");
        // [(pussy)
        if (player.cor < 50) outputText("quickly rush over and stop Hel before she loses a leg to one of your traps");
        // (dick)
        else outputText("lazily point out your traps to the not-quite-intruder");
        outputText(", and guide her over to the camp proper.");
    }
    // (Else)
    else {
        outputText("\n\n\"<i>Hey there, [name]!</i>\" the salamander calls, handily picking her way through your maze of traps. She gives you a quick embrace and, taking your hand in hers, leads you back to the camp proper.");
    }
    // (Resume All)
    outputText("\n\nYou sit the salamander down near your campfire and ask her what brought her all the way from the plains to your humble abode.  She shrugs lightly and says, \"<i>Maybe I just wanted some company tonight.</i>\"");
    // [If not Centaur:
    if (!player.isTaur()) outputText("  Her hand slides over to rest on your thigh.");
    else outputText("  \"<i>She gives your flank a slow, affectionate stroke.</i>\"");
    outputText("  You ask her if that's true. With a little wink, she answers, \"<i>Well, it's not entirely untrue...</i>\"");

    outputText("\n\n\"<i>Actually, champ, I wanted to... um, well...  ask a favor, I guess.</i>\"  Hel says awkwardly, suddenly avoiding eye contact.  \"<i>I wouldn't ask if it wasn't important, or something I could do on my own, or...  Ah, shit.</i>\"  From inside her cloak, Hel produces a dirty, dented flask and takes a long swig of what smells like pure grain alcohol.  While she drinks, you urge her to tell you what's on her mind.");

    outputText("\n\nShe belches thunderously, shakes it off, and sighs. \"<i>It's like this, Champ: a little birdie told me that there's this tremendous roost of harpies up in the high mountains, dozens of the bitches all packed together. That's bad enough, right? But now, some of them have been showing up with red scales all over their arms and legs... and fire on their tails.</i>\"");

    outputText("\n\nYou ask her why that's piqued her interest so much; she lives some ways away from the mountains after all.");

    outputText("\n\n\"<i>Normally I wouldn't give two shits about what a bunch of feather-bitches are doing. But scales and fire?  Sound like someone you know?</i>\"  Before you can answer, you feel Hel's warm tail curl around your shoulders, hugging you right up against her.  She takes another long swig from her flask.  It's starting to smell like someone lit a brewery on fire next to you.  \"<i>What I'm saying is that there's a chance that there's a poor, abused salamander tied up in this roost of theirs, being used as breeding stock for years and years now, fathering a whole new generation of harpies.  Even if you don't give a shit about the birds, it would... mean a lot to me if you'd help me break him out.  Look, [name], I'm a mean bitch in a fight - you know that - but even I can't take on a whole roost of harpies solo.  And, well, you're the only person I trust one-hundred percent.  To have my back, you know?</i>\"");

    outputText("\n\nYou spend the next few minutes getting the rest of her information out in the open - they live in an old abandoned watchtower, she says, and number perhaps two dozen.  As she talks, you note a desperate tone in Hel's voice, and more than once she repeats that she can't do it by herself, or trust anyone but you to help.");

    outputText("\n\nDo you agree to help Helia?  She'd probably be <b>very</b> grateful...");
    // (Display Options: [Yes] [No])
    doYesNo(agreeToHelpHeliaDungeon, noDungeon);
}

// Intro Scene -- No
export function noDungeon(): void {
    clearOutput();
    outputText("You consider for a few moments, but ultimately decide that this is a venture you'd rather not participate in.");
    outputText("\n\n\"<i>W-What? Why not?</i>\" Hel stammers, suddenly glowering at you.");
    outputText("\n\nYou try to explain your reasons, but it seems Hel isn't having any of it.");
    outputText("\n\n\"<i>Well fuck you anyway!</i>\" she shouts, jumping to her feet and waving her scaly arms emphatically, nearly clawing your face off with her sharp talons.  \"<i>I don't need you or your bullshit excuses! I'll just go do it my own goddamn self- see if I don't!</i>\"");
    outputText("\n\nBefore you can even try to calm her down, Hel is running away from the camp and back into the night from whence she came.");
    outputText("\n\nWell then.");
    // (In-Game effect: Reduce Hel's encounter rate, end fuckbuddy mode. Will fight player in plains.)
    flags[kFLAGS.HEL_REDUCED_ENCOUNTER_RATE] = 1;
    flags[kFLAGS.HEL_FUCKBUDDY] = 0;
    flags[kFLAGS.HEL_AFFECTION] = 0;
    helFollower.helAffection(-70);
    doNext(playerMenu);
}

// Intro Scene -- Yes
export function agreeToHelpHeliaDungeon(): void {
    clearOutput();
    outputText("You mull the salamander's proposition over and eventually agree to assist her.  Not only will you be stopping a new race of monsters from spawning into the mountains, but you'll be getting into the lovely Helia's good graces - a win-win if ever there was one.");
    outputText("\n\nHel breaks out into a great big smile and leaps at you, pulling you into a hug and squeezing until you damn near choke.  You return her tight embrace, and are eventually rewarded by Hel relaxing in your arms");
    // [if has lap:
    if (!player.isTaur()) outputText(" and cuddling up in your lap");
    outputText(".  She nuzzles your neck and whispers, \"<i>Thanks, Champ. It means a lot to know I can count on you to... watch my back.</i>\"");
    outputText("\n\nYou run a hand through Hel's hair and tell her that you've got her back no matter what.  You give her muscular ass a playful little grope; and she immediately wraps her tail around you, pinning your arms to your chest.  Doesn't look like you're going anywhere now.  With a little smirk, the salamander whispers, \"<i>Let's stay like this 'til morning - what do you say?</i>\"");
    outputText("\n\nResigned to your fate, you curl up with Helia; who throws her cloak over the two of you.");

    // [If Marble is in camp:]
    if (player.effects.findByType(StatusAffects.CampMarble) >= 0 && silly()) {
        outputText("\n\nJust as you and Hel start to get intimate, you hear a familiar clopping of hooves. You poke your head out of the blanket, rather alarmed to see Marble standing over you.");
        outputText("\n\n\"<i>S-Sweetie?</i>\" Marble says, aghast at Hel's presence in your arms.  \"<i>What... just what do you think you're doing!?</i>\"");
        outputText("\n\nThis could be ba--");
        outputText("\n\n\"<i>Back off, cow-slut!</i>\" Hel growls, baring her talons at the bovine girl. \"<i>[name]'s mine tonight. GOT IT!?</i>\"");
        // (IF SILLYMODE:)
        if (silly()) outputText("\n\nMarble stammers and starts, struggling to find a rebuke against the salamander.  Before she can, though, Hel leaps to her feet and rushes her!  You don't even have a chance to intervene before Marble goes flying with a kick right to her cow-cunt, sending her hurtling toward the swamp.  As Hel settles back into your arms, you're almost certain you hear a rather draconic scream of rage in the distance.");
    }
    // PROC NEXT FUNCTION AT 6AM.  OVERRIDES OTHER SHIIIIITE
    flags[kFLAGS.HEL_FOLLOWER_LEVEL] = -1;

    doNext(playerMenu);
    // (Decrease Player Lust to minimum, increase HP to maximum, etc. etc. You're sleeping, but also fucking. Figure it out.)
    player.orgasm();
}

export function morningAfterHeliaDungeonAgreements(): void {
    outputText("\nWhen your eyes flicker open at the crack of dawn, you're pleased to see Helia is lying on your chest, ");
    // [If PC has >C Cups, \"<i>
    if (player.breasts.biggestTitSize() > 3) outputText("her head nestled between your soft tits and ");
    outputText("snoring boorishly.  The air around you smells like hot booze and sex, yet you awaken feeling as spirited and lively as you ever have.  You give Hel a little shake, waking her.");

    outputText("\n\n\"<i>Huh, wha?</i>\" she groans, rubbing her head.  \"<i>Oh, hey there, lover mine,</i>\" she adds after a moment, giving you a long kiss on the lips.  The two of you untangle yourselves, giving each other the occasional tease and playful slap on the ass, flirting shamelessly as you dress and ready yourselves for the coming day.");
    outputText("\n\nWhen you're dressed and organized, Hel asks, \"<i>So, what's the plan, [name]?</i>\"");

    outputText("\n\nYou tell the salamander you just need to get your affairs in order and you're off to the harpies' nest. She nods, reminding you that each moment you spend waiting around is another moment that poor man suffers.  You tell her you'll be quick, and set about preparing.");
    // (Display:
    outputText("\n\n(<b>Helia can now be found under the Lovers tab! (For Now!)</b>)");
    flags[kFLAGS.HEL_FOLLOWER_LEVEL] = 1;
    doNext(playerMenu);
}

// Introduction -- Not Yet.
export function notYet(): void {
    clearOutput();
    outputText("You tell Hel you were only checking on her, and that you've still got some things to do.  She sighs and quietly asks you to hurry.");
    doNext(playerMenu);
}
// Introduction -- Dungeon
export function goToHeliaDungeon(): void {
    clearOutput();
    outputText("You tell Helia that yeah, you're as ready as you'll ever be.  She beams and grabs you in a tight hug.  \"<i>Thanks again, [name].  You're a real goddamn champion, you know that?</i>\"  You laugh it off, but the salamander gives you a sultry wink and starts off toward the mountains.  You're quick to follow her.");
    // (NEXT)
    doNext(goToHeliaDungeon2);
}
export function goToHeliaDungeon2(): void {
    clearOutput();
    outputText("Within the hour, you and Helia are hiking up the narrow ledges and crevices of the high mountains, slowly but steadily climbing toward a snow-capped peak.  Hel certainly seems to know where she's going - she blazes a certain and steady trail, as if she knows every path and shortcut up the mountain.  By the time you near the peak, you're convinced she's been up here before - many times, even.");
    outputText("\n\nEventually, you see the crest of a squat, thick stone tower on the mountainside.  Hel easily guides you toward it, giving you a helping hand over an unusually wide gorge that would have kept most stray minotaurs well away from the solitary spire.  As you scramble onto the tower's plateau, Hel grabs your shoulders and pins you to the ground - just in time to avoid the gaze of a low-flying harpy.");
    outputText("\n\n\"<i>Quiet,</i>\" she hisses, lying atop you so that you can't jump up and expose your position.  \"<i>We can't take them all at once out in the open... This is going to be a sneaking mission, got it?</i>\"");
    outputText("\n\nYou quietly nod, and the two of you begin making your way toward the tower, hopping from one rocky outcropping to the next to avoid the harpies' sights.  Eventually, you come to the base of the looming structure.  Now sheltered in its shadow, you can clearly see the bird-women in great numbers, flying through the air to and fro.");
    outputText("\n\nNow safe from the watchful eyes of flying harpies and their sentries, Hel whispers, \"<i>Okay, so here's the plan.  I'm going to climb up the tower and hit them from the top; you go in through the main gates here,</i>\" she says, pointing to a rotting wooden door that seems to have been in disuse for a decade.  \"<i>Divide and conquer, right?  There are three floors, so... meet in the second, as soon as we can.  Yeah?</i>\"");
    outputText("\n\nYou nod again, and give Helia a little boost as she starts to scale the high walls of the aging tower.  You, however, steel yourself and make your way through an opening in the main gates.");
    // (NEXT)
    // 	inDungeon = true;
    dungeonEnterRoom(DUNGEON_HEL_GUARD_HALL);
    // 	dungeonLoc = 17;
    // 	doNext(camp.campMenu);
}
