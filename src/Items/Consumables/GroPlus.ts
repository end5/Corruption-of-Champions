/**
 * Created by aimozg on 11.01.14.
 */

export class GroPlus extends Consumable {

    public constructor() {
        super("GroPlus", "GroPlus", "a needle filled with Gro+", 50, "This is a small needle with a reservoir full of blue liquid.  A faded label marks it as 'GroPlus'.  Its purpose seems obvious.");
    }

    public canUse(): boolean {
        return true;
    }

    // 		override public function hasSubMenu():Boolean { return true; } //Only GroPlus and Reducto use this.

    public useItem(): boolean {
        const gpBalls: () => void = (game.player.balls > 0 ? growPlusBalls : null);
        const gpBreasts: () => void = (game.player.breastRows.length > 0 ? growPlusBreasts : null);
        const gpClit: () => void = (game.player.vaginas.length > 0 ? growPlusClit : null);
        const gpCock: () => void = (game.player.cocks.length > 0 ? growPlusCock : null);
        const gpNipples: () => void = (game.player.breasts.totalNipples() > 0 ? growPlusNipples : null);
        clearOutput();
        outputText("You ponder the needle in your hand knowing it will enlarge the injection site.  What part of your body will you use it on?  ");
        choices("Balls", gpBalls, "Breasts", gpBreasts, "Clit", gpClit, "Cock", gpCock, "Nipples", gpNipples, "", null, "", null, "", null, "", null, "Nevermind", growPlusCancel);
        return (true);
    }

    private growPlusBalls(): void {
        clearOutput();
        game.player.slimeFeed();
        outputText("You sink the needle deep into your " + sackDescript(game.player) + ".  It hurts like hell, but you push down the plunger and the pain vanishes as the needles contents flow into you.\n\n");
        // 1 in 4 BIG growth.
        if (rand(4) == 0) {
            outputText("You feel a trembling in your " + ballsDescriptLight(game.player) + " as the chemicals start to go to work.  You can tell they're going to be VERY effective.\n");
            game.player.ballSize += rand(4) + 2;
            outputText("They shift, stretching your " + sackDescript(game.player) + " tight as they gain inches of size.  You step to steady yourself as your center of balance shifts due to your newly enlarged " + ballsDescriptLight(game.player) + ".  ");
        }
        else {
            game.player.ballSize += rand(2) + 1;
            outputText("You feel your testicles shift, pulling the skin of your " + sackDescript(game.player) + " a little bit as they grow to " + ballsDescriptLight(game.player) + ".  ");
        }
        if (game.player.ballSize > 10) outputText("Walking gets even tougher with the swollen masses between your legs.  Maybe this was a bad idea.");
        dynStats("lus", 10);
        Inventory.itemGoNext();
    }

    private growPlusBreasts(): void {
        clearOutput();
        game.player.slimeFeed();
        outputText("You sink the needle into the flesh of your " + allBreastsDescript(game.player) + " injecting each with a portion of the needle.\n\n");
        if (game.player.breastRows.length == 1)
            game.player.growTits(rand(5) + 1, 1, true, 1);
        else
            game.player.growTits(rand(2) + 1, game.player.breastRows.length, true, 1);
        dynStats("lus", 10);
        Inventory.itemGoNext();
    }

    private growPlusClit(): void {
        clearOutput();
        game.player.slimeFeed();
        outputText("You sink the needle into your clit, nearly crying with how much it hurts.  You push down the plunger and the pain vanishes as your clit starts to grow.\n\n");
        game.player.clitLength++;
        outputText("Your " + clitDescription(game.player) + " stops growing after an inch of new flesh surges free of your netherlips.  It twitches, feeling incredibly sensitive.");
        dynStats("sen", 2, "lus", 10);
        Inventory.itemGoNext();
    }

    private growPlusCock(): void {
        clearOutput();
        game.player.slimeFeed();
        outputText("You sink the needle into the base of your " + multiCockDescriptLight(game.player) + ".  It hurts like hell, but as you depress the plunger, the pain vanishes, replaced by a tingling pleasure as the chemicals take effect.\n\n");
        if (game.player.cocks.length == 1) {
            outputText("Your " + cockDescript(game.player, 0) + " twitches and thickens, pouring more than an inch of thick new length from your ");
            game.player.increaseCock(0, 4);
            game.player.cocks[0].cockLength += 1; // This was forcing "what was said" to match "what actually happened" no matter what increase/growCock /actually/ did.
            game.player.cocks[0].cockThickness += 0.5; // And growCock never actually touched thickness. Nor does the new version. Thickness mod was stripped out entirely.
        }
        // MULTI
        else {
            outputText("Your " + multiCockDescriptLight(game.player) + " twitch and thicken, each member pouring out more than an inch of new length from your ");
            for (const i = 0; i < game.player.cocks.length; i++) {
                game.player.increaseCock(i, 2);
                game.player.cocks[i].cockLength += 1;
                game.player.cocks[i].cockThickness += 0.5;
            }
        }
        if (game.player.cocks.hasSheath())
            outputText("sheath.");
        else outputText("crotch.");
        dynStats("sen", 2, "lus", 10);
        Inventory.itemGoNext();
    }

    private growPlusNipples(): void {
        clearOutput();
        game.player.slimeFeed();
        outputText("You sink the needle into each of your " + nippleDescription(game.player, 0) + "s in turn, dividing the fluid evenly between them.  Though each injection hurts, the pain is quickly washed away by the potent chemical cocktail.\n\n");
        // Grow nipples
        outputText("Your nipples engorge, prodding hard against the inside of your " + game.player.armorName + ".  Abruptly you realize they've grown more than an additional quarter-inch.\n\n");
        game.player.nippleLength += (rand(2) + 3) / 10;
        dynStats("lus", 15);
        // NIPPLECUNTZZZ
        if (!game.player.breasts.hasFuckableNipples() && rand(4) == 0) {
            let nowFuckable: boolean = false;
            for (const x = 0; x < game.player.breastRows.length; x++) {
                if (!game.player.breastRows[x].fuckable && game.player.nippleLength >= 2) {
                    game.player.breastRows[x].fuckable = true;
                    nowFuckable = true;
                }
            }
            // Talk about if anything was changed.
            if (nowFuckable) outputText("Your " + allBreastsDescript(game.player) + " tingle with warmth that slowly migrates to your nipples, filling them with warmth.  You pant and moan, rubbing them with your fingers.  A trickle of wetness suddenly coats your finger as it slips inside the nipple.  Shocked, you pull the finger free.  <b>You now have fuckable nipples!</b>\n\n");
        }
        Inventory.itemGoNext();
    }

    private growPlusCancel(): void {
        clearOutput();
        outputText("You put the vial away.\n\n");
        Inventory.returnItemToInventory(this);
    }
}
