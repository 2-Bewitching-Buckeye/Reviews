const fs = require('fs');
const readline = require('readline');
const path = require('path');

// TODO convert filepath to command line arguments
async function checkCharacteristics() {
  const rl = readline.createInterface({

      input: fs.createReadStream('/Users/tandan/sdc/characteristics.csv'),
      output: fs.createWriteStream('/Users/tandan/sdc/charac_cleaned.csv'),
      crlfDelay: Infinity
    });

  let max = 0;
  let counter = 0;
  const characteristics = [`"Fit"`, `"Length"`, `"Comfort"`, `"Quality"`,`"Size"`, `"Width"`];
  rl.on('line', (line) => {
    const row = line.split(',');
    while (line != null) {
      if (row.length !== 3) return;
      if (isNaN(row[1])) return;
      if (!characteristics.includes(row[2])) return;
      rl.output.write(`${row}\n`)
      counter++
      return
    }
  });
}



checkCharacteristics();