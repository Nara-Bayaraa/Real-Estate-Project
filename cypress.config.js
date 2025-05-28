require("dotenv").config();
const { defineConfig } = require("cypress");
const { password } = require("./cypress/support/helpers/generate-user");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com",
     defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    
    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
  },
    setupNodeEvents(on, config) {},
  },
});
