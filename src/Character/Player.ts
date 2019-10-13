
/**
 * ...
 * @author Yoffy
 */
export class Player extends Character {

    public constructor() {
        // Item things
        itemSlot1 = new ItemSlotClass();
        itemSlot2 = new ItemSlotClass();
        itemSlot3 = new ItemSlotClass();
        itemSlot4 = new ItemSlotClass();
        itemSlot5 = new ItemSlotClass();
        itemSlots = [itemSlot1, itemSlot2, itemSlot3, itemSlot4, itemSlot5];
    }

    // Autosave
    public slotName: string = "VOID";
    public autoSave: boolean = false;

    // Lust vulnerability
    // TODO: Kept for backwards compatibility reasons but should be phased out.
    public lustVuln: number = 1;

    // Teasing attributes
    public teaseLevel: number = 0;
    public teaseXP: number = 0;

    // Perks used to store 'queued' perk buys
    public perkPoints: number = 0;

    // Number of times explored for new areas
    public explored: number = 0;
    public exploredForest: number = 0;
    public exploredDesert: number = 0;
    public exploredMountain: number = 0;
    public exploredLake: number = 0;

    // Player pregnancy variables and functions
    public pregnancyUpdate(): boolean {
        return game.updatePregnancy(); // Returns true if we need to make sure pregnancy texts aren't hidden
    }

    // Inventory
    public itemSlot1: ItemSlotClass;
    public itemSlot2: ItemSlotClass;
    public itemSlot3: ItemSlotClass;
    public itemSlot4: ItemSlotClass;
    public itemSlot5: ItemSlotClass;
    public itemSlots: any[];

    private _armor: Armor = ArmorLib.COMFORTABLE_UNDERCLOTHES;
    private _modArmorName: string = "";

    public set armorValue(value: number): void {
        CoC_Settings.error("ERROR: attempt to directly set player.armorValue.");
    }

    public set armorName(value: string): void {
        CoC_Settings.error("ERROR: attempt to directly set player.armorName.");
    }

    public set armorDef(value: number): void {
        CoC_Settings.error("ERROR: attempt to directly set player.armorDef.");
    }

    public set armorPerk(value: string): void {
        CoC_Settings.error("ERROR: attempt to directly set player.armorPerk.");
    }

    public set weaponName(value: string): void {
        CoC_Settings.error("ERROR: attempt to directly set player.weaponName.");
    }

    public set weaponVerb(value: string): void {
        CoC_Settings.error("ERROR: attempt to directly set player.weaponVerb.");
    }

    public set weaponAttack(value: number): void {
        CoC_Settings.error("ERROR: attempt to directly set player.weaponAttack.");
    }

    public set weaponPerk(value: string): void {
        CoC_Settings.error("ERROR: attempt to directly set player.weaponPerk.");
    }

    public set weaponValue(value: number): void {
        CoC_Settings.error("ERROR: attempt to directly set player.weaponValue.");
    }

    public get modArmorName(): string {
        if (_modArmorName == null) _modArmorName = "";
        return _modArmorName;
    }

    public set modArmorName(value: string): void {
        if (value == null) value = "";
        _modArmorName = value;
    }

    public get armorName(): string {
        if (_modArmorName.length > 0) return modArmorName;
        return _armor.name;
    }
    public get armorDef(): number {
        let armorDef: number = _armor.def;
        // Blacksmith history!
        if (armorDef > 0 && this.perks.findByType(PerkLib.HistorySmith) >= 0) {
            armorDef = Math.round(armorDef * 1.1);
            armorDef += 1;
        }
        // Skin armor perk
        if (this.perks.findByType(PerkLib.ThickSkin) >= 0) {
            armorDef += 2;
            if (skinType > SKIN_TYPE_PLAIN) armorDef += 1;
        }
        // If no skin armor perk scales rock
        else {
            if (skinType == SKIN_TYPE_FUR) armorDef += 1;
            if (skinType == SKIN_TYPE_SCALES) armorDef += 3;
        }
        // 'Thick' dermis descriptor adds 1!
        if (skinAdj == "smooth") armorDef += 1;
        // Agility boosts armor ratings!
        if (this.perks.findByType(PerkLib.Agility) >= 0) {
            if (armorPerk == "Light") armorDef += Math.round(spe / 8);
            else if (armorPerk == "Medium") armorDef += Math.round(spe / 13);
        }
        // Berzerking removes armor
        if (this.effects.findByType(StatusAffects.Berzerking) >= 0) {
            armorDef = 0;
        }
        if (game.monster.effects.findByType(StatusAffects.TailWhip) >= 0) {
            armorDef -= game.monster.effects.getValue1Of(StatusAffects.TailWhip);
            if (armorDef < 0) armorDef = 0;
        }
        return armorDef;
    }
    public get armorBaseDef(): number {
        return _armor.def;
    }
    public get armorPerk(): string {
        return _armor.perk;
    }
    public get armorValue(): number {
        return _armor.value;
    }
    private _weapon: Weapon = WeaponLib.FISTS;
    public get weaponName(): string {
        return _weapon.name;
    }
    public get weaponVerb(): string {
        return _weapon.verb;
    }
    public get weaponAttack(): number {
        let attack: number = _weapon.attack;
        if (this.perks.findByType(PerkLib.WeaponMastery) >= 0 && weaponPerk == "Large" && str > 60)
            attack *= 2;
        if (this.perks.findByType(PerkLib.LightningStrikes) >= 0 && spe >= 60 && weaponPerk != "Large") {
            attack += Math.round((spe - 50) / 3);
        }
        if (this.effects.findByType(StatusAffects.Berzerking) >= 0) attack += 30;
        attack += this.effects.getValue1Of(StatusAffects.ChargeWeapon);
        return attack;
    }
    public get weaponBaseAttack(): number {
        return _weapon.attack;
    }
    public get weaponPerk(): string {
        return _weapon.perk || "";
    }
    public get weaponValue(): number {
        return _weapon.value;
    }

    public get armor(): Armor {
        return _armor;
    }

    public setArmor(newArmor: Armor): Armor {
        // Returns the old armor, allowing the caller to discard it, store it or try to place it in the player's inventory
        // Can return null, in which case caller should discard.
        const oldArmor: Armor = _armor.playerRemove(); // The armor is responsible for removing any bonuses, perks, etc.
        if (newArmor == null) {
            CoC_Settings.error(short + ".armor is set to null");
            newArmor = ArmorLib.COMFORTABLE_UNDERCLOTHES;
        }
        _armor = newArmor.playerEquip(); // The armor can also choose to equip something else - useful for Ceraph's trap armor
        return oldArmor;
    }

    /*
    public function set armor(value:Armor):void
    {
        if (value == null){
            CoC_Settings.error(short+".armor is set to null");
            value = ArmorLib.COMFORTABLE_UNDERCLOTHES;
        }
        value.equip(this, false, false);
    }
    */

    // in case you don't want to call the value.equip
    public setArmorHiddenField(value: Armor): void {
        this._armor = value;
    }

    public get weapon(): Weapon {
        return _weapon;
    }

    public setWeapon(newWeapon: Weapon): Weapon {
        // Returns the old weapon, allowing the caller to discard it, store it or try to place it in the player's inventory
        // Can return null, in which case caller should discard.
        const oldWeapon: Weapon = _weapon.playerRemove(); // The weapon is responsible for removing any bonuses, perks, etc.
        if (newWeapon == null) {
            CoC_Settings.error(short + ".weapon is set to null");
            newWeapon = WeaponLib.FISTS;
        }
        _weapon = newWeapon.playerEquip(); // The weapon can also choose to equip something else
        return oldWeapon;
    }

    /*
    public function set weapon(value:Weapon):void
    {
        if (value == null){
            CoC_Settings.error(short+".weapon is set to null");
            value = WeaponLib.FISTS;
        }
        value.equip(this, false, false);
    }
    */

    // in case you don't want to call the value.equip
    public setWeaponHiddenField(value: Weapon): void {
        this._weapon = value;
    }

    public reduceDamage(damage: number): number {
        damage = int(damage - rand(tou) - armorDef);
        // EZ MOAD half damage
        if (flags[kFLAGS.EASY_MODE_ENABLE_FLAG] == 1) damage /= 2;
        if (this.effects.findByType(StatusAffects.Shielding) >= 0) {
            damage -= 30;
            if (damage < 1) damage = 1;
        }
        // Black cat beer = 25% reduction!
        if (this.effects.getValue1Of(StatusAffects.BlackCatBeer) > 0)
            damage = Math.round(damage * .75);

        // Take damage you masochist!
        if (this.perks.findByType(PerkLib.Masochist) >= 0 && lib >= 60) {
            damage = Math.round(damage * .7);
            dynStats("lus", 2);
            // Dont let it round too far down!
            if (damage < 1) damage = 1;
        }
        if (this.perks.findByType(PerkLib.ImmovableObject) >= 0 && tou >= 75) {
            damage = Math.round(damage * .8);
            if (damage < 1) damage = 1;
        }

        // Uma's Massage bonuses
        const statIndex: number = this.effects.findByType(StatusAffects.UmasMassage);
        if (statIndex >= 0) {
            if (this.effects[statIndex].value1 == UmasShop.MASSAGE_RELAXATION) {
                damage = Math.round(damage * this.effects[statIndex].value2);
            }
        }

        // Uma's Accupuncture Bonuses
        let modArmorDef: number = 0;
        if (this.perks.findByType(PerkLib.ChiReflowDefense) >= 0) modArmorDef = ((armorDef * UmasShop.NEEDLEWORK_DEFENSE_DEFENSE_MULTI) - armorDef);
        if (this.perks.findByType(PerkLib.ChiReflowAttack) >= 0) modArmorDef = ((armorDef * UmasShop.NEEDLEWORK_ATTACK_DEFENSE_MULTI) - armorDef);
        damage -= modArmorDef;
        if (damage < 0) damage = 0;
        return damage;
    }

    public takeDamage(damage: number): number {
        // Round
        damage = Math.round(damage);
        // we return "1 damage received" if it is in (0..1) but deduce no HP
        const returnDamage: number = (damage > 0 && damage < 1) ? 1 : damage;
        if (damage > 0) {
            HP -= damage;
            game.mainView.statsView.showStatDown('hp');
            if (flags[kFLAGS.MINOTAUR_CUM_REALLY_ADDICTED_STATE] > 0) {
                dynStats("lus", int(damage / 2));
            }
            // Prevent negatives
            if (HP <= 0) {
                HP = 0;
                // This call did nothing. There is no event 5010: if (game.inCombat) doNext(5010);
            }
        }
        return returnDamage;
    }

