// update() => {
//     // if (this.health > 50) {
//     //     this.health = 50;
//     }

const { start } = require('./game.js');


class Animal {
    constructor(name) {
        this.name = name;
        this.health = 50;
        this.nutrition = 50;
        this.hydration = 50;
        this.excitement = 50;
        this.stamina = 50;
    }

    update() {
        if (this.nutrition <= 0 && this.hydration <= 0) {
            console.log("game over")
        }
        if (this.health > 50) {
            this.health = 50;
        }
        if (this.nutrition > 50) {
            this.nutrition = 50;
        }
        if (this.hydration > 50) {
            this.hydration = 50;
        }
        if (this.excitement > 50) {
            this.excitement = 50;
        }
        if (this.stamina > 50) {
            this.stamina = 50;
        }
        if (this.health < 0) {
            this.health = 0;
        }
        if (this.nutrition < 0) {
            this.nutrition = 0;
        }
        if (this.hydration < 0) {
            this.hydration = 0;
        }
        if (this.excitement < 0) {
            this.excitement = 0;
        }
        if (this.stamina < 0) {
            this.stamina = 0;
        }
        /// WARNINGS
        if (this.health < 15) {
            console.log(`${this.name} is in danger of loosing too much health. Feed them or give them some water.`)
        }
        if (this.nutrition < 15) {
            console.log(`${this.name} is getting very hungry. Feed them.`)
        }
        if (this.hydration < 15) {
            console.log(`${this.name} is getting dehydrated. Give them some water.`)
        }
        if (this.excitement < 15) {
            console.log(`${this.name} is getting very bored. Try playing with them, or giving them some exercise.`)
        }
        if (this.stamina < 15) {
            console.log(`${this.name} is loosing a lot of stamina. Maybe let them rest a little.`)
        }
        /// DEATH RANGE
        if (this.nutrition === 0 && this.hydration === 0) {
            console.log(`${this.name} is dead. They got too hungry and too dehydrated.`)
            start();
        }
        if (this.health = 0) {
            console.log(`${this.name} is dead. You let their health fall too low.`);
        }
        if (this.nutrition = 0) {
            console.log(`${this.name} is dead. You let them get too hungry.`);
        }
        if (this.hydration = 0) {
            console.log(`${this.name} is dead. They died of dehydration.`);
        }
        if (this.excitement = 0) {
            console.log(`${this.name} is dead. They died of boredom.`);
        }
        if (this.stamina = 0) {
            console.log(`${this.name} is dead. Their stamina got too low and they died of exhaustion.`);
        }

    }


    sleep() {
        this.health += 10;
        this.nutrition -= 10;
        this.hydration -= 10;
        this.stamina += 10;
        console.log(`${this.name} is feeling well rested after a sleep 'Zzz'.`);
        return this;
    }
    petStatus() {
        return console.table({
            name: this.name,
            health: this.health,
            nutrition: this.nutrition,
            hydration: this.hydration,
            excitement: this.excitement,
            stamina: this.stamina,
        });
    }
}

module.exports = { Animal };