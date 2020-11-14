module.exports = function (ransomNote, magazine)
{
    const magazineArray = magazine.split('');
    let foundCount = 0;

    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazineArray.indexOf(ransomNote[i]);

        if (index !== -1) {
            foundCount++;
            magazineArray.splice(index, 1);
        }
    }
    return foundCount === ransomNote.length;
}
