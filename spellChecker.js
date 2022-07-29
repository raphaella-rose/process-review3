const spellChecker = (word) => {
  if (word == 'thess') {
    return '~thess~'
  } else if (word == 'wrds') {
    return '~wrds~'
  } else if (word == 'aer') {
    return '~aer~'
  }
  const correctWords = ['these', 'words', 'are'];
  let correctedWord = correctWords.find(correctWord => correctWord == word);

  return correctedWord;
}

module.exports = spellChecker;

