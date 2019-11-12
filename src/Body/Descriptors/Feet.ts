export function feet(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (lowerBody == 0)
        return "feet";
    // 1 - hooves
    if (lowerBody == 1)
        return "hooves";
    // 2 - paws
    if (lowerBody == 2)
        return "paws";
    // 3 - snakelike body
    if (lowerBody == 3)
        return "coils";
    // 4 - centaur!
    if (lowerBody == 4)
        return "hooves";
    // 5 - demonic heels
    if (lowerBody == 5)
        return "demonic high-heels";
    // 6 - demonic claws
    if (lowerBody == 6)
        return "demonic foot-claws";
    // 8 - goo shit
    if (lowerBody == 8)
        return "slimey cillia";
    if (lowerBody == 11)
        return "flat pony-feet";
    // BUNNAH
    if (lowerBody == 12) {
        select = rand(5);
        if (select == 0)
            return "large bunny feet";
        else if (select == 1)
            return "rabbit feet";
        else if (select == 2)
            return "large feet";
        else
            return "feet";
    }
    if (lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "taloned feet";
        else
            return "feet";
    }
    if (lowerBody == 14)
        return "foot-paws";
    if (lowerBody == 17) {
        select = rand(4);
        if (select == 0)
            return "paws";
        else if (select == 1)
            return "soft, padded paws";
        else if (select == 2)
            return "fox-like feet";
        else
            return "paws";
    }
    if (lowerBody == 19) {
        select = Math.floor(Math.random() * (3));
        if (select == 0)
            return "raccoon-like feet";
        else if (select == 1)
            return "long-toed paws";
        else if (select == 2)
            return "feet";
        else
            return "paws";
    }
    return "feet";
}

export function foot(creature: Character): string {
    let select: number = 0;
    // lowerBody:
    // 0 - normal
    if (lowerBody == 0)
        return "foot";
    // 1 - hooves
    if (lowerBody == 1)
        return "hoof";
    // 2 - paws
    if (lowerBody == 2)
        return "paw";
    // 3 - snakelike body
    if (lowerBody == 3)
        return "coiled tail";
    // 4 - centaur!
    if (lowerBody == 4)
        return "hoof";
    // 8 - goo shit
    if (lowerBody == 8)
        return "slimey undercarriage";
    // PONY
    if (lowerBody == 11)
        return "flat pony-foot";
    // BUNNAH
    if (lowerBody == 12) {
        select = Math.random() * (5);
        if (select == 0)
            return "large bunny foot";
        else if (select == 1)
            return "rabbit foot";
        else if (select == 2)
            return "large foot";
        else
            return "foot";
    }
    if (lowerBody == 13) {
        select = Math.floor(Math.random() * (5));
        if (select == 0)
            return "taloned foot";
        else
            return "foot";
    }
    if (lowerBody == 17) {
        select = Math.floor(Math.random() * (4));
        if (select == 0)
            return "paw";
        else if (select == 1)
            return "soft, padded paw";
        else if (select == 2)
            return "fox-like foot";
        else
            return "paw";
    }
    if (lowerBody == 14)
        return "foot-paw";
    if (lowerBody == 19) {
        select = Math.floor(Math.random() * (3));
        if (select == 0)
            return "raccoon-like foot";
        else if (select == 1)
            return "long-toed paw";
        else if (select == 2)
            return "foot";
        else
            return "paw";
    }
    return "foot";
}
