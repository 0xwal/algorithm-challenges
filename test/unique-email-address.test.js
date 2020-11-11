const expect = require('chai').expect;
const uniqueEmailAddress = require('../src/unique-email-address');

describe('uniqueEmail', () =>
{

    it('should be able to return all unique emails count', async () =>
    {
        expect(uniqueEmailAddress(['localEmail_1@domain.com', 'localEmail_2@domain.com'])).to.equals(2);
    });

    it('should consider email with dots', async () =>
    {
        expect(uniqueEmailAddress(['localemail@domain.com', 'local.email@domain.com'])).to.equals(1);
    });

    it('should ignore the letter case sensitivity of the local name', async () =>
    {
        expect(uniqueEmailAddress(['localEmail@domain.com', 'local.email@domain.com'])).to.equals(1);
    });

    it('should consider email with dot(s) as an alias to the email without dot(s)', async () =>
    {
        expect(uniqueEmailAddress(['localemail@domain.com', 'local.e.mail@domain.com', 'local.e.mail.@domain.com', 'local.email@domain.com'])).to.equals(1);
    });

    it('should consider the domain with dots not same domain without dots', async () =>
    {
        expect(uniqueEmailAddress(['localemail@domain.com', 'localemail@do.main.com'])).to.equals(2);
    });

    it('should consider the local name email with plus and the next characters as an alias for the email', async () =>
    {
        expect(uniqueEmailAddress(['localemail@domain.com', 'localemail+extra@domain.com'])).to.equals(1);
    });
});
