const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://dev-browser.ihtsdotools.org/?",
    viewportWidth: 1920,
    viewportHeight: 1080,
    testIsolation: false,
  },
});
