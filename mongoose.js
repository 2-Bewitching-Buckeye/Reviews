const mongoose = require("mongoose");
const connectionString = "mongodb://localhost/reviews";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Mongoose is running"));




const listingSchema= new mongoose.Schema({
	product_id: Number,
	page: Number,
	count: Number,
	results: Array

})

const reviewsSchema = new mongoose.Schema({
	review_id: Number,
	rating: Number,
	summary: String,
	recommend: Boolean,
	body: String,
	reviewer_name: String,
	helpfulness: Number,
})

const photosSchema = new mongoose.Schema({
	photo_id: Number,
	url: String
})

const metaSchema = new mongoose.Schema({
	product_id: Number,
	ratings: {
		0: Number,
		2: Number,
		3: Number,
		4: Number,
		5: Number
	},
	recommend: {
		0: Number,
		2: Number,
		3: Number,
		4: Number,
		5: Number
	},
	characteristics: {
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

const Listing = mongoose.model("Listing", listingSchema);
const Review = mongoose.model("Review", reviewsSchema);
const Photos = mongoose.model("Photos", photosSchema);
const Meta = mongoose.model("Meta", metaSchema);

//inserting sample data for tables to show.
let listing = new Listing
listing.save('listing1')
let review = new Review
review.save('review1')
let photos = new Photos
photos.save('photos1')
let meta = new Meta
meta.save('meta1')

module.exports = {
  Listing,
  Review,
  Photos,
  Meta
};