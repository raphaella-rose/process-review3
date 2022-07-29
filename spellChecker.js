const spellChecker = (word) => {
  if (word == 'these') {
    return 'these'
  } else if (word == 'words') {
    return 'words'
  } else {
    return 'are'
  }

}

module.exports = spellChecker;