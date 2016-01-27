function WordLibrary() {
  this.words = ['Alabama'];
}

WordLibrary.prototype.randomWord = function() {
  return this.words[0];
}
