const expect = require('chai').expect;
const reverseText = require('../src/reverse-text');


describe('reverseText', () =>
{
    it('should reverse a text', async () =>
    {
        expect(reverseText('ABC')).to.equals('CBA');
    });

    it('should reverse a text that has spaces', async () =>
    {
        expect(reverseText('ABC DEF')).to.equals('FED CBA');
    });
});
