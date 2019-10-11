export class KeyItemArray extends Array {
    // Create a keyItem
    public create(keyName: string, value1: number, value2: number, value3: number, value4: number): void {
        const newKeyItem: KeyItemClass = new KeyItemClass();
        // used to denote that the array has already had its new spot pushed on.
        let arrayed: boolean = false;
        // used to store where the array goes
        let keySlot: number = 0;
        let counter: number = 0;
        // Start the array if its the first bit
        if (this.length == 0) {
            // trace("New Key Item Started Array! " + keyName);
            this.push(newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // If it belongs at the end, push it on
        if (this[this.length - 1].keyName < keyName && !arrayed) {
            // trace("New Key Item Belongs at the end!! " + keyName);
            this.push(newKeyItem);
            arrayed = true;
            keySlot = this.length - 1;
        }
        // If it belongs in the beginning, splice it in
        if (this[0].keyName > keyName && !arrayed) {
            // trace("New Key Item Belongs at the beginning! " + keyName);
            this.splice(0, 0, newKeyItem);
            arrayed = true;
            keySlot = 0;
        }
        // Find the spot it needs to go in and splice it in.
        if (!arrayed) {
            // trace("New Key Item using alphabetizer! " + keyName);
            counter = this.length;
            while (counter > 0 && !arrayed) {
                counter--;
                // If the current slot is later than new key
                if (this[counter].keyName > keyName) {
                    // If the earlier slot is earlier than new key && a real spot
                    if (counter - 1 >= 0) {
                        // If the earlier slot is earlier slot in!
                        if (this[counter - 1].keyName <= keyName) {
                            arrayed = true;
                            this.splice(counter, 0, newKeyItem);
                            keySlot = counter;
                        }
                    }
                    // If the item after 0 slot is later put here!
                    else {
                        // If the next slot is later we are go
                        if (this[counter].keyName <= keyName) {
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
            // trace("New Key Item Belongs at the end!! " + keyName);
            this.push(newKeyItem);
            keySlot = this.length - 1;
        }

        this[keySlot].keyName = keyName;
        this[keySlot].value1 = value1;
        this[keySlot].value2 = value2;
        this[keySlot].value3 = value3;
        this[keySlot].value4 = value4;
        // trace("NEW KEYITEM FOR PLAYER in slot " + keySlot + ": " + this[keySlot].keyName);
    }

    // Remove a key item
    public remove(itemName: string): void {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            // trace("ERROR: KeyItem could not be removed because player has no key items.");
            return;
        }
        while (counter > 0) {
            counter--;
            if (this[counter].keyName == itemName) {
                this.splice(counter, 1);
                trace("Attempted to remove \"" + itemName + "\" keyItem.");
                counter = 0;
            }
        }
    }

    public addKeyValue(statusName: string, statusValueNum: number = 1, newNum: number = 0): void {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            return;
            // trace("ERROR: Looking for keyitem '" + statusName + "' to change value " + statusValueNum + ", and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            // Find it, change it, quit out
            if (this[counter].keyName == statusName) {
                if (statusValueNum < 1 || statusValueNum > 4) {
                    // trace("ERROR: AddKeyValue called with invalid key value number.");
                    return;
                }
                if (statusValueNum == 1)
                    this[counter].value1 += newNum;
                if (statusValueNum == 2)
                    this[counter].value2 += newNum;
                if (statusValueNum == 3)
                    this[counter].value3 += newNum;
                if (statusValueNum == 4)
                    this[counter].value4 += newNum;
                return;
            }
        }
        // trace("ERROR: Looking for keyitem '" + statusName + "' to change value " + statusValueNum + ", and player does not have the key item.");
    }

    public getValue1Of(statusName: string): number {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (this[counter].keyName == statusName)
                return this[counter].value1;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public getValue2Of(statusName: string): number {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (this[counter].keyName == statusName)
                return this[counter].value2;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public getValue3Of(statusName: string): number {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (this[counter].keyName == statusName)
                return this[counter].value3;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public getValue4Of(statusName: string): number {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0) {
            return 0;
            // trace("ERROR: Looking for keyItem '" + statusName + "', and player has no key items.");
        }
        while (counter > 0) {
            counter--;
            if (this[counter].keyName == statusName)
                return this[counter].value4;
        }
        // trace("ERROR: Looking for key item '" + statusName + "', but player does not have it.");
        return 0;
    }

    public clear(): void {
        let counter: number = this.length;
        while (counter > 0) {
            counter--;
            this.splice(counter, 1);
        }
    }

    public hasKeyItem(keyName: string): number {
        let counter: number = this.length;
        // Various Errors preventing action
        if (this.length <= 0)
            return -2;
        while (counter > 0) {
            counter--;
            if (this[counter].keyName == keyName)
                return counter;
        }
        return -1;
    }
}
