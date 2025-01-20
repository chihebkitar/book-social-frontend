module.exports = function (config) {
    config.set({
      // ... other configurations ...
  
      browsers: ['ChromeHeadless'],
  
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
  
      // Use the custom launcher for CI environments
      singleRun: true,
      restartOnFileChange: false,
  
      // ... other configurations ...
    });
  };
  