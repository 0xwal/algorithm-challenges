const expect = require('chai').expect;
const reverseNumber = require('../src/reverse-number');

//implementation of https://leetcode.com/problems/reverse-integer
//trying to avoid any native functions to make easy to do it in other languages.

describe('reverseNumber', () =>
{
    it('should reverse a 2 digits number', async () =>
    {
        expect(reverseNumber(12)).to.equals(21);
    });

    it('should reverse a 3 digits number', async () =>
    {
        expect(reverseNumber(123)).to.equals(321);
    });

    it('should reverse a 4 digits number', async () =>
    {
        expect(reverseNumber(1234)).to.equals(4321);
    });

    it('should reverse a 5 digits number', async () =>
    {
        expect(reverseNumber(12345)).to.equals(54321);
    });

    it('should ignore the zeros after swapping them to the beginning', async () =>
    {
        expect(reverseNumber(120)).to.equals(21);
    });

    it('should reverse and preserve the - sign', async () =>
    {
        expect(reverseNumber(-12)).to.equals(-21);
    });
    it('should return 0 when the number is 1534236469', async () =>
    {
        expect(reverseNumber(1534236469)).to.equals(0);
    });

});
