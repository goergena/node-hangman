/*

Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying
 character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed
  the letter. That means the constructor should define:

A string value to store the underlying character for the letter

A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, or a placeholder 
(like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, 
updating the stored boolean value to true if it was guessed correctly


*/

var Letter = function(character, guessed) {
    this.character = character;
    this.guessed = guessed;
}

Letter.prototype.displayLtr = function() {
    if(this.guessed) {
        return console.log("display returning true: " + this.character) ;
    } else {
        return console.log("display returning false: " + '_') ;
    }

};

Letter.prototype.toString = function() {
    var blank = '_';
    if (this.guessed) {
        console.log("ToString method and its character returning true: " + this.character);
        return this.character;
        
    } else {
        console.log('ToString returning false + character: ' + this.character);
        return blank;

    }
};

Letter.prototype.updateGuess = function(ltrInput) {
    if (ltrInput === this.character || ltrInput.toLowerCase() ===this.character) {
        this.guessed = true;
    } else {
        return;
    }
};


var C = new Letter('c', false);
C.displayLtr();
console.log(C + ' ');
C.updateGuess('C');
console.log(C + ' test of update guess line 60');

module.exports = Letter;
