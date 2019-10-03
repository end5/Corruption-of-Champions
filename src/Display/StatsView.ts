
// Remove dynamic once you've added all the DOs as instance properties.
export class StatsView extends Sprite {
    // add things from main view here?
    // yes because we'll need to update all the TFs and progress bars.
    public upDownsContainer: Sprite;
    public levelUp: Sprite;

    protected model: GameModel;

    public constructor(mainView: MovieClip, model: any) {
        super();

        if (!mainView) {
            return;
        }

        this.model = model;

        const statsThingsNames: any[] = [
            "strBar", "strText", "strNum",      // "strUp",      "strDown",
            "touBar", "touText", "touNum",      // "touUp",      "touDown",
            "speBar", "speText", "speNum",      // "speUp",      "speDown",
            "inteBar", "inteText", "inteNum",     // "inteUp",     "inteDown",
            "libBar", "libText", "libNum",      // "libUp",      "libDown",
            "sensBar", "senText", "senNum",      // "sensUp",     "sensDown",
            "corBar", "corText", "corNum",      // "corUp",      "corDown",
            "lustBar", "lustText", "lustNum",     // "lustUp",     "lustDown",
            "fatigueBar", "fatigueText", "fatigueNum",  // "fatigueUp",  "fatigueDown",
            "HPBar", "HPText", "HPNum",       // "hpUp",       "hpDown",
            "levelText", "levelNum",    // "levelUp",
            "xpText", "xpNum",       // "xpUp",       "xpDown",
            "coreStatsText",
            "advancementText",
            "combatStatsText",
            "gemsText", "gemsNum",
            "timeText",
            "timeBG",
            "sideBarBG"
        ];

        const statsUpDownsNames: any[] = [
            "strUp", "strDown",
            "touUp", "touDown",
            "speUp", "speDown",
            "inteUp", "inteDown",
            "libUp", "libDown",
            "sensUp", "sensDown",
            "corUp", "corDown",
            "fatigueUp", "fatigueDown",
            "hpUp", "hpDown",
            "lustUp", "lustDown",
            // "levelUp",
            "xpUp", "xpDown"
        ];

        for (const statsDOName * in statsThingsNames ) {
            // adding at 0 because BG is at the end.
            this.addChildAt(mainView.getChildByName(statsDOName), 0);
        }

        this.upDownsContainer = new Sprite();
        this.addChild(this.upDownsContainer);

        for (const statsUpDownDOName * in statsUpDownsNames ) {
            this.upDownsContainer.addChild(mainView.getChildByName(statsUpDownDOName));
        }

        this.levelUp = mainView.getChildByName('levelUp') as Sprite;
        this.addChild(this.levelUp);
    }

    protected setStatText(name: string, value: any) {
        if (/Num$/.test(name)) {
            const fVal: any = Math.floor(value);
            let dispText: string;

            if (fVal >= 10000) {
                dispText = "++++";
            }
            else {
                dispText = String(fVal);
            }

            (this.getChildByName(name) as TextField).htmlText = dispText;
        }
        else
            (this.getChildByName(name) as TextField).htmlText = value;
    }

    protected setStatBar(name: string, progress: number) {
        this.getChildByName(name).width = Math.round(progress * 115);
    }

    // <- statsScreenRefresh
    public refresh(): void {
        // this.show();
        // this.visible = true;

        setStatText("coreStatsText",
            "<b><u>Name : {NAME}</u>\nCore Stats</b>"
                .replace("{NAME}", game.player.short));

        setStatText("strNum", game.player.str);
        setStatText("touNum", game.player.tou);
        setStatText("speNum", game.player.spe);
        setStatText("inteNum", game.player.inte);
        setStatText("libNum", game.player.lib);
        setStatText("senNum", game.player.sens);
        setStatText("corNum", game.player.cor);
        setStatText("fatigueNum", game.player.fatigue);
        setStatText("HPNum", game.player.HP);
        setStatText("lustNum", game.player.lust);
        setStatText("levelNum", game.player.level);
        setStatText("xpNum", game.player.XP);

        setStatText("timeText",
            "<b><u>Day #: {DAYS}</u></b>\n<b>Time : {HOURS}:00</b>"
                .replace("{DAYS}", game.time.days)
                .replace("{HOURS}", game.time.hours));

        setStatBar("strBar", game.player.str / 100);
        setStatBar("touBar", game.player.tou / 100);
        setStatBar("speBar", game.player.spe / 100);
        setStatBar("inteBar", game.player.inte / 100);
        setStatBar("libBar", game.player.lib / 100);
        setStatBar("sensBar", game.player.sens / 100);
        setStatBar("corBar", game.player.cor / 100);
        setStatBar("fatigueBar", game.player.fatigue / 100);
        setStatBar("HPBar", game.player.HP / model.maxHP());
        setStatBar("lustBar", game.player.lust / 100);
        setStatText("gemsNum", game.player.gems);
    }

    // <- showStats
    public show() {
        // make all the stats DOs visible.
        this.refresh();
        this.visible = true;
    }

    // <- hideStats
    public hide() {
        // body...
        this.visible = false;
    }

    // <- hideUpDown
    public hideUpDown() {
        let ci,
            cc = this.upDownsContainer.numChildren;

        this.upDownsContainer.visible = false;

        // children also need to be hidden because they're selectively shown on change.
        for (ci = 0; ci < cc; ++ci) {
            this.upDownsContainer.getChildAt(ci).visible = false;
        }

        this.hideLevelUp();
    }

    public showUpDown() {
        function _oldStatNameFor(statName: string) {
            return 'old' + statName.charAt(0).toUpperCase() + statName.substr(1);
        }

        let statName: string,
            oldStatName: string,
            allStats: any[];

        this.upDownsContainer.visible = true;

        allStats = ["str", "tou", "spe", "inte", "lib", "sens", "cor", "lust"];

        for (statName of allStats) {
            oldStatName = _oldStatNameFor(statName);

            if (game.player[statName] > this.model.oldStats[oldStatName]) {
                this.showStatUp(statName);
            }
            if (game.player[statName] < this.model.oldStats[oldStatName]) {
                this.showStatDown(statName);
            }
        }
    }

    public showLevelUp(): void {
        this.levelUp.visible = true;
    }

    public hideLevelUp(): void {
        this.levelUp.visible = false;
    }

    public showStatUp(statName: string): void {
        let statUp: DisplayObject,
            statDown: DisplayObject;

        statUp = this.upDownsContainer.getChildByName(statName + 'Up');
        statDown = this.upDownsContainer.getChildByName(statName + 'Down');

        statUp.visible = true;
        statDown.visible = false;
    }

    public showStatDown(statName: string): void {
        let statUp: DisplayObject,
            statDown: DisplayObject;

        statUp = this.upDownsContainer.getChildByName(statName + 'Up');
        statDown = this.upDownsContainer.getChildByName(statName + 'Down');

        statUp.visible = false;
        statDown.visible = true;
    }
}
