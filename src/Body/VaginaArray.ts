export class VaginaArray extends Array<VaginaClass> {
    public constructor(
        private owner: Character
    ) { super(); }

    public wetness(): number {
        if (this.length == 0)
            return 0;
        else
            return this[0].vaginalWetness;
    }

    // check for vagoo
    public hasVagina(): boolean {
        return this.length > 0;

    }

    public hasVirginVagina(): boolean {
        if (this.length > 0)
            return this[0].virgin;
        return false;
    }

    // create vagoo
    public createVagina(virgin: boolean = true, vaginalWetness: number = 1, vaginalLooseness: number = 0): boolean {
        if (this.length >= 2)
            return false;
        const newVagina = new VaginaClass(vaginalWetness, vaginalLooseness, virgin);
        this.push(newVagina);
        return true;
    }

    // REmove this
    public removeVagina(arraySpot: number = 0, totalRemoved: number = 1): void {
        // Various Errors preventing action
        if (arraySpot < -1 || totalRemoved <= 0) {
            // trace("ERROR: removeVagina called but arraySpot is negative or totalRemoved is 0.");
            return;
        }
        if (this.length == 0) {
            // trace("ERROR: removeVagina called but cocks do not exist.");
        }
        else {
            if (arraySpot > this.length - 1) {
                // trace("ERROR: removeVagina failed - array location is beyond the bounds of the array.");
            }
            else {
                this.splice(arraySpot, totalRemoved);
                // trace("Attempted to remove " + totalRemoved + " vaginas.");
            }
        }
        this.owner.genderCheck();
    }

    public averageVaginalLooseness(): number {
        let counter: number = this.length;
        let average: number = 0;
        // If the player has no vaginas
        if (this.length == 0)
            return 2;
        while (counter > 0) {
            counter--;
            average += this[counter].vaginalLooseness;
        }
        return (average / this.length);
    }

    public averageVaginalWetness(): number {
        // If the player has no vaginas
        if (this.length == 0)
            return 2;
        let counter: number = this.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += this[counter].vaginalWetness;
        }
        return (average / this.length);
    }

}
