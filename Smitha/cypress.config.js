const { defineConfig } = require("cypress");
const excel=require("xlsx");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        generateJsonFromExcel(arg1,arg2){
      const wb=excel.readFile(arg1,{dateNF:"mm/dd/yyyy"})
      const ws=wb.Sheets[arg2]
      return excel.utils.sheet_to_json(ws,{raw:false})
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
