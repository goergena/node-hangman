/*

Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create 
an object representing the current word the user is attempting to guess. That means the constructor 
should define:

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This should call the function on each letter 
object (the first function defined in Letter.js) that displays the character or an underscore and 
concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object 
(the second function defined in Letter.js)

*/

var Letter = require('./letter.js');

var Word = function (wordString) {
    this.wordString = wordString;
    this.wordArray = [];
    this.addtoWordArray = function (character, guessed) {
        this.wordArray.push(new Letter(character, guessed));
    };
    this.wordDisplay = function () {
        console.log(this.wordArray.join(' '));
    };
/*
    this.checkAllLtrs = function (ltrInput) {
        this.wordArray.foreach(function (ltr) {
            ltr.updateGuess(ltrInput);
        });
    }; */
};

var goiter = new Word('goiter');

console.log(goiter.wordArray + "this is blank word array");

goiter.addtoWordArray('g', false);

goiter.addtoWordArray('o', false);

goiter.addtoWordArray('i', false);

goiter.addtoWordArray('t', false);

goiter.addtoWordArray('e', false);

goiter.addtoWordArray('r', false);

var spoiled = new Word('spoiled');

for (var j = 0; j < spoiled.wordString.length; j++) {
    var ltrInString = spoiled.wordString.charAt(j);
    console.log(ltrInString + 'ltr in string console.log');
    spoiled.addtoWordArray(ltrInString, false);
};
console.log(spoiled.wordArray + "spoiled word array");



console.log(goiter.wordArray + "this is full goiter word array");

goiter.wordDisplay();
//console.log(goiter.wordDisplay + 'this is console log goiter word display');

/*goiter.checkAllLtrs('i');
goiter.wordDisplay();
*/

module.exports = Word;