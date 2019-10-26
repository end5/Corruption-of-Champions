// [Prisoner] (First Time)
export function helDungeonPrisonerTalk(): void {
    clearOutput();
    if (flags[kFLAGS.HEL_PC_TALKED_WITH_HAKON] == 0) {
        outputText("You approach the Salamander strapped to the table.  He looks at you with his one good eye, warily gauging you as you approach.");
        outputText("\n\n\"<i>Well, aren't you a sight for sore eyes,</i>\" he laughs, his voice little more than a rasp.  \"<i>About time somebody put a boot up that punk bitch's ass.  Ha!  Hey, the name's Hakon.  I'd shake your hand, but, uh, I'm a bit tied up at the moment as it were.  So, what brings an outsider all the way up here?</i>\"");
        outputText("\n\nYou tell him that you're here to rescue him as it happens.");
        outputText("\n\n\"<i>What!?</i>\" he says, wide-eyed.  \"<i>Hey, I'm not complaining, mind you, but pardon me for being surprised.  I've been locked up in this shithole for... Marae, must have been fifteen, twenty years now.  Why now?  Who sent you?  My wife?</i>\"");
        outputText("\n\nYou shake your head and tell him that it was Helia who sent you.");
        outputText("\n\n\"<i>H... Helia? My little Hel?</i>\" he asks in disbelief. With a slight grin, you tell him that 'little' Hel isn't so little anymore.  He laughs, but for an instant you think he might be about to cry.  \"<i>Of... of course she is.  My little girl's all grown up.  Oh, what I wouldn't give to meet her...</i>\"");
        outputText("\n\nYou tell him that she's not far away at all... just a few floors up, in fact.");
        outputText("\n\n\"<i>WHAT!?</i>\" He yells, straining against the chains that bind him.  \"<i>You brought Hel here!?  What were you thinking?  Go and get her out of here.  NOW!</i>\"");
        flags[kFLAGS.HEL_PC_TALKED_WITH_HAKON] = 1;
    }
    // [Prisoner] (Repeat)
    // [IF PC HAS HARPY KEY A & B]
    else if (player.keyItems.has("Harpy Key A") >= 0 && player.keyItems.has("Harpy Key B") >= 0) {
        outputText("You smile as you approach Hakon the Salamander.  He starts to yell at you again, but you snap at him to hush.  You explain that Hel and Kiri are waiting outside and that the broodmother has been defeated.  Both sets of keys jingling in your hands.  He watches you approach silently, his eyes wary but hopeful.  You quickly undo his bonds, freeing him for the first time in years.  He struggles to sit, but nearly collapses. You catch him before he hurts himself and, throwing his arm over your shoulder, help the old salamander toward the stairs...");
        // (Go to DUNGEON END scene)
        doNext(towerOutro);
        return;
    }
    // [Else]
    else {
        outputText("You approach Hakon the Salamander.  He strains against his bonds, yelling at you to get Hel and get out before it's too late.  You roll your eyes and carry on.");
    }
    doNext(playerMenu);
}
