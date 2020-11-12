const expect = require('chai').expect;
const singleNumber = require('../src/single-number');

//implementation of https://leetcode.com/problems/single-number/
//Language agnostic

describe('singleNumber', () =>
{
    it('should return #2 as it is not repeated in the given array', async () =>
    {
        expect(singleNumber([1, 1, 2, 3, 3])).to.equals(2);
    });

    it('should return #3 as it is not repeated in the given array', async () =>
    {
        expect(singleNumber([1, 1, 2, 2, 3])).to.equals(3);
    });

    it('should return #2 as it is not repeated in the given array', async () =>
    {
        expect(singleNumber([1, 1, 3, 2, 3])).to.equals(2);
    });
});
