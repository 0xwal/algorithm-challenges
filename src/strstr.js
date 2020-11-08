module.exports = function (haystack, needle)
{
    let needleLength = needle.length;
    let matchedLength = 0;

    haystack = haystack.toLowerCase();
    needle = needle.toLowerCase();

    if (needleLength === 0) {
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {

        matchedLength = 0;
        for (let j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
            matchedLength++;
            if (matchedLength >= needleLength) {
                return i;
            }
        }


    }
    return -1;
}
