/*
* We have a word length
* For a capital we will have a true (1)
* For a small we will have a false (0)
*
* Valid capital casing as follows *according to the challenge:
* * All Capitals
* * Starts with Capitals and the rest is small
* * All Small
*
* Else should return false
* */

const FIRST_CAPITAL_LETTER_PRICE = 20;

function isCapitalLetter(charCode)
{
    return (charCode & 32) === 0;
}

module.exports = function (word)
{

    let capitalSum = 0;

    let wordLength = word.length;

    const correctValues = [
        (wordLength + FIRST_CAPITAL_LETTER_PRICE),
        FIRST_CAPITAL_LETTER_PRICE + 1,
        0
    ];

    for (let i = 0; i < wordLength; i++) {
        let isCapital = isCapitalLetter(word.charCodeAt(i));

        if (i === 0 && isCapital) {
            capitalSum += FIRST_CAPITAL_LETTER_PRICE;
        }

        capitalSum += isCapital;
    }

    for (let i = 0; i < correctValues.length; i++) {
        if (capitalSum === correctValues[i]) {
            return true;
        }
    }

    return false;
}
