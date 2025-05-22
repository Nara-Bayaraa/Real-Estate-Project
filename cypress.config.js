require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://dev.delekhomes.com/', 
    setupNodeEvents(on, config) {
  
    },
  },
});
