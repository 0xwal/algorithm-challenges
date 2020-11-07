const {expect} = require('chai');
const twoSum = require('../src/two-sum');


describe('twoSum', () =>
{
    it('should calculate the sum of target #9', async () =>
    {
        let target = 9;
        let arr = [2, 7, 11, 15];
        expect(twoSum(arr, target)).to.deep.equals([0, 1]);
    });

    it('should calculate the sum of target #6', async () =>
    {
        let target = 6;
        let arr = [3, 2, 4];
        expect(twoSum(arr, target)).to.deep.equals([1, 2]);
    });

    it('should get that target #6 of [3,2,3]', async () =>
    {
        let target = 6;
        let arr = [3, 2, 3];
        expect(twoSum(arr, target)).to.deep.equals([0, 2]);
    });
});
