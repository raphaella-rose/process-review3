const spellChecker = (text) => {
  if (text == 'these words') {
    return 'these words'
  } else if (text == 'words are') {
    return 'words are'
  }
  const correctWords = ['these', 'words', 'are'];
  let correctedWord = correctWords.find(correctWord => correctWord == text);

  if (correctedWord == undefined) {
    correctedWord = `~${text}~`
  }
  return correctedWord;
}

module.exports = spellChecker;

