var Letter = require( "./Letter.js");
// var pick = "ques tion"
// var input = process.argv[2]

var Word = function(pick){
    this.letters = []
    for (yob=0;yob<pick.length;yob++) {
        this.letters.push(new Letter(pick[yob]))
    };
    this.fullDisplay= function() {
        var line = ""
        for (i=0;i<this.letters.length;i++) {
           line = line + this.letters[i].disPlay()+" "
        };
        return line
    };
    this.checkLetter = function(y) {
        for (qwa=0;qwa<this.letters.length;qwa++) {
            this.letters[qwa].check(y)
        }
    };
};

// var test = new Word(pick)

// //console.log(test.letters) 
// console.log(input)
// console.log(test.fullDisplay())
// test.checkLetter(input)
// console.log(test.fullDisplay())

module.exports = Word;