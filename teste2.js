var webdriverio = require('webdriverio'),
    client;

client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
client.init();
client
    .url('https://github.com/')
    .getElementSize('.header-logo-wordmark').then(function (result) {
        console.log(result.height === 26, 'logo height should be 32px');
        console.log(result.width  === 89, 'logo width should be 89px');
    })
    .getTitle().then(function (title) {
        console.log(title === 'GitHub · Where software is built', 'title should be "GitHub · Where software is built"');
    })
    .getCssProperty('a[href="/plans"]', 'color').then(function (result) {
        console.log(result.value === 'rgba(64,120,192,1)', 'color is "' + result + '" but should be "rgba(64,120,192,1)"');
    });



client.end();
