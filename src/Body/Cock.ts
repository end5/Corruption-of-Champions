
export class Cock {
    private _cockLength: number;
    private _cockThickness: number;
    private _cockType: CockTypesEnum;	// See CockTypesEnum.as for all cock types

    // Used to determine thickness of knot relative to normal thickness
    private _knotMultiplier: number;

    // Piercing info
    private _isPierced: boolean;
    private _pierced: number;
    // Not yet, sweet prince. PiercedType current has no uses. But it will, one day.
    // private var _pierceType:PiercingTypesEnum;
    private _pShortDesc: string;
    private _pLongDesc: string;

    // Sock
    private _sock: string;

    /**
     * @return string description of errors
     */
    public validate(): string {
        let error: string = "";
        error += validateNonNegativeNumberFields(this, "Cock.validate", ["cockLength", "cockThickness", "knotMultiplier", "pierced"]);
        if (!_isPierced) {
            if (_pShortDesc.length > 0) error += "Not pierced but _pShortDesc = " + _pShortDesc + ". ";
            if (_pLongDesc.length > 0) error += "Not pierced but pLong = " + _pLongDesc + ". ";
        } else {
            if (_pShortDesc.length == 0) error += "Pierced but no _pShortDesc. ";
            if (_pLongDesc.length == 0) error += "Pierced but no pLong. ";
        }
        return error;
    }

    // constructor. Default type is HUMAN
    public constructor(i_cockLength: number = 5.5, i_cockThickness: number = 1, i_cockType: CockTypesEnum = null) {
        if (i_cockType == null) i_cockType = CockTypesEnum.HUMAN;
        _cockLength = i_cockLength;
        _cockThickness = i_cockThickness;
        _cockType = i_cockType;
        _pierced = 0;
        _knotMultiplier = 1;
        _isPierced = false;
        // _pierceType = PiercingTypesEnum.NONE;
        _pShortDesc = "";
        _pLongDesc = "";
        _sock = "";
    }

    // MEMBER FUNCTIONS
    public cArea(): number {
        return cockThickness * cockLength;
    }

    public growCock(lengthDelta: number, bigCock: boolean): number {

        if (lengthDelta == 0) {
            trace("Whoops! growCock called with 0, aborting...");
            return lengthDelta;
        }

        let threshhold: number = 0;

        trace("growcock starting at:" + lengthDelta);

        if (lengthDelta > 0) { // growing
            trace("and growing...");
            threshhold = 24;
            // BigCock Perk increases incoming change by 50% and adds 12 to the length before diminishing returns set in
            if (bigCock) {
                trace("growCock found BigCock Perk");
                lengthDelta *= 1.5;
                threshhold += 12;
            }
            // Not a human cock? Multiple the length before dimishing returns set in by 3
            if (cockType != CockTypesEnum.HUMAN)
                threshhold *= 2;
            // Modify growth for cock socks
            if (sock == "scarlet") {
                trace("growCock found Scarlet sock");
                lengthDelta *= 1.5;
            }
            else if (sock == "cobalt") {
                trace("growCock found Cobalt sock");
                lengthDelta *= .5;
            }
            // Do diminishing returns
            if (cockLength > threshhold)
                lengthDelta /= 4;
            else if (cockLength > threshhold / 2)
                lengthDelta /= 2;
        }
        else {
            trace("and shrinking...");

            threshhold = 0;
            // BigCock Perk doubles the incoming change value and adds 12 to the length before diminishing returns set in
            if (bigCock) {
                trace("growCock found BigCock Perk");
                lengthDelta *= 0.5;
                threshhold += 12;
            }
            // Not a human cock? Add 12 to the length before dimishing returns set in
            if (cockType != CockTypesEnum.HUMAN)
                threshhold += 12;
            // Modify growth for cock socks
            if (sock == "scarlet") {
                trace("growCock found Scarlet sock");
                lengthDelta *= 0.5;
            }
            else if (sock == "cobalt") {
                trace("growCock found Cobalt sock");
                lengthDelta *= 1.5;
            }
            // Do diminishing returns
            if (cockLength > threshhold)
                lengthDelta /= 3;
            else if (cockLength > threshhold / 2)
                lengthDelta /= 2;
        }

        trace("then changing by: " + lengthDelta);

        cockLength += lengthDelta;

        if (cockLength < 1)
            cockLength = 1;

        if (cockThickness > cockLength * .33)
            cockThickness = cockLength * .33;

        return lengthDelta;
    }

