const MAX_SIGNED_INTEGER = 2147483647;

function notANumber(currentChar) {
    return currentChar < '0' || currentChar > '9';
}


function isSignSymbol(currentChar) {
    return currentChar === '-' || currentChar === '+';
}

function isSpace(currentChar) {
    return currentChar === ' ';
}

function addDigit(result, currentCharCode) {
    return (result * 10) + currentCharCode;
}

module.exports = function (value)
{
    let total = 0;
    let hasAResult = false;
    let amISeriousAboutTheValidNumbers = false;


    const loop = value.length;
    let isSign = false;

    for (let i = 0; i < loop; i++) {
        const currentChar = value[i];

        if (!amISeriousAboutTheValidNumbers && isSpace(currentChar)) {
            continue;
        }

        if (!amISeriousAboutTheValidNumbers && isSignSymbol(currentChar)) {
            isSign = currentChar === '-';
            amISeriousAboutTheValidNumbers = true;
            continue;
        }

        amISeriousAboutTheValidNumbers = true;

        if (!hasAResult && notANumber(currentChar)) {
            return 0;
        }

        if (hasAResult && notANumber(currentChar)) {
            break;
        }

        const currentCharCode = currentChar - '0';
        total = addDigit(total, currentCharCode);

        hasAResult = true;

        if (total >= MAX_SIGNED_INTEGER) {
            total = (MAX_SIGNED_INTEGER + isSign);
            break;
        }
    }
    if (isSign) {
        total = 0 - total;
    }
    return total;
}
