const MAX_INT32 = 2147483647;

function isNegativeNumber(number) {
    return number < 0;

}

module.exports = function (number)
{
    let isNegative = isNegativeNumber(number);

    number = isNegative ? (-1 * number) : number;
    let result = number % 10;

    while ((number = Math.floor(number / 10))) {
        result = (result * 10) + number % 10;
        if (result > MAX_INT32) {
            return 0;
        }
    }

    return isNegative ? -result : result;
}
