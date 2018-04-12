
var Letter = require('./letter.js');

var Word = function (wordString) {
   this.wordString = wordString;
   this.wordArray = [];
    this.addtoWordArray = function (character, guessed) {
        this.wordArray.push(new Letter(character, guessed));
    };
    this.wordDisplay = function () {
       return this.wordArray.join(' ');
       //console.log(Word.wordDisplay) will display like this : "e x a m p l e"
    };

    this.checkAllLtrs = function (ltrInput) {
        for (var ltrIndex = 0; ltrIndex < this.wordArray.length; ltrIndex++) {
            this.wordArray[ltrIndex].updateGuess(ltrInput);
        };
    }; 
};


module.exports = Word;