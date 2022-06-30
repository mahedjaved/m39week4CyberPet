const { Animal } = require('./animal.js');

class Hamster extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        // this.health = 100;
        // this.hunger = 0;
    }
    play() {
        this.nutrition -= 20;
        this.hydration -= 20;
        this.excitement += 5;
        this.health += 5;
        this.stamina -= 5;

        console.log(`${this.name} is running in their wheel.`);
        this.update();
        return this;
    }

    feed() {
        this.health += 5;
        this.nutrition += 5;
        this.excitement -= 5;

        console.log(`${this.name} is loving the leafy greens!`);
        this.update();
        return this;
    }

    drink() {
        this.health += 5;
        this.hydration += 5;
        this.excitement -= 5;

        console.log(`${this.name} is drinking some water!`);
        this.update();
        return this;
    }
}

module.exports = { Hamster };