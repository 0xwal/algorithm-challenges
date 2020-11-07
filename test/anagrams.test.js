const expect = require('chai').expect;
const anagrams = require('../src/anagrams');


describe('anagrams', () =>
{
    it('should check for word that has same characters', async () =>
    {
        expect(anagrams('Hello World', 'World Hello')).to.be.true;
        expect(anagrams('HelloW World', 'Hello World')).to.be.false;
    });
});
