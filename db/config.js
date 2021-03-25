const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'reviews'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to sql reviews service');
  }
})

module.exports = connection;