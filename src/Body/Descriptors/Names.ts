
function createMapFromPairs<T extends number | string, U>(src: [T, U][]): Record<T, U> {
    const result = {} as Record<T, U>;
    for (let i = 0; i < src.length; i++) result[src[i][0]] = src[i][1];
    return result;
}

export let DEFAULT_GENDER_NAMES = createMapFromPairs(
    [
        [Gender.NONE, "genderless"],
        [Gender.MALE, "male"],
        [Gender.FEMALE, "female"],
        [Gender.HERM, "hermaphrodite"]
    ]
);
export let DEFAULT_SKIN_NAMES = createMapFromPairs(
    [
        [SkinType.PLAIN, "skin"],
        [SkinType.FUR, "fur"],
        [SkinType.SCALES, "scales"],
        [SkinType.GOO, "goo"],
        [SkinType.UNDEFINED, "undefined flesh"]
    ]
);
export let DEFAULT_SKIN_DESCS = createMapFromPairs(
    [
        [SkinType.PLAIN, "skin"],
        [SkinType.FUR, "fur"],
        [SkinType.SCALES, "scales"],
        [SkinType.GOO, "skin"],
        [SkinType.UNDEFINED, "skin"]
    ]
);
export let DEFAULT_HAIR_NAMES = createMapFromPairs(
    [
        [HairType.NORMAL, "normal"],
        [HairType.FEATHER, "feather"],
        [HairType.GHOST, "transparent"],
        [HairType.GOO, "goopy"],
        [HairType.ANEMONE, "tentacle"]
    ]
);
export let DEFAULT_FACE_NAMES = createMapFromPairs(
    [
        [FaceType.HUMAN, "human"],
        [FaceType.HORSE, "horse"],
        [FaceType.DOG, "dog"],
        [FaceType.COW_MINOTAUR, "cow"],
        [FaceType.SHARK_TEETH, "shark"],
        [FaceType.SNAKE_FANGS, "snake"],
        [FaceType.CAT, "cat"],
        [FaceType.LIZARD, "lizard"],
        [FaceType.BUNNY, "bunny"],
        [FaceType.KANGAROO, "kangaroo"],
        [FaceType.SPIDER_FANGS, "spider"],
        [FaceType.FOX, "fox"],
        [FaceType.DRAGON, "dragon"],
        [FaceType.RACCOON_MASK, "raccoon mask"],
        [FaceType.RACCOON, "racoon"],
        [FaceType.BUCKTEETH, "buckteeth"],
        [FaceType.MOUSE, "mouse"]
    ]
);
export let DEFAULT_TONGUE_NAMES = createMapFromPairs(
    [
        [TongueType.HUMAN, "human"],
        [TongueType.SNAKE, "snake"],
        [TongueType.DEMONIC, "demonic"],
        [TongueType.DRACONIC, "draconic"]
    ]
);
export let DEFAULT_EYES_NAMES = createMapFromPairs(
    [
        [EyeType.HUMAN, "human"],
        [EyeType.FOUR_SPIDER_EYES, "4 spider"],
        [EyeType.BLACK_EYES_SAND_TRAP, "sandtrap black"]
    ]
);
export let DEFAULT_EARS_NAMES = createMapFromPairs(
    [
        [EarType.HUMAN, "human"],
        [EarType.HORSE, "horse"],
        [EarType.DOG, "dog"],
        [EarType.COW, "cow"],
        [EarType.ELFIN, "elfin"],
        [EarType.CAT, "cat"],
        [EarType.LIZARD, "lizard"],
        [EarType.BUNNY, "bunny"],
        [EarType.KANGAROO, "kangaroo"],
        [EarType.FOX, "fox"],
        [EarType.DRAGON, "dragon"],
        [EarType.RACCOON, "raccoon"],
        [EarType.MOUSE, "mouse"]
    ]
);
export let DEFAULT_HORNS_NAMES = createMapFromPairs(
    [
        [HornType.NONE, "non-existant"],
        [HornType.DEMON, "demon"],
        [HornType.COW_MINOTAUR, "cow"],
        [HornType.DRACONIC_X2, "2 draconic"],
        [HornType.DRACONIC_X4_12_INCH_LONG, "four 12\" long draconic"],
        [HornType.ANTLERS, "deer"]
    ]
);
export let DEFAULT_ANTENNAE_NAMES = createMapFromPairs(
    [
        [AntennaeType.NONE, "non-existant"],
        [AntennaeType.BEE, "bee"]
    ]
);
export let DEFAULT_ARM_NAMES = createMapFromPairs(
    [
        [ArmType.HUMAN, "human"],
        [ArmType.HARPY, "harpy"],
        [ArmType.SPIDER, "spider"]
    ]
);
export let DEFAULT_TAIL_NAMES = createMapFromPairs(
    [
        [TailType.NONE, "non-existant"],
        [TailType.HORSE, "horse"],
        [TailType.DOG, "dog"],
        [TailType.DEMONIC, "demonic"],
        [TailType.COW, "cow"],
        [TailType.SPIDER_ADBOMEN, "spider abdomen"],
        [TailType.BEE_ABDOMEN, "bee abdomen"],
        [TailType.SHARK, "shark"],
        [TailType.CAT, "cat"],
        [TailType.LIZARD, "lizard"],
        [TailType.RABBIT, "rabbit"],
        [TailType.HARPY, "harpy"],
        [TailType.KANGAROO, "kangaroo"],
        [TailType.FOX, "fox"],
        [TailType.DRACONIC, "draconic"],
        [TailType.RACCOON, "raccoon"],
        [TailType.MOUSE, "mouse"]
    ]
);
export let DEFAULT_WING_NAMES = createMapFromPairs(
    [
        [WingType.NONE, "non-existant"],
        [WingType.BEE_LIKE_SMALL, "small bee-like"],
        [WingType.BEE_LIKE_LARGE, "large bee-like"],
        [WingType.HARPY, "harpy"],
        [WingType.IMP, "imp"],
        [WingType.BAT_LIKE_TINY, "tiny bat-like"],
        [WingType.BAT_LIKE_LARGE, "large bat-like"],
        [WingType.SHARK_FIN, "shark fin"],
        [WingType.FEATHERED_LARGE, "large feathered"],
        [WingType.DRACONIC_SMALL, "small draconic"],
        [WingType.DRACONIC_LARGE, "large draconic"],
        [WingType.GIANT_DRAGONFLY, "giant dragonfly"]
    ]
);
export let DEFAULT_WING_DESCS = createMapFromPairs(
    [
        [WingType.NONE, "non-existant"],
        [WingType.BEE_LIKE_SMALL, "small bee-like"],
        [WingType.BEE_LIKE_LARGE, "large bee-like"],
        [WingType.HARPY, "large feathery"],
        [WingType.IMP, "small"],
        [WingType.BAT_LIKE_TINY, "tiny, bat-like"],
        [WingType.BAT_LIKE_LARGE, "large, bat-like"],
        [WingType.SHARK_FIN, ""],
        [WingType.FEATHERED_LARGE, "large, feathered"],
        [WingType.DRACONIC_SMALL, "small, draconic"],
        [WingType.DRACONIC_LARGE, "large, draconic"],
        [WingType.GIANT_DRAGONFLY, "giant dragonfly"]
    ]
);
export let DEFAULT_LOWER_BODY_NAMES = createMapFromPairs(
    [
        [LowerBodyType.HUMAN, "human"],
        [LowerBodyType.HOOFED, "hoofed"],
        [LowerBodyType.DOG, "dog"],
        [LowerBodyType.NAGA, "naga"],
        [LowerBodyType.CENTAUR, "centaur"],
        [LowerBodyType.DEMONIC_HIGH_HEELS, "demonic high-heels"],
        [LowerBodyType.DEMONIC_CLAWS, "demonic claws"],
        [LowerBodyType.BEE, "bee"],
        [LowerBodyType.GOO, "goo"],
        [LowerBodyType.CAT, "cat"],
        [LowerBodyType.LIZARD, "lizard"],
        [LowerBodyType.PONY, "pony"],
        [LowerBodyType.BUNNY, "bunny"],
        [LowerBodyType.HARPY, "harpy"],
        [LowerBodyType.KANGAROO, "kangaroo"],
        [LowerBodyType.CHITINOUS_SPIDER_LEGS, "chitinous spider legs"],
        [LowerBodyType.DRIDER_LOWER_BODY, "drider"],
        [LowerBodyType.FOX, "fox"],
        [LowerBodyType.DRAGON, "dragon"],
        [LowerBodyType.RACCOON, "raccoon"]
    ]
);
export let DEFAULT_PIERCING_NAMES = createMapFromPairs(
    [
        [PiercingType.NONE, "none"],
        [PiercingType.STUD, "stud"],
        [PiercingType.RING, "ring"],
        [PiercingType.LADDER, "ladder"],
        [PiercingType.HOOP, "hoop"],
        [PiercingType.CHAIN, "chain"]
    ]
);
export let DEFAULT_VAGINA_TYPE_NAMES = createMapFromPairs(
    [
        [VaginaType.HUMAN, "human"],
        [VaginaType.BLACK_SAND_TRAP, "black sandtrap"]
    ]
);
export let DEFAULT_VAGINA_WETNESS_SCALES: [VaginaWetness, string][] = [
    [VaginaWetness.DRY, "dry"],
    [VaginaWetness.NORMAL, "normal"],
    [VaginaWetness.WET, "wet"],
    [VaginaWetness.SLICK, "slick"],
    [VaginaWetness.DROOLING, "drooling"],
    [VaginaWetness.SLAVERING, "slavering"],
];
export let DEFAULT_VAGINA_LOOSENESS_SCALES: [VaginaLooseness, string][] = [
    [VaginaLooseness.TIGHT, "tight"],
    [VaginaLooseness.NORMAL, "normal"],
    [VaginaLooseness.LOOSE, "loose"],
    [VaginaLooseness.GAPING, "gaping"],
    [VaginaLooseness.GAPING_WIDE, "gaping wide"],
    [VaginaLooseness.LEVEL_CLOWN_CAR, "clown-car level"]
];
export let DEFAULT_ANAL_WETNESS_SCALES: [AnalWetness, string][] = [
    [AnalWetness.DRY, "dry"],
    [AnalWetness.NORMAL, "normal"],
    [AnalWetness.MOIST, "moist"],
    [AnalWetness.SLIMY, "slimym"],
    [AnalWetness.DROOLING, "drooling"],
    [AnalWetness.SLIME_DROOLING, "slime-drooling"],
];
export let DEFAULT_ANAL_LOOSENESS_SCALES: [AnalLooseness, string][] = [
    [AnalLooseness.VIRGIN, "virgin"],
    [AnalLooseness.TIGHT, "tight"],
    [AnalLooseness.NORMAL, "normal"],
    [AnalLooseness.LOOSE, "loose"],
    [AnalLooseness.STRETCHED, "stretched"],
    [AnalLooseness.GAPING, "gaping"]
];
export let DEFAULT_HIP_RATING_SCALES: [HipRating, string][] = [
    [HipRating.BOYISH, "boyish"],
    [HipRating.SLENDER, "slender"],
    [HipRating.AVERAGE, "average"],
    [HipRating.AMPLE, "ample"],
    [HipRating.CURVY, "curvy"],
    [HipRating.FERTILE, "fertile"],
    [HipRating.INHUMANLY_WIDE, "inhumanly wide"]
];
export let DEFAULT_BUTT_RATING_SCALES: [ButtRating, string][] = [
    [ButtRating.BUTTLESS, "buttless"],
    [ButtRating.TIGHT, "tight"],
    [ButtRating.AVERAGE, "average"],
    [ButtRating.NOTICEABLE, "noticeable"],
    [ButtRating.LARGE, "large"],
    [ButtRating.JIGGLY, "jiggly"],
    [ButtRating.EXPANSIVE, "expansive"],
    [ButtRating.HUGE, "huge"],
    [ButtRating.INCONCEIVABLY_BIG, "inconceivably big"]
];

