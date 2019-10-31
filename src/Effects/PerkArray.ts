export class PerkArray extends Array {
    // Create a perk
    public create(ptype: PerkType, value1: number, value2: number, value3: number, value4: number): void {
        const newKeyItem: PerkClass = new PerkClass(ptype);
        // used to denote that the array has already had its new spot pushed on.
        let arrayed: boolean = false;
        // used to store where the array goes
        let keySlot: number = 0;
        let counter: number = 0;
        // Start the array if its the first bit
        if (this.length == 0) {
            // trace("New Perk Started Array! " + keyName);
            this.push(newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // If it belongs at the end, push it on
        if (this[this.length - 1].perkName < ptype.name && !arrayed) {
            // trace("New Perk Belongs at the end!! " + keyName);
            this.push(newKeyItem);
            arrayed = true;
            keySlot = this.length - 1;
        }
        // If it belongs in the beginning, splice it in
        if (this[0].perkName > ptype.name && !arrayed) {
            // trace("New Perk Belongs at the beginning! " + keyName);
            this.splice(0, 0, newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // Find the spot it needs to go in and splice it in.
        if (!arrayed) {
            // trace("New Perk using alphabetizer! " + keyName);
            counter = this.length;
            while (counter > 0 && !arrayed) {
                counter--;
                // If the current slot is later than new key
                if (this[counter].perkName > ptype.name) {
                    // If the earlier slot is earlier than new key && a real spot
                    if (counter - 1 >= 0) {
                        // If the earlier slot is earlier slot in!
                        if (this[counter - 1].perkName <= ptype.name) {
                            arrayed = true;
                            this.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                    // If the item after 0 slot is later put here!
                    else {
                        // If the next slot is later we are go
                        if (this[counter].perkName <= ptype.name) {
                            arrayed = true;
                            this.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                }
            }
        }
        // Fallback
        if (!arrayed) {
            // trace("New Perk Belongs at the end!! " + keyName);
            this.push(newKeyItem);
            keySlot = this.length - 1;
        }

        this[keySlot].value1 = value1;
        this[keySlot].value2 = value2;
        this[keySlot].value3 = value3;
        this[keySlot].value4 = value4;
        // trace("NEW PERK FOR PLAYER in slot " + keySlot + ": " + this[keySlot).perkName);
    }

    /**
     * Remove perk. Return true if there was such perk
     */
    public remove(ptype: PerkType): boolean {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            return false;
        }
        while (counter > 0) {
            counter--;
            if (this[counter].ptype == ptype) {
                this.splice(counter, 1);
                // trace("Attempted to remove \"" + perkName + "\" perk.");
                return true;
            }
        }
        return false;
    }

    // has perk?
    public findByType(ptype: PerkType): number {
        if (this.length <= 0)
            return -2;
        for (let counter = 0; counter < this.length; counter++) {
            if (this[counter].ptype == ptype)
                return counter;
        }
        return -1;
    }

    // Duplicate perk
    // Deprecated?
    public exists(ptype: PerkType): boolean {
        let timesFound: number = 0;
        if (this.length <= 0)
            return false;
        for (let counter = 0; counter < this.length; counter++) {
            if (this[counter].ptype == ptype)
                timesFound++;
        }
        return (timesFound > 1);
    }

    // remove all this
    public clear(): void {
        while (this.length > 0)
            this.shift();
    }

    public addValue(ptype: PerkType, valueIdx: number = 1, bonus: number = 0): void {
        const counter: number = this.findByType(ptype);
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "' to change value " + valueIdx + ", and player does not have the perk.");
            return;
        }
        if (valueIdx < 1 || valueIdx > 4) {
            Logger.error("addValue(" + ptype.id + ", " + valueIdx + ", " + bonus + ").");
            return;
        }
        if (valueIdx == 1)
            this[counter].value1 += bonus;
        if (valueIdx == 2)
            this[counter].value2 += bonus;
        if (valueIdx == 3)
            this[counter].value3 += bonus;
        if (valueIdx == 4)
            this[counter].value4 += bonus;
    }

    public setValue(ptype: PerkType, valueIdx: number = 1, newNum: number = 0): void {
        const counter: number = this.findByType(ptype);
        // Various Errors preventing action
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "' to change value " + valueIdx + ", and player does not have the perk.");
            return;
        }
        if (valueIdx < 1 || valueIdx > 4) {
            Logger.error("setValue(" + ptype.id + ", " + valueIdx + ", " + newNum + ").");
            return;
        }
        if (valueIdx == 1)
            this[counter].value1 = newNum;
        if (valueIdx == 2)
            this[counter].value2 = newNum;
        if (valueIdx == 3)
            this[counter].value3 = newNum;
        if (valueIdx == 4)
            this[counter].value4 = newNum;
    }

    public getValue1Of(ptype: PerkType): number {
        const counter: number = this.findByType(ptype);
        if (counter < 0) {
            // trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return this[counter].value1;
    }

    public getValue2Of(ptype: PerkType): number {
        const counter: number = this.findByType(ptype);
        if (counter < 0) {
            // trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return this[counter].value2;
    }

    public getValue3Of(ptype: PerkType): number {
        const counter: number = this.findByType(ptype);
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return this[counter].value3;
    }

    public getValue4Of(ptype: PerkType): number {
        const counter: number = this.findByType(ptype);
        if (counter < 0) {
            trace("ERROR? Looking for perk '" + ptype + "', but player does not have it.");
            return 0;
        }
        return this[counter].value4;
    }
}
