function cleanDots(value)
{
    value = value.replace('.', '')
    if (value.indexOf('.') !== -1) {
        value = cleanDots(value);
    }
    return value;
}

function cleanPlus(value)
{
    return value.substr(0, value.indexOf('+'));
}

module.exports = function (emails)
{
    let uniqueEmails = [];

    for (const email of emails) {
        let lowerCasedEmail = email.toLowerCase();
        const [local, domain] = lowerCasedEmail.split('@');
        let currentLocalEmail = cleanDots(local);

        if (currentLocalEmail.indexOf('+') !== -1) {
            currentLocalEmail = cleanPlus(currentLocalEmail);
        }

        let fullEmail = `${currentLocalEmail}@${domain}`;

        if (uniqueEmails.includes(fullEmail)) {
            continue;
        }

        uniqueEmails.push(fullEmail);
    }

    return uniqueEmails.length;
}
