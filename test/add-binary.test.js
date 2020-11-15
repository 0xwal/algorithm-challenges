const expect = require('chai').expect;
const addBinary = require('../src/add-binary');

//implementation of https://leetcode.com/problems/add-binary

describe('addBinary', () =>
{
    it('should be able to parse the given binary as string and return the sum', async () =>
    {
        expect(addBinary('11', '1')).to.equals("100");
        expect(addBinary('1010', '1011')).to.equals("10101");
    });

    it('should be able to parse long', async () =>
    {
        const firstNumber = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
        const secondNumber = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
        expect(addBinary(firstNumber, secondNumber)).to.equals('110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000');
    });
});
