export function legs(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (creature.lowerBody == 0)
        return "legs";
    // 1 - hooves
    if (creature.lowerBody == 1)
        return "legs";
    // 2 - paws
    if (creature.lowerBody == 2)
        return "legs";
    // 3 - snakelike body
    if (creature.lowerBody == 3)
        return "snake-like coils";
    // 4 - centaur!
    if (creature.lowerBody == 4)
        return "four legs";
    // 8 - goo shit
    if (creature.lowerBody == 8)
        return "mounds of goo";
    // PONY
    if (creature.lowerBody == 11)
        return "cute pony-legs";
    // Bunnah!
    if (creature.lowerBody == 12) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "fuzzy, bunny legs";
        else if (select == 1)
            return "fur-covered legs";
        else if (select == 2)
            return "furry legs";
        else
            return "legs";
    }
    if (creature.lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "bird-like legs";
        else if (select == 1)
            return "feathered legs";
        else
            return "legs";
    }
    if (creature.lowerBody == 17) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "fox-like legs";
        else if (select == 1)
            return "legs";
        else if (select == 2)
            return "legs";
        else
            return "vulpine legs";
    }
    if (creature.lowerBody == 19) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "raccoon-like legs";
        else
            return "legs";
    }

    return "legs";
}

export function leg(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (creature.lowerBody == 0)
        return "leg";
    // 1 - hooves
    if (creature.lowerBody == 1)
        return "leg";
    // 2 - paws
    if (creature.lowerBody == 2)
        return "leg";
    // 3 - snakelike body
    if (creature.lowerBody == 3)
        return "snake-tail";
    // 4 - centaur!
    if (creature.lowerBody == 4)
        return "equine leg";
    // 8 - goo shit
    if (creature.lowerBody == 8)
        return "mound of goo";
    // PONY
    if (creature.lowerBody == 11)
        return "cartoonish pony-leg";
    // BUNNAH
    if (creature.lowerBody == 12) {
        select = Math.random() * (5);
        if (select == 0)
            return "fuzzy, bunny leg";
        else if (select == 1)
            return "fur-covered leg";
        else if (select == 2)
            return "furry leg";
        else
            return "leg";
    }
    if (creature.lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "bird-like leg";
        else if (select == 1)
            return "feathered leg";
        else
            return "leg";
    }
    if (creature.lowerBody == 17) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "fox-like leg";
        else if (select == 1)
            return "leg";
        else if (select == 2)
            return "leg";
        else
            return "vulpine leg";
    }
    if (creature.lowerBody == 19) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "raccoon-like leg";
        else
            return "leg";
    }
    return "leg";
}
