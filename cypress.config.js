// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     // baseUrl: 'https://www.saucedemo.com/'
//     }
// });


const { defineConfig } = require("cypress"); 
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readExcel({ filePath, sheetName }) {
          const fullPath = path.resolve(__dirname, filePath);
          const fileBuffer = fs.readFileSync(fullPath);
          const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
          const sheet = workbook.Sheets[sheetName];
          const jsonData = xlsx.utils.sheet_to_json(sheet);
          return jsonData;
        }
      });
    },
    // baseUrl: 'https://www.saucedemo.com/'
  }
});
