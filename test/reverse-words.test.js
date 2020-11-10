const expect = require('chai').expect;
const reverseWords = require('../src/reverse-words');

//implementation of https://leetcode.com/problems/reverse-words-in-a-string

describe('reverseWords', () =>
{
    it('should reverse the given words', async () =>
    {
        expect(reverseWords('Hello World')).to.equals('World Hello');
    });

    it('should remove the leading spaces when reversing the word', async () =>
    {
        expect(reverseWords('     Hello World')).to.equals('World Hello');
    });

    it('should remove the trailing spaces when reversing the word', async () =>
    {
        expect(reverseWords('Hello World    ')).to.equals('World Hello');
    });

    it('should remove any extra spaces and keep only one space between the words', async () =>
    {
        // expect(reverseWords('Hello     World')).to.equals('World Hello');
        expect(reverseWords('Hello     World      Now')).to.equals('Now World Hello');
    });

});
