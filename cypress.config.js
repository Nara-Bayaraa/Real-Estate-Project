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
      openMode: 0,
    },

    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      reportDir: "reports/mochawesome",
      overwrite: false,
      html: false,
      json: true,
    },

    setupNodeEvents(on, config) {},
  },
});
