module.exports = function (n, start)
{
    let result = 0;

    let i = start === 0 ? 1 : 0;

    for (; i < n; i++) {
        let current = (i << 1) + start;
        result = result ^ current;
    }

    return result;
}
