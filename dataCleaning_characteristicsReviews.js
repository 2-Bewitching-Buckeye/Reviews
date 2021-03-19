const fs = require('fs');
const readline = require('readline');
const path = require('path');

// TODO convert filepath to command line arguments
async function checkCharacteristicsReviews() {
  const rl = readline.createInterface({

      input: fs.createReadStream('/Users/tandan/sdc/characteristic_reviews.csv'),
      output: fs.createWriteStream('/Users/tandan/sdc/characreviews_cleanedtwo.csv'),
      crlfDelay: Infinity
    });

  let max = 0;
  let counter = 0;
  rl.on('line', (line) => {
    const row = line.split(',');
    while (line != null) {
      if (row.length !== 4) return;
      if (isNaN(row[0]) || row[0] < 1) return;
      if (isNaN(row[1]) || row[1] < 1) return;
      if (isNaN(row[2]) || row[2] < 1) return;
      if (isNaN(row[3]) || row[3] > 5 || row[3] < 0) return;
      if (counter === 5000000) return;
      rl.output.write(`${row}\n`)
      counter++
      return
    }
  });
}



checkCharacteristicsReviews();