import { Character } from "../Character/Character";
import { PerkLib } from "../Effects/PerkLib";

export class Ovipositor {
    public constructor(
        private owner: Character
    ) {}

    public canOvipositSpider(): boolean {
        if (this.eggs() >= 10 && this.owner.perks.findByType(PerkLib.SpiderOvipositor) >= 0 && this.owner.isDrider() && this.owner.tailType == 5)
            return true;
        return false;
    }

    public canOvipositBee(): boolean {
        if (this.eggs() >= 10 && this.owner.perks.findByType(PerkLib.BeeOvipositor) >= 0 && this.owner.tailType == 6)
            return true;
        return false;
    }

    public canOviposit(): boolean {
        if (this.canOvipositSpider() || this.canOvipositBee())
            return true;
        return false;
    }

    public eggs(): number {
        if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.owner.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) >= 0)
            return this.owner.perks.getValue1Of(PerkLib.SpiderOvipositor);
        else
            return this.owner.perks.getValue1Of(PerkLib.BeeOvipositor);
    }

    public addEggs(arg: number = 0): number {
        if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.owner.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else {
            if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) >= 0) {
                this.owner.perks.addValue(PerkLib.SpiderOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.owner.perks.setValue(PerkLib.SpiderOvipositor, 1, 50);
                return this.owner.perks.getValue1Of(PerkLib.SpiderOvipositor);
            }
            else {
                this.owner.perks.addValue(PerkLib.BeeOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.owner.perks.setValue(PerkLib.BeeOvipositor, 1, 50);
                return this.owner.perks.getValue1Of(PerkLib.BeeOvipositor);
            }
        }
    }

    public dumpEggs(): void {
        if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.owner.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return;
        this.setEggs(0);
        // Sets fertile eggs = regular eggs (which are 0)
        this.fertilizeEggs();
    }

    public setEggs(arg: number = 0): number {
        if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.owner.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else {
            if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) >= 0) {
                this.owner.perks.setValue(PerkLib.SpiderOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.owner.perks.setValue(PerkLib.SpiderOvipositor, 1, 50);
                return this.owner.perks.getValue1Of(PerkLib.SpiderOvipositor);
            }
            else {
                this.owner.perks.setValue(PerkLib.BeeOvipositor, 1, arg);
                if (this.eggs() > 50)
                    this.owner.perks.setValue(PerkLib.BeeOvipositor, 1, 50);
                return this.owner.perks.getValue1Of(PerkLib.BeeOvipositor);
            }
        }
    }

    public fertilizedEggs(): number {
        if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.owner.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) >= 0)
            return this.owner.perks.getValue2Of(PerkLib.SpiderOvipositor);
        else
            return this.owner.perks.getValue2Of(PerkLib.BeeOvipositor);
    }

    public fertilizeEggs(): number {
        if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) < 0 && this.owner.perks.findByType(PerkLib.BeeOvipositor) < 0)
            return -1;
        else if (this.owner.perks.findByType(PerkLib.SpiderOvipositor) >= 0)
            this.owner.perks.setValue(PerkLib.SpiderOvipositor, 2, this.eggs());
        else
            this.owner.perks.setValue(PerkLib.BeeOvipositor, 2, this.eggs());
        return this.fertilizedEggs();
    }

}
