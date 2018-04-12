# node-hangman

A modular node hangman game using constructors and npm inquirer.

letter.js exports the Letter constructor. This constructor allows you to build a Letter that does 4 things:
-stores its character
-stores its boolean 'guessed' 
-displays as '_' if 'guessed' is false or 'character' if 'guessed' is true
-takes an input (like a guess!) and if that input matches the character, will update 'guessed' to true

word.js requires letter.js, builds the Word constructor, and exports it.

