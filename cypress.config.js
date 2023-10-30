const { defineConfig } = require ('cypress');
const fs = require ('fs-extra');
const path = require  ('path');
//import {configurePlagin} from "cypress-mongodb";
const {configurePlugin} = require ("cypress-mongodb");


module.exports = defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://127.0.0.1:27017',
      database: 'test'
    }
  },
 
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 6000,
   // baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 1,
      runMode: 1
    },
   // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      on('task', 
      {log(message) {
        console.log(message);
         return null },

      savedUrl({ url, nameOfJsonFile }) {
        const filePath = path.join(config.fixturesFolder, `${nameOfJsonFile}.json`)
        fs.outputJsonSync(filePath, { url })
        return null
      }
    })

      const newUrl = config.env.urlFromCli || 'https://www.guru99.com'
      config.baseUrl = newUrl


      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      
        configurePlugin(on);
    

      return config
    },
  },
});
