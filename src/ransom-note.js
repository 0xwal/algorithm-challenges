module.exports = function (ransomNote, magazine)
{
    const ransomNoteObject = {};
    const magazineObject = {};

    for (const ransomNoteElement of ransomNote) {
        ransomNoteObject[ransomNoteElement] = (ransomNoteObject[ransomNoteElement] + 1 || 1);
    }

    for (const magazineElement of magazine) {
        magazineObject[magazineElement] = (magazineObject[magazineElement] + 1 || 1);
    }

    for (const key in ransomNoteObject) {
        if (!magazineObject[key] || magazineObject[key] < ransomNoteObject[key]) {
            return false;
        }
    }

    return true;
}
