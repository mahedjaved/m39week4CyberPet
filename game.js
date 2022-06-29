const inquirer = require('inquirer');
// N.B do we need the line below ?
// const { Animal } = require("./animal.js");
const { Cat } = require("./cat.js");
const { Dog } = require("./dog.js");
const { Hamster } = require("./hamster.js");

let myPet;

async function start() {
    const { petType } = await inquirer.prompt({
        type: 'list',
        name: 'petType',
        message: "What type of pet would you like ? Please choose from bellow: ",
        choices: [
            {
                key: "a",
                name: "Cat",
                value: "cat",
            },
            {
                key: "b",
                name: "Dog",
                value: "dog",

            },
            {
                key: "c",
                name: "Rabbit",
                value: "rabbit",

            }
        ],
    })

    const { petName } = await inquirer.prompt({
        type: 'input',
        name: 'petName',
        message: "What would you like to name your pet?"
    });

    if (petType === 'cat') myPet = new Cat(petName);
    else if (petType === 'dog') myPet = new Dog(petName);
    else if (petType === 'rabbit') myPet = new Rabbit(petName);

    userChoice();
}



async function userChoice() {

    const { choice } = await inquirer.prompt({
        type: "list",
        name: 'choice',
        message: "What would you like to do with your pet?",
        choices: [
            {
                key: 'a',
                name: "Feed your pet",
                value: 'feed',
            },
            {
                key: 'b',
                name: "Give your pet a drink",
                value: 'drink',
            },
            {
                key: 'c',
                name: "Play with your pet",
                value: 'play',
            },
            {
                key: 'd',
                name: 'Let the pet have a nap ?',
                value: 'sleep',
            },
            {
                key: 'e',
                name: 'View your pet status report ?',
                value: 'petStatus',
            },
            {
                key: 'f',
                name: 'Do you want to quit this game?',
                value: 'quitGame',
            },
        ]
    })

    if (choice === 'feed') await myPet.feed();
    else if (choice === 'drink') await myPet.drink();
    else if (choice === 'play') await myPet.play();
    else if (choice === 'sleep') await myPet.sleep();
    else if (choice === 'petStatus') await myPet.petStatus();
    else if (choice === 'quitGame') await myPet.quitGame();

    // if (this.health > 50) this.health = 50;
    // if (this.hy > 50) this.health = 50;
    // if (this.health > 50) this.health = 50;
    // if (this.health > 50) this.health = 50;


    // display status for debugging
    // myPet.petStatus();


    userChoice();
}


// Test the game
start();


































// healthDrain(); {
//     setInterval(() => { this.health -= 5 }, 10000),
// }

// nutritionDrain() {
//     setInterval(() => { this.nutrition -= 5 }, 10000)
// }

// hydrationDrain() {
//     setInterval(() => { this.hydration -= 5 }, 10000)
// }

// excitementDrain() {
//     setInterval(() => { this.excitement -= 5 }, 10000)
// }

// staminaDrain() {
//     setInterval(() => { this.stamina -= 5 }, 10000)
// }