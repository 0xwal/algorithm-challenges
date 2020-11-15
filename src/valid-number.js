function easyWay(s)
{
    if (s === ' ') {
        return false;
    }
    s = s.trim();
    return !isNaN(Number(s));
}

module.exports = function (s)
{
    return easyWay(s);
}
