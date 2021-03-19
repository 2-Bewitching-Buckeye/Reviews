
const fs = require('fs');
const readline = require('readline');
const path = require('path');

// TODO convert filepath to command line arguments
async function checkProducts() {
  const rl = readline.createInterface({

      input: fs.createReadStream('/Users/tandan/sdc/product.csv'),
      output: fs.createWriteStream('/Users/tandan/sdc/product_cleaned.csv'),
      crlfDelay: Infinity
    });

  let max = 0;
  let counter = 0;
  rl.on('line', (line) => {

    const row = line.split(',');
    while (line != null) {
      if (isNaN(row[0]) || row[0] < 1) return;
    rl.output.write(`${row[0]}\n`)
      counter++
      return
    }
  });
}



checkProducts();
