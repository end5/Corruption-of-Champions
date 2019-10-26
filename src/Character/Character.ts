/**
 * Character class for player and NPCs. Has subclasses Player and NonPlayer.
 * @author Yoffy
 */
export class Character extends Creature {
    private _femininity: number = 50;

    // This is the easiest way I could think of to apply "flat" bonuses to certain stats without having to write a whole shitload of crazyshit
    // I think a better long-term solution may be to hang function references off the end of the statusAffect class and move all of the value
    // calculation into methods of ContentClasses, so rather than having walls of logic, we just call the method reference with a value, and get back the modified value.
    // It's still shitty, but it would possibly be an improvement.
    public get femininity(): number {
        let fem: number = _femininity;
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

    public set femininity(value: number): void {
        if (value > 100) {
            value = 100;
        }
        else if (value < 0) {
            value = 0;
        }

        _femininity = value;
    }

    // BEARDS! Not used anywhere right now but WHO WANTS A BEARD?
    public beardLength: number = 0;
    public beardStyle: number = 0;

    // Used for hip ratings
    public thickness: number = 0;

    // Body tone i.e. Lithe, stocky, etc
    public tone: number = 0;

    private _pregnancyType: number = 0;
    public get pregnancyType(): number { return _pregnancyType; }

    private _pregnancyIncubation: number = 0;
    public get pregnancyIncubation(): number { return _pregnancyIncubation; }

    private _buttPregnancyType: number = 0;
    public get buttPregnancyType(): number { return _buttPregnancyType; }

    private _buttPregnancyIncubation: number = 0;
    public get buttPregnancyIncubation(): number { return _buttPregnancyIncubation; }

    // Key items
    public keyItems = new KeyItemArray();

    // Return bonus fertility

    // return total fertility

    public hasBeard(): boolean {
        return beardLength > 0;
    }

    public hasMuzzle(): boolean {
        if (faceType == 1 || faceType == 2 || faceType == 6 || faceType == 7 || faceType == 9 || faceType == 11 || faceType == 12)
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
        if (isNaga())
            return true;
        if (tailType == 2 || tailType == 3 || tailType == 4 || tailType == 7 || tailType == 8 || tailType == 9 || tailType == 12 || tailType == 13 || tailType == 14)
            return true;
        return false;
    }

    public isPregnant(): boolean { return _pregnancyType != 0; }

    public isButtPregnant(): boolean { return _buttPregnancyType != 0; }

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
        if (pregnancyIncubation == 0 && totalFertility() + bonus > Math.floor(Math.random() * beat) && this.vaginas.length > 0) {
            knockUpForce(type, incubation);
            trace("PC Knocked up with pregnancy type: " + type + " for " + incubation + " incubation.");
        }
        // Chance for eggs fertilization - ovi elixir and imps excluded!
        if (type != PregnancyStore.PREGNANCY_IMP && type != PregnancyStore.PREGNANCY_OVIELIXIR_EGGS && type != PregnancyStore.PREGNANCY_ANEMONE) {
            if (this.perks.findByType(PerkLib.SpiderOvipositor) >= 0 || this.perks.findByType(PerkLib.BeeOvipositor) >= 0) {
                if (totalFertility() + bonus > Math.floor(Math.random() * beat)) {
                    fertilizeEggs();
                }
            }
        }
    }

    // The more complex knockUp function used by the player is defined above
    // The player doesn't need to be told of the last event triggered, so the code here is quite a bit simpler than that in PregnancyStore
    public knockUpForce(type: number = 0, incubation: number = 0): void {
        _pregnancyType = type;
        _pregnancyIncubation = (type == 0 ? 0 : incubation); // Won't allow incubation time without pregnancy type
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
        if (buttPregnancyIncubation == 0 && totalFertility() + bonus > Math.floor(Math.random() * beat)) {
            buttKnockUpForce(type, incubation);
            trace("PC Butt Knocked up with pregnancy type: " + type + " for " + incubation + " incubation.");
        }
    }

    // The more complex buttKnockUp function used by the player is defined in Character.as
    public buttKnockUpForce(type: number = 0, incubation: number = 0): void {
        _buttPregnancyType = type;
        _buttPregnancyIncubation = (type == 0 ? 0 : incubation); // Won't allow incubation time without pregnancy type
    }

    public pregnancyAdvance(): boolean {
        if (_pregnancyIncubation > 0) _pregnancyIncubation--;
        if (_pregnancyIncubation < 0) _pregnancyIncubation = 0;
        if (_buttPregnancyIncubation > 0) _buttPregnancyIncubation--;
        if (_buttPregnancyIncubation < 0) _buttPregnancyIncubation = 0;
        return pregnancyUpdate();
    }

    public pregnancyUpdate(): boolean { return false; }

    // Grow

    // BreastCup

    /*OLD AND UNUSED
       public function breastCupS(rowNum:Number):String {
       if(breastRows[rowNum].breastRating < 1) return "tiny";
       else if(breastRows[rowNum].breastRating < 2) return "A";
       else if(breastRows[rowNum].breastRating < 3) return "B";
       else if(breastRows[rowNum].breastRating < 4) return "C";
       else if(breastRows[rowNum].breastRating < 5) return "D";
       else if(breastRows[rowNum].breastRating < 6) return "DD";
       else if(breastRows[rowNum].breastRating < 7) return "E";
       else if(breastRows[rowNum].breastRating < 8) return "F";
       else if(breastRows[rowNum].breastRating < 9) return "G";
       else if(breastRows[rowNum].breastRating < 10) return "GG";
       else if(breastRows[rowNum].breastRating < 11) return "H";
       else if(breastRows[rowNum].breastRating < 12) return "HH";
       else if(breastRows[rowNum].breastRating < 13) return "HHH";
       return "massive custom-made";
     }*/
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
        max += int(tou * 2 + 50);
        if (this.perks.findByType(PerkLib.Tank) >= 0) max += 50;
        if (this.perks.findByType(PerkLib.Tank2) >= 0) max += Math.round(tou);
        if (this.perks.findByType(PerkLib.ChiReflowDefense) >= 0) max += UmasShop.NEEDLEWORK_DEFENSE_EXTRA_HP;
        if (level <= 20) max += level * 15;
        else max += 20 * 15;
        max = Math.round(max);
        if (max > 999) max = 999;
        return max;
    }

}
