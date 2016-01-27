describe('wordLibrary', function() {
  it("will return the word in wordLibrary", function() {
    var testWord = new wordLibrary();
    expect(testWord.randomWord()).to.equal("Alabama");
  });
});
