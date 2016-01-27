function WordLibrary() {
  this.words = ['Alabama', 'Arkansas', 'Mississippi', 'Florida'];
}

WordLibrary.prototype.randomWord = function() {
  return this.words[Math.floor(Math.random() * (this.words.length))];
}
