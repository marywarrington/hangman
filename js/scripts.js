function WordLibrary() {
  this.words = ['Alabama', 'Arkansas', 'Mississippi', 'Florida', "Massachusettes", "Arizona", "Texas", "California", "Colorado", "Michigan"];
}

WordLibrary.prototype.randomWord = function() {
  return this.words[Math.floor(Math.random() * (this.words.length))];
}

function CurrentWord(word) {
  this.word = word;
  this.guessedLetters = '';
}

CurrentWord.prototype.getNewWord = function() {
  var lib = new WordLibrary();
  this.word = lib.randomWord();
}

CurrentWord.prototype.getGameWord = function() {
  return this.word.replace(new RegExp('[^'+this.guessedLetters+']', 'gi'), '_');
}

CurrentWord.prototype.guess = function(letter) {
  var output = this.word.toLowerCase().includes(letter.toLowerCase());
  if (output) {
    this.guessedLetters += letter;
  }
  return output;
}
