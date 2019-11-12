// The comment structure in the following section is very specific, as the comment contents
// are actually parsed into regexes that are used by my refactoring tool to refactor
// the relevant descriptions.

// Description constants

export enum Gender {
    NONE = 0,
    MALE = 1,
    FEMALE = 2,
    HERM = 3
}

export enum SkinType {
    PLAIN = 0,
    FUR = 1,
    SCALES = 2,
    GOO = 3,
    UNDEFINED = 4
}

export enum HairType {
    NORMAL = 0,
    FEATHER = 1,
    GHOST = 2,
    GOO = 3,
    ANEMONE = 4
}

export enum FaceType {
    HUMAN = 0,
    HORSE = 1,
    DOG = 2,
    COW_MINOTAUR = 3,
    SHARK_TEETH = 4,
    SNAKE_FANGS = 5,
    CAT = 6,
    LIZARD = 7,
    BUNNY = 8,
    KANGAROO = 9,
    SPIDER_FANGS = 10,
    FOX = 11,
    DRAGON = 12,
    RACCOON_MASK = 13,
    RACCOON = 14,
    BUCKTEETH = 15,
    MOUSE = 16,
    FERRET_MASK = 17,
    FERRET = 18,
}

export enum TongueType {
    HUMAN = 0,
    SNAKE = 1,
    DEMONIC = 2,
    DRACONIC = 3,
}

export enum EyeType {
    HUMAN = 0,
    FOUR_SPIDER_EYES = 1,
    BLACK_EYES_SAND_TRAP = 2,
}

export enum EarType {
    HUMAN = 0,
    HORSE = 1,
    DOG = 2,
    COW = 3,
    ELFIN = 4,
    CAT = 5,
    LIZARD = 6,
    BUNNY = 7,
    KANGAROO = 8,
    FOX = 9,
    DRAGON = 10,
    RACCOON = 11,
    MOUSE = 12,
    FERRET = 13,
}

export enum HornType {
    NONE = 0,
    DEMON = 1,
    COW_MINOTAUR = 2,
    DRACONIC_X2 = 3,
    DRACONIC_X4_12_INCH_LONG = 4,
    ANTLERS = 5,
}

export enum AntennaeType {
    NONE = 0,
    BEE = 2,
}

export enum ArmType {
    HUMAN = 0,
    HARPY = 1,
    SPIDER = 2,
}

export enum TailType {
    NONE = 0,
    HORSE = 1,
    DOG = 2,
    DEMONIC = 3,
    COW = 4,
    SPIDER_ADBOMEN = 5,
    BEE_ABDOMEN = 6,
    SHARK = 7,
    CAT = 8,
    LIZARD = 9,
    RABBIT = 10,
    HARPY = 11,
    KANGAROO = 12,
    FOX = 13,
    DRACONIC = 14,
    RACCOON = 15,
    MOUSE = 16,
    FERRET = 17,
}

export enum BreastCup {
    FLAT = 0,
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    DD = 5,
    DD_BIG = 6,
    E = 7,
    E_BIG = 8,
    EE = 9,
    EE_BIG = 10,
    F = 11,
    F_BIG = 12,
    FF = 13,
    FF_BIG = 14,
    G = 15,
    G_BIG = 16,
    GG = 17,
    GG_BIG = 18,
    H = 19,
    H_BIG = 20,
    HH = 21,
    HH_BIG = 22,
    HHH = 23,
    I = 24,
    I_BIG = 25,
    II = 26,
    II_BIG = 27,
    J = 28,
    J_BIG = 29,
    JJ = 30,
    JJ_BIG = 31,
    K = 32,
    K_BIG = 33,
    KK = 34,
    KK_BIG = 35,
    L = 36,
    L_BIG = 37,
    LL = 38,
    LL_BIG = 39,
    M = 40,
    M_BIG = 41,
    MM = 42,
    MM_BIG = 43,
    MMM = 44,
    MMM_LARGE = 45,
    N = 46,
    N_LARGE = 47,
    NN = 48,
    NN_LARGE = 49,
    O = 50,
    O_LARGE = 51,
    OO = 52,
    OO_LARGE = 53,
    P = 54,
    P_LARGE = 55,
    PP = 56,
    PP_LARGE = 57,
    Q = 58,
    Q_LARGE = 59,
    QQ = 60,
    QQ_LARGE = 61,
    R = 62,
    R_LARGE = 63,
    RR = 64,
    RR_LARGE = 65,
    S = 66,
    S_LARGE = 67,
    SS = 68,
    SS_LARGE = 69,
    T = 70,
    T_LARGE = 71,
    TT = 72,
    TT_LARGE = 73,
    U = 74,
    U_LARGE = 75,
    UU = 76,
    UU_LARGE = 77,
    V = 78,
    V_LARGE = 79,
    VV = 80,
    VV_LARGE = 81,
    W = 82,
    W_LARGE = 83,
    WW = 84,
    WW_LARGE = 85,
    X = 86,
    X_LARGE = 87,
    XX = 88,
    XX_LARGE = 89,
    Y = 90,
    Y_LARGE = 91,
    YY = 92,
    YY_LARGE = 93,
    Z = 94,
    Z_LARGE = 95,
    ZZ = 96,
    ZZ_LARGE = 97,
    ZZZ = 98,
    ZZZ_LARGE = 99,
}

