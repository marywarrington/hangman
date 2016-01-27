describe('WordLibrary', function() {
  it("will return the word in wordLibrary", function() {
    var testWord = new WordLibrary();
    expect(testWord.randomWord()).to.equal("Alabama");
  });
});
