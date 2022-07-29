const spellChecker = require("./spellChecker");

describe('spellChecker', () => {
  it("returns the word 'these' when it is spelt correctly", () => {
    expect(spellChecker('these')).toBe('these');
  })

  it("returns the word 'words' when it is spelt correctly", () => {
    expect(spellChecker('words')).toBe('words');
  })
})