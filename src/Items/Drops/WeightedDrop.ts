/**
 * Created by aimozg on 11.01.14.
 */

export class WeightedDrop<T> implements RandomDrop<T> {
    private items: [T, number][] = [];
    private sum: number = 0;

    public constructor(first: T | null = null, firstWeight: number = 0) {
        if (first)
            this.add(first, firstWeight);
    }

    public add(item: T, weight: number = 1) {
        this.items.push([item, weight]);
        this.sum += weight;
        return this;
    }

    public addMany(weight: number, ..._items: T[]) {
        for (const item of _items) {
            this.items.push([item, weight]);
            this.sum += weight;
        }
        return this;
    }

    // you can pass your own random value from 0 to 1 (so you can use your own RNG)
    public roll() {
        let random = Math.random() * this.sum;
        let item: T | null = null;
        while (random > 0 && this.items.length > 0) {
            const pair = this.items.shift()!;
            item = pair[0];
            random -= pair[1];
        }
        return item!;
    }

    public clone() {
        const other = new WeightedDrop<T>();
        other.items = this.items.slice();
        other.sum = this.sum;
        return other;
    }
}
