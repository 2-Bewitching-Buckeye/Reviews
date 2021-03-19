
const fs = require('fs');
const readline = require('readline');
const path = require('path');

// TODO convert filepath to command line arguments
async function checkPhotos() {
  const rl = readline.createInterface({

      input: fs.createReadStream('/Users/tandan/sdc/reviews_photos.csv'),
      output: fs.createWriteStream('/Users/tandan/sdc/reviews_photos_cleaned.csv'),
      crlfDelay: Infinity
    });

  let max = 0;
  let counter = 0;
  rl.on('line', (line) => {

    const row = line.split(',');
    while (line != null) {
      if (row.length !== 3) return;
      if (isNaN(row[0]) || row[0] < 0) return;
      if (isNaN(row[1]) || row[1] < 0) return;

      if (row[2] === "") return;
      rl.output.write(`${row}\n`)
      counter++
      return
    }
  });
}



checkPhotos();
