/**
 * Created by aimozg on 11.01.14.
 */

export class WeightedDrop implements RandomDrop {
    private items: any[] = [];
    private sum: number = 0;
    public constructor(first: *=null, firstWeight: number = 0) {
        if (first != null) {
            items.push([first, firstWeight]);
            sum += firstWeight;
        }
    }
    public add(item: any, weight: number = 1): WeightedDrop {
        items.push([item, weight]);
        sum += weight;
        return this;
    }
    public addMany(weight: number, ..._items): WeightedDrop {
        for (const item * in _items) {
            items.push([item, weight]);
            sum += weight;
        }
        return this;
    }
    // you can pass your own random value from 0 to 1 (so you can use your own RNG)
    public roll(): any {
        let random: number = Math.random() * sum;
        let item: any = null;
        while (random > 0 && items.length > 0) {
            const pair: any[] = items.shift();
            item = pair[0];
            random -= pair[1];
        }
        return item;
    }

    public clone(): WeightedDrop {
        const other: WeightedDrop = new WeightedDrop();
        other.items = items.slice();
        other.sum = sum;
        return other;
    }
}
