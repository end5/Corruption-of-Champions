
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
        const statIndex: number = this.findStatusAffect(StatusAffects.UmasMassage);

        if (statIndex >= 0) {
            if (this.statusAffect(statIndex).value1 == UmasShop.MASSAGE_MODELLING_BONUS) {
                fem += this.statusAffect(statIndex).value2;
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
    public keyItems: any[];

    public constructor() {
        keyItems = [];
    }

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
        if (findStatusAffect(StatusAffects.Contraceptives) >= 0 && arg < 1)
            return;
        // 			if (findStatusAffect(StatusAffects.GooStuffed) >= 0) return; //No longer needed thanks to PREGNANCY_GOO_STUFFED being used as a blocking value
        let bonus: number = 0;
        // If arg = 1 (always pregnant), bonus = 9000
        if (arg >= 1)
            bonus = 9000;
        if (arg <= -1)
            bonus = -9000;
        // If unpregnant and fertility wins out:
        if (pregnancyIncubation == 0 && totalFertility() + bonus > Math.floor(Math.random() * beat) && hasVagina()) {
            knockUpForce(type, incubation);
            trace("PC Knocked up with pregnancy type: " + type + " for " + incubation + " incubation.");
        }
        // Chance for eggs fertilization - ovi elixir and imps excluded!
        if (type != PregnancyStore.PREGNANCY_IMP && type != PregnancyStore.PREGNANCY_OVIELIXIR_EGGS && type != PregnancyStore.PREGNANCY_ANEMONE) {
            if (findPerk(PerkLib.SpiderOvipositor) >= 0 || findPerk(PerkLib.BeeOvipositor) >= 0) {
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
        if (findStatusAffect(StatusAffects.Contraceptives) >= 0 && arg < 1)
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

    // Create a keyItem
    public createKeyItem(keyName: string, value1: number, value2: number, value3: number, value4: number): void {
        const newKeyItem: KeyItemClass = new KeyItemClass();
        // used to denote that the array has already had its new spot pushed on.
        let arrayed: boolean = false;
        // used to store where the array goes
        let keySlot: number = 0;
        let counter: number = 0;
        // Start the array if its the first bit
        if (keyItems.length == 0) {
            // trace("New Key Item Started Array! " + keyName);
            keyItems.push(newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // If it belongs at the end, push it on
        if (keyItems[keyItems.length - 1].keyName < keyName && !arrayed) {
            // trace("New Key Item Belongs at the end!! " + keyName);
            keyItems.push(newKeyItem);
            arrayed = true;
            keySlot = keyItems.length - 1;
        }
        // If it belongs in the beginning, splice it in
        if (keyItems[0].keyName > keyName && !arrayed) {
            // trace("New Key Item Belongs at the beginning! " + keyName);
            keyItems.splice(0, 0, newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // Find the spot it needs to go in and splice it in.
        if (!arrayed) {
            // trace("New Key Item using alphabetizer! " + keyName);
            counter = keyItems.length;
            while (counter > 0 && !arrayed) {
                counter--;
                // If the current slot is later than new key
                if (keyItems[counter].keyName > keyName) {
                    // If the earlier slot is earlier than new key && a real spot
                    if (counter - 1 >= 0) {
                        // If the earlier slot is earlier slot in!
                        if (keyItems[counter - 1].keyName <= keyName) {
                            arrayed = true;
                            keyItems.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                    // If the item after 0 slot is later put here!
                    else {
                        // If the next slot is later we are go
                        if (keyItems[counter].keyName <= keyName) {
                            arrayed = true;
                            keyItems.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                }
            }
        }
        // Fallback
        if (!arrayed) {
            // trace("New Key Item Belongs at the end!! " + keyName);
            keyItems.push(newKeyItem);
            keySlot = keyItems.length - 1;
        }

        keyItems[keySlot].keyName = keyName;
        keyItems[keySlot].value1 = value1;
        keyItems[keySlot].value2 = value2;
        keyItems[keySlot].value3 = value3;
        keyItems[keySlot].value4 = value4;
        // trace("NEW KEYITEM FOR PLAYER in slot " + keySlot + ": " + keyItems[keySlot].keyName);
    }

    // Remove a key item
    public removeKeyItem(itemName: string): void {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0) {
            // trace("ERROR: KeyItem could not be removed because player has no key items.");
            return;
        }
        while (counter > 0) {
            counter--;
            if (keyItems[counter].keyName == itemName) {
                keyItems.splice(counter, 1);
                trace("Attempted to remove \"" + itemName + "\" keyItem.");
                counter = 0;
            }
        }
    }

    public addKeyValue(statusName: string, statusValueNum: number = 1, newNum: number = 0): void {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0) {
            return;
            // trace("ERROR: Looking for keyitem '" + statusName + "' to change value " + statusValueNum + ", and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            // Find it, change it, quit out
            if (keyItems[counter].keyName == statusName) {
                if (statusValueNum < 1 || statusValueNum > 4) {
                    // trace("ERROR: AddKeyValue called with invalid key value number.");
                    return;
                }
                if (statusValueNum == 1)
                    keyItems[counter].value1 += newNum;
                if (statusValueNum == 2)
                    keyItems[counter].value2 += newNum;
                if (statusValueNum == 3)
                    keyItems[counter].value3 += newNum;
                if (statusValueNum == 4)
                    keyItems[counter].value4 += newNum;
                return;
            }
        }
        // trace("ERROR: Looking for keyitem '" + statusName + "' to change value " + statusValueNum + ", and player does not have the key item.");
    }

    public keyItemv1(statusName: string): number {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (keyItems[counter].keyName == statusName)
                return keyItems[counter].value1;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public keyItemv2(statusName: string): number {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (keyItems[counter].keyName == statusName)
                return keyItems[counter].value2;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public keyItemv3(statusName: string): number {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (keyItems[counter].keyName == statusName)
                return keyItems[counter].value3;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public keyItemv4(statusName: string): number {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (keyItems[counter].keyName == statusName)
                return keyItems[counter].value4;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public removeKeyItems(): void {
        let counter: number = keyItems.length;
        while (counter > 0) {
            counter--;
            keyItems.splice(counter, 1);
        }
    }

    public hasKeyItem(keyName: string): number {
        let counter: number = keyItems.length;
        // Various Errors preventing action
        if (keyItems.length <= 0)
            return -2;
        while (counter > 0) {
            counter--;
            if (keyItems[counter].keyName == keyName)
                return counter;
        }
        return -1;
    }

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
        let count: number = cockTotal();
        if (count == 0)
            return false;
        while (count > 0) {
            count--;
            if (cocks[count].sock == "amaranthine" && cocks[count].cockType != CockTypesEnum.DISPLACER)
                return true;
        }
        return false;
    }

    public hasKnot(arg: number = 0): boolean {
        if (arg > cockTotal() - 1 || arg < 0)
            return false;
        return (cocks[arg].cockType == CockTypesEnum.DOG || cocks[arg].cockType == CockTypesEnum.FOX || cocks[arg].cockType == CockTypesEnum.DISPLACER);
    }

    public maxHP(): number {
        let max: number = 0;
        max += int(tou * 2 + 50);
        if (findPerk(PerkLib.Tank) >= 0) max += 50;
        if (findPerk(PerkLib.Tank2) >= 0) max += Math.round(tou);
        if (findPerk(PerkLib.ChiReflowDefense) >= 0) max += UmasShop.NEEDLEWORK_DEFENSE_EXTRA_HP;
        if (level <= 20) max += level * 15;
        else max += 20 * 15;
        max = Math.round(max);
        if (max > 999) max = 999;
        return max;
    }

}
