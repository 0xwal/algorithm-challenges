const expect = require('chai').expect
const lowerCase = require('../src/lower-case');

//implementation of https://leetcode.com/problems/to-lower-case/
//Language agnostic

describe('lowerCase', () =>
{
    it('should lower case the text', async () =>
    {
        expect(lowerCase('Hello World')).to.equals('hello world');
    });

    it('should do nothing to lower case string', async () =>
    {
        expect(lowerCase('hello world')).to.equals('hello world');
    });
});
