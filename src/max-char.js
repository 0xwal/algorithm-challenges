module.exports = function (text)
{
    let chars = {};
    for (const textElement of text) {
        if (textElement === ' ') {
            continue;
        }
        if (chars[textElement] === undefined)
            chars[textElement] = 0;
        chars[textElement]++;
    }

    let num = 0;
    let c = '';
    for (const char in chars) {
        if (chars[char] > num) {
            num = chars[char];
            c = char;
        }
    }
    return c;
}
