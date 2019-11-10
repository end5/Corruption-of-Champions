// 9)  Transformation Item - Snake Oil (S. Oil)
/*Effects:
  Boosts Speed stat
  Ass reduction
  Testicles return inside your body (could be reverted by the use of succubi delight)
  Can change penis into reptilian form  (since there's a lot of commentary here not knowing where to go, let me lay it out.)
 the change will select one cock (randomly if you have multiple)
 said cock will become two reptilian cocks
 these can then be affected separately, so if someone wants to go through the effort of removing one and leaving themselves with one reptile penis, they have the ability to do that
 This also means that someone who's already reached the maximum numbers of dicks cannot get a reptilian penis unless they remove one first
 "Your reptilian penis is X.X inches long and X.X inches thick.  The sheath extends halfway up the shaft, thick and veiny, while the smooth shaft extends out of the sheath coming to a pointed tip at the head. "
  Grow poisonous fangs (grants Poison Bite ability to player, incompatible with the sting ability, as it uses the same poison-meter)
  Causes your tongue to fork
  Legs fuse together and dissolve into snake tail  (grants Constrict ability to player, said tail can only be covered in scales, independently from the rest of the body)
  If snake tail exists:
    Make it longer, possibly larger (tail length is considered independently of your height, so it doesn't enable you to use the axe, for instance.
    Change tail's color according to location
      [Smooth] Beige and Tan (Desert), [Rough] Brown and Rust (Mountains), [Lush]  Forest Green and Yellow (Forest), [Cold] Blue and White (ice land?), [Fresh] Meadow Green [#57D53B - #7FFF00] and Dark Teal [#008080] (lake) , [Menacing] Black and Red (Demon realm, outside encounters), [Distinguished] Ivory (#FFFFF0) and Royal Purple/Amethyst (#702963) (Factory), [Mossy] Emerald and Chestnut (Swamp), [Arid] Orange and Olive pattern (Tel' Adre)

 9a) Item Description
 "A vial the size of your fist made of dark brown glass. It contains what appears to be an oily, yellowish liquid. The odor is abominable."
 */
