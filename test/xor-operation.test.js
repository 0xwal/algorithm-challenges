const expect = require('chai').expect;
const xorOperation = require('../src/xor-operation');

//implementation of https://leetcode.com/problems/xor-operation-in-an-array
//Language agnostic

describe('xorOperation', () =>
{
    it('should return #8', async () =>
    {
        expect(xorOperation(5, 0)).to.equals(8);
    });

    it('should return #7', async () =>
    {
        expect(xorOperation(1, 7)).to.equals(7);
    });

    it('should return #2', async () =>
    {
        expect(xorOperation(10, 5)).to.equals(2);
    });

    it('should return #6', async () =>
    {
        expect(xorOperation(3, 0)).to.equals(6);
    });
});
