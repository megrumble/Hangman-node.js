console.log(HANGMAN);
var inquirer = require("inquirer");
var game = require("./game");
var word = require('./word');

//start game
function startGame() {

}
//get word from wordArray
function getWord() {
    var currentWord = new word(this.wordArray[Math.floor(Math.random() * this.wordArray.length)]);
}
//display dashes for word
//prompt user to guess a letter
//check to see if letter is in word and display letter if correct
//add letter to incorrectArray if incorrect
//continue until word isComplete or...
//all incorrect guesses are used 
function guessLetter() {
    var questions = [{
        name: 'letter',
        type: 'text',
        message: 'Guess a letter'
    }]
    inquirer.prompt(questions)
        .then(function (letter) {

        })
}