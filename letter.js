var letter = function () {
    this.value = value;
    this.appear = false;
    if (this.value == '') {
        this.appear = true;
    };
};
letter.prototype.displayLetter = function () {
    if (this.appear) {
        return this.value;
    }
    return "_ ";
};
module.exports = letter