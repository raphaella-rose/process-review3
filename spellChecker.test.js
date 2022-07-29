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

  it("returns the word 'these' with the correct spelling when it is spelt incorrectly", () => {
    expect(spellChecker('thess')).toBe('these');
  })

  it("returns the word 'wrds' with the correct spelling when it is spelt incorrectly", () => {
    expect(spellChecker('wrds')).toBe('words');
  })
})