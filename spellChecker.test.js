const spellChecker = require("./spellChecker");

describe('spellChecker', () => {
  it("returns the word inputted when it is spelt correctly", () => {

    expect(spellChecker('these')).toBe('these');
  })
})