//set global variables
var Word = require("./Word.js");
var inquirer = require("inquirer");
var choice = ""
var alphaArr = []
var omegaArr = []
var puzzle = ["The Rain In Spain", "wheel of fortune", "unbelieveable", "one small step", "blahblahblah"]
var plays = 0
var play = ""
var wins = 0
var losses = 0
//random call function for randomizing word library
function librarycall() {
    let select = Math.floor(Math.random() * puzzle.length);
    choice = puzzle[select];
};

//gamestart, and state reset
function wordplay() {
    librarycall()
    play = new Word(choice);
    plays = 10
    alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    omegaArr = []
    console.log(play.fullDisplay());
    console.log("Tries left = " + plays);
    testletter()
};

// letter validation
function validation(pick) {
    that = ((pick).toLowerCase())
    var huh = (alphaArr.indexOf(that));
    var wha = (omegaArr.indexOf(that));
    if (huh > -1) {
        omegaArr.push(alphaArr[huh])
        alphaArr.splice(huh, 1);
        return true
    } else if (wha > -1) {
        return "That was already chosen!"
    } else {
        return "please choose 1 letter"
    };
};

//endstate detection 
function endDetect() {
    let test = false;
    let ease = play.letters
    for (t = 0; t < ease.length; t++) {
        if (!(ease[t].reveal)) {
            break
        } else {
            if ((t === ease.length - 1) && (ease[t].reveal)) {
                console.log("You Win!");
                wins++;
                test = true;
            };
        };
    };

    if (test) { return test }
    //console.log(test)
    if (plays == 0) {
        console.log("You Lose!");
        losses++;
        test = true;
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
            message: "Pick a Letter!:",
            validate: validation
        },
    ]).then(function (text) {
        play.checkLetter((text.pick).toLowerCase());
        console.log(play.fullDisplay());
        let used = "Used Letters: " + (omegaArr.toString().toUpperCase())
        console.log(used)
        if ((play.fullDisplay()).indexOf((text.pick).toUpperCase()) == -1){
            (plays--)
        };
        console.log("Tries left = " + plays);


        if (endDetect()) {
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "restart",
                    message: "Play Again?:",
                    default: false
                },
            ]).then(function (again) {
                if (again.restart) {
                    wordplay()
                } else {
                    console.log("Wins: " + wins + ", " + "Losses: " + losses)
                };
            });
        } else {
            testletter()
        };
    });
};


//it begins!
wordplay()


