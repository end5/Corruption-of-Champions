/**
 * Created by aimozg on 31.01.14.
 */

export class StatusAffectType {
    private static STATUSAFFECT_LIBRARY: Dictionary = new Dictionary();

    public static lookupStatusAffect(id: string): StatusAffectType {
        return STATUSAFFECT_LIBRARY[id];
    }

    public static getStatusAffectLibrary(): Dictionary {
        return STATUSAFFECT_LIBRARY;
    }

    private _id: string;

    /**
     * Unique perk id, should be kept in future game versions
     */
    public get id(): string {
        return _id;
    }

    public constructor(id: string) {
        this._id = id;
        if (STATUSAFFECT_LIBRARY[id] != null) {
            CoC_Settings.error("Duplicate status affect " + id);
        }
        STATUSAFFECT_LIBRARY[id] = this;
    }

    public toString(): string {
        return "\"" + _id + "\"";
    }
}
