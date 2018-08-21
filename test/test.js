var assert = require('assert');
var loadedLanguage = require(__dirname + "/../index.js");

describe('loaded-language-loadedLanguage', () => {
  describe('#default', () => {
    it('should return 0 matches when no terms are present.', () => {
      let testString = 'Lorem ipsum dolor sit amet'
      let result = loadedLanguage(testString)
      assert.equal(0, result.charged.matches.length)
    })

    it('should ignore capitalization.', () => {
      let testString = 'That person is a Socialist.';
      let result = loadedLanguage(testString);
      assert.equal('socialist', result.charged.matches[0]);
      assert.equal(1, result.charged.matches.length);
    })

    it('should work with multi word phrases', () => {
      let testString = 'They are a member of the ruling class.'
      let result = loadedLanguage(testString);
      assert.equal('ruling class', result.charged.matches[0]);
      assert.equal(1, result.charged.matches.length);
    })

    it('should not have duplicate matches', () => {
      let testString = 'The ruling class. The ruling class';
      let result = loadedLanguage(testString);
      assert.equal('ruling class', result.charged.matches[0]);
      assert.equal(1, result.charged.matches.length);
    })

    // it('should return formatted text along with matches', () => {
    //   let testString = 'That person is a Socialist.'
    //   let result = loadedLanguage(testString)
    //   assert.equal('socialist', result.charged.matches[0])
    //   assert.equal(1, result.changed.matches.length)
    //   assert.equal(testString, result.charged.text)
    // })

    it('should ignore a match within a larger word', () => {
      let testString = 'Romanticism'
      let result = loadedLanguage(testString);
      assert.equal(0, result.charged.matches.length);
    })
  })
})

