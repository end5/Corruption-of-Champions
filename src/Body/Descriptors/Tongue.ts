/**
 * Describe tongue. Monsters don't have tongues, apparently.
 * @param    i_character Either Player or NonPlayer
 * @return    A beautiful description of a tongue.
 */
export function tongueDescription(i_character: Character): string {
    if (i_character.tongueType == 1) return "serpentine tongue";
    else if (i_character.tongueType == 2) return "demonic tongue";
    else if (i_character.tongueType == 3) return "draconic tongue";
    else return "tongue";
}
