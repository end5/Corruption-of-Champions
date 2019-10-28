
/**
 * ...
 * @author Gedan
 */
export class TestContent {

    public cheatSheet(): void {
        clearOutput();

        outputText("<b>Parser Cheet Sheet:</b>\n\n");
        outputText("Descriptor (descriptor.as) Functions:\n");

        outputText("\nsackDescript " + sackDescript(player));
        outputText("\ncockClit " + cockClit);
        // 			outputText("\nballs " + balls(0, 0));
        outputText("\nsheathDesc " + player.sheathDesc());
        outputText("\nchestDesc " + chestDesc(game.player));
        outputText("\nallChestDesc " + allChestDesc(game.player));
        outputText("\nsMultiCockDesc " + sMultiCockDesc(player));
        outputText("\nSMultiCockDesc " + SMultiCockDesc(player));
        outputText("\noMultiCockDesc " + oMultiCockDesc(player));
        outputText("\nOMultiCockDesc " + OMultiCockDesc(player));
        outputText("\ntongueDescript " + tongueDescription(player));
        outputText("\nballsDescriptLight false " + ballsDescriptLight(false));
        outputText("\nballsDescriptLight true " + ballsDescriptLight(true));
        outputText("\nballDescript " + ballDescript(player));
        outputText("\nballsDescript " + ballsDescript(player));
        outputText("\nsimpleBallsDescript " + simpleBallsDescript(player));
        outputText("\nassholeDescript " + assholeDescript(player));
        outputText("\nhipDescript " + hipDescription(player));
        outputText("\nassDescript " + buttDescription(player));
        outputText("\nbuttDescript " + buttDescription(player));
        outputText("\nnippleDescript " + nippleDescription(player, 0));
        outputText("\nhairDescript " + hairDescription(player));
        outputText("\nhairOrFur " + hairOrFur(player));
        outputText("\nclitDescript " + clitDescription(player));
        outputText("\nvaginaDescript " + vaginaDescript(player));
        outputText("\nallVaginaDescript " + allVaginaDescript(player));
        outputText("\nmultiCockDescriptLight " + multiCockDescriptLight(game.player));
        outputText("\ncockAdjective " + cockAdjective(player));
        outputText("\ncockDescript " + cockDescript(game.player, 0));
        outputText("\nbiggestBreastSizeDescript " + biggestBreastSizeDescript(player));
        outputText("\nbreaseSize 5" + breastSize(5));
        outputText("\nbreastDescript " + breastDescript(game.player, 0));
        outputText("\ncockHead " + cockHead(player));
        outputText("\nbreastCup 5 " + breastCup(5));

        outputText("\n\nParser Tags (Single)L\n");
        outputText("\naagility [agility]");
        outputText("\narmor [armor]");
        outputText("\narmorname [armorname]");
        outputText("\nass [ass]");
        outputText("\nasshole [asshole]");
        outputText("\nballs [balls]");
        outputText("\nboyfriend [boyfriend]");
        outputText("\nbutt [butt]");
        outputText("\nbutthole [butthole]");
        outputText("\nchest [chest]");
        outputText("\nclit [clit]");
        outputText("\ncock [cock]");
        outputText("\ncockhead [cockhead]");
        outputText("\ncocks [cocks]");
        outputText("\ncunt [cunt]");
        outputText("\neachcock [eachCock]");
        outputText("\nevade [evade]");
        outputText("\nface [face]");
        outputText("\nfeet [feet]");
        outputText("\nfoot [foot]");
        outputText("\nfullchest [fullchest]");
        outputText("\nhair [hair]");
        outputText("\nhairorfur [hairorfur]");
        outputText("\nhe [he]");
        outputText("\nhim [him]");
        outputText("\nhips [hips]");
        outputText("\nhis [his]");
        outputText("\nleg [leg]");
        outputText("\nlegs [legs]");
        outputText("\nman [man]");
        outputText("\nmaster [master]");
        outputText("\nmisdirection [misdirection]");
        outputText("\nmulticockdescriptlight [multicockdescriptlight]");
        outputText("\nname [name]");
        outputText("\nnipple [nipple]");
        outputText("\nnipples [nipples]");
        outputText("\nonecock [onecock]");
        outputText("\npg [pg]");
        outputText("\npussy [pussy]");
        outputText("\nsack [sack]");
        outputText("\nsheath [sheath]");
        outputText("\nskin [skin]");
        outputText("\nskinfurscales [skinfurscales]");
        outputText("\ntongue [tongue]");
        outputText("\nvag [vag]");
        outputText("\nvagina [vagina]");
        outputText("\nvagorass [vagorass]");
        outputText("\nweapon [weapon]");
        outputText("\nweaponname [weaponname]");

        trace("Spammed!");
        doNext(Camp.returnToCampUseOneHour);
    }

}
