var letter = require("/.letter");

function word() {
    this.value = value;
    this.letters = [];
    this.found = false;
    for (i = 0; i < this.value.length; i++) {
        this.letters.push(new letter(this.value[i]));
    }
}
//check to see if letter is in word
word.prototype.checkLetter = function () {

}

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