// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
var Word = require("./Word.js");
var inquirer = require("inquirer");
var choice = ""
var alphaArr = []
var omegaArr = ["0"]
var puzzle = ["The Rain In Spain", "wheel of fortune", "unbelieveable", "one small step", "blahblahblah"]
var plays = 0
var play = ""

//random call function
function librarycall() {
    let select = Math.floor(Math.random() * puzzle.length);
    choice = puzzle[select];
};

//gamestart, and state reset
function wordplay() {
    librarycall()
    var play = new Word(choice);
    plays = 20
    alphaArr = ["a", "b,", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    omegaArr = ["0"]
    console.log(play.fullDisplay());
    console.log("Tries left = " + plays);
    testletter()
};

// letter validation
function validation(pick) {
    if (pick.length == 1) {
        let omega = omegaArr.length
        for (l = 0; l < alphaArr.length; l++) {
            if (pick === alphaArr[l]) {
                omegaArr.push(alphaArr[l])
                alphaArr.splice(l, 1);
                //console.log(alphaArr);
            };
        };
        if (omega == omegaArr.length) {
            return "That was already chosen!"
        }
        return true
    } else {
        return "please choose 1 letter"
    };
};

//endstate detection 
function endDetect() {
    let test = false;
    for (t = 0; t < play.length; t++) {
        if (!(play[t].reveal)) {
            break
        } else {
            if ((t === play.length - 1) && (play[t].reveal)) {
                console.log("You Win!");
                test = true
            };
        };
    };

    if (test) { return test }

    if (plays == 0) {
        console.log("You Lose!")
        test = true
    };

    return test
};

//primary game-logic crossroad
function testletter() {
    //NPM discription of inquirer "validate"
    inquirer.prompt([
        {
            type: "input",
            name: "pick",
            message: "Pick a Leter!:",
            validate: validation(pick)
        },
    ]).then(function () {
        play.checkLetter(pick);
        console.log(play.fullDisplay());
    });

    if (endDetect()) {
        inquirer.prompt([
            {
                type: "confirm",
                name: "restart",
                message: "Play Again?:"
            },
        ]).then(function () {
            if (restart) {
                wordplay()
            };
        });
    } else {
        testletter()
    };

};

//it begins!
wordplay()