    public thickenCock(increase: number): number {
        let amountGrown: number = 0;
        let temp: number = 0;
        if (increase > 0) {
            while (increase > 0) {
                if (increase < 1)
                    temp = increase;
                else
                    temp = 1;
                // Cut thickness growth for huge dicked
                if (cockThickness > 1 && cockLength < 12) {
                    temp /= 4;
                }
                if (cockThickness > 1.5 && cockLength < 18)
                    temp /= 5;
                if (cockThickness > 2 && cockLength < 24)
                    temp /= 5;
                if (cockThickness > 3 && cockLength < 30)
                    temp /= 5;
                // proportional thickness diminishing returns.
                if (cockThickness > cockLength * .15)
                    temp /= 3;
                if (cockThickness > cockLength * .20)
                    temp /= 3;
                if (cockThickness > cockLength * .30)
                    temp /= 5;
                // massive thickness limiters
                if (cockThickness > 4)
                    temp /= 2;
                if (cockThickness > 5)
                    temp /= 2;
                if (cockThickness > 6)
                    temp /= 2;
                if (cockThickness > 7)
                    temp /= 2;
                // Start adding up bonus length
                amountGrown += temp;
                cockThickness += temp;
                temp = 0;
                increase--;
            }
            increase = 0;
        }
        else if (increase < 0) {
            while (increase < 0) {
                temp = -1;
                // Cut length growth for huge dicked
                if (cockThickness <= 1)
                    temp /= 2;
                if (cockThickness < 2 && cockLength < 10)
                    temp /= 2;
                // Cut again for massively dicked
                if (cockThickness < 3 && cockLength < 18)
                    temp /= 2;
                if (cockThickness < 4 && cockLength < 24)
                    temp /= 2;
                // MINIMUM Thickness of OF .5!
                if (cockThickness <= .5)
                    temp = 0;
                // Start adding up bonus length
                amountGrown += temp;
                cockThickness += temp;
                temp = 0;
                increase++;
            }
        }
        trace("thickenCock called and thickened by: " + amountGrown);
        return amountGrown;
    }

    public get cockLength(): number {
        return _cockLength;
    }

    public set cockLength(value: number): void {
        _cockLength = value;
    }

    public get cockThickness(): number {
        return _cockThickness;
    }

    public set cockThickness(value: number): void {
        _cockThickness = value;
    }

    public get cockType(): CockTypesEnum {
        return _cockType;
    }

    public set cockType(value: CockTypesEnum): void {
        _cockType = value;
    }

    public get knotMultiplier(): number {
        return _knotMultiplier;
    }

    public set knotMultiplier(value: number): void {
        _knotMultiplier = value;
    }

    public get isPierced(): boolean {
        return _isPierced;
    }

    public set isPierced(value: boolean): void {
        _isPierced = value;
    }

    /*
    public function get pierceType():PiercingTypesEnum
    {
        return _pierceType;
    }

    public function set pierceType(value:PiercingTypesEnum):void
    {
        _pierceType = value;
    }
    */

    // { region Getter/Setters
    public get pShortDesc(): string {
        return _pShortDesc;
    }

    public set pShortDesc(value: string): void {
        _pShortDesc = value;
    }

    public get pLongDesc(): string {
        return _pLongDesc;
    }

    public set pLongDesc(value: string): void {
        _pLongDesc = value;
    }

    public get sock(): string {
        return _sock;
    }

    public set sock(value: string): void {
        _sock = value;
    }

    public get pierced(): number {
        return _pierced;
    }

    public set pierced(value: number): void {
        _pierced = value;
    }
    // } endregion

}
