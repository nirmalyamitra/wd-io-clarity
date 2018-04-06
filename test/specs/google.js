var assert = require('assert');

describe('Google page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
        browser.saveScreenshot('google.png');
    });
});