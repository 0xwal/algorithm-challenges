module.exports = function (numbers)
{
    let n_result = 0;
    for (const number of numbers) {
        n_result ^= number;
    }
    return n_result;
}
