// karma.conf.js
      // eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = function (config) {
  // If using Puppeteer to manage Chromium, uncomment the following line:
  // process.env.CHROME_BIN = require('puppeteer').executablePath();

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-jasmine'),
            // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-chrome-launcher'),
            // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-jasmine-html-reporter'),
            // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('karma-coverage'),
            // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('@angular-devkit/build-angular/plugins/karma'),
    ],

    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },

    coverageReporter: {
      dir: path.join(__dirname, './coverage/book-network-ui'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },

    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    // Use the custom launcher for CI environments
    browsers: ['ChromeHeadlessCI'],

    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-extensions',
          '--disable-dev-shm-usage',
          '--headless',
          '--remote-debugging-port=9222',
        ],
      },
    },

    singleRun: true,
    restartOnFileChange: false,
  });
};
