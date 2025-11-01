const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  }, 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true
  },
});
