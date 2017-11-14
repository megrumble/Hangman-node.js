var letter = require("/.letter");

function word(value) {
    this.value = value;
    this.letters = [];
    this.found = false;
    //string to hold letters guesssed
    this.guesses = '';
    for (i = 0; i < this.value.length; i++) {
        this.letters.push(new letter(this.value[i]));
    }
}
//check to see if letter has been guessed using string position
word.prototype.checkLetter = function () {
    var guessLetter = letter.toLowerCase();
    //if the letter already exists anywhere in the guesses string...
    if (this.guesses.indexOf(guessLetter) != -1) {
        return console.log("You've already guessed this letter!");
    }
    //otherwise add guessed letter to guesses string
    this.guesses += guessLetter;
    for (i = 0; i < this.letters.length; i++) {
        if (this.letters[i].value.toLowerCase() == guessLetter) {
            this.letters[i].appear = true;
        }
    }
};
//check if word is complete
word.prototype.isComplete = function () {
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].appear)
            return this.found = false;
    }
    return this.found = true;
}
//display word
word.prototype.displayWord = function () {
    var string = '';
    for (i = 0; i < this.letters.length; i++) {
        string += this.letters[i].displayLetter();
    }
    return string;
}

module.exports = word