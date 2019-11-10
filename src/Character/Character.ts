/**
 * Character class for player and NPCs. Has subclasses Player and NonPlayer.
 * @author Yoffy
 */
export class Character {
    // Variables

    // Short refers to player name and monster name. BEST VARIABLE NAME EVA!
    // "a" refers to how the article "a" should appear in text.
    public short: string = "You";
    public a: string = "a ";
    public get capitalA(): string {
        if (this.a.length == 0) return "";
        return this.a.charAt(0).toUpperCase() + this.a.substr(1);
    }

    // Weapon
    public weaponName: string = "";
    public weaponVerb: string = "";
    public weaponAttack: number = 0;
    public weaponPerk: string = "";
    public weaponValue: number = 0;

    // Clothing/Armor
    public armorName: string = "";
    public armorDef: number = 0;
    public armorPerk: string = "";
    public armorValue: number = 0;

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
    public gender = Gender.NONE;
    public tallness = 0;

    /**
     * Hairtype:
     * 0 - normal
     * 1 - feather
     * 2 - ghost
     * 3 - goo!
     * 4 - anemononeoenoeneo!
     */
    public hairType = HairType.NORMAL;
    public hairColor = "no";
    public hairLength = 0;

    /**
     * Skintype:
     * 0 - skin
     * 1 - furry
     * 2 - scaley
     * 3 - goopey
     */
    public skinType = SkinType.PLAIN;
    public skinTone = "albino";
    public skinDesc = "skin";
    public skinAdj = "";

    /**
     * Facetype:
     * 0 - human
     * 1 - horse
     * 2 - dogface
     * 3 - cowface
     * 4 - sharkface-teeth
     * 5 - Human w/Naga fangz
     * 6 - kittah face
     * 7 - lizard face (durned argonians!)
     * 8 - bunnah faceahhh bunbun
     * 9 - kangaface
     * 10 - spidah-face (humanish)
     * 11 - foxface!
     * 12 - dragon face
     * 13 - Halfcoon
     * 14 - fullcoon
     * 15 - halfmouse
     * 16 - fullmouse
     */
    public faceType = FaceType.HUMAN;

    /**
     * EarType:
     * -1 - none!
     * 0 - human
     * 1 - horse
     * 2 - dog
     * 3 - cow
     * 4 - elf
     * 5 - catzilla
     * 6 - Snakezilla
     * 7 - Bunbunz
     * 8 - Roo Ears
     * 9 - fox ears
     * 10 - dragon
     * 11 - coon
     * 12 - mouse
     */
    public earType = EarType.HUMAN;
    public earValue = 0;

    /**
     * Horntype:
     * 1 - demonic
     * 2 - minotaur (cowlike)
     * 3 - Draconic/Lizard
     * 4 - Double draconic
     * 5 - Antlers
     */
    public hornType = HornType.NONE;
    public horns = 0;

    /**
     * Wingtype:
     * 0 - none
     * 1 - bee
     * 2 - large bee
     * 3 - faerie?
     * 4 - avian
     * 5 - dragoooon?
     * 6 - demon/bat
     * 7 - large demon/bat
     * 8 - shark wing lolololol
     * 9 - harpy
     * 10 - small dagron
     * 11 - trogdor wings
     * 12 - sandtrap wings
     */
    public wingType = WingType.NONE;
    public wingDesc = "non-existant";

    /**
     * LowerBody:
     * 0 - normal
     * 1 - hooves
     * 2 - paws
     * 3 - snakelike body
     * 4 - centaur!
     * 5 - demonic heels
     * 6 - demon foot-claws
     * 7 - bee legs
     * 8 - goo mound
     * 9 - catfeet
     * 10 - lizardfeet
     * 11 - MLP.
     * 12 - DAH BUNNY!
     * 13 - Harpah Legz
     * 14 - Roo feet!
     * 15 - Spider Legz
     * 16 - Drider Legs
     * 17 - foxpaws
     * 18 - dragonfeet
     * 19 - raccoonfeet
     */
    public lowerBody = LowerBodyType.HUMAN;

