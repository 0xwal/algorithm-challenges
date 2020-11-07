function byLoop(array, target) {
    let out = [];
    let numbersLength = array.length;
    for (let i = 0; i < numbersLength; i++) {
        let current = array[i];

        for (let j = 0; j < numbersLength; j++) {
            if (i === j) {
                continue;
            }
            let sum = current + array[j];
            if (sum === target) {
                out.push(i);
                out.push(j);
                return out;
            }
        }
    }

    return out;
}

module.exports = function (array, target)
{
    return byLoop(array, target);
}
