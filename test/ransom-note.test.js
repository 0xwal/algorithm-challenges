const expect = require('chai').expect;
const ransomNote = require('../src/ransom-note');

describe('ransomNote', () =>
{
    it('should return "false" when the ransom note magazine text', async () =>
    {
        expect(ransomNote('a', 'b')).to.equals(false);
        expect(ransomNote('aa', 'ab')).to.equals(false);
    });

    it('should return "true" when the ransom note magazine text', async () =>
    {
        expect(ransomNote('aa', 'aab')).to.equals(true);
    });

    it('should return "true" for the ransom note that exists in the end of magazine', async () =>
    {
        expect(ransomNote('aab', 'baa')).to.equals(true);
    });
});