    /**
     * TailType:
     * 0 - none
     * 1 - horse
     * 2 - dog
     * 3 - demon
     * 4 - cow!
     * 5 - spider!
     * 6 - bee!
     * 7 - shark tail!
     * 8 - catTAIIIIIL
     * 9 - lizard tail
     * 10 - bunbuntail
     * 11 - harpybutt
     * 12 - rootail
     * 13 - foxtail
     * 14 - dagron tail
     * 15 - raccoon tail
     * 16 - mousetail
     */
    public tailType = TailType.NONE;

    // Tail venom is a 0-100 slider used for tail attacks. Recharges per hour.
    public tailVenom = 0;
    // Tail recharge determines how fast venom/webs comes back per hour.
    public tailRecharge = 5;

    /**
     * HipRating
     * 0 - boyish
     * 2 - slender
     * 4 - average
     * 6 - noticable/ample
     * 10 - curvy//flaring
     * 15 - child-bearing/fertile
     * 20 - inhumanly wide
     */
    public hipRating = HipRating.BOYISH;

    /**
     * ButtRating
     * 0 - buttless
     * 2 - tight
     * 4 - average
     * 6 - noticable
     * 8 - large
     * 10 - jiggly
     * 13 - expansive
     * 16 - huge
     * 20 - inconceivably large/big/huge etc
     */
    public buttRating = ButtRating.BUTTLESS;

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

    public antennae = AntennaeType.NONE;
    public eyeType = EyeType.HUMAN;
    public tongueType = TongueType.HUMAN;
    public armType = ArmType.HUMAN;
    public gills: boolean = false;

    public readonly cocks = new CockArray(this);

    public balls: number = 0;
    public cumMultiplier: number = 1;
    public ballSize: number = 0;

    public hoursSinceCum: number = 0;

    public readonly vaginas = new VaginaArray();

    // Fertility is a % out of 100.
    public fertility: number = 10;
    public clitLength: number = .5;
    public nippleLength: number = .25;
    public readonly breastRows = new BreastRowArray();
    public readonly ass = new AssClass();

