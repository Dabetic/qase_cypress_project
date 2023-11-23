const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000, pageLoadTimeout: 15000,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
