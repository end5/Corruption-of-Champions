export const GameState = new class {
    private state: [object, new () => object][] = [];

    /**
     * Creates a new object managed by the game state
     * @param constructor A class
     */
    public create<T extends object>(constructor: new () => T) {
        const obj = new constructor();
        this.state.push([obj, constructor]);
        return obj;
    }

    /**
     * Resets all GameState created objects to default values
     */
    public reset() {
        for (const entry of this.state) {
            entry[1].call(entry[0]);
        }
    }
}();
