
/**
 * ...
 * @author Yoffy
 */
export class Player extends Character {

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

    public readonly inv = new Inventory();

    private _armor: Armor = ArmorLib.COMFORTABLE_UNDERCLOTHES;
    private _modArmorName: string = "";

    public set armorValue(value: number): void {
        Logger.error("ERROR: attempt to directly set player.armorValue.");
    }

    public set armorName(value: string): void {
        Logger.error("ERROR: attempt to directly set player.armorName.");
    }

    public set armorDef(value: number): void {
        Logger.error("ERROR: attempt to directly set player.armorDef.");
    }

    public set armorPerk(value: string): void {
        Logger.error("ERROR: attempt to directly set player.armorPerk.");
    }

    public set weaponName(value: string): void {
        Logger.error("ERROR: attempt to directly set player.weaponName.");
    }

    public set weaponVerb(value: string): void {
        Logger.error("ERROR: attempt to directly set player.weaponVerb.");
    }

    public set weaponAttack(value: number): void {
        Logger.error("ERROR: attempt to directly set player.weaponAttack.");
    }

    public set weaponPerk(value: string): void {
        Logger.error("ERROR: attempt to directly set player.weaponPerk.");
    }

    public set weaponValue(value: number): void {
        Logger.error("ERROR: attempt to directly set player.weaponValue.");
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
            if (skinType > SkinType.PLAIN) armorDef += 1;
        }
        // If no skin armor perk scales rock
        else {
            if (skinType == SkinType.FUR) armorDef += 1;
            if (skinType == SkinType.SCALES) armorDef += 3;
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
            Logger.error(short + ".armor is set to null");
            newArmor = ArmorLib.COMFORTABLE_UNDERCLOTHES;
        }
        _armor = newArmor.playerEquip(); // The armor can also choose to equip something else - useful for Ceraph's trap armor
        return oldArmor;
    }

    /*
    public function set armor(value:Armor):void
    {
        if (value == null){
            Logger.error(short+".armor is set to null");
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
            Logger.error(short + ".weapon is set to null");
            newWeapon = WeaponLib.FISTS;
        }
        _weapon = newWeapon.playerEquip(); // The weapon can also choose to equip something else
        return oldWeapon;
    }

    /*
    public function set weapon(value:Weapon):void
    {
        if (value == null){
            Logger.error(short+".weapon is set to null");
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
        if (ovipositor.eggs() >= 20) {
            min += 10;
            if (ovipositor.eggs() >= 40) min += 10;
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
}
