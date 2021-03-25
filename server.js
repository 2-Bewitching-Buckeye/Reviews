const express = require('express');
const app = express();
const port = 3000
const db = require('./db/config.js')
require('newrelic');
const controller = require('./controller/controller.js')
app.use(express.json())

app.get('/api/reviews/', controller.getReviews);
// app.get('/api/getMeta', controller.getMeta)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})