var assert = require('assert');

describe('Google page', () => {
    before(() => {
        browser.cdp('Network', 'enable')

    });
    it('should have load Google Home Page', () => {
        const start = Date.now();
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
        //browser.saveScreenshot('google.png');
        console.log(`Normal Google Loading with ${Date.now()-start} ms`);
    });

    it('Should load Google on 3G speed', () => {
        browser.cdp('Network', 'clearBrowserCache');
        browser.cdp('Network', 'emulateNetworkConditions', {
            offline: false,
            latency: 0,
            downloadThroughput: 75000,
            uploadThroughput: 25000,
            connnectionType: 'cellular3g'
        });
        const start = Date.now();
        browser.url('/');
        console.log(`Google Loading Slow with ${Date.now()-start} ms`);
    });

    it('should take JS coverage', () => {
        /**
         * enable necessary domains
         */
        browser.cdp('Profiler', 'enable')
        browser.cdp('Debugger', 'enable')
    
        /**
         * start test coverage profiler
         */
        browser.cdp('Profiler', 'startPreciseCoverage', {
            callCount: true,
            detailed: true
        })
    
        browser.url('/')
    
        /**
         * capture test coverage
         */
        const { result } = browser.cdp('Profiler', 'takePreciseCoverage')
        const coverage = result.filter((res) => res.url !== '')
        console.log(coverage)
    });

});