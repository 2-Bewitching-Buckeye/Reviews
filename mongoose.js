const mongoose = require("mongoose");
const connectionString = "mongodb://localhost/reviews";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Mongoose is running"));



const reviewsSchema = new mongoose.Schema({
	review_id: Number,
	rating: Number,
	summary: String,
	recommend: Boolean,
	body: String,
	reviewer_name: String,
	helpfulness: Number,
  product_id: String,
  photos: Array,
  characteristics:{
		Size: {
			size_id: Number,
			value: mongoose.Decimal128
		      },
		Width: {
			width_id: Number,
			value: mongoose.Decimal128,
		      },
		Comfort: {
			comfort_id: Number,
			value: mongoose.Decimal128
		      }
		}
})






const Review = mongoose.model("Review", reviewsSchema);
//const Photos = mongoose.model("Photos", photosSchema);


//inserting sample data for tables to show.

let review = new Review
review.save('review1')
// let photos = new Photos
// photos.save('photos1')


module.exports = {
  Review,
};