module.exports = function (firstText, secondText)
{
    let firstOccurrences = firstText.split(' ');
    let secondOccurrences = secondText.split(' ');
    let areTheyHaveSameWordsCount =
        firstOccurrences.length === secondOccurrences.length;

    if (!areTheyHaveSameWordsCount) {
        return false;
    }

    for (let i = 0; i < firstOccurrences.length; i++) {
        if (firstOccurrences[i].length !== secondOccurrences[i].length) {
            return false;
        }
    }

    return true;
}
