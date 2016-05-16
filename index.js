var webdriverio = require('webdriverio'),
    client = webdriverio.remote({
        desiredCapabilities: {
            browserName: 'chrome',
            version: '27',
            platform: 'XP',
            name: 'This is an example test'
        },
        host: 'localhost',
        port: 9090
      }).init();

var tmp = client
    .url('http://google.com')
    .setValue('*[name="q"]','webdriverio')
    .click('*[name="btnG"]')
    .getTitle().then(function(title) {
        console.log('ok........', title);
    })
    .end();

