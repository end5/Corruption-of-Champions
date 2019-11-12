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

export function skinFurScales(creature: Character): string {
    let skinzilla: string = "";
    // Adjectives first!
    if (skinAdj != "")
        skinzilla += skinAdj + ", ";
    // Fur handled a little differently since it uses
    // haircolor
    if (_skinType == 1)
        skinzilla += hairColor + " ";
    else
        skinzilla += _skinTone + " ";
    skinzilla += skinDesc;
    return skinzilla;
}
