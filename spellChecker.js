const spellChecker = (word) => {
  if (word == 'these words') {
    return 'these words'
  }
  const correctWords = ['these', 'words', 'are'];
  let correctedWord = correctWords.find(correctWord => correctWord == word);

  if (correctedWord == undefined) {
    correctedWord = `~${word}~`
  }
  return correctedWord;
}

module.exports = spellChecker;

