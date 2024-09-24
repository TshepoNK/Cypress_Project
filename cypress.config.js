const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('after:run', (results) => {
        console.log(`Tests completed: ${results.total} - Passed: ${results.passed} - Failed: ${results.failed}`);
      });
      return config; // Return the modified config
    },
    baseUrl: 'http://127.0.0.1:8080',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
    },
    animationDistanceThreshold: 5,
    chromeWebSecurity: true,
    defaultCommandTimeout: 4000,
    downloadsFolder: 'cypress/downloads',
    excludeSpecPattern: '*.hot-update.js',
    execTimeout: 60000,
    fixturesFolder: 'cypress/fixtures',
    pageLoadTimeout: 60000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    taskTimeout: 60000,
    testingType: 'e2e',
    video: false,
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,
  },
});
