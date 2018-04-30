var assert = require('assert');
var fs = require('fs');

describe('Google Home Page, searching stuffs', () => {
    before(() => {
        browser.cdp('Network', 'enable')

    });

    it('Should navigate to Google Home Page and searching stuffs', () => {
    
        browser.url('http://google.com');
        $('#lst-ib').setValue('Dam');
        //$('.jsb input[type="submit"]').click();
        browser.keys('\uE007');
        //browser.scroll(0,500);
        //$$('.r a')[1].click();
        //browser.saveScreenshot('googleDam.png'); 
    });
});