require("dotenv").config();
// loads the variables from .env into process.env
const { defineConfig } = require("cypress");
// defineConfig: Cypress helper that wraps the config object

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com",
    // baseUrl: the app under test; cy.visit("/") goes here
    defaultCommandTimeout: 10000,
    // defaultCommandTimeout: wait up to 10s for each command
    watchForFileChanges: false,
    // watchForFileChanges: don't rerun specs on every file save
    video: false,
    // video: no video recording
    viewportWidth: 1280,
    // viewportWidth: browser width in pixels
    viewportHeight: 720,
    // viewportHeight: browser height in pixels
    env: {
      email: process.env.REALTOR_EMAIL,
      // email holds the realtor login email from .env (used by realtorLogin)
      password: process.env.REALTOR_PASSWORD,
      // password holds the realtor password from .env (used by realtorLogin)
      userEmail: process.env.USER_EMAIL,
      // userEmail holds the regular user login email from .env (used by userLogin)
      userPassword: process.env.USER_PASSWORD,
      // userPassword holds the regular user password from .env (used by userLogin)
    },

    retries: {
      runMode: 2,
      // runMode: retry a failed test up to 2 times in cypress run
      openMode: 0,
      // openMode: no retries in cypress open
    },

    setupNodeEvents(on, config) {},
    // setupNodeEvents: place for plugins; empty for now
  },

  reporter: "mochawesome",
  // reporter: default for local runs; cypress-parallel's CLI flag can now override it
  reporterOptions: {
    charts: true,
    // charts: adds charts to the mochawesome report
    reportDir: "reports/mochawesome",
    // reportDir: folder where JSON reports are saved
    overwrite: false,
    // overwrite: keeps one file per spec instead of replacing
    html: false,
    // html: no per-spec HTML; the workflow builds one merged report
    json: true,
    // json: writes JSON, which the Merge Mochawesome Reports step needs
  },
});
