
var Letter = function(character, guessed) {
    this.character = character;
    this.guessed = guessed;
}


//console.log(Letter + '') will automatically call toString and print one of these two returns
Letter.prototype.toString = function() {
    var blank = '_';
    if (this.guessed) {
        return this.character; 
    } else {
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

module.exports = Letter;
