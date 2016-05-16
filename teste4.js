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
    .url('http://stackoverflow.com')
    .setValue('*[name="q"]','webdriverio')
    .keys(['Enter']) //press Enter Key
    .getTitle().then(function(title) {
        console.log('the title is: ', title);
    })
    .end();