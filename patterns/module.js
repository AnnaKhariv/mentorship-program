class Module {
    constructor() {
        this._counter = 0;

        return {
            incrementCounter: () => {
                return this._counter++;
            },

            decrementCounter: () => {
                return this._counter--;
            },

            resetCounter: () => {
                return this._counter = 0;
            },

            getCounter: () => {
                return this._counter;
            }
        }
    }
}

const counter = new Module();
console.log(counter);

counter.incrementCounter();
counter.incrementCounter();

console.log(counter.getCounter());
counter.resetCounter();
console.log(counter.getCounter());