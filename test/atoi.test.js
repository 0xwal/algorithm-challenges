const expect = require('chai').expect;
const atoi = require('../src/atoi');

//implementation of https://leetcode.com/problems/string-to-integer-atoi/submissions/
//trying to avoid any language specific native functions. So can ported to any language with basic operations.

describe('atoi', () =>
{
    it('should parse one digit number', async () =>
    {
        expect(atoi('5')).to.equals(5);
    });

    it('should parse two digits numbers', async () =>
    {
        expect(atoi('64')).to.equals(64);
    });
    it('should parse three digits numbers', async () =>
    {
        expect(atoi('123')).to.equals(123);
    });

    it('should parse the number and ignore whitespace before and after', async () =>
    {
        expect(atoi(' 456 ')).to.equals(456);
        expect(atoi(' 45 ')).to.equals(45);
        expect(atoi(' 4 ')).to.equals(4);
    });

    it('should parse the negative numbers', async () =>
    {
        expect(atoi('-223')).to.equals(-223);
        expect(atoi('-5')).to.equals(-5);
        expect(atoi(' -223 ')).to.equals(-223);
        expect(atoi(' -364')).to.equals(-364);
    });

    it('should parse numbers and ignore any words after', async () =>
    {
        expect(atoi('456 this is word')).to.equals(456);
        expect(atoi('-456 this is word')).to.equals(-456);
    });

    it('should return 0 if value starts with non numeric', async () =>
    {
        expect(atoi('this is a word 456')).to.equals(0);
        expect(atoi('this is word -456')).to.equals(0);
    });

    it('should return -2147483648 when the number exceed the -INT32 limit', async () =>
    {
        expect(atoi('-91283472332')).to.equals(-2147483648);
        expect(atoi('-2147483649')).to.equals(-2147483648);
        expect(atoi('-2147483647')).to.equals(-2147483647);
    });

    it('should return 2147483647 when the number exceed INT32', async () =>
    {
        expect(atoi('21474836460')).to.equals(2147483647);
        expect(atoi('2147483648')).to.equals(2147483647);
    });


    it('should parse decimal number and convert it to integer', async () =>
    {
        expect(atoi('3.14159')).to.equals(3);
    });

    it('should ignore the + and parse the number', async () =>
    {
        expect(atoi('+3')).to.equals(3);
    });

    it('should return 0 when + and - are prefixed', async () =>
    {
        expect(atoi('+-12')).to.equals(0);
        expect(atoi('-+12')).to.equals(0);
    });

    it('should return 0 when the value has non-numeric after the number', async () =>
    {
        expect(atoi('00000-42a1234')).to.equals(0);
    });

    it('should discard any number after an invalid numeric value', async () =>
    {
        expect(atoi("  -0012a42")).to.equals(-12);
        expect(atoi("-5-")).to.equals(-5);
    });

    it('should return 0 when the has valid symbol and after that value has non numeric', async () =>
    {
        expect(atoi("  +  413")).to.equals(0);
    });

    it('should return zero when the symbol is repeated', async () =>
    {
        expect(atoi("++1")).to.equals(0);
        expect(atoi("--1")).to.equals(0);
    });

    it('should return 0 when providing an empty value', async () =>
    {
        expect(atoi('')).to.equals(0);
    });
});
