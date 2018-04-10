/*
index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it

Prompts the user for each guess and keeps track of the user's remaining guesses 
*/

var inquirer = require('inquirer');

var word = require('./word.js');

var wordChoices = ['maladroit', 'rectitude', 'scilicet', 'lexicographer', 'sensibility', 'veld',
    'ineluctable', 'bastion', 'rabble', 'lugubrious', 'laudable', 'invigilate', 'manticore', 'grandiose',
    'farce', 'elucidate'
];
//from Merriam-Webster word of the day Mar & Apr 2018

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphabetArray = alphabet.split('');

var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)].split('');
console.log(randomWord);

var chosenWord = new Word(randomWord);
chosenWord.foreach(function (ltr) {
    chosenWord.addtoWordArray(ltr, false);
});

//dear god please test that above before you actually write this game function

/*
function playGame(remainingGuesses) {
    if (remainingGuesses > 0) {
//
        inquirer.prompt([{
            // put the prompt here
            //and do validation

        }]).then(function (answer) {
//i have no idea on this so it's okay if you don't either. lolol
        })
    }
};

playGame(15);

//eventually it would be cool to have a prompt confirm to replay 


*/