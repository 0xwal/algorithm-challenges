const expect = require('chai').expect;
const validNumber = require('../src/valid-number');

//implementation of https://leetcode.com/problems/valid-number

describe('validNumber', () =>
{
    it('"0" should be valid number and return "true"', async () =>
    {
        expect(validNumber('0')).to.be.true;
    });

    it('" 0.1" should be valid number and return "true"', async () =>
    {
        expect(validNumber(' 0.1')).to.be.true;
    });

    it('"abc" should be invalid number and return "false"', async () =>
    {
        expect(validNumber('abc')).to.be.false;
    });

    it('"1 a" should be invalid number and return "false"', async () =>
    {
        expect(validNumber('1 a')).to.be.false;
    });

    it('"2e10" should be valid number and return "true"', async () =>
    {
        expect(validNumber('2e10')).to.be.true;
    });

    it('" -90e3   " should be valid number and return "true"', async () =>
    {
        expect(validNumber(' -90e3   ')).to.be.true;
    });

    it('" 1e" should be invalid number and return "false"', async () =>
    {
        expect(validNumber(' 1e')).to.be.false;
    });

    it('"e3" should be invalid number and return "false"', async () =>
    {
        expect(validNumber('e3')).to.be.false;
    });

    it('" 6e-1" should be valid number and return "true"', async () =>
    {
        expect(validNumber(' 6e-1')).to.be.true;
    });

    it('" 99e2.5 " should be valid number and return "true"', async () =>
    {
        expect(validNumber(' 6e-1')).to.be.true;
    });

    it('" 99e2.5 " should be invalid number and return "false"', async () =>
    {
        expect(validNumber(' 99e2.5 ')).to.be.false;
    });

    it('" " should be invalid and return "false"', async () =>
    {
        expect(validNumber(' ')).to.be.false;
    });

    it('"53.5e93" should be valid and return "true"', async () =>
    {
        expect(validNumber('53.5e93')).to.be.true;
    });

    it('"  --6  " should be invalid and return "false"', async () =>
    {
        expect(validNumber('  --6  ')).to.be.false;
    });

    it('"-+3" should be invalid and return "false"', async () =>
    {
        expect(validNumber('-+3')).to.be.false;
    });

    it('"95a54e53" should be invalid and return "false"', async () =>
    {
        expect(validNumber('95a54e53')).to.be.false;
    });
});
