
export class ItemSlotClass extends Object {

    // data
    private _quantity: number = 0;
    private _itype: ItemType = ItemType.NOTHING;
    private _unlocked: boolean = false;

    public setItemAndQty(itype: ItemType, quant: number): void {
        if (itype == null) itype = ItemType.NOTHING;
        if (quant == 0 && itype == ItemType.NOTHING) {
            emptySlot();
            return;
        }
        if (quant < 0 || quant == 0 && itype != ItemType.NOTHING || quant > 0 && itype == ItemType.NOTHING) {
            Logger.error("Inconsistent setItemAndQty call: " + quant + " " + itype);
            quant = 0;
            itype = ItemType.NOTHING;
        }
        this._quantity = quant;
        this._itype = itype;
    }

    public emptySlot(): void {
        this._quantity = 0;
        this._itype = ItemType.NOTHING;
    }

    public removeOneItem(): void {
        if (this._quantity == 0)
            Logger.error("Tried to remove item from empty slot!");
        if (this._quantity > 0)
            this._quantity -= 1;

        if (this._quantity == 0)
            this._itype = ItemType.NOTHING;
    }

    public get quantity(): number {
        return _quantity;
    }

    public set quantity(value: number): void {
        if (value > 0 && _itype == null) Logger.error("ItemSlotClass.quantity set with no item; use setItemAndQty instead!");
        if (value == 0) _itype = ItemType.NOTHING;
        _quantity = value;
    }

    public get itype(): ItemType {
        return _itype;
    }

    public get unlocked(): boolean {
        return _unlocked;
    }

    public set unlocked(value: boolean): void {
        if (_unlocked != value) {
            emptySlot();
        }
        _unlocked = value;
    }

    public isEmpty(): boolean {
        return _quantity <= 0;
    }
}
