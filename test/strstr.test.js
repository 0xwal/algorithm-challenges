const expect = require('chai').expect;
const strstr = require('../src/strstr');

//implementation of https://leetcode.com/problems/implement-strstr
//Language agnostic and avoid builtin functions.

describe('strstr', () =>
{
    it('should find the index of #1 char needle', async () =>
    {
        expect(strstr('Hello World', 'l')).to.equals(2);
    });

    it('should find the index of #2 chars needle', async () =>
    {
        expect(strstr('Hello World', 'or')).to.equals(7);
    });

    it('should find the index of #3 chars needle', async () =>
    {
        expect(strstr('Hello World', 'Wor')).to.equals(6);
    });

    it('should find the index of #4 chars needle', async () =>
    {
        expect(strstr('Hello World', 'ello')).to.equals(1);
    });

    it('should find the index of #4 chars needle when the letter casing is not same', async () =>
    {
        expect(strstr('Hello World', 'ELLO')).to.equals(1);
    });

    it('should return 0 when we provide an empty string in the needle', async () =>
    {
        expect(strstr('Hello World', '')).to.equals(0);
    });

    it('should return -1 when the needle is not found', async () =>
    {
        expect(strstr('Hello World', 'Hi')).to.equals(-1);
    });
});
