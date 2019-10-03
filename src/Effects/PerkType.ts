/**
 * Created by aimozg on 26.01.14.
 */

export class PerkType {
    private static PERK_LIBRARY: Dictionary = new Dictionary();

    public static lookupPerk(id: string): PerkType {
        return PERK_LIBRARY[id];
    }

    public static getPerkLibrary(): Dictionary {
        return PERK_LIBRARY;
    }

    private _id: string;
    private _name: string;
    private _desc: string;
    private _longDesc: string;

    /**
     * Unique perk id, should be kept in future game versions
     */
    public get id(): string {
        return _id;
    }

    /**
     * Perk short name, could be changed in future game versions
     */
    public get name(): string {
        return _name;
    }

    /**
     * Short description used in perk listing
     */
    public desc(params: PerkClass = null): string {
        return _desc;
    }

    /**
     * Long description used when offering perk at levelup
     */
    public get longDesc(): string {
        return _longDesc;
    }

    public constructor(id: string, name: string, desc: string, longDesc: string = null) {
        this._id = id;
        this._name = name;
        this._desc = desc;
        this._longDesc = longDesc || _desc;
        if (PERK_LIBRARY[id] != null) {
            CoC_Settings.error("Duplicate perk id " + id + ", old perk is " + (PERK_LIBRARY[id] as PerkType)._name);
        }
        PERK_LIBRARY[id] = this;
    }

    public toString(): string {
        return "\"" + _id + "\"";
    }
}
