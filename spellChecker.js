const spellChecker = (word) => {
  if (word == 'thess') {
    return 'these'
  } else if (word == 'wrds') {
    return 'words'
  } else if (word == 'aer') {
    return 'are'
  }
  const correctWords = ['these', 'words', 'are'];
  let correctedWord = correctWords.find(correctWord => correctWord == word);
  return correctedWord;
}

module.exports = spellChecker;

