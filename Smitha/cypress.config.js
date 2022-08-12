const { defineConfig } = require("cypress");
const xlsx=require("xlsx");
const fs=require("fs")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task",{
        parseXlsx({filePath}){
          return new Promise((resolve, reject) => {
        let contents = xlsx.parse(fs.readFileSync(filePath));
        if(contents == "undefined") {
          reject("File contains no contents");
        } else {
            let jsonData = JSON.parse(contents);
            resolve(jsonData);
        }
      })  
        }
      }) 
    
      
    },
    
  },
  "reporter": 'mochawesome',
    "reporterOptions":{
      "reportDir":"cypress/report/mochawesome-report",
      "overwrite":true,
      "html":true,
      "json":false,
      "charts":true,
      "timestamp":"mmddyyyy_HHMMss"
    }
});
