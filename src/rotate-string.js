function rotate(value, index)
{
    const leftPortion = value.substr(0, index + 1);
    const rightPortion = value.substr(index + 1);
    return rightPortion + leftPortion;
}


module.exports = function (value, rotatedValue)
{
    if (!value && !rotatedValue) {
        return true;
    }
    for (let i = 0; i < value.length; i++) {
        let rotated = rotate(value, i);
        if (rotated === rotatedValue) {
            return true;
        }
    }
    return false;
}