export enum WingType {
    NONE = 0,
    BEE_LIKE_SMALL = 1,
    BEE_LIKE_LARGE = 2,
    HARPY = 4,
    IMP = 5,
    BAT_LIKE_TINY = 6,
    BAT_LIKE_LARGE = 7,
    SHARK_FIN = 8,
    FEATHERED_LARGE = 9,
    DRACONIC_SMALL = 10,
    DRACONIC_LARGE = 11,
    GIANT_DRAGONFLY = 12,
}

export enum LowerBodyType {
    HUMAN = 0,
    HOOFED = 1,
    DOG = 2,
    NAGA = 3,
    CENTAUR = 4,
    DEMONIC_HIGH_HEELS = 5,
    DEMONIC_CLAWS = 6,
    BEE = 7,
    GOO = 8,
    CAT = 9,
    LIZARD = 10,
    PONY = 11,
    BUNNY = 12,
    HARPY = 13,
    KANGAROO = 14,
    CHITINOUS_SPIDER_LEGS = 15,
    DRIDER_LOWER_BODY = 16,
    FOX = 17,
    DRAGON = 18,
    RACCOON = 19,
    FERRET = 20,
}

export enum PiercingType {
    NONE = 0,
    STUD = 1,
    RING = 2,
    LADDER = 3,
    HOOP = 4,
    CHAIN = 5,
}

export enum VaginaType {
    HUMAN = 0,
    BLACK_SAND_TRAP = 5,
}

export enum VaginaWetness {
    DRY = 0,
    NORMAL = 1,
    WET = 2,
    SLICK = 3,
    DROOLING = 4,
    SLAVERING = 5,
}

export enum VaginaLooseness {
    TIGHT = 0,
    NORMAL = 1,
    LOOSE = 2,
    GAPING = 3,
    GAPING_WIDE = 4,
    LEVEL_CLOWN_CAR = 5,
}

export enum AnalWetness {
    DRY = 0,
    NORMAL = 1,
    MOIST = 2,
    SLIMY = 3,
    DROOLING = 4,
    SLIME_DROOLING = 5,
}

export enum AnalLooseness {
    VIRGIN = 0,
    TIGHT = 1,
    NORMAL = 2,
    LOOSE = 3,
    STRETCHED = 4,
    GAPING = 5,
}

export enum HipRating {
    BOYISH = 0,
    SLENDER = 2,
    AVERAGE = 4,
    AMPLE = 6,
    CURVY = 10,
    FERTILE = 15,
    INHUMANLY_WIDE = 20,
}

export enum ButtRating {
    BUTTLESS = 0,
    TIGHT = 2,
    AVERAGE = 4,
    NOTICEABLE = 6,
    LARGE = 8,
    JIGGLY = 10,
    EXPANSIVE = 13,
    HUGE = 16,
    INCONCEIVABLY_BIG = 20,
}

export class CockTypesEnum extends Enum {
    // {initEnum(CockTypesEnum);}

    /* Cock types
     * 0 - human
     * 1 - horse
     * 2 - dog
     * 3 - demon
     * 4 - tentacle?
     * 5 - CAT
     * 6 - Lizard/Naga?
     * 7 - ANEMONE!
     * 8 - ugliest wang ever (kangaroo)
     * 9 - dragon
     * 10 - displacer
     * 11 - Fox

     Group Types used for general description code (eventually)
     * human  	- obvious
     * mammal 	- obvious again
     * super 	- supernatural types
     * tentacle - only one tentacle!
     * reptile	- make a guess
     * seaworld - Anything in the water
     * other	- doesn't fit anywhere else
     */
    public static HUMAN: CockTypesEnum = new CockTypesEnum("human");
    public static HORSE: CockTypesEnum = new CockTypesEnum("mammal");
    public static DOG: CockTypesEnum = new CockTypesEnum("mammal");
    public static DEMON: CockTypesEnum = new CockTypesEnum("super");
    public static TENTACLE: CockTypesEnum = new CockTypesEnum("tentacle");
    public static CAT: CockTypesEnum = new CockTypesEnum("mammal");
    public static LIZARD: CockTypesEnum = new CockTypesEnum("reptile");
    public static ANEMONE: CockTypesEnum = new CockTypesEnum("seaworld");
    public static KANGAROO: CockTypesEnum = new CockTypesEnum("mammal");
    public static DRAGON: CockTypesEnum = new CockTypesEnum("reptile");
    public static DISPLACER: CockTypesEnum = new CockTypesEnum("other");
    public static FOX: CockTypesEnum = new CockTypesEnum("mammal");
    public static BEE: CockTypesEnum = new CockTypesEnum("insect");
    public static UNDEFINED: CockTypesEnum = new CockTypesEnum("");

    // function CockTypesEnum(i_group:string = "") { _group = i_group; }
    private _group: string;

    public get Group(): string {
        return _group;
    }

    public static ParseConstant(i_constantName: string, i_caseSensitive: boolean = false): CockTypesEnum {
        return CockTypesEnum(Enum.ParseConstant(CockTypesEnum, i_constantName, i_caseSensitive));
    }

    public static ParseConstantByIndex(i_constantIndex: number = 0): CockTypesEnum {
        return CockTypesEnum(Enum.ParseConstantByIndex(CockTypesEnum, i_constantIndex));
    }

}
