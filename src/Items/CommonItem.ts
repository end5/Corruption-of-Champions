/**
 * Created by aimozg on 09.01.14.
 */

export class CommonItem extends ItemType {

    public clearOutput(): void {
        clearOutput();
    }
    public outputText(text: string): void {
        outputText(text);
    }

    public constructor(id: string, shortName: string = null, longName: string = null, value: number = 0, description: string = null) {
        super(id, shortName, longName, value, description);

    }
}
