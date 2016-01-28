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

CurrentWord.prototype.getFullWord = function() {
  return this.word;
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
  this.letters = "abcdefghijklmnopqrstuvwxyz";
  this.guesses = '';
}

// deletes guessed letters and returns all unguessed letters
Letters.prototype.unGuessed = function() {
  return this.letters.replace(new RegExp('[' + this.guesses + ']', 'gi'), '');;
}

// removes the guessed letter from letters
Letters.prototype.guess = function(letter) {
  this.guesses = this.guesses + letter;
}

// returns all the guessed letters
Letters.prototype.guessedLetters = function() {
  return this.guesses;
}

// get the letters in ANY html tags
Letters.prototype.getLettersInTag = function(letters, tag) {
  letters = letters.split('');
  var output = '';
  letters.forEach(function(letter){
    output += '<'+tag+'>'+letter+'</'+tag+'>';
  });
  return output;
}

// get the unguessed letters in divs
Letters.prototype.getUnGuessedLettersInDiv = function() {
  return this.getLettersInTag(this.unGuessed(), 'div');
}

// get the guessed letters in divs
Letters.prototype.getGuessedLettersInDiv = function() {
  return this.getLettersInTag(this.guessedLetters(), 'div');
}

function StickFigure() {
  this.bodyParts = 6;
  this.fails = 0;
}

StickFigure.prototype.showParts = function() {
  return this.fails;
}

StickFigure.prototype.guess = function(guess) {
  if (!guess) {
    this.fails++;
  }
}

StickFigure.prototype.isDead = function() {
  return (this.fails >= this.bodyParts);
}

function PlayHangman() {
  this.wordLibrary = new WordLibrary();
  this.currentWord = new CurrentWord();
  this.currentWord.getNewWord();
  this.letters = new Letters();
  this.stickFigure = new StickFigure();
}

PlayHangman.prototype.getGameWord = function() {
  return this.currentWord.getGameWord();
}

PlayHangman.prototype.getFullWord = function() {
  return this.currentWord.getFullWord();
}

PlayHangman.prototype.guess = function(letter) {
  this.stickFigure.guess(this.currentWord.guess(letter));
  this.letters.guess(letter);
}

PlayHangman.prototype.getGuessedLettersInDiv = function() {
  return this.letters.getGuessedLettersInDiv();
}

PlayHangman.prototype.getUnGuessedLettersInDiv = function() {
  return this.letters.getUnGuessedLettersInDiv();
}

PlayHangman.prototype.showParts = function() {
  return this.stickFigure.showParts();
}

PlayHangman.prototype.isDead = function() {
  return this.stickFigure.isDead();
}

PlayHangman.prototype.didYouWin = function() {
  return this.currentWord.didYouWin();
}
// Begin User Interface

$(document).ready(function() {

  // on letter click, guess and display word, body parts, letters and getGuessedLettersInDiv
  // on potential navigation/page reload ask to make sure so they don't loose game progress
  // inform user if win or lose
  var game = new PlayHangman();

  $('.word').text(game.getGameWord());
  $('.letters').html(game.getUnGuessedLettersInDiv());
  $('.bodyParts img').attr('src', 'img/hangman' + game.showParts() + '.jpg');
  $('.letters div').each(function() {
    $(this).click(function() {
      game.guess($(this).text());
      $('.word').text(game.getGameWord());
      $('.bodyParts img').attr('src', 'img/hangman' + game.showParts() + '.jpg');
      $(this).addClass('clicked');
      if (game.isDead()) {
        $('.letters').hide();
        $('.gameOver').show();
        $('.word').text(game.getFullWord());
      } else if (game.didYouWin()) {
        $('.bodyParts img').attr('src', 'img/hangmanwin.jpg');
        $('.letters').hide();
        $('.gameWin').show();
      }
    });
  });
});
