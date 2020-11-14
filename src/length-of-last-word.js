function easyWay(sentence)
{
    return sentence
        .trim()
        .split(' ')
        .reverse()[0]
        .length;
}

module.exports = function (sentence)
{
    let beingSerious = false;
    let lengthOfLastWord = 0;
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (!beingSerious && sentence[i] === ' ') {
            continue;
        }

        beingSerious = true;

        if (sentence[i] === ' ') {
            return lengthOfLastWord;
        }

        if (i === 0) {
            return ++lengthOfLastWord;
        }

        lengthOfLastWord++;
    }
    return 0;
}
