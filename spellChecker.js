const spellChecker = (word) => {
  const correctWords = ['these', 'words', 'are'];
  let correctedWord = '';
  correctWords.forEach((correctWord) => {
    if (word == correctWord) {
      correctedWord = word;
    }
  })

  return correctedWord;
}

module.exports = spellChecker;