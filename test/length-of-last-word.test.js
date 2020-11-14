const expect = require('chai').expect;
const lengthOfLastWord = require('../src/length-of-last-word');

//implementation of https://leetcode.com/problems/length-of-last-word

describe('lengthOfLastWorld', () =>
{
    it('should return length of "world" as 5', async () =>
    {
        expect(lengthOfLastWord('Hello World')).to.equals(5);
    });

    it('should return 0 when the sentence is a space', async () =>
    {
        expect(lengthOfLastWord(' ')).to.equals(0);
    });

    it('should return 1 when the sentence has trailing a space', async () =>
    {
        expect(lengthOfLastWord('a ')).to.equals(1);
    });
});
