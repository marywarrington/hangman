describe('WordLibrary', function() {
  it("creates an array containing the word Alabama", function() {
    var testWord = new WordLibrary();
    expect(testWord.words[0]).to.equal("Alabama");
  });
  it("will return the word in wordLibrary", function() {
    var testWord = new WordLibrary();
    expect(testWord.randomWord()).to.equal("Alabama");
  });
  it("will return a random word from the array .words", function() {
    var testWord = new WordLibrary();
    expect(testWord.randomWord()).to.equal("");
  });
});