    /**
     * @return 0: did not avoid; 1-3: avoid with varying difference between
     * speeds (1: narrowly avoid, 3: deftly avoid)
     */
    public speedDodge(monster: Monster): number {
        const diff: number = spe - monster.spe;
        const rnd: number = int(Math.random() * ((diff / 4) + 80));
        if (rnd <= 80) return 0;
        else if (diff < 8) return 1;
        else if (diff < 20) return 2;
        else return 3;
    }

    // Body Type
    public bodyType(): string {
        let desc: string = "";
        // OLD STUFF
        // SUPAH THIN
        if (thickness < 10) {
            // SUPAH BUFF
            if (tone > 90)
                desc += "a lithe body covered in highly visible muscles";
            else if (tone > 75)
                desc += "an incredibly thin, well-muscled frame";
            else if (tone > 50)
                desc += "a very thin body that has a good bit of muscle definition";
            else if (tone > 25)
                desc += "a lithe body and only a little bit of muscle definition";
            else
                desc += "a waif-thin body, and soft, forgiving flesh";
        }
        // Pretty thin
        else if (thickness < 25) {
            if (tone > 90)
                desc += "a thin body and incredible muscle definition";
            else if (tone > 75)
                desc += "a narrow frame that shows off your muscles";
            else if (tone > 50)
                desc += "a somewhat lithe body and a fair amount of definition";
            else if (tone > 25)
                desc += "a narrow, soft body that still manages to show off a few muscles";
            else
                desc += "a thin, soft body";
        }
        // Somewhat thin
        else if (thickness < 40) {
            if (tone > 90)
                desc += "a fit, somewhat thin body and rippling muscles all over";
            else if (tone > 75)
                desc += "a thinner-than-average frame and great muscle definition";
            else if (tone > 50)
                desc += "a somewhat narrow body and a decent amount of visible muscle";
            else if (tone > 25)
                desc += "a moderately thin body, soft curves, and only a little bit of muscle";
            else
                desc += "a fairly thin form and soft, cuddle-able flesh";
        }
        // average
        else if (thickness < 60) {
            if (tone > 90)
                desc += "average thickness and a bevy of perfectly defined muscles";
            else if (tone > 75)
                desc += "an average-sized frame and great musculature";
            else if (tone > 50)
                desc += "a normal waistline and decently visible muscles";
            else if (tone > 25)
                desc += "an average body and soft, unremarkable flesh";
            else
                desc += "an average frame and soft, untoned flesh with a tendency for jiggle";
        }
        else if (thickness < 75) {
            if (tone > 90)
                desc += "a somewhat thick body that's covered in slabs of muscle";
            else if (tone > 75)
                desc += "a body that's a little bit wide and has some highly-visible muscles";
            else if (tone > 50)
                desc += "a solid build that displays a decent amount of muscle";
            else if (tone > 25)
                desc += "a slightly wide frame that displays your curves and has hints of muscle underneath";
            else
                desc += "a soft, plush body with plenty of jiggle";
        }
        else if (thickness < 90) {
            if (tone > 90)
                desc += "a thickset frame that gives you the appearance of a wall of muscle";
            else if (tone > 75)
                desc += "a burly form and plenty of muscle definition";
            else if (tone > 50)
                desc += "a solid, thick frame and a decent amount of muscles";
            else if (tone > 25)
                desc += "a wide-set body, some soft, forgiving flesh, and a hint of muscle underneath it";
            else {
                desc += "a wide, cushiony body";
                if (gender >= 2 || this.breasts.biggestTitSize() > 3 || hipRating > 7 || buttRating > 7)
                    desc += " and plenty of jiggle on your curves";
            }
        }
        // Chunky monkey
        else {
            if (tone > 90)
                desc += "an extremely thickset frame and so much muscle others would find you harder to move than a huge boulder";
            else if (tone > 75)
                desc += "a very wide body and enough muscle to make you look like a tank";
            else if (tone > 50)
                desc += "an extremely substantial frame packing a decent amount of muscle";
            else if (tone > 25) {
                desc += "a very wide body";
                if (gender >= 2 || this.breasts.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
                    desc += ", lots of curvy jiggles,";
                desc += " and hints of muscle underneath";
            }
            else {
                desc += "a thick";
                if (gender >= 2 || this.breasts.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
                    desc += ", voluptuous";
                desc += " body and plush, ";
                if (gender >= 2 || this.breasts.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
                    desc += " jiggly curves";
                else
                    desc += " soft flesh";
            }
        }
        return desc;
    }

    public race(): string {
        // Determine race type:
        let race: string = "human";
        if (lowerBody == 4)
            race = "centaur";
        if (lowerBody == 11)
            race = "pony-kin";
        if (catScore() >= 4)
            race = "cat-" + mf("boy", "girl");
        if (lizardScore() >= 4) {
            if (gender == 0)
                race = "lizan";
            else if (gender == 1)
                race = "male lizan";
            else if (gender == 2)
                race = "female lizan";
            else
                race = "hermaphrodite lizan";
        }
        if (dragonScore() >= 4) {
            race = "dragon-morph";
            if (faceType == 0)
                race = "dragon-" + mf("man", "girl");
        }
        if (raccoonScore() >= 4) {
            race = "raccoon-morph";
            if (balls > 0 && ballSize > 5)
                race = "tanuki-morph";
        }
        if (dogScore() >= 4) {
            race = "dog-morph";
            if (faceType == 0)
                race = "dog-" + mf("man", "girl");
        }
        if (foxScore() >= 4) {
            if (skinType == 1)
                race = "fox-morph";
            else
                race = "fox-" + mf("morph", "girl");
        }
        if (ferretScore() >= 4) {
            if (skinType == 1)
                race = "ferret-morph";
            else
                race = "ferret-" + mf("morph", "girl");
        }
        if (kitsuneScore() >= 4) {
            race = "kitsune";
        }
        if (horseScore() >= 3) {
            if (lowerBody == 4)
                race = "centaur-morph";
            else
                race = "equine-morph";
        }
        if (mutantScore() >= 5 && race == "human")
            race = "corrupted mutant";
        if (minoScore() >= 4)
            race = "minotaur-morph";
        if (cowScore() > 5) {
            race = "cow-";
            race += mf("morph", "girl");
        }
        if (beeScore() >= 5)
            race = "bee-morph";
        if (goblinScore() >= 5)
            race = "goblin";
        if (humanScore() >= 5 && race == "corrupted mutant")
            race = "somewhat human mutant";
        if (demonScore() > 4)
            race = "demon-morph";
        if (sharkScore() >= 3)
            race = "shark-morph";
        if (bunnyScore() >= 4)
            race = "bunny-" + mf("boy", "girl");
        if (harpyScore() >= 4) {
            if (gender >= 2)
                race = "harpy";
            else
                race = "avian";
        }
        if (spiderScore() >= 4) {
            race = "spider-morph";
            if (mf("no", "yes") == "yes")
                race = "spider-girl";
            if (lowerBody == 16)
                race = "drider";
        }
        if (kangaScore() >= 4)
            race = "kangaroo-morph";
        if (mouseScore() >= 3) {
            if (faceType != 16)
                race = "mouse-" + mf("boy", "girl");
            else
                race = "mouse-morph";
        }
        if (lowerBody == 3)
            race = "naga";
        if (lowerBody == 4)
            race = "centaur";

        if (gooScore() >= 3) {
            race = "goo-";
            race += mf("boi", "girl");
        }
        return race;
    }

    // determine demon rating
    public demonScore(): number {
        let demonCounter: number = 0;
        if (hornType == 1 && horns > 0)
            demonCounter++;
        if (hornType == 1 && horns > 4)
            demonCounter++;
        if (tailType == 3)
            demonCounter++;
        if (wingType == 6 || wingType == 7)
            demonCounter++;
        if (skinType == 0 && cor > 50)
            demonCounter++;
        if (faceType == 0 && cor > 50)
            demonCounter++;
        if (lowerBody == 5 || lowerBody == 6)
            demonCounter++;
        if (this.cocks.demonCocks() > 0)
            demonCounter++;
        return demonCounter;
    }

    // Determine Human Rating
    public humanScore(): number {
        let humanCounter: number = 0;
        if (faceType == 0)
            humanCounter++;
        if (skinType == 0)
            humanCounter++;
        if (horns == 0)
            humanCounter++;
        if (tailType == 0)
            humanCounter++;
        if (wingType == 0)
            humanCounter++;
        if (lowerBody == 0)
            humanCounter++;
        if (this.cocks.normalCocks() == 1 && this.cocks.length == 1)
            humanCounter++;
        if (breastRows.length == 1 && skinType == 0)
            humanCounter++;
        return humanCounter;
    }

    // Determine minotaur rating
    public minoScore(): number {
        let minoCounter: number = 0;
        if (faceType == 3)
            minoCounter++;
        if (earType == 3)
            minoCounter++;
        if (tailType == 4)
            minoCounter++;
        if (hornType == 2)
            minoCounter++;
        if (lowerBody == 1 && minoCounter > 0)
            minoCounter++;
        if (tallness > 80 && minoCounter > 0)
            minoCounter++;
        if (this.cocks.length > 0 && minoCounter > 0) {
            if (this.cocks.horseCocks() > 0)
                minoCounter++;
        }
        if (vaginas.length > 0)
            minoCounter--;
        return minoCounter;
    }

    public get minotaurScore(): number {
        return this.minoScore();
    }

    // Determine cow rating
    public cowScore(): number {
        let minoCounter: number = 0;
        if (faceType == 0)
            minoCounter++;
        if (faceType == 3)
            minoCounter--;
        if (earType == 3)
            minoCounter++;
        if (tailType == 4)
            minoCounter++;
        if (hornType == 2)
            minoCounter++;
        if (lowerBody == 1 && minoCounter > 0)
            minoCounter++;
        if (tallness >= 73 && minoCounter > 0)
            minoCounter++;
        if (vaginas.length > 0)
            minoCounter++;
        if (this.breasts.biggestTitSize() > 4 && minoCounter > 0)
            minoCounter++;
        if (this.breasts.biggestLactation() > 2 && minoCounter > 0)
            minoCounter++;
        return minoCounter;
    }

    public sandTrapScore(): number {
        let counter: number = 0;
        if (this.effects.findByType(StatusAffects.BlackNipples) >= 0)
            counter++;
        if (hasVagina() && vaginaType() == 5)
            counter++;
        if (eyeType == 2)
            counter++;
        if (wingType == 12)
            counter++;
        if (this.effects.findByType(StatusAffects.Uniball) >= 0)
            counter++;
        return counter;
    }

    // Determine Bee Rating
    public beeScore(): number {
        let beeCounter: number = 0;
        if (hairColor == "shiny black")
            beeCounter++;
        if (hairColor == "black and yellow")
            beeCounter += 2;
        if (antennae > 0) {
            beeCounter++;
            if (faceType == 0)
                beeCounter++;
        }
        if (lowerBody == 7) {
            beeCounter++;
            if (vaginas.length == 1)
                beeCounter++;
        }
        if (tailType == 6)
            beeCounter++;
        if (wingType == 1)
            beeCounter++;
        if (wingType == 2)
            beeCounter++;
        return beeCounter;
    }
    // Determine Ferret Rating!
    public ferretScore(): number {
        let counter: number = 0;
        if (faceType == FACE_FERRET_MASK) counter++;
        if (faceType == FACE_FERRET) counter += 2;
        if (earType == EARS_FERRET) counter++;
        if (tailType == TAIL_TYPE_FERRET) counter++;
        if (lowerBody == LOWER_BODY_FERRET) counter++;
        if (skinType == SKIN_TYPE_FUR && counter > 0) counter++;
        return counter;
    }
    // Determine Dog Rating
    public dogScore(): number {
        let dogCounter: number = 0;
        if (faceType == 2)
            dogCounter++;
        if (earType == 2)
            dogCounter++;
        if (tailType == 2)
            dogCounter++;
        if (lowerBody == 2)
            dogCounter++;
        if (this.cocks.dogCocks() > 0)
            dogCounter++;
        if (breastRows.length > 1)
            dogCounter++;
        if (breastRows.length == 3)
            dogCounter++;
        if (breastRows.length > 3)
            dogCounter--;
        // Fur only counts if some canine features are present
        if (skinType == 1 && dogCounter > 0)
            dogCounter++;
        return dogCounter;
    }

    public mouseScore(): number {
        let coonCounter: number = 0;
        if (earType == 12)
            coonCounter++;
        if (tailType == 16)
            coonCounter++;

        if (faceType == 15)
            coonCounter++;
        if (faceType == 16)
            coonCounter += 2;
        // Fur only counts if some canine features are present
        if (skinType == 1 && coonCounter > 0)
            coonCounter++;

        if (tallness < 55 && coonCounter > 0)
            coonCounter++;
        if (tallness < 45 && coonCounter > 0)
            coonCounter++;
        return coonCounter;
    }

    public raccoonScore(): number {
        let coonCounter: number = 0;
        if (faceType == 13)
            coonCounter++;
        if (faceType == 14)
            coonCounter += 2;
        if (earType == 11)
            coonCounter++;
        if (tailType == 15)
            coonCounter++;
        if (lowerBody == 19)
            coonCounter++;
        if (coonCounter > 0 && balls > 0)
            coonCounter++;
        // Fur only counts if some canine features are present
        if (skinType == 1 && coonCounter > 0)
            coonCounter++;
        return coonCounter;
    }

    // Determine Fox Rating
    public foxScore(): number {
        let foxCounter: number = 0;
        if (faceType == 11)
            foxCounter++;
        if (earType == 9)
            foxCounter++;
        if (tailType == 13)
            foxCounter++;
        if (lowerBody == 17)
            foxCounter++;
        if (this.cocks.dogCocks() > 0 && foxCounter > 0)
            foxCounter++;
        if (breastRows.length > 1 && foxCounter > 0)
            foxCounter++;
        if (breastRows.length == 3 && foxCounter > 0)
            foxCounter++;
        if (breastRows.length == 4 && foxCounter > 0)
            foxCounter++;
        // Fur only counts if some canine features are present
        if (skinType == 1 && foxCounter > 0)
            foxCounter++;
        return foxCounter;
    }

    // Determine cat Rating
    public catScore(): number {
        let catCounter: number = 0;
        if (faceType == 6)
            catCounter++;
        if (earType == 5)
            catCounter++;
        if (tailType == 8)
            catCounter++;
        if (lowerBody == 9)
            catCounter++;
        if (this.cocks.catCocks() > 0)
            catCounter++;
        if (breastRows.length > 1 && catCounter > 0)
            catCounter++;
        if (breastRows.length == 3 && catCounter > 0)
            catCounter++;
        if (breastRows.length > 3)
            catCounter -= 2;
        // Fur only counts if some canine features are present
        if (skinType == 1 && catCounter > 0)
            catCounter++;
        return catCounter;
    }

    // Determine lizard rating
    public lizardScore(): number {
        let lizardCounter: number = 0;
        if (faceType == 7)
            lizardCounter++;
        if (earType == 6)
            lizardCounter++;
        if (tailType == 9)
            lizardCounter++;
        if (lowerBody == 10)
            lizardCounter++;
        if (this.cocks.lizardCocks() > 0)
            lizardCounter++;
        if (horns > 0 && (hornType == 3 || hornType == 4))
            lizardCounter++;
        if (skinType == 2)
            lizardCounter++;
        return lizardCounter;
    }

    public spiderScore(): number {
        let score: number = 0;
        if (eyeType == 1)
            score += 2;
        if (faceType == 10)
            score++;
        if (armType == 2)
            score++;
        if (lowerBody == 15 || lowerBody == 16)
            score += 2;
        else if (score > 0)
            score--;
        if (tailType == 5)
            score += 2;
        if (skinType > 0 && score > 0)
            score--;
        return score;
    }

    // Determine Horse Rating
    public horseScore(): number {
        let horseCounter: number = 0;
        if (faceType == 1)
            horseCounter++;
        if (earType == 1)
            horseCounter++;
        if (tailType == 1)
            horseCounter++;
        if (this.cocks.horseCocks() > 0)
            horseCounter++;
        if (lowerBody == 1 || lowerBody == 4)
            horseCounter++;
        // Fur only counts if some equine features are present
        if (skinType == 1 && horseCounter > 0)
            horseCounter++;
        return horseCounter;
    }

    // Determine kitsune Rating
    public kitsuneScore(): number {
        let kitsuneCounter: number = 0;
        // If the character has fox ears, +1
        if (earType == 9)
            kitsuneCounter++;
        // If the character has a fox tail, +1
        if (tailType == 13)
            kitsuneCounter++;
        // If the character has two or more fox tails, +2
        if (tailType == 13 && tailVenom >= 2)
            kitsuneCounter += 2;
        // If the character has tattooed skin, +1
        // 9999
        // If the character has a 'vag of holding', +1
        if (vaginalCapacity() >= 8000)
            kitsuneCounter++;
        // If the character's kitsune score is greater than 0 and:
        // If the character has a normal face, +1
        if (kitsuneCounter > 0 && faceType == 0)
            kitsuneCounter++;
        // If the character's kitsune score is greater than 1 and:
        // If the character has "blonde","black","red","white", or "silver" hair, +1
        if (kitsuneCounter > 0 && (hairColor == "golden blonde" || hairColor == "black" || hairColor == "red" || hairColor == "white" || hairColor == "silver blonde"))
            kitsuneCounter++;
        // If the character's femininity is 40 or higher, +1
        if (kitsuneCounter > 0 && femininity >= 40)
            kitsuneCounter++;
        // If the character has fur, scales, or gooey skin, -1
        if (skinType > 1)
            kitsuneCounter -= 2;
        if (skinType == 1)
            kitsuneCounter--;
        // If the character has abnormal legs, -1
        if (lowerBody != 0)
            kitsuneCounter--;
        // If the character has a nonhuman face, -1
        if (faceType != 0)
            kitsuneCounter--;
        // If the character has ears other than fox ears, -1
        if (earType != 9)
            kitsuneCounter--;
        // If the character has tail(s) other than fox tails, -1
        if (tailType != 13)
            kitsuneCounter--;

        return kitsuneCounter;

    }

    // Determine Horse Rating
    public dragonScore(): number {
        let dragonCounter: number = 0;
        if (faceType == 12)
            dragonCounter++;
        if (earType == 10)
            dragonCounter++;
        if (tailType == 14)
            dragonCounter++;
        if (tongueType == 3)
            dragonCounter++;
        if (this.cocks.dragonCocks() > 0)
            dragonCounter++;
        if (wingType == 10)
            dragonCounter++;
        if (wingType == 11)
            dragonCounter += 2;
        if (lowerBody == 18)
            dragonCounter++;
        if (skinType == 2 && dragonCounter > 0)
            dragonCounter++;
        if (hornType == HORNS_DRACONIC_X4_12_INCH_LONG || hornType == HORNS_DRACONIC_X2)
            dragonCounter++;
        return dragonCounter;
    }

    // Goblinscore
    public goblinScore(): number {
        let horseCounter: number = 0;
        if (earType == 4)
            horseCounter++;
        if (skinTone == "pale yellow" || skinTone == "grayish-blue" || skinTone == "green" || skinTone == "dark green")
            horseCounter++;
        if (horseCounter > 0) {
            if (faceType == 0)
                horseCounter++;
            if (tallness < 48)
                horseCounter++;
            if (hasVagina())
                horseCounter++;
            if (lowerBody == 0)
                horseCounter++;
        }
        return horseCounter;
    }

    // Gooscore
    public gooScore(): number {
        let gooCounter: number = 0;
        if (hairType == 3)
            gooCounter++;
        if (skinAdj == "slimy")
            gooCounter++;
        if (lowerBody == 8)
            gooCounter++;
        if (vaginalCapacity() > 9000)
            gooCounter++;
        if (this.effects.findByType(StatusAffects.SlimeCraving) >= 0)
            gooCounter++;
        return gooCounter;
    }

    // Nagascore
    public nagaScore(): number {
        let nagaCounter: number = 0;
        if (faceType == 5)
            nagaCounter++;
        if (tongueType == 1)
            nagaCounter++;
        if (nagaCounter > 0 && antennae == 0)
            nagaCounter++;
        if (nagaCounter > 0 && wingType == 0)
            nagaCounter++;
        return nagaCounter;
    }

    // Bunnyscore
    public bunnyScore(): number {
        let bunnyCounter: number = 0;
        if (faceType == 8)
            bunnyCounter++;
        if (tailType == 10)
            bunnyCounter++;
        if (earType == 7)
            bunnyCounter++;
        if (lowerBody == 12)
            bunnyCounter++;
        // More than 2 balls reduces bunny score
        if (balls > 2 && bunnyCounter > 0)
            bunnyCounter--;
        // Human skin on bunmorph adds
        if (skinType == 0 && bunnyCounter > 1)
            bunnyCounter++;
        // No wings and antennae a plus
        if (bunnyCounter > 0 && antennae == 0)
            bunnyCounter++;
        if (bunnyCounter > 0 && wingType == 0)
            bunnyCounter++;
        return bunnyCounter;
    }

    // Harpyscore
    public harpyScore(): number {
        let harpy: number = 0;
        if (armType == 1)
            harpy++;
        if (hairType == 1)
            harpy++;
        if (wingType == 9)
            harpy++;
        if (tailType == 11)
            harpy++;
        if (lowerBody == 13)
            harpy++;
        if (harpy >= 2 && faceType == 0)
            harpy++;
        if (harpy >= 2 && (earType == 0 || earType == 4))
            harpy++;
        return harpy;
    }

    // Kangascore
    public kangaScore(): number {
        let kanga: number = 0;
        if (this.cocks.kangaCocks() > 0)
            kanga++;
        if (earType == 8)
            kanga++;
        if (tailType == 12)
            kanga++;
        if (lowerBody == 14)
            kanga++;
        if (faceType == 9)
            kanga++;
        if (kanga >= 2 && skinType == 1)
            kanga++;
        return kanga;
    }

    // sharkscore
    public sharkScore(): number {
        let sharkCounter: number = 0;
        if (faceType == 4)
            sharkCounter++;
        if (wingType == 8)
            sharkCounter++;
        if (tailType == 7)
            sharkCounter++;
        return sharkCounter;
    }

    // Determine Mutant Rating
    public mutantScore(): number {
        let mutantCounter: number = 0;
        if (faceType > 0)
            mutantCounter++;
        if (skinType > 0)
            mutantCounter++;
        if (tailType > 0)
            mutantCounter++;
        if (this.cocks.length > 1)
            mutantCounter++;
        if (hasCock() && hasVagina())
            mutantCounter++;
        if (this.breasts.hasFuckableNipples())
            mutantCounter++;
        if (breastRows.length > 1)
            mutantCounter++;
        if (faceType == 1) {
            if (skinType == 1)
                mutantCounter--;
            if (tailType == 1)
                mutantCounter--;
        }
        if (faceType == 2) {
            if (skinType == 1)
                mutantCounter--;
            if (tailType == 2)
                mutantCounter--;
        }
        return mutantCounter--;
    }

    public lactationQ(): number {
        if (this.breasts.biggestLactation() < 1)
            return 0;
        // (Milk production TOTAL= breastSize x 10 * lactationMultiplier * breast total * milking-endurance (1- default, maxes at 2.  Builds over time as milking as done)
        // (Small – 0.01 mLs – Size 1 + 1 Multi)
        // (Large – 0.8 - Size 10 + 4 Multi)
        // (HUGE – 2.4 - Size 12 + 5 Multi + 4 tits)
        let total: number;
        if (this.effects.findByType(StatusAffects.LactationEndurance) < 0)
            this.effects.create(StatusAffects.LactationEndurance, 1, 0, 0, 0);
        total = this.breasts.biggestTitSize() * 10 * this.breasts.averageLactation() * this.effects.getValue1Of(StatusAffects.LactationEndurance) * this.breasts.totalBreasts();
        if (this.effects.getValue1Of(StatusAffects.LactationReduction) >= 48)
            total = total * 1.5;
        return total;
    }

    public isLactating(): boolean {
        if (lactationQ() > 0) return true;
        return false;
    }

    public cuntChange(cArea: number, display: boolean, spacingsF: boolean = false, spacingsB: boolean = true): boolean {
        if (vaginas.length == 0) return false;
        const wasVirgin: boolean = vaginas[0].virgin;
        const stretched: boolean = cuntChangeNoDisplay(cArea);
        const devirgined: boolean = wasVirgin && !vaginas[0].virgin;
        if (devirgined) {
            if (spacingsF) outputText("  ");
            outputText("<b>Your hymen is torn, robbing you of your virginity.</b>", false);
            if (spacingsB) outputText("  ");
        }
        // STRETCH SUCCESSFUL - begin flavor text if outputting it!
        if (display && stretched) {
            // Virgins get different formatting
            if (devirgined) {
                // If no spaces after virgin loss
                if (!spacingsB) outputText("  ");
            }
            // Non virgins as usual
            else if (spacingsF) outputText("  ");
            if (vaginas[0].vaginalLooseness == VAGINA_LOOSENESS_LEVEL_CLOWN_CAR) outputText("<b>Your " + Appearance.vaginaDescript(this, 0) + " is stretched painfully wide, large enough to accomodate most beasts and demons.</b>");
            if (vaginas[0].vaginalLooseness == VAGINA_LOOSENESS_GAPING_WIDE) outputText("<b>Your " + Appearance.vaginaDescript(this, 0) + " is stretched so wide that it gapes continually.</b>");
            if (vaginas[0].vaginalLooseness == VAGINA_LOOSENESS_GAPING) outputText("<b>Your " + Appearance.vaginaDescript(this, 0) + " painfully stretches, the lips now wide enough to gape slightly.</b>");
            if (vaginas[0].vaginalLooseness == VAGINA_LOOSENESS_LOOSE) outputText("<b>Your " + Appearance.vaginaDescript(this, 0) + " is now very loose.</b>", false);
            if (vaginas[0].vaginalLooseness == VAGINA_LOOSENESS_NORMAL) outputText("<b>Your " + Appearance.vaginaDescript(this, 0) + " is now a little loose.</b>", false);
            if (vaginas[0].vaginalLooseness == VAGINA_LOOSENESS_TIGHT) outputText("<b>Your " + Appearance.vaginaDescript(this, 0) + " is stretched out to a more normal size.</b>");
            if (spacingsB) outputText("  ");
        }
        return stretched;
    }

    public buttChange(cArea: number, display: boolean, spacingsF: boolean = true, spacingsB: boolean = true): boolean {
        const stretched: boolean = buttChangeNoDisplay(cArea);
        // STRETCH SUCCESSFUL - begin flavor text if outputting it!
        if (stretched && display) {
            if (spacingsF) outputText("  ");
            buttChangeDisplay();
            if (spacingsB) outputText("  ");
        }
        return stretched;
    }

    public buttChangeDisplay(): void {	// Allows the test for stretching and the text output to be separated
        if (ass.analLooseness == 5) outputText("<b>Your " + Appearance.assholeDescript(this) + " is stretched even wider, capable of taking even the largest of demons and beasts.</b>");
        if (ass.analLooseness == 4) outputText("<b>Your " + Appearance.assholeDescript(this) + " becomes so stretched that it gapes continually.</b>", false);
        if (ass.analLooseness == 3) outputText("<b>Your " + Appearance.assholeDescript(this) + " is now very loose.</b>");
        if (ass.analLooseness == 2) outputText("<b>Your " + Appearance.assholeDescript(this) + " is now a little loose.</b>");
        if (ass.analLooseness == 1) outputText("<b>You have lost your anal virginity.</b>", false);
    }

    public slimeFeed(): void {
        if (this.effects.findByType(StatusAffects.SlimeCraving) >= 0) {
            // Reset craving value
            this.effects.setValue(StatusAffects.SlimeCraving, 1, 0);
            // Flag to display feed update and restore stats in event parser
            if (this.effects.findByType(StatusAffects.SlimeCravingFeed) < 0) {
                this.effects.create(StatusAffects.SlimeCravingFeed, 0, 0, 0, 0);
            }
        }
        if (this.perks.findByType(PerkLib.Diapause) >= 0) {
            flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00228] += 3 + rand(3);
            flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00229] = 1;
        }

    }

    public minoCumAddiction(raw: number = 10): void {
        // Increment minotaur cum intake count
        flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00340]++;
        // Fix if variables go out of range.
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] < 0) flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] = 0;
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] < 0) flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] = 0;
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] > 120) flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] = 120;

        // Turn off withdrawal
        // if(flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] > 1) flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] = 1;
        // Reset counter
        flags[kFLAGS.TIME_SINCE_LAST_CONSUMED_MINOTAUR_CUM] = 0;
        // If highly addicted, rises slower
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] >= 60) raw /= 2;
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] >= 80) raw /= 2;
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] >= 90) raw /= 2;
        // If in withdrawl, readdiction is potent!
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] == 3) raw += 10;
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] == 2) raw += 5;
        raw = Math.round(raw * 100) / 100;
        // PUT SOME CAPS ON DAT' SHIT
        if (raw > 50) raw = 50;
        if (raw < -50) raw = -50;
        flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] += raw;
        // Recheck to make sure shit didn't break
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] > 120) flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] = 120;
        if (flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] < 0) flags[kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER] = 0;

    }

    public hasSpells(): boolean {
        return spellCount() > 0;
    }

    public spellCount(): number {
        return [StatusAffects.KnowsArouse, StatusAffects.KnowsHeal, StatusAffects.KnowsMight, StatusAffects.KnowsCharge, StatusAffects.KnowsBlind, StatusAffects.KnowsWhitefire]
            .filter(function(item: StatusAffectType, index: number, array: any[]): boolean {
                return this.effects.findByType(item) >= 0;
            }, this)
            .length;
    }

    public hairDescription(player): string {
        return Appearance.hairDescription(this);
    }

    public shrinkTits(ignore_hyper_happy: boolean = false): void {
        if (flags[kFLAGS.HYPER_HAPPY] && !ignore_hyper_happy) {
            return;
        }
        if (breastRows.length == 1) {
            if (breastRows[0].breastRating > 0) {
                // Shrink if bigger than N/A cups
                let temp: number;
                temp = 1;
                breastRows[0].breastRating--;
                // Shrink again 50% chance
                if (breastRows[0].breastRating >= 1 && rand(2) == 0 && this.perks.findByType(PerkLib.BigTits) < 0) {
                    temp++;
                    breastRows[0].breastRating--;
                }
                if (breastRows[0].breastRating < 0) breastRows[0].breastRating = 0;
                // Talk about shrinkage
                if (temp == 1) outputText("\n\nYou feel a weight lifted from you, and realize your breasts have shrunk!  With a quick measure, you determine they're now " + breastCup(0) + "s.", false);
                if (temp == 2) outputText("\n\nYou feel significantly lighter.  Looking down, you realize your breasts are much smaller!  With a quick measure, you determine they're now " + breastCup(0) + "s.", false);
            }
        }
        else if (breastRows.length > 1) {
            // multiple
            outputText("\n", false);
            // temp2 = amount changed
            // temp3 = counter
            let temp2: number = 0;
            let temp3: number = breastRows.length;
            while (temp3 > 0) {
                temp3--;
                if (breastRows[temp3].breastRating > 0) {
                    breastRows[temp3].breastRating--;
                    if (breastRows[temp3].breastRating < 0) breastRows[temp3].breastRating = 0;
                    temp2++;
                    outputText("\n", false);
                    if (temp3 < breastRows.length - 1) outputText("...and y", false);
                    else outputText("Y", false);
                    outputText("our " + breastDescript(this, temp3) + " shrink, dropping to " + breastCup(temp3) + "s.", false);
                }
                if (breastRows[temp3].breastRating < 0) breastRows[temp3].breastRating = 0;
            }
            if (temp2 == 2) outputText("\nYou feel so much lighter after the change.", false);
            if (temp2 == 3) outputText("\nWithout the extra weight you feel particularly limber.", false);
            if (temp2 >= 4) outputText("\nIt feels as if the weight of the world has been lifted from your shoulders, or in this case, your chest.", false);
        }
    }

    public growTits(amount: number, rowsGrown: number, display: boolean, growthType: number): void {
        if (breastRows.length == 0) return;
        // GrowthType 1 = smallest grows
        // GrowthType 2 = Top Row working downward
        // GrowthType 3 = Only top row
        let temp2: number = 0;
        let temp3: number = 0;
        // Chance for "big tits" perked characters to grow larger!
        if (this.perks.findByType(PerkLib.BigTits) >= 0 && rand(3) == 0 && amount < 1) amount = 1;

        // Needs to be a number, since uint will round down to 0 prevent growth beyond a certain point
        let temp: number = breastRows.length;
        if (growthType == 1) {
            // Select smallest breast, grow it, move on
            while (rowsGrown > 0) {
                // Temp = counter
                temp = breastRows.length;
                // Temp2 = smallest tits index
                temp2 = 0;
                // Find smallest row
                while (temp > 0) {
                    temp--;
                    if (breastRows[temp].breastRating < breastRows[temp2].breastRating) temp2 = temp;
                }
                // Temp 3 tracks total amount grown
                temp3 += amount;
                trace("Breastrow chosen for growth: " + String(temp2) + ".");
                // Reuse temp to store growth amount for diminishing returns.
                temp = amount;
                if (!flags[kFLAGS.HYPER_HAPPY]) {
                    // Diminishing returns!
                    if (breastRows[temp2].breastRating > 3) {
                        if (this.perks.findByType(PerkLib.BigTits) < 0)
                            temp /= 1.5;
                        else
                            temp /= 1.3;
                    }

                    // WHy are there three options here. They all have the same result.
                    if (breastRows[temp2].breastRating > 7) {
                        if (this.perks.findByType(PerkLib.BigTits) < 0)
                            temp /= 2;
                        else
                            temp /= 1.5;
                    }
                    if (breastRows[temp2].breastRating > 9) {
                        if (this.perks.findByType(PerkLib.BigTits) < 0)
                            temp /= 2;
                        else
                            temp /= 1.5;
                    }
                    if (breastRows[temp2].breastRating > 12) {
                        if (this.perks.findByType(PerkLib.BigTits) < 0)
                            temp /= 2;
                        else
                            temp /= 1.5;
                    }
                }

                // Grow!
                trace("Growing breasts by ", temp);
                breastRows[temp2].breastRating += temp;
                rowsGrown--;
            }
        }

        if (!flags[kFLAGS.HYPER_HAPPY]) {
            // Diminishing returns!
            if (breastRows[0].breastRating > 3) {
                if (this.perks.findByType(PerkLib.BigTits) < 0) amount /= 1.5;
                else amount /= 1.3;
            }
            if (breastRows[0].breastRating > 7) {
                if (this.perks.findByType(PerkLib.BigTits) < 0) amount /= 2;
                else amount /= 1.5;
            }
            if (breastRows[0].breastRating > 12) {
                if (this.perks.findByType(PerkLib.BigTits) < 0) amount /= 2;
                else amount /= 1.5;
            }
        }
        /*if(breastRows[0].breastRating > 12) {
            if(hasPerk("Big Tits") < 0) amount/=2;
            else amount /= 1.5;
        }*/
        if (growthType == 2) {
            temp = 0;
            // Start at top and keep growing down, back to top if hit bottom before done.
            while (rowsGrown > 0) {
                if (temp + 1 > breastRows.length) temp = 0;
                breastRows[temp].breastRating += amount;
                trace("Breasts increased by " + amount + " on row " + temp);
                temp++;
                temp3 += amount;
                rowsGrown--;
            }
        }
        if (growthType == 3) {
            while (rowsGrown > 0) {
                rowsGrown--;
                breastRows[0].breastRating += amount;
                temp3 += amount;
            }
        }
        // Breast Growth Finished...talk about changes.
        trace("Growth ammout = ", amount);
        if (display) {
            if (growthType < 3) {
                if (amount <= 2) {
                    if (breastRows.length > 1) outputText("Your rows of " + breastDescript(this, 0) + " jiggle with added weight, growing a bit larger.", false);
                    if (breastRows.length == 1) outputText("Your " + breastDescript(this, 0) + " jiggle with added weight as they expand, growing a bit larger.", false);
                }
                else if (amount <= 4) {
                    if (breastRows.length > 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your rows of " + breastDescript(this, 0) + " expand significantly.", false);
                    if (breastRows.length == 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your " + breastDescript(this, 0) + " expand significantly.", false);
                }
                else {
                    if (breastRows.length > 1) outputText("You drop to your knees from a massive change in your body's center of gravity.  Your " + breastDescript(this, 0) + " tingle strongly, growing disturbingly large.", false);
                    if (breastRows.length == 1) outputText("You drop to your knees from a massive change in your center of gravity.  The tingling in your " + breastDescript(this, 0) + " intensifies as they continue to grow at an obscene rate.", false);
                }
                if (this.breasts.biggestTitSize() >= 8.5 && nippleLength < 2) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = 2;
                }
                if (this.breasts.biggestTitSize() >= 7 && nippleLength < 1) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = 1;
                }
                if (this.breasts.biggestTitSize() >= 5 && nippleLength < .75) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = .75;
                }
                if (this.breasts.biggestTitSize() >= 3 && nippleLength < .5) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = .5;
                }
            }
            else {
                if (amount <= 2) {
                    if (breastRows.length > 1) outputText("Your top row of " + breastDescript(this, 0) + " jiggles with added weight as it expands, growing a bit larger.", false);
                    if (breastRows.length == 1) outputText("Your row of " + breastDescript(this, 0) + " jiggles with added weight as it expands, growing a bit larger.", false);
                }
                if (amount > 2 && amount <= 4) {
                    if (breastRows.length > 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your top row of " + breastDescript(this, 0) + " expand significantly.", false);
                    if (breastRows.length == 1) outputText("You stagger as your chest gets much heavier.  Looking down, you watch with curiosity as your " + breastDescript(this, 0) + " expand significantly.", false);
                }
                if (amount > 4) {
                    if (breastRows.length > 1) outputText("You drop to your knees from a massive change in your body's center of gravity.  Your top row of " + breastDescript(this, 0) + " tingle strongly, growing disturbingly large.", false);
                    if (breastRows.length == 1) outputText("You drop to your knees from a massive change in your center of gravity.  The tinglng in your " + breastDescript(this, 0) + " intensifies as they continue to grow at an obscene rate.", false);
                }
                if (this.breasts.biggestTitSize() >= 8.5 && nippleLength < 2) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = 2;
                }
                if (this.breasts.biggestTitSize() >= 7 && nippleLength < 1) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = 1;
                }
                if (this.breasts.biggestTitSize() >= 5 && nippleLength < .75) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = .75;
                }
                if (this.breasts.biggestTitSize() >= 3 && nippleLength < .5) {
                    outputText("  A tender ache starts at your " + nippleDescription(player, 0) + "s as they grow to match your burgeoning breast-flesh.", false);
                    nippleLength = .5;
                }
            }
        }
    }

    // Determine minimum lust
    public minLust(): number {
        let min: number = 0;
        // Bimbo body boosts minimum lust by 40
        if (this.effects.findByType(StatusAffects.BimboChampagne) >= 0 || this.perks.findByType(PerkLib.BimboBody) >= 0 || this.perks.findByType(PerkLib.BroBody) >= 0 || this.perks.findByType(PerkLib.FutaForm) >= 0) {
            if (min > 40) min += 10;
            else if (min >= 20) min += 20;
            else min += 40;
        }
        // Omnibus' Gift
        if (this.perks.findByType(PerkLib.OmnibusGift) >= 0) {
            if (min > 40) min += 10;
            else if (min >= 20) min += 20;
            else min += 35;
        }
        // Nymph perk raises to 30
        if (this.perks.findByType(PerkLib.Nymphomania) >= 0) {
            if (min >= 40) min += 10;
            else if (min >= 20) min += 15;
            else min += 30;
        }
        // Oh noes anemone!
        if (this.effects.findByType(StatusAffects.AnemoneArousal) >= 0) {
            if (min >= 40) min += 10;
            else if (min >= 20) min += 20;
            else min += 30;
        }
        // Hot blooded perk raises min lust!
        if (this.perks.findByType(PerkLib.HotBlooded) >= 0) {
            if (min > 0) min += this.perks[this.perks.findByType(PerkLib.HotBlooded)].value1 / 2;
            else min += this.perks[this.perks.findByType(PerkLib.HotBlooded)].value1;
        }
        if (this.perks.findByType(PerkLib.LuststickAdapted) > 0) {
            if (min < 50) min += 10;
            else min += 5;
        }
        // Add points for Crimstone
        min += this.perks.getValue1Of(PerkLib.PiercedCrimstone);
        min += this.perks.getValue1Of(PerkLib.PentUp);
        // Harpy Lipstick status forces minimum lust to be at least 50.
        if (min < 50 && this.effects.findByType(StatusAffects.Luststick) >= 0) min = 50;
        // SHOULDRA BOOSTS
        // +20
        if (flags[kFLAGS.SHOULDRA_SLEEP_TIMER] <= -168) {
            min += 20;
            if (flags[kFLAGS.SHOULDRA_SLEEP_TIMER] <= -216)
                min += 30;
        }
        // SPOIDAH BOOSTS
        if (eggs() >= 20) {
            min += 10;
            if (eggs() >= 40) min += 10;
        }
        if (min < 30 && armorName == "lusty maiden's armor") min = 30;
        return min;
    }

    public minotaurAddicted(): boolean {
        return this.perks.findByType(PerkLib.MinotaurCumAddict) >= 0 || flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] >= 1;
    }
    public minotaurNeed(): boolean {
        return flags[kFLAGS.MINOTAUR_CUM_ADDICTION_STATE] > 1;
    }

    public clearStatuses(visibility: boolean): void {
        if (this.effects.findByType(StatusAffects.DriderIncubusVenom) >= 0) {
            str += this.effects.getValue2Of(StatusAffects.DriderIncubusVenom);
            this.effects.remove(StatusAffects.DriderIncubusVenom);
            mainView.statsView.showStatUp('str');
        }
        while (this.effects.findByType(StatusAffects.Web) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.Web);
            mainView.statsView.showStatUp('spe');
            // speUp.visible = true;
            // speDown.visible = false;
            this.effects.remove(StatusAffects.Web);
        }
        if (this.effects.findByType(StatusAffects.Shielding) >= 0) this.effects.remove(StatusAffects.Shielding);
        if (this.effects.findByType(StatusAffects.HolliConstrict) >= 0) this.effects.remove(StatusAffects.HolliConstrict);
        if (this.effects.findByType(StatusAffects.LustStones) >= 0) this.effects.remove(StatusAffects.LustStones);
        if (game.monster.effects.findByType(StatusAffects.Sandstorm) >= 0) game.monster.effects.remove(StatusAffects.Sandstorm);
        if (this.effects.findByType(StatusAffects.Sealed) >= 0) {
            this.effects.remove(StatusAffects.Sealed);
        }
        if (this.effects.findByType(StatusAffects.Berzerking) >= 0) {
            this.effects.remove(StatusAffects.Berzerking);
        }
        if (game.monster.effects.findByType(StatusAffects.TailWhip) >= 0) {
            game.monster.effects.remove(StatusAffects.TailWhip);
        }
        if (this.effects.findByType(StatusAffects.UBERWEB) >= 0) this.effects.remove(StatusAffects.UBERWEB);
        if (this.effects.findByType(StatusAffects.DriderKiss) >= 0) this.effects.remove(StatusAffects.DriderKiss);
        if (this.effects.findByType(StatusAffects.WebSilence) >= 0) this.effects.remove(StatusAffects.WebSilence);
        if (this.effects.findByType(StatusAffects.GooArmorSilence) >= 0) this.effects.remove(StatusAffects.GooArmorSilence);
        if (this.effects.findByType(StatusAffects.Bound) >= 0) this.effects.remove(StatusAffects.Bound);
        if (this.effects.findByType(StatusAffects.GooArmorBind) >= 0) this.effects.remove(StatusAffects.GooArmorBind);
        if (this.effects.findByType(StatusAffects.Whispered) >= 0) this.effects.remove(StatusAffects.Whispered);
        if (this.effects.findByType(StatusAffects.AkbalSpeed) >= 0) {
            dynStats("spe", this.effects.getValue1Of(StatusAffects.AkbalSpeed) * -1);
            this.effects.remove(StatusAffects.AkbalSpeed);
        }
        if (this.effects.findByType(StatusAffects.AmilyVenom) >= 0) {
            dynStats("str", this.effects.getValue1Of(StatusAffects.AmilyVenom), "spe", this.effects.getValue2Of(StatusAffects.AmilyVenom));
            this.effects.remove(StatusAffects.AmilyVenom);
        }
        while (this.effects.findByType(StatusAffects.Blind) >= 0) {
            this.effects.remove(StatusAffects.Blind);
        }
        if (this.effects.findByType(StatusAffects.SheilaOil) >= 0) {
            this.effects.remove(StatusAffects.SheilaOil);
        }
        if (game.monster.effects.findByType(StatusAffects.TwuWuv) >= 0) {
            inte += game.monster.effects.getValue1Of(StatusAffects.TwuWuv);
            statScreenRefresh();
            mainView.statsView.showStatUp('inte');
        }
        if (this.effects.findByType(StatusAffects.NagaVenom) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.NagaVenom);
            mainView.statsView.showStatUp('spe');
            // stats(0,0,this.effects.getValue1Of(StatusAffects.NagaVenom),0,0,0,0,0);
            this.effects.remove(StatusAffects.NagaVenom);
        }
        if (this.effects.findByType(StatusAffects.TentacleBind) >= 0) this.effects.remove(StatusAffects.TentacleBind);
        if (this.effects.findByType(StatusAffects.NagaBind) >= 0) this.effects.remove(StatusAffects.NagaBind);
        if (this.effects.findByType(StatusAffects.StoneLust) >= 0) {
            this.effects.remove(StatusAffects.StoneLust);
        }
        this.effects.remove(StatusAffects.FirstAttack);
        if (this.effects.findByType(StatusAffects.TemporaryHeat) >= 0) this.effects.remove(StatusAffects.TemporaryHeat);
        if (this.effects.findByType(StatusAffects.NoFlee) >= 0) this.effects.remove(StatusAffects.NoFlee);
        if (this.effects.findByType(StatusAffects.Poison) >= 0) this.effects.remove(StatusAffects.Poison);
        if (this.effects.findByType(StatusAffects.IsabellaStunned) >= 0) this.effects.remove(StatusAffects.IsabellaStunned);
        if (this.effects.findByType(StatusAffects.Stunned) >= 0) this.effects.remove(StatusAffects.Stunned);
        if (this.effects.findByType(StatusAffects.Confusion) >= 0) this.effects.remove(StatusAffects.Confusion);
        if (this.effects.findByType(StatusAffects.ThroatPunch) >= 0) this.effects.remove(StatusAffects.ThroatPunch);
        if (this.effects.findByType(StatusAffects.KissOfDeath) >= 0) this.effects.remove(StatusAffects.KissOfDeath);
        if (this.effects.findByType(StatusAffects.AcidSlap) >= 0) this.effects.remove(StatusAffects.AcidSlap);
        if (this.effects.findByType(StatusAffects.GooBind) >= 0) this.effects.remove(StatusAffects.GooBind);
        if (this.effects.findByType(StatusAffects.HarpyBind) >= 0) this.effects.remove(StatusAffects.HarpyBind);
        if (this.effects.findByType(StatusAffects.CalledShot) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.CalledShot);
            mainView.statsView.showStatUp('spe');
            // speDown.visible = false;
            // speUp.visible = true;
            this.effects.remove(StatusAffects.CalledShot);
        }
        if (this.effects.findByType(StatusAffects.DemonSeed) >= 0) {
            this.effects.remove(StatusAffects.DemonSeed);
        }
        if (this.effects.findByType(StatusAffects.ParalyzeVenom) >= 0) {
            str += this.effects[this.effects.findByType(StatusAffects.ParalyzeVenom)].value1;
            spe += this.effects[this.effects.findByType(StatusAffects.ParalyzeVenom)].value2;
            this.effects.remove(StatusAffects.ParalyzeVenom);
        }
        if (this.effects.findByType(StatusAffects.lustvenom) >= 0) {
            this.effects.remove(StatusAffects.lustvenom);
        }
        if (this.effects.findByType(StatusAffects.InfestAttempted) >= 0) {
            this.effects.remove(StatusAffects.InfestAttempted);
        }
        if (this.effects.findByType(StatusAffects.Might) >= 0) {
            dynStats("str", -this.effects.getValue1Of(StatusAffects.Might), "tou", -this.effects.getValue2Of(StatusAffects.Might));
            this.effects.remove(StatusAffects.Might);
        }
        if (this.effects.findByType(StatusAffects.ChargeWeapon) >= 0) {
            this.effects.remove(StatusAffects.ChargeWeapon);
        }
        if (this.effects.findByType(StatusAffects.Disarmed) >= 0) {
            this.effects.remove(StatusAffects.Disarmed);
            if (weapon == WeaponLib.FISTS) {
                // 					weapon = ItemType.lookupItem(flags[kFLAGS.PLAYER_DISARMED_WEAPON_ID]) as Weapon;
                // 					(ItemType.lookupItem(flags[kFLAGS.PLAYER_DISARMED_WEAPON_ID]) as Weapon).doEffect(this, false);
                setWeapon(ItemType.lookupItem(flags[kFLAGS.PLAYER_DISARMED_WEAPON_ID]) as Weapon);
            }
            else {
                flags[kFLAGS.BONUS_ITEM_AFTER_COMBAT_ID] = flags[kFLAGS.PLAYER_DISARMED_WEAPON_ID];
            }
        }
        if (this.effects.findByType(StatusAffects.AnemoneVenom) >= 0) {
            str += this.effects.getValue1Of(StatusAffects.AnemoneVenom);
            spe += this.effects.getValue2Of(StatusAffects.AnemoneVenom);
            // Make sure nothing got out of bounds
            dynStats("cor", 0);

            mainView.statsView.showStatUp('spe');
            mainView.statsView.showStatUp('str');
            // speUp.visible = true;
            // strUp.visible = true;
            this.effects.remove(StatusAffects.AnemoneVenom);
        }
        if (this.effects.findByType(StatusAffects.GnollSpear) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.GnollSpear);
            // Make sure nothing got out of bounds
            dynStats("cor", 0);
            mainView.statsView.showStatUp('spe');
            // speUp.visible = true;
            // speDown.visible = false;
            this.effects.remove(StatusAffects.GnollSpear);
        }
        if (this.effects.findByType(StatusAffects.BasiliskCompulsion) >= 0) this.effects.remove(StatusAffects.BasiliskCompulsion);
        if (this.effects.findByType(StatusAffects.BasiliskSlow) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.BasiliskSlow);
            mainView.statsView.showStatUp('spe');
            // speUp.visible = true;
            // speDown.visible = false;
            this.effects.remove(StatusAffects.BasiliskSlow);
        }
        while (this.effects.findByType(StatusAffects.IzmaBleed) >= 0) this.effects.remove(StatusAffects.IzmaBleed);
        if (this.effects.findByType(StatusAffects.GardenerSapSpeed) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.GardenerSapSpeed);
            mainView.statsView.showStatUp('spe');
            this.effects.remove(StatusAffects.GardenerSapSpeed);
        }
        if (this.effects.findByType(StatusAffects.KnockedBack) >= 0) this.effects.remove(StatusAffects.KnockedBack);
        if (this.effects.findByType(StatusAffects.RemovedArmor) >= 0) this.effects.remove(StatusAffects.KnockedBack);
        if (this.effects.findByType(StatusAffects.JCLustLevel) >= 0) this.effects.remove(StatusAffects.JCLustLevel);
        if (this.effects.findByType(StatusAffects.MirroredAttack) >= 0) this.effects.remove(StatusAffects.MirroredAttack);
        if (this.effects.findByType(StatusAffects.Tentagrappled) >= 0) this.effects.remove(StatusAffects.Tentagrappled);
        if (this.effects.findByType(StatusAffects.TentagrappleCooldown) >= 0) this.effects.remove(StatusAffects.TentagrappleCooldown);
        if (this.effects.findByType(StatusAffects.ShowerDotEffect) >= 0) this.effects.remove(StatusAffects.ShowerDotEffect);
        if (this.effects.findByType(StatusAffects.GardenerSapSpeed) >= 0) {
            spe += this.effects.getValue1Of(StatusAffects.GardenerSapSpeed);
            mainView.statsView.showStatUp('spe');
            this.effects.remove(StatusAffects.GardenerSapSpeed);
        }
        if (this.effects.findByType(StatusAffects.VineHealUsed) >= 0) this.effects.remove(StatusAffects.VineHealUsed);
        if (this.effects.findByType(StatusAffects.DriderIncubusVenom) >= 0) {
            str += this.effects.getValue2Of(StatusAffects.DriderIncubusVenom);
            this.effects.remove(StatusAffects.DriderIncubusVenom);
        }
        if (this.effects.findByType(StatusAffects.TaintedMind) >= 0) this.effects.remove(StatusAffects.TaintedMind);
        if (this.effects.findByType(StatusAffects.PurpleHaze) >= 0) this.effects.remove(StatusAffects.PurpleHaze);
        if (this.effects.findByType(StatusAffects.MinotaurKingMusk) >= 0) this.effects.remove(StatusAffects.MinotaurKingMusk);
        if (this.effects.findByType(StatusAffects.MinotaurKingsTouch) >= 0) this.effects.remove(StatusAffects.MinotaurKingsTouch);
        if (this.effects.findByType(StatusAffects.LethicesRapeTentacles) >= 0) this.effects.remove(StatusAffects.LethicesRapeTentacles);
        if (this.effects.findByType(StatusAffects.OnFire) >= 0) this.effects.remove(StatusAffects.OnFire);
        if (this.effects.findByType(StatusAffects.LethicesShell) >= 0) this.effects.remove(StatusAffects.LethicesShell);
        if (this.effects.findByType(StatusAffects.WhipSilence) >= 0) this.effects.remove(StatusAffects.WhipSilence);
        if (this.effects.findByType(StatusAffects.PigbysHands) >= 0) this.effects.remove(StatusAffects.PigbysHands);
    }

    public consumeItem(itype: ItemType, amount: number = 1): boolean {
        if (!hasItem(itype, amount)) {
            CoC_Settings.error("ERROR: consumeItem attempting to find " + amount + " item" + (amount > 1 ? "s" : "") + " to remove when the player has " + itemCount(itype) + ".");
            return false;
        }
        // From here we can be sure the player has enough of the item in inventory
        let slot: ItemSlotClass;
        while (amount > 0) {
            slot = getLowestSlot(itype); // Always draw from the least filled slots first
            if (slot.quantity > amount) {
                slot.quantity -= amount;
                amount = 0;
            }
            else { // If the slot holds the amount needed then amount will be zero after this
                amount -= slot.quantity;
                slot.emptySlot();
            }
        }
        return true;
        /*
                    var consumed:Boolean = false;
                    var slot:ItemSlotClass;
                    while (amount > 0)
                    {
                        if(!hasItem(itype,1))
                        {
                            CoC_Settings.error("ERROR: consumeItem in items.as attempting to find an item to remove when the has none.");
                            break;
                        }
                        trace("FINDING A NEW SLOT! (ITEMS LEFT: " + amount + ")");
                        slot = getLowestSlot(itype);
                        while (slot != null && amount > 0 && slot.quantity > 0)
                        {
                            amount--;
                            slot.quantity--;
                            if(slot.quantity == 0) slot.emptySlot();
                            trace("EATIN' AN ITEM");
                        }
                        //If on slot 5 and it doesn't have any more to take, break out!
                        if(slot == undefined) amount = -1

                    }
                    if(amount == 0) consumed = true;
                    return consumed;
        */
    }

    public getLowestSlot(itype: ItemType): ItemSlotClass {
        let minslot: ItemSlotClass = null;
        for (const slot of itemSlots) {
            if (slot.itype == itype) {
                if (minslot == null || slot.quantity < minslot.quantity) {
                    minslot = slot;
                }
            }
        }
        return minslot;
    }

    public hasItem(itype: ItemType, minQuantity: number = 1): boolean {
        return itemCount(itype) >= minQuantity;
    }

    public itemCount(itype: ItemType): number {
        let count: number = 0;
        for (const itemSlot of itemSlots) {
            if (itemSlot.itype == itype) count += itemSlot.quantity;
        }
        return count;
    }

    // 0..5 or -1 if no
    public roomInExistingStack(itype: ItemType): number {
        for (const i = 0; i < itemSlots.length; i++) {
            if (itemSlot(i).itype == itype && itemSlot(i).quantity != 0 && itemSlot(i).quantity < 5)
                return i;
        }
        return -1;
    }

    public itemSlot(idx: number): ItemSlotClass {
        return itemSlots[idx];
    }

    // 0..5 or -1 if no
    public emptySlot(): number {
        for (const i = 0; i < itemSlots.length; i++) {
            if (itemSlot(i).isEmpty() && itemSlot(i).unlocked) return i;
        }
        return -1;
    }

    public destroyItems(itype: ItemType, numOfItemToRemove: number): boolean {
        for (const slotNum = 0; slotNum < itemSlots.length; slotNum += 1) {
            if (itemSlot(slotNum).itype == itype) {
                while (itemSlot(slotNum).quantity > 0 && numOfItemToRemove > 0) {
                    itemSlot(slotNum).removeOneItem();
                    numOfItemToRemove--;
                }
            }
        }
        return numOfItemToRemove <= 0;
    }

    public lengthChange(temp2: number, ncocks: number): void {

        if (temp2 < 0 && flags[kFLAGS.HYPER_HAPPY])  // Early return for hyper-happy cheat if the call was *supposed* to shrink a cock.
        {
            return;
        }
        // DIsplay the degree of length change.
        if (temp2 <= 1 && temp2 > 0) {
            if (cocks.length == 1) outputText("Your " + cockDescript(game.player, 0) + " has grown slightly longer.", false);
            if (cocks.length > 1) {
                if (ncocks == 1) outputText("One of your " + multiCockDescriptLight(game.player) + " grows slightly longer.", false);
                if (ncocks > 1 && ncocks < cocks.length) outputText("Some of your " + multiCockDescriptLight(game.player) + " grow slightly longer.", false);
                if (ncocks == cocks.length) outputText("Your " + multiCockDescriptLight(game.player) + " seem to fill up... growing a little bit larger.", false);
            }
        }
        if (temp2 > 1 && temp2 < 3) {
            if (cocks.length == 1) outputText("A very pleasurable feeling spreads from your groin as your " + cockDescript(game.player, 0) + " grows permanently longer - at least an inch - and leaks pre-cum from the pleasure of the change.", false);
            if (cocks.length > 1) {
                if (ncocks == cocks.length) outputText("A very pleasurable feeling spreads from your groin as your " + multiCockDescriptLight(game.player) + " grow permanently longer - at least an inch - and leak plenty of pre-cum from the pleasure of the change.", false);
                if (ncocks == 1) outputText("A very pleasurable feeling spreads from your groin as one of your " + multiCockDescriptLight(game.player) + " grows permanently longer, by at least an inch, and leaks plenty of pre-cum from the pleasure of the change.", false);
                if (ncocks > 1 && ncocks < cocks.length) outputText("A very pleasurable feeling spreads from your groin as " + num2Text(ncocks) + " of your " + multiCockDescriptLight(game.player) + " grow permanently longer, by at least an inch, and leak plenty of pre-cum from the pleasure of the change.", false);
            }
        }
        if (temp2 >= 3) {
            if (cocks.length == 1) outputText("Your " + cockDescript(game.player, 0) + " feels incredibly tight as a few more inches of length seem to pour out from your crotch.", false);
            if (cocks.length > 1) {
                if (ncocks == 1) outputText("Your " + multiCockDescriptLight(game.player) + " feel incredibly tight as one of their number begins to grow inch after inch of length.", false);
                if (ncocks > 1 && ncocks < cocks.length) outputText("Your " + multiCockDescriptLight(game.player) + " feel incredibly number as " + num2Text(ncocks) + " of them begin to grow inch after inch of added length.", false);
                if (ncocks == cocks.length) outputText("Your " + multiCockDescriptLight(game.player) + " feel incredibly tight as inch after inch of length pour out from your groin.", false);
            }
        }
        // Display LengthChange
        if (temp2 > 0) {
            if (cocks[0].cockLength >= 8 && cocks[0].cockLength - temp2 < 8) {
                if (cocks.length == 1) outputText("  <b>Most men would be overly proud to have a tool as long as yours.</b>", false);
                if (cocks.length > 1) outputText("  <b>Most men would be overly proud to have one cock as long as yours, let alone " + multiCockDescript(game.player) + ".</b>", false);
            }
            if (cocks[0].cockLength >= 12 && cocks[0].cockLength - temp2 < 12) {
                if (cocks.length == 1) outputText("  <b>Your " + cockDescript(game.player, 0) + " is so long it nearly swings to your knee at its full length.</b>", false);
                if (cocks.length > 1) outputText("  <b>Your " + multiCockDescriptLight(game.player) + " are so long they nearly reach your knees when at full length.</b>", false);
            }
            if (cocks[0].cockLength >= 16 && cocks[0].cockLength - temp2 < 16) {
                if (cocks.length == 1) outputText("  <b>Your " + cockDescript(game.player, 0) + " would look more at home on a large horse than you.</b>", false);
                if (cocks.length > 1) outputText("  <b>Your " + multiCockDescriptLight(game.player) + " would look more at home on a large horse than on your body.</b>", false);
                if (this.breasts.biggestTitSize() >= BREAST_CUP_C) {
                    if (cocks.length == 1) outputText("  You could easily stuff your " + cockDescript(game.player, 0) + " between your breasts and give yourself the titty-fuck of a lifetime.", false);
                    if (cocks.length > 1) outputText("  They reach so far up your chest it would be easy to stuff a few cocks between your breasts and give yourself the titty-fuck of a lifetime.", false);
                }
                else {
                    if (cocks.length == 1) outputText("  Your " + cockDescript(game.player, 0) + " is so long it easily reaches your chest.  The possibility of autofellatio is now a foregone conclusion.", false);
                    if (cocks.length > 1) outputText("  Your " + multiCockDescriptLight(game.player) + " are so long they easily reach your chest.  Autofellatio would be about as hard as looking down.", false);
                }
            }
            if (cocks[0].cockLength >= 20 && cocks[0].cockLength - temp2 < 20) {
                if (cocks.length == 1) outputText("  <b>As if the pulsing heat of your " + cockDescript(game.player, 0) + " wasn't enough, the tip of your " + cockDescript(game.player, 0) + " keeps poking its way into your view every time you get hard.</b>", false);
                if (cocks.length > 1) outputText("  <b>As if the pulsing heat of your " + multiCockDescriptLight(game.player) + " wasn't bad enough, every time you get hard, the tips of your " + multiCockDescriptLight(game.player) + " wave before you, obscuring the lower portions of your vision.</b>", false);
                if (cor > 40 && cor <= 60) {
                    if (cocks.length > 1) outputText("  You wonder if there is a demon or beast out there that could take the full length of one of your " + multiCockDescriptLight(game.player) + "?", false);
                    if (cocks.length == 1) outputText("  You wonder if there is a demon or beast out there that could handle your full length.", false);
                }
                if (cor > 60 && cor <= 80) {
                    if (cocks.length > 1) outputText("  You daydream about being attacked by a massive tentacle beast, its tentacles engulfing your " + multiCockDescriptLight(game.player) + " to their hilts, milking you dry.\n\nYou smile at the pleasant thought.", false);
                    if (cocks.length == 1) outputText("  You daydream about being attacked by a massive tentacle beast, its tentacles engulfing your " + cockDescript(game.player, 0) + " to the hilt, milking it of all your cum.\n\nYou smile at the pleasant thought.", false);
                }
                if (cor > 80) {
                    if (cocks.length > 1) outputText("  You find yourself fantasizing about impaling nubile young champions on your " + multiCockDescriptLight(game.player) + " in a year's time.", false);
                }
            }
        }
        // Display the degree of length loss.
        if (temp2 < 0 && temp2 >= -1) {
            if (cocks.length == 1) outputText("Your " + multiCockDescriptLight(game.player) + " has shrunk to a slightly shorter length.", false);
            if (cocks.length > 1) {
                if (ncocks == cocks.length) outputText("Your " + multiCockDescriptLight(game.player) + " have shrunk to a slightly shorter length.", false);
                if (ncocks > 1 && ncocks < cocks.length) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(game.player) + " have shrunk to a slightly shorter length.", false);
                if (ncocks == 1) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(game.player) + " has shrunk to a slightly shorter length.", false);
            }
        }
        if (temp2 < -1 && temp2 > -3) {
            if (cocks.length == 1) outputText("Your " + multiCockDescriptLight(game.player) + " shrinks smaller, flesh vanishing into your groin.", false);
            if (cocks.length > 1) {
                if (ncocks == cocks.length) outputText("Your " + multiCockDescriptLight(game.player) + " shrink smaller, the flesh vanishing into your groin.", false);
                if (ncocks == 1) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(game.player) + " shrink smaller, the flesh vanishing into your groin.", false);
                if (ncocks > 1 && ncocks < cocks.length) outputText("You feel " + num2Text(ncocks) + " of your " + multiCockDescriptLight(game.player) + " shrink smaller, the flesh vanishing into your groin.", false);
            }
        }
        if (temp2 <= -3) {
            if (cocks.length == 1) outputText("A large portion of your " + multiCockDescriptLight(game.player) + "'s length shrinks and vanishes.", false);
            if (cocks.length > 1) {
                if (ncocks == cocks.length) outputText("A large portion of your " + multiCockDescriptLight(game.player) + " receeds towards your groin, receding rapidly in length.", false);
                if (ncocks == 1) outputText("A single member of your " + multiCockDescriptLight(game.player) + " vanishes into your groin, receding rapidly in length.", false);
                if (ncocks > 1 && cocks.length > ncocks) outputText("Your " + multiCockDescriptLight(game.player) + " tingles as " + num2Text(ncocks) + " of your members vanish into your groin, receding rapidly in length.", false);
            }
        }
    }

    public killCocks(deadCock: number): void {
        // Count removal for text bits
        let removed: number = 0;
        let temp: number;
        // Holds cock index
        let storedCock: number = 0;
        // Less than 0 = PURGE ALL
        if (deadCock < 0) {
            deadCock = cocks.length;
        }
        // Double loop - outermost counts down cocks to remove, innermost counts down
        while (deadCock > 0) {
            // Find shortest cock and prune it
            temp = cocks.length;
            while (temp > 0) {
                temp--;
                // If anything is out of bounds set to 0.
                if (storedCock > cocks.length - 1) storedCock = 0;
                // If temp index is shorter than stored index, store temp to stored index.
                if (cocks[temp].cockLength <= cocks[storedCock].cockLength) storedCock = temp;
            }
            // Smallest cock should be selected, now remove it!
            this.cocks.removeCock(storedCock, 1);
            removed++;
            deadCock--;
            if (cocks.length == 0) deadCock = 0;
        }
        // Texts
        if (removed == 1) {
            if (cocks.length == 0) {
                outputText("<b>Your manhood shrinks into your body, disappearing completely.</b>", false);
                if (this.effects.findByType(StatusAffects.Infested) >= 0) outputText("  Like rats fleeing a sinking ship, a stream of worms squirts free from your withering member, slithering away.", false);
            }
            if (cocks.length == 1) {
                outputText("<b>Your smallest penis disappears, shrinking into your body and leaving you with just one " + cockDescript(game.player, 0) + ".</b>", false);
            }
            if (cocks.length > 1) {
                outputText("<b>Your smallest penis disappears forever, leaving you with just your " + multiCockDescriptLight(game.player) + ".</b>", false);
            }
        }
        if (removed > 1) {
            if (cocks.length == 0) {
                outputText("<b>All your male endowments shrink smaller and smaller, disappearing one at a time.</b>", false);
                if (this.effects.findByType(StatusAffects.Infested) >= 0) outputText("  Like rats fleeing a sinking ship, a stream of worms squirts free from your withering member, slithering away.", false);
            }
            if (cocks.length == 1) {
                outputText("<b>You feel " + num2Text(removed) + " cocks disappear into your groin, leaving you with just your " + cockDescript(game.player, 0) + ".", false);
            }
            if (cocks.length > 1) {
                outputText("<b>You feel " + num2Text(removed) + " cocks disappear into your groin, leaving you with " + multiCockDescriptLight(game.player) + ".", false);
            }
        }
        // remove infestation if cockless
        if (cocks.length == 0) this.effects.remove(StatusAffects.Infested);
        if (cocks.length == 0 && balls > 0) {
            outputText("  <b>Your " + sackDescript(player) + " and " + ballsDescriptLight(player) + " shrink and disappear, vanishing into your groin.</b>", false);
            balls = 0;
            ballSize = 1;
        }
    }
    public modCumMultiplier(delta: number): number {
        trace("modCumMultiplier called with: " + delta);

        if (delta == 0) {
            trace("Whoops! modCumMuliplier called with 0... aborting...");
            return delta;
        }
        else if (delta > 0) {
            trace("and increasing");
            if (this.perks.findByType(PerkLib.MessyOrgasms) >= 0) {
                trace("and MessyOrgasms found");
                delta *= 1.5;
            }
        }
        else if (delta < 0) {
            trace("and decreasing");
            if (this.perks.findByType(PerkLib.MessyOrgasms) >= 0) {
                trace("and MessyOrgasms found");
                delta *= 0.5;
            }
        }

        trace("and modifying by " + delta);
        cumMultiplier += delta;
        return delta;
    }

    public increaseCock(cockNum: number, lengthDelta: number): number {
        let bigCock: boolean = false;

        if (this.perks.findByType(PerkLib.BigCock) >= 0)
            bigCock = true;

        return cocks[cockNum].growCock(lengthDelta, bigCock);
    }

    public increaseEachCock(lengthDelta: number): number {
        let totalGrowth: number = 0;

        for (const i = 0; i < cocks.length; i++) {
            trace("increaseEachCock at: " + i);
            totalGrowth += increaseCock(i as Number, lengthDelta);
        }

        return totalGrowth;
    }

    // Attempts to put the player in heat (or deeper in heat).
    // Returns true if successful, false if not.
    // The player cannot go into heat if she is already pregnant or is a he.
    //
    // First parameter: boolean indicating if function should output standard text.
    // Second parameter: intensity, an integer multiplier that can increase the
    // duration and intensity. Defaults to 1.
    public goIntoHeat(output: boolean, intensity: number = 1): boolean {
        if (!hasVagina() || pregnancyIncubation != 0) {
            // No vagina or already pregnant, can't go into heat.
            return false;
        }

        // Already in heat, intensify further.
        if (inHeat) {
            if (output) {
                outputText("\n\nYour mind clouds as your " + vaginaDescript(player, 0) + " moistens.  Despite already being in heat, the desire to copulate constantly grows even larger.", false);
            }
            const temp: number = this.effects.findByType(StatusAffects.Heat);
            this.effects[temp].value1 += 5 * intensity;
            this.effects[temp].value2 += 5 * intensity;
            this.effects[temp].value3 += 48 * intensity;
            dynStats("lib", 5 * intensity, "resisted", false, "noBimbo", true);
        }
        // Go into heat.  Heats v1 is bonus fertility, v2 is bonus libido, v3 is hours till it's gone
        else {
            if (output) {
                outputText("\n\nYour mind clouds as your " + vaginaDescript(player, 0) + " moistens.  Your hands begin stroking your body from top to bottom, your sensitive skin burning with desire.  Fantasies about bending over and presenting your needy pussy to a male overwhelm you as <b>you realize you have gone into heat!</b>", false);
            }
            this.effects.create(StatusAffects.Heat, 10 * intensity, 15 * intensity, 48 * intensity, 0);
            dynStats("lib", 15 * intensity, "resisted", false, "noBimbo", true);
        }
        return true;
    }

    // Attempts to put the player in rut (or deeper in heat).
    // Returns true if successful, false if not.
    // The player cannot go into heat if he is a she.
    //
    // First parameter: boolean indicating if function should output standard text.
    // Second parameter: intensity, an integer multiplier that can increase the
    // duration and intensity. Defaults to 1.
    public goIntoRut(output: boolean, intensity: number = 1): boolean {
        if (!hasCock()) {
            // No cocks, can't go into rut.
            return false;
        }

        // Has rut, intensify it!
        if (inRut) {
            if (output) {
                outputText("\n\nYour " + cockDescript(game.player, 0) + " throbs and dribbles as your desire to mate intensifies.  You know that <b>you've sunken deeper into rut</b>, but all that really matters is unloading into a cum-hungry cunt.", false);
            }

            this.effects.addValue(StatusAffects.Rut, 1, 100 * intensity);
            this.effects.addValue(StatusAffects.Rut, 2, 5 * intensity);
            this.effects.addValue(StatusAffects.Rut, 3, 48 * intensity);
            dynStats("lib", 5 * intensity, "resisted", false, "noBimbo", true);
        }
        else {
            if (output) {
                outputText("\n\nYou stand up a bit straighter and look around, sniffing the air and searching for a mate.  Wait, what!?  It's hard to shake the thought from your head - you really could use a nice fertile hole to impregnate.  You slap your forehead and realize <b>you've gone into rut</b>!", false);
            }

            // v1 - bonus cum production
            // v2 - bonus libido
            // v3 - time remaining!
            this.effects.create(StatusAffects.Rut, 150 * intensity, 5 * intensity, 100 * intensity, 0);
            dynStats("lib", 5 * intensity, "resisted", false, "noBimbo", true);
        }

        return true;
    }
}
