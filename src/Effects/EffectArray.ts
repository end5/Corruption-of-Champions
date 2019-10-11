export class EffectArray extends Array {
    // Create a status
    public create(stype: StatusAffectType, value1: number, value2: number, value3: number, value4: number): void {
        const newStatusAffect: StatusAffectClass = new StatusAffectClass(stype, value1, value2, value3, value4);
        this.push(newStatusAffect);
        // trace("create -> "+this.join(","));
        // trace("NEW STATUS APPLIED TO PLAYER!: " + statusName);
    }

    // Remove a status
    public remove(stype: StatusAffectType): void {
        const counter: number = this.findByType(stype);
        if (counter < 0) return;
        this.splice(counter, 1);
        // trace("remove -> "+this.join(","));
    }

    public findByType(stype: StatusAffectType): number {
        for (const counter = 0; counter < this.length; counter++) {
            if (this[counter].stype == stype)
                return counter;
        }
        return -1;
    }

    public setValue(stype: StatusAffectType, statusValueNum: number = 1, newNum: number = 0): void {
        const counter: number = this.findByType(stype);
        // Various Errors preventing action
        if (counter < 0) return;
        if (statusValueNum < 1 || statusValueNum > 4) {
            CoC_Settings.error("ChangeStatusValue called with invalid status value number.");
            return;
        }
        if (statusValueNum == 1)
            this[counter].value1 = newNum;
        if (statusValueNum == 2)
            this[counter].value2 = newNum;
        if (statusValueNum == 3)
            this[counter].value3 = newNum;
        if (statusValueNum == 4)
            this[counter].value4 = newNum;
    }

    public addValue(stype: StatusAffectType, statusValueNum: number = 1, bonus: number = 0): void {
        const counter: number = this.findByType(stype);
        // Various Errors preventing action
        if (counter < 0) {
            return;
        }
        if (statusValueNum < 1 || statusValueNum > 4) {
            CoC_Settings.error("ChangeStatusValue called with invalid status value number.");
            return;
        }
        if (statusValueNum == 1)
            this[counter].value1 += bonus;
        if (statusValueNum == 2)
            this[counter].value2 += bonus;
        if (statusValueNum == 3)
            this[counter].value3 += bonus;
        if (statusValueNum == 4)
            this[counter].value4 += bonus;
    }

    public getValue1Of(stype: StatusAffectType): number {
        const counter: number = this.findByType(stype);
        return (counter < 0) ? 0 : this[counter].value1;
    }

    public getValue2Of(stype: StatusAffectType): number {
        const counter: number = this.findByType(stype);
        return (counter < 0) ? 0 : this[counter].value2;
    }

    public getValue3Of(stype: StatusAffectType): number {
        const counter: number = this.findByType(stype);
        return (counter < 0) ? 0 : this[counter].value3;
    }

    public getValue4Of(stype: StatusAffectType): number {
        const counter: number = this.findByType(stype);
        return (counter < 0) ? 0 : this[counter].value4;
    }

    public clear(): void {
        let counter: number = this.length;
        while (counter > 0) {
            counter--;
            this.splice(counter, 1);
        }
    }
}
