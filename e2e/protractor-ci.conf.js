var config = require('./protractor.conf.js').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu'],
    binary: require('puppeteer').executablePath(),
  },
};

exports.config = config;
