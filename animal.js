// update() => {
//     // if (this.health > 50) {
//     //     this.health = 50;
//     }



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