export let BREAST_CUP_NAMES = [
    "flat", // 0
    // 				1			2			3			4			5				6			7		8			9
    "A-cup", "B-cup", "C-cup", "D-cup", "DD-cup", "big DD-cup", "E-cup", "big E-cup", "EE-cup", // 1-9
    "big EE-cup", "F-cup", "big F-cup", "FF-cup", "big FF-cup", "G-cup", "big G-cup", "GG-cup", "big GG-cup", "H-cup", // 10-19
    "big H-cup", "HH-cup", "big HH-cup", "HHH-cup", "I-cup", "big I-cup", "II-cup", "big II-cup", "J-cup", "big J-cup", // 20-29
    "JJ-cup", "big JJ-cup", "K-cup", "big K-cup", "KK-cup", "big KK-cup", "L-cup", "big L-cup", "LL-cup", "big LL-cup", // 30-39
    "M-cup", "big M-cup", "MM-cup", "big MM-cup", "MMM-cup", "large MMM-cup", "N-cup", "large N-cup", "NN-cup", "large NN-cup", // 40-49
    "O-cup", "large O-cup", "OO-cup", "large OO-cup", "P-cup", "large P-cup", "PP-cup", "large PP-cup", "Q-cup", "large Q-cup", // 50-59
    "QQ-cup", "large QQ-cup", "R-cup", "large R-cup", "RR-cup", "large RR-cup", "S-cup", "large S-cup", "SS-cup", "large SS-cup", // 60-69
    "T-cup", "large T-cup", "TT-cup", "large TT-cup", "U-cup", "large U-cup", "UU-cup", "large UU-cup", "V-cup", "large V-cup", // 70-79
    "VV-cup", "large VV-cup", "W-cup", "large W-cup", "WW-cup", "large WW-cup", "X-cup", "large X-cup", "XX-cup", "large XX-cup", // 80-89
    "Y-cup", "large Y-cup", "YY-cup", "large YY-cup", "Z-cup", "large Z-cup", "ZZ-cup", "large ZZ-cup", "ZZZ-cup", "large ZZZ-cup"// 90-99
];
