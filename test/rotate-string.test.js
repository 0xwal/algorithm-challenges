const expect = require('chai').expect;
const rotateString = require('../src/rotate-string');

//implementation of https://leetcode.com/problems/rotate-string

describe('rotateString', () =>
{
    it('should return true if rotated value equals second value', async () =>
    {
        expect(rotateString('abcde', 'cdeab')).to.equals(true);
    });

    it('should return false if rotated value does not equals second value', async () =>
    {
        expect(rotateString('abcde', 'abced')).to.equals(false);
    });

    it('should return true when given value is empty', async () =>
    {
        expect(rotateString('', '')).to.equals(true);
    });
});
