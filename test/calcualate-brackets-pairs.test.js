const expect = require('chai').expect;
const calculateBracketPair = require('../src/calcuate-bracket-pair');


describe('calculateBracketPair', () =>
{
    it('should return #1 if input "[]"', async () =>
    {
        expect(calculateBracketPair("[]")).to.equals(1);
    });

    it('should return #2 if input "[[]]"', async () =>
    {
        expect(calculateBracketPair("[[]]")).to.equals(2);
    });

    it('should return #4 if input "[[[[]]]]"', async () =>
    {
        expect(calculateBracketPair("[[[[]]]]")).to.equals(4);
    });

    it('should return #200 for 200 pairs brackets', async () =>
    {
        let input = `${String('[').repeat(200)}${String(']').repeat(200)}`;
        expect(calculateBracketPair(input)).to.equals(200);
    });

    it('should return #-1 if a bracket has no pair', async () =>
    {
        expect(calculateBracketPair("[[[[]]]")).to.equals(-1);
    });

    it('should return #-1 when brackets are even and a bracket has no pair', async () =>
    {
        expect(calculateBracketPair("[[[[[]]]")).to.equals(-1)
        expect(calculateBracketPair("[[[]]]]]")).to.equals(-1)
    });
});
