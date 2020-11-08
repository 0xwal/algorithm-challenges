module.exports = function (number)
{
    let isNegative = false;
    if (number < 0) {
        isNegative = true;
    }
    number = Math.abs(number);
    let result = number % 10;
    while ((number = Math.floor(number / 10))) {
        result = (result * 10) + number % 10;
        if (result > 2147483647) {
            return 0;
        }
    }

    return isNegative ? -result : result;
}
