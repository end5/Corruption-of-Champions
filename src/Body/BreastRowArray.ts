export class BreastRowArray extends Array {
    public biggestTitSize(): number {
        if (this.length == 0)
            return -1;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].breastRating < this[counter].breastRating)
                index = counter;
        }
        return this[index].breastRating;
    }

    public hasFuckableNipples(): boolean {
        let counter: number = this.length;
        while (counter > 0) {
            counter--;
            if (this[counter].fuckable)
                return true;
        }
        return false;
    }

    public hasBreasts(): boolean {
        if (this.length > 0) {
            if (this.biggestTitSize() >= 1)
                return true;
        }
        return false;
    }

    // public hasNipples(): boolean {
    //     let counter: number = this.length;
    //     while (counter > 0) {
    //         counter--;
    //         if (this[counter].nipplesPerBreast > 0)
    //             return true;
    //     }
    //     return false;
    // }

    // public lactationSpeed(): number {
    //     // Lactation * breastSize x 10 (milkPerBreast) determines scene
    //     return this.biggestLactation() * this.biggestTitSize() * 10;
    // }

    public biggestLactation(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].lactationMultiplier < this[counter].lactationMultiplier)
                index = counter;
        }
        return this[index].lactationMultiplier;
    }

    public averageLactation(): number {
        if (this.length == 0)
            return 0;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            index += this[counter].lactationMultiplier;
        }
        return Math.floor(index / this.length);
    }

    // create a row of breasts
    public createBreastRow(size: number = 0, nipplesPerBreast: number = 1): boolean {
        if (this.length >= 10)
            return false;
        const newBreastRow = new BreastRowClass();
        newBreastRow.breastRating = size;
        newBreastRow.nipplesPerBreast = nipplesPerBreast;
        this.push(newBreastRow);
        return true;
    }

    // Remove a breast row
    public removeBreastRow(arraySpot: number, totalRemoved: number): void {
        // Various Errors preventing action
        if (arraySpot < -1 || totalRemoved <= 0) {
            // trace("ERROR: removeBreastRow called but arraySpot is negative or totalRemoved is 0.");
            return;
        }
        if (this.length == 0) {
            // trace("ERROR: removeBreastRow called but cocks do not exist.");
        }
        else if (this.length == 1 || this.length - totalRemoved < 1) {
            // trace("ERROR: Removing the current breast row would break the Creature classes assumptions about breastRow contents.");
        }
        else {
            if (arraySpot > this.length - 1) {
                // trace("ERROR: removeBreastRow failed - array location is beyond the bounds of the array.");
            }
            else {
                this.splice(arraySpot, totalRemoved);
                // trace("Attempted to remove " + totalRemoved + " this.");
            }
        }
    }

    public totalBreasts(): number {
        let counter: number = this.length;
        let total: number = 0;
        while (counter > 0) {
            counter--;
            total += this[counter].breasts;
        }
        return total;
    }

    public totalNipples(): number {
        let counter: number = this.length;
        let total: number = 0;
        while (counter > 0) {
            counter--;
            total += this[counter].nipplesPerBreast * this[counter].breasts;
        }
        return total;
    }

    public smallestTitSize(): number {
        if (this.length == 0)
            return -1;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].breastRating > this[counter].breastRating)
                index = counter;
        }
        return this[index].breastRating;
    }

    public smallestTitRow(): number {
        if (this.length == 0)
            return -1;
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].breastRating > this[counter].breastRating)
                index = counter;
        }
        return index;
    }

    public biggestTitRow(): number {
        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].breastRating < this[counter].breastRating)
                index = counter;
        }
        return index;
    }

    public averageBreastSize(): number {
        let counter: number = this.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += this[counter].breastRating;
        }
        if (this.length == 0)
            return 0;
        return (average / this.length);
    }

    public averageNippleLength(): number {
        let counter: number = this.length;
        let average: number = 0;
        while (counter > 0) {
            counter--;
            average += (this[counter].breastRating / 10 + .2);
        }
        return (average / this.length);
    }

    public canTitFuck(): boolean {
        if (this.length == 0) return false;

        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].breasts < this[counter].breasts && this[counter].breastRating > 3)
                index = counter;
        }
        if (this[index].breasts >= 2 && this[index].breastRating > 3)
            return true;
        return false;
    }

    public mostBreastsPerRow(): number {
        if (this.length == 0) return 2;

        let counter: number = this.length;
        let index: number = 0;
        while (counter > 0) {
            counter--;
            if (this[index].breasts < this[counter].breasts)
                index = counter;
        }
        return this[index].breasts;
    }

    public averageNipplesPerBreast(): number {
        let counter: number = this.length;
        let breasts: number = 0;
        let nipples: number = 0;
        while (counter > 0) {
            counter--;
            breasts += this[counter].breasts;
            nipples += this[counter].nipplesPerBreast * this[counter].breasts;
        }
        if (breasts == 0)
            return 0;
        return Math.floor(nipples / breasts);
    }

}
