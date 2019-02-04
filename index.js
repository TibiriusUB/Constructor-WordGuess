// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
var Word = require("./Word.js");
function wordplay() {
    var play = new Word(choice);
   
    console.log(play.fullDisplay());
    play.checkLetter(test);
    testletter()
    console.log(play.fullDisplay());
};
function testletter(z) {
    if (test.length == 1) {
        let omega = omegaArr.length
        for (l = 0; l < alphaArr.length; l++) {

            if (test === alphaArr[l]) {
                omegaArr.push(alphaArr[l])
                alphaArr.splice(l, 1);
                console.log(alphaArr);
            };
        };
        if (omega == omegaArr.length) {
            console.log("that was already chosen")
        }
    }else{
        console.log("please choose 1 letter")
    };
};
var alphaArr = ["a", "b,", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var omegaArr = ["0"]
//game start; promt user
var choice = "The Rain In Spain"
//pick from words/phrases
var test = process.argv[2]
// display inital settings, and guesses remaining, make room for excluded letters
wordplay()
//win/loss message ' end (prompt restart? running tally? game save state?)

