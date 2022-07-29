const spellChecker = require("./spellChecker");

describe('spellChecker', () => {
  it("returns the word 'these' when it is spelt correctly", () => {
    expect(spellChecker('these')).toBe('these');
  })

  it("returns the word 'words' when it is spelt correctly", () => {
    expect(spellChecker('words')).toBe('words');
  })

  it("returns the word 'are' when it is spelt correctly", () => {
    expect(spellChecker('are')).toBe('are');
  })

  it("returns the word '~thess~' when 'these' is spelt incorrectly" , () => {
    expect(spellChecker('thess')).toBe('~thess~');
  })

  it("returns the word '~wrds~' when 'words' is spelt incorrectly", () => {
    expect(spellChecker('wrds')).toBe('~wrds~');
  })

  it("returns the word '~aer~' when 'are' is spelt incorrectly", () => {
    expect(spellChecker('aer')).toBe('~aer~');
  })
})