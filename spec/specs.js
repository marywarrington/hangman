describe('WordLibrary', function() {
  it("creates an array containing the word Alabama", function() {
    var testWord = new WordLibrary();
    expect(testWord.words[0]).to.equal("Alabama");
  });
  it("will return a random word from the array .words", function() {
    var testWord = new WordLibrary();
    expect(testWord.randomWord()).to.be.a('string');
  });
});

describe("CurrentWord", function() {
  it('stores a word to be in play', function() {
    var currentWord = new CurrentWord('test');
    expect(currentWord.word).to.equal('test');
  });
  it('can get a new word from the library', function() {
    var currentWord = new CurrentWord();
    currentWord.getNewWord();
    expect(currentWord.word).to.be.a('string');
  });
  it('provides the word with the blanks for letters that have not been correctly guessed', function() {
    var currentWord = new CurrentWord('test');
    expect(currentWord.getGameWord()).to.equal('____');
  });
  it('returns true if the letter guessed is in the word', function () {
    var currentWord = new CurrentWord('oregon');
    expect(currentWord.guess('r')).to.equal(true);
  });
  it('does not care about case when guessing letters', function() {
    var currentWord = new CurrentWord('OREGON');
    expect(currentWord.guess('r')).to.equal(true);
  });
  it('provides the game word with the guessed letters showing', function() {
    var currentWord = new CurrentWord('OREGON');
    currentWord.guess('o');
    expect(currentWord.getGameWord()).to.equal("O___O_");
  });
  it('returns true if you have won the game', function() {
    var currentWord = new CurrentWord('test');
    currentWord.guess('t');
    currentWord.guess('e');
    currentWord.guess('s');
    expect(currentWord.didYouWin()).to.equal(true);
  });
  it('only looks at the first letter of a guess string', function() {
    var currentWord = new CurrentWord('test');
    currentWord.guess('te');
    expect(currentWord.getGameWord()).to.equal('t__t');
  });
  it('ignores numbers as guesses', function() {
    var currentWord = new CurrentWord('test');
    expect(currentWord.guess(1)).to.equal(false);
  });
});

describe('Letters', function() {
  it("returns all letters that have not been guessed", function() {
    var testLetter = new Letters();
    expect(testLetter.unGuessed()).to.equal("abcdefghijklmnopqrstuvwxyz");
    testLetter.guess('a');
    expect(testLetter.unGuessed()).to.equal("bcdefghijklmnopqrstuvwxyz");
  });
  it("returns all the guessed letters", function() {
    var testLetter = new Letters();
    testLetter.guess('a')
    expect(testLetter.guessedLetters()).to.equal('a');
  });
});

describe('StickFigure', function() {
  it("has zero bodyparts if no guesses are made", function() {
    var testBody = new StickFigure();
    expect(testBody.showParts()).to.equal(0);
    testBody.guess(false);
    expect(testBody.showParts()).to.equal(1);
  });
});
