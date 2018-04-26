var assert = require('assert');

describe('YouTube page', () => {
    before(() => {
        browser.cdp('Network', 'enable')

    });
    it('should have load YouTube Home Page', () => {
        const start = Date.now();
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'YouTube');
        //browser.saveScreenshot('YouTube.png');
        console.log(`Normal YouTube Loading took ${Date.now()-start} ms`);
    });

    it('should have load YouTube cached Home Page', () => {
        const start = Date.now();
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'YouTube');
        //browser.saveScreenshot('YouTube.png');
        console.log(`Cached YouTube Loading took ${Date.now()-start} ms`);
    });

    it('Should load YouTube on 3G speed', () => {
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
        console.log(`YouTube Loading in 3G speed took ${Date.now()-start} ms`);
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