/**
 * Created by aimozg on 18.01.14.
 */

export class SluttySwimwear extends ArmorWithPerk {

    public constructor() {
        super("S.Swmwr", "S.Swmwr", "slutty swimwear", "a skimpy black bikini", 0, 6, "An impossibly skimpy black bikini. You feel dirty just looking at it... and a little aroused, actually.", "Light", PerkLib.SluttySeduction, 6, 0, 0, 0, "", true);
    }

    public useText(): void { // Produces any text seen when equipping the armor normally
        dynStats("lus", 5);
        if (game.player.biggestTitSize() < 1)
            outputText("You feel rather stupid putting the top part on like this, but you're willing to bear with it. It could certainly be good for distracting.  ");
        else {
            outputText("The bikini top clings tightly to your bustline, sending a shiver of pleasure through your body. It serves to turn you on quite nicely.  ");
            dynStats("lus", 5);
        }
        if (game.player.cocks.length == 0) {
            outputText("The thong moves over your smooth groin, clinging onto your buttocks nicely.  ");
            if (game.player.balls > 0) {
                if (game.player.ballSize > 5) outputText("You do your best to put the thong on, and while the material is very stretchy, it simply can't even begin to cover everything, and your " + ballsDescriptLight(game.player) + " hang on the sides, exposed.  Maybe if you shrunk your male parts down a little...");
                else outputText("However, your testicles do serve as an area of discomfort, stretching the material and bulging out the sides slightly.  ");
            }
        }
        else {
            if (game.player.cocks.length == 1) {
                outputText("You grunt in discomfort, your " + cockDescript(game.player, 0) + " flopping free from the thong's confines. The tight material rubbing against your dick does manage to turn you on slightly.  ");
            }
            else {
                outputText("You grunt in discomfort, your " + multiCockDescriptLight(game.player) + " flopping free from the thong's confines. The tight material rubbing against your dicks does manage to turn you on slightly.  ");
            }
            dynStats("lus", 5);
            if (game.player.cocks.biggestCockArea() >= 20) outputText("You do your best to put the thong on, and while the material is very stretchy, it simply can't even begin to cover everything, and your " + cockDescript(game.player, game.player.cocks.biggestCockIndex()) + " has popped out of the top, completely exposed.  Maybe if you shrunk your male parts down a little...");
            // [If dick is 7+ inches OR balls are apple-sized]
            else if (game.player.ballSize > 5) outputText("You do your best to put the thong on, and while the material is very stretchy, it simply can't even begin to cover everything, and your " + ballsDescriptLight(game.player) + " hang on the sides, exposed.  Maybe if you shrunk your male parts down a little...");
        }
        outputText("\n\n");
    }

    /*
            override public function equipEffect(player:Player, output:Boolean):void
            {
                super.equipEffect(player,output);
                if(output) dynStats("lus", 5);
                if(output) {
                    //[flat-chested]
                    if(player.biggestTitSize() < 1) outputText("You feel rather stupid putting the top part on like this, but you're willing to bear with it. It could certainly be good for distracting.  ");
                    //[breasts]
                    else {
                        outputText("The bikini top clings tightly to your bustline, sending a shiver of pleasure through your body. It serves to turn you on quite nicely.  ");
                        dynStats("lus", 5);
                    }
                    //[no dick]
                    if(player.cocks.length == 0) {
                        outputText("The thong moves over your smooth groin, clinging onto your buttocks nicely.  ");
                        if(player.balls > 0) {
                            if(player.ballSize > 5) outputText("You do your best to put the thong on, and while the material is very stretchy, it simply can't even begin to cover everything, and your " + ballsDescriptLight(player) + " hang on the sides, exposed.  Maybe if you shrunk your male parts down a little...");
                            else outputText("However, your testicles do serve as an area of discomfort, stretching the material and bulging out the sides slightly.  ");
                        }
                    }
                    //[dick]
                    else {
                        if(player.cocks.length == 1) {
                            outputText("You grunt in discomfort, your " + cockDescript(player, 0) + " flopping free from the thong's confines. The tight material rubbing against your dick does manage to turn you on slightly.  ");
                        }
                        else {
                            outputText("You grunt in discomfort, your " + multiCockDescriptLight(player) + " flopping free from the thong's confines. The tight material rubbing against your dicks does manage to turn you on slightly.  ");
                        }
                        dynStats("lus", 5);
                        if(player.cocks.biggestCockArea() >= 20) outputText("You do your best to put the thong on, and while the material is very stretchy, it simply can't even begin to cover everything, and your " + cockDescript(player, player.cocks.biggestCockIndex()) + " has popped out of the top, completely exposed.  Maybe if you shrunk your male parts down a little...");
                        //[If dick is 7+ inches OR balls are apple-sized]
                        else if(player.ballSize > 5) outputText("You do your best to put the thong on, and while the material is very stretchy, it simply can't even begin to cover everything, and your " + ballsDescriptLight(player) + " hang on the sides, exposed.  Maybe if you shrunk your male parts down a little...");
                    }
                    outputText("\n\n");
                }
            }
    */
}
