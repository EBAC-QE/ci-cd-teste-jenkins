const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mocha-allure-reporter',
  reporterOptions: {
  resultsDir: 'allure-results'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true
  },
});
