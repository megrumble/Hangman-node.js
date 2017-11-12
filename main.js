console.log(HANGMAN);
var inquirer = require("inquirer");

function guessLetter() {
    var questions = [{
        name: 'letter',
        type: 'text',
        message: 'Guess a letter'
    }]
    inquirer.prompt(questions)
        .then(function () {

        })
}