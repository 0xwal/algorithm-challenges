const expect = require('chai').expect;
const isCorrectUsageOfCapital = require('../src/detect-correct-capial-usage');

//implementation of https://leetcode.com/problems/detect-capital
//agnostic implementation

describe('isCorrectUsageOfCapital', () =>
{
    it('should return true for "HELLO"', async () =>
    {
        expect(isCorrectUsageOfCapital('HELLO')).to.be.true;
    });

    it('should return true for "Hello"', async () =>
    {
        expect(isCorrectUsageOfCapital('Hello')).to.be.true;
    });

    it('should return false for "HeLlo"', async () =>
    {
        expect(isCorrectUsageOfCapital('HeLlo')).to.be.false;
    });

    it('should return false for "hello"', async () =>
    {
        expect(isCorrectUsageOfCapital('hello')).to.be.true;
    });

    it('should return false for "heLlo"', async () =>
    {
        expect(isCorrectUsageOfCapital('heLlo')).to.be.false;
    });
});
