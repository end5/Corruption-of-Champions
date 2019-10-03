/**
 * Created by aimozg on 12.01.14.
 */

export class Inventory {
    private static inventorySlotName: any[] = ["first", "second", "third", "fourth", "fifth"];

    private itemStorage: any[];
    private gearStorage: any[];
    private callNext: () => void;		// These are used so that we know what has to happen once the player finishes with an item
    private callOnAbandon: () => void;	// They simplify dealing with items that have a sub menu. Set in inventoryMenu and in takeItem
    private currentItemSlot: ItemSlotClass;	// The slot previously occupied by the current item - only needed for stashes and items with a sub menu.

    public constructor(saveSystem: Saves) {
        itemStorage = [];
        gearStorage = [];
        saveSystem.linkToInventory(itemStorageDirectGet, gearStorageDirectGet);
    }

    public showStash(): boolean {
        return flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00254] > 0 || flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00255] > 0 || itemStorage.length > 0 || flags[kFLAGS.ANEMONE_KID] > 0;
    }

    private itemStorageDirectGet(): any[] { return itemStorage; }

    private gearStorageDirectGet(): any[] { return gearStorage; }

    // 		public function currentCallNext():Function { return callNext; }

    public itemGoNext(): void { if (callNext != null) doNext(callNext); }

    public inventoryMenu(): void {
        let x: number;
        let foundItem: boolean = false;
        if (game.inCombat) {
            callNext = inventoryCombatHandler; // Player will return to combat after item use
        }
        else {
            spriteSelect(-1);
            callNext = inventoryMenu; // In camp or in a dungeon player will return to inventory menu after item use
        }
        hideMenus();
        hideUpDown();
        clearOutput();
        outputText("<b><u>Equipment:</u></b>\n");
        outputText("<b>Weapon</b>: " + player.weaponName + " (Attack - " + player.weaponAttack + ")\n");
        outputText("<b>Armor : </b>" + player.armorName + " (Defense - " + player.armorDef + ")\n");
        if (player.keyItems.length > 0) outputText("<b><u>\nKey Items:</u></b>\n");
        for (x = 0; x < player.keyItems.length; x++) outputText(player.keyItems[x].keyName + "\n");
        menu();
        for (x = 0; x < 5; x++) {
            if (player.itemSlots[x].unlocked && player.itemSlots[x].quantity > 0) {
                addButton(x, (player.itemSlots[x].itype.shortName + " x" + player.itemSlots[x].quantity), useItemInInventory, x);
                foundItem = true;
            }
        }
        if (player.weapon != WeaponLib.FISTS) {
            addButton(5, "Unequip", unequipWeapon);
        }
        if (!game.inCombat && game.inDungeon == false && game.inRoomedDungeon == false) {
            if (nieveHoliday() && flags[kFLAGS.NIEVE_STAGE] > 0 && flags[kFLAGS.NIEVE_STAGE] < 5) {
                if (flags[kFLAGS.NIEVE_STAGE] == 1)
                    outputText("\nThere's some odd snow here that you could do something with...\n");
                else outputText("\nYou have a snow" + nieveMF("man", "woman") + " here that seems like it could use a little something...\n");
                addButton(6, "Snow", nieveBuilding);
                foundItem = true;
            }
            if (flags[kFLAGS.FUCK_FLOWER_KILLED] == 0 && flags[kFLAGS.FUCK_FLOWER_LEVEL] >= 1) {
                if (flags[kFLAGS.FUCK_FLOWER_LEVEL] == 4) outputText("\nHolli is in her tree at the edges of your camp.  You could go visit her if you want.\n");
                addButton(7, (flags[kFLAGS.FUCK_FLOWER_LEVEL] >= 3 ? "Tree" : "Plant"), holliScene.treeMenu);
                foundItem = true;
            }
            if (player.hasKeyItem("Dragon Egg") >= 0) {
                emberScene.emberCampDesc();
                addButton(8, "Egg", emberScene.emberEggInteraction);
                foundItem = true;
            }
        }
        if (!foundItem) {
            outputText("\nYou have no usable items.");
            doNext(playerMenu);
            return;
        }
        if (game.inCombat && player.findStatusAffect(StatusAffects.Sealed) >= 0 && player.statusAffectv1(StatusAffects.Sealed) == 3) {
            outputText("\nYou reach for your items, but you just can't get your pouches open.  <b>Your ability to use items was sealed, and now you've wasted a chance to attack!</b>\n\n");
            enemyAI();
            return;
        }
        outputText("\nWhich item will you use?");
        if (game.inCombat)
            addButton(9, "Back", combatMenu, false); // Player returns to the combat menu on cancel
        else addButton(9, "Back", playerMenu);
        // Gone			menuLoc = 1;
    }

    public stash(): void {
        /*Hacked in cheat to enable shit
        flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00254] = 1;
        flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00255] = 1;*/
        // REMOVE THE ABOVE BEFORE RELASE ()
        clearOutput();
        spriteSelect(-1);
        menu();
        if (flags[kFLAGS.ANEMONE_KID] > 0) {
            anemoneScene.anemoneBarrelDescription();
            if (game.time.hours >= 6) addButton(4, "Anemone", anemoneScene.approachAnemoneBarrel);
        }
        if (player.hasKeyItem("Camp - Chest") >= 0) {
            outputText("You have a large wood and iron chest to help store excess items located near the portal entrance.\n\n");
            addButton(0, "Chest Store", pickItemToPlaceInCampStorage);
            if (hasItemsInStorage()) addButton(1, "Chest Take", pickItemToTakeFromCampStorage);
        }
        // Weapon Rack
        if (flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00254] > 0) {
            outputText("There's a weapon rack set up here, set up to hold up to nine various weapons.");
            addButton(2, "W.Rack Put", pickItemToPlaceInWeaponRack);
            if (weaponRackDescription()) addButton(3, "W.Rack Take", pickItemToTakeFromWeaponRack);
            outputText("\n\n");
        }
        // Armor Rack
        if (flags[kFLAGS.UNKNOWN_FLAG_NUMBER_00255] > 0) {
            outputText("Your camp has an armor rack set up to hold your various sets of gear.  It appears to be able to hold nine different types of armor.");
            addButton(5, "A.Rack Put", pickItemToPlaceInArmorRack);
            if (armorRackDescription()) addButton(6, "A.Rack Take", pickItemToTakeFromArmorRack);
            outputText("\n\n");
        }
        addButton(9, "Back", playerMenu);
    }

    public takeItem(itype: ItemType, nextAction: () => void, overrideAbandon: () => void = null, source: ItemSlotClass = null): void {
        if (itype == null) {
            CoC_Settings.error("takeItem(null)");
            return;
        }
        if (itype == ItemType.NOTHING) return;
        if (nextAction != null)
            callNext = nextAction;
        else callNext = playerMenu;
        // Check for an existing stack with room in the inventory and return the value for it.
        let temp: number = player.roomInExistingStack(itype);
        if (temp >= 0) { // First slot go!
            player.itemSlots[temp].quantity++;
            outputText("You place " + itype.longName + " in your " + inventorySlotName[temp] + " pouch, giving you " + player.itemSlots[temp].quantity + " of them.");
            itemGoNext();
            return;
        }
        // If not done, then put it in an empty spot!
        // Throw in slot 1 if there is room
        temp = player.emptySlot();
        if (temp >= 0) {
            player.itemSlots[temp].setItemAndQty(itype, 1);
            outputText("You place " + itype.longName + " in your " + inventorySlotName[temp] + " pouch.");
            itemGoNext();
            return;
        }
        if (overrideAbandon != null) // callOnAbandon only becomes important if the inventory is full
            callOnAbandon = overrideAbandon;
        else callOnAbandon = callNext;
        // OH NOES! No room! Call replacer functions!
        takeItemFull(itype, true, source);
    }

    public returnItemToInventory(item: Useable, showNext: boolean = true): void { // Used only by items that have a sub menu if the player cancels
        if (!game.debug) {
            if (currentItemSlot == null) {
                takeItem(item, callNext, callNext, null); // Give player another chance to put item in inventory
            }
            else if (currentItemSlot.quantity > 0) { // Add it back to the existing stack
                currentItemSlot.quantity++;
            }
            else { // Put it back in the slot it came from
                currentItemSlot.setItemAndQty(item, 1);
            }
        }
        if (game.inCombat) {
            enemyAI();
            return;
        }
        if (showNext)
            doNext(callNext); // Items with sub menus should return to the inventory screen if the player decides not to use them
        else callNext(); // When putting items back in your stash we should skip to the take from stash menu
    }

    // Check to see if anything is stored
    public hasItemsInStorage(): boolean { return itemAnyInStorage(itemStorage, 0, itemStorage.length); }

    public hasItemInStorage(itype: ItemType): boolean { return itemTypeInStorage(itemStorage, 0, itemStorage.length, itype); }

    public consumeItemInStorage(itype: ItemType): boolean {
        temp = itemStorage.length;
        while (temp > 0) {
            temp--;
            if (itemStorage[temp].itype == itype && itemStorage[temp].quantity > 0) {
                itemStorage[temp].quantity--;
                return true;
            }
        }
        return false;
    }

    public giveHumanizer(): void {
        if (flags[kFLAGS.TIMES_CHEATED_COUNTER] > 0) {
            outputText("<b>I was a cheater until I took an arrow to the knee...</b>", true);
            gameOver();
            return;
        }
        outputText("I AM NOT A CROOK.  BUT YOU ARE!  <b>CHEATER</b>!\n\n", true);
        inventory.takeItem(consumables.HUMMUS_, playerMenu);
        flags[kFLAGS.TIMES_CHEATED_COUNTER]++;
    }

    // Create a storage slot
    public createStorage(): boolean {
        if (itemStorage.length >= 16) return false;
        const newSlot: ItemSlotClass = new ItemSlotClass();
        itemStorage.push(newSlot);
        return true;
    }

    // Clear storage slots
    public clearStorage(): void {
        // Various Errors preventing action
        if (itemStorage == null) trace("ERROR: Cannot clear storage because storage does not exist.");
        else {
            trace("Attempted to remove " + itemStorage.length + " storage slots.");
            itemStorage.splice(0, itemStorage.length);
        }
    }

    public clearGearStorage(): void {
        // Various Errors preventing action
        if (gearStorage == null) trace("ERROR: Cannot clear storage because storage does not exist.");
        else {
            trace("Attempted to remove " + gearStorage.length + " storage slots.");
            gearStorage.splice(0, gearStorage.length);
        }
    }

    public initializeGearStorage(): void {
        // Completely empty storage array
        if (gearStorage == null) trace("ERROR: Cannot clear gearStorage because storage does not exist.");
        else {
            trace("Attempted to remove " + gearStorage.length + " gearStorage slots.");
            gearStorage.splice(0, gearStorage.length);
        }
        // Rebuild a new one!
        let newSlot: ItemSlotClass;
        while (gearStorage.length < 18) {
            newSlot = new ItemSlotClass();
            gearStorage.push(newSlot);
        }
    }

    private useItemInInventory(slotNum: number): void {
        clearOutput();
        if (player.itemSlots[slotNum].itype instanceof Useable) {
            const item: Useable = player.itemSlots[slotNum].itype as Useable;
            if (item.canUse()) { // If an item cannot be used then canUse should provide a description of why the item cannot be used
                if (!game.debug) player.itemSlots[slotNum].removeOneItem();
                useItem(item, player.itemSlots[slotNum]);
                return;
            }
        }
        else {
            outputText("You cannot use " + player.itemSlots[slotNum].itype.longName + "!\n\n");
        }
        itemGoNext(); // Normally returns to the inventory menu. In combat it goes to the inventoryCombatHandler function
        /* menuLoc is no longer needed, after enemyAI game will always move to the next round
                    else if (menuLoc == 1) {
                        menuLoc = 0;
                        if (!combatRoundOver()) {
                            outputText("\n\n");
                            enemyAI();
                        }
                    }
        */
    }

    private inventoryCombatHandler(): void {
        if (!combatRoundOver()) { // Check if the battle is over. If not then go to the enemy's action.
            outputText("\n\n");
            enemyAI();
        }
    }

    private useItem(item: Useable, fromSlot: ItemSlotClass): void {
        item.useText();
        if (item instanceof Armor) {
            player.armor.removeText();
            item = player.setArmor(item as Armor); // Item is now the player's old armor
            if (item == null)
                itemGoNext();
            else takeItem(item, callNext);
        }
        else if (item instanceof Weapon) {
            player.weapon.removeText();
            item = player.setWeapon(item as Weapon); // Item is now the player's old weapon
            if (item == null)
                itemGoNext();
            else takeItem(item, callNext);
        }
        else {
            currentItemSlot = fromSlot;
            if (!item.useItem()) itemGoNext(); // Items should return true if they have provided some form of sub-menu.
            // This is used for Reducto and GroPlus (which always present the player with a sub-menu)
            // and for the Kitsune Gift (which may show a sub-menu if the player has a full inventory)
            // 				if (!item.hasSubMenu()) itemGoNext(); //Don't call itemGoNext if there's a sub menu, otherwise it would never be displayed
        }
    }

    private takeItemFull(itype: ItemType, showUseNow: boolean, source: ItemSlotClass): void {
        outputText("There is no room for " + itype.longName + " in your inventory.  You may replace the contents of a pouch with " + itype.longName + " or abandon it.");
        menu();
        for (const x = 0; x < 5; x++) {
            if (player.itemSlots[x].unlocked)
                addButton(x, (player.itemSlots[x].itype.shortName + " x" + player.itemSlots[x].quantity), createCallBackFunction2(replaceItem, itype, x));
        }
        if (source != null) {
            currentItemSlot = source;
            addButton(7, "Put Back", createCallBackFunction2(returnItemToInventory, itype, false));
        }
        if (showUseNow && itype instanceof Useable) addButton(8, "Use Now", createCallBackFunction2(useItemNow, itype as Useable, source));
        addButton(9, "Abandon", callOnAbandon); // Does not doNext - immediately executes the callOnAbandon function
    }

    private useItemNow(item: Useable, source: ItemSlotClass): void {
        clearOutput();
        if (item.canUse()) { // If an item cannot be used then canUse should provide a description of why the item cannot be used
            useItem(item, source);
        }
        else {
            takeItemFull(item, false, source); // Give the player another chance to take this item
        }
    }

    private replaceItem(itype: ItemType, slotNum: number): void {
        clearOutput();
        if (player.itemSlots[slotNum].itype == itype) // If it is the same as what's in the slot...just throw away the new item
            outputText("You discard " + itype.longName + " from the stack to make room for the new one.");
        else { // If they are different...
            if (player.itemSlots[slotNum].quantity == 1) outputText("You throw away " + player.itemSlots[slotNum].itype.longName + " and replace it with " + itype.longName + ".");
            else outputText("You throw away " + player.itemSlots[slotNum].itype.longName + "(x" + player.itemSlots[slotNum].quantity + ") and replace it with " + itype.longName + ".");
            player.itemSlots[slotNum].setItemAndQty(itype, 1);
        }
        itemGoNext();
    }

    private unequipWeapon(): void {
        clearOutput();
        takeItem(player.setWeapon(WeaponLib.FISTS), inventoryMenu);
    }

    /* Never called
            public function hasItemsInRacks(itype:ItemType, armor:Boolean):Boolean {
                if (armor) return itemTypeInStorage(gearStorage, 9, 18, itype);
                return itemTypeInStorage(gearStorage, 0, 9, itype);
            }
    */

    private armorRackDescription(): boolean {
        if (itemAnyInStorage(gearStorage, 9, 18)) {
            const itemList: any[] = [];
            for (const x = 9; x < 18; x++)
                if (gearStorage[x].quantity > 0) itemList[itemList.length] = gearStorage[x].itype.longName;
            outputText("  It currently holds " + formatStringArray(itemList) + ".");
            return true;
        }
        return false;
    }

    private weaponRackDescription(): boolean {
        if (itemAnyInStorage(gearStorage, 0, 9)) {
            const itemList: any[] = [];
            for (const x = 0; x < 9; x++)
                if (gearStorage[x].quantity > 0) itemList[itemList.length] = gearStorage[x].itype.longName;
            outputText("  It currently holds " + formatStringArray(itemList) + ".");
            return true;
        }
        return false;
    }

    private itemAnyInStorage(storage: any[], startSlot: number, endSlot: number): boolean {
        for (const x = startSlot; x < endSlot; x++) if (storage[x].quantity > 0) return true;
        return false;
    }

    private itemTypeInStorage(storage: any[], startSlot: number, endSlot: number, itype: ItemType): boolean {
        for (const x = startSlot; x < endSlot; x++) if (storage[x].quantity > 0 && storage[x].itype == itype) return true;
        return false;
    }

    private pickItemToTakeFromCampStorage(): void {
        callNext = pickItemToTakeFromCampStorage;
        pickItemToTakeFromStorage(itemStorage, 0, itemStorage.length, "storage");
    }

    private pickItemToTakeFromArmorRack(): void {
        callNext = pickItemToTakeFromArmorRack;
        pickItemToTakeFromStorage(gearStorage, 9, 18, "rack");
    }

    private pickItemToTakeFromWeaponRack(): void {
        callNext = pickItemToTakeFromWeaponRack;
        pickItemToTakeFromStorage(gearStorage, 0, 9, "rack");
    }

    private pickItemToTakeFromStorage(storage: any[], startSlot: number, endSlot: number, text: string): void {
        clearOutput(); // Selects an item from a gear slot. Rewritten so that it no longer needs to use numbered events
        hideUpDown();
        if (!itemAnyInStorage(storage, startSlot, endSlot)) { // If no items are left then return to the camp menu. Can only happen if the player removes the last item.
            playerMenu();
            return;
        }
        outputText("What " + text + " slot do you wish to take an item from?");
        let button: number = 0;
        menu();
        for (const x = startSlot; x < endSlot; x++ , button++) {
            if (storage[x].quantity > 0) addButton(button, (storage[x].itype.shortName + " x" + storage[x].quantity), createCallBackFunction2(pickFrom, storage, x));
        }
        addButton(9, "Back", stash);
    }

    private pickFrom(storage: any[], slotNum: number): void {
        clearOutput();
        const itype: ItemType = storage[slotNum].itype;
        storage[slotNum].quantity--;
        inventory.takeItem(itype, callNext, callNext, storage[slotNum]);
    }

    private pickItemToPlaceInCampStorage(): void { pickItemToPlaceInStorage(placeInCampStorage, allAcceptable, "storage containers", false); }

    private pickItemToPlaceInArmorRack(): void { pickItemToPlaceInStorage(placeInArmorRack, armorAcceptable, "armor rack", true); }

    private pickItemToPlaceInWeaponRack(): void { pickItemToPlaceInStorage(placeInWeaponRack, weaponAcceptable, "weapon rack", true); }

    private allAcceptable(itype: ItemType): boolean { return true; }

    private armorAcceptable(itype: ItemType): boolean { return itype instanceof Armor; }

    private weaponAcceptable(itype: ItemType): boolean { return itype instanceof Weapon; }

    private pickItemToPlaceInStorage(placeInStorageFunction: () => void, typeAcceptableFunction: () => void, text: string, showEmptyWarning: boolean): void {
        clearOutput(); // Selects an item to place in a gear slot. Rewritten so that it no longer needs to use numbered events
        hideUpDown();
        outputText("What item slot do you wish to empty into your " + text + "?");
        menu();
        let foundItem: boolean = false;
        for (const x = 0; x < 5; x++) {
            if (player.itemSlots[x].unlocked && player.itemSlots[x].quantity > 0 && typeAcceptableFunction(player.itemSlots[x].itype)) {
                addButton(x, (player.itemSlots[x].itype.shortName + " x" + player.itemSlots[x].quantity), placeInStorageFunction, x);
                foundItem = true;
            }
        }
        if (showEmptyWarning && !foundItem) outputText("\n<b>You have no appropriate items to put in this rack.</b>");
        addButton(9, "Back", stash);
    }

    private placeInCampStorage(slotNum: number): void {
        placeIn(itemStorage, 0, itemStorage.length, slotNum);
        doNext(pickItemToPlaceInCampStorage);
    }

    private placeInArmorRack(slotNum: number): void {
        placeIn(gearStorage, 9, 18, slotNum);
        doNext(pickItemToPlaceInArmorRack);
    }

    private placeInWeaponRack(slotNum: number): void {
        placeIn(gearStorage, 0, 9, slotNum);
        doNext(pickItemToPlaceInWeaponRack);
    }

    private placeIn(storage: any[], startSlot: number, endSlot: number, slotNum: number): void {
        clearOutput();
        let x: number;
        let temp: number;
        const itype: ItemType = player.itemSlots[slotNum].itype;
        let qty: number = player.itemSlots[slotNum].quantity;
        const orig: number = qty;
        player.itemSlots[slotNum].emptySlot();
        for (x = startSlot; x < endSlot && qty > 0; x++) { // Find any slots which already hold the item that is being stored
            if (storage[x].itype == itype && storage[x].quantity < 5) {
                temp = 5 - storage[x].quantity;
                if (qty < temp) temp = qty;
                outputText("You add " + temp + "x " + itype.shortName + " into storage slot " + num2Text(x + 1 - startSlot) + ".\n");
                storage[x].quantity += temp;
                qty -= temp;
                if (qty == 0) return;
            }
        }
        for (x = startSlot; x < endSlot && qty > 0; x++) { // Find any empty slots and put the item(s) there
            if (storage[x].quantity == 0) {
                storage[x].setItemAndQty(itype, qty);
                outputText("You place " + qty + "x " + itype.shortName + " into storage slot " + num2Text(x + 1 - startSlot) + ".\n");
                qty = 0;
                return;
            }
        }
        outputText("There is no room for " + (orig == qty ? "" : "the remaining ") + qty + "x " + itype.shortName + ".  You leave " + (qty > 1 ? "them" : "it") + " in your inventory.\n");
        player.itemSlots[slotNum].setItemAndQty(itype, qty);
    }
}
