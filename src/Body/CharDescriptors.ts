export function faceDesc(char: Character): string {
    let faceo: string = "";
    // 0-10
    if (char.femininity < 10) {
        faceo = "a square chin";
        if (!char.hasBeard())
            faceo += " and chiseled jawline";
        else
            faceo += ", chiseled jawline, and " + beard(char);
    }
    // 10+ -20
    else if (char.femininity < 20) {
        faceo = "a rugged looking " + face(char) + " ";
        if (char.hasBeard())
            faceo += "and " + beard(char);
        faceo += "that's surely handsome";
    }
    // 21-28
    else if (char.femininity < 28)
        faceo = "a well-defined jawline and a fairly masculine profile";
    // 28+-35
    else if (char.femininity < 35)
        faceo = "a somewhat masculine, angular jawline";
    // 35-45
    else if (char.femininity < 45)
        faceo = "the barest hint of masculinity on its features";
    // 45-55
    else if (char.femininity <= 55)
        faceo = "an androgynous set of features that would look normal on a male or female";
    // 55+-65
    else if (char.femininity <= 65)
        faceo = "a tiny touch of femininity to it, with gentle curves";
    // 65+-72
    else if (char.femininity <= 72)
        faceo = "a nice set of cheekbones and lips that have the barest hint of pout";
    // 72+-80
    else if (char.femininity <= 80)
        faceo = "a beautiful, feminine shapeliness that's sure to draw the attention of males";
    // 81-90
    else if (char.femininity <= 90)
        faceo = "a gorgeous profile with full lips, a button nose, and noticeable eyelashes";
    // 91-100
    else
        faceo = "a jaw-droppingly feminine shape with full, pouting lips, an adorable nose, and long, beautiful eyelashes";
    return faceo;
}

export function beard(char: Character): string {
    if (char.hasBeard())
        return "beard";
    else {
        // Logger.error("");
        return "ERROR: NO BEARD! <b>YOU ARE NOT A VIKING AND SHOULD TELL FEN IMMEDIATELY.</b>";
    }
}

export function skin(char: Character, noAdj: boolean = false, noTone: boolean = false): string {
    let skinzilla: string = "";
    // Only show stuff other than skinDesc if justSkin is false
    if (!noAdj) {
        // Adjectives first!
        if (char.skinAdj != "" && !noTone && char.skinTone != "rough gray") {
            skinzilla += char.skinAdj;
            if (noTone)
                skinzilla += " ";
            else
                skinzilla += ", ";
        }
    }
    if (!noTone)
        skinzilla += char.skinTone + " ";
    // Fur handled a little differently since it uses
    // haircolor
    if (char.skinType == 1)
        skinzilla += "skin";
    else
        skinzilla += char.skinDesc;
    return skinzilla;
}

export function face(char: Character): string {
    let stringo: string = "";
    // 0 - human
    // 5 - Human w/Naga fangz
    // 8 - bunnah faceahhh bunbun
    // 10 - spidah-face (humanish)
    if (char.faceType == 0)
        return "face";
    // 1 - horse
    // 2 - dogface
    // 6 - kittah face
    // 9 - kangaface
    if (char.faceType == 9 || char.faceType == 6 || char.faceType == 2 || char.faceType == 1 || char.faceType == 11) {
        if (int(Math.random() * 2) == 0)
            return "muzzle";
        if (int(Math.random() * 3) == 0 && char.faceType == 1)
            stringo = "long ";
        if (int(Math.random() * 3) == 0 && char.faceType == 6)
            stringo = "feline ";
        return stringo + "face";
    }
    // 3 - cowface
    if (char.faceType == 3) {
        if (Math.floor(Math.random() * 4) == 0)
            stringo = "bovine ";
        if (int(Math.random() * 2) == 0)
            return "muzzle";
        return stringo + "face";
    }
    // 4 - sharkface-teeth
    if (char.faceType == 4) {
        if (Math.floor(Math.random() * 4) == 0)
            stringo = "angular ";
        return stringo + "face";
    }
    // 7 - lizard face (durned argonians!)
    if (char.faceType == 7 || char.faceType == 12) {
        if (Math.floor(Math.random() * 4) == 0)
            stringo = "reptilian ";
        if (Math.floor(Math.random() * 4) == 0)
            return stringo + "muzzle";
        if (Math.floor(Math.random() * 4) == 0)
            return stringo + "snout";
        return stringo + "face";
    }
    return "face";
}
