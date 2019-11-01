export class Creature {
    // Variables

    // Short refers to player name and monster name. BEST VARIABLE NAME EVA!
    // "a" refers to how the article "a" should appear in text.
    private _short: string = "You";
    private _a: string = "a ";
    public get short(): string { return this._short; }
    public set short(value: string) { this._short = value; }
    public get a(): string { return this._a; }
    public set a(value: string) { this._a = value; }
    public get capitalA(): string {
        if (this._a.length == 0) return "";
        return this._a.charAt(0).toUpperCase() + this._a.substr(1);
    }

    // Weapon
    private _weaponName: string = "";
    private _weaponVerb: string = "";
    private _weaponAttack: number = 0;
    private _weaponPerk: string = "";
    private _weaponValue: number = 0;
    public get weaponName(): string { return this._weaponName; }
    public get weaponVerb(): string { return this._weaponVerb; }
    public get weaponAttack(): number { return this._weaponAttack; }
    public get weaponPerk(): string { return this._weaponPerk; }
    public get weaponValue(): number { return this._weaponValue; }
    public set weaponName(value: string) { this._weaponName = value; }
    public set weaponVerb(value: string) { this._weaponVerb = value; }
    public set weaponAttack(value: number) { this._weaponAttack = value; }
    public set weaponPerk(value: string) { this._weaponPerk = value; }
    public set weaponValue(value: number) { this._weaponValue = value; }
    // Clothing/Armor
    private _armorName: string = "";
    private _armorDef: number = 0;
    private _armorPerk: string = "";
    private _armorValue: number = 0;
    public get armorName(): string { return this._armorName; }
    public get armorDef(): number { return this._armorDef; }
    public get armorPerk(): string { return this._armorPerk; }
    public get armorValue(): number { return this._armorValue; }
    public set armorValue(value: number) { this._armorValue = value; }
    public set armorName(value: string) { this._armorName = value; }
    public set armorDef(value: number) { this._armorDef = value; }
    public set armorPerk(value: string) { this._armorPerk = value; }

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
    public get tallness(): number { return this._tallness; }
    public set tallness(value: number) { this._tallness = value; }

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
    public get skinType(): number { return this._skinType; }
    public set skinType(value: number) { this._skinType = value; }
    private _skinTone: string = "albino";
    public get skinTone(): string { return this._skinTone; }
    public set skinTone(value: string) { this._skinTone = value; }
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
    public get wingType(): number { return this._wingType; }
    public set wingType(value: number) { this._wingType = value; }

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
    public readonly cocks = new CockArray(this);
    // balls
    public balls: number = 0;
    public cumMultiplier: number = 1;
    public ballSize: number = 0;

    private _hoursSinceCum: number = 0;
    public get hoursSinceCum(): number { return this._hoursSinceCum; }
    public set hoursSinceCum(v: number) {
        /*if (v == 0)
        {
            trace("noop");
        }*/
        this._hoursSinceCum = v;
    }

    // FEMALE STUFF
    // TODO: Box into Female genital class?
    public readonly vaginas = new VaginaArray();
    // Fertility is a % out of 100.
    public fertility: number = 10;
    public clitLength: number = .5;
    public nippleLength: number = .25;
    public readonly breastRows = new BreastRowArray();
    public readonly ass = new AssClass();

    public validate(): string {
        let error: string = "";
        // 2. Value boundaries etc
        // 2.1. non-negative Number fields
        error += validateNonNegativeNumberFields(this, "Monster.validate", [
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
        error += validateNonEmptyStringFields(this, "Monster.validate", [
            "short",
            "skinDesc",
            "weaponName", "weaponVerb", "armorName"
        ]);
        // 3. validate members
        for (const cock of this.cocks) {
            error += cock.validate();
        }
        for (const vagina of this.vaginas) {
            error += vagina.validate();
        }
        for (const row of this.breastRows) {
            error += row.validate();
        }
        error += this.ass.validate();
        // 4. Inconsistent fields
        // 4.1. balls
        if (this.balls > 0 && this.ballSize <= 0) {
            error += "Balls are present but ballSize = " + this.ballSize + ". ";
        }
        if (this.ballSize > 0 && this.balls <= 0) {
            error += "No balls but ballSize = " + this.ballSize + ". ";
        }
        // 4.2. hair
        if (this.hairLength <= 0) {
            if (this.hairType != HAIR_NORMAL) error += "No hair but hairType = " + this.hairType + ". ";
        }
        // 4.3. tail
        if (this.tailType == TAIL_TYPE_NONE) {
            if (this.tailVenom != 0) error += "No tail but tailVenom = " + this.tailVenom + ". ";
        }
        // 4.4. horns
        if (this.hornType == HORNS_NONE) {
            if (this.horns > 0) error += "horns > 0 but hornType = HORNS_NONE. ";
        } else {
            if (this.horns == 0) error += "Has horns but their number 'horns' = 0. ";
        }
        return error;
    }

    // Monsters have few perks, which I think should be a status effect for clarity's sake.
    // TODO: Move perks into monster status effects.
    public perks = new PerkArray();

    // Current status effects. This has got very muddy between perks and status effects. Will have to look into it.
    // Someone call the grammar police!
    // TODO: Move monster status effects into perks. Needs investigation though.
    public effects = new EffectArray();

    // Constructor
    public constructor() {
        // cocks = new Array();
        // The world isn't ready for typed Arrays just yet.
        // this.vaginas = [];
        // vaginas: Vector.<Vagina> = new Vector.<Vagina>();
        // keyItems = new Array();
    }

    // Functions
    public orgasm(): void {
        dynStats("lus=", 0, "res", false);
        this.hoursSinceCum = 0;

        if (this.cocks.countCockSocks("gilded") > 0) {

            const randomCock: number = rand(this.cocks.length);
            const bonusGems: number = rand(this.cocks[randomCock].cockThickness) + this.cocks.countCockSocks("gilded"); // int so AS rounds to whole numbers
            outputText("\n\nFeeling some minor discomfort in your " + cockDescript(this, randomCock) + " you slip it out of your [armor] and examine it. <b>With a little exploratory rubbing and massaging, you manage to squeeze out " + bonusGems + " gems from its cum slit.</b>\n\n");
            this.gems += bonusGems;
        }
    }

    public wetness(): number {
        if (this.vaginas.length == 0)
            return 0;
        else
            return this.vaginas[0].vaginalWetness;
    }

    public looseness(vag: boolean = true): number {
        if (vag) {
            if (this.vaginas.length == 0)
                return 0;
            else
                return this.vaginas[0].vaginalLooseness;
        }
        else {
            return this.ass.analLooseness;
        }
    }

    public vaginalCapacity(): number {
        // If the player has no vaginas
        if (this.vaginas.length == 0)
            return 0;
        let total: number;
        let bonus: number = 0;
        // Centaurs = +50 capacity
        if (this.lowerBody == 4)
            bonus = 50;
        // Naga = +20 capacity
        else if (this.lowerBody == 3)
            bonus = 20;
        // Wet pussy provides 20 point boost
        if (this.perks.findByType(PerkLib.WetPussy) >= 0)
            bonus += 20;
        if (this.perks.findByType(PerkLib.HistorySlut) >= 0)
            bonus += 20;
        if (this.perks.findByType(PerkLib.OneTrackMind) >= 0)
            bonus += 10;
        if (this.perks.findByType(PerkLib.Cornucopia) >= 0)
            bonus += 30;
        if (this.perks.findByType(PerkLib.FerasBoonWideOpen) >= 0)
            bonus += 25;
        if (this.perks.findByType(PerkLib.FerasBoonMilkingTwat) >= 0)
            bonus += 40;
        total = (bonus + this.effects.getValue1Of(StatusAffects.BonusVCapacity) + 8 * this.vaginas[0].vaginalLooseness * this.vaginas[0].vaginalLooseness) * (1 + this.vaginas[0].vaginalWetness / 10);
        return total;
    }

    public analCapacity(): number {
        let bonus: number = 0;
        // Centaurs = +30 capacity
        if (this.lowerBody == 4)
            bonus = 30;
        if (this.perks.findByType(PerkLib.HistorySlut) >= 0)
            bonus += 20;
        if (this.perks.findByType(PerkLib.Cornucopia) >= 0)
            bonus += 30;
        if (this.perks.findByType(PerkLib.OneTrackMind) >= 0)
            bonus += 10;
        if (this.ass.analWetness > 0)
            bonus += 15;
        return ((bonus + this.effects.getValue1Of(StatusAffects.BonusACapacity) + 6 * this.ass.analLooseness * this.ass.analLooseness) * (1 + this.ass.analWetness / 10));
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

    public milked(): void {
        if (this.effects.findByType(StatusAffects.LactationReduction) >= 0)
            this.effects.setValue(StatusAffects.LactationReduction, 1, 0);
        if (this.effects.findByType(StatusAffects.LactationReduc0) >= 0)
            this.effects.remove(StatusAffects.LactationReduc0);
        if (this.effects.findByType(StatusAffects.LactationReduc1) >= 0)
            this.effects.remove(StatusAffects.LactationReduc1);
        if (this.effects.findByType(StatusAffects.LactationReduc2) >= 0)
            this.effects.remove(StatusAffects.LactationReduc2);
        if (this.effects.findByType(StatusAffects.LactationReduc3) >= 0)
            this.effects.remove(StatusAffects.LactationReduc3);
        if (this.perks.findByType(PerkLib.Feeder) >= 0) {
            // You've now been milked, reset the timer for that
            this.effects.addValue(StatusAffects.Feeder, 1, 1);
            this.effects.setValue(StatusAffects.Feeder, 2, 0);
        }
    }
    public boostLactation(todo: number): number {
        if (this.breastRows.length == 0)
            return 0;
        let counter: number = this.breastRows.length;
        let index: number = 0;
        let changes: number = 0;
        let temp2: number = 0;
        // Prevent lactation decrease if lactating.
        if (todo >= 0) {
            if (this.effects.findByType(StatusAffects.LactationReduction) >= 0)
                this.effects.setValue(StatusAffects.LactationReduction, 1, 0);
            if (this.effects.findByType(StatusAffects.LactationReduc0) >= 0)
                this.effects.remove(StatusAffects.LactationReduc0);
            if (this.effects.findByType(StatusAffects.LactationReduc1) >= 0)
                this.effects.remove(StatusAffects.LactationReduc1);
            if (this.effects.findByType(StatusAffects.LactationReduc2) >= 0)
                this.effects.remove(StatusAffects.LactationReduc2);
            if (this.effects.findByType(StatusAffects.LactationReduc3) >= 0)
                this.effects.remove(StatusAffects.LactationReduc3);
        }
        if (todo > 0) {
            while (todo > 0) {
                counter = this.breastRows.length;
                todo -= .1;
                while (counter > 0) {
                    counter--;
                    if (this.breastRows[index].lactationMultiplier > this.breastRows[counter].lactationMultiplier)
                        index = counter;
                }
                temp2 = .1;
                if (this.breastRows[index].lactationMultiplier > 1.5)
                    temp2 /= 2;
                if (this.breastRows[index].lactationMultiplier > 2.5)
                    temp2 /= 2;
                if (this.breastRows[index].lactationMultiplier > 3)
                    temp2 /= 2;
                changes += temp2;
                this.breastRows[index].lactationMultiplier += temp2;
            }
        }
        else {
            while (todo < 0) {
                counter = this.breastRows.length;
                index = 0;
                if (todo > -.1) {
                    while (counter > 0) {
                        counter--;
                        if (this.breastRows[index].lactationMultiplier < this.breastRows[counter].lactationMultiplier)
                            index = counter;
                    }
                    // trace(this.breasts.biggestLactation());
                    this.breastRows[index].lactationMultiplier += todo;
                    if (this.breastRows[index].lactationMultiplier < 0)
                        this.breastRows[index].lactationMultiplier = 0;
                    todo = 0;
                }
                else {
                    todo += .1;
                    while (counter > 0) {
                        counter--;
                        if (this.breastRows[index].lactationMultiplier < this.breastRows[counter].lactationMultiplier)
                            index = counter;
                    }
                    temp2 = todo;
                    changes += temp2;
                    this.breastRows[index].lactationMultiplier += temp2;
                    if (this.breastRows[index].lactationMultiplier < 0)
                        this.breastRows[index].lactationMultiplier = 0;
                }
            }
        }
        return changes;
    }

    // Calculate bonus virility rating!
    // anywhere from 5% to 100% of normal cum effectiveness thru herbs!
    public virilityQ(): number {
        if (this.cocks.length <= 0)
            return 0;
        let percent: number = 0.01;
        if (this.cumQ() >= 250)
            percent += 0.01;
        if (this.cumQ() >= 800)
            percent += 0.01;
        if (this.cumQ() >= 1600)
            percent += 0.02;
        if (this.perks.findByType(PerkLib.BroBody) >= 0)
            percent += 0.05;
        if (this.perks.findByType(PerkLib.MaraesGiftStud) >= 0)
            percent += 0.15;
        if (this.perks.findByType(PerkLib.FerasBoonAlpha) >= 0)
            percent += 0.10;
        if (this.perks.getValue1Of(PerkLib.ElvenBounty) > 0)
            percent += 0.05;
        if (this.perks.findByType(PerkLib.FertilityPlus) >= 0)
            percent += 0.03;
        if (this.perks.findByType(PerkLib.PiercedFertite) >= 0)
            percent += 0.03;
        if (this.perks.findByType(PerkLib.OneTrackMind) >= 0)
            percent += 0.03;
        if (this.perks.findByType(PerkLib.MagicalVirility) >= 0)
            percent += 0.05;
        // Messy Orgasms?
        if (this.perks.findByType(PerkLib.MessyOrgasms) >= 0)
            percent += 0.03;
        if (percent > 1)
            percent = 1;
        return percent;
    }

    // Calculate cum return
    public cumQ(): number {
        if (this.cocks.length <= 0)
            return 0;
        let quantity: number = 0;
        // Base value is ballsize*ballQ*cumefficiency by a factor of 2.
        // Other things that affect it:
        // lust - 50% = normal output.  0 = half output. 100 = +50% output.
        // trace("CUM ESTIMATE: " + int(1.25*2*cumMultiplier*2*(lust + 50)/10 * (hoursSinceCum+10)/24)/10 + "(no balls), " + int(ballSize*balls*cumMultiplier*2*(lust + 50)/10 * (hoursSinceCum+10)/24)/10 + "(withballs)");
        let lustCoefficient: number = (this.lust + 50) / 10;
        // Pilgrim's bounty maxxes lust coefficient
        if (this.perks.findByType(PerkLib.PilgrimsBounty) >= 0)
            lustCoefficient = 150 / 10;
        if (this.balls == 0)
            quantity = int(1.25 * 2 * this.cumMultiplier * 2 * lustCoefficient * (this.hoursSinceCum + 10) / 24) / 10;
        else
            quantity = int(this.ballSize * this.balls * this.cumMultiplier * 2 * lustCoefficient * (this.hoursSinceCum + 10) / 24) / 10;
        if (this.perks.findByType(PerkLib.BroBody) >= 0)
            quantity *= 1.3;
        if (this.perks.findByType(PerkLib.FertilityPlus) >= 0)
            quantity *= 1.5;
        if (this.perks.findByType(PerkLib.MessyOrgasms) >= 0)
            quantity *= 1.5;
        if (this.perks.findByType(PerkLib.OneTrackMind) >= 0)
            quantity *= 1.1;
        if (this.perks.findByType(PerkLib.MaraesGiftStud) >= 0)
            quantity += 350;
        if (this.perks.findByType(PerkLib.FerasBoonAlpha) >= 0)
            quantity += 200;
        if (this.perks.findByType(PerkLib.MagicalVirility) >= 0)
            quantity += 200;
        if (this.perks.findByType(PerkLib.FerasBoonSeeder) >= 0)
            quantity += 1000;
        // if(hasPerk("Elven Bounty") >= 0) quantity += 250;;
        quantity += this.perks.getValue1Of(PerkLib.ElvenBounty);
        if (this.perks.findByType(PerkLib.BroBody) >= 0)
            quantity += 200;
        quantity += this.effects.getValue1Of(StatusAffects.Rut);
        quantity *= (1 + (2 * this.perks.getValue1Of(PerkLib.PiercedFertite)) / 100);
        // trace("Final Cum Volume: " + int(quantity) + "mLs.");
        // if (quantity < 0) trace("SOMETHING HORRIBLY WRONG WITH CUM CALCULATIONS");
        if (quantity < 2)
            quantity = 2;
        return quantity;
    }

    public canAutoFellate(): boolean {
        if (this.cocks.length <= 0)
            return false;
        return (this.cocks[0].cockLength >= 20);
    }

    // PC can fly?
    public canFly(): boolean {
        // web also makes false!
        if (this.effects.findByType(StatusAffects.Web) >= 0)
            return false;
        return this._wingType == 2 || this._wingType == 7 || this._wingType == 9 || this._wingType == 11 || this._wingType == 12;

    }

    public genderCheck(): void {
        if (this.cocks.length > 0 && this.vaginas.length > 0)
            this.gender = GENDER_HERM;
        else if (this.cocks.length > 0)
            this.gender = GENDER_MALE;
        else if (this.vaginas.length > 0)
            this.gender = GENDER_FEMALE;
        else
            this.gender = GENDER_NONE;
    }

    public buttChangeNoDisplay(cArea: number): boolean {
        let stretched: boolean = false;
        // cArea > capacity = autostreeeeetch half the time.
        if (cArea >= this.analCapacity() && rand(2) == 0) {
            if (this.ass.analLooseness < 5)
                this.ass.analLooseness++;
            stretched = true;
            // Reset butt stretchin recovery time
            if (this.effects.findByType(StatusAffects.ButtStretched) >= 0) this.effects.setValue(StatusAffects.ButtStretched, 1, 0);
        }
        // If within top 10% of capacity, 25% stretch
        if (cArea < this.analCapacity() && cArea >= .9 * this.analCapacity() && rand(4) == 0) {
            this.ass.analLooseness++;
            stretched = true;
        }
        // if within 75th to 90th percentile, 10% stretch
        if (cArea < .9 * this.analCapacity() && cArea >= .75 * this.analCapacity() && rand(10) == 0) {
            this.ass.analLooseness++;
            stretched = true;
        }
        // Anti-virgin
        if (this.ass.analLooseness == 0) {
            this.ass.analLooseness++;
            stretched = true;
        }
        // Delay un-stretching
        if (cArea >= .5 * this.analCapacity()) {
            // Butt Stretched used to determine how long since last enlargement
            if (this.effects.findByType(StatusAffects.ButtStretched) < 0) this.effects.create(StatusAffects.ButtStretched, 0, 0, 0, 0);
            // Reset the timer on it to 0 when restretched.
            else this.effects.setValue(StatusAffects.ButtStretched, 1, 0);
        }
        if (stretched) {
            trace("BUTT STRETCHED TO " + (this.ass.analLooseness) + ".");
        }
        return stretched;
    }

    public cuntChangeNoDisplay(cArea: number): boolean {
        if (this.vaginas.length == 0) return false;
        let stretched: boolean = false;
        if (this.perks.findByType(PerkLib.FerasBoonMilkingTwat) < 0 || this.vaginas[0].vaginalLooseness <= VAGINA_LOOSENESS_NORMAL) {
            // cArea > capacity = autostreeeeetch.
            if (cArea >= this.vaginalCapacity()) {
                if (this.vaginas[0].vaginalLooseness < VAGINA_LOOSENESS_LEVEL_CLOWN_CAR)
                    this.vaginas[0].vaginalLooseness++;
                stretched = true;
            }
            // If within top 10% of capacity, 50% stretch
            else if (cArea >= .9 * this.vaginalCapacity() && rand(2) == 0) {
                this.vaginas[0].vaginalLooseness++;
                stretched = true;
            }
            // if within 75th to 90th percentile, 25% stretch
            else if (cArea >= .75 * this.vaginalCapacity() && rand(4) == 0) {
                this.vaginas[0].vaginalLooseness++;
                stretched = true;
            }
        }
        // If virgin
        if (this.vaginas[0].virgin) {
            this.vaginas[0].virgin = false;
        }
        // Delay anti-stretching
        if (cArea >= .5 * this.vaginalCapacity()) {
            // Cunt Stretched used to determine how long since last enlargement
            if (this.effects.findByType(StatusAffects.CuntStretched) < 0) this.effects.create(StatusAffects.CuntStretched, 0, 0, 0, 0);
            // Reset the timer on it to 0 when restretched.
            else this.effects.setValue(StatusAffects.CuntStretched, 1, 0);
        }
        if (stretched) {
            trace("CUNT STRETCHED TO " + (this.vaginas[0].vaginalLooseness) + ".");
        }
        return stretched;
    }

    public get inHeat(): boolean {
        return this.effects.findByType(StatusAffects.Heat) >= 0;
    }

    public get inRut(): boolean {
        return this.effects.findByType(StatusAffects.Rut) >= 0;
    }

    public bonusFertility(): number {
        let counter: number = 0;
        if (this.inHeat)
            counter += this.effects.getValue1Of(StatusAffects.Heat);
        if (this.perks.findByType(PerkLib.FertilityPlus) >= 0)
            counter += 15;
        if (this.perks.findByType(PerkLib.MaraesGiftFertility) >= 0)
            counter += 50;
        if (this.perks.findByType(PerkLib.FerasBoonBreedingBitch) >= 0)
            counter += 30;
        if (this.perks.findByType(PerkLib.MagicalFertility) >= 0)
            counter += 10;
        counter += this.perks.getValue2Of(PerkLib.ElvenBounty);
        counter += this.perks.getValue1Of(PerkLib.PiercedFertite);
        return counter;
    }

    public totalFertility(): number {
        return (this.bonusFertility() + this.fertility);
    }

    public isBiped(): boolean {
        // Naga/Centaur
        if (this.lowerBody == LOWER_BODY_TYPE_NAGA || this.lowerBody == LOWER_BODY_TYPE_CENTAUR)
            return false;
        if (this.lowerBody == LOWER_BODY_TYPE_GOO || this.lowerBody == LOWER_BODY_TYPE_PONY)
            return false;
        return true;
    }

    public isNaga(): boolean {
        if (this.lowerBody == LOWER_BODY_TYPE_NAGA)
            return true;
        return false;
    }

    public isTaur(): boolean {
        if (this.lowerBody == LOWER_BODY_TYPE_CENTAUR || this.lowerBody == LOWER_BODY_TYPE_PONY)
            return true;
        return false;
    }

    public isDrider(): boolean {
        return (this.lowerBody == LOWER_BODY_TYPE_DRIDER_LOWER_BODY);
    }

    public isGoo(): boolean {
        if (this.lowerBody == LOWER_BODY_TYPE_GOO)
            return true;
        return false;
    }

    public canOvipositSpider(): boolean {
        if (this.eggs() >= 10 && this.perks.findByType(PerkLib.SpiderOvipositor) >= 0 && this.isDrider() && this.tailType == 5)
            return true;
        return false;
    }

    public canOvipositBee(): boolean {
        if (this.eggs() >= 10 && this.perks.findByType(PerkLib.BeeOvipositor) >= 0 && this.tailType == 6)
            return true;
        return false;
    }

    public canOviposit(): boolean {
        if (this.canOvipositSpider() || this.canOvipositBee())
            return true;
        return false;
    }

    public eggs(): number {
        if (this.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0)
            return this.perks.getValue1Of(PerkLib.SpiderOvipositor);
        else
            return this.perks.getValue1Of(PerkLib.BeeOvipositor);
    }

    public addEggs(arg: number = 0): number {
        if (this.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else {
            if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0) {
                this.perks.addValue(PerkLib.SpiderOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.perks.setValue(PerkLib.SpiderOvipositor, 1, 50);
                return this.perks.getValue1Of(PerkLib.SpiderOvipositor);
            }
            else {
                this.perks.addValue(PerkLib.BeeOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.perks.setValue(PerkLib.BeeOvipositor, 1, 50);
                return this.perks.getValue1Of(PerkLib.BeeOvipositor);
            }
        }
    }

    public dumpEggs(): void {
        if (this.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return;
        this.setEggs(0);
        // Sets fertile eggs = regular eggs (which are 0)
        this.fertilizeEggs();
    }

    public setEggs(arg: number = 0): number {
        if (this.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else {
            if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0) {
                this.perks.setValue(PerkLib.SpiderOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.perks.setValue(PerkLib.SpiderOvipositor, 1, 50);
                return this.perks.getValue1Of(PerkLib.SpiderOvipositor);
            }
            else {
                this.perks.setValue(PerkLib.BeeOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.perks.setValue(PerkLib.BeeOvipositor, 1, 50);
                return this.perks.getValue1Of(PerkLib.BeeOvipositor);
            }
        }
    }

    public fertilizedEggs(): number {
        if (this.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0)
            return this.perks.getValue2Of(PerkLib.SpiderOvipositor);
        else
            return this.perks.getValue2Of(PerkLib.BeeOvipositor);
    }

    public fertilizeEggs(): number {
        if (this.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0)
            this.perks.setValue(PerkLib.SpiderOvipositor, 2, this.eggs());
        else
            this.perks.setValue(PerkLib.BeeOvipositor, 2, this.eggs());
        return this.fertilizedEggs();
    }

}