export function snakeOil(player: Player): void {
    player.slimeFeed();
    outputText("", true);
    let changes: number = 0;
    let changeLimit: number = 1;
    if (rand(2) == 0)
        changeLimit++;
    if (rand(2) == 0)
        changeLimit++;
    if (player.perks.findByType(PerkLib.HistoryAlchemist) >= 0)
        changeLimit++;
    // b) Description while used
    outputText("Pinching your nose, you quickly uncork the vial and bring it to your mouth, determined to see what effects it might have on your body. Pouring in as much as you can take, you painfully swallow before going for another shot, emptying the bottle.", false);
    // (if outside combat)
    if (!game.inCombat)
        outputText("  Minutes pass as you start wishing you had water with you, to get rid of the aftertaste.", false);
    // + speed to 70!
    if (player.spe < 70 && rand(2) == 0) {
        dynStats("spe", (2 - (player.spe / 10 / 5)));
        outputText("\n\nYour muscles quiver, feeling ready to strike as fast as a snake!", false);
        if (player.spe < 40)
            outputText("  Of course, you're nowhere near as fast as that.", false);
        changes++;
    }
    // Removes wings
    if (player.wingType > WingType.NONE && rand(3) == 0 && changes < changeLimit) {
        if (player.wingType == WingType.SHARK_FIN)
            outputText("\n\nA wave of tightness spreads through your back, and it feels as if someone is stabbing a dagger into your spine.  After a moment the pain passes, though your fin is gone!", false);
        else
            outputText("\n\nA wave of tightness spreads through your back, and it feels as if someone is stabbing a dagger into each of your shoulder-blades.  After a moment the pain passes, though your wings are gone!", false);
        player.wingType = WingType.NONE;
        changes++;
    }
    // Removes antennae
    if (player.antennae > AntennaeType.NONE && rand(3) == 0 && changes < changeLimit) {
        outputText("\n\nThe muscles in your brow clench tightly, and you feel a tremendous pressure on your upper forehead.  When it passes, you touch yourself and discover your antennae have vanished!", false);
        player.antennae = AntennaeType.NONE;
        changes++;
    }
    // 9c) II The tongue (sensitivity bonus, stored as a perk?)
    if (changes == 0 && player.tongueType != TongueType.SNAKE && rand(3) == 0 && changes < changeLimit) {
        if (player.tongueType == TongueType.HUMAN)
            outputText("\n\nYour taste-buds start aching as they swell to an uncomfortably large size. Trying to understand what in the world could have provoked such a reaction, you bring your hands up to your mouth, your tongue feeling like it's trying to push its way past your lips. The soreness stops and you stick out your tongue to try and see what would have made it feel the way it did. As soon as you stick your tongue out you realize that it sticks out much further than it did before, and now appears to have split at the end, creating a forked tip. The scents in the air are much more noticeable to you with your snake-like tongue.", false);
        else
            outputText("\n\nYour inhuman tongue shortens, pulling tight in the very back of your throat.  After a moment the bunched-up tongue-flesh begins to flatten out, then extend forwards.  By the time the transformation has finished, your tongue has changed into a long, forked snake-tongue.", false);
        player.tongueType = TongueType.SNAKE;
        dynStats("sen", 5);
        changes++;
    }
    // 9c) III The fangs
    if (changes == 0 && player.tongueType == TongueType.SNAKE && player.faceType != FaceType.SNAKE_FANGS && rand(3) == 0 && changes < changeLimit) {
        outputText("\n\nWithout warning, you feel your canine teeth jump almost an inch in size, clashing on your gums, cutting yourself quite badly. As you attempt to find a new way to close your mouth without dislocating your jaw, you notice that they are dripping with a bitter, khaki liquid.  Watch out, and <b>try not to bite your tongue with your poisonous fangs!</b>", false);
        if (player.faceType != FaceType.HUMAN && player.faceType != FaceType.SHARK_TEETH && player.faceType != FaceType.BUNNY && player.faceType != FaceType.SPIDER_FANGS) {
            outputText("  As the change progresses, your " + face(player) + " reshapes.  The sensation is far more pleasant than teeth cutting into gums, and as the tingling transformation completes, <b>you've gained with a normal-looking, human visage.</b>");
        }
        player.faceType = FaceType.SNAKE_FANGS;
        changes++;
    }
    // 9c) I The tail ( http://tvtropes.org/pmwiki/pmwiki.php/Main/TransformationIsAFreeAction ) (Shouldn't we try to avert this? -Ace)
    // Should the enemy "kill" you during the transformation, it skips the scene and immediately goes to tthe rape scene. (Now that I'm thinking about it, we should add some sort of appendix where the player realizes how much he's/she's changed. -Ace)
    if (changes == 0 && player.faceType == FaceType.SNAKE_FANGS && player.lowerBody != LowerBodyType.NAGA && rand(4) == 0 && changes < changeLimit) {
        outputText("\n\nYou find it increasingly harder to keep standing as your legs start feeling weak.  You swiftly collapse, unable to maintain your own weight.", false);
        // (If used in combat, you lose a turn here. Half-corrupted Jojo and the Naga won't attack you during that period, but other monsters will)
        // FUCK NO
        outputText("\n\nTrying to get back up, you realize that the skin on the inner sides of your thighs is merging together like it was being sewn by an invisible needle.", false);
        outputText("  The process continues through the length of your " + legs(player) + ", eventually reaching your " + feet(player) + ".  Just when you think that the transformation is over, you find yourself pinned to the ground by an overwhelming sensation of pain. You hear the horrible sound of your bones snapping, fusing together and changing into something else while you contort in unthinkable agony.  Sometime later you feel the pain begin to ease and you lay on the ground, spent by the terrible experience. Once you feel you've recovered, you try to stand, but to your amazement you discover that you no longer have " + legs(player) + ": the bottom half of your body is like that of a snake's.", false);
        outputText("\n\nWondering what happened to your sex, you pass your hand down the front of your body until you find a large, horizontal slit around your pelvic area, which contains all of your sexual organs.", false);
        if (player.balls > 0 && player.ballSize > 10)
            outputText("  You're happy not to have to drag those testicles around with you anymore.", false);
        outputText("  But then, scales start to form on the surface of your skin, slowly becoming visible, recoloring all of your body from the waist down in a snake-like pattern. The feeling is... not that bad actually, kind of like callous, except on your whole lower body. The transformation complete, you get up, standing on your newly formed snake tail. You can't help feeling proud of this majestic new body of yours.", false);
        player.lowerBody = LowerBodyType.NAGA;
        changes++;
    }
    if (rand(4) == 0 && player.gills && changes < changeLimit) {
        outputText("\n\nYour chest itches, and as you reach up to scratch it, you realize your gills have withdrawn into your skin.", false);
        player.gills = false;
        changes++;
    }
    // 9e) Penis
    /*
     if(player.cocks.length > 0) {
     //(If multiple penis, insert "one of your")
     outputText("\n\nAs the liquid takes effect, ", false);
     //(if multicock)
     if(player.cocks.length > 1) outputText("one of ", false);
     outputText("your " + multiCockDescriptLight(game.player) + " starts to throb painfully and swell to its full size.  With a horrifying ripping sensation, your cock splits down the middle, the pain causing you to black out momentarily.", false);
     outputText("When you awaken, you quickly look down to see that where ", false);
     //(if multicock)
     if(player.cocks.length > 1) outputText("one of ", false);
     outputText("your " + multiCockDescriptLight(game.player) + " was, you now have two pointed reptilian cocks, still stiff and pulsing.", false);
     }*/
    // Default change - blah
    if (changes == 0)
        outputText("\n\nRemakarbly, the snake-oil has no effect.  Should you really be surprised at snake-oil NOT doing anything?", false);
}
