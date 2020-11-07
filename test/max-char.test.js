const expect = require('chai').expect;
const maxChar = require('../src/max-char');

describe('maxChar', () =>
{
    it('should print the maximum char', async () =>
    {
        expect(maxChar('Hello World')).to.equals('l');
    });

    it('should ignore white spaces', async () =>
    {
        expect(maxChar('This  is  the  air window')).to.equals('i');
    });
});
