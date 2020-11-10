module.exports = function (sentence)
{
    return sentence.trim()
        .split(' ')
        .reverse()
        .filter(r => r)
        .join(' ');
}
