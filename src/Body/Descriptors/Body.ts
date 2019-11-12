// Body Type
export function bodyType(char: Character): string {
    let desc: string = "";
    // OLD STUFF
    // SUPAH THIN
    if (char.thickness < 10) {
        // SUPAH BUFF
        if (char.tone > 90)
            desc += "a lithe body covered in highly visible muscles";
        else if (char.tone > 75)
            desc += "an incredibly thin, well-muscled frame";
        else if (char.tone > 50)
            desc += "a very thin body that has a good bit of muscle definition";
        else if (char.tone > 25)
            desc += "a lithe body and only a little bit of muscle definition";
        else
            desc += "a waif-thin body, and soft, forgiving flesh";
    }
    // Pretty thin
    else if (char.thickness < 25) {
        if (char.tone > 90)
            desc += "a thin body and incredible muscle definition";
        else if (char.tone > 75)
            desc += "a narrow frame that shows off your muscles";
        else if (char.tone > 50)
            desc += "a somewhat lithe body and a fair amount of definition";
        else if (char.tone > 25)
            desc += "a narrow, soft body that still manages to show off a few muscles";
        else
            desc += "a thin, soft body";
    }
    // Somewhat thin
    else if (char.thickness < 40) {
        if (char.tone > 90)
            desc += "a fit, somewhat thin body and rippling muscles all over";
        else if (char.tone > 75)
            desc += "a thinner-than-average frame and great muscle definition";
        else if (char.tone > 50)
            desc += "a somewhat narrow body and a decent amount of visible muscle";
        else if (char.tone > 25)
            desc += "a moderately thin body, soft curves, and only a little bit of muscle";
        else
            desc += "a fairly thin form and soft, cuddle-able flesh";
    }
    // average
    else if (char.thickness < 60) {
        if (char.tone > 90)
            desc += "average thickness and a bevy of perfectly defined muscles";
        else if (char.tone > 75)
            desc += "an average-sized frame and great musculature";
        else if (char.tone > 50)
            desc += "a normal waistline and decently visible muscles";
        else if (char.tone > 25)
            desc += "an average body and soft, unremarkable flesh";
        else
            desc += "an average frame and soft, untoned flesh with a tendency for jiggle";
    }
    else if (char.thickness < 75) {
        if (char.tone > 90)
            desc += "a somewhat thick body that's covered in slabs of muscle";
        else if (char.tone > 75)
            desc += "a body that's a little bit wide and has some highly-visible muscles";
        else if (char.tone > 50)
            desc += "a solid build that displays a decent amount of muscle";
        else if (char.tone > 25)
            desc += "a slightly wide frame that displays your curves and has hints of muscle underneath";
        else
            desc += "a soft, plush body with plenty of jiggle";
    }
    else if (char.thickness < 90) {
        if (char.tone > 90)
            desc += "a thickset frame that gives you the appearance of a wall of muscle";
        else if (char.tone > 75)
            desc += "a burly form and plenty of muscle definition";
        else if (char.tone > 50)
            desc += "a solid, thick frame and a decent amount of muscles";
        else if (char.tone > 25)
            desc += "a wide-set body, some soft, forgiving flesh, and a hint of muscle underneath it";
        else {
            desc += "a wide, cushiony body";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 3 || char.hipRating > 7 || char.buttRating > 7)
                desc += " and plenty of jiggle on your curves";
        }
    }
    // Chunky monkey
    else {
        if (char.tone > 90)
            desc += "an extremely thickset frame and so much muscle others would find you harder to move than a huge boulder";
        else if (char.tone > 75)
            desc += "a very wide body and enough muscle to make you look like a tank";
        else if (char.tone > 50)
            desc += "an extremely substantial frame packing a decent amount of muscle";
        else if (char.tone > 25) {
            desc += "a very wide body";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 4 || char.hipRating > 10 || char.buttRating > 10)
                desc += ", lots of curvy jiggles,";
            desc += " and hints of muscle underneath";
        }
        else {
            desc += "a thick";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 4 || char.hipRating > 10 || char.buttRating > 10)
                desc += ", voluptuous";
            desc += " body and plush, ";
            if (char.gender >= 2 || char.breastRows.biggestTitSize() > 4 || char.hipRating > 10 || char.buttRating > 10)
                desc += " jiggly curves";
            else
                desc += " soft flesh";
        }
    }
    return desc;
}
