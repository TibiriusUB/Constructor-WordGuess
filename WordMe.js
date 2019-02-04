
//var test = function (pow)
var inquirer =  require("inquirer")

//GAme Process Start
var word = "test"
// word/phrase is picked from random selection (basic = array, advanced = JSON file for practice), and the word display is constructed
// # of plays is set let's go with 10
//_ _ _ _ 

// make a gamestart() function, this sets the plays, calls the word, and it's construct, then calls the prompt() function

// prompt() askes for a letter, re-displays, then detects() win/loss status, no plays left = loss, if all letters are revealed = win, if not 
// ended it calls itself

//detect() stops the game if win/loss is found and, (optionaly, saves the score) prompts for a new game calling gamestart() again