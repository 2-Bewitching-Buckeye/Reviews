const db = require('../db/config.js')


module.exports = {
  getReviews: (product_id, callback) => {
    // console.log(product_id)
    db.query(`SELECT * from reviews  INNER JOIN photos ON photos.review_id = reviews.review_id WHERE reviews.product_id=${product_id} AND reviews.reported = false ORDER BY DATE DESC` , (err, data) => {
      if (err) {
        callback(err)
      } else {
       callback(null, data)

      }

    })
  // },

  // getRatings: (product_id, callback) => {
  //   const queryString = `SELECT AVG(rating), SUM(recommend = 1), SUM(recommend = 0) FROM reviews WHERE product_id = ${product_id}`;

  //   db.query(queryString, (err, results) => {
  //     if (err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // }
}
}