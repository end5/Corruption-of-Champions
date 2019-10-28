export function theSeanShopOffer(): void {
    spriteSelect(52);
    clearOutput();
    outputText("You try to sneak closer to get a closer look at him, but the demon immediately stops what he's doing and stares straight at you.  He laughs, \"<i>Well now I know what happened to all the demons inside.  I really would've expected a bunch of renegades like them to put up a better fight.</i>\"\n\n");

    outputText("Caught, you stand up and ready your " + player.weaponName + ", taking up a defensive stance to ready yourself for whatever new attacks this demon has.  Strangely, he just starts laughing again, and he has to stop to wipe tears from the corners of his eyes before he talks, \"<i>Oh that's rich!  I'm not here to fight you, Champion.  I doubt I'd stand much of a chance anyways.  I heard there were some renegades around this area, so I thought I'd show up to offer my services.  You see, I'm a procurer of strange and rare alchemical solutions.  Of course you beat down everyone before I got here, but I thought I'd stick around and see if some scouts were still around before I high-tailed it out of here.</i>\"\n\n");

    outputText("You stare, blinking your eyes in confusion.  A demon of lust, and he's not interested in fighting or raping you?  He laughs again as he reads your expression and calmly states, \"<i>No, I'm far from your average incubus.  To tell the truth I enjoy a spirited debate or the thrill of discovery over sating my sexual appetite, though of course I do indulge that from time to time.</i>\"\n\n");

    outputText("The strange incubus flashes you a smile that makes you feel a tad uncomfortable before he finally introduces himself, \"<i>The name's Sean, and as you seem to be kicking the living shit out of Lethice's followers and enemies alike, I'd like to be on your side.  So I propose a mutually beneficial agreement – I'll sell you items you can't get anywhere else, and you let me live in this cave.  What do you say?</i>\"\n\n");

    simpleChoices("Deal", incubusDeal, "No Deal", incubusNoDeal, "", null, "", null, "", null);
}

function incubusDeal(): void {
    spriteSelect(52);
    clearOutput();
    outputText("\"<i>Excellent!  Give me a few moments to gather my things and I'll be open for business!</i>\" exclaims the strange demon.  If his story is true it's no wonder he doesn't get along with the rest of his kind.");

    // [Next – to room]
    flags[kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT] = 1;
    doNext(playerMenu);
}

function incubusNoDeal(): void {
    spriteSelect(52);
    clearOutput();
    flags[kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT] = -1;
    outputText("Sean nods, grabs a pack, and takes off running before you have a chance to kill him.");
    doNext(playerMenu);
}

export function incubusShop(): void {
    spriteSelect(52);
    if (flags[kFLAGS.NIAMH_SEAN_BREW_BIMBO_LIQUEUR_COUNTER] == 1) {
        Niamh.getBimboozeFromSean();
        return;
    }
    clearOutput();
    outputText("Sean nods at you and slicks his hair back into place, threading it carefully around the small nubs of his horns before asking, \"<i>What can I do for you?</i>\"");
    menu();
    addButton(0, ConsumableLib.NUMBROX.shortName, incubusBuy, ConsumableLib.NUMBROX);
    addButton(1, ConsumableLib.SENSDRF.shortName, incubusBuy, ConsumableLib.SENSDRF);
    addButton(2, ConsumableLib.REDUCTO.shortName, incubusBuy, ConsumableLib.REDUCTO);
    addButton(3, WeaponLib.SUCWHIP.shortName, incubusBuy, WeaponLib.SUCWHIP);
    if (player.hasItem(ConsumableLib.BIMBOCH) && flags[kFLAGS.NIAMH_SEAN_BREW_BIMBO_LIQUEUR_COUNTER] == 0) {
        outputText("\n\nSean could probably do something with the Bimbo Champagne if you had enough of it...");
        if (player.hasItem(ConsumableLib.BIMBOCH, 5)) {
            outputText("  Luckily, you do!");
            addButton(4, ConsumableLib.BIMBOLQ.shortName, Niamh.seanBimboBrewing);
        }
    }
    addButton(9, "Leave", playerMenu);
}

function incubusBuy(itype: ItemType): void {
    spriteSelect(52);
    clearOutput();
    outputText("The incubus lifts " + itype.longName + " from his shelves and says, \"<i>That will be " + (itype.value * 3) + " gems.  Are you sure you want to buy it?</i>\"");
    if (player.gems < (itype.value * 3)) {
        outputText("\n<b>You don't have enough gems...</b>");
        doNext(incubusShop);
        return;
    }
    doYesNo(curry(incubusTransact, itype), incubusShop);
}

function incubusTransact(itype: ItemType): void {
    spriteSelect(52);
    clearOutput();
    player.gems -= itype.value * 3;
    statScreenRefresh();
    Inventory.takeItem(itype, incubusShop);
}
