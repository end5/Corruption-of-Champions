
export class ControlledBreathPerk extends PerkType {

    public desc(params: PerkClass = null): string {
        if (game.player.cor >= 30) return "<b>DISABLED</b> - Corruption too high!";
        else return super.desc(params);
    }

    public constructor() {
        super("Controlled Breath", "Controlled Breath", "Jojo’s training allows you to recover more quickly. Increases rate of fatigue regeneration by 10%");
    }
}
