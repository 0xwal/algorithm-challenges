const expect = require('chai').expect;
const removeElement = require('../src/remove-element');

//implementation of https://leetcode.com/problems/remove-element


describe('removeElement', () =>
{
    it('should remove given element for the given array without changing the array', async () =>
    {
        let nums = [3, 2, 2, 3];
        expect(removeElement(nums, 3)).to.equals(2);
        expect(nums).to.deep.equals([2, 2]);
    });

    it('should remove given element and without changing the reference', async () =>
    {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        expect(removeElement(nums, 2)).to.equals(5);
        expect(nums).to.deep.equals([0, 1, 3, 0, 4]);
    });
});
