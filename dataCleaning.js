
const fs = require('fs');
const readline = require('readline');
const path = require('path');

// TODO convert filepath to command line arguments
 function checkReviews() {
  const rl = readline.createInterface({

      input: fs.createReadStream('/Users/tandan/sdc/reviews.csv'),
      output: fs.createWriteStream('/Users/tandan/sdc/reviews_cleaned.csv'),
      crlfDelay: Infinity
    });

  let max = 0;
  let counter = 0;
  rl.on('line', (line) => {

    const row = line.split(',');
    while (line != null) {
    if (row.length !== 12) return;
    if (row[4].length > 60) return;
    // if (row[5].length > 1000) return;
    if (row[9].length > 30) return
    if (row[10].length > 125) return;
    console.log(row[9])
    console.log(row)
    rl.output.write(`${row}\n`)
      counter++
      return
    }
  });
}



checkReviews();
