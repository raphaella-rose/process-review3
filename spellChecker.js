const spellChecker = (word) => {
  const correctWords = ['these', 'words', 'are'];
  
  let correctedWord = correctWords.find(correctWord => correctWord == word);

  return correctedWord;
}

module.exports = spellChecker;

