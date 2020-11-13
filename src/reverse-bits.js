module.exports = function (n)
{
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
}
