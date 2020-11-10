module.exports = function (n, start)
{
    let result = 0;

    for (let i = 0; i < n; i++) {
        let current = (i << 1) + start;
        result = result ^ current;
    }


    return result;
}
