// contains all the words in the game
function WordLibrary() {
  this.words = ['Alabama', 'Arkansas', 'Mississippi', 'Florida', "Massachusettes", "Arizona", "Texas", "California", "Colorado", "Michigan"];
}

// returns a random word for the player
WordLibrary.prototype.randomWord = function() {
  return this.words[Math.floor(Math.random() * (this.words.length))];
}

// stores the word to be played
function CurrentWord(word) {
  this.word = word;
  this.guessedLetters = '';
}

// gets a new word from the word library
CurrentWord.prototype.getNewWord = function() {
  var lib = new WordLibrary();
  this.word = lib.randomWord();
}

// provides the game word, with blanks for unguessed letters
CurrentWord.prototype.getGameWord = function() {
  return this.word.replace(new RegExp('[^' + this.guessedLetters + ']', 'gi'), '_');
}

// tells you if the guessed letter is inside the word
CurrentWord.prototype.guess = function(letter) {
  var output = false;
  if(typeof(letter) === 'string') {
    if(letter.length > 1) letter = letter[0];
    output = this.word.toLowerCase().includes(letter.toLowerCase());
    if (output) {
      this.guessedLetters += letter;
    }
  }
  return output;
}

// tells you if you won or not
CurrentWord.prototype.didYouWin = function() {
  return this.word === this.getGameWord();
}

// provides all the letters that can be guessed
function Letters() {
  this.letters = "abcdefhijklmnopqrstuvwxyz";
  this.guesses = '';
}

// returns all unguessed letters
Letters.prototype.unGuessed = function() {
  return this.letters;
}

// removes the guessed letter from letters
Letters.prototype.guess = function(letter) {
  // remove guess from letters
  // put guess in guesses
}

currentword - tell you if the letter is in the word
letters - stores the guesses and provides unguessed letters
