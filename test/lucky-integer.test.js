const expect = require('chai').expect;
const luckyInteger = require('../src/lucky-integer');

//implementation of https://leetcode.com/problems/find-lucky-integer-in-an-array

describe('luckyInteger', () =>
{
    it('should return #2', async () =>
    {
        expect(luckyInteger([2, 2, 3, 4, 5])).to.equals(2);
    });

    it('should return #3', async () =>
    {
        expect(luckyInteger([2, 3, 3, 3, 4, 5])).to.equals(3);
    });

    it('should return #-1 when there is no duplicate for the number', async () =>
    {
        expect(luckyInteger([2, 3, 4, 5])).to.equals(-1);
    });

    it('should return #-1 when the duplicated number count not same the number itself', async () =>
    {
        expect(luckyInteger([2, 3, 3, 4, 5])).to.equals(-1);
    });

    it('should return the largest when there are multiple lucky numbers', async () =>
    {
        expect(luckyInteger([1, 2, 2, 3, 3, 3])).to.equals(3);
    });
});
