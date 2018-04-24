
var inquirer = require('inquirer');

var Word = require('./word.js');

//from Merriam-Webster word of the day Mar & Apr 2018
var wordChoices = ['maladroit', 'rectitude', 'scilicet', 'lexicographer', 'sensibility', 'veld',
    'ineluctable', 'bastion', 'rabble', 'lugubrious', 'laudable', 'invigilate', 'manticore', 'grandiose',
    'farce', 'elucidate'
];

function chooseWord() {
    return wordChoices[Math.floor(Math.random() * wordChoices.length)];
};

//alphabet and guessedLetters are for validation
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var guessedLetters = '';


//game start
console.log("Welcome to Hangman!");

var chosenWord = new Word(chooseWord());

chosenWord.addtoWordArray();


function playGame(remainingGuesses) {

    if (remainingGuesses > 0) {

        console.log(chosenWord.wordDisplay());

        inquirer.prompt([{
            name: 'ltrInput',
            message: 'Guess a letter',
            validate: function (value) {
                var value = value.toLowerCase();
                return alphabet.includes(value.toLowerCase()) && !guessedLetters.includes(value);
            }

        }]).then(function (answer) {
            chosenWord.checkAllLtrs(answer.ltrInput.toLowerCase());
            guessedLetters += answer.ltrInput.toLowerCase();

            if (!chosenWord.wordString.includes(answer.ltrInput.toLowerCase())) {
                remainingGuesses--;
                console.log('INCORRECT!');
                console.log(remainingGuesses + ' guesses remain');
                playGame(remainingGuesses);
            } else {
                console.log('CORRECT!');
    
                if (!chosenWord.wordArray.join('')===chosenWord.wordString) {
                    playGame(remainingGuesses);
                } else {
                    console.log('You won! The word was ' + chosenWord.wordString);
                }
            }
        });

    } else {
        return console.log("You lost. The word was " + chosenWord.wordString);
    }
};
playGame(7);