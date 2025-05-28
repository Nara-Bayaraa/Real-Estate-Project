require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com",
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    env: {
      email: process.env.REALTOR_EMAIL,
      password: process.env.REALTOR_PASSWORD,
    },

    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mochawesome",
        overwrite: false,
        html: false,
        json: true,
      },
    },

    setupNodeEvents(on, config) {},
  },
});
