var inquirer = require('inquirer');

var Word = require('./word.js');

//from Merriam-Webster word of the day Mar & Apr 2018
var wordChoices = ['maladroit', 'rectitude', 'scilicet', 'lexicographer', 'sensibility', 'veld',
    'ineluctable', 'bastion', 'rabble', 'lugubrious', 'laudable', 'invigilate', 'manticore', 'grandiose',
    'farce', 'elucidate'
];

function chooseWord() {
    var myWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    removeFromArray(myWord);
    return myWord;
};

function removeFromArray(wordOption) {
    var desiredWordIndex = wordChoices.indexOf(wordOption);
    if (desiredWordIndex > -1) {
        wordChoices.splice(desiredWordIndex, 1);
    };
};


//alphabet and guessedLetters are for validation
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var guessedLetters = '';


var nextWord = new Word(chooseWord());
nextWord.addtoWordArray();

function resetGameParams() {
    if (wordChoices.length > 0) {
        guessedLetters = '';
        nextWord = new Word(chooseWord());
        nextWord.addtoWordArray();
        playGame(7, nextWord);
    } else {
        return console.log("You have used all the words! Thanks for playing.")
    }
};


function playGame(remainingGuesses, chosenWord) {

    if (remainingGuesses > 0) {

        console.log(chosenWord.wordDisplay());

        inquirer.prompt([{
            name: 'ltrInput',
            message: 'Guess a letter',
            validate: function (value) {
                var value = value.toLowerCase();
                return alphabet.includes(value.toLowerCase()) && !guessedLetters.includes(value) && value.length === 1;
            }

        }]).then(function (answer) {
            chosenWord.checkAllLtrs(answer.ltrInput.toLowerCase());
            guessedLetters += answer.ltrInput.toLowerCase();

            if (!chosenWord.wordString.includes(answer.ltrInput.toLowerCase())) {
                remainingGuesses--;
                console.log('INCORRECT!');
                console.log(remainingGuesses + ' guesses remain');
                playGame(remainingGuesses, chosenWord);
            } else {
                console.log('CORRECT!');

                if (chosenWord.wordArray.join('') === chosenWord.wordString) {
                    console.log('You won! The word was ' + chosenWord.wordString);
                    resetGameParams();
                } else {
                    playGame(remainingGuesses, chosenWord);
                }
            }
        });

    } else {
        console.log("You lost. The word was " + chosenWord.wordString);
        resetGameParams();
    }
};


//game start
console.log("Welcome to Hangman!");
playGame(7, nextWord);