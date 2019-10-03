// CoC Creature.as

export class Creature extends Utils {

    // include "../../includes/appearanceDefs.as";

    public get game(): CoC {
        return kGAMECLASS;
    }
    public get flags(): DefaultDict {
        return game.flags;
    }

    // Variables

    // Short refers to player name and monster name. BEST VARIABLE NAME EVA!
    // "a" refers to how the article "a" should appear in text.
    private _short: string = "You";
    private _a: string = "a ";
    public get short(): string { return _short; }
    public set short(value: string): void { _short = value; }
    public get a(): string { return _a; }
    public set a(value: string): void { _a = value; }
    public get capitalA(): string {
        if (_a.length == 0) return "";
        return _a.charAt(0).toUpperCase() + _a.substr(1);
    }

    // Weapon
    private _weaponName: string = "";
    private _weaponVerb: string = "";
    private _weaponAttack: number = 0;
    private _weaponPerk: string = "";
    private _weaponValue: number = 0;
    public get weaponName(): string { return _weaponName; }
    public get weaponVerb(): string { return _weaponVerb; }
    public get weaponAttack(): number { return _weaponAttack; }
    public get weaponPerk(): string { return _weaponPerk; }
    public get weaponValue(): number { return _weaponValue; }
    public set weaponName(value: string): void { _weaponName = value; }
    public set weaponVerb(value: string): void { _weaponVerb = value; }
    public set weaponAttack(value: number): void { _weaponAttack = value; }
    public set weaponPerk(value: string): void { _weaponPerk = value; }
    public set weaponValue(value: number): void { _weaponValue = value; }
    // Clothing/Armor
    private _armorName: string = "";
    private _armorDef: number = 0;
    private _armorPerk: string = "";
    private _armorValue: number = 0;
    public get armorName(): string { return _armorName; }
    public get armorDef(): number { return _armorDef; }
    public get armorPerk(): string { return _armorPerk; }
    public get armorValue(): number { return _armorValue; }
    public set armorValue(value: number): void { _armorValue = value; }
    public set armorName(value: string): void { _armorName = value; }
    public set armorDef(value: number): void { _armorDef = value; }
    public set armorPerk(value: string): void { _armorPerk = value; }

    // Primary stats
    public str: number = 0;
    public tou: number = 0;
    public spe: number = 0;
    public inte: number = 0;
    public lib: number = 0;
    public sens: number = 0;
    public cor: number = 0;
    public fatigue: number = 0;

    // Combat Stats
    public HP: number = 0;
    public lust: number = 0;

    // Level Stats
    public XP: number = 0;
    public level: number = 0;
    public gems: number = 0;
    public additionalXP: number = 0;

    // Appearance Variables
    // Gender 1M, 2F, 3H
    public gender: number = GENDER_NONE;
    private _tallness: number = 0;
    public get tallness(): number { return _tallness; }
    public set tallness(value: number): void { _tallness = value; }

    /*Hairtype
    0- normal
    1- feather
    2- ghost
    3- goo!
    4- anemononeoenoeneo!*/
    public hairType: number = HAIR_NORMAL;
    public hairColor: string = "no";
    public hairLength: number = 0;

    /*Skintype
    0 - skin
    1 - furry
    2 - scaley
    3 - goopey*/
    private _skinType: number = SKIN_TYPE_PLAIN;
    public get skinType(): number { return _skinType; }
    public set skinType(value: number): void { _skinType = value; }
    private _skinTone: string = "albino";
    public get skinTone(): string { return _skinTone; }
    public set skinTone(value: string): void { _skinTone = value; }
    public skinDesc: string = "skin";
    public skinAdj: string = "";

    /*		Facetype:
            0 - human
            1 - horse
            2 - dogface
            3 - cowface
            4 - sharkface-teeth
            5 - Human w/Naga fangz
            6 - kittah face
            7 - lizard face (durned argonians!)
            8 - bunnah faceahhh bunbun
            9 - kangaface
            10 - spidah-face (humanish)
            11 - foxface!
            12 - dragon face
            13 - Halfcoon
            14 - fullcoon
            15 - halfmouse
            16 - fullmouse*/
    public faceType: number = FACE_HUMAN;

    /*EarType
    -1 - none!
    0 - human
    1 - horse
    2 - dog
    3 - cow
    4 - elf
    5 - catzilla
    6 - Snakezilla
    7 - Bunbunz
    8 - Roo Ears
    9 - fox ears
    10 - dragon
    11 - coon
    12 - mouse*/
    public earType: number = EARS_HUMAN;
    public earValue: number = 0;

    /*Horntype
    1 - demonic
    2 - minotaur (cowlike)
    3 - Draconic/Lizard
    4 - Double draconic
    5 - Antlers*/
    public hornType: number = HORNS_NONE;
    public horns: number = 0;

    /*Wingtype
    0 - none
    1 - bee
    2 - large bee
    3 - faerie?
    4 - avian
    5 - dragoooon?
    6 - demon/bat
    7 - large demon/bat
    8 - shark wing lolololol
    9 - harpy
    10 - small dagron
    11 - trogdor wings
    12 - sandtrap wings*/
    private _wingType: number = WING_TYPE_NONE;
    public wingDesc: string = "non-existant";
    public get wingType(): number { return _wingType; }
    public set wingType(value: number): void { _wingType = value; }

    /* lowerBody:
    0 - normal
    1 - hooves
    2 - paws
    3 - snakelike body
    4 - centaur!
    5 - demonic heels
    6 - demon foot-claws
    7 - bee legs
    8 - goo mound
    9 - catfeet
    10 - lizardfeet
    11 - MLP.
    12 - DAH BUNNY!
    13 - Harpah Legz
    14 - Roo feet!
    15 - Spider Legz
    16 - Drider Legs
    17 - foxpaws
    18 - dragonfeet
    19 - raccoonfeet*/
    public lowerBody: number = LOWER_BODY_TYPE_HUMAN;

    /*tailType:
    0 - none
    1 - horse
    2 - dog
    3 - demon
    4 - cow!
    5 - spider!
    6 - bee!
    7 - shark tail!
    8 - catTAIIIIIL
    9 - lizard tail
    10 - bunbuntail
    11 - harpybutt
    12 - rootail
    13 - foxtail
    14 - dagron tail
    15 - raccoon tail
    16 - mousetail*/
    public tailType: number = TAIL_TYPE_NONE;

    // Tail venom is a 0-100 slider used for tail attacks. Recharges per hour.
    public tailVenom: number = 0;
    // Tail recharge determines how fast venom/webs comes back per hour.
    public tailRecharge: number = 5;

    /*hipRating
    0 - boyish
    2 - slender
    4 - average
    6 - noticable/ample
    10 - curvy//flaring
    15 - child-bearing/fertile
    20 - inhumanly wide*/
    public hipRating: number = HIP_RATING_BOYISH;

    /*buttRating
    0 - buttless
    2 - tight
    4 - average
    6 - noticable
    8 - large
    10 - jiggly
    13 - expansive
    16 - huge
    20 - inconceivably large/big/huge etc*/
    public buttRating: number = BUTT_RATING_BUTTLESS;

    // Piercings
    // TODO: Pull this out into it's own class and enum.
    public nipplesPierced: number = 0;
    public nipplesPShort: string = "";
    public nipplesPLong: string = "";
    public lipPierced: number = 0;
    public lipPShort: string = "";
    public lipPLong: string = "";
    public tonguePierced: number = 0;
    public tonguePShort: string = "";
    public tonguePLong: string = "";
    public eyebrowPierced: number = 0;
    public eyebrowPShort: string = "";
    public eyebrowPLong: string = "";
    public earsPierced: number = 0;
    public earsPShort: string = "";
    public earsPLong: string = "";
    public nosePierced: number = 0;
    public nosePShort: string = "";
    public nosePLong: string = "";

    // Head ornaments. Definitely need to convert away from hard coded types.
    public antennae: number = ANTENNAE_NONE;

    // Eyetype
    public eyeType: number = EYES_HUMAN;

    // TongueType
    public tongueType: number = TONUGE_HUMAN;

    // ArmType
    public armType: number = ARM_TYPE_HUMAN;

    // Gills
    public gills: boolean = false;

    // Sexual Stuff
    // MALE STUFF
    // public var cocks:Array;
    // TODO: Tuck away into Male genital class?
    public cocks: any[];
    // balls
    public balls: number = 0;
    public cumMultiplier: number = 1;
    public ballSize: number = 0;

    private _hoursSinceCum: number = 0;
    public get hoursSinceCum(): number { return _hoursSinceCum; }
    public set hoursSinceCum(v: number): void {
        /*if (v == 0)
        {
            trace("noop");
        }*/
        _hoursSinceCum = v;
    }

    // FEMALE STUFF
    // TODO: Box into Female genital class?
    public vaginas: any[];
    // Fertility is a % out of 100.
    public fertility: number = 10;
    public clitLength: number = .5;
    public nippleLength: number = .25;
    public breastRows: any[];
    public ass: AssClass = new AssClass();

    public validate(): string {
        let error: string = "";
        // 2. Value boundaries etc
        // 2.1. non-negative Number fields
        error += Utils.validateNonNegativeNumberFields(this, "Monster.validate", [
            "balls", "ballSize", "cumMultiplier", "hoursSinceCum",
            "tallness", "hipRating", "buttRating", "lowerBody", "armType",
            "skinType", "hairLength", "hairType",
            "faceType", "earType", "tongueType", "eyeType",
            "str", "tou", "spe", "inte", "lib", "sens", "cor",
            // Allow weaponAttack to be negative as a penalty to strength-calculated damage
            // Same with armorDef, bonusHP, additionalXP
            "weaponValue", "armorValue",
            "lust", "fatigue",
            "level", "gems",
            "tailVenom", "tailRecharge", "horns",
            "HP", "XP"
        ]);
        // 2.2. non-empty String fields
        error += Utils.validateNonEmptyStringFields(this, "Monster.validate", [
            "short",
            "skinDesc",
            "weaponName", "weaponVerb", "armorName"
        ]);
        // 3. validate members
        for (const cock of cocks) {
            error += cock.validate();
        }
        for (const vagina of vaginas) {
            error += vagina.validate();
        }
        for (const row of breastRows) {
            error += row.validate();
        }
        error += ass.validate();
        // 4. Inconsistent fields
        // 4.1. balls
        if (balls > 0 && ballSize <= 0) {
            error += "Balls are present but ballSize = " + ballSize + ". ";
        }
        if (ballSize > 0 && balls <= 0) {
            error += "No balls but ballSize = " + ballSize + ". ";
        }
        // 4.2. hair
        if (hairLength <= 0) {
            if (hairType != HAIR_NORMAL) error += "No hair but hairType = " + hairType + ". ";
        }
        // 4.3. tail
        if (tailType == TAIL_TYPE_NONE) {
            if (tailVenom != 0) error += "No tail but tailVenom = " + tailVenom + ". ";
        }
        // 4.4. horns
        if (hornType == HORNS_NONE) {
            if (horns > 0) error += "horns > 0 but hornType = HORNS_NONE. ";
        } else {
            if (horns == 0) error += "Has horns but their number 'horns' = 0. ";
        }
        return error;
    }

    // Monsters have few perks, which I think should be a status effect for clarity's sake.
    // TODO: Move perks into monster status effects.
    private _perks: any[];
    public perk(i: number): PerkClass {
        return _perks[i];
    }
    public get perks(): any[] {
        return _perks;
    }
    public get numPerks(): number {
        return _perks.length;
    }
    // Current status effects. This has got very muddy between perks and status effects. Will have to look into it.
    // Someone call the grammar police!
    // TODO: Move monster status effects into perks. Needs investigation though.
    public statusAffects: any[];

