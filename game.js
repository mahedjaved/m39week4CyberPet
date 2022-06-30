// OLD CODE !!
const { Animal } = require("./animal.js");
const { Cat } = require("./cat.js");
const { Dog } = require("./dog.js");
const { Hamster } = require("./hamster.js");

// // core import error module
// class ImportError extends Error { };


// // function for handling local module import errors
// const moduleImport = async (pathToModule) => {
//     try {
//         // wait for the user to finish module imports
//         return await require(pathToModule)
//     } catch (impError) {
//         throw new ImportError(`[warning] Unidentified module ${pathToModule} import ignored`)
//     }
// }

// core inquirer module
const inquirer = require('inquirer');

// variable myPet declaration
let myPet;

// the game start function
async function start() {
    const { petType } = await inquirer.prompt({
        type: 'list',
        name: 'petType',
        message: "What type of pet would you like ? Please choose from below: ",
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
                name: "Hamster",
                value: "hamster",

            }
        ],
    })

    const { petName } = await inquirer.prompt({
        type: 'input',
        name: 'petName',
        message: "What would you like to name your pet?"
    });

    if (petType === 'cat') myPet = new Cat(petName);


    // else if (
    //     petType === 'dog',
    //     dogChoice(),

    // )
    //     myPet = new Dog(petName);


    else if (petType === 'hamster') myPet = new Hamster(petName);


    userChoice();
}

// decides the choice of actions of the user
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

    userChoice();
    // display status for debugging
    // myPet.petStatus();

}



// }


// the main function
// async function main() {
// const { Cat } = await moduleImport("./cat.js");
// const { Dog } = await moduleImport("./dog.js");
// const { Hamster } = await moduleImport("./hamster.js");
//     start(Cat, Dog, Hamster);

// }

// call to the main function
start();


module.exports = { start }































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