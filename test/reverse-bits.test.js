const expect = require('chai').expect;
const reverseBits = require('../src/reverse-bits');

//implementation of https://leetcode.com/problems/reverse-bits
//Language agnostic

describe('reverseBits', () =>
{
    it('should reverse the bits', async () =>
    {
        expect(reverseBits(0b00000010100101000001111010011100)).to.equals(0b00111001011110000010100101000000);
        expect(reverseBits(0b11111111111111111111111111111101)).to.equals(0b10111111111111111111111111111111);
    });
});
