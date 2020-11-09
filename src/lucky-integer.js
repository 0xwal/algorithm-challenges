//We covered this in test, so we will refactor it :).
module.exports = function (array)
{
    const sameNumbers = {};
    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (sameNumbers[current]) {
            continue;
        }

        for (let j = 0; j < array.length; j++) {
            const currentInner = array[j];
            if (current === currentInner) {
                if (!sameNumbers[current]) {
                    sameNumbers[current] = 0;
                }
                sameNumbers[current]++;
            }
        }
    }

    let largest = 0;
    for (const sameNumbersKey in sameNumbers) {
        let currentNumber = sameNumbers[sameNumbersKey];
        if (sameNumbersKey == currentNumber) {
            if (currentNumber > largest) {
                largest = currentNumber;
            }
        }
    }
    if (largest !== 0) {
        return largest;
    }
    return -1;
}
