const model = require('../model/model.js')

module.exports = {
  getReviews: (req, res) => {
    const product_id = 414
    const page = req.query.page;
    const count = req.query.count;
    model.getReviews(product_id, (err, data) => {
      if(err) {
        res.sendStatus(404)
      } else {
        const reviews = {};
        const results = [];
        reviews['product'] = data[0].product_id;
        reviews['page'] = page
        reviews['count'] = count
        reviews['results'] = results;
        for (let review of data) {
          const eachReview = {};
          eachReview['review_id'] = review.id
          eachReview['rating'] = review.rating
          eachReview['date'] = review.date
          eachReview['summary'] = review.summary
          eachReview['body'] = review.body
          eachReview['recommend'] = review.recommend
          eachReview['reported'] = review.reported
          eachReview['reviewer_name'] = review.reviewer_name
          eachReview['reviewer_email'] = review.reviewer_email
          eachReview['response'] = review.response
          eachReview['helpfulness'] = review.helpfulness
          eachReview['photos'] = [review.photo_link]
          results.push(eachReview)
        }
        res.send(reviews)
      }
    })
  // },
  // getMeta: ((req, res) => {
  //   const product_id = req.query.product_id;
  //   const metaReview = {}
  //   metaReview['product_id'] = product_id;
  //   model.reviewsMeta.getRatings(product_id, (err, data) => {
  //     if (err) {
  //       res.status(404)
  //     } else {
  //       metaReview['ratings'] = data[0]['AVG(rating)'];
  //       metaReview['recommend'] = {};
  //       metaReview['recommend']['true'] = data[0]['SUM(recommend = 1)']
  //       metaReview['recommend']['false'] = data[0]['SUM(recommend = 0)']
  //       models.reviewsMeta.getCharacteristics(product_id, (err, data) => {
  //         metaReview['characteristics'] ={}
  //         if (err) {
  //           res.status(404)
  //         } else {
  //           for (let item of data) {
  //             const itemValue = {}
  //             itemValue[item.id] = item.value;
  //             metaReview['characteristics'][item.value] = itemValue
  //           }
  //           res.send(metaReview)
  //         }
  //       })

  //     }
  //   })
  // })
}
}