    public readonly ovipositor = new Ovipositor(this);

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
            if (this.hairType != HairType.NORMAL) error += "No hair but hairType = " + this.hairType + ". ";
        }
        // 4.3. tail
        if (this.tailType == TailType.NONE) {
            if (this.tailVenom != 0) error += "No tail but tailVenom = " + this.tailVenom + ". ";
        }
        // 4.4. horns
        if (this.hornType == HornType.NONE) {
            if (this.horns > 0) error += "horns > 0 but hornType = HornType.NONE. ";
        } else {
            if (this.horns == 0) error += "Has horns but their number 'horns' = 0. ";
        }
        return error;
    }

    public perks = new PerkArray();

    public effects = new EffectArray();

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
        return this.wingType == 2 || this.wingType == 7 || this.wingType == 9 || this.wingType == 11 || this.wingType == 12;
    }

    public genderCheck(): void {
        if (this.cocks.length > 0 && this.vaginas.length > 0)
            this.gender = Gender.HERM;
        else if (this.cocks.length > 0)
            this.gender = Gender.MALE;
        else if (this.vaginas.length > 0)
            this.gender = Gender.FEMALE;
        else
            this.gender = Gender.NONE;
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
        if (this.perks.findByType(PerkLib.FerasBoonMilkingTwat) < 0 || this.vaginas[0].vaginalLooseness <= VaginaLooseness.NORMAL) {
            // cArea > capacity = autostreeeeetch.
            if (cArea >= this.vaginalCapacity()) {
                if (this.vaginas[0].vaginalLooseness < VaginaLooseness.LEVEL_CLOWN_CAR)
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
        if (this.lowerBody == LowerBodyType.NAGA || this.lowerBody == LowerBodyType.CENTAUR)
            return false;
        if (this.lowerBody == LowerBodyType.GOO || this.lowerBody == LowerBodyType.PONY)
            return false;
        return true;
    }

    public isNaga(): boolean {
        if (this.lowerBody == LowerBodyType.NAGA)
            return true;
        return false;
    }

    public isTaur(): boolean {
        if (this.lowerBody == LowerBodyType.CENTAUR || this.lowerBody == LowerBodyType.PONY)
            return true;
        return false;
    }

    public isDrider(): boolean {
        return (this.lowerBody == LowerBodyType.DRIDER_LOWER_BODY);
    }

    public isGoo(): boolean {
        if (this.lowerBody == LowerBodyType.GOO)
            return true;
        return false;
    }

    private _femininity: number = 50;

    // This is the easiest way I could think of to apply "flat" bonuses to certain stats without having to write a whole shitload of crazyshit
    // I think a better long-term solution may be to hang function references off the end of the statusAffect class and move all of the value
    // calculation into methods of ContentClasses, so rather than having walls of logic, we just call the method reference with a value, and get back the modified value.
    // It's still shitty, but it would possibly be an improvement.
    public get femininity(): number {
        let fem: number = this._femininity;
        const statIndex: number = this.effects.findByType(StatusAffects.UmasMassage);

        if (statIndex >= 0) {
            if (this.effects[statIndex].value1 == UmasShop.MASSAGE_MODELLING_BONUS) {
                fem += this.effects[statIndex].value2;
            }
        }

        if (fem > 100) {
            fem = 100;
        }

        return fem;
    }

    public set femininity(value: number) {
        if (value > 100) {
            value = 100;
        }
        else if (value < 0) {
            value = 0;
        }

        this._femininity = value;
    }

    // BEARDS! Not used anywhere right now but WHO WANTS A BEARD?
    public beardLength: number = 0;
    public beardStyle: number = 0;

    // Used for hip ratings
    public thickness: number = 0;

    // Body tone i.e. Lithe, stocky, etc
    public tone: number = 0;

    private _pregnancyType: number = 0;
    public get pregnancyType(): number { return this._pregnancyType; }

    private _pregnancyIncubation: number = 0;
    public get pregnancyIncubation(): number { return this._pregnancyIncubation; }

    private _buttPregnancyType: number = 0;
    public get buttPregnancyType(): number { return this._buttPregnancyType; }

    private _buttPregnancyIncubation: number = 0;
    public get buttPregnancyIncubation(): number { return this._buttPregnancyIncubation; }

    // Key items
    public keyItems = new KeyItemArray();

    // Return bonus fertility

    // return total fertility

    public hasBeard(): boolean {
        return this.beardLength > 0;
    }

    public hasMuzzle(): boolean {
        if (this.faceType == 1 || this.faceType == 2 || this.faceType == 6 || this.faceType == 7 || this.faceType == 9 || this.faceType == 11 || this.faceType == 12)
            return true;
        return false;
    }

    public hasLongTail(): boolean {
        // 7 - shark tail!
        // 8 - catTAIIIIIL
        // 9 - lizard tail
        // 10 - bunbuntail
        // 11 - harpybutt
        // 12 - rootail
        // 13 - foxtail
        // 14 - dagron tail
        if (this.isNaga())
            return true;
        if (this.tailType == 2 || this.tailType == 3 || this.tailType == 4 || this.tailType == 7 || this.tailType == 8 || this.tailType == 9 || this.tailType == 12 || this.tailType == 13 || this.tailType == 14)
            return true;
        return false;
    }

    public isPregnant(): boolean { return this._pregnancyType != 0; }

    public isButtPregnant(): boolean { return this._buttPregnancyType != 0; }

    // fertility must be >= random(0-beat)
    // If arg == 1 then override any contraceptives and guarantee fertilization
    public knockUp(type: number = 0, incubation: number = 0, beat: number = 100, arg: number = 0): void {
        // Contraceptives cancel!
        if (this.effects.findByType(StatusAffects.Contraceptives) >= 0 && arg < 1)
            return;
        // 			if (this.effects.findByType(StatusAffects.GooStuffed) >= 0) return; //No longer needed thanks to PREGNANCY_GOO_STUFFED being used as a blocking value
        let bonus: number = 0;
        // If arg = 1 (always pregnant), bonus = 9000
        if (arg >= 1)
            bonus = 9000;
        if (arg <= -1)
            bonus = -9000;
        // If unpregnant and fertility wins out:
        if (this.pregnancyIncubation == 0 && this.totalFertility() + bonus > Math.floor(Math.random() * beat) && this.vaginas.length > 0) {
            this.knockUpForce(type, incubation);
            trace("PC Knocked up with pregnancy type: " + type + " for " + incubation + " incubation.");
        }
        // Chance for eggs fertilization - ovi elixir and imps excluded!
        if (type != PregnancyStore.PREGNANCY_IMP && type != PregnancyStore.PREGNANCY_OVIELIXIR_EGGS && type != PregnancyStore.PREGNANCY_ANEMONE) {
            if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0 || this.perks.findByType(PerkLib.BeeOvipositor) >= 0) {
                if (this.totalFertility() + bonus > Math.floor(Math.random() * beat)) {
                    this.ovipositor.fertilizeEggs();
                }
            }
        }
    }

    // The more complex knockUp function used by the player is defined above
    // The player doesn't need to be told of the last event triggered, so the code here is quite a bit simpler than that in PregnancyStore
    public knockUpForce(type: number = 0, incubation: number = 0): void {
        this._pregnancyType = type;
        this._pregnancyIncubation = (type == 0 ? 0 : incubation); // Won't allow incubation time without pregnancy type
    }

    // fertility must be >= random(0-beat)
    public buttKnockUp(type: number = 0, incubation: number = 0, beat: number = 100, arg: number = 0): void {
        // Contraceptives cancel!
        if (this.effects.findByType(StatusAffects.Contraceptives) >= 0 && arg < 1)
            return;
        let bonus: number = 0;
        // If arg = 1 (always pregnant), bonus = 9000
        if (arg >= 1)
            bonus = 9000;
        if (arg <= -1)
            bonus = -9000;
        // If unpregnant and fertility wins out:
        if (this.buttPregnancyIncubation == 0 && this.totalFertility() + bonus > Math.floor(Math.random() * beat)) {
            this.buttKnockUpForce(type, incubation);
            trace("PC Butt Knocked up with pregnancy type: " + type + " for " + incubation + " incubation.");
        }
    }

    // The more complex buttKnockUp function used by the player is defined in Character.as
    public buttKnockUpForce(type: number = 0, incubation: number = 0): void {
        this._buttPregnancyType = type;
        this._buttPregnancyIncubation = (type == 0 ? 0 : incubation); // Won't allow incubation time without pregnancy type
    }

    public pregnancyAdvance(): boolean {
        if (this._pregnancyIncubation > 0) this._pregnancyIncubation--;
        if (this._pregnancyIncubation < 0) this._pregnancyIncubation = 0;
        if (this._buttPregnancyIncubation > 0) this._buttPregnancyIncubation--;
        if (this._buttPregnancyIncubation < 0) this._buttPregnancyIncubation = 0;
        return this.pregnancyUpdate();
    }

    public pregnancyUpdate(): boolean { return false; }

    public viridianChange(): boolean {
        let count: number = this.cocks.length;
        if (count == 0)
            return false;
        while (count > 0) {
            count--;
            if (this.cocks[count].sock == "amaranthine" && this.cocks[count].cockType != CockTypesEnum.DISPLACER)
                return true;
        }
        return false;
    }

    public hasKnot(arg: number = 0): boolean {
        if (arg > this.cocks.length - 1 || arg < 0)
            return false;
        return (this.cocks[arg].cockType == CockTypesEnum.DOG || this.cocks[arg].cockType == CockTypesEnum.FOX || this.cocks[arg].cockType == CockTypesEnum.DISPLACER);
    }

    public maxHP(): number {
        let max: number = 0;
        max += int(this.tou * 2 + 50);
        if (this.perks.findByType(PerkLib.Tank) >= 0) max += 50;
        if (this.perks.findByType(PerkLib.Tank2) >= 0) max += Math.round(this.tou);
        if (this.perks.findByType(PerkLib.ChiReflowDefense) >= 0) max += UmasShop.NEEDLEWORK_DEFENSE_EXTRA_HP;
        if (this.level <= 20) max += this.level * 15;
        else max += 20 * 15;
        max = Math.round(max);
        if (max > 999) max = 999;
        return max;
    }

}
