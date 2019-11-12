export class Inventory {

    public itemSlot1: ItemSlotClass;
    public itemSlot2: ItemSlotClass;
    public itemSlot3: ItemSlotClass;
    public itemSlot4: ItemSlotClass;
    public itemSlot5: ItemSlotClass;
    public itemSlots: ItemSlotClass[];

    public constructor() {
        this.itemSlot1 = new ItemSlotClass();
        this.itemSlot2 = new ItemSlotClass();
        this.itemSlot3 = new ItemSlotClass();
        this.itemSlot4 = new ItemSlotClass();
        this.itemSlot5 = new ItemSlotClass();
        this.itemSlots = [this.itemSlot1, this.itemSlot2, this.itemSlot3, this.itemSlot4, this.itemSlot5];
    }

    public consumeItem(itype: ItemType, amount: number = 1): boolean {
        if (!this.hasItem(itype, amount)) {
            Logger.error("ERROR: consumeItem attempting to find " + amount + " item" + (amount > 1 ? "s" : "") + " to remove when the player has " + this.itemCount(itype) + ".");
            return false;
        }
        // From here we can be sure the player has enough of the item in inventory
        let slot: ItemSlotClass;
        while (amount > 0) {
            slot = this.getLowestSlot(itype); // Always draw from the least filled slots first
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
                            Logger.error("ERROR: consumeItem in items.as attempting to find an item to remove when the has none.");
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
        for (const slot of this.itemSlots) {
            if (slot.itype == itype) {
                if (minslot == null || slot.quantity < minslot.quantity) {
                    minslot = slot;
                }
            }
        }
        return minslot;
    }

    public hasItem(itype: ItemType, minQuantity: number = 1): boolean {
        return this.itemCount(itype) >= minQuantity;
    }

    public itemCount(itype: ItemType): number {
        let count: number = 0;
        for (const itemSlot of this.itemSlots) {
            if (itemSlot.itype == itype) count += itemSlot.quantity;
        }
        return count;
    }

    // 0..5 or -1 if no
    public roomInExistingStack(itype: ItemType): number {
        for (let i = 0; i < this.itemSlots.length; i++) {
            if (this.itemSlot(i).itype == itype && this.itemSlot(i).quantity != 0 && this.itemSlot(i).quantity < 5)
                return i;
        }
        return -1;
    }

    public itemSlot(idx: number): ItemSlotClass {
        return this.itemSlots[idx];
    }

    // 0..5 or -1 if no
    public emptySlot(): number {
        for (const i = 0; i < this.itemSlots.length; i++) {
            if (this.itemSlot(i).isEmpty() && this.itemSlot(i).unlocked) return i;
        }
        return -1;
    }

    public destroyItems(itype: ItemType, numOfItemToRemove: number): boolean {
        for (let slotNum = 0; slotNum < this.itemSlots.length; slotNum += 1) {
            if (this.itemSlot(slotNum).itype == itype) {
                while (this.itemSlot(slotNum).quantity > 0 && numOfItemToRemove > 0) {
                    this.itemSlot(slotNum).removeOneItem();
                    numOfItemToRemove--;
                }
            }
        }
        return numOfItemToRemove <= 0;
    }

}