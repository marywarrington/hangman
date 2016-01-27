describe('WordLibrary', function() {
  it("creates an array containing the word Alabama", function() {
    var testWord = new WordLibrary();
    expect(testWord.words[0]).to.equal("Alabama");
  });
  it("will return a random word from the array .words", function() {
    var testWord = new WordLibrary();
    expect(testWord.randomWord()).to.equal("Alabama");
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
    expect(currentWord.word).to.equal('Alabama');
  });
});
