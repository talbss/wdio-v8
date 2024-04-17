describe('My mocha timeout tests - global overwrite', function () {
    this.timeout(6000);

    it('should not timeout: pause > 3000 and < 6000', async function() {
        console.log('test timeout: ' + this.test._timeout);
        await browser.pause(5000);
        console.log('test timeout: ' + this.test._timeout);
    })

})

describe('My mocha timeout tests - per it overwrite', function () {

    it('should not timeout: pause > 3000 and < 6000', async function() {
        console.log('test timeout before overwrite: ' + this.test._timeout);
        this.timeout(6000);
        console.log('test timeout after overwrite: ' + this.test._timeout);
        await browser.pause(5000);
    })

})