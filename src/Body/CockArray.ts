export class CockArray extends Array<Cock> {
    public constructor(
        private owner: Character
    ) { super(); }

    public cockArea(i_cockIndex: number): number {
        if (i_cockIndex >= this.length || i_cockIndex < 0)
            return 0;
        return (this[i_cockIndex].cockThickness * this[i_cockIndex].cockLength);
    }

    public biggestCockLength(): number {
        if (this.length == 0)
            return 0;
        return this[this.biggestCockIndex()].cockLength;
    }

    public biggestCockArea(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cArea() < this[counter].cArea())
                index = counter;
        }
        return this[index].cArea();
    }

    // Find the second biggest dick and it's area.
    // public biggestCockArea2(): number {
    //     if (this.length <= 1)
    //         return 0;
    //     let counter: number = this.length;
    //     let index: number = 0;
    //     let index2: number = -1;
    //     // Find the biggest
    //     while (counter > 0) {
    //         counter--;
    //         if (this.cocks.area(index) < this[counter].cArea())
    //             index = counter;
    //     }
    //     // Reset counter and find the next biggest
    //     counter = this.length;
    //     while (counter > 0) {
    //         counter--;
    //         // Is this spot claimed by the biggest?
    //         if (counter != index) {
    //             // Not set yet?
    //             if (index2 == -1)
    //                 index2 = counter;
    //             // Is the stored value less than the current one?
    //             if (this.cocks.area(index2) < this[counter].cArea()) {
    //                 index2 = counter;
    //             }
    //         }
    //     }
    //     // If it couldn't find a second biggest...
    //     if (index == index2)
    //         return 0;
    //     return this.cocks.area(index2);
    // }

    public longestCock(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cockLength < this[counter].cockLength)
                index = counter;
        }
        return index;
    }

    // public longestCockLength(): number {
    //     if (this.length == 0)
    //         return 0;
    //     let counter: number = this.length;
    //     let index: number = 0;
    //     while (counter > 0) {
    //         counter--;
    //         if (this[index].cockLength < this[counter].cockLength)
    //             index = counter;
    //     }
    //     return this[index].cockLength;
    // }

    public longestHorseCockLength(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if ((this[index].cockType != CockTypesEnum.HORSE && this[counter].cockType == CockTypesEnum.HORSE) || (this[index].cockLength < this[counter].cockLength && this[counter].cockType == CockTypesEnum.HORSE))
                index = counter;
        }
        return this[index].cockLength;
    }

    public twoDickRadarSpecial(width: number): boolean {
        // No two dicks?  FUCK OFF
        if (this.length < 2)
            return false;

        // Set up vars
        // Get thinnest, work done already
        const thinnest: number = this.thinnestCockIndex();
        let thinnest2: number = 0;
        // For ze loop
        let temp: number = 0;
        // Make sure they arent the same at initialization
        if (thinnest2 == thinnest)
            thinnest2 = 1;
        // Loop through to find 2nd thinnest
        while (temp < this.length) {
            if (this[thinnest2].cockThickness > this[temp].cockThickness && temp != thinnest)
                thinnest2 = temp;
            temp++;
        }
        // If the two thicknesses added together are less than the arg, true, else false
        return this[thinnest].cockThickness + this[thinnest2].cockThickness < width;
    }

    public totalCockThickness(): number {
        let thick: number = 0;
        let counter: number = this.length;
        while (counter > 0) {
            counter--;
            thick += this[counter].cockThickness;
        }
        return thick;
    }

    public thickestCock(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cockThickness < this[counter].cockThickness)
                index = counter;
        }
        return index;
    }

    // public thickestCockThickness(): number {
    //     if (this.length == 0)
    //         return 0;
    //     let counter: number = this.length;
    //     let index: number = 0;
    //     while (counter > 0) {
    //         counter--;
    //         if (this[index].cockThickness < this[counter].cockThickness)
    //             index = counter;
    //     }
    //     return this[index].cockThickness;
    // }

    public thinnestCockIndex(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cockThickness > this[counter].cockThickness)
                index = counter;
        }
        return index;
    }

    public smallestCockIndex(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cArea() > this[counter].cArea()) {
                index = counter;
            }
        }
        return index;
    }

    public smallestCockLength(): number {
        if (this.length == 0)
            return 0;
        return this[this.smallestCockIndex()].cockLength;
    }

    public shortestCockIndex(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cockLength > this[counter].cockLength)
                index = counter;
        }
        return index;
    }

    public shortestCockLength(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cockLength > this[counter].cockLength)
                index = counter;
        }
        return this[index].cockLength;
    }

    // Find the biggest cock that fits inside a given value
    public cockThatFits(i_fits: number = 0, type: string = "area"): number {
        if (this.length <= 0)
            return -1;
        let cockIdxPtr: number = this.length;
        // Current largest fitter
        let cockIndex: number = -1;
        while (cockIdxPtr > 0) {
            cockIdxPtr--;
            if (type == "area") {
                if (this[cockIdxPtr].cArea() <= i_fits) {
                    // If one already fits
                    if (cockIndex >= 0) {
                        // See if the newcomer beats the saved small guy
                        if (this[cockIdxPtr].cArea() > this[cockIndex].cArea())
                            cockIndex = cockIdxPtr;
                    }
                    // Store the index of fitting dick
                    else
                        cockIndex = cockIdxPtr;
                }
            }
            else if (type == "length") {
                if (this[cockIdxPtr].cockLength <= i_fits) {
                    // If one already fits
                    if (cockIndex >= 0) {
                        // See if the newcomer beats the saved small guy
                        if (this[cockIdxPtr].cockLength > this[cockIndex].cockLength)
                            cockIndex = cockIdxPtr;
                    }
                    // Store the index of fitting dick
                    else
                        cockIndex = cockIdxPtr;
                }
            }
        }
        return cockIndex;
    }

    // Find the 2nd biggest cock that fits inside a given value
    public cockThatFits2(fits: number = 0): number {
        if (this.length == 1)
            return -1;
        let counter: number = this.length;
        // Current largest fitter
        let index: number = -1;
        let index2: number = -1;
        while (counter > 0) {
            counter--;
            // Does this one fit?
            if (this[counter].cArea() <= fits) {
                // If one already fits
                if (index >= 0) {
                    // See if the newcomer beats the saved small guy
                    if (this[counter].cArea() > this[index].cArea()) {
                        // Save old wang
                        if (index != -1)
                            index2 = index;
                        index = counter;
                    }
                    // If this one fits and is smaller than the other great
                    else {
                        if ((this[index2].cArea() < this[counter].cArea()) && counter != index) {
                            index2 = counter;
                        }
                    }
                    if (index >= 0 && index == index2)
                        trace("FUCK ERROR COCKTHATFITS2 SHIT IS BROKED!");
                }
                // Store the index of fitting dick
                else
                    index = counter;
            }
        }
        return index2;
    }

    public smallestCockArea(): number {
        if (this.length == 0)
            return -1;
        return this[this.smallestCockIndex()].cArea();
    }

    public smallestCock(): number {
        return this[this.smallestCockIndex()].cArea();
    }

    public biggestCockIndex(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].cArea() < this[counter].cArea())
                index = counter;
        }
        return index;
    }

    // Find the second biggest dick's index.
    public biggestCockIndex2(): number {
        if (this.length <= 1)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        let index2: number = 0;
        // Find the biggest
        while (counter > 0) {
            counter--;
            if (this[index].cArea() < this[counter].cArea())
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = this.length;
        while (counter > 0) {
            counter--;
            // Make sure index2 doesn't get stuck
            // at the same value as index1 if the
            // initial location is biggest.
            if (index == index2 && counter != index)
                index2 = counter;
            // Is the stored value less than the current one?
            if (this[index2].cArea() < this[counter].cArea()) {
                // Make sure we don't set index2 to be the same
                // as the biggest dick.
                if (counter != index)
                    index2 = counter;
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2)
            return 0;
        return index2;
    }

    public smallestCockIndex2(): number {
        if (this.length <= 1)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        let index2: number = 0;
        // Find the smallest
        while (counter > 0) {
            counter--;
            if (this[index].cArea() > this[counter].cArea())
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = this.length;
        while (counter > 0) {
            counter--;
            // Make sure index2 doesn't get stuck
            // at the same value as index1 if the
            // initial location is biggest.
            if (index == index2 && counter != index)
                index2 = counter;
            // Is the stored value less than the current one?
            if (this[index2].cArea() > this[counter].cArea()) {
                // Make sure we don't set index2 to be the same
                // as the biggest dick.
                if (counter != index)
                    index2 = counter;
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2)
            return 0;
        return index2;
    }

    // Find the third biggest dick index.
    public biggestCockIndex3(): number {
        if (this.length <= 2)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        let index2: number = -1;
        let index3: number = -1;
        // Find the biggest
        while (counter > 0) {
            counter--;
            if (this[index].cArea() < this[counter].cArea())
                index = counter;
        }
        // Reset counter and find the next biggest
        counter = this.length;
        while (counter > 0) {
            counter--;
            // If this index isn't used already
            if (counter != index) {
                // Has index been set to anything yet?
                if (index2 == -1)
                    index2 = counter;
                // Is the stored value less than the current one?
                else if (this[index2].cArea() < this[counter].cArea()) {
                    index2 = counter;
                }
            }
        }
        // If it couldn't find a second biggest...
        if (index == index2 || index2 == -1)
            index2 = 0;
        // Reset counter and find the next biggest
        counter = this.length;
        while (counter > 0) {
            counter--;
            // If this index isn't used already
            if (counter != index && counter != index2) {
                // Has index been set to anything yet?
                if (index3 == -1)
                    index3 = counter;
                // Is the stored value less than the current one?
                else if (this[index3].cArea() < this[counter].cArea()) {
                    index3 = counter;
                }
            }
        }
        // If it fails for some reason.
        if (index3 == -1)
            index3 = 0;
        return index3;
    }

    public countCocksOfType(type: CockTypesEnum): number {
        if (this.length == 0) return 0;
        let counter: number = 0;
        for (let x = 0; x < this.length; x++) {
            if (this[x].cockType == type) counter++;
        }
        return counter;
    }

    public anemoneCocks(): number { // How many anemonecocks?
        return this.countCocksOfType(CockTypesEnum.ANEMONE);
    }

    public catCocks(): number { // How many catcocks?
        return this.countCocksOfType(CockTypesEnum.CAT);
    }

    public demonCocks(): number { // How many demoncocks?
        return this.countCocksOfType(CockTypesEnum.DEMON);
    }

    public displacerCocks(): number { // How many displacerCocks?
        return this.countCocksOfType(CockTypesEnum.DISPLACER);
    }

    // Note: DogCocks/FoxCocks are functionally identical. They actually change back and forth depending on some
    // of the PC's attributes, and this is recaluculated every hour spent at camp.
    // As such, delineating between the two is kind of silly.
    public dogCocks(): number { // How many dogCocks
        if (this.length == 0) return 0;
        let counter: number = 0;
        for (let x = 0; x < this.length; x++) {
            if (this[x].cockType == CockTypesEnum.DOG || this[x].cockType == CockTypesEnum.FOX) counter++;
        }
        return counter;
    }

    public dragonCocks(): number { // How many dragonCocks?
        return this.countCocksOfType(CockTypesEnum.DRAGON);
    }

    public foxCocks(): number { // How many foxCocks
        return this.dogCocks();
    }

    public horseCocks(): number { // How many horsecocks?
        return this.countCocksOfType(CockTypesEnum.HORSE);
    }

    public kangaCocks(): number { // How many kangawangs?
        return this.countCocksOfType(CockTypesEnum.KANGAROO);
    }

    public lizardCocks(): number { // How many lizard/snake-cocks?
        return this.countCocksOfType(CockTypesEnum.LIZARD);
    }

    public normalCocks(): number { // How many normalCocks?
        return this.countCocksOfType(CockTypesEnum.HUMAN);
    }

    public tentacleCocks(): number { // How many tentaclecocks?
        return this.countCocksOfType(CockTypesEnum.TENTACLE);
    }

    public findFirstCockType(ctype: CockTypesEnum): number {
        let index: number = 0;
        if (this[index].cockType == ctype)
            return index;
        while (index < this.length) {
            index++;
            if (this[index].cockType == ctype)
                return index;
        }
        // trace("Creature.cocks.findFirstCockType ERROR - searched for cocktype: " + ctype + " and could not find it.");
        return 0;
    }

    /*public function findFirstCockType(type:Number = 0):Number
    {
        var index:Number = 0;
        if (cocks[index].cockType == type)
            return index;
        while (index < cocks.length)
        {
            index++;
            if (cocks[index].cockType == type)
                return index;
        }
        //trace("Creature.cocks.findFirstCockType ERROR - searched for cocktype: " + type + " and could not find it.");
        return 0;
    }*/

    // Change first normal cock to horsecock!
    // Return number of affected cock, otherwise -1
    public addHorseCock(): number {
        let counter: number = this.length;
        while (counter > 0) {
            counter--;
            // Human - > horse
            if (this[counter].cockType == CockTypesEnum.HUMAN) {
                this[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Dog - > horse
            if (this[counter].cockType == CockTypesEnum.DOG) {
                this[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Tentacle - > horse
            if (this[counter].cockType == CockTypesEnum.TENTACLE) {
                this[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Demon -> horse
            if (this[counter].cockType == CockTypesEnum.DEMON) {
                this[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
            // Catch-all
            if (this[counter].cockType > 4) {
                this[counter].cockType = CockTypesEnum.HORSE;
                return counter;
            }
        }
        return -1;
    }

    // Create a cock. Default type is HUMAN
    public createCock(clength: number = 5.5, cthickness: number = 1, ctype?: CockTypesEnum): boolean {
        if (!ctype) ctype = CockTypesEnum.HUMAN;
        if (this.length >= 10)
            return false;
        const newCock = new Cock(clength, cthickness, ctype);
        // var newCock:cockClass = new cockClass();
        newCock.cockThickness = cthickness;
        newCock.cockLength = clength;
        this.push(newCock);
        return true;
    }

    // Remove cocks
    public removeCock(arraySpot: number, totalRemoved: number): void {
        // Various Errors preventing action
        if (arraySpot < 0 || totalRemoved <= 0) {
            // trace("ERROR: removeCock called but arraySpot is negative or totalRemoved is 0.");
            return;
        }
        if (this.length == 0) {
            // trace("ERROR: removeCock called but cocks do not exist.");
        }
        else {
            if (arraySpot > this.length - 1) {
                // trace("ERROR: removeCock failed - array location is beyond the bounds of the array.");
            }
            else {
                try {
                    const cock = this[arraySpot];
                    if (cock.sock == "viridian") {
                        this.owner.perks.remove(PerkLib.LustyRegeneration);
                    }
                    else if (cock.sock == "cockring") {
                        let numRings: number = 0;
                        for (let i = 0; i < this.length; i++) {
                            if (this[i].sock == "cockring") numRings++;
                        }

                        if (numRings == 0) this.owner.perks.remove(PerkLib.PentUp);
                        else this.owner.perks.setValue(PerkLib.PentUp, 1, 5 + (numRings * 5));
                    }
                    this.splice(arraySpot, totalRemoved);
                }
                catch (e: Error) {
                    trace("Argument error in Creature[" + this.owner.short + "]: " + e.message);
                }
                // trace("Attempted to remove " + totalRemoved + " cocks.");
            }
        }
        this.owner.genderCheck();
    }

    public averageCockThickness(): number {
        let counter: number = this.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += this[counter].cockThickness;
        }
        if (this.length == 0)
            return 0;
        return (average / this.length);
    }

    public averageCockLength(): number {
        let counter: number = this.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += this[counter].cockLength;
        }
        if (this.length == 0)
            return 0;
        return (average / this.length);
    }

    public hasSheath(): boolean {
        if (this.length == 0) return false;
        for (let x = 0; x < this.length; x++) {
            switch (this[x].cockType) {
                case CockTypesEnum.CAT:
                case CockTypesEnum.DISPLACER:
                case CockTypesEnum.DOG:
                case CockTypesEnum.FOX:
                case CockTypesEnum.HORSE:
                case CockTypesEnum.KANGAROO:
                    return true; // If there's even one cock of any of these types then return true
                default:
            }
        }
        return false;
    }

    public hasSockRoom(): boolean {
        let index: number = this.length;
        while (index > 0) {
            index--;
            if (this[index].sock == "")
                return true;
        }
        return false;
    }

    // Deprecated
    public hasSock(arg: string = ""): boolean {
        let index: number = this.length;

        while (index > 0) {
            index--;
            if (this[index].sock != "") {
                if (arg == "" || this[index].sock == arg)
                    return true;
            }
        }
        return false;
    }
    public countCockSocks(type: string): number {
        let count: number = 0;

        for (let i = 0; i < this.length; i++) {
            if (this[i].sock == type) {
                count++;
            }
        }
        trace("countCockSocks found " + count + " " + type);
        return count;
    }

}
