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
  })
});