    // Constructor
    public constructor() {
        // cocks = new Array();
        // The world isn't ready for typed Arrays just yet.
        cocks = [];
        vaginas = [];
        // vaginas: Vector.<Vagina> = new Vector.<Vagina>();
        breastRows = [];
        _perks = [];
        statusAffects = [];
        // keyItems = new Array();
    }

    // Functions
    public orgasm(): void {
        dynStats("lus=", 0, "res", false);
        hoursSinceCum = 0;

        if (countCockSocks("gilded") > 0) {

            const randomCock: number = rand(cocks.length);
            const bonusGems: number = rand(cocks[randomCock].cockThickness) + countCockSocks("gilded"); // int so AS rounds to whole numbers
            outputText("\n\nFeeling some minor discomfort in your " + cockDescript(randomCock) + " you slip it out of your [armor] and examine it. <b>With a little exploratory rubbing and massaging, you manage to squeeze out " + bonusGems + " gems from its cum slit.</b>\n\n");
            gems += bonusGems;
        }
    }

    // Create a perk
    public createPerk(ptype: PerkType, value1: number, value2: number, value3: number, value4: number): void {
        const newKeyItem: PerkClass = new PerkClass(ptype);
        // used to denote that the array has already had its new spot pushed on.
        let arrayed: boolean = false;
        // used to store where the array goes
        let keySlot: number = 0;
        let counter: number = 0;
        // Start the array if its the first bit
        if (perks.length == 0) {
            // trace("New Perk Started Array! " + keyName);
            perks.push(newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // If it belongs at the end, push it on
        if (perk(perks.length - 1).perkName < ptype.name && !arrayed) {
            // trace("New Perk Belongs at the end!! " + keyName);
            perks.push(newKeyItem);
            arrayed = true;
            keySlot = perks.length - 1;
        }
        // If it belongs in the beginning, splice it in
        if (perk(0).perkName > ptype.name && !arrayed) {
            // trace("New Perk Belongs at the beginning! " + keyName);
            perks.splice(0, 0, newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // Find the spot it needs to go in and splice it in.
        if (!arrayed) {
            // trace("New Perk using alphabetizer! " + keyName);
            counter = perks.length;
            while (counter > 0 && !arrayed) {
                counter--;
                // If the current slot is later than new key
                if (perk(counter).perkName > ptype.name) {
                    // If the earlier slot is earlier than new key && a real spot
                    if (counter - 1 >= 0) {
                        // If the earlier slot is earlier slot in!
                        if (perk(counter - 1).perkName <= ptype.name) {
                            arrayed = true;
                            perks.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                    // If the item after 0 slot is later put here!
                    else {
                        // If the next slot is later we are go
                        if (perk(counter).perkName <= ptype.name) {
                            arrayed = true;
                            perks.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                }
            }
        }
        // Fallback
        if (!arrayed) {
            // trace("New Perk Belongs at the end!! " + keyName);
            perks.push(newKeyItem);
            keySlot = perks.length - 1;
        }

        perk(keySlot).value1 = value1;
        perk(keySlot).value2 = value2;
        perk(keySlot).value3 = value3;
        perk(keySlot).value4 = value4;
        // trace("NEW PERK FOR PLAYER in slot " + keySlot + ": " + perk(keySlot).perkName);
    }

    /**
     * Remove perk. Return true if there was such perk
     */
    public removePerk(ptype: PerkType): boolean {
        let counter: number = perks.length;
        // Various Errors preventing action
        if (perks.length <= 0) {
            return false;
        }
        while (counter > 0) {
            counter--;
            if (perk(counter).ptype == ptype) {
                perks.splice(counter, 1);
                // trace("Attempted to remove \"" + perkName + "\" perk.");
                return true;
            }
        }
        return false;
    }

    // has perk?
    public findPerk(ptype: PerkType): number {
        if (perks.length <= 0)
            return -2;
        for (const counter = 0; counter < perks.length; counter++) {
            if (perk(counter).ptype == ptype)
                return counter;
        }
        return -1;
    }

    // Duplicate perk
    // Deprecated?
    public perkDuplicated(ptype: PerkType): boolean {
        let timesFound: number = 0;
        if (perks.length <= 0)
            return false;
        for (const counter = 0; counter < perks.length; counter++) {
            if (perk(counter).ptype == ptype)
                timesFound++;
        }
        return (timesFound > 1);
    }

    // remove all perks
    public removePerks(): void {
        _perks = [];
    }

    public addPerkValue(ptype: PerkType, valueIdx: number = 1, bonus: number = 0): void {
        const counter: number = findPerk(ptype);
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "' to change value " + valueIdx + ", and player does not have the perk.");
            return;
        }
        if (valueIdx < 1 || valueIdx > 4) {
            CoC_Settings.error("addPerkValue(" + ptype.id + ", " + valueIdx + ", " + bonus + ").");
            return;
        }
        if (valueIdx == 1)
            perk(counter).value1 += bonus;
        if (valueIdx == 2)
            perk(counter).value2 += bonus;
        if (valueIdx == 3)
            perk(counter).value3 += bonus;
        if (valueIdx == 4)
            perk(counter).value4 += bonus;
    }

    public setPerkValue(ptype: PerkType, valueIdx: number = 1, newNum: number = 0): void {
        const counter: number = findPerk(ptype);
        // Various Errors preventing action
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "' to change value " + valueIdx + ", and player does not have the perk.");
            return;
        }
        if (valueIdx < 1 || valueIdx > 4) {
            CoC_Settings.error("setPerkValue(" + ptype.id + ", " + valueIdx + ", " + newNum + ").");
            return;
        }
        if (valueIdx == 1)
            perk(counter).value1 = newNum;
        if (valueIdx == 2)
            perk(counter).value2 = newNum;
        if (valueIdx == 3)
            perk(counter).value3 = newNum;
        if (valueIdx == 4)
            perk(counter).value4 = newNum;
    }

    public perkv1(ptype: PerkType): number {
        const counter: number = findPerk(ptype);
        if (counter < 0) {
            // trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return perk(counter).value1;
    }

    public perkv2(ptype: PerkType): number {
        const counter: number = findPerk(ptype);
        if (counter < 0) {
            // trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return perk(counter).value2;
    }

    public perkv3(ptype: PerkType): number {
        const counter: number = findPerk(ptype);
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return perk(counter).value3;
    }

    public perkv4(ptype: PerkType): number {
        const counter: number = findPerk(ptype);
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return perk(counter).value4;
    }

    // {region StatusEffects
    // Create a status
    public createStatusAffect(stype: StatusAffectType, value1: number, value2: number, value3: number, value4: number): void {
        const newStatusAffect: StatusAffectClass = new StatusAffectClass(stype, value1, value2, value3, value4);
        statusAffects.push(newStatusAffect);
        // trace("createStatusAffect -> "+statusAffects.join(","));
        // trace("NEW STATUS APPLIED TO PLAYER!: " + statusName);
    }

    // Remove a status
    public removeStatusAffect(stype: StatusAffectType): void {
        const counter: number = findStatusAffect(stype);
        if (counter < 0) return;
        statusAffects.splice(counter, 1);
        // trace("removeStatusAffect -> "+statusAffects.join(","));
    }

    public findStatusAffect(stype: StatusAffectType): number {
        for (const counter = 0; counter < statusAffects.length; counter++) {
            if (statusAffect(counter).stype == stype)
                return counter;
        }
        return -1;
    }
    // }endregion

    public changeStatusValue(stype: StatusAffectType, statusValueNum: number = 1, newNum: number = 0): void {
        const counter: number = findStatusAffect(stype);
        // Various Errors preventing action
        if (counter < 0) return;
        if (statusValueNum < 1 || statusValueNum > 4) {
            CoC_Settings.error("ChangeStatusValue called with invalid status value number.");
            return;
        }
        if (statusValueNum == 1)
            statusAffect(counter).value1 = newNum;
        if (statusValueNum == 2)
            statusAffect(counter).value2 = newNum;
        if (statusValueNum == 3)
            statusAffect(counter).value3 = newNum;
        if (statusValueNum == 4)
            statusAffect(counter).value4 = newNum;
    }

    public addStatusValue(stype: StatusAffectType, statusValueNum: number = 1, bonus: number = 0): void {
        const counter: number = findStatusAffect(stype);
        // Various Errors preventing action
        if (counter < 0) {
            return;
        }
        if (statusValueNum < 1 || statusValueNum > 4) {
            CoC_Settings.error("ChangeStatusValue called with invalid status value number.");
            return;
        }
        if (statusValueNum == 1)
            statusAffect(counter).value1 += bonus;
        if (statusValueNum == 2)
            statusAffect(counter).value2 += bonus;
        if (statusValueNum == 3)
            statusAffect(counter).value3 += bonus;
        if (statusValueNum == 4)
            statusAffect(counter).value4 += bonus;
    }

    public statusAffect(idx: number): StatusAffectClass {
        return statusAffects[idx];
    }

    public statusAffectv1(stype: StatusAffectType): number {
        const counter: number = findStatusAffect(stype);
        return (counter < 0) ? 0 : statusAffect(counter).value1;
    }

    public statusAffectv2(stype: StatusAffectType): number {
        const counter: number = findStatusAffect(stype);
        return (counter < 0) ? 0 : statusAffect(counter).value2;
    }

    public statusAffectv3(stype: StatusAffectType): number {
        const counter: number = findStatusAffect(stype);
        return (counter < 0) ? 0 : statusAffect(counter).value3;
    }

    public statusAffectv4(stype: StatusAffectType): number {
        const counter: number = findStatusAffect(stype);
        return (counter < 0) ? 0 : statusAffect(counter).value4;
    }

    public removeStatuses(): void {
        let counter: number = statusAffects.length;
        while (counter > 0) {
            counter--;
            statusAffects.splice(counter, 1);
        }
    }

    public biggestTitSize(): number {
        if (breastRows.length == 0)
            return -1;
        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].breastRating < breastRows[counter].breastRating)
                index = counter;
        }
        return breastRows[index].breastRating;
    }

    public cockArea(i_cockIndex: number): number {
        if (i_cockIndex >= cocks.length || i_cockIndex < 0)
            return 0;
        return (cocks[i_cockIndex].cockThickness * cocks[i_cockIndex].cockLength);
    }

    public biggestCockLength(): number {
        if (cocks.length == 0)
            return 0;
        return cocks[biggestCockIndex()].cockLength;
    }

    public biggestCockArea(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cockArea(index) < cockArea(counter))
                index = counter;
        }
        return cockArea(index);
    }

    // Find the second biggest dick and it's area.
    public biggestCockArea2(): number {
        if (cocks.length <= 1)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        let index2: number = -1;
        // Find the biggest
        while (counter > 0) {
            counter--;
            if (cockArea(index) < cockArea(counter))
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = cocks.length;
        while (counter > 0) {
            counter--;
            // Is this spot claimed by the biggest?
            if (counter != index) {
                // Not set yet?
                if (index2 == -1)
                    index2 = counter;
                // Is the stored value less than the current one?
                if (cockArea(index2) < cockArea(counter)) {
                    index2 = counter;
                }
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2)
            return 0;
        return cockArea(index2);
    }

    public longestCock(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockLength < cocks[counter].cockLength)
                index = counter;
        }
        return index;
    }

    public longestCockLength(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockLength < cocks[counter].cockLength)
                index = counter;
        }
        return cocks[index].cockLength;
    }

    public longestHorseCockLength(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if ((cocks[index].cockType != CockTypesEnum.HORSE && cocks[counter].cockType == CockTypesEnum.HORSE) || (cocks[index].cockLength < cocks[counter].cockLength && cocks[counter].cockType == CockTypesEnum.HORSE))
                index = counter;
        }
        return cocks[index].cockLength;
    }

    public twoDickRadarSpecial(width: number): boolean {
        // No two dicks?  FUCK OFF
        if (cockTotal() < 2)
            return false;

        // Set up vars
        // Get thinnest, work done already
        const thinnest: number = thinnestCockIndex();
        let thinnest2: number = 0;
        // For ze loop
        let temp: number = 0;
        // Make sure they arent the same at initialization
        if (thinnest2 == thinnest)
            thinnest2 = 1;
        // Loop through to find 2nd thinnest
        while (temp < cocks.length) {
            if (cocks[thinnest2].cockThickness > cocks[temp].cockThickness && temp != thinnest)
                thinnest2 = temp;
            temp++;
        }
        // If the two thicknesses added together are less than the arg, true, else false
        return cocks[thinnest].cockThickness + cocks[thinnest2].cockThickness < width;
    }

    public totalCockThickness(): number {
        let thick: number = 0;
        let counter: number = cocks.length;
        while (counter > 0) {
            counter--;
            thick += cocks[counter].cockThickness;
        }
        return thick;
    }

    public thickestCock(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockThickness < cocks[counter].cockThickness)
                index = counter;
        }
        return index;
    }

    public thickestCockThickness(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockThickness < cocks[counter].cockThickness)
                index = counter;
        }
        return cocks[index].cockThickness;
    }

    public thinnestCockIndex(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockThickness > cocks[counter].cockThickness)
                index = counter;
        }
        return index;
    }

    public smallestCockIndex(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cockArea(index) > cockArea(counter)) {
                index = counter;
            }
        }
        return index;
    }

    public smallestCockLength(): number {
        if (cocks.length == 0)
            return 0;
        return cocks[smallestCockIndex()].cockLength;
    }

    public shortestCockIndex(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockLength > cocks[counter].cockLength)
                index = counter;
        }
        return index;
    }

    public shortestCockLength(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cocks[index].cockLength > cocks[counter].cockLength)
                index = counter;
        }
        return cocks[index].cockLength;
    }

    // Find the biggest cock that fits inside a given value
    public cockThatFits(i_fits: number = 0, type: string = "area"): number {
        if (cocks.length <= 0)
            return -1;
        let cockIdxPtr: number = cocks.length;
        // Current largest fitter
        let cockIndex: number = -1;
        while (cockIdxPtr > 0) {
            cockIdxPtr--;
            if (type == "area") {
                if (cockArea(cockIdxPtr) <= i_fits) {
                    // If one already fits
                    if (cockIndex >= 0) {
                        // See if the newcomer beats the saved small guy
                        if (cockArea(cockIdxPtr) > cockArea(cockIndex))
                            cockIndex = cockIdxPtr;
                    }
                    // Store the index of fitting dick
                    else
                        cockIndex = cockIdxPtr;
                }
            }
            else if (type == "length") {
                if (cocks[cockIdxPtr].cockLength <= i_fits) {
                    // If one already fits
                    if (cockIndex >= 0) {
                        // See if the newcomer beats the saved small guy
                        if (cocks[cockIdxPtr].cockLength > cocks[cockIndex].cockLength)
                            cockIndex = cockIdxPtr;
                    }
                    // Store the index of fitting dick
                    else
                        cockIndex = cockIdxPtr;
                }
            }
        }
        return cockIndex;
    }

    // Find the 2nd biggest cock that fits inside a given value
    public cockThatFits2(fits: number = 0): number {
        if (cockTotal() == 1)
            return -1;
        let counter: number = cocks.length;
        // Current largest fitter
        let index: number = -1;
        let index2: number = -1;
        while (counter > 0) {
            counter--;
            // Does this one fit?
            if (cockArea(counter) <= fits) {
                // If one already fits
                if (index >= 0) {
                    // See if the newcomer beats the saved small guy
                    if (cockArea(counter) > cockArea(index)) {
                        // Save old wang
                        if (index != -1)
                            index2 = index;
                        index = counter;
                    }
                    // If this one fits and is smaller than the other great
                    else {
                        if ((cockArea(index2) < cockArea(counter)) && counter != index) {
                            index2 = counter;
                        }
                    }
                    if (index >= 0 && index == index2)
                        trace("FUCK ERROR COCKTHATFITS2 SHIT IS BROKED!");
                }
                // Store the index of fitting dick
                else
                    index = counter;
            }
        }
        return index2;
    }

    public smallestCockArea(): number {
        if (cockTotal() == 0)
            return -1;
        return cockArea(smallestCockIndex());
    }

    public smallestCock(): number {
        return cockArea(smallestCockIndex());
    }

    public biggestCockIndex(): number {
        if (cocks.length == 0)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (cockArea(index) < cockArea(counter))
                index = counter;
        }
        return index;
    }

    // Find the second biggest dick's index.
    public biggestCockIndex2(): number {
        if (cocks.length <= 1)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        let index2: number = 0;
        // Find the biggest
        while (counter > 0) {
            counter--;
            if (cockArea(index) < cockArea(counter))
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = cocks.length;
        while (counter > 0) {
            counter--;
            // Make sure index2 doesn't get stuck
            // at the same value as index1 if the
            // initial location is biggest.
            if (index == index2 && counter != index)
                index2 = counter;
            // Is the stored value less than the current one?
            if (cockArea(index2) < cockArea(counter)) {
                // Make sure we don't set index2 to be the same
                // as the biggest dick.
                if (counter != index)
                    index2 = counter;
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2)
            return 0;
        return index2;
    }

    public smallestCockIndex2(): number {
        if (cocks.length <= 1)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        let index2: number = 0;
        // Find the smallest
        while (counter > 0) {
            counter--;
            if (cockArea(index) > cockArea(counter))
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = cocks.length;
        while (counter > 0) {
            counter--;
            // Make sure index2 doesn't get stuck
            // at the same value as index1 if the
            // initial location is biggest.
            if (index == index2 && counter != index)
                index2 = counter;
            // Is the stored value less than the current one?
            if (cockArea(index2) > cockArea(counter)) {
                // Make sure we don't set index2 to be the same
                // as the biggest dick.
                if (counter != index)
                    index2 = counter;
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2)
            return 0;
        return index2;
    }

    // Find the third biggest dick index.
    public biggestCockIndex3(): number {
        if (cocks.length <= 2)
            return 0;
        let counter: number = cocks.length;
        let index: number = 0;
        let index2: number = -1;
        let index3: number = -1;
        // Find the biggest
        while (counter > 0) {
            counter--;
            if (cockArea(index) < cockArea(counter))
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = cocks.length;
        while (counter > 0) {
            counter--;
            // If this index isn't used already
            if (counter != index) {
                // Has index been set to anything yet?
                if (index2 == -1)
                    index2 = counter;
                // Is the stored value less than the current one?
                else if (cockArea(index2) < cockArea(counter)) {
                    index2 = counter;
                }
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2 || index2 == -1)
            index2 = 0;
        // Reset counter and find the next biggest
        counter = cocks.length;
        while (counter > 0) {
            counter--;
            // If this index isn't used already
            if (counter != index && counter != index2) {
                // Has index been set to anything yet?
                if (index3 == -1)
                    index3 = counter;
                // Is the stored value less than the current one?
                else if (cockArea(index3) < cockArea(counter)) {
                    index3 = counter;
                }
            }
        }
        // If it fails for some reason.
        if (index3 == -1)
            index3 = 0;
        return index3;
    }

    public cockDescript(cockIndex: number = 0): string {
        return Appearance.cockDescript(this, cockIndex);
    }

    public cockAdjective(index: number = -1): string {
        if (index < 0) index = biggestCockIndex();
        const isPierced: boolean = (cocks.length == 1) && (cocks[index].isPierced); // Only describe as pierced or sock covered if the creature has just one cock
        const hasSock: boolean = (cocks.length == 1) && (cocks[index].sock != "");
        const isGooey: boolean = (skinType == CoC.SKIN_TYPE_GOO);
        return Appearance.cockAdjective(cocks[index].cockType, cocks[index].cockLength, cocks[index].cockThickness, lust, cumQ(), isPierced, hasSock, isGooey);
    }

    public wetness(): number {
        if (vaginas.length == 0)
            return 0;
        else
            return vaginas[0].vaginalWetness;
    }

    public vaginaType(newType: number = -1): number {
        if (!hasVagina())
            return -1;
        if (newType != -1) {
            vaginas[0].type = newType;
        }
        return vaginas[0].type;
    }

    public looseness(vag: boolean = true): number {
        if (vag) {
            if (vaginas.length == 0)
                return 0;
            else
                return vaginas[0].vaginalLooseness;
        }
        else {
            return ass.analLooseness;
        }
    }

    public vaginalCapacity(): number {
        // If the player has no vaginas
        if (vaginas.length == 0)
            return 0;
        let total: number;
        let bonus: number = 0;
        // Centaurs = +50 capacity
        if (lowerBody == 4)
            bonus = 50;
        // Naga = +20 capacity
        else if (lowerBody == 3)
            bonus = 20;
        // Wet pussy provides 20 point boost
        if (findPerk(PerkLib.WetPussy) >= 0)
            bonus += 20;
        if (findPerk(PerkLib.HistorySlut) >= 0)
            bonus += 20;
        if (findPerk(PerkLib.OneTrackMind) >= 0)
            bonus += 10;
        if (findPerk(PerkLib.Cornucopia) >= 0)
            bonus += 30;
        if (findPerk(PerkLib.FerasBoonWideOpen) >= 0)
            bonus += 25;
        if (findPerk(PerkLib.FerasBoonMilkingTwat) >= 0)
            bonus += 40;
        total = (bonus + statusAffectv1(StatusAffects.BonusVCapacity) + 8 * vaginas[0].vaginalLooseness * vaginas[0].vaginalLooseness) * (1 + vaginas[0].vaginalWetness / 10);
        return total;
    }

    public analCapacity(): number {
        let bonus: number = 0;
        // Centaurs = +30 capacity
        if (lowerBody == 4)
            bonus = 30;
        if (findPerk(PerkLib.HistorySlut) >= 0)
            bonus += 20;
        if (findPerk(PerkLib.Cornucopia) >= 0)
            bonus += 30;
        if (findPerk(PerkLib.OneTrackMind) >= 0)
            bonus += 10;
        if (ass.analWetness > 0)
            bonus += 15;
        return ((bonus + statusAffectv1(StatusAffects.BonusACapacity) + 6 * ass.analLooseness * ass.analLooseness) * (1 + ass.analWetness / 10));
    }

    public hasFuckableNipples(): boolean {
        let counter: number = breastRows.length;
        while (counter > 0) {
            counter--;
            if (breastRows[counter].fuckable)
                return true;
        }
        return false;
    }

    public hasBreasts(): boolean {
        if (breastRows.length > 0) {
            if (biggestTitSize() >= 1)
                return true;
        }
        return false;
    }

    public hasNipples(): boolean {
        let counter: number = breastRows.length;
        while (counter > 0) {
            counter--;
            if (breastRows[counter].nipplesPerBreast > 0)
                return true;
        }
        return false;
    }

    public lactationSpeed(): number {
        // Lactation * breastSize x 10 (milkPerBreast) determines scene
        return biggestLactation() * biggestTitSize() * 10;
    }

    // Hacky code till I can figure out how to move appearance code out.
    // TODO: Get rid of this
    public dogScore(): number {
        throw new Error("Not implemented. BAD");
    }

    // Hacky code till I can figure out how to move appearance code out.
    // TODO: Get rid of this
    public foxScore(): number {
        throw new Error("Not implemented. BAD");
    }

    public biggestLactation(): number {
        if (breastRows.length == 0)
            return 0;
        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].lactationMultiplier < breastRows[counter].lactationMultiplier)
                index = counter;
        }
        return breastRows[index].lactationMultiplier;
    }
    public milked(): void {
        if (findStatusAffect(StatusAffects.LactationReduction) >= 0)
            changeStatusValue(StatusAffects.LactationReduction, 1, 0);
        if (findStatusAffect(StatusAffects.LactationReduc0) >= 0)
            removeStatusAffect(StatusAffects.LactationReduc0);
        if (findStatusAffect(StatusAffects.LactationReduc1) >= 0)
            removeStatusAffect(StatusAffects.LactationReduc1);
        if (findStatusAffect(StatusAffects.LactationReduc2) >= 0)
            removeStatusAffect(StatusAffects.LactationReduc2);
        if (findStatusAffect(StatusAffects.LactationReduc3) >= 0)
            removeStatusAffect(StatusAffects.LactationReduc3);
        if (findPerk(PerkLib.Feeder) >= 0) {
            // You've now been milked, reset the timer for that
            addStatusValue(StatusAffects.Feeder, 1, 1);
            changeStatusValue(StatusAffects.Feeder, 2, 0);
        }
    }
    public boostLactation(todo: number): number {
        if (breastRows.length == 0)
            return 0;
        let counter: number = breastRows.length;
        let index: number = 0;
        let changes: number = 0;
        let temp2: number = 0;
        // Prevent lactation decrease if lactating.
        if (todo >= 0) {
            if (findStatusAffect(StatusAffects.LactationReduction) >= 0)
                changeStatusValue(StatusAffects.LactationReduction, 1, 0);
            if (findStatusAffect(StatusAffects.LactationReduc0) >= 0)
                removeStatusAffect(StatusAffects.LactationReduc0);
            if (findStatusAffect(StatusAffects.LactationReduc1) >= 0)
                removeStatusAffect(StatusAffects.LactationReduc1);
            if (findStatusAffect(StatusAffects.LactationReduc2) >= 0)
                removeStatusAffect(StatusAffects.LactationReduc2);
            if (findStatusAffect(StatusAffects.LactationReduc3) >= 0)
                removeStatusAffect(StatusAffects.LactationReduc3);
        }
        if (todo > 0) {
            while (todo > 0) {
                counter = breastRows.length;
                todo -= .1;
                while (counter > 0) {
                    counter--;
                    if (breastRows[index].lactationMultiplier > breastRows[counter].lactationMultiplier)
                        index = counter;
                }
                temp2 = .1;
                if (breastRows[index].lactationMultiplier > 1.5)
                    temp2 /= 2;
                if (breastRows[index].lactationMultiplier > 2.5)
                    temp2 /= 2;
                if (breastRows[index].lactationMultiplier > 3)
                    temp2 /= 2;
                changes += temp2;
                breastRows[index].lactationMultiplier += temp2;
            }
        }
        else {
            while (todo < 0) {
                counter = breastRows.length;
                index = 0;
                if (todo > -.1) {
                    while (counter > 0) {
                        counter--;
                        if (breastRows[index].lactationMultiplier < breastRows[counter].lactationMultiplier)
                            index = counter;
                    }
                    // trace(biggestLactation());
                    breastRows[index].lactationMultiplier += todo;
                    if (breastRows[index].lactationMultiplier < 0)
                        breastRows[index].lactationMultiplier = 0;
                    todo = 0;
                }
                else {
                    todo += .1;
                    while (counter > 0) {
                        counter--;
                        if (breastRows[index].lactationMultiplier < breastRows[counter].lactationMultiplier)
                            index = counter;
                    }
                    temp2 = todo;
                    changes += temp2;
                    breastRows[index].lactationMultiplier += temp2;
                    if (breastRows[index].lactationMultiplier < 0)
                        breastRows[index].lactationMultiplier = 0;
                }
            }
        }
        return changes;
    }

    public averageLactation(): number {
        if (breastRows.length == 0)
            return 0;
        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            index += breastRows[counter].lactationMultiplier;
        }
        return Math.floor(index / breastRows.length);
    }

    // Calculate bonus virility rating!
    // anywhere from 5% to 100% of normal cum effectiveness thru herbs!
    public virilityQ(): number {
        if (!hasCock())
            return 0;
        let percent: number = 0.01;
        if (cumQ() >= 250)
            percent += 0.01;
        if (cumQ() >= 800)
            percent += 0.01;
        if (cumQ() >= 1600)
            percent += 0.02;
        if (findPerk(PerkLib.BroBody) >= 0)
            percent += 0.05;
        if (findPerk(PerkLib.MaraesGiftStud) >= 0)
            percent += 0.15;
        if (findPerk(PerkLib.FerasBoonAlpha) >= 0)
            percent += 0.10;
        if (perkv1(PerkLib.ElvenBounty) > 0)
            percent += 0.05;
        if (findPerk(PerkLib.FertilityPlus) >= 0)
            percent += 0.03;
        if (findPerk(PerkLib.PiercedFertite) >= 0)
            percent += 0.03;
        if (findPerk(PerkLib.OneTrackMind) >= 0)
            percent += 0.03;
        if (findPerk(PerkLib.MagicalVirility) >= 0)
            percent += 0.05;
        // Messy Orgasms?
        if (findPerk(PerkLib.MessyOrgasms) >= 0)
            percent += 0.03;
        if (percent > 1)
            percent = 1;
        return percent;
    }

    // Calculate cum return
    public cumQ(): number {
        if (!hasCock())
            return 0;
        let quantity: number = 0;
        // Base value is ballsize*ballQ*cumefficiency by a factor of 2.
        // Other things that affect it:
        // lust - 50% = normal output.  0 = half output. 100 = +50% output.
        // trace("CUM ESTIMATE: " + int(1.25*2*cumMultiplier*2*(lust + 50)/10 * (hoursSinceCum+10)/24)/10 + "(no balls), " + int(ballSize*balls*cumMultiplier*2*(lust + 50)/10 * (hoursSinceCum+10)/24)/10 + "(withballs)");
        let lustCoefficient: number = (lust + 50) / 10;
        // Pilgrim's bounty maxxes lust coefficient
        if (findPerk(PerkLib.PilgrimsBounty) >= 0)
            lustCoefficient = 150 / 10;
        if (balls == 0)
            quantity = int(1.25 * 2 * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
        else
            quantity = int(ballSize * balls * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
        if (findPerk(PerkLib.BroBody) >= 0)
            quantity *= 1.3;
        if (findPerk(PerkLib.FertilityPlus) >= 0)
            quantity *= 1.5;
        if (findPerk(PerkLib.MessyOrgasms) >= 0)
            quantity *= 1.5;
        if (findPerk(PerkLib.OneTrackMind) >= 0)
            quantity *= 1.1;
        if (findPerk(PerkLib.MaraesGiftStud) >= 0)
            quantity += 350;
        if (findPerk(PerkLib.FerasBoonAlpha) >= 0)
            quantity += 200;
        if (findPerk(PerkLib.MagicalVirility) >= 0)
            quantity += 200;
        if (findPerk(PerkLib.FerasBoonSeeder) >= 0)
            quantity += 1000;
        // if(hasPerk("Elven Bounty") >= 0) quantity += 250;;
        quantity += perkv1(PerkLib.ElvenBounty);
        if (findPerk(PerkLib.BroBody) >= 0)
            quantity += 200;
        quantity += statusAffectv1(StatusAffects.Rut);
        quantity *= (1 + (2 * perkv1(PerkLib.PiercedFertite)) / 100);
        // trace("Final Cum Volume: " + int(quantity) + "mLs.");
        // if (quantity < 0) trace("SOMETHING HORRIBLY WRONG WITH CUM CALCULATIONS");
        if (quantity < 2)
            quantity = 2;
        return quantity;
    }

    public countCocksOfType(type: CockTypesEnum): number {
        if (cocks.length == 0) return 0;
        let counter: number = 0;
        for (const x = 0; x < cocks.length; x++) {
            if (cocks[x].cockType == type) counter++;
        }
        return counter;
    }

    public anemoneCocks(): number { // How many anemonecocks?
        return countCocksOfType(CockTypesEnum.ANEMONE);
    }

    public catCocks(): number { // How many catcocks?
        return countCocksOfType(CockTypesEnum.CAT);
    }

    public demonCocks(): number { // How many demoncocks?
        return countCocksOfType(CockTypesEnum.DEMON);
    }

    public displacerCocks(): number { // How many displacerCocks?
        return countCocksOfType(CockTypesEnum.DISPLACER);
    }

    // Note: DogCocks/FoxCocks are functionally identical. They actually change back and forth depending on some
    // of the PC's attributes, and this is recaluculated every hour spent at camp.
    // As such, delineating between the two is kind of silly.
    public dogCocks(): number { // How many dogCocks
        if (cocks.length == 0) return 0;
        let counter: number = 0;
        for (const x = 0; x < cocks.length; x++) {
            if (cocks[x].cockType == CockTypesEnum.DOG || cocks[x].cockType == CockTypesEnum.FOX) counter++;
        }
        return counter;
    }

    public dragonCocks(): number { // How many dragonCocks?
        return countCocksOfType(CockTypesEnum.DRAGON);
    }

    public foxCocks(): number { // How many foxCocks
        return dogCocks();
    }

    public horseCocks(): number { // How many horsecocks?
        return countCocksOfType(CockTypesEnum.HORSE);
    }

    public kangaCocks(): number { // How many kangawangs?
        return countCocksOfType(CockTypesEnum.KANGAROO);
    }

    public lizardCocks(): number { // How many lizard/snake-cocks?
        return countCocksOfType(CockTypesEnum.LIZARD);
    }

    public normalCocks(): number { // How many normalCocks?
        return countCocksOfType(CockTypesEnum.HUMAN);
    }

    public tentacleCocks(): number { // How many tentaclecocks?
        return countCocksOfType(CockTypesEnum.TENTACLE);
    }

    public findFirstCockType(ctype: CockTypesEnum): number {
        let index: number = 0;
        if (cocks[index].cockType == ctype)
            return index;
        while (index < cocks.length) {
            index++;
            if (cocks[index].cockType == ctype)
                return index;
        }
        // trace("Creature.findFirstCockType ERROR - searched for cocktype: " + ctype + " and could not find it.");
        return 0;
    }

    /*public function findFirstCockType(type:Number = 0):Number
    {
        var index:Number = 0;
        if (cocks[index].cockType == type)
            return index;
        while (index < cocks.length)
        {
            index++;
            if (cocks[index].cockType == type)
                return index;
        }
        //trace("Creature.findFirstCockType ERROR - searched for cocktype: " + type + " and could not find it.");
        return 0;
    }*/

    // Change first normal cock to horsecock!
    // Return number of affected cock, otherwise -1
    public addHorseCock(): number {
        let counter: number = cocks.length;
        while (counter > 0) {
            counter--;
            // Human - > horse
            if (cocks[counter].cockType == CockTypesEnum.HUMAN) {
                cocks[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Dog - > horse
            if (cocks[counter].cockType == CockTypesEnum.DOG) {
                cocks[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Tentacle - > horse
            if (cocks[counter].cockType == CockTypesEnum.TENTACLE) {
                cocks[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Demon -> horse
            if (cocks[counter].cockType == CockTypesEnum.DEMON) {
                cocks[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Catch-all
            if (cocks[counter].cockType.Index > 4) {
                cocks[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
        }
        return -1;
    }

    // TODO Seriously wtf. 1500+ calls to cockTotal, 340+ call to totalCocks. I'm scared to touch either.
    // How many cocks?
    public cockTotal(): number {
        return (cocks.length);
    }

    // Alternate
    public totalCocks(): number {
        return (cocks.length);
    }

    // BOolean alternate
    public hasCock(): boolean {
        return cocks.length >= 1;

    }

    public hasSockRoom(): boolean {
        let index: number = cocks.length;
        while (index > 0) {
            index--;
            if (cocks[index].sock == "")
                return true;
        }
        return false;
    }

    // Deprecated
    public hasSock(arg: string = ""): boolean {
        let index: number = cocks.length;

        while (index > 0) {
            index--;
            if (cocks[index].sock != "") {
                if (arg == "" || cocks[index].sock == arg)
                    return true;
            }
        }
        return false;
    }
    public countCockSocks(type: string): number {
        let count: number = 0;

        for (const i = 0; i < cocks.length; i++) {
            if (cocks[i].sock == type) {
                count++;
            }
        }
        trace("countCockSocks found " + count + " " + type);
        return count;
    }

    public canAutoFellate(): boolean {
        if (!hasCock())
            return false;
        return (cocks[0].cockLength >= 20);
    }

    // PC can fly?
    public canFly(): boolean {
        // web also makes false!
        if (findStatusAffect(StatusAffects.Web) >= 0)
            return false;
        return _wingType == 2 || _wingType == 7 || _wingType == 9 || _wingType == 11 || _wingType == 12;

    }

    // check for vagoo
    public hasVagina(): boolean {
        return vaginas.length > 0;

    }

    public hasVirginVagina(): boolean {
        if (vaginas.length > 0)
            return vaginas[0].virgin;
        return false;
    }

    public genderText(male: string = "man", female: string = "woman", futa: string = "herm", eunuch: string = "eunuch"): string {
        if (vaginas.length > 0) {
            if (cocks.length > 0) return futa;
            return female;
        }
        else if (cocks.length > 0) {
            return male;
        }
        return eunuch;
    }

    public manWoman(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "Futa";
                else
                    return "futa";
            }
            else {
                if (caps)
                    return "Man";
                else
                    return "man";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "Woman";
                else
                    return "woman";
            }
            else {
                if (caps)
                    return "Eunuch";
                else
                    return "eunuch";
            }
        }
    }

    public guyGirl(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "Girl";
                else
                    return "girl";
            }
            else {
                if (caps)
                    return "Guy";
                else
                    return "guy";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "Girl";
                else
                    return "girl";
            }
            else {
                if (biggestTitSize() >= 3) {
                    if (caps)
                        return "Girl";
                    else
                        return "girl";
                }
                if (caps)
                    return "Guy";
                else
                    return "guy";
            }
        }
    }

    public mfn(male: string, female: string, neuter: string): string {
        if (gender == 0)
            return neuter;
        else
            return mf(male, female);
    }

    public mf(male: string, female: string): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina())
                return female;
            else
                return male;
        }
        else {
            if (hasVagina())
                return female;
            else {
                if (biggestTitSize() >= 3)
                    return female;
                else
                    return male;
            }
        }
    }

    public boyGirl(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "Girl";
                else
                    return "girl";
            }
            else {
                if (caps)
                    return "Boy";
                else
                    return "boy";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "Girl";
                else
                    return "girl";
            }
            else {
                if (biggestTitSize() >= 3) {
                    if (caps)
                        return "Girl";
                    else
                        return "girl";
                }
                if (caps)
                    return "Boy";
                else
                    return "boy";
            }
        }
    }

    public heShe(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "She";
                else
                    return "she";
            }
            else {
                if (caps)
                    return "He";
                else
                    return "he";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "She";
                else
                    return "she";
            }
            else {
                if (biggestTitSize() >= 3) {
                    if (caps)
                        return "She";
                    else
                        return "she";
                }
                if (caps)
                    return "It";
                else
                    return "it";
            }
        }
    }

    public himHer(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "Her";
                else
                    return "her";
            }
            else {
                if (caps)
                    return "Him";
                else
                    return "him";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "Her";
                else
                    return "her";
            }
            else {
                if (biggestTitSize() >= 3) {
                    if (caps)
                        return "Her";
                    else
                        return "her";
                }
                if (caps)
                    return "Him";
                else
                    return "him";
            }
        }
    }

    public maleFemale(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "Female";
                else
                    return "female";
            }
            else {
                if (caps)
                    return "Male";
                else
                    return "male";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "Female";
                else
                    return "female";
            }
            else {
                if (biggestTitSize() >= 3) {
                    if (caps)
                        return "Female";
                    else
                        return "female";
                }
                if (caps)
                    return "Male";
                else
                    return "male";
            }
        }
    }

    public hisHer(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            if (hasVagina()) {
                if (caps)
                    return "Her";
                else
                    return "her";
            }
            else {
                if (caps)
                    return "Him";
                else
                    return "him";
            }
        }
        else {
            if (hasVagina()) {
                if (caps)
                    return "Her";
                else
                    return "her";
            }
            else {
                if (biggestTitSize() >= 3) {
                    if (caps)
                        return "Her";
                    else
                        return "her";
                }
                if (caps)
                    return "Him";
                else
                    return "him";
            }
        }
    }

    // sir/madam
    public sirMadam(caps: boolean = false): string {
        // Dicks?
        if (totalCocks() > 0) {
            // herm
            if (hasVagina()) {
                // Boy unless has tits!
                if (biggestTitSize() >= 2) {
                    if (caps)
                        return "Madam";
                    else
                        return "madam";
                }
                else {
                    if (caps)
                        return "Sir";
                    else
                        return "sir";
                }
            }
            // Dude
            else {
                if (caps)
                    return "Sir";
                else
                    return "sir";
            }
        }
        // No dicks
        else {
            // Girl
            if (hasVagina()) {
                if (caps)
                    return "Madam";
                else
                    return "madam";
            }
            // Eunuch!
            else {
                // Called girl if has tits!
                if (biggestTitSize() >= 2) {
                    if (caps)
                        return "Madam";
                    else
                        return "madam";
                }
                // Called dude with no tits
                else {
                    if (caps)
                        return "Sir";
                    else
                        return "sir";
                }
            }
        }
    }

    // Create a cock. Default type is HUMAN
    public createCock(clength: number = 5.5, cthickness: number = 1, ctype: CockTypesEnum = null): boolean {
        if (ctype == null) ctype = CockTypesEnum.HUMAN;
        if (cocks.length >= 10)
            return false;
        const newCock: Cock = new Cock(clength, cthickness, ctype);
        // var newCock:cockClass = new cockClass();
        cocks.push(newCock);
        cocks[cocks.length - 1].cockThickness = cthickness;
        cocks[cocks.length - 1].cockLength = clength;
        return true;
    }

    // create vagoo
    public createVagina(virgin: boolean = true, vaginalWetness: number = 1, vaginalLooseness: number = 0): boolean {
        if (vaginas.length >= 2)
            return false;
        const newVagina: VaginaClass = new VaginaClass(vaginalWetness, vaginalLooseness, virgin);
        vaginas.push(newVagina);
        return true;
    }

    // create a row of breasts
    public createBreastRow(size: number = 0, nipplesPerBreast: number = 1): boolean {
        if (breastRows.length >= 10)
            return false;
        const newBreastRow: BreastRowClass = new BreastRowClass();
        newBreastRow.breastRating = size;
        newBreastRow.nipplesPerBreast = nipplesPerBreast;
        breastRows.push(newBreastRow);
        return true;
    }

    public genderCheck(): void {
        if (hasCock() && hasVagina())
            gender = GENDER_HERM;
        else if (hasCock())
            gender = GENDER_MALE;
        else if (hasVagina())
            gender = GENDER_FEMALE;
        else
            gender = GENDER_NONE;
    }

    // Remove cocks
    public removeCock(arraySpot: number, totalRemoved: number): void {
        // Various Errors preventing action
        if (arraySpot < 0 || totalRemoved <= 0) {
            // trace("ERROR: removeCock called but arraySpot is negative or totalRemoved is 0.");
            return;
        }
        if (cocks.length == 0) {
            // trace("ERROR: removeCock called but cocks do not exist.");
        }
        else {
            if (arraySpot > cocks.length - 1) {
                // trace("ERROR: removeCock failed - array location is beyond the bounds of the array.");
            }
            else {
                try {
                    const cock: Cock = cocks[arraySpot];
                    if (cock.sock == "viridian") {
                        removePerk(PerkLib.LustyRegeneration);
                    }
                    else if (cock.sock == "cockring") {
                        let numRings: number = 0;
                        for (const i = 0; i < cocks.length; i++) {
                            if (cocks[i].sock == "cockring") numRings++;
                        }

                        if (numRings == 0) removePerk(PerkLib.PentUp);
                        else setPerkValue(PerkLib.PentUp, 1, 5 + (numRings * 5));
                    }
                    cocks.splice(arraySpot, totalRemoved);
                }
                catch (e: Error) {
                    trace("Argument error in Creature[" + this._short + "]: " + e.message);
                }
                // trace("Attempted to remove " + totalRemoved + " cocks.");
            }
        }
        genderCheck();
    }

    // REmove vaginas
    public removeVagina(arraySpot: number = 0, totalRemoved: number = 1): void {
        // Various Errors preventing action
        if (arraySpot < -1 || totalRemoved <= 0) {
            // trace("ERROR: removeVagina called but arraySpot is negative or totalRemoved is 0.");
            return;
        }
        if (vaginas.length == 0) {
            // trace("ERROR: removeVagina called but cocks do not exist.");
        }
        else {
            if (arraySpot > vaginas.length - 1) {
                // trace("ERROR: removeVagina failed - array location is beyond the bounds of the array.");
            }
            else {
                vaginas.splice(arraySpot, totalRemoved);
                // trace("Attempted to remove " + totalRemoved + " vaginas.");
            }
        }
        genderCheck();
    }

    // Remove a breast row
    public removeBreastRow(arraySpot: number, totalRemoved: number): void {
        // Various Errors preventing action
        if (arraySpot < -1 || totalRemoved <= 0) {
            // trace("ERROR: removeBreastRow called but arraySpot is negative or totalRemoved is 0.");
            return;
        }
        if (breastRows.length == 0) {
            // trace("ERROR: removeBreastRow called but cocks do not exist.");
        }
        else if (breastRows.length == 1 || breastRows.length - totalRemoved < 1) {
            // trace("ERROR: Removing the current breast row would break the Creature classes assumptions about breastRow contents.");
        }
        else {
            if (arraySpot > breastRows.length - 1) {
                // trace("ERROR: removeBreastRow failed - array location is beyond the bounds of the array.");
            }
            else {
                breastRows.splice(arraySpot, totalRemoved);
                // trace("Attempted to remove " + totalRemoved + " breastRows.");
            }
        }
    }

    // This is placeholder shit whilst I work out a good way of BURNING ENUM TO THE FUCKING GROUND
    // and replacing it with something that will slot in and work with minimal changes and not be
    // A FUCKING SHITSTAIN when it comes to intelligent de/serialization.
    public fixFuckingCockTypesEnum(): void {
        if (this.cocks.length > 0) {
            for (const i = 0; i < this.cocks.length; i++) {
                this.cocks[i].cockType = CockTypesEnum.ParseConstantByIndex(this.cocks[i].cockType.Index);
            }
        }
    }

    public buttChangeNoDisplay(cArea: number): boolean {
        let stretched: boolean = false;
        // cArea > capacity = autostreeeeetch half the time.
        if (cArea >= analCapacity() && rand(2) == 0) {
            if (ass.analLooseness >= 5) { }
            else ass.analLooseness++;
            stretched = true;
            // Reset butt stretchin recovery time
            if (findStatusAffect(StatusAffects.ButtStretched) >= 0) changeStatusValue(StatusAffects.ButtStretched, 1, 0);
        }
        // If within top 10% of capacity, 25% stretch
        if (cArea < analCapacity() && cArea >= .9 * analCapacity() && rand(4) == 0) {
            ass.analLooseness++;
            stretched = true;
        }
        // if within 75th to 90th percentile, 10% stretch
        if (cArea < .9 * analCapacity() && cArea >= .75 * analCapacity() && rand(10) == 0) {
            ass.analLooseness++;
            stretched = true;
        }
        // Anti-virgin
        if (ass.analLooseness == 0) {
            ass.analLooseness++;
            stretched = true;
        }
        // Delay un-stretching
        if (cArea >= .5 * analCapacity()) {
            // Butt Stretched used to determine how long since last enlargement
            if (findStatusAffect(StatusAffects.ButtStretched) < 0) createStatusAffect(StatusAffects.ButtStretched, 0, 0, 0, 0);
            // Reset the timer on it to 0 when restretched.
            else changeStatusValue(StatusAffects.ButtStretched, 1, 0);
        }
        if (stretched) {
            trace("BUTT STRETCHED TO " + (ass.analLooseness) + ".");
        }
        return stretched;
    }

    public cuntChangeNoDisplay(cArea: number): boolean {
        if (vaginas.length == 0) return false;
        let stretched: boolean = false;
        if (findPerk(PerkLib.FerasBoonMilkingTwat) < 0 || vaginas[0].vaginalLooseness <= VAGINA_LOOSENESS_NORMAL) {
            // cArea > capacity = autostreeeeetch.
            if (cArea >= vaginalCapacity()) {
                if (vaginas[0].vaginalLooseness >= VAGINA_LOOSENESS_LEVEL_CLOWN_CAR) { }
                else vaginas[0].vaginalLooseness++;
                stretched = true;
            }
            // If within top 10% of capacity, 50% stretch
            else if (cArea >= .9 * vaginalCapacity() && rand(2) == 0) {
                vaginas[0].vaginalLooseness++;
                stretched = true;
            }
            // if within 75th to 90th percentile, 25% stretch
            else if (cArea >= .75 * vaginalCapacity() && rand(4) == 0) {
                vaginas[0].vaginalLooseness++;
                stretched = true;
            }
        }
        // If virgin
        if (vaginas[0].virgin) {
            vaginas[0].virgin = false;
        }
        // Delay anti-stretching
        if (cArea >= .5 * vaginalCapacity()) {
            // Cunt Stretched used to determine how long since last enlargement
            if (findStatusAffect(StatusAffects.CuntStretched) < 0) createStatusAffect(StatusAffects.CuntStretched, 0, 0, 0, 0);
            // Reset the timer on it to 0 when restretched.
            else changeStatusValue(StatusAffects.CuntStretched, 1, 0);
        }
        if (stretched) {
            trace("CUNT STRETCHED TO " + (vaginas[0].vaginalLooseness) + ".");
        }
        return stretched;
    }

    public get inHeat(): boolean {
        return findStatusAffect(StatusAffects.Heat) >= 0;
    }

    public get inRut(): boolean {
        return findStatusAffect(StatusAffects.Rut) >= 0;
    }

    public bonusFertility(): number {
        let counter: number = 0;
        if (inHeat)
            counter += statusAffectv1(StatusAffects.Heat);
        if (findPerk(PerkLib.FertilityPlus) >= 0)
            counter += 15;
        if (findPerk(PerkLib.MaraesGiftFertility) >= 0)
            counter += 50;
        if (findPerk(PerkLib.FerasBoonBreedingBitch) >= 0)
            counter += 30;
        if (findPerk(PerkLib.MagicalFertility) >= 0)
            counter += 10;
        counter += perkv2(PerkLib.ElvenBounty);
        counter += perkv1(PerkLib.PiercedFertite);
        return counter;
    }

    public totalFertility(): number {
        return (bonusFertility() + fertility);
    }

    public isBiped(): boolean {
        // Naga/Centaur
        if (lowerBody == LOWER_BODY_TYPE_NAGA || lowerBody == LOWER_BODY_TYPE_CENTAUR)
            return false;
        if (lowerBody == LOWER_BODY_TYPE_GOO || lowerBody == LOWER_BODY_TYPE_PONY)
            return false;
        return true;
    }

    public isNaga(): boolean {
        if (lowerBody == LOWER_BODY_TYPE_NAGA)
            return true;
        return false;
    }

    public isTaur(): boolean {
        if (lowerBody == LOWER_BODY_TYPE_CENTAUR || lowerBody == LOWER_BODY_TYPE_PONY)
            return true;
        return false;
    }

    public isDrider(): boolean {
        return (lowerBody == LOWER_BODY_TYPE_DRIDER_LOWER_BODY);
    }

    public isGoo(): boolean {
        if (lowerBody == LOWER_BODY_TYPE_GOO)
            return true;
        return false;
    }

    public legs(): string {
        let select: number = 0;
        // lowerBody:
        // 0 - normal
        if (lowerBody == 0)
            return "legs";
        // 1 - hooves
        if (lowerBody == 1)
            return "legs";
        // 2 - paws
        if (lowerBody == 2)
            return "legs";
        // 3 - snakelike body
        if (lowerBody == 3)
            return "snake-like coils";
        // 4 - centaur!
        if (lowerBody == 4)
            return "four legs";
        // 8 - goo shit
        if (lowerBody == 8)
            return "mounds of goo";
        // PONY
        if (lowerBody == 11)
            return "cute pony-legs";
        // Bunnah!
        if (lowerBody == 12) {
            select = Math.floor(Math.random() * (5));
            if (select == 0)
                return "fuzzy, bunny legs";
            else if (select == 1)
                return "fur-covered legs";
            else if (select == 2)
                return "furry legs";
            else
                return "legs";
        }
        if (lowerBody == 13) {
            select = Math.floor(Math.random() * (5));
            if (select == 0)
                return "bird-like legs";
            else if (select == 1)
                return "feathered legs";
            else
                return "legs";
        }
        if (lowerBody == 17) {
            select = Math.floor(Math.random() * (4));
            if (select == 0)
                return "fox-like legs";
            else if (select == 1)
                return "legs";
            else if (select == 2)
                return "legs";
            else
                return "vulpine legs";
        }
        if (lowerBody == 19) {
            select = Math.floor(Math.random() * (4));
            if (select == 0)
                return "raccoon-like legs";
            else
                return "legs";
        }

        return "legs";
    }

    public skinFurScales(): string {
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

    public leg(): string {
        let select: number = 0;
        // lowerBody:
        // 0 - normal
        if (lowerBody == 0)
            return "leg";
        // 1 - hooves
        if (lowerBody == 1)
            return "leg";
        // 2 - paws
        if (lowerBody == 2)
            return "leg";
        // 3 - snakelike body
        if (lowerBody == 3)
            return "snake-tail";
        // 4 - centaur!
        if (lowerBody == 4)
            return "equine leg";
        // 8 - goo shit
        if (lowerBody == 8)
            return "mound of goo";
        // PONY
        if (lowerBody == 11)
            return "cartoonish pony-leg";
        // BUNNAH
        if (lowerBody == 12) {
            select = Math.random() * (5);
            if (select == 0)
                return "fuzzy, bunny leg";
            else if (select == 1)
                return "fur-covered leg";
            else if (select == 2)
                return "furry leg";
            else
                return "leg";
        }
        if (lowerBody == 13) {
            select = Math.floor(Math.random() * (5));
            if (select == 0)
                return "bird-like leg";
            else if (select == 1)
                return "feathered leg";
            else
                return "leg";
        }
        if (lowerBody == 17) {
            select = Math.floor(Math.random() * (4));
            if (select == 0)
                return "fox-like leg";
            else if (select == 1)
                return "leg";
            else if (select == 2)
                return "leg";
            else
                return "vulpine leg";
        }
        if (lowerBody == 19) {
            select = Math.floor(Math.random() * (4));
            if (select == 0)
                return "raccoon-like leg";
            else
                return "leg";
        }
        return "leg";
    }

    public feet(): string {
        let select: number = 0;
        // lowerBody:
        // 0 - normal
        if (lowerBody == 0)
            return "feet";
        // 1 - hooves
        if (lowerBody == 1)
            return "hooves";
        // 2 - paws
        if (lowerBody == 2)
            return "paws";
        // 3 - snakelike body
        if (lowerBody == 3)
            return "coils";
        // 4 - centaur!
        if (lowerBody == 4)
            return "hooves";
        // 5 - demonic heels
        if (lowerBody == 5)
            return "demonic high-heels";
        // 6 - demonic claws
        if (lowerBody == 6)
            return "demonic foot-claws";
        // 8 - goo shit
        if (lowerBody == 8)
            return "slimey cillia";
        if (lowerBody == 11)
            return "flat pony-feet";
        // BUNNAH
        if (lowerBody == 12) {
            select = rand(5);
            if (select == 0)
                return "large bunny feet";
            else if (select == 1)
                return "rabbit feet";
            else if (select == 2)
                return "large feet";
            else
                return "feet";
        }
        if (lowerBody == 13) {
            select = Math.floor(Math.random() * (5));
            if (select == 0)
                return "taloned feet";
            else
                return "feet";
        }
        if (lowerBody == 14)
            return "foot-paws";
        if (lowerBody == 17) {
            select = rand(4);
            if (select == 0)
                return "paws";
            else if (select == 1)
                return "soft, padded paws";
            else if (select == 2)
                return "fox-like feet";
            else
                return "paws";
        }
        if (lowerBody == 19) {
            select = Math.floor(Math.random() * (3));
            if (select == 0)
                return "raccoon-like feet";
            else if (select == 1)
                return "long-toed paws";
            else if (select == 2)
                return "feet";
            else
                return "paws";
        }
        return "feet";
    }

    public foot(): string {
        let select: number = 0;
        // lowerBody:
        // 0 - normal
        if (lowerBody == 0)
            return "foot";
        // 1 - hooves
        if (lowerBody == 1)
            return "hoof";
        // 2 - paws
        if (lowerBody == 2)
            return "paw";
        // 3 - snakelike body
        if (lowerBody == 3)
            return "coiled tail";
        // 4 - centaur!
        if (lowerBody == 4)
            return "hoof";
        // 8 - goo shit
        if (lowerBody == 8)
            return "slimey undercarriage";
        // PONY
        if (lowerBody == 11)
            return "flat pony-foot";
        // BUNNAH
        if (lowerBody == 12) {
            select = Math.random() * (5);
            if (select == 0)
                return "large bunny foot";
            else if (select == 1)
                return "rabbit foot";
            else if (select == 2)
                return "large foot";
            else
                return "foot";
        }
        if (lowerBody == 13) {
            select = Math.floor(Math.random() * (5));
            if (select == 0)
                return "taloned foot";
            else
                return "foot";
        }
        if (lowerBody == 17) {
            select = Math.floor(Math.random() * (4));
            if (select == 0)
                return "paw";
            else if (select == 1)
                return "soft, padded paw";
            else if (select == 2)
                return "fox-like foot";
            else
                return "paw";
        }
        if (lowerBody == 14)
            return "foot-paw";
        if (lowerBody == 19) {
            select = Math.floor(Math.random() * (3));
            if (select == 0)
                return "raccoon-like foot";
            else if (select == 1)
                return "long-toed paw";
            else if (select == 2)
                return "foot";
            else
                return "paw";
        }
        return "foot";
    }

    public canOvipositSpider(): boolean {
        if (eggs() >= 10 && findPerk(PerkLib.SpiderOvipositor) >= 0 && isDrider() && tailType == 5)
            return true;
        return false;
    }

    public canOvipositBee(): boolean {
        if (eggs() >= 10 && findPerk(PerkLib.BeeOvipositor) >= 0 && tailType == 6)
            return true;
        return false;
    }

    public canOviposit(): boolean {
        if (canOvipositSpider() || canOvipositBee())
            return true;
        return false;
    }

    public eggs(): number {
        if (findPerk(PerkLib.SpiderOvipositor) < 0 && findPerk(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (findPerk(PerkLib.SpiderOvipositor) >= 0)
            return perkv1(PerkLib.SpiderOvipositor);
        else
            return perkv1(PerkLib.BeeOvipositor);
    }

    public addEggs(arg: number = 0): number {
        if (findPerk(PerkLib.SpiderOvipositor) < 0 && findPerk(PerkLib.BeeOvipositor) < 0)
            return -1;
        else {
            if (findPerk(PerkLib.SpiderOvipositor) >= 0) {
                addPerkValue(PerkLib.SpiderOvipositor, 1, arg);
                if (eggs() > 50)
                    setPerkValue(PerkLib.SpiderOvipositor, 1, 50);
                return perkv1(PerkLib.SpiderOvipositor);
            }
            else {
                addPerkValue(PerkLib.BeeOvipositor, 1, arg);
                if (eggs() > 50)
                    setPerkValue(PerkLib.BeeOvipositor, 1, 50);
                return perkv1(PerkLib.BeeOvipositor);
            }
        }
    }

    public dumpEggs(): void {
        if (findPerk(PerkLib.SpiderOvipositor) < 0 && findPerk(PerkLib.BeeOvipositor) < 0)
            return;
        setEggs(0);
        // Sets fertile eggs = regular eggs (which are 0)
        fertilizeEggs();
    }

    public setEggs(arg: number = 0): number {
        if (findPerk(PerkLib.SpiderOvipositor) < 0 && findPerk(PerkLib.BeeOvipositor) < 0)
            return -1;
        else {
            if (findPerk(PerkLib.SpiderOvipositor) >= 0) {
                setPerkValue(PerkLib.SpiderOvipositor, 1, arg);
                if (eggs() > 50)
                    setPerkValue(PerkLib.SpiderOvipositor, 1, 50);
                return perkv1(PerkLib.SpiderOvipositor);
            }
            else {
                setPerkValue(PerkLib.BeeOvipositor, 1, arg);
                if (eggs() > 50)
                    setPerkValue(PerkLib.BeeOvipositor, 1, 50);
                return perkv1(PerkLib.BeeOvipositor);
            }
        }
    }

    public fertilizedEggs(): number {
        if (findPerk(PerkLib.SpiderOvipositor) < 0 && findPerk(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (findPerk(PerkLib.SpiderOvipositor) >= 0)
            return perkv2(PerkLib.SpiderOvipositor);
        else
            return perkv2(PerkLib.BeeOvipositor);
    }

    public fertilizeEggs(): number {
        if (findPerk(PerkLib.SpiderOvipositor) < 0 && findPerk(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (findPerk(PerkLib.SpiderOvipositor) >= 0)
            setPerkValue(PerkLib.SpiderOvipositor, 2, eggs());
        else
            setPerkValue(PerkLib.BeeOvipositor, 2, eggs());
        return fertilizedEggs();
    }

    public breastCup(rowNum: number): string {
        return Appearance.breastCup(breastRows[rowNum].breastRating);
        // Should change this to make use of Appearance			return BreastStore.cupSize(breastRows[rowNum].breastRating);
        /*
        if (breastRows[rowNum].breastRating < 1)
            return "flat, manly breast";
        else if (breastRows[rowNum].breastRating < 2)
            return "A-cup";
        else if (breastRows[rowNum].breastRating < 3)
            return "B-cup";
        else if (breastRows[rowNum].breastRating < 4)
            return "C-cup";
        else if (breastRows[rowNum].breastRating < 5)
            return "D-cup";
        else if (breastRows[rowNum].breastRating < 6)
            return "DD-cup";
        else if (breastRows[rowNum].breastRating < 7)
            return "big DD-cup";
        else if (breastRows[rowNum].breastRating < 8)
            return "E-cup";
        else if (breastRows[rowNum].breastRating < 9)
            return "big E-cup";
        else if (breastRows[rowNum].breastRating < 10)
            return "EE-cup";
        else if (breastRows[rowNum].breastRating < 11)
            return "big EE-cup";
        else if (breastRows[rowNum].breastRating < 12)
            return "F-cup";
        else if (breastRows[rowNum].breastRating < 13)
            return "big F-cup";
        else if (breastRows[rowNum].breastRating < 14)
            return "FF-cup";
        else if (breastRows[rowNum].breastRating < 15)
            return "big FF-cup";
        else if (breastRows[rowNum].breastRating < 16)
            return "G-cup";
        else if (breastRows[rowNum].breastRating < 17)
            return "big G-cup";
        else if (breastRows[rowNum].breastRating < 18)
            return "GG-cup";
        else if (breastRows[rowNum].breastRating < 19)
            return "big GG-cup";
        else if (breastRows[rowNum].breastRating < 20)
            return "H-cup";
        else if (breastRows[rowNum].breastRating < 21)
            return "big H-cup";
        else if (breastRows[rowNum].breastRating < 22)
            return "HH-cup";
        else if (breastRows[rowNum].breastRating < 23)
            return "big HH-cup";
        else if (breastRows[rowNum].breastRating < 24)
            return "HHH-cup";
        else if (breastRows[rowNum].breastRating < 25)
            return "I-cup";
        else if (breastRows[rowNum].breastRating < 26)
            return "big I-cup";
        else if (breastRows[rowNum].breastRating < 27)
            return "II-cup";
        else if (breastRows[rowNum].breastRating < 28)
            return "big II-cup";
        else if (breastRows[rowNum].breastRating < 29)
            return "J-cup";
        else if (breastRows[rowNum].breastRating < 30)
            return "big J-cup";
        else if (breastRows[rowNum].breastRating < 31)
            return "JJ-cup";
        else if (breastRows[rowNum].breastRating < 32)
            return "big JJ-cup";
        else if (breastRows[rowNum].breastRating < 33)
            return "K-cup";
        else if (breastRows[rowNum].breastRating < 34)
            return "big K-cup";
        else if (breastRows[rowNum].breastRating < 35)
            return "KK-cup";
        else if (breastRows[rowNum].breastRating < 36)
            return "big KK-cup";
        else if (breastRows[rowNum].breastRating < 37)
            return "L-cup";
        else if (breastRows[rowNum].breastRating < 38)
            return "big L-cup";
        else if (breastRows[rowNum].breastRating < 39)
            return "LL-cup";
        else if (breastRows[rowNum].breastRating < 40)
            return "big LL-cup";
        else if (breastRows[rowNum].breastRating < 41)
            return "M-cup";
        else if (breastRows[rowNum].breastRating < 42)
            return "big M-cup";
        else if (breastRows[rowNum].breastRating < 43)
            return "MM-cup";
        else if (breastRows[rowNum].breastRating < 44)
            return "big MM-cup";
        else if (breastRows[rowNum].breastRating < 45)
            return "MMM-cup";
        else if (breastRows[rowNum].breastRating < 46)
            return "large MMM-cup";
        else if (breastRows[rowNum].breastRating < 47)
            return "N-cup";
        else if (breastRows[rowNum].breastRating < 48)
            return "large N-cup";
        else if (breastRows[rowNum].breastRating < 49)
            return "NN-cup";
        else if (breastRows[rowNum].breastRating < 50)
            return "large NN-cup";
        else if (breastRows[rowNum].breastRating < 51)
            return "O-cup";
        else if (breastRows[rowNum].breastRating < 52)
            return "large O-cup";
        else if (breastRows[rowNum].breastRating < 53)
            return "OO-cup";
        else if (breastRows[rowNum].breastRating < 54)
            return "large OO-cup";
        else if (breastRows[rowNum].breastRating < 55)
            return "P-cup";
        else if (breastRows[rowNum].breastRating < 56)
            return "large P-cup";
        else if (breastRows[rowNum].breastRating < 57)
            return "PP-cup";
        else if (breastRows[rowNum].breastRating < 58)
            return "large PP-cup";
        else if (breastRows[rowNum].breastRating < 59)
            return "Q-cup";
        else if (breastRows[rowNum].breastRating < 60)
            return "large Q-cup";
        else if (breastRows[rowNum].breastRating < 61)
            return "QQ-cup";
        else if (breastRows[rowNum].breastRating < 62)
            return "large QQ-cup";
        else if (breastRows[rowNum].breastRating < 63)
            return "R-cup";
        else if (breastRows[rowNum].breastRating < 64)
            return "large R-cup";
        else if (breastRows[rowNum].breastRating < 65)
            return "RR-cup";
        else if (breastRows[rowNum].breastRating < 66)
            return "large RR-cup";
        else if (breastRows[rowNum].breastRating < 67)
            return "S-cup";
        else if (breastRows[rowNum].breastRating < 68)
            return "large S-cup";
        else if (breastRows[rowNum].breastRating < 69)
            return "SS-cup";
        else if (breastRows[rowNum].breastRating < 70)
            return "large SS-cup";
        else if (breastRows[rowNum].breastRating < 71)
            return "T-cup";
        else if (breastRows[rowNum].breastRating < 72)
            return "large T-cup";
        else if (breastRows[rowNum].breastRating < 73)
            return "TT-cup";
        else if (breastRows[rowNum].breastRating < 74)
            return "large TT-cup";
        else if (breastRows[rowNum].breastRating < 75)
            return "U-cup";
        else if (breastRows[rowNum].breastRating < 76)
            return "large U-cup";
        else if (breastRows[rowNum].breastRating < 77)
            return "UU-cup";
        else if (breastRows[rowNum].breastRating < 78)
            return "large UU-cup";
        else if (breastRows[rowNum].breastRating < 79)
            return "V-cup";
        else if (breastRows[rowNum].breastRating < 80)
            return "large V-cup";
        else if (breastRows[rowNum].breastRating < 81)
            return "VV-cup";
        else if (breastRows[rowNum].breastRating < 82)
            return "large VV-cup";
        else if (breastRows[rowNum].breastRating < 83)
            return "W-cup";
        else if (breastRows[rowNum].breastRating < 84)
            return "large W-cup";
        else if (breastRows[rowNum].breastRating < 85)
            return "WW-cup";
        else if (breastRows[rowNum].breastRating < 86)
            return "large WW-cup";
        else if (breastRows[rowNum].breastRating < 87)
            return "X-cup";
        else if (breastRows[rowNum].breastRating < 88)
            return "large X-cup";
        else if (breastRows[rowNum].breastRating < 89)
            return "XX-cup";
        else if (breastRows[rowNum].breastRating < 90)
            return "large XX-cup";
        else if (breastRows[rowNum].breastRating < 91)
            return "Y-cup";
        else if (breastRows[rowNum].breastRating < 92)
            return "large Y-cup";
        else if (breastRows[rowNum].breastRating < 93)
            return "YY-cup";
        else if (breastRows[rowNum].breastRating < 94)
            return "large YY-cup";
        else if (breastRows[rowNum].breastRating < 95)
            return "Z-cup";
        else if (breastRows[rowNum].breastRating < 96)
            return "large Z-cup";
        else if (breastRows[rowNum].breastRating < 97)
            return "ZZ-cup";
        else if (breastRows[rowNum].breastRating < 98)
            return "large ZZ-cup";
        else if (breastRows[rowNum].breastRating < 99)
            return "ZZZ-cup";
        else if (breastRows[rowNum].breastRating < 100)
            return "large ZZZ-cup";
        // else if(breastRows[rowNum].breastRating < 20) return "watermelon-sized cup";
        // else if(breastRows[rowNum].breastRating < 35) return "tent-sized cup";
        // else if(breastRows[rowNum].breastRating < 60) return "truck-sized cup";
        // else if(breastRows[rowNum].breastRating < 100) return "parachute-sized cup";
        else
            return "game-breaking cup";
        return "Error-Cup (breastSize Error Number: " + breastRows[rowNum].breastRating;
        //watermelon-sized
        //tent sized
        //truck sized
        //parachute sized
        //pool-sized
        //hanger-sized
        //town-sized
        //city-sized
        //state-sized
        //continent-sized
        //planet-sized
        //WTFISTHISWHYISNTITGAMEOVER?
        */
    }

    public bRows(): number {
        return breastRows.length;
    }

    public totalBreasts(): number {
        let counter: number = breastRows.length;
        let total: number = 0;
        while (counter > 0) {
            counter--;
            total += breastRows[counter].breasts;
        }
        return total;
    }

    public totalNipples(): number {
        let counter: number = breastRows.length;
        let total: number = 0;
        while (counter > 0) {
            counter--;
            total += breastRows[counter].nipplesPerBreast * breastRows[counter].breasts;
        }
        return total;
    }

    public smallestTitSize(): number {
        if (breastRows.length == 0)
            return -1;
        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].breastRating > breastRows[counter].breastRating)
                index = counter;
        }
        return breastRows[index].breastRating;
    }

    public smallestTitRow(): number {
        if (breastRows.length == 0)
            return -1;
        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].breastRating > breastRows[counter].breastRating)
                index = counter;
        }
        return index;
    }

    public biggestTitRow(): number {
        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].breastRating < breastRows[counter].breastRating)
                index = counter;
        }
        return index;
    }

    public averageBreastSize(): number {
        let counter: number = breastRows.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += breastRows[counter].breastRating;
        }
        if (breastRows.length == 0)
            return 0;
        return (average / breastRows.length);
    }

    public averageCockThickness(): number {
        let counter: number = cocks.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += cocks[counter].cockThickness;
        }
        if (cocks.length == 0)
            return 0;
        return (average / cocks.length);
    }

    public averageNippleLength(): number {
        let counter: number = breastRows.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += (breastRows[counter].breastRating / 10 + .2);
        }
        return (average / breastRows.length);
    }

    public averageVaginalLooseness(): number {
        let counter: number = vaginas.length;
        let average: number = 0;
        // If the player has no vaginas
        if (vaginas.length == 0)
            return 2;
        while (counter > 0) {
            counter--;
            average += vaginas[counter].vaginalLooseness;
        }
        return (average / vaginas.length);
    }

    public averageVaginalWetness(): number {
        // If the player has no vaginas
        if (vaginas.length == 0)
            return 2;
        let counter: number = vaginas.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += vaginas[counter].vaginalWetness;
        }
        return (average / vaginas.length);
    }

    public averageCockLength(): number {
        let counter: number = cocks.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += cocks[counter].cockLength;
        }
        if (cocks.length == 0)
            return 0;
        return (average / cocks.length);
    }

    public canTitFuck(): boolean {
        if (breastRows.length == 0) return false;

        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].breasts < breastRows[counter].breasts && breastRows[counter].breastRating > 3)
                index = counter;
        }
        if (breastRows[index].breasts >= 2 && breastRows[index].breastRating > 3)
            return true;
        return false;
    }

    public mostBreastsPerRow(): number {
        if (breastRows.length == 0) return 2;

        let counter: number = breastRows.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (breastRows[index].breasts < breastRows[counter].breasts)
                index = counter;
        }
        return breastRows[index].breasts;
    }

    public averageNipplesPerBreast(): number {
        let counter: number = breastRows.length;
        let breasts: number = 0;
        let nipples: number = 0;
        while (counter > 0) {
            counter--;
            breasts += breastRows[counter].breasts;
            nipples += breastRows[counter].nipplesPerBreast * breastRows[counter].breasts;
        }
        if (breasts == 0)
            return 0;
        return Math.floor(nipples / breasts);
    }

    public allBreastsDescript(): string {
        return Appearance.allBreastsDescript(this);
    }

    // Simplified these cock descriptors and brought them into the creature class
    public sMultiCockDesc(): string {
        return (cocks.length > 1 ? "one of your " : "your ") + cockMultiLDescriptionShort();
    }

    public SMultiCockDesc(): string {
        return (cocks.length > 1 ? "One of your " : "Your ") + cockMultiLDescriptionShort();
    }

    public oMultiCockDesc(): string {
        return (cocks.length > 1 ? "each of your " : "your ") + cockMultiLDescriptionShort();
    }

    public OMultiCockDesc(): string {
        return (cocks.length > 1 ? "Each of your " : "Your ") + cockMultiLDescriptionShort();
    }

    private cockMultiLDescriptionShort(): string {
        if (cocks.length < 1) {
            CoC_Settings.error("<b>ERROR: NO WANGS DETECTED for cockMultiLightDesc()</b>");
            return "<b>ERROR: NO WANGS DETECTED for cockMultiLightDesc()</b>";
        }
        if (cocks.length == 1) { // For a songle cock return the default description
            return Appearance.cockDescript(this, 0);
        }
        switch (cocks[0].cockType) { // With multiple cocks only use the descriptions for specific cock types if all cocks are of a single type
            case CockTypesEnum.ANEMONE:
            case CockTypesEnum.CAT:
            case CockTypesEnum.DEMON:
            case CockTypesEnum.DISPLACER:
            case CockTypesEnum.DRAGON:
            case CockTypesEnum.HORSE:
            case CockTypesEnum.KANGAROO:
            case CockTypesEnum.LIZARD:
            case CockTypesEnum.TENTACLE:
                if (countCocksOfType(cocks[0].cockType) == cocks.length) return Appearance.cockNoun(cocks[0].cockType) + "s";
                break;
            case CockTypesEnum.DOG:
            case CockTypesEnum.FOX:
                if (dogCocks() == cocks.length) return Appearance.cockNoun(CockTypesEnum.DOG) + "s";
            default:
        }
        return Appearance.cockNoun(CockTypesEnum.HUMAN) + "s";
    }

    public hasSheath(): boolean {
        if (cocks.length == 0) return false;
        for (const x = 0; x < cocks.length; x++) {
            switch (cocks[x].cockType) {
                case CockTypesEnum.CAT:
                case CockTypesEnum.DISPLACER:
                case CockTypesEnum.DOG:
                case CockTypesEnum.FOX:
                case CockTypesEnum.HORSE:
                case CockTypesEnum.KANGAROO:
                    return true; // If there's even one cock of any of these types then return true
                default:
            }
        }
        return false;
    }

    public sheathDescription(): string {
        if (hasSheath()) return "sheath";
        return "base";
    }

    public vaginaDescript(idx: number = 0): string {
        return Appearance.vaginaDescript(this, 0);
    }

    public nippleDescript(rowIdx: number): string {
        return Appearance.nippleDescription(this, rowIdx);
    }

    public chestDesc(): string {
        if (biggestTitSize() < 1) return "chest";
        return Appearance.biggestBreastSizeDescript(this);
        // 			return Appearance.chestDesc(this);
    }

    public allChestDesc(): string {
        if (biggestTitSize() < 1) return "chest";
        return allBreastsDescript();
    }

    public clitDescript(): string {
        return Appearance.clitDescription(this);
    }

    public cockHead(cockNum: number = 0): string {
        if (cockNum < 0 || cockNum > cocks.length - 1) {
            CoC_Settings.error("");
            return "ERROR";
        }
        switch (cocks[cockNum].cockType) {
            case CockTypesEnum.CAT:
                if (rand(2) == 0) return "point";
                return "narrow tip";
            case CockTypesEnum.DEMON:
                if (rand(2) == 0) return "tainted crown";
                return "nub-ringed tip";
            case CockTypesEnum.DISPLACER:
                switch (rand(5)) {
                    case 0: return "star tip";
                    case 1: return "blooming cock-head";
                    case 2: return "open crown";
                    case 3: return "alien tip";
                    default: return "bizarre head";
                }
            case CockTypesEnum.DOG:
            case CockTypesEnum.FOX:
                if (rand(2) == 0) return "pointed tip";
                return "narrow tip";
            case CockTypesEnum.HORSE:
                if (rand(2) == 0) return "flare";
                return "flat tip";
            case CockTypesEnum.KANGAROO:
                if (rand(2) == 0) return "tip";
                return "point";
            case CockTypesEnum.LIZARD:
                if (rand(2) == 0) return "crown";
                return "head";
            case CockTypesEnum.TENTACLE:
                if (rand(2) == 0) return "mushroom-like tip";
                return "wide plant-like crown";
            default:
        }
        if (rand(2) == 0) return "crown";
        if (rand(2) == 0) return "head";
        return "cock-head";
    }

    // Short cock description. Describes length or girth. Supports multiple cocks.
    public cockDescriptShort(i_cockIndex: number = 0): string {
        // catch calls where we're outside of combat, and eCockDescript could be called.
        if (cocks.length == 0)
            return "<B>ERROR. INVALID CREATURE SPECIFIED to cockDescriptShort</B>";

        let description: string = "";
        let descripted: boolean = false;
        // Discuss length one in 3 times
        if (rand(3) == 0) {
            if (cocks[i_cockIndex].cockLength >= 30)
                description = "towering ";
            else if (cocks[i_cockIndex].cockLength >= 18)
                description = "enormous ";
            else if (cocks[i_cockIndex].cockLength >= 13)
                description = "massive ";
            else if (cocks[i_cockIndex].cockLength >= 10)
                description = "huge ";
            else if (cocks[i_cockIndex].cockLength >= 7)
                description = "long ";
            else if (cocks[i_cockIndex].cockLength >= 5)
                description = "average ";
            else
                description = "short ";
            descripted = true;
        }
        else if (rand(2) == 0) { // Discuss girth one in 2 times if not already talked about length.
            // narrow, thin, ample, broad, distended, voluminous
            if (cocks[i_cockIndex].cockThickness <= .75) description = "narrow ";
            if (cocks[i_cockIndex].cockThickness > 1 && cocks[i_cockIndex].cockThickness <= 1.4) description = "ample ";
            if (cocks[i_cockIndex].cockThickness > 1.4 && cocks[i_cockIndex].cockThickness <= 2) description = "broad ";
            if (cocks[i_cockIndex].cockThickness > 2 && cocks[i_cockIndex].cockThickness <= 3.5) description = "fat ";
            if (cocks[i_cockIndex].cockThickness > 3.5) description = "distended ";
            descripted = true;
        }
        // Seems to work better without this comma:			if (descripted && cocks[i_cockIndex].cockType != CockTypesEnum.HUMAN) description += ", ";
        description += Appearance.cockNoun(cocks[i_cockIndex].cockType);

        return description;
    }

    public assholeOrPussy(): string {
        return Appearance.assholeOrPussy(this);
    }

    public multiCockDescriptLight(): string {
        return Appearance.multiCockDescriptLight(this);
    }

    public multiCockDescript(): string {
        return Appearance.multiCockDescript(this);
    }

    public ballsDescriptLight(forcedSize: boolean = true): string {
        return Appearance.ballsDescription(forcedSize, true, this);
    }

    public sackDescript(): string {
        return Appearance.sackDescript(this);
    }

    public breastDescript(rowNum: number): string {
        // ERROR PREVENTION
        if (breastRows.length - 1 < rowNum) {
            CoC_Settings.error("");
            return "<b>ERROR, breastDescript() working with invalid breastRow</b>";
        }
        if (breastRows.length == 0) {
            CoC_Settings.error("");
            return "<b>ERROR, breastDescript() called when no breasts are present.</b>";
        }
        return BreastStore.breastDescript(breastRows[rowNum].breastRating, breastRows[rowNum].lactationMultiplier);
    }

    private breastSize(val: number): string {
        return Appearance.breastSize(val);
    }
}
