const { Animal } = require('./animal.js');

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name;
    }
    // Dog specific methods
    play() {
        this.health += 5;
        this.nurition -= 5;
        this.hydration -= 5;
        this.excitement += 5;
        this.stamina -= 5;

        console.log(`${this.name} is playing with the ball!`);
        this.update();

        return this;
    }

    feed() {
        this.health += 5;
        this.nurition - + 5;
        this.excitement - + 5;

        console.log(`${this.name} is enjoying some dog treats!`);
        this.update();

        return this;
    }

    drink() {
        this.health += 5;
        this.hydration - + 5;
        this.excitement - + 5;

        console.log(`${this.name} is drinking some water!`);
        this.update();

        return this;
    }

    speak() {
        this.excitement += 5;
        this.stamina -= 5;

        console.log(`${this.name} is barking at you enthusiastically`);
        this.update();

        return this;
    }

    sit() {
        this.stamina += 5;

        console.log(`${this.name} is sitting down and questioning your next command`);
        this.update();

        return this;
    }

}
module.exports = { Dog };