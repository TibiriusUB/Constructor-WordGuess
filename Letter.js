var Letter = function(alph) {
    this.character=alph;
    this.reveal=false;
    this.disPlay = function(){
        if (this.reveal) {
            return this.character
        }else{
            return "_"
        };
    };
    this.check = function(guess){
        if (guess === this.character) {
            this.reveal=true
        };
    };
};

// var A = "a"
// var B = process.argv[2]
// var test = new Letter(A)
// test.check(B)
// console.log(test)
// console.log(test.disPlay())

module.exports = Letter;