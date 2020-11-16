function easyWay(input)
{
    const inputLength = input.length;

    let openBracketsCount = 0;
    let closeBracketsCount = 0;

    for (let i = 0; i < inputLength; i++) {
        if (input[i] === '[') {
            openBracketsCount++;
        }
        else if (input[i] === ']') {
            closeBracketsCount++;
        }
    }

    if (openBracketsCount !== closeBracketsCount) {
        return -1;
    }

    return openBracketsCount;
}

module.exports = function (input)
{
    return easyWay(input);
}
