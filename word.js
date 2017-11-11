var letter = require("/.letter");

function word() {
    this.value = value;
    this.letters = [];
    this.found = false;
    for (i = 0; i < this.value.length; i++) {
        this.letters.push(new letter(this.value[i]));
    }
}