const CAPITAL_BIT_MASK = 0b00100000;

function isCapitalLetter(currentCharCode)
{
    return (currentCharCode & CAPITAL_BIT_MASK) === 0;
}

module.exports = function (str)
{
    let out = '';

    for (let i = 0; i < str.length; i++) {
        let currentCharCode = str.charCodeAt(i);

        if (isCapitalLetter(currentCharCode)) {
            currentCharCode = currentCharCode | CAPITAL_BIT_MASK;
        }

        out += String.fromCharCode(currentCharCode);
    }

    return out;
}
