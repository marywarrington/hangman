function WordLibrary() {
  this.words = ['Alabama', 'Arkansas', 'Mississippi', 'Florida', "Massachusettes", "Arizona", "Texas", "California", "Colorado", "Michigan"];
}

WordLibrary.prototype.randomWord = function() {
  return this.words[Math.floor(Math.random() * (this.words.length))];
